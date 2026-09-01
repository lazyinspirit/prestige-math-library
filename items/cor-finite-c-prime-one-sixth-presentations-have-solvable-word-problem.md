---
id: cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem
kind: corollary
title: "Finite C prime(1/6) presentations have solvable word problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dehn-algorithm-solves-the-word-problem, thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]
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

Every finite $C'(1/6)$ presentation has solvable word problem.

## Facts & Assumptions

**Given:** A finite presentation satisfying $C'(1/6)$.

[L1] Greendlinger's lemma provides, for every nonempty freely reduced null word,
a relator subword longer than half of a defining relator
([[thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]]).

[L2] Every finite Dehn presentation has a terminating decision procedure for the
word problem ([[thm-dehn-algorithm-solves-the-word-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the given finite $C'(1/6)$ presentation is a Dehn presentation: every nonempty freely reduced trivial word contains the required long relator subword. [L1, given]

2.1 Apply [L2] to that Dehn presentation. The resulting Dehn algorithm decides triviality of words. [L2, step 1.1] ∎
