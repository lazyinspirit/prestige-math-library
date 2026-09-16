---
id: ex-the-real-symplectic-matrix-group
kind: example
title: The real symplectic matrix group
status: published
verification:
  audited: 2026-09-14
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, ex-general-and-special-linear-lie-groups, def-transpose-of-a-matrix, thm-constant-rank-theorem-for-manifolds]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory classical matrix groups
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Chapter 2, printed pages 18–27
---

## Example

Assume $\mathrm{AC}_\omega$. For
$J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$,

$$\operatorname{Sp}(2n,\mathbb R)=\{A:A^TJA=J\}$$

is an embedded Lie group with Lie algebra

$$\mathfrak{sp}(2n,\mathbb R)=\{X:X^TJ+JX=0\}.$$

## Facts & Assumptions

**Given:** The standard matrix $J$.

[F1] General linear groups are matrix Lie groups with commutator bracket. [[ex-general-and-special-linear-lie-groups]].

[F2] Transpose reverses products. [[def-transpose-of-a-matrix]].

[F3] The constant-rank theorem supplies the embedded level manifold and its tangent kernel. [[thm-constant-rank-theorem-for-manifolds]].

[F4] Countable choice is inherited through [F1]. [[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Let $\operatorname{Skew}_{2n}(\mathbb R)$ be the vector space of skew-symmetric matrices and define $F:\operatorname{GL}_{2n}(\mathbb R)\to\operatorname{Skew}_{2n}(\mathbb R)$ by $F(A)=A^TJA$; the codomain is correct because $J^T=-J$. Then $dF_A(X)=X^TJA+A^TJX$. At a point of $F^{-1}(J)$ write $X=AZ$; then the differential is $Z^TJ+JZ$. Every skew-symmetric $S$ occurs by taking $Z=\frac12J^{-1}S$. Hence the differential is surjective onto its stated codomain along the level, and [F3] makes it embedded. [F2, F3, algebra]

2.1 The equations $(AB)^TJ(AB)=J$ and $(A^{-1})^TJA^{-1}=J$ show that the level is a subgroup, so [F1] makes it a Lie group. At $I$, the tangent kernel from step 1.1 is exactly $X^TJ+JX=0$. [F1, F2, step 1.1, algebra]

3.1 If $X$ and $Y$ satisfy that equation, direct expansion gives $(XY-YX)^TJ+J(XY-YX)=0$, so the tangent space is closed under the commutator bracket. [F1, F2, step 2.1, algebra]

4.1 For $n=0$ the group is trivial. Singular tangent matrices are allowed, while group matrices are invertible because the defining equation gives an explicit inverse. No interval, endpoint, metric choice, or biconditional occurs. $\mathrm{AC}_\omega$ is propagated only through [F1]. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
