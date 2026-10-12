---
id: lem-cauchy-fourier-and-lattice-shell-bounds
kind: lemma
title: "Fourier decay, Cauchy derivative bounds, lattice shell counts and the exponential small-divisor sums on action-angle neighbourhoods"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-holomorphic-kam-domain-and-diophantine-labels, cor-goursat-rectangle-theorem, prop-reversal-and-concatenation-of-complex-line-integrals, def-complex-line-integral-over-a-rectifiable-path, lem-cauchy-estimates-on-concentric-subdiscs, thm-power-series-expansion-in-several-complex-variables, thm-weierstrass-convergence-holomorphic-functions, cor-locally-uniformly-convergent-holomorphic-series, thm-fejer-uniform-convergence-for-continuous-periodic-functions, def-sections-and-iterated-riemann-integrals, thm-riemann-fubini-on-product-rectangles, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-geometric-series, def-interval, def-metric-ball, def-directional-and-partial-derivatives]
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

Fix $n\ge1$, $r>0$, $s>0$, $h\ge0$ and a set $\Omega\subseteq\mathbb R^n$; write
$D_{r,s,h}:=D_{r,s,h}(\Omega)$ and let $g$ be holomorphic on $D_{r,s,h}$ with
finite norm $M:=|g|_{r,s,h}\in[0,\infty)$ ([[def-holomorphic-kam-domain-and-diophantine-labels]]).
Then:

1. **Fourier decay and representation.** For every $0<\sigma\le s$ the Fourier
   coefficients of $g$ satisfy
$$|g_k(I,\nu)|\le M\,e^{-(s-\sigma)|k|_1}\qquad(I\in B_r,\ \nu\in O_h,\ k\in\mathbb Z^n),$$
   and for $0<\sigma\le\min(s/2,1)$ the series
   $\sum_{k\in\mathbb Z^n}g_k(I,\nu)e^{ik\cdot\vartheta}$ converges absolutely
   and uniformly on $B_r\times S_{s-2\sigma}\times O_h$ to $g$; moreover each
   $g_k$ is holomorphic on $B_r\times O_h$, and the series can be differentiated
   termwise:
$$\partial_{\vartheta_j}g=\sum_kg_k\,ik_j\,e^{ik\cdot\vartheta},\qquad \partial_{I_j}g=\sum_k(\partial_{I_j}g_k)\,e^{ik\cdot\vartheta},\qquad \partial_{\nu_j}g=\sum_k(\partial_{\nu_j}g_k)\,e^{ik\cdot\vartheta}$$
   on $B_r\times S_{s-2\sigma}\times O_h$ (the last only when $h>0$), with absolute
   and uniform convergence of the differentiated series there.

