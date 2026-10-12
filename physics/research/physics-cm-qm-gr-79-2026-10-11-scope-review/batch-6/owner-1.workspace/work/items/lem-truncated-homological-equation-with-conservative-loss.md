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
$K\ge0$ and $h\ge0$. Suppose one of the following two hypotheses holds, always with $2\pi$-periodicity in the angular variables and zero angular mean:

- **(G) general case:** $h=0$. For each fixed real $\nu\in\Omega_{\alpha,\tau}$, the function $v(\cdot,\cdot,\nu)$ is holomorphic on $B_r\times S_s$, with a finite uniform bound $N:=\sup_{\nu,I,\vartheta}|v(I,\vartheta,\nu)|$. This is a parameter-free convention local to this item: the phase domain is $B_r\times S_s$ at that fixed real label, and no holomorphy in a nonopen real parameter set is asserted.
- **(T) truncated case:** $v$ is jointly holomorphic on $D_{r,s,h}(\Omega_{\alpha,\tau})$ with finite norm $N:=|v|_{r,s,h}$, and $v_k=0$ for $|k|_1>K$. For $K>0$, assume $h\le\alpha/(2K^{\tau+1})$. If $K=0$, the zero-mean datum is identically zero and no divisor restriction on $h$ is needed.

Then there is a constant $\alpha_0\ge\alpha/2$ (namely $\alpha_0=\alpha$ in case
(G) and $\alpha_0=\alpha/2$ in case (T)) such that
$|k\cdot\nu|\ge\alpha_0|k|_1^{-\tau}$ for every parameter in the specified case (real $\nu\in\Omega_{\alpha,\tau}$ in (G), complex $\nu\in O_h(\Omega_{\alpha,\tau})$ in (T)) and every $k$ in the Fourier support of $v$, and:

1. **Existence, uniqueness and the equation.** For nonzero $k$, define $a_k:=v_k/(ik\cdot\nu)$ in (G), and for $0<|k|_1\le K$ in (T); set $a_k:=0$ for $|k|_1>K$ in (T). Thus discarded divisors are never used. The series
$$u(I,\vartheta,\nu):=\sum_{k\in\mathbb Z^n,\,k\ne0}a_k(I,\nu)e^{ik\cdot\vartheta}$$
   converges absolutely and uniformly on $B_r\times S_{s-2\sigma}$ for every fixed real case-(G) label, and on $D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$ in (T), whenever $0<\sigma\le1$ and $2\sigma<s$. Its sum is phase-holomorphic in (G), jointly holomorphic in (T), periodic and zero-mean, and satisfies $\nu\cdot\partial_\vartheta u=v$. Any two periodic holomorphic zero-mean solutions on a common such case domain agree there.
2. **Bounds.** For every $0<\sigma\le1$ with $4\sigma<s$, every $i,j\in\{1,\ldots,n\}$ and every $0<\delta<r$:
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

[F2] Fourier representation and decay: for $0<\sigma\le\min(s/2,1)$ the phase Fourier series $\sum_kv_ke^{ik\cdot\vartheta}$ equals $v$ on the smaller strip for every specified case parameter
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

**Given:** In case (T) every quotient in the proof is formed only for retained modes $0<|k|_1\le K$; all discarded coefficients are zero by definition. In (G) the parameter is a fixed real Diophantine label and all nonzero modes are retained.

**Proof technique:** direct; estimate the small divisors on the complex parameter
neighbourhood, sum the absolutely convergent Fourier series and differentiate it
termwise.

1.1 *Small divisors.* In (G), the fixed real parameter belongs to $\Omega_{\alpha,\tau}$, so $|k\cdot\nu|\ge\alpha|k|_1^{-\tau}$ for every nonzero mode, without a cutoff restriction. In (T), fix $\nu\in O_h(\Omega_{\alpha,\tau})$ and $0<|k|_1\le K$. There is a real label $\nu_0$ with $|\nu-\nu_0|_\infty<h$. Thus $|k\cdot\nu|\ge\alpha|k|_1^{-\tau}-|k|_1h\ge(\alpha/2)|k|_1^{-\tau}$, since $h|k|_1^{\tau+1}\le hK^{\tau+1}\le\alpha/2$. Only these retained modes are divided by their divisors; all other coefficients in (T) are defined as zero. [given, F1, algebra]

