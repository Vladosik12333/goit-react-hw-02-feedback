import { Title } from './SectoinTitle.styled';
import propTypes from 'prop-types';

export default function SectionTitle({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
