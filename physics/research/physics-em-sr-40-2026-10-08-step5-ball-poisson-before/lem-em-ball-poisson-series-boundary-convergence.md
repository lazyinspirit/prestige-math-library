---
id: lem-em-ball-poisson-series-boundary-convergence
kind: lemma
domain: mathematics
title: "Ball Poisson series: interior convergence, boundary data and the Poisson kernel"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 2
deps: [lem-em-spherical-harmonic-basis-and-addition, thm-interior-derivative-estimates-for-harmonic-functions, cor-cauchy-schwarz-inequality-for-l-two, def-laplacian-of-a-c2-function, def-countable-choice, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-dominated-convergence, thm-newton-leibniz-with-interior-derivative, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-em-convergent-legendre-kernel, cor-power-series-sums-are-smooth-with-coefficient-formula, def-surface-integral-on-a-compact-c-one-hypersurface]
dependency_roles:
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  thm-interior-derivative-estimates-for-harmonic-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dirichlet-problem-on-a-ball-by-the-poisson-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  lem-em-convergent-legendre-kernel: mathematical-premise
  cor-power-series-sums-are-smooth-with-coefficient-formula: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Paul Bourdon, Wade Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Chapter 5 (printed pp. 78-100): spherical-harmonic expansions, zonal kernels and the Poisson integral on the ball, read in the run's recorded full-text retrieval. The source uses unit-mass sphere measure; the formulas here adapt to mass 4 pi. The every-derivative tail argument and the L2-boundary uniqueness argument are supplied locally."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $f\in L^2(S^2,d\Omega)$ with harmonic coefficients $f_{lm}$ in an orthonormal basis of the spherical-harmonic lemma ([[lem-em-spherical-harmonic-basis-and-addition]]), and for $0\le r<1$ set $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ (the $l=0$ term being the constant value at $r=0$). Then the series and all its derivatives converge uniformly on every closed smaller ball, $u$ is harmonic there ([[def-laplacian-of-a-c2-function]]), $u(r\,\cdot)\to f$ in $L^2(S^2)$ as $r\uparrow1$, and $u$ is the unique harmonic function on the unit ball with $\sup_{r<1}\|u(r\,\cdot)\|_{L^2}<\infty$ and $L^2$ boundary limit $f$. For continuous $f$ the same function is

$$u(rn)=\int_{S^2}\frac{1-r^2}{4\pi|rn-n'|^3}f(n')\,d\Omega(n'),$$

it extends continuously to the closed ball with boundary value $f$, and the kernel is positive of total mass one. This is the stated ball boundary branch; generic smooth-domain classical regularity remains a separate obligation.

## Facts & Assumptions
**Given:** Countable Choice, $f\in L^2(S^2,d\Omega)$, the canonical orthonormal bases $\{Y_{lm}:m=1,\dots,2l+1\}$ of the harmonic lemma, the coefficients $f_{lm}=\int_{S^2}fY_{lm}\,d\Omega$, the partial sums $S_N=\sum_{l\le N,m}f_{lm}Y_{lm}$, and the series $u$.

[F1] **Spherical harmonics.** The $Y_{lm}$ are orthonormal in $L^2(S^2,d\Omega)$, each $Y_{lm}$ is the restriction of a homogeneous harmonic polynomial of degree $l$, harmonics of distinct degrees are orthogonal, and the family is complete; the addition theorem gives $\sum_mY_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n')$ and, on the diagonal, $\sum_m|Y_{lm}(n)|^2=\frac{2l+1}{4\pi}$ ([[lem-em-spherical-harmonic-basis-and-addition]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] **$L^2$ Hilbert space and Cauchy-Schwarz.** $L^2(S^2,d\Omega)$ is a real Hilbert space with the integral pairing ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]); finite and countable Cauchy-Schwarz and Bessel/Parseval bounds hold ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F3] **Harmonic estimates.** For harmonic $v$ near $x$, $|D^\alpha v(x)|\le C_{3,\alpha}r^{-3-|\alpha|}\int_{B_r(x)}|v|$ whenever $B_r(x)$ lies in the domain ([[thm-interior-derivative-estimates-for-harmonic-functions]]).

[F4] **Ball Dirichlet theorem and Poisson kernel.** For continuous data on $\partial B_R(a)$ in $\mathbb R^3$ the Poisson integral $U_g(x)=\int P_{R,a}(x,y)g(y)dS_y$ with $P_{R,a}(x,y)=(R^2-|x-a|^2)/(4\pi R|x-y|^3)$ is smooth harmonic in the ball, extends continuously with trace $g$, and is the unique $C^2\cap C(\overline{B_R(a)})$ harmonic solution with that trace ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]]).

