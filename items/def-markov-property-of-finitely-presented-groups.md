---
id: def-markov-property-of-finitely-presented-groups
kind: definition
title: "A Markov property of finitely presented groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-isomorphism-problem-for-a-class-of-finite-presentations]
justified_by: []
aliases: []
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
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
    - title: "MacTutor History of Mathematics, Word problems"
      url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Word_problems/"
pipeline_run: null
---

## Definition

A class property $P$ of finitely presented groups is a **Markov property** if
there exist finitely presented groups $G_+$ and $G_-$ such that:

- $G_+$ has property $P$,
- $G_-$ does not have property $P$, and
- $G_-$ cannot be embedded into any finitely presented group having property
  $P$.

This is the exact hypothesis pattern used in the Adian-Rabin theorem.
