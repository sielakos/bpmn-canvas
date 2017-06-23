const Viewer = require('./CustomViewer');
const simpleBpmn = require('./simple-bpmn');

const container = document.createElement('div');

container.style.width = '100%';
container.style.height = '100%';
container.style.position = 'absolute';

document.body.appendChild(container);

const viewer = new Viewer({
  container
});

viewer.importXML(simpleBpmn, error => {
  if (error) {
    console.error(error);
  }
});
