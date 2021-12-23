import { List, Item } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
