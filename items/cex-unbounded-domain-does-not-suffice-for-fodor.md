---
id: cex-unbounded-domain-does-not-suffice-for-fodor
kind: counterexample
title: "An unbounded regressive domain without a stationary fibre"
status: published
origin: pipeline
deps: ["thm-fodor-pressing-down", "def-regressive-function-on-ordinals"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Williams, Example 40, p.12"
      url: https://juliakw.net/teaching/2019/math655/part1.1.pdf
---

## Statement refuted

The assertion that every regressive map on an unbounded subset of a regular uncountable $\kappa$ has a stationary constant fibre is false. Let $S=\{\alpha+1:\alpha<\kappa\}$ and $f(\alpha+1)=\alpha$.

## Facts & Assumptions

[F1] [[def-regressive-function-on-ordinals]]: Regressive means $f(\xi)<\xi$ at every nonzero domain point.

## Counterexample

**Given:** The objects and hypotheses in the statement.

1.1 S consists of successors, is unbounded in kappa, and omits zero. The uniquely defined predecessor map satisfies $f(\alpha+1)=\alpha<\alpha+1$, so it is regressive. [F1]

2.1 Each fibre is a singleton, hence misses a club tail and is nonstationary. Also S itself misses the club of nonzero limits: these are unbounded because $\beta+\omega<\kappa$, and closed because limits of limit ordinals are limits. Thus stationarity, the missing hypothesis of pressing down, cannot be replaced by unboundedness. [step 1.1] ∎
