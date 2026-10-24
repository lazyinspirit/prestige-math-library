---
id: thm-class-equation
kind: theorem
title: 'The class equation $|G|=|Z(G)|+\sum_i [G:C_G(x_i)]$ for a finite group'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orbits-partition-the-set, thm-conjugacy-class-cardinality, def-conjugacy-class-and-centralizer, def-center-of-a-group, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2, The Class Equation"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement

Let $G$ be finite, and let $x_1,\ldots,x_r$ contain one representative from
each conjugacy class having more than one element. Then

$$|G|=|Z(G)|+\sum_{i=1}^{r}[G:C_G(x_i)].$$

## Facts & Assumptions

**Given:** A finite group $G$ and representatives $x_1,\ldots,x_r$ of its non-singleton conjugacy classes.

[L1] The orbits of an action partition the acted-on set ([[thm-orbits-partition-the-set]]).

[L2] Under conjugation, $|\operatorname{Cl}_G(x)|=[G:C_G(x)]$ ([[thm-conjugacy-class-cardinality]]).

[L3] Conjugacy classes and centralizers are as in [[def-conjugacy-class-and-centralizer]].

[L4] The center is $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L5] A finite partition has cardinality equal to the sum of its block cardinalities ([[thm-sum-rule]]).

[L6] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ act on itself by conjugation. By [L1] and [L3], its orbits are the conjugacy classes and they partition $G$. [L1, L3]

2.1 The class of $x$ is a singleton exactly when $gxg^{-1}=x$ for every $g$, equivalently when $x\in Z(G)$ by [L4]. Thus the singleton classes contribute $|Z(G)|$. [step 1.1, L3, L4]

3.1 Applying the finite partition sum rule to the singleton classes and to the classes represented by $x_1,\ldots,x_r$ gives $|G|=|Z(G)|+\sum_{i=1}^{r}|\operatorname{Cl}_G(x_i)|$. [step 1.1, step 2.1, L5, L6]

4.1 Replacing each remaining class size by [L2] yields $|G|=|Z(G)|+\sum_{i=1}^{r}[G:C_G(x_i)]$. [step 3.1, L2] ∎
