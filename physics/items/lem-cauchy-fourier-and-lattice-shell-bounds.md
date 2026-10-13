---
id: lem-cauchy-fourier-and-lattice-shell-bounds
kind: lemma
title: "Fourier decay, Cauchy derivative bounds, lattice shell counts and the exponential small-divisor sums on action-angle neighbourhoods"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-holomorphic-kam-domain-and-diophantine-labels, cor-goursat-rectangle-theorem, prop-reversal-and-concatenation-of-complex-line-integrals, def-complex-line-integral-over-a-rectifiable-path, lem-cauchy-estimates-on-concentric-subdiscs, thm-power-series-expansion-in-several-complex-variables, thm-weierstrass-convergence-holomorphic-functions, cor-locally-uniformly-convergent-holomorphic-series, thm-fejer-uniform-convergence-for-continuous-periodic-functions, thm-identity-theorem-in-several-complex-variables, def-sections-and-iterated-riemann-integrals, thm-riemann-fubini-on-product-rectangles, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-geometric-series, def-interval, def-metric-ball, def-directional-and-partial-derivatives]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  cor-goursat-rectangle-theorem: mathematical-premise
  prop-reversal-and-concatenation-of-complex-line-integrals: mathematical-premise
  def-complex-line-integral-over-a-rectifiable-path: mathematical-premise
  lem-cauchy-estimates-on-concentric-subdiscs: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  cor-locally-uniformly-convergent-holomorphic-series: mathematical-premise
  thm-fejer-uniform-convergence-for-continuous-periodic-functions: mathematical-premise
  thm-identity-theorem-in-several-complex-variables: mathematical-premise
  def-sections-and-iterated-riemann-integrals: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1-§2 (contour shift for Fourier coefficients $|g_k|\\le|g|_s e^{-s|k|_1}$; lattice shell estimate $\\sum_k|k|^\\tau e^{-\\sigma|k|_1}\\le C\\sigma^{-\\tau-n}$; Fourier truncation), PDF pp. 5-13."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.1 (analytic norms and Fourier coefficients) and §3.3 (Diophantine properties and the shell counts for the resonant strips), printed pp. 24-31 and 32-36."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Fix $n\ge1$, $r,s>0$. Let $g$ be of one of the following two types.

- **Joint-parameter type:** $h>0$, $\Omega\subseteq\mathbb R^n$ is nonempty,
  $g:B_r\times S_s\times O_h(\Omega)\to\mathbb C$ is holomorphic, bounded,
  and $2\pi$-periodic in $\vartheta$.
- **Phase-only type:** $g:B_r\times S_s\to\mathbb C$ is holomorphic, bounded,
  and $2\pi$-periodic in $\vartheta$. In this case put
  $M:=\sup_{B_r\times S_s}|g|$ and omit the variable $\nu$ and all
  parameter-derivative conclusions below.

In the joint-parameter case put $M:=|g|_{r,s,h}<\infty$. In either case, for
$0<\sigma\le s$ each Fourier coefficient satisfies
$$|g_k(I,\nu)|\le M e^{-(s-\sigma)|k|_1},$$
where $\nu$ is omitted in the phase-only case. For $0<\sigma\le1$ with
$2\sigma<s$, the Fourier series of $g$ converges absolutely and uniformly on
the full open product $B_r\times S_{s-2\sigma}$ (and also on
$B_r\times S_{s-2\sigma}\times O_h(\Omega)$ in the joint-parameter case),
and its sum is $g$. Every $g_k$ is holomorphic in its non-angle variables.
The series and every series obtained by differentiating in $I$, $\vartheta$,
or (in the joint-parameter case) $\nu$ converge locally uniformly on the
corresponding open product and may be differentiated termwise there.

