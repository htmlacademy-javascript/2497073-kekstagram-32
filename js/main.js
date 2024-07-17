import './util.js';
import { getPhotosGenerator } from './data.js';
import { generatorMiniatures } from './miniatures.js';

generatorMiniatures(getPhotosGenerator());
