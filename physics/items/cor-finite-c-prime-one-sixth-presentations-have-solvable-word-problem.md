---
id: cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem
kind: corollary
title: "Finite C prime(1/6) presentations have solvable word problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dehn-algorithm-solves-the-word-problem, thm-greendlinger-shell-existence-from-the-curvature-count, def-dehn-reduced-word-and-dehn-presentation]
proof_strategy: "direct"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L1] For every nonempty freely reduced null word, the original linear word contains a contiguous initial segment of a symmetrised defining relator longer than half that relator ([[thm-greendlinger-shell-existence-from-the-curvature-count]]).

[F1] A Dehn presentation requires this long relator subword in each nonempty freely reduced null word ([[def-dehn-reduced-word-and-dehn-presentation]]).

[L2] Every finite Dehn presentation has a terminating decision procedure for the word problem ([[thm-dehn-algorithm-solves-the-word-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every nonempty freely reduced trivial word has the required long relator subword in its original linear reading. Thus the symmetrised finite $C'(1/6)$ presentation is a Dehn presentation in the sense of [F1]. [L1, F1, given]

2.1 Apply [L2] to that Dehn presentation. The resulting Dehn algorithm decides triviality of words. [L2, step 1.1] ∎
