# Step 3a reader report — batch 4

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: reader  
Batch: `4`  
Date: 2026-10-15

## Opened inventory

I read the batch-4 manifest, authoring notes, proof contracts, cross-batch dependency ledger, and coverage record as evidence, not verdicts. I checked the current authored bodies independently.

Assigned pages:

- A: `hopf-ideals-finite-duals-and-basic-constructions`.
- B: `hopf-ideals-finite-duals-and-basic-constructions-examples`.

Assigned items, read in supplier order:

- A: `def-hh-finite-dual-of-an-associative-algebra`; `def-hh-hopf-ideal-and-hopf-subalgebra`; `thm-hh-finite-dimensional-dual-hopf-algebra`; `lem-hh-taft-algebra-pbw-and-hopf-structure`; `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions`; `thm-hh-finite-dual-coalgebra-and-hopf-descent`.
- B: `ex-hh-finite-group-dual-hopf-algebra`; `ex-hh-coideals-ring-ideals-hopf-ideals-and-subbialgebras`; `ex-hh-sweedler-four-dimensional-hopf-algebra`; `ex-hh-finite-dual-of-a-polynomial-hopf-algebra`; `ex-hh-tensor-product-hopf-algebra`.

Prerequisite pages opened:

- `tensor-coherence-and-algebraic-descent`.
- `coalgebras-counits-and-the-fundamental-coalgebra-theorem`.
- `comodules-matrix-coefficients-and-coalgebra-duality`.
- `bialgebras-convolution-and-antipode-identities`.
- `eigenvalues-eigenvectors-and-the-characteristic-polynomial`.
- `artinian-rings-and-length`.

In-run supplier items opened:

- Batch 1: `def-hh-coalgebra-and-coalgebra-map`; `lem-hh-counit-uniqueness-and-finite-sweedler-calculus`; `def-hh-subcoalgebras-coideals-and-quotient-coalgebras`.
- Batch 2: `def-hh-right-comodule-and-comodule-morphism`; `def-hh-dual-algebra-and-rational-module`; `thm-hh-finite-algebra-coalgebra-duality`.
- Batch 3: `lem-hh-tensor-product-coalgebra`; `def-hh-bialgebra-and-bialgebra-map`; `lem-hh-bialgebra-compatibility-equivalence`; `lem-hh-convolution-algebra-associativity-and-unit`; `def-hh-hopf-algebra-and-antipode`; `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication`; `lem-hh-group-and-polynomial-hopf-algebras-exist`; `def-hh-group-like-and-primitive-elements`.

Published dependencies opened: `def-field`; `def-algebra-over-a-commutative-ring`; `def-algebraic-dual-and-linear-functional`; `def-algebraically-closed-field`; `def-axiom-of-choice`; `def-left-right-and-two-sided-ideal`; `def-hh-scalar-and-tensor-conventions`; `lem-hh-tensor-coherence-on-elementary-tensors`; `lem-hh-tensor-injections-quotients-and-kernels-over-a-field`; `lem-hh-finite-tensor-duality-and-canonical-coevaluation`; `lem-hh-free-associative-ring-and-relations-descent`; `lem-hh-finite-matrix-and-module-preliminaries`; `lem-hh-finite-polynomial-and-localization-constructions`; `prop-functoriality-of-module-tensor-products`; `thm-chinese-remainder-theorem-for-comaximal-ideals`; `thm-monic-polynomial-division`; `thm-quotient-ring-universal-property`; `thm-tensor-product-basis-from-bases`; `thm-tensor-product-of-algebras-over-a-commutative-ring`.

## Review and edits

No edits were made. I found no confirmed defect in an assigned item or page, so there is no item diff, proof-contract update, stale judge record to remove, or changed-item formatting/precheck run.

The finite-dual definition correctly uses annihilation of a finite-codimensional two-sided ideal and explicitly defers its coproduct until the local theorem proves the transpose lands in the algebraic tensor square. The Hopf-ideal definition distinguishes the choice-free image formulation from its AC-dependent tensor-subspace shorthand. The finite-dimensional dual proof checks both antipode equations by precomposition and does not use (S^{-1}). The Taft proof establishes the quotient presentation, PBW basis, root-of-unity truncation, and both antipode equations; its parameter convention is the inverse of Baker's displayed root parameter. The quotient/kernel/tensor theorem uses AC only for the tensor-kernel step and proves quotient descent and the tensor-product formulas directly. The finite-dual theorem establishes the quotient and finite-dimensional matrix-coefficient descriptions, the finite-tensor separation needed in arbitrary dimension, convolution closure, and antipode closure without an antipode-bijectivity hypothesis.

The examples' computations check out: the finite-group dual formulas use the Dirac basis; the coideal, ideal, Hopf-ideal, and subbialgebra witnesses have the stated properties; the Sweedler specialization is noncommutative and noncocommutative under the stated characteristic condition; the polynomial finite-dual decomposition and structure maps follow from factorization and CRT; and the tensor-product example has the displayed coproduct, counit, and antipode.

## Page verdicts

- `hopf-ideals-finite-duals-and-basic-constructions` — **no defect found**. Its summary accurately describes the local quotient, tensor-product, finite-dual, and Taft constructions and their stated choice assumptions.
- `hopf-ideals-finite-duals-and-basic-constructions-examples` — **no defect found**. Its summary matches the five examples, including the finite-dual polynomial calculation.

## Uneditable findings and source note

There is no uneditable defect in the assigned repository subjects, so the findings JSON is empty.

I recorded one out-of-scope source discrepancy for the owner. Andrew Baker's *Hopf algebras over fields: an introduction* defines (A^\circ) by cofinite two-sided ideals in §2.10 (printed p. 23), then in §3.2, Example 3.2 (printed pp. 38–39), states (k[X]^\circ\cong\Gamma_k). Under that same definition, every evaluation (f\mapsto f(a)) annihilates the cofinite ideal ((X-a)), giving distinct grouplikes for distinct (a\in k). The divided-power coalgebra Baker defines there has \(\Delta(\gamma_n)=\sum_{i+j=n}\gamma_i\otimes\gamma_j\); a finite-support grouplike must have all positive-degree coefficients zero, so it has only \(\gamma_0\). Couto's Theorem 1.3.7(2) (printed p. 22) identifies grouplikes of the finite dual with algebra maps (H\to k), and Kytölä's Exercise 28 (printed p. 52) gives the extra additive-group factor over \(\mathbb C\). This discrepancy does not enter any assigned proof: the polynomial example cites Kytölä and proves its all-character formula locally.

Sources checked for this note and for the relevant comparisons:

- [Andrew Baker, *Hopf algebras over fields: an introduction*](https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf), §§2.10, 2.25, 3.2, 3.12 (printed pp. 23, 30–31, 38–39, 47–48).
- [Kalle Kytölä, *Introduction to Hopf algebras and representations*](https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf), §§3.8–3.9 and Exercise 28 (printed pp. 47–52).
- [Miguel Angelo Marques do Couto, *Commutative-by-finite Hopf algebras and their finite dual*](https://theses.gla.ac.uk/74418/1/2019CoutoPhD.pdf), §1.3, Theorem 1.3.7 and proof (printed pp. 21–22).

## Blocker

The reader review has no mathematical blocker. The refreshed autopilot status at 2026-10-15 08:08 UTC reports the run as **PAUSED**, with no task in flight; it now recognizes the batch-4 reader artifacts. The run state directory has no `control.json`, so the pause trigger is not recorded there. I did not change run controls. The run-wide Step 3a reader stage remains incomplete for other batches.
