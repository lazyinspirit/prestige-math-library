---
id: cor-weak-nullstellensatz-algebraically-closed-coordinate-form
kind: corollary
title: "Over an algebraically closed field, every maximal ideal is an evaluation ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite, lem-evaluation-ideal-is-maximal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 13.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary (15.5)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $k$ be an algebraically closed field, and let $\mathfrak m$ be a maximal
ideal of $k[x_1,\ldots,x_n]$. Then there is a unique point
$a=(a_1,\ldots,a_n)\in k^n$ such that
$$
\mathfrak m=(x_1-a_1,\ldots,x_n-a_n).
$$

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and a maximal ideal $\mathfrak m\subseteq k[x_1,\ldots,x_n]$.

[L1] A maximal ideal of a finite-type $k$-algebra has finite residue field over $k$ ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]).

[L2] Evaluation at a point has kernel $(x_1-a_1,\ldots,x_n-a_n)$ ([[lem-evaluation-ideal-is-maximal]]).

[L3] In an algebraically closed field, every nonconstant polynomial has a root ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the residue field $K:=k[x_1,\ldots,x_n]/\mathfrak m$ is a finite extension of $k$. Let $\bar x_i$ be the image of $x_i$ in $K$. [L1, given]

2.1 Each $\bar x_i$ is algebraic over $k$ because $K/k$ is finite. Let $m_i(T)\in k[T]$ be its minimal polynomial. Since $k$ is algebraically closed, [L3] gives a root $a_i\in k$ of $m_i$. Minimality forces $m_i(T)=T-a_i$, so $\bar x_i=a_i$ in $K$. [L3, step 1.1, choose]

3.1 The quotient map $k[x_1,\ldots,x_n]\to K$ is therefore evaluation at the point $a=(a_1,\ldots,a_n)$. Its kernel is $\mathfrak m$, while [L2] says the evaluation kernel is $(x_1-a_1,\ldots,x_n-a_n)$. Hence these ideals are equal. Uniqueness of $a$ follows because the quotient remembers each coordinate class $\bar x_i$. [L2, step 2.1] ∎
