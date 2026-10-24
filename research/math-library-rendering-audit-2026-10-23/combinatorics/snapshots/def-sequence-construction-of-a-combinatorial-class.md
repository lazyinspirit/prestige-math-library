---
id: def-sequence-construction-of-a-combinatorial-class
kind: definition
title: "The sequence construction $\\operatorname{SEQ}(\\mathcal{A})$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-neutral-and-atomic-classes, def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Robert Sedgewick and Kevin Wayne, Analysis of Algorithms, Section 3.9"
      url: "https://aofa.cs.princeton.edu/30gf/"
pipeline_run: null
---

## Definition

Let $\mathcal{A}$ be a combinatorial class. Its **sequence construction**
$\operatorname{SEQ}(\mathcal{A})$ is the class of all finite ordered sequences

$$\sigma = (a_1,\dots,a_r) \qquad (r \ge 0,\ a_i \in \mathcal{A}),$$

with size

$$|\sigma| := |a_1| + \cdots + |a_r|.$$

The case $r=0$ is the empty sequence, whose size is $0$; it is the unique object
of the neutral class $\mathcal{E}$.

Write $\operatorname{SEQ}_{\ge 1}(\mathcal{A})$ for the subclass of nonempty
sequences.

If $\mathcal{A}$ has an object of size $0$, then $\operatorname{SEQ}(\mathcal{A})$
need not be a combinatorial class: infinitely many different lengths can produce
the same total size. The generating-function theorem therefore carries a
no-size-zero hypothesis.
