# Reader report — batch 51

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch 51 only

## Reviewed inventory

Pages opened:

- A: `library/non-relativistic-quantum-mechanics/qm-one-dimensional-potentials.md`
- B: `library/non-relativistic-quantum-mechanics/qm-one-dimensional-potentials-examples.md`

All 15 assigned items were opened and reviewed.

**A page items (11):** `lem-nrqm-potentials-one-dimensional-flux-identity`; `lem-nrqm-potentials-free-operator-differential-identification`; `lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators`; `def-nrqm-potentials-one-dimensional-line-model`; `def-nrqm-potentials-interval-and-delta-models`; `pthm-nrqm-potentials-line-model-energy-and-stationary-states`; `pthm-nrqm-potentials-barrier-flux-and-transmission`; `pthm-nrqm-potentials-finite-well-bound-states`; `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes`; `pthm-nrqm-potentials-delta-point-interaction-bound-state`; `rem-nrqm-potentials-scope-and-idealizations`.

**B page items (4):** `ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit`; `ex-nrqm-potentials-finite-well-exact-root-and-count`; `ex-nrqm-potentials-box-spectrum-and-nodes`; `rem-nrqm-potentials-examples-scope-limits`.

The dependency review included the assigned Fourier/free-operator, interval spectrum, barrier, finite-well, delta-interface and bound-state, Robin Green-function, sine-completeness, Sobolev, trace, compact-resolvent, scaling, and framework/unit suppliers. I also opened the sine-zero theorem and its immediate trigonometric argument. Relevant source checks included Tong, Teschl, and Binney & Skinner; their verified locators and the remaining inaccurate draft citations are recorded below.

## Repairs made

1. **`lem-nrqm-potentials-one-dimensional-flux-identity`** — In part (b), used separate spatial functions `u_s,v_s: Ω→ℝ` instead of reusing `u,v` after those names had already denoted functions on `Ω×I`. Updated the corresponding facts and proof steps. This makes the stationary spatial domain explicit while preserving the claimed derivative identity.

2. **`def-nrqm-potentials-one-dimensional-line-model`** — Recast zero as the reference energy in the signed binding-energy convention; the former general “continuum threshold” claim was not established for every bounded measurable potential in the definition. Made the generalized-solution energy explicitly real and assigned its amplitude the dimension `length⁻¹/²`, so the stated current has units `s⁻¹`. The threshold restriction follows from the actual spectral claims; the amplitude dimension follows from the declared one-dimensional density and current convention.

3. **`def-nrqm-potentials-interval-and-delta-models`** — Narrowed the spectrum clause: the interval theorem gives discrete complete spectra for the Dirichlet and separated Robin operators; the zero-range theorem establishes self-adjointness and the stated negative-eigenvalue classification for the delta operator, not a complete spectral theorem for it.

4. **`pthm-nrqm-potentials-barrier-flux-and-transmission`** and **`ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit`** — Normalized the reference incident amplitude to `1 m⁻¹/²` and included `|A_in|²` in the reference current. The current formula is `(ℏk/m)|A_in|²`; with the declared amplitude dimension it has units `s⁻¹`. Updated the relevant theorem facts and proof steps and the example statement.

5. **`pthm-nrqm-potentials-finite-well-bound-states`** — Repaired the lower-bound explanation. From `V≥−U` and the quadratic form, `⟨H_wψ,ψ⟩≥−U‖ψ‖²`; absence of eigenvalues alone would not rule out continuous spectrum.

6. **`ex-nrqm-potentials-finite-well-exact-root-and-count`** — Made the signed binding energy `E=−U/2` and its magnitude `U/2` explicit, consistent with the model definition.

7. **`pthm-nrqm-potentials-interval-spectra-completeness-and-nodes`** — Defined `‖V‖∞:=max_[0,L]|V|` in the statement, where `V` is continuous. Corrected the Teschl reference description to distinguish the interval/separated-boundary material from Theorem 9.40’s full-line nodal result and its different hypotheses.

8. **`ex-nrqm-potentials-box-spectrum-and-nodes`** — Corrected the Teschl reference description: §9.1 is cited for the interval Sturm–Liouville setup, §9.2/Theorem 9.6 for separated self-adjoint boundary conditions, and §9.7/Theorem 9.40 is identified as a full-line result not used for the box computation.

