---
id: thm-green-function-harmonic-measure-representation
kind: theorem
title: "Green and harmonic-measure representation with the $2\\pi$ sign"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-complex-power-series-sums-are-analytic
  - cor-mean-value-theorem
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - cor-uniqueness-for-the-bounded-plane-dirichlet-problem
  - def-barrier-and-regular-boundary-point
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-complex-domain
  - def-complex-series-power-series-and-absolute-convergence
  - def-countable-choice
  - def-dependent-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - def-green-function-plane-domain
  - def-harmonic-measure-plane-domain
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-perron-family-for-the-plane-dirichlet-problem
  - def-poisson-kernel-from-a-green-function
  - def-radon-measure-on-an-lch-space
  - def-real-analytic-function
  - def-regular-distribution-from-a-locally-integrable-function
  - def-second-countable-space
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-analytic-boundary-green-corrector-is-smooth
  - lem-dependent-choice-implies-countable-choice
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-perron-family-is-nonempty-and-bounded
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - thm-c2-holomorphic-components-are-harmonic
  - thm-compact-subset-is-closed-and-bounded
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-dominated-convergence
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-euclidean-inverse-function-theorem
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-green-function-exists-on-bounded-plane-domains
  - thm-green-representation-formula
  - thm-green-function-uniqueness-symmetry-and-monotonicity
  - thm-harmonic-and-holomorphic-schwarz-reflection-principles
  - thm-harmonic-measure-is-well-defined
  - thm-heine-borel-rn
  - thm-holomorphic-inverse-function-theorem
  - thm-integral-triangle-inequality
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-logarithm-derivative-and-integral
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - thm-monotone-convergence-for-the-integral
  - thm-plane-harmonic-functions-are-smooth-and-real-analytic
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-rational-points-and-boxes-in-rn
  - thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-weyl-lemma-for-the-laplacian
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Sections 10.8 and 10.9, printed pp. 171-172: harmonic measure as the representing measure of evaluation of the Dirichlet solution, and the Green function with Dirichlet zero boundary values"
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: the Dirichlet problem, harmonic measure and boundary behavior for bounded domains"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 186-189: Green functions with a finite pole, Green's formula, and the equilibrium measure as the normal derivative of the Green function divided by $2\\pi$"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Dependent Choice, hence Countable Choice
([[lem-dependent-choice-implies-countable-choice]]). Let
$\Omega\subseteq\mathbb C$ be a bounded $C^1$ regular plane domain: a bounded
$C^1$ domain in the sense of
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]] which is a
complex domain ([[def-complex-domain]]) every boundary point of which is
regular ([[def-barrier-and-regular-boundary-point]]). Let
$u\in C^2(\Omega)\cap C^1(\overline\Omega)$ be real-valued with $\Delta u$
bounded on $\Omega$, and write $dA$ for two-dimensional Lebesgue measure. Then
for every $z\in\Omega$
$$u(z)=\int_{\partial\Omega}u(\xi)\,d\omega_\Omega^z(\xi)-\frac{1}{2\pi}\int_\Omega g_\Omega(z,y)\Delta u(y)\,dA(y),$$
and both integrals are absolutely finite.

If in addition $\partial\Omega$ is real analytic, by which is meant the
parametrization hypothesis of [[lem-analytic-boundary-green-corrector-is-smooth]]:
for every $\zeta\in\partial\Omega$ there are $\varepsilon>0$, a real-analytic
$\gamma:(-\varepsilon,\varepsilon)\to\mathbb C$ with $\gamma(0)=\zeta$ and
$\gamma'(0)\ne0$, and a neighbourhood $U$ of $\zeta$ with
$\partial\Omega\cap U=\gamma\bigl((-\varepsilon,\varepsilon)\bigr)$ for which
$\Omega\cap U$ is one of the two components of
$U\setminus\gamma\bigl((-\varepsilon,\varepsilon)\bigr)$; then
$$d\omega_\Omega^z(\xi)=-\frac{1}{2\pi}\partial_{\nu_\xi}g_\Omega(z,\xi)\,ds(\xi),$$
where $\nu$ is the outward unit normal of $\partial\Omega$ and $ds$ its
arclength element; explicitly
$\omega_\Omega^z(E)=-\frac{1}{2\pi}\int_E\partial_{\nu_\xi}g_\Omega(z,\xi)\,ds(\xi)$
for every Borel set $E\subseteq\partial\Omega$. The normal derivative in the
boundary slot is the classical one
([[def-classical-normal-derivative]]) of the trace
$\xi\mapsto g_\Omega(z,\xi)=g_\Omega(\xi,z)$, which symmetry
([[thm-green-function-uniqueness-symmetry-and-monotonicity]]) identifies with
the trace of $\xi\mapsto g_\Omega(\xi,z)$, a function of class
$C^2$ near $\partial\Omega$ under the regularity hypothesis used below. The
same conclusion holds if instead there is a uniformly dense set of continuous
real boundary data, each admitting a harmonic extension of class
$C^2(\overline\Omega)$, and the correctors $H_y$ of
$G_\Omega:=g_\Omega/(2\pi)$ are of class $C^2(\overline\Omega)$ for every pole
$y$, so that the hypotheses of [[thm-green-representation-formula]] are met.

