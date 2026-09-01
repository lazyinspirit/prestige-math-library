---
id: ex-a-greendlinger-cell-in-a-van-kampen-diagram
kind: example
title: "A minimal diagram exhibits the Greendlinger face covering more than half its boundary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]
proof_strategy: "direct"
verification:
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

## Example

A one-face van Kampen diagram for a defining relator is already a Greendlinger
example: that unique face contributes all of its boundary to the outer
boundary.

## Facts & Assumptions

**Given:** A one-face van Kampen diagram whose unique face is labelled by a
relator $r$.

[L1] Greendlinger's conclusion asks for a face contributing more than half of
its boundary to the outer boundary
([[thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]]).

## Verification

**Proof technique:** direct.

1.1 In a one-face disc diagram, every edge of the unique face lies on the outer boundary of the whole diagram. So the distinguished face contributes exactly $|r|$ boundary edges to the outer boundary. [given]

2.1 Since $|r|>|r|/2$, the unique face satisfies the conclusion of [L1]. Thus this one-cell disc is a concrete Greendlinger face. [L1, step 1.1, algebra] ∎
