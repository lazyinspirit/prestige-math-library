---
id: def-se-ucpw
kind: definition
domain: mathematics
title: Conditional energy-level unique continuation hypothesis
status: draft
deps:
  - def-se-trajectory
  - def-se-linearized-pair
  - def-se-control-cutoffs
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - def-se-foundation-distributional-equation
  - math:def-axiom-of-choice
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-heine-cantor-metric
  - math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - math:thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:def-locally-integrable-function-as-a-regular-distribution
  - math:lem-w-one-two-is-a-hilbert-space
  - math:def-hilbert-space
dependency_roles:
  def-se-trajectory: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
  math:thm-heine-cantor-metric: mathematical-premise
  math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures: mathematical-premise
  math:thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
  math:thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  math:thm-complex-holder-minkowski-and-the-quotient-norm: mathematical-premise
  math:def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
  math:lem-w-one-two-is-a-hilbert-space: mathematical-premise
  math:def-hilbert-space: mathematical-premise
formulation_deps:
  - def-se-trajectory
  - def-se-linearized-pair
  - def-se-control-cutoffs
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - def-se-foundation-distributional-equation
  - math:def-axiom-of-choice
  - math:lem-w-one-two-is-a-hilbert-space
  - math:def-hilbert-space
argument_deps:
  - def-se-trajectory
  - def-se-linearized-pair
  - def-se-control-cutoffs
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - def-se-foundation-distributional-equation
  - math:def-axiom-of-choice
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-heine-cantor-metric
  - math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - math:thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:def-locally-integrable-function-as-a-regular-distribution
  - math:lem-w-one-two-is-a-hilbert-space
  - math:def-hilbert-space
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 5, equation (1.11) and boxed assumption (UCPw).
      statement: The energy-level unique-continuation implication for the adjoint
        equation around the fixed reference trajectory.
      hypotheses: The article's trajectory (W), smooth connected exterior, positive
        time, real nonzero coupling and exterior observation region.
      reading_limits: The frozen v2 extracted text on PDF pages 4 and 5 was read for
        attribution of the formulation only. The article supplies no proof here
        of the assumed implication or of its prerequisite constructions.
dependency_level: 10
---

## Definition

Assume the Axiom of Choice: every family of nonempty sets has a choice function. Let $T>0$, $n\ge2$, and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Let $\lambda\in\mathbb R\setminus\{0\}$ and fix a trajectory $w$ satisfying (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in distributions on $(0,T)\times\Omega$. Here $H_D^2(\Omega)=H^2(\Omega)\cap H_0^1(\Omega)$, and the path is continuous in the sum norm on the intersection.

Choose $R>0$ with $\Theta\subset B_R(0)$ and set $\omega=\{x\in\Omega:|x|>R\}$. Put $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$. A function $v\in C([0,T];H_0^1(\Omega))$ is an energy-level solution of the adjoint equation if

$$i\partial_t v+\Delta v+V_1v-V_2\overline v=0\quad\text{in }\mathcal D'((0,T)\times\Omega).$$

The space $H_0^1(\Omega)$ is the $H^1$-norm closure of smooth compactly supported functions; membership at every time imposes the homogeneous Dirichlet condition in this solution class. Continuity is in the $H_0^1$ norm. The distributional equation means equality on every smooth compactly supported space-time test function, with distributional derivatives.

The hypothesis **(UCPw)** for this fixed $w$, $T$ and $\omega$ is the following implication: every such energy-level solution $v$ that is zero almost everywhere on $(0,T)\times\omega$ is identically zero as an $H_0^1(\Omega)$-valued path on $[0,T]$.

## Definition references

[[def-se-trajectory]]

[[def-se-linearized-pair]]

[[def-se-control-cutoffs]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-time-function-spaces]]

[[def-se-foundation-distributional-equation]]

[[math:def-axiom-of-choice]]

[[math:lem-w-one-two-is-a-hilbert-space]]

[[math:def-hilbert-space]]

## Facts & Assumptions

