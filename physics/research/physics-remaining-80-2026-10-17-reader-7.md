# Step 3a reader report — batch 7

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Batch: `7`

## Inventory

Opened the assigned pages:

- `library/einstein-maxwell-models-mathematics/emg-cp02.md` (A)
- `library/einstein-maxwell-models-mathematics/emg-cp02-examples.md` (B)
- The required page prerequisite `library/einstein-maxwell-models-mathematics/emg-cp01.md` for its model and conditional-status context.

Opened all 12 assigned items, in supplier-before-consumer order:

- `lem-emg-classical-maxwell-stress-identity`
- `lem-emg-fieldstrength-positive-symmetric-reduction`
- `thm-emg-maxwell-gauss-propagation`
- `lem-emg-coupled-reduced-einstein-evolution`
- `thm-emg-einstein-gauge-propagation`
- `thm-emg-local-high-sobolev-electrovacuum`
- `prop-emg-local-sobolev-stability-continuation`
- `thm-emg-smooth-local-geometric-uniqueness`
- `lem-emg-smooth-geometric-causal-research-suppliers`
- `thm-emg-sourcefree-smooth-maximal-development`
- `ex-emg-nonzero-parallel-field-data`
- `rem-emg-maximal-is-not-complete`

Also opened the batch manifest, reader brief, and batch-7 proof-contract file. Direct supplier interfaces used in the review included the EM model/data and Lorentzian form definitions; the Hodge, observer, stress, constraint and harmonic-initialization items; the ODE and inverse-function suppliers; the periodic symmetric-hyperbolic and Sobolev suppliers; the reduced Einstein and residual identities; the causal, local-development, maximal-development and geodesic suppliers. Exact statements were inspected for the causal supplier bundle. The relevant Sbierski source was checked at [arXiv:1309.7591](https://arxiv.org/pdf/1309.7591), §1.4.2 and §2, Theorems 2.6–2.8: the paper treats the vacuum Einstein equations, while the Einstein–Maxwell extension here depends on separate local model arguments. The assigned page's description of that source is accurate.

## Repairs

- `lem-emg-fieldstrength-positive-symmetric-reduction`: proved the all-spatial divergence identities from the oriented volume form and the coordinate Levi-Civita formula, and derived parallelism of the Lorentzian volume form from the determinant/Christoffel-trace identity. This closes the local calculation behind the Gauss split and Hodge-to-divergence conversion.
- `thm-emg-maxwell-gauss-propagation`: made the all-spatial Gauss identification cite that exact calculation, including its (C^1) first-derivative scope.
- `thm-emg-einstein-gauge-propagation`: made (H|_{\Sigma_0}=0) an explicit general initial hypothesis. The periodic-torus initialization is now identified only as one way to meet it, rather than as an initialization theorem for arbitrary slices. The statement now spells out the reduced equation, Maxwell evolution, field components and constraint equations. The proof records the exact normal projections and exhibits the first-order symmetric system for the subsidiary wave equation before using the local energy estimate.
- `thm-emg-local-high-sobolev-electrovacuum`: constructed the smooth harmonic initial jet locally in the arbitrary-slice clause, so that proof no longer applies the periodic-torus Sobolev initializer outside its domain.
- `thm-emg-smooth-local-geometric-uniqueness`: supplied the same local smooth jet construction and corrected step 2.2 to attribute the Maxwell equations to the established propagation step, not merely to the model definition.
- `prop-emg-local-sobolev-stability-continuation`: stated why the regularity argument applies to the restarted reduced solution, after translating time, before invoking the finite-regularity Maxwell and gauge propagation results.
- Updated the A-page summary to record the zero initial harmonic-vector condition.
- Synchronized the affected proof-contract derivations and citations. None of the six changed items had a stale `verification.judge` record.

## Validation

- Reflow ran on all six changed items and reported each unchanged.
- Precheck passed on all six changed items.
- Final `proof-layout` run: six items, 30 numbered steps, zero defects.

## Uneditable findings

`SCHEMA.md` §Verification fields requires every published proved-here theorem or lemma to have `verification.audited` or `verification.verified`. The following opened published suppliers have neither marker in their current frontmatter. These are publication-evidence defects; I found no mathematical falsity in the exact statements reviewed. Their current `status: published` is not supported by the schema-required audit record, so they cannot currently serve as accepted published premises for the assigned consumers.

| Published dependency | Assigned consumer whose dependency closure reaches it |
|---|---|
| `lem-gr-einstein-residual-and-subsidiary-identity` | `thm-emg-einstein-gauge-propagation` |
| `lem-gr-globally-hyperbolic-causal-structure` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `lem-gr-local-cauchy-neighborhood` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `lem-gr-periodic-sobolev-algebra` | `thm-emg-local-high-sobolev-electrovacuum` |
| `lem-gr-periodic-sobolev-embedding` | `thm-emg-local-high-sobolev-electrovacuum` |
| `lem-gr-reduced-einstein-principal-part` | `lem-emg-coupled-reduced-einstein-evolution` |
| `lem-gr-smooth-composition-and-commutator-estimates` | `thm-emg-local-high-sobolev-electrovacuum` |
| `lem-gr-time-separation-maximizers` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-auxiliary-complete-riemannian-metric` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-cauchy-surface-implies-globally-hyperbolic` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-convex-normal-neighborhoods` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-limit-curve-two-endpoints` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-local-geodesics-and-exponential-map` | `rem-emg-maximal-is-not-complete` |
| `thm-gr-local-geometric-development` | `thm-emg-smooth-local-geometric-uniqueness` |
| `thm-gr-normal-neighborhood-causal-cone` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-periodic-symmetric-hyperbolic-existence` | `thm-emg-local-high-sobolev-electrovacuum` |
| `thm-gr-periodic-symmetric-hyperbolic-smooth-persistence` | `thm-emg-local-high-sobolev-electrovacuum` |
| `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability` | `thm-emg-local-high-sobolev-electrovacuum` |
| `thm-gr-smooth-cauchy-temporal-splitting` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-smooth-maximal-globally-hyperbolic-development` | `thm-emg-sourcefree-smooth-maximal-development` |
| `thm-gr-volume-time-function` | `lem-emg-smooth-geometric-causal-research-suppliers` |
| `thm-gr-constraint-equations-in-normal-frame` | `thm-emg-einstein-gauge-propagation` |

The schema-conforming findings file records these 22 subjects individually. I did not edit published content. The assigned CP01 EMG suppliers remain draft with precheck pending; their exact statements and current draft status are recorded in the assigned items, so the consuming EMG development claims remain conditional on their eventual proof acceptance.

## Page verdicts and blocker

- **`emg-cp02` (A):** the summary tracks the reviewed Maxwell reduction, constraint recovery, local existence, and maximal-development scopes. The initial harmonic-gauge condition is now explicit. The page remains a draft mathematical development, conditional on the CP01 draft suppliers and the published-supplier audit records listed above.
- **`emg-cp02-examples` (B):** the parallel-field torus datum satisfies the four displayed constraints, and the nonzero magnetic period rules out a global potential on a neighborhood of the full initial torus. The maximality remark correctly makes no geodesic-completeness claim and does not claim a particular incomplete solution. The local existence part remains conditional on the reviewed EM suppliers.

No mathematical blocker remains in the assigned items after the repairs. The unresolved published-dependency audit markers are outside this reader's edit scope and block treating those published items as accepted suppliers under the current schema.

## Coverage note

I inspected the assigned pages/items, batch manifest and contracts, and exact direct supplier interfaces needed for the arguments above. I did not independently re-audit the complete proofs of every transitive published mathematics dependency; the missing audit markers are reported only for the directly used or explicitly inspected published suppliers listed above. No empirical observations or statistical claims occur in this batch.
