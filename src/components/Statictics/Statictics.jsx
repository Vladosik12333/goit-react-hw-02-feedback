import { List, Item } from './Statictics.styled';

export default function Statictics({
  good,
  neutral,
  bad,
  total,
  positiveTotal,
}) {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positiveTotal}%</Item>
    </List>
  );
}
