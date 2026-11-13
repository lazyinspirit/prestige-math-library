---
id: lem-se-4-4
kind: lemma
domain: mathematics
title: "Lemma 4.4: compactness for regularized perturbed trajectories"
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-trajectory
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-regularized-adjoint
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - lem-se-4-2
  - lem-se-positive-spectral-scale-contract
  - lem-se-exterior-fractional-identification
  - lem-se-local-fractional-rellich
  - thm-se-general-aubin-lions-simon-input
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:thm-dominated-convergence
  - math:thm-weakly-convergent-sequences-are-norm-bounded
  - math:def-axiom-of-choice
  - def-se-dirichlet-laplacian
  - def-author-ab209e1f475e-banach-valued-time-derivative
  - math:thm-hahn-banach-dominated-extension
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:thm-bochner-integrability-criterion
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-regularized-adjoint: mathematical-premise
  def-se-local-negative-space: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-weak-compactness-language: mathematical-premise
  prop-se-perturbed-evolution: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-se-4-2: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-exterior-fractional-identification: mathematical-premise
  lem-se-local-fractional-rellich: mathematical-premise
  thm-se-general-aubin-lions-simon-input: mathematical-premise
  math:lem-complex-lp-completeness-density-and-inner-product: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  math:thm-weakly-convergent-sequences-are-norm-bounded: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  def-author-ab209e1f475e-banach-valued-time-derivative: mathematical-premise
  math:thm-hahn-banach-dominated-extension: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-trajectory
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-regularized-adjoint
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-trajectory
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-regularized-adjoint
  - def-se-local-negative-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-weak-compactness-language
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - lem-se-4-2
  - lem-se-positive-spectral-scale-contract
  - lem-se-exterior-fractional-identification
  - lem-se-local-fractional-rellich
  - thm-se-general-aubin-lions-simon-input
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:thm-dominated-convergence
  - math:thm-weakly-convergent-sequences-are-norm-bounded
  - math:def-axiom-of-choice
  - def-se-dirichlet-laplacian
  - def-author-ab209e1f475e-banach-valued-time-derivative
  - math:thm-hahn-banach-dominated-extension
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:thm-bochner-integrability-criterion
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 18, Lemma 4.4
      statement: Weakly convergent data at spectral orders minus one and minus two
        give strong convergence of the localized resolvent-regularized adjoint
        trajectories in time-space L2.
      hypotheses: The article's hypotheses H and W, positive finite T, and the stated
        spectral orders; the local reconstruction explicitly retains Choice.
      reading_limits: The frozen v2 PDF page 18 was read for attribution of Lemma 4.4
        and the adjacent regularized mild formula only; the article supplies no
        independent prerequisite proof.
dependency_level: 16
---

## Statement

Assume the Axiom of Choice and hypotheses (H) and (W): $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, and the reference trajectory $w$ has the regularity and solves the equation specified in [[def-se-trajectory]]. Let $H_D^s(\Omega)$ be the Dirichlet spectral scale of $A=I-\Delta_D$, let $R=A^{-1}$, and let $U(t)$ be the real-linear adjoint evolution in [[def-se-regularized-adjoint]]. Let $\psi$ and the bounded smooth truncated exterior $G=\Omega'=\Omega\cap B_{R_0+3}(0)$ be the cutoff and domain of [[def-se-control-cutoffs]], with $R_0$ denoting that definition's radius $R$.

For $\sigma\in\{-1,-2\}$, if $v_{j,0}\rightharpoonup v_0$ in $H_D^\sigma(\Omega)$, set $y_j(t)=RU(t)v_{j,0}$ and $y(t)=RU(t)v_0$. Then

$$\int_0^T\|\psi(y_j(t)-y(t))\|_{L^2(\Omega)}^2\,dt\longrightarrow0.$$

Weak convergence means convergence under every bounded scalar-linear functional; the time-space norms below are Bochner norms. The local negative space $H^{-2}(G)$ is the conjugate dual of $H^2_0(G)$, where $H^2_0(G)$ is the closure of $C_c^\infty(G)$ in $H^2(G)$.

## Facts & Assumptions

