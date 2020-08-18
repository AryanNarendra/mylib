function bounceOff(target1, target2){
    if (target1.x - target2.x < target2.width/2 + target1.width/2
      && target2.x - target1.x < target2.width/2 + target1.width/2) {
    target1.velocityX = target1.velocityX * (-1);
    }
    if (target1.y - target2.y < target2.height/2 + target1.height/2
    && target2.y - target1.y < target2.height/2 + target1.height/2){
    target1.velocityY = target1.velocityY * (-1);
  }
  }
  function isTouching(obj1,obj2) {
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      return true;
  
  }
  else {
    return false;
  }
}