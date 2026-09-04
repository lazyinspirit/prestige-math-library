---
id: thm-dirichlet-eta-representation
kind: theorem
title: "The Dirichlet eta series is holomorphic on $\\operatorname{Re}s>0$ and equals the prefactor times zeta there"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-zeta-function, thm-riemann-zeta-continuation-to-the-right-half-plane, thm-weierstrass-m-test-for-complex-function-series, def-complex-exponential, def-natural-logarithm, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

The series

$$\eta(s):=\sum_{n=1}^\infty (-1)^{n-1}n^{-s}$$

converges locally uniformly on the half-plane $\operatorname{Re}s>0$ and so
defines a holomorphic function there. On the same half-plane one has

$$\eta(s)=(1-2^{1-s})\zeta(s).$$

The identity is a representation theorem: it remains valid at the zeros of
$1-2^{1-s}$ because both sides are already holomorphic there.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\{s\in\mathbb C:\operatorname{Re}s>0\}$.

[L1] The zeta series $\sum n^{-s}$ defines $\zeta(s)$ on $\operatorname{Re}s>1$
([[def-riemann-zeta-function]]).

[L2] The fractional-part formula extends $\zeta$ meromorphically to
$\operatorname{Re}s>0$ with only a simple pole at $1$
([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[L3] The complex Weierstrass M-test gives locally uniform convergence from a
summable majorant ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L4] The real logarithm is defined on $(0,\infty)$ and the complex exponential
defines $x^{-s}=\exp(-s\log x)$ for $x>0$
([[def-natural-logarithm]], [[def-complex-exponential]]).

[L5] For rational $p>1$, the series $\sum_{n\ge1}n^{-p}$ converges
([[thm-p-series-rational]]).

[A1] For fixed $s$, the derivative of $x\mapsto x^{-s}=\exp(-s\log x)$ on
$(0,\infty)$ is $-s x^{-s-1}$.

[A2] Two holomorphic functions on a connected domain that agree on a nonempty
open subset agree everywhere on that domain.

## Proof

**Proof technique:** direct.

1.1 Choose $\sigma>0$ and $M\ge0$ so that $\operatorname{Re}s\ge\sigma$ and $|s|\le M$ on $K$. Pair the alternating series as $$\eta(s)=\sum_{n=1}^\infty\bigl((2n-1)^{-s}-(2n)^{-s}\bigr).$$ Using [A1] and [L4], $$|(2n-1)^{-s}-(2n)^{-s}|=\left|s\int_{2n-1}^{2n}x^{-s-1}\,dx\right|\le M(2n-1)^{-\sigma-1}.$$ Taking $\sigma$ rational, [L5] makes $\sum_n (2n-1)^{-\sigma-1}$ convergent. Therefore [L3] gives local uniform convergence of the paired series on $K$, so $\eta$ is holomorphic on $\operatorname{Re}s>0$. [given, L3, L4, L5, A1, choose, algebra]

1.2 On $\operatorname{Re}s>1$, the zeta series of [L1] converges absolutely, so regrouping odd and even terms gives $$\eta(s)=\sum_{n\ge1}n^{-s}-2\sum_{n\ge1}(2n)^{-s}=\bigl(1-2^{1-s}\bigr)\zeta(s).$$ [L1, algebra]

2.1 By step 1.1, $\eta$ is holomorphic on $\operatorname{Re}s>0$. By [L2], the function $(1-2^{1-s})\zeta(s)$ is also holomorphic there: the factor $1-2^{1-s}$ vanishes at $s=1$ and removes the only pole of $\zeta$. Step 1.2 shows that the two holomorphic functions agree on the nonempty open set $\operatorname{Re}s>1$, so [A2] gives the identity $$\eta(s)=(1-2^{1-s})\zeta(s)$$ throughout $\operatorname{Re}s>0$. [step 1.1, step 1.2, L2, A2, algebra] ∎
