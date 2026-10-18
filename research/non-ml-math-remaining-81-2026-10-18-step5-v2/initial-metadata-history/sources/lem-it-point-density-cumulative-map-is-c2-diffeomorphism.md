---
id: lem-it-point-density-cumulative-map-is-c2-diffeomorphism
kind: lemma
title: A positive C1 point density has a C2 cumulative inverse
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-point-density-cumulative-map
  - cor-mean-value-theorem
  - cor-primitives-of-a-continuous-function
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-extreme-value-metric
  - thm-intermediate-value
justified_by: []
aliases: []
axiom_use: No choice principle is used; the inverse is unique and the intermediate-value supplier uses canonical bisection.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.1, printed pp. 115–117, compact scalar compander construction.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: Appendix 3A, printed pp. 79–81, high-rate scalar quantizers; the inverse-regularity proof is supplied locally.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §IV-A, printed pp. 2344–2346, compander coordinate and point density; the C2 inverse proof is supplied locally.
---

## Statement

Let $a<b$ and let $g:[a,b]\to(0,\infty)$ be $C^1$ with $\int_a^b g=1$, and let $G_g$ be as in [[def-it-point-density-cumulative-map]]. Then $G_g$ is a strictly increasing $C^2$ bijection from $[a,b]$ onto $[0,1]$. Its inverse $\phi:[0,1]\to[a,b]$ is $C^2$ (with one-sided derivatives at the endpoints), and

$$\phi'(u)=\frac{1}{g(\phi(u))},\qquad \phi''(u)=-\frac{g'(\phi(u))}{g(\phi(u))^3}.$$

## Facts & Assumptions

**Given:** A nondegenerate compact interval $[a,b]$ and a positive normalized $C^1$ function $g$.

[F1] [[def-it-point-density-cumulative-map]]: $G_g(x)=\int_a^xg(t)\,dt$ and $\int_a^bg=1$.

[F2] [[cor-primitives-of-a-continuous-function]]: a continuous function on an interval has a primitive $G(x)=\int_{c_0}^xg$, with $G'=g$ and $\int_x^yg=G(y)-G(x)$.

[F3] [[cor-mean-value-theorem]]: if a real function is continuous on $[x,y]$ and differentiable on $(x,y)$, then $G(y)-G(x)=G'(c)(y-x)$ for some interior $c$.

[F4] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F5] [[thm-algebra-of-derivatives]]: sums, products and quotients of differentiable real functions obey the corresponding derivative rules when the quotient denominator is nonzero.

[F6] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of differentiable maps between Euclidean spaces is the composition of their derivatives.

[F7] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space is bounded and attains a minimum.

## Proof

1.1 By [F2], $G_g$ is continuous and $G_g'=g$ on $(a,b)$, so it is $C^2$ because $g$ is $C^1$; also $G_g(a)=0$ and $G_g(b)=1$ by [F1]. Since $g$ is positive and continuous on compact $[a,b]$, [F7] gives a positive minimum, and in particular $G_g'(x)>0$ at every interior point. [given, F1, F2, F7]

2.1 For $x<y$ in $[a,b]$, [F3] applied to $G_g$ gives $G_g(y)-G_g(x)=g(c)(y-x)>0$. Thus $G_g$ is strictly increasing; [F4] and step 1.1 show its image is all of $[0,1]$. Strict increase makes each preimage unique, so an inverse $\phi:[0,1]\to[a,b]$ exists. [given, F3, F4, step 1.1]

3.1 Fix $u_0\in[0,1]$ and set $x_0=\phi(u_0)$. For $\varepsilon>0$ put $x_-=\max(a,x_0-\varepsilon)$ and $x_+=\min(b,x_0+\varepsilon)$. At least one of $x_-<x_0$ and $x_0<x_+$ holds because $a<b$. Whenever $x_-<x_0$ or $x_0<x_+$, strict increase gives respectively $u_0-G_g(x_-)>0$ or $G_g(x_+)-u_0>0$. Choose $\delta>0$ smaller than each of the positive margins that exists. For $u\in[0,1]$ with $|u-u_0|<\delta$, monotonicity gives $x_-\le\phi(u)\le x_+$; at a missing margin $x_-=x_0=a$ or $x_+=x_0=b$, the domain endpoint supplies that inequality. Hence $|\phi(u)-x_0|<\varepsilon$, proving continuity of $\phi$. [given, step 2.1, construct]

4.1 Fix $u\in(0,1)$, let $x=\phi(u)$, and for nonzero $h$ with $u+h\in[0,1]$ let $x_h=\phi(u+h)$. Continuity from step 3.1 gives $x_h\to x$, and injectivity gives $x_h\ne x$. By [F3], for some $\xi_h$ between $x$ and $x_h$, $(\phi(u+h)-\phi(u))/h=1/g(\xi_h)$. As $h\to0$, $\xi_h\to x$ and $g(\xi_h)\to g(x)>0$, so $\phi'(u)=1/g(\phi(u))$. The same one-sided quotient argument applies at $u=0,1$. [given, F3, step 2.1, step 3.1]

5.1 The formula for $\phi'$ is continuous on $[0,1]$ because $g\circ\phi$ is continuous and positive. Differentiating it on $(0,1)$ using [F5] and [F6] gives $\phi''(u)=-g'(\phi(u))/g(\phi(u))^3$. The right-hand side extends continuously to $[0,1]$ because $g'$ and $\phi$ are continuous and the denominator stays positive. Applying [F3] to $\phi'$ on intervals with an endpoint at $0$ or $1$ shows its one-sided difference quotient tends to that continuous extension. Together with step 4.1, this proves the stated $C^2$ regularity and formulas. [given, F3, F5, F6, step 3.1, step 4.1] ∎
