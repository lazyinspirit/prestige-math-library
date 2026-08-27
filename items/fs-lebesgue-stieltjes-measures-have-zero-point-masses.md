---
id: fs-lebesgue-stieltjes-measures-have-zero-point-masses
kind: false-statement
title: "FALSE: a Lebesgue-Stieltjes measure always gives every singleton measure $0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-the-lebesgue-stieltjes-measure, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.36"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** Every Lebesgue-Stieltjes measure $\mu_F$ satisfies
$\mu_F(\{a\})=0$ for every $a \in \mathbb{R}$. In fact singleton masses are
exactly the jumps of $F$ by
[[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]].

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the step function

$$F(x) := \begin{cases} 0, & x < 0,\\ 1, & x \ge 0. \end{cases}$$

[L1] For a Lebesgue-Stieltjes measure, one has $\mu_F(\{a\}) = F(a) - F(a^-)$. ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

[L2] Assuming Countable Choice, every nondecreasing right-continuous real
function defines a Lebesgue-Stieltjes measure.
([[thm-existence-of-the-lebesgue-stieltjes-measure]])

## Refutation

**Proof technique:** direct.

1.1 The function $F$ is nondecreasing and right-continuous, so [L2] defines its [given, L2]
Lebesgue-Stieltjes measure $\mu_F$. At the point $0$, one has $F(0)=1$ and
$F(0^-)=0$.

2.1 Applying [L1] at $a=0$ gives [step 1.1, L1]

$$\mu_F(\{0\}) = F(0) - F(0^-) = 1.$$

So the singleton $\{0\}$ has positive measure, and the claim is false. [step 1.1, L1] ∎
