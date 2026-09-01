---
id: cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention
kind: counterexample
title: "An overlap of exactly one sixth shows that the strict C prime(1/6) inequality is not cosmetic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
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

## Statement refuted

An overlap of exactly one sixth still counts as satisfying the strict
$C'(1/6)$ convention.

## Facts & Assumptions

**Given:** The relator set $R=\{abcdef,aghijk\}$.

[L1] The page's convention is strict: $C'(1/6)$ demands $|p|<|r|/6$ for every
piece $p$ in every relator $r$
([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

## Counterexample

**Proof technique:** direct.

1.1 The common initial segment of the two relators is the one-letter word $a$, so $a$ is a piece. Both relators have length $6$. [given]

2.1 Hence the piece length is exactly $1=6/6$. This meets the weak inequality $|p|\le |r|/6$, but it does not satisfy the strict inequality required by [L1]. [L1, step 1.1, algebra]

3.1 So the strict convention is genuinely stronger: exact one-sixth overlap fails it. This refutes the statement. [step 1.1, step 2.1] ∎