For the joint-parameter type, and for all indicated indices,
$$|\partial_{I_j}g|_{r-\delta,s,h}\le\frac M\delta\quad(0<\delta<r),\qquad |\partial_{\vartheta_j}g|_{r,s-\delta',h}\le\frac M{\delta'}\quad(0<\delta'<s),$$
$$|\partial_{\nu_j}g|_{r,s,h-\delta''}\le\frac M{\delta''}\quad(0<\delta''<h),$$
$$|\partial_{I_i}\partial_{I_j}g|_{r-\delta,s,h}\le\frac{2M}{\delta^2},\qquad |\partial_{\vartheta_i}\partial_{\vartheta_j}g|_{r,s-\delta',h}\le\frac{2M}{\delta'^2},\qquad |\partial_{I_i}\partial_{\vartheta_j}g|_{r-\delta,s-\delta',h}\le\frac{2M}{\delta\delta'}.$$
The same action and angle inequalities hold in the phase-only case with all
parameter slots omitted. These estimates are on the stated smaller open domains;
no uniform derivative convergence on the original open domain is asserted.

For every integer $m\ge1$ and $0<\sigma\le1$,
$$\#\{k\in\mathbb Z^n:|k|_1=m\}\le4^n m^{n-1},\qquad \sum_{k\in\mathbb Z^n}e^{-\sigma|k|_1}\le C_n\sigma^{-n},$$
$$\sum_{k\ne0}|k|_1^{\tau}e^{-\sigma|k|_1}\le C_{n,\tau}\sigma^{-(\tau+n)}\quad(\tau\ge0),\qquad \sum_{k\ne0}|k|_1^{-\tau}e^{-\sigma|k|_1}\le C_n\sigma^{-1}\quad(\tau\ge n-1).$$
Here constants depend only on the displayed subscripts. For $K\ge0$ and
$0<\sigma\le1$ with $2\sigma<s$, the Fourier cutoff satisfies
$$|g-T_Kg|_{r,s-2\sigma,h}\le C_n\sigma^{-n}e^{-\sigma K}M$$
in the joint-parameter case, with the analogous phase-only supremum bound.
Products of bounded holomorphic functions on the same domain are holomorphic
and obey the product sup-norm bound. A uniform limit on the full domain of
holomorphic functions with norms at most $M$ is holomorphic and has norm at
most $M$.

## Facts & Assumptions

**Given:** The dimension $n$, the domains and widths in one of the two cases of
the Statement, and the bounded periodic holomorphic function $g$.

[F1] In the joint case, holomorphy means continuity and separate holomorphy on
$B_r\times S_s\times O_h(\Omega)$; in the phase-only case it means the
corresponding condition on $B_r\times S_s$. Such functions have local
absolutely convergent power series ([[def-holomorphic-kam-domain-and-diophantine-labels]],
[[thm-power-series-expansion-in-several-complex-variables]],
[[def-directional-and-partial-derivatives]]).

[F2] The integral of a holomorphic function around a rectangle in its domain is
zero, and reversal and concatenation of complex line integrals have their usual
sign and additivity ([[cor-goursat-rectangle-theorem]],
[[prop-reversal-and-concatenation-of-complex-line-integrals]],
[[def-complex-line-integral-over-a-rectifiable-path]]).

[F3] If $0\le r_0<R_0<S_0$, $f$ is holomorphic on $D(a,S_0)$ and
$|f|\le M_0$ on $|\zeta-a|=R_0$, then
$|f^{(q)}(z)|\le q!R_0M_0/(R_0-r_0)^{q+1}$ for $|z-a|\le r_0$
([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[F4] Locally uniform limits of holomorphic functions of one variable are
holomorphic; a locally uniformly convergent series can be differentiated
termwise. Continuous separately holomorphic functions of several variables
are holomorphic and have local power-series expansions
([[thm-weierstrass-convergence-holomorphic-functions]],
[[cor-locally-uniformly-convergent-holomorphic-series]],
[[thm-power-series-expansion-in-several-complex-variables]]).

[F5] For a continuous one-periodic function, its Fej\'er means converge
uniformly; consequently a continuous one-periodic function with all Fourier
coefficients zero is zero ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F6] Continuous functions on a compact rectangle have iterated Riemann
integrals, the orders agree, and the norm of an integral is bounded by the
integral of the norm ([[def-sections-and-iterated-riemann-integrals]],
[[thm-riemann-fubini-on-product-rectangles]],
[[thm-norm-inequality-for-the-vector-valued-integral]],
[[thm-monotonicity-of-the-integral]], [[def-interval]]).

[F7] If a holomorphic function on a connected open subset of $\mathbb C^n$
vanishes on a nonempty open subset, it vanishes identically
([[thm-identity-theorem-in-several-complex-variables]]).

[F8] For $0<\sigma\le1$,
$\sum_{m\in\mathbb Z}e^{-\sigma|m|}\le1+4/\sigma$
([[thm-geometric-series]]).

## Proof

**Proof technique:** direct; shift the full Fourier integrand, use the Cauchy
bounds on strict coordinate margins, and sum the lattice shells.

1.1 Fix all variables except one real angle $\vartheta_j$ and put 
$f_j(z)=g(I,\vartheta_1,\ldots,z,\ldots,\vartheta_n,\nu)e^{-ik_jz}$,
with the absent parameter omitted in the phase-only case. Since $k_j\in\mathbb Z$
and $g$ is $2\pi$-periodic, $f_j$ is periodic and holomorphic for
$|\operatorname{Im}z|<s$. For $0<\delta<s$, shift the integration segment
$[0,2\pi]$ to $[0,2\pi]-i\delta\,\operatorname{sgn}(k_j)$; the rectangle
integral is zero by [F2], and the two vertical integrals cancel by periodicity.
On the shifted segment $|e^{-ik_jz}|=e^{-\delta|k_j|}$, so the $j$th Fourier
integral gains that factor. Applying this in each coordinate, using [F6], gives
$|g_k(I,\nu)|\le M e^{-\delta|k|_1}$. For $0<\sigma<s$ take
$\delta=s-\sigma$; for $\sigma=s$ the claimed bound is the trivial estimate
$|g_k|\le M$. [F1, F2, F6, given, algebra]

1.2 The number of signed integer vectors with $|k|_1=m$ is at most $2^n$ times 
the number of nonnegative integer $n$-tuples with sum $m$. Choosing the first
$n-1$ entries, each between $0$ and $m$, gives at most
$2^n(m+1)^{n-1}\le2^{2n-1}m^{n-1}\le4^nm^{n-1}$ vectors. Therefore
$$\sum_ke^{-\sigma|k|_1}=\Bigl(\sum_{q\in\mathbb Z}e^{-\sigma|q|}\Bigr)^n\le C_n\sigma^{-n}.$$
For $p=\tau+n-1\ge0$, comparison on $x\in[m-1,m]$ gives
$m^pe^{-\sigma m}\le\int_{m-1}^m(x+1)^pe^{-\sigma x}\,dx$. Thus
$$\sum_{m\ge1}m^pe^{-\sigma m}\le\sigma^{-(p+1)}\int_0^\infty(y+1)^pe^{-y}\,dy,$$
which is finite and proves the positive-power bound after applying the shell
count. If $\tau\ge n-1$, then $m^{n-1-\tau}\le1$ and
$\sum_{m\ge1}e^{-\sigma m}=1/(e^\sigma-1)\le1/\sigma$; this proves the
negative-power bound. [F8, given, algebra]

1.3 Products of local power series are local power series and satisfy the 
pointwise product bound. For a uniform limit on the full domain, continuity
passes to the limit and every coordinate slice is a locally uniform limit of
one-variable holomorphic functions; [F4] makes the limit separately
holomorphic and hence holomorphic, while passing to the limit in the pointwise
bound gives norm at most $M$. [F1, F4, given, algebra]

2.1 For $0<\sigma\le1$ and $2\sigma<s$, the estimate of step 1.1 gives on 
$S_{s-2\sigma}$
$$|g_k(I,\nu)e^{ik\cdot\vartheta}|\le M e^{-\sigma|k|_1}.$$
The product of one-dimensional geometric sums in [F8] is at most
$C_n\sigma^{-n}$; hence the Fourier series is absolutely and uniformly
convergent on the full stated open product. Its sum is continuous and, by
locally uniform convergence and [F4], holomorphic. For fixed non-angle
variables, its Fourier coefficients are exactly $g_k$, by uniform convergence
and [F6]. The difference from $g$ therefore has zero Fourier coefficients and
vanishes on the real torus by [F5], applied successively in the $n$ angle
coordinates. At each real angle point all real derivatives of this difference
vanish; holomorphicity identifies these with its complex Taylor coefficients,
so its local power series is zero on a complex polydisc. The strip
$S_{s-2\sigma}$ is connected, so [F7] gives equality on the full complex strip.
For joint-parameter data, the Fourier coefficient is holomorphic in $(I,\nu)$:
its Riemann sums are holomorphic and converge uniformly on every compact subset
of $B_r\times O_h(\Omega)$, so [F4] and separate holomorphy apply. [step 1.1, F4, F5, F6, F7, algebra]

2.2 The coordinate Cauchy estimate [F3] on a radius-$\delta$ disc about 
$I_j$ gives the first action-derivative bound, and the same argument on the
angle and parameter coordinates gives the other first-derivative bounds. For a
second derivative in the same coordinate, [F3] with order $2$ gives the factor
$2$; for distinct coordinates, use the iterated Cauchy formula on the product
of their coordinate circles, obtaining $M/(\delta_i\delta_j)$. This yields the
stated action, angle, and mixed estimates on their strict smaller domains. [step 1.1, F3, given, algebra]

2.3 Let $K\ge0$ and choose the coefficient-shift margin 
$\delta=s-\sigma/2$, which lies strictly between $0$ and $s$. On
$S_{s-2\sigma}$ each discarded Fourier term is bounded by
$M e^{-3\sigma|k|_1/2}$. For $|k|_1>K$,
$e^{-3\sigma|k|_1/2}\le e^{-\sigma K}e^{-\sigma|k|_1/2}$; summing with [F8]
and step 1.2 gives the stated truncation bound, after absorbing $2^n$ into
$C_n$. [step 1.1, step 1.2, F8, algebra]

3.1 On any compact subset of the smaller open product in clause 1 there are 
positive action, angle, and (in the joint case) parameter margins to the
boundary of the original domain. Apply step 1.1 with a fixed strictly smaller
strip width, then apply the coordinate Cauchy estimates of step 2.2 on those
margins. Each differentiated Fourier term is bounded by a polynomial in
$|k|_1$ times $M e^{-\delta|k|_1}$ for some $\delta>0$ depending on the compact
set. The shell comparison of step 1.2 makes these bounds summable. The
Weierstrass test therefore gives locally uniform convergence of each
termwise-differentiated series, and [F4] identifies those sums with the
corresponding derivatives. [step 1.1, step 1.2, step 2.2, F4, algebra] ∎


## Remarks

- **Why the contour shift needs only Goursat.** The shifted contour is a
  rectangle in one coordinate at a time; the other coordinates are held fixed or
  have already been shifted, and the independence of the iterated integral from
  the order of integration is [F6]. No subharmonicity, elliptic regularity or
  several-variable Cauchy formula is used.
- **The loss is conservative.** Clause 3's exponents are those of the direct
  estimates; the KAM items below use only $\tau>n-1$ and the stated powers
  $\tau+n$, so no sharper small-divisor bound is assumed. In particular the
  sharper dimension exponent of the classical theory is not claimed.
- **No choice.** All suppliers cited in this item are formulated without the
  Axiom of Choice beyond what their own statements declare; the countable choice
  used elsewhere in the batch enters only through the measure-theoretic items.
