---
id: lem-contrastive-empirical-minimizer-excess
kind: lemma
title: "Population contrastive excess of an approximate empirical minimizer"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-latent-class-contrastive-learning
  - lem-contrastive-uniform-generalization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Theorem 4.1 and proof route"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., empirical-to-population risk argument in Chapter 3"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Statement

Assume the Axiom of Choice and the hypotheses of the one-negative uniform-generalization lemma for a sample $S$ of size $M$. Let $\widehat f$ be a measurable selector taking values in $\mathcal F$ almost surely and satisfying, almost surely, $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(f)+\eta$ for every $f\in\mathcal F$, where $\eta\ge0$. For every $0<\delta<1$, with probability at least $1-\delta$,

$$\forall f\in\mathcal F,\qquad L_{\rm un}(\widehat f)\le L_{\rm un}(f)+2\Gamma_M(S,\delta)+\eta,$$

where

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell,R}\sqrt{\frac{\ln(4/\delta)}{2M}}$$

is the uniform-deviation quantity for the same sample and loss. The case $\eta=0$ includes any attained measurable empirical minimizer; the statement does not assert that such a selector exists.

## Statement references

[[def-latent-class-contrastive-learning]]: defines population and empirical contrastive risk and the measurable-selector convention.

[[lem-contrastive-uniform-generalization]]: supplies the simultaneous deviation event with error $\Gamma_M(S,\delta)$.

[Saunshi et al., Theorem 4.1 and proof route](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf): compares an empirical minimizer with every population-risk comparator using uniform deviation.

[Mohri et al., *Foundations of Machine Learning*, Chapter 3](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): develops the same empirical-to-population comparison from a uniform deviation bound.

## Facts & Assumptions

**Given:** AC, the hypotheses and notation of `lem-contrastive-uniform-generalization`, a measurable random selector $\widehat f$, and a tolerance $\eta\ge0$.

[A1] AC is assumed in the uniform-generalization lemma and enters only through that supplier's bounded-differences theorem. [[def-axiom-of-choice]], [[lem-contrastive-uniform-generalization]]

[F1] On an event of probability at least $1-\delta$, every $g\in\mathcal F$ satisfies $|L_{\rm un}(g)-\widehat L_{\rm un}(g)|\le\Gamma_M(S,\delta)$. [[lem-contrastive-uniform-generalization]]

[F2] Almost surely, the approximate-minimizer condition gives $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(f)+\eta$ simultaneously for each comparator $f\in\mathcal F$. [[def-latent-class-contrastive-learning]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 On the event in [F1], apply its uniform bound to the random selector $\widehat f$ (which belongs to $\mathcal F$ almost surely) to obtain $L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(\widehat f)+\Gamma_M(S,\delta)$. [A1, F1, given]

1.2 On the same event, [F2] gives $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(f)+\eta$ for every $f\in\mathcal F$. [F2, given]

2.1 Apply [F1] again to each comparator to obtain $\widehat L_{\rm un}(f)\le L_{\rm un}(f)+\Gamma_M(S,\delta)$. Combining the preceding inequalities yields the displayed bound simultaneously for all $f$. Since the event in [F1] has probability at least $1-\delta$, the claim follows. [F1, step 1.1, step 1.2, given, algebra] ∎
