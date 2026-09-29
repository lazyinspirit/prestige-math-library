---
id: thm-minus-laplacian-of-the-fundamental-solution-is-dirac
kind: theorem
title: The negative Laplacian of the fundamental solution is the unit Dirac distribution
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.5 Theorem 2.23 and proof, printed p.32 (PDF p.38); §2.6.1 equations (2.12), (2.14)–(2.15), and §2.6.2 distributional interpretation, printed pp.33–34 (PDF pp.39–40)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.3 equations (5.20)–(5.26), printed pp.117–118"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.1 fundamental-solution convention and flux normalization, printed pp.11–12; Schmidt uses the opposite sign"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - cor-second-green-identity-on-a-bounded-c-one-domain
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-regular-level-set-local-graph-theorem
  - cor-volume-of-the-unit-n-ball
  - def-directional-and-partial-derivatives
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-regular-critical-points-values-and-level-sets
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-logarithm-derivative-and-integral
  - thm-real-power-continuity-and-derivatives
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-countable-choice
  - def-distribution
  - def-distributional-derivative
  - def-dirac-delta-and-its-derivatives
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-fixed-support-test-function-frechet-space
  - def-fundamental-solution-of-a-constant-coefficient-operator
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-metric-ball
  - def-measure-preserving-transformation-and-system
  - def-regular-distribution-from-a-locally-integrable-function
  - def-test-function-space-d-of-an-open-set
  - def-translation-of-a-function-on-rn
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-compact-subset-is-closed-and-bounded
  - thm-dominated-convergence
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-real-gamma-functional-equation
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice and let $n\ge2$. The locally integrable kernel $\Phi$ of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]] defines a regular distribution $T_\Phi\in\mathcal D'(\mathbb R^n)$ and satisfies $-\Delta T_\Phi=\delta_0$. For every $y\in\mathbb R^n$, the regular distribution associated with $x\mapsto\Phi(x-y)$ satisfies $-\Delta_x T_{\Phi(\cdot-y)}=\delta_y$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge2$, and use the normalized kernel $\Phi$ and its locally integrable representative.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function; it is assumed by the kernel, surface-integration and Green-identity interfaces used here. ([[def-countable-choice]]).

[F1] The kernel is $|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $-(2\pi)^{-1}\log|x|$ for $n=2$ away from the pole; its value at zero may be assigned arbitrarily. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] The normalized kernel is locally integrable for $n\ge2$. ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F3] Under Countable Choice, the regular-functional map embeds $L^1_{\mathrm{loc}}$ modulo almost-everywhere equality into $\mathcal D'$. ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F4] Distributional derivatives satisfy $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$. ([[def-distributional-derivative]]).

[F5] The Dirac distribution is $\delta_a(\varphi)=\varphi(a)$. ([[def-dirac-delta-and-its-derivatives]]).

[F6] For real $u,v\in C^2(\overline\Omega)$ on a bounded $C^1$ domain, the second Green identity is $\int_\Omega(v\Delta u-u\Delta v)=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)\,dS$, with outward normals. ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F7] For every $r>0$, $S_r$ is compact and has $C^1$ graph charts near each point: $F(x)=\langle x,x\rangle$ has continuous coordinate partials $\partial_iF(x)=2x_i$ with sum and power rules for one-variable derivatives, so the continuous-partials theorem gives the total derivative $DF(x)h=2\langle x,h\rangle$; at $x\in S_r=F^{-1}(r^2)$ one has $DF(x)x=2r^2\ne0$, so $DF(x)$ is surjective and $r^2$ is a regular value of $F$, and the regular-level graph theorem gives the local $C^1$ charts of $S_r$. ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[cor-regular-level-set-local-graph-theorem]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]]).

