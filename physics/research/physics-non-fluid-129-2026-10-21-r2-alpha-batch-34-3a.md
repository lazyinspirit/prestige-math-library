# Batch 34 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-34`.

The scope routes exactly `refuter:34:1`; pre/post reader snapshots agree and the reader reports no edits or findings. Five risk reviews are required.

## Dependency-order review

### `lem-gr-fx-cauchy-slices-are-diffeomorphic`

Reviewed current four-step proof and exact Cauchy, causal-curve, diffeomorphism and manifold inverse-function statements. Every complete timelike orbit meets Sigma once, giving bijectivity. The projection kernel is the timelike orbit line and intersects the positive-definite tangent three-plane trivially; equal dimensions give an invertible differential. Local smooth inverses glue to the unique inverse. Empty product/slice case is vacuous and sound; no choice or completeness beyond the supplied flow is inferred. No repair needed.

Current claim and supplier paths: `items/lem-gr-fx-cauchy-slices-are-diffeomorphic.md`, `items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md`, `items/def-gr-causal-curves-and-reachability.md`, `items/def-diffeomorphism-and-local-diffeomorphism-of-manifolds.md`, `items/thm-smooth-inverse-function-theorem-on-manifolds.md`. Risk review complete. No routed decision for this untouched unflagged item.

### `lem-gr-fx-trapped-boundary-compactness`

Read all eleven steps and current exact direct supplier statements; checked the Raychaudhuri proof and focal-exclusion variation proof. Observer normalization g(ell,N)=-1 and a finite local two-branch cover yield c>0 without a global normal frame. Closedness of J+(S), short future timelike segments, and push-up give E+(S)=boundary I+(S), including p in S. Zero-length generators are separated. The two-point exponential differential gives ell-aX timelike for a suitably signed small a, proving normality. Completeness and smooth geodesic dependence supply variation data through and past 2/c, including focal equality; strict later focal exclusion bounds every boundary generator. Finitely many compact patch closures times [0,2/c] have compact geodesic images; the closed boundary is compact. Continuous images here can also be verified directly by pulling back any open cover, so the metric wording of the cited image theorem causes no unmet prerequisite. Countable and Dependent Choice cover the causal suppliers; no global orientability or curvature blow-up is asserted. No repair needed.

Supplier evidence: current Definition/Statement sections of all 28 declared dependencies, and `prop-gr-fx-null-raychaudhuri` Proof 1.1–4.1 plus `lem-gr-fx-null-focal-boundary-exclusion` Proof 1.1–7.1. The normal variation is smooth as a parameterized family through caustics; immersion is only needed before focal rank loss. Risk review complete; no routed carrier decision.

### `thm-gr-fx-penrose-incompleteness`

Checked all eight steps against exact current splitting, volume-measure, temporal-monotonicity, slice-identification, compact-horismos, invariance-of-domain and compact-Hausdorff suppliers. AC supplies DC and Countable Choice and is also the explicit hypothesis of invariance of domain. Nonempty compact S ensures the volume-measure input is nonempty and T|S attains a minimum outside I+(S), so the boundary is nonempty even without assuming S achronal. Complete timelike orbits are inextendible by T tending to both infinities. Projection is injective by boundary achronality, open by charts and invariance of domain, and closed by compactness and Hausdorffness. Connectedness forces surjectivity, contradicting the given noncompact Cauchy slice via the proved slice diffeomorphism. Conclusion is finite maximal future affine endpoint only. No repair needed.

All direct cited Definition/Statement sections were inspected at their current item paths. Risk review complete. No routed decision for this untouched unflagged carrier.

### `ex-gr-fx06-1`

Checked all four steps and all six direct supplier statements. For R>0, both vectors are nonzero future null normals with pairing -2. Constant flat metric gives nabla_X partial_t=0 and nabla_X partial_r=X/R; tracing plus/minus q/R in dimension two gives plus/minus 2/R. Angular chart identities agree on overlaps and hence globally; r=0 is excluded. One positive expansion prevents application of the trapped-surface hypotheses to this sphere. No assertion is made about arbitrary surfaces or empirical measurements. No repair needed.

All direct cited Definition/Statement sections were inspected at their current item paths. Risk review complete. No routed decision for this untouched unflagged carrier.

### `ex-gr-fx06-2` — `refuter:34:1`

Reviewed all ten verification steps and every direct supplier statement. The global inverse of the hyperboloid parametrization is smooth. For any inextendible causal curve, dot(tau)>0 a.e. and a>=1/H yield the componentwise bound |omega^j(s2)-omega^j(s1)|<=H(tau(s2)-tau(s1)); any finite limiting tau forces an S3 endpoint, so each slice is Cauchy. Null geodesics have ambient acceleration fX, and differentiating <X,X>=H^-2 with null speed forces f=0; the entire ambient affine line stays on the hyperboloid. Warped-product substitution gives Ric=3H^2g, extending to poles by smoothness. At chi=pi/2 both future normalized normals have expansion 2H tanh(H tau0)<0 for tau0<0; tau0=0 is excluded and H>0 avoids degeneracy. Product-flow slice identification excludes any noncompact smooth spacelike Cauchy slice. Checked conformal transformation eta=arcsin(tanh(H tau)), equal diagram scales, regular poles, spacelike boundaries and both future null arrows. Confirmed and repaired the false exclusive choice-use claim in A1: F12 and F10 also require DC/Countable Choice, already supplied by AC. All statements and dependencies remain unchanged; repair confidence 1.

