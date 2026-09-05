---
id: def-jump-function-of-an-increasing-function
kind: definition
title: "The jump function of a nondecreasing function on a compact interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set, def-complete-ordered-field, def-finite-sum, def-monotone-function, def-one-sided-limits, thm-monotone-one-sided-limits-exist]
justified_by: [thm-increasing-functions-split-uniquely-as-jump-plus-continuous]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed., Chapter 7"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Definition

Let $a\le b$, and let $F : [a,b] \to \mathbb{R}$ be nondecreasing
([[def-monotone-function]]). When $a<b$, write

$$\beta_a := \lim_{x \to a^{+}} F(x) - F(a),$$

which exists by [[thm-monotone-one-sided-limits-exist]] and is nonnegative. When
$a=b$, put $\beta_a:=0$.
For $x \in [a,b]$ define the **jump function** $J_F$ by

$$J_F(a) := 0,$$

and, for $x > a$,

$$J_F(x) := \beta_a + \sup\left\{ \sum_{t \in S} \bigl(F(t)-F(t^{-})\bigr) \;+\; \sum_{u \in T} \bigl(F(u^{+})-F(u)\bigr) : \begin{array}{l} S \subseteq (a,x] \text{ finite},\\ T \subseteq (a,x) \text{ finite} \end{array} \right\}.$$

The summands are nonnegative, and the supremum is taken in the complete ordered
field of the reals ([[def-complete-ordered-field]]).

## Remarks

- When $a<b$, the endpoint defect at $a$ is included separately because a
  nondecreasing function on $[a,b]$ can fail to be continuous at the left
  endpoint without having a left-hand jump there. The convention $\beta_a=0$
  makes the degenerate interval $[a,a]$ harmless.
- The first sum collects left jumps at points at or before $x$, while the
  second collects right jumps at points strictly before $x$. Later
  [[thm-increasing-functions-split-uniquely-as-jump-plus-continuous]] proves
  that these two contributions exactly remove the discontinuities of $F$, so
  $F-J_F$ is continuous.
- If $F$ is right-continuous, then every interior right jump is zero and the
  definition reduces to the usual cumulative left-jump function.
