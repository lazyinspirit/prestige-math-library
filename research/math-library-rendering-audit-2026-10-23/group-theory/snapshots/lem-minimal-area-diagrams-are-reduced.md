---
id: lem-minimal-area-diagrams-are-reduced
kind: lemma
title: "A minimal-area van Kampen diagram is reduced"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reduced-van-kampen-diagram, def-van-kampen-diagram-boundary-label-and-area]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
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

## Statement

A van Kampen diagram of minimal area for its boundary word is reduced.

## Facts & Assumptions

**Given:** A van Kampen diagram $D$ whose area is minimal among all diagrams with the same boundary label.

[L1] In a reduced diagram there is no cancellable adjacent face pair ([[def-reduced-van-kampen-diagram]]).

[F1] The area of a van Kampen diagram is its number of $2$-cells ([[def-van-kampen-diagram-boundary-label-and-area]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $D$ were not reduced. Then by [L1] there would be two adjacent 2-cells whose common edge can be cancelled. Delete those two faces and glue together the remaining boundary arcs. [L1, given, construct]

2.1 The surgery of step 1.1 does not change the outer boundary word, but it removes exactly two 2-cells. By [F1], the new diagram therefore has strictly smaller area than $D$. [F1, step 1.1, algebra]

3.1 This contradicts the assumed minimality of $D$. Hence $D$ is reduced. [step 2.1, contradiction: minimal area cannot drop] ∎
