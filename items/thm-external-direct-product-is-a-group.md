---
id: thm-external-direct-product-is-a-group
kind: theorem
title: '$G\times H$ is a group with identity $(e_G,e_H)$, coordinatewise inverses, and homomorphic coordinate projections'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-direct-product-of-groups, def-group, def-group-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

For groups $G$ and $H$, the componentwise operation of
[[def-external-direct-product-of-groups]] makes $G\times H$ a group. Its
identity is $(e_G,e_H)$, and

$$(g,h)^{-1}=(g^{-1},h^{-1}).$$

Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group
homomorphisms.

## Facts & Assumptions

**Given:** Groups $G,H$ with identities $e_G,e_H$.

[L1] $G\times H$ has the componentwise operation
$(g,h)(g',h')=(gg',hh')$ ([[def-external-direct-product-of-groups]]).

[L2] A group operation is associative, has a two-sided identity, and gives every
element a two-sided inverse ([[def-group]]).

[L3] A map between groups is a group homomorphism exactly when it preserves products
([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For $(g,h),(g',h'),(g'',h'')\in G\times H$, associativity in each factor gives $((g,h)(g',h'))(g'',h'')=(gg'g'',hh'h'')=(g,h)((g',h')(g'',h''))$; thus the componentwise operation is associative. [L1, L2, given, algebra]

1.2 For every $(g,h)\in G\times H$, $(e_G,e_H)(g,h)=(g,h)=(g,h)(e_G,e_H)$; thus $(e_G,e_H)$ is a two-sided identity. [L1, L2, given, algebra]

1.3 For every $(g,h)\in G\times H$, $(g,h)(g^{-1},h^{-1})=(e_G,e_H)=(g^{-1},h^{-1})(g,h)$; so $(g^{-1},h^{-1})$ is its inverse. [L1, L2, given, algebra]

2.1 Steps 1.1–1.3 verify the group axioms for $G\times H$. [step 1.1, step 1.2, step 1.3, L2]

3.1 For pairs $(g,h),(g',h')$, $\pi_G((g,h)(g',h'))=gg'=\pi_G(g,h)\pi_G(g',h')$; the same coordinatewise calculation holds for $\pi_H$, so both projections are homomorphisms from the group in step 2.1. [step 2.1, L1, L3, given, algebra]

4.1 The stated identity, inverse formula, and coordinate homomorphisms follow. [step 2.1, step 3.1] ∎
