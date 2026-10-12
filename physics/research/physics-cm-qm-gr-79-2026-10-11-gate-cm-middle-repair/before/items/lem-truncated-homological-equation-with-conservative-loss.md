---
id: lem-truncated-homological-equation-with-conservative-loss
kind: lemma
title: "The linear homological equation $\\nu\\cdot\\partial_\\vartheta u=v$ on a Diophantine label set, with uniform parameter bounds and conservative loss"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, def-directional-and-partial-derivatives, thm-power-series-expansion-in-several-complex-variables, thm-weierstrass-convergence-holomorphic-functions, cor-locally-uniformly-convergent-holomorphic-series]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  cor-locally-uniformly-convergent-holomorphic-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §2-§3 (solution of $\\langle\\omega,\\partial_\\vartheta u\\rangle=v$ by Fourier series, with the uniform small-divisor bound on $O_h$ for $h\\le\\alpha K^{-\\tau-1}/2$), PDF pp. 8-19."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.4 (estimates for the linearized (cohomological) equation $\\omega\\cdot\\partial_\\theta h=g$), printed pp. 36-40."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $\tau>n-1$, $\alpha>0$, let $\Omega\subseteq\mathbb R^n$ carry its
$(\alpha,\tau)$-label set $\Omega_{\alpha,\tau}$
([[def-holomorphic-kam-domain-and-diophantine-labels]]), and let $r>0$, $s>0$,
$K\ge0$ and $h\ge0$. Suppose $v$ is holomorphic on $D_{r,s,h}(\Omega_{\alpha,\tau})$
with $[v]=0$ and finite norm $N:=|v|_{r,s,h}$, and suppose one of the following
two standing hypotheses holds:

- **(G) general case:** $h=0$; or
- **(T) truncated case:** $v_k=0$ for every $|k|_1>K$, and $h\le\alpha/(2K^{\tau+1})$
  (so that $K\ge1$ whenever $h>0$).

Then there is a constant $\alpha_0\ge\alpha/2$ (namely $\alpha_0=\alpha$ in case
(G) and $\alpha_0=\alpha/2$ in case (T)) such that
$|k\cdot\nu|\ge\alpha_0|k|_1^{-\tau}$ for every $\nu\in O_h(\Omega_{\alpha,\tau})$
and every $k$ in the Fourier support of $v$, and:

1. **Existence, uniqueness and the equation.** The series
$$u(I,\vartheta,\nu):=\sum_{k\in\mathbb Z^n,\,k\ne0} \frac{v_k(I,\nu)}{i\,k\cdot\nu}\,e^{ik\cdot\vartheta}$$
   converges absolutely and uniformly on $D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$
   for every $0<\sigma\le\min(s/2,1)$, its sum $u$ is holomorphic there with
   $[u]=0$, and $\nu\cdot\partial_\vartheta u:=\sum_j\nu_j\partial_{\vartheta_j}u=v$
   on that domain. Any two holomorphic zero-mean solutions of
   $\nu\cdot\partial_\vartheta w=v$ on a common domain agree there.
2. **Bounds.** For every $0<\sigma\le\min(s/2,1)$ and all $i,j,\delta>0$ with
   $\delta<r$:
$$|u|_{r,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n)}N,\qquad |\partial_{\vartheta_j}u|_{r,s-3\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n+1)}N,$$
$$|\partial_{I_j}u|_{r-\delta,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta}\sigma^{-(\tau+n)}N,\qquad |\partial_{\vartheta_i}\partial_{\vartheta_j}u|_{r,s-4\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n+2)}N,$$
$$|\partial_{\vartheta_i}\partial_{I_j}u|_{r-\delta,s-3\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta}\sigma^{-(\tau+n+1)}N,\qquad |\partial_{I_i}\partial_{I_j}u|_{r-\delta,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta^2}\sigma^{-(\tau+n)}N .$$
3. **Truncation.** In case (T), the solution $u$ has $u_k=0$ for $|k|_1>K$;
   in particular $u$ and its derivatives displayed in clause 2 have the same
   Fourier support as $v$.