[F1] [[def-se-geometry]], [[def-se-nontrapping]], [[def-se-trajectory]] and [[def-se-control-cutoffs]] specify the hypotheses, trajectory, cutoff and bounded smooth domain. The scale, regularized adjoint, time-space and weak-convergence conventions are given by [[def-se-dirichlet-scale]], [[def-se-regularized-adjoint]], [[def-se-foundation-time-function-spaces]] and [[def-se-foundation-weak-compactness-language]]. The local conjugate-dual convention is [[def-se-local-negative-space]]. Full Choice is assumed [[math:def-axiom-of-choice]].

[F2] Under the stated hypotheses [[prop-se-perturbed-evolution]] gives uniformly bounded real-linear maps $U(t)$ on each relevant scale. [[prop-se-scale-flow]] gives the resolvent isometry $R:H_D^{-2}\to L^2$ and the free group. The scale embeddings and compatible endpoint constructions are supplied by [[lem-se-positive-spectral-scale-contract]] and [[def-se-regularized-adjoint]].

[F3] At $\theta=0$, [[lem-se-4-2]] bounds $\psi RU(\cdot)a$ in $L^2(0,T;H_D^{1/2}(\Omega))$ by a constant times $\|a\|_{H_D^{-2}}$. [[lem-se-exterior-fractional-identification]] embeds $H_D^{1/2}(\Omega)$ continuously in the restriction-quotient space $H^{1/2}(\Omega)$, whose restriction to $G$ is continuous. [[lem-se-local-fractional-rellich]] gives the compact embedding $H^{1/2}(G)\hookrightarrow L^2(G)$ and continuous injective pivot $L^2(G)\hookrightarrow H^{-2}(G)$.

[F4] The regularized mild equation in [[def-se-regularized-adjoint]] gives continuous $L^2(\Omega)$-valued trajectories and forcing, uniformly bounded by the $H_D^{-2}$ norm of the initial datum. [[def-se-dirichlet-laplacian]] supplies the self-adjoint Dirichlet realization with $C_c^\infty(\Omega)\subset D(\Delta_D)$; [[prop-se-scale-flow]] supplies the free group, its adjoint $W(-t)$, and its derivative on $H_D^2=D(\Delta_D)$. These inputs will be used below to prove the localized free and forced derivative identities for arbitrary $L^2$ data, rather than importing an identity from the proof of another item.

[F5] [[thm-se-general-aubin-lions-simon-input]] gives relative compactness in $L^2(0,T;L^2(G))$ from the compact Banach triple in [F3], an $L^2(0,T;H^{1/2}(G))$ bound, and an $L^1(0,T;H^{-2}(G))$ derivative bound. Under the stated Axiom of Choice, [[math:thm-hahn-banach-dominated-extension]] proves the real dominated-extension principle required by [[math:thm-weakly-convergent-sequences-are-norm-bounded]], and [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]] supplies its Countable Choice hypothesis and the countable choice hypotheses of the other inputs. Thus the weak-boundedness theorem applies to both complex spectral spaces here. The complex $L^2$ pairing and Cauchy–Schwarz are supplied by [[math:lem-complex-lp-completeness-density-and-inner-product]], and scalar dominated convergence by [[math:thm-dominated-convergence]].

[F6] [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] bounds the weak derivatives through order two of a smooth multiplier times an $H^2$ function, when the multiplier and these derivatives are bounded. [[math:thm-bochner-integrability-criterion]] supplies Bochner integrability for strongly measurable maps with integrable norm, and [[math:thm-bounded-linear-maps-commute-with-bochner-integration]] moves bounded linear maps through those integrals. [[def-author-ab209e1f475e-banach-valued-time-derivative]] fixes the $Y$-valued distributional derivative: $\int q\varphi'=-\int g\varphi$ in $Y$ for scalar complex time tests, without conjugating the time test.

## Proof

[F1] [[def-se-geometry]], [[def-se-nontrapping]], [[def-se-trajectory]] and [[def-se-control-cutoffs]] specify the hypotheses, trajectory, cutoff and bounded smooth domain. The scale, regularized adjoint, time-space and weak-convergence conventions are given by [[def-se-dirichlet-scale]], [[def-se-regularized-adjoint]], [[def-se-foundation-time-function-spaces]] and [[def-se-foundation-weak-compactness-language]]. The local conjugate-dual convention is [[def-se-local-negative-space]]. Full Choice is assumed [[math:def-axiom-of-choice]].

