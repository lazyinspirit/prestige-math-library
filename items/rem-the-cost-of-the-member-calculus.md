---
id: rem-the-cost-of-the-member-calculus
kind: remark
title: "The cost of the member calculus"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-member-equivalence-is-transitive,
       thm-chasing-rule-the-subtraction-surrogate,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Peter Freyd, Abelian Categories, Chapter 2"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html"
pipeline_run: frontier-23
---

The member calculus uses only the abelian-category primitives already on the
page: finite limits and finite colimits, additivity on hom-sets, and one
genuinely nonformal stability statement,
[[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], which is exactly what
makes member equivalence transitive.

What it does **not** use is equally important: no choice principle, no
generator, no projectives, and no smallness assumption. This remark records
only those supported proof costs. It does not claim a stronger constructive
metatheorem that this run did not source.
