# Step 3a reader report — batch 39

## Scope and inventory

Reviewed batch `39` from the current carriers, independently of the authored decisions. The assigned manifest contains two pages and seven items.

Assigned pages opened:

- `gr-fx11-numerical-geometry-and-constraint-monitoring` — [A page](../library/general-relativity/gr-fx11-numerical-geometry-and-constraint-monitoring.md)
- `gr-fx11-numerical-geometry-and-constraint-monitoring-examples` — [examples page](../library/general-relativity/gr-fx11-numerical-geometry-and-constraint-monitoring-examples.md)

Assigned items opened in dependency order:

1. `alg-gr-fx-periodic-wave-leapfrog`
2. `prop-gr-fx-leapfrog-termination`
3. `thm-gr-fx-leapfrog-mode-stability`
4. `thm-gr-fx-leapfrog-local-truncation`
5. `def-gr-fx-constraint-residual-diagnostic`
6. `ex-gr-fx11-1`
7. `ex-gr-fx11-2`

Dependency context opened for the claims and uses above:

- Current-run draft suppliers: `def-gr-fx-fixed-gauge-data-topology` (batch 31), `def-gr-fx-conformal-constraint-data` and `thm-gr-fx-lichnerowicz-reduction` (batch 30). The batch-39 cross-batch dependency ledger was read as context, not treated as a verdict.
- GR constraint convention: `thm-gr-constraint-equations-in-normal-frame`, including its complete Statement, Facts, and proof.
- Fixed-gauge context: `def-gr-periodic-torus-and-sobolev-spaces`, `def-gr-periodic-symmetric-hyperbolic-system`, `thm-gr-local-geometric-development`, `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`, and `def-countable-choice`. The relevant definition/statement clauses were checked against the fixed-gauge supplier use.
- Mode-analysis suppliers: `def-complex-exponential`, `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-of-square-positive`, `thm-of-archimedean`, `thm-eulers-formula`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-quarter-turn-values-and-shift-formulas`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-nth-roots-exist`, `def-finite-sum`, `lem-finite-sum-reindexing-and-fubini`, `cor-mean-value-theorem`, and `cor-pi-is-the-first-positive-sine-zero`.
- Local-truncation and diagnostic suppliers: `cor-taylor-remainder-bound`, `thm-clairaut-schwarz-mixed-partials`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `prop-christoffel-formula-for-the-levi-civita-connection`, and `def-curvature-of-an-affine-connection`, in addition to the overlaps above.
- The published mathematics page `field-extensions-and-the-complex-numbers` was opened at `../library/abstract-algebra/field-extensions-and-the-complex-numbers.md`; its import pin was looked up by exact page/item path in `research/math-imports.json`.
- Read the current batch-39 proof contract and the four required dependency pages `gr-fx03-geometric-cauchy-stability`, `gr-fx02-conformal-constraint-construction`, `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`, and `field-extensions-and-the-complex-numbers`.

