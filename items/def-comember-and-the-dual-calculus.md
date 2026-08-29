---
id: def-comember-and-the-dual-calculus
kind: definition
title: "Comember and the dual calculus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-member-of-an-object,
       def-equivalence-of-members,
       thm-exactness-is-self-dual,
       def-monomorphism-and-epimorphism]
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
    - title: "Saunders Mac Lane, Homology, Chapter XII"
      url: "https://archive.org/details/homology0000macl"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Definition

The **dual member calculus** in an abelian category is the member calculus of
the opposite category, transported back along
[[thm-exactness-is-self-dual]].

Concretely, a **comember of $A$** is a morphism with domain $A$,
$$x:A\to X,$$
and two comembers $x:A\to X$ and $y:A\to Y$ are equivalent when there exist one
object $W$ and monomorphisms
$$u:X\rightarrowtail W,\qquad v:Y\rightarrowtail W$$
with
$$u x = v y.$$

So comembers compare after one common monomorphic enlargement, just as members
compare after one common epimorphic cover.
