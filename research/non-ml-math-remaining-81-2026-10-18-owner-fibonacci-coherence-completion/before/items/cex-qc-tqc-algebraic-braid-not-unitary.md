---
id: cex-qc-tqc-algebraic-braid-not-unitary
kind: counterexample
title: Algebraic braid relations do not imply unitarity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-yang-baxter-operator-on-an-object
  - thm-a-yang-baxter-operator-gives-braid-group-representations
  - def-braid-group-by-the-artin-presentation
  - def-generic-type-a-hecke-algebra
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement refuted

The claim refuted is that an algebraic Yang–Baxter or Hecke relation by itself
guarantees that the resulting braid-group representation is unitary for some
positive-definite inner product.

## Facts & Assumptions

**Given:** the strict monoidal category of finite-dimensional complex vector
spaces, $X=\mathbb C$, $R=2I_{X\otimes X}$, and the three-strand braid group
$B_3$.

[F1] [[def-yang-baxter-operator-on-an-object]]: a Yang–Baxter operator is an
invertible map $R:X\otimes X\to X\otimes X$ satisfying the cubic braid equation
on $X^{\otimes3}$.

[F2] [[thm-a-yang-baxter-operator-gives-braid-group-representations]]: such an
operator gives a homomorphism $\rho_n:B_n\to\operatorname{Aut}(X^{\otimes n})$
with $\rho_n(\sigma_i)=R_i$.

[F3] [[def-braid-group-by-the-artin-presentation]]: $B_3$ has generators
$\sigma_1,\sigma_2$ and relation $\sigma_1\sigma_2\sigma_1=
\sigma_2\sigma_1\sigma_2$.

[F4] [[def-generic-type-a-hecke-algebra]]: in the root normalization the
specialized Hecke relation is $(T_i-v)(T_i+1)=0$.

[F5] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary
operator on a finite-dimensional complex inner-product space is an invertible
linear isometry, hence preserves the induced norm.

## Counterexample
1.1 In this strict monoidal category, the map $R=2I$ is invertible. On $X^{\otimes3}=\mathbb C$, both local operators are $R_1=R_2=2I$, so each side of the Yang–Baxter equation is $8I$. Thus [F1] applies. [given, F1, algebra]

2.1 By [F2] and [F3], $\sigma_1$ and $\sigma_2$ act by $2I$ and their braid relator holds, since both sides are $8I$. At the root Hecke parameter $v=2$, the valid specialization $\mathbb Z[v^{\pm1}]\to\mathbb C$ sends each $T_i$ to $2$ and satisfies the root quadratic equation $(2-2)(2+1)=0$. Thus the scalar action also satisfies the Hecke quadratic relation in the stated normalization. [F2, F3, F4, step 1.1, algebra]

3.1 For any positive-definite inner product and any nonzero $z\in\mathbb C$, $\|2z\|=2\|z\|\ne\|z\|$. By [F5], the generator $2I$ is not unitary for any such inner product. Therefore these algebraic braid and Hecke relations do not force unitarity. [F5, given, algebra] ∎
## Remarks

This example uses the repository's $v$-normalization $(T_i-v)(T_i+1)=0$.
It does not rule out unitary representations at other parameters or after a
positive dagger structure has been separately specified. The compact-group
averaging lemma [[lem-averaging-makes-a-finite-dimensional-representation-unitary]]
does not apply to the discrete infinite group $B_3$; the exponent-sum map
[[def-exponent-sum-and-writhe-of-a-braid]] maps it onto $\mathbb Z$.