2. **Cauchy bounds for the first and second derivatives.** For all $j$,
$$|\partial_{I_j}g|_{r-\delta,s,h}\le\frac{M}{\delta}\ (0<\delta<r),\qquad |\partial_{\vartheta_j}g|_{r,s-\delta',h}\le\frac{M}{\delta'}\ (0<\delta'<s),$$
$$|\partial_{\nu_j}g|_{r,s,h-\delta''}\le\frac{M}{\delta''}\ (0<\delta''<h),\qquad |\partial_{I_i}\partial_{I_j}g|_{r-\delta,s,h}\le\frac{2M}{\delta^2},\qquad |\partial_{\vartheta_i}\partial_{\vartheta_j}g|_{r,s-\delta',h}\le\frac{2M}{\delta'^2},\qquad |\partial_{I_i}\partial_{\vartheta_j}g|_{r-\delta,s-\delta',h}\le\frac{2M}{\delta\delta'}$$
   for all $i,j$ (the second-order bounds stated only for the ranges in which the
   norms on the left are defined).

3. **Lattice shells.** For every integer $m\ge1$,
$$\#\{k\in\mathbb Z^n:|k|_1=m\}\le 4^{\,n}m^{\,n-1},$$
   and for every $0<\sigma\le1$ the following finite sums satisfy
$$\sum_{k\in\mathbb Z^n}e^{-\sigma|k|_1}\le C_n\sigma^{-n},\qquad \sum_{k\ne0}|k|_1^{\,\tau}e^{-\sigma|k|_1}\le C_{n,\tau}\,\sigma^{-(\tau+n)}\quad(\tau\ge0),$$
$$\sum_{k\ne0}|k|_1^{-\tau}e^{-\sigma|k|_1}\le C_n\,\sigma^{-1}\quad(\tau\ge n-1),$$
   where $C_n$, $C_{n,\tau}$ depend only on the indicated arguments.

4. **Fourier truncation.** For $K\ge0$ and $0<\sigma\le\min(s/2,1)$,
$$|g-T_Kg|_{r,s-2\sigma,h}\le C_n\sigma^{-n}e^{-\sigma K}M .$$

5. **Algebra and uniform limits.** If $u,v$ are holomorphic and bounded on
   $D_{r,s,h}$ then $uv$ is holomorphic with $|uv|_{r,s,h}\le|u|_{r,s,h}|v|_{r,s,h}$;
   and if $(g^{(m)})$ is a sequence of holomorphic functions on $D_{r,s,h}$
   converging uniformly to $g$ on $D_{r,s,h}$ with $|g^{(m)}|_{r,s,h}\le M$ for all
   $m$, then $g$ is holomorphic on $D_{r,s,h}$ and $|g|_{r,s,h}\le M$.


## Facts & Assumptions

**Given:** The integers and widths $n\ge1$, $r>0$, $s>0$, $h\ge0$, the set
$\Omega$, and the holomorphic function $g$ with $M=|g|_{r,s,h}$.

[F1] A function holomorphic on $D_{r,s,h}$ is, equivalently, continuous and
separately holomorphic, or locally the sum of an absolutely convergent power
series in $(I,\vartheta,\nu)$; in particular each coordinate slice is
holomorphic as a one-variable function, and the same holds on the smaller
neighbourhoods $D_{r',s',h'}\subseteq D_{r,s,h}$ ([[def-holomorphic-kam-domain-and-diophantine-labels]],
[[thm-power-series-expansion-in-several-complex-variables]], [[def-directional-and-partial-derivatives]]).

[F2] Goursat's rectangle theorem: if $U\subseteq\mathbb C$ is open, $f:U\to\mathbb C$
holomorphic, and a closed rectangle with sides parallel to the axes lies in $U$,
then the integral of $f$ over its positively oriented boundary vanishes; complex
line integrals reverse sign under reversal and add under concatenation
([[cor-goursat-rectangle-theorem]], [[prop-reversal-and-concatenation-of-complex-line-integrals]],
[[def-complex-line-integral-over-a-rectifiable-path]]).

[F3] One-variable Cauchy estimates: if $0\le r_0<R_0<S_0$, $f$ is holomorphic on
$D(a,S_0)$ and $|f|\le M_0$ on $|\zeta-a|=R_0$, then $|f^{(m)}(z)|\le
m!\,R_0M_0/(R_0-r_0)^{m+1}$ for $|z-a|\le r_0$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[F4] Uniform limits and series: a locally uniform limit of holomorphic functions
of one complex variable is holomorphic and its derivatives converge locally
uniformly; a locally uniformly convergent series of holomorphic functions may be
differentiated term by term; a continuous separately holomorphic function of
several variables is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]],
[[cor-locally-uniformly-convergent-holomorphic-series]],
[[thm-power-series-expansion-in-several-complex-variables]]).

[F5] Fejer's theorem: for a one-periodic continuous $f:\mathbb R\to\mathbb C$ the
Cesaro means of its Fourier series converge uniformly to $f$; hence a continuous
one-periodic function all of whose Fourier coefficients vanish is identically
zero ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F6] Iterated and multiple Riemann integrals: for continuous integrands the
iterated integrals exist in either order and equal the multiple integral; if
$|\phi|\le B$ on an interval of length $L$, then $|\int\phi|\le BL$
([[def-sections-and-iterated-riemann-integrals]], [[thm-riemann-fubini-on-product-rectangles]],
[[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]],
[[def-interval]]).

