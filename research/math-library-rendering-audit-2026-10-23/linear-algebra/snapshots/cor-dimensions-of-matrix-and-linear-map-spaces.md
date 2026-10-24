---
id: cor-dimensions-of-matrix-and-linear-map-spaces
kind: corollary
title: '$\dim_F M_{m\times n}(F)=mn$ and $\dim_F\mathcal L(V,W)=(\dim_FV)(\dim_FW)$ for finite-dimensional $V,W$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-units, thm-matrix-representation-is-a-vector-space-isomorphism,
       def-dimension, thm-product-rule]
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
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Dimension of matrix spaces'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, Corollary 27'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

For a field $F$ and naturals $m,n$,
$\dim_FM_{m\times n}(F)=mn$. Consequently, for finite-dimensional $F$-vector
spaces $V,W$,

$$\dim_F\mathcal L(V,W)=(\dim_FV)(\dim_FW).$$

## Facts & Assumptions

**Given:** A field $F$, naturals $m,n$, and finite-dimensional spaces $V,W$ with $\dim_FV=n$ and $\dim_FW=m$.

[L1] The matrix units $E_{ij}$ have one entry equal to $1$ and all other entries equal to $0$ ([[def-matrix-units]]).

[L2] A Cartesian product of finite sets has cardinality equal to the product of their cardinalities ([[thm-product-rule]]).

[L3] Relative to ordered bases, matrix representation is a vector-space isomorphism $\mathcal L(V,W)\cong M_{m\times n}(F)$ ([[thm-matrix-representation-is-a-vector-space-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Every matrix $A=(a_{ij})$ has the expansion $A=\sum_{(i,j)\in m\times n}a_{ij}E_{ij}$, and a linear relation among the $E_{ij}$ has each coefficient zero when its corresponding entry is read. Thus the matrix units form a basis. [given, L1]

2.1 By [L2], the index set $m\times n$ has cardinality $mn$, so this basis has $mn$ elements; if either dimension is zero, it is the empty basis of the zero matrix space. Hence $\dim_FM_{m\times n}(F)=mn$. [step 1.1, L1, L2]

3.1 The isomorphism in [L3] transports a basis and preserves dimension; substituting $n=\dim_FV$ and $m=\dim_FW$ gives the second formula. [step 2.1, L3] ∎
