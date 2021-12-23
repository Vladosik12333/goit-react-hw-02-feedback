import { Message } from './Notification.styled';
import propTypes from 'prop-types';

export default function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
