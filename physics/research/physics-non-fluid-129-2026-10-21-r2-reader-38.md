# Step 3a reader report — batch 38

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 38

## Opened inventory and review order

I read the assigned pages and items in supplier-before-consumer order, then checked the proof-contract rows and cited sources.

1. Page prerequisites: [gr-homogeneous-cosmology](../library/general-relativity/gr-homogeneous-cosmology.md), [gr-fx03-geometric-cauchy-stability](../library/general-relativity/gr-fx03-geometric-cauchy-stability.md), and [gr-curvature-and-tides](../library/general-relativity/gr-curvature-and-tides.md).
2. Direct mathematical suppliers: [def-gr-periodic-torus-and-sobolev-spaces](../items/def-gr-periodic-torus-and-sobolev-spaces.md), [def-gr-smooth-lorentzian-objects](../items/def-gr-smooth-lorentzian-objects.md), [def-gr-curvature-tensor-and-derived-tensors](../items/def-gr-curvature-tensor-and-derived-tensors.md), root-mathematics def-countable-choice at ../../items/def-countable-choice.md, and root-mathematics cor-zero-derivative-implies-constant at ../../items/cor-zero-derivative-implies-constant.md.
3. Assigned A page: [gr-fx10-cosmological-dynamics-and-shear](../library/general-relativity/gr-fx10-cosmological-dynamics-and-shear.md).
4. Assigned item dependency order: [def-gr-fx-bianchi-i-data](../items/def-gr-fx-bianchi-i-data.md), [def-gr-fx-bianchi-i-curvature](../items/def-gr-fx-bianchi-i-curvature.md), [lem-gr-fx-bianchi-i-curvature-components](../items/lem-gr-fx-bianchi-i-curvature-components.md), [prop-gr-fx-kasner-vacuum](../items/prop-gr-fx-kasner-vacuum.md), [prop-gr-fx-bianchi-shear-decay](../items/prop-gr-fx-bianchi-shear-decay.md), then [ex-gr-fx10-1](../items/ex-gr-fx10-1.md) and [ex-gr-fx10-2](../items/ex-gr-fx10-2.md).
5. Assigned B page: [gr-fx10-cosmological-dynamics-and-shear-examples](../library/general-relativity/gr-fx10-cosmological-dynamics-and-shear-examples.md).

I also read the assigned [batch manifest](physics-non-fluid-129-2026-10-21-r2-batch-38.pages.json), [proof contracts](physics-non-fluid-129-2026-10-21-r2-batch-38.proof-contracts.json), and [cross-batch dependency record](physics-non-fluid-129-2026-10-21-r2-batch-38.cross-batch-dependencies.json). They were treated as evidence, not verdicts. No TikZ or tikzcd diagrams occur in either assigned page or the seven assigned items.

## Mathematical review

- The Bianchi I definition supplies the product manifold, quotient-coordinate convention, positive C² scale factors, metric, time orientation, units, and curvature convention. The cited mathematical definitions give the torus, smooth Lorentzian, and tensor-curvature conventions; the local C² extension is stated explicitly rather than inferred from the smooth suppliers.
- The C² curvature definition's Christoffel coefficients are symmetric in their lower indices and satisfy metric compatibility by the displayed expansion. Its lowered-difference argument proves uniqueness. Because quotient-chart transitions are translations, the local arrays and their derivatives agree on overlaps; the item does not claim a general low-regularity tensoriality result.
- I independently substituted the diagonal metric into the local formulas. The only nonzero Christoffel coefficients are \(\Gamma^0{}_{ii}=a_i^2H_i/c^2\) and \(\Gamma^i{}_{0i}=\Gamma^i{}_{i0}=H_i\). The two displayed curvature families have the stated signs under \(R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a\), and contraction gives the stated Ricci components. The remaining-index-pattern argument is concise but sufficient from the listed nonzero connection coefficients and vanishing spatial derivatives.
- The Kasner proof correctly obtains \(\operatorname{Ric}_{00}=(P-Q)/t^2\) and \(\operatorname{Ric}_{ii}=a_i^2p_i(P-1)/(c^2t^2)\). The nonstatic converse selects a nonzero exponent; the forward direction checks every component. The all-zero branch is handled separately by the full curvature formulas.
- The shear proof correctly subtracts the assumed diagonal equations, retains the \(c^2(Q_i-Q_j)\) forcing term, and uses the published zero-derivative corollary on the open interval \(I\) only in the isotropic case. The resulting constant \(C=V^2\sigma^2\) has units \(\mathrm{m}^6\mathrm{s}^{-2}\); that omitted unit was repaired below.
- Both examples' exponent arithmetic, shear values, and curvature conclusions check out. For the flat branch, \(r=ct\), \(\theta=\alpha x^1\), and the inverse map establish a diffeomorphism onto an open subset of \(T>|X|\); direct pullback gives the stated local isometry. The periodic chart does not thereby give a global quotient-coordinate map, as the item correctly states.

