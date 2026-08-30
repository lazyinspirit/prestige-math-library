---
id: lem-vanishing-ideal-is-radical
kind: lemma
title: "A vanishing ideal is always radical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (15.7)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $X\subseteq k^n$. Then the vanishing ideal
$$
I(X)=\{f\in k[x_1,\ldots,x_n]: f(a)=0\text{ for every }a\in X\}
$$
is a radical ideal.

## Facts & Assumptions

**Given:** A field $k$ and a subset $X\subseteq k^n$.

[L1] Polynomial evaluation at a point is well defined ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in k[x_1,\ldots,x_n]$ and assume $f^N\in I(X)$ for some $N\ge 1$. Then for every $a\in X$, $$ f(a)^N=f^N(a)=0 $$ by [L1]. Since $k$ is a field, $f(a)=0$ for every $a\in X$. [L1, given]

2.1 Thus $f\in I(X)$. By the definition of radical ideal, this proves that $I(X)$ is radical. [step 1.1] ∎
