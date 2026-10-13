# Reader report — batch 57

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: Step 3a reader  
Scope: batch `57`, pages `qm-identical-particles-and-exclusion` (A) and `qm-identical-particles-and-exclusion-examples` (B).

## Opened inventory

Read the workspace entry instructions and required physics rules, including the parent and local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and `briefs/reader.md`. Read the batch 57 manifest, notes, coverage record, cross-batch dependency record, and proof contract.

Opened both assigned pages:

- `library/non-relativistic-quantum-mechanics/qm-identical-particles-and-exclusion.md`
- `library/non-relativistic-quantum-mechanics/qm-identical-particles-and-exclusion-examples.md`

Read all 12 assigned items in supplier-before-consumer order:

1. `lem-nrqm-identical-particles-two-particle-exchange-operator`
2. `thm-nrqm-identical-particles-occupation-number-basis`
3. `thm-nrqm-identical-particles-finite-mode-occupation-counts`
4. `thm-nrqm-identical-particles-two-factor-symmetry-decomposition`
5. `def-nrqm-identical-particles-framework-species-sectors-and-preparations`
6. `def-nrqm-identical-particles-framework-orbital-occupation-model`
7. `pthm-nrqm-identical-particles-permutation-invariance`
8. `pthm-nrqm-identical-particles-orbital-occupation-exclusion`
9. `rem-nrqm-identical-particles-scope-and-empirical-status`
10. `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry`
11. `ex-nrqm-identical-particles-exchange-versus-coulomb-terms`
12. `rem-nrqm-identical-particles-examples-scope-limits`

Opened the mathematical and physical dependencies needed to check the claims, including the Hilbert tensor and permutation-sector constructions; the finite-dimensional orthonormal expansion, determinant, binomial-counting, and stars-and-bars results; finite-dimensional projection and trace results; the state, observable, quantity/unit, kinematics, P1/P2/P6/P7 definitions and postulates; the spin-matrix, finite spin-block and tensor spin-composition results; the Euclidean product-unitary, Hardy, Cauchy–Schwarz, Gaussian, Tonelli, Fubini, translation/approximate-identity, and nonnegative-integral suppliers; and the Lp and Sobolev definitions. Exact dependencies material to the remaining findings are listed below.

## Source review

Read J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, Chapter 10, printed pp. 226–235 (PDF pp. 234–243), including §10.1.1, printed pp. 227–228 (PDF pp. 235–236), for exchange symmetry and exclusion, and the later pair-state and direct/exchange discussion. It supports the conditional symmetry and pair-interaction claims; the assigned example correctly limits its conclusion to the declared pair expectation rather than an atomic total energy.

Read F. H. L. Essler, *Advanced Quantum Theory* (2017/18), Chapter 1, §§1.1–1.4.3, pp. 3–13, for exchange-symmetric states, occupation-number states, two-particle operators, and direct/exchange matrix elements. The cited Internet Archive snapshot of D. Skinner, *Principles of Quantum Mechanics*, Chapter 7, could not be retrieved during this review; it is not counted as read. The relevant claims were corroborated with Binney–Skinner and Essler.

## Repairs made

1. **`thm-nrqm-identical-particles-occupation-number-basis`.** Step 1.1 previously inferred that a dense span was the whole tensor product by calling the ambient tensor product finite-dimensional before the induction had established that fact. Replaced that circular inference with a local proof that the span of the finite orthonormal product family is closed: convergence gives Cauchy coordinate sequences by the finite norm identity, and their limits give a vector in the span. Density then gives the full tensor product. Made the theorem's `n>=1` range explicit, consistent with the permutation-projection supplier; the finite-mode count theorem handles vacuum cases separately. Updated the empty-boundary contract accordingly. No dependency edge was added.

2. **`pthm-nrqm-identical-particles-orbital-occupation-exclusion`.** Replaced the unsupported spectral-measure assertion with an explicit finite construction. For each mode, the proof defines `F_j(B)` by summing joint projections with eigenvalue in `B`, verifies the PVM properties and strong countable additivity, computes its spectral integral as `N_j^sigma`, and uses the observable definition's uniqueness clause to identify it with the spectral PVM. Updated Fact F3 to cite the orbital-model definition's joint-projector resolution, then renumbered the downstream proof steps and references to the precheck canonical form. Updated the proof contract and boundary references.

