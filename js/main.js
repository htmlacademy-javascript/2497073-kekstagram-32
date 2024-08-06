import './util.js';
import { getPhotosGenerator } from './data.js';
import { showGallery } from './showGallery.js';

showGallery(getPhotosGenerator());