[F8] For $r>0$, set $q_n(r)=r^{2-n}/((n-2)\omega_{n-1})$ if $n\ge3$ and $q_2(r)=-(2\pi)^{-1}\log r$. Differentiation gives $q_n'(r)=-1/(\omega_{n-1}r^{n-1})$ if $n\ge3$ and $q_2'(r)=-1/(2\pi r)$; at $x=r\omega$, $|\omega|=1$, the outward radial derivative is $D_\omega\Phi(x)=q_n'(r)$. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[def-directional-and-partial-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-real-power-continuity-and-derivatives]]).

[F9] If measurable functions converge almost everywhere and are dominated by one integrable function, their integrals converge. ([[thm-dominated-convergence]]).

[F10] A test function is smooth and has compact support. ([[def-test-function-space-d-of-an-open-set]]).

[F11] For a test supported in a compact $K$, its fixed-support derivative seminorms are finite; in particular its first and second derivatives are bounded. ([[def-fixed-support-test-function-frechet-space]]).

[F12] The Euclidean norm obeys the triangle and reverse triangle inequalities and is continuous. ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F13] A compact subset of $\mathbb R^n$ is bounded. ([[thm-compact-subset-is-closed-and-bounded]]).

[F14] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally a $C^1$ graph with the domain on one side; connectedness is not required. ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F15] The kernel is smooth and harmonic away from its pole. ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F16] Translation of a distribution commutes with every constant-coefficient differential operator, and a fundamental solution translating $\delta_0$ gives $\delta_y$. ([[def-fundamental-solution-of-a-constant-coefficient-operator]]).

[F17] Distributions are complex-linear functionals, with bilinear pairing and no conjugation. ([[def-distribution]]).

[F18] Under Countable Choice, a singleton in $\mathbb R^n$ is Lebesgue null. ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F19] The regular distribution associated with a locally integrable function is defined by $\langle T_f,\varphi\rangle=\int f\varphi$. ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F20] $S_r=\{x:|x|=r\}$ and $\overline B_r=\{x:|x|\le r\}$. ([[def-euclidean-spheres-and-closed-balls]]).

[F21] $B_R(0)=\{x:|x|<R\}$ for the Euclidean metric. ([[def-metric-ball]], [[def-euclidean-inner-product]]).

[F22] Lebesgue measure is invariant under translations, including measurability of translates. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F23] Integrals of integrable functions are invariant under measure-preserving maps. ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F24] The translate convention is $(\tau_y f)(x)=f(x-y)$. ([[def-translation-of-a-function-on-rn]]).

[F25] The Laplacian is the sum of the pure second coordinate derivatives. ([[def-laplacian-of-a-c2-function]]).

[F26] A measurable map preserves measure when $\mu(T^{-1}E)=\mu(E)$ for every measurable set $E$. ([[def-measure-preserving-transformation-and-system]]).

[F27] Under [A1], surface integration is defined for nonnegative Borel functions on a compact embedded $C^1$ hypersurface; monotonicity and homogeneity of the nonnegative integral show that a bounded continuous function is surface-integrable whenever the surface has finite area, with $\int_S|g|\,dS\le \sup_S|g|\int_S1\,dS$. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F28] For every $r>0$ the sphere $S_r$ has surface measure $|S_r|=\omega_{n-1}r^{n-1}$: the unit sphere has measure $\omega_{n-1}=|S^{n-1}|$ in the kernel convention, scaling by $r$ multiplies surface measure by $r^{n-1}$, and $|S^{n-1}|=n|B_1|$; in dimension two $|B_1|=V_2(1)=\pi$ because $\Gamma(2)=1$, so $\omega_1=|S^1|=2\pi$. Combined with the radial derivative [F8], the normalized outward flux on every centered sphere is $-\int_{S_r}\partial_\nu\Phi\,dS=-q_n'(r)\int_{S_r}1\,dS=1$. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]]).


## Proof

**Proof technique:** direct.

