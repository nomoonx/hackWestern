/**
 * Created by noMoon on 2015-03-28.
 */
var checkRightHandCrawlLeft=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
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
    //console.log(flag);
    return flag;
}

var checkRightHandCrawlRight=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for(var i=0;i<5;i++){
        if(Math.abs(firstHand.fingers[i].tipPosition[0]-secondHand.fingers[i].tipPosition[0])>70){
            flag=false;
        }
    }
    if(flag) {
        if (!((firstHand.fingers[0].tipPosition[1] - secondHand.fingers[0].tipPosition[1] >0) && (firstHand.fingers[0].tipPosition[2] - secondHand.fingers[0].tipPosition[2] > 0))) {
            flag = false;
        }
        if (!(firstHand.fingers[1].tipPosition[1] - secondHand.fingers[1].tipPosition[1] >0 && secondHand.fingers[1].tipPosition[2] - firstHand.fingers[1].tipPosition[2] > 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[2].tipPosition[1] - firstHand.fingers[2].tipPosition[1] > 0 && secondHand.fingers[2].tipPosition[2] - firstHand.fingers[2].tipPosition[2] > 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[3].tipPosition[1] - firstHand.fingers[3].tipPosition[1] > 0 )) {
            flag = false;
        }
        if (!(secondHand.fingers[4].tipPosition[1] - firstHand.fingers[4].tipPosition[1] > 0 )) {
            flag = false;
        }
    }
    //console.log(flag);
    return flag;
}

var checkRightHandTop=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=0;i<5;i++){
        if(i!=1||i!=2) {
            for (var j = 0; j < 3; j++) {
                //console.log(Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j]));
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>20){
                    flag=false;
                }
            }
        }
    }
    if(flag){
        //console.log(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[1].tipPosition[2]);
        if(!((secondHand.fingers[1].tipPosition[2]-firstHand.fingers[1].tipPosition[2]>0)&&(secondHand.fingers[1].tipPosition[2]-firstHand.fingers[1].tipPosition[2]+Math.abs(secondHand.fingers[1].tipPosition[1]-firstHand.fingers[1].tipPosition[1]))>20)) {
            flag = false;
        }
    }
        //for (var j = 0; j < 3; j++) {
        //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
        //}

    //console.log(flag);
    return flag;
}

var checkRightHandBot=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=0;i<5;i++){
        if(i!=3||i!=2) {
            for (var j = 0; j < 3; j++) {
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>20){
                    flag=false;
                }
            }
        }
    }
    if(flag){
        console.log(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[2].tipPosition[2]);
        if(!((secondHand.fingers[3].tipPosition[2]-firstHand.fingers[3].tipPosition[2]>0)&&(secondHand.fingers[3].tipPosition[2]-firstHand.fingers[3].tipPosition[2]+Math.abs(secondHand.fingers[3].tipPosition[1]-firstHand.fingers[3].tipPosition[1]))>25)) {
            flag = false;
        }
    }
    //for (var j = 0; j < 3; j++) {
    //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
    //}

    //console.log(flag);
    return flag;
}

var checkRightHandFront=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=1;i<5;i++) {

        for (var j = 0; j < 3; j++) {
            //console.log(Math.abs(firstHand.fingers[i].tipPosition[j] - secondHand.fingers[i].tipPosition[j]));
            if (Math.abs(firstHand.fingers[i].tipPosition[j] - secondHand.fingers[i].tipPosition[j]) > 10) {
                flag = false;
            }
        }
        //console.log(flag);
    }
    if(flag){
        //console.log(firstHand.fingers[0].tipPosition[1]-secondHand.fingers[0].tipPosition[1]);
        if(!(firstHand.fingers[0].tipPosition[1]-secondHand.fingers[0].tipPosition[1]>20)) {
            flag = false;
        }
    }
    //for (var j = 0; j < 3; j++) {
    //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
    //}

    //console.log(flag);
    return flag;
}

var checkRightHandBack=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="right"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="right"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="left"||frame2.hands[0].type=="left"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for(var i=0;i<5;i++){
        if(Math.abs(firstHand.fingers[i].tipPosition[2]-secondHand.fingers[i].tipPosition[2])>70){
            flag=false;
        }
    }
    if(flag) {
        for(var i=0;i<5;i++){
            if(!((secondHand.fingers[i].tipPosition[0]-firstHand.fingers[i].tipPosition[0]>40) && (firstHand.fingers[i].tipPosition[1]-secondHand.fingers[i].tipPosition[1]>40))){
                flag=false;
            }
        }
    }
    //console.log(flag);
    return flag;
}

var checkLeftHandCrawlLeft=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
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
    //console.log(flag);
    return flag;
}

