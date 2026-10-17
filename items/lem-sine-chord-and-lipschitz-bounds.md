---
id: lem-sine-chord-and-lipschitz-bounds
kind: lemma
title: "Sine chord and Lipschitz bounds"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - lem-derivative-of-a-power
  - cor-differentiable-implies-continuous
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 3"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Ch. 3, printed pp. 14–15, trigonometric and Chebyshev identities; the inequalities are proved locally"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Problems and conditioning"
      url: "https://fncbook.com/conditioning/"
      locator: "Complete §1.2 article; the elementary sine estimates are supplied locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For $0\leq u\leq\pi/2$,
$$\sin u\geq \frac{2u}{\pi}.$$
For all real $u,v$,
$$|\sin u-\sin v|\leq |u-v|.$$

## Facts & Assumptions
**Given:** Real $u,v$, with $0\leq u\leq\pi/2$ for the first inequality.

[F1] [[thm-sine-and-cosine-derivatives]]: $\sin'=\cos$, $\cos'=-\sin$, and $\sin0=0$.

[F2] [[thm-algebra-of-derivatives]]: products and quotients of differentiable functions obey the product and quotient rules wherever the denominator is nonzero.

[F3] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable on its interior has a point where its endpoint increment equals its derivative times the interval length.

[F4] [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], and [[thm-sine-and-cosine-derivatives]]: $0\leq\sin u$ on $[0,\pi/2]$, $|\cos u|\leq1$ on $\mathbb R$, and $\sin(\pi/2)=1$.

[F5] [[lem-derivative-of-a-power]] and [[cor-differentiable-implies-continuous]]: the identity function has derivative $1$, and every differentiable real function is continuous at each point where it is differentiable.

## Proof

1.1 Define $h(u)=\sin u-u\cos u$. By [F1], [F2], and [F5], $h$ is differentiable and hence continuous, with $h'(u)=u\sin u\geq0$ on $(0,\pi/2)$ by [F4]. For $u>0$, the mean value theorem on $[0,u]$ gives $h(u)\geq h(0)=0$; at $u=0$ equality is immediate. [given, F1, F2, F3, F4, F5, construct, algebra]

2.1 For $0<u<\pi/2$, define $r(u)=\sin u/u$. By the quotient rule, the identity derivative in [F5], and step 1.1, $r'(u)=(u\cos u-\sin u)/u^2=-h(u)/u^2\leq0$. The function $r$ is continuous on $[u,\pi/2]$ by [F5], so the mean value theorem gives $r(u)\geq r(\pi/2)=2/\pi$ by [F3] and [F4]; at $u=\pi/2$ equality holds. Multiplying by $u$ and checking $u=0$ proves the first inequality. [given, F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 If $u\ne v$, sine is continuous on the closed interval between them and differentiable inside by [F1] and [F5]. The mean value theorem gives $|\sin u-\sin v|=|\cos c|\,|u-v|\leq|u-v|$ for some interior $c$, by [F3] and [F4]. If $u=v$, both sides are zero. [given, F1, F3, F4, F5, algebra] ∎
