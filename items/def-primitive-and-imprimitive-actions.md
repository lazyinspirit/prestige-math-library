---
id: def-primitive-and-imprimitive-actions
kind: definition
title: "Primitive and imprimitive transitive actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-block-and-block-system-for-a-group-action, def-group-action]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Definition

Let $G$ act transitively on a set $\Omega$ ([[def-group-action]]).

The action is **primitive** if every block $B \subseteq \Omega$ is trivial:
either $B=\Omega$ or $B=\{\omega\}$ for some $\omega\in\Omega$.

The action is **imprimitive** if it is transitive and not primitive, that is,
if it admits a block that is neither a singleton nor all of $\Omega$.

When $\Omega$ is nonempty, this is equivalently the condition that the only
$G$-invariant block systems are the singleton partition
$$\{\, \{\omega\} : \omega \in \Omega \,\}$$
and the one-block partition $\{\Omega\}$. The block formulation also covers
the empty transitive action without treating $\{\varnothing\}$ as a partition
into nonempty blocks.
