---
id: thm-bochner-martinelli-integral-formula
kind: theorem
title: The Bochner–Martinelli formula for C1 functions
status: draft
origin: pipeline
deps:
  - def-bochner-martinelli-kernel
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - lem-c-one-stokes-for-complex-euclidean-domains
  - def-axiom-of-choice
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - cor-volume-of-a-radius-r-n-ball
  - thm-volume-recursion-for-closed-euclidean-balls
  - thm-jordan-boundary-criterion
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - thm-real-gamma-functional-equation
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 5 §5.1"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 5.1.1 and its complete proof, printed pp. 157–159 (PDF pp. 156–158), lines 12140–12476. Lebl assumes smooth boundary and smooth f; the C1 version here follows from the local C1 Stokes supplier."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume AC. Let $n\ge1$, let $D\subseteq\mathbb C^n$ be a nonempty bounded
open set with $C^1$ boundary, that is, a bounded $C^1$ domain in the
nonconnected sense of
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Let
$f\in C^1(\overline D)$ and $z\in D$. Use the orientation
and kernel $\Omega_n$ of
[[def-bochner-martinelli-kernel]]. Then

$$f(z)=\int_{\partial D}f(\zeta)\Omega_n(\zeta,z)-\int_D\bar\partial_\zeta f(\zeta)\wedge\Omega_n(\zeta,z).$$

Both integrals are well-defined; the interior integral is absolutely
convergent at $\zeta=z$. If $f$ is holomorphic, the interior term is zero.
For $n>1$, the kernel coefficients as functions of $z$ need not be
holomorphic.

## Facts & Assumptions

**Given:** Assume AC; $n\ge1$; $D$ is a nonempty bounded open set with $C^1$ boundary; $f\in C^1(\overline D)$; $z\in D$; and the coordinate orientation and Bochner–Martinelli kernel are those of [[def-bochner-martinelli-kernel]].

[F1] For $\zeta\ne z$, $\Omega_n(\zeta,z)$ is the displayed normalized sum of coefficients $\overline{\zeta_j-z_j}/|\zeta-z|^{2n}$ times the omitted-factor forms ([[def-bochner-martinelli-kernel]]).

[F2] $\partial$ and $\bar\partial$ are the components of $d$ with bidegrees $(1,0)$ and $(0,1)$ ([[def-bigraded-complex-differential-forms]]).

[F3] The two operators obey the graded product rule, and $d=\partial+\bar\partial$ ([[thm-d-dbar-decomposition-and-identities]]).

[F4] Under full AC, Stokes holds on every bounded $C^1$ domain for a complex $C^1$ form of degree one less than the real dimension, with outward-normal-first boundary orientation ([[lem-c-one-stokes-for-complex-euclidean-domains]]).

[F5] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); in particular it supplies the countable-choice premises in the Jordan-content/Lebesgue-measure comparison and polar-coordinate formula used below. It also supplies the premise of [F4].

[F6] For a $C^1$ function at every point of an open subset of $\mathbb C^m$, complex differentiability is equivalent to the full Cauchy–Riemann system $\partial_{\bar z_k}f=0$ for every coordinate $k<m$; this library indexes those coordinates by $0\le k<m$ ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F7] The closed radius-$r$ ball in $\mathbb R^m$ has content $V_m(r)=\pi^{m/2}r^m/\Gamma(m/2+1)$ for integer $m\ge1$ and $r\ge0$ ([[cor-volume-of-a-radius-r-n-ball]]).

[F8] Every closed Euclidean ball is Jordan measurable ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F9] A bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[F10] Under countable choice, a bounded Jordan measurable set $E$ is Lebesgue measurable and $\lambda_m(E)=\operatorname{cont}(E)$ ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[F11] For $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F12] Lebesgue measure is invariant under translations of measurable sets ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F13] A measure-preserving map preserves integrals of nonnegative measurable functions, including infinite integrals ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F14] Under countable choice, polar coordinates integrate nonnegative Borel functions against $r^{m-1}dr$ and a finite sphere measure ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F15] A bounded $C^1$ domain is a nonempty bounded open set with locally $C^1$ graph boundary; connectedness is not required ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

