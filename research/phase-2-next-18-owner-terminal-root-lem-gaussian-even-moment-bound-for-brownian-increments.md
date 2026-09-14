# Owner terminal review: lem-gaussian-even-moment-bound-for-brownian-increments

## Terra rejection

F1 misstates its dependency: $x\mapsto\sqrt h,x$ is not the real scaling $x\mapsto\sqrt h\,x$ (it is ill-typed). Step 3.1 relies on this malformed restatement to identify $N(0,h)$ with $\sqrt hZ$.

## Determination and repair

The rejection is correct. The comma in “x↦√h,x” did not denote a real-valued scaling map and could not support step 3.1. The fact now uses the well-typed map x↦√h x, exactly matching the local definition of N(0,h); the h=0 case remains the Dirac law and the moment computation is unchanged.

The current item and its regenerated batch proof-contract entry pass their exact local checks. This is an owner repair after the one paid Terra rejudge; it creates no additional judge verdict.

## Sources consulted

- items/def-standard-normal-and-normal-laws.md
- https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
