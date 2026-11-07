---
id: thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
kind: theorem
title: "Korobov–Vinogradov zero-free region for the Riemann zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-korobov-vinogradov-hurwitz-zeta-estimate
  - lem-log-derivative-bound-from-disc-zero-factorization
  - thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-heine-borel-r
  - thm-von-mangoldt-logarithmic-derivative-zeta
  - thm-euler-product-for-riemann-zeta
  - lem-zeta-three-four-one-logarithmic-derivative-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.18"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 69–70, zero-free-region part of Theorem 24.18; pole-uniform auxiliary bounds are excluded."
---

## Statement

There is an absolute constant $C>0$ such that, with $\tau=|t|+4$, the Riemann zeta function has no zero in
$$\left\{s=\sigma+it:\ \sigma>1-\frac{1}{C(\log\tau)^{2/3}(\log\log\tau)^{1/3}}\right\}.$$
The pole at $s=1$ is not a zero; no logarithmic-derivative or logarithm bound at that pole is asserted.

## Statement references

[Montgomery–Vaughan, zero-free part of Theorem 24.18](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)


## Facts & Assumptions

**Given:** A point $s=\beta+i\gamma$ with $\zeta(s)=0$.

[F1] For $\sigma\ge1/2$, $\zeta(s)-1/(s-1)$ has size at most $(\log\tau)^{2/3}\tau^{C\Theta^{3/2}}+1$, where $\Theta=\max(0,1-\sigma)$ ([[thm-korobov-vinogradov-hurwitz-zeta-estimate]] with $\alpha=1$).

[F2] After subtracting the zeros in a disc, $\zeta'/\zeta$ differs from their reciprocal sum by at most $C\log(M/|\zeta(s_0)|)/((R-r)\log(\Upsilon/R))$ ([[lem-log-derivative-bound-from-disc-zero-factorization]]).

[F3] The meromorphic continuation of $\zeta$ has no zeros on $\operatorname{Re}s\ge1$, and its only singularity there is the pole at $1$ ([[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]]).

[F4] The Laurent expansion at $s=1$ is $\zeta(s)=1/(s-1)+O(1)$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F5] For $\sigma>1$, $-\zeta'(\sigma)/\zeta(\sigma)=\sum_{p,m\ge1}(\log p)p^{-m\sigma}$, and the three-four-one inequality is nonnegative ([[thm-von-mangoldt-logarithmic-derivative-zeta]], [[lem-zeta-three-four-one-logarithmic-derivative-inequality]]).

[F6] For $\operatorname{Re}s>1$, $\zeta(s)=\prod_p(1-p^{-s})^{-1}$, with an absolutely convergent nonzero product ([[thm-euler-product-for-riemann-zeta]]).

[F7] A holomorphic function is continuous in its two real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F8] Every closed bounded real interval, in particular $[-30,30]$, is compact ([[thm-heine-borel-r]]).

## Proof

**Proof technique:** use compactness near the line at bounded heights, then apply the disc logarithmic-derivative estimate and the three-four-one inequality at high heights.

1.1 Put $h(s)=(s-1)\zeta(s)$, with its removable value at $s=1$. By [F4], $h$ is holomorphic on $\operatorname{Re}s>0$ and $h(1)=1$; [F3] gives $h(1+it)\ne0$ for every $|t|\le30$. By [F7], for each such $t$ there is $r>0$ such that $|h(s)-h(1+it)|<|h(1+it)|/2$ whenever $|s-(1+it)|<r$. The intervals $(t-r/2,t+r/2)$ from all such pairs cover $[-30,30]$. By [F8], choose a finite subcover with centers $t_j$ and radii $r_j$, and put $\eta:=\min_j r_j/2>0$. If $|\gamma|\le30$ and $|\sigma-1|<\eta$, choose a covering interval containing $\gamma$; then $|\gamma-t_j|<r_j/2$ and $|\sigma-1|\le r_j/2$, so $|\sigma+i\gamma-(1+it_j)|<r_j$. Hence $h(\sigma+i\gamma)\ne0$. The only possible point where $\zeta=h/(s-1)$ is singular is the pole $s=1$, not a zero. A candidate zero in the target strip has $\sigma<1$ by [F3], so choosing $C$ with $1/(Cv_0)<\eta$, where $v_0:=(\log4)^{2/3}(\log\log4)^{1/3}>0$, puts it in this nonvanishing neighborhood. [given, F3, F4, F7, F8, construct, algebra]