## Source checks

- Rishabh Jha, *Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies*, Section 4.3.1, equations (164)–(172), printed pp. 36–38 ([arXiv PDF](https://arxiv.org/pdf/2204.03537)). The cited vacuum Bianchi I passage gives the power-law spatial metric and Kasner sum constraints. The local proposition supplies its own calculation for the specified C² torus metric and treats the flat branch separately.
- Diego L. Cáceres, Leonardo Castañeda, and Juan M. Tejeiro, *Shear Dynamics in Bianchi I Cosmology*, Section 2, equations (2.1)–(2.2), and Section 2.1, equations (1.6), (2.8)–(2.17), printed pp. 2–4 ([arXiv PDF](https://arxiv.org/pdf/1003.3491)). These passages cover the Bianchi I metric/connection and the paper's shear calculation under its stated perfect-fluid and no-anisotropic-pressure conditions. They do not supply the proposition's arbitrary diagonal \(Q_i\) equation; that part is derived locally from the declared equations and the local Einstein components.
- The published mathematical corollary cor-zero-derivative-implies-constant states constancy for a continuous real function on an order-convex interval whose derivative vanishes at every interior point. The assigned \(I\) is an open interval, so the hypothesis is met.

## Repairs and validation

1. In prop-gr-fx-bianchi-shear-decay.md, stated that \(C\) has units \(\mathrm{m}^6\mathrm{s}^{-2}\) in the Statement and in proof step 4.1. This follows from \(C=\tfrac12\sum_i(Vd_i)^2\), \(V\) in \(\mathrm{m}^3\), and \(d_i=H_i-H\) in \(\mathrm{s}^{-1}\). Updated the step-4.1 contract derivation.
2. Reviewed its current direct consumers, ex-gr-fx10-1 and ex-gr-fx10-2. Their conclusions and calculations remain valid; added the unit qualification to each F5 fact and refreshed the matching supplier-statement quote in the proof contract. The current item/page search found no additional consumers.
3. In ex-gr-fx10-2.md, renamed the rapidity-like coordinate parameter from \(\eta\) to \(\theta\) in verification step 3.1, since the Statement already uses \(\eta\) for the Minkowski metric and the proof later writes \(\Phi^*\eta\). Updated that contract derivation and its local-chart finite-check note.
4. No verification.judge record was present on the edited items. No supplier or B-page content was edited.

Ran the required commands on each changed item:

- node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/prop-gr-fx-bianchi-shear-decay.md — unchanged.
- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/prop-gr-fx-bianchi-shear-decay.md — pass.
- The corresponding reflow.mts and precheck.mts commands for items/ex-gr-fx10-1.md — unchanged / pass.
- The corresponding reflow.mts and precheck.mts commands for items/ex-gr-fx10-2.md — unchanged / pass.
- Final batch format check: node tools/physics-support/proof-layout.mjs items/prop-gr-fx-bianchi-shear-decay.md items/ex-gr-fx10-1.md items/ex-gr-fx10-2.md — 3 items, 10 steps, 0 defects.

## Uneditable defect

The assigned A page's current frontmatter requires list contains gr-homogeneous-cosmology and gr-curvature-and-tides but omits gr-fx03-geometric-cauchy-stability. The exact assigned batch manifest and canonical plan list all three, and the current cross-batch dependency record identifies the page edge to gr-fx03-geometric-cauchy-stability. The assigned mathematical items do not use results from that page, so this is a suspected page-ordering/interface inconsistency rather than a proof gap. The page's requires metadata is outside the authorized A-page-prose write scope. It is retained as the sole uneditable finding in the JSON output. No other unresolved mathematical or source-fidelity defect was found in the assigned item set.

## Page verdicts

- gr-fx10-cosmological-dynamics-and-shear (A): item placement matches the five assigned A items and its assigned mathematics passes review. Its page dependency metadata differs from the plan and manifest; the owner should reconcile the intended page-ordering edge.
- gr-fx10-cosmological-dynamics-and-shear-examples (B): correctly places the two assigned examples under its A-page companion and requires that A page. No B-page prose exists to review, and no B-page edit was made. Page passes this review.

## Blocker

No mathematical blocker remains. The A-page frontmatter dependency discrepancy needs owner disposition if the planned page-ordering edge is intended to remain; this report does not certify or stamp the batch.