Neither a pointwise Poisson density for arbitrary continuous boundary data,
nor the representation identity under the weaker hypothesis
$u\in C^2(\Omega)\cap C^1(\overline\Omega)$ with $\Delta u$ merely finite, is
asserted.

## Facts & Assumptions

**Given:** Dependent Choice ([[def-dependent-choice]]); the bounded $C^1$ regular plane domain $\Omega$ with its boundary normal and surface measure; the real function $u\in C^2(\Omega)\cap C^1(\overline\Omega)$ with $\Delta u$ bounded; a point $z\in\Omega$; and, for the density clause, either the real-analytic boundary hypothesis or the dense-class hypothesis stated above.

[A1] Dependent Choice is [[def-dependent-choice]]; it implies Countable Choice ([[lem-dependent-choice-implies-countable-choice]]), and Countable Choice says that every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] For a bounded complex domain $\Omega$ and $a\in\Omega$ the canonical kernel exists and equals $g_\Omega(z,a)=-\log|z-a|-h_a(z)$, where $h_a=H_{b_a}$ is the regularized Perron envelope of the continuous datum $b_a=-\log|\cdot-a|$ on $\partial\Omega$; the kernel is harmonic and strictly positive on $\Omega\setminus\{a\}$, its corrector $-h_a$ is harmonic on $\Omega$, it tends to $0$ at every regular boundary point, and $-\Delta_zT_{g_\Omega(\cdot,a)}=2\pi\delta_a$ ([[thm-green-function-exists-on-bounded-plane-domains]], [[def-green-function-plane-domain]]).

[F2] On a Greenian plane domain the canonical kernel is symmetric, $g_\Omega(z,a)=g_\Omega(a,z)$, and it is monotone under domain enlargement: $g_{\Omega_1}(z,a)\le g_{\Omega_2}(z,a)$ for Greenian $\Omega_1\subseteq\Omega_2$ and distinct $z,a\in\Omega_1$ ([[thm-green-function-uniqueness-symmetry-and-monotonicity]]).

[F3] For a bounded regular plane domain and each interior point there is exactly one Radon Borel probability measure $\omega_\Omega^z$ on $\partial\Omega$ with $H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$ for every real continuous $\varphi$, and $H_\varphi$ is the unique continuous extension to $\overline\Omega$ that is harmonic on $\Omega$ and agrees with $\varphi$ on $\partial\Omega$ ([[thm-harmonic-measure-is-well-defined]], [[def-harmonic-measure-plane-domain]]).

[F4] For a continuous datum $\varphi$ on the boundary of a bounded complex domain with $m=\min_{\partial\Omega}\varphi$ and $M=\max_{\partial\Omega}\varphi$, the Perron family is nonempty and $m\le U_\varphi\le M$, and the regularized envelope satisfies $m\le H_\varphi\le M$ ([[lem-perron-family-is-nonempty-and-bounded]], [[def-perron-envelope-for-the-plane-dirichlet-problem]], [[def-perron-family-for-the-plane-dirichlet-problem]]).

[F5] A harmonic function on a bounded complex domain that extends continuously to the closure has its supremum and infimum on the boundary, and two functions continuous on $\overline\Omega$ and harmonic on $\Omega$ with equal boundary values coincide ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]], [[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

[F6] The normalized kernel $\Phi=-(2\pi)^{-1}\log|\cdot|$ of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]] is locally integrable on $\mathbb R^2$, with $\int_{B_R}|\Phi|\,dA=\int_0^Rr|\log r|\,dr$ finite for every $R>0$, and Lebesgue measure on $\mathbb R^2$ is translation invariant ([[lem-laplace-fundamental-kernel-is-locally-integrable]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F7] Distributions on an open set are continuous linear functionals on the real test functions $C_c^\infty$, with $(\partial_iT)(\phi)=-T(\partial_i\phi)$ and $\Delta T=\sum_i\partial_i^2T$; for $u\in C^2(\Omega)$ one has $\Delta T_u=T_{\Delta u}$, because distributional differentiation extends classical differentiation; the map $f\mapsto T_f$ is linear and injective modulo almost-everywhere equality ([[def-distributional-harmonicity-and-poisson-equation-in-rn]], [[thm-distributional-differentiation-is-continuous-and-commutes]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F8] Under Countable Choice, a distribution with $\Delta T=0$ on an open set is $T_h$ for a unique smooth harmonic $h$ ([[thm-weyl-lemma-for-the-laplacian]]).

[F9] Fubini's theorem computes a double integral of an $L^1$ function on a sigma-finite product as an iterated integral, and dominated convergence applies to measurable functions converging almost everywhere under one integrable majorant ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]).

[F10] A bounded $C^1$ domain is locally, after a rigid change of coordinates, the subgraph of a $C^1$ function, and $F\in C^2(\overline\Omega)$ means that $F$ and its derivatives through order two extend continuously to the closure; on the boundary of such a domain the chart integral defines a finite Borel measure $dS$ with a continuous outward unit normal that agrees on chart overlaps, and the classical normal derivative of $F\in C^1(\overline\Omega)$ is $DF\cdot\nu$ on $\partial\Omega$ ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[def-classical-normal-derivative]]).

