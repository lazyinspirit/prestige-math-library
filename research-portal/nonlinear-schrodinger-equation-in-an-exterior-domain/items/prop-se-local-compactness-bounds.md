---
id: prop-se-local-compactness-bounds
kind: proposition
domain: mathematics
title: Localized free-flow bounds and compactness mechanism
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-control-cutoffs
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - def-se-foundation-distributional-equation
  - def-author-ab209e1f475e-banach-valued-time-derivative
  - prop-se-scale-flow
  - prop-se-2-2-homogeneous
  - lem-se-positive-spectral-scale-contract
  - lem-se-exterior-fractional-identification
  - lem-se-local-fractional-rellich
  - thm-se-general-aubin-lions-simon-input
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:thm-bochner-integrability-criterion
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-local-negative-space: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-weak-compactness-language: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  def-author-ab209e1f475e-banach-valued-time-derivative: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-2-2-homogeneous: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-exterior-fractional-identification: mathematical-premise
  lem-se-local-fractional-rellich: mathematical-premise
  thm-se-general-aubin-lions-simon-input: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:lem-complex-lp-completeness-density-and-inner-product: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-control-cutoffs
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - def-author-ab209e1f475e-banach-valued-time-derivative
  - prop-se-scale-flow
  - lem-se-local-fractional-rellich
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-control-cutoffs
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - def-se-foundation-distributional-equation
  - def-author-ab209e1f475e-banach-valued-time-derivative
  - prop-se-scale-flow
  - prop-se-2-2-homogeneous
  - lem-se-positive-spectral-scale-contract
  - lem-se-exterior-fractional-identification
  - lem-se-local-fractional-rellich
  - thm-se-general-aubin-lions-simon-input
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:thm-bochner-integrability-criterion
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 11
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and it is non-trapping. Take $R$, the real smooth cutoff $\psi$ and the bounded smooth truncated exterior $G=\Omega'=\Omega\cap B_{R+3}(0)$ as in [[def-se-control-cutoffs]]. Thus $\psi=1$ on $B_{R+2}(0)$ and $\operatorname{supp}\psi\subset B_{R+3}(0)$.

Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^s(\Omega)$ the spectral scale of $I-\Delta_D$, and $W(t)=e^{it\Delta_D}$. Let $T>0$, $0\le\tau<2$, and let $(y_{j,0})$ be bounded in $H_D^\tau(\Omega)$ and converge weakly to zero there. Put $y_j(t)=W(t)y_{j,0}$. Then $(\psi y_j|_G)$ is bounded in $L^2(0,T;H^{1/2}(G))$, and its distributional time derivatives are bounded in $L^\infty(0,T;H^{-2}(G))$, where $H^{-2}(G)=(H^2_0(G))'$ is the conjugate dual. The family is relatively compact in $L^2(0,T;L^2(G))$, and in fact $\psi y_j\to0$ strongly in $L^2(0,T;L^2(\Omega))$.

Here $H^{1/2}(G)$ is the restriction of the whole-space Bessel-potential space with its quotient norm. Weak convergence means convergence under every bounded scalar-linear functional; relative compactness means compactness of the norm closure. Time-valued $L^p$ spaces are Bochner spaces, and the $L^2$ inner product is linear in its first argument.

## Facts & Assumptions

[F1] [[def-se-geometry]], [[def-se-nontrapping]] and [[def-se-control-cutoffs]] specify the geometry, non-trapping condition, cutoff and smooth bounded set $G$. The Dirichlet operator and its scale are specified by [[def-se-dirichlet-laplacian]] and [[def-se-dirichlet-scale]]. The weak, time-space, negative-space and distribution conventions are those of [[def-se-foundation-weak-compactness-language]], [[def-se-foundation-time-function-spaces]], [[def-se-local-negative-space]] and [[def-se-foundation-distributional-equation]]. Full Choice includes the countable instances used below [[math:def-axiom-of-choice]].

[F2] [[lem-se-positive-spectral-scale-contract]] gives the continuous inclusion $H_D^\tau\hookrightarrow L^2$ for $\tau\ge0$. [[prop-se-scale-flow]] gives a strongly continuous unitary group on $L^2$ and the homogeneous equation. [[prop-se-2-2-homogeneous]], at $s=0$ and cutoff $\psi$, bounds $\psi W(t)u$ in $L^2(0,T;H_D^{1/2}(\Omega))$ by a constant times $\|u\|_2$.

[F3] [[lem-se-exterior-fractional-identification]] continuously embeds $H_D^{1/2}(\Omega)$ into the restriction-quotient $H^{1/2}(\Omega)$. Restriction from $\Omega$ to $G$ is contractive for the corresponding quotient norms. [[lem-se-local-fractional-rellich]] gives the compact inclusion $H^{1/2}(G)\hookrightarrow L^2(G)$ and the continuous injective $L^2(G)$ pivot into $(H^2_0(G))'$.

