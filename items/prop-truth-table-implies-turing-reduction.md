---
id: prop-truth-table-implies-turing-reduction
kind: proposition
title: "Truth-table reducibility implies Turing reducibility"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-truth-table-reduction, def-turing-reducibility-and-equivalence]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.9"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For all $X,Y\subseteq\mathbb N$, $Y\le_{tt}X$ implies $Y\le_TX$.

## Facts & Assumptions

**Given:** a truth-table functional $\Gamma$ witnessing $Y\le_{tt}X$.

## Proof

**Proof technique:** direct.

1.1 By definition, $\Gamma^X(n)$ halts on every $n$ and equals $\chi_Y(n)$. [given]

2.1 The same machine, run with oracle $X$, is consequently a total oracle decider for $Y$. This is exactly $Y\le_TX$. [step 1.1] ∎
