---
id: lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
kind: lemma
title: "A finite-normalizer loss update is a probability measure"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-generalized-bayes-loss-update-and-temperature
  - def-probability-measure
  - def-measure-with-density
  - thm-nonnegative-weighted-sums-of-measures
  - thm-integration-against-a-density
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "J. Knoblauch, J. Jewson, and T. Damoulas, An Optimization-centric View on Bayes’ Rule: Reviewing and Generalizing Variational Inference, JMLR 23(132), 2022"
      url: "https://www.jmlr.org/papers/volume23/19-1047/19-1047.pdf"
---
## Statement

Let $G_{w,\pi,x}$ be the update of
[[def-generalized-bayes-loss-update-and-temperature]], with prior probability
$\pi$ and normalizer $0<Z_w(\pi,x)<\infty$. Then $G_{w,\pi,x}$ is a
probability measure on $(\Theta,\mathcal T)$.

## Facts & Assumptions

**Given:** A prior probability $\pi$, a fixed observation $x$, a temperature
$w>0$, and $0<Z_w(\pi,x)<\infty$.

[F1] [[def-generalized-bayes-loss-update-and-temperature]]: for each measurable
$A\subseteq\Theta$,
$$G_{w,\pi,x}(A)=Z_w(\pi,x)^{-1}\int_A e^{-w\ell_x(\theta)}\,\pi(d\theta).$$

[F2] [[def-measure-with-density]]: if $f\ge0$ is measurable, then
$A\mapsto\int_A f\,d\pi$ is a measure.

[F3] [[thm-nonnegative-weighted-sums-of-measures]]: a nonnegative scalar
multiple of a measure is a measure.

[F4] [[thm-integration-against-a-density]]: for $f,g\ge0$ measurable,
$$\int g\,d(f\,d\pi)=\int gf\,d\pi.$$

[F5] [[def-probability-measure]]: a probability measure is a measure whose
total mass is one.

## Proof

1.1 Put $f(\theta)=e^{-w\ell_x(\theta)}$ and $\mu(A)=\int_A f\,d\pi$. By [F1]–[F2], $\mu$ is the measure with density $f$ relative to $\pi$. [F1, F2, given]

2.1 Since $Z_w(\pi,x)>0$, [F1] gives $G_{w,\pi,x}=Z_w(\pi,x)^{-1}\mu$, which is a measure by [F3]. Also [F4] gives $$\mu(\Theta)=\int_\Theta 1\,d(f\,d\pi)=\int_\Theta f\,d\pi=Z_w(\pi,x),$$ so $G_{w,\pi,x}(\Theta)=1$. [F1, F3, F4, step 1.1, given]

3.1 By [F5], the measure in step 2.1 with total mass one is a probability measure. [F5, step 2.1] ∎
