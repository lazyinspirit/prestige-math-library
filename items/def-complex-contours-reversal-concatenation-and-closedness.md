---
id: def-complex-contours-reversal-concatenation-and-closedness
kind: definition
title: "Rectifiable complex contours, reversal, concatenation, closedness, and orientation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-contours-as-planar-rectifiable-paths, def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-arc-length-is-invariant-under-monotone-reparametrization]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Definition

A **complex contour** is a rectifiable path $\gamma:[a,b]\to\mathbb C$ in the sense of [[rem-complex-contours-as-planar-rectifiable-paths]]. It is **closed** when $\gamma(a)=\gamma(b)$. Its **reversal** is $\gamma^-(t)=\gamma(a+b-t)$.

If $\alpha,\beta:[0,1]\to\mathbb C$ satisfy $\alpha(1)=\beta(0)$, their concatenation $\alpha*\beta$ is defined by the same two affine pieces as in [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]. An increasing continuous bijection of compact parameter intervals preserves orientation; a decreasing one reverses orientation. The underlying length is unchanged by either monotone reparametrization by [[thm-arc-length-is-invariant-under-monotone-reparametrization]].
