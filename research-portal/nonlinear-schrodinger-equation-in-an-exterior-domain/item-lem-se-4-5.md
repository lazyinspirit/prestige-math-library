---
title: "Lemma 4.5: invisible solutions acquire energy regularity"
status: published
research_item: lem-se-4-5
dependency_level: 15
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 19: ` Lemma 4.5 `

## Prerequisites

- [prop-se-invisible-bootstrap](item-prop-se-invisible-bootstrap)
- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [def-se-geometry](item-def-se-geometry)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-potential-multipliers](item-prop-se-potential-multipliers)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)


## Statement

Assume the Axiom of Choice and hypotheses (H) and (W): $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and the reference solution $w$ belongs to $C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ as specified in [def-se-trajectory](item-def-se-trajectory). Let $U(t)$ be the real-linear propagator for $i v_t+\Delta_Dv+2\lambda|w|^2v-\lambda w^2\overline v=0$, and let $\varphi$ be the real control cutoff of [def-se-control-cutoffs](item-def-se-control-cutoffs). The spaces $H_D^s$ are the Dirichlet spectral scale, with negative indices interpreted by pivot antiduality.

Let $\sigma\in\{-1,-2\}$ and $v_0\in H_D^\sigma(\Omega)$. If $\varphi U(t)v_0=0$ in $H_D^\sigma(\Omega)$ for every $t\in[0,T]$, then $v_0\in H_0^1(\Omega)$ and $U(\cdot)v_0\in C([0,T];H_0^1(\Omega))$. Here $H_0^1(\Omega)$ is the $H^1(\Omega)$-norm closure of $C_c^\infty(\Omega)$, and continuity is in its norm. At most three one-derivative bootstrap applications suffice.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-trajectory](item-def-se-trajectory)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)

## Facts & Assumptions

[F1] Under Choice, (H), and (W), [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution) supplies the unique adjoint mild solution $v(t)=U(t)v_0$ in $C([0,T];H_D^\sigma)$, with the equation and potential signs displayed above. For each $q\in[-2,2]$, the same supplier gives existence and uniqueness of the adjoint mild solution in $C([0,T];H_D^q)$ for every initial datum in $H_D^q$. The geometry, trajectory and cutoff conventions are those of [def-se-geometry](item-def-se-geometry), [def-se-trajectory](item-def-se-trajectory) and [def-se-control-cutoffs](item-def-se-control-cutoffs).

[F2] Under the same assumptions, [prop-se-invisible-bootstrap](item-prop-se-invisible-bootstrap) says that an invisible adjoint mild solution in $C([0,T];H_D^\theta)$ gains one derivative to $C([0,T];H_D^{\theta+1})$ whenever $\theta\in[-2,0]$. Its invisibility condition is equality in the input scale.

[F3] The scale identification $H_D^1(\Omega)=H_0^1(\Omega)$ has equality of the scale norm with the usual $H^1$ norm, by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). The closure convention for $H_0^1$ and norm-continuity convention for $C([0,T];H_0^1)$ are fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). Choice is the hypothesis recorded in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] With $A=I-\Delta_D\ge I$ and $E_s=H_D^s$, the common spectral core $\mathcal C=D(A^\infty)$ is dense in every $E_s$. For $b\ge a$, its identity extends to a bounded injective inclusion $i_{b,a}:E_b\to E_a$, with compatible compositions. These are the explicit conclusions of [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications), applied to the realization and scale in [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F5] For $-2\le s\le2$, [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality) supplies bounded multiplication by each $h\in W^{2,\infty}(\Omega)$ on $E_s$, agreement with ordinary multiplication on $L^2$ at negative orders, and the isometric conjugation $J_s$. The free groups $W_s(t)=e^{it\Delta_D}$ are strongly continuous on $E_s$ by [prop-se-scale-flow](item-prop-se-scale-flow) and are consistent across scales by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). With $V_1(t)=2\lambda|w(t)|^2$ and $V_2(t)=\lambda w(t)^2$, [prop-se-potential-multipliers](item-prop-se-potential-multipliers) gives $V_j\in C([0,T];W^{2,\infty})$ and norm-continuous bounded multipliers on these levels. Thus $P_s(t)z=i(V_1(t)z-V_2(t)J_sz)$ is a norm-continuous bounded real-linear perturbation.

