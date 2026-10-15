# Batch 20 authoring notes — functional BvM limits and credible-set calibration

Run: `bayesian-computational-statistics-62`  
Role: beta  
Pages: `functional-bayesian-limits-and-credible-set-calibration` and `...-examples`  
Scheduled level: 4  
Dispatch scheduling input: `6311a2da1021e79843ca989292e4d12d6f0a230ec786c5acd336c33279b513ea`

## Plan and inventory

The controlling BCS-17 design and its `plan-spec.json` A/B records agree on page IDs, category, titles, order, companion, and direct page requirements: BCS-08 `iid-posterior-contraction` and BCS-16 `weak-nonparametric-bernstein-von-mises`. No design/spec metadata conflict was found.

The dispatched task says prerequisite batches 11 and 19. The shared batch-dependency-levels record lists batch 20 at level 4 with batch prerequisites 7, 11, and 19. The BCS-17 page-level requirements remain BCS-08 and BCS-16; batch 7 supplies several direct posterior-quantile/credible-set items used by the authored items. This scheduling-input discrepancy is recorded for the owner; no shared schedule or state was edited.

The pair now has 14 A-page items and 4 B-page items. Local levels were recomputed from the in-run item graph after adding the projected empirical-process CLT and its consumers:

| Level | Items |
|---:|---|
| 1 | `def-multiscale-coefficient-space-m0w`; `def-sobolev-linear-functional-for-white-noise`; `def-type-s-and-h-multiscale-density-priors`; `cex-credible-posterior-set-with-zero-frequency-coverage` |
| 2 | `lem-m0w-separable-and-projection-tails`; `lem-multiscale-primitive-map-to-continuous-cdfs`; `lem-random-posterior-quantiles-stabilize-under-bvm`; `lem-smooth-functional-extends-to-negative-sobolev-space`; `lem-type-s-h-prior-draws-are-l2-densities` |
| 3 | `lem-m0w-finite-projection-and-tail-bvm-criterion`; `ex-type-s-and-h-density-prior-contracts` |
| 4 | `thm-linear-functional-bvm-and-credible-coverage`; `thm-nonlinear-functional-bvm-and-credible-coverage`; `thm-projected-empirical-process-clt-in-m0w` |
| 5 | `thm-cdf-and-multiscale-credible-band-calibration-from-bvm`; `ex-nonlinear-functional-remainder-at-parametric-scale`; `ex-smooth-linear-functional-in-white-noise` |
| 6 | `thm-multiscale-credible-band-holder-diameter` |

The page cap is not close to binding. Page lists and manifests are ordered by computed level. The run-wide dependency checker still reports unrelated empty inventories and stale labels in other active batches; the batch-20 labels have no errors in the scoped calculation. Those shared carriers are not owned here.

## Supplier inspection and exact limits

### BCS-16 white-noise supplier

Inspected the actual bodies and proofs of `thm-weak-nonparametric-bernstein-von-mises-for-product-priors`, `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`, and `def-negative-sobolev-space-for-white-noise`. The weak BvM supplier is a product-prior Gaussian-white-noise result in `H(delta)`, with its stated coefficient-density/truth conditions, a supplied posterior kernel, and countable choice used only for the L2 prior construction. The Gaussian supplier proves that white noise is Borel Gaussian in the negative Sobolev space but is not L2-valued. These interfaces support the authored scalar white-noise results. They do not supply the IID density Type-S/Type-H posterior theorem.

### BCS-08 IID contraction supplier

Inspected the actual body and proof of `thm-iid-posterior-contraction-by-entropy-and-prior-mass`. It is a dominated IID density-model theorem under its entropy, KL-neighborhood, sieve, and tail premises. The current body does not verify those premises for both Type-S and Type-H priors, does not prove the source-specific sup-norm event used in the 2014 multiscale BvM proof, and does not imply the white-noise product-prior BvM. The BCS-08 page edge therefore remains open for the Type-S/Type-H instantiation.

### BCS-07 posterior quantile suppliers

Inspected `lem-measurable-posterior-quantile-and-cdf-bracketing`, `thm-central-posterior-quantile-interval-is-credible`, and `def-posterior-credible-set`. The scalar quantile helper now requires a CDF continuous on the real line and locally strictly increasing at the target quantile. This is sufficient for scalar normals and for nonnegative norm distributions whose CDF is constant on the negative half-line. The previous “strictly increasing CDF” condition on all of R was mathematically impossible for such norm laws and was replaced.

## Mathematical decisions and caveats

1. **Nonlinear contraction convention.** The BCS-17 plan calls `r_n=o(n^{-1/2})` an L2 radius. Castillo–Nickl’s white-noise Theorem 4 phrases its premise as posterior mass outside a squared-distance threshold `s_n=o(n^{-1/2})`. The authored theorem preserves the plan’s stronger radius premise: setting `s_n=r_n^2` gives `s_n=o(n^{-1})`, hence also `o(n^{-1/2})`. The implications are written explicitly in the theorem statement.

2. **CDF map.** Admissibility `w_l/sqrt(l)->infinity` alone does not give continuity of the primitive map. The local map and CDF theorem require the additional summability `sum_l w_l 2^{-l/2}<infinity`; the uniform-truth example verifies it for its displayed weights.

3. **Norm quantiles.** Credible-radius convergence and coverage use continuity and strict increase only in neighborhoods of the positive target quantiles. This permits CDFs to be constant below zero and makes the regularity assumptions realizable.

