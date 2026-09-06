---
id: lem-exterior-square-has-the-alternating-universal-property
kind: lemma
title: "Alternating universal property"
status: draft
origin: pipeline
deps: [def-exterior-square-of-an-abelian-group, thm-universal-property-of-module-tensor-products]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Alternating bilinear maps A×A→B factor uniquely through ∧²A.

## Proof

**Given:** Let $b:A\times A\to B$ be alternating and bilinear.

1.1 The tensor universal property gives a unique map $A\otimes A\to B$ carrying $a\otimes a'$ to $b(a,a')$. [given]

2.1 Because $b(a,a)=0$, it kills the defining subgroup and factors uniquely through $\bigwedge^2A$. [step 1.1, algebra] ∎
