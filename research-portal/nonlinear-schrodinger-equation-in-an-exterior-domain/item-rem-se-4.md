---
title: Scope of the spectral unique continuation argument
status: draft
research_item: rem-se-4
dependency_level: 16
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Frozen v2 PDF, page 6, section 1.4(ii), and page 11, Remark 4
      statement: The article describes its free spectral unique-continuation proof as
        replacing the Paley–Wiener–Schwartz argument of reference [7, Lemma
        3.1], associates that argument with the explicit free-space kernel,
        mentions a Holmgren route for L2 solutions as in reference [6], and
        notes that its time-translation argument does not apply directly to
        time-dependent linearized potentials.
      hypotheses: Attribution of the methodological comparisons in the frozen article
        only; no theorem from references [6] or [7] is imported.
      reading_limits: Read the frozen article text at the two stated locators.
        References [6] and [7] were not independently checked. This citation
        supports attribution only, not the free unique-continuation conclusion
        or the local shift calculation.
---

PDF p. 6: ` §1.4(ii) `; PDF p. 11: ` Remark 4 `

## Prerequisites

- [lem-se-3-4](item-lem-se-3-4)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-invisible-invariant](item-prop-se-invisible-invariant)
- [def-se-linearized-pair](item-def-se-linearized-pair)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and the hypotheses of Lemma 3.4: the smooth compact obstacle has connected, non-trapping exterior $\Omega$, and $\varphi$ is the specified exterior observation cutoff. For the free Dirichlet equation, the spectral unique-continuation argument uses time translation and gives zero invisibility space for every time $T>0$ and every spectral order $\sigma\in[-2,2]$. Here invisibility means that $\varphi W(t)v=0$ throughout $[0,T]$, where $W(t)=e^{it\Delta_D}$ is the free Dirichlet group.

For the linearized comparison, let $\lambda\in\mathbb R\setminus\{0\}$ and assume hypothesis (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ satisfies $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in distributions, with the homogeneous Dirichlet condition encoded by $w(t)\in H_D^2=H^2\cap H_0^1$. Consider the homogeneous linearized system, obtained by taking the control $h=0$. Its coefficients $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$ can depend on time. A time shift then changes these coefficients, so the free translation argument does not by itself establish unique continuation for that linearized equation. This observation does not rule out special time-independent cases or a different unique-continuation method.

The article describes its spectral method as replacing the Paley–Wiener–Schwartz argument of its reference [7, Lemma 3.1] on $\mathbb R^3$, which it associates with the explicit free-space kernel. It also mentions a Holmgren-theorem route for $L^2$ solutions as in its reference [6], while emphasizing direct treatment of the entire stated spectral range by its own method.

## Statement references

[lem-se-3-4](item-lem-se-3-4)

[prop-se-scale-flow](item-prop-se-scale-flow)

[prop-se-invisible-invariant](item-prop-se-invisible-invariant)

[def-se-linearized-pair](item-def-se-linearized-pair)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] Under Choice and the stated geometry and cutoff, Lemma 3.4 gives $N_T^\sigma=\{0\}$ for $T>0$ and $\sigma\in[-2,2]$, where $N_T^\sigma$ is the specified free invisible space. [lem-se-3-4](item-lem-se-3-4) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] The free operators $W(t)$ form a group on each Dirichlet spectral space. In the spectral argument, the group law is used to carry a locally constant invisible space into itself under small positive time shifts. [prop-se-scale-flow](item-prop-se-scale-flow) [prop-se-invisible-invariant](item-prop-se-invisible-invariant)

[F3] Under the real nonzero coupling and hypothesis (W) stated above, the linearized system has coefficients $V_1(t,x)=2\lambda|w(t,x)|^2$ and $V_2(t,x)=\lambda w(t,x)^2$ and includes the real-linear term $V_2\overline z$. Taking the control $h=0$ gives $i\partial_t z+\Delta z+V_1z+V_2\overline z=0$. Interior equations are interpreted distributionally in a solution class where these products are defined; initial and boundary values are used only when meaningful in that class. [def-se-linearized-pair](item-def-se-linearized-pair)

## Proof

[F1] Under Choice and the stated geometry and cutoff, Lemma 3.4 gives $N_T^\sigma=\{0\}$ for $T>0$ and $\sigma\in[-2,2]$, where $N_T^\sigma$ is the specified free invisible space. [lem-se-3-4](item-lem-se-3-4) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] The free operators $W(t)$ form a group on each Dirichlet spectral space. In the spectral argument, the group law is used to carry a locally constant invisible space into itself under small positive time shifts. [prop-se-scale-flow](item-prop-se-scale-flow) [prop-se-invisible-invariant](item-prop-se-invisible-invariant)

[F3] Under the real nonzero coupling and hypothesis (W) stated above, the linearized system has coefficients $V_1(t,x)=2\lambda|w(t,x)|^2$ and $V_2(t,x)=\lambda w(t,x)^2$ and includes the real-linear term $V_2\overline z$. Taking the control $h=0$ gives $i\partial_t z+\Delta z+V_1z+V_2\overline z=0$. Interior equations are interpreted distributionally in a solution class where these products are defined; initial and boundary values are used only when meaningful in that class. [def-se-linearized-pair](item-def-se-linearized-pair)



**Given:** Choice and the geometry, cutoff and free spectral scale described in the statement; for the comparison, $\lambda$ and $w$ satisfying the stated hypothesis (W), a solution $z$ of the homogeneous linearized equation with control $h=0$, and a real shift $\tau$ with $|\tau|<T$, restricted to times $t$ for which $t,t+\tau\in(0,T)$.

**Goal:** Explain the free time-translation step and why it does not automatically transfer to time-dependent coefficients.

1.1 The group law gives $W(t)W(h)v=W(t+h)v$. Thus a free solution observed to vanish on a sufficiently long interval has its shifted initial state observed to vanish on the corresponding shorter interval. The locally constant invisible-space construction uses precisely this relation to obtain flow invariance; Lemma 3.4 then supplies the zero-space conclusion for the full stated range. [F1, F2, given]

2.1 For the homogeneous linearized solution $z$, set $z_\tau(t,x)=z(t+\tau,x)$ on the overlap interval in the Given. Translating its distributional equation (equivalently, translating each test function in time) gives $i\partial_t z_\tau+\Delta z_\tau+V_1(t+\tau,x)z_\tau+V_2(t+\tau,x)\overline{z_\tau}=0$. There is no forcing term because the control is zero. The shifted equation therefore has shifted coefficients. Unless the coefficients agree with their shifts on the interval in question, the group-law step for one fixed autonomous equation has not been obtained. This does not assert failure of unique continuation by another argument. [F3, given, step 1.1] ∎

## Source notes

The original article is cited for attribution of its methodological comparison on PDF page 6, §1.4(ii), and page 11, Remark 4. Its descriptions of references [6] and [7] are reported as the article's descriptions; those references have not been independently checked here and are not logical premises for the calculation above.
