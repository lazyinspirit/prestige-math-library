---
id: thm-standardization-identifies-a-causal-mean
kind: theorem
title: "Conditional-class standardization identifies a causal mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-standardization-for-a-causal-mean
  - thm-discrete-treatment-potential-outcome-mean-identification
  - lem-conditional-treatment-indicator-factorization
  - def-potential-outcomes-and-consistency
  - def-conditional-exchangeability-of-potential-outcomes
  - def-identifiability-of-an-estimand
  - lem-conditional-independence-equivalences-and-preservation
  - def-conditional-expectation-as-an-ae-class
  - cor-expectation-of-an-indicator-is-probability
  - thm-tower-property-of-conditional-expectation
  - lem-conditional-expectation-is-unique-almost-surely
  - def-estimand-on-a-statistical-model
  - thm-identifiability-iff-constant-on-equivalence-classes
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, updated 2026 author-hosted edition, Chapter 2, Technical Points 2.2–2.3 and Chapter 3"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "The Mathematics of Indirect Treatment Comparisons, Chapters 9–10, standardization and identification proofs"
      url: "https://choxos.github.io/Mathematics-of-ITC/chapters/part2/10-adjustment-methods.html"
---

## Statement

Assume AC for the conditional-expectation existence convention. Consider a full-data law $P$ with an observed discrete or atomic treatment $A$, covariate random element $L$, observed outcome $Y$, and potential outcomes $(Y^b)_{b\in\mathcal A}$, with supplied potential outcomes (the countably discrete convention is [[def-potential-outcomes-and-consistency]]). Fix an atom $a$ with $P(A=a)>0$ and $Y^a\in L^1(P)$. Assume consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and positivity
$$e_a(L):=P(A=a\mid\sigma(L))>0\quad P\text{-almost surely}.$$
Let $Q$ be the observed-data law of $(A,L,Y)$, put $\mathcal G=\sigma(L)$ and $I_a=\mathbf 1_{\{A=a\}}$, and define the standardization functional $\Psi_{\mathrm{std}}(Q;a)$ as in [[alg-standardization-for-a-causal-mean]]. Then
$$\Psi_{\mathrm{std}}(Q;a)=E_P[Y^a].$$
Thus the observed law and the stated causal assumptions identify the population mean of $Y^a$, in the sense of [[def-identifiability-of-an-estimand]]. No lower bound $e_a(L)\ge\varepsilon>0$ is needed. This result is for a fixed atomic treatment value; it makes no pointwise claim for a continuous treatment.

For countably discrete treatments, the supplied potential outcomes and global
consistency use [[def-potential-outcomes-and-consistency]]; conditional
exchangeability is the full-family sigma-algebra condition of
[[def-conditional-exchangeability-of-potential-outcomes]]. More generally,
for a treatment in any measurable space with measurable singleton $\{a\}$,
the same conclusion holds whenever the supplied integrable $Y^a$ is
conditionally independent of $A$ given $\sigma(L)$ and
$\mathbf1_{\{A=a\}}Y=\mathbf1_{\{A=a\}}Y^a$ almost surely, with the same
positive propensity. This atom-consistency formulation does not require
a global measurable selection $Y^A$ outside the target atom.

On the overlapping countably discrete treatment and standard-Borel covariate
domain of [[thm-discrete-treatment-potential-outcome-mean-identification]],
this conditional-class functional equals that theorem's RCD standardization
functional. The application here also allows arbitrary covariate random
elements and uses the algorithm's version-free conditional class.

## Facts & Assumptions

**Given:** AC, a probability space under $P$, a fixed treatment atom $a$, $Y^a\in L^1(P)$, consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and $e_a(L)>0$ almost surely.

[A1] The point-treatment setup uses potential outcomes and consistency as in [[def-potential-outcomes-and-consistency]]. For the full-family formulation, assume $Y=Y^A$, integrability of $Y^a$, and conditional independence of the potential-outcome family from $A$ given $\sigma(L)$. For the general fixed-atom formulation, assume the atom-consistency and coordinate independence specified in the Statement; those are exactly the two consequences used below.

[A2] The target is the causal mean relative to the causal model and observed law described by [[def-identifiability-of-an-estimand]].

[F1] The standardization functional is $E_Q[m_a(L)]$, where $e_a=E_Q[I_a\mid\mathcal G]$, $q_a=E_Q[I_aY\mid\mathcal G]$, and $m_a=q_a/e_a$ when $e_a>0$. ([[alg-standardization-for-a-causal-mean]])

[F2] For integrable $Z\perp\!\!\!\perp A\mid\mathcal G$ and measurable $C$, $E[\mathbf1_{\{A\in C\}}Z\mid\mathcal G]=E[\mathbf1_{\{A\in C\}}\mid\mathcal G]E[Z\mid\mathcal G]$. ([[lem-conditional-treatment-indicator-factorization]])

[F3] Conditional independence is preserved under measurable maps of either variable. ([[lem-conditional-independence-equivalences-and-preservation]])

[F4] Conditional expectation through nested sigma-algebras has the tower property, including $E[E[X\mid\mathcal G]]=E[X]$ when the smaller sigma-algebra is trivial. ([[thm-tower-property-of-conditional-expectation]])

[F5] Conditional-expectation versions of the same integrable input are unique almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F6] Under AC, conditional expectations are well-defined almost-sure classes of integrable measurable versions. ([[def-conditional-expectation-as-an-ae-class]])

