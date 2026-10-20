---
id: thm-contrastive-representation-transfer-with-class-collisions
kind: theorem
title: "Contrastive transfer bound with class collisions"
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
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Theorem 4.1, Lemmas 4.3–4.4 and proof route"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Nikunj Saunshi et al., Supplementary Appendices A.1 and A.3, complete collision and generalization arguments"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
---

## Statement

Assume the Axiom of Choice and the one-negative latent-class model with $\tau<1$. Fix either source hinge or logistic loss and a sample size $M\ge1$. Suppose all risks and suprema in the uniform-generalization statement are measurable and that a measurable exact empirical minimizer $\widehat f\in\mathcal F$ exists, meaning $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(g)$ for every $g\in\mathcal F$ almost surely. For every $0<\delta<1$, with probability at least $1-\delta$ over the IID triplet sample,

$$\forall f\in\mathcal F,\qquad L^\mu_{\rm sup}(\widehat f)\le\frac{L_{\rm un}(f)-\tau+2\Gamma_M(S,\delta)}{1-\tau},$$

where

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell,R}\sqrt{\frac{\ln(4/\delta)}{2M}}$$

is the uniform-deviation quantity for the same sample and loss. This is a guarantee for the average binary task with a uniform label and the class-mean linear classifier.

## Statement references

[[def-latent-class-contrastive-learning]]: defines the one-negative objective, the class-mean classifier risk and the collision probability.

[[lem-contrastive-empirical-minimizer-excess]]: bounds the population contrastive risk of the empirical minimizer against every comparator.

[[lem-mean-classifier-loss-from-contrastive-loss]]: compares mean-classifier risk with distinct-class contrastive risk for either source loss.

[[lem-contrastive-class-collision-deviation]]: decomposes total contrastive risk and lower-bounds the collision-conditioned loss by one.

[Saunshi et al., Theorem 4.1, Lemmas 4.3–4.4 and proof route](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[Saunshi et al., Supplementary Appendices A.1 and A.3](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf).

## Facts & Assumptions

**Given:** AC, the one-negative model with $\tau<1$, either source loss, the measurable exact empirical minimizer, $M\ge1$, and $0<\delta<1$.

[A1] AC enters through the uniform-generalization theorem's bounded-differences step and is carried by the empirical-minimizer excess lemma. [[def-axiom-of-choice]], [[lem-contrastive-empirical-minimizer-excess]]

[F1] With probability at least $1-\delta$, simultaneously for every comparator $f\in\mathcal F$, $L_{\rm un}(\widehat f)\le L_{\rm un}(f)+2\Gamma_M(S,\delta)$. [[lem-contrastive-empirical-minimizer-excess]]

[F2] For every bounded representation $g$ and either source loss, $L^\mu_{\rm sup}(g)\le L^\ne_{\rm un}(g)$. [[lem-mean-classifier-loss-from-contrastive-loss]]

[F3] The collision decomposition is $L_{\rm un}(g)=\tau L^=_{\rm un}(g)+(1-\tau)L^\ne_{\rm un}(g)$ and $L^=_{\rm un}(g)\ge1$ when $\tau>0$; when $\tau=0$, $L_{\rm un}(g)=L^\ne_{\rm un}(g)$. [[lem-contrastive-class-collision-deviation]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 On the event in [F1], the empirical-minimizer excess bound holds simultaneously for all comparators $f$. [A1, F1, given]

1.2 By [F3], if $\tau>0$ then $L^\ne_{\rm un}(\widehat f)=\frac{L_{\rm un}(\widehat f)-\tau L^=_{\rm un}(\widehat f)}{1-\tau}\le\frac{L_{\rm un}(\widehat f)-\tau}{1-\tau}$. If $\tau=0$, the same inequality is equality because $L_{\rm un}=L^\ne_{\rm un}$. Since $1-\tau>0$, these divisions are valid. [F3, given, algebra]

2.1 Apply [F2] to $\widehat f$ and then use step 1.2 and [F1]. For every comparator on the event in step 1.1, $L^\mu_{\rm sup}(\widehat f)\le L^\ne_{\rm un}(\widehat f)\le\frac{L_{\rm un}(\widehat f)-\tau}{1-\tau}\le\frac{L_{\rm un}(f)-\tau+2\Gamma_M(S,\delta)}{1-\tau}$. The event has probability at least $1-\delta$ by [F1], proving the claim. [F1, F2, step 1.1, step 1.2, given, algebra] ∎
