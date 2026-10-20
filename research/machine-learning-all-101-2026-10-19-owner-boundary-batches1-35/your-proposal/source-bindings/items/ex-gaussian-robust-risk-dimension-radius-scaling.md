---
id: ex-gaussian-robust-risk-dimension-radius-scaling
kind: example
title: Gaussian robust risk across dimensions and radii
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk-examples
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-two-class-spherical-gaussian-mixture-model
  - def-adversarial-threat-set-and-robust-risk
  - thm-robust-sample-upper-bound-gaussian-mixture
  - thm-robust-sample-lower-bound-gaussian-mixture
justified_by: []
axiom_use: "AC is inherited from the Gaussian upper- and lower-bound suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, Corollary 22 and Corollary 23, arXiv:1804.11285v2, PDF pp. 26, 30"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Example

Assume AC. For an integer $d\ge2$, set $\sigma=d^{1/4}/32$ and $\epsilon=1/4$. For the fixed-parameter Gaussian model with $\|\theta\|_2=\sqrt d$, the class-weighted sample-mean classifier has $\ell_\infty$ robust risk at most $1/100$ with training-sample probability at least $1-2e^{-d/(8(\sigma^2+1))}$ whenever the integer sample size satisfies $n\ge4\sqrt d$. In the separate Gaussian-prior experiment $\Theta\sim N_d(0,I_d)$, every learning algorithm has expected $\ell_\infty$ robust risk at least $(1-1/d)/2$ whenever $n\le\sqrt d/(131072\log d)$. The first assertion concerns a fixed normalized parameter and an upper bound for one classifier; the second averages over a Gaussian prior and lower-bounds every learner.

## Example references

[Schmidt et al., Corollary 22, Appendix A.1, PDF p. 26](https://arxiv.org/pdf/1804.11285v2).

[Schmidt et al., Corollary 23, Appendix A.2, PDF p. 30](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** The Example's Gaussian parameter, radius, and dimension.

[A1] Assume AC as required by both Gaussian robust-risk bounds. [[def-axiom-of-choice]].

[F1] If $\sigma\le d^{1/4}/32$, $d\ge1$, and $1/(4d^{1/4})\le\epsilon\le1/4$, then $n\ge64\epsilon^2\sqrt d$ suffices for the class-weighted mean classifier to have robust risk at most $1/100$ with failure probability at most $2e^{-d/(8(\sigma^2+1))}$. [[thm-robust-sample-upper-bound-gaussian-mixture]].

[F2] If $d\ge2$ and $n\le\epsilon^2\sigma^2/(8\log d)$, every learner under prior $\Theta\sim N_d(0,I_d)$ has expected robust risk at least $(1-1/d)/2$. [[thm-robust-sample-lower-bound-gaussian-mixture]].

## Proof

1.1 The chosen variance satisfies $\sigma=d^{1/4}/32$, and $d\ge2$ makes $1/(4d^{1/4})\le1/4=\epsilon$. The upper-bound condition becomes $n\ge64(1/4)^2\sqrt d=4\sqrt d$. Apply [F1] to obtain the first assertion. [given, A1, F1, algebra]

2.1 For the lower bound, $\epsilon^2\sigma^2/(8\log d)=(1/16)(\sqrt d/1024)/(8\log d)=\sqrt d/(131072\log d)$. Thus the stated lower sample-size condition is exactly the premise of [F2], which gives the second assertion. [given, A1, F2, algebra] ∎

## References

[[thm-robust-sample-upper-bound-gaussian-mixture]]: supplies the exact one-percent sufficient sample size.

[[thm-robust-sample-lower-bound-gaussian-mixture]]: supplies the learner-independent Gaussian-prior necessary sample size.
