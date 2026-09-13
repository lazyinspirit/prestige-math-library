---
id: ex-orthogonal-and-special-orthogonal-lie-groups
kind: example
title: Orthogonal and special orthogonal Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, ex-general-and-special-linear-lie-groups, def-transpose-of-a-matrix, thm-constant-rank-theorem-for-manifolds]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
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

Assume $\mathrm{AC}_\omega$. The groups

$$O(n)=\{A:A^TA=I\},\qquad SO(n)=\{A\in O(n):\det A=1\}$$

are embedded Lie groups, and both have tangent Lie algebra

$$\mathfrak{so}(n)=\{X:X^T+X=0\}$$

at the identity.

## Facts & Assumptions

**Given:** Real $n$-by-$n$ matrices.

[F1] $\operatorname{GL}_n$ is a matrix Lie group with commutator tangent
bracket. [[ex-general-and-special-linear-lie-groups]].

[F2] Transpose reverses matrix products. [[def-transpose-of-a-matrix]].

[F3] A constant-rank level set has the induced embedded manifold structure and
tangent kernel. [[thm-constant-rank-theorem-for-manifolds]].

[F4] Countable choice is inherited through [F1].
[[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Let $F:\operatorname{GL}_n(\mathbb R)\to\operatorname{Sym}_n(\mathbb R)$ be $F(A)=A^TA$. Its differential is $dF_A(X)=X^TA+A^TX$. This is surjective: for symmetric $S$, take $X=\frac12A^{-T}S$. Hence [F3] makes $F^{-1}(I)=O(n)$ an embedded submanifold, and it is a subgroup by [F2]. [F1, F2, F3, algebra]

2.1 At $A=I$, the tangent kernel is $X^T+X=0$. It is closed under commutators because $(XY-YX)^T=Y^TX^T-X^TY^T=-(XY-YX)$ for skew-symmetric $X,Y$. [F1, F2, step 1.1, algebra]

3.1 On $O(n)$, $\det(A)^2=\det(A^TA)=1$, so determinant takes only the values $1$ and $-1$. Its $1$-fibre is therefore open and closed in $O(n)$ and is an embedded Lie subgroup with the same identity tangent space. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For $n=0$ both groups are the one-point group; for $n=1$, $\mathfrak{so}(1)=0$, $O(1)$ is discrete, and $SO(1)$ is trivial. No interval, endpoint, nondegeneracy beyond invertibility in $\operatorname{GL}_n$, metric choice, or biconditional occurs. $\mathrm{AC}_\omega$ is propagated only through [F1]. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
