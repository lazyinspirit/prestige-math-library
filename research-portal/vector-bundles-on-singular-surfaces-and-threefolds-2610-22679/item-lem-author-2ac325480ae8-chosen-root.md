---
title: A chosen root trivializes the actual Tate coefficient on the slice
status: draft
research_item: lem-author-2ac325480ae8-chosen-root
dependency_level: 8
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)

## Statement
Let $k$ be a field, $p$ invertible in $k$, and $\zeta\in k$ of multiplicative order $p$. On every small étale site of a qcqs $k$-scheme $V$ the map $t_{\zeta,V}:\mathbb Z/p\to\mu_p$, $a\mapsto\zeta^a$, is an isomorphism of sheaves of $\mathbb Z/p$-modules. Its tensor cube gives $t^{(3)}_{\zeta,V}:\mathbb Z/p\to\mu_p^{\otimes3}$, $1\mapsto\zeta^{\otimes3}$, naturally in $V$. This natural transformation is on $\mathcal C/U$; no such chosen-root map is asserted on all of $\mathcal C$.

## Facts & Assumptions
[F1] [def-etale-tate-coefficients](item-def-etale-tate-coefficients) supplies the coefficient sheaves, tensor powers and factorization argument. [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site) fixes precisely the slice category. The constant coefficient is the constant étale sheaf, not a claim that its section group equals $\mathbb Z/p$ on a disconnected scheme.

## Proof
**Given:** $k,p,\zeta,V$ as stated.

**Goal:** Construct the coefficient isomorphism with its exact naturality domain.

1.1 The factorization $T^p-1=\prod_{a=0}^{p-1}(T-\zeta^a)$ has pairwise unit differences on every $k$-scheme. A root on an affine étale object therefore gives a finite disjoint open decomposition on which it equals a unique $\zeta^a$. Thus the constant-sheaf map is locally bijective, and hence is a sheaf isomorphism, as in [F1]. [F1, given]

2.1 Tensor this map three times over the constant ring sheaf $\mathbb Z/p$ and identify $(\mathbb Z/p)^{\otimes3}$ with $\mathbb Z/p$ using multiplication. Tensoring the inverse gives its inverse. Every $k$-morphism carries $\zeta$ to the same chosen base-field section, so these isomorphisms commute with pullback. The root need not exist over an arbitrary object of the ambient site, and none is used there. [F1, step 1.1] ∎
