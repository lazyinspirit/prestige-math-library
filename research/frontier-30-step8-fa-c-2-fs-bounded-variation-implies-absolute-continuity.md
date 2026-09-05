# Final-adjudicator evidence: `fs-bounded-variation-implies-absolute-continuity`

Disposition: `repaired`.

## Material independently reviewed

I read the current false-statement item and all nine current direct
dependencies; both companion pages; the batch-3 page manifest, coverage and
notes; the batch and merged proof contracts; the current risk report; the
group-c conventions; the impact record; both frozen judge rejections; both
confirmed-fatal Alpha adjudications; and both Alpha repairs.

The first rejection was correct because this library reserves “increasing” for
strict increase, whereas the Cantor function is only nondecreasing. Alpha
correctly repaired the variation argument to use nondecreasingness. The second
rejection was also correct: the pre-repair proof asserted the stage lengths and
Cantor-function increments without carrying the exact construction and digit
interfaces. Alpha correctly added and invoked those dependencies and derived
the data from them.

## Mathematical basis

For a nondecreasing function, every variation sum over a partition telescopes.
The cited Cantor-function theorem gives $c(0)=0$ and $c(1)=1$, so the Cantor
function has total variation $1$.

Iterating the two affine branches of the Cantor construction gives, at stage
$n$, the $2^n$ pairwise disjoint closed intervals indexed by words in
$\{0,2\}^n$, each of length $3^{-n}$. Their total length is $(2/3)^n\to0$.
The endpoints of a word interval have that word followed by all zero digits and
all two digits. The local definition of the Cantor function converts these to
binary tails, so the endpoint increment is
$\sum_{k\ge n}2^{-k-1}=2^{-n}$. Summing over the $2^n$ intervals gives output
increment sum $1$. Taking, for example, $\varepsilon=1/2$, every $\delta>0$
is defeated by a sufficiently large stage: the input-length sum is below
$\delta$, while the output-increment sum is $1$. This is exactly the negation
of the reviewed definition of absolute continuity.

## Independent metadata and contract repair

The repaired item is mathematically correct, but Alpha did not synchronize its
direct carriers. The batch manifest still listed the five pre-repair
dependencies, and both proof contracts still quoted the rejected word
“increasing” and the unsupported pre-repair stage assertion. I synchronized the
manifest strategy and all nine dependencies, regenerated the current
derivations, corrected the endpoint and canonical-family boundary evidence,
and merged the entry into the run-level contract.

The dependency expansion changes the current structural score to high risk
(score 5). I therefore added a complete final-adjudicator risk review recording
the exact nondecreasing, finite-stage, endpoint, and epsilon-delta checks above.
No dependency item was edited, so no owner-prerequisite-repair licence is
required.

## Source status

`familiar`. The Cantor-function counterexample to “BV implies AC,” the finite
stage construction, and the epsilon-delta calculation are standard real
analysis familiar to the final adjudicator. Every nontrivial local interface was
also checked directly in the cited published dependencies. No external source
verification was needed.

## Focused checks on final bytes

- Item precheck: pass (`1 checked, 0 failing`).
- Batch and merged strict proof contracts for this id: pass with zero errors and
  warnings.
- Batch and merged risk reports with `--require-reviewed`: high score 5, zero
  errors.
- Batch manifest dependency check: `33 item(s), 0 normalized, 0 error(s)`.
- Batch content policy: `33 scoped item(s), 0 error(s), 0 warning(s)`.
- Boundary audit with contradicted dispositions fatal: pass; none found.
