---
id: thm-inverse-probability-weighting-identifies-a-causal-mean
kind: theorem
title: "Inverse probability weighting identifies a causal mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-inverse-probability-weighting-for-a-causal-mean
  - lem-conditional-treatment-indicator-factorization
  - def-potential-outcome-model-and-causal-estimand
  - def-causal-identification-and-partial-identification
  - lem-conditional-independence-equivalences-and-preservation
  - def-conditional-expectation-as-an-ae-class
  - cor-expectation-of-an-indicator-is-probability
  - thm-taking-out-what-is-known
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-tower-property-of-conditional-expectation
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
    - title: "The Mathematics of Indirect Treatment Comparisons, Chapters 9–10, inverse-probability weighting proof"
      url: "https://choxos.github.io/Mathematics-of-ITC/chapters/part2/10-adjustment-methods.html"
---

## Statement

Assume AC for the conditional-expectation existence convention. Let $P$ be a full-data law with a discrete or atomic treatment $A$, covariate random element $L$, observed outcome $Y$, and potential outcomes $(Y^b)_{b\in\mathcal A}$ in the setup of [[def-potential-outcome-model-and-causal-estimand]]. Fix an atom $a$ with $P(A=a)>0$ and $Y^a\in L^1(P)$. Assume consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and positivity $e_a(L):=P(A=a\mid\sigma(L))>0$ almost surely. For $I_a=\mathbf1_{\{A=a\}}$ and the observed law $Q$ of $(A,L,Y)$, the inverse-probability-weighted functional of [[alg-inverse-probability-weighting-for-a-causal-mean]] is well-defined and satisfies
$$E_Q\!\left[\frac{I_aY}{e_a(L)}\right]=E_P[Y^a].$$
Consequently, it identifies the population mean of $Y^a$ in the sense of [[def-causal-identification-and-partial-identification]] and [[def-identifiability-of-an-estimand]]. No uniform lower bound on $e_a$ is assumed. This is a population identity for the true propensity, not a finite-sample stability or estimated-weight result.

## Facts & Assumptions

**Given:** AC, a probability space under $P$, a fixed treatment atom $a$, $Y^a\in L^1(P)$, consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and $e_a(L)>0$ almost surely.

[A1] The point-treatment setup uses potential outcomes and consistency as in [[def-potential-outcome-model-and-causal-estimand]]. For this theorem, assume $Y=Y^A$, integrability of $Y^a$, and conditional independence of the potential-outcome vector from $A$ given $\sigma(L)$.

[A2] The target is the causal mean relative to the causal model and observed law described by [[def-causal-identification-and-partial-identification]].

[F1] The IPW functional is $E_Q[I_aY/e_a(L)]$, where $e_a=E_Q[I_a\mid\sigma(L)]$ and the weighted variable is required to be integrable. ([[alg-inverse-probability-weighting-for-a-causal-mean]])

[F2] For integrable $Z\perp\!\!\!\perp A\mid\mathcal G$, $E[\mathbf1_{\{A\in C\}}Z\mid\mathcal G]=E[\mathbf1_{\{A\in C\}}\mid\mathcal G]E[Z\mid\mathcal G]$. ([[lem-conditional-treatment-indicator-factorization]])

[F3] A bounded $\mathcal G$-measurable factor can be taken outside conditional expectation. ([[thm-taking-out-what-is-known]])

[F4] Integrals of a nondecreasing sequence of nonnegative measurable functions converge to the integral of their pointwise limit. ([[thm-monotone-convergence-for-the-integral]])

[F5] Dominated convergence gives $L^1$ convergence under an integrable majorant and convergence of the corresponding integrals. ([[thm-dominated-convergence]])

[F6] Conditional expectation preserves the expectation when conditioning down to the trivial sigma-algebra. ([[thm-tower-property-of-conditional-expectation]])

[F7] An estimand is a specified function on a statistical model. ([[def-estimand-on-a-statistical-model]])

[F8] Equal observed sampling laws must give equal values of an identifiable estimand. ([[def-identifiability-of-an-estimand]])

[F9] Identifiability is equivalent to a unique factorization through the statistical model map. ([[thm-identifiability-iff-constant-on-equivalence-classes]])

[F10] Conditional expectations are almost-sure classes of integrable measurable versions under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F11] The expectation of an event indicator is its probability: $E[\mathbf1_B]=P(B)$. ([[cor-expectation-of-an-indicator-is-probability]])

## Proof

1.1 Put $\mathcal G=\sigma(L)$, $I_a=\mathbf1_{\{A=a\}}$, $e_a=E_P[I_a\mid\mathcal G]$, $\mu_a=E_P[Y^a\mid\mathcal G]$, and $H_n=\min(n,1/e_a)$ on $\{e_a>0\}$, setting $H_n=0$ on the null complement. By [F6] and [F11], $P(A=a)=E_P[I_a]=E_P[e_a]$. Then $H_n$ is bounded and $\mathcal G$-measurable, $H_n\uparrow1/e_a$ almost surely, and $I_aY=I_aY^a$ almost surely by consistency. The conditional expectations exist by AC. [given, A1, F6, F10, F11]

2.1 By [F3], [F2] applied to $|Y^a|$ gives $E[I_a|Y^a|\mid\mathcal G]=e_aE[|Y^a|\mid\mathcal G]$. For each $n$, taking out the bounded factor $H_n$ yields $E[I_a|Y^a|H_n]=E[e_aH_nE[|Y^a|\mid\mathcal G]]$. Monotone convergence [F4] on the left and dominated convergence [F5] on the right, since $0\le e_aH_n\uparrow1$ and $E[|Y^a|\mid\mathcal G]\in L^1$, give $E[I_a|Y^a|/e_a]=E|Y^a|<\infty$. Thus the observed weighted outcome is integrable. [A1, F2, F3, F4, F5, step 1.1]

3.1 By [F3], [F2] also gives $E[I_aY^a\mid\mathcal G]=e_a\mu_a$. For each $n$, $E[I_aY^aH_n]=E[e_aH_n\mu_a]$. The left sides converge to $E[I_aY^a/e_a]$ by [F5] with integrable majorant $I_a|Y^a|/e_a$ from step 2.1; the right sides converge to $E[\mu_a]$ by [F5] with majorant $|\mu_a|$. Hence $E[I_aY^a/e_a]=E[\mu_a]$. [F2, F3, F5, step 2.1]

4.1 By the tower property [F6], $E[\mu_a]=E[Y^a]$. Since $I_aY=I_aY^a$ almost surely and $e_a>0$ almost surely, step 3.1 gives $E_Q[I_aY/e_a(L)]=E_P[Y^a]$ and verifies the functional in [F1] is well-defined. [A1, F1, F6, step 3.1]

5.1 For every compatible full-data law, the observed functional in [F1] depends only on $Q$ and equals the target by step 4.1. It therefore defines a unique factor through the observed-law map; by [F7]–[F9], the causal mean is an estimand identified by $Q$. [A2, F1, F7, F8, F9, step 4.1, construct] ∎

## Remarks

Strict positivity is required at each target covariate stratum but need not be bounded away from zero. Near-positivity can make the integrand very variable, as the examples page shows. No finite-sample stability, estimated-propensity consistency, or validity after weight truncation follows from this identity. Continuous-treatment density weights are outside this theorem's scope.
