---
id: thm-some-turing-reductions-are-not-truth-table-reductions
kind: theorem
title: "Some Turing reductions are not truth-table reductions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-halting-oracle-is-not-computably-dominated, thm-computably-dominated-characterizes-truth-table-reducibility, prop-truth-table-implies-turing-reduction]
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 5.13"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

There are sets $Y,X\subseteq\mathbb N$ with $Y\le_TX$ but
$Y\not\le_{tt}X$.

## Facts & Assumptions

**Given:** the non-computable domination of $0'$ and the characterization of
truth-table reducibility.

## Proof

**Proof technique:** contradiction.

1.1 Let $X=0'$. It is not computably dominated by [[lem-halting-oracle-is-not-computably-dominated]]. [given]

2.1 If every $Y\le_TX$ were truth-table reducible to $X$, the reverse direction of [[thm-computably-dominated-characterizes-truth-table-reducibility]] would make $X$ computably dominated. [step 1.1, assume-contra]

3.1 This contradiction supplies a set $Y\le_TX$ with $Y\not\le_{tt}X$. [step 2.1, discharge-contradiction] ∎