## Facts & Assumptions

**Given:** The dimension $n$, the exponent $\tau>n-1$, the constant $\alpha>0$,
the label set $\Omega_{\alpha,\tau}$, the widths $r,s,h$, the cutoff $K$, and the
zero-mean holomorphic function $v$ with $N=|v|_{r,s,h}$, together with case (G)
or (T).

[F1] Definitions: $D_{r,s,h}$, holomorphy, sup-norms, Fourier coefficients,
$[v]$, $v_k$, the Fourier cutoff, and the $(\alpha,\tau)$-Diophantine condition
$|k\cdot\nu|\ge\alpha|k|_1^{-\tau}$ for all nonzero $k$
([[def-holomorphic-kam-domain-and-diophantine-labels]]).

[F2] Fourier representation and decay: for $0<\sigma\le\min(s/2,1)$ the series
$\sum_kv_ke^{ik\cdot\vartheta}$ equals $v$ on $B_r\times S_{s-2\sigma}\times O_h$
(with absolute and uniform convergence), the coefficients satisfy
$|v_k|\le Ne^{-(s-\sigma)|k|_1}$, and the series may be differentiated termwise
([[lem-cauchy-fourier-and-lattice-shell-bounds]], clauses 1 and 2).

[F3] Lattice and exponential sums: for $0<\sigma\le1$,
$\sum_{k\ne0}|k|_1^{\tau}e^{-\sigma|k|_1}\le C_{n,\tau}\sigma^{-(\tau+n)}$ and
all the related sums of [[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 3.

[F4] Uniform limits and termwise differentiation of locally uniformly convergent
series of holomorphic functions; the Fourier coefficients of the limit are the
termwise limits ([[thm-weierstrass-convergence-holomorphic-functions]],
[[cor-locally-uniformly-convergent-holomorphic-series]],
[[thm-power-series-expansion-in-several-complex-variables]]).

## Proof

**Proof technique:** direct; estimate the small divisors on the complex parameter
neighbourhood, sum the absolutely convergent Fourier series and differentiate it
termwise.

1.1 *Small divisors.* Let $\nu\in O_h(\Omega_{\alpha,\tau})$ and $k\in\mathbb Z^n\setminus\{0\}$ with $|k|_1\le K$. By definition of $O_h$ there is $\nu_0\in\Omega_{\alpha,\tau}$ with $|\nu-\nu_0|_\infty<h$, so $|k\cdot\nu|\ge|k\cdot\nu_0|-|k\cdot(\nu-\nu_0)|\ge\alpha|k|_1^{-\tau}-|k|_1h$. In case (G), $h=0$ and this is at least $\alpha|k|_1^{-\tau}$, so $\alpha_0=\alpha$ works. In case (T), $|k|_1\le K$ and $h|k|_1\le hK^{\tau+1}|k|_1^{-\tau}\le\frac\alpha2|k|_1^{-\tau}$ because $h\le\alpha/(2K^{\tau+1})$ and $\tau+1>0$; hence $|k\cdot\nu|\ge\frac\alpha2|k|_1^{-\tau}$, and $\alpha_0=\alpha/2$ works. [given, F1, algebra]

2.1 *Convergence and holomorphy.* Let $0<\sigma\le\min(s/2,1)$. On $B_r\times S_{s-2\sigma}\times O_h$, using [F2] and step 1.1, $\sum_{k\ne0}\Bigl|\frac{v_k}{ik\cdot\nu}e^{ik\cdot\vartheta}\Bigr| \le\frac{N}{\alpha_0}\sum_{k\ne0}|k|_1^{\tau}e^{-\sigma|k|_1} \le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n)}N<+\infty$ by [F3]. Each summand is holomorphic on the domain, so the partial sums are holomorphic and converge locally uniformly; by [F4] the sum $u$ is holomorphic on $B_r\times S_{s-2\sigma}\times O_h$ and the displayed bound is the first inequality of clause 2. Each summand has zero angular mean, so $[u]=0$. [step 1.1, F2, F3, F4, algebra]

