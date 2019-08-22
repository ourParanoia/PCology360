// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    500, /* width */
    400, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('TourismVR', { /* initial props */ }),
    introPanel
  );

  storiesPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  storiesPanel.setAngle(
    Math.PI / 2,  /* yaw angle */
    0 /* pitch angle */
  );

  interestingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  interestingPanel.setAngle(
    -Math.PI / 2, /* yaw angle */
    0 /* pitch angle */
  );

  tipsPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  tipsPanel.setAngle(
    Math.PI / 4, /* yaw angle */
    0 /* pitch angle */
  );

  developmentPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  developmentPanel.setAngle(
    -Math.PI / 4, /* yaw angle */
    0 /* pitch angle */
  );

  photoshootingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  photoshootingPanel.setAngle(
    -Math.PI , /* yaw angle */
    0 /* pitch angle */
  );

  newsPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  newsPanel.setAngle(
    Math.PI, /* yaw angle */
    0 /* pitch angle */
  );


  // Load the initial environment
  r360.compositor.setBackground('./static_assets/final1.png', 
  {
    format: '2D',
  } );
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }
  
  resizeSurface(width, height, id) {
    if (id === 'interesting') {
      interestingPanel.resize(width, height);
    } else if (id === 'tips') {
      tipsPanel.resize(width, height);
    } else if (id === 'development') {
      developmentPanel.resize(width, height);
    } else if (id === 'stories') {
      storiesPanel.resize(width, height);
    } else if (id === 'news') {
      newsPanel.resize(width, height);
    }
    else if (id === 'photoshooting') {
      photoshootingPanel.resize(width, height);
    }
  }

  start() {
    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'stories',
                                     text: 'Browse stories.' }),
      storiesPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'development',
                                     text: 'Browse development.'}),
      developmentPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'interesting',
                                     text: 'Browse interesting.'}),
      interestingPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'tips',
                                     text: 'Browse tips.' }),
      tipsPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'news',
                                     text: 'Browse news.' }),
      newsPanel,
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', { id: 'photoshooting',
                                     text: 'Browse photoshooting.' }),
      photoshootingPanel,
    );

    r360.detachRoot(introRoot);
  }
}


window.React360 = {init};
