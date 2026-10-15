---
id: ex-gaussian-monte-carlo-integrand
title: "Gaussian integrand: exact Monte Carlo moments and asymptotic error"
kind: example
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-iid-monte-carlo-estimators
  - def-axiom-of-choice
  - lem-normal-location-scale-mean-and-variance
  - thm-iid-monte-carlo-mean-moments
  - thm-iid-monte-carlo-sample-variance-consistency
  - thm-iid-monte-carlo-central-limit
justified_by: []
proof_strategy: direct
axiom_use: "AC is required by the normal-law interface and the local Monte Carlo CLT, and is stated in the example."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume AC and let $X$ have law $N(\mu,\sigma^2)$ with $\sigma>0$. Use the identity integrand $g(x)=x$, whose target is $\mathbb E[g(X)]=\mu$, and take IID outputs $(Y_i)_{i\ge1}$ with this law. Then $\mathbb E[\bar Y_n]=\mu$ and $\operatorname{Var}(\bar Y_n)=\sigma^2/n$; the estimated standard error is relatively consistent, and $\sqrt n(\bar Y_n-\mu)\Rightarrow N(0,\sigma^2)$.

## Facts & Assumptions

**Given:** AC, $\sigma>0$, and a real IID sequence $(Y_i)_{i\ge1}$ with common law $N(\mu,\sigma^2)$.

[A1] [[def-axiom-of-choice]]: AC is the axiom that every family of nonempty sets has a choice function.

[F1] [[lem-normal-location-scale-mean-and-variance]]: Under AC, a real random variable with law $N(m,\sigma^2)$ for $\sigma\ge0$ has mean $m$ and variance $\sigma^2$.

[F2] [[thm-iid-monte-carlo-mean-moments]]: For integrable IID outputs, $\mathbb E[\bar Y_n]=\mu$; with a finite second moment, $\operatorname{Var}(\bar Y_n)=\sigma^2/n$.

[F3] [[thm-iid-monte-carlo-sample-variance-consistency]]: With finite second moment, $s_n^2\to\sigma^2$ almost surely, and for $\sigma^2>0$, $\widehat{se}_n/(\sigma/\sqrt n)\to1$ almost surely.

[F4] [[thm-iid-monte-carlo-central-limit]]: Under AC and $0<\sigma^2<\infty$, $\sqrt n(\bar Y_n-\mu)\Rightarrow N(0,\sigma^2)$.

[F5] [[def-iid-monte-carlo-estimators]]: $\widehat{se}_n=s_n/\sqrt n$ for $n\ge2$ under the finite-second-moment contract.

## Verification

1.1 By [F1], each output has mean $\mu$ and variance $\sigma^2$, so its first absolute moment and second moment are finite. Applying [F2] gives $\mathbb E[\bar Y_n]=\mu$ and $\operatorname{Var}(\bar Y_n)=\sigma^2/n$. [A1, F1, F2, given]

1.2 The finite-second-moment hypotheses of [F3] hold by [A1] and [F1]. Thus $s_n^2\to\sigma^2$ almost surely and, using the plug-in definition [F5], $\widehat{se}_n/(\sigma/\sqrt n)\to1$. [A1, F1, F3, F5, given]

2.1 The sequence has positive finite variance and AC is assumed, so [F4] applies and gives $\sqrt n(\bar Y_n-\mu)\Rightarrow N(0,\sigma^2)$. [A1, F1, F4, given] ∎
