---
id: thm-dehn-algorithm-solves-the-word-problem
kind: theorem
title: "Dehn's algorithm terminates and decides the word problem for a Dehn presentation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-greendlinger-lemma-for-c-prime-one-sixth-presentations, lem-dehn-replacement-strictly-shortens-a-word, thm-van-kampen-lemma]
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

For a finite Dehn presentation, Dehn's algorithm terminates and decides the
word problem.

## Facts & Assumptions

**Given:** A finite Dehn presentation $\langle X\mid R\rangle$ and an input word $w$ on $X^{\pm1}$.

[L1] Every Dehn replacement strictly shortens the current word ([[lem-dehn-replacement-strictly-shortens-a-word]]).

## Proof

**Proof technique:** direct.

1.1 Start by freely reducing $w$. Whenever the current freely reduced word contains a relator subword longer than half of a defining relator, perform the corresponding Dehn replacement and freely reduce again. By [L1], each such cycle strictly decreases word length, so no infinite run is possible. Thus the algorithm terminates. [L1, given]

2.1 Each replacement uses a relation $uv=1$ in the group and swaps $u$ for $v^{-1}$, so every step preserves the group element represented by the current word. Therefore if the algorithm reaches the empty word, the original input represented the identity. [step 1.1, algebra]

3.1 Conversely, suppose the input represents the identity. After each iteration the current word is freely reduced and still represents the identity by step 2.1. If the current word were nonempty when the algorithm stopped, it would be Dehn-reduced by construction, contradicting the defining property of a Dehn presentation. Therefore the algorithm cannot stop before reaching the empty word, and termination from step 1.1 forces the final output to be empty. [step 1.1, step 2.1, given, contradiction: a nonempty trivial word in a Dehn presentation is never Dehn-reduced]

4.1 Steps 2.1 and 3.1 prove correctness, and step 1.1 proves termination. Therefore Dehn's algorithm decides the word problem for the presentation. [step 1.1, step 2.1, step 3.1] ∎
