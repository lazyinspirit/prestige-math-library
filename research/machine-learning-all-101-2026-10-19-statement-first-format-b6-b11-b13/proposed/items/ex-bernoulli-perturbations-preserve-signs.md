---
id: ex-bernoulli-perturbations-preserve-signs
kind: example
title: Thresholding removes Bernoulli sign perturbations
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk-examples
dependency_level: 3
deps:
  - def-binary-feature-bernoulli-model
  - def-adversarial-threat-set-and-robust-risk
  - alg-coordinate-threshold-preprocessing
  - thm-architecture-dependent-robustness-binary-feature-model
justified_by: []
axiom_use: "Choice-free: the perturbation argument is coordinatewise and the model has finite support."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Theorem 10 and the Bernoulli-model discussion, arXiv:1804.11285v2, PDF pp. 7, 31–32"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Zico Kolter and Aleksander Madry, Adversarial Robustness: Theory and Practice, NeurIPS 2018 tutorial notes, Chapter 2"
      url: "https://adversarial-ml-tutorial.org/linear_models/"
---

## Example

Let $d\ge1$, $\theta\in\{-1,+1\}^d$, $0<\tau\le1/2$, $0\le\epsilon<1$, and let $(X,Y)\sim P_{\theta,\tau}$ be the binary-feature Bernoulli model. Let $T(x)_j=+1$ for $x_j\ge0$ and $T(x)_j=-1$ for $x_j<0$. For every classifier $g:\{-1,+1\}^d\to\{-1,+1\}$, the classifier $g\circ T$ has exactly the same $\ell_\infty$ robust risk at radius $\epsilon$ as $g$ has natural risk:
$$R^{\mathrm{rob}}_{P_{\theta,\tau},\Delta_\epsilon}(g\circ T)=\mathbb P(g(X)\ne Y).$$
For $w\in\mathbb R^d$, define $f_w(x)=+1$ when $\langle w,x\rangle\ge0$ and $f_w(x)=-1$ otherwise. In particular, if $0<\beta<1$ and $\tau\ge(\log(1/\beta)/(2d))^{1/4}$, then the one-sample classifier $f_{Y_0X_0}\circ T$ has robust risk at most $\beta$ with training-sample probability at least $1-e^{-\tau^2d/2}$.

## Example references

[Schmidt et al., Theorem 10 and Corollary 28, main text and Appendix B.1, PDF pp. 7, 31–32](https://arxiv.org/pdf/1804.11285v2).

[Kolter–Madry, Chapter 2, thresholding and linear models](https://adversarial-ml-tutorial.org/linear_models/).

## Facts & Assumptions

**Given:** The hypotheses in the Example.

[F1] The Bernoulli model is supported on $\{-1,+1\}^d\times\{-1,+1\}$. [[def-binary-feature-bernoulli-model]].

[F2] $T$ maps a nonnegative coordinate to $+1$ and a negative coordinate to $-1$. [[alg-coordinate-threshold-preprocessing]].

[F3] Robust zero-one loss is one exactly when some admissible perturbation changes the label; robust risk is the expectation of this loss. [[def-adversarial-threat-set-and-robust-risk]].

[F4] Under the stated $\tau,\beta$ condition, the one-sample thresholded Bernoulli classifier has robust risk at most $\beta$ with the stated training-sample probability. [[thm-architecture-dependent-robustness-binary-feature-model]].

## Proof

1.1 Fix $x\in\{-1,+1\}^d$ and any $\delta$ with $\|\delta\|_\infty\le\epsilon<1$. If $x_j=+1$, then $x_j+\delta_j\ge1-\epsilon>0$, so [F2] gives $T(x+\delta)_j=+1=x_j$. If $x_j=-1$, then $x_j+\delta_j\le-1+\epsilon<0$, so $T(x+\delta)_j=-1=x_j$. Hence $T(x+\delta)=x$ for every admissible perturbation. [given, F1, F2, algebra]

2.1 For each support point $(x,y)$, every allowed perturbation therefore makes $g(T(x+\delta))=g(x)$. The robust zero-one loss of $g\circ T$ equals $\mathbf1\{g(x)\ne y\}$ pointwise. Taking expectation under $P_{\theta,\tau}$ proves the displayed equality. [step 1.1, F3]

3.1 Under the final $\tau,\beta$ condition, [F4] gives the one-sample risk bound for $f_{Y_0X_0}\circ T$ with the stated probability. The pointwise identity in step 2.1 explains why every radius $\epsilon<1$ has the same risk. [step 2.1, F4] ∎

## References

[[def-binary-feature-bernoulli-model]]: the support is exactly the sign hypercube with a binary label.

[[thm-architecture-dependent-robustness-binary-feature-model]]: supplies the one-sample high-probability error guarantee.
