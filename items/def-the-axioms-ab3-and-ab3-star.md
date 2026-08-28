---
id: def-the-axioms-ab3-and-ab3-star
kind: definition
title: "The axioms AB3 and AB3*"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, cor-completeness-and-cocompleteness-criteria]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
    - title: "The Stacks Project, Tag 079B"
      url: "https://stacks.math.columbia.edu/tag/079B"
pipeline_run: frontier-22
---

## Definition

An abelian category satisfies **AB3** when it has all small coproducts, and it
satisfies **AB3*** when it has all small products
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

Because an abelian category already has cokernels and kernels, the criterion
[[cor-completeness-and-cocompleteness-criteria]] identifies AB3 with
cocompleteness and AB3* with completeness inside the abelian setting.
