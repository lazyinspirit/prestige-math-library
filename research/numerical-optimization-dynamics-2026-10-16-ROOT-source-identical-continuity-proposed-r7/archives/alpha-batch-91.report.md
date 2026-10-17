# Batch 91 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-91`. Review in the generated dependency order. Reader findings and refuter flags are empty. Current touched source hashes match the immutable reader-post snapshot; pre/post hashes differ for all eleven routed touched carriers. No historical raw diff is asserted from a hash alone.

## Completed level 0

- `lem-dimer-central-force-hessian-vector-error`: independently verified the two Taylor remainders and noise bound; risk review complete.
- `lem-local-root-from-uniformly-small-residual`: accept the reader norm-existence enrichment; contraction and unique-zero proof verified, including positive-radius and separate zero-residual clauses. Risk review complete.
- `lem-local-root-in-max-norm`: accept the finite row-sum/LUB and chain-rule enrichment; all six steps checked, including completeness and zero residual. Risk review complete.

Sources: item-local Facts and supplier Statements (Taylor, chain rule, Hessian symmetry, operator-norm attainment, Banach, real/Euclidean completeness, choice-free closed-subspace clause, scalar/vector mean-value inequalities). Driscoll–Braun §4.5.2 equations (90)–(93), https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html, checked directly: Newton linearization agrees; the quantitative contraction bounds are proved locally. No extra Choice use.

Next: level 1 procedure and tangent review. A zero centered step remains admitted by the tangent lemma; repair and consumer checks pending.

## Completed level 1

- Dimer procedure: reader separates mode metadata from stop status; all caps and rotation/translation branches checked. Accept nonfatal output-interface repair.
- Finite-image string: risk review complete; cumulative traversal uniqueness, zero chords/segments, vertex ties, N=0 and domain rejection checked.
- Improved/climbing NEB: reader nonfinite-check ordering accepted; strict branches and spring match Henkelman–Jónsson §IV (8)–(12), and climbing force matches CI-NEB §IV (5). Centered exact-tie rule is explicitly local. Risk review complete. Primary PDF downloaded from https://hj.hi.is/papers/paperNewTangent.pdf and page 4 read with PyMuPDF after web PDF extraction failed.
- Centered/unequal tangent lemma: amend by explicitly requiring h>0. Before amendment R(s)=(s,0), J=R, J0=[0,1], s=1/2,h=0,M3=0 satisfies the written conditions but makes d_h=0/0. Positive spacings and delta<=1/2 make the Taylor and normalization argument valid. Direct consumers: polyline lemma has h=L/M>0; central-string proposition has 0<h<=1; corner/cusp example has h>0 and fails regularity as intended. No outside consumers found in items/library. Reader interval clarification is sound audit enrichment.

Next: complete level 2 risk reviews and certificate dependencies.

## Completed level 2

Polyline interpolation: verified O(h^3) chord error using T dot K=0, O(h^2) cumulative parameter error, and redistribution image error; endpoint extension supplies Taylor domains. Saddle certificate: inverse <=1/gamma, residual contraction radius, and Courant–Fischer sign preservation checked with ascending/descending eigenvalue conventions; reader norm/citation changes are audit enrichment. Circular example: checked injective polar chart, tangent gradient, exact endpoint minima and Hessian diag(-4a^2,1) at the central critical point. All three risk reviews complete.

Next: level 3 eigenvector Newton, projected-force consistency, and conditional dimer mode bound.

## Completed level 3

Eigenvector procedure: validated exact Newton call/status, positive-overlap sign choice and last-reference semantics; accept reader repair. The Newton correction supplier returns singular-jacobian (not singular-hessian). Central-string proposition: checked projector action 2G Ct h^2, spring 2|k| C1 h^3, and redistribution. Amend reader repair only to correct source authors to Liu–Chen–Ortner (arXiv title page). Conditional dimer mode theorem: complete segment and positive epsilon now explicit; measured Rayleigh gives mu<=-gamma/4 and complementary eigenvalues differ by >=5gamma/4, yielding exactly the stated factor 4/(5gamma). Nearby-root conclusion uses the independent certificate. All three risk reviews complete.

