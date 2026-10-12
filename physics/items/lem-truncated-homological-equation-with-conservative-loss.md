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

Let $n\ge1$, $\tau>n-1$, $\alpha>0$, and let $\Omega_{\alpha,\tau}$ be the
label set of [[def-holomorphic-kam-domain-and-diophantine-labels]]. Let
$r,s>0$, $K\ge0$, and suppose one of the following periodic, zero-mean data
conditions holds.

- **(G) General case:** for each real $\nu\in\Omega_{\alpha,\tau}$,
  $v(\cdot,\cdot,\nu)$ is holomorphic on $B_r\times S_s$, with
  $$N:=\sup_{\nu\in\Omega_{\alpha,\tau}}\sup_{I\in B_r,\,\vartheta\in S_s}|v(I,\vartheta,\nu)|<\infty.$$
  This is a family of phase-holomorphic functions; no holomorphy on a complex
  parameter neighbourhood is assumed.
- **(T) Truncated case:** $h>0$, and $v$ is jointly holomorphic on
  $D_{r,s,h}(\Omega_{\alpha,\tau})$, with $N:=|v|_{r,s,h}<\infty$ and
  $v_k=0$ for $|k|_1>K$. If $K>0$, assume
  $h\le\alpha/(2K^{\tau+1})$. If $K=0$, the zero-mean datum is identically
  zero and no divisor restriction on $h$ is needed.

Put $\alpha_0:=\alpha$ in (G) and $\alpha_0:=\alpha/2$ in (T). In (G), for a
family $w$ of phase functions write
$$\|w\|^{\mathrm G}_{a,b}:=\sup_{\nu\in\Omega_{\alpha,\tau}}\sup_{I\in B_a,\,\vartheta\in S_b}|w(I,\vartheta,\nu)|;$$
this is explicitly a supremum of phase-space suprema over real labels. In (T),
norms retain the joint convention $|\cdot|_{a,b,h}$.

For every parameter of the relevant case and every nonzero $k$ in the Fourier
support of $v$, $|k\cdot\nu|\ge\alpha_0|k|_1^{-\tau}$. For nonzero $k$, define
$a_k:=v_k/(ik\cdot\nu)$ in (G), and for $0<|k|_1\le K$ in (T); set
$a_k:=0$ for $|k|_1>K$ in (T). The series
$$u(I,\vartheta,\nu):=\sum_{k\in\mathbb Z^n,\,k\ne0}a_k(I,\nu)e^{ik\cdot\vartheta}$$
converges absolutely and uniformly on $B_r\times S_{s-2\sigma}$ at every
fixed label in (G), uniformly over those real labels, and on
$D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$ in (T), whenever
$0<\sigma\le1$ and $2\sigma<s$. Its sum is phase-holomorphic at each label in
(G), jointly holomorphic in (T), periodic, zero-mean, and satisfies
$\nu\cdot\partial_\vartheta u=v$. Any two periodic holomorphic zero-mean
solutions on a common such case domain agree there.

For every $0<\sigma\le1$ with $4\sigma<s$, every $i,j\in\{1,\ldots,n\}$,
and every $0<\delta<r$, the following bounds hold in the joint case (T):
$$|u|_{r,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n)}N,\qquad |\partial_{\vartheta_j}u|_{r,s-3\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n+1)}N,$$
$$|\partial_{I_j}u|_{r-\delta,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta}\sigma^{-(\tau+n)}N,\qquad |\partial_{\vartheta_i}\partial_{\vartheta_j}u|_{r,s-4\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n+2)}N,$$
$$|\partial_{\vartheta_i}\partial_{I_j}u|_{r-\delta,s-3\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta}\sigma^{-(\tau+n+1)}N,\qquad |\partial_{I_i}\partial_{I_j}u|_{r-\delta,s-2\sigma,h}\le\frac{C_{n,\tau}}{\alpha_0\,\delta^2}\sigma^{-(\tau+n)}N.$$
In (G), the same six inequalities hold with each joint norm $|w|_{a,b,h}$
replaced by the explicit supremum $\|w\|^{\mathrm G}_{a,b}$; thus no output
bound is a norm on the empty set $O_0(\Omega_{\alpha,\tau})$.

