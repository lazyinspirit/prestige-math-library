## Your cluster — `ftc-arc`: the FTC refinements pair and the arc-length pair

Pages: `the-fundamental-theorems-of-calculus` (A, 10 items, order 239) and its
`-examples` (B, 6); `arc-length-and-rectifiable-curves` (A, 15 items, order 181)
and its `-examples` (B, 8).

The independent reader (reader-1) found **nine fatal and four nonfatal defects**
here and repaired all of them. Two of its actions need adversarial reading above
all others.

### Priority 1 — a CHANGED CLAIM: `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity`

The item previously set `f(0) = 1` and concluded `F'(0) = 0 ≠ f(0)`. The reader
judged that this contradicted the item's own title and its place on the page, and
**changed the construction**: the spike set is now `{2^{-n} : n ≥ 0}` only, so
`f(0) = 0`, and the item now proves `F'(0) = f(0) = 0` at a point where `f` is
discontinuous.

**Test the new Statement before reading its proof.** Is `f` — the indicator of
`{1, 1/2, 1/4, …}` on `[0,1]` — genuinely Riemann integrable with integral zero
on every subinterval? Is `F ≡ 0`? Is `F'(0) = 0` as a one-sided derivative at the
left endpoint of `[0,1]`, and does the library's `def-derivative` actually define
a derivative at an endpoint of the domain (the proof says "relative derivative" —
check that phrase is the library's, not invented)? Is `f` discontinuous at `0`?
Then check step 1.2's partition construction: the covering intervals around the
finitely many spikes `1, 1/2, …, 2^{-(N-1)}` must have endpoints that are **not**
themselves spikes, or the complementary closed intervals have supremum `1` and
the upper-sum estimate fails. Say whether the proof secures that or leaves it
implicit.

### Priority 2 — a NEW ITEM built by the reader: `cex-the-koch-curve-is-not-rectifiable`

This item did not exist until the step-6 reader authored it, so **no independent
party has ever read it**. It is the only item in the run in that position. Read
every line.

Verify, from scratch and by your own computation:

- Step 1.1: `R(x,y) = (x/2 − √3y/2, √3x/2 + y/2)` and the two claimed identities
  `‖Rv‖ = ‖v‖` and `‖v − Rv‖ = ‖v‖`. The second is what makes the erected
  triangle equilateral; if it fails the construction is not the Koch curve.
- L2 cites `thm-of-square-roots` for the existence of `√3`. **That theorem is
  stated for a complete ordered field.** Does the item discharge that hypothesis
  for `ℝ`, or apply the theorem with the hypothesis unmentioned? Reader-5 treated
  exactly this omission as fatal in five other items of this run; judge whether it
  is fatal, nonfatal, or already discharged here, and say which.
- Step 3.1: `4^n` edges of length `3^{-n}`, so `L(κ_n) = (4/3)^n`. Check the four
  replacement edges really all have length `‖v‖/3` — including the third,
  `(v − Rv)/3`.
- Step 4.1: the node-difference norms `0, 3^{-n}/12, 3^{-n}/2, 3^{-n}/12, 0`, the
  claim that an affine difference attains its sup at an endpoint, and the
  telescoped bound `3/(4·3^n)`. Is the middle bound `3^{-n}/2` correct, and is
  the "affine on each intervening interval" claim true for **both** paths on the
  same subinterval?
- Step 6.1: the retained-vertex argument. `σ_n ⊂ σ_{n+1}` must actually hold under
  the parametrisation `(4j+r)/4^{n+1}`, and `κ(j/4^n) = κ_n(j/4^n)` must follow
  from vertices being *retained at those exact parameters*, not merely as points
  of the trace.
- Step 7.1: three isometric copies and additivity give nonrectifiability of the
  snowflake. Check `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`
  actually states isometry-invariance of length, and that the concatenation
  argument is the right direction (a rectifiable whole has rectifiable parts).
- Every `[F#]` in `L1`–`L7` against its cited item's own Statement. `L4` asserts
  `(4/3)^n → +∞`; confirm the cited lemma states divergence and not merely
  nullity of `(3/4)^n`.

The item's `deps` list is long. Confirm every declared dependency is actually used
and every used fact is actually declared, and that nothing in it reaches a page
later than order 181.

### Priority 3 — the seven other repaired proofs

Each was repaired by replacing a citation the reader judged inaccurate. In every
case, open the **new** target and check the replacement is exactly right, and that
the proof step now has everything it needs:

- `thm-integration-by-parts-with-interior-derivatives` (L2 split: product
  integrability vs. continuous-function integrability, `thm-continuous-implies-integrable`
  added);
- `thm-substitution-with-riemann-integrable-inner-derivative` (same, L3);
- `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators` (same, L2);
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` — the old
  L2 cited `thm-heine-cantor-r`, which is about compact subsets of `ℝ`, for a
  rectangle in `ℝ²`. Now cites `thm-heine-borel-rn` plus `thm-heine-cantor-metric`.
  Check the rectangle is shown closed **and bounded**, that the metric-space
  Heine–Cantor hypothesis (compact metric space) is met, and that the uniform
  continuity obtained is the one the differentiation estimate consumes;
- `lem-arc-length-function-is-continuous-and-nondecreasing` — `lem-variation-additive-on-subintervals`
  added to license `Var_{[u,v]}(γ_j) = V_j(v) − V_j(u)`;
- `thm-every-rectifiable-path-has-an-arc-length-parametrization` — L2 restated to
  the full chord bound. Check the arc-length reparametrisation is well defined
  where the arc-length function is constant, and that the constructed map is
  genuinely a function (single-valued) there;
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` — the partition was rebuilt
  as `0, x_N, …, x_K, 1` after the reader found `2/π ≤ 1` was never licensed.
  Check the rebuilt partition is increasing, lies in `[0,1]`, and that the
  harmonic-tail divergence is cited rather than assumed.

### Also read in full

`rem-ftc-roadmap`, `cor-ftc-integral-function-differentiable-almost-everywhere`,
`thm-newton-leibniz-with-interior-derivative`,
`cor-newton-leibniz-with-finitely-many-exceptional-points`,
`thm-newton-leibniz-with-a-countable-exceptional-set`,
`thm-one-sided-ftc-at-points-with-one-sided-limits`,
`cex-volterra-bounded-derivative-not-riemann-integrable`,
`ex-dense-jump-integrand-with-dense-nondifferentiability`,
`ex-thomae-integral-function-differentiates-through-dense-discontinuities`,
`cex-ae-zero-derivative-does-not-determine-endpoint-change`,
`ex-bounded-discontinuous-derivative-that-is-riemann-integrable`,
`def-path-polygonal-length-and-rectifiability-in-rn`,
`cor-chord-length-is-at-most-arc-length`,
`lem-polygonal-length-is-monotone-under-refinement`,
`thm-rectifiable-iff-coordinate-functions-have-bounded-variation`,
`thm-arc-length-is-additive-over-subintervals`,
`thm-arc-length-is-invariant-under-monotone-reparametrization`,
`prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`,
`thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`,
`thm-c1-paths-have-length-equal-to-the-integral-of-speed`,
`cor-length-of-the-graph-of-a-c1-function`,
`cor-piecewise-c1-paths-have-additive-speed-integral-length`,
`def-arc-length-function`, `cor-regular-c1-paths-have-c1-unit-speed-parametrizations`,
`ex-line-segment-and-polygonal-path-length`, `ex-unit-circle-arc-has-length-theta`,
`ex-v-shaped-path-is-rectifiable-but-not-c1`,
`cex-the-same-trace-can-have-different-path-lengths`,
`cex-arc-length-is-not-continuous-under-uniform-convergence`,
`ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous`.

`thm-newton-leibniz-with-a-countable-exceptional-set` is the strongest claim on
the FTC page; check its hypotheses very carefully (continuity of the primitive on
the closed interval is essential — without it the statement is false, e.g. a jump
function with zero derivative off a countable set). `cor-ftc-integral-function-differentiable-almost-everywhere`
asserts an a.e. statement — check the library actually has the measure-theoretic
vocabulary its Statement uses, and that the cited source supplies it.
