# Focused repair evidence — first cycle

Native writers drained before source edits, as confirmed by parent. Exact source preimages are in `research/bayesian-computational-statistics-62-owner-bvm-cdf-before/`. Existing frontmatter, manifests and live contracts were not edited.

## Repairs and interfaces

- `def-negative-sobolev-space-for-white-noise`: added the missing injectivity argument. Zero coefficients imply orthogonality to the dense basis span, hence zero L2 norm. Basis, weights, choice scope, coefficient map and original embedding claim are unchanged.
- `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces`: added step 0.1 proving the metric axioms and separation. Closed-set distance ramps have equal integrals when beta=0; dominated convergence gives equality on closed sets; the published finite-measure uniqueness lemma gives equality on Borel sets. The original Statement is unchanged.
- `thm-cdf-and-multiscale-credible-band-calibration-from-bvm`: step 1.1 now proves beta(T#nu,T#rho) <= max(1,L) beta(nu,rho) for every L-Lipschitz T. It applies this directly to J. Step 1.2 applies the same bound to both 1-Lipschitz norm maps before invoking the scalar quantile lemma. Step 1.1 explicitly proves the Gaussian image property: every continuous real linear functional composed with J remains continuous linear; finite real linear combinations of evaluation maps therefore have centered normal laws. The existing covariance limit proof identifies the bridge covariance. The original Statement and choice scope are unchanged.

The Gaussian premise is used in its scalar linear-pushforward sense. This argument does not invoke characteristic-function uniqueness or construct a Gaussian law. The choice sibling supplied `lem-density-normal-laws-and-square-summable-gaussian-series` as a choice-compatible scalar-density convention and applies that convention to the white-noise branch. No global AC-dependent Gaussian definition was imported here.

## Root integration intentions

`contracts.json` contains complete proposed selected contract objects, with exact current changed derivations and inputs. Root must add `lem-finite-measure-uniqueness-on-a-pi-system` to the BL lemma's source `deps` and batch-19 manifest dependency row. No other frontmatter or manifest change is requested. The BL F6 citation and uses are supplied. Current supplier quotes and hashes remain root-owned: in particular refresh old full Definition quotes wherever they contain the previous embedding paragraph. CDF F4 uses are now only 2.1; F10 has no remaining proof use and may be removed together with its source fact/dependency if root wishes to clean unused context. The selected proposal retains it with an empty use list rather than altering metadata outside my authority.

## Focused actual consumer checks

The sole Definition change is proof of an existing claim, so no changed mathematical interface propagates. Actual inspected consumer uses:

- `def-multiscale-coefficient-space-m0w`, `def-sobolev-linear-functional-for-white-noise`, and `def-type-s-and-h-multiscale-density-priors`: same complete basis, levels and L2 coefficient identification; all assumptions retained.
- `lem-smooth-functional-extends-to-negative-sobolev-space`: same weighted Cauchy–Schwarz extension and agreement with the dense-span L2 projections.
- `lem-multiscale-primitive-map-to-continuous-cdfs`: same finite orthogonal projections identify the primitive with the L2 integral.
- `lem-product-prior-posterior-second-moment-in-negative-sobolev-space`: F1 and final step use the unchanged weighted norm and finite trace.
- `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`: its final non-L2 contradiction uses coefficient uniqueness; the added injectivity argument supports that use. Its independent Gaussian/choice repair belongs to the sibling.
- `cor-weak-posterior-convergence-in-negative-sobolev-space`: step 1.1 uses beta as a metric; this is now explicitly proved. Its AC premise is unchanged.
- `cor-continuous-functionals-of-the-scaled-posterior-converge`: step 1.1 uses the metric sequential criterion for continuity of the test-integral map; metric separation is now supplied, with unchanged AC scope.
- `thm-projected-empirical-process-clt-in-m0w`: F5 and step 1.2 use finite Euclidean weak-to-BL convergence under stated AC; the separation repair adds no premise.
- `thm-multiscale-credible-band-holder-diameter`: F2 and steps 1.1–3.1 use precisely the unchanged calibration and finite radius limit; its coverage and diameter derivations need no repair.

The dependency traversal found the remaining direct embedding consumers `cor-canonical-white-noise-law-is-tight-under-choice`, `ex-white-noise-is-not-l2-valued`, `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent`, and `thm-weak-nonparametric-bernstein-von-mises-for-product-priors`; these retain the same contract and are the choice sibling's assigned branch. No review of unrelated mathematics is claimed. The transitive consumers receive no interface change. Missing Type-S/H BvM application remains with the density siblings.

## Required layout check

Executed after the final source edits:

`node tools/proof-layout.mjs items/def-negative-sobolev-space-for-white-noise.md items/lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces.md items/thm-cdf-and-multiscale-credible-band-calibration-from-bvm.md`

Exit 0: `proof-layout: 3 items, 11 steps, 0 defects`.

No hashes, readiness, native transitions or optional tests were run. One repair cycle used.

## Parent shared-interface refresh

After the parent explicitly permitted Haar in the primitive-map Statement, refreshed the proposed CDF contract F3 quote to the exact current Statement. Haar satisfies the same mean-zero, finite-overlap, support and L1 bounds; its finite scaling term is already included by the lemma. The unchanged Lipschitz conclusion still supplies the finite constant L_J in the CDF proof. No CDF mathematical edit or additional review cycle was needed. Parent owns the shared source changes and remaining consumer checks. Proposal frozen after this refresh.

## Additional necessary norm-CDF prerequisite

Authored `items/lem-density-bridge-norm-cdfs-are-continuous-and-strict.md`, after parent authorization, to discharge the actual density BvM application's missing norm-quantile conditions without adding posterior premises. It assumes full AC and the bounded positive density, Gaussian bridge covariance, admissible multiscale weights, and primitive-map hypotheses. Its conclusion supplies continuous norm CDFs, strict increase on the positive half-line, and unique positive finite interior quantiles for both multiscale and primitive supremum norms.

The proof gives a closed-linear-support argument from countable coordinate generation and independent Gaussian copies, a countable attained-coordinate maximum argument for multiscale atomlessness, a local derivation of primitive bridge covariance, and the Brownian reflection endpoint-interval sandwich with shifted thresholds for supremum atomlessness. Haar's finite scaling coordinate has norm weight one and is explicitly covered. The helper does not depend on the calibration theorem, so its norm-CDF conclusion can supply that theorem's A3 in density applications without a cycle.

The parent reported independently reading and checking the entire eight-step argument before freezing its body. Exact full contract proposal is `norm-cdf-contract.json`; exact dependency and placement intention is `norm-cdf-manifest-row.json`. New source frontmatter is supplied; the parent/root owns dependency-level reconciliation, live manifests/contracts, hashes and workflow evidence. No existing mathematical source was edited for this addition.

Final required check after its last source edit: `node tools/proof-layout.mjs items/lem-density-bridge-norm-cdfs-are-continuous-and-strict.md`, exit 0, `proof-layout: 1 items, 8 steps, 0 defects`.

The earlier CDF proposal's now-unused F10 citation has empty uses. The contract schema requires nonempty uses for a citation, so root integration should remove the unused F10 source fact, citation and `thm-subsequence-characterization-of-convergence-in-probability` source/manifest dependency, or otherwise reconcile unused context mechanically. This is an explicit proposal delta; frozen CDF source was not edited.
