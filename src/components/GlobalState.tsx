import {
  createGlobalState,
  useGlobalState,
} from 'microsite/global';
import { withHydrate } from 'microsite/hydrate';

const state = createGlobalState({
  count: 0,
});

const GlobalState = withHydrate(() => {
  const { count } = useGlobalState(state);

  return (
    <p>
      Count: { count }<br />
      <button onClick={ () => state.count++ }>+</button>
    </p>
  );
});

export default GlobalState;
