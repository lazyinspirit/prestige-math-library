---
id: def-abc-augmented-tolerance-target
kind: definition
title: Augmented ABC tolerance target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-approximate-bayesian-computation
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-standard-borel-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-prior-and-model-kernel-define-joint-law
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §4"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Osvaldo A. Martin, Ravin Kumar, and Junpeng Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
    - title: "Paul Fearnhead and Dennis Prangle, Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC, §§2–3"
      url: https://arxiv.org/pdf/1004.1112
---

## Definition

Use the prior and simulator setup of [[def-approximate-bayesian-computation]]:
standard-Borel parameter and data spaces $(\Theta,\mathcal T)$ and
$(\mathsf Y,\mathcal Y)$, a prior probability $\Pi$, a probability kernel
$K(\theta,\cdot)$, a measurable summary map $S:\mathsf Y\to\mathbb R^d$ with
$d\ge1$, an observed summary $s_0\in\mathbb R^d$, and tolerance
$\epsilon\ge0$. Let
$$B_\epsilon(s_0)=\{s\in\mathbb R^d:\|s-s_0\|_2\le\epsilon\},\qquad A_\epsilon=S^{-1}(B_\epsilon(s_0)).$$
The **prior-simulator joint law** $H$ on the product sigma-algebra
$(\Theta\times\mathsf Y,\mathcal T\otimes\mathcal Y)$ is
$$H(C)=\int_\Theta K(\theta,C_\theta)\,\Pi(d\theta),\qquad C_\theta=\{y:(\theta,y)\in C\},$$
which is a probability measure by
[[lem-prior-and-model-kernel-define-joint-law]]. The finite product is standard
Borel by [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]].
Put
$$h_\epsilon(\theta,y)=\mathbf1_{A_\epsilon}(y),\qquad
Z_\epsilon=\int_{\Theta\times\mathsf Y}h_\epsilon\,dH
=\int_\Theta K(\theta,A_\epsilon)\,\Pi(d\theta).$$
Thus $0\le Z_\epsilon\le1$, and $Z_\epsilon$ is the prior-predictive probability
$p_\epsilon(s_0)$ in [[def-approximate-bayesian-computation]]. Only when
$Z_\epsilon>0$ define the **augmented ABC tolerance target**
$$\widetilde\Pi_\epsilon(C)=\frac{1}{Z_\epsilon}\int_C h_\epsilon\,dH
\qquad(C\in\mathcal T\otimes\mathcal Y).$$
It is the prior-simulator joint law conditioned on the summary-tolerance event.
Its parameter marginal is identified in
[[lem-abc-augmented-target-has-tolerance-posterior-marginal]]. The definition
does not assert that summary reduction or a positive tolerance preserves the
full-data posterior.
