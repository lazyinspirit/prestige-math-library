---
id: thm-l1-stability-and-smooth-data-error
kind: theorem
title: L1 stability and the smooth-data error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-uniform-and-graded-grid-l1
  - lem-l1-positive-weights-and-discrete-comparison
  - def-caputo-derivative-and-fractional-integral
  - def-higher-derivatives-and-smoothness
  - def-absolutely-continuous-function
  - def-countable-choice
  - cor-mean-value-theorem
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-real-gamma-functional-equation
  - def-real-gamma-function-by-the-euler-integral
  - thm-heine-borel-r
  - def-metric-compactness
  - cor-boundedness-theorem-r
  - lem-fractional-integral-kernel-power-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is used only to identify the Riemann integral of the continuous function $u'$ with its Lebesgue integral.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Bangti Jin, Raytcho Lazarov, and Zhi Zhou, An Analysis of the L1 Scheme for the Subdiffusion Equation with Nonsmooth Data, IMA Journal of Numerical Analysis, §§1–3
      url: https://discovery.ucl.ac.uk/1459965/1/fracL1scheme_IMA_rev.pdf
---

## Statement

Assume Countable Choice. Let $0<\alpha<1$, $\lambda\ge0$, $T>0$, and
$h=T/N$ for an integer $N\ge1$, with uniform grid $t_n=nh$. Let
$u\in C^2([0,T])$ and set $U^0=u(0)$. For $1\le n\le N$, define the
exact nodal forcing by its pointwise Caputo integral representative,
$$F^n:=\frac1{\Gamma(1-\alpha)}\int_0^{t_n}(t_n-s)^{-\alpha}u'(s)\,ds +\lambda u(t_n)\qquad(1\le n\le N).$$
The integral is finite by the kernel-power bound and boundedness of $u'$.
We use it as the pointwise representative of $D_C^\alpha u$ for this smooth
datum. Let $U^n$ be the uniform-grid L1 solution from
[[alg-uniform-and-graded-grid-l1]] using those forcing values. The proof
verifies absolute continuity of $u$, so its Caputo derivative is defined.
Put
$$C_\alpha:=\frac{1}{\Gamma(1-\alpha)}\left(\frac{1}{1-\alpha}+\frac{1+\alpha}{2}\right).$$
Then
$$\max_{0\le n\le N}|U^n-u(t_n)|\le \frac{C_\alpha T^\alpha}{\Gamma(1+\alpha)}\|u''\|_\infty h^{2-\alpha}.$$
The estimate is only asserted under the displayed $C^2$ hypothesis; its
constant is not claimed uniform as $\alpha\uparrow1$.

## Facts & Assumptions

**Given:** Countable Choice, $0<\alpha<1$, $\lambda\ge0$, $T>0$,
$h=T/N$, the uniform grid $t_n=nh$, and $u\in C^2([0,T])$.

[A1] Countable Choice: every sequence of nonempty sets admits a choice
function ([[def-countable-choice]]); it is used only in [F10].

[F1] [[alg-uniform-and-graded-grid-l1]]: the discrete derivative is the
integral of the piecewise-constant secant slope against
$(t_n-s)^{-\alpha}/\Gamma(1-\alpha)$ on each grid interval.

[F2] [[lem-l1-positive-weights-and-discrete-comparison]]: if
$\delta_{\mathcal T}^\alpha e^n+\lambda e^n=r^n$, $e^0=0$, and
$\max_n|r^n|\le R$, then
$\max_n|e^n|\le T^\alpha R/\Gamma(1+\alpha)$.

[F3] [[def-caputo-derivative-and-fractional-integral]]:
$D_C^\alpha u(t)=\Gamma(1-\alpha)^{-1}\int_0^t(t-s)^{-\alpha}u'(s)\,ds$.

[F4] [[def-higher-derivatives-and-smoothness]]: $C^2([0,T])$ makes $u'$
and $u''$ continuous, with one-sided endpoint derivatives.

[F5] [[thm-heine-borel-r]], [[def-metric-compactness]], and
[[cor-boundedness-theorem-r]]: continuous real functions on $[0,T]$ are
bounded; in particular $M_1:=\|u'\|_\infty$ and
$M_2:=\|u''\|_\infty$ are finite.

[F6] [[def-absolutely-continuous-function]]: absolute continuity means
that summed endpoint increments over any finite disjoint interval family
are small whenever the total interval length is small.

[F7] [[cor-mean-value-theorem]]: a function continuous on a closed interval
and differentiable in its interior has an interior point where its
derivative equals its secant slope.

