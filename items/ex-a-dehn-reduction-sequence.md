---
id: ex-a-dehn-reduction-sequence
kind: example
title: "A trivial word is reduced to the empty word by successive Dehn moves"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dehn-algorithm-solves-the-word-problem, def-dehn-reduced-word-and-dehn-presentation, lem-dehn-replacement-strictly-shortens-a-word]
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

In the one-relator presentation

$$
\langle x_1,\dots,x_7 \mid x_1x_2x_3x_4x_5x_6x_7\rangle,
$$

the word

$$
w=(x_1x_2x_3x_4x_5x_6x_7)^2
$$

reduces to the empty word by two successive Dehn moves.

## Facts & Assumptions

**Given:** The presentation and the word $w$ displayed above.

[L1] A relator subword longer than half the relator may be replaced by the
inverse complementary arc, and this shortens the word
([[def-dehn-reduced-word-and-dehn-presentation]],
[[lem-dehn-replacement-strictly-shortens-a-word]]).

## Verification

**Proof technique:** direct.

1.1 The first seven letters of $w$ form the defining relator itself, so [L1] replaces that block by the empty word. The result is the single relator $x_1x_2x_3x_4x_5x_6x_7$. [L1, given]

2.1 Apply the same move again to the remaining relator block. A second Dehn replacement produces the empty word. [L1, step 1.1] ∎