[F4] [[thm-se-general-aubin-lions-simon-input]] supplies relative compactness in $L^2(0,T;L^2(G))$ for a family bounded in $L^2(0,T;H^{1/2}(G))$ whose distributional time derivatives are bounded in $L^1(0,T;(H^2_0(G))')$; it uses the compact and continuous embeddings in [F3]. The time derivative is understood in the Bochner-integral sense of [[def-author-ab209e1f475e-banach-valued-time-derivative]], with $Y=(H^2_0(G))'$, complex scalar time tests and no conjugation of the time test. Its Countable Choice hypothesis follows from [F1].

[F5] Smooth multiplication obeys the weak product rule [[math:lem-weak-leibniz-rule-with-a-smooth-factor]]. The complex $L^2$ pairing and Cauchy–Schwarz are supplied by [[math:lem-complex-lp-completeness-density-and-inner-product]]. Strongly measurable Banach-valued maps with integrable norm are Bochner integrable [[math:thm-bochner-integrability-criterion]], and bounded linear maps commute with their integrals [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].

## Proof

[F1] [[def-se-geometry]], [[def-se-nontrapping]] and [[def-se-control-cutoffs]] specify the geometry, non-trapping condition, cutoff and smooth bounded set $G$. The Dirichlet operator and its scale are specified by [[def-se-dirichlet-laplacian]] and [[def-se-dirichlet-scale]]. The weak, time-space, negative-space and distribution conventions are those of [[def-se-foundation-weak-compactness-language]], [[def-se-foundation-time-function-spaces]], [[def-se-local-negative-space]] and [[def-se-foundation-distributional-equation]]. Full Choice includes the countable instances used below [[math:def-axiom-of-choice]].

[F2] [[lem-se-positive-spectral-scale-contract]] gives the continuous inclusion $H_D^\tau\hookrightarrow L^2$ for $\tau\ge0$. [[prop-se-scale-flow]] gives a strongly continuous unitary group on $L^2$ and the homogeneous equation. [[prop-se-2-2-homogeneous]], at $s=0$ and cutoff $\psi$, bounds $\psi W(t)u$ in $L^2(0,T;H_D^{1/2}(\Omega))$ by a constant times $\|u\|_2$.

[F3] [[lem-se-exterior-fractional-identification]] continuously embeds $H_D^{1/2}(\Omega)$ into the restriction-quotient $H^{1/2}(\Omega)$. Restriction from $\Omega$ to $G$ is contractive for the corresponding quotient norms. [[lem-se-local-fractional-rellich]] gives the compact inclusion $H^{1/2}(G)\hookrightarrow L^2(G)$ and the continuous injective $L^2(G)$ pivot into $(H^2_0(G))'$.

[F4] [[thm-se-general-aubin-lions-simon-input]] supplies relative compactness in $L^2(0,T;L^2(G))$ for a family bounded in $L^2(0,T;H^{1/2}(G))$ whose distributional time derivatives are bounded in $L^1(0,T;(H^2_0(G))')$; it uses the compact and continuous embeddings in [F3]. The time derivative is understood in the Bochner-integral sense of [[def-author-ab209e1f475e-banach-valued-time-derivative]], with $Y=(H^2_0(G))'$, complex scalar time tests and no conjugation of the time test. Its Countable Choice hypothesis follows from [F1].

[F5] Smooth multiplication obeys the weak product rule [[math:lem-weak-leibniz-rule-with-a-smooth-factor]]. The complex $L^2$ pairing and Cauchy–Schwarz are supplied by [[math:lem-complex-lp-completeness-density-and-inner-product]]. Strongly measurable Banach-valued maps with integrable norm are Bochner integrable [[math:thm-bochner-integrability-criterion]], and bounded linear maps commute with their integrals [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].



**Given:** The geometry, Choice assumption, cutoff, time, order and sequence in the Statement.

**Goal:** Establish the two localized bounds, relative compactness, and strong convergence to zero.

1.1 Put $M=\sup_j\|y_{j,0}\|_{H_D^\tau}$. By the scale inclusion, $\sup_j\|y_{j,0}\|_2\le C M$, and weak convergence in $H_D^\tau$ implies weak convergence in $L^2$: compose any bounded $L^2$ functional with the continuous inclusion. Unitarity gives $\sup_{j,t}\|y_j(t)\|_2\le CM$. The smoothing estimate followed by the fractional identification and restriction gives $\sup_j\|\psi y_j\|_{L^2(0,T;H^{1/2}(G))}\le C M$. The cutoff multiplication and restriction are bounded on the relevant spaces, so the resulting time-valued classes are strongly measurable. [given, F2, F3]

2.1 For $z\in L^2(\Omega)$ define $D_\psi z\in(H^2_0(G))'$ first on $\zeta\in C_c^\infty(G)$ by $(D_\psi z)(\zeta)=i\langle z,\Delta(\psi\zeta)\rangle_{L^2(\Omega)}$, extending $\psi\zeta$ by zero outside $G$. The product rule, bounded derivatives of $\psi$ and Cauchy–Schwarz give $|(D_\psi z)(\zeta)|\le C\|z\|_2\|\zeta\|_{H^2(G)}$. Density in the definition of $H^2_0(G)$ extends this to a bounded linear map $D_\psi:L^2(\Omega)\to(H^2_0(G))'$. In particular $t\mapsto D_\psi y_j(t)$ is norm-continuous, hence strongly measurable, and its norm is uniformly bounded by $CM$. [F1, F2, F5, step 1.1]

2.2 Let $g\in L^2(0,T;L^2(\Omega))$. Strong continuity of $W(-t)$, its unitary bound, and approximation of $g$ by simple functions make $t\mapsto W(-t)(\psi g(t))$ strongly measurable. Its norm has a finite integral by Cauchy–Schwarz on $(0,T)$, so $h=\int_0^T W(-t)(\psi g(t))\,dt$ exists in $L^2(\Omega)$. Because $\psi$ is real and $W(t)^*=W(-t)$, moving the bounded pairing through this Bochner integral yields $\int_0^T\langle\psi y_j(t),g(t)\rangle\,dt=\langle y_{j,0},h\rangle$. The right side tends to zero by step 1.1. [F1, F2, F5, step 1.1]

3.1 Put $Y=(H^2_0(G))'$ and let $J:L^2(G)\to Y$ be the bounded linear pivot $Jv(\zeta)=\langle v,\zeta\rangle$ from [F3]. For $u\in L^2(\Omega)$ write $w_u(t)=J(\psi W(t)u|_G)$. The maps $w_u$ and $D_\psi W(t)u$ are norm-continuous and uniformly bounded in $Y$, by boundedness of $J$, cutoff restriction, $D_\psi$ and unitarity. Their products with a scalar time test or its derivative are therefore Bochner integrable by [F5]. For $u\in D(\Delta_D)$, self-adjointness and the evolution equation give $\partial_t\langle\psi W(t)u,\zeta\rangle=i\langle W(t)u,\Delta(\psi\zeta)\rangle$ for every $\zeta\in C_c^\infty(G)$; the zero extension of $\psi\zeta$ is in $C_c^\infty(\Omega)\subset D(\Delta_D)$. Fix $\varphi\in C_c^\infty((0,T);\mathbb C)$. Scalar integration by parts yields the time-integrated identity after evaluation on every such $\zeta$. Evaluation $F\mapsto F(\zeta)$ is a bounded complex-linear map on $Y$, so [F5] commutes it with both Bochner integrals. Density of $C_c^\infty(G)$ in $H^2_0(G)$ then makes their difference the zero continuous functional, giving $\int_0^T w_u(t)\varphi'(t)\,dt=-\int_0^T D_\psi W(t)u\,\varphi(t)\,dt$ in $Y$. For general $u\in L^2(\Omega)$ choose $u_k\in D(\Delta_D)$ with $u_k\to u$ in $L^2$; unitarity and the bounded maps just used give uniform-in-time convergence of both $Y$-valued factors, hence convergence of their integrals against $\varphi'$ and $\varphi$. The same identity follows for $u$. This is precisely the derivative identity in [F4], with no conjugation of $\varphi$; thus $\partial_t(\psi W(t)u|_G)=D_\psi W(t)u$ after the pivot identification. Step 2.1 now bounds the derivative family in $L^\infty(0,T;H^{-2}(G))$, and integration of that uniform norm bound gives the $L^1(0,T;H^{-2}(G))$ bound multiplied by $T$. This argument uses the conjugate-dual pairing; it does not assert a boundary trace of $y_j$. [F1, F2, F3, F4, F5, step 2.1]

4.1 The bounded smooth set $G$ and the triple in [F3], together with steps 1.1 and 3.1, satisfy the hypotheses of the compactness input [F4]. Hence $(\psi y_j|_G)$ is relatively compact in $L^2(0,T;L^2(G))$. Since $\psi$ vanishes outside $G$ as a function on $\Omega$, zero extension from $G$ is an $L^2$ isometry on these functions. Their zero extensions are therefore relatively compact in $L^2(0,T;L^2(\Omega))$. [F1, F3, F4, step 1.1, step 3.1]

5.1 Every subsequence has a further subsequence converging strongly in $L^2(0,T;L^2(\Omega))$ by step 4.1. If its limit is $v$, take $g=v$ in step 2.2 and pass to the strong limit; Cauchy–Schwarz gives $\|v\|_{L^2_tL^2_x}^2=0$. Thus every such limit is zero. If the original sequence did not converge strongly to zero, a subsequence would stay a fixed positive distance from zero, contradicting the preceding conclusion for its strongly convergent further subsequence. This proves the assertion. [F5, step 4.1, step 2.2] ∎

## Source notes

The article is cited for attribution to the bounds and compactness argument in Lemma 3.2(a)–(c), PDF page 9. The deduction above uses the independently supplied smoothing, Sobolev and compactness inputs; Simon's theorem is imported by [[thm-se-general-aubin-lions-simon-input]] under that item's stated source and reading limits.