[F11] Assume Countable Choice. Let $\Omega$ be a bounded $C^1$ domain carrying a Dirichlet Green function $G_\Omega$ for $-\Delta$ whose correctors satisfy $H_y\in C^2(\overline\Omega)$, and let $P_\Omega(x,y)=-\partial_{\nu_y}G_\Omega(x,y)$ be its Poisson kernel, where the boundary-slot normal derivative is the trace of $D_z\bigl(\Phi(z-x)-H_x(z)\bigr)\cdot\nu_\Omega(y)$ at $z=y$ from inside. Then for every real $U\in C^2(\overline\Omega)$ and $x\in\Omega$, $$U(x)=\int_\Omega G_\Omega(x,y)\bigl(-\Delta U(y)\bigr)dy+\int_{\partial\Omega}P_\Omega(x,y)U(y)\,dS(y),$$ both integrals absolutely finite, and $P_\Omega\ge0$ with $\int_{\partial\Omega}P_\Omega(x,y)\,dS(y)=1$ ([[thm-green-representation-formula]], [[def-poisson-kernel-from-a-green-function]], [[def-dirichlet-green-function-for-minus-laplacian]]).

[F12] If a bounded complex domain $D$ has a compact real-analytic boundary curve in the sense of the parametrization hypothesis, then every boundary point of $D$ is regular and for each $a\in D$ the Perron corrector $-\log|\cdot-a|-g_D(\cdot,a)$ extends to a function of class $C^2(\overline D)$ with trace $-\log|\xi-a|$ on $\partial D$; the Green kernel itself extends in class $C^2$ away from the pole and has zero boundary trace ([[lem-analytic-boundary-green-corrector-is-smooth]]).

[F13] A real-analytic parametrization is $C^1$, sums, products and compositions of real-analytic functions are real analytic, a real-analytic function equals its power series near the centre, the same coefficients define a holomorphic function on a disc, a $C^1$ map with invertible derivative is a local diffeomorphism, a holomorphic map with nonzero derivative is a local biholomorphism, holomorphic functions have smooth real and imaginary components ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and the real part of a holomorphic function with $C^2$ components is harmonic ([[def-real-analytic-function]], [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]], [[def-complex-series-power-series-and-absolute-convergence]], [[cor-complex-power-series-sums-are-analytic]], [[thm-euclidean-inverse-function-theorem]], [[thm-holomorphic-inverse-function-theorem]], [[thm-c2-holomorphic-components-are-harmonic]]).

[F14] A harmonic function on a half-disc that is continuous on the closure and vanishes on the straight edge has a harmonic odd reflection to the full disc; plane harmonic functions are smooth; and harmonicity is preserved by composition with a holomorphic map ([[thm-harmonic-and-holomorphic-schwarz-reflection-principles]], [[thm-plane-harmonic-functions-are-smooth-and-real-analytic]], [[thm-conformal-invariance-of-plane-harmonicity]]).

[F15] A unital subalgebra of $C(K,\mathbb R)$ that separates points of a nonempty compact metric space $K$ is uniformly dense ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[F16] Under Countable Choice every Borel measure finite on compact sets on a second-countable locally compact Hausdorff space is regular, hence Radon ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-radon-measure-on-an-lch-space]], [[def-second-countable-space]]); the rational open boxes are a countable basis of $\mathbb R^2$ ([[thm-rational-points-and-boxes-in-rn]]).

