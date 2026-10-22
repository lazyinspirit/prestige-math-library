# Step 3a reader report — batch 100

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `100`

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-modular-equilibrium.md` (A page)
- `library/quantum-statistical-mechanics/qsmx-modular-equilibrium-examples.md` (B page)

Assigned items, read with suppliers before consumers:

- Level 0: `lem-qsmx-modular-strip-analyticity`, `lem-qsmx-modular-unitary-strong-continuity`
- Level 3: `def-qsmx-von-neumann-kms-state`, `lem-qsmx-tomita-operator-involution`
- Level 4: `def-qsmx-standard-modular-data`
- Level 5: `thm-qsmx-finite-modular-density`, `lem-qsmx-modular-resolvent-core`
- Level 6: `thm-qsmx-tomita-takesaki`, `ex-qsmx-modular-is-not-physical-time`

I also opened the directly required batch-99 page `qsmx-operator-algebra-prerequisites` and its operator-algebra suppliers: `def-qsmx-von-neumann-algebra`, `def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint`, `lem-qsmx-trace-class-duality`, `lem-qsmx-linear-closed-polar-decomposition`, `lem-qsmx-bicommutant-and-commutant-cyclicity`, `lem-qsmx-monotone-bounded-positive-net`, `lem-qsmx-closed-antilinear-polar-calculus`, and `lem-qsmx-von-neumann-predual`. Other directly used suppliers opened at their item carriers include `lem-qsm-matrix-state-calculus`, `def-qsm-density-trace-state`, `def-qsm-kms-state`, the unbounded spectral theorem and Borel calculus, dominated convergence, the residue theorem, L1 Fourier inversion, Banach–Alaoglu, the ultrafilter lemma, Hahn–Banach, continuous functional calculus, the double commutant theorem, and the declared choice suppliers.

For source checks I opened the cited passages in [F. Hiai, *Concise Lectures on Selected Topics of von Neumann Algebras*](https://arxiv.org/pdf/2004.02383) (Appendix A, Theorem A.7; §§2.1–2.2) and [Edward Witten, *Notes on Some Entanglement Properties of Quantum Field Theory*](https://arxiv.org/pdf/1803.04993) (§§3.1 and 4.1). I checked Hiai Theorem A.7 with its proof, the relevant Hiai theorem/definition statements and formula locations, and Witten's cited equations and footnote; I did not read either full work cover to cover.

## Review and edits

All nine items are classified as mathematical and have no empirical premises. The finite Gibbs conversion is a conditional matrix identity with units explicitly stated; it makes no claim about a measured system. The KMS proof uses the declared upper-strip boundary convention and `alpha_t = sigma_{-t}` directly. No TikZ or tikzcd diagrams occur in the assigned items or pages.

I repaired `items/lem-qsmx-modular-resolvent-core.md`:

- In Proof 3.1, the proof now records that `bar(alpha) != 0` puts `x Omega` in `D(F)` before using `F S = Delta`.
- In Proof 7.1, the compared operators are named explicitly as `B = J x* J` and the step-1.4 integral `C` with input `x'`. The proof now derives the compressed Sylvester equation from the two identities for the same `x'`, handles the zero spectral subspace, and explains how the bounded continuous functional calculus turns scalar residue integrals into operator contour integrals.
- In Proof 8.1, the cutoff limit is written as a matrix-coefficient argument proving `B=C`; this removes the previously unbound `y` and `tilde x` notation.
- The Witten locator's closure caveat was corrected from footnote 15 to footnote 14, the number in the cited current arXiv version.
- I updated the matching proof-contract derivations for steps 3.1, 7.1 and 8.1. The item had no `verification.judge` record to remove.

The source passages exposed two errors in printed Hiai formulas that the local proof already corrects and proves independently. Hiai §2.1, Lemma 2.1(iv), printed p. 11, gives `J Delta^(it) = Delta^(-it) J`; antiunitary functional calculus applied to `J Delta J = Delta^(-1)` gives `J Delta^(it) J = Delta^(it)`, which the local Tomita proof derives. Hiai §2.1, Lemma 2.7 and Eq. (2.9), printed pp. 13–15, have an extra leading `i` in the resolvent integral. The local contour proof derives the kernel without that factor; at `theta=0` and `Delta=I`, the scalar integral is `1/2`, as the resolvent and Sylvester identities require. Hiai §2.2, Definition 2.11 uses a lower-strip convention; the local main theorem derives the required upper-strip boundary values explicitly. Witten's footnote 14 cautions that the displayed adjoint calculation establishes only an extension relation, not the needed closure equality; the local core proves `overline(F_0)=F` after establishing `JMJ=M'`.

## Validation

- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-qsmx-modular-resolvent-core.md` — unchanged.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qsmx-modular-resolvent-core.md` — pass.
- Proof layout: `node tools/physics-support/proof-layout.mjs items/lem-qsmx-modular-resolvent-core.md` — 1 item, 17 steps, 0 defects.

## Page verdicts

- `qsmx-modular-equilibrium`: pass. The A-page item list and required-page list match the assigned manifest; the compact page has no summary prose to review. No page-local defect remains.
- `qsmx-modular-equilibrium-examples`: pass. The B page places the assigned example and requires its A companion as declared; it has no summary prose. No page-local defect remains.

## Uneditable finding

The finite modular-density proof contract has stale step references in `contracts.thm-qsmx-finite-modular-density.finite_checks`: the faithful two-level check says the physical phase is matched by steps 2.1–2.2, although the physical-time conversion is in step 4.1; the upper-strip check cites step 3.2, which does not exist, while the KMS boundary calculation is step 5.1. The item proof itself is correct. I left this contract-only defect for its owner and routed it in the findings JSON as a nonfatal `ill-formed` finding.

## Blocker and coverage limit

No blocker remains. I checked the assigned items, their direct suppliers and the relevant cited source passages. I did not independently re-prove every transitive published mathematical dependency beyond the exact statements and uses needed by this batch.