[F1] The trajectory and its geometry are specified by [[def-se-trajectory]], the observation region by [[def-se-control-cutoffs]], and the adjoint coefficients and minus sign by [[def-se-linearized-pair]]. The space-time construction in the Justification of the trajectory supplier gives a jointly measurable representative $W$ of $w$, with $[W(t,\cdot)]=w(t)$ for almost every $t$, $W\in L^2((0,T)\times\Omega)$ and $|W|\le M$ almost everywhere for some finite $M$. That construction also proves representative independence.

[F2] [[def-se-foundation-integer-sobolev-notation]] gives $\|u\|_2\le\|u\|_{H^1}$ and the closure convention for $H_0^1$. Under Countable Choice supplied by F3, [[math:lem-w-one-two-is-a-hilbert-space]] applies to the open set $\Omega\subseteq\mathbb R^n$, $n\ge2$, with scalar field $\mathbb C$: both $H^1(\Omega)$ and its closed subspace $H_0^1(\Omega)$ are Hilbert spaces for the Sobolev inner product and its restriction. Their induced norms are exactly the $H^1$ norm and its restriction used here, with no boundedness assumption on $\Omega$. By [[math:def-hilbert-space]], completeness for that induced norm makes $H_0^1(\Omega)$ a complex Banach space. Thus it satisfies the target-space hypothesis of [[def-se-foundation-time-function-spaces]], which specifies norm-continuous paths and their bounded supremum norm on the compact interval $[0,T]$. [[math:thm-heine-cantor-metric]] makes a continuous map from that compact metric interval into any metric space uniformly continuous.

[F3] The assumed choice axiom is [[math:def-axiom-of-choice]]. Under it, [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]] supplies Countable Choice. Here its countable consequence covers the measure and completeness suppliers and countably many spatial representative selections; no new choice assumption is added.

