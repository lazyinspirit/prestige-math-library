---
id: rem-the-two-halves-of-the-four-lemma-are-mutually-dual
kind: remark
title: "The two halves of the four lemma are mutually dual"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-four-lemma-in-an-abelian-category,
       thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.19"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Remark

The monic half and the epic half of
[[thm-four-lemma-in-an-abelian-category]] are not the same argument with words
changed; they are opposite-category translations of each other. The point of
recording that explicitly is bookkeeping: later items cite one half or the
other, and duality explains why both need not be reproved from scratch.
