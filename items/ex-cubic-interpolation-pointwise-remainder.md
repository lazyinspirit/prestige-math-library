---
id: ex-cubic-interpolation-pointwise-remainder
kind: example
title: "A cubic gives equality in the pointwise interpolation remainder"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-cardinal-polynomial-interpolation
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - thm-lagrange-interpolation-remainder
  - def-higher-derivatives-and-smoothness
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - def-canonical-natural
  - def-factorial-and-falling-factorial
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 3"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
---

## Example

On $[0,3]$, interpolate $f(t)=t^3$ at $0,1,2$ and evaluate at $x=3$. The quadratic interpolant is $p(t)=3t^2-2t$, and the pointwise remainder is exactly
$$f(3)-p(3)=\frac{f^{(3)}(1)}{3!_{\mathbb R}}(3-0)(3-1)(3-2)=6.$$

## Facts & Assumptions

**Given:** The interval $[0,3]$, the function $f(t)=t^3$, nodes $x_0=0,x_1=1,x_2=2$, and query $x=3$.

[F1] [[def-cardinal-polynomial-interpolation]]: $I_2f$ is the polynomial interpolant to the three nodal values.

[F2] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a formal polynomial is a finite coefficient list and its evaluation is the corresponding finite sum.

[F3] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: the polynomial of degree at most $2$ matching the three distinct nodal values is uniquely $I_2f$.

[F4] [[def-higher-derivatives-and-smoothness]]: $C^3$ means that the derivatives through order $3$ exist and are continuous.

[F5] [[lem-derivative-of-a-power]]: powers have their usual derivatives, and polynomial functions are differentiable term by term.

[F6] [[thm-algebra-of-derivatives]]: scalar multiples and sums differentiate by the corresponding linear rules.

[F7] [[thm-algebra-of-continuous-functions]]: polynomial functions are continuous.

[F8] [[thm-lagrange-interpolation-remainder]]: for $f\in C^3([0,3])$ and three distinct nodes, at every non-node query there is an intermediate $\xi$ with the stated cubic remainder formula.

[F9] [[def-factorial-and-falling-factorial]] and [[def-canonical-natural]]: the real factorial is the canonical real image of the natural factorial, so $3!_{\mathbb R}=1\cdot2\cdot3=6$.

## Proof

1.1 The nodal values are $f(0)=0$, $f(1)=1$, and $f(2)=8$. The formal polynomial $q(t)=3t^2-2t$ has degree $2$ and these values, so uniqueness [F3] gives $p=I_2f=q$. [given, F1, F2, F3, algebra]

1.2 The power and linearity rules [F5, F6] give $f'(t)=3t^2$, $f''(t)=6t$, and $f^{(3)}(t)=6$. Each of $f,f',f'',f^{(3)}$ is a polynomial function and hence continuous by [F7]; thus $f\in C^3([0,3])$ by [F4]. [given, F4, F5, F6, F7, algebra]

2.1 At $x=3$, $f(3)=27$ and $p(3)=21$, so the error is $6$. The node product is $(3-0)(3-1)(3-2)=6$, and [F9] gives $3!_{\mathbb R}=6$. [given, F9, step 1.1, algebra]

3.1 Taking $\xi=1\in(0,3)$, step 1.2 and step 2.1 give the right side of the formula in [F8] as $(6/6)\cdot6=6=f(3)-p(3)$. This verifies the pointwise remainder identity for this example. [given, F8, step 1.2, step 2.1, algebra] ∎
