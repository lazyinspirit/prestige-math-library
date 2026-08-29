---
id: def-equivalence-of-members
kind: definition
title: "Equivalence of members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-member-of-an-object,
       def-monomorphism-and-epimorphism]
justified_by: []
landmark: false
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

Let $x:X\to A$ and $y:Y\to A$ be members of the same object $A$.

They are **equivalent**, written
$$x \equiv y,$$
when there exist an object $W$ and epimorphisms
$$u:W\twoheadrightarrow X,\qquad v:W\twoheadrightarrow Y$$
such that
$$x u = y v.$$

So equivalence of members is equality after comparison on one common
epimorphic cover of the two domains.
