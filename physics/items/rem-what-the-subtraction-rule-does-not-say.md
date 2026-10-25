---
id: rem-what-the-subtraction-rule-does-not-say
kind: remark
title: "What the subtraction rule does not say"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-chasing-rule-the-subtraction-surrogate]
justified_by: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(vi)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Remark

The member $z$ in [[thm-chasing-rule-the-subtraction-surrogate]] is an existence
statement, not a canonical difference. The theorem does not assert uniqueness
of $z$, does not endow member classes with a binary subtraction law, and does
not say anything about an arbitrary morphism $k:B \to E$ applied to $z$.

What it does control is narrower and exactly sufficient for diagram chasing:
$z$ is killed by $g$, and it is related to $x$ and $y$ only through morphisms
that already kill one of them.
