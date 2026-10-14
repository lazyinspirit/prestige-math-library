---
id: ex-gaussian-hypercube-assouad-lower-bound
kind: example
title: "A dense Gaussian mean lower bound by Assouad’s method"
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
  - thm-assouad-hypercube
  - thm-pinsker
  - thm-product-kl-additivity
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
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.5.3, Example 8.5.3 and §8.8.3"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Example

Let $d,n\ge1$, $\sigma>0$, and observe
$Y\in\mathbb R^d$ with independent coordinates
$Y_i\sim N(\theta_i,\sigma^2/n)$. Estimate $\theta$ under squared Euclidean
loss over the dense hypercube $\Theta=\{0,\sigma/\sqrt n\}^d$. Then the
minimax risk satisfies
$$\inf_K\sup_{\theta\in\Theta}R_\theta(K) \ge\frac{\sigma^2d}{16n}.$$

## Facts & Assumptions

**Given:** The finite Gaussian hypercube experiment and an arbitrary randomized estimator $K$ with values in $\mathbb R^d$.

[F1] [[def-standard-normal-and-normal-laws]] and [[def-multivariate-normal-law]]: the law $N_d(\theta,\tau^2I_d)$ has independent scalar normal coordinates with means $\theta_i$ and variance $\tau^2$.

[F6] [[def-statistical-experiment]] and [[def-parameter-measurable-statistical-model-as-markov-kernel]]: the finite parameter cube with its power-set sigma-algebra makes the Gaussian model a measurable probability kernel.

[F2] [[lem-gaussian-location-kl-formula]] and [[thm-product-kl-additivity]]: KL divergence between these product laws is $n\|\theta-\theta'\|_2^2/(2\sigma^2)$.

[F3] [[thm-pinsker]]: under the event-supremum convention, $\mathrm{TV}(P,Q)\le\sqrt{D(P\|Q)/2}$.

[F4] [[thm-assouad-hypercube]]: for coordinate spacing $a$ and largest neighboring-law TV $v$, squared-error minimax risk is at least $a^2d(1-v)/8$.

[F5] [[def-loss-function-and-risk]], [[def-randomized-procedure-as-a-markov-kernel]], [[def-parameter-measurable-statistical-model-as-markov-kernel]], and [[def-bayes-and-minimax-risk]]: the finite model is a probability-kernel experiment, risk is the kernel integral of squared loss, and minimax risk is the infimum of worst-case risk over procedures.

## Proof

1.1 Let $a=\sigma/\sqrt n$, so the parameter set is $\{0,a\}^d$; this finite parameter set makes the model a measurable kernel by [F6]. Neighboring vertices differ in one coordinate. By [F2], their KL divergence is $\frac{na^2}{2\sigma^2}=\frac12.$ Pinsker [F3] therefore bounds every neighboring total-variation distance by $\sqrt{(1/2)/2}=1/2$. [F1, F2, F3, F6, given, algebra]

2.1 Apply [F4] with this spacing and $v\le1/2$: $\inf_K\sup_{\theta\in\{0,a\}^d}R_\theta(K) \ge\frac{a^2d}{8}\left(1-\frac12\right) =\frac{\sigma^2d}{16n}.$ The action and loss are those specified in [F5], which proves the example. [F4, F5, F6, step 1.1, algebra] ∎