[F4] Under Countable Choice, [[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] gives sigma-finite Lebesgue factors and finite measure for compact sets. [[math:thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]] identifies the completed time-space product with Euclidean Lebesgue measure, including after restriction to the open cylinder.

[F5] Under Countable Choice, [[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences]] gives completeness of complex $L^2$ on every measure space. Only its completeness assertion is needed below.

[F6] Under Countable Choice, [[math:thm-tonelli-and-fubini-for-completed-product-measures]] gives Tonelli for nonnegative measurable functions on completed products of sigma-finite factors, with measurable spatial sections outside a null set of times. This applies also to counting measure paired with time measure, and to indicators of disagreement sets.

[F7] [[math:thm-complex-holder-minkowski-and-the-quotient-norm]] gives complex Hölder, Minkowski and definiteness of the almost-everywhere quotient norms.

[F8] [[math:def-locally-integrable-function-as-a-regular-distribution]] assigns to every complex locally integrable function $f$ on an open Euclidean set the distribution $T_f(\eta)=\int f\eta$, without conjugating the test function, independently of its almost-everywhere representative. Its Countable Choice hypothesis is supplied by F3. [[def-se-foundation-distributional-equation]] supplies the distributional derivatives, Laplacian and equality convention.

## Justification

**Given:** AC, the fixed data in the Definition, the trajectory $w$, and a path $v\in C([0,T];H_0^1(\Omega))$.

**Goal:** Justify the space-time interpretation and representative independence of the predicate, without asserting its truth for every trajectory.

1.1 F2 verifies that $H_0^1(\Omega)$, with the restricted $H^1$ norm, is a Banach target for the stated path space. Put $Q=(0,T)\times\Omega$. By the Sobolev norm bound, $v$ is continuous as an $L^2(\Omega)$-valued path. It is bounded there and uniformly continuous by F2, so for each integer $m\ge1$ choose a finite interval partition with left-endpoint sampled step path $s_m$ satisfying $\sup_{0\le t\le T}\|s_m(t)-v(t)\|_2\le2^{-m}$; assign $s_m(T)=v(T)$. Choose measurable spatial representatives of the countably many sampled classes using F3. They form a jointly measurable finite time-step function $U_m$ on $Q$ with spatial class $s_m(t)$. Tonelli and the norm inequalities give $\|U_m\|_{L^2(Q)}\le T^{1/2}(\sup_t\|v(t)\|_2+2^{-m})$ and $\|U_m-U_l\|_{L^2(Q)}\le T^{1/2}(2^{-m}+2^{-l})$. The factors are sigma-finite and the measure is the Euclidean cylinder measure by F4. [given, F2, F3, F4, F6, F7, choose, construct]

2.1 By F5 there is a measurable representative $U$ of the $L^2(Q)$ limit. Letting $l$ tend to infinity in the preceding norm bound gives $\|U_m-U\|_{L^2(Q)}\le T^{1/2}2^{-m}$. Tonelli first in the time-space factors and then with counting measure gives $\int_0^T\sum_{m\ge1}\|U_m(t,\cdot)-U(t,\cdot)\|_2^2\,dt\le T\sum_{m\ge1}4^{-m}<\infty$. All sections and section norms are taken outside the common null exceptional set; Tonelli for $|U|^2$ also makes $U(t,\cdot)$ an $L^2$ function almost everywhere in time. Thus $U_m(t,\cdot)\to U(t,\cdot)$ in $L^2(\Omega)$ for almost every $t$. Their classes $s_m(t)$ converge to $v(t)$ at every time, so definiteness and uniqueness of norm limits give $[U(t,\cdot)]=v(t)$ for almost every $t$. This constructs the required space-time representative with $U\in L^2(Q)$. [F3, F4, F5, F6, F7, step 1.1]

3.1 If $\widetilde U$ is another jointly measurable function with spatial class $v(t)$ for almost every $t$, the indicator of $\{U\ne\widetilde U\}$ has spatial integral zero for almost every $t$. Tonelli makes that disagreement set product-null, and F4 makes it Euclidean null. Hence $U=\widetilde U$ almost everywhere on $Q$. Its restriction to $(0,T)\times\omega$ has the same property, so the almost-everywhere vanishing condition depends only on the path. The construction for $w$ in F1 has the same independence. [F1, F4, F6, step 2.1]

4.1 Use the representative $W$ from F1 and set $P_1=2\lambda|W|^2U$ and $P_2=\lambda W^2\overline U$. These functions are jointly measurable and satisfy $\|P_1\|_{L^2(Q)}\le2|\lambda|M^2\|U\|_{L^2(Q)}$ and $\|P_2\|_{L^2(Q)}\le|\lambda|M^2\|U\|_{L^2(Q)}$. Every compact $K\subset Q$ has finite measure; for $f=U,P_1,P_2$, Hölder gives $\int_K|f|\le |K|^{1/2}\|f\|_{L^2(Q)}<\infty$. F8 therefore makes all three functions regular distributions. Their almost-everywhere classes, and hence these distributions, are independent of the representatives by step 3.1 and F1. F8 now defines $i\partial_tT_U+\Delta_xT_U+T_{P_1}-T_{P_2}=0$ as equality on every smooth compactly supported test function, exactly the adjoint equation of F1 in the stated solution class. [F1, F4, F7, F8, step 2.1, step 3.1, algebra]

5.1 The space-time equation and vanishing condition are thus well-defined properties of $v$. Its homogeneous Dirichlet convention is membership in the $H^1$ closure $H_0^1$ at each time, as specified in F2, without a pointwise boundary assertion. The conclusion is equality to the zero path on the closed interval, so includes the endpoints. These properties define the conditional implication for the fixed data and observation region in F1. The argument proves neither that (UCPw) holds for all trajectories satisfying (W) nor existence or uniqueness of adjoint solutions. [given, F1, F2, F8, step 3.1, step 4.1] ∎



The original article is cited only for attribution of (UCPw) and equation (1.11) on PDF page 5. The Definition is unchanged. The numbered Justification is a local argument using the named mathematical suppliers, not a proof attributed to the original authors. The current trajectory supplier already supplies the representative for $w$; the additional construction here supplies the energy-level path $v$. No new item, physical premise, publication stamp or independent review is proposed.

## Source notes

The original article is cited only for attribution of (UCPw) and equation (1.11) on PDF page 5. The Definition is unchanged. The numbered Justification is a local argument using the named mathematical suppliers, not a proof attributed to the original authors. The current trajectory supplier already supplies the representative for $w$; the additional construction here supplies the energy-level path $v$. No new item, physical premise, publication stamp or independent review is proposed.