4. **Projected empirical center.** Added `thm-projected-empirical-process-clt-in-m0w`, proved from finite-dimensional IID CLTs, a local variance-sensitive exponential bound, wavelet-level union bounds, and the M0 finite-projection/tail criterion. It verifies the sampling-center premise for `P_n(L_n)` under the displayed coefficient regularity and both source cutoff regimes.

5. **Type-S/Type-H weak BvM remains unresolved.** The 2014 Castillo–Nickl Theorem 3 is an essential planned claim. Its §5.4 proof reduces the result to (i) a high-probability set `D_n`, (ii) uniform posterior exponential-moment bounds, and (iii) finite-dimensional density-functional BvM limits. The proof uses Type-S/Type-H sup-norm posterior contraction results; Type-S2 additionally uses a low-frequency coefficient-control lemma. For Type H it says the Dirichlet change-of-variables calculation is omitted and refers to Castillo’s 2014 §4.4. For the finite-dimensional limits it invokes Castillo–Rousseau’s semiparametric density BvM theory. The actual BCS-08 supplier does not discharge these source-specific hypotheses by itself. The conditional weak-BvM calibration theorem is proved, but no Type-S/Type-H BvM conclusion is claimed from prior definitions alone.

   Proposed owner reconciliation items and placement: `lem-type-s-h-density-posterior-contraction-at-source-cutoffs` (including the precise Hellinger/sup-norm event); `lem-type-s2-low-frequency-prior-coefficient-control`; `lem-type-h-dirichlet-prior-shift-ratio`; `thm-type-s-h-finite-dimensional-density-bvm`; then `thm-type-s-h-density-priors-have-multiscale-bvm`. Place these on the A page after level-4 prerequisites and before the CDF calibration theorem, which would then depend on the proved Type-S/Type-H weak BvM item. Affected claims are the Type-S/Type-H density weak BvM itself, its CDF credible-band coverage, multiscale credible-band coverage, and the source density-band diameter application. This is an owner escalation, not an assertion that the theorem is false.

6. **Examples.** The B-page counterexample is now a complete Bernoulli boundary-truth calculation: its equal-tailed interval has exact posterior mass and zero coverage. It is a general boundary-regularity illustration, not the particular Type-S/Type-H density counterexample requested in the design when a density truth bound fails. A source-specific density counterexample remains an owner-decision item; no coverage conclusion is inferred merely from failure of a sufficient theorem hypothesis.

## Source history and dispositions

Full-text PDFs were opened and inspected at the locators recorded in the coverage file. Sources are Castillo–Nickl (2013) white noise; Castillo–Nickl (2014) density multiscale BvM; the complete author-hosted Giné–Nickl monograph; Castillo (2014) sup-norm contraction; and Castillo–Rousseau (2015) semiparametric density functionals. The 2015 paper is used to identify the exact finite-dimensional BvM premises and cutoff mismatch; its theorem is not imported as a completed local proof. Every source-harvested result is marked included/inline/deferred in the coverage file.

An initial Cambridge chapter lookup for the Giné–Nickl material returned a cache miss; a complete author-hosted 705-page monograph PDF was then retrieved and used. No selected source remains retrieval-blocked. The initial `source-fetch-check --stamp` succeeded; the final stamp check verified all 8 sources and found zero new stamps needed.

## Plan/source limitations requiring owner reconciliation

- The design/plan-spec claims and metadata agree. The unresolved issues are proof obligations, not changed scope.
- The source’s specific “truth bound fails” Type-S/Type-H density example is not supplied by the local Bernoulli boundary example.
- The Type-S/Type-H BvM is not marked ready. The source theorem’s local instantiation and external finite-dimensional/Dirichlet steps remain explicit escalation points.

## Scoped final checks

- `node tools/tsx-run.mjs tools/precheck.mts <18 batch-20 item paths> --json`: 18 files, 15 proof-bearing items checked, zero failures or repairs.
- `node tools/proof-layout.mjs <18 batch-20 item paths>`: 18 items, 51 numbered steps, zero defects.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-20.proof-contracts.json --strict --json`: all 18 scoped contracts pass with no warnings.
- `node tools/coverage-checklist.mjs research/bayesian-computational-statistics-62-batch-20.coverage.json --json`: 2 pages, 43 harvested entries, zero errors or warnings.
- Final `node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-20.coverage.json --stamp`: 8/8 sources fetch-verified, zero newly stamped, zero documented drops.
- Recomputed the item graph over prerequisite batches 7, 11, and 19 plus batch 20: all 18 batch-20 labels match their computed levels, with no graph errors.
- Compared both page manifests with their A-page item and B-page example lists; all 18 item frontmatter IDs, dependency arrays, and level labels match the manifest.
- `node tools/step1-decisions.mjs record` created or refreshed all 18 batch-20 item records as `ready`; the hash-bound scoped check reports 18/18 ready. This records Step 1 completion only, not independent approval.
- The run-wide `item-dependency-levels.mjs check` remains blocked by one unrelated empty inventory (`misspecified-posterior-consistency-examples`) and 11 unrelated stale labels in other batches. The run-wide `proof-contract-coverage.mjs` likewise stops at that empty page inventory before it can audit this pair. No other batch was edited.
- The strict contract audit covers this pair directly despite that frontier-wide blocker. The unresolved Type-S/Type-H density-BvM application above remains owner escalation; the local CDF and credible-band result is stated and proved conditionally on its posterior weak-BvM premise.
