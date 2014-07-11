/* Background, Import, Position and Animation Defaults ––––––––––––––––––– */
var albums, bg, colors, count, layerGroup, _i, _j;

bg = new BackgroundLayer({
  backgroundColor: "#673EBA"
});

layerGroup = Framer.Importer.load("imported/AlbumAnimation");

layerGroup.View.shadowY = 3;

layerGroup.View.shadowBlur = 15;

layerGroup.View.shadowColor = "rgba(0, 0, 0, 0.6)";

layerGroup.View.clip = true;

layerGroup.View.center();

Framer.Defaults.Animation = {
  curve: "spring",
  curveOptions: {
    tension: 260,
    friction: 30,
    velocity: 0,
    tolerance: 0.01
  }
};

/* Album & Color Start States –––––––––––––––––––––––––––––––––––––––––––– */

for (count = _i = 1; _i <= 6; count = ++_i) {
  albums = layerGroup["Album" + count];
  albums.states.add({
    start: {
      y: 640,
      opacity: 0
    }
  });
  albums.states.switchInstant("start");
}

for (count = _j = 1; _j <= 4; count = ++_j) {
  colors = layerGroup["Color" + count];
  colors.states.add({
    start: {
      opacity: 0
    }
  });
  colors.states.switchInstant("start");
}

/* Album Animation ––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

Utils.delay(1, function() {
  var timeFactor;
  timeFactor = 0.1;
  Utils.delay(1 * timeFactor, function() {
    return layerGroup.Album1.states.next();
  });
  Utils.delay(0 * timeFactor, function() {
    return layerGroup.Album2.states.next();
  });
  Utils.delay(3 * timeFactor, function() {
    return layerGroup.Album3.states.next();
  });
  Utils.delay(2 * timeFactor, function() {
    return layerGroup.Album4.states.next();
  });
  Utils.delay(5 * timeFactor, function() {
    return layerGroup.Album5.states.next();
  });
  Utils.delay(4 * timeFactor, function() {
    return layerGroup.Album6.states.next();
  });
  Utils.delay(7 * timeFactor, function() {
    return layerGroup.Color1.states.next();
  });
  Utils.delay(6 * timeFactor, function() {
    return layerGroup.Color2.states.next();
  });
  Utils.delay(9 * timeFactor, function() {
    return layerGroup.Color3.states.next();
  });
  return Utils.delay(8 * timeFactor, function() {
    return layerGroup.Color4.states.next();
  });
});
