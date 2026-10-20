---
id: ex-relu-and-sigmoid-activations-meet-the-universality-conditions
kind: example
title: "ReLU and logistic sigmoid activation examples"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - thm-single-hidden-layer-universal-approximation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, Theorem 1"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning, §6.4.1"
      url: "https://www.deeplearningbook.org/contents/mlp.html"
---

## Example

Assume Countable Choice. The rectified linear activation $\sigma(t)=\max\{t,0\}$ and the logistic sigmoid $\tau(t)=1/(1+e^{-t})$ both satisfy the pointwise locally bounded activation hypotheses and are not polynomials almost everywhere. Under the corresponding single-hidden-layer universality theorem, each gives uniform approximation of continuous functions on every compact subset of $\mathbb R^d$, with no width bound asserted.

## Example references

[Leshno et al., Theorem 1: nonpolynomial activation universality](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Goodfellow et al., Deep Learning, §6.4.1: common activation examples and scope](https://www.deeplearningbook.org/contents/mlp.html)

## Facts & Assumptions

**Given:** $\sigma(t)=\max\{t,0\}$ and $\tau(t)=1/(1+e^{-t})$.

[F1] The pointwise locally bounded subclass consists of activations in $\mathcal M$ that are bounded at every point on each compact interval ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[F2] The universality theorem supplies pointwise compact-uniform density for pointwise locally bounded, nonpolynomial-almost-everywhere activations ([[thm-single-hidden-layer-universal-approximation]]).

[A1] Countable Choice is the explicit premise of the cited universality theorem ([[def-countable-choice]]).

## Verification

1.1 ReLU and logistic sigmoid are continuous, hence their discontinuity sets are empty; ReLU is bounded on each compact interval and sigmoid is globally bounded between zero and one. Thus both lie in the pointwise locally bounded activation class. [given, F1, algebra]

2.1 Neither is a polynomial almost everywhere. If a continuous function equals a polynomial almost everywhere on $\mathbb R$, their difference is continuous and must vanish everywhere, since any nonzero value would persist on an open interval of positive measure. ReLU vanishes on $(-\infty,0)$ but is positive on $(0,\infty)$; the sigmoid is bounded and nonconstant. These properties exclude a polynomial identity for each. [step 1.1, algebra]

3.1 Applying [F2] separately to each activation proves the stated compact-uniform approximation property. The theorem is an existence statement only and supplies no uniform width bound. [step 2.1, F2, A1] ∎

