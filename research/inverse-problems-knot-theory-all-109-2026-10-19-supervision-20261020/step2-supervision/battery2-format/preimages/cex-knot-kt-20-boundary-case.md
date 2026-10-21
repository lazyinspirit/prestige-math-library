---
id: cex-knot-kt-20-boundary-case
kind: counterexample
title: The eigenvalue equation does not imply the matrix relation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-oriented-slope-and-knot-dehn-filling
justified_by: []
proof_strategy: direct
axiom_use: The matrix calculation is choice-free. It refutes only the general
  matrix implication and does not assert that this pair extends to a
  representation of a knot group.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), §2.3
      url: https://arxiv.org/pdf/2405.19197v2
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, §2.2
      url: https://arxiv.org/pdf/2103.14151
---

## Statement refuted

Let $U,V\in SL_2(\mathbb C)$ commute and have a common invariant line on which their eigenvalues are $M,L$, respectively. For every primitive pair $(p,q)\in\mathbb Z^2$, if $M^pL^q=1$, then $U^pV^q=I_2$.

## Statement references

[[thm-a-polynomial-boundary-restriction-and-surgery-detector|Exact matrix relation for a filling representation]]

[[def-sl-two-character-variety-and-peripheral-eigenvalues|Common peripheral eigenline and eigenvalue convention]]

[[def-oriented-slope-and-knot-dehn-filling|Primitive filling-pair convention]]

[Baldwin and Sivek, §2.3](https://arxiv.org/pdf/2405.19197v2)

[Bénard, Florens, and Rodau, §2.2](https://arxiv.org/pdf/2103.14151)

## Facts & Assumptions

**Given:** $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $U=I_2+N$, $V=I_2$, and the primitive pair $(p,q)=(1,0)$.

[F1] $N^2=0$, so $U$ is upper-triangular unipotent with determinant one and is not the identity.

[F2] The identity matrix commutes with every matrix, and the eigenvalues of an upper-triangular matrix are its diagonal entries.

## Counterexample

1.1 Since $N^2=0$, $U=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, so $U\in SL_2(\mathbb C)$, has only eigenvalue $1$, and is not $I_2$. Also $V=I_2\in SL_2(\mathbb C)$. By [F2], the pair commutes and has common eigenline $\mathbb C(1,0)$ with eigenvalues $M=L=1$. [F1, F2, given, algebra]

1.2 For $(p,q)=(1,0)$, the eigenvalue equation gives $M^pL^q=1^1 1^0=1$, while $U^pV^q=U\ne I_2$. This refutes the statement. The example is only a matrix pair and does not claim to extend to any knot-group representation. [F1, given, step 1.1, algebra] ∎
