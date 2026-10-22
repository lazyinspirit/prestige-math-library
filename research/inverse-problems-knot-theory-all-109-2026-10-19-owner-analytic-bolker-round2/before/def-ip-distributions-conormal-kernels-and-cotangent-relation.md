---
id: def-ip-distributions-conormal-kernels-and-cotangent-relation
kind: definition
title: "Distributions, conormal kernels, and cotangent relations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-distribution
  - def-support-of-a-distribution
  - def-density-bundle-and-smooth-density
  - def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-real-analytic-germ-in-several-variables
  - def-multivariable-power-series
  - def-tempered-distribution
  - thm-compactly-supported-distributions-are-tempered
  - lem-compactly-supported-distributions-extend-to-smooth-functions
  - cor-local-normal-form-for-submersions
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§2.2, Theorem 2.2 proof, printed pp. 13–15; Definition 1.5, printed p. 5."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Definition 6.1, printed pp. 36–37, for local distribution pairings and cotangent coordinates."
proof_strategy: direct
---

## Definition

Let $M$ be a smooth $n$-manifold. A distribution on $M$ is a continuous complex-linear functional on compactly supported smooth densities on $M$. Its topology is generated locally by the fixed-support seminorms $\max_{|\alpha|\le m}\sup_K|\partial^\alpha\varphi|$, followed by the locally convex test-function topology. In a chart $x=(x_1,\ldots,x_n)$ a test density is $\varphi(x)|dx|$; under a coordinate change it transforms by the absolute Jacobian. A distribution is compactly supported when its support, the complement of its largest vanishing open set, is compact.

For a smooth submersion $p:Y\to M$, define the pullback $p^*u$ by transposing fiber integration: in submersion coordinates $p(x,v)=x$,
$$
\langle p^*u,\psi(x,v)|dx\,dv|\rangle
=\left\langle u,\left(\int\psi(x,v)|dv|\right)|dx|\right\rangle.
$$
The absolute density quotient gives the fiber density in other submersion coordinates. For a distributional density $V$ on $Y$, meaning a continuous functional on compactly supported smooth scalar functions, define its support by the same largest-vanishing-open-set rule. If $q:Y\to M$ is proper on $\operatorname{supp}V$, then for a test function $\varphi$ on $M$ the set $q^{-1}(\operatorname{supp}\varphi)\cap\operatorname{supp}V$ is compact. Choose a smooth compact cutoff $\beta$ equal to one near this set and define the pushforward by
$$
\langle q_*V,\varphi\rangle=\langle V,\beta(\varphi\circ q)\rangle.
$$
The support property makes this independent of $\beta$; the cutoff is needed because $\varphi\circ q$ need not be compactly supported on all of $Y$.
A smooth density $\mu$ times a distribution $u$ in the test-density convention is the distributional density $\mu u$ defined by $\langle\mu u,\varphi\rangle=\langle u,\varphi\mu\rangle$.

Let $Z\subseteq G\times X$ be an embedded submanifold whose two projections are submersions. For a smooth density $\omega_Z$ on $Z$, its incidence delta kernel is the distributional density
$$
\langle K_Z,\Phi\rangle=\int_Z\Phi|_Z\,\omega_Z.
$$
In coordinates $(g,x)=(u,t)$ with $Z=\{t=0\}$, this is the delta distribution in the $t$ variables paired with the chosen density on $Z$. The conormal bundle and associated cotangent relation are
$$
N^*Z=\{(z,\zeta)\in T^*(G\times X):z\in Z,\ \zeta|_{T_zZ}=0\},
\qquad
C_Z=\{(g,\eta;x,\xi):(g,x;\eta,-\xi)\in N^*Z\setminus0\}.
$$
Here $N^*Z\setminus0$ removes the zero covector, and the minus sign is the distribution-kernel convention for an operator from $X$ to $G$. Since both projections are submersions, every nonzero conormal in this relation has both $\eta\ne0$ and $\xi\ne0$. An analytic incidence kernel means that $Z$, its local defining maps, and the coefficients of $\omega_Z$ are real analytic. This definition covers the incidence kernels used below; it does not assert a general Fourier-integral-operator calculus.

## Definition references

[[def-test-function-space-d-of-an-open-set|Test functions and compact support]]

[[def-test-function-topology|Test-function topology]]

[[def-distribution|Continuous distributions]]

[[def-support-of-a-distribution|Distribution support]]

[[def-density-bundle-and-smooth-density|Density transition rule]]

[[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union|Cotangent fibers]]

[[def-smooth-manifold|Smooth charts]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds|Smooth maps]]

[[def-real-analytic-germ-in-several-variables|Real-analytic charts]]

[[def-multivariable-power-series|Power-series convention]]

[[def-tempered-distribution|Tempered distributions]]

[[thm-compactly-supported-distributions-are-tempered|Compact-support extension]]

[[lem-compactly-supported-distributions-extend-to-smooth-functions|Extension to smooth functions]]

[[cor-local-normal-form-for-submersions|Submersion coordinates]]

[[lem-smooth-bump-between-concentric-euclidean-balls|Local cutoffs]]

## Facts & Assumptions

**Given:** A smooth manifold $M$, a submersion $p:Y\to M$, an embedded incidence submanifold $Z\subseteq G\times X$ whose two projections are submersions, and a smooth density on $Z$.

[F1] [[def-test-function-space-d-of-an-open-set]]: test functions are compactly supported smooth functions.

