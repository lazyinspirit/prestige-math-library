---
id: ex-gaussian-two-point-le-cam-lower-bound
kind: example
title: "A Gaussian two-point lower bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-multivariate-normal-law
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-randomized-procedure-as-a-markov-kernel
  - def-standard-normal-and-normal-laws
  - def-statistical-experiment
  - lem-gaussian-location-kl-formula
  - thm-pinsker
  - thm-product-kl-additivity
  - thm-two-point-le-cam-risk-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, §§4.3 and 4.5"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.3, Example 8.3.1"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Example

Let $n\ge1$ and $\sigma>0$. Observe independent
$X_1,\ldots,X_n\sim N(\theta,\sigma^2)$, and estimate the scalar mean
$\theta$ under squared-error loss. Restrict the parameter set to
$$\theta_0=-\frac{\sigma}{4\sqrt n},\qquad \theta_1=\frac{\sigma}{4\sqrt n}.$$
The minimax risk over this two-point experiment is at least
$$\frac{3\sigma^2}{128n}.$$

## Facts & Assumptions

**Given:** The two-point Gaussian location experiment, with independent observations and arbitrary randomized estimators under squared-error loss.

[F1] [[def-standard-normal-and-normal-laws]] and [[def-multivariate-normal-law]]: the observation vector has the product law $N_n(\theta\mathbf1,\sigma^2 I_n)$, with independent normal coordinates.

[F7] [[def-statistical-experiment]] and [[def-parameter-measurable-statistical-model-as-markov-kernel]]: the model assigns one probability law to each parameter; because this parameter set is finite with its power-set sigma-algebra, the assignment is a measurable probability kernel.

[F2] [[lem-gaussian-location-kl-formula]]: equal-variance normal location laws satisfy $D(N(a,\tau^2)\|N(b,\tau^2))=(a-b)^2/(2\tau^2)$.

[F3] [[thm-product-kl-additivity]]: for finite product laws, KL divergence is the sum of the factor divergences.

[F4] [[thm-pinsker]]: under the event-supremum convention, $\|P-Q\|_{\rm TV}\le\sqrt{D(P\|Q)/2}$.

[F5] [[thm-two-point-le-cam-risk-bound]]: two scalar targets separated by $\Delta$ have minimax squared-error risk at least $\Delta^2(1-\|P_0-P_1\|_{\rm TV})/8$.

[F6] [[def-loss-function-and-risk]], [[def-randomized-procedure-as-a-markov-kernel]], and [[def-bayes-and-minimax-risk]]: risk is the kernel expectation of the loss; minimax risk takes the infimum over randomized procedures of their maximum risk.

## Proof

1.1 The finite parameter set defines a measurable experiment by [F7]. The target gap is $\Delta=\theta_1-\theta_0=\sigma/(2\sqrt n)$. By [F2] and [F3], $D(P_{\theta_1}\|P_{\theta_0}) =n\frac{\Delta^2}{2\sigma^2}=\frac18.$ Pinsker [F4] therefore gives $\|P_{\theta_0}-P_{\theta_1}\|_{\rm TV}\le\sqrt{(1/8)/2}=1/4$. [F1, F2, F3, F4, F7, given, algebra]

2.1 Apply [F5] with this gap and total-variation bound: $\inf_K\max_{j=0,1}R_{\theta_j}(K) \ge\frac{\Delta^2}{8}\left(1-\frac14\right) =\frac{\sigma^2}{4n}\cdot\frac{3}{32} =\frac{3\sigma^2}{128n}.$ This is the claimed minimax risk bound under [F6]. [F5, F6, step 1.1, algebra] ∎