[F2] Under the stated hypotheses [[prop-se-perturbed-evolution]] gives uniformly bounded real-linear maps $U(t)$ on each relevant scale. [[prop-se-scale-flow]] gives the resolvent isometry $R:H_D^{-2}\to L^2$ and the free group. The scale embeddings and compatible endpoint constructions are supplied by [[lem-se-positive-spectral-scale-contract]] and [[def-se-regularized-adjoint]].

[F3] At $\theta=0$, [[lem-se-4-2]] bounds $\psi RU(\cdot)a$ in $L^2(0,T;H_D^{1/2}(\Omega))$ by a constant times $\|a\|_{H_D^{-2}}$. [[lem-se-exterior-fractional-identification]] embeds $H_D^{1/2}(\Omega)$ continuously in the restriction-quotient space $H^{1/2}(\Omega)$, whose restriction to $G$ is continuous. [[lem-se-local-fractional-rellich]] gives the compact embedding $H^{1/2}(G)\hookrightarrow L^2(G)$ and continuous injective pivot $L^2(G)\hookrightarrow H^{-2}(G)$.

[F4] The regularized mild equation in [[def-se-regularized-adjoint]] gives continuous $L^2(\Omega)$-valued trajectories and forcing, uniformly bounded by the $H_D^{-2}$ norm of the initial datum. [[def-se-dirichlet-laplacian]] supplies the self-adjoint Dirichlet realization with $C_c^\infty(\Omega)\subset D(\Delta_D)$; [[prop-se-scale-flow]] supplies the free group, its adjoint $W(-t)$, and its derivative on $H_D^2=D(\Delta_D)$. These inputs will be used below to prove the localized free and forced derivative identities for arbitrary $L^2$ data, rather than importing an identity from the proof of another item.

[F5] [[thm-se-general-aubin-lions-simon-input]] gives relative compactness in $L^2(0,T;L^2(G))$ from the compact Banach triple in [F3], an $L^2(0,T;H^{1/2}(G))$ bound, and an $L^1(0,T;H^{-2}(G))$ derivative bound. Under the stated Axiom of Choice, [[math:thm-hahn-banach-dominated-extension]] proves the real dominated-extension principle required by [[math:thm-weakly-convergent-sequences-are-norm-bounded]], and [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]] supplies its Countable Choice hypothesis and the countable choice hypotheses of the other inputs. Thus the weak-boundedness theorem applies to both complex spectral spaces here. The complex $L^2$ pairing and Cauchy–Schwarz are supplied by [[math:lem-complex-lp-completeness-density-and-inner-product]], and scalar dominated convergence by [[math:thm-dominated-convergence]].

[F6] [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] bounds the weak derivatives through order two of a smooth multiplier times an $H^2$ function, when the multiplier and these derivatives are bounded. [[math:thm-bochner-integrability-criterion]] supplies Bochner integrability for strongly measurable maps with integrable norm, and [[math:thm-bounded-linear-maps-commute-with-bochner-integration]] moves bounded linear maps through those integrals. [[def-author-ab209e1f475e-banach-valued-time-derivative]] fixes the $Y$-valued distributional derivative: $\int q\varphi'=-\int g\varphi$ in $Y$ for scalar complex time tests, without conjugating the time test.



**Given:** The hypotheses, cutoff, $\sigma$, and weakly convergent data in the Statement.

**Goal:** Prove strong convergence of the localized regularized differences in $L^2(0,T;L^2(\Omega))$.

1.1 Put $a_j=v_{j,0}-v_0$ and $d_j(t)=RU(t)a_j$. The data $a_j$ are weakly null and norm bounded in $H_D^\sigma$ by [F5]. If $\sigma=-1$, the continuous inclusion $H_D^{-1}\hookrightarrow H_D^{-2}$ also makes them weakly null and bounded in $H_D^{-2}$, by composition of bounded functionals with the inclusion; the assertion is immediate when $\sigma=-2$. Set $M=\sup_j\|a_j\|_{H_D^{-2}}<\infty$. The real-linearity of $U(t)$ gives $d_j=y_j-y$. [given, F1, F2, F5]

