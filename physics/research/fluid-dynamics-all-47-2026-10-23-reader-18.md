# Step 3a reader report — batch 18

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: read-only reader  
Manifest: `research/fluid-dynamics-all-47-2026-10-23-batch-18.pages.json`

## Scope and inventory

Opened both assigned page carriers. `fd-s02` is the draft A page at
`library/fluid-dynamics-mathematics/fd-s02.md`; its eight manifest items are
`def-fd-polytropic-symmetric-variables`,
`def-fd-smooth-wall-exterior-solution-domains`,
`thm-fd-global-linear-acoustics`, `def-fd-flat-channel-domains`,
`thm-fd-compatible-wall-shear-heat`,
`lem-fd-polynomial-ode-continuation`,
`thm-fd-smooth-periodic-incompressible-ivp`, and
`thm-fd-smooth-polytropic-euler-ivp`.

`fd-s02-examples` is the draft B page at
`library/fluid-dynamics-mathematics/fd-s02-examples.md`; its four manifest items
are `ex-fd-compressible-viscous-shear`,
`ex-fd-periodic-poiseuille-body-force`, `ex-fd-couette-vorticity`, and
`rem-fd-general-viscous-wall-ivp-gaps`.

Opened all twelve item carriers, the batch-18 proof contracts for its eight
proof-bearing items, the batch-18 notes as navigation evidence, the current
`fd-s01` page, and the six batch-17 suppliers actually used by batch 18:
`def-fd-periodic-fourier-sobolev-spaces`,
`lem-fd-periodic-fourier-embedding-products`,
`def-fd-periodic-leray-pressure-maps`,
`lem-fd-periodic-tame-transport-commutator`,
`thm-fd-periodic-pressure-recovery`, and
`lem-fd-given-smooth-solutions-difference-energy`.

Opened the relevant pinned mathematical suppliers and supporting statements:
`def-countable-choice`,
`def-the-one-dimensional-torus-and-normalized-haar-integral`,
`def-fourier-coefficients-and-trigonometric-polynomials`,
`thm-fourier-basis-and-parseval-on-the-n-torus`,
`thm-picard-lindelof-local-existence-and-uniqueness`,
`thm-cauchy-criterion-via-lub`,
`cor-vector-valued-ftc-and-lipschitz-bound`,
`prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`,
`thm-euclidean-space-complete`, `thm-bolzano-weierstrass`,
`lem-peak-monotone-subsequence`, `cor-monotone-converges-iff-bounded`,
`thm-monotone-convergence`, `lem-convergent-implies-bounded`,
`def-monotone-sequence`, `def-sequence`, `def-bounded-set`, and
`lem-of-abs-value`. The source bytes for these eighteen imported mathematical
items match their `research/math-imports.json` pins.

## Mathematical review

The in-batch ODE continuation proof gives a bounded polynomial vector field,
endpoint limit, local Picard solution, and integral-equation gluing. The
periodic incompressible proof's Galerkin estimates, endpoint continuation,
coefficient compactness, tail control, passage to the equation, pressure
recovery, and conditional uniqueness agree with the stated dependencies. The
polytropic proof supplies the positive-density change of variables, symmetric
energy estimate, compact limit, and explicit positivity interval. The channel
heat proof's odd extension, Fourier decay, smooth termwise evolution, boundary
conditions, uniqueness estimate, and decay bound are supported by its stated
hypotheses. The three examples' algebraic substitutions and flux/vorticity
computations are correct; the reported issues concern incomplete terminology,
not the displayed numerical calculations. The scope remark is qualified and
does not claim that broader theories are absent from the literature.

The current six batch-17 draft supplier interfaces used here match their
consumer uses. In particular, the pressure-recovery and difference-energy
statements are used only in their stated smooth periodic regimes. No in-run
supplier defect was confirmed.

Checked the cited source locators that support the authored context:

