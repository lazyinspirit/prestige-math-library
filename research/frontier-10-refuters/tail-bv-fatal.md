
## Your cluster — `bv-fatal`: the two repaired fatal proofs in bounded variation

Pages: `bounded-variation-and-riemann-stieltjes` (A, 32 items) and its
`-examples` (B, 12), plus the `improper-integrals` pair.

The independent reader found **two fatal defects** and rewrote both proofs. You
are checking the rewrites.

**F1 — `lem-bv-functions-are-regulated` had no licensed finite partition.** The
original step took separate left and right one-sided small-oscillation
neighbourhoods at a point and claimed that shrinking them produced an **open
cover** to which Heine–Borel applied. At a jump discontinuity there is no
two-sided open neighbourhood of small oscillation, so those one-sided sets are
not an open cover and the later "licensed finite partition" did not exist. The
reader replaced the argument with the standard **supremum-of-reachable-endpoints**
construction: prove the supremum is the right endpoint using the two one-sided
limits, then avoid a prescribed countable set by perturbing only
continuity-point breakpoints.

Attack it: does the supremum argument actually **reach** the right endpoint, or
only approach it — i.e. is the sup attained, and is the step at the sup itself
licensed by a *left*-hand limit there? Check the singleton interval $a=b$, the
endpoint values, and the case where the prescribed countable set is dense (so
"perturb only continuity-point breakpoints" must still find room). Is the claim
that a BV function has one-sided limits everywhere itself cited, or assumed?

**F2 — `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` had THREE
independent failures**, and one is the kind that hides:

  (a) the old `[L3]` cited `cor-riemann-stieltjes-integral-bound`, whose
      Statement bounds an **already existing** integral and says nothing about
      differences of arbitrary sums;
  (b) the old `[L4]` asserted convergence of a **Cauchy net**, while
      `thm-cauchy-criterion-via-lub` states only convergence of **Cauchy
      sequences** — a net is not a sequence and the mesh-refinement family is
      genuinely a net;
  (c) the old step asserted integrability of the step approximants without
      controlling local variation at their discontinuities or an endpoint jump
      of the integrator.

The reader's repair derives the sum estimate directly from finite sums and total
variation, makes the approximants continuous at every integrator discontinuity
including endpoints, uses continuity of the variation function on the finitely
many remaining breakpoint neighbourhoods, and **converts the Cauchy family to a
sequential limit** before comparing arbitrary fine sums to it.

The net-versus-sequence conversion is the crux. Verify it rigorously: a
sequential limit along one chosen sequence of partitions does **not** by itself
give the mesh limit over all partitions. Check the proof actually compares an
**arbitrary** sufficiently fine tagged sum to a late term of the chosen sequence,
via a common refinement, with an estimate that does not depend on the chosen
sequence. If that comparison is missing or circular, the repair failed.

The same sequence/net mismatch was flagged as *nonfatal* by the reader at
`thm-riemann-stieltjes-linearity-and-additivity` (F7) and
`thm-young-riemann-stieltjes-existence-rational` (F9). **Judge that
classification yourself** — if either of those repairs has the same gap as F2 in
substance, it is not nonfatal, and say so.

Read every one of these in full:

- `lem-bv-functions-are-regulated`
- `thm-riemann-stieltjes-existence-bv-no-common-discontinuities`
- `thm-riemann-stieltjes-linearity-and-additivity`
- `thm-young-riemann-stieltjes-existence-rational`
- `lem-young-partition-sum-estimate-rational`
- `thm-riemann-stieltjes-darboux-criterion`
- `lem-riemann-stieltjes-refinement-estimate`
- `thm-riemann-stieltjes-existence-continuous-bv`
- `thm-riemann-stieltjes-integration-by-parts`
- `thm-riemann-stieltjes-existence-finitely-discontinuous`
- `thm-riemann-stieltjes-continuous-composition`
- `lem-jumps-of-the-variation-function`
- `thm-jordan-decomposition-for-bv-functions`
- `thm-c1-lipschitz-ac-bv-hierarchy`