1.1 First take a real-valued test function $\varphi$. If its support is empty then $\varphi=0$ and the desired pairing identity is immediate. Otherwise [F10] and [F13] let us choose $R>0$ with $\operatorname{supp}\varphi\subset B_R(0)$. For $0<\varepsilon<\min\{1,R\}$ put $\Omega_\varepsilon=\{z:\varepsilon<|z|<R\}$. A point with radius strictly between $\varepsilon$ and $R$ has a whole small ball in this set by [F12]; radial perturbations at either boundary sphere show $\partial\Omega_\varepsilon=S_\varepsilon\cup S_R$ by [F20]–[F21]. The point $((R+\varepsilon)/2,0,\ldots,0)$ lies in it and it is bounded by $R$. Near an outer-sphere point the inner-radius constraint is inactive and the annulus is the inside of that sphere; near an inner-sphere point the outer-radius constraint is inactive and the annulus is the outside of that sphere. The graph charts [F7], with a coordinate reflection when needed, therefore show that the annulus lies locally on one side of each $C^1$ graph. Its outward normals are $+\omega$ on $S_R$ and $-\omega$ on $S_\varepsilon$ for $\omega=x/|x|$, since the annulus lies inside the outer sphere and outside the inner sphere. Thus [F14] makes $\Omega_\varepsilon$ a bounded $C^1$ domain; connectedness is not required. [A1, given, F7, F10, F12, F13, F14, F20, F21, cases]

1.2 Let $C_1:=\sqrt n\,p_1(\varphi)$, where $p_1$ is the finite fixed-support seminorm from [F11]; then $C_1$ bounds $|D\varphi|$. Since the outer radial derivative [F8] is constant on $S_\varepsilon$, the flux identity [F28] gives $-q_n'(\varepsilon)\int_{S_\varepsilon}1\,dS=1$, so the sphere area is $\omega_{n-1}\varepsilon^{n-1}$ if $n\ge3$ and $2\pi\varepsilon$ if $n=2$. By [F27], the bounded continuous inner-boundary integrand is integrable. For $n\ge3$, its absolute integral is at most $\varepsilon C_1/(n-2)$; for $n=2$ it is at most $\varepsilon|\log\varepsilon|C_1$. Both bounds tend to zero as $\varepsilon\downarrow0$. [A1, F1, F8, F28, F11, F27, cases, algebra]

2.1 On $S_\varepsilon$, [F8] gives the outward radial derivative $q_n'(\varepsilon)$, and step 1.1 gives the annulus normal $-\omega$, so $\partial_{\nu_{\rm ann}}\Phi=c_\varepsilon:=-q_n'(\varepsilon)>0$. The flux identity [F28] gives $c_\varepsilon\int_{S_\varepsilon}1\,dS=1$. By [F10] and [F27], the restriction of $\varphi$ is surface-integrable. Therefore $\int_{S_\varepsilon}\varphi\,\partial_{\nu_{\rm ann}}\Phi\,dS$ is the normalized spherical average of $\varphi$. Its difference from $\varphi(0)$ is at most $\sup_{|z|=\varepsilon}|\varphi(z)-\varphi(0)|$, which tends to zero by continuity at the origin. [A1, F28, F8, F10, F27, step 1.1]

2.2 By [F15], $\Phi$ is $C^2$ on a neighborhood of $\overline{\Omega_\varepsilon}$ and $\Delta\Phi=0$ there; [F10] gives the same regularity for $\varphi$. Apply [F6] with $u=\Phi$ and $v=\varphi$. The outer-boundary terms vanish because the support lies strictly inside $B_R(0)$. On the inner sphere the normal is outward from the annulus. Hence $-\int_{\Omega_\varepsilon}\Phi\Delta\varphi\,dz=\int_{S_\varepsilon}(\varphi\,\partial_{\nu_{\rm ann}}\Phi-\Phi\,\partial_{\nu_{\rm ann}}\varphi)\,dS$. [A1, F6, F10, F15, step 1.1]

