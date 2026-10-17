# Step 3a reader report — batch 10

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `10` only

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models/emg-pcp01.md` (A page)
- `library/einstein-maxwell-models/emg-pcp01-examples.md` (B page)

Page prerequisites opened:

- `library/einstein-maxwell-models-mathematics/emg-cp02.md`
- `library/einstein-maxwell-models/emg-g04.md`

Assigned items opened in full:

- `lem-emg-spacelike-slice-normal-collar`
- `lem-emg-closed-two-form-exact-on-cauchy-product`
- `pthm-emg-local-electrovacuum-model`
- `pthm-emg-on-shell-electromagnetic-conservation`
- `pthm-emg-smooth-electrovacuum-maximal-model`
- `ex-emg-adopted-parallel-field-model`

Supplier statements and relevant proofs opened to check the assigned uses:

- Geometry and forms: `def-gr-smooth-lorentzian-objects`, `def-gr-spacelike-hypersurfaces-and-cauchy-sets`, `thm-gr-local-geodesics-and-exponential-map`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-gr-smooth-cauchy-temporal-splitting`, `def-de-rham-cohomology`, `lem-emg-lorentz-hodge-calculus`, `def-emg-lorentzian-forms`, and `lem-emg-observer-field-decomposition`.
- Model and data: `def-emg-geometry-units`, `def-emg-electrovacuum-cauchy-system`, `def-emg-constrained-electrovacuum-data`, `def-emg-periodic-high-sobolev-state`, `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `lem-emg-maxwell-stress-conservation`, and `lem-emg-classical-maxwell-stress-identity`.
- Local and maximal evolution: `thm-emg-local-high-sobolev-electrovacuum`, `thm-emg-smooth-local-geometric-uniqueness`, `thm-emg-sourcefree-smooth-maximal-development`, `def-gr-development-and-data-fixing-isometry`, `thm-gr-local-geometric-development`, `thm-gr-smooth-maximal-globally-hyperbolic-development`, `lem-emg-smooth-geometric-causal-research-suppliers`, `thm-emg-symmetric-hyperbolic-research-supplier`, `lem-emg-coupled-reduced-einstein-evolution`, `thm-emg-maxwell-gauss-propagation`, `thm-emg-einstein-gauge-propagation`, `thm-emg-gauss-codazzi-maxwell-constraints`, `lem-emg-fixed-smooth-background-harmonic-data`, and `lem-emg-fieldstrength-positive-symmetric-reduction`.
- Variations and analysis used in those proofs: `post-emg-einstein-maxwell-action`, `pthm-emg-action-field-equations`, `lem-emg-maxwell-action-variation`, `lem-emg-einstein-action-variation`, `def-gr-periodic-symmetric-hyperbolic-system`, `thm-gr-periodic-symmetric-hyperbolic-existence`, `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`, `thm-gr-periodic-symmetric-hyperbolic-smooth-persistence`, `lem-gr-reduced-einstein-principal-part`, `thm-gr-constraint-equations-in-normal-frame`, `lem-gr-periodic-sobolev-embedding`, `lem-gr-periodic-sobolev-algebra`, and `lem-gr-smooth-composition-and-commutator-estimates`.

The manifests, batch notes, cross-batch ledger, and proof contracts were used to locate the current carriers and their declared uses; none was treated as a mathematical verdict.

## Review and repairs

Both local mathematical lemmas were checked against their exact geometric and differential-form suppliers. The normal-collar proof applies smooth dependence of geodesics and the inverse function theorem pointwise; it does not claim a uniform width or a global normal exponential map. The exactness proof constructs the product flow from the temporal splitting, decomposes the closed form as `dt ∧ η_t + β_t`, and integrates `η_t`; its primitive is global and its pullback/exterior-derivative step is local-coordinate justified.

I repaired one proof-explication gap in each assigned development theorem. In `pthm-emg-local-electrovacuum-model`, proof step 3.1 now names the Cauchy embedding and the diffeomorphism `Ψ(t,x)=Φ_t(i(x))` supplied by step 1.1 of the exactness lemma, then states how the initial bundle data are pulled to the product, glued there, and transported back. In `pthm-emg-smooth-electrovacuum-maximal-model`, proof step 3.1 now names the analogous map for the maximal development and the same transport. These additions make the product used to construct the reference connection explicit; they do not change either theorem statement or physical scope.

The two affected `derivations` entries in `research/physics-remaining-80-2026-10-17-batch-10.proof-contracts.json` were updated to match. Neither item had a `verification.judge` record to remove.

Required checks after the edits:

- `reflow.mts` passed for both changed items.
- `precheck.mts` passed for both changed items.
- `proof-layout.mjs` on both changed items reported 2 items, 11 steps, 0 defects.

The action-variation and stress calculations were checked directly against the declared compact-variation, fixed-bundle, and Maxwell stress interfaces. The zero-matter specialization makes the matter current and tensor vanish; the sourced stress identity then gives the stated local conservation result. The maximal-development item keeps its conclusion within the smooth globally hyperbolic solution class and makes no completeness claim.

The torus example was checked directly: the deck transformations preserve the connection, the curvature has flux `2πκ₀`, the magnetic two-form is `B₀ dX∧dY`, both divergence constraints vanish, `e×ₕb=0`, and `6H²=2κB₀²/μ₀` supplies the scalar constraint. The example is conditional on the local-development supplier and makes no observation claim.

## Source checks

- Reall, *Part III General Relativity*, October 12, 2022 revision, §§3.3–3.4, printed pp. 37–39 ([author-hosted PDF](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf)): the geodesic initial-value equation, exponential map, and local normal-coordinate discussion. The local collar's joint smoothness and inverse-function steps are supplied by the exact mathematical items above.
- Tong, *General Relativity*, Chapter 3, §§3.3.1–3.3.2, printed pp. 120–122 ([chapter PDF](https://davidtong.org/pdfs/teaching/general-relativity/gr3.pdf)): exponential map and normal coordinates.
- Guillemin and Haine, *Differential Forms*, §2.6, Theorem 2.6.15, printed pp. 64–65, and Exercise 2.6.iv / Theorem 2.6.19, printed pp. 65–66 ([PDF](https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf)): homotopy invariance for closed forms and the product-coordinate homotopy identity. The assigned exactness lemma proves the required global product primitive within the item rather than relying on the cited exercise as a proof.
- Chruściel, *An introduction to the Cauchy problem for the Einstein equations*, §1.6, printed pp. 23–25 ([PDF](https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf)): source-free Maxwell equations and electric/magnetic Cauchy data. The notes use a global potential and do not supply the coupled field-strength local-existence proof used here.
- Reall, §§6.2–6.3, equations (6.8), (6.27)–(6.28), printed pp. 61–67 ([PDF](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf)): curved-spacetime Maxwell equations and the Maxwell stress tensor; conservation is posed as an exercise. The assigned local stress identity supplies the detailed argument and uses the stated SI normalization.
- Sbierski, *On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification*, Definitions and Theorems 2.6–2.8, printed pp. 10–12; the paper's relevant proofs are in §§3.1–3.3 ([arXiv PDF](https://arxiv.org/pdf/1309.7591)): the theorem statements treat vacuum. The electrovacuum maximal conclusion is taken conditionally through the current mathematical supplier and its separately stated local-existence and uniqueness obligations, not attributed directly to Sbierski.

These checks covered the relevant cited passages; I did not independently reread every cited work in full.

## Uneditable findings and page verdicts

No mathematical or physical defect requiring an out-of-scope source edit was confirmed. Draft supplier statements with pending checks remain conditional premises as stated in the assigned proofs; this reader did not certify or stamp them.

- `emg-pcp01`: pass. Its summary matches the current conditional local/maximal evolution claims and preserves the smoothness, constraint, bundle-sector, and empirical-scope qualifications.
- `emg-pcp01-examples`: pass. Its summary matches the single exact constrained torus example and does not present it as an observation or claim later-time isotropy.

Blocker: none.

## Coverage limit

The review opened the assigned items and pages and the direct or claim-critical supplier statements and proofs listed above. It did not independently audit the full transitive foundations of every supplier; broad remote mathematical background is used through the exact cited supplier interfaces. No claim of full reproof of that larger closure is made.
