---
id: def-successive-2-power-ranks-of-quadratic-class-groups
kind: definition
title: "Successive 2-power ranks of quadratic class groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-number-field, def-ring-of-integers-of-a-number-field, def-ideal-class-group-of-a-domain, lem-ideal-class-group-well-defined, thm-number-field-ideal-class-group-finite-in-zf, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, def-vector-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Smith, The Distribution of 2^k-Class Groups of Imaginary Quadratic Fields, §1.2 and Theorem 1.9"
      url: "https://people.math.harvard.edu/~adsmith/Clas.pdf"
      locator: "§1, definition of 2^k-class rank and the main theorem"
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families I, §1.2 and Theorem 1.9"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "Notation 1.7 and Theorem 1.9"
verification: {}
---

## Definition

For every positive integer $d$, put $K_d=\mathbb Q(\sqrt{-d})$ and let $A_d=\operatorname{Cl}(K_d)[2^\infty]$, the subgroup of ideal classes of $2$-power order. For $k\ge2$, set $A_d[2^k]=\{x\in A_d:2^kx=0\}$ and define
$$r_{2^k}(d):=\dim_{\mathbb F_2}\bigl(2^{k-1}A_d[2^k]\bigr).$$
The vector space in this formula is the image of multiplication by $2^{k-1}$ on $A_d[2^k]$; every element in that image is killed by $2$. No squarefree restriction is imposed on $d$, and the associated family is indexed by all positive radicands with the stated cutoff.

## Definition references

[[def-number-field]]

[[def-ideal-class-group-of-a-domain]]

[[thm-number-field-ideal-class-group-finite-in-zf]]

[[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[A. Smith, *The Distribution of 2^k-Class Groups of Imaginary Quadratic Fields*, §1.2](https://people.math.harvard.edu/~adsmith/Clas.pdf)
