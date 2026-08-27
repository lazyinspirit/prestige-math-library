---
id: def-exact-functor-between-abelian-categories
kind: definition
title: "Exact functor between abelian categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-additive-functor, def-left-exact-and-right-exact-functor]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "Gautam Tamme, Algebra II Lecture 10, §10.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture10.pdf"
pipeline_run: frontier-21
---

## Definition

Let $\mathcal A$ and $\mathcal B$ be abelian categories. A functor
$F:\mathcal A\to\mathcal B$ is **exact** when it is additive
([[def-additive-functor]]) and both left exact and right exact
([[def-left-exact-and-right-exact-functor]]).

Thus exactness is a two-sided preservation condition: $F$ preserves the finite
limits and finite colimits that exist in its source, and it preserves the
additive structure carried by the hom-sets.