1.2 For $T=|\gamma|>30$, monotonicity gives $V(T+4)\ge v_1:=(\log34)^{2/3}(\log\log34)^{1/3}>0$. Increase $C$ so that $1/(Cv_1)<1/2$; a zero in the target region at such a height must then have $1/2<\beta<1$, since [F3] excludes $\beta\ge1$. Put $\tau=T+4$, $V=(\log\tau)^{2/3}(\log\log\tau)^{1/3}$, and $$\Upsilon=\frac{(\log\log\tau)^{2/3}}{c_1(\log\tau)^{2/3}},\qquad \sigma_0=1+\Upsilon/4,$$ where $c_1$ is sufficiently large that $\Upsilon\le1/2$ for all $T>30$ and $\Upsilon/2$ lies in a fixed right neighbourhood of $1$ on which the Laurent estimate below holds. Set $s_0=\sigma_0+i\gamma$ and $s'_0=\sigma_0+2i\gamma$. On either disc, $|\operatorname{Im}s|+4\le3\tau$ and is at least a fixed positive multiple of $\tau$, so its logarithm is comparable to $\log\tau$. The Euler product [F6] gives $$\frac1{|\zeta(s_0)|},\frac1{|\zeta(s'_0)|}\le\prod_p(1+p^{-\sigma_0})=\frac{\zeta(\sigma_0)}{\zeta(2\sigma_0)}\ll\Upsilon^{-1},$$ so both center values are $\gg\Upsilon$. On either closed $\Upsilon$-disc, [F1] gives $|\zeta(s)|\le(\log\tau)^{C_1}$: there $\Theta=\max(0,1-\operatorname{Re}s)\le\Upsilon$, and the only exponent needed in the Hurwitz bound satisfies $$\Upsilon^{3/2}\log\tau=\frac{\log\log\tau}{c_1^{3/2}}=O(\log\log\tau).$$ The pole term is bounded because the discs have heights at least $T-\Upsilon\ge29$. Thus the logarithm of the maximum modulus on either disc and the logarithms $\log(M/|\zeta(s_0)|)$, $\log(M/|\zeta(s'_0)|)$ are $O(\log\log\tau)$. [given, F1, F4, F6, algebra]

2.1 Apply [F2] with $r=\Upsilon/3$ and $R=\Upsilon/2$. At any real $1<\sigma<1+\Upsilon/2$ with $|\sigma-\sigma_0|\le\Upsilon/3$, every zero term $1/(s-\rho)$ in the disc has positive real part, since $\operatorname{Re}\rho<1<\sigma$. If $\delta:=1-\beta\ge\Upsilon/12$, then $$\delta\ge\frac{\log\log\tau}{12c_1V}\ge\frac{\log\log34}{12c_1V}\gg\frac1V.$$ Otherwise $|\beta-1|<\Upsilon/12$, and $$-\operatorname{Re}\frac{\zeta'}{\zeta}(\sigma+i\gamma)\le C V-\frac1{\sigma-\beta},\qquad -\operatorname{Re}\frac{\zeta'}{\zeta}(\sigma+2i\gamma)\le C V,$$ and the error term is $O((\log\log\tau)/\Upsilon)=O(V)$. [step 1.2, F2, algebra]

3.1 Write $\zeta(s)=1/(s-1)+h_0(s)$ near $s=1$, where $h_0$ is holomorphic by [F4]. Differentiating $\zeta=(1+(s-1)h_0)/(s-1)$ shows $-\zeta'(\sigma)/\zeta(\sigma)\le1/(\sigma-1)+C_2$ on a fixed right neighbourhood of $1$. The choice of $c_1$ in step 1.2 puts $1<\sigma<1+\Upsilon/2$ inside that neighbourhood. Insert this and step 2.1 into the nonnegative three-four-one inequality [F5]. It follows that $$\frac4{\sigma-\beta}-\frac3{\sigma-1}\le C_3V.$$ If $\delta=1-\beta<\Upsilon/12$, take $\sigma=1+6\delta$. Then $|\sigma-\sigma_0|<\Upsilon/4<\Upsilon/3$ and the left side is $$\left(\frac47-\frac12\right)\frac1\delta=\frac1{14\delta}.$$ Hence $\delta\gg1/V$. Together with the excluded cases this proves the zero-free region after enlarging $C$. [step 2.1, F4, F5, algebra] ∎