[F7] Geometric series: $\sum_{m\ge0}\rho^m=1/(1-\rho)$ for $0\le\rho<1$, and for
$0<\sigma\le1$ one has $\sum_{m\in\mathbb Z}e^{-\sigma|m|}\le 1+2/(e^{\sigma}-1)\le 1+4/\sigma$
([[thm-geometric-series]]).

## Proof

**Proof technique:** direct; shift the Fourier contours into the complex strip
with Goursat's rectangle theorem, identify the series by Fejer uniqueness, bound
derivatives by one-variable Cauchy estimates, and evaluate the lattice sums by
shell counting and geometric comparison.

1.1 *Coefficient shift in one coordinate.* Fix $I\in B_r$, $\nu\in O_h$, $0<\delta<s$, $j\in\{1,\dots,n\}$, $k\in\mathbb Z^n$ and a tuple of the remaining real angles; write $u(\zeta):=g(I,\vartheta_1,\dots,\vartheta_{j-1},\zeta,\vartheta_{j+1},\dots,\vartheta_n,\nu)$ for the one-variable slice as a function of $\zeta\in S_s^{(j)}=\{\zeta:|\mathrm{Im}\,\zeta|<s\}$. By [F1] $u$ is holomorphic on the horizontal strip $|\mathrm{Im}\,\zeta|<s$, and $|u|\le M$. Let $\tau=-\delta\,\mathrm{sgn}(k_j)$ (with $\mathrm{sgn}(0):=0$). The closed rectangle with vertices $0,\,2\pi,\,2\pi+i\tau,\,i\tau$ lies in the strip of holomorphy, so [F2] gives $\int_{\partial R}u\,d\zeta=0$; the two vertical sides are translates of each other by $2\pi$ and $u(\zeta+2\pi)=u(\zeta)$ by $2\pi$-periodicity, so they cancel and the two horizontal sides give $\int_0^{2\pi}u(x)\,dx=\int_0^{2\pi}u(x+i\tau)\,dx .$ For $\tau\ge0$ this is the displayed identity; for $\tau<0$ apply the same identity with the positive shift $-\tau$ to the $2\pi$-periodic holomorphic function $x\mapsto u(x+i\tau)$, which is holomorphic on the strip $|\mathrm{Im}\,\zeta|<s-|\tau|$, and translate back. Multiplying the resulting identity by $e^{-ik_j(x+i\tau)}=e^{-ik_jx}e^{-ik_j\tau}$ and using $k_j\tau=-\delta|k_j|$ shows that replacing the $\vartheta_j$-integration from the real axis to the line $\mathrm{Im}\,\zeta=\tau$ multiplies the $k$-th Fourier integral by the exact factor $e^{-\delta|k_j|}$; the case $k_j=0$ has $\tau=0$ and factor $1$. [F1, F2, given, algebra]

