---
id: def-van-kampen-diagram-boundary-label-and-area
kind: definition
title: "Van Kampen diagrams, boundary labels, and diagram area for a presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-presentation, def-finite-cardinality]
verification:
  audited: 2026-09-01
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
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

Fix a presentation $G=\langle X\mid R\rangle$ ([[def-group-presentation]]).
A **van Kampen diagram** over this presentation is either:

- the degenerate one-vertex diagram, whose boundary label is the empty word; or
- a finite planar combinatorial 2-complex whose underlying space is a closed
  disc, whose oriented edges are labelled by letters of $X^{\pm1}$, and whose
  every 2-cell has boundary word a cyclic conjugate of some relator in $R$ or
  of its inverse.

In the nondegenerate case, after choosing an orientation of the boundary
circuit of the disc, the **boundary label** of the diagram is the word read
along that circuit. The **area** of the diagram is the number of 2-cells
it contains; this is a natural number because the 2-cell set is finite
([[def-finite-cardinality]]).
