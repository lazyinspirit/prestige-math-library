---
id: thm-krawczyk-set-inclusion-existence-and-uniqueness
kind: theorem
title: Krawczyk inclusion gives solutions and contraction gives uniqueness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [lem-brouwer-fixed-point-for-closed-boxes, def-complex-infinity-matrix-norm, lem-complex-infinity-matrix-norm-submultiplicative]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Let $n\ge1$, let $\mathcal A\subseteq\mathbb C^{n\times n}$ and $\mathcal b\subseteq\mathbb C^n$ be nonempty, let $X$ be a nonempty closed complex rectangle box in $\mathbb C^n\cong\mathbb R^{2n}$, let $x_0\in X$, and let the point matrix $R$ be nonsingular. For each fixed $A\in\mathcal A,b\in\mathcal b$, define
$$
\Phi_{A,b}(x)=x-R(Ax-b)
$$
and
$$
K^*(X)=\{x_0-R(Ax_0-b)+(I-RA)(x-x_0): A\in\mathcal A,\ b\in\mathcal b,\ x\in X\}.
$$
If $K^*(X)\subseteq X$, then every admitted pair $(A,b)$ has a solution in $X$. If in addition a number $q<1$ satisfies $\|I-RA\|_{\infty,\mathbb C}\le q$ for every $A\in\mathcal A$, that solution is unique in $X$ for each fixed pair.

## Facts & Assumptions

**Given:** The families, box, center, and nonsingular $R$ in the statement.

[F1] Every continuous self-map of a closed box has a fixed point ([[lem-brouwer-fixed-point-for-closed-boxes]]).

[F2] The complex infinity matrix norm is compatible with multiplication by vectors ([[lem-complex-infinity-matrix-norm-submultiplicative]]).

[F3] The vector infinity norm is the maximum coordinate modulus ([[def-complex-infinity-matrix-norm]]).

## Proof

1.1 Fix any $A\in\mathcal A,b\in\mathcal b$. Algebra gives $\Phi_{A,b}(x)=x_0-R(Ax_0-b)+(I-RA)(x-x_0)$, so $K^*(X)\subseteq X$ implies $\Phi_{A,b}(X)\subseteq X$. The affine map $\Phi_{A,b}$ is continuous on the closed box, so [F1] gives a fixed point $x\in X$. Since $R$ is nonsingular, $\Phi_{A,b}(x)=x$ is equivalent to $Ax=b$. [given, F1, algebra]

2.1 If $x,y\in X$ both solve the same system, then both are fixed points and $x-y=(I-RA)(x-y)$. By [F2] and [F3], $\|x-y\|_\infty\le q\|x-y\|_\infty$. Since the vector infinity norm [F3] vanishes only at the zero vector and $q<1$, $x=y$. This proves uniqueness for that pair; the pair was arbitrary. [given, F2, F3, step 1.1] ∎

