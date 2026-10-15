---
id: thm-exponential-family-conjugate-update
kind: theorem
title: "Conjugate update for an exponential-family likelihood"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-exponential-family
  - def-exponential-conjugate-prior-family
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used by the algebraic update or the supplied dominated Bayes formula."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, 2020"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Statement

Let $\eta:\Theta\to\Omega$ be measurable, let $n\ge1$, and let $\mu$ be a
sigma-finite data measure. Suppose, given $\theta$, the observations
$Y_1,\ldots,Y_n$ are IID with density
$h(y)\exp\{\eta(\theta)^TT(y)-A(\eta(\theta))\}$ relative to $\mu$. On the
product data space with measure $\mu^{\otimes n}$, assume the resulting joint
density is specified and jointly measurable and that the sampling family is a
parameter-measurable probability kernel. Let the prior be $\Pi_{\chi,\kappa}$ from
[[def-exponential-conjugate-prior-family]] with
$0<Z(\chi,\kappa)<\infty$. For an observed $y_{1:n}$, put
$s=\sum_iT(y_i)$. If $h(y_i)>0$ for each $i$ and
$0<Z(\chi+s,\kappa+n)<\infty$, then the evidence is
$$m(y_{1:n})=\left(\prod_{i=1}^nh(y_i)\right) \frac{Z(\chi+s,\kappa+n)}{Z(\chi,\kappa)}\in(0,\infty),$$
and the posterior density relative to the parameter measure is
$$\frac{\exp\{\eta(\theta)^T(\chi+s)-(\kappa+n)A(\eta(\theta))\}} {Z(\chi+s,\kappa+n)}.$$
Thus the update adds $\sum_iT(y_i)$ to $\chi$ and $n$ to $\kappa$ only on
finite-positive evidence fibers.

## Facts & Assumptions

**Given:** The measurable exponential-family sampling model, proper conjugate
prior, finite IID sample, and observed data satisfying the stated normalizer
conditions. The joint density on the product data space is the IID product
$$\prod_{i=1}^n h(y_i)\exp\{\eta(\theta)^TT(y_i)-A(\eta(\theta))\}.$$

[F1] The exponential-family sampling density has kernel $h(y)\exp\{\eta^TT(y)-A(\eta)\}$. [[def-exponential-family]].

[F2] The conjugate-form prior density is proportional to $\exp\{\eta(\theta)^T\chi-\kappa A(\eta(\theta))\}$, normalized only for finite positive $Z(\chi,\kappa)$. [[def-exponential-conjugate-prior-family]].

[F3] The specified proper prior and parameter-measurable sampling kernel constitute a Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]].

[F4] The evidence is the prior integral of the specified nonnegative likelihood density, and the quotient update is defined only for finite positive evidence. [[def-posterior-evidence-normalizer-and-fiberwise-update]].

[F5] A likelihood-weighted prior measure admits probability normalization exactly when its evidence is finite and positive. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

[F6] For a proper prior and a jointly measurable dominated sampling density, the normalized likelihood quotient on positive finite fibers is a posterior conditional kernel. [[thm-bayes-formula-for-dominated-kernels]].

## Proof

**Given:** The assumptions in the Statement and the data $y_{1:n}$.

1.1 Multiplying the stated IID densities from [F1] gives the specified joint likelihood $L_\theta(y_{1:n})=\left(\prod_i h(y_i)\right) \exp\{\eta(\theta)^Ts-nA(\eta(\theta))\}.$ The stated joint measurability and kernel hypotheses ensure this is the dominated likelihood to which [F3] and [F6] apply; no separate pointwise Radon–Nikodym representatives are being promoted to a jointly measurable density. [F1, F3, F6, given]

2.1 Multiply this likelihood by the prior density [F2]. The parameter-dependent factor becomes $\exp\{\eta(\theta)^T(\chi+s)-(\kappa+n)A(\eta(\theta))\},$ so integrating it against the parameter measure gives $m(y_{1:n})=\left(\prod_i h(y_i)\right) \frac{Z(\chi+s,\kappa+n)}{Z(\chi,\kappa)}.$ All factors are finite positive by the hypotheses; [F4] defines this evidence, and [F5] confirms that it is exactly the valid normalization regime. [F2, F4, F5, step 1.1, algebra]

3.1 Divide the product of likelihood and prior density by the evidence in step 2.1. The data-only carrier and the prior normalizer cancel, leaving the displayed density with updated parameters $(\chi+s,\kappa+n)$. Since the evidence is finite positive, [F6] identifies this normalized kernel as the posterior on this fiber; no quotient is formed when any stated positivity or finiteness condition fails. [F2, F4, F6, step 2.1, algebra] ∎