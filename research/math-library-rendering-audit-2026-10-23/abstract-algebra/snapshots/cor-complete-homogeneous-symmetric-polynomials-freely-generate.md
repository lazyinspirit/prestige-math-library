---
id: cor-complete-homogeneous-symmetric-polynomials-freely-generate
kind: corollary
title: "The complete homogeneous symmetric polynomials $h_1,\\ldots,h_n$ freely generate the symmetric-polynomial ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-elementary-and-complete-generating-series-identity, thm-fundamental-theorem-of-symmetric-polynomials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Section 7.1"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

Substitution $U_k\mapsto h_k$ is an $R$-algebra isomorphism

$$R[U_1,\ldots,U_n]\longrightarrow R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}.$$

Thus $h_1,\ldots,h_n$ freely generate the symmetric-polynomial ring.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a natural number $n$.

[L1] The identity $E(-t)H(t)=1$ gives $h_k-e_1h_{k-1}+\cdots+(-1)^ke_k=0$ for $1\le k\le n$ ([[prop-elementary-and-complete-generating-series-identity]]).

[L2] Substitution $T_k\mapsto e_k$ is an isomorphism from a polynomial ring onto the symmetric-polynomial ring ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 The recurrence in [L1] expresses $h_k$ as $(-1)^{k-1}e_k$ plus a polynomial in $e_1,\ldots,e_{k-1}$, and also expresses $e_k$ as $(-1)^{k-1}h_k$ plus a polynomial in $h_1,\ldots,h_{k-1}$. [L1, algebra]

2.1 Recursion on $k$ therefore gives mutually inverse triangular substitutions between $R[e_1,\ldots,e_n]$ and $R[h_1,\ldots,h_n]$; every diagonal coefficient is $1$ or $-1$, hence a unit in $R$. [step 1.1, algebra]

3.1 Composing either triangular isomorphism with [L2] shows that $U_k\mapsto h_k$ is an $R$-algebra isomorphism onto the symmetric-polynomial ring. [step 2.1, L2] ∎