[F6] A bounded complex-linear map between Banach spaces commutes with the Bochner integral of a Bochner-integrable map, by [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). We apply this only to the bounded inclusions $i_{b,a}$ between the Hilbert spaces in [F4], and to the integrals already supplied by the mild evolution in [F1].

## Proof

[F1] Under Choice, (H), and (W), [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution) supplies the unique adjoint mild solution $v(t)=U(t)v_0$ in $C([0,T];H_D^\sigma)$, with the equation and potential signs displayed above. For each $q\in[-2,2]$, the same supplier gives existence and uniqueness of the adjoint mild solution in $C([0,T];H_D^q)$ for every initial datum in $H_D^q$. The geometry, trajectory and cutoff conventions are those of [def-se-geometry](item-def-se-geometry), [def-se-trajectory](item-def-se-trajectory) and [def-se-control-cutoffs](item-def-se-control-cutoffs).

[F2] Under the same assumptions, [prop-se-invisible-bootstrap](item-prop-se-invisible-bootstrap) says that an invisible adjoint mild solution in $C([0,T];H_D^\theta)$ gains one derivative to $C([0,T];H_D^{\theta+1})$ whenever $\theta\in[-2,0]$. Its invisibility condition is equality in the input scale.

[F3] The scale identification $H_D^1(\Omega)=H_0^1(\Omega)$ has equality of the scale norm with the usual $H^1$ norm, by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). The closure convention for $H_0^1$ and norm-continuity convention for $C([0,T];H_0^1)$ are fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). Choice is the hypothesis recorded in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] With $A=I-\Delta_D\ge I$ and $E_s=H_D^s$, the common spectral core $\mathcal C=D(A^\infty)$ is dense in every $E_s$. For $b\ge a$, its identity extends to a bounded injective inclusion $i_{b,a}:E_b\to E_a$, with compatible compositions. These are the explicit conclusions of [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications), applied to the realization and scale in [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F5] For $-2\le s\le2$, [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality) supplies bounded multiplication by each $h\in W^{2,\infty}(\Omega)$ on $E_s$, agreement with ordinary multiplication on $L^2$ at negative orders, and the isometric conjugation $J_s$. The free groups $W_s(t)=e^{it\Delta_D}$ are strongly continuous on $E_s$ by [prop-se-scale-flow](item-prop-se-scale-flow) and are consistent across scales by [def-se-dirichlet-scale](item-def-se-dirichlet-scale). With $V_1(t)=2\lambda|w(t)|^2$ and $V_2(t)=\lambda w(t)^2$, [prop-se-potential-multipliers](item-prop-se-potential-multipliers) gives $V_j\in C([0,T];W^{2,\infty})$ and norm-continuous bounded multipliers on these levels. Thus $P_s(t)z=i(V_1(t)z-V_2(t)J_sz)$ is a norm-continuous bounded real-linear perturbation.

[F6] A bounded complex-linear map between Banach spaces commutes with the Bochner integral of a Bochner-integrable map, by [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). We apply this only to the bounded inclusions $i_{b,a}$ between the Hilbert spaces in [F4], and to the integrals already supplied by the mild evolution in [F1].

**Given:** The assumptions and invisible initial datum in the Statement.

**Goal:** Obtain energy regularity of the entire trajectory and of its initial value, justifying each change of mild-solution scale.

1.1 Use the inclusions in [F4] for $-2\le a\le b\le1$. The cutoff $\varphi$ belongs to $W^{2,\infty}(\Omega)$: it is bounded, smooth on $\mathbb R^n$, and constant outside a fixed ball, so its derivatives of orders one and two have compact support and finite bounds. The same multiplier theorem applies to every $V_j(t)$ by [F5]. For any such multiplier $h$, denote its action on $E_s$ by $M_h^{(s)}$. For $x\in\mathcal C\subset L^2$, the products $M_h^{(b)}x$ and $M_h^{(a)}x$ represent the same ordinary $L^2$ product: this is the positive-order convention and the negative-order agreement in [F5]. Consequently $i_{b,a}M_h^{(b)}x=M_h^{(a)}i_{b,a}x$ on $\mathcal C$. Both sides are bounded maps $E_b\to E_a$, so density extends this equality to every $x\in E_b$. The identical argument for ordinary complex conjugation gives $i_{b,a}J_b=J_ai_{b,a}$. [F1, F4, F5]

