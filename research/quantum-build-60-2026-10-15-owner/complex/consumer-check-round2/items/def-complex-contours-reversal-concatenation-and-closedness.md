---
id: def-complex-contours-reversal-concatenation-and-closedness
kind: definition
title: "Rectifiable complex contours, reversal, concatenation, closedness, and orientation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-path-polygonal-length-and-rectifiability, thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed, thm-complex-path-length-invariant-under-monotone-reparametrization, def-monotone-function]
aliases: []
landmark: true
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Definition

A **complex contour** is a continuous rectifiable path $\gamma:[a,b]\to\mathbb C$, $a\le b$, in the sense of [[def-complex-path-polygonal-length-and-rectifiability]]. It is **closed** when $\gamma(a)=\gamma(b)$. Its **reversal** is $\gamma^-(t)=\gamma(a+b-t)$ on the same interval.

For arbitrary maps $\alpha,\beta:[0,1]\to\mathbb C$ satisfying $\alpha(1)=\beta(0)$, define

$$ (\alpha*\beta)(t)=\begin{cases}\alpha(2t),&0\le t\le\tfrac12,\\\beta(2t-1),&\tfrac12\le t\le1.\end{cases} $$

Endpoint matching makes the two expressions agree at $1/2$, so this formula defines a map even when the factors are not paths. If both factors are complex contours, their continuity and endpoint matching make the concatenation continuous, including at the join. In this case the concatenation is rectifiable and its length is $L_{\mathbb C}(\alpha)+L_{\mathbb C}(\beta)$: inserting $1/2$ into a partition can only increase its sum by the triangle inequality; the refined sum splits into two sums of the factors, while combining partitions from both factors gives the reverse supremum inequality. Taking factor sums within $\varepsilon/2$ of their finite suprema proves equality. This argument includes constant pieces. Reversal preserves rectifiability and length by [[thm-complex-path-length-invariant-under-monotone-reparametrization]].

A complex contour is **piecewise $C^1$** when its coordinate path is continuous piecewise $C^1$ as specified in [[thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed]]; its length is the speed integral supplied there, including corners and zero-speed pieces. Singleton paths have length zero.

An increasing continuous bijection of compact parameter intervals preserves orientation; a decreasing one reverses orientation, using the order convention of [[def-monotone-function]]. The length is unchanged by either, and more generally by every continuous surjective nondecreasing or nonincreasing reparametrization, including pauses, by [[thm-complex-path-length-invariant-under-monotone-reparametrization]].
