# Step 3a reader report — batch 16

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `16`

## Opened inventory

Assigned pages:

- `emg-mm03` — `library/einstein-maxwell-models-mathematics/emg-mm03.md`
- `emg-mm03-examples` — `library/einstein-maxwell-models-mathematics/emg-mm03-examples.md`

Assigned items:

- `lem-emg-potential-maxwell-wave-identity`
- `lem-emg-controlled-maxwell-wkb`
- `lem-emg-source-and-test-scaling`
- `thm-emg-weak-slow-test-lorentz-limit`
- `ex-emgmath-ml-b07`
- `ex-emgmath-ml-b08`

I opened the direct mathematical suppliers used by those claims, including the EM formal-system and Lorentzian-form definitions; the Levi-Civita, curvature, dual-connection, Hodge, observer, and worldline suppliers; the in-flight EM energy-condition and charged-dust results; the prescribed-field ODE result; and the analysis, complex-number, trigonometric, Euclidean-norm, and integration results used in the proofs. The exact targets included `def-emg-matter-formal-systems`, `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-algebraic-symmetries`, `def-dual-connection`, `thm-clairaut-schwarz-mixed-partials`, `def-gr-timelike-worldline-and-proper-time`, `lem-gr-observer-projection-decomposition`, `def-emg-pointwise-energy-conditions`, `def-product-connection-on-tensor-and-hom-bundles`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-emg-selected-matter-energy-conditions`, `thm-emg-charged-dust-projection`, and `lem-rpm-external-charge-local-ivp`. I also opened the direct analysis suppliers actually used, including the chain rule, mean-value, Picard–Lindelöf, FTC1/FTC2, continuous-implies-integrable, real-power, extreme-value, integral linearity/monotonicity, trigonometric, square-root, inverse-positive, Cauchy–Schwarz/Euclidean-norm, absolute-value, interval, and complex-exponential suppliers.

The published `prop-emg-test-field-residual-order` was inspected as existing context. The repaired source-scaling lemma no longer depends on it: its residual identity is now derived directly from the local EM tensor and residual definitions.

## Repairs and evidence

- In `lem-emg-source-and-test-scaling`, the premise for a source-free field now matches the exact formal equations of `def-emg-matter-formal-systems`: $dF_0=0$ and $\nabla_a(F_0)^{ab}=0$. The old Hodge-form premise $d(\star_gF_0)=0$ was not accompanied by a local proof of its equivalence to the declared divergence equation. I proved scaling of both formal equations by linearity, retained the quadratic stress scaling, and derived the fixed-metric residual directly from the displayed residual definition. I removed the now-unused `prop-emg-test-field-residual-order` edge. This repair is mathematical and makes no physical or empirical claim.

- In `ex-emgmath-ml-b08`, I added the missing divergence check for its constant magnetic field: in the stated Minkowski coordinates $F^{ab}$ has constant components, so $\nabla_aF^{ab}=\partial_aF^{ab}=0$. The existing $dF=0$ and Hodge-star check remain. This now supplies both formal source-free Maxwell equations required by the repaired source-scaling lemma.

- In `lem-emg-source-and-test-scaling`, I extended the Coulomb-shell integrand by zero to a nonnegative Borel function on $\mathbb R^3$ before applying the polar-coordinate theorem. I added `thm-continuous-implies-integrable` and explicitly checked continuity and integrability of $r^{-2}$ on $[\ell,2\ell]$ before applying FTC2. The field remains defined only on the finite annulus; no point-source or general-regularization conclusion is added.

- In `lem-emg-controlled-maxwell-wkb`, I defined the WKB label as the displayed finite phase-amplitude family with its four pointwise constraints and stated that it asserts no convergence of a longer series. The A-page scope now gives the same precise meaning for the page title; the examples page requires this A-page. I made the compact chart set explicit as $K\subseteq y(V)$, defined the finite-regularity exterior derivative used for $C^3$ amplitudes, and added the local Clairaut argument that gives $dF_\epsilon=0$. I added `thm-clairaut-schwarz-mixed-partials` and `thm-continuous-implies-integrable`; the latter supplies the integrability needed before differentiating the scalar transport integral with FTC1.

- In `lem-emg-potential-maxwell-wave-identity`, I stated the $C^3$ coordinate extension of $dA$ and the covariant-derivative component formula, and showed the antisymmetrized coordinate-transition terms cancel. I added `thm-clairaut-schwarz-mixed-partials` for that regularity argument. The curvature contraction and sign were checked against the exact local curvature convention and symmetry suppliers.

- In `thm-emg-weak-slow-test-lorentz-limit`, I specified the Cartesian coordinate domain and its orientation and made the charge and mass parameters and units explicit. In `ex-emgmath-ml-b08`, I specified $M=\mathbb R^4$, the Minkowski metric, orientation, future direction, Euclidean dot product/norm, and the charge, mass, and dimensionless $\epsilon$ parameters. These additions make the Hodge, Lorentz-force, and comparison calculations refer to defined geometric objects.

- I updated the affected batch-16 proof contracts, including refreshed supplier statements and derivation records. The changed items had no `verification.judge` record to remove. The sibling `ex-emgmath-ml-b07` was rechecked against the new source-free premise; it already computes $dF=0$ and the divergence equation, so its item body did not need repair.

The local mathematical arguments do not rely on measured data. Bibliographic context was spot-checked in the cited Harte, Reall, Tong, and Carroll passages: [Harte, §§3.1–3.3, equations (40)–(55)](https://arxiv.org/pdf/1808.06203v2), [Reall, §6.2, equations (6.7)–(6.10), and §8.5, equation (8.59)](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), [Tong, §§4.5.3–4.5.4](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), and [Carroll, §1.4.1](https://arxiv.org/pdf/gr-qc/9712019v1). The local proofs specify their own SI and curvature conventions and do not import Gaussian-unit normalizations.

## Page verdicts

- `emg-mm03`: **pass after repair**. Its scope summary agrees with the current A-page items and now defines the WKB label by the exact finite ansatz. It makes only conditional mathematical claims and preserves the stated limits on convergence, self-field, and coupled solutions.
- `emg-mm03-examples`: **pass**. Both summaries agree with their examples and keep the exact Maxwell field and prescribed test orbit distinct from a coupled Einstein–Maxwell solution. The WKB term is supplied by the required A-page definition. No B-page prose was edited.

## Unedited defects and blockers

No confirmed unedited defect remains in the assigned pages, items, or their reviewed direct dependency uses. No blocker remains.

## Checks

For each of the five changed items, reflow completed with `unchanged`; the scoped precheck passed. The final batched `proof-layout` command checked five items and 34 proof steps, reporting zero defects. No broader tests or library-wide gates were run.

## Coverage note

All assigned pages and items and the direct supplier statements/proofs used in their arguments were reviewed. My first read of some assigned carriers preceded opening their suppliers, so that initial reading sequence was not strictly supplier-first; I checked the supplier arguments before finalizing the consumer verdicts. Literature review was limited to the cited passages listed above rather than a fresh full-text reread of every bibliography entry; Poisson–Pound–Vega §18.1 and Meinel–Hütten §2 were not independently checked in this session. Those sources are contextual here, not premises of the local proofs. No empirical claims or observations occur in this batch.