- [Tong, *Fluid Mechanics*, Ch. 2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), §§3.2.1–3.2.3, treats no-slip, plane Couette, and infinite-plate Poiseuille flows; [Ch. 3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf), §4.4.4, derives the linearized sound-wave model.
- [Golse, “The Boltzmann Equation and Its Hydrodynamic Limits”](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf), §7.4, Theorems 7.8–7.9, concerns whole-space perfect-monatomic-gas local existence and a separate singularity result.
- [Teschl, *Ordinary Differential Equations and Dynamical Systems*](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf), §2.6, Lemma 2.14 and Corollary 2.15, gives the finite-endpoint continuation criterion.
- [Morton, *Local-in-Time Well-Posedness of the Incompressible Euler and Navier–Stokes Equations*](https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf), Theorem 7.5 and §§7.1–7.3, treats whole-space incompressible estimates; [Wiedemann, *Lecture Notes: Navier–Stokes Equations*](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf), §4.3, Theorem 4.14, gives a three-dimensional periodic positive-viscosity strong-solution result.
- [Sideris, “Formation of Singularities in Three-Dimensional Compressible Fluids”](https://web.math.ucsb.edu/~sideris/pdffiles/EulerCMP.pdf), §1, states the polytropic ideal-gas equations and identifies their symmetric-hyperbolic form.
- The cited real-sequence completeness sources, [Tao, *Analysis I*](https://terrytao.wordpress.com/books/analysis-i/) §6.4, Theorem 6.4.18, and [Lebl, *Basic Analysis I*](https://www.jirka.org/ra/realanal.pdf) §2.4, Theorem 2.4.5, state that a Cauchy sequence of reals converges. Neither supplies the broader complete-ordered-field assertion in the published supplier noted below.

These sources do not replace the batch's local torus/channel arguments.

## Findings not repaired

This assignment is read-only. No item or page was edited. The uneditable
findings, with the same exact evidence in
`research/fluid-dynamics-all-47-2026-10-23-reader-findings-18.json`, are:

| Subject | Exact location | Defect and evidence |
|---|---|---|
| `def-fd-smooth-wall-exterior-solution-domains` | Definition: bounded pressure sentence; exterior pressure-class sentence | The velocity class is specified, but “a pressure in this class” does not define a pressure map or function space; the exterior clause only says “same local regularity.” Specify the pressure domain and exact class. |
| `thm-fd-global-linear-acoustics` | Statement: “constant-coefficient tangent system” and “exact linear tangent model” | The displayed PDE is proved, but no nonlinear base model, equilibrium, or linearization is specified to support the tangent-model interpretation. Define it or remove that assertion. |
| `ex-fd-periodic-poiseuille-body-force` | Example: flux per unit width sentence | The statement does not define flux per unit width. Verification computes the integral but does not identify it as the defined observable in the formulation. |
| `ex-fd-couette-vorticity` | Example: uniqueness sentence | “Unidirectional shear class” is not defined; the proof does not specify the map form, regularity, or competing pressure class. |
| `ex-fd-couette-vorticity` | Example: flux per unit width sentence | The quantity is asserted without definition; Verification computes an integral but does not define it in the formulation. |
| `def-the-one-dimensional-torus-and-normalized-haar-integral` | Definition: embedded throughout the complete definition | Wikilinks interrupt the formal definition; they belong after it in Definition references, one source per paragraph. |
| `def-fourier-coefficients-and-trigonometric-polynomials` | Definition: Characters, Fourier coefficients, Trigonometric polynomials, The finite torus | Wikilinks interrupt the complete definition and need a following Definition references section. |
| `thm-fourier-basis-and-parseval-on-the-n-torus` | Statement: first paragraph and clauses 1–4 | Wikilinks interrupt the statement and need a following Statement references section. |
| `def-countable-choice` | Remarks: bullets 1–6 | Inline wikilinks interrupt prose remarks; move them to Remarks references. |
| `thm-cauchy-criterion-via-lub` | Statement paragraphs 1–2; Remarks | Inline wikilinks interrupt the statement and prose remarks. |
| `thm-cauchy-criterion-via-lub` | Statement paragraph beginning “More carefully, this is a statement about the axioms” | It asserts the result for every complete ordered field, while its proof invokes a Bolzano–Weierstrass supplier stated only for real sequences. Tao §6.4, Theorem 6.4.18, and Lebl §2.4, Theorem 2.4.5, also state the real-sequence result. Supply a general-field proof or narrow the claim; batch 18 uses only the real clause. |
| `cor-vector-valued-ftc-and-lipschitz-bound` | Statement clauses 1–2; Remarks | Inline wikilinks interrupt the complete statement and remarks. |
| `thm-euclidean-space-complete` | Statement claims 1–2 and hypothesis paragraph; Remarks | Inline wikilinks interrupt the complete statement and remarks. |
| `thm-bolzano-weierstrass` | Statement paragraphs 1–2; Remarks | Inline wikilinks interrupt the complete statement and remarks. |
| `lem-peak-monotone-subsequence` | Statement paragraph 1; Remarks bullets 1 and 3 | Inline wikilinks interrupt the statement and remarks. |
| `cor-monotone-converges-iff-bounded` | Statement paragraphs 1–2; Remarks | The statement contains stray navigation-title text and the fragment “is Every convergent sequence is bounded”; Remarks also contain inline wikilinks. |
| `thm-monotone-convergence` | Statement paragraphs 1–3; Remarks | Title-like navigation parentheticals contaminate the formal statement; Remarks also contain inline wikilinks. |
| `lem-convergent-implies-bounded` | Statement; Remarks | Inline wikilinks interrupt the complete statement and remarks. |
| `def-monotone-sequence` | Definition; Remarks | Inline wikilinks interrupt the complete definition and remarks. |
| `def-sequence` | Definition; Remarks | Inline wikilinks and citation-title parentheticals interrupt the definition; remarks also contain inline links. |
| `def-bounded-set` | Definition; Remarks | Inline wikilinks interrupt the complete definition and remarks. |
| `lem-of-abs-value` | Statement, first sentence | Citation-title parentheticals “(Ordered field)” and “(Absolute value in an ordered field)” interrupt the formulation instead of appearing as references. |

Every published dependency finding is routed to an assigned consumer whose
actual dependency closure reaches that item; the exact consumer IDs are in the
JSON file.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `fd-s02` | Pass as a page carrier | Draft identity, mathematics classification, prerequisites, inventory, and empty body match the current manifest; no page-level defect found. Item-level findings remain listed separately. |
| `fd-s02-examples` | Pass as a page carrier | Draft identity, mathematics classification, companion/prerequisite, inventory, and empty body match the current manifest; no page-level defect found. Item-level findings remain listed separately. |

## Blocker and coverage limit

No workflow blocker prevented the review. Coverage is limited to batch 18 and
the dependency items opened above; unrelated pages and the remainder of the
published library were not audited. Relevant cited sections were opened, but
the cited books/articles were not all read cover-to-cover. No diagram occurs in
the reviewed batch items or pages.