[F8] [[thm-continuous-implies-integrable]]: a continuous function on a
compact interval is Riemann integrable.

[F9] [[thm-ftc-second-part]]: the Riemann integral of a Riemann-integrable
derivative equals the endpoint increment.

[F10] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]:
under [A1], a bounded Riemann-integrable function has the same Riemann and
Lebesgue integrals.

[F11] [[thm-real-gamma-functional-equation]]:
$\Gamma(2-\alpha)=(1-\alpha)\Gamma(1-\alpha)$.

[F12] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(x)>0$ for $x>0$.

[F13] [[lem-fractional-integral-kernel-power-integral]]:
$\int_0^h r^{-\alpha}dr=h^{1-\alpha}/(1-\alpha)$.

## Proof

1.1 Set $M_1=\|u'\|_\infty<\infty$ by [F5]. For every interval $[a,b]\subseteq[0,T]$, [F7] gives $|u(b)-u(a)|\le M_1(b-a)$. Thus for any finite disjoint interval family, the sum of endpoint increments is at most $M_1$ times the total interval length. Given $\varepsilon>0$, choose $\delta=\varepsilon/(M_1+1)$; [F6] then shows $u$ is absolutely continuous. [given, F5, F6, F7, construct]

2.1 Put $M_2=\|u''\|_\infty$. On each grid interval $[t_{k-1},t_k]$, let $m_k=(u(t_k)-u(t_{k-1}))/h$ and $e_k(s)=m_k-u'(s)$. The continuous function $u'$ is Riemann integrable by [F8]; [F9] and [F10] give $h m_k=\int_{t_{k-1}}^{t_k}u'(s)\,ds$ for the Lebesgue integral, so $\int_{t_{k-1}}^{t_k}e_k(s)\,ds=0$. By [F7] applied to $u'$, for any $r,s$ in this interval, $|u'(r)-u'(s)|\le M_2|r-s|\le M_2h$. Averaging in $r$ gives $|e_k(s)|\le M_2h$. [given, A1, F4, F5, F7, F8, F9, F10, step 1.1]

3.1 The formula [F1] and the Caputo definition [F3] now give, with $d_n:=\Gamma(1-\alpha)^{-1}\int_0^{t_n}(t_n-s)^{-\alpha}u'(s)\,ds$ and $\tau_n:=\delta_h^\alpha u(t_n)-d_n$, $$\tau_n=\frac1{\Gamma(1-\alpha)}\sum_{k=1}^n \int_{t_{k-1}}^{t_k}e_k(s)(t_n-s)^{-\alpha}\,ds.$$ [given, F1, F3, F11, F13, step 2.1, construct]

4.1 On the last interval, [F13] and [F11] bound the absolute contribution to $\tau_n$ by $$\frac{M_2h}{\Gamma(1-\alpha)}\int_0^h r^{-\alpha}\,dr =\frac{M_2h^{2-\alpha}}{\Gamma(2-\alpha)}.$$ For $k<n$, subtract the kernel value at the interval midpoint, using $\int e_k=0$ from step 2.1. The derivative of the kernel has magnitude at most $\alpha((n-k)h)^{-\alpha-1}$ on that interval, so its variation from the midpoint is at most $\alpha h((n-k)h)^{-\alpha-1}/2$. Thus the $k$th earlier contribution is at most $$\frac{\alpha M_2}{2\Gamma(1-\alpha)}h^{2-\alpha}(n-k)^{-1-\alpha}.$$ Since $x^{-1-\alpha}$ is decreasing, each term with $j\ge2$ is at most $\int_{j-1}^{j}x^{-1-\alpha}dx$; hence $\sum_{j=1}^{n-1}j^{-1-\alpha}\le1+\int_1^\infty x^{-1-\alpha}dx =1+1/\alpha$. Summing and using [F11] yields $|\tau_n|\le C_\alpha M_2h^{2-\alpha}$ for every $n$. [step 2.1, step 3.1, F5, F11, F12, F13, algebra]

4.2 Set $E^n=U^n-u(t_n)$. By the definition of $F^n$, subtracting its exact nodal identity from the uniform-grid recurrence gives $\delta_h^\alpha E^n+\lambda E^n=-\tau_n$, with $E^0=0$. [given, F1, step 3.1, algebra]

5.1 Apply [F2] with $R=C_\alpha M_2h^{2-\alpha}$ from step 4.1. This gives the claimed maximum error bound. [step 4.1, step 4.2, F2] ∎
