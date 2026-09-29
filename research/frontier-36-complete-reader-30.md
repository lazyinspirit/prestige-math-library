# Step 5a reader report — batch 30

Run: `frontier-36-complete`  
Role: reader (`reader-30`)

## Opened inventory

Read the batch 30 manifest, both pages it lists, and all 39 assigned item files.

Page A: `library/pde/weak-derivatives-and-sobolev-spaces.md`

Items:

- `def-locally-integrable-function-as-a-regular-distribution`
- `def-weak-derivative-of-a-locally-integrable-function`
- `lem-weak-derivative-is-independent-of-lp-representatives`
- `lem-weak-derivatives-are-unique-almost-everywhere`
- `lem-classical-derivatives-are-weak-derivatives`
- `lem-weak-derivative-linearity-locality-and-commutation`
- `thm-zero-weak-gradient-implies-componentwise-constancy`
- `lem-weak-leibniz-rule-with-a-smooth-factor`
- `lem-sobolev-integration-by-parts-for-dual-exponents`
- `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces`
- `lem-sobolev-pasting-across-an-overlap` — repaired
- `def-sobolev-space-wkp-and-its-norm`
- `lem-sobolev-norm-is-well-defined-and-definite`
- `thm-sobolev-spaces-are-banach-spaces`
- `lem-weak-lower-semicontinuity-of-the-sobolev-norm`
- `def-hk-and-hk-zero-notation`
- `thm-hk-is-a-hilbert-space`
- `lem-weak-stability-of-sobolev-derivatives`
- `cor-weak-derivative-operator-is-closed-between-lp-spaces`
- `def-absolute-continuity-on-almost-every-coordinate-line`
- `lem-acl-representatives-reconstruct-weak-gradients-by-fubini`
- `thm-acl-characterisation-of-w-one-p` — repaired
- `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`
- `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions`
- `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions` — repaired
- `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`
- `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p`
- `rem-weak-derivatives-are-distributional-derivatives-with-function-values`

Page B: `library/pde/weak-derivatives-and-sobolev-spaces-examples.md`

Items:

- `ex-absolute-value-has-a-weak-first-derivative`
- `ex-absolute-value-has-dirac-second-distributional-derivative` — repaired
- `cex-step-function-has-no-locally-integrable-weak-derivative`
- `cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set`
- `ex-radial-power-membership-in-w-one-p`
- `cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold`
- `ex-piecewise-c-one-functions-with-matching-traces`
- `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`
- `cex-lp-functions-need-not-have-point-values`
- `cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases`
- `ex-sobolev-truncations-preserve-zero-regions`

Dependency targets opened for the repaired arguments:

- `items/lem-test-function-cutoffs-and-euclidean-localization.md` — compact cutoffs and locally finite subordinate partitions.
- `items/lem-complex-translation-and-approximate-identity-interfaces.md` — mollifier smoothness, derivative formula, and (L^p) approximate-identity convergence.
- `items/lem-complex-integration-by-parts-on-intervals-and-decaying-lines.md` — complex interval integration by parts.
- `items/thm-riesz-fischer-completeness-of-l-p.md` — (L^p) completeness and almost-everywhere convergent subsequences.
- `items/thm-heine-borel-rn.md` — compactness of closed bounded Euclidean sets.
- `items/thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable.md` — measurability of pointwise limits.

The cited Aalto notes were checked at Theorem 2.36, Chapter 2 §2.6, printed pp. 55–59: <https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf>.

## Repairs

1. `items/lem-sobolev-pasting-across-an-overlap.md`, Facts [F1] and step 2.1. The previous [F1] asserted a global two-function partition of unity with both functions compactly supported in an arbitrary open domain. The cited published lemma instead supplies an at-most-countable locally finite subordinate partition. The repair takes the finite subfamily meeting the test support, assigns each function to a cover member, and groups it into two test-dependent compactly supported smooth factors. They sum to one on the test support, which is enough for the global test identity. The proof contract was updated in both the batch and run-wide contract files.

