# Step 3a reader report — batch 34

Run: `mathematical-statistics-foundations-37`  
Assignment: `reader-34`  
Review date: 2026-10-14

## Run state

The recomputed autopilot status at handoff is `running`, with no workers in flight. It reports batch 34's `3a-read` artifact as missing (35/37 assignments covered; batches 33 and 34 are missing). This review used the assigned current manifest and current carriers; it does not create or certify the missing native artifact.

## Opened inventory

Assigned pages:

- `robust-covariance-and-high-dimensional-stability` — [A page](../library/mathematical-statistics/robust-covariance-and-high-dimensional-stability.md)
- `robust-covariance-and-high-dimensional-stability-examples` — [B page](../library/mathematical-statistics/robust-covariance-and-high-dimensional-stability-examples.md)

All 36 assigned items were opened and reviewed. The A-page items were:

- `def-covariance-matrix-of-a-random-vector`
- `lem-finite-dimensional-golden-thompson-trace-inequality`
- `lem-matrix-depth-gaussian-scale-constant-exists-uniquely`
- `lem-projection-slab-uniform-deviation`
- `def-bounded-spectrum-covariance-class`
- `def-matrix-variance-of-a-random-vector`
- `lem-bounded-independent-matrix-bernstein-via-trace-exponential`
- `lem-finite-second-moment-covariance-matrix-is-well-defined`
- `alg-adaptive-truncated-covariance-estimator`
- `def-block-sparse-covariance-class`
- `def-huber-covariance-model`
- `lem-covariance-median-pilot-exact-block-budget`
- `lem-matrix-variance-intrinsic-dimension-at-least-one`
- `lem-oracle-truncated-covariance-and-vector-concentration`
- `def-matrix-depth-covariance-estimator`
- `lem-adaptive-truncated-covariance-estimator-is-total`
- `lem-fixed-scale-truncated-covariance-deviation`
- `lem-huber-covariance-mixture-is-a-probability-measure`
- `lem-adaptive-covariance-lepski-scale-reduction`
- `lem-matrix-depth-maximizer-exists-on-compact-classes`
- `lem-scaled-gaussian-covariance-has-depth-at-least-half`
- `lem-huber-covariance-ambient-action-tail-lower-bound`
- `lem-huber-covariance-contamination-modulus-lower-bound`
- `lem-huber-matrix-depth-estimator-operator-error`
- `lem-measurable-matrix-depth-maximizer-selection`
- `thm-heavy-tailed-covariance-bound`
- `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound`
- `lem-clean-dense-gaussian-covariance-minimax-lower-bound`
- `thm-huber-covariance-upper-and-lower-risk`
- `thm-huber-sparse-covariance-upper-and-lower-risk`

The B-page items were:

- `cex-matrix-variance-does-not-dominate-trace-covariance-product`
- `ex-clean-heavy-tailed-finite-matrix-variance`
- `cex-bounded-spectrum-covariance-lower-rate-must-be-capped`
- `cex-intrinsic-variance-alone-does-not-control-covariance-pilot`
- `ex-block-sparse-huber-covariance-model`
- `ex-dense-huber-covariance-model`

Additional current-run suppliers opened before their consumers included the batch-33 geometric-median algorithm, majority-radius lemma, and minimum-norm selector; batch-31's Huber contamination model, contamination modulus, robust-risk definition, and mixture-equalization lemma; the batch-19 Gaussian KL formula; the batch-17 Pinsker, product-KL, Fano, and Le Cam results; the batch-14 sphere-net lemma; and the batch-2 randomized-procedure definition. The published multivariate-normal, standard-normal, Dirac-measure, probability-measure, and weighted-sum-measure statements used in the reviewed constructions were also opened.

