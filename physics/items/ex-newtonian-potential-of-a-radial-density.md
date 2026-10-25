---
id: ex-newtonian-potential-of-a-radial-density
kind: example
title: Newtonian potential of radial compact data
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.3 Problem 5.18, printed p.123; equation (5.24), printed p.117"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.11 Newton potential and radial ODE, printed pp.69–72; Schmidt uses ΔF=δ₀, so its potential is the negative of the one used here"
proof_strategy: direct
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - cor-primitives-of-a-continuous-function
  - cor-regular-level-set-local-graph-theorem
  - cor-volume-of-the-unit-n-ball
  - def-borel-sigma-algebra
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-classical-normal-derivative
  - def-countable-choice
  - def-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - def-euclidean-linear-map
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - def-jacobian-matrix-and-gradient
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-locally-integrable-function-on-r-n
  - def-newtonian-potential
  - def-real-power
  - def-regular-critical-points-values-and-level-sets
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-total-derivative-in-euclidean-space
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-derivative-of-a-power
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data
  - lem-standard-basis-of-f-n
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-algebra-of-derivatives
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - thm-chain-rule-for-total-derivatives
  - thm-compact-subset-is-closed-and-bounded
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-logarithm-derivative-and-integral
  - thm-newtonian-potential-for-holder-data-is-classical
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-real-gamma-functional-equation
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-total-derivative-computes-directional-and-partial-derivatives
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice, let $n\ge2$ and $0<\alpha<1$, and let
$f\in C_c^{0,\alpha}(\mathbb R^n)$ be real-valued with $f(x)=\rho(|x|)$ for
every $x\in\mathbb R^n$, where $\rho(s):=f(se_1)$ for $s\ge0$. Let
$u=Nf$ be the Newtonian potential for the kernel normalized by
$-\Delta\Phi=\delta_0$. Then $u$ is radial, and writing $u(r)$ for its common
value on the sphere $|x|=r$ one has
$$u'(r)=-r^{1-n}\int_0^r s^{n-1}\rho(s)\,ds\qquad(r>0),$$
$$u(r)=u(0)-\int_0^r t^{1-n}\int_0^t s^{n-1}\rho(s)\,ds\,dt\qquad(r\ge0),$$
and
$$u(0)=\frac{1}{n-2}\int_0^\infty s\rho(s)\,ds\quad(n\ge3),\qquad u(0)=-\int_0^\infty s\log s\,\rho(s)\,ds\quad(n=2).$$
All three integrals are absolutely convergent.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, $0<\alpha<1$, the real-valued radial
datum $f\in C_c^{0,\alpha}(\mathbb R^n)$ with profile $\rho(s)=f(se_1)$, and
the kernel $\Phi$ of [F1].

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of
nonempty sets has a choice function ([[def-countable-choice]]).

[F1] The kernel is $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and
$\Phi(x)=-(2\pi)^{-1}\log|x|$ when $n=2$, off the pole; its value at the
pole may be assigned arbitrarily, and $\omega_{n-1}>0$ is the chart surface
measure ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] The Newtonian potential is $Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$ at
every point where the integral is absolutely finite
([[def-newtonian-potential]]).

[F3] For compactly supported bounded data, the defining integral of $Nf$ is
absolutely finite at every point and locally bounded
([[lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data]]).

[F4] For $f\in C_c^{0,\alpha}(\mathbb R^n)$ with $0<\alpha<1$, the Newtonian
potential lies in $C^2(\mathbb R^n)$ and satisfies $-\Delta Nf=f$ pointwise
([[thm-newtonian-potential-for-holder-data-is-classical]]).

[F5] For every nonnegative Borel $g$, polar coordinates give
$\int_{\mathbb R^n}g(x)\,dx=\int_0^\infty\int_{S^{n-1}}g(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F6] Chart surface measure agrees with the polar measure $\sigma$, satisfies
$\sigma(S^{n-1})=\omega_{n-1}=n|B_1|$, and scales by $R^{n-1}$ on spheres of
radius $R$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F7] The unit ball volume is $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$, and the real
gamma function satisfies $\Gamma(s+1)=s\Gamma(s)$ with $\Gamma(1)=1$
([[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]]).