[F7] An estimand on a parametric model is a specified function $\psi:\Theta\to\mathcal T_0$. ([[def-estimand-on-a-statistical-model]])

[F8] An estimand is identifiable when equal sampling laws imply equal target values. ([[def-identifiability-of-an-estimand]])

[F9] Identifiability is equivalent to factorization of the estimand through the statistical model map, with a unique factor on the model's image. ([[thm-identifiability-iff-constant-on-equivalence-classes]])

[F10] The expectation of an event indicator is its probability: $E[\mathbf1_B]=P(B)$. ([[cor-expectation-of-an-indicator-is-probability]])

[F11] For a countable discrete treatment-version set containing $0$ and $1$,
and standard-Borel covariates under
consistency, full-family conditional exchangeability, positivity and AC, the
observed RCD regression is a version of $E[Y^a\mid\sigma(L)]$ on the target
covariate support, and its integral equals $E[Y^a]$.
([[thm-discrete-treatment-potential-outcome-mean-identification]])

## Proof

1.1 Fix $P$ in the stated model class, let $I_a=\mathbf1_{\{A=a\}}$, $e_a=E_P[I_a\mid\mathcal G]$, $\mu_a=E_P[Y^a\mid\mathcal G]$, and $q_a=E_P[I_aY\mid\mathcal G]$. By [F4] and [F10], $P(A=a)=E_P[I_a]=E_P[e_a]$. Global consistency, or the stated atom-consistency directly, gives $I_aY=I_aY^a$ almost surely, so $I_aY$ is integrable. By [F3], full-family exchangeability implies $Y^a\perp\!\!\!\perp A\mid\mathcal G$; in the general atom formulation this coordinate independence is assumed directly; [F2] then gives $q_a=E_P[I_aY^a\mid\mathcal G]=e_a\mu_a$. [given, A1, F2, F3, F4, F6, F10]

2.1 Let $\lambda=P_L=Q_L$ be the common law of the covariate coordinate. Write $\widetilde e_a,\widetilde q_a$ for measurable functions of that coordinate representing the $Q$-conditional classes in [F1], and $\bar e_a,\bar q_a$ for functions representing the $P$-conditional classes $e_a,q_a$ from step 1.1. For each measurable set $B$ in the covariate space, their defining event integrals and the fact that $Q$ is the observed-data law give $$\int_B\widetilde e_a\,d\lambda=Q(A=a,L\in B)=E_P[I_a\mathbf1_{\{L\in B\}}]=\int_B\bar e_a\,d\lambda,$$ $$\int_B\widetilde q_a\,d\lambda=E_Q[I_aY\mathbf1_{\{L\in B\}}]=E_P[I_aY\mathbf1_{\{L\in B\}}]=\int_B\bar q_a\,d\lambda.$$ These functions are integrable, and each pair's difference has zero integral over every measurable $B$. The event-integral uniqueness argument of [F5], on the common covariate law, therefore gives $\widetilde e_a=\bar e_a$ and $\widetilde q_a=\bar q_a$ $\lambda$-almost everywhere. Step 1.1 gives $\bar q_a=\bar e_a\mu_a$; positivity therefore makes the ratio in [F1] equal to $\mu_a$ $Q_L$-almost everywhere. Thus $m_a$ is integrable and the standardization functional is well-defined. [A1, F1, F5, F6, step 1.1, algebra]

3.1 The tower property [F4] gives $\Psi_{\mathrm{std}}(Q;a)=E_P[m_a(L)]=E_P[\mu_a]=E_P[Y^a]$. [F4, step 2.1]

4.1 For either potential-outcome formulation in the Statement, let $\Theta_a$ be the class of full-data laws on the fixed measurable spaces for its variables that satisfy the stated integrability, consistency, conditional-exchangeability (or atom-specific independence), and positivity assumptions. Define the target by $\psi_a(P)=E_P[Y^a]$ and the observation map by $\mathsf O(P)=\mathcal L_P(A,L,Y)=Q$, the pushforward of $P$ under $(A,L,Y)$. Steps 2.1–3.1 show for every $P\in\Theta_a$ that $\psi_a(P)=\Psi_{\mathrm{std}}(\mathsf O(P);a)$, where the conditional classes in the right-hand side are determined uniquely by that observed law. Hence the target factors through the observation map on this model, and [F7]–[F9] imply identifiability from $Q$. [A2, F5, F6, F7, F8, F9, step 2.1, step 3.1, construct]

5.1 Under the additional countably discrete treatment and standard-Borel covariate hypotheses of [F11], the earlier theorem's RCD regression evaluated at $L$ equals $\mu_a$ almost surely on the target support, as established in its proof steps 2.1–3.1. Step 2.1 gives the same class for this algorithm's $m_a$. Thus the two standardization functionals coincide. The causal identification on this overlapping domain is the earlier theorem applied to the conditional-class algorithm; steps 1.1–4.1 supply the extension to arbitrary covariate random elements and the general target-atom formulation. [F11, step 2.1, step 3.1, step 4.1] ∎

## Remarks

The identity uses the true population propensity. It is not a finite-sample stability or estimated-propensity theorem, and it does not justify weight truncation. For continuous $A$, density-based functionals and support conditions require a separate statement; regular conditional versions identify conditional laws only almost everywhere in the treatment law, so no effect at a null value is asserted here.
