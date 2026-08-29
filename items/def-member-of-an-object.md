---
id: def-member-of-an-object
kind: definition
title: "Member of an object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
justified_by: []
landmark: true
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
pipeline_run: frontier-23
---

## Definition

Let $A$ be an object of a category. A **member of $A$** is simply a morphism
with codomain $A$.

Thus a member is written
$$x:X\to A,$$
and one may read this as "$x$ is a member of $A$ with domain $X$". The point of
the terminology is that an abelian category need not have honest elements, but
it always has arrows into an object.