1.2 Put $Y=(H^2_0(G))'$ and denote the continuous pivot from [F3] by $J:L^2(G)\to Y$. For $z\in L^2(\Omega)$ and $\zeta\in C_c^\infty(G)$ let $b_\zeta$ be the zero extension of $\psi\zeta$ to $\Omega$ and define $(D_\psi z)(\zeta)=i\langle z,\Delta b_\zeta\rangle_2$. The product rule and bounded derivatives of $\psi$ give $\|\Delta b_\zeta\|_{L^2(\Omega)}\le C_\psi\|\zeta\|_{H^2(G)}$; the zero extension introduces no boundary term since $\zeta$ is compactly supported in $G$. Cauchy–Schwarz gives $|(D_\psi z)(\zeta)|\le C_\psi\|z\|_2\|\zeta\|_{H^2(G)}$. Density of $C_c^\infty(G)$ in $H^2_0(G)$ therefore extends this conjugate-linear functional uniquely and defines a bounded complex-linear map $D_\psi:L^2(\Omega)\to Y$. [F1, F3, F5, F6]

2.1 Applying [F3] with $\theta=0$ and restricting to $G$ gives a uniform bound on $q_j=(\psi d_j)|_G$ in $L^2(0,T;H^{1/2}(G))$. The regularized mild equation gives $d_j(t)=W(t)Ra_j+i p_j(t)$, where $p_j(t)=\int_0^tW(t-r)f_j(r)\,dr$ and $d_j,f_j\in C([0,T];L^2(\Omega))$ satisfy $\sup_{j,t}(\|d_j(t)\|_2+\|f_j(t)\|_2)\le CM$. Here $W(t)=e^{it\Delta_D}$. [F1, F2, F3, F4, step 1.1]

2.2 For arbitrary $z\in L^2(\Omega)$ and $\zeta\in C_c^\infty(G)$, $b_\zeta\in C_c^\infty(\Omega)\subset D(\Delta_D)$. Unitarity gives $\langle W(t)z,b_\zeta\rangle_2=\langle z,W(-t)b_\zeta\rangle_2$. The right side is differentiable by the domain-valued flow derivative in [F4]. Since the second slot is conjugate-linear, its derivative is $i\langle W(t)z,\Delta b_\zeta\rangle_2=(D_\psi W(t)z)(\zeta)$. Both $J((\psi W(t)z)|_G)$ and $D_\psi W(t)z$ are norm-continuous $Y$-valued maps, hence their products with a smooth compactly supported scalar time test or its derivative are Bochner integrable. Scalar integration by parts and commutation of evaluation $F\mapsto F(\zeta)$ with these integrals yield the $Y$-valued identity $\int_0^T J((\psi W(t)z)|_G)\varphi'(t)\,dt=-\int_0^T D_\psi W(t)z\,\varphi(t)\,dt$: the two sides agree on all smooth $\zeta$ and hence on $H^2_0(G)$ by density. This proves the free identity for every $L^2$ datum without assuming it has a boundary trace or a strong time derivative in $L^2$. [F1, F2, F4, F6, step 1.2]

