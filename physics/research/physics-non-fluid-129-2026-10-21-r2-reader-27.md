# Step 3a reader report — batch 27

- Run: `physics-non-fluid-129-2026-10-21-r2`
- Role: reader
- Scope: batch `27`
- Verdict: both assigned pages are acceptable after the two repairs below.
- Blocker: none.

## Opened inventory

### Assigned pages

- `emg-fx12` — `library/einstein-maxwell-models-mathematics/emg-fx12.md` (draft A page; mathematics library). I checked its title, page classification, item placement, and required pages. Its listed items are `def-emg-fx-matrix-harmonic-problem`, `lem-emg-fx-mazur-comparison`, `def-emg-fx-stationary-axisymmetric-setup`, and `rem-emg-fx-stationary-spacetime-obligations`.
- `emg-fx12-examples` — `library/einstein-maxwell-models-mathematics/emg-fx12-examples.md` (draft B page; mathematics library). I checked its companion relationship, item placement, and required page.
- Required page context opened: `emg-fx03`, `emg-fx09`, `emg-mg02`, and `qsm-states-ensembles`. Their current page IDs, classifications, statuses, placements, and listed page requirements were inspected. The relevant QSM supplier is a mathematical lemma on the published QSM page.

### Assigned items

All five current item carriers and the current batch-27 proof contract were opened:

1. `def-emg-fx-matrix-harmonic-problem` — positive Hermitian determinant-one matrix fields on a bounded smooth Euclidean domain.
2. `def-emg-fx-stationary-axisymmetric-setup` — the Lorentzian and periodic-isometry data, the nondegenerate two-plane region, and its orthogonal rank-two distribution.
3. `lem-emg-fx-mazur-comparison` — the pointwise matrix identity and full-Dirichlet uniqueness proof.
4. `ex-emg-fx-diagonal-harmonic-maps` — the scalar diagonal reduction and its uniqueness consequence.
5. `rem-emg-fx-stationary-spacetime-obligations` — the distinction between the abstract Euclidean theorem, the local spherical result, and the additional hypotheses needed for a spacetime uniqueness proof.

### Supplier items opened in dependency context

