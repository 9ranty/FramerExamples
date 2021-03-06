/* Made with Framer
by Benjamin den Boer
www.framerjs.com */

/* Sketch Import */
var avatar, headerMask, mask, maskY, sketch;

sketch = Framer.Importer.load("imported/profile");

/* Mask for the header */

headerMask = new Layer({
  width: Screen.width,
  height: 800,
  backgroundColor: "transparent",
  clip: true
});

/* Mask for the avatar */

mask = new Layer({
  width: 1000,
  height: 1000,
  backgroundColor: "transparent",
  borderRadius: 500,
  y: sketch.header.height - 100,
  superLayer: headerMask,
  scale: 0.2,
  originY: 0,
  clip: true
});

/* Create avatar */

avatar = new Layer({
  image: "images/avatar.png",
  width: mask.width,
  height: mask.height,
  superLayer: mask
});

/* Hierarchy and placement */

maskY = mask.y;

mask.x = Align.center;

/* Defining states and animationOptions */

sketch.content.states.add({
  hide: {
    opacity: 0
  }
});

headerMask.states.add({
  move: {
    y: 120
  }
});

mask.states.add({
  grow: {
    scale: 1.1,
    y: maskY - 420
  }
});

sketch.content.states.animationOptions = {
  curve: "ease",
  time: 0.3
};

headerMask.states.animationOptions = {
  curve: "spring(150, 20, 0)"
};

mask.states.animationOptions = {
  curve: "spring(300, 30, 0)"

  /* On click, toggle states */
};

avatar.on(Events.Click, function() {
  headerMask.states.next();
  mask.states.next();
  return sketch.content.states.next();
});