[F2] [[def-test-function-topology]]: test functions carry the locally convex test-function topology.

[F3] [[def-distribution]]: a distribution is a continuous linear functional on test functions.

[F4] [[def-support-of-a-distribution]]: support is the complement of the largest vanishing open set; tests supported away from it pair to zero.

[F5] [[def-density-bundle-and-smooth-density]]: a density transforms by the absolute coordinate Jacobian and can be integrated without an orientation.

[F6] [[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]: cotangent vectors are dual tangent vectors and transform by the inverse transpose of the tangent coordinate change.

[F7] [[def-smooth-manifold]]: chart transitions are smooth.

[F8] [[def-c-r-and-smooth-maps-between-smooth-manifolds]]: smooth maps have smooth coordinate representatives.

[F9] [[thm-compactly-supported-distributions-are-tempered]]: a compactly supported Euclidean distribution has a unique tempered extension.

[F10] [[lem-compactly-supported-distributions-extend-to-smooth-functions]]: a compactly supported distribution has a unique continuous extension to smooth functions by a cutoff equal to one near its support.

[F11] [[cor-local-normal-form-for-submersions]]: near any point a submersion has coordinates $(x,v)\mapsto x$.

[F12] [[lem-smooth-bump-between-concentric-euclidean-balls]]: nested coordinate balls admit smooth cutoffs equal to one on the smaller ball and supported in the larger ball.

## Proof

**Given:** The data in the definition.

1.1 In submersion coordinates $(x,v)$, a compactly supported test density on $Y$ is $\psi(x,v)|dx\,dv|$. Its fiber integral is $\widetilde\psi(x)=\int\psi(x,v)|dv|$. The integrand has compact support, so differentiation under the integral gives a smooth function; its support lies in the compact projection of $\operatorname{supp}\psi$. Thus $\widetilde\psi(x)|dx|$ is a test density and transposing this operation defines $p^*u$. [given, F1, F2, F3, F5, F11, algebra]

1.2 On overlapping submersion charts, the full absolute Jacobian factors into the base Jacobian and the fiber-density quotient. The fiber integral therefore transforms as a base density. This proves that the transposed functional in step 1.1 is chart independent. [F5, F7, F8, F11, algebra, step 1.1]

2.1 If $q$ is proper on $\operatorname{supp}V$ and $K$ is compact in $M$, then $Q_K=q^{-1}(K)\cap\operatorname{supp}V$ is compact. Choose one smooth cutoff $\beta_K$ equal to one near $Q_K$. For every test function $\varphi$ supported in $K$, define $\langle q_*V,\varphi\rangle=\langle V,\beta_K(\varphi\circ q)\rangle$. If another cutoff is used, the difference of the two test functions vanishes on a neighborhood of $\operatorname{supp}V$: it vanishes near $Q_K$ because both cutoffs equal one there, and away from $Q_K$ either $V$ vanishes or $\varphi\circ q=0$. Hence [F4] gives the same pairing. The chain and product rules bound every fixed-support seminorm of $\beta_K(\varphi\circ q)$ by finitely many fixed-support seminorms of $\varphi$, so continuity of $V$ proves continuity of $q_*V$. A finite cover by coordinate balls and [F12] supplies $\beta_K$. Multiplication by a smooth density is defined by the stated transpose formula, so the typed pushforward is well-defined. [F1, F2, F4, F5, F7, F8, F12, given, algebra]

3.1 In coordinates where $Z=\{t=0\}$, the incidence functional is integration of the restricted test function against $\omega_Z$. Under a change of coordinates on $Z$, the coefficient of $\omega_Z$ transforms by the absolute tangential Jacobian [F5]. Thus the functional is independent of the defining chart. [F5, F7, F8, given]

3.2 A covector annihilating $T_zZ$ transforms by the inverse transpose rule [F6], so $N^*Z$ and $C_Z$ are coordinate independent. If a conormal has the form $(\eta,0)$, it annihilates the image of $d\pi_G:T_{(g,x)}Z\to T_gG$, which is all of $T_gG$ because $\pi_G$ is a submersion; therefore $\eta=0$. Applying the same argument to $\pi_X$ shows that $(0,\xi)$ can only be zero. [F6, F11, given, algebra]

3.3 Cover $\operatorname{supp}u$ by finitely many smaller coordinate balls $B_i$ whose closures lie in coordinate balls $U_i$. Using [F12] in each chart, choose $\beta_i$ supported in $U_i$ and equal to one on $B_i$, and put $\sigma=\sum_i\beta_i$. Then $\sigma>0$ on a neighborhood of $\operatorname{supp}u$. By compactness and another finite use of [F12], choose a compactly supported smooth $\theta$ in $\{\sigma>0\}$ equal to one near $\operatorname{supp}u$. Define $\chi_i=\theta\beta_i/\sigma$ on $\{\sigma>0\}$ and extend by zero outside; this is smooth and compactly supported in $U_i$, and $\sum_i\chi_i=\theta$. Thus $u=\sum_i\chi_i u$, since $1-\theta$ vanishes near $\operatorname{supp}u$ by [F4]. Each summand is a compactly supported Euclidean distribution in one chart; [F9] and [F10] give its unique tempered and smooth-function realizations. Uniqueness makes these local realizations agree on overlaps, so the packet pairings recover the chartwise definition without a global coordinate choice or choice axiom. [F4, F9, F10, F12, choose, algebra] ∎
