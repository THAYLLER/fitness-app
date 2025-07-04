import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '@services/api';
import * as SecureStore from 'expo-secure-store';
import FeedbackModal, { FeedbackVariant } from '@components/FeedbackModal';

import { Image } from 'react-native';
import Logo from '@assets/images/Logo.png';
import Input from '@components/Input';
import Button from '@components/Button';
import Text from '@components/Text';

import { Container, Footer } from './style';

const Login: React.FC = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ visible: boolean; variant: FeedbackVariant; message: string }>({
    visible: false,
    variant: 'info',
    message: '',
  });

  const loginSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  type LoginData = z.infer<typeof loginSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/login', data);
      const { token, refreshToken } = response.data;

      await SecureStore.setItemAsync('accessToken', token);
      if (refreshToken) {
        await SecureStore.setItemAsync('refreshToken', refreshToken);
      }

      setModal({ visible: true, variant: 'success', message: 'Login realizado com sucesso!' });
    } catch (err: any) {
      setModal({ visible: true, variant: 'error', message: err.message || 'Ocorreu um erro ao realizar o login.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Image source={Logo} style={{ width: 226, height: 226 }} resizeMode="contain" />
      <Text size={36} color={theme.colors.black[900]} weight="bold">Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="E-mail"
            placeholderTextColor={theme.colors.gray[500]}
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange as (text: string) => void}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Senha"
            placeholderTextColor={theme.colors.gray[500]}
            secureTextEntry={!showPassword}
            value={value}
            onChangeText={onChange as (text: string) => void}
            error={errors.password?.message}
          >
            <Feather
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color={theme.colors.gray[500]}
              onPress={() => setShowPassword((prev) => !prev)}
            />
          </Input>
        )}
      />

      <Button title={loading ? 'Aguarde...' : 'Login'} onPress={handleSubmit(onSubmit)} disabled={loading} />
      <Footer>
        <Text size={16}>Não possui conta? </Text>
        <Text size={16} color={theme.colors.blue[700]}>
          Criar conta →
        </Text>
      </Footer>

      <FeedbackModal
        visible={modal.visible}
        variant={modal.variant}
        message={modal.message}
        onClose={() => setModal((m) => ({ ...m, visible: false }))}
      />
    </Container>
  );
};

export default Login; 