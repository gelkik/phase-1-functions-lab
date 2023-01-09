
function distanceFromHqInBlocks(block){
    if (block >= 42){
        return block - 42;
    }

    else if (block < 42){
        return 42 - block;
    }
}

function distanceFromHqInFeet(feet){
    if (feet >= 42){
        return (feet - 42)*264;
    }

    else if (feet < 42){
        return (42 - feet)*264;
    }
}

function distanceTravelledInFeet(start,destination){
    if (destination>=start){
        return (destination - start)*264;
    }
    else if (destination<start){
        return (start - destination)*264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);

    if (distance <= 400 ){
        return 0;
    }

    else if (distance < 2000){
        return (distance-400)*0.02;
    }

    else if (distance > 2000 && distance < 2500){
        return 25;
    }

    else if (distance >= 2500){
        return "cannot travel that far";
    }
}