---
id: def-kl-projection-set-and-relative-kl-neighborhoods
kind: definition
title: "KL projection sets and relative KL neighborhoods"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
axiom_use: "AC is assumed through the directional KL and likelihood-density conventions; all density representatives used below are supplied."
deps:
  - def-probability-measure
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-metric-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §4.1, pp. 378–379"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Definition

Assume AC as required by the imported directional KL convention
[[def-kullback-leibler-divergence]]. Let $(\Theta,\mathcal T,\rho)$ be a
metric space, where $\mathcal T$ is its Borel sigma-algebra. Let
$(\mathsf X,\mathcal A,\mu)$ be a sample space with a fixed sigma-finite
dominating measure. Suppose the supplied finite-valued densities
$(\theta,x)\mapsto p_\theta(x)$ and $x\mapsto p_0(x)$ are jointly measurable
and normalized relative to $\mu$, and observations are IID from $P_0$. Use
the directional convention for [[def-kullback-leibler-divergence]]:
$$K(\theta):=\mathrm{KL}(P_0\Vert P_\theta).$$
Assume $K^*:=\inf_{\theta\in\Theta}K(\theta)<\infty$ and
$$\Theta^*:=\{\theta\in\Theta:K(\theta)=K^*\}\ne\varnothing.$$
The set $\Theta^*$ is the **KL projection set** of the truth onto the model.
The **distance to the KL projection set** is
$$d(\theta,\Theta^*):=\inf_{\vartheta\in\Theta^*}\rho(\theta,\vartheta).$$
A **relative KL neighborhood** of $\Theta^*$ of radius $\epsilon>0$ is
$$B_\epsilon:=\{\theta\in\Theta:K(\theta)-K^*\le\epsilon\}.$$

For any selected $\theta^*\in\Theta^*$ with finite contrast, the relative
contrast on $B_\epsilon$ satisfies
$$K(\theta)-K^*=-\mathbb E_{P_0}\log\frac{p_\theta(X)}{p_{\theta^*}(X)}$$
whenever the displayed log ratio is integrable. This definition allows
$\Theta^*$ to contain multiple parameters and does not assert that the
posterior selects one of them.
