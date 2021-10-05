/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Widget from './engine/widget';

export default function app() {
  const widget = new Widget();
  widget.init();
}

app();