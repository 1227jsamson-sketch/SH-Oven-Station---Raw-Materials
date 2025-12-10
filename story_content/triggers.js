function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iOuj2oH5Ep":
        Script1();
        break;
      case "6hED5m6EgUG":
        Script2();
        break;
      case "5g2ZMUeX9Zt":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6R5kNcBdqDp');
const duration = 750;
const easing = 'ease-out';
const id = '5fqXWdcfwJh';
const growAmount = 0.2;
const delay = 11500;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6R5kNcBdqDp');
const duration = 750;
const easing = 'ease-out';
const id = '66PH7za0azj';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6R5kNcBdqDp');
const duration = 750;
const easing = 'ease-out';
const id = '5fqXWdcfwJh';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