var checkLeftHandCrawlRight=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for(var i=0;i<5;i++){
        if(Math.abs(firstHand.fingers[i].tipPosition[0]-secondHand.fingers[i].tipPosition[0])>70){
            flag=false;
        }
    }
    if(flag) {
        if (!(secondHand.fingers[0].tipPosition[1] - firstHand.fingers[0].tipPosition[1] < 0 )) {
            flag = false;
        }
        if (!(secondHand.fingers[1].tipPosition[1] - firstHand.fingers[1].tipPosition[1] < 0 && secondHand.fingers[1].tipPosition[2] - firstHand.fingers[1].tipPosition[2] > 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[2].tipPosition[1] - firstHand.fingers[2].tipPosition[1] > 0 && secondHand.fingers[2].tipPosition[2] - firstHand.fingers[2].tipPosition[2] > 0)) {
            flag = false;
        }
        if (!(secondHand.fingers[3].tipPosition[1] - firstHand.fingers[3].tipPosition[1] > 0 )) {
            flag = false;
        }
        if (!(secondHand.fingers[4].tipPosition[1] - firstHand.fingers[4].tipPosition[1] > 0 )) {
            flag = false;
        }
    }
    //console.log(flag);
    return flag;
}

var checkLeftHandTop=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=0;i<5;i++){
        if(i!=1||i!=2) {
            for (var j = 0; j < 3; j++) {
                //console.log(Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j]));
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>20){
                    flag=false;
                }
            }
        }
    }
    if(flag){
        //console.log(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[1].tipPosition[2]);
        if(!((secondHand.fingers[1].tipPosition[2]-firstHand.fingers[1].tipPosition[2]>0)&&(secondHand.fingers[1].tipPosition[2]-firstHand.fingers[1].tipPosition[2]+Math.abs(secondHand.fingers[1].tipPosition[1]-firstHand.fingers[1].tipPosition[1]))>20)) {
            flag = false;
        }
    }
    //for (var j = 0; j < 3; j++) {
    //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
    //}

    //console.log(flag);
    return flag;
}

var checkLeftHandBot=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=0;i<5;i++){
        if(i!=3) {
            for (var j = 0; j < 3; j++) {
                if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>5){
                    flag=false;
                }
            }
        }
    }
    if(flag){
        //console.log(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[2].tipPosition[2]);
        if(!(secondHand.fingers[3].tipPosition[2]-firstHand.fingers[3].tipPosition[2]>20)) {
            flag = false;
        }
    }
    //for (var j = 0; j < 3; j++) {
    //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
    //}

    //console.log(flag);
    return flag;
}

var checkLeftHandFront=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for (var i=1;i<5;i++){

        for (var j = 0; j < 3; j++) {
            if (Math.abs(firstHand.fingers[i].tipPosition[j]-secondHand.fingers[i].tipPosition[j])>5){
                flag=false;
            }
        }

    }
    if(flag){
        //console.log(firstHand.fingers[1].tipPosition[2]-secondHand.fingers[2].tipPosition[2]);
        if(!(firstHand.fingers[0].tipPosition[1]-secondHand.fingers[0].tipPosition[1]>20)) {
            flag = false;
        }
    }
    //for (var j = 0; j < 3; j++) {
    //    console.log(Math.abs(firstHand.fingers[1].tipPosition[j]-secondHand.fingers[1].tipPosition[j]));
    //}

    //console.log(flag);
    return flag;
}

var checkLeftHandBack=function(frame1,frame2){
    var firstHand,secondHand;
    if(frame1.hands.length==2&&frame2.hands.length==2){
        firstHand=frame1.hands[0].type=="left"?frame1.hands[0]:frame1.hands[1];
        secondHand=frame2.hands[0].type=="left"?frame2.hands[0]:frame2.hands[1];
    }else{
        if(frame1.hands[0].type=="right"||frame2.hands[0].type=="right"){
            return false;
        }else{
            firstHand=frame1.hands[0];
            secondHand=frame2.hands[0];
        }
    }
    var flag=true;
    for(var i=0;i<5;i++){
        if(Math.abs(firstHand.fingers[i].tipPosition[2]-secondHand.fingers[i].tipPosition[2])>70){
            flag=false;
        }
    }
    if(flag) {
        for(var i=0;i<5;i++){
            if(!((firstHand.fingers[i].tipPosition[0]-secondHand.fingers[i].tipPosition[0]>40) && (secondHand.fingers[i].tipPosition[1]-firstHand.fingers[i].tipPosition[1]>40))){
                flag=false;
            }
        }
    }
    //console.log(flag);
    return flag;
}