function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

function Monday() {
    exerciseRoutine(liftWeights);
}

function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

// INLINE FUNCTION
// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// RETURNING FUNCTIONS
function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}
const afterExercise = morningRoutine(swimFortyLaps);

afterExercise();

// exerciseRoutine(swimFortyLaps);


function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function fn(){
        console.log('hello');
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log('not now');
    }
}
