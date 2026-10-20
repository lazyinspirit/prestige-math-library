---
id: thm-contrastive-representation-transfer-under-within-class-deviation
kind: theorem
title: "Contrastive transfer with a within-class covariance penalty"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-latent-class-contrastive-learning
  - lem-contrastive-class-collision-deviation
  - thm-contrastive-representation-transfer-with-class-collisions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Theorem 4.5, Lemma 4.4 and proof route"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Nikunj Saunshi et al., Supplementary Appendices A.1 and A.3"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
---

## Statement

Assume the Axiom of Choice and the one-negative latent-class model with $\tau<1$. Fix either source hinge or logistic loss, $M\ge1$, and a measurable exact empirical minimizer $\widehat f\in\mathcal F$ satisfying $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(g)$ for every $g\in\mathcal F$ almost surely, under the measurability hypotheses of the uniform-generalization result. For each comparator $f\in\mathcal F$ and every $0<\delta<1$, with probability at least $1-\delta$ over the IID triplet sample,

$$L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le L^\ne_{\rm un}(f)+\frac{\sqrt2L_0\tau s(f)+2\Gamma_M(S,\delta)}{1-\tau},$$

where $L_{\rm sup}$ is the infimum of the average binary-task risk over all linear classifiers, $s(f)$ is the within-class covariance deviation, and

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell,R}\sqrt{\frac{\ln(4/\delta)}{2M}}$$

is the uniform-deviation quantity for the same sample and loss. The event is simultaneous for all comparators.

## Statement references

[[def-latent-class-contrastive-learning]]: defines the linear-classifier infimum, mean-classifier risk, distinct-class contrastive risk and covariance deviation $s(f)$.

[[lem-contrastive-class-collision-deviation]]: supplies the collision decomposition and $L^=_{\rm un}(f)\le1+\sqrt2L_0s(f)$.

[[thm-contrastive-representation-transfer-with-class-collisions]]: supplies the simultaneous empirical-minimizer transfer bound.

[Saunshi et al., Theorem 4.5, Lemma 4.4 and proof route](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[Saunshi et al., Supplementary Appendices A.1 and A.3](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf).

## Facts & Assumptions

**Given:** AC, the one-negative model with $\tau<1$, either source loss, a measurable exact empirical minimizer, $M\ge1$, and $0<\delta<1$.

[A1] AC enters through the empirical-minimizer transfer theorem's uniform-generalization supplier. [[def-axiom-of-choice]], [[thm-contrastive-representation-transfer-with-class-collisions]]

[F1] The average risk infimum over all linear weights is at most the risk of the particular class-mean weight: $L_{\rm sup}(g)\le L^\mu_{\rm sup}(g)$. [[def-latent-class-contrastive-learning]]

[F2] With probability at least $1-\delta$, simultaneously for every comparator $f$, $L^\mu_{\rm sup}(\widehat f)\le[L_{\rm un}(f)-\tau+2\Gamma_M(S,\delta)]/(1-\tau)$. [[thm-contrastive-representation-transfer-with-class-collisions]]

[F3] For $\tau>0$, $L_{\rm un}(f)=\tau L^=_{\rm un}(f)+(1-\tau)L^\ne_{\rm un}(f)$ and $L^=_{\rm un}(f)\le1+\sqrt2L_0s(f)$. If $\tau=0$, $L_{\rm un}(f)=L^\ne_{\rm un}(f)$ and $s(f)=0$. [[lem-contrastive-class-collision-deviation]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 By the definition of $L_{\rm sup}$ as an infimum over all linear weights, its value for $\widehat f$ is at most the risk of the particular mean weight, so $L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)$. [F1, given]

1.2 On the event in [F2], fix any comparator $f$. If $\tau>0$, [F3] gives $L_{\rm un}(f)-\tau=\tau(L^=_{\rm un}(f)-1)+(1-\tau)L^\ne_{\rm un}(f)\le\tau\sqrt2L_0s(f)+(1-\tau)L^\ne_{\rm un}(f)$. If $\tau=0$, the same inequality is equality under the stipulated convention $s(f)=0$. [A1, F2, F3, given, algebra]

2.1 Divide the inequality in step 1.2 by $1-\tau>0$ and substitute it into [F2]. Together with step 1.1, this gives the displayed bound for every comparator on the same event, whose probability is at least $1-\delta$. [F2, step 1.1, step 1.2, given, algebra] ∎
