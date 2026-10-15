---
id: ex-hh-type-a-symmetric-central-elements
kind: example
title: "Symmetric Laurent polynomials in the center"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [thm-hh-affine-type-a-center, def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $n\ge2$, each elementary symmetric polynomial
$$
e_k:=\sum_{1\le i_1<\cdots<i_k\le n}X_{i_1}\cdots X_{i_k}\qquad(1\le k\le n)
$$
is central in $H_n^{\mathrm{aff}}$, while $X_1$ is not central.

## Facts & Assumptions

**Given:** $A=R_0[X_1^{\pm1},\ldots,X_n^{\pm1}]$, the permutation action of $S_n$, and the universal center theorem.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $S_n$ acts on $A$ by permuting the variables, and distinct Laurent monomials are $R_0$-linearly independent.

[F2] [[thm-hh-affine-type-a-center]]: $Z(H_n^{\mathrm{aff}})=A^{S_n}$.

## Verification

**Given:** The data of the Statement.

1.1 A permutation sends each monomial $X_{i_1}\cdots X_{i_k}$ to the monomial indexed by the permuted $k$-element subset; as the permutation bijects those subsets, it fixes their sum $e_k$. For $n\ge2$, $s_1(X_1)=X_2\ne X_1$ because these are distinct Laurent basis monomials by [F1]. [given, F1, algebra]

2.1 By [F2], each invariant $e_k$ lies in the center. The same equality of the center with $A^{S_n}$ and the non-invariance of $X_1$ from step 1.1 show that $X_1$ is not central. [F1, F2, step 1.1] ∎

