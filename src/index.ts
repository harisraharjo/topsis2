import Topsis, { CriteriaAttribute } from './Topsis.js';

export const rank = Topsis.rank.bind(Topsis);
export const best = Topsis.best.bind(Topsis);
export type { Topsis, CriteriaAttribute };

export default Topsis;