2.3 Let $C_2:=n\,p_2(\varphi)$, where $p_2$ is the finite fixed-support seminorm from [F11]; then $C_2$ bounds $|\Delta\varphi|$. For any sequence $\varepsilon_j\to0$ with $\varepsilon_j>0$, after discarding finitely many terms we have $\varepsilon_j<1$. The measurable functions $g_j=|\Phi|\mathbf1_{B_{\varepsilon_j}}$ then tend to zero off the null singleton $\{0\}$ and are dominated by $|\Phi|\mathbf1_{B_1}$, which is integrable by [F2]. Thus [F9] gives $\int_{B_{\varepsilon_j}}|\Phi|\to0$; as this holds for every such sequence, the limit as $\varepsilon\downarrow0$ is zero. The omitted integral of $\Phi\Delta\varphi$ is bounded by $C_2\int_{B_\varepsilon}|\Phi|$, hence tends to zero and $\int_{\Omega_\varepsilon}\Phi\Delta\varphi\to\int_{B_R}\Phi\Delta\varphi$. [F2, F9, F11, F18, step 1.1, algebra]

3.1 Taking $\varepsilon\downarrow0$ in step 2.2 and using steps 1.2, 2.1 and 2.3 yields $-\int_{\mathbb R^n}\Phi(z)\Delta\varphi(z)\,dz=\varphi(0)$; the integral over $\mathbb R^n$ equals the one over $B_R$ because $\Delta\varphi$ vanishes off the support. By [F2], [F3] and [F19], $T_\Phi$ is the regular distribution; [F4] and [F25] identify the left side with $\langle-\Delta T_\Phi,\varphi\rangle$, and [F5] identifies the right side with $\langle\delta_0,\varphi\rangle$. [F2, F3, F4, F5, F19, F25, step 2.2, step 1.2, step 2.1, step 2.3]

4.1 For a complex-valued test, apply step 3.1 separately to its real and imaginary parts and combine by complex linearity from [F17]. The pairing is bilinear, with no conjugation, as required by the distribution convention. Hence the identity holds for every test and $-\Delta T_\Phi=\delta_0$. [F4, F5, F17, step 3.1, cases]

5.1 For any fixed $y\in\mathbb R^n$ and test $\varphi$, put $h(z)=\Phi(z)\varphi(z+y)$. It is integrable because it is bounded by a constant times $|\Phi|$ on $\operatorname{supp}\varphi-y$, which lies in a ball by [F12]–[F13]; use [F2] and [F11]. By [F22] and [F26], $T_{-y}(x)=x-y$ preserves Lebesgue measure; [F23] therefore gives $\int h(T_{-y}x)\,dx=\int h(z)\,dz$, that is, $\int\Phi(x-y)\varphi(x)\,dx=\int\Phi(z)\varphi(z+y)\,dz$. Thus the translate of $T_\Phi$ is the regular distribution associated with $x\mapsto\Phi(x-y)$, with the sign convention [F24]. Translate the identity in step 4.1: [F16] says constant-coefficient derivatives commute with translation and $\delta_0$ translates to $\delta_y$, so $-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$. The proof handles $n=2$ and $n\ge3$ separately, excludes the distinct one-dimensional analogue by $n\ge2$, includes the zero test and empty support, and is unchanged by the arbitrary value assigned to $\Phi(0)$ because a singleton is null [F18]. The choice cost is exactly [A1], inherited through the named measure and surface Green interfaces; no full Axiom of Choice is used. The statement is not an iff. [F2, F11, F12, F13, F16, F18, F22, F23, F24, F26, A1, step 4.1, cases] ∎
## Source notes

Hunter §2.5 Theorem 2.23 and its proof give the second Green identity used on the punctured annulus; §2.6.1 gives the radial kernel, derivative and unit flux, and §2.6.2 states the distributional point-source interpretation. Hunter states that last interpretation but does not prove the test-function identity in this passage; steps 1.1–5.1 supply the excision argument, signs and limiting estimates. Teschl §5.3 equations (5.20)–(5.26) supplies the translated fundamental-solution and normalization conventions. Schmidt §2.2 uses the opposite sign, so only its convention comparison is retained; no exercise-class flux assertion is treated as proof.
