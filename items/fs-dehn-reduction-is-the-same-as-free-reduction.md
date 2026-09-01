---
id: fs-dehn-reduction-is-the-same-as-free-reduction
kind: false-statement
title: "FALSE: Dehn reduction is just free reduction under another name"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dehn-reduced-word-and-dehn-presentation]
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

## Statement

Dehn reduction is just free reduction under another name.

## Facts & Assumptions

**Given:** The one-relator presentation $\langle x_1,\dots,x_7 \mid
x_1x_2x_3x_4x_5x_6x_7\rangle$.

[L1] A Dehn move replaces a relator subword longer than half the relator by the
inverse complementary arc ([[def-dehn-reduced-word-and-dehn-presentation]]).

## Refutation

**Proof technique:** direct.

1.1 The word $x_1x_2x_3x_4x_5x_6x_7$ is freely reduced, because no adjacent inverse letters occur. [given]

2.1 Nevertheless [L1] applies to the whole word: it is itself a relator and is longer than half of that relator, so one Dehn move replaces it by the empty word. [L1, step 1.1]

3.1 Thus a word can admit a Dehn reduction while admitting no free reduction. The two notions are different, so the statement is false. [step 1.1, step 2.1] ∎
