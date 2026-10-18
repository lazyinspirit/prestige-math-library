---
id: thm-it-compact-compander-high-rate-distortion
kind: theorem
title: Exact high-rate limit for a positive compact one-dimensional compander
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-compact-one-dimensional-compander
  - lem-it-compact-compander-quantizer-is-borel-and-finite-distortion
  - lem-it-point-density-cumulative-map-is-c2-diffeomorphism
  - cor-mean-value-theorem
  - cor-primitives-of-a-continuous-function
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-extreme-value-metric
  - thm-heine-cantor-metric
justified_by: []
aliases: []
axiom_use: No choice principle is used; all compact-interval estimates and finite sums are choice free.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–120, high-rate assumptions and compander distortion development; the exact compact limit is proved locally here.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: Appendix 3A, printed pp. 79–81, nonuniform scalar quantization under a high-rate approximation; the exact compact limit is proved locally here.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §IV-A, printed pp. 2344–2346, Bennett integral, companders and the explicit small-cell assumptions; the exact compact limit is proved locally here.
---

## Statement

Let $a<b$ and let $f,g:[a,b]\to(0,\infty)$ be $C^1$ probability densities. For the compander of [[def-it-compact-one-dimensional-compander]], the distortions satisfy

$$\lim_{N\to\infty}N^2D_N(f,g)=\frac1{12}\int_a^b\frac{f(x)}{g(x)^2}\,dx.$$

This is an exact limit for the specified compact construction. It assumes neither an unbounded source nor negligible overload, and it makes no claim about unrestricted optimal quantizers or dimensions greater than one.

## Facts & Assumptions

**Given:** A fixed interval $[a,b]$ with $a<b$ and positive normalized $C^1$ densities $f,g$.

[F1] [[def-it-compact-one-dimensional-compander]]: with $\phi=G_g^{-1}$, the $N$ cells have cumulative-coordinate endpoints $j/N$, reproduction points are $\phi((j-\tfrac12)/N)$, and $D_N(f,g)$ is the integral of squared error against density $f$ on $[a,b]$.

[F2] [[lem-it-point-density-cumulative-map-is-c2-diffeomorphism]]: $\phi$ is an increasing $C^2$ bijection, $\phi'=1/(g\circ\phi)$ and $\phi''=-g'\circ\phi/(g\circ\phi)^3$, including continuous endpoint extensions.

[F3] [[lem-it-compact-compander-quantizer-is-borel-and-finite-distortion]]: the cells are Borel and $D_N(f,g)$ is finite for each $N$.

[F4] [[cor-primitives-of-a-continuous-function]]: a continuous real function on an interval has the primitive $A(x)=\int_{x_0}^x h$, with $A'=h$, and the integral of a continuous derivative equals the endpoint difference.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of differentiable Euclidean maps is the composition of their derivatives.

[F6] [[thm-algebra-of-derivatives]]: differentiable real functions obey the product and quotient rules where the denominator is nonzero.

[F7] [[cor-mean-value-theorem]]: for a function continuous on a closed interval and differentiable in its interior, its endpoint increment equals an interior derivative times the interval length.

[F8] [[thm-extreme-value-metric]]: every continuous real function on a nonempty compact metric space is bounded and attains its maximum and minimum.

[F9] [[thm-heine-cantor-metric]]: a continuous map on a compact metric space is uniformly continuous.

## Proof

1.1 Put $v_j=(j-\tfrac12)/N$, $I_j=[(j-1)/N,j/N]$, and $F(u)=f(\phi(u))/g(\phi(u))$. For $h_j(x)=f(x)(x-\phi(v_j))^2$, its primitive $A_j(x)=\int_a^xh_j(s)\,ds$ satisfies $A_j'=h_j$ by [F4]. The chain rule [F5] applied to $A_j\circ\phi$ on $I_j$, followed by endpoint evaluation using [F4], gives $D_N(f,g)=\sum_{j=1}^N\int_{I_j}F(u)(\phi(u)-\phi(v_j))^2\,du$, because [F2] gives $\phi'=1/(g\circ\phi)$ and [F1] gives the reproduction point $\phi(v_j)$. The distortion is well-defined by [F3]. [F1, F2, F3, F4, F5]

