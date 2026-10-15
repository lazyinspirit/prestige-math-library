---
id: cex-identifiable-nonconstant-summary-loses-parameter
kind: counterexample
title: "A nonconstant summary can lose an identifiable parameter"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-approximate-bayesian-computation
  - def-borel-sigma-algebra
  - def-complete-metric-space
  - def-estimand-on-a-statistical-model
  - def-exact-inferential-target-and-approximation-chain
  - def-identifiability-of-an-estimand
  - def-measure-kernel-and-probability-kernel
  - def-metric-space
  - def-observational-equivalence
  - def-parametric-statistical-model
  - def-polish-space
  - def-probability-measure
  - def-separable-space
  - def-standard-borel-space
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-total-variation-distance-for-probability-laws
  - lem-rat-embeds-dense
  - thm-euclidean-space-complete
  - thm-rationals-countable
justified_by: []
proof_strategy: direct
axiom_use: "None. All finite spaces and probability weights are explicit. The real summary target is standard Borel by the complete Euclidean metric and the countable dense set of rationals; no choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Christian P. Robert, Jean-Marie Cornuet, Jean-Michel Marin, and Natesh S. Pillai, Lack of Confidence in Approximate Bayesian Computation Model Choice (2011)"
      url: "https://arxiv.org/pdf/1102.4432"
      locator: "Complete 9-page paper, §§1–3, PDF pp. 1–4; summary information loss and distinctions between model identification and summary-based inference."
    - title: "Jarno Lintusaari et al., Fundamentals and Recent Developments in Approximate Bayesian Computation (2017)"
      url: "https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf"
      locator: "Complete 47-page article, §§2–5, PDF pp. 10–23; tolerance-conditioned target and summary-information loss."
    - title: "Paul Fearnhead and Dennis Prangle, Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC (2012)"
      url: "https://arxiv.org/pdf/1004.1112"
      locator: "Complete 44-page article, §§1–4, PDF pp. 1–18 and 35–38; information in summaries and posterior approximation."
    - title: "Michael G. B. Blum, Approximate Bayesian Computation: A Nonparametric Perspective (2010)"
      url: "https://arxiv.org/pdf/0904.0635"
      locator: "Complete 28-page paper, main text pp. 1–11 and 20–24; supplemental Lemma 2 was not used."
---

## Statement refuted

Full-data identifiability and nonconstancy of a summary do not imply that the summary retains information about the identifiable parameter or that the ABC target equals the exact posterior.

## Facts & Assumptions

**Given:** Let $\Theta=\{0,1\}$ have equal prior mass, let $\mathsf Y=\{0,1\}^2$ have the power-set sigma-algebra, and for parameter $\theta$ define
$$P_\theta\{(z,w)\}=\tfrac12\mathbf1_{\{z=\theta\}}.$$
Take $S(z,w)=w$, observe $y=(0,0)$, and use zero tolerance $\epsilon=0$.

[F1] For standard Borel parameter/data spaces and a positive acceptance event, the indicator ABC target is the prior-simulator law conditioned on the closed summary-tolerance ball. [[def-approximate-bayesian-computation]]

[F2] A probability kernel assigns a probability measure at each parameter and measurable event probabilities in the parameter; a statistic is a measurable map. [[def-measure-kernel-and-probability-kernel]] [[def-statistic-and-estimator]]

[F3] Observational equivalence means equality of the full sampling laws, and the identity estimand is identifiable when equivalent parameters must agree. [[def-parametric-statistical-model]] [[def-observational-equivalence]] [[def-identifiability-of-an-estimand]]

[F4] A fixed measurable likelihood with finite positive evidence defines the exact target by normalizing its prior-weighted integral. [[def-exact-inferential-target-and-approximation-chain]]

[F5] A finite discrete space is standard Borel when its discrete metric is complete and separable and its Borel sigma-algebra is its power set; $\mathbb R$ is standard Borel because its Euclidean metric is complete and $\mathbb Q$ is countable and dense. [[def-metric-space]] [[def-complete-metric-space]] [[def-separable-space]] [[def-polish-space]] [[def-standard-borel-space]] [[thm-euclidean-space-complete]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]]

[F6] The TV distance is the supremum of event-probability differences. [[def-total-variation-distance-for-probability-laws]]

## Counterexample

**Given:** The finite prior, model, summary, observation, and tolerance in Facts & Assumptions.

1.1 Put the discrete metric on $\Theta$ and $\mathsf Y$. A Cauchy sequence is eventually constant because its tail has pairwise distances below $1/2$; each finite space is separable since the whole finite set is a countable dense subset. Every subset is open, so the Borel sigma-algebra is the power set. Thus both are standard Borel by [F5]. The real target is standard Borel by [F5]. [given, F5, construct]

1.2 The event $A=\{(z,w):z=0\}$ has probabilities $P_0(A)=1$ and $P_1(A)=0$. Thus the two full-data laws are not observationally equivalent, and the identity parameter is identifiable by [F3]. [F3, given]

1.3 The full-data likelihood at $y=(0,0)$ is $1/2$ under $\theta=0$ and $0$ under $\theta=1$. Its prior evidence is $(1/2)(1/2)+(1/2)0=1/4$, so [F4] gives exact posterior $\Pi_y=\delta_0$. [F4, given, algebra]

2.1 For each $\theta$, exactly two pairs $(z,w)$ have $z=\theta$, each with mass $1/2$, so $P_\theta$ is a probability law; because the parameter sigma-algebra is also the power set, the displayed family is a probability kernel. The map $S$ is nonconstant, since $S(0,0)=0$ and $S(0,1)=1$, and it is measurable because every subset of the finite source is measurable. [F2, step 1.1, given, algebra]

2.2 The summary law is Bernoulli$(1/2)$ under each parameter. The zero-tolerance ball in $\mathbb R$ centered at $S(y)=0$ is $\{0\}$, and each parameter has acceptance probability $1/2$, so prior-predictive acceptance is $1/2>0$. Conditioning the equal prior on this event leaves $\Pi_{\mathrm{ABC},0}\{\theta=0\}=\frac{(1/2)(1/2)}{1/2}=1/2$ by [F1]. [F1, given, step 1.1, algebra]

3.1 On event $\{\theta=0\}$ the exact posterior gives mass $1$ and the zero-tolerance ABC target gives mass $1/2$. By [F6], their total-variation distance is at least $1/2$. The full model is identifiable, but the nonconstant summary has parameter-independent law and its ABC target remains the prior. [F6, step 1.3, step 2.2, algebra] ∎

