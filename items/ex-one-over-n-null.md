---
id: ex-one-over-n-null
kind: example
title: "The sequence $1/n$ is null"
status: published
origin: session
deps: [def-null-sequence, lem-rat-archimedean, thm-rat-ordered-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

The sequence $(1/n)_{n \ge 1}$ of rationals is a null sequence
([[def-null-sequence]]): its terms become smaller than any prescribed positive
rational. It is the standard witness that "eventually arbitrarily small" is a
nonvacuous notion, and the rate $1/k$ used in the completeness proof.

## Facts & Assumptions

**Given:** A rational $\varepsilon > 0$.

[L1] Archimedean property ([[lem-rat-archimedean]]).

[L2] Order arithmetic: $0 < 1/n \le 1/N$ for $n \ge N \ge 1$ ([[thm-rat-ordered-field]]).

[L3] Null definition ([[def-null-sequence]]).

## Verification

**Proof technique:** direct.

1.1 Pick a natural $N \ge 1$ with $1/N < \varepsilon$. [L1]

2.1 For every $n \ge N$: $0 < 1/n \le 1/N < \varepsilon$, so $|1/n| < \varepsilon$. [step 1.1, L2]

3.1 $(1/n)$ is null. [step 2.1, L3] ∎
