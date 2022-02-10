class ProgressBars{constructor(){"undefined"!=typeof ProgressBar?(this._initProgressLine(),this._initProgressCircle(),this._initProgressSemiCircle(),this._initProgressSquare(),this._initProgressColors()):console.log("ProgressBar is null!")}_initProgressLine(){document.querySelector("#progressLineBasic")&&new ProgressBar.Line(document.querySelector("#progressLineBasic"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:0}).animate(.75),document.querySelector("#progressLineAnimated")&&new ProgressBar.Line(document.querySelector("#progressLineAnimated"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500}).animate(.75),document.querySelector("#progressLinePercent")&&new ProgressBar.Line(document.querySelector("#progressLinePercent"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500,step:function(r,e){e.setText(Math.round(100*e.value())+"%")}}).animate(.75),document.querySelector("#progressLineValue")&&new ProgressBar.Line(document.querySelector("#progressLineValue"),{color:Globals.primary,trailColor:Globals.separator,val:15,max:20,duration:500,step:function(r,e){e.setText(Math.round(20*e.value())+"/20")}}).animate(.75)}_initProgressCircle(){document.querySelector("#progressCircleBasic")&&new ProgressBar.Circle(document.querySelector("#progressCircleBasic"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:0}).animate(.75),document.querySelector("#progressCircleAnimated")&&new ProgressBar.Circle(document.querySelector("#progressCircleAnimated"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500}).animate(.75),document.querySelector("#progressCirclePercent")&&new ProgressBar.Circle(document.querySelector("#progressCirclePercent"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500,step:function(r,e){e.setText(Math.round(100*e.value())+"%")}}).animate(.75),document.querySelector("#progressCircleValue")&&new ProgressBar.Circle(document.querySelector("#progressCircleValue"),{color:Globals.primary,trailColor:Globals.separator,val:15,max:20,duration:500,step:function(r,e){e.setText(Math.round(20*e.value())+"/20")}}).animate(.75)}_initProgressSemiCircle(){document.querySelector("#progressSemiCircleBasic")&&new ProgressBar.SemiCircle(document.querySelector("#progressSemiCircleBasic"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:0}).animate(.75),document.querySelector("#progressSemiCircleAnimated")&&new ProgressBar.SemiCircle(document.querySelector("#progressSemiCircleAnimated"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500}).animate(.75),document.querySelector("#progressSemiCirclePercent")&&new ProgressBar.SemiCircle(document.querySelector("#progressSemiCirclePercent"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500,step:function(r,e){e.setText(Math.round(100*e.value())+"%")}}).animate(.75),document.querySelector("#progressSemiCircleValue")&&new ProgressBar.SemiCircle(document.querySelector("#progressSemiCircleValue"),{color:Globals.primary,trailColor:Globals.separator,val:15,max:20,duration:500,step:function(r,e){e.setText(Math.round(20*e.value())+"/20")}}).animate(.75)}_initProgressSquare(){document.querySelector("#progressSquareBasic")&&new ProgressBar.Square(document.querySelector("#progressSquareBasic"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:0}).animate(.75),document.querySelector("#progressSquareAnimated")&&new ProgressBar.Square(document.querySelector("#progressSquareAnimated"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500}).animate(.75),document.querySelector("#progressSquarePercent")&&new ProgressBar.Square(document.querySelector("#progressSquarePercent"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:500,step:function(r,e){e.setText(Math.round(100*e.value())+"%")}}).animate(.75),document.querySelector("#progressSquareValue")&&new ProgressBar.Square(document.querySelector("#progressSquareValue"),{color:Globals.primary,trailColor:Globals.separator,val:15,max:20,duration:500,step:function(r,e){e.setText(Math.round(20*e.value())+"/20")}}).animate(.75)}_initProgressColors(){document.querySelector("#progressColorsPrimary")&&new ProgressBar.SemiCircle(document.querySelector("#progressColorsPrimary"),{color:Globals.primary,trailColor:Globals.separator,val:75,max:100,duration:0}).animate(.75),document.querySelector("#progressColorsSecondary")&&new ProgressBar.SemiCircle(document.querySelector("#progressColorsSecondary"),{color:Globals.secondary,trailColor:Globals.separator,val:75,max:100,duration:500}).animate(.75),document.querySelector("#progressColorsTertiary")&&new ProgressBar.SemiCircle(document.querySelector("#progressColorsTertiary"),{color:Globals.tertiary,trailColor:Globals.separator,val:75,max:100,duration:500,step:function(r,e){e.setText(Math.round(100*e.value())+"%")}}).animate(.75),document.querySelector("#progressColorsQuaternary")&&new ProgressBar.SemiCircle(document.querySelector("#progressColorsQuaternary"),{color:Globals.quaternary,trailColor:Globals.separator,val:15,max:20,duration:500,step:function(r,e){e.setText(Math.round(20*e.value())+"/20")}}).animate(.75)}}