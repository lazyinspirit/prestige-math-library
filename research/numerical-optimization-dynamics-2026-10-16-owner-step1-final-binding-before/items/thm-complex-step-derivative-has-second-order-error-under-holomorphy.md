---
id: thm-complex-step-derivative-has-second-order-error-under-holomorphy
kind: theorem
title: "Complex-step differentiation is second-order for holomorphic functions real on the real axis"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-step-derivative-estimator, def-complex-differentiability-holomorphic-and-entire, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-cauchy-integral-formula-higher-derivatives, thm-c2-holomorphic-function-has-holomorphic-derivative, cor-taylor-lagrange-and-cauchy-remainders, def-taylor-polynomial-and-remainder, def-complex-conjugate-real-imaginary-part-and-modulus, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Complex Step Approximation?"
      url: "https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/"
    - title: "Mike Giles, Monte Carlo methods, Lecture 6: Complex Variable Trick"
      url: "https://www2.maths.ox.ac.uk/~gilesm/mc/mc/lec6.pdf"
    - title: "R. Boudjemaa, M. G. Cox, A. B. Forbes, and P. M. Harris, Automatic Differentiation Techniques and their Application in Metrology, NPL Report CMSC 26/03"
      url: "https://eprintspublications.npl.co.uk/2828/1/cmsc26.pdf"
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $x\in U\cap\mathbb R$, and suppose $f:U\to\mathbb C$ is holomorphic, real-valued on a real interval $I\subseteq U\cap\mathbb R$ around $x$, and $\{x+it:0\le t\le h\}\subset U$ for $h>0$. Suppose $|\operatorname{Re}f'''(x+it)|\le M_3$ for $0\le t\le h$, with $M_3\ge0$. Then

$$|C_hf(x)-f'(x)|\le \frac{M_3h^2}{6}.$$

If the evaluated imaginary component has error at most $\delta_{\rm im}$, then

$$|\widehat C_hf(x)-f'(x)|\le \frac{M_3h^2}{6}+\frac{\delta_{\rm im}}h.$$

Holomorphy and real-axis reality are essential to the formula: real differentiability of the restriction alone is insufficient.

## Facts & Assumptions

**Given:** The domain, holomorphy, real-axis reality, third-derivative bound, step and evaluation-error hypotheses in the statement.

[F1] [[def-complex-step-derivative-estimator]]: $C_hf(x)=\operatorname{Im}f(x+ih)/h$, and an imaginary-component evaluation error $\delta_{\rm im}$ contributes at most $\delta_{\rm im}/h$.

[F2] [[def-complex-differentiability-holomorphic-and-entire]]: holomorphy means complex differentiability at every point, with derivative given by the limit of complex difference quotients.

[F3] [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]: if $f=u+iv$ is holomorphic, then $f'=u_x+iv_x=v_y-iu_y$ and $u_x=v_y$, $u_y=-v_x$.

[F4] [[cor-holomorphic-functions-are-real-analytic-and-smooth]]: the real and imaginary coordinate functions of a holomorphic function are $C^k$ for every natural $k$.

[F5] [[thm-cauchy-integral-formula-higher-derivatives]] and [[thm-c2-holomorphic-function-has-holomorphic-derivative]]: all iterated complex derivatives exist locally; if a holomorphic function has $C^2$ coordinate functions, its derivative is holomorphic.

[F6] [[cor-taylor-lagrange-and-cauchy-remainders]] and [[def-taylor-polynomial-and-remainder]]: a real $C^3$ function on the interval equals its degree-$2$ Taylor polynomial plus $g'''(\xi)h^3/3!$ for an intermediate $\xi$.

[F7] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $\operatorname{Re}$ and $\operatorname{Im}$ are the real and imaginary coordinates of a complex number.

[F8] [[def-abs-value]] and [[lem-of-abs-value]]: absolute value is nonnegative and $|ab|=|a|\,|b|$.

[F9] [[lem-of-triangle-inequality]]: $|a+b|\le|a|+|b|$ for real $a,b$.

## Proof

**Given:** The hypotheses listed above.

1.1 Put $g(t):=\operatorname{Im}f(x+it)$ for $0\le t\le h$. By [F4], its coordinate functions are smooth. By [F3], $g'(t)=v_y(x,t)=u_x(x,t)=\operatorname{Re}f'(x+it)$. If $q=p+ir$ is holomorphic, [F3] gives $\partial_y p=-\partial_xr=-\operatorname{Im}q'$ and $\partial_y r=\partial_xp=\operatorname{Re}q'$. Applying [F5] to $f$ and then to $f'$ makes $f'$ and $f''$ holomorphic, so these identities give $g''(t)=-\operatorname{Im}f''(x+it)$ and $g'''(t)=-\operatorname{Re}f'''(x+it)$. [given, F3, F4, F5, construct]

2.1 At real arguments near $x$, $f$ is real by hypothesis, so its real-direction difference quotients show that $f'$ is real there; applying the same argument to the holomorphic function $f'$ shows that $f''$ is real there. Thus $g(0)=0$, $g'(0)=f'(x)$, and $g''(0)=-\operatorname{Im}f''(x)=0$. By step 1.1, $|g'''(t)|\le M_3$ on $[0,h]$. [given, F2, step 1.1, algebra]

3.1 Apply [F6] to $g$ from $0$ to $h$. For some $\xi\in(0,h)$, $g(h)=h f'(x)+g'''(\xi)h^3/6$. Since $h>0$, [F8] gives $|g(h)/h-f'(x)|=|g'''(\xi)|h^2/6\le M_3h^2/6$. By [F1] and [F7], $g(h)/h=C_hf(x)$, proving the exact complex-step error bound. [given, F1, F6, F7, F8, step 2.1, algebra]

4.1 By [F1] and [F8], $|\widehat C_hf(x)-C_hf(x)|\le\delta_{\rm im}/h$. [F9] and step 3.1 give the inexact bound. [given, F1, F8, F9, step 3.1, algebra] ∎
