---
id: def-composite-trapezoidal-rule
kind: definition
title: Composite trapezoidal rule
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-finite-sum]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6.1–§5.6.4"
      url: "https://tobydriscoll.net/fnc-julia/localapprox/integration.html"
      locator: "Equations (5.6.1)–(5.6.4), composite trapezoid weights and formula; complete online chapter inspected."
    - title: "Endre Süli, Numerical Computation, course notes"
      url: "https://people.maths.ox.ac.uk/suli/nc.pdf"
      locator: "§2.2, composite trapezium rule, equation (20), PDF pp. 15–16."
---

## Definition

Let $a<b$ be real numbers, let $N\ge1$ be an integer, put
$h:=(b-a)/N$, and let $x_j:=a+jh$ for $0\le j\le N$. For any real-valued
function $f:[a,b]\to\mathbb R$, its **composite trapezoidal value** with $N$
equal panels is
$$T_N(f):=h\left(\frac{f(x_0)}2+\sum_{j=1}^{N-1}f(x_j)+\frac{f(x_N)}2\right).$$
The sum is the finite sum of [[def-finite-sum]]; when $N=1$ it is empty and
equals $0$. This definition gives a finite real number for every such $f$.
An error comparison with $\int_a^b f$ is asserted only when that integral is
defined.
