---
title: Angular-momentum basis and tensor labels
status: published
research_item: def-qec-distinguishability-angular-basis
dependency_level: 1
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Atomic and molecular systems, opening paragraph and equation
        (10); p. 11, section S3
      statement: The article denotes simultaneous eigenstates of J squared and J_z by
        |J,m>, with eigenvalues J(J+1) and m, and uses the Clebsch–Gordan
        coefficient C^{J-1,m+delta}_{1,delta;J,m} in its transition operators.
      hypotheses: The article's angular-momentum model and the displayed transition
        labels, with J at least 1 and delta equal to 0 or plus or minus 1.
      reading_limits: Article attribution only. The supplied extracted text at these
        locations was read; no independent source audit or physical derivation
        is claimed. The phase-explicit construction below uses the completed
        local mathematical supplier.
---

PDF p. 3: ` Atomic and molecular systems, opening paragraph and equation (10) `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)


## Definition

A spin label is $J\in\{0,\tfrac12,1,\tfrac32,\ldots\}$, and its magnetic labels are $m=-J,-J+1,\ldots,J$. In the finite spin-$J$ block $V_J=\mathbb C^{2J+1}$, write the specified orthonormal basis vector $e_{J,m}$ as $|J,m\rangle$. The operators $J_x,J_y,J_z$ are the block operators, and $\mathbf J^2=J_x^2+J_y^2+J_z^2$. Thus $\mathbf J^2|J,m\rangle=J(J+1)|J,m\rangle$ and $J_z|J,m\rangle=m|J,m\rangle$; in particular $|m|\leq J$.

For $J\geq1$ and $\delta\in\{-1,0,1\}$, the article's label $C^{J-1,m+\delta}_{1,\delta;J,m}$ denotes the Clebsch–Gordan coefficient in the ordered coupling $V_1\otimes V_J$: it is the coefficient of $|1,\delta\rangle\otimes|J,m\rangle$ in the normalized coupled vector of total spin $J-1$ and magnetic label $m+\delta$. A coupled vector is obtained from a chosen unit highest-weight vector in that spin summand by the supplier's positively normalized lowering convention. If $m+\delta$ is outside the magnetic labels of spin $J-1$, this coefficient is taken to be zero. The order of factors and the chosen highest-weight phase are part of the convention; comparison with a numerical coefficient table requires matching both. The article uses these labels in its rank-one transition operators.

## Definition references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

## Justification

The finite spin-block construction supplies the orthonormal basis and operators and gives the two displayed eigenvalue identities. The finite operator conventions give the meaning of the ket and ordered tensor-product notation. For $J\geq1$, the spin-composition construction includes the $J-1$ summand in $V_1\otimes V_J$ and supplies its normalized coupled vectors for admissible magnetic labels. Their unique coefficients in the product basis are therefore well defined after the highest-weight vector is chosen. Extending the coefficient by zero outside that label range is an explicit convention. Changing the highest-weight phase multiplies all coefficients in the summand by the same phase, so the stated phase qualification is necessary. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions) [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
