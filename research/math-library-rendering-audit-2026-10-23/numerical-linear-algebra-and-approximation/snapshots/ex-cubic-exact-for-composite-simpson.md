---
id: ex-cubic-exact-for-composite-simpson
kind: example
title: Simpson rule integrates a cubic exactly on one two-panel block
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-composite-simpson-rule
  - thm-composite-simpson-exact-through-degree-three
  - thm-ftc-second-part
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-continuous-on-a-rectangle-is-riemann-integrable
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; cubic exactness stated
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; Exercise 5.6.4
---

## Example

On $[0,2]$, let $f(x)=x^3$. With $n=2$ and $h=1$, the Simpson value is

$$Q_S(f;0,2,2)=\frac13\bigl(f(0)+4f(1)+f(2)\bigr)=4,$$

which equals the exact integral $\int_0^2x^3\,dx=4$. The full two-panel block
is exact because the rule annihilates the Peano remainder of every cubic.

## Facts & Assumptions

**Given:** $f(x)=x^3$ on $[0,2]$ and the composite Simpson rule with $n=2$.

[F1] [[alg-composite-simpson-rule]]: for $n=2$, the returned value is $\frac h3(f(x_0)+4f(x_1)+f(x_2))$.

[F2] [[thm-ftc-second-part]]: for an integrable derivative, the integral is the increment of its antiderivative.

[F3] [[thm-composite-simpson-exact-through-degree-three]]: Simpson is exact for every displayed polynomial of degree at most three.

[F4] [[lem-derivative-of-a-power]] and [[thm-algebra-of-derivatives]]: the power and scalar rules give $(x^4/4)'=x^3$.

[F5] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: $x\mapsto x^3$ is Riemann integrable on $[0,2]$ because it is continuous.

## Verification

1.1 The function $x^3$ is continuous and integrable by [F5]. By [F4], $x^4/4$ is an antiderivative, so [F2] gives $\int_0^2x^3\,dx=4$. [given, F2, F4, F5]

2.1 Here $h=1$ and the nodes are $0,1,2$. By [F1], $Q_S=\frac13(0+4\cdot1+8)=4$. Thus the rule value equals the integral. [F1, step 1.1, algebra]

3.1 The equality is the cubic case of [F3], since $x^3$ has degree three. [F3, step 2.1] ∎
