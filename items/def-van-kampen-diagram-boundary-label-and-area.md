---
id: def-van-kampen-diagram-boundary-label-and-area
kind: definition
title: "Van Kampen diagrams, boundary labels, and diagram area for a presentation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group-presentation, def-finite-cardinality, def-alphabet-words-and-reduction]
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local diagram-model repair; full definition and direct consumer interfaces read; rendercheck passed. Consumer proof repairs remain separately recorded; no independent judgment."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, Section 3.4: The combinatorial geometry and topology of van Kampen diagrams"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Definition

Fix a presentation $G=\langle X\mid R\rangle$ ([[def-group-presentation]]),
with specified relator words on $X^{\pm1}$ ([[def-alphabet-words-and-reduction]]).
A **van Kampen diagram** is a nonempty finite connected simply connected
combinatorial $2$-complex embedded in the plane. Here the $1$-skeleton is a
finite graph, allowing loops and parallel edges, and each face is obtained
by attaching a polygonal disc along a finite edge walk. Simply connected
means that every closed path contracts to a point within the complex.

Each oriented edge is labelled by a letter of $X^{\pm1}$; reversing its
orientation inverts the letter. Reading the boundary of each face from a
chosen corner gives a cyclic conjugate of a relator in $R$ or its inverse.
No symmetrisation assumption on $R$ is required.

The **outer boundary walk** follows the unbounded complementary region,
with the complex on its right. Choose a starting edge occurrence to obtain
the **boundary label**, the literal word read along this walk. A bridge is
traversed twice, once in each direction; at a cut vertex the walk follows
the incident excursions in their planar cyclic order. Its length counts
edge occurrences, not distinct edges. Reversing the walk gives the inverse
word, and changing its starting occurrence gives a cyclic conjugate.

The one-vertex diagram has empty boundary word and area zero. Finite trees
are also allowed: their outer walks traverse every edge twice. In particular,
a single edge labelled $x$ has boundary word $xx^{-1}$, not the empty word,
although these words are freely equivalent. Diagrams may also have bridges
and cut vertices connecting faces. A diagram whose underlying space is a
closed topological disc is called **nonsingular**; this is a special case,
not a requirement on all diagrams.

The **area** is the number of $2$-cells, a natural number by
[[def-finite-cardinality]]. Boundary words are not freely reduced as part of
this definition; any cancellation or spur insertion in a proof must account
for its effect on the literal outer walk.
