---
id: lem-qa-26-hhl-prefix-table-synthesis-error
kind: lemma
title: "Operator error for the finite sine-prefix rotation table"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-qc-controlled-unitary-access
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-triangle-inequality-for-inner-product-norm
  - lem-qa-phase-estimation-sine-chord-bounds
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the bound is a finite product estimate."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 4 §4.3, printed p. 19, for phase-register rotations and their coherent control; the operator-error estimate is proved locally."
---

## Statement

Let a finite state-preparation circuit contain $N$ controlled $Y$ rotations, and let each implemented rotation differ from its ideal rotation by operator norm at most $\delta$. The product unitary differs from the ideal product by operator norm at most $N\delta$. In the OP5 table variant $N=T-1$ and $\delta=\epsilon_\Psi/(100T)$, so the preparation error is less than $\epsilon_\Psi/100$; using the same bound for its inverse gives the stated unpreparation cost.

## Facts & Assumptions

**Given:** A finite list of controlled rotations and a per-rotation operator-error bound.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: unitary operators preserve vector norm.

[F2] [[cor-triangle-inequality-for-inner-product-norm]]: the norm of a finite sum is at most the sum of the norms.

[F3] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin x\le x$ for $x\ge0$.

[F4] [[cor-trigonometric-parity-and-pythagorean-identity]]: sine is odd and $\sin^2u+\cos^2u=1$.

[F5] [[thm-sine-and-cosine-addition-formulas]]: the sine and cosine addition formulas hold; substituting them into the displayed rotation matrices gives the corresponding angle-addition rule.

## Proof

1.1 The real $Y$-rotation matrix is $R_y(\theta)=\begin{pmatrix}\cos(\theta/2)&-\sin(\theta/2)\\\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$. For any unit vector $x$, [F5] and [F4] give
$$\|(R_y(\beta)-R_y(\alpha))x\|^2=\|(R_y(\beta-\alpha)-I)x\|^2=4\sin^2((\beta-\alpha)/4).$$
Taking the supremum over unit $x$ and using [F3] and [F4] yields $\|R_y(\beta)-R_y(\alpha)\|\le|\beta-\alpha|$. A controlled rotation is block diagonal with identity and this rotation on its control subspaces, so its operator error obeys the same bound. [given, F1, F3, F4, F5, algebra]

1.2 For products $\widetilde U_N\cdots\widetilde U_1$ and $U_N\cdots U_1$, insert and subtract one factor at a time. This writes their difference as a sum of $N$ terms, each containing one $\widetilde U_j-U_j$ between unitary products. By [F1] the outer products preserve norm, and [F2] bounds the sum by $N\delta$. For $N=T-1$ and $\delta=\epsilon_\Psi/(100T)$ this is less than $\epsilon_\Psi/100$. Applying the same estimate to the inverse rotation list, whose ideal angles are negated and whose synthesis uses the same per-angle tolerance, gives the same bound for inverse preparation. [F1, F2, step 1.1, algebra] ∎