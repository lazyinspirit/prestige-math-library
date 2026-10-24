---
id: thm-the-internal-hom-composition-morphism
kind: theorem
title: "The internal-hom composition morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-internal-hom-and-its-evaluation-morphism]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.25) to (1.27)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
---

## Statement

In a right-closed monoidal category there is a natural morphism

$$\operatorname{comp}_{X,Y,Z}:[Y,Z]\otimes[X,Y]\to[X,Z]$$

obtained by transposing the double evaluation map. For every object $X$ there is also a unit morphism

$$u_X:\mathbf 1\to[X,X],$$

and these satisfy the associativity and unit laws for composition.

## Facts & Assumptions

**Given:** A right-closed monoidal category.

[L1] The evaluation morphism $\operatorname{ev}_{X,Y}:[X,Y]\otimes X\to Y$ and the transpose bijection $\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y])$ are part of the internal-hom data ([[def-the-internal-hom-and-its-evaluation-morphism]]).

## Proof

**Proof technique:** direct.

1.1 Consider the composite $([Y,Z]\otimes[X,Y])\otimes X\cong [Y,Z]\otimes([X,Y]\otimes X)\xrightarrow{1\otimes\operatorname{ev}_{X,Y}}[Y,Z]\otimes Y\xrightarrow{\operatorname{ev}_{Y,Z}}Z$. Transposing it across the adjunction $-\otimes X\dashv[X,-]$ gives a unique morphism $\operatorname{comp}_{X,Y,Z}:[Y,Z]\otimes[X,Y]\to[X,Z]$. [given, L1, construct]

1.2 Transpose the left unitor $\lambda_X:\mathbf 1\otimes X\to X$ across the same adjunction to obtain $u_X:\mathbf 1\to[X,X]$. [L1, construct]

2.1 To compare the two composites $[Z,W]\otimes[Y,Z]\otimes[X,Y]\rightrightarrows[X,W]$, tensor each with $X$ and postcompose with $\operatorname{ev}_{X,W}$. Both have the same transpose, namely the triple evaluation map $[Z,W]\otimes[Y,Z]\otimes[X,Y]\otimes X\to W$, so the transposition bijection of [L1] forces the two composites to be equal. [step 1.1, L1, algebra]

2.2 The left and right unit laws are proved the same way: after tensoring with $X$ and evaluating, both candidate composites have transpose $\operatorname{ev}_{X,Y}$. Hence the transposition bijection identifies them, so $u$ is a unit for $\operatorname{comp}$. [step 1.1, step 1.2, L1, algebra]

3.1 Therefore the internal hom carries a natural composition morphism and objectwise unit morphisms satisfying associativity and the unit laws. [step 2.1, step 2.2] ∎
