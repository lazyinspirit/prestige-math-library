---
id: def-exact-selective-confidence-set-for-a-functional
kind: definition
title: Exact selective confidence set for a parameter functional
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-confidence-set-and-coverage
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "William Fithian, Dennis L. Sun, and Jonathan E. Taylor, Optimal Inference After Model Selection"
      url: "https://arxiv.org/pdf/1410.2597"
---

## Definition

Let $\mathsf E=((\mathcal Y,\mathcal G),\mathcal M,(Q_\mu)_{\mu\in\mathcal M})$ be a statistical experiment ([[def-statistical-experiment]]) and let $\tau:\mathcal M\to\Lambda$ be a parameter functional. For $0\le\alpha\le1$, a set-valued procedure $C:\mathcal Y\to\mathcal P(\Lambda)$ is a selective confidence set with coverage at least $1-\alpha$ if, for every $\mu\in\mathcal M$, its membership section $\{y:\tau(\mu)\in C(y)\}$ belongs to $\mathcal G$ and
$$Q_\mu\{y:\tau(\mu)\in C(y)\}\ge1-\alpha.$$
It is exact if equality holds for every $\mu$. Here the laws $Q_\mu$ are the laws after conditioning on the specified selection event. When $\mathcal M\ne\varnothing$, the pullback $D(y)=\{\mu\in\mathcal M:\tau(\mu)\in C(y)\}$ is a confidence-set procedure as in [[def-confidence-set-and-coverage]], with the same membership sections and coverage at each $\mu$. When $\mathcal M=\varnothing$, the stated coverage and exactness requirements are vacuous. No measurable structure on $\mathcal M$ or $\Lambda$ is imposed.