3.1 Fix $\zeta\in C_c^\infty(G)$ and set $K_j(t,r)=\langle W(t-r)f_j(r),b_\zeta\rangle_2$. By the same adjoint calculation, $\partial_tK_j(t,r)=i\langle W(t-r)f_j(r),\Delta b_\zeta\rangle_2$. Both $K_j$ and this derivative are continuous in $(t,r)$ on the compact time square, and $|\partial_tK_j(t,r)|\le\sup_r\|f_j(r)\|_2\|\Delta b_\zeta\|_2$. Moving the bounded scalar pairing through the Bochner integral gives $\langle p_j(t),b_\zeta\rangle_2=\int_0^tK_j(t,r)\,dr$. Taking a difference quotient, the added or removed endpoint interval tends to $K_j(t,t)=\langle f_j(t),b_\zeta\rangle_2$ by continuity, while the quotient on the common interval tends to $\int_0^t\partial_tK_j(t,r)\,dr$ by dominated convergence and the displayed derivative bound. Thus its derivative is $\langle f_j(t),b_\zeta\rangle_2+i\int_0^t\langle W(t-r)f_j(r),\Delta b_\zeta\rangle_2\,dr$. Combining this with the homogeneous calculation and $d_j=W(t)Ra_j+i p_j$ gives $\frac{d}{dt}\langle d_j(t),b_\zeta\rangle_2=i\langle d_j(t),\Delta b_\zeta\rangle_2+i\langle f_j(t),b_\zeta\rangle_2$. [F2, F4, F5, F6, step 2.1, step 2.2]

3.2 For each fixed $t$, the map $a\mapsto\psi RU(t)a$ is bounded and real-linear from $H_D^{-2}$ to $L^2(\Omega)$. Weak convergence in the complex space implies weak convergence of its realification: any bounded real-linear functional is the real part of a bounded complex-linear functional. Thus $\psi d_j(t)$ converges weakly to zero in the realification of $L^2(\Omega)$, and in particular its complex pairing with any fixed $L^2$ vector tends to zero. The uniform $L^2$ bound in step 2.1 gives $|\langle\psi d_j(t),g(t)\rangle|\le CM\|g(t)\|_2$ for $g\in L^2(0,T;L^2(\Omega))$. The scalar pairing is measurable, and the right side is integrable on the finite interval by Cauchy–Schwarz. Dominated convergence therefore gives $\int_0^T\langle\psi d_j(t),g(t)\rangle\,dt\to0$. [F1, F2, F5, step 1.1, step 2.1]

4.1 Define $g_j(t)=D_\psi d_j(t)+iJ((\psi f_j(t))|_G)$. Boundedness of $D_\psi$, $J$ and cutoff restriction makes $Jq_j$ and $g_j$ norm-continuous $Y$-valued maps; step 2.1 gives $\sup_{j,t}\|g_j(t)\|_Y\le CM$. Multiplying the scalar derivative identity in step 3.1 by any $\varphi\in C_c^\infty((0,T);\mathbb C)$ and integrating by parts gives, after evaluation on $\zeta$, $\int_0^T Jq_j(t)\varphi'(t)\,dt=-\int_0^T g_j(t)\varphi(t)\,dt$. All integrals exist by [F6], evaluations commute with them, and density of the smooth spatial tests proves equality in $Y$. This is precisely the derivative convention in [F6], with no conjugation of $\varphi$. Consequently $\partial_t(Jq_j)=g_j$ is bounded in $L^\infty(0,T;Y)$ and in $L^1(0,T;Y)$, with the latter norm at most $TCM$. [F1, F3, F6, step 2.1, step 1.2, step 3.1]

5.1 The bounds in steps 2.1 and 4.1 and the compact triple in [F3] meet all hypotheses of [F5], so $(q_j)$ is relatively compact in $L^2(0,T;L^2(G))$. Since $\psi$ is supported in $G$ relative to $\Omega$, zero extension is an isometry on these localized functions; consequently $(\psi d_j)$ is relatively compact in $L^2(0,T;L^2(\Omega))$. [F1, F3, F5, step 2.1, step 4.1]

6.1 Every subsequence has a further subsequence converging strongly in $L^2(0,T;L^2(\Omega))$ by step 5.1. If its limit is $h$, taking $g=h$ in step 3.2 and passing to the strong limit yields $\|h\|_{L^2_tL^2_x}^2=0$. Hence every such limit is zero. If the full sequence failed to converge strongly to zero, a subsequence would remain at distance at least some positive constant from zero, contradicting the preceding conclusion for a strongly convergent further subsequence. Squaring the norm gives the displayed integral limit. [F5, step 5.1, step 3.2] ∎

## Source notes

The original article is cited for attribution of Lemma 4.4 and its argument, not as a prerequisite for this deduction. The local compactness input is the separately sourced [[thm-se-general-aubin-lions-simon-input]], under that item's stated reading limits.
