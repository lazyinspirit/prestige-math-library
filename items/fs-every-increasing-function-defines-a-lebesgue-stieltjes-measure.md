---
id: fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure
kind: false-statement
title: "FALSE: every nondecreasing function defines a Lebesgue-Stieltjes measure on Borel sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-lebesgue-stieltjes-convention-ledger, thm-continuity-from-above-for-measures]
proof_strategy: direct
verification:
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

## Statement

**False claim.** Every nondecreasing function $F : \mathbb{R} \to \mathbb{R}$
defines a Borel measure satisfying $\mu((a,b]) = F(b) - F(a)$. The valid
construction on this page also requires the right-continuity recorded in
[[rem-lebesgue-stieltjes-convention-ledger]].

## Facts & Assumptions

**Given:** The function

$$F(x) := \begin{cases} 0, & x \le 0,\\ 1, & x > 0. \end{cases}$$

[L1] Measures are continuous from above on decreasing measurable sets when one set in the chain has finite measure. ([[thm-continuity-from-above-for-measures]])

## Refutation

**Proof technique:** direct.

1.1 The function $F$ is nondecreasing but not right-continuous at $0$: one has $F(0)=0$ while $F(x)=1$ for every $x>0$. [given]

If a Borel measure $\mu$ satisfied $\mu((a,b]) = F(b)-F(a)$ for every $a<b$, then

$$\mu((0,1/n]) = F(1/n)-F(0)=1$$

for every $n \ge 1$. [given]

2.1 The sets $(0,1/n]$ decrease to $\varnothing$, and $\mu((0,1]) = F(1)-F(0)=1 < +\infty$. [step 1.1, L1]

Therefore [L1] would force

$$\mu((0,1/n]) \to \mu\!\left(\bigcap_{n=1}^\infty (0,1/n]\right) = \mu(\varnothing) = 0,$$

contradicting step 1.1. So no such measure exists. [step 1.1, L1] ∎
