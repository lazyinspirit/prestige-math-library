# Step 3b handoff repair — Poisson problems and interior harmonic estimates

## Scope and current state

This repair covers batch 9 of `frontier-37-owner-30`, pair
`poisson-problems-and-interior-harmonic-estimates`, and only the authorized 30
items, its batch-9 manifest, coverage, notes, proof contracts,
cross-batch-dependencies file, the two pair pages if a correction requires one,
and this report. The author report and `frontier-37-owner-30-scope-repair-poisson.md`
were read. No baseline, certification, owner scope, engine state, shared plan,
or other item/page was changed. Root recorded scope proceed at
`b536a74a5cb67736f1fca923aecb66e27d5b344a497ff9f352875d3f16b398f5` after
independently checking the new lemma repair. The batch author dispatch had ended;
this pair has no live writer.

The new local addition remains an engine-certified addition class, not an
ordinary original-item review. The other 29 IDs are original scaffold items;
their ordinary Step-3 receipts are pending this independent audit. No such
receipt has been recorded yet.

## New ball-boundary lemma repair

In `items/lem-euclidean-balls-are-bounded-c-one-domains.md`, the former chart
neighborhood was the unbounded slab `|w|<R/2, t<R`. Its claimed equality with
the whole subgraph was false: the lower quadratic root was not excluded (for
example, `w=0, t=-100R` lies in the slab and proposed subgraph but outside the
ball).

The chart now uses the open cylinder
`C=B_{R/2}(0)×(-R/2,R/2)` and `W=Φ⁻¹(C)`. For
`s(w)=sqrt(R²−|w|²)`, the proof derives both local equations

`Φ(Ω∩W)=Φ(Ω)∩C={(w,t)∈B_{R/2}×(-R/2,R/2):−R−s(w)<t<−R+s(w)}`

and

`Φ(Ω∩W)={(w,t)∈C:t<h(w)}`, where `h(w)=−R+s(w)`.

The lower root is strictly below `−R/2<t` because `s(w)>sqrt(3)R/2` on
`B_{R/2}`. The same bound puts the graph strictly inside the cylinder. Thus
the source definition's *local* subgraph requirement is met. Differentiating
`h` gives `Dh(w)=−w/s(w)`; the source outward-normal convention then gives
`(w,h(w)+R)/R` in the chart and, at the fixed boundary point, transports to
`(y−a)/R`. The radial-normal conclusion is unchanged.

The statement now explicitly assumes Countable Choice and the lemma directly
depends on `def-countable-choice`. This qualifier is inherited from the
published `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, whose
definition begins with an `AC_ω` context. The geometric construction itself
chooses only a finite orthonormal basis via its published finite-dimensional
basis supplier; it makes no countably indexed selection. The exact imported
choice use is the application of that context-qualified domain/normal
definition in steps 4.1 and 5.1. The five direct consumers already assume
Countable Choice and already declare `def-countable-choice`:
`thm-green-function-for-a-ball-in-rn`,
`thm-poisson-kernel-for-a-ball-in-rn`,
`lem-ball-poisson-kernel-is-positive-and-normalised`,
`lem-poisson-kernel-boundary-cap-and-complement-estimate`, and
`thm-dirichlet-problem-on-a-ball-by-the-poisson-integral`.

The seven original direct suppliers were checked against their published
statements. The ball/sphere definition covers the used Euclidean ball and
sphere notation for positive `R`; the finite-dimensional complement formula
applies to `span(u)`; the orthonormal-basis corollary applies to `u⊥`; finite
Parseval applies to the resulting orthonormal basis; the positive-base power
theorem applies to `q(w)>0` with exponent `1/2`; and the total chain rule
applies to `q` followed by square root. These six suppliers introduce no choice
principle. Only the bounded-`C¹`-domain definition carries the `AC_ω`
qualification.

The corrected lemma, its exact `A1` citation, and its proof-contract derivations
are synchronized in the batch-9 manifest and proof-contract file. The authored
source history remains in the original report; this file records the follow-up
repair.

## Independent audit repair — sublinear-growth Liouville corollary

The audit found three proof gaps in the original proof of
`cor-entire-harmonic-function-of-sublinear-growth-is-constant`, with its
statement unchanged. The original radius `R−|x|` gives an open ball contained
in `B_R(0)` but its closed ball touches the boundary, so it does not meet the
compact-containment hypothesis of the Cauchy estimate. The proof also treated
the scalar derivative estimate for one coordinate as a bound for the whole
gradient, and applied the published real-valued zero-derivative corollary
directly to complex-valued line restrictions.

For each `R>|x|`, the repaired proof uses
`ρ_R=(R−|x|)/2`, for which `\overline{B_{ρ_R}(x)}⊂B_R(0)`. It applies the
estimate to each coordinate derivative and absorbs `2√n max_i C'_{n,e_i}`
into a constant depending only on `n`; the resulting factor
`R/(R−|x|)` stays bounded and tends to one. For complex-valued `u`, the final
line argument now applies the real corollary separately to the real and
imaginary parts. The direct supplier statements and their assumptions fit
these uses; no dependency or theorem qualifier changed.

