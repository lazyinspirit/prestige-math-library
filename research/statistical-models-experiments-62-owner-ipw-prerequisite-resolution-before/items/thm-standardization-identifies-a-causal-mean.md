---
id: thm-standardization-identifies-a-causal-mean
kind: theorem
title: "Standardization identifies a causal mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-standardization-for-a-causal-mean
  - lem-conditional-treatment-indicator-factorization
  - def-potential-outcome-model-and-causal-estimand
  - def-causal-identification-and-partial-identification
  - lem-conditional-independence-equivalences-and-preservation
  - def-conditional-expectation-as-an-ae-class
  - cor-expectation-of-an-indicator-is-probability
  - thm-tower-property-of-conditional-expectation
  - lem-conditional-expectation-is-unique-almost-surely
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
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

Assume AC for the conditional-expectation existence convention. Consider a full-data law $P$ with an observed discrete or atomic treatment $A$, covariate random element $L$, observed outcome $Y$, and potential outcomes $(Y^b)_{b\in\mathcal A}$, using the point-treatment conventions of [[def-potential-outcome-model-and-causal-estimand]]. Fix an atom $a$ with $P(A=a)>0$ and $Y^a\in L^1(P)$. Assume consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and positivity
$$e_a(L):=P(A=a\mid\sigma(L))>0\quad P\text{-almost surely}.$$
Let $Q$ be the observed-data law of $(A,L,Y)$, put $\mathcal G=\sigma(L)$ and $I_a=\mathbf 1_{\{A=a\}}$, and define the standardization functional $\Psi_{\mathrm{std}}(Q;a)$ as in [[alg-standardization-for-a-causal-mean]]. Then
$$\Psi_{\mathrm{std}}(Q;a)=E_P[Y^a].$$
Thus the observed law and the stated causal assumptions identify the population mean of $Y^a$, in the sense of [[def-causal-identification-and-partial-identification]] and [[def-identifiability-of-an-estimand]]. No lower bound $e_a(L)\ge\varepsilon>0$ is needed. This result is for a fixed atomic treatment value; it makes no pointwise claim for a continuous treatment.

## Facts & Assumptions

**Given:** AC, a probability space under $P$, a fixed treatment atom $a$, $Y^a\in L^1(P)$, consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and $e_a(L)>0$ almost surely.

[A1] The point-treatment setup uses potential outcomes and consistency as in [[def-potential-outcome-model-and-causal-estimand]]. For this theorem, assume $Y=Y^A$, integrability of $Y^a$, and conditional independence of the potential-outcome vector from $A$ given $\sigma(L)$.

[A2] The target is the causal mean relative to the causal model and observed law described by [[def-causal-identification-and-partial-identification]].

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

## Proof

1.1 Fix $P$ in the stated model class, let $I_a=\mathbf1_{\{A=a\}}$, $e_a=E_P[I_a\mid\mathcal G]$, $\mu_a=E_P[Y^a\mid\mathcal G]$, and $q_a=E_P[I_aY\mid\mathcal G]$. By [F4] and [F10], $P(A=a)=E_P[I_a]=E_P[e_a]$. Consistency gives $I_aY=I_aY^a$ almost surely, so $I_aY$ is integrable. By [F3], vector exchangeability implies $Y^a\perp\!\!\!\perp A\mid\mathcal G$; [F2] then gives $q_a=E_P[I_aY^a\mid\mathcal G]=e_a\mu_a$. [given, A1, F2, F3, F4, F6, F10]

2.1 Positivity makes division by $e_a$ valid almost surely. By [F1] and step 1.1, the observed conditional mean is $m_a=q_a/e_a=\mu_a$ almost surely; hence $m_a$ is integrable and the standardization functional is well-defined. [A1, F1, step 1.1, algebra]

3.1 The tower property [F4] gives $\Psi_{\mathrm{std}}(Q;a)=E_P[m_a(L)]=E_P[\mu_a]=E_P[Y^a]$. [F4, step 2.1]

4.1 For each full-data model in the class, step 3.1 factors the target $\psi(P)=E_P[Y^a]$ through the observed law as $\bar\psi(Q)=\Psi_{\mathrm{std}}(Q;a)$. The conditional-expectation classes defining $e_a$ and $q_a$ are determined by $Q$ by [F5]–[F6], so this factor is well-defined. By [F7]–[F9], the target is an estimand and this factorization proves its identifiability from $Q$. [A2, F5, F6, F7, F8, F9, step 3.1, construct] ∎

## Remarks

The identity uses the true population propensity. It is not a finite-sample stability or estimated-propensity theorem, and it does not justify weight truncation. For continuous $A$, density-based functionals and support conditions require a separate statement; regular conditional versions identify conditional laws only almost everywhere in the treatment law, so no effect at a null value is asserted here.