[F8] Surface integration on a compact embedded $C^1$ hypersurface is defined by
chart integration, the integral of a constant is that constant times the
surface measure, and signed integrands with finite absolute integral are
integrated through their positive and negative parts
([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F9] For a bounded $C^1$ domain and $F\in C^1(\overline\Omega;\mathbb R^n)$,
$\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$
([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F10] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is
locally a $C^1$ graph with the domain on one side; its outward unit normal is
defined by those charts, and $F\in C^1(\overline\Omega)$ means $F$ and its
first derivatives extend continuously to the closure
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F11] For $F$ differentiable up to a boundary, the classical normal derivative
is $\partial_\nu F(x)=DF(x)\cdot\nu(x)$
([[def-classical-normal-derivative]]).

[F12] A positive-radius Euclidean sphere is a compact regular level set, hence
locally a $C^1$ graph, and $S_r=\{y:|y|=r\}$ with $B_r(0)$ locally on the inner
side: $S_r=F^{-1}(r^2)$ for $F(y)=\langle y,y\rangle$, whose continuous
coordinate partials give $DF(y)h=2\langle y,h\rangle$ with $DF(y)y=2r^2\ne0$ on
$S_r$, so $r^2$ is a regular value and the regular-level graph theorem applies
([[def-euclidean-spheres-and-closed-balls]],
[[cor-regular-level-set-local-graph-theorem]],
[[def-regular-critical-points-values-and-level-sets]],
[[def-euclidean-submersions-and-immersions]],
[[def-jacobian-matrix-and-gradient]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[lem-derivative-of-a-power]],
[[thm-algebra-of-derivatives]],
[[def-euclidean-inner-product]]).

[F13] The total chain rule computes derivatives of compositions; coordinate
partial derivatives are the total derivative applied to the standard basis
vectors; sums, products and quotients obey the derivative rules; $(t^\gamma)'=\gamma t^{\gamma-1}$
for real $\gamma$ and $\log'(t)=1/t$ on $t>0$
([[thm-chain-rule-for-total-derivatives]],
[[thm-total-derivative-computes-directional-and-partial-derivatives]],
[[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]],
[[thm-real-power-continuity-and-derivatives]],
[[thm-logarithm-derivative-and-integral]]).

[F14] The Laplacian is $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$
([[def-laplacian-of-a-c2-function]]).

[F15] A continuous real function on an interval has primitives, any two
primitives differ by a constant, and for any primitive $G$
$\int_a^b\Phi_0=G(b)-G(a)$ ([[cor-primitives-of-a-continuous-function]]).

[F16] The Euclidean inner product is bilinear and symmetric
([[def-euclidean-inner-product]]); a map is linear in the sense of
[[def-euclidean-linear-map]]; differentiability is defined by the total
derivative of [[def-total-derivative-in-euclidean-space]]; $C^1$ diffeomorphisms
are the bijective $C^1$ maps with $C^1$ inverse of
[[def-ck-euclidean-maps-and-diffeomorphisms]]; an invertible linear isometry of
$\mathbb R^n$ is an orthogonal operator
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]) and every
orthogonal operator has $|\det T|=1$
([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]);
a $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$
functions ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F17] Sums, products, absolute values and finite maxima of continuous
real-valued maps are continuous
([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F18] A compact set in a metric space is closed and bounded, and continuous
real functions on nonempty compact Euclidean sets are bounded
([[thm-compact-subset-is-closed-and-bounded]],
[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]); the
nonnegative integral is monotone, the Lebesgue integral is linear on $L^1$, and
a real function is integrable exactly when its absolute value is, its integral
being the difference of the integrals of its positive and negative parts
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F19] The Borel sigma-algebra is generated by the open sets
([[def-borel-sigma-algebra]]); continuous maps pull back Borel sets to Borel
sets; products, sums and absolute values of measurable functions are
measurable
([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]); every Borel
subset of $\mathbb R^n$ is Lebesgue measurable
([[thm-borel-sets-are-lebesgue-measurable]]); and the integral of a measurable
function over a measurable set is the integral of its product with the
indicator of that set ([[def-integral-over-a-measurable-set]]).

[F20] The normalized kernel is locally integrable
([[lem-laplace-fundamental-kernel-is-locally-integrable]],
[[def-locally-integrable-function-on-r-n]]).

