---
id: fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic
kind: false-statement
title: "FALSE: the five lemma needs only that the two middle maps are monic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sharp-five-lemma-in-an-abelian-category,
       rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.20"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

To prove the five lemma, it is enough to assume that the two maps adjacent to
the middle one are monomorphisms.

## Facts & Assumptions

**Given:** The five-term exact diagram.

[L1] The sharp five lemma splits the proof into one monic half and one epic half
([[thm-sharp-five-lemma-in-an-abelian-category]]).

[L2] The two adjacent comparison maps are used once as monomorphisms and once as
epimorphisms ([[rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle]]).

## Refutation

1.1 The monic half of [L1] does use monicity of the adjacent comparison maps, but the epic half requires them to be epic. [L1]

2.1 By [L2], the classical five lemma needs both halves at once. Monicity alone therefore does not support the full isomorphism conclusion. [L2, step 1.1] ∎