2.1 *Convergence and holomorphy.* Let $0<\sigma\le1$ with $2\sigma<s$. On $B_r\times S_{s-2\sigma}\times O_h$, using [F2] and step 1.1, $\sum_{k\ne0}\Bigl|\frac{v_k}{ik\cdot\nu}e^{ik\cdot\vartheta}\Bigr| \le\frac{N}{\alpha_0}\sum_{k\ne0}|k|_1^{\tau}e^{-\sigma|k|_1} \le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n)}N<+\infty$ by [F3]. In (G) each summand is holomorphic in the phase variables for the fixed label; in (T) each retained summand is jointly holomorphic. The same uniform estimate holds on every case domain, so the partial sums are holomorphic and converge locally uniformly; by [F4] the sum $u$ is holomorphic on $B_r\times S_{s-2\sigma}\times O_h$ and the displayed bound is the first inequality of clause 2. Each summand has zero angular mean, so $[u]=0$. [step 1.1, F2, F3, F4, algebra]

3.1 *The equation.* The differentiated series $\sum_{k\ne0}\frac{v_k}{(ik\cdot\nu)}\,ik_je^{ik\cdot\vartheta}$ converges absolutely and uniformly on the same domain by the estimate of step 2.1 with $|k_j|\le|k|_1$ in place of the weight, so [F4] (termwise differentiation) gives $\partial_{\vartheta_j}u=\sum_{k\ne0}\frac{v_k}{k\cdot\nu}\,k_j\,e^{ik\cdot\vartheta}, \qquad\text{hence}\qquad \nu\cdot\partial_\vartheta u=\sum_{k\ne0}v_ke^{ik\cdot\vartheta}=v-[v]=v,$ because the Fourier series of $v$ converges to $v$ on the domain by [F2] and $[v]=0$. [step 2.1, F2, F4, algebra]

3.2 *Derivative bounds.* Each displayed derivative of $u$ has Fourier coefficients of the form $k_j\,\frac{v_k}{k\cdot\nu},\qquad \frac{\partial_{I_j}v_k}{k\cdot\nu},\qquad k_ik_j\frac{v_k}{k\cdot\nu},\qquad k_i\frac{\partial_{I_j}v_k}{k\cdot\nu},\qquad \frac{\partial_{I_i}\partial_{I_j}v_k}{k\cdot\nu},$ so the absolute convergence and the bounds follow from [F3], step 1.1, and the Cauchy bounds $|\partial_{I_j}v_k|\le N e^{-(s-\sigma)|k|_1}/\delta$ obtained from [F2] clause 2 applied to the coefficient functions $v_k$, which are holomorphic on $B_r\times O_h$ with $|v_k|\le Ne^{-(s-\sigma)|k|_1}$: $\sum_{k\ne0}|k|_1^{\tau+1}e^{-\sigma|k|_1}\le C_{n,\tau}\sigma^{-(\tau+n+1)},\qquad \sum_{k\ne0}\frac{|k|_1^{\tau}}{\delta}e^{-\sigma|k|_1}\le\frac{C_{n,\tau}}{\delta}\sigma^{-(\tau+n)}.$ Taking suprema on the domains with the indicated extra margins (each differentiation consumes one more $\sigma$ of angular margin or $\delta$ of action margin, by [F2] clause 2) gives clause 2. [step 1.1, step 2.1, F2, F3, algebra]

4.1 *Uniqueness.* In (G), comparing Fourier coefficients of any zero-mean phase-holomorphic solution at the fixed Diophantine label gives $(ik\cdot\nu)w_k=v_k$ for every nonzero mode; all divisors are nonzero, so its coefficients equal those of $u$. In (T), the same comparison holds on an open complex parameter domain. Retained-mode coefficients equal $a_k$ by step 1.1. For a discarded mode, $v_k=0$ and $(k\cdot\nu)w_k=0$; off the complex hyperplane $k\cdot\nu=0$, the coefficient is zero. Its continuity in the parameter extends that value across the hyperplane, since the complement of a nontrivial linear hyperplane is dense in every open ball. The coefficient $w_0$ is zero by the zero-mean assumption. Thus all coefficients agree in either case, and the Fourier representation in [F2] gives equality of the solutions on their common domain. [step 1.1, step 2.1, step 3.1, F2, algebra]

5.1 *Truncation.* In case (T), $v_k=0$ for $|k|_1>K$, so each coefficient $u_k$ is defined as zero there and every displayed derivative of $u$ has Fourier support inside $|k|_1\le K$. [given, step 2.1, algebra] ∎

## Remarks

- **What "truncated" refers to.** Case (T) is the situation in the KAM step: the
  unknown is solved only for the Fourier-truncated data, and the parameter margin
  $h$ has to be small enough that the Diophantine bound survives on the *complex*
  parameter neighbourhood, at the price of replacing $\alpha$ by $\alpha/2$. No
  loss in $\alpha$ occurs in the parameter-free case (G).
- **Conservatism.** The exponents are exactly those proved by summing the lattice
  shells; the number $\tau+n+2$ appearing in the second derivatives is the largest
  loss used downstream, and no sharper small-divisor theorem is invoked.
