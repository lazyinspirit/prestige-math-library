---
id: fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero
kind: false-statement
title: "FALSE: the middle nine lemma holds without assuming the composite is zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nine-lemma-variants-by-which-rows-are-assumed-exact,
       rem-why-the-middle-nine-lemma-needs-a-zero-composite]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.2"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Statement

The middle-row form of the nine lemma remains true even if no hypothesis is
made that the middle row is a complex.

## Facts & Assumptions

**Given:** The middle-row variant of the nine lemma.

[L1] The middle-row conclusion is stated only after assuming the middle row is a
complex ([[thm-nine-lemma-variants-by-which-rows-are-assumed-exact]]).

[L2] That zero-composite hypothesis is load-bearing
([[rem-why-the-middle-nine-lemma-needs-a-zero-composite]]).

## Refutation

1.1 By [L1], the theorem itself does not claim exactness of the middle row without first requiring that its composite vanish. [L1]

2.1 By [L2], without that hypothesis the middle row need not even be a complex, so the purported strengthening is false. [L2, step 1.1] ∎
