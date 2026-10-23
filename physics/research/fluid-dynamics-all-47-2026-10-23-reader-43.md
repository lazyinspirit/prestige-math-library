# Reader report — batch 43

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: read-only reader  
Scope: batch `43`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-rom01.md` — draft A page.
- `library/fluid-dynamics-mathematics/fd-rom01-examples.md` — draft examples page.

Assigned items, reviewed in dependency order:

- `items/def-fd-solenoidal-reduced-ode.md`
- `items/thm-fd-reduced-ode-global-energy.md`
- `items/ex-fd-single-shear-reduced-model.md`

Dependency context opened:

- Current-run batch 17 supplier `items/def-fd-periodic-fourier-sobolev-spaces.md` and its batch-17 manifest row.
- Published mathematical suppliers `def-countable-choice`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `thm-picard-lindelof-local-existence-and-uniqueness`, and `thm-euclidean-space-complete`.
- Prerequisite pages `fd-s01`, `picard-lindelof-and-first-order-odes`, and `completeness-and-uniform-continuity`.
- `research/fluid-dynamics-all-47-2026-10-23-batch-43.proof-contracts.json`, for the three assigned item records.

The source references supporting the finite Galerkin formulation were checked at their cited sections. Wiedemann, *Lecture Notes: Navier–Stokes Equations*, §3.1.2, Definition 3.1 and §3.2, Theorem 3.4 proof Steps 1–2, gives the finite-dimensional Galerkin ODE, its local ODE existence, and the energy estimate for the periodic Stokes-eigenfunction approximation ([PDF](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf)). Ryzhik, *Lecture Notes for Math 256B*, version 2019, §5, equations (5.24)–(5.35), gives the periodic finite Fourier Galerkin system and the corresponding energy calculation ([PDF](https://virtualmath1.stanford.edu/~ryzhik/STANFORD/STANF256B-19/notes-256B-19.pdf)). These are contextual source support; the assigned theorem's argument independently handles its arbitrary finite smooth solenoidal family and the case `ν = 0`.

For the Fourier-space supplier's citations, Teschl, §2.5, Theorem 2.17, states the one-dimensional `L²` Fourier coefficient isometry and Parseval result ([PDF](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf)); Bühler–Salamon, §2.3.6, Example 2.66, gives the Fourier characters as an orthonormal basis of `L²(R/Z)` ([PDF](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf)). The local supplier supplies the finite-product extension and the weighted completion argument.

## Review results

- `def-fd-solenoidal-reduced-ode` gives a complete finite-dimensional model: it specifies the torus and normalized measure, real Fourier conventions, the `H⁰` representatives, smooth periodic divergence-free orthonormal modes, coefficient integrals, viscosity range, initial data, and endpoint/solution regularity. Smoothness on the compact torus makes the coefficient integrals finite. No infinite-dimensional PDE convergence claim is made.
- `thm-fd-reduced-ode-global-energy` is mathematically sound under the stated hypotheses. The convection coefficients satisfy `c_ijk = -c_kji` by periodic integration by parts and divergence-freeness; hence the cubic contraction vanishes. The viscous contraction is `∫|∇u_a|²`. The resulting coefficient bound, local Lipschitz property of the polynomial vector field, completeness of `R^r`, and restart at a finite endpoint establish forward global existence; overlap uniqueness gives uniqueness. The proof carries the stated Countable Choice premise without spending a stronger choice principle.
- `ex-fd-single-shear-reduced-model` has the stated smooth, divergence-free normalized mode. Direct integration gives `A₁₁ = 1`, and the convective coefficient is zero because the mode is independent of `x₁`; the exponential solves the scalar ODE and satisfies the energy identity.
- The assigned statements, definitions, and example descriptions have no inline links. Numbered proof paragraphs are separated and tagged. There are no TikZ/tikzcd diagrams in the assigned items.
- Both assigned pages are frontmatter-only, retain `page_layout: compact-v1`, match their manifest inventories, and contain no summary bodies.

## Findings outside edit scope

The following defects are recorded in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-43.json`; each subject is outside batch 43's write scope.

- `def-fd-periodic-fourier-sobolev-spaces` (current-run batch 17): its `## Definition` contains inline wikilinks within the formulation, including the opening Countable Choice and torus premises. The statement-first rule requires the complete definition to remain uninterrupted and those references to follow it in `## Definition references`. The exact source observed at split has SHA-256 `7e8c0b16b9100054913bf5f34ffb3b97e2dc865699af4a47fef8ecedbdbb107f`.
- `thm-euclidean-space-complete`: the `## Statement` embeds wikilinks in both clauses and the following `n ≥ 1` paragraph; the `## Remarks` prose also contains inline wikilinks. These sections have no corresponding immediately following reference sections.
- `thm-euclidean-space-complete`, Proof step 3.2: it chooses a rational `q > 0` subject to `\hat q < ε/(2n)` and then uses `\hat q`, without defining `\hat q` or identifying it with `q`. The cited rational-density fact supplies a rational of the required size, but the symbol in the proof remains unbound; the likely one-symbol correction is outside this reader's scope.
- `thm-fourier-basis-and-parseval-on-the-n-torus`: its `## Statement` has inline links to the torus and Fourier-coefficient definitions, instead of references after the complete statement.
- `def-fourier-coefficients-and-trigonometric-polynomials`: its `## Definition` embeds links to the torus, Countable Choice, and other definitions inside the defining prose, without a following `## Definition references` section.
- `def-the-one-dimensional-torus-and-normalized-haar-integral`: its `## Definition` embeds links in the torus, topological checks, measure, integral, translation, and finite-torus formulations; these should be moved after the complete definition.
- `def-countable-choice`: the prose bullets in `## Remarks` contain inline wikilinks and have no immediately following `## Remarks references` section.

## Edits and page verdicts

No item or page was edited: this assignment is read-only. I created this report and the required findings JSON. Item reflow, precheck, and proof-layout commands were not run because no item changed.

| Page | Verdict | Evidence |
|---|---|---|
| `fd-rom01` | Pass | Draft A page; manifest items and prerequisites agree; body is empty; compact layout is retained. |
| `fd-rom01-examples` | Pass | Draft B page; companion, prerequisite, and example inventory agree; body is empty; compact layout is retained. |

Blocker: none.

## Coverage note

All assigned pages and items, the assigned proof contracts, and direct supplier statements/proofs used by the assigned arguments were inspected. I did not independently audit every transitive prerequisite proof inside the already-published Picard–Lindelöf, Euclidean-completeness, and Fourier-basis suppliers; this report makes no claim about unexamined lower-level proofs. The current-run Fourier-space supplier's observed bytes are bound in the findings JSON. No diagrams or empirical claims occurred in the assigned items.
