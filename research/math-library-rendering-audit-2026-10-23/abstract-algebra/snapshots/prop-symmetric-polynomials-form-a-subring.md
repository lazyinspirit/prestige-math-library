---
id: prop-symmetric-polynomials-form-a-subring
kind: proposition
title: "The symmetric polynomials form a subring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetric-polynomial, def-subring]
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

For every commutative ring $R$ and every $n\in\mathbb N$, the symmetric polynomials $R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$ form a subring of $R[x_1,\ldots,x_n]$. For $n=0$ this subring is $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a natural number $n$, and symmetric polynomials $f,g\in R[x_1,\ldots,x_n]$.

[L1] A polynomial is symmetric when every variable permutation fixes it ([[def-symmetric-polynomial]]).

[L2] A subset is a subring when it contains $1$ and is closed under addition, additive inverses, and multiplication ([[def-subring]]).

## Proof

**Proof technique:** direct.

1.1 Every variable permutation fixes the constant polynomials $0$ and $1$, so both are symmetric. [L1]

1.2 For every permutation $\sigma$, substitution of permuted variables commutes with the ring operations, so $\sigma(f+g)=\sigma(f)+\sigma(g)=f+g$, $\sigma(-f)=-\sigma(f)=-f$, and $\sigma(fg)=\sigma(f)\sigma(g)=fg$. [given, L1, algebra]

2.1 Thus the symmetric polynomials contain $1$ and are closed under addition, additive inverses, and multiplication, so they form a subring. When $n=0$ every polynomial is a coefficient in $R$ and the assertion gives $R$ itself. [step 1.1, step 1.2, L2] ∎