[F17] A bounded subset of $\mathbb R^2$ has compact closure, compact subsets of Euclidean space are closed and bounded, and a continuous real function on a nonempty compact Euclidean set is bounded and attains its bounds ([[thm-heine-borel-rn]], [[thm-compact-subset-is-closed-and-bounded]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F18] Continuous maps pull Borel sets back to Borel sets, sums, products and absolute values of measurable functions are measurable, and every Borel subset of $\mathbb R^n$ is Lebesgue measurable ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F19] If $0\le f_1\le f_2\le\cdots$ are measurable and increase pointwise to $f$, then $\int f_n\uparrow\int f$ ([[thm-monotone-convergence-for-the-integral]]).

[F20] The nonnegative integral is monotone and additive on nonnegative Borel functions, the absolute value of an integral is at most the integral of the absolute value, and the Lebesgue integral is linear on $L^1$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F21] The mean value theorem and $\log'(x)=1/x$ give $|\log a-\log b|\le|a-b|/d$ for real $a,b\ge d>0$ ([[cor-mean-value-theorem]], [[thm-logarithm-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 $\Omega$ is nonempty, bounded, open and connected, so $\overline\Omega$ and $\partial\Omega$ are compact, and $u$ extends continuously to $\overline\Omega$ with boundary values $u|_{\partial\Omega}$. The Laplacian $\Delta u$ is continuous on $\Omega$, hence Borel and bounded there, and $f:=-\Delta u$ lies in $L^\infty(\Omega)$. Every boundary point of $\Omega$ is regular, so $\Omega$ is a bounded regular plane domain in the sense of [F3]. [given, F3, F10, F17, F18]

1.2 Uniform integrability of the kernel. Let $D:=\operatorname{diam}(\Omega)$. For every $z\in\Omega$ the domain is contained in the ball $B(z,D)$, so translation invariance, polar coordinates and [F6] give $$\int_\Omega|\log|z-y||\,dA(y)\le\int_{B(0,D)}|\log|w||\,dA(w)=2\pi\int_0^Dr|\log r|\,dr=:J_0<\infty,$$ and this bound is uniform over $z\in\Omega$. [F6, F20, algebra]

2.1 For every pole $a\in\Omega$ the canonical kernel exists. Writing $b_a:=-\log|\cdot-a|\in C(\partial\Omega)$ and $h_a:=H_{b_a}$ for its regularized Perron envelope, one has $g_\Omega(z,a)=-\log|z-a|-h_a(z)$ for $z\in\Omega\setminus\{a\}$, the kernel is harmonic and strictly positive off $a$, its corrector $-h_a$ is harmonic on $\Omega$, $g_\Omega(z,a)\to0$ as $z\to\zeta$ at every boundary point $\zeta$, and $-\Delta_zT_{g_\Omega(\cdot,a)}=2\pi\delta_a$. In particular $\Omega$ is Greenian. [F1, step 1.1]

3.1 A uniform logarithmic bound. Fix $c\in\Omega$ and put $R:=1+\max_{y\in\overline\Omega}|y-c|$, so that $\overline\Omega\subset B:=D(c,R)$, where $B$ is a bounded complex domain. By monotonicity $0\le g_\Omega(z,y)\le g_B(z,y)$ for distinct $z,y\in\Omega$, and by [F1] applied on $B$, $g_B(z,y)=-\log|z-y|-H^{(B)}_y(z)$ with $H^{(B)}_y$ the Perron envelope of the datum $-\log|\cdot-y|$ on $\partial B$. By [F4], $H^{(B)}_y(z)\ge\min_{\partial B}(-\log|\cdot-y|)=-\log(R+|y-c|)$, so $$0\le g_\Omega(z,y)\le-\log|z-y|+\log(R+|y-c|)\le|\log|z-y||+C_*,$$ with $C_*:=\log(2R)$, because $R+|y-c|<2R$. The constant $C_*$ is independent of $z$ and $y$. [F1, F2, F4, F17, step 2.1, algebra]

3.2 Continuity off the diagonal. For fixed $y\in\Omega$ the function $z\mapsto h_y(z)=H_{b_y}(z)$ is harmonic on $\Omega$ and extends continuously to $\overline\Omega$ with boundary values $b_y$ by [F3]; hence $(z,y)\mapsto g_\Omega(z,y)=-\log|z-y|-h_y(z)$ is continuous on $\{(z,y)\in\Omega\times\Omega:z\ne y\}$ once $y\mapsto h_y$ is controlled uniformly on compact sets. Indeed, for $y,y'\in K$ with $K\subset\Omega$ compact and every $z\in\Omega$, $$|h_y(z)-h_{y'}(z)|\le\max_{\partial\Omega}|b_y-b_{y'}|\le\frac{|y-y'|}{\operatorname{dist}(K,\partial\Omega)},$$ the first inequality because $\varphi\mapsto H_\varphi$ is additive and $|H_\tau|\le\max_{\partial\Omega}|\tau|$ by [F5] and [F4], and the second by [F21]. Given $(z,y)$ with $z\ne y$, choose a compact $K\subset\Omega$ containing $y$ and avoiding a neighbourhood of $z$; both estimates together with continuity of $z\mapsto h_y(z)$ give joint continuity at $(z,y)$. Hence the kernel is Borel measurable on that open set by [F18]. [F3, F4, F5, F21, step 2.1, algebra]

