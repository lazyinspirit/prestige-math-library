---
id: thm-positive-temperature-scaling-preserves-argmax
kind: theorem
title: "Positive temperature scaling preserves the maximizing class"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-validation-temperature-scaling
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Chuan Guo, Geoff Pleiss, Yu Sun, and Kilian Q. Weinberger, On Calibration of Modern Neural Networks, ICML 2017, Section 4.2"
      url: "https://proceedings.mlr.press/v70/guo17a/guo17a.pdf"
---

## Statement

Let $K\ge2$, let $z\in\mathbb R^K$, and let $T>0$. Define
$$p_j(T)=\frac{\exp(z_j/T)}{\sum_{\ell=1}^K\exp(z_\ell/T)}\quad (j=1,\ldots,K).$$
Then $p(T)$ lies in the relative interior of $\Delta_K$ in the affine hyperplane
$\{p\in\mathbb R^K:\sum_jp_j=1\}$ and
$\arg\max_{j\in\{1,\ldots,K\}}p_j(T)
=\arg\max_{j\in\{1,\ldots,K\}}z_j$.
For the finite validation inputs and candidate temperatures specified in the
validation temperature-scaling algorithm, every validation loss is finite and
the stated smallest-minimizer rule returns a unique candidate.

## Statement references

[[alg-validation-temperature-scaling]]: defines the finite candidate set, validation NLL, and tie-breaking rule whose well-definedness is also proved here.

[[def-real-exponential-function-and-e]]: defines the real exponential used in the softmax formula.

[[cor-exponential-reciprocal-and-positivity]]: gives positivity of the exponential.

[[thm-exponential-is-strictly-increasing]]: supplies strict monotonicity for pairwise logit comparisons.

[[def-natural-logarithm]]: defines the logarithm on positive reals, the domain of the validation losses.

[Guo et al., full paper, Section 4.2](https://proceedings.mlr.press/v70/guo17a/guo17a.pdf): states that the scalar temperature leaves the maximizing class unchanged; the argument here verifies the claim under the stated positive-temperature hypotheses.

## Facts & Assumptions

**Given:** $K\ge2$, a finite logit vector $z\in\mathbb R^K$, a positive temperature $T$, and, for the algorithmic consequence, a nonempty finite validation sample and finite nonempty candidate temperature set.

[F1] The temperature-scaling algorithm uses the displayed softmax probabilities, restricts candidate temperatures to a finite nonempty subset of $(0,\infty)$, and chooses the smallest validation-NLL minimizer. [[alg-validation-temperature-scaling]]

[F2] The real exponential is finite-valued and strictly positive on $\mathbb R$. [[def-real-exponential-function-and-e]] [[cor-exponential-reciprocal-and-positivity]]

[F3] The real exponential is strictly increasing. [[thm-exponential-is-strictly-increasing]]

[F4] The natural logarithm is defined on $(0,\infty)$. [[def-natural-logarithm]]

## Proof

1.1 For every $j$, $w_j=\exp(z_j/T)$ is a finite positive real by [F2]. Hence $S=\sum_{\ell=1}^K w_\ell>0$, each $p_j(T)=w_j/S$ is positive, and $\sum_jp_j(T)=1$. Put $\varepsilon=\frac12\min_jp_j(T)>0$. If $u$ lies in the hyperplane $\sum_ju_j=1$ and $\|u-p(T)\|_2<\varepsilon$, then every $u_j>0$; since the coordinates sum to one, $u\in\Delta_K$. Thus $p(T)$ is in the relative interior of $\Delta_K$. [F1, F2, given, algebra]

2.1 For each validation example and class $j$, step 1.1 gives $p_T(j\mid x_i)>0$, so its logarithm is finite by [F4]. Thus each candidate loss is finite. The finite nonempty set $\mathcal T$ has a nonempty finite set of minimizers, which has a unique smallest element; the algorithm therefore returns a unique $T^*$. [F1, F4, step 1.1, algebra]

3.1 For any classes $j,\ell$, positivity of $T$ preserves the sign of $z_j-z_\ell$. By [F3], $\exp(z_j/T)$ and $\exp(z_\ell/T)$ have the same strict order as $z_j$ and $z_\ell$; division by their common positive denominator $S$ from step 1.1 preserves that order and preserves ties. Every pairwise comparison is therefore identical for $p(T)$ and $z$, proving equality of their maximizing index sets. [F1, F2, F3, given, step 1.1, algebra] ∎