Local checks on the repaired corollary passed: its individual precheck,
rendercheck, and strict proof-contract check each report zero errors. Its proof
contract derivations were updated to match the revised steps.

## Checks after the lemma repair

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-euclidean-balls-are-bounded-c-one-domains.md`:
  pass, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-euclidean-balls-are-bounded-c-one-domains.md`:
  pass, YAML and all math spans parse.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-9.pages.json`:
  pass, 30 items, 0 normalizations, 0 errors.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-9.pages.json`:
  pass, 30 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-9.proof-contracts.json --strict`:
  pass, 0 errors, 5 nonfatal heuristic warnings across the batch. These are
  `shotgun-bracket` warnings for the ball lemma, Kelvin lemma, ball Poisson
  kernel theorem, cap/complement estimate, and interior derivative theorem.
  Each warning is being audited against actual fact use; no citations will be
  added solely to satisfy the heuristic.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  the repaired item adds no level error. The whole-run checker still reports
  preexisting dependency-level mismatches for
  `ex-reduced-conductor-of-q-zeta-six` and
  `ex-prime-decomposition-in-q-zeta-twelve`, outside this pair.

## Remaining work

Independently audit the other 29 original items against their statements,
numbered proof steps, direct suppliers, choice assumptions, and citations. Check
the five strict-contract warnings for real citation-placement defects and
retain any justified warning. Record ordinary accept/repaired confidence-1
receipts for original IDs only after each has actually been audited. Keep any
shared prerequisite or interface-consumer finding for the root integrator.

## Follow-up repair checkpoint — after root scope proceed

After independently reviewing the corrected ball chart, root recorded scope proceed
at `b536a74a5cb67736f1fca923aecb66e27d5b344a497ff9f352875d3f16b398f5`. This
approves the valid added lemma's scope. It does not change the immutable baseline
or its engine-certified addition class. The original 29 items remain the only
items eligible for ordinary audit receipts.

The remaining substantive audit repairs completed so far are:

- `thm-locally-uniform-harmonic-convergence-is-c-infinity-local`: handled the
  empty compact set vacuously, used radius one when the domain is all of
  `R^n`, and otherwise used the positive distance to the nonempty complement;
  verified the resulting closed neighborhood is compact and contained in the
  domain. Updated its proof-contract derivation.
- `thm-harmonic-functions-are-real-analytic`: corrected the order-zero complex
  derivative bound and the derivation that absorbs the fixed factor into the
  exponential constant only for positive derivative order.
- `thm-interior-estimate-for-poisson-equation-with-holder-data`: repaired the
  invalid intermediate estimate and derivative-bound argument, with the
  centered radius-`1/8` balls kept inside `B_{3/4}`. Corrected the use of the
  real mean-value theorem for complex components and the Holder inequality
  `|x-y| <= |x-y|^alpha` on a unit-scale region. Removed unused direct
  Dirichlet/maximum-principle dependencies and added the directly used mean
  value theorem dependency. Split the affected citation facts in its contract.
- `cor-interior-laplacian-gradient-estimate`: stated the actual assumptions
  instead of importing the previous estimate's full hypotheses, removed its
  unused direct Schauder dependency, and normalized the logarithmic potential
  before the local estimate. The near/far split now supplies the needed
  integrable majorant for differentiating the potential. Added the direct
  mean-value dependency, split citation facts, and corrected the coordinatewise
  Cauchy estimate. Updated its contract and the in-scope counterexample's
  quotation of the estimate.
- `lem-reflection-green-function-for-the-half-space`: made the source
  statement's formula domain exclude the pole, stated symmetry off the
  diagonal, and made local integrability explicit. Corrected the distributional
  sign for the image-pole term.
- `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space`: placed
  the normalization formula before its first use, extended the reflected
  formula from an interior pole to the boundary pole before differentiating,
  and corrected the compact-set estimate to require bounded-above horizontal
  coordinates and a positive lower bound on height. Corrected its F1 quote to
  match the reflection lemma's revised statement exactly.

All of these repairs preserve their theorem statements. The only qualifier
change in this audit is the ball-domain lemma's inherited Countable Choice
context, already reported above. The newly added mean-value dependency is an
external shared prerequisite and the gradient corollary no longer has a direct
Schauder edge; root has been notified so shared dependency/interface impacts
can be considered during integration.

Current checks after these repairs:

- The individual precheck and rendercheck pass for the Poisson equation estimate,
  the Laplacian-gradient corollary, the reflection Green lemma, and the
  half-space Poisson theorem.
- The batch manifest dependency check reports 30 items, no normalizations, and
  no errors. The content-policy check reports 30 scoped items, no errors, and
  no warnings.
- The strict batch proof-contract check now reports zero errors and five
  heuristic `shotgun-bracket` warnings. The warnings remain on the ball-domain
  lemma, Kelvin lemma, ball Poisson-kernel theorem, boundary-cap estimate, and
  interior derivative theorem. Their cited facts are grouped where used in a
  single derivation step; inspection has not established a missing logical
  citation, so none was added just to silence the heuristic.

The other original items are still under item-by-item source, step, supplier,
choice, and citation audit. Ordinary receipts have not yet been recorded.

## Follow-up citation repair — compact kernel-parameter sets

The independent source audit found that three proofs invoked compactness of a
product of an interior compact ball/set with a boundary sphere when asserting a
positive separation and uniform bounds for all derivatives of the Poisson
kernel. Their original Facts & Assumptions cited compactness of the factors and
extreme values, but did not explicitly support compactness of that product as a
subset of finite-dimensional Euclidean space. The underlying claims are valid:
the product is closed and bounded in `R^(2n)` and Euclidean Heine–Borel applies.

I added the published Euclidean Heine–Borel/extreme-value theorem to the exact
Facts & Assumptions and direct dependency lists of:

- `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral`;
- `thm-interior-derivative-estimates-for-harmonic-functions`;
- `thm-harmonic-functions-are-real-analytic`.

For the real-analyticity item, the same compactness/extreme-value citations now
also support finiteness of the supremum over the closed interior ball. The
source is explicitly a ZF theorem; no qualifier or mathematical statement
changed. The matching batch manifest prerequisite arrays and proof-contract
citations/uses were updated. Checks pass: all three items' prechecks and
renderchecks; manifest-deps; and the strict batch proof-contract (zero errors,
the same five justified heuristic warnings).

## Follow-up qualifier repair — Kelvin lemma

The Kelvin item's former proof imported the identity
`Delta |x|^(2-n)=0` from the published fundamental-solution harmonicity
supplier. That supplier has an explicit Countable Choice hypothesis, despite the
Kelvin lemma claiming to use no choice. I removed that choice-qualified
fundamental-solution edge and proved the identity in the Kelvin calculation:
`partial_i |y|^(2-n)=(2-n)|y|^(-n)y_i`, so summing the second derivatives gives
`Delta |y|^(2-n)=(2-n)(n|y|^(-n)-n|y|^(-n-2)|y|^2)=0` for `y != 0`.

The actual proof also uses second-order composition closure and positive real
power derivatives for the inversion coordinates and Kelvin weight. I added the
published C-smooth-composition and real-power calculus suppliers to the item,
Facts & Assumptions, batch manifest, and proof-contract mapping. Both are
choice-free. The theorem statement and no-choice context are unchanged; the
proof argument is not otherwise changed. Item precheck/rendercheck pass. Strict
contract validation passes with four warnings. The previous Kelvin
`shotgun-bracket` warning disappeared because the corrected Step 3.1 now cites
three facts rather than four; the remaining four heuristic warnings are
unchanged and justified. This is a citation/qualifier repair, not a mathematical
statement defect.

## Follow-up estimate repair — half-space kernel derivatives

The half-space Poisson theorem's Step 4.1 claimed
`|D_x^alpha P_H(x,z)| <= C (1+|z|)^(-n-|alpha|)` for every multi-index. A
normal-height derivative can differentiate the leading factor `t` and retain
the base `|z|^-n` decay, so the stronger exponent was false. I changed the
majorant to `C_(alpha,K)(1+|z|)^(-n)` on each compact `K subset H`, and explained
why horizontal derivatives gain decay while normal derivatives either retain
that base decay or gain it. Because `n>n-1`, the corrected majorant remains
integrable over the boundary plane and still supports the differentiation under
the integral sign. No theorem statement or qualifier changed. The item
precheck/rendercheck pass and strict contract remains at zero errors.

The same half-space theorem audit found two small proof gaps in the boundary
limit/uniqueness steps. The complement estimate for complex data needs
`|g(z)-g(z_0)| <= 2||g||_infty`; the old text used only one copy of the norm. I
added the factor two, which still tends to zero with the tail mass. The odd
reflection uniqueness argument also applied the real weak maximum principle to
a possibly complex difference. It now runs the reflection argument separately
on real and imaginary parts. Both changes leave the theorem statement and
qualifier unchanged; item precheck/rendercheck and strict batch contract pass.

## Original-item audit and receipt closure

The item-by-item audit is complete for the 29 original scaffold IDs. I recorded
19 current `accept` receipts and 10 `repaired` receipts, each at confidence 1
and with the exact batch-9 manifest dependency array as its examined set. The
repaired set is Kelvin inversion, the ball Dirichlet theorem, half-space
reflection Green, the half-space Poisson theorem, interior derivative
estimates, the sublinear-growth Liouville corollary, local-uniform harmonic
convergence, harmonic real analyticity, the Holder-data Poisson estimate, and
the interior Laplacian-gradient corollary. Every other original item was
independently accepted after checking its current statement, proof steps,
direct supplier assumptions, and uses. The newly added bounded-ball lemma was
excluded from ordinary receipts and remains in the engine-certified addition
class.

The current Step-3 scope check is closed. A direct per-item decision check
confirms `29/29` original batch-9 items closed; the new addition is outside that
ordinary receipt set. No owner option was used and no owner scope, baseline,
certification, or engine state was changed.

Final owned-batch checks:

- Explicit precheck of all 30 items: 28 phase-bearing items passed, 0 failed;
  the definition and remark carry no proof phase.
- Rendercheck of all 30 item files and both owned PDE pages: pass for all 32
  files.
- Content policy: 30 scoped items, 0 errors, 0 warnings.
- Manifest dependency check: 30 items, 0 normalizations, 0 errors.
- Strict proof-contract check: 30 items, 0 errors, 4 justified heuristic
  `shotgun-bracket` warnings (ball-domain lemma, ball Poisson theorem,
  boundary-cap estimate, interior derivative theorem). The Kelvin warning
  ceased to apply after the real four-fact bracket/choice inheritance was
  repaired; no citation was added to satisfy a heuristic.

Root owns shared integration and the run-level final gate after all writers
have drained. The only shared prerequisite additions are published, choice-free
calculus/Euclidean compactness suppliers already declared in the affected batch
items; no new in-run cross-batch edge or changed consumer statement remains.