3. **`ex-nrqm-identical-particles-exchange-versus-coulomb-terms`.** The prior proof used Hardy's inequality after translating an orbital without proving translation preserves its weak derivatives. Added Fact L6 and a local test-function change-of-variables derivation of `D_j b_x(y)=(D_j b)(x+y)`. Applying Hardy to the translated orbital and then Tonelli proves the inverse-square bound needed for each basis tensor to lie in the multiplication-operator domain; linearity gives the finite orbital space domain inclusion. Updated the proof contract, citation steps, and boundary references.

For all three changed items, the affected batch proof contracts now match the current proof steps and tags. No `verification.judge` entry was present on these item carriers. Reflow reported no further changes, and the per-item prechecks passed. The required final batched layout command reported: `3 items, 20 steps, 0 defects`.

## Findings I could not edit

- **Published dependency `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, Definition, line 37.** The displayed formula ends `$$.Because` with the following prose on the same source line, contrary to the schema's display-math layout. It is used by assigned consumer `thm-nrqm-identical-particles-occupation-number-basis` through Fact F6. The definition content is otherwise sufficient for the cited use; the owner should separate the display and prose and reflow the definition.
- **Published dependency `cor-cauchy-schwarz-inequality-for-l-two`, Proof steps 1.1 and 2.1, lines 51 and 53.** Step 1.1 embeds the display inequality in prose and duplicates `[L1]`; step 2.1 inserts `[L2, step 1.1]` between “to” and `p=q=2`, leaving the specialization sentence malformed. The Cauchy–Schwarz result is correct and immediately follows from Holder, but its proof text and tags need repair. It is used by assigned consumer `ex-nrqm-identical-particles-exchange-versus-coulomb-terms` through Fact L7.
- **Current-run draft dependency `thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation` (batch 41), Proof step 1.4, line 109; also Statement (d), line 73.** “Hardy applied in the y-variable” at the point `|x-y|` silently uses that translation preserves the Sobolev class and translates its weak derivative. Step 1.4 does not establish that prerequisite. The one-line test-function change of variables added locally in assigned consumer `ex-nrqm-identical-particles-exchange-versus-coulomb-terms`, step 1.1, closes this short omission. Severity is nonfatal. The source bytes observed at split are bound in the findings JSON.
- **Current-run draft dependency `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition` (batch 37), Proof step 3.1, line 106.** It invokes the vector identity `J^2u=lambda(lambda+1)u` “from step 2.1,” while step 2.1 states only the scalar identity `⟨J^2u,u⟩=lambda(lambda+1)`. The missing vector identity follows immediately from `J_+u=0`, `J_z u=lambda u`, `J^2=J_+J_-+J_z^2-J_z`, and `[J_+,J_-]=2J_z`; write that substitution explicitly. This is a nonfatal short omission. The assigned consumer closure is `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry` → `pthm-nrqm-angular-momentum-two-spin-composition` → `thm-nrqm-orbital-and-spin-tensor-spin-composition` → this theorem. The source bytes observed at split are bound in the findings JSON.

## Page verdicts

- **`qm-identical-particles-and-exclusion` (A):** The page prose correctly describes a conditional consequence of the adopted P6 sector and declared finite-mode readout, without presenting the result as an empirical observation. Verdict: pass after the occupation-basis and exclusion-proof repairs. The published orthonormal-family definition has the formatting finding listed above.
- **`qm-identical-particles-and-exclusion-examples` (B):** The page prose keeps the singlet/triplet and direct/exchange computation within the declared pair-interaction model and makes no measured-energy claim. Verdict: pass after the translated-Hardy domain repair. Its dependency closure includes the published Cauchy–Schwarz proof and batch 41 Hardy omission listed above.

## Blocker and coverage note

No blocker prevents completion of the assigned review. The Skinner Wayback copy was unavailable and is the only source limitation; the source claims reviewed here were checked against the independently read Binney–Skinner and Essler passages. All assigned pages and items were opened. The four findings above are outside the reader's edit scope and remain for their owners.
