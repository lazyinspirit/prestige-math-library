---
id: ex-vector-spaces-over-a-field-as-an-abelian-category
kind: example
title: "Vector spaces over a field form an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-modules-over-a-ring-form-an-abelian-category]
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
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Example

For a field $F$, the category $\mathbf{Vect}_F$ of vector spaces and linear
maps is abelian.

## Facts & Assumptions

**Given:** A field $F$.

[L1] Modules over a ring form an abelian category
([[thm-modules-over-a-ring-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 An $F$-vector space is exactly a left module over the ring $F$. [L1]

2.1 Therefore $\mathbf{Vect}_F$ is the special case $F\text{-}\mathbf{Mod}$ of [L1], so it is abelian. [L1, step 1.1] ∎
