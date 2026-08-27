---
id: prop-an-additive-functor-preserves-zero-morphisms
kind: proposition
title: "An additive functor preserves zero morphisms"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, def-additive-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Additive functors"
      url: "https://stacks.math.columbia.edu/tag/010M"
pipeline_run: frontier-20
---

## Statement

If $F:\mathcal C\to\mathcal D$ is an additive functor between preadditive
categories, then for every pair of objects $A,B$,

$$F(0_{A,B})=0_{FA,FB}.$$

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal C\to\mathcal D$ and objects
$A,B\in\mathcal C$.

[L1] In a preadditive category each hom-set is an abelian group, so each
$\mathcal D(FA,FB)$ has a zero element $0_{FA,FB}$
([[def-preadditive-category]]).

[L2] An additive functor induces a homomorphism on each hom-group
([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 In the abelian group $\mathcal C(A,B)$ one has $0_{A,B}=0_{A,B}+0_{A,B}$. Applying $F$ and using [L2] gives $F(0_{A,B})=F(0_{A,B})+F(0_{A,B})$. [L1, L2]

2.1 Add the inverse of $F(0_{A,B})$ in the hom-group $\mathcal D(FA,FB)$ to both sides of the equality from step 1.1. The result is $0_{FA,FB}=F(0_{A,B})$. [L1, step 1.1, algebra] ∎