1.2 By the chain rule [F5] and quotient rule [F6], $F$ is $C^1$; the functions $\phi'$, $\phi''$, $F$ and $F'$ are continuous on compact $[0,1]$, so [F8] gives finite bounds $M_1=\|\phi'\|_\infty$, $M_2=\|\phi''\|_\infty$, $M_F=\|F\|_\infty$, and $M_{F'}=\|F'\|_\infty$, independent of $N,j$. If $\delta=u-v_j$ and $e=\phi(u)-\phi(v_j)-\phi'(v_j)\delta$, [F7] applied to $\phi'$ and $F$, together with [F4], gives $|e|\le M_2|\delta|^2/2$ and $|F(u)-F(v_j)|\le M_{F'}|\delta|$. Expanding the square therefore bounds the absolute difference under consideration by $M_{F'}M_1^2|\delta|^3+M_F(M_1M_2|\delta|^3+M_2^2|\delta|^4/4)$. Since $|\delta|\le1/(2N)\le1/2$, this is at most $C|\delta|^3$ for $C=M_{F'}M_1^2+M_FM_1M_2+M_FM_2^2/8$, which is independent of $N,j$. [F2, F5, F6, F7, F8, algebra]

2.1 On $I_j$, direct integration gives $\int_{I_j}\delta^2\,du=1/(12N^3)$ and $\int_{I_j}|\delta|^3\,du=1/(32N^4)$. Thus step 1.2 gives $D_N(f,g)=\frac{1}{12N^3}\sum_{j=1}^NH(v_j)+E_N$ with $|E_N|\le C/(32N^3)$, where $H(u):=F(u)\phi'(u)^2=f(\phi(u))/g(\phi(u))^3$. [F4, step 1.1, step 1.2, algebra]

3.1 Multiplying by $N^2$ gives $N^2D_N(f,g)=\frac1{12N}\sum_{j=1}^NH(v_j)+N^2E_N$, with $|N^2E_N|\le C/(32N)\to0$. By [F9], $H$ is uniformly continuous on $[0,1]$. Given $\varepsilon>0$, choose $\delta>0$ such that $|H(u)-H(v)|<\varepsilon$ whenever $|u-v|<\delta$. Let $P(u):=\int_0^uH(s)\,ds$; [F4] gives $P'=H$ and $P(1)-P(0)=\int_0^1H$. For $N$ with $1/(2N)<\delta$, the mean value theorem [F7] on each $I_j$ gives $\xi_j\in((j-1)/N,j/N)$ with $P(j/N)-P((j-1)/N)=H(\xi_j)/N$. Since $|\xi_j-v_j|<1/(2N)<\delta$, telescoping gives $\left|\frac1N\sum_{j=1}^NH(v_j)-\int_0^1H(u)\,du\right|\le\frac1N\sum_{j=1}^N|H(v_j)-H(\xi_j)|<\varepsilon$. Thus the midpoint sums converge to $\int_0^1H(u)\,du$. [step 2.1, F4, F7, F9, algebra]

3.2 Let $P(x)=\int_a^x f(s)/g(s)^2\,ds$. The integrand is continuous because $g$ is positive on the compact interval, so [F4] gives $P'=f/g^2$. By [F5] and [F2], $(P\circ\phi)'(u)=f(\phi(u))/g(\phi(u))^3=H(u)$. Evaluating this primitive at $0,1$ by [F4], using $\phi(0)=a$ and $\phi(1)=b$, gives $\int_0^1H(u)\,du=\int_a^bf(x)/g(x)^2\,dx$. [F2, F4, F5, step 2.1]

4.1 Steps 3.1 and 3.2 identify the limit of $N^2D_N(f,g)$ with the displayed integral, proving the theorem. [step 3.1, step 3.2] ∎
