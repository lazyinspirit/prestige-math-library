---
id: ex-improper-flat-prior-arbitrary-evidence-scale
kind: example
title: "An improper flat-prior scale makes a formal evidence arbitrary"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-marginal-likelihood-and-bayes-factor
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - def-axiom-of-choice
  - lem-normal-location-scale-density
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the normal-density supplier and implies Countable Choice for the Lebesgue sigma-finiteness and interval-volume facts. No additional choice is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §7.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 7, §7.4, printed pp. 183–184: Bayes factors require proper marginal densities, and improper prior densities leave model-comparison ratios dependent on arbitrary normalization."
---

## Example

Consider one observation $Y$ from the normal location model
$Y\mid\theta\sim N(\theta,\sigma^2)$ with known $\sigma^2>0$. For any
$c>0$, the measure $\Pi_c(d\theta)=c\,\lambda(d\theta)$ is an improper flat
prior, where $\lambda$ is Lebesgue measure
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).
The likelihood integral against it is finite but equals $c$. If two competing
models use independent arbitrary constants $c_1$ and $c_2$, their formal
evidence ratio is $c_2/c_1$, so it has no value determined by the models.

## Facts & Assumptions

**Given:** A normal location likelihood with $\sigma^2>0$, an observation
$y\in\mathbb R$, and the sigma-finite prior measure $c\,d\theta$ for $c>0$.

[A1] AC is assumed for the library normal-law convention.
[[def-axiom-of-choice]]

[F1] A proper-model evidence in this pair is defined by integrating a
specified likelihood density against a probability prior.
[[def-marginal-likelihood-and-bayes-factor]]

[F2] The BCS-02 fiberwise normalizer is the likelihood integral against the
supplied sigma-finite prior measure; an improper prior has infinite total
mass. [[def-posterior-evidence-normalizer-and-fiberwise-update]]

[F3] AC implies Countable Choice.
[[thm-choice-implies-dependent-implies-countable-choice]]

[F4] Under Countable Choice, Lebesgue measure is sigma-finite and finite on
bounded sets. [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F5] Lebesgue measure of a real interval is its length, including a degenerate
interval of measure zero. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F6] For $\sigma>0$, the normal location likelihood density is
$(2\pi\sigma^2)^{-1/2}\exp(-(y-\theta)^2/(2\sigma^2))$.
[[lem-normal-location-scale-density]]

## Verification

**Given:** The model and prior measure in the Example.

1.1 By [A1, F3, F4], $\lambda$ is sigma-finite, so $\Pi_c=c\lambda$ is sigma-finite. By [F5], $\Pi_c([-n,n])=2cn$ for every positive integer $n$, hence $\Pi_c(\mathbb R)=+\infty$ and it is improper in the sense of [F2]. By [F6], its formal likelihood integral is $\int_{\mathbb R}\frac{c}{\sqrt{2\pi\sigma^2}}\exp\!\left(-\frac{(y-\theta)^2}{2\sigma^2}\right)d\theta$. The substitution $z=(y-\theta)/\sigma$ has absolute Jacobian $\sigma$, so this equals $c\int_{\mathbb R}(2\pi)^{-1/2}e^{-z^2/2}\,dz=c$. This value is positive and finite for every fixed $c>0$, but $\Pi_c(\mathbb R)=+\infty$, so it is not an evidence under [F1]. [A1, F1, F2, F3, F4, F5, F6, given, algebra]

2.1 With model-specific constants $c_1,c_2>0$, the formal ratio is $c_2/c_1$ by step 1.1. Rescaling either improper prior changes this ratio arbitrarily while leaving its unnormalized density proportional to Lebesgue measure; hence no generic Bayes factor is defined by these improper priors. [F1, F2, step 1.1, algebra] ∎
