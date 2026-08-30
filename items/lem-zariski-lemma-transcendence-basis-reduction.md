---
id: lem-zariski-lemma-transcendence-basis-reduction
kind: lemma
title: "A finite-type field reduces to a localization over a transcendence basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-field-extension, lem-maximal-algebraically-independent-subset-is-a-transcendence-basis, thm-transitivity-of-algebraicity]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 13.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k\subseteq K$ be a field extension, and assume that $K$ is finitely
generated as a $k$-algebra. Let $t_1,\ldots,t_r\in K$ be a transcendence basis
of $K$ over $k$. Then there exists a nonzero polynomial
$s\in k[t_1,\ldots,t_r]$ such that $K$ is integral over the localization
$$
k[t_1,\ldots,t_r]\left[\frac1s\right].
$$

## Facts & Assumptions

**Given:** A field extension $k\subseteq K$, a finite $k$-algebra generating set for $K$, and a transcendence basis $t_1,\ldots,t_r$ of $K$ over $k$.

[L1] The notation $k(t_1,\ldots,t_r)$ denotes the generated subfield ([[def-finitely-generated-field-extension]]).

[L2] A transcendence basis makes the ambient field algebraic over the generated field ([[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

[A1] Clearing finitely many leading coefficients is enough to make finitely many algebraic elements integral over one localization.

## Proof

**Proof technique:** direct.

1.1 Choose generators $a_1,\ldots,a_m\in K$ of $K$ as a $k$-algebra. Since $t_1,\ldots,t_r$ is a transcendence basis, [L2] shows that each $a_i$ is algebraic over $F:=k(t_1,\ldots,t_r)$. [L1, L2, given, choose]

2.1 For each $i$, choose a nonzero polynomial $$ c_{i,d_i}X^{d_i}+\cdots+c_{i,0}\in k[t_1,\ldots,t_r][X] $$ with $c_{i,d_i}\ne 0$ and value zero at $a_i$. Let $s$ be the product of all leading coefficients $c_{i,d_i}$. After localizing at $s$, each $c_{i,d_i}$ becomes invertible, so each $a_i$ satisfies a monic polynomial over $k[t_1,\ldots,t_r][1/s]$. Hence every $a_i$ is integral over that localization. [step 1.1, choose, algebra]

3.1 The field $K$ is generated over $k[t_1,\ldots,t_r][1/s]$ by the integral elements $a_1,\ldots,a_m$. Therefore every element of $k[t_1,\ldots,t_r][1/s][a_1,\ldots,a_m]=K$ is integral over $k[t_1,\ldots,t_r][1/s]$. [step 2.1, algebra]

4.1 Thus $K$ is integral over $k[t_1,\ldots,t_r][1/s]$. [step 3.1] ∎
