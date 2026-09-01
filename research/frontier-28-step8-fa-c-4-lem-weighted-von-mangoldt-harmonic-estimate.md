# Final-adjudicator evidence — `lem-weighted-von-mangoldt-harmonic-estimate`

Disposition: `repaired`.

## Material reviewed

I independently read the current lemma and every declared dependency, the
number-theory A/B page pair, the controlling NT-11 design block, batch-6
manifest, coverage notes and proof contract, the run-wide contract and Alpha
risk review, both frozen judge rejections and adjudications, both defect-ledger
rows, and Alpha's two repairs.

## Mathematical basis

Both Alpha repairs are necessary and correct. The divisor identity is an
identity over positive divisors because `\Lambda` is an arithmetic function on
positive integers; [L1] now preserves `d>0`. Step 1.1 now sums only over
positive integers `1\le m\le x`, so `\log m` is defined and the summation set
is finite. Reversing the finite sum then gives exactly

`\sum_{1\le m\le x}\log m
 =\sum_{1\le d\le x}\Lambda(d)\lfloor x/d\rfloor`.

The floor error is uniform: `|\lfloor x/d\rfloor-x/d|<1`. Since
`\Lambda(d)\ge0`, its total contribution is bounded by
`\sum_{d\le x}\Lambda(d)=\psi(x)`. The current prime-power comparison and
theta linear bound give `\psi(x)=O(x)` without using the prime number theorem.
Consequently

`\sum_{m\le x}\log m=xS(x)+O(x)`, where
`S(x)=\sum_{d\le x}\Lambda(d)/d`.

The cited summatory-logarithm estimate is
`x\log x-x+O(\log x)`. Comparing the two formulas and dividing by `x\ge2`
gives `S(x)=\log x+O(1)`. All big-O constants are uniform for real `x\ge2`,
and the exact floor cutoff handles nonintegral `x`.

I independently repaired the declared proof route. The current proof does not
use `lem-harmonic-sum-asymptotic`, so I removed that stale dependency. The
batch manifest, meanwhile, still listed only the original four-dependency
scaffold and omitted the Chebyshev/psi chain that actually proves the
load-bearing `\psi(x)=O(x)` bound. I synchronized its strategy and dependency
list to the seven dependencies used by the current item and proof contract.
The Alpha risk review remains accurate and complete for that route.

## Source verification

Source status: `familiar`. No external verification was needed. The divisor
sum reversal, the uniform floor error, the deduction `\psi(x)=O(x)` from the
displayed Chebyshev dependencies, and the final big-O algebra are standard and
were all checked directly from the current local statements and proofs.

## Focused checks

- `precheck` on the lemma and five proof-bearing dependencies: 6 checked, 0
  failing.
- strict batch-6 proof contract: 21/21 checked, 0 errors or warnings.
- batch-6 content policy: 25 scoped items, 0 errors or warnings.
- plan validation after dependency synchronization: acyclic and consistent.
- renderer math/frontmatter check on the lemma: clean.
- run-wide risk report: `HIGH 5`, complete Alpha review, 0 report errors.
- `git diff --check` on the item, manifest, and contract carriers: clean.
