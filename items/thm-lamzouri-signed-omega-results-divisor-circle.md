---
id: thm-lamzouri-signed-omega-results-divisor-circle
kind: theorem
title: "Lamzouri Signed Omega Results for Divisor and Circle Errors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps: [def-dirichlet-divisor-error-term, def-gauss-circle-error-term, def-countable-choice, lem-gamma-sector-resonance-for-positive-frequency-series, lem-divisor-and-circle-largest-coefficient-sums, lem-positive-radius-smoothed-voronoi-error-transforms]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is required by the radial Voronoï and endpoint-transfer proof branch; no full Axiom of Choice is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Youness Lamzouri, “Sharp Omega Results for the Divisor and Circle Problems”"
      url: "https://arxiv.org/pdf/2605.21476v1"
      locator: "Theorem 1.1 and §3; arXiv v1 dated 20 May 2026"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "Chapter 3, Voronoï summation background"
verification:
  precheck: n/a
---

## Statement

Assume Countable Choice. For real-valued functions $f$ and positive-valued $g$,
write $f=\Omega^+(g)$ when
$\limsup_{x\to\infty}f(x)/g(x)>0$, and write $f=\Omega^-(g)$ when
$\liminf_{x\to\infty}f(x)/g(x)<0$. Put $\log_2x=\log(\log x)$. Lamzouri’s
Theorem 1.1 states
$$\Delta(x)=\Omega^+\!\left((x\log x)^{1/4} (\log_2x)^{\frac34(2^{4/3}-1)}\right), \qquad P(x)=\Omega^-\!\left((x\log x)^{1/4} (\log_2x)^{\frac34(2^{1/3}-1)}\right).$$


## Statement references

[Youness Lamzouri, “Sharp Omega Results for the Divisor and Circle Problems”](https://arxiv.org/pdf/2605.21476v1)

[Aleksandar Ivić, Topics in Recent Zeta-Function Theory](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the other hypotheses in the Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F1] [[def-dirichlet-divisor-error-term]]: For each positive integer $n$, put $d(n):=\tau(n)$, the number of positive divisors of $n$. Let $\gamma$ be the Euler–Mascheroni constant. All sums indexed by $n$ are over positive integers. For every real $x\ge1$,
$$\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.$$

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

[F3] [[lem-gamma-sector-resonance-for-positive-frequency-series]] gives the stated sector resonance for arbitrary positive frequencies, without any independence hypothesis.

[F4] [[lem-divisor-and-circle-largest-coefficient-sums]] supplies the lower bounds for the sums of the largest $M$ coefficients, and selects them in $n\le CM^3$.

[F5] [[lem-positive-radius-smoothed-voronoi-error-transforms]] supplies a nonnegative smooth radius averaging kernel with nonnegative Fourier transform, both absolutely convergent smoothed formulas and their explicit errors.

## Proof

**Proof technique:** positive smoothing followed by sectorial resonance.

1.1 Let $X$ be large, $M=\lfloor(\log X)/4\rfloor$, $h=X^{-31/20}$ and $Y=\sqrt X$, $U=X^3$. Fix the kernel in [F5], and define the two nonnegative absolutely summable coefficient sequences [F5, given, algebra]
$$f_d(n)=d(n)n^{-3/4}\widehat w(2h\sqrt n),\qquad f_c(n)=r_2(n)n^{-3/4}\widehat w(h\sqrt n).$$
Their respective frequencies are $2\sqrt n$ and $\sqrt n$. By [F5] their total masses are $O(X^{(31/20)(1/2+1/100)})=O(X^{0.791})$. Since $\widehat w(0)=1$ and it is continuous, it is at least $1/2$ near zero. The $M$ largest unweighted coefficients selected by [F4] have indices at most $CM^3$, and therefore their weights are at least $1/2$ for all sufficiently large $X$. Consequently their weighted sums are bounded below by [F4, F5, step 1.1, algebra]
$$c(\log X)^{1/4}(\log\log X)^{3(2^{4/3}-1)/4},\quad c(\log X)^{1/4}(\log\log X)^{3(2^{1/3}-1)/4}$$
for the divisor and circle sequences respectively. [A1, F4, F5, given, algebra]

2.1 Apply [F3] separately with these selected index sets, $r=1/3$, $\alpha=9/20$, $\delta=1/10$ and $\beta=-\pi/4$ for the divisor sequence and $+\pi/4$ for the circle sequence. The numerical sector condition holds: $\sqrt2(1-\tan(9\pi/40))/2>1/10$. Indeed $9\pi/40<99/140$ using $\pi<22/7$; alternating Taylor bounds at $99/140$ give $\tan(9\pi/40)<6/7$, and $\sqrt2>7/5$. The resonance error is [F3, F5, step 1.1, algebra]
$$O\!\left(X^{0.791}2^M\left(\frac{\sqrt X\log(X^3)}{X^3}\right)^{9/20}\right)=o(1),$$
since $2^M\le X^{(\log2)/4}$ and $0.791+(\log2)/4-(5/2)(9/20)<0$. The latter is immediate from $\log2<7/10$, itself following from the first four positive exponential-series terms at $7/10$. Thus for each sufficiently large $X$ there is a divisor radius $t_d\in[Y,U]$ and a circle radius $t_c\in[Y,U]$ for which the respective oscillatory sums in [F5] are at least a fixed positive multiple of the corresponding bound in step 1.1. The two radii need not coincide. [F3, F4, F5, step 1.1, algebra]

3.1 Insert the divisor radius into [F5]. The positive leading coefficient and the $O(1+t_d^{-1/2}h^{1/2-1/100})$ error show that $D_h(t_d)$ is at least a fixed positive multiple of [F5, step 2.1, algebra]
$$t_d^{1/2}(\log X)^{1/4}(\log\log X)^{3(2^{4/3}-1)/4}.$$
At the circle radius, the leading minus sign in [F5] gives the corresponding negative upper bound for $C_h(t_c)$, with exponent $3(2^{1/3}-1)/4$. Both bounds grow in modulus; the bounded and vanishing error terms are negligible. [A1, F5, step 2.1, algebra]

4.1 The averaging kernel is nonnegative and has mass one. Therefore some radius in $[t_d-h,t_d+h]$ has the indicated positive divisor error, and some radius in $[t_c-h,t_c+h]$ has the indicated negative circle error: otherwise the integral would contradict step 3.1. The error functions are bounded on these intervals and choosing a point with at least half the strict average bound is sufficient; no extremum need be attained. Their squared radii tend to infinity. For either chosen radius $s$, $\sqrt X-1\le s\le X^3+1$, so $\log(s^2)\asymp\log X$ and $\log_2(s^2)\asymp\log\log X$ uniformly. Also $s^{1/2}\asymp t_j^{1/2}$. This gives the positive $\Omega$ claim for $\Delta$ and negative $\Omega$ claim for $P$ at exactly the powers in the Statement. Choosing one radius for each integer $X\ge X_0$ uses Countable Choice, as already assumed; equivalently approximate each positive average by a rational radius avoiding jumps. [A1, F1, F2, F5, step 3.1, algebra] ∎
