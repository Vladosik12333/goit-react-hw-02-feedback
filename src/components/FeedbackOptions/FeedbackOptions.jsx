import { List, Item } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const namesButtons = Object.keys(options);
  return (
    <List>
      {namesButtons.map(name => {
        return (
          <Item key={name}>
            <button onClick={() => onLeaveFeedback(name)}>{name}</button>
          </Item>
        );
      })}
    </List>
  );
}