2.1 The free-flow consistency and step 1.1 give $i_{b,a}W_b(t)=W_a(t)i_{b,a}$ and $i_{b,a}P_b(t)=P_a(t)i_{b,a}$. If $x\in E_b$ and $M_\varphi^{(a)}i_{b,a}x=0$, step 1.1 gives $i_{b,a}M_\varphi^{(b)}x=0$. Injectivity of $i_{b,a}$ therefore implies $M_\varphi^{(b)}x=0$ in $E_b$. Thus invisibility transfers to any higher level in this range whenever the vector belongs to that level. [F4, F5, step 1.1]

3.1 Fix $-2\le a\le b\le1$ and $x\in E_b$. Let $z_b\in C([0,T];E_b)$ be the adjoint mild solution with initial value $x$, furnished by [F1]. Its equation is $z_b(t)=W_b(t)x+\int_0^tW_b(t-r)P_b(r)z_b(r)\,dr$. Apply the bounded complex-linear inclusion $i_{b,a}$ to this equation. By [F6] it passes through the Bochner integral, and the identities of step 2.1 turn the resulting equation into $i_{b,a}z_b(t)=W_a(t)i_{b,a}x+\int_0^tW_a(t-r)P_a(r)i_{b,a}z_b(r)\,dr$. The included path is continuous in $E_a$, so it is the lower-level mild solution with that datum. Uniqueness from [F1] identifies it with that solution throughout $[0,T]$. This argument does not move the factor $i$ through a real-linear perturbed propagator; $P_s$ stays inside the free-flow integral. [F1, F4, F5, F6, step 2.1]

4.1 Suppose $v$ is an invisible adjoint mild solution at an index $q\in\{-2,-1,0\}$. The bootstrap gives $v\in C([0,T];E_{q+1})$, including $v(0)\in E_{q+1}$. Solve the equation in $E_{q+1}$ with datum $v(0)$ and apply step 3.1 with $a=q$ and $b=q+1$. Its inclusion is the original path by uniqueness in $E_q$. Injectivity of the inclusion then identifies its values with the higher-regularity path just obtained. Hence $v$ is a mild solution in $E_{q+1}$, not merely a continuous path there. Step 2.1 applied at each time also gives $M_\varphi^{(q+1)}v(t)=0$. Whenever $q+1\le0$, these are precisely the hypotheses needed for the next bootstrap. [F1, F2, F4, step 2.1, step 3.1]

5.1 Set $v(t)=U(t)v_0$. By [F1] and the assumption, it is an invisible mild solution in $E_\sigma$. If $\sigma=-1$, apply step 4.1 at $q=-1$ and then at $q=0$ to reach $v\in C([0,T];E_1)$. If $\sigma=-2$, apply step 4.1 at $q=-2$, then $q=-1$, then $q=0$, reaching the same space. Thus two applications suffice for $\sigma=-1$ and three for $\sigma=-2$, with both mildness and invisibility established before every repeated application. [F1, F2, step 4.1, given]

6.1 The identification in [F3] transfers this norm-continuous path to $C([0,T];H_0^1(\Omega))$. Evaluating the path at $t=0$ and using $U(0)v_0=v_0$ gives $v_0\in H_0^1(\Omega)$. This proves the stated regularity and the claimed number of bootstrap applications. [F1, F3, step 5.1] ∎

## Source notes

The original article is cited for attribution of Lemma 4.5 on PDF page 19. The cutoff compatibility and higher-scale mildness arguments above are local deductions from the declared mathematical suppliers, not imported claims from that article. The explicit Choice assumption records supplier hypotheses and is not attributed to the article. The statement and its original coverage are unchanged. The Physics Library's self-adjoint flow calculus is a mathematical input already used through the free-flow supplier; no physical premise is added.
