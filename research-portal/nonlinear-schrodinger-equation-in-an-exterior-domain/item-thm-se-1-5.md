---
title: "Theorem 1.5: cubic internal control near a trajectory"
status: published
research_item: thm-se-1-5
dependency_level: 21
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 5, Theorem 1.5 and equation (1.12); page 20, proof of Theorem
        1.5
      statement: Theorem 1.5 asserts cubic internal control near a trajectory under
        (H), (W) and (UCPw), in dimensions two and three at orders one and two.
        Its proof subtracts the trajectory and uses an endpoint-corrected
        real-linear Duhamel fixed point with factors i and -i inside the
        propagator. This reference supplies attribution only.
      hypotheses: The frozen article setting with a smooth compact nontrapping
        obstacle, connected exterior, fixed positive time, reference trajectory
        (W), additional (UCPw), and sufficiently close trajectory endpoints at
        s=1 or s=2.
      reading_limits: Read the frozen extracted text of PDF page 5, Theorem 1.5 and
        (1.12), and page 20, its proof and (4.6). No fresh PDF-image comparison
        or independent author-defect assessment was performed. The
        representative and distributional arguments below are local deductions
        from the declared suppliers, not imports from this article.
---

PDF p. 5: ` Theorem 1.5; (1.12) `; PDF p. 20: ` Proof of Theorem 1.5 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-ucpw](item-def-se-ucpw)
- [def-se-trajectory-remainder](item-def-se-trajectory-remainder)
- [def-se-trajectory-feedback](item-def-se-trajectory-feedback)
- [prop-se-trajectory-contraction](item-prop-se-trajectory-contraction)
- [prop-se-trajectory-nonlinear-estimates](item-prop-se-trajectory-nonlinear-estimates)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [prop-se-real-duhamel](item-prop-se-real-duhamel)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [math:def-infinitesimal-generator-of-a-c-zero-semigroup](https://alphabetamath.cc/item/def-infinitesimal-generator-of-a-c-zero-semigroup)
- [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus)
- [math:thm-variation-of-constants-formula](https://alphabetamath.cc/item/thm-variation-of-constants-formula)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric)
- [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)


## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Assume (H): $\Theta$ is nontrapping. Choose $R>0$ with $\Theta\subset B_R(0)$, put $\omega=\{x\in\Omega:|x|>R\}$, and choose the smooth real cutoff $\varphi$ which is zero for $|x|\le R$, positive for $|x|>R$, and one for $|x|\ge R+1$ as in [def-se-control-cutoffs](item-def-se-control-cutoffs).

Let $w$ satisfy (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ in the intersection norm and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in space-time distributions. Assume (UCPw): every $q\in C([0,T];H_0^1(\Omega))$ satisfying $iq_t+\Delta q+2\lambda|w|^2q-\lambda w^2\overline q=0$ distributionally and vanishing on $(0,T)\times\omega$ is identically zero. Here $H_0^1$ is the $H^1$-closure of compactly supported smooth functions, and $H_D^s=D((I-\Delta_D)^{s/2})$ for $s\in\{1,2\}$ is the Dirichlet spectral space; in particular $H_D^1=H_0^1$ and $H_D^2=H^2\cap H_0^1$.

For each $s\in\{1,2\}$ there exists $\delta>0$ such that, whenever $v_0,v_T\in H_D^s(\Omega)$ satisfy $\|v_0-w(0)\|_{H_D^s}\le\delta$ and $\|v_T-w(T)\|_{H_D^s}\le\delta$, there are $h,v\in C([0,T];H_D^s(\Omega))$ with $v(0)=v_0$, $v(T)=v_T$, and $$i\partial_t v+\Delta v+\lambda|v|^2v=\varphi h\quad\text{in }\mathcal D'((0,T)\times\Omega).$$ The homogeneous Dirichlet condition is encoded by $v(t)\in H_0^1(\Omega)$ for every $t$. The forcing $\varphi h$ is supported in the closure of $\omega$.

## Facts & Assumptions

[F1] The geometry, cutoff, spectral spaces and controlled equation are those of [def-se-geometry](item-def-se-geometry), [def-se-control-cutoffs](item-def-se-control-cutoffs), [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-internal-systems](item-def-se-internal-systems). The trajectory and conditional unique-continuation implication are those of [def-se-trajectory](item-def-se-trajectory) and [def-se-ucpw](item-def-se-ucpw). Norm-continuous paths, Bochner forcing and distributional equations use [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) and [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation). Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration) supplies Countable Choice and Dependent Choice for the integration and evolution suppliers below.

[F2] Under these hypotheses [prop-se-trajectory-contraction](item-prop-se-trajectory-contraction) supplies a sufficiently small $\delta>0$ and, for endpoint perturbations with total $H_D^s$ norm at most $2\delta$, a fixed point $z$ in its stated solution space with those endpoints and a selected control $h\in C([0,T];H_D^s)$. Its fixed-point equation is the feedback integral equation in [def-se-trajectory-feedback](item-def-se-trajectory-feedback), with the factors $i$ and $-i$ inside the real-linear propagator.

[F3] For that solution space, [prop-se-trajectory-nonlinear-estimates](item-prop-se-trajectory-nonlinear-estimates) gives the pointwise polynomial $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$ as a strongly measurable element of $L^1(0,T;H_D^s)$. The bounded multiplier in [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) makes $\varphi h$ continuous in $H_D^s$. At a nonnegative order, the regular realization convention in [prop-se-real-duhamel](item-prop-se-real-duhamel) is the $L^2$ function class belonging to $H_D^s$. That proposition gives the free-flow mild identity once its jointly measurable representatives, local cubic integrability and Bochner-forcing hypotheses have been checked.

[F4] [def-se-trajectory-remainder](item-def-se-trajectory-remainder) gives the pointwise cubic expansion and the equivalence between the perturbation equation and the controlled cubic equation after adding $w$, provided the states are locally cubically integrable and the forcings are locally integrable. Endpoint and Dirichlet conditions are supplied separately by the path spaces.

[F5] The realization [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) is self-adjoint on the nonzero complex Hilbert space $L^2(\Omega)$, acts as the weak Laplacian on $D(\Delta_D)=H^2(\Omega)\cap H_0^1(\Omega)$, and has $A=I-\Delta_D\ge I$. Consequently the spectral norm in [def-se-dirichlet-scale](item-def-se-dirichlet-scale) bounds the $L^2$ norm at the positive orders used here. [prop-se-scale-flow](item-prop-se-scale-flow) supplies the consistent strongly continuous unitary groups $W(t)=e^{it\Delta_D}$ on the scale and on $L^2$. The generator defined by a right norm difference quotient is the convention in [math:def-infinitesimal-generator-of-a-c-zero-semigroup](https://alphabetamath.cc/item/def-infinitesimal-generator-of-a-c-zero-semigroup). For this self-adjoint realization, [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus), part (a), identifies the two-sided $L^2$ group generator with $i\Delta_D$ on exactly $D(\Delta_D)$. Its actual domain is mathematics, and its AC and Countable Choice hypotheses follow from F1; it supplies no physical premise.

[F6] Under Dependent Choice, the variation-of-constants theorem [math:thm-variation-of-constants-formula](https://alphabetamath.cc/item/thm-variation-of-constants-formula) applies to a strongly continuous semigroup on a Banach space with Bochner-integrable forcing. Its mild formula is equivalent to the integral identity: if $B$ is the generator, $Q(t)=\int_0^t z(r)\,dr\in D(B)$ and $z(t)=z(0)+BQ(t)+\int_0^t f(r)\,dr$. No classical differentiability of $z$ is required.

[F7] Under Countable Choice, [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences) gives completeness of complex $L^p$ and almost-everywhere convergent subsequences of norm-convergent sequences. [math:thm-heine-cantor-metric](https://alphabetamath.cc/item/thm-heine-cantor-metric) gives uniform continuity of a continuous metric-valued path on the compact interval. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures) gives measurable sections, section integrals and integral interchange on the completed sigma-finite Lebesgue time-space products used here. In particular product-almost-everywhere equality gives sectionwise equality almost everywhere in time.

[F8] Bounded complex-linear maps commute with Bochner integration by [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). Holder's inequality [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals), applied to absolute values with exponents $2,2$, gives $\int_K|u|\,dx\le |K|^{1/2}\|u\|_2$ on any finite-measure spatial set $K$. These facts apply to the inclusion $H_D^s\to L^2$ and to bounded spatial test functionals. Distributional pairings use the bilinear convention of F1, without conjugating the test function.

## Proof

**Given:** The stated hypotheses and endpoint data, with $s\in\{1,2\}$.

**Goal:** Construct a control and a distributional controlled cubic solution with the prescribed endpoints, checking the current real-linear Duhamel supplier's applicability.

1.1 Put $E=H_D^s(\Omega)$, $z_0=v_0-w(0)$ and $z_T=v_T-w(T)$. These differences belong to $E$: (W) puts the trajectory endpoints in $H_D^2$, which embeds in $H_D^s$ for $s\le2$ by $A\ge I$ and the spectral norm. Choose $\delta$ from F2. The two endpoint bounds give $\|z_0\|_E+\|z_T\|_E\le2\delta$, so F2 gives the fixed point $z\in C([0,T];E)$ and $h\in C([0,T];E)$, with $z(0)=z_0$, $z(T)=z_T$ and the feedback integral identity. F3 gives $F(w,z)\in L^1(0,T;E)$ and $\varphi h\in C([0,T];E)$. [given, F1, F2, F3, F5]

2.1 Continuous $L^2$ paths have compatible jointly measurable representatives in this setting. Indeed, for such a path $q$, uniform continuity in F7 gives piecewise-constant sampled paths $q_j$ tending uniformly to $q$ in $L^2$. Choose measurable spatial representatives of their countably many values using F1. The resulting functions $Q_j(t,x)$ are measurable and Cauchy in product $L^2$, since F7 gives $\|Q_j-Q_k\|_{L^2((0,T)\times\Omega)}^2=\int_0^T\|q_j(t)-q_k(t)\|_2^2\,dt\le T\sup_t\|q_j(t)-q_k(t)\|_2^2$. Completeness gives a measurable product limit $Q$. The section norms $d_j(t)=\|Q_j(t,\cdot)-Q(t,\cdot)\|_2$ tend to zero in scalar $L^2(0,T)$; select an almost-everywhere convergent subsequence by F7. For almost every $t$, both $q_j(t)\to q(t)$ and $Q_j(t,\cdot)\to Q(t,\cdot)$ in $L^2$, so $Q(t,\cdot)$ represents $q(t)$. Apply this to $z,h$ and use a compatible trajectory representative from (W), or the same construction for $w$. The pointwise polynomials then represent exactly the classes in F3, since changes of compatible representatives affect only product-null sets by F7. [F1, F3, F5, F7, step 1.1]

3.1 Write $Z,H,\widetilde w$ for these representatives and $M_w=\sup_t\|w(t)\|_\infty<\infty$, which follows from (W) and compact-time continuity. For the pointwise polynomial in F3, $|Z|^3\le |\lambda|^{-1}|F(\widetilde w,Z)|+3M_w|Z|^2$. For every compact spatial $K\subset\Omega$, its right side has finite time-space integral: F8 bounds the first term by $|\lambda|^{-1}|K|^{1/2}\|F(w,z)\|_{L^1_tL^2_x}$, and the second by $3M_w T\sup_t\|z(t)\|_2^2$. Thus $Z\in L^3_{\mathrm{loc}}((0,T)\times\Omega)$, and F7 also gives locally cubically integrable spatial sections almost everywhere in time. The control $H$ is locally integrable by F8. At $\theta=s\ge0$, these representatives and both polynomial and control forcings have the regular $E$ realizations stipulated in F3; their strong measurability and Bochner integrability are provided by that fact. Hence every representative and forcing hypothesis of the nonlinear real-linear Duhamel equivalence is met. [F1, F3, F5, F7, F8, step 1.1, step 2.1]

4.1 Apply that equivalence to the feedback identity. It gives the free-flow identity for the perturbation equation. Set $V_1=2\lambda|w|^2$, $V_2=\lambda w^2$ and $f=i(V_1z+V_2\overline z+F(w,z)-\varphi h)$. Since $w$ is continuous and bounded in $L^\infty$, the potential terms are continuous $L^2$ paths, using $\|au\|_2\le\|a\|_\infty\|u\|_2$ and continuity of $z$ in $L^2$. The other terms are Bochner integrable in $L^2$ by F3 and F5. Thus $f\in L^1(0,T;L^2)$. The consistent free group and commutation of the bounded inclusion with the Bochner integrals in F8 transport the free-flow identity to $L^2$ as $z(t)=W(t)z_0+\int_0^tW(t-r)f(r)\,dr$. All nonlinear and forcing terms in this equation are locally integrable by steps 2.1–3.1 and F8. [F1, F3, F5, F8, step 1.1, step 2.1, step 3.1]

5.1 Apply F6 on $L^2(\Omega)$ with this fixed forcing $f$, the free semigroup, and the Dependent Choice supplied by F1. It gives $Q(t)=\int_0^t z(r)\,dr\in D(B)$ and $z(t)=z_0+BQ(t)+P(t)$, where $P(t)=\int_0^t f(r)\,dr$ and $B$ is the right-quotient generator on $L^2$. For $x\in D(B)$, the negative difference quotient satisfies $(W(-a)x-x)/(-a)=W(-a)(W(a)x-x)/a$ for $a>0$. Unitarity and strong continuity make its limit $Bx$ as well. The two-sided characterization in F5 therefore identifies the full domain $D(B)=D(\Delta_D)$ and $Bx=i\Delta_Dx$. Consequently $z(t)=z_0+i\Delta_xQ(t)+P(t)$ as spatial distributions at every time. This does not put $z(t)$ itself in $D(\Delta_D)$. [F1, F5, F6, step 4.1]

6.1 For $a=z$ or $a=f$, the primitive $P_a(t)=\int_0^t a(r)\,dr$ satisfies $\partial_tP_a=a$ in space-time distributions. For an arbitrary $\eta\in C_c^\infty((0,T)\times\Omega;\mathbb C)$, F7–F8 give $\int_0^T\int_\Omega P_a(t,x)\partial_t\eta(t,x)\,dx\,dt=\int_0^T\int_\Omega a(r,x)(\int_r^T\partial_t\eta(t,x)\,dt)\,dx\,dr=-\int_0^T\int_\Omega a(r,x)\eta(r,x)\,dx\,dr$. The integrals are absolutely integrable because the test and its derivative are bounded on a compact spatial set, $a\in L^1_tL^2_x$, and F8 gives the local $L^1$ bound; the extra time integration contributes at most a factor $T$. The identity of step 5.1 consequently holds in space-time distributions. Differentiate it in time and commute the spatial and temporal distributional derivatives, using their test-function definitions in F1. This gives $\partial_tz=i\Delta_xz+f$, hence $iz_t+\Delta_xz+V_1z+V_2\overline z+F(w,z)=\varphi h$ in distributions, with the bilinear test pairing throughout. [F1, F7, F8, step 4.1, step 5.1]

7.1 Set $v=w+z$. The bounded trajectory is locally cubically integrable, as is $Z$ by step 3.1; $|w+Z|^3\le4(|w|^3+|Z|^3)$ gives the required local cubic integrability of $v$. Apply the expansion and distributional equivalence in F4 to step 6.1 and the equation for $w$. They give $i\partial_tv+\Delta_xv+\lambda|v|^2v=\varphi h$. Both $w$ and $z$ take values in $H_0^1$, which is a linear space, so $v$ has the specified homogeneous Dirichlet condition. Their continuity in $E$ and the endpoint differences give $v\in C([0,T];E)$, $v(0)=v_0$ and $v(T)=v_T$. The control is continuous in $E$ by step 1.1, and its force is supported in the closure of $\omega$ because $\varphi$ vanishes on its complement. These are all the claimed properties. [F1, F2, F4, F5, step 1.1, step 3.1, step 6.1] ∎

## Source notes

The frozen article, Theorem 1.5 on PDF page 5 and its proof on page 20, supplies attribution of the near-trajectory claim and trajectory-subtraction method. The local argument above checks the current representative and forcing conditions of the real-linear Duhamel supplier and derives the distributional equation from the independently supplied semigroup and self-adjoint-generator facts. The article is not a proof premise for these prerequisites. This generated-draft repair changes no theorem statement and asserts neither an original-article defect nor independent acceptance.