Direct consumer search of items/library found no outside item consumers of changed Statements/Definitions. Remaining in-batch uses will be checked at their routed levels. Next: level 4 and zero-residual example.

## Completed level 4

Improved-NEB witness: forward circle chord angle h/(2R0) gives |Wprime(s)| sin(h/(2R0)), a positive first-order coefficient. Exact eigenvector/Newton proposition: accepted updates solve H p=-g and satisfy the local Newton supplier; stopping branches imply no later update. Dimer recurrence: gap >=4gamma, perturbation <=gamma and projection of the eigen-equation give sine<=Lr/(3gamma); reflections preserve force-noise norm and yield the exact kappa, invariance and finite geometric bound. Swapping the two points in the Newton remainder supplier justifies the H* expansion. Coincident eigenvector lines have zero projector difference, so the displayed two-dimensional argument includes that endpoint. Reader vectorwise rewrite is an equivalent, fully proved audit enrichment. Gauge-fixed path theorem: square dimensions, maximum-norm consistency, uniform inverse and Lipschitz hypotheses, zero residual and nonexpansive reconstruction all checked. All four risk reviews complete.

The near-degenerate example has eigenvalues ±sqrt(2) delta and vector proportional to (1,1-sqrt(2)); E^T E=delta² I proves the action bound. Its rewrite is audit enrichment, not a repaired false computation. No consumers exist.

Primary Hairer/Wanner PDF §VI.3, printed pp. 138–139 was inspected as rendered pages because text extraction corrupts its formula fonts: Newton linear system and Theorem 3.2 agree with the local correction context; the Lipschitz remainder used here is proved in the actual local supplier. Liu–Chen–Ortner §§2.1–2.3, Theorem 2.1 and Remark 2.1 were checked: their upwind path rate is first order under explicit stability assumptions and is not the centered theorem proved here.

Next: final level-5 example, local checks, ledger and decision handoff.

## Completed level 5 and review follow-up

Zero-residual example: both centered chords equal B-A, so no tangent degeneracy occurs; the two distances are 1/2 or sqrt(5)/2, and zero gradient makes both string and ordinary NEB force vanish. The continuum family is regular and nonunique. The residual has an identically zero normal component and only one spacing equation for two coordinates, so its Jacobian is singular. Risk review complete.

Corrected a nonfatal wording error in both root lemmas: A^{-1}F is a composition, not in general an affine map (e.g. scalar F(y)=y+y² near zero). The chain-rule derivatives and contraction estimates were already correct. These two touched decisions are therefore amended repairs.

Consumer closure: dimer procedures are used conditionally in the two mode theorems; NEB ordinary/monotone branches are preserved in the first-order, straight-chord and zero-residual examples; the eigenvector proposition uses only accepted Newton steps; the max-norm root lemma is applied with a positive chosen radius even at zero residual; the saddle-index counterexample and mode theorem preserve the explicit Euclidean norm convention; central-string consumers retain all small-mesh hypotheses. No consumer requires source repair, no outside consumer was found, and no withdrawal or defective published supplier was identified.

## Final dispositions

Exactly eleven touched obligations: four accepted repairs (dimer, NEB and eigenvector procedures; conditional dimer mode theorem), four amended repairs (both root lemmas, centered tangent lemma and central-string proposition), and three reviewed-no-defect audit enrichments (local saddle certificate, dimer translation recurrence and near-degenerate example). There are no page, reader or refuter finding decisions owed.