3.3 The analytic case: structure and correctors. Assume now that $\partial\Omega$ is real analytic in the stated sense. Fix $\zeta\in\partial\Omega$ with its parametrization $\gamma$ and neighbourhood $U$. Since $\gamma'(0)\ne0$, after relabelling the two coordinates one has $\gamma_1'(0)\ne0$, and the inverse function theorem applied to the $C^1$ map $t\mapsto\gamma_1(t)$ gives a $C^1$ inverse $x\mapsto t(x)$ near $x_0=\gamma_1(0)$ with $\gamma_1(t(x))=x$. Hence near $\zeta$ the boundary is the graph of the $C^1$ function $x\mapsto\gamma_2(t(x))$ and $\Omega\cap U$ is locally one of the two components of the complement of that graph; reflecting the second coordinate if necessary, a rigid change of coordinates, makes $\Omega$ locally the subgraph. Therefore $\Omega$ is a bounded $C^1$ domain, so $\partial\Omega$ carries the finite surface measure $ds$ and the continuous outward unit normal $\nu$ of [F10]. Moreover [F12] applies with $D=\Omega$: every boundary point of $\Omega$ is regular and the Perron corrector $h_a=-\log|\cdot-a|-g_\Omega(\cdot,a)$ is of class $C^2(\overline\Omega)$ for every $a\in\Omega$. Consequently $G_\Omega:=g_\Omega/(2\pi)$ is a Dirichlet Green function for $-\Delta$ on $\Omega$ whose correctors $H_a=h_a/(2\pi)$ satisfy $H_a\in C^2(\overline\Omega)$, since $\Phi(\xi-a)=-(2\pi)^{-1}\log|\xi-a|=H_a(\xi)$ for $\xi\in\partial\Omega$. [F1, F10, F12, F13, step 2.1, algebra]

4.1 The volume potential. With $f=-\Delta u\in L^\infty(\Omega)$ define $$V(z):=\frac{1}{2\pi}\int_\Omega g_\Omega(z,y)f(y)\,dA(y)\qquad(z\in\Omega).$$ For fixed $z$ the integrand is Borel measurable in $y$ by step 3.2, and step 3.1 together with step 1.2 bounds its integral by $\frac{1}{2\pi}\|f\|_\infty(C_*\,|\Omega|+J_0)<\infty$; hence $V(z)$ is a well-defined finite real number for every $z\in\Omega$. [F18, F20, step 3.1, step 3.2, step 1.2, given]

4.2 $V$ is continuous on $\Omega$. Let $z_n\to z$ in $\Omega$, all terms in a compact $K\subset\Omega$, and let $\varepsilon>0$. Put $J(\delta):=\int_{B(0,2\delta)}|\log|w||\,dA(w)$; by [F6] the function $|\log|\cdot||$ is integrable on $B(0,1)$, and the integrands $\mathbf 1_{B(0,2\delta)}|\log|w||$ decrease to $0$ off the origin as $\delta\downarrow0$, so dominated convergence [F9] gives $J(\delta)\to0$. Fix $\delta\in(0,1)$ so small that $\|f\|_\infty(2C_*\pi\delta^2+2J(\delta))<\varepsilon$. On $B(z,\delta)$ the estimates of step 3.1 bound $|g_\Omega(z_n,y)-g_\Omega(z,y)|$ by $2C_*+|\log|z_n-y||+|\log|z-y||$, whose integral over $B(z,\delta)$ is at most $2C_*\pi\delta^2+2J(\delta)$ by translation invariance, so the contribution of $B(z,\delta)$ to $|V(z_n)-V(z)|$ is less than $\varepsilon/(2\pi)$. On $\Omega\setminus B(z,\delta)$ one has $|z_n-y|\ge\delta/2$ for large $n$, so the bound of step 3.1 gives $|g_\Omega(z_n,y)f(y)|\le (C_*+\max\{\log D,\log(2/\delta)\})\|f\|_\infty$, an integrable majorant on the bounded set $\Omega$; the integrands converge pointwise to $g_\Omega(z,y)f(y)$ off the null set $\{z\}$ by step 3.2, so dominated convergence makes this contribution tend to $0$. Hence $V(z_n)\to V(z)$. [F6, F9, F20, step 3.1, step 3.2, step 2.1, algebra]

