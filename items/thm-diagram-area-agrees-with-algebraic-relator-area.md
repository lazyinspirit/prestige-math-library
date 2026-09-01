---
id: thm-diagram-area-agrees-with-algebraic-relator-area
kind: theorem
title: "Minimal van Kampen area agrees with minimal algebraic relator area"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-van-kampen-lemma, def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, lem-minimal-algebraic-relator-area-exists]
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

For a null word in a finite presentation, the minimal area of a van Kampen
diagram equals its minimal algebraic relator area.

## Facts & Assumptions

**Given:** A finite presentation and a word $w$ representing the identity.

[L1] Van Kampen diagrams exist exactly for null words in the presented group
([[thm-van-kampen-lemma]]).

[F1] Algebraic relator area is the minimum number of conjugates of defining
relators needed to express the word, when such a minimum exists
([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]],
[[lem-minimal-algebraic-relator-area-exists]]).

## Proof

**Proof technique:** direct.

1.1 Let $D$ be any van Kampen diagram for $w$ with $m$ faces. Reading the faces one by one as in the proof of [[lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]] expresses $w$ as a product of $m$ conjugates of relators and their inverses. Hence the algebraic relator area of $w$ is at most $m$. [L1, F1, given]

1.2 Conversely, let $$w=\prod_{k=1}^m u_k r_k^{\varepsilon_k} u_k^{-1}$$ be an algebraic expression with $m$ minimal as in [F1]. The converse construction in [[thm-van-kampen-lemma]] produces a van Kampen diagram with exactly $m$ faces and boundary word $w$. Therefore the minimal diagram area is at most the algebraic relator area. [F1, L1, construct]

2.1 Step 1.1 gives one inequality between the two minima and step 1.2 gives the reverse inequality. Therefore the two minimal areas are equal. [step 1.1, step 1.2] ∎
