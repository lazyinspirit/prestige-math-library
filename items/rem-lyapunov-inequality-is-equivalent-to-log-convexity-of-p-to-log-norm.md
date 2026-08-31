---
id: rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm
kind: remark
title: "Lyapunov inequality is equivalent to log-convexity of the reciprocal-exponent norm profile"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-lyapunov-interpolation-inequality-for-l-p-norms, def-log-convex-positive-function]
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Section 6.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
---

Fix a measurable $f$ and an interval of exponents on which every $\|f\|_p$ is
finite and positive. Write

$$s:=\frac1p,\qquad s_0:=\frac1{p_0},\qquad s_1:=\frac1{p_1}.$$

Then
[[thm-lyapunov-interpolation-inequality-for-l-p-norms]] says exactly that

$$\|f\|_p\le \|f\|_{p_0}^{\theta}\|f\|_{p_1}^{1-\theta}$$

whenever $s=\theta s_0+(1-\theta)s_1$. Equivalently,

$$\|f\|_{1/s}\le \|f\|_{1/s_0}^{\theta}\|f\|_{1/s_1}^{1-\theta}.$$

So the map $s\mapsto\|f\|_{1/s}$ is log-convex in the sense of
[[def-log-convex-positive-function]] on the reciprocal-exponent interval, and
conversely that log-convexity is exactly the Lyapunov interpolation statement.