4.3 $V$ vanishes at the boundary. Fix $\zeta\in\partial\Omega$ and $\delta\in(0,1)$. For $z\in\Omega\cap B(\zeta,\delta)$, $$\int_{\Omega\cap B(\zeta,2\delta)}g_\Omega(z,y)\,dA(y)\le\int_{B(\zeta,2\delta)}\bigl(C_*+|\log|z-y||\bigr)dA(y)\le C_*\pi(2\delta)^2+J(2\delta)$$ by steps 3.1 and 1.2, a bound independent of $z$ that tends to $0$ with $\delta$. On the complement $\Omega\setminus B(\zeta,2\delta)$ the kernel obeys $g_\Omega(z,y)\le C_*+\max\{\log D,\log(1/\delta)\}$ for $z\in\Omega\cap B(\zeta,\delta)$, and for each fixed $y\in\Omega\setminus B(\zeta,2\delta)$ one has $g_\Omega(z,y)\to0$ as $z\to\zeta$ by the boundary limit of step 2.1 at the regular point $\zeta$. Given $\varepsilon>0$, choose $\delta$ first and then $z$ close enough to $\zeta$; dominated convergence on the finite-measure set $\Omega\setminus B(\zeta,2\delta)$ makes the second contribution small, so $\lim_{z\to\zeta}V(z)=0$. [F1, F9, F20, step 2.1, step 3.1, step 1.2, algebra]

4.4 Distributional Laplacian of $V$. Let $\phi\in C_c^\infty(\Omega)$ be a real test function with compact support $K$. The double integral $\int_\Omega\int_\Omega|g_\Omega(z,y)f(y)\Delta\phi(z)|\,dA(y)\,dA(z)$ is finite because for $z\in K$ the inner integral is at most $\|f\|_\infty(C_*|\Omega|+J_0)$ by steps 3.1 and 1.2. Fubini's theorem and the definition of the distributional Laplacian therefore give $$\langle\Delta T_V,\phi\rangle=\int_\Omega V\Delta\phi=\frac{1}{2\pi}\int_\Omega f(y)\Bigl[\int_\Omega g_\Omega(z,y)\Delta\phi(z)\,dA(z)\Bigr]dA(y).$$ The inner bracket is $\langle T_{g_\Omega(\cdot,y)},\Delta\phi\rangle=\langle\Delta T_{g_\Omega(\cdot,y)},\phi\rangle=-2\pi\phi(y)$ by the distributional identity of step 2.1, so $\langle\Delta T_V,\phi\rangle=-\int_\Omega f\phi=-\langle T_f,\phi\rangle$: that is $\Delta T_V=-T_f$. [F7, F9, F20, step 2.1, step 3.1, step 1.2, given]

4.5 The analytic case: a dense class with $C^2$ harmonic extensions. Let $A\subseteq C(\partial\Omega,\mathbb R)$ be the set of restrictions to $\partial\Omega$ of polynomials in the two real coordinates. Then $A$ contains the constants, is closed under sums and products, and separates points of the compact metric space $\partial\Omega$; by [F15] it is uniformly dense in $C(\partial\Omega,\mathbb R)$. Fix $\phi=p|_{\partial\Omega}\in A$. Complexifying the power series of $\gamma$ at $0$ gives a holomorphic $\Gamma$ on a disc $D(0,r)$ with $\Gamma(0)=\zeta$, $\Gamma=\gamma$ on the real interval and $\Gamma'(0)\ne0$; by the holomorphic inverse function theorem, after shrinking $r$, $\Gamma$ is a biholomorphism onto a neighbourhood $V$ of $\zeta$ that maps the upper half-disc onto $\Omega\cap V$ (replacing $\gamma$ by $t\mapsto\gamma(-t)$ if necessary). Put $w:=H_\phi\circ\Gamma$; by [F14] and [F3] the function $w$ is harmonic on the half-disc and continuous on its closure with $w(t)=\phi(\gamma(t))$ for $t\in(-r,r)$. Here $t\mapsto\phi(\gamma(t))=p(\gamma(t))$ is real analytic by [F13], so it equals $\sum_na_nt^n$ on some interval $(-r',r')$; the sum $F(w):=\sum_na_nw^n$ is holomorphic on $|w|<r'$, both components of $F$ are smooth by [F13], so the real part $u_{\mathrm{loc}}:=\operatorname{Re}F$ is harmonic there by the $C^2$ components theorem with $u_{\mathrm{loc}}(t)=\phi(\gamma(t))$ on the edge, and $v:=w-u_{\mathrm{loc}}$ is harmonic on the half-disc, continuous on its closure and zero on the edge. By [F14] the odd reflection of (a rescaled) $v$ is harmonic on the full disc, so $v$ is $C^2$ up to the edge and $w=u_{\mathrm{loc}}+v$ is $C^2$ on the closed half-disc; transferring through the biholomorphism $\Gamma$ shows that $H_\phi$ agrees near the arc with a $C^2$ function on a neighbourhood of the boundary. As $\zeta$ was arbitrary, $H_\phi\in C^2(\overline\Omega)$, and $H_\phi$ is harmonic with $\Delta H_\phi=0$. [F3, F13, F14, F15, step 2.1, step 3.3, algebra]

