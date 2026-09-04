---
id: def-equivalent-field-absolute-values
kind: definition
title: "Equivalent nontrivial absolute values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multiplicative-absolute-value-on-a-field]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "Keith Conrad, Ostrowski's Theorem for Q"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/ostrowskiq.pdf"
pipeline_run: null
---

## Definition

Let $|\cdot|_1$ and $|\cdot|_2$ be nontrivial absolute values on a field $F$.
They are **equivalent** when there is a real number $c > 0$ such that

$$|x|_2 = |x|_1^c$$

for every $x \in F$.
