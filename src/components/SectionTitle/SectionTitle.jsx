import { Title } from './SectoinTitle.styled';

export default function SectionTitle({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}