4.6 The kernel in terms of the Green function. By symmetry [F2], $g_\Omega(x,y)=g_\Omega(y,x)$ for distinct $x,y$, and by step 3.3 the function $y\mapsto g_\Omega(y,x)=-\log|y-x|-h_x(y)$ is of class $C^2$ near $\partial\Omega$; hence the trace $y\mapsto g_\Omega(x,y)$ has a classical normal derivative $\partial_{\nu_y}g_\Omega(x,y)$ there. The boundary-slot derivative of [F11] is the trace of $D_z\bigl(\Phi(z-x)-H_x(z)\bigr)\cdot\nu(y)$, and $\Phi(z-x)-H_x(z)=g_\Omega(z,x)/(2\pi)$; by symmetry, $\partial_{\nu_y}g_\Omega(z,x)|_{z=y}=\partial_{\nu_y}g_\Omega(x,y)$. Therefore $P_\Omega(x,y)=-\frac{1}{2\pi}\partial_{\nu_y}g_\Omega(x,y)$ for every $y\in\partial\Omega$. [F2, F10, F11, step 3.3, algebra]

5.1 $u-V$ is distributionally harmonic. Since $u\in C^2(\Omega)$, [F7] gives $\Delta T_u=T_{\Delta u}=T_{-f}$; subtracting the identity of step 4.4 and using linearity of the embedding and of distributional differentiation, $\Delta T_{u-V}=T_{-f}+T_f=0$ as distributions on $\Omega$. [F7, step 4.4, given]

5.2 Applying the PDE representation formula. In the analytic case, steps 3.3 and 4.5 provide: the bounded $C^1$ domain $\Omega$; the Dirichlet Green function $G_\Omega=g_\Omega/(2\pi)$ with $C^2(\overline\Omega)$ correctors; and the uniformly dense class $A$ of continuous data each of which has a harmonic $C^2(\overline\Omega)$ extension, namely $H_\phi$. In the alternative hypothesis of the statement the corresponding dense class and $C^2$ harmonic extensions, together with the $C^2$ corrector condition, are assumed, and the assumed extension of $\phi$ coincides with $H_\phi$ by the uniqueness in [F3]. In both cases [F11] applies with $U:=H_\phi$ for $\phi\in A$, and $\Delta H_\phi=0$, so $$H_\phi(x)=\int_{\partial\Omega}P_\Omega(x,y)\phi(y)\,dS(y),\qquad P_\Omega(x,y)=-\partial_{\nu_y}G_\Omega(x,y)\ge0,\qquad \int_{\partial\Omega}P_\Omega(x,y)\,dS(y)=1$$ for every $x\in\Omega$; and by [F3], $\int_{\partial\Omega}\phi\,d\omega_\Omega^x=H_\phi(x)$. [F3, F11, step 3.3, step 4.5, given]

6.1 $u-V$ is harmonic. By [A1] Countable Choice holds, so [F8] applies and there is a unique smooth harmonic $h$ on $\Omega$ with $T_{u-V}=T_h$; injectivity of the embedding modulo almost-everywhere equality gives $u-V=h$ almost everywhere. Both $u-V$ (by step 4.2 and continuity of $u$) and $h$ are continuous on $\Omega$, so the set where they differ is open and null, hence empty: a nonempty open set contains a ball of radius $r>0$, whose area is $\pi r^2>0$ by the polar and translation formulas in [F6]; therefore $u-V=h$ everywhere on $\Omega$. [A1, F6, F8, F18, step 4.2, step 5.1, given]

7.1 The boundary values and harmonic measure. By step 4.3, $V(z)\to0$ as $z\to\zeta$ for every $\zeta\in\partial\Omega$, while $u(z)\to u(\zeta)$ by continuity; hence $h(z)=u(z)-V(z)\to u(\zeta)$. Thus $h$ extends continuously to $\overline\Omega$ with boundary values $u|_{\partial\Omega}$, and the uniqueness of the continuous harmonic extension in [F3] gives $h(z)=H_{u|_{\partial\Omega}}(z)=\int_{\partial\Omega}u\,d\omega_\Omega^z$ for every $z\in\Omega$. [F3, step 1.1, step 4.3, step 6.1]

