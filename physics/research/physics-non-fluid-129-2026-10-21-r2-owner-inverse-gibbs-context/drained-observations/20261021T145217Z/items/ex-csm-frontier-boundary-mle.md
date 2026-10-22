---
id: ex-csm-frontier-boundary-mle
kind: example
title: All-plus data have no finite Bernoulli-spin field MLE
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-csm-frontier-finite-mle-existence
  - def-csm-frontier-inverse-finite-exponential
dependency_roles:
  thm-csm-frontier-finite-mle-existence: mathematical-premise
  def-csm-frontier-inverse-finite-exponential: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Martin J. Wainwright and Michael I. Jordan, Graphical Models, Exponential Families, and Variational Inference"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf"
      locator: "§6.1, printed pp. 146–147 / PDF pp. 152–153, for finite IID likelihood and interior mean matching; the boundary calculation below is explicit."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§2 and §3.2, printed pp. 1–2 and 8–9 / PDF pp. 0–1 and 8–9: examples where boundary sufficient-statistic values have no finite canonical MLE."
verification:
  precheck: pass
---

## Example

Let $X=\{-1,+1\}$, $w(-1)=w(+1)=1$, and $T(\sigma)=\sigma$. For a finite field $h\in\mathbb R$, the Gibbs probabilities are
$$\pi_h(+1)=\frac{e^h}{e^h+e^{-h}},\qquad \pi_h(-1)=\frac{e^{-h}}{e^h+e^{-h}}.$$
For a sample of $n\ge1$ spins all equal to $+1$, the log likelihood is
$$\ell(h)=n\left(h-\log(e^h+e^{-h})\right).$$
It is strictly increasing at every finite $h$, so the likelihood has no finite maximizer. The empirical statistic mean is $1$, a boundary point of $\operatorname{conv}\{-1,+1\}=[-1,1]$.

## Example references

[[thm-csm-frontier-finite-mle-existence]]

[[def-csm-frontier-inverse-finite-exponential]]

## Facts & Assumptions

**Given:** The finite two-state Gibbs family and the hypothetical realized sample $x_i=+1$ for all $i$.

[A1] The sample is a fixed finite IID-model outcome; it is a mathematical example, not an empirical report.

[F1] [[def-csm-frontier-inverse-finite-exponential]]: the normalized mass at field $h$ is proportional to $e^{hT(\sigma)}$.

[F2] [[thm-csm-frontier-finite-mle-existence]]: in a minimal finite exponential family, a finite IID MLE exists exactly when the empirical statistic mean lies in the relative interior of the convex support, and is unique when it exists.

## Verification

**Given:** The finite family and all-plus sample in the Example.

1.1 The two statistic values are $-1$ and $+1$, so their affine hull is $\mathbb R$, the family is minimal, the convex hull is $[-1,1]$, and the sample mean is $1$, which is not in its interior $(-1,1)$. Hence [F2] already implies there is no finite MLE. [A1, F1, F2, algebra]

2.1 Directly, differentiating the displayed log likelihood gives
$\ell'(h)=n\left(1-\frac{e^h-e^{-h}}{e^h+e^{-h}}\right)
=\frac{2ne^{-h}}{e^h+e^{-h}}>0$
for every finite $h$. Thus each finite $h$ admits a larger likelihood at a slightly greater field, and no finite $h$ maximizes it. [A1, F1, step 1.1, algebra] ∎