The external [Minsker–Wei paper](https://arxiv.org/pdf/1708.00502) was checked at Lemma 2.1 (p. 3) and Theorem 2.1 (§2.2, pp. 3–4). The external [Chen–Gao–Ren paper](https://arxiv.org/pdf/1506.00691) was checked at Proposition 3.1, Theorems 3.1, 3.6, 3.7, and 5.1, Theorem 7.1, and Lemma 7.3. The relevant source statement and locator are recorded below.

## Repairs and evidence

1. [items/def-matrix-depth-covariance-estimator.md](../items/def-matrix-depth-covariance-estimator.md): the empirical law was written as a finite Dirac sum without stating why it is a probability law. The definition now spells out that each Dirac measure is a probability measure, finite nonnegative weighted sums are measures, and total mass is one. Its direct dependencies and the assigned manifest mirror now include the Borel sigma-algebra, Dirac measure, probability-measure, and weighted-sum results. All direct and indirect assigned consumers were reviewed.

2. [items/lem-adaptive-covariance-lepski-scale-reduction.md](../items/lem-adaptive-covariance-lepski-scale-reduction.md): the statement's prior special case claimed (q_j=5d e^{-\beta}) without the hypotheses of a result that proves this bound. Minsker–Wei, Lemma 2.1 and Theorem 2.1, pp. 3–4, state a (5d e^{-\beta}) prefactor under (m\ge C d\beta). The assigned counterexample `cex-intrinsic-variance-alone-does-not-control-covariance-pilot`, Steps 1.1–4.1, refutes that sample condition for the specified same-sample pilot even if the failure prefactor is changed to ambient (p). The local fixed-scale lemma proves the trace-aware condition (m\ge10^{16}D\beta) and the ambient bound (5p e^{-\beta}). I replaced the unsupported special case with that bound under the fixed-scale lemma's hypotheses, added the direct dependency and matching proof-contract citation, and made the general random estimates explicitly measurable. The downstream heavy-tail theorem uses the shared-pilot event and trace-aware condition; it does not rely on the removed (5d) claim.

3. [items/lem-matrix-depth-maximizer-exists-on-compact-classes.md](../items/lem-matrix-depth-maximizer-exists-on-compact-classes.md): “dense argmax correspondence” was ambiguous because the definition includes both global and bounded-class correspondences, while this proof establishes compactness only for bounded search classes. The statement now names the dense class \(\mathcal F_p(\beta M)\) and sparse class \(\mathcal F_{p,s}(\beta M)\). Its proof contract now records that bounded-class scope. The separate selector lemma establishes global Borel selectors and explicitly does not claim global argmax fibers are compact.

4. [items/thm-huber-sparse-covariance-upper-and-lower-risk.md](../items/thm-huber-sparse-covariance-upper-and-lower-risk.md), Step 1.1: the operator-norm direction argument omitted the case (T=\varnothing) and (A=0). It now chooses any coordinate unit vector; since (p\ge2s), that vector extends to a support set of size (2s) and lies in (U_s). The proof contract was synchronized.

5. Three titles were made precise. The contamination-modulus item proves (M^2\epsilon^2/16), so its title no longer says the modulus is at least (M^2\epsilon^2). The dense Huber theorem has an all-regime capped lower bound and a high-probability upper bound under its stated sample condition, so its title now says that. The sparse Huber theorem's title now identifies its high-probability upper and low-ratio lower regimes.

No stale `verification.judge` record was present on the edited items. The assigned batch manifest was synchronized with the changed statements, titles, and dependency arrays. No page prose was edited.

## Validation

- Reflow ran on all six changed item paths. It left the definition and Lepski item unchanged and reflowed the other four.
- Precheck passed for all six changed items; the definition had no proof-bearing steps.
- `node tools/proof-layout.mjs` ran once on all six changed item paths: 6 items, 16 steps, 0 defects.
- A focused mirror check passed for the six item titles/statements, both changed dependency arrays, the Lepski citation, and the sparse-proof contract.

## Page verdicts

- `robust-covariance-and-high-dimensional-stability` (A): after the listed repairs, the local heavy-tail and dense/single-block sparse Huber statements match their proof hypotheses and dependency scopes. No remaining page-summary defect was found.
- `robust-covariance-and-high-dimensional-stability-examples` (B): the finite-support moments, covariance calculations, sparse/dense Huber examples, and counterexample witnesses match their statements. No remaining page-summary defect was found.

## Uneditable findings

None remain in the reviewed assigned carriers or opened current-run suppliers. The original Minsker–Wei (5d) statement is not retained as a local result; the assigned counterexample supplies the contradictory finite-dimensional family.

## Blocker and coverage limit

The active run still reports batch 34's native `3a-read` artifact missing. This review did not write run-control state or create a native receipt, so the owner must resolve native collection before the batch can count toward Step 3a closure.

I did not independently re-prove every published foundational dependency's proof body. I checked the local statements where used in the specialized arguments and opened the current-run draft suppliers listed above; no finding is asserted against an uninspected supplier.
