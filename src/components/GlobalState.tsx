import {
  createGlobalState,
  useGlobalState,
} from 'microsite/global';

const state = createGlobalState({
  count: 0,
});

export const GlobalState = () => {
  const { count } = useGlobalState(state);

  return (
    <p>
      Count: { count }<br />
      <button onClick={ () => state.count++ }>+</button>
    </p>
  );
};