[F21] For $a>0$ and real exponents, $a^{s+t}=a^sa^t$ and $a^{-s}=1/a^s$, and
positive real powers are positive ([[def-real-power]], [[thm-real-power-laws]]).

[F22] For $n\ge2$ the standard basis vector $e_1$ of $\mathbb R^n$ exists
([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 The profile $\rho(s)=f(se_1)$ is continuous on $[0,\infty)$ because $f$ is continuous and $e_1$ exists by [F22]; the support $\operatorname{supp}f$ is compact by hypothesis, hence bounded by [F18], so there is $R>0$ with $\rho(s)=0$ for $s\ge R$. Also $\|\rho\|_\infty\le\sup_{\mathbb R^n}|f|<\infty$: $f$ is continuous and vanishes off the compact set $\operatorname{supp}f$, so it is bounded by [F18]. By [F3] the defining integral for $Nf$ is absolutely finite at every $x$, and by [F4] the potential satisfies $Nf\in C^2(\mathbb R^n)$ with $-\Delta Nf=f$ pointwise. [given, F2, F3, F4, F18, F22]

1.2 We prove that $u=Nf$ is radial. Fix $x,x'\in\mathbb R^n$ with $|x|=|x'|$; if $x=x'$ there is nothing to prove, so assume $x\ne x'$ and put $v:=x-x'\ne0$ and $Qz:=z-2\frac{\langle z,v\rangle}{\langle v,v\rangle}v$. Bilinearity and symmetry of the inner product [F16] make $Q$ linear, and the expansion $\langle Qz,Qw\rangle=\langle z,w\rangle-4\frac{\langle z,v\rangle\langle w,v\rangle}{\langle v,v\rangle}+4\frac{\langle z,v\rangle\langle w,v\rangle}{\langle v,v\rangle}=\langle z,w\rangle$ shows that $Q$ preserves the inner product; also $\langle Qz,v\rangle=-\langle z,v\rangle$, so $Q^2z=z$ and $Q$ is a bijective linear isometry, that is, an orthogonal operator [F16]. Since $2\langle x,v\rangle=2(|x|^2-\langle x,x'\rangle)=|v|^2$ and $x\ne x'$, we get $Qx=x-v=x'$. The identity $Q(z+h)-Qz-Qh=0$ shows $DQ(z)=Q$ for every $z$, so $Q$ is $C^1$ with derivative the invertible map $Q$; as $Q^{-1}=Q$, it is a $C^1$ diffeomorphism of $\mathbb R^n$ with $|\det DQ(z)|=|\det Q|=1$ [F16]. Choose the representative of $\Phi$ with $\Phi(0)=0$; then $|Qw|=|w|$ gives $\Phi(Qw)=\Phi(w)$ for every $w$, because the two profiles in [F1] depend only on the modulus, and likewise $f(Qz)=\rho(|Qz|)=\rho(|z|)=f(z)$. Put $g(y):=\Phi(x'-y)f(y)$; by [F3] the integral $\int_{\mathbb R^n}|g|\,d\lambda_n$ is finite, so $g\in L^1(\lambda_n)$ and the change-of-variables formula [F16] gives $u(x')=\int_{\mathbb R^n}g\,d\lambda_n=\int_{\mathbb R^n}g(Qz)\,d\lambda_n(z)$. For every $z$ the transformed integrand equals $\Phi(x'-Qz)f(Qz)=\Phi(Q(x-z))f(z)=\Phi(x-z)f(z)$, so $u(x')=u(x)$. Applying this with $x'=|x|e_1$ (and trivially for $x=0$) gives $u(x)=u(|x|e_1)$ for every $x$, so $u$ is radial. [given, A1, F1, F2, F3, F16]

1.3 From now on write $u(r)$ for the common value of the radial $u$ at points of modulus $r$, and use $e_1$ for the standard basis vector with coordinate index $1$. Since $u\in C^2(\mathbb R^n)$ by [F4], the profile is continuous on $[0,\infty)$ and, for $r>0$, differentiable with $u'(r)=Du(re_1)\cdot e_1$: the chain rule applied to the affine map $r\mapsto re_1$, whose total derivative is the constant map $h\mapsto he_1$, with [F13] and [F16] gives $D(u\circ e_1)(r)=Du(re_1)\circ e_1$. For each $i$ the one-variable function $h\mapsto u(he_i)$ is even, because $|he_i|=|-he_i|$ and $u$ is radial; consequently $\partial_iu(0)=0$, since the difference quotient at $h\ne0$ equals the negative of the quotient at $-h$ and both tend to $\partial_iu(0)$ as $h\to0$. Thus $Du(0)=0$, and by continuity of $Du$ [F4] the profile's one-sided derivative at the origin is $\lim_{r\downarrow0}u'(r)=Du(0)\cdot e_1=0$. [given, F4, F13, F16, algebra]

1.4 Fix $r>0$. The ball $B_r(0)$ is a bounded $C^1$ domain with outward unit normal $\nu(y)=y/r$ on its boundary sphere $S_r$, which is the regular level set $\{y:|y|^2=r^2\}$ [F10, F12]. Since $u\in C^2(\mathbb R^n)$, the field $\nabla u$ lies in $C^1(\overline{B_r(0)};\mathbb R^n)$, so [F9] applies and, with [F14], gives $\int_{B_r(0)}\Delta u\,dy=\int_{S_r}\nabla u\cdot\nu\,dS=\int_{S_r}\partial_\nu u\,dS$. For $y\ne0$ the chain rule [F13] applied to the composition of the profile $u(\,\cdot\,)$ with $|\cdot|$, together with the derivative $\nabla|\cdot|(y)=y/|y|$ obtained from $|y|=(|y|^2)^{1/2}$, $\nabla(|y|^2)=2y$ and the half-power rule, gives $\nabla u(y)=u'(|y|)y/|y|$; hence $\partial_\nu u(y)=u'(r)$ for every $y\in S_r$ [F11]. Since $u'(r)$ is constant on $S_r$ and $\sigma(S^{n-1})=\omega_{n-1}$ with radius scaling $r^{n-1}$ [F6], the surface integral equals $\omega_{n-1}r^{n-1}u'(r)$ by [F8]. On the other hand $\Delta u=-f$ pointwise by [F4], so $\int_{B_r(0)}\Delta u=-\int_{B_r(0)}f$; the product $f\chi_{B_r(0)}$ and its positive and negative parts are Borel, because $f$ is continuous, the open ball is Borel and the operations preserve measurability [F19], so applying [F5] to those parts, noting $\chi_{B_r(0)}(s\omega)=1$ exactly for $s<r$, and subtracting with the signed-integral convention [F18] gives $\int_{B_r(0)}f=\omega_{n-1}\int_0^r s^{n-1}\rho(s)\,ds$. Comparing the two values of $\int_{B_r(0)}\Delta u$ and dividing by $\omega_{n-1}r^{n-1}$ yields $u'(r)=-r^{1-n}\int_0^r s^{n-1}\rho(s)\,ds$. [given, A1, F4, F5, F6, F8, F9, F10, F11, F12, F13, F14, F18, F19, algebra]

2.1 Define $G(t):=t^{1-n}\int_0^t s^{n-1}\rho(s)\,ds$ for $t>0$ and $G(0):=0$. For $0\le t$ we have $\bigl|\int_0^t s^{n-1}\rho(s)\,ds\bigr|\le\|\rho\|_\infty t^n/n$ by [F18], so $|G(t)|\le\|\rho\|_\infty t/n$ and $G(t)\to0$ as $t\downarrow0$; on $(0,\infty)$ the integral $t\mapsto\int_0^t s^{n-1}\rho(s)\,ds$ is a primitive of the continuous function $t\mapsto t^{n-1}\rho(t)$ [F15], hence is differentiable and continuous there, and $G$ is a product of continuous functions on $(0,\infty)$ [F17]. Step 1.4 gives $u'(t)=-G(t)$ for every $t>0$, and step 1.3 gives the one-sided derivative $u'(0)=0=-G(0)$; thus the profile $u$ is a primitive of the continuous function $-G$ on the interval $[0,\infty)$ [F15]. Applying the evaluation clause of [F15] with $a=0$ and $b=r>0$ gives $u(r)-u(0)=\int_0^r-G(t)\,dt=-\int_0^r t^{1-n}\int_0^t s^{n-1}\rho(s)\,ds\,dt$, which is the displayed identity; at $r=0$ both sides are $0$. [given, F15, F17, F18, step 1.3, step 1.4, algebra]

2.2 It remains to compute the value at the origin. By [F2], [F3] and $\Phi(-y)=\Phi(y)$, where both sides equal the profile evaluated at $|y|$ under the representative chosen in step 1.2, $u(0)=\int_{\mathbb R^n}\Phi(y)\rho(|y|)\,dy$. The integrand is Borel [F1, F19] and bounded in modulus by $\|\rho\|_\infty|\Phi(y)|\mathbf1_{B_R(0)}(y)$, since $\rho$ vanishes outside that ball; hence it is integrable, because $|\Phi|$ is locally integrable [F20] and the remaining region is bounded [F18]. Therefore [F5] applied to the positive and negative parts and the subtraction rule of [F18] give $$u(0)=\int_0^\infty\int_{S^{n-1}}\Phi(s\omega)\rho(s)s^{n-1}\,d\sigma(\omega)\,ds=\omega_{n-1}\int_0^\infty q_n(s)\rho(s)s^{n-1}\,ds,$$ where $q_n$ is the radial profile of [F1] and we used $\sigma(S^{n-1})=\omega_{n-1}$ [F6] and the fact that $q_n(s)\rho(s)$ is independent of $\omega$. If $n\ge3$, then $\omega_{n-1}q_n(s)s^{n-1}=s/(n-2)$, so $u(0)=\frac{1}{n-2}\int_0^\infty s\rho(s)\,ds$. If $n=2$, then [F7] gives $|B_1|=V_2(1)=\pi/\Gamma(2)=\pi$ and, with [F6], $\omega_1=|S^1|=2|B_1|=2\pi$, so $\omega_1q_2(s)s=-s\log s$; the integral $-\int_0^\infty s\log s\,\rho(s)\,ds$ is absolutely convergent because $\rho$ vanishes outside $[0,R]$ and $\int_0^R s|\log s|\,ds<\infty$ by [F13] and [F21]. This gives the two displayed values of $u(0)$. [given, A1, F1, F2, F3, F5, F6, F7, F13, F18, F19, F20, F21, step 1.2, algebra]

3.1 If $\rho\equiv0$ (including the case of empty support), then $f=0$, the integrands in steps 1.4, 2.1 and 2.2 all vanish, and $u\equiv0$, so every displayed identity reduces to $0=0$; the estimates in steps 1.4 and 2.2 are then trivially finite. The cases $n=2$ and $n\ge3$ are exhaustive under $n\ge2$ and are exactly the two alternatives in [F1]; dimension one is excluded by the stated hypothesis and is not silently included. The derivative formula is asserted only for $r>0$; at $r=0$ step 1.3 supplies the one-sided derivative and step 2.1 the integrated identity. Countable Choice is the sole set-theoretic assumption: it is inherited from the kernel, potential, polar, surface and divergence conventions of [F1]–[F5], [F9] and [F16], while the pointwise reflection, chain-rule and one-dimensional integration arguments use no further choice. For complex-valued radial data the result applies to $\mathrm{Re}\,f$ and $\mathrm{Im}\,f$, whose profiles are the real and imaginary parts of $\rho$. [given, A1, F1, F2, F3, F4, F5, F9, F16, step 1.4, step 2.1, step 2.2, cases] ∎

## Source notes

Teschl §5.3 Problem 5.18, printed p.123, states the closed forms
$u(x)=\frac1{n-2}\int_0^\infty\min(1,s/r)^{n-2}F(s)s\,ds$ for $n\ge3$ and
$u(x)=-\int_0^\infty\log(\max(s,r))F(s)s\,ds$ for $n=2$ as a problem, not as a
proof; differentiating these closed forms reproduces the two displayed
identities of the Statement, and their value at the origin is exactly the
$u(0)$ computed in step 2.2. Schmidt §2.11, printed pp.69–72, derives the radial
ODE $u''+\frac{n-1}{r}u'=\pm\rho$ for the Newton potential and integrates it;
Schmidt normalizes $\Delta F=\delta_0$, so his potential is $-u$ and his
equation has the opposite sign. The present proof instead avoids the radial
Hessian computation: it obtains $u'$ from the divergence theorem on a ball
using the exact surface measure of [F6], obtains the integrated formula from
the primitives corollary, and computes $u(0)$ by polar coordinates. The
problem itself invokes a solution to a radial ODE whose justification is
supplied here by steps 1.3–2.1.