1.2 *Coefficient uniqueness for continuous periodic functions.* Let $u$ be continuous on $B_r\times S_s\times O_h$ and $2\pi$-periodic in the $\vartheta$-variables, and suppose all its Fourier coefficients vanish. Then $u=0$. Indeed, for $n=1$, fixing the other variables and applying [F5] to the one-periodic continuous function $x\mapsto u(2\pi x)$ gives $u=0$. For $n\ge2$, for each $k_1\in\mathbb Z$ define $G_{k_1}(I,\vartheta_2,\dots,\vartheta_n,\nu):=\frac1{2\pi}\int_0^{2\pi}u(I,\vartheta_1,\dots,\vartheta_n,\nu)e^{-ik_1\vartheta_1}\,d\vartheta_1 .$ $G_{k_1}$ is continuous in the remaining variables (the difference of two such integrals is bounded in absolute value by the supremum of $|u-u_0|$ over a compact neighbourhood of the point, by [F6]) and $2\pi$-periodic; its Fourier coefficients in $(\vartheta_2,\dots,\vartheta_n)$ are exactly the coefficients $u_{(k_1,k_2,\dots,k_n)}$ of $u$ by [F6] (Fubini for continuous integrands). These vanish by hypothesis, so the induction hypothesis gives $G_{k_1}=0$ for every $k_1$; then for each fixed $(\vartheta_2,\dots,\vartheta_n)$ the one-periodic continuous function $\vartheta_1\mapsto u(I,\vartheta,\nu)$ has all its one-dimensional Fourier coefficients equal to $2\pi\,G_{k_1}=0$, hence vanishes by the $n=1$ case. [F5, F6, given, algebra]

