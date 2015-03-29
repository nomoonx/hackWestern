/**
 * Created by noMoon on 2015-03-28.
 */

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};
var framelist=[];

var controller = new Leap.Controller(controllerOptions)
    .use('screenPosition')
    .connect()
    .on('frame', function(frame){
        if(frame.hands.length>0){
            framelist.push(frame);
            console.log(framelist.length);
            if(framelist.length==50){
                if(checkRightHandTop(framelist[0],framelist[49])){
                    framelist=[];
                    console.clear();
                }
                framelist.shift();
            }
        }else{
            framelist=[];
        //    hand=frame.hands[0];
        //    finger=hand.fingers[1];
        //    console.log(finger.tipPosition);
        }
    });

var checkTop=function(frame1,frame2){
    firstHand=frame1.hands[0];
    secondHand=frame2.hands[0];
    var flag=true;
    for (var i=0;i<5;i++){
        if(i!=1) {
            for (var j = 0; j < 3; j++) {
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>10){
                    flag=false;
                }
            }
        }else{
            for(var j=0;j<2;j++){
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>10){
                    flag=false;
                }
            }
        }
        console.log(flag);
    }
    if(!(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[2].tipPosition[2]>20)) {
        flag = false;
    }
    console.log(flag);
    return flag;
}

var checkCrawl=function(frame1,frame2){
    firstHand=frame1.hands[0];
    //firstHand.fingers.forEach(function(finger,index){
    //    var position=finger.tipPosition;
    //    var x=position[0];
    //    var y=position[1];
    //    var z=position[2];
    //    console.log("first hand "+finger.type);
    //    console.log(x,y,z);
    //});
    secondHand=frame2.hands[0];
    //secondHand.fingers.forEach(function(finger,index){
    //    var position=finger.tipPosition;
    //    var x=position[0];
    //    var y=position[1];
    //    var z=position[2];
    //    console.log("second hand "+finger.type);
    //    console.log(x,y,z);
    //});
    flag=true;
    for(var i=0;i<5;i++){
        if(Math.abs(firstHand.fingers[i].tipPosition[0]-secondHand.fingers[i].tipPosition[0])>70){
            flag=false;
        }
    }
    if(flag) {
        if (!(secondHand.fingers[0].tipPosition[1] - firstHand.fingers[0].tipPosition[1] > 0 && secondHand.fingers[0].tipPosition[2] - firstHand.fingers[0].tipPosition[2] < 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[1].tipPosition[1] - firstHand.fingers[1].tipPosition[1] < 0 && secondHand.fingers[1].tipPosition[2] - firstHand.fingers[1].tipPosition[2] < 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[2].tipPosition[1] - firstHand.fingers[2].tipPosition[1] < 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[3].tipPosition[1] - firstHand.fingers[3].tipPosition[1] < 0 && secondHand.fingers[3].tipPosition[2] - firstHand.fingers[3].tipPosition[2] > 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[4].tipPosition[2] - firstHand.fingers[4].tipPosition[2] > 0)) {
            flag = false;
        }
    }
    console.log(flag);
    return flag;
}
//

//Leap.loop(controllerOptions, function(frame) {
//    // Body of callback function
//    console.log(frame.hands.length);
//    //frame.hands.forEach(function(hand, index) {
//    //
//    //    //var cat = ( cats[index] || (cats[index] = new Cat()) );
//    //    //cat.setTransform(hand.screenPosition(), hand.roll());
//    //    console.log(hand.type);
//    //    console.log(hand.roll());
//    //});
//    if(frame.hands.length>0){
//        console.log(frame.hands[0].indexFinger.dipPosition);
//        hand=frame.hands[0];
//        finger=hand.indexFinger;
//        var position = finger.mcpPosition;
//        console.log(position);
//        var position = finger.tipPosition;
//        console.log(position);
//        console.log("X: " + position[0] + " Y: " + position[1]);
//        framelist.push(frame);
//        console.log("frameListlength")
//        console.log(framelist.length);
//        hand.fingers.forEach(function(finger,index){
//            var position=finger.tipPosition;
//            var x=position[0];
//            var y=position[1];
//            var z=position[2];
//        });
//    }
//});


controller.setBackground(true);