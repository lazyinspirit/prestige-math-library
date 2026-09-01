---
id: fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six
kind: false-statement
title: "FALSE: C prime(1/6) means every relator has length at most six"
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

## Statement

If a presentation satisfies $C'(1/6)$, then every relator has length at most
$6$.

## Facts & Assumptions

**Given:** The one-relator presentation $\langle x_1,\dots,x_7 \mid
x_1x_2x_3x_4x_5x_6x_7\rangle$.

[L1] $C'(1/6)$ bounds the length of pieces as a fraction of the relator length,
not the relator length itself
([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

## Refutation

**Proof technique:** direct.

1.1 In the displayed one-relator presentation, the symmetrised relator set has no nontrivial piece: distinct cyclic conjugates begin with different letters, and the inverse cyclic conjugates do as well. Hence the $C'(1/6)$ condition holds vacuously by [L1]. [L1, given]

2.1 The unique defining relator has length $7$, which is strictly greater than $6$. [step 1.1, algebra]

3.1 So a $C'(1/6)$ presentation can have relators longer than $6$. The statement is false. [step 1.1, step 2.1] ∎
