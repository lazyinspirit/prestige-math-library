# Reader 32 — batch 32

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a review completed on 10 October 2026. Reader recommendations below are not judgment, adjudication or publication stamps.

## Opened inventory

Both assigned pages were opened in full: `em-energy-momentum-and-angular-balance` (A) and `em-energy-momentum-and-angular-balance-examples` (B). All seven assigned items were opened in full, in the balance dependency sequence (definitions, energy/momentum, angular, coupled totals, example):

- `def-em-vacuum-energy-flux`
- `def-em-vacuum-stress-momentum`
- `pthm-em-poynting-balance`
- `pthm-em-momentum-balance`
- `pthm-em-angular-balance`
- `pthm-em-coupled-total-conservation`
- `ex-em-vacuum-energy-flow-example`

Direct supplier statements/definitions were opened for the following IDs; the two local mathematical lemmas, the smooth Maxwell and continuum coupling formulations, the cross-product lemma and the divergence theorem were also read with their relevant proofs/explanations. This is a focused prerequisite review, not a recursive audit of every imported theorem.

- `cor-integral-over-a-null-set-vanishes`
- `cor-zero-derivative-implies-constant`
- `def-bounded-piecewise-c-one-euclidean-domain`
- `def-ck-euclidean-maps-and-diffeomorphisms`
- `def-countable-choice`
- `def-cross-product-in-r3`
- `def-directional-and-partial-derivatives`
- `def-divergence-and-curl-of-a-c1-vector-field`
- `def-em-complex-plane-wave`
- `def-em-fields`
- `def-em-lab-geometry`
- `def-em-si-conventions`
- `def-em-sources`
- `def-euclidean-inner-product`
- `def-multidimensional-rectangle-and-volume`
- `def-oriented-unit-normal-and-flux-of-a-surface-patch`
- `lem-cross-product-is-bilinear-alternating-and-orthogonal`
- `lem-em-parameter-integrals`
- `lem-em-quadratic-stress-identity`
- `lem-the-divergence-and-curl-of-a-cross-product`
- `post-em-lorentz-coupling`
- `post-em-vacuum-maxwell`
- `thm-algebra-of-derivatives`
- `thm-chain-rule-for-total-derivatives`
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition`
- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`
- `thm-complex-exponential-is-entire-with-derivative-itself`
- `thm-continuous-partial-derivatives-imply-total-differentiability`
- `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`
- `thm-eulers-formula`
- `thm-ftc-second-part`
- `thm-graphs-of-continuous-functions-have-content-zero`
- `thm-multidimensional-integral-properties`
- `thm-riemann-fubini-on-product-rectangles`
- `thm-total-derivative-computes-directional-and-partial-derivatives`
- `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`

Additional exact prerequisite definitions/statements opened during the review:

- `def-sr-affine-minkowski-model`
- `def-inertial-frame-and-inertial-chart`
- `def-spatial-euclidean-structure-of-an-inertial-frame`
- `post-sr-inertial-covariance`
- `def-integral-over-a-measurable-set`
- `def-riemann-integral-over-a-jordan-set`
- `def-lebesgue-outer-measure`
- `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`
- `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps`
- `thm-lebesgue-measure-is-a-complete-measure`
- `thm-linearity-of-the-lebesgue-integral-on-l-one`
- `thm-integral-triangle-inequality`
- `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`
- `thm-continuous-functions-on-compact-jordan-sets-are-integrable`
- `def-multidimensional-darboux-sums`
- `def-multidimensional-darboux-integral`

The manifest was parsed for the complete assigned inventory and direct suppliers. The batch-32 proof contract was checked against the opened source sections and current derivation paragraphs; stale quotations and usage mappings were refreshed. The binding owner directions were consulted for scope and sign conventions. No rendered evidence bundle was found in the task-local artifact search. Author notes and prior check reports were used as navigation, not as mathematical verdicts. Imported suppliers were identified through `research/math-imports.json`; their originals and snapshots were not edited.

## Repairs and evidence

