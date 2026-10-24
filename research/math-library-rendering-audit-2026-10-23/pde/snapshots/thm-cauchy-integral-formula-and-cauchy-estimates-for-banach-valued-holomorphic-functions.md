---
id: thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions
kind: theorem
title: Cauchy integral formula and Cauchy estimates for Banach-valued holomorphic functions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [lem-banach-valued-cauchy-theorem-on-star-shaped-domains, def-banach-space, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-complex-contours-reversal-concatenation-and-closedness, def-complex-differentiability-holomorphic-and-entire, def-complex-domain, def-complex-line-integral-over-a-rectifiable-path, def-series-and-absolute-convergence-in-a-normed-space, lem-power-series-coefficients-are-determined-by-real-values, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Cauchy formula and estimates (2.15) and their use, printed pp. 57-58 and 62-65'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 4.a, Cauchy's integral formula and the analyticity argument in Proposition 4.3, printed pp. 96-98"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the cited integral and semigroup suppliers.

Let $Y$ be a complex Banach space ([[def-banach-space]]), let
$U\subseteq\mathbb C$ be open ([[def-complex-domain]]), and let $F:U\to Y$ be
continuous and complex-differentiable on $U$
([[def-complex-differentiability-holomorphic-and-entire]]). Suppose $R>0$ and
that the closed disc $\overline{D(z_0,R)}=\{w:|w-z_0|\le R\}$ is contained in
$U$. For $0<r<R$ write $C_r$ for the positively oriented circle
$|w-z_0|=r$ and
$$\oint_{C_r}\Phi(w)\,dw:=\int_0^{2\pi}\Phi(z_0+re^{it})\,rie^{it}\,dt,$$
a Bochner integral ([[def-bochner-integrable-function]],
[[def-complex-line-integral-over-a-rectifiable-path]]). Then:

1. for every $r$ with $0<r<R$ and every $z$ with $|z-z_0|<r$ the Cauchy
   integral formula holds:
   $$F(z)=\frac1{2\pi i}\oint_{|w-z_0|=r}\frac{F(w)}{w-z}\,dw;$$
2. $F$ has norm-convergent power-series expansions about $z_0$ on $D(z_0,R)$,
   with
   $$a_n=\frac1{2\pi i}\oint_{|w-z_0|=r}\frac{F(w)}{(w-z_0)^{n+1}}\,dw$$
   for every $r$ with $0<r<R$; these coefficient integrals are independent of
   $r$;
3. $F$ is norm-$C^\infty$, and with
   $M(r):=\sup_{|w-z_0|=r}\|F(w)\|$ one has the Cauchy estimates
   $$\bigl\|F^{(n)}(z_0)\bigr\|\le n!\,\frac{M(r)}{r^n}\qquad(n\ge0,\ 0<r<R).$$

No choice principle beyond Countable Choice is used.

## Facts & Assumptions

**Given:** A complex Banach space $Y$, an open $U\subseteq\mathbb C$, a continuous complex-differentiable $F:U\to Y$, a closed disc $\overline{D(z_0,R)}\subseteq U$, numbers $0<r<R$, a point $z$ with $|z-z_0|<r$, the positively oriented circle $C_r$ with its Bochner parametrization $\gamma(s)=z_0+re^{is}$, and $M(r)=\sup_{C_r}\|F\|$.

[L1] The disc $D(z_0,R)$ is convex, hence star-shaped with base point $z_0$; by [[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]], $F$ has a primitive $G$ on $D(z_0,R)$ with $G'=F$, every closed piecewise $C^1$ contour in $D(z_0,R)$ has $\int_\gamma F\,dw=0$, and the same supplier applies to any holomorphic map on a smaller open disc. In particular, $\oint_{C_\rho}F\,dw=0$ for every $0<\rho<R$.

[L2] The Bochner integral is linear in the integrand and $\|\int_Ef\|\le\int_E\|f\|$ ([[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]]); closed contours and their reversals and concatenations are those of [[def-complex-contours-reversal-concatenation-and-closedness]].

[L3] If two $Y$-valued power series $\sum a_n\zeta^n$ and $\sum b_n\zeta^n$ converge on a disc and their sums agree at every real point of that disc, then $a_n=b_n$ for all $n$ ([[lem-power-series-coefficients-are-determined-by-real-values]], [[def-series-and-absolute-convergence-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 The filled quotient. Put $h(w)=(F(w)-F(z))/(w-z)$ for $w\ne z$ and $h(z)=F'(z)$. Differentiability of $F$ at $z$ makes $h$ continuous on $D(z_0,R)$, and the quotient rule makes it holomorphic away from $z$. The triangle-subdivision argument of [[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]] proves that a holomorphic map has zero integral around every closed triangle in its domain. This also holds for $h$ on triangles containing $z$: split such a triangle into at most three triangles with vertex $z$; in each remove a similar corner triangle of diameter $\eta$. The remaining quadrilateral can be split into triangles avoiding $z$, whose integrals vanish. Its boundary differs from the original by edges of total length $O(\eta)$, and $h$ is bounded near $z$, so the norm of this difference tends to zero by [L2]. Thus every triangle integral of $h$ in the disc vanishes. Degenerate triangles cancel by reversal. [L1, L2, given, construct]

1.2 Scalar circle integrals. Parametrizing $\gamma(s)=z_0+re^{is}$ and setting $\rho:=z-z_0$ with $|\rho|<r$, the geometric series $\frac{1}{w-z}=\frac1{w-z_0}\sum_{n\ge0}\bigl(\frac{z-z_0}{w-z_0}\bigr)^n=\sum_{n\ge0}\frac{(z-z_0)^n}{(w-z_0)^{n+1}}$ converges uniformly on $C_r$; integrating termwise and using $\frac1{2\pi i}\oint_{C_r}(w-z_0)^m\,dw=1$ for $m=-1$ and $=0$ for integers $m\ne-1$ (a direct computation from $\int_0^{2\pi}e^{ikt}dt=2\pi$ for $k=0$ and $0$ otherwise) gives $\frac1{2\pi i}\oint_{C_r}\frac{dw}{w-z}=1$ and $\oint_{C_r}dw=0$. [L2, given, algebra]

2.1 A primitive for the filled quotient. Define $H(w)=\int_{[z_0,w]}h(\zeta)\,d\zeta$ on the disc. The zero triangle integrals in step 1.1 give $H(w+k)-H(w)=k\int_0^1h(w+tk)\,dt$ for small $k$. Continuity of $h$ gives $H'=h$, exactly as in the segment-primitive argument of [[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]]. Applying its piecewise chain-rule and fundamental-theorem argument to $H$ along $C_r$ yields $\oint_{C_r}h(w)\,dw=0$. This uses continuity at the exceptional point, without assuming that $h$ is differentiable there. [step 1.1, L1, L2, given, algebra]

3.1 Cauchy's integral formula. Put $J:=\oint_{C_r}h(w)\,dw=0$. Writing $\frac{F(w)}{w-z}=\frac{F(z)}{w-z}+\frac{F(w)-F(z)}{w-z}$ and using [step 2.1] and [step 1.2], $\frac1{2\pi i}\oint_{C_r}\frac{F(w)}{w-z}\,dw=\frac{F(z)}{2\pi i}\oint_{C_r}\frac{dw}{w-z}+\frac{J}{2\pi i}=F(z)$. [step 1.2, step 2.1, L2, given, algebra]

4.1 Power series and coefficients. For $|z-z_0|<r$ the kernel expansion of [step 1.2] is uniformly convergent on $C_r$, so termwise integration of the identity of [step 3.1] gives $F(z)=\sum_{n\ge0}a_n(r)(z-z_0)^n$ with $a_n(r):=\frac1{2\pi i}\oint_{C_r}\frac{F(w)}{(w-z_0)^{n+1}}\,dw$, and $\|a_n(r)\|\le M(r)/r^n$ by [L2]. Two radii $r_1<r_2<R$ give two power series with the same sum for every real $\zeta$ with $|\zeta|<r_1$ after the translation $z=z_0+\zeta$; applying [L3] to these series centered at $0$ gives $a_n(r_1)=a_n(r_2)$ for every $n$; writing $a_n$ for the common value, $F$ is represented on $D(z_0,R)$ by the norm-convergent series $\sum a_n(z-z_0)^n$, and in particular the coefficient integrals are independent of $r$. [step 1.2, step 3.1, L2, L3, given, algebra]

5.1 Norm-$C^\infty$ regularity and Cauchy estimates. Since $\|a_n\|\le M(r')/r'^n$ for every $0<r'<R$, for each $0<\rho<r'$ the differentiated series $\sum_{n\ge1}na_n(z-z_0)^{n-1}$ is dominated on $|z-z_0|\le\rho$ by $\sum_{n\ge1}nM(r')\rho^{n-1}/r'^n=M(r')r'^{-1}(1-\rho/r')^{-2}<\infty$, so it converges uniformly there; the standard difference-quotient estimate $|\frac{(z+h-z_0)^n-(z-z_0)^n}{h}-n(z-z_0)^{n-1}|\le\frac{n(n-1)}{2}|h|\sum_{k}\binom{n-2}{k}|z-z_0|^{k}|h|^{n-2-k}$ together with the same geometric majorant shows that the difference quotients of the sum converge to the differentiated sum, so $F$ is complex-differentiable with $F'=\sum na_n(\cdot-z_0)^{n-1}$; iterating gives $F^{(n)}(z_0)=n!a_n$ for every $n$, so $F$ is norm-$C^\infty$ and the estimate $\|F^{(n)}(z_0)\|=n!\|a_n\|\le n!M(r)/r^n$ follows from $\|a_n\|\le M(r)/r^n$ at any $0<r<R$. Together with [step 3.1] this proves the formula, the expansion with radius-independent coefficients, and the Cauchy estimates, and no choice principle beyond Countable Choice was used. [step 3.1, L2, given, algebra] ∎

## Remarks

The circle integral is the norm limit of its Riemann sums: the parametrized integrand is continuous on the compact interval, so its Bochner integral is the limit of the Riemann sums of any sequence of partitions of mesh tending to zero, by uniform continuity and the norm inequality. The proof above separates the three mechanisms usually conflated in the scalar Cauchy theorem: the continuous filled quotient has zero triangle integrals even at its exceptional point, its primitive gives the circle vanishing, and the geometric expansion produces the coefficients; the strict margin $r<R$ keeps every circle compactly contained in the disc of holomorphy.
