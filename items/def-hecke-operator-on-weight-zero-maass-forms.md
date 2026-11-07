---
id: def-hecke-operator-on-weight-zero-maass-forms
kind: definition
title: "Hecke operator on weight-zero Maass forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-weight-zero-maass-form-on-gamma0n, def-congruence-subgroup-of-sl2-z, lem-unramified-hecke-determinant-coset-decomposition]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "Section 4.2, printed pp. 28–29: normalized all-determinant triangular sum; trivial nebentypus specialization."
---

## Definition

Let $N\ge1$, let $\Gamma=\Gamma_0(N)$, and let $n\ge1$ be coprime to $N$. On pointwise $\Gamma$-invariant weight-zero functions $f:\mathbb H\to\mathbb C$, use the standard normalized all-determinant operator
$$
T_nf(z)=n^{-1/2}\sum_{\substack{a,d>0\\ad=n}}\sum_{b=0}^{d-1}f\!\left(\frac{az+b}{d}\right).
$$
Equivalently sum over left $\Gamma$-cosets of all integral determinant-$n$ matrices whose lower-left entry is divisible by $N$. This finite expression is independent of representatives and preserves $\Gamma$-invariance by [[lem-unramified-hecke-determinant-coset-decomposition]]. A joint Hecke eigenfunction satisfies $T_nf=\lambda_n f$ for every such $n$.

For comparison, write $P_n$ for the primitive normalized operator, summing only over $\Gamma\operatorname{diag}(1,n)\Gamma$ with the same factor $n^{-1/2}$. The precise relation is
$$
T_n=\sum_{h^2\mid n}h^{-1}P_{n/h^2}.
$$
Thus $T_p=P_p$ and $T_{p^2}=P_{p^2}+p^{-1}I$ for $p\nmid N$, and the full two families have the same joint eigenfunctions, although their nonprime eigenvalues need not agree. In particular the averaging operator over the $p+1$ prime neighbors is $\sqrt p\,T_p/(p+1)$.

## Definition references

[[lem-unramified-hecke-determinant-coset-decomposition]]

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)