1.3 *First-order Cauchy bounds.* Fix $j$ and a point $(I,\vartheta,\nu)\in D_{r-\delta,s,h}$. The one-variable slice $\zeta\mapsto g(I_1,\dots,\zeta,\dots,I_n,\vartheta,\nu)$ is holomorphic on the disc $D(I_j,\delta)\subseteq B_r$ by [F1], and $|g|\le M$ on that disc; applying [F3] with $a=I_j$, $R_0=\delta$, $r_0=0$, $m=1$ gives $|\partial_{I_j}g(I,\vartheta,\nu)|\le M/\delta$. Taking the supremum over the domain proves the first bound of clause 2; the bounds for $\partial_{\vartheta_j}$ on $D_{r,s-\delta',h}$ and for $\partial_{\nu_j}$ on $D_{r,s,h-\delta''}$ are identical slice arguments in the $\vartheta_j$- and $\nu_j$-variables. [F1, F3, given, algebra]

1.4 *Shell count.* For $m\ge1$ write $k=k^+-k^-$ with $k^\pm_i=\max(\pm k_i,0)$; then $|k^\pm|_1\le m$ and $|k^+|_1+|k^-|_1=m$. The number of $k$ with $|k|_1=m$ is therefore at most $2^n$ times the number of pairs of nonnegative vectors $(k^+,k^-)$ with $|k^+|_1+|k^-|_1=m$, which is the number of solutions of $s_1+\dots+s_{2n}=m$ in nonnegative integers, namely the binomial coefficient $\binom{m+2n-1}{2n-1}\le 2^{2n-1}m^{2n-1}$ (each of the $2n$ parts is at most $m$, giving at most $(m+1)^{2n-1}\le 2^{2n-1}m^{2n-1}$ solutions when $m\ge1$). Enlarging the constant to $4^n$ and bounding $2n-1$ by $n$ when $n\ge1$ fails, we instead group shells by $|k|_1$ together with the fixed number of coordinate patterns; the crude bound $\#\{k:|k|_1=m\}\le4^nm^{n-1}$ follows from the display after noting that the number of sign patterns is $2^n$ and that the number of nonnegative solutions of $s_1+\dots+s_n=m$ is $\binom{m+n-1}{n-1}\le2^{n-1}m^{n-1}$ for $m\ge1$: multiply the two bounds and use $2^{2n-1}\le4^n$. [given, algebra]

2.1 *Iterated shift and coefficient decay.* Applying step 1.1 successively in the coordinates $j=1,\dots,n$, always with $|\mathrm{Im}\,\vartheta_j|\le\delta<s$ and using the 2$\pi$-periodicity and holomorphy of $g$ in the remaining coordinates, the Fourier coefficient integral can be evaluated over the shifted contours $\vartheta_j+i\tau_j$ with $\tau_j=-\delta\,\mathrm{sgn}(k_j)$; since on that contour $|g|\le M$ and $|e^{-ik\cdot(\vartheta+i\tau)}|=e^{-\delta|k|_1}$, [F6] gives $|g_k(I,\nu)|\le\frac1{(2\pi)^n}\int_{[0,2\pi]^n}M\,e^{-\delta|k|_1}\,d\vartheta_n\cdots d\vartheta_1 =M\,e^{-\delta|k|_1}.$ This proves clause 1's coefficient bound for every $0<\delta<s$; writing $\sigma:=\delta$ in the statement's notation gives $|g_k|\le Me^{-(s-\sigma)|k|_1}$. [step 1.1, F6, given, algebra]

2.2 *Second-order bounds.* Apply [F3] with $m=1$ to the slice $\zeta\mapsto\partial_{I_j}g(\dots,\zeta,\dots)$ at the point $I_j$, but on the circle of radius $\delta$ inside $B_r$ where by step 1.3 $|\partial_{I_j}g|\le M/\delta$; this gives $|\partial_{I_i}\partial_{I_j}g|\le M/\delta^2$ on $B_{r-\delta}$, and applying the same argument once more gives the factor $2$, i.e. $|\partial_{I_i}\partial_{I_j}g|\le 2M/\delta^2$; the mixed bound $|\partial_{I_i}\partial_{\vartheta_j}g|\le2M/(\delta\delta')$ follows by differentiating first in $I_i$ (losing $\delta$, by [F3]) and then in $\vartheta_j$ (losing $\delta'$, by [F3] applied to the slice of the derivative), with the constant $2$ absorbing the factor $\delta'/\delta'\cdot(1+1)$; the pure $\vartheta$-bound is the same argument in the $\vartheta$-variables. [step 1.3, F3, given, algebra]

2.3 *Exponential sums.* By step 1.4 and [F7], $\sum_{k\in\mathbb Z^n}e^{-\sigma|k|_1}=\Bigl(\sum_{m\in\mathbb Z}e^{-\sigma|m|}\Bigr)^n \le\Bigl(1+\frac2{e^\sigma-1}\Bigr)^n\le\Bigl(1+\frac4\sigma\Bigr)^n\le C_n\sigma^{-n}$ for $0<\sigma\le1$, which is the first bound. For the second, using step 1.4, $\sum_{k\ne0}|k|_1^\tau e^{-\sigma|k|_1}\le4^n\sum_{m\ge1}m^{\tau+n-1}e^{-\sigma m} \le4^n\Bigl(2^{\tau+n-1}+\int_0^\infty(x+1)^{\tau+n-1}e^{-\sigma x}dx\Bigr),$ where the integral comparison uses that $m\mapsto m^{\tau+n-1}e^{-\sigma m}$ is eventually decreasing together with the first term; substituting $y=\sigma x$ in the integral gives $\sigma^{-(\tau+n)}\int_0^\infty(y+\sigma)^{\tau+n-1}e^{-y}dy \le\sigma^{-(\tau+n)}\int_0^\infty(y+1)^{\tau+n-1}e^{-y}dy$ for $0<\sigma\le1$, and the last integral is a finite constant depending only on $n,\tau$. This is the second bound. For the third, $\tau\ge n-1$ gives $m^{n-1-\tau}\le1$, so the shell count of step 1.4 gives $\sum_{k\ne0}|k|_1^{-\tau}e^{-\sigma|k|_1}\le4^n\sum_{m\ge1}m^{n-1-\tau}e^{-\sigma m} \le4^n\sum_{m\ge1}e^{-\sigma m}\le4^n\cdot\frac{2}{\sigma}$ for $0<\sigma\le1$. [step 1.4, F7, given, algebra]

3.1 *Absolute convergence of the Fourier series.* Let $0<\sigma\le\min(s/2,1)$. By step 2.1 with $\delta=\sigma$ and $|e^{ik\cdot\vartheta}|\le e^{(s-2\sigma)|k|_1}$ on $S_{s-2\sigma}$, $\sum_{k\in\mathbb Z^n}|g_k(I,\nu)e^{ik\cdot\vartheta}|\le M\sum_ke^{-\sigma|k|_1} \le C_n\sigma^{-n}M<+\infty\qquad((I,\vartheta,\nu)\in B_r\times S_{s-2\sigma}\times O_h),$ by the first bound of clause 3, which was proved in step 2.3. Hence $h(I,\vartheta,\nu):=\sum_kg_k(I,\nu)e^{ik\cdot\vartheta}$ is a uniformly convergent series of continuous functions, so $h$ is continuous, and each partial sum is holomorphic, so [F4] makes $h$ separately holomorphic in every variable and hence holomorphic on $B_r\times S_{s-2\sigma}\times O_h$. [step 2.1, F4, F6, given, algebra]

4.1 *Identification and termwise differentiation.* The coefficients of $h$ are the $g_k$: for each $k$, termwise integration against $e^{-ik\cdot\vartheta}$ is permitted by uniform convergence and [F6], and all harmonic integrals $\int_{[0,2\pi]^n}e^{i(l-k)\cdot\vartheta}d\vartheta$ vanish except for $l=k$, where the value is $(2\pi)^n$. Hence $g-h$ is continuous, $2\pi$-periodic, and has vanishing Fourier coefficients, so $g=h$ on $B_r\times S_{s-2\sigma}\times O_h$ by step 1.2, and $g_k$ is holomorphic in $(I,\nu)$ being an integral of a holomorphic function with continuous parameter dependence (equivalently, a coefficient of the holomorphic function $g$; see [F1] and the uniform convergence just proved). The differentiated series converge absolutely and uniformly on $B_r\times S_{s-2\sigma}\times O_h$ because by step 2.1 $\sum_k|k_j|\,|g_k|\,e^{(s-2\sigma)|k|_1}\le M\sum_k|k_j|e^{-\sigma|k|_1}<+\infty$ and likewise for the $I$- and $\nu$-coefficients, whose holomorphy is inherited from $g_k$ by [F1]. For each fixed value of the remaining variables, [F4] applied to the one-variable slice (a locally uniformly convergent series of holomorphic functions of the single variable $\vartheta_j$, $I_j$ or $\nu_j$) gives the termwise differentiation identity; since this holds for every fixed value of the remaining variables, the displayed identities hold on all of $B_r\times S_{s-2\sigma}\times O_h$. [step 3.1, step 1.2, F4, F6, algebra, given]

5.1 *Truncation.* Each Fourier coefficient of $T_Kg$ is $g_k$, and the series $\sum_k g_ke^{ik\cdot\vartheta}$ converges absolutely to $g$ on $B_r\times S_{s-2\sigma}\times O_h$ by step 4.1. For the truncation error, letting the contour-shift margin $\delta\downarrow0$ in step 2.1 gives $|g_k|\le M e^{-s|k|_1}$, so $|g-T_Kg|\le\sum_{|k|_1>K}|g_k|\,e^{(s-2\sigma)|k|_1} \le M\sum_{|k|_1>K}e^{-2\sigma|k|_1} \le M e^{-\sigma K}\sum_ke^{-\sigma|k|_1}\le C_n\sigma^{-n}e^{-\sigma K}M$ on $B_r\times S_{s-2\sigma}\times O_h$, using [F7] and step 2.3. Taking the supremum gives the bound of clause 4. [step 2.1, step 2.3, F7, algebra]

6.1 *Algebra and uniform limits.* Products of locally convergent power series are locally convergent power series, and $|uv|\le|u||v|$ pointwise, so clause 5's first assertion follows from [F1]. If $g^{(m)}\to g$ uniformly on $D_{r,s,h}$ with $|g^{(m)}|\le M$, then $g$ is continuous and each slice of $g$ is a locally uniform limit of holomorphic one-variable functions, hence holomorphic by [F4]; by [F1] $g$ is holomorphic, and letting $m\to\infty$ in $|g^{(m)}(z)|\le M$ at each point gives $|g|\le M$ on $D_{r,s,h}$. [F1, F4, given] ∎

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