- `nod-b91-3a-dimer-output-status`: Historical output listed mode-unverified as a termination alternative while later branches returned a stop status together with mode metadata and referred to an unsupplied certificate input. Reader separates mode_status, makes it always unverified and preserves all stop branches.
- `nod-b91-3a-neb-nonfinite-order`: Historical procedure placed nonfinite rejection after energy-dependent comparisons without explicit precedence. Reader specifies evaluation/check order before comparisons and convergence tests, and identifies the existing tie branch as local.
- `nod-b91-3a-eigenvector-output-contract`: Historical Definition promised an aligned lowest-mode reference even on exits before spectral checks, permitted zero overlap without unique sign alignment, and used singular-hessian while its supplier returns singular-jacobian. Reader explicitly returns the last accepted reference, checks positive overlap and forwards supplier status.
- `nod-b91-3a-tangent-positive-step`: Centered spacing h=0 was allowed by the written closed-stencil and delta hypotheses but yielded 0/0. Added h>0. Unequal spacings were already positive. Direct consumer checks need no edits.
- `nod-b91-3a-euclidean-root-composition`: F7 called y↦A^{-1}F(y) affine, which fails for nonlinear F (e.g. F(y)=y+y² at x0=0). Replaced affine map with composition; no formula or hypothesis changes.
- `nod-b91-3a-max-root-composition`: F9 incorrectly calls A^{-1}F affine for general C1 F. Replaced the description by composition; chain-rule derivative and contraction proof are correct.
- `nod-b91-3a-string-small-mesh`: Historical F2 omitted the tangent supplier smallness hypothesis M3 h²/6<=1/2. Reader states the cited mesh hypotheses in the Statement and F2 before using the supplier.
- `nod-b91-3a-string-spring-sign`: Historical steps 1.2 and 2.1 bounded the spring force using k rather than |k| although k was not restricted to be nonnegative; the adjacent chord lengths were undefined symbols. Reader defines those lengths, explicitly takes any real fixed k and uses 2|k| C1.
- `nod-b91-3a-string-paper-authors`: Convergence of the Discrete Minimum Energy Path was attributed to E, Ren and Vanden-Eijnden. The linked primary paper title page names Xuanyu Liu, Huajie Chen and Christoph Ortner. Corrected only the author attribution.
- `nod-b91-3a-dimer-complete-segment`: Historical Statement invoked the paired-force estimate without explicitly requiring epsilon>0 and the complete dimer segment to lie in U. Algorithm endpoint membership alone need not imply segment containment in nonconvex U. Reader adds the exact supplier admissibility conditions.

All confirmed defects are closed with caught_at_stage=3a-adjudicate; completed repairs have repair_confidence=1. Historical source comparisons are bound to exact pre-reader raw hashes: ten preimages are in `research/numerical-optimization-dynamics-2026-10-16-owner-step2-owner-final-binding-before/items/`; the maximum-norm root preimage is in `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/`. Every current touched source matched its reader-post item hash before my edits. No missing-byte historical disposition or owner authorization was needed.

## Local validation and scope

- Initial risk-report: 25 items routed, zero errors; all sixteen HIGH/CRITICAL reviews replaced by specific alpha records in the owned contract. Final --require-reviewed: 25 items, zero errors.
- Reflow and precheck on the five locally edited items: unchanged layout; 5 checked, zero failing.
- Required final proof-layout command batched the five changed item paths: 5 items, 23 steps, zero defects.
- Strict batch proof-contract: 25/25 items checked, zero errors and warnings after refreshing exact supplier excerpts and F5 use. Initial stale-excerpt diagnostics were mechanical and generated no defect-ledger rows.
- Renderer check on the five changed items: 5 files, all YAML and math parse successfully.
- Owned dependency input updated for exact Newton status and swapped-endpoint remainder use; frontier dependency ledger refreshed and deduplicated. Five manifest dependency lists reconciled with their current carriers.

No published content edited; no published defect identified. No outside consumer repair, withdrawal, unresolved prerequisite or mathematical blocker remains. No judgment, stamping, certification, engine transition, commit or full gate battery was performed; engine-owned checks remain pending.

Local record integrity check: 11/11 exact owed obligations, no extra decisions, and ten matching closed defect rows. Ledger append succeeded and regenerated its view.

Final layout command executed after all item edits and reflow:

```sh
node tools/proof-layout.mjs items/lem-centered-chord-and-unequal-step-tangent-error.md items/prop-central-string-projected-force-consistency.md items/thm-dimer-mode-error-contracts-local-saddle-translation.md items/lem-local-root-from-uniformly-small-residual.md items/lem-local-root-in-max-norm.md
```
