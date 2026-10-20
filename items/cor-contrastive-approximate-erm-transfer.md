---
id: cor-contrastive-approximate-erm-transfer
kind: corollary
title: "Contrastive transfer for an approximate empirical minimizer"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-latent-class-contrastive-learning
  - lem-contrastive-class-collision-deviation
  - lem-contrastive-empirical-minimizer-excess
  - lem-mean-classifier-loss-from-contrastive-loss
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Theorem 4.1, Lemmas 4.3–4.4 and proof route"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 empirical-risk comparison"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Statement

Assume the Axiom of Choice and the one-negative latent-class model with $\tau<1$. Fix either source hinge or logistic loss, a sample size $M\ge1$, and a tolerance $\eta\ge0$. Suppose the risks and suprema in the uniform-generalization statement are measurable and let $\widehat f\in\mathcal F$ be a measurable selector satisfying $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(f)+\eta$ for every $f\in\mathcal F$ almost surely. For every $0<\delta<1$, with probability at least $1-\delta$,

$$\forall f\in\mathcal F,\qquad L^\mu_{\rm sup}(\widehat f)\le\frac{L_{\rm un}(f)-\tau+2\Gamma_M(S,\delta)+\eta}{1-\tau},$$

where

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell,R}\sqrt{\frac{\ln(4/\delta)}{2M}}$$

is the uniform-deviation quantity for the same sample and loss. The result assumes such a measurable approximate selector and does not assert its existence.

## Statement references

[[def-latent-class-contrastive-learning]]: defines the one-negative risk, empirical objective, class-mean risk and collision probability.

[[lem-contrastive-empirical-minimizer-excess]]: supplies the approximate empirical-to-population contrastive-risk bound.

[[lem-mean-classifier-loss-from-contrastive-loss]]: compares mean-classifier risk with distinct-class contrastive risk.

[[lem-contrastive-class-collision-deviation]]: supplies the collision decomposition and collision-loss lower bound.

[Saunshi et al., Theorem 4.1, Lemmas 4.3–4.4 and proof route](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

## Facts & Assumptions

**Given:** AC, the one-negative model with $\tau<1$, either source loss, an approximate selector with tolerance $\eta\ge0$, $M\ge1$, and $0<\delta<1$.

[A1] AC enters through the bounded-differences component of the uniform-generalization theorem. [[def-axiom-of-choice]], [[lem-contrastive-empirical-minimizer-excess]]

[F1] With probability at least $1-\delta$, simultaneously for every comparator $f\in\mathcal F$, $L_{\rm un}(\widehat f)\le L_{\rm un}(f)+2\Gamma_M(S,\delta)+\eta$. [[lem-contrastive-empirical-minimizer-excess]]

[F2] For every bounded representation $g$ and either source loss, $L^\mu_{\rm sup}(g)\le L^\ne_{\rm un}(g)$. [[lem-mean-classifier-loss-from-contrastive-loss]]

[F3] The collision decomposition and lower bound give $L^\ne_{\rm un}(g)\le(L_{\rm un}(g)-\tau)/(1-\tau)$ for all $0\le\tau<1$, with the zero-collision case interpreted as equality. [[lem-contrastive-class-collision-deviation]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 On the simultaneous event in [F1], $L_{\rm un}(\widehat f)\le L_{\rm un}(f)+2\Gamma_M(S,\delta)+\eta$ for every comparator $f$. [A1, F1, given]

1.2 The collision decomposition [F3] applies to $\widehat f$ because $\tau<1$, and yields $L^\ne_{\rm un}(\widehat f)\le(L_{\rm un}(\widehat f)-\tau)/(1-\tau)$. [F3, given, algebra]

2.1 The Jensen comparison [F2], followed by steps 1.1 and 1.2, gives $L^\mu_{\rm sup}(\widehat f)\le L^\ne_{\rm un}(\widehat f)\le\frac{L_{\rm un}(f)-\tau+2\Gamma_M(S,\delta)+\eta}{1-\tau}$ simultaneously for every comparator. The event has probability at least $1-\delta$ by [F1]. [F1, F2, step 1.1, step 1.2, given, algebra] ∎