In (T), $u_k=0$ for $|k|_1>K$; in particular $u$ and its displayed
derivatives have the same Fourier support as $v$.

## Facts & Assumptions

**Given:** The dimension $n$, exponent $\tau>n-1$, constant $\alpha>0$, label
set $\Omega_{\alpha,\tau}$, widths $r,s$ and (in (T)) $h>0$, cutoff $K$, and
the periodic zero-mean data of case (G) or (T), with the bound $N$ defined in
the corresponding case above.

[F1] The definition of $D_{r,s,h}$, holomorphy, Fourier coefficients, angular
mean, Fourier cutoff, and the $(\alpha,\tau)$-Diophantine condition
$|k\cdot\nu|\ge\alpha|k|_1^{-\tau}$ for every nonzero $k$
([[def-holomorphic-kam-domain-and-diophantine-labels]]).

[F2] In (G), for each fixed label the phase Fourier series of $v$ equals $v$
on each smaller strip, its coefficients obey
$|v_k|\le N e^{-(s-\rho)|k|_1}$ for $0<\rho<s$, and it can be
differentiated termwise locally uniformly. In (T), the same assertions hold
jointly on smaller action, angle and parameter domains
([[lem-cauchy-fourier-and-lattice-shell-bounds]] clauses 1 and 2).

[F3] The lattice sums include
$\sum_{k\ne0}|k|_1^\tau e^{-\sigma|k|_1}\le
C_{n,\tau}\sigma^{-(\tau+n)}$ for $0<\sigma\le1$, and the corresponding
sums with one or two extra powers of $|k|_1$
([[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 3).

[F4] Locally uniformly convergent holomorphic series may be differentiated
termwise, and their sums are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]],
[[cor-locally-uniformly-convergent-holomorphic-series]],
[[thm-power-series-expansion-in-several-complex-variables]]).

## Proof

**Given:** In (T), every quotient is formed only for retained modes
$0<|k|_1\le K$; discarded coefficients are zero. In (G), each fixed parameter
is a real Diophantine label and all nonzero modes are retained.

**Proof technique:** direct; estimate the divisors, sum the phase Fourier series,
and use coordinate Cauchy estimates for its action derivatives.

1.1 *Small divisors.* In (G), $|k\cdot\nu|\ge\alpha|k|_1^{-\tau}$ for each [given, F1, algebra]
real label and every nonzero mode. In (T), fix $\nu\in O_h(\Omega_{\alpha,\tau})$
and a retained mode $0<|k|_1\le K$. There is a real label $\nu_0$ with
$|\nu-\nu_0|_\infty<h$, so
$$|k\cdot\nu|\ge\alpha|k|_1^{-\tau}-|k|_1h\ge(\alpha/2)|k|_1^{-\tau},$$
since $h|k|_1^{\tau+1}\le hK^{\tau+1}\le\alpha/2$. No discarded mode is
divided by its divisor. [given, F1, algebra]

2.1 *Convergence and holomorphy.* Let $0<\sigma\le1$ with $2\sigma<s$. For [step 1.1, F2, F3, F4, algebra]
each label in (G), and uniformly over those labels by the definition of $N$,
or on the joint domain in (T), [F2] and step 1.1 give
$$\sum_{k\ne0}\left|\frac{v_k}{ik\cdot\nu}e^{ik\cdot\vartheta}\right|\le\frac{N}{\alpha_0}\sum_{k\ne0}|k|_1^\tau e^{-\sigma|k|_1}\le\frac{C_{n,\tau}}{\alpha_0}\sigma^{-(\tau+n)}N$$
by [F3]. Thus the series is absolutely and uniformly convergent on the
specified phase strip (jointly in all variables in (T)); it is holomorphic in
the phase variables in (G) and jointly holomorphic in (T), by [F4]. Each term
has zero angular mean, hence $[u]=0$. Taking the appropriate supremum gives
the first bound in clause 2, using $\|\cdot\|^{\mathrm G}$ in (G). [step 1.1, F2, F3, F4, algebra]

