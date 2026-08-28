---
id: thm-jordan-holder-theorem-in-an-abelian-category
kind: theorem
title: "Jordan-Holder theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simple-object, def-composition-series-and-composition-factors-of-an-object, thm-schreier-refinement-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

If an object $A$ in an abelian category has two composition series, then the
two series have the same length and the same composition factors up to
permutation and isomorphism.

## Facts & Assumptions

**Given:** Two composition series of the same object $A$.

[L1] A composition series is a finite strict subobject chain with simple
successive quotients
([[def-composition-series-and-composition-factors-of-an-object]],
[[def-simple-object]]).

[L2] Any two finite subobject chains admit equivalent refinements
([[thm-schreier-refinement-theorem-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the two composition series admit equivalent refinements. [given, L2]

1.2 A composition series has no proper refinement. Indeed, if $A_{i-1}<K<A_i$, then the quotient map $A_i\to A_i/A_{i-1}$ carries $K$ to a nonzero proper subobject of the simple object $A_i/A_{i-1}$, contradicting [L1]. So any refinement of a composition series differs from it only by repeated adjacent terms. [L1, algebra]

2.1 Delete repeated adjacent terms from the equivalent refinements of step 1.1. By step 1.2 this recovers the original two composition series, and the quotient pairing survives. Therefore the original series have the same number of factors, and a permutation matches their factors up to isomorphism. [step 1.1, step 1.2] ∎
