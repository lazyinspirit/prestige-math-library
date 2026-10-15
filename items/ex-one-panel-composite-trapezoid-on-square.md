---
id: ex-one-panel-composite-trapezoid-on-square
kind: example
title: The one-panel trapezoidal bound is attained by x squared
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-composite-trapezoidal-rule
  - def-higher-derivatives-and-smoothness
  - thm-composite-trapezoidal-rule-error-bound
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6.1–§5.6.4"
      url: "https://tobydriscoll.net/fnc-julia/localapprox/integration.html"
      locator: "Equations (5.6.1)–(5.6.4) and the second-order accuracy discussion; complete online chapter inspected."
    - title: "Endre Süli, Numerical Computation, course notes"
      url: "https://people.maths.ox.ac.uk/suli/nc.pdf"
      locator: "§2.1, one-panel trapezium error (14), and §2.2, composite formula (20), PDF pp. 12–16."
---

## Example

For $f(x)=x^2$ on $[0,1]$ with $N=1$, the trapezoidal error exactly attains
the bound $(b-a)h^2\|f''\|_\infty/12=1/6$.

## Facts & Assumptions

**Given:** $f(x)=x^2$ on $[0,1]$, one panel ($N=1$), and mesh width $h=1$.

[F1] [[def-composite-trapezoidal-rule]]: $T_N(f)=h(f(0)/2+\sum_{j=1}^{N-1}f(jh)+f(1)/2)$ on $[0,1]$ when $N=1$.

[F2] [[thm-composite-trapezoidal-rule-error-bound]]: $|\int_0^1 f-T_1(f)|\le h^2\|f''\|_\infty/12$ for $f\in C^2[0,1]$.

[F3] [[def-higher-derivatives-and-smoothness]]: $C^2$ means the first two derivatives exist and are continuous.

[F4] [[thm-continuous-implies-integrable]]: a continuous function on a closed bounded interval is Riemann integrable.

[F5] [[thm-newton-leibniz-with-interior-derivative]]: the integral of an integrable derivative is the endpoint difference of its antiderivative.

## Verification

1.1 The function is $C^2$, with $f''(x)=2$ and $\|f''\|_\infty=2$. By [F1], $T_1(f)=(f(0)+f(1))/2=1/2$. [given, F1, F3, algebra]

1.2 By [F4], $f$ is integrable. The antiderivative $x^3/3$ and [F5] give $\int_0^1x^2\,dx=1/3$. [given, F4, F5]

2.1 Therefore $|\int_0^1f-T_1(f)|=|1/3-1/2|=1/6$, while the bound in [F2] is $1\cdot1^2\cdot2/12=1/6$. Equality holds, so this example attains the stated error bound. [F2, step 1.1, step 1.2, algebra] ∎
