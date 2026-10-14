---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: cex-bounded-spectrum-covariance-lower-rate-must-be-capped
kind: counterexample
title: A bounded covariance class forces a capped lower rate
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-bounded-spectrum-covariance-class
  - def-huber-covariance-model
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-of-archimedean
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
axiom_use: AC is inherited through the Gaussian Huber model; the deterministic zero-estimator calculation adds no choice.
---

## Statement refuted

For fixed $M>0$, there are positive constants $C_M,c_0$ such that for every $p,n\ge1$ and $0\le\epsilon\le1$,
$$\inf_{\widehat\Sigma}\sup_{\Sigma\in\mathcal F_p(M)}\sup_Q P_{\epsilon,\Sigma,Q}^{\otimes n}\left\{\|\widehat\Sigma-\Sigma\|_{\rm op}^2\ge C_M\bigl((p/n)\vee\epsilon^2\bigr)\right\}\ge c_0,$$
where the infimum ranges over all Borel matrix-valued estimators.

## Facts & Assumptions

**Given:** AC, a fixed $M>0$, proposed positive constants $C_M,c_0$, and the bounded-spectrum Gaussian Huber model.

[F1] [[def-bounded-spectrum-covariance-class]]: every $\Sigma\in\mathcal F_p(M)$ is positive semidefinite with $\|\Sigma\|_{\rm op}\le M$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: changing the sign of a matrix preserves its operator norm.

[F3] [[thm-of-archimedean]]: the natural numbers are unbounded above in the real field.

[F4] [[def-huber-covariance-model]] gives the Gaussian Huber sample laws. Their Gaussian convention retains [[def-axiom-of-choice]]; the pointwise loss bound below is independent of the sampling law.

## Counterexample

1.1 The constant zero-matrix estimator is Borel, since the inverse image of any Borel set is either the entire sample space or empty. For every target in the class its squared operator loss is $\|0-\Sigma\|_{\rm op}^2=\|\Sigma\|_{\rm op}^2\le M^2$ by [F1]–[F2], for every possible observation and every contaminant. [F1, F2, F4, given, algebra]

2.1 By [F3], choose an integer $p>M^2/C_M$, and take $n=1$, $\epsilon=0$. The proposed threshold is $C_Mp>M^2$, so the tail event for the zero estimator is empty under every target and contaminant by step 1.1. Its worst-case probability, hence the nonnegative minimax infimum, is zero, contradicting $c_0>0$. Thus an uncapped all-dimension lower rate is false; the bounded loss requires a cap such as $\min\{1,(p/n)\vee\epsilon^2\}$ in a valid matching lower statement. [F3, F4, step 1.1, given, choose, algebra] ∎
