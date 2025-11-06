import MixDesignTable from '../MixDesignTable';
import { standardMixDesigns } from '@shared/schema';

export default function MixDesignTableExample() {
  return <MixDesignTable designs={standardMixDesigns} />;
}