Relevant source passages were checked as corroboration, not used instead of the local deductions: Strang, [MIT OCW 18.086, §5.3](https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf), PDF pages 4–5 (centered wave recurrence and characteristic-root condition); Trefethen, [Chapter 3 author PDF](https://people.maths.ox.ac.uk/trefethen/3all.pdf), PDF pages 27–30, section headed “Fourier analysis of finite difference formulas,” and [Chapter 4 author PDF](https://people.maths.ox.ac.uk/trefethen/4all.pdf), PDF pages 34–35, section headed “The von Neumann condition for vector or multistep formulas”; Gourgoulhon, [§§6.5.2–6.5.3](https://arxiv.org/pdf/gr-qc/0703035), equations (6.101), (6.103), (6.104); Bartnik–Isenberg, [§4.1](https://arxiv.org/pdf/gr-qc/0405092), equation (56); Friedrich–Rendall, [§2.2](https://arxiv.org/pdf/gr-qc/0002074), equations (2.10)–(2.11); and Jaramillo–Valiente Kroon–Gourgoulhon, [§4.2](https://arxiv.org/pdf/0712.2332). The Gourgoulhon/Bartnik–Isenberg conformal formulas agree with the local vacuum formula; the local GR convention is stated explicitly and the sign convention difference for the momentum term is not silently imported. Only the cited passages needed here were checked, not every page of those sources.

## Review and verdicts

- **A page — pass.** The frontmatter-only carrier has the manifest item list and its four `requires` entries. The assigned definitions and claims preserve the distinction between the scalar benchmark and an Einstein evolution or convergence theorem.
- **Examples page — pass.** The frontmatter-only carrier lists both examples and requires the A page. No page prose or diagram is present to repair.
- **Algorithm and termination proposition — pass.** The algorithm specifies its finite real-array inputs, admissibility conditions, exact initialization/update, and output. The loop is empty when `n_max=1`; otherwise it has exactly `n_max-1` passes. The stated unit-cost exact-real operation bound follows from the fixed three-point stencil.
- **Mode theorem — pass.** The Fourier character diagonalizes the periodic second difference with the stated eigenvalue. The strict CFL case has two distinct unit-modulus roots for each nonconstant mode; the mean mode is treated separately, including its linear drift for nonzero mean velocity. The frequency lower bound and its lack of an arbitrary-data amplitude claim are correctly qualified. At the even-grid endpoint, the repeated Nyquist root and velocity-driven linear term are computed correctly.
- **Local truncation theorem — pass.** The compact-window bound makes `M_n` finite. The two centered Taylor estimates have remainder constants `h^2/12` and `k^2/12`; the C6 hypothesis and wave equation justify the fourth-time-derivative identity. The item explicitly disclaims global error and Einstein-scheme convergence.
- **Discrete diagnostic definition — pass after repair.** The array operations, signs, units, and reconstruction type are explicit. The local sign agrees with the supplied constraint theorem. The definition does not claim coordinate covariance or infer continuum accuracy from a small residual.
- **`ex-gr-fx11-1` — pass.** The unstable-root formula and lower bound are correct for `lambda>1`; it makes no endpoint claim. The TikZ 8-cycle labels alternate in order, including the closing edge, and the proof does not rely on the drawing.
- **`ex-gr-fx11-2` — pass after repair.** Every node samples `phi_N=1`, so the grid arrays and discrete residual vanish. The explicit conformal-curvature computation gives the positive continuum residual at `x^1=pi/N`. The reconstruction is distinguished from the smooth representative; the example is not a simulation or an empirical observation.

Only `ex-gr-fx11-1` contains a TikZ diagram; its eight-cycle and alternating labels match the text. No additional diagram was needed for the assigned exposition.

## Repairs

- In `items/def-gr-fx-constraint-residual-diagnostic.md`, removed the in-body hyperlinks from the Definition and kept the exact supplier links in `Definition references`. The convention is now given directly in the Definition text.
- In `items/ex-gr-fx11-2.md`, specified an arbitrary admissible `kappa>0` with the diagnostic's SI units and stated why it drops out when `j=0`. Replaced the statement that there is no hierarchy with the explicit singleton mesh hierarchy required by the diagnostic definition; no refinement or convergence comparison is claimed.
- Updated the `ex-gr-fx11-2` finite-check input in `research/physics-non-fluid-129-2026-10-21-r2-batch-39.proof-contracts.json` to carry the positive `kappa` qualification and singleton hierarchy. The changed item frontmatter had no `verification.judge` record to remove.
- Required commands: reflow reported `def-gr-fx-constraint-residual-diagnostic` unchanged and reflowed `ex-gr-fx11-2`; precheck returned 0 failures for both (the definition has no proof steps); final `proof-layout` reported 2 items, 4 steps, 0 defects.

## Findings not repaired

- `def-gr-fx-fixed-gauge-data-topology` is a draft supplier in batch 31. Its current Definition still contains an inline wikilink to `def-gr-periodic-symmetric-hyperbolic-system`, although its `Definition references` section lists the target. This violates the current statement-first rule. The assigned algorithm is a direct consumer; see the findings JSON.
- On the first read, `def-gr-fx-conformal-constraint-data` in batch 30 had inline links in its Definition to the product-connection and Christoffel suppliers. Before split, its source changed without my edit; the current Definition refers to those suppliers in prose and the links appear in `Definition references`. I have preserved this historical observation in the findings JSON. No immutable pre-reader source copy is available to bind the observed bytes, so its `observed_source` is null.

No other confirmed uneditable mathematical, citation, witness, or diagram defect was found in the assigned scope. There is no blocker. The historical batch-30 observation is the coverage limitation: its old bytes were not preserved, and the current file must not be relabelled as the observed defect.
