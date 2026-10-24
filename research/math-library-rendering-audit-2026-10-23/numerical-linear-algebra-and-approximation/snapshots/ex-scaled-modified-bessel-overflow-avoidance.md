---
id: ex-scaled-modified-bessel-overflow-avoidance
kind: example
title: Scaling keeps the modified Bessel value bounded as the unscaled value grows
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-bessel-integral-representations-and-scaled-range, lem-scaled-modified-bessel-midpoint-error, thm-certified-integer-order-bessel-enclosures, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, thm-ftc-second-part, thm-continuous-implies-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §10.40, asymptotic expansions for modified Bessel functions
      url: https://dlmf.nist.gov/10.40
    - title: DLMF, §§10.25 and 10.40
      url: https://dlmf.nist.gov/10.25
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 8
---

## Statement

For $n=0$ and $x\ge0$, the scaled value $e^{-x}I_0(x)$ lies in $[0,1]$,
while $I_0(x)\to\infty$ as $x\to\infty$. Thus any fixed finite output
range for unscaled values is eventually exceeded, whereas the scaled value
remains bounded and can be evaluated directly from its scaled integral.

## Facts & Assumptions

**Given:** Real $x\ge0$.

[F1] [[lem-bessel-integral-representations-and-scaled-range]]: 
$$I_0(x)=\frac1\pi\int_0^\pi e^{x\cos\theta}\,d\theta, \qquad 0\le e^{-x}I_0(x)\le1.$$

[F2] [[thm-sine-and-cosine-derivatives]]:
$\sin' t=\cos t$, $\cos' t=-\sin t$, $\sin0=0$, and $\cos0=1$.

[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $\cos t\le1$ for
all real $t$.

[F4] [[thm-ftc-second-part]] and
[[thm-continuous-implies-integrable]]: the continuous function $\sin t$ is
integrable, and its primitive $-\cos t$ gives
$\int_0^\theta\sin t\,dt=1-\cos\theta$.

## Proof
1.1 Let $h(t)=t-\sin t$. By [F2], $h(0)=0$ and $h'(t)=1-\cos t\ge0$ for $t\ge0$ by [F3], so $\sin t\le t$. Again by [F2] and [F4], $$1-\cos\theta=\int_0^\theta\sin t\,dt \le\int_0^\theta t\,dt=\theta^2/2 \qquad(0\le\theta\le1).$$ [F2, F3, F4, algebra]

2.1 For $x\ge1$ and $0\le\theta\le1/\sqrt{x}$, step 1.1 gives $x\cos\theta\ge x-1/2$. Restricting the integral in [F1] to this interval therefore yields $$I_0(x)\ge\frac{e^{x-1/2}}{\pi\sqrt{x}}.$$ The exponential series gives $e^x\ge x^2/2$ for $x\ge0$, so this lower bound is at least $e^{-1/2}x^{3/2}/(2\pi)$ and tends to infinity. [F1, step 1.1, algebra]

3.1 The scaled range in [F1] holds for every $x\ge0$, while step 2.1 shows the unscaled value exceeds any fixed finite range for sufficiently large $x$. The scaled integral method of [[lem-scaled-modified-bessel-midpoint-error]] evaluates the bounded scaled quantity directly. [F1, step 2.1] ∎