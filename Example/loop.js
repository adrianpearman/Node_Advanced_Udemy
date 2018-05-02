// pseudoCoding a event loop
// new timers, tasks, operations are recorded from myfile running
const pendingTimers = []
const pendingOSTasks = [] 
const pendingOperations = []

// node myFile.js
myFile.runContents();

function shouldContinue(){
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending operating tasks (HTTP requests or server requests)
  // Check three: Any pending long runing operation? (like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// entire body executes in one 'tick'
while(shouldContinue()){
// 1: Node looks at pending timers and see if any functions are ready to be called
// 2: Node looks at pendingOSTasks and pendingOPerations and calls relevant callbacks
// 3: Pause execution. Continue when...
//    a new pendingOSTask is done
//    a new pendingOperation is document
//    a timer is about to be complete
// 4: Looks at pending timers. Calls any setImmediate functions
// 5: handle any close events
}

// exit back to terminal