2. `items/thm-acl-characterisation-of-w-one-p.md`, proof steps 1.2–9.1. The previous proof zero-extended arbitrary global Sobolev data across the boundary and treated restrictions of arbitrary ambient test functions as tests on the domain. Those assertions fail when a test crosses the boundary, and the zero extension need not retain its weak derivative. The repair uses an increasing compact exhaustion and smooth cutoffs before extension; tests the cutoff products to verify the extended weak derivatives; mollifies each cutoff; and selects scales with global $L^p$ and local $W^{1,1}$ errors summable. It corrects the exhaustion-set estimate, constructs a finite measurable representative by taking the limit only on the pointwise Cauchy set, and identifies the line derivatives with the weak derivatives. The cutoff and Heine–Borel dependencies and Facts [F19]–[F20] were added. The proof contract was updated in both contract files.

3. `items/ex-absolute-value-has-dirac-second-distributional-derivative.md`, step 2.1. The negative-half integration-by-parts line had the wrong sign before the integral of φ′. It now reads
   
   \[
   \int_{-R}^0(-x)\varphi''(x)\,dx
   = [(-x)\varphi'(x)]_{-R}^0+\int_{-R}^0\varphi'(x)\,dx
   = -R\varphi'(-R)+\varphi(0)-\varphi(-R)=\varphi(0),
   \]
   
   so the two half-intervals contribute $2\varphi(0)$. The proof contract’s step 2.1 description was updated in both contract files.

4. `items/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions.md`, Claim A (step 1.3) and step 8.1. The level-set estimate now chooses $k$ with $1/k\le |g'(x)|/2$ as well as $1/k<\delta$; the old condition did not imply the needed lower bound on $|g'(x)|/2$. The outer-measure estimate now uses the diameter of each preimage-cover intersection and intervals arbitrarily close to that diameter, so it does not assume extrema are attained. Step 8.1 now cites the finite-exponent and $p=\infty$ cases separately. The proof contract was updated in both contract files.

5. `library/pde/weak-derivatives-and-sobolev-spaces.md`, final scope paragraph. It now states that the mollifier argument constructs local smooth approximants for the ACL proof while the page proves no global smooth-density theorem. This avoids suggesting that the page contains no smooth approximation step at all.

No `verification.judge` entry was present in the four repaired draft items or the relevant proof-contract records, so there was no stale judge record to remove. No item was withdrawn.

## Uneditable finding

`library/pde/weak-derivatives-and-sobolev-spaces-examples.md`, lines 16–18, says that “\(|x|^{-a}\), which is in $W^{1,p}$ exactly when $p(a+1)<n$” without stating the example’s hypotheses $a>0$ and domain $B(0,1)$. As written the summary is false: for $a=0$ on the unit ball, $u=1$ belongs to $W^{1,p}$ for every finite $p$, including $p\ge n$. This is a B-page prose defect and was not editable in this dispatch. It is the sole finding in the JSON artifact.

## Page verdicts

- Page A: pass after the wording repair above. The summaries match the assigned item scope; the statement about absent density and extension results now distinguishes local mollification from a global smooth-density theorem.
- Page B: one missing-hypothesis defect remains in the radial-power summary. The point-evaluation sentence describes a valid subcritical case but omits the separate critical case, so it is incomplete rather than false.

For the other 35 assigned items, I found no confirmed defect that required repair or an uneditable finding.

## Validation and blocker

Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each of the four changed items. All four prechecks passed.

Workflow limitation: `.autopilot/frontier-36-complete` was absent, so `autopilot status --run frontier-36-complete --state-dir .autopilot/frontier-36-complete` returned that no run was configured. The active `.autopilot/state.json` snapshot identified `frontier-36-complete`, stage `5a-read`, with `reader-30` in flight. This prevented recomputation through the run-specific status directory but did not block the mathematical audit or requested repairs.