3.1 *The equation and angular derivatives.* On every strictly smaller strip, [step 2.1, F2, F3, F4, algebra]
the differentiated series is locally uniformly convergent by [F2] and [F3].
Termwise differentiation yields
$$\partial_{\vartheta_j}u=\sum_{k\ne0}\frac{v_k k_j}{k\cdot\nu}e^{ik\cdot\vartheta},\qquad \nu\cdot\partial_\vartheta u=\sum_{k\ne0}v_ke^{ik\cdot\vartheta}=v-[v]=v,$$
where the last equality follows from [F2]. The extra factor $|k_j|\le|k|_1$
and the two angle margins in clause 2 give the stated one- and two-angle
bounds using [F3]. [step 2.1, F2, F3, F4, algebra]

3.2 *Action derivatives.* By [F2], $v_k$ is holomorphic in the action on $B_r$ [step 1.1, step 2.1, F2, F3, algebra]
and $|v_k|\le Ne^{-(s-\rho)|k|_1}$. The coordinate Cauchy estimates of
[[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 2, with action margin
$\delta$, give on $B_{r-\delta}$
$$|\partial_{I_j}v_k|\le\frac{N}{\delta}e^{-(s-\rho)|k|_1},\qquad |\partial_{I_i}\partial_{I_j}v_k|\le\frac{2N}{\delta^2}e^{-(s-\rho)|k|_1}.$$
These estimates are pointwise at every label in (G), uniformly by $N$, and
jointly on the smaller parameter domain in (T). Division by the divisor and
summation using [F3] prove the action and mixed action-angle bounds in clause
2, with the explicit label supremum in (G). The locally uniform convergence
also justifies termwise differentiation. [step 1.1, step 2.1, F2, F3, algebra]

3.3 *Truncation.* In (T), $v_k=0$ for $|k|_1>K$ and the solution coefficient [given, step 2.1, algebra]
is defined to be zero there, so every displayed derivative has support in
$|k|_1\le K$. [given, step 2.1, algebra]

4.1 *Uniqueness.* For a fixed real label in (G), Fourier coefficients of any [step 1.1, step 2.1, step 3.1, F2, algebra]
zero-mean phase-holomorphic solution $w$ obey
$(ik\cdot\nu)w_k=v_k$ for every nonzero mode, so every coefficient agrees with
$u$. In (T), the same comparison applies on the open complex parameter domain.
For retained modes, equality follows from step 1.1. For a discarded mode,
$v_k=0$ and $(k\cdot\nu)w_k=0$; away from the hyperplane $k\cdot\nu=0$,
$w_k=0$, and continuity extends this across that hyperplane because its
complement is dense in each open ball. The zero coefficient vanishes by the
zero-mean condition. Fourier uniqueness from [F2] gives equality on the common
domain in either case. [step 1.1, step 2.1, step 3.1, F2, algebra] ∎

## Remarks

- **What "truncated" refers to.** Case (T) is the situation in the KAM step: the
  unknown is solved only for the Fourier-truncated data, and the parameter margin
  $h$ has to be small enough that the Diophantine bound survives on the *complex*
  parameter neighbourhood, at the price of replacing $\alpha$ by $\alpha/2$. No
  loss in $\alpha$ occurs in the parameter-free case (G).
- **Conservatism.** The exponents are exactly those proved by summing the lattice
  shells; the number $\tau+n+2$ appearing in the second derivatives is the largest
  loss used downstream, and no sharper small-divisor theorem is invoked.
