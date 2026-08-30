---
id: rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle
kind: remark
title: "Why the five lemma asks for isomorphisms in the middle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-four-lemma-in-an-abelian-category,
       thm-sharp-five-lemma-in-an-abelian-category]
justified_by: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemmas 12.5.19 and 12.5.20"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Remark

[[thm-sharp-five-lemma-in-an-abelian-category]] explains the bookkeeping behind
the classical hypothesis. The middle comparison map is proved monic by one
application of the four lemma and epic by a different application to a
different four-column window. So the two adjacent vertical maps are each used
twice: once in a monic role and once in an epic role.

That is why the ordinary five lemma assumes those two maps are isomorphisms.
The condition is not a lazy strengthening; it is exactly what makes both four
lemma applications available at once.