The affected proof contract was updated, including changed derivation claims and source quotes. No stale `verification.judge` entry remains on the edited items. Reflow and precheck passed for all edited items. The strict proof-contract check reported 0 errors and 0 warnings (11/11 items checked). The final batched proof-layout check reported 9 items, 34 steps, 0 defects.

No empirical observations or statistical inference are asserted by these pages or items; their physical conclusions are conditional model deductions and exact computations.

## Uneditable findings

These are citation-location defects in draft suppliers assigned to another current-run batch (batch 38). They were not edited. Their local proofs or other references provide support, so each citation defect is nonfatal.

| Draft supplier | Assigned consumer | Exact location and evidence |
|---|---|---|
| `thm-nrqm-intervals-barrier-transfer-and-thick-limit-error` | `pthm-nrqm-potentials-barrier-flux-and-transmission` | `sources.references[0]`, item lines 28–29: Teschl §9.6 is described as transfer matrices/transmission, whereas §9.6 is “Spectral transformations II.” `sources.references[1]`, lines 30–31: Binney & Skinner Chapter 4 is cited for rectangular-barrier transmission; the barrier treatment is Chapter 5, §5.3, printed pp. 84–89. |
| `thm-nrqm-intervals-finite-well-root-conditions-and-bound-count` | `pthm-nrqm-potentials-finite-well-bound-states` | `sources.references[0]`, lines 31–32: Teschl §9.6 is cited for root conditions/oscillation counting, but §9.6 is “Spectral transformations II”; Theorem 9.40’s nodal statement is in §9.7 and has full-line hypotheses. `sources.references[1]`, lines 33–34: Binney & Skinner Chapter 4 is cited for the finite square well; the square-well treatment is Chapter 5, §5.1, printed pp. 75–79. |
| `thm-nrqm-intervals-dirichlet-nodal-theorem` | `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` | `sources.references[0]`, lines 29–30: Teschl §9.1 is described as supplying the Sturm nodal theorem. Teschl Theorem 9.40 is in §9.7 and concerns eigenfunctions below essential spectrum on the line, not the bounded-interval Dirichlet count. |
| `thm-nrqm-intervals-separated-robin-green-resolvent` | `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` | `sources.references[0]`, lines 35–36: Teschl Lemma 9.4 is described as a Green-kernel/resolvent result; it concerns closure/adjoint domains of the minimal Sturm–Liouville operator. The Green-resolvent formula is Lemma 9.7 in §9.2. |
| `thm-nrqm-intervals-robin-simple-complete-spectrum` | `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` | `sources.references[0]`, lines 34–35: separated self-adjoint boundary conditions and simplicity are assigned to Teschl §9.1; Theorem 9.6 on separated self-adjoint boundary conditions is in §9.2. |
| `thm-nrqm-intervals-sine-on-completeness` | `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` | `sources.references[0]`, lines 37–38: Teschl §3.2, pp. 89–92, is cited for Fourier/sine-basis completeness; §3.2 is “More on Borel measures” and begins at printed p. 99. The cited locator does not supply that claim. |
| `thm-nrqm-intervals-delta-unique-bound-state` | `pthm-nrqm-potentials-delta-point-interaction-bound-state` | `sources.references[1]`, lines 29–30: Teschl §9.2 is cited for negative eigenvalues of point-interaction realizations, but §9.2 treats Sturm–Liouville endpoint classification/boundaries and Green kernels; the cited work does not state the delta-interaction bound-state formula. |

The Teschl locator checks used the author-hosted *Mathematical Methods in Quantum Mechanics* PDF (https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf); the Binney & Skinner checks used the author-hosted text (https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf). Other relevant source checks confirmed Tong’s delta matching material at §2.3.2, printed pp. 48–49; barrier material at §2.4.2, printed pp. 60–63; and box material at §2.1.2, printed pp. 24–27.

## Page verdicts and blocker

- **A — `qm-one-dimensional-potentials`:** acceptable after the listed item repairs; no remaining A-page prose defect identified.
- **B — `qm-one-dimensional-potentials-examples`:** acceptable; no remaining B-page prose defect identified.

No blocker. Coverage limitation: I did not independently reopen every transitive elementary calculus/exponential supplier; I checked the relevant analytical suppliers and the immediate trigonometric chain used by the box example. No unresolved mathematical uncertainty from those elementary steps was identified.
