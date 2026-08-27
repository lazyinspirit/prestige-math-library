---
id: cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures
kind: counterexample
title: "A nondecreasing function that is not right-continuous can fail countable additivity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-from-above-for-measures]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

That the interval prescription $\mu((a,b])=F(b)-F(a)$ still defines a countably
additive Borel measure when $F$ is merely nondecreasing and not
right-continuous.

## Facts & Assumptions

**Given:** The nondecreasing function

$$F(x) := \begin{cases} 0, & x \le 0,\\ 1, & x > 0. \end{cases}$$

[L1] Measures are continuous from above on decreasing sets when the first set has finite measure. ([[thm-continuity-from-above-for-measures]])

## Counterexample

**Proof technique:** direct.

1.1 If a Borel measure $\mu$ satisfied $\mu((a,b])=F(b)-F(a)$, then [given] $\mu((0,1/n])=1$ for every $n$, because $F(1/n)=1$ and $F(0)=0$. [given]

2.1 The sets $(0,1/n]$ decrease to $\varnothing$, and [step 1.1, L1] $\mu((0,1])=1<+\infty$. Therefore [L1] would force $\mu((0,1/n]) \to \mu(\varnothing)=0$, contradicting step 1.1. So the interval prescription fails countable additivity for this nondecreasing non-right-continuous $F$. [step 1.1, L1] ∎
