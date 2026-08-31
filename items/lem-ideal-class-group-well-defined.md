---
id: lem-ideal-class-group-well-defined
kind: lemma
title: "The ideal class group quotient is well defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ideal-class-group-of-a-domain, def-invertible-fractional-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Dedekind domain. The nonzero principal fractional ideals form a
subgroup of the fractional-ideal group, and multiplication descends to a
well-defined product on $\operatorname{Cl}(R)$.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and nonzero fractional ideals $I,J$.

[F1] The ideal class group is defined as the quotient by nonzero principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

[F2] Invertibility is expressed by fractional-ideal multiplication inside one common fraction field ([[def-invertible-fractional-ideal]]).

## Proof

**Proof technique:** direct.

1.1 If $(a)$ and $(b)$ are principal fractional ideals with $a,b\in K^\times$, then $(a)(b)=(ab)$ and $(a)^{-1}=(a^{-1})$. Therefore the principal fractional ideals form a subgroup. [F1, F2, given, algebra]

2.1 If $I'=(a)I$ and $J'=(b)J$, then $I'J'=(ab)(IJ)$. So changing representatives by principal multiples changes the product by another principal factor. Hence the class of $IJ$ depends only on the classes of $I$ and $J$. [F1, F2, step 1.1, algebra] ∎