3.1 *The equation.* The differentiated series $\sum_{k\ne0}\frac{v_k}{(ik\cdot\nu)}\,ik_je^{ik\cdot\vartheta}$ converges absolutely and uniformly on the same domain by the estimate of step 2.1 with $|k_j|\le|k|_1$ in place of the weight, so [F4] (termwise differentiation) gives $\partial_{\vartheta_j}u=\sum_{k\ne0}\frac{v_k}{k\cdot\nu}\,k_j\,e^{ik\cdot\vartheta}, \qquad\text{hence}\qquad \nu\cdot\partial_\vartheta u=\sum_{k\ne0}v_ke^{ik\cdot\vartheta}=v-[v]=v,$ because the Fourier series of $v$ converges to $v$ on the domain by [F2] and $[v]=0$. [step 2.1, F2, F4, algebra]

3.2 *Derivative bounds.* Each displayed derivative of $u$ has Fourier coefficients of the form $k_j\,\frac{v_k}{k\cdot\nu},\qquad \frac{\partial_{I_j}v_k}{k\cdot\nu},\qquad k_ik_j\frac{v_k}{k\cdot\nu},\qquad k_i\frac{\partial_{I_j}v_k}{k\cdot\nu},\qquad \frac{\partial_{I_i}\partial_{I_j}v_k}{k\cdot\nu},$ so the absolute convergence and the bounds follow from [F3], step 1.1, and the Cauchy bounds $|\partial_{I_j}v_k|\le N e^{-\sigma|k|_1}/\delta$ obtained from [F2] clause 2 applied to the coefficient functions $v_k$, which are holomorphic on $B_r\times O_h$ with $|v_k|\le Ne^{-\sigma|k|_1}$: $\sum_{k\ne0}|k|_1^{\tau+1}e^{-\sigma|k|_1}\le C_{n,\tau}\sigma^{-(\tau+n+1)},\qquad \sum_{k\ne0}\frac{|k|_1^{\tau}}{\delta}e^{-\sigma|k|_1}\le\frac{C_{n,\tau}}{\delta}\sigma^{-(\tau+n)}.$ Taking suprema on the domains with the indicated extra margins (each differentiation consumes one more $\sigma$ of angular margin or $\delta$ of action margin, by [F2] clause 2) gives clause 2. [step 1.1, step 2.1, F2, F3, algebra]

4.1 *Uniqueness.* If $w$ is holomorphic and zero-mean on a common domain with $\nu\cdot\partial_\vartheta w=v$, then its Fourier coefficients satisfy $(ik\cdot\nu)w_k=v_k$ for every $k\ne0$ (compare coefficients using [F2] for $w$ and $v$ on a smaller domain); since $ik\cdot\nu\ne0$ by step 1.1 and $w_0=[w]=0$, all coefficients of $w$ and of the $u$ of step 2.1 agree, so $w=u$ by the Fourier representation. [step 2.1, step 3.1, F2, algebra]

5.1 *Truncation.* In case (T), $v_k=0$ for $|k|_1>K$, so each coefficient $u_k=v_k/(ik\cdot\nu)$ vanishes there and every displayed derivative of $u$ has Fourier support inside $|k|_1\le K$. [given, step 2.1, algebra] ∎

## Remarks

- **What "truncated" refers to.** Case (T) is the situation in the KAM step: the
  unknown is solved only for the Fourier-truncated data, and the parameter margin
  $h$ has to be small enough that the Diophantine bound survives on the *complex*
  parameter neighbourhood, at the price of replacing $\alpha$ by $\alpha/2$. No
  loss in $\alpha$ occurs in the parameter-free case (G).
- **Conservatism.** The exponents are exactly those proved by summing the lattice
  shells; the number $\tau+n+2$ appearing in the second derivatives is the largest
  loss used downstream, and no sharper small-divisor theorem is invoked.