- Matrix and smoothness suppliers: `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-invertible-matrix-and-general-linear-group`, `def-determinant-of-a-square-matrix`, `cor-square-matrix-invertible-iff-determinant-is-a-unit`, `cor-inverse-matrix-by-adjugate`, `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-determinant-multiplicative`, `thm-algebra-of-derivatives`, `def-directional-and-partial-derivatives`, `thm-heine-borel-rn`, and `thm-extreme-value-metric`.
- Spectral and diagonal-sector suppliers: `lem-qsm-matrix-state-calculus`, `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`, `thm-chain-rule-for-total-derivatives`, and `thm-am-gm`.
- Geometry suppliers: `def-emg-lorentzian-forms`, `def-gr-killing-field`, `def-emg-local-potentials-and-circle-data`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-lie-derivative-of-a-tensor-field`, and `def-directional-and-partial-derivatives`.
- Scope-remark suppliers: the exact current statements of `thm-emg-fx-local-charged-birkhoff`, `def-emg-fx-spherical-quotient`, `def-emg-fx-spherical-orbit-geometry`, and `lem-emg-sphere-flux-holonomy`, as well as the local-potential definition above.

The published mathematical suppliers were used at their inspected statements and relevant clauses; this review did not re-audit every transitive proof behind those published suppliers.

## Mathematical and source review

- The matrix definition fixes $d,n\ge1$, a nonempty bounded connected smooth domain, entrywise regularity on a neighborhood of its closure, positive Hermitian determinant-one matrices, and the componentwise Euclidean divergence. The cited matrix definitions fix the zero-based indices, so $\operatorname{tr}A=\sum_{j<n}A_{jj}$ is unambiguous.
- In `lem-emg-fx-mazur-comparison`, differentiating $\Psi=\Phi_1\Phi_0^{-1}-I_n$ gives $\partial_a\Psi=\Phi_1\Delta J_a\Phi_0^{-1}$. The divergence equations remove the derivative-current term; Hermitian positivity and cyclicity of trace give $\operatorname{tr}(M_a^\dagger M_a)\ge0$. The determinant-one congruence and AM–GM equality case give $u=\operatorname{tr}\Psi\ge0$, with equality exactly at $\Phi_1=\Phi_0$. The proof then supplies its own bounded-domain maximum argument using $u+\epsilon|x|^2$, rather than leaving a maximum-principle dependency unstated. Full boundary equality is used.
- The stationary-axisymmetric setup defines the manifold structure, Killing field, smooth $U(1)$ action, axis, commutation, $U_*$, projection, and circularity condition. Its own text says commutation and integrability are not assumed by the definition.
- The exact current local Birkhoff theorem is draft and states the nonvanishing $dr$ and $z$ hypotheses and the local-only conclusion. The cited spherical-orbit definition supplies the connected, simply connected patch. The published sphere-winding lemma's product-circle example has $F=0$ and holonomy $e^{-2\pi ia}$, nontrivial for $a\notin\mathbb Z$; the local-potential definition distinguishes chartwise potentials from a global potential.
- I opened the cited source passages used for the stationary-spacetime scope discussion:
  - Chruściel, Lopes Costa, and Heusler, *Stationary Black Holes: Uniqueness and Beyond* (2012), §7.1, PDF pp. 36–37, equations (7.1)–(7.3): the relative-matrix identity, current-conservation term, and the additional target-positivity and second-symmetry requirements for the black-hole application. <https://arxiv.org/pdf/1205.6112>
  - Heusler, *Black Hole Uniqueness Theorems* (1996), Chapter 10, §10.2, Proposition 10.3 and equations (10.10)–(10.12), printed pp. 171–172; §10.3, printed pp. 172–174: the general identity is separated from the circular Kerr–Newman boundary and positivity argument. <https://ru.djvu.online/file/ooXRsSuiVzYAO>
  - Mazur, *Black Hole Uniqueness Theorems* (2000), §§II and V, PDF pp. 2–3 and 18–21, equations (35)–(38): stationary reduction can lose target positivity at an ergosurface, while the global identity uses symmetry and black-hole boundary conditions. <https://arxiv.org/pdf/hep-th/0101012>
- No empirical observations or statistical inference occur in this mathematical batch. No TikZ or tikzcd diagrams occur in the two assigned pages or five assigned items.

## Repairs

- `items/ex-emg-fx-diagonal-harmonic-maps.md`, Example: added the explicit hypotheses that both $u$ and $v$ are smooth and harmonic before applying the full-boundary uniqueness result. The earlier Statement allowed arbitrary smooth $u,v$, while Verification step 3.1 required both to be harmonic. The conclusion now matches the proof and preserves the scalar uniqueness consequence. I updated the batch-27 contract's step-3.1 derivation to record the explicit smoothness and harmonic hypotheses. A search of current items, pages, and batch manifests found no other consumer of this example. No `verification.judge` record was present; I did not add a verification stamp.
- `items/rem-emg-fx-stationary-spacetime-obligations.md`, Remarks: clarified that circularity is the page-local integrability condition on $U_*$ and that a spacetime application must separately establish commutation. This aligns the remark with `def-emg-fx-stationary-axisymmetric-setup`, which does not assume the generators commute.
- Reflow returned `unchanged` for both edited items. Precheck passed for the example (one proof checked) and reported zero proof steps for the remark. The final proof-layout command covered both paths and reported 2 items, 4 steps, 0 defects. Existing pending precheck metadata was left unchanged; this reader did not stamp items.

## Uneditable findings

None. No confirmed defect in a published or other-batch dependency remained after checking the exact uses above.

## Page verdicts

- `emg-fx12`: pass. Page metadata and item inventory are consistent; its local matrix comparison and geometry definitions are explicit, and the remark now matches the setup's separate commutation and circularity conditions.
- `emg-fx12-examples`: pass after the example repair. The B page correctly lists its one example and names the A-page companion.

## Coverage note

I inspected the exact supplier statements needed for the assigned claims, but did not re-prove all transitive published mathematics. The full `def-emg-causal-solution-and-horizon-vocabulary` body was not needed because the assigned setup makes no causal or horizon assertion and delegates any future use to that supplier. The published `qsm-states-ensembles` page contains unrelated diagrams; they are outside batch 27 and were not adjudicated. I checked the draft Birkhoff theorem against its current Statement and prerequisites, not by re-running its proof or its cited external derivation. The assigned items, pages, and relevant dependency uses were reviewed; no in-scope blocker remains.
