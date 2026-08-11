---
id: cor-units-in-a-polynomial-ring-over-a-domain
kind: corollary
title: 'The units of R[x] over an integral domain are exactly the constant polynomials whose values are units of R'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-polynomial-degree-of-a-product-over-a-domain, thm-polynomial-ring-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'James McKernan, MIT 18.703 Lecture 21, Lemma 21.1'
      url: 'https://opencw.aprende.org/courses/mathematics/18-703-modern-algebra-spring-2013/lecture-notes/MIT18_703S13_pra_l_21.pdf'
pipeline_run: null
---

## Statement

Let $R$ be an integral domain. A polynomial $f\in R[x]$ is a unit if and only if it is a constant polynomial whose constant value is a unit of $R$.

## Facts & Assumptions

**Given:** An integral domain $R$ and a polynomial $f\in R[x]$.

[L1] For nonzero polynomials over a domain, $\deg(fg)=\deg f+\deg g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L2] The constant-polynomial map is an injective unital ring homomorphism $R\to R[x]$ ([[thm-polynomial-ring-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is a unit, choose $g$ with $fg=1$; neither factor is zero and [L1] gives $0=\deg1=\deg f+\deg g$, so both degrees are $0$, and comparison of constant coefficients shows that the constant value of $f$ is a unit of $R$. [given, L1, L2, choose]

2.1 Conversely, if $u\in R$ is a unit with inverse $v$, then [L2] gives $c(u)c(v)=c(uv)=c(1)=1$, so the constant polynomial $u$ is a unit of $R[x]$. [L2, algebra] ∎