[F5] **Generating function and series calculus.** $\sum_{l\ge0}q^lP_l(z)=(1-2qz+q^2)^{-1/2}$ for $|q|<1$ ([[lem-em-convergent-legendre-kernel]]), and real power series are smooth inside their disc of convergence with termwise differentiation ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[F6] **Integration rules.** The sphere integral is that of [[def-surface-integral-on-a-compact-c-one-hypersurface]], linear and monotone with the nonnegative-integral rules ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]), and dominated convergence applies to dominated pointwise-convergent families ([[thm-dominated-convergence]]); uniform derivative limits are identified along coordinate segments by the FTC ([[thm-newton-leibniz-with-interior-derivative]]).



## Proof

**Proof technique:** direct.

1.1 Completeness of the basis [F1] and the Bessel/Parseval identity [F2] give $\|f-S_N\|_2^2=\sum_{l>N,m}|f_{lm}|^2\to0$, and $\sum_{l,m}|f_{lm}|^2=\|f\|_2^2<\infty$. [given, F1, F2, algebra]

1.2 For the general $L^2$ uniqueness, let $v$ be a smooth harmonic function on the unit ball with $\sup_{r<1}\|v(r\,\cdot)\|_2<\infty$ and $L^2$ boundary limit $f$. For $0<s<1$ the published Dirichlet theorem [F4] applied on $B_s(0)$ to the continuous data $v(s\,\cdot)$ gives, for $0<r<s$, $v(rn)=\int_{S^2}\frac{1-(r/s)^2}{4\pi|(r/s)n-n'|^3}v(sn')d\Omega(n')$, the scaled form of the radius-$s$ Poisson kernel; expanding this kernel with the addition theorem and integrating against $v(s\,\cdot)$ [F1, F6] gives $v(rn)=\sum_{l,m}(r/s)^lv_{lm}(s)Y_{lm}(n)$ with $v_{lm}(s)=\int_{S^2}v(sn')Y_{lm}(n')d\Omega(n')$. [given, F1, F4, F5, F6, algebra]

2.1 Each $r^lY_{lm}(n)$ is the homogeneous harmonic polynomial of degree $l$ representing $Y_{lm}$, evaluated at $x=rn$ [F1], so the partial sums $P_N(x)=\sum_{l\le N,m}f_{lm}r^lY_{lm}(n)$ are harmonic polynomials; by the addition theorem [F1] and Cauchy-Schwarz over the multi-index $(l,m)$, the absolute tail on $|x|\le r_0<1$ is bounded by $\|f-S_N\|_2\bigl(\sum_{l>N}r_0^{2l}\frac{2l+1}{4\pi}\bigr)^{1/2}\le C(r_0)\|f-S_N\|_2$, which tends to $0$ by step 1.1; hence the series converges uniformly on every closed smaller ball and defines a continuous function $u$ there. [step 1.1, F1, F2, algebra]

2.2 Orthonormality gives $\|u(r\,\cdot)\|_2^2=\sum_{l,m}r^{2l}|f_{lm}|^2\le\|f\|_2^2$ and $\|u(r\,\cdot)-f\|_2^2=\sum_{l,m}(1-r^l)^2|f_{lm}|^2$; since $0\le(1-r^l)^2\le4$ and $(1-r^l)^2\to0$ for each $(l,m)$ as $r\uparrow1$, dominated convergence [F6] on the countable coefficient family with the summable bound $4\sum|f_{lm}|^2$ gives $u(r\,\cdot)\to f$ in $L^2(S^2)$ as $r\uparrow1$. [step 1.1, F1, F2, F6, algebra]

3.1 For $x\in B_{r_1}$ with $r_1<r_0<1$ and $0<\rho<r_0-r_1$, the harmonic estimate [F3] applied to the harmonic differences $P_N-P_M$ gives $|D^\alpha(P_N-P_M)(x)|\le C_{3,\alpha}\rho^{-3-|\alpha|}\int_{B_\rho(x)}|P_N-P_M|$, and the $L^2$ bound inherited from the uniform tail of step 2.1 makes this tend to $0$ uniformly on $B_{r_1}$; hence every derivative series converges uniformly on each closed smaller ball, and the FTC [F6] identifies the derivatives of the limit: $u\in C^\infty(B_1)$ and $\Delta u=\lim_N\Delta P_N=0$, so $u$ is harmonic on the unit ball. [step 2.1, F3, F6, algebra]

