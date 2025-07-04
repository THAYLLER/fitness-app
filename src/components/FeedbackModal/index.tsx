import React from 'react';
import { Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Overlay, Card, Message } from './style';

export type FeedbackVariant = 'success' | 'error' | 'warning' | 'info';

interface Props {
  visible: boolean;
  variant?: FeedbackVariant;
  message: string;
  onClose: () => void;
}

export default function FeedbackModal({ visible, variant = 'info', message, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Overlay onTouchEnd={onClose}>
        <Card variant={variant}>
          <Feather
            name={variant === 'success' ? 'check-circle' : variant === 'error' ? 'x-circle' : variant === 'warning' ? 'alert-circle' : 'info'}
            size={48}
            color="#047857"
          />
          <Message>{message}</Message>
        </Card>
      </Overlay>
    </Modal>
  );
} 