## Proof

**Proof technique:** direct.

1.1 Off the diagonal, differentiating the kernel gives $d(f\Omega_n)=\bar\partial_\zeta f\wedge\Omega_n$. [F1, F2, F3, given, algebra]
Put $w=\zeta-z$, $r=|w|$, and let $\Phi_j$ denote the omitted-factor wedge form in the $j$th summand of [F1]. Set $\Theta=d\bar\zeta_1\wedge d\zeta_1\wedge\cdots\wedge d\bar\zeta_n\wedge d\zeta_n$ and $c_j=\bar w_jr^{-2n}$. Since $d\bar\zeta_j\wedge\Phi_j=\Theta$, $$\bar\partial_\zeta\Omega_n=\frac{(n-1)!}{(2\pi i)^n}\sum_{j=1}^n\frac{\partial c_j}{\partial\bar\zeta_j}\,\Theta=0,$$ because $\partial c_j/\partial\bar\zeta_j=r^{-2n}-n|w_j|^2r^{-2n-2}$ and the sum is $nr^{-2n}-nr^2r^{-2n-2}=0$. Also $\partial_\zeta(f\Omega_n)=0$ because its holomorphic degree is $n$. The product rule [F3], together with $d=\partial+\bar\partial$, now gives the identity.

1.2 Bounded first derivatives and polar integration prove absolute integrability at the diagonal. [F1, F5, F12, F13, F14, given, algebra]
Compactness of $\overline D$ bounds the first derivatives of $f$, so coefficients of $\bar\partial f\wedge\Omega_n$ are bounded near $z$ by $Cr^{1-2n}$. Write $\sigma_{2n-1}$ for the finite sphere measure in [F14], and set $g(w)=|w|^{1-2n}$ for $0<|w|<\epsilon$ and $g(w)=0$ otherwise. This is nonnegative Borel. Translation invariance [F12] makes $w\mapsto w+z$ measure preserving, so [F13] and [F14] give $$\int_{B_\epsilon(z)}|\zeta-z|^{1-2n}\,d\lambda_{2n}(\zeta)=\sigma_{2n-1}(S^{2n-1})\int_0^\epsilon r^{1-2n}r^{2n-1}\,dr=\sigma_{2n-1}(S^{2n-1})\epsilon<\infty.$$ Thus the interior density is absolutely integrable at $z$; its integral over $D\setminus\overline B_\epsilon(z)$ converges to its integral over $D$, and away from $z$ it is continuous on a bounded set.

1.3 The normalized kernel has integral one on every positively oriented sphere centered at $z$. [F4, F5, F7, F8, F9, F10, F11, algebra]
Let $\Psi_n=\sum_{j=1}^n\bar w_j\Phi_j$. On $\partial B_\epsilon(z)$, $\Omega_n=(n-1)!(2\pi i)^{-n}\epsilon^{-2n}\Psi_n$, and direct differentiation gives $d\Psi_n=n\Theta$. Since $d\bar\zeta_j\wedge d\zeta_j=2i\,dx_j\wedge dy_j$, the chosen orientation gives $\Theta=(2i)^n dV$. Stokes [F4] on the ball therefore reduces the sphere integral to its real volume. Its closed ball is Jordan by [F8]; [F9] gives content zero to the boundary sphere. Under countable choice, [F10] identifies the closed ball's Lebesgue measure with its Jordan content and makes the sphere Lebesgue null, so the open and closed balls have the same measure. Formula [F7] in real dimension $2n$ and [F11] iterated at $s=1,\ldots,n$ yield $$\int_{B_\epsilon(z)}dV=\frac{\pi^n\epsilon^{2n}}{\Gamma(n+1)}=\frac{\pi^n\epsilon^{2n}}{n!}.$$ Consequently Stokes gives $$\int_{\partial B_\epsilon(z)}\Omega_n=\frac{(n-1)!}{(2\pi i)^n}\epsilon^{-2n}\int_{B_\epsilon(z)}n(2i)^n dV=1.$$