1. **Energy and momentum conservation qualifications.** In `pthm-em-poynting-balance` Statement (c), retaining boundary flux is necessary for accounting, but its vanishing is not a necessary condition for a constant field-only energy: work and boundary contributions can cancel. The repaired prose explicitly retains both and does not infer field-plus-matter conservation without matter balances. The corresponding misleading scope wording in `pthm-em-momentum-balance` and `pthm-em-angular-balance` was repaired similarly. Evidence is their displayed fixed-volume equations. For a concrete smooth static Maxwell witness, write in fixed SI coordinates `E=a x_1 e_1`, `B=b x_2 e_3`, with positive constant gradients a,b of the appropriate field-per-length units. Then `rho=eps_0 a`, `J=(b/mu_0)e_1`, `div S=-ab x_1/mu_0=-J.E`, while the field-energy derivative is zero. On a positive-coordinate box the work integral and net boundary flux are both nonzero. The static momentum and angular balances likewise allow traction/force and flux/torque cancellation. No balance equation or physical coupling postulate was changed.

2. **Boundary-nullity citations.** The four balance proof Facts now identify the exact graph-coordinate Fubini and rigid-substitution argument in `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, Proof 4.1. Finite subadditivity then makes the finite face union null. This closes the omitted passage from graphs in local, possibly rotated coordinates to nullity in the laboratory coordinates. The divergence theorem and its cited mathematical premises were opened; the general fixed-volume branches retain AC_omega. The contracts retain the theorem's exact Statement quotation, since the contract schema does not accept a Proof section as `source_section`; the proof locator is explicit in the authored Fact and this report.

3. **Angular and total conventions.** `pthm-em-angular-balance` Fact F2 incorrectly located the Levi-Civita definition in the coordinate cross-product item; it now names `def-em-vacuum-stress-momentum`(d). Its contract's origin boundary case no longer infers zero divergence from a zero flux value: the surviving symmetric contraction cancels. In `pthm-em-coupled-total-conservation`, F7 now sums over 1,2,3, matching the defined Levi-Civita symbol and all spatial indices. The matter stress is explicitly a C1 map into real 3-by-3 matrices, with symmetry, row divergence and SI units stated; the other matter fields receive their matching SI units. The proof and A-page prose now distinguish net-flux constancy over an entire interval from tracking nonzero exchange. The already-correct cancellation and constancy arguments remain intact.

4. **Plane-wave verification.** `ex-em-vacuum-energy-flow-example` Verification 4.1 contained a zero-valued intermediate expression for curl B before the correct nonzero evaluation; it now gives the full coordinate curl directly. Step 6.1 originally used a positive-e3 parametrization on the lower face while treating it as outward; it now uses `(u,v) -> (v,u,a)` on `[0,L2] x [0,L1]`, whose cross product is negative e3. The final signs and formulas are preserved. The original invocation of the AC_omega divergence theorem without that premise, and the unstated Riemann/Lebesgue bridge in step 5.1, are replaced by a wholly Riemann computation: closed-box integral convention, continuous-integrand Fubini, the exact published one-dimensional rectangle differentiation theorem, FTC and six oriented rectangle patch integrals. The general divergence theorem is explicitly mentioned only for comparison. New direct suppliers are the rectangle differentiation theorem, compact-Jordan continuous integrability, and the two multidimensional Darboux definitions; all were opened. The removed direct parameter-integral edge is unnecessary for this proof. Parameter units are explicit. Step 7.1 proves unbounded whole-space box energies from a positive phase slab, resolving the previously unsupported infinite-energy remark while retaining the finite-box, ideal and nonempirical scope.

5. **Definitions and source fidelity.** The energy definition's formulas and verification are unchanged; its Tong reference is dated by the PDF's actual cover rather than an unsupported printing designation. The stress definition's references now distinguish its sigma from Tong/Landau's opposite-sign momentum-flux stress, identify the electromagnetic formula in Landau section 33 rather than generic section 32, and identify Griffiths' actual momentum-density equation. Its mistaken count of four quadratic objects is five (g, sigma, Pi, ell, x cross Pi). Verification 1.4 also no longer calls a cross Pi a constant vector: it is a matrix-valued field, while a cross g is a vector field, and only the translation parameter a is constant. Both regularity verifications remain polynomial component arguments. The angular locators now point to Tong section 5.6.3 and distinguish Griffiths' density formula from a flux formula not supplied there. The coupled citation now gives Landau (33.5)-(33.8), instead of nonexistent (33.9)-(33.10), and does not attribute a matter tensor to Tong section 5.6.2. The plane-wave locators were corrected from Griffiths pp. 382-385 to pp. 378-381 and from Landau pp. 118-120 to the actual sections 47-48 pp. 110-115.

6. **Contracts and formatting.** Updated `research/physics-em-sr-40-2026-10-08-batch-32.proof-contracts.json` for every affected source quotation, derivation, usage mapping, index/choice boundary and scope qualification. Corrected the energy definition contract's wrong clause label. No `verification.judge` record was present in the seven opened assigned items, and none was added. Reflow and precheck ran on all seven changed items; final formatting checks are recorded below. Seven item carriers, the A-page carrier and this batch's contract were edited. The B-page prose, manifests, plan, other batches, published content and mathematical imports were not edited.

## Independent source reading

- [Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), 236-page PDF with cover dated Lent Term 2015: section 4.4, printed pp. 92-94 / one-based PDF pp. 100-102, and sections 5.6.1-5.6.3, printed pp. 127-133 / PDF pp. 135-141. These passages supplied the energy and momentum conventions and the complete relevant angular cancellation. They do not license an empirical conclusion or an unstated matter model.
- [Griffiths, third edition](https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf), 596-page scan: printed pp. 346-348, 350-353, 355-356, 358-360 and 378-382. The web fetch exceeded its content-size limit, but a subsequent HTTP retrieval with a browser user agent succeeded. Relevant pages were read with PyMuPDF. Printed p. 380 / PDF p. 396 had empty extracted text and was rendered and visually inspected; it contains the relevant real-wave energy/flux formulas. Section 8.1.2's caveat about assigning open-surface energy flow is retained as source context, not turned into a uniqueness theorem for physical energy localization.
- [Landau and Lifshitz, third revised English edition](http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf), 387-page PDF: printed pp. 75-83, 110-116 and 118-121 were read from the retrieved file with PyMuPDF. Reading the originally cited but wrong ranges established the locator errors; sections 31-33 and the relevant plane/monochromatic-wave passages in sections 47-48 were then checked. Gaussian conventions were compared with the declared SI definitions. No entire-book reading is claimed.

## Uneditable prerequisites

- **`lem-em-parameter-integrals` — batch 13.** Statement Set form (line 47), Given, Facts F2-F3 and Proof 1.1-3.1 use Lebesgue measure and signed Lebesgue integral rules without carrying the premise that supplies that measure space in this library. The Surface form alone explicitly assumes AC_omega. The opened `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` and `thm-lebesgue-measure-is-a-complete-measure` say that the sigma-algebra/measure construction is established under Countable Choice. Needed repair: carry AC_omega into the Set form and its measure-context facts, or replace that dependency by an explicitly assumed finite measure space and prove the required compact-continuous-function integration facts there. This does not assert that Choice is necessary for the uniform difference-quotient estimate; it identifies an uncarried premise of the available construction. The assigned consumer `pthm-em-poynting-balance` already carries AC_omega in (b), so this gap does not invalidate its repaired conditional deduction. Fatal supplier-contract gap; routed in the findings JSON.
- **`lem-em-quadratic-stress-identity` — batch 13.** The final Statement paragraph (line 50) contains a literal tab followed by `imes` where the product-domain command should be `\times`. The preceding angular hypotheses and formulas define the product correctly, so this is a nonfatal presentation defect; replace that malformed final domain. Assigned consumer: `pthm-em-angular-balance`. Routed in the findings JSON.

The raw bytes of both suppliers were read and hashed; their observed hashes remained current at report completion. No pre-reader fingerprint was substituted for evidence of reading.

## Direct-consumer review and routing limit

The affected uses in all assigned direct consumers were reviewed after the repairs. Outside this batch, focused cited-use passages (not whole-item reviews) were opened in `pthm-em-covariant-stress-energy` (batch 37), `pthm-em-general-wave-ivp`, `pthm-em-wave-energy-average`, `texp-em-radiation-pressure-example` (batch 33), and `pthm-em-dipole-radiation`, `pthm-em-lienard-wiechert`, `pthm-em-larmor-nonrelativistic`, `pthm-em-lienard-emitted-power` (batch 36). The unchanged identities, regularity, singular exclusions and explicit Choice conditions used there remain available. Owners of those batches must refresh any full-Statement contract quotations invalidated by the repaired scope prose; their contracts were not edited here.

One downstream defect was independently observed: `pthm-em-dipole-radiation`, Facts F3 (line 89), calls `-oint S.n` energy leaving the volume. With outward normal, leaving power is `+oint S.n`; its negative is the surface contribution to the field-energy rate. Proof 4.1 (line 123) cites F3 to interpret its positive outward radiated-power integral. The numerical power formula was not independently re-audited, but the stated sign reading is inaccurate and needs the batch-36 owner's focused correction. Observed raw hash: `0bd40f8445ad564654e76456cda7816afbbcf9cb6aaaa03b57aa76f460c1e573`. This item is a downstream consumer, not a supplier reached by an assigned consumer's prerequisite closure. The supplied findings schema has no truthful outside-batch downstream-consumer subject type; it is therefore recorded here for manual Step-5b routing rather than mislabeled as an in-run dependency or an owned in-flight item.

## Page verdicts and blockers

| Page | Reader verdict |
|---|---|
| `em-energy-momentum-and-angular-balance` (A) | Confirmed local defects repaired; the conditional identities, fixed-domain integrations and explicit assumed-matter cancellation are supported. Lead disposition is still needed for the two batch-13 supplier issues and downstream contract refreshes. This is not an acceptance stamp. |
| `em-energy-momentum-and-angular-balance-examples` (B) | Assigned example repaired, including its choice-free finite-box proof and orientations; existing B-page prose matches the resulting formulas. No remaining assigned-item defect identified. B prose was left unchanged. |

No unfinished local repair remains. Outside-batch ownership prevents repair of the two supplier issues and the downstream sign reading; the Step-5b lead must route them. No experiment or measured numerical input is used by this batch; conclusions are deductions about adopted smooth classical models, not empirical validation.

## Validation actually run

- Reflow then precheck on each of the seven changed item paths: exit 0, seven precheck passes. The two final edited carriers were rechecked after their final changes.
- Rendercheck on exactly those seven items plus both assigned pages: exit 0, 9 files clean; actual KaTeX and renderer YAML parsing succeeded.
- Strict proof-contract check on the owned seven-item contract: exit 0, 0 errors and 0 warnings, 7/7 checked.
- Depcheck with `/tmp/reader32-items.json`, the exact seven assigned IDs: exit 0. Selected item/page checks and their prerequisite-cycle context passed; its 1,328-item / 257-page graph context is not a mathematical audit claim.
- Final required single batched proof-layout command on all seven changed item paths after the final formatter: exit 0, 42 steps, 0 defects. Earlier contract/render/layout failures during editing were corrected before these final successful runs; no success was inferred from those failed attempts.

## Coverage limitations

All seven assigned items and both assigned pages were opened in full. Direct supplier statements/definitions and the claim-specific supplier proofs described above were opened. This was not a recursive audit of every imported proof or of the downstream items. Bibliographic source checks cover the listed passages, not entire books or all citations on outside-batch suppliers. The exact current-run supplier hashes below bind the unresolved prerequisite observations; subsequent producer edits may require rebinding. Public-interface consumer uses were checked where changed prose could affect them, but outside owners retain their proof-contract refresh and manual downstream routing duties. No judgment, adjudication, whole-run gate or empirical certification was performed.

Observed supplier hashes (raw SHA-256, current snapshot):

- `lem-em-parameter-integrals`: `9825553c02247e9b748cda3bd2bb4c08f1dc40fc315f3c6970bbb6b481a70186`.
- `lem-em-quadratic-stress-identity`: `7475d1ca23ef784d965cdac79a71ab19d5ab9aef16892cca453779b6f1d3bde7`.