Verdict: **confirmed_fatal**, repaired completely with `repair_confidence: 1`. The false sentence is in Facts & Assumptions [A1], not in the Example interface. F12 is the current `lem-gr-causal-curve-calculus` Statement (a)–(b), with explicit Countable Choice and Dependent Choice assumptions; step 1.2 uses its absolute-continuity calculus and coordinate integral estimate. F6 is `thm-gr-cauchy-surface-implies-globally-hyperbolic`; F10 is `lem-gr-fx-trapped-boundary-compactness`, likewise explicitly conditional on these choice principles. Steps 2.1 and 3.1 invoke them. AC was already adopted, so no hypothesis or model conclusion changes. Replaced the exclusive-use sentence by a statement supplying all cited geometric/causal choice hypotheses, with those three exact uses enumerated. Updated the contract choice-boundary evidence and risk review. Provenance remains honestly ai-generated for this example; no judge stamp exists to invalidate. Manifest and dependency graph remain unchanged. No Statement/Definition or physical-interface consumer propagation is triggered.

The pre/post reader raw item hashes both equal `e52f1e02c87086f9dd554a4c4195db889d82c9b3b700030ee23072923da0daac`, matching the pre-edit current carrier. The scope records observed carrier fingerprint `e12951020d3afdd188217ee918cc90f199136fd36bde133ac1ee85f780c2b337`; this is the engine carrier-object fingerprint, not a raw item digest (step3-scope.mjs uses hashValue(carrier)). There is no missing-preimage disposition or historical repair claim. The exact reported false sentence was present in the independently inspected current carrier.

## Sources, diagram, and scope limits

Independently retrieved Witten, [arXiv:1901.03928v6](https://arxiv.org/html/1901.03928v6), §§5.4–5.6, equations (5.14)–(5.16) and the first de Sitter exercise: negative expansion supplies a finite focal bound; compact trapping yields compact future boundary; the complete de Sitter model has compact Cauchy slices. These are contextual source statements; the local proofs supply details and assume null Ricci directly, without an Einstein-equation inference. Also retrieved the precise Senovilla–Garfinkle [Theorem 2](https://arxiv.org/html/1410.5226v2): noncompact Cauchy, closed future trapping and null convergence imply future null incompleteness. No claim to a full-paper audit is made. Jaramillo et al. was retrieved for navigation; its full relevant sections were not independently re-read in this pass, and no new proof claim rests on that retrieval.

The sole TikZ diagram is in `ex-gr-fx06-2`. Its equal-scale square, upward arrows of slopes +1 and -1, regular poles, compact horizontal Cauchy slice and spacelike conformal boundaries agree with its explicit conformal metric. No diagram correction/addition is needed. The two assigned pages are frontmatter-only; neither has a routed page obligation. All reviewed claims are mathematics-domain model deductions, with no empirical premises, statistical inference, asserted observational certainty, horizon-existence conclusion, or curvature-divergence conclusion.

## Records and local checks

Exactly one decision is recorded in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-34-3a-decisions.json`, with closed ledger defect `physics-non-fluid-129-2026-10-21-r2-3a-batch-34-choice-use` (disposition `fixed`, confidence 1). The refuter's severity is retained because its literal choice-use claim is false; the model theorem itself did not need a new assumption. All five contract risk reviews were replaced with item-specific Alpha evidence. The eight owning cross-batch rows and frontier dependency note now describe current uses without claiming readiness or judgment. No published supplier defect was confirmed, so no published-ledger mutation or lock was needed. Imported mathematics and published content were not edited.

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-34.proof-contracts.json`: five required items, zero errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-gr-fx06-2.md`: one checked, zero failing.
- `node tools/physics-support/rendercheck.mjs items/ex-gr-fx06-2.md`: one file, no errors.
- Final item-layout check, run once after the final item edit: `node tools/physics-support/proof-layout.mjs items/ex-gr-fx06-2.md`: one item, ten steps, zero defects.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-34.proof-contracts.json --require-reviewed`: five routed risk items, zero errors.

Current repaired raw item SHA256: `f799afb86a748c335db89d3b16ad666ab9efcc3d04a463ebcea25b98d3a67353`. No local judge, stamp, dispatch, certification, or engine gate cycle was run. No remaining blocker or outside repair obligation was identified in this assigned review. Engine-owned hash stamping and gate battery remain pending.