1.4 If $f$ is holomorphic, the interior term in the formula vanishes. [F6, given, algebra]
At every point of $D$, holomorphicity makes $f$ complex differentiable. By [F6], each antiholomorphic Wirtinger derivative vanishes. Reindexing $k=j-1$ converts the library's zero-based coordinates $0\le k<n$ to the formula's $1\le j\le n$, so $\bar\partial f=0$ and the interior term is zero.

1.5 For $n>1$, a kernel coefficient is not holomorphic in the parameter $z$. [F1, given, algebra]
Choose distinct indices $j,l$ and write $c_j=\overline{\zeta_j-z_j}/|\zeta-z|^{2n}$. Differentiating with respect to $\bar z_l$ gives $$\frac{\partial c_j}{\partial\bar z_l}=n\,\overline{w_j}w_l|w|^{-2n-2}.$$ This is nonzero when both coordinate differences are nonzero, so this kernel coefficient is not holomorphic in $z$.

2.1 Stokes on the punctured domain gives the outer-minus-inner boundary identity. [F4, F5, step 1.1, given, algebra]
Choose $0<\epsilon<\operatorname{dist}(z,\partial D)$ and set $D_\epsilon=D\setminus\overline B_\epsilon(z)$. Since $D$ is open by [F15], $z$ is an interior point and this distance is positive; choose $\epsilon$ small enough that the closed ball lies in $D$. Its boundary is $\partial D$ and the oppositely oriented sphere $-\partial B_\epsilon(z)$. If $D_\epsilon$ is disconnected, a finite cover of its bounded $C^1$ boundary by graph charts, each with one connected interior side, shows it has only finitely many components; each inherits $C^1$ boundary. Apply [F4] to each component, where $f\Omega_n$ is $C^1$ on the closure. The declared AC supplies [F4]'s premise, and step 1.1 supplies the differential identity. Summing gives $$\int_{\partial D}f\Omega_n-\int_{\partial B_\epsilon(z)}f\Omega_n=\int_{D\setminus\overline B_\epsilon(z)}\bar\partial_\zeta f\wedge\Omega_n.$$

2.2 Scaling and step 1.3 show that the inner-sphere integral tends to $f(z)$. [F1, step 1.3, given, algebra]
On a fixed small ball about $z$, boundedness of $Df$ and the fundamental theorem of calculus along segments give $|f(\zeta)-f(z)|\le M\epsilon$ on $\partial B_\epsilon(z)$. Under $u\mapsto z+\epsilon u$, the pullback of $\Omega_n(\cdot,z)$ to the unit sphere is independent of $\epsilon$: its coefficient scales by $\epsilon^{1-2n}$ and its $(2n-1)$ differentials by $\epsilon^{2n-1}$. Smoothness on the compact unit sphere gives a finite absolute integral, so $$\left|\int_{\partial B_\epsilon(z)}(f(\zeta)-f(z))\Omega_n(\zeta,z)\right|\le C\epsilon\longrightarrow0.$$ Using $\int_{\partial B_\epsilon(z)}\Omega_n=1$ from step 1.3 proves the limit.

3.1 Letting the puncture radius tend to zero in step 2.1 proves the asserted formula. [step 1.2, step 2.1, step 2.2, algebra]
By step 1.2 the interior integrals converge; by step 2.2 the inner-sphere integral tends to $f(z)$. Thus $$\int_{\partial D}f\Omega_n-f(z)=\int_D\bar\partial_\zeta f\wedge\Omega_n,$$ and rearranging gives the Statement. ∎