8.1 The representation formula. For $z\in\Omega$, $$u(z)=h(z)+V(z)=\int_{\partial\Omega}u\,d\omega_\Omega^z+\frac{1}{2\pi}\int_\Omega g_\Omega(z,y)f(y)\,dA(y)=\int_{\partial\Omega}u\,d\omega_\Omega^z-\frac{1}{2\pi}\int_\Omega g_\Omega(z,y)\Delta u(y)\,dA(y).$$ The boundary integral is absolutely finite because $\omega_\Omega^z$ is a probability measure, and the volume integral because $\frac{1}{2\pi}\int_\Omega|g_\Omega(z,y)\Delta u(y)|\,dA(y)\le \frac{1}{2\pi}\|\Delta u\|_\infty(C_*|\Omega|+J_0)$ by steps 3.1 and 1.2. Dependent Choice supplies harmonic measure through [F3] and implies the Countable Choice used in the kernel's distributional normalization [F1], Weyl's lemma [F8], and the measure and integration interfaces [F6], [F9], [F19] and [F20]; the density clause also uses it through [F11], [F12] and [F16]. No stronger choice principle is used. The statement is formulated for real $u$; a complex-valued $u$ is handled by applying the result to its real and imaginary parts. This proves clause 1. [A1, F3, F8, F9, F20, step 3.1, step 1.2, step 7.1, given]

9.1 Passage to all continuous data and identification of the measure. For $\phi\in A$ and $x\in\Omega$, steps 5.2 and 4.6 give $\int_{\partial\Omega}\phi\,d\omega_\Omega^x=\int_{\partial\Omega}\phi(y)P_\Omega(x,y)\,dS(y)$. Define $\nu(E):=\int_E P_\Omega(x,y)\,dS(y)$ for Borel $E\subseteq\partial\Omega$, the surface integral of the nonnegative Borel function $P_\Omega(x,\cdot)\mathbf 1_E$ as in [F10]. Countable additivity of $\nu$ follows from the finite chart sum defining $dS$ and additivity of the Lebesgue integral over countable families of nonnegative functions [F19]; and $\nu(\partial\Omega)=\int_{\partial\Omega}P_\Omega(x,y)\,dS(y)=1$ by step 5.2. The boundary $\partial\Omega$ is a compact metric subspace of $\mathbb R^2$, and the intersections with $\partial\Omega$ of the rational open boxes of $\mathbb R^2$ form a countable basis of its topology, so $\partial\Omega$ is a second-countable locally compact Hausdorff space and [F16] makes $\nu$ Radon. For $\phi\in A$ the two probability integrals agree, and if $\psi\in C(\partial\Omega,\mathbb R)$ is arbitrary then uniform density of $A$ and the bound $\|\psi-\phi\|_\infty$ for both probability measures extend the identity to $\psi$; hence $\int_{\partial\Omega}\psi\,d\nu=H_\psi(x)$ for every continuous $\psi$, that is, $\nu$ is a harmonic measure for $\Omega$ at $x$. By the uniqueness in [F3], $\nu=\omega_\Omega^x$, and step 4.6 converts this into $$\omega_\Omega^x(E)=-\frac{1}{2\pi}\int_E\partial_{\nu_y}g_\Omega(x,y)\,ds(y)$$ for every Borel set $E\subseteq\partial\Omega$, which is the density clause. In the analytic case this used [F12] and the polynomial class; in the alternative case it used the assumed dense class and correctors. No pointwise Poisson density for arbitrary continuous data and no $C^2(\Omega)\cap C^1(\overline\Omega)$ representation without the bounded-Laplacian hypothesis is claimed. ∎



## Source notes

Lyubich §§10.8-10.9, printed pp. 171-172, defines harmonic measure as the measure representing evaluation of the Dirichlet solution at an interior point and defines the Green function by the Dirichlet zero boundary condition with a logarithmic pole; the present item combines those two objects and fixes the $2\pi$ normalization used throughout this page. Axler-Bourdon-Ramey Chapter 11, printed pp. 223-237, treats the bounded-domain Dirichlet problem and boundary behavior; the present proof uses only the Perron envelope, the maximum principle and the analytic-boundary reflection argument, which are developed in this library's own items. Saff §3, printed pp. 186-189, records the Green function with a finite pole, Green's formula, and the identification of the equilibrium measure with $(2\pi)^{-1}\partial g/\partial n\,ds$ in the outer normal direction; the sign convention here is the opposite one, because the normal is the outward normal of $\Omega$ and the coefficient is $-1/(2\pi)$, and it is derived from the PDE Poisson kernel rather than quoted. The dominated-convergence and Fubini arguments controlling the singular integrand, the boundary-limit estimate, and the a.e.-to-everywhere upgrade through Weyl's lemma are proved here and are not attributed to a source.
