---
title: "Proposition 4.6: conditional adjoint observability"
status: draft
research_item: prop-se-4-6
dependency_level: 17
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 19, Proposition 4.6 and equation (4.5)
---

PDF p. 19: ` Proposition 4.6; (4.5) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-regularized-adjoint](item-def-se-regularized-adjoint)
- [def-se-ucpw](item-def-se-ucpw)
- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-4-3](item-lem-se-4-3)
- [lem-se-4-4](item-lem-se-4-4)
- [lem-se-4-5](item-lem-se-4-5)
- [math:cor-hilbert-spaces-are-reflexive](https://alphabetamath.cc/item/cor-hilbert-spaces-are-reflexive)
- [math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence](https://alphabetamath.cc/item/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-weak-compactness-language](item-def-se-foundation-weak-compactness-language)
- [math:thm-choice-implies-dependent-implies-countable-choice](https://alphabetamath.cc/item/thm-choice-implies-dependent-implies-countable-choice)
- [math:thm-ultrafilter-lemma](https://alphabetamath.cc/item/thm-ultrafilter-lemma)
- [math:thm-hahn-banach-dominated-extension](https://alphabetamath.cc/item/thm-hahn-banach-dominated-extension)


## Statement

Assume the Axiom of Choice and hypotheses (H), (W), and (UCPw). Thus $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, and $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ is the reference solution specified in [def-se-trajectory](item-def-se-trajectory). The hypothesis (UCPw) is the energy-level unique continuation implication in [def-se-ucpw](item-def-se-ucpw) for this trajectory and the observation region $\omega=\{x\in\Omega:|x|>R\}$.

Let $H_D^\sigma(\Omega)$ be the Dirichlet spectral scale and $U(t)$ the real-linear adjoint evolution for $i v_t+\Delta_Dv+2\lambda|w|^2v-\lambda w^2\overline v=0$, with $\lambda\in\mathbb R\setminus\{0\}$. Let $\varphi$ be the real cutoff of [def-se-control-cutoffs](item-def-se-control-cutoffs), positive exactly on $\omega$. For each $\sigma\in\{-1,-2\}$ there is a constant $C>0$, depending on the fixed data and $\sigma$ but not on $v_0$, such that every $v_0\in H_D^\sigma(\Omega)$ satisfies

$$\|v_0\|_{H_D^\sigma}^2\le C\int_0^T\|\varphi U(t)v_0\|_{H_D^\sigma}^2\,dt.$$

## Facts & Assumptions

[F1] The geometry, nontrapping condition, trajectory, spectral scale and cutoffs are specified by [def-se-geometry](item-def-se-geometry), [def-se-nontrapping](item-def-se-nontrapping), [def-se-trajectory](item-def-se-trajectory), [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-control-cutoffs](item-def-se-control-cutoffs). The scale is a complex Hilbert space at each index; $R_D=(I-\Delta_D)^{-1}$ maps $H_D^\sigma$ isometrically to $H_D^{\sigma+2}$. Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The evolution $U(t)$ is bounded and real-linear on $H_D^\sigma$, uniformly for $t\in[0,T]$, and its trajectories are norm-continuous [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). Multiplication by $\varphi$ is bounded on the relevant scale [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers). The regularized trajectory is $R_DU(t)v_0$ [def-se-regularized-adjoint](item-def-se-regularized-adjoint).

[F3] Under these hypotheses [lem-se-4-3](item-lem-se-4-3) bounds the squared initial norm by a fixed multiple of the sum of the observation integral in the statement and $\int_0^T\|\psi R_DU(t)v_0\|_2^2dt$, where $\psi$ is the compact cutoff of [def-se-control-cutoffs](item-def-se-control-cutoffs). If initial data converge weakly in $H_D^\sigma$, [lem-se-4-4](item-lem-se-4-4) gives strong convergence of their localized regularized trajectories in $L^2(0,T;L^2(\Omega))$.

[F4] If $\varphi U(t)v_0=0$ in $H_D^\sigma$ for every $t\in[0,T]$, [lem-se-4-5](item-lem-se-4-5) gives $U(\cdot)v_0\in C([0,T];H_0^1(\Omega))$. The hypothesis [def-se-ucpw](item-def-se-ucpw) says that an energy-level adjoint solution vanishing almost everywhere on $(0,T)\times\omega$ is identically zero.

[F5] Under Countable Choice, a real or complex Hilbert space is reflexive [math:cor-hilbert-spaces-are-reflexive](https://alphabetamath.cc/item/cor-hilbert-spaces-are-reflexive). Under the ultrafilter lemma, dependent choice and Hahn–Banach, every bounded sequence in a reflexive Banach space has a weakly convergent subsequence [math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence](https://alphabetamath.cc/item/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence). The assumed full Choice implies dependent choice and countable choice by [math:thm-choice-implies-dependent-implies-countable-choice](https://alphabetamath.cc/item/thm-choice-implies-dependent-implies-countable-choice), the filter-extension form of the ultrafilter lemma by [math:thm-ultrafilter-lemma](https://alphabetamath.cc/item/thm-ultrafilter-lemma), and the real dominated-extension principle HB by [math:thm-hahn-banach-dominated-extension](https://alphabetamath.cc/item/thm-hahn-banach-dominated-extension). These are exactly the choice hypotheses of the two preceding suppliers.

[F6] The spaces $C([0,T];X)$ and $L^2(0,T;X)$ use the norm-continuous-path and Bochner time-space conventions of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). Weak convergence under all bounded scalar-linear functionals and realification with the unchanged norm are defined in [def-se-foundation-weak-compactness-language](item-def-se-foundation-weak-compactness-language).

## Proof

**Given:** The fixed data and hypotheses in the Statement, and $\sigma\in\{-1,-2\}$.

**Goal:** Prove the displayed observability estimate for every datum in $H_D^\sigma$.

1.1 Suppose the estimate fails. For each positive integer $j$, choose a nonzero datum and normalize it to obtain $v_{j,0}\in H_D^\sigma$ with $\|v_{j,0}\|_{H_D^\sigma}=1$ and $\int_0^T\|\varphi U(t)v_{j,0}\|_{H_D^\sigma}^2dt<1/j$. Normalization uses real homogeneity of $U(t)$. By the Hilbert-space weak subsequence result, after passing to a subsequence, $v_{j,0}\rightharpoonup v_0$ in $H_D^\sigma$. [F1, F2, F5, F6, given, assume-contra]

2.1 Define $Oa=\varphi U(\cdot)a$ as a map from the realification of $H_D^\sigma$ into $L^2(0,T;H_D^\sigma)$, also regarded as real. The uniform evolution and multiplier bounds make $O$ bounded and real-linear. Complex weak convergence implies weak convergence in the realification, since each bounded real-linear functional is the real part of a bounded complex-linear functional. Consequently $Ov_{j,0}$ converges weakly to $Ov_0$. Its norms tend to zero by step 1.1, so $Ov_0=0$. Norm-continuity of $t\mapsto\varphi U(t)v_0$ then gives $\varphi U(t)v_0=0$ in $H_D^\sigma$ for every $t\in[0,T]$. [F2, F6, step 1.1]

3.1 The invisible-solution lemma gives $U(\cdot)v_0\in C([0,T];H_0^1(\Omega))$. Since $\varphi$ is smooth and strictly positive on $\omega$, the distributional equality $\varphi U(t)v_0=0$ implies $U(t)v_0=0$ on $\omega$: locally divide a compactly supported test function by $\varphi$. The energy-level trajectory therefore vanishes almost everywhere on $(0,T)\times\omega$. Its adjoint equation and continuity meet the hypotheses of (UCPw), which yields $U(\cdot)v_0=0$ and hence $v_0=0$. [F1, F2, F4, step 2.1]

4.1 The compactness lemma now gives $\psi R_DU(\cdot)v_{j,0}\to0$ strongly in $L^2(0,T;L^2(\Omega))$. Applying the observability estimate with remainder to each $v_{j,0}$ makes its right-hand side tend to zero: the observation term tends to zero by step 1.1, and the remainder tends to zero by the preceding strong convergence. Thus $\|v_{j,0}\|_{H_D^\sigma}^2\to0$, contradicting its value $1$. The failure assumption is impossible, proving the stated estimate. [F3, step 1.1, step 3.1, discharge-contradiction] ∎

## Source notes

The article is cited for attribution of Proposition 4.6 and its compactness–uniqueness strategy. The deduction above uses the stated suppliers, not the proposition as its own premise. The explicit Choice assumption records hypotheses of the suppliers and is not attributed to the article.