3.2 Inserting $f_{lm}=\int_{S^2}f(n')Y_{lm}(n')d\Omega(n')$ and the addition theorem [F1] into the partial sums gives $P_N(rn)=\int_{S^2}\bigl[\sum_{l\le N}\frac{2l+1}{4\pi}r^lP_l(n\cdot n')\bigr]f(n')d\Omega(n')$; for $r\le r_0<1$ the zonal series converges absolutely and uniformly by [F5], and letting $N\to\infty$ with the linearity and dominated-convergence rules [F6] identifies $u(rn)=\int_{S^2}K_r(n,n')f(n')d\Omega(n')$ with $K_r(n,n')=\frac1{4\pi}\sum_l(2l+1)r^lP_l(n\cdot n')$. [step 2.1, F1, F5, F6, algebra]

3.3 Completeness [F1] applied on the sphere of radius $r$ gives $v(rn)=\sum_{l,m}v_{lm}(r)Y_{lm}(n)$; comparing with step 1.2 and using orthonormality yields $v_{lm}(r)=(r/s)^lv_{lm}(s)$ for all $0<r<s<1$, and letting $s\uparrow1$ with Cauchy-Schwarz [F2], $|v_{lm}(s)-f_{lm}|=|\int(v(sn')-f(n'))Y_{lm}(n')d\Omega|\le\|v(s\,\cdot)-f\|_2\to0$, so $v_{lm}(r)=r^lf_{lm}$ for every degree and every $0<r<1$. [step 1.2, step 2.2, F1, F2, algebra]

4.1 Applying the operator $1+2r\partial_r$ to the generating function of [F5] - legitimate inside $|r|<1$ by termwise differentiation [F5] - gives $\sum_l(2l+1)r^lP_l(z)=\frac{1-r^2}{(1-2rz+r^2)^{3/2}}$; since $1-2r(n\cdot n')+r^2=|rn-n'|^2$, the kernel is $K_r(n,n')=\frac{1-r^2}{4\pi|rn-n'|^3}$, positive with numerator $1-r^2>0$ and positive denominator; integrating over $n'$ leaves only the constant $l=0$ harmonic in the zonal expansion, so $\int_{S^2}K_r(n,n')d\Omega(n')=1$. [step 3.2, F1, F5, F6, algebra]

5.1 For continuous $f$, uniform continuity of $f$ on the compact sphere and the concentration of the normalised kernel [F4] give $\sup_{n}|u(rn)-f(n)|\le\int K_r(n,n')|f(n')-f(n)|d\Omega(n')\to0$ as $r\uparrow1$: near $n'=n$ the integrand is small by continuity and the kernel mass is one, while the complement carries vanishing kernel mass because on a fixed complement $|n-n'|\ge\delta>0$, for $r>1-\delta/2$ one has $|rn-n'|\ge\delta/2$ by the triangle inequality; its kernel mass is bounded by $(1-r^2)(\delta/2)^{-3}$ and tends to zero. [step 4.1, F4, F6, algebra]

6.1 For continuous $f$ the Poisson integral of [F4] on the unit ball is exactly the integral representation of step 4.1, so the published ball Dirichlet theorem [F4] shows that $u$ extends continuously to the closed ball with boundary value $f$ and is the unique $C^2\cap C(\overline{B_1})$ harmonic function with that trace; the formula of the Statement is the kernel of step 4.1. [step 4.1, step 5.1, F4, algebra]

7.1 Hence $v(r\,\cdot)$ and $u(r\,\cdot)$ have the same complete orthonormal expansion on every sphere $r<1$, so they agree in $L^2$ there and, being continuous on each sphere, agree pointwise; equality at the centre follows by continuity, so $v=u$ on the unit ball. This proves the interior convergence and harmonicity, the $L^2$ boundary limit, the kernel formula for continuous data with its continuous extension, and $L^2$-boundary uniqueness, with Countable Choice used only through the cited harmonic, $L^2$ and Poisson interfaces. [step 3.1, step 2.2, step 6.1, step 3.3, F1, F2, algebra] ∎
