---
id: def-reduced-van-kampen-diagram
kind: definition
title: "A reduced van Kampen diagram has no cancellable adjacent faces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-van-kampen-diagram-boundary-label-and-area]
verification:
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

A van Kampen diagram is **reduced** when no two distinct adjacent 2-cells share
an edge in such a way that the two boundary labels read inverse words across
that common edge.

Equivalently, one cannot cancel a neighbouring face pair by deleting both faces
and gluing together the complementary boundary arcs. This is the diagrammatic
notion used on the rest of the page ([[def-van-kampen-diagram-boundary-label-and-area]]).
