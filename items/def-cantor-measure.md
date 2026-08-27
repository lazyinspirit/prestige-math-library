---
id: def-cantor-measure
kind: definition
title: "The Cantor measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cantor-function, thm-cantor-function-properties, cor-cantor-function-is-continuous, thm-existence-of-the-lebesgue-stieltjes-measure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Assume the Axiom of Countable Choice. Let $c : [0,1] \to \mathbb{R}$ be the
Cantor function [[def-cantor-function]]. Define

$$F_c(x) := \begin{cases} 0, & x < 0,\\ c(x), & 0 \le x \le 1,\\ 1, & x > 1. \end{cases}$$

By [[thm-cantor-function-properties]] and
[[cor-cantor-function-is-continuous]], the function $F_c$ is nondecreasing and
right-continuous on $\mathbb{R}$. The **Cantor measure** is the
Lebesgue-Stieltjes measure

$$\mu_c := \mu_{F_c}$$

given by [[thm-existence-of-the-lebesgue-stieltjes-measure]].
