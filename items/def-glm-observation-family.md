---
id: def-glm-observation-family
kind: definition
title: Explicit exponential-family response contracts
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-scientific-statistical-model-contract
  - def-dominated-statistical-experiment
  - def-independent-random-elements
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 16–21"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 1–4"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Definition

Fix a finite integer $n\ge1$ and a dispersion value $\phi$. For each $1\le i\le n$, let $\mathcal Y_i\subseteq\mathbb R$ carry its Borel sigma algebra and let $\nu_i$ be a sigma-finite positive measure on it. Let $J\subseteq\mathbb R$ be an open interval, let $b:J\to\mathbb R$ be twice continuously differentiable, let $a_i(\phi)>0$, and let $c_i(\,\cdot\,,\phi)$ be measurable. An **explicit one-parameter exponential-family response contract** supplies, for each $\theta_i\in J$, a density or mass function relative to $\nu_i$,

$$f_i(y_i;\theta_i,\phi)=\exp\!\left\{\frac{y_i\theta_i-b(\theta_i)}{a_i(\phi)}+c_i(y_i,\phi)\right\}.$$

The contract requires $f_i\ge0$, $\int f_i(\,\cdot\,;\theta_i,\phi)\,d\nu_i=1$ for every $\theta_i\in J$, and a fixed support $S_i\in\mathcal A_i$ such that $f_i>0$ on $S_i$ and $f_i=0$ off $S_i$, up to a $\nu_i$-null set independent of $\theta_i$. When the mean and variance identities are used, it also requires a finite second moment and locally uniform integrable envelopes for the first and second $\theta_i$ derivatives of $f_i$ on $S_i$.

For a vector $\theta=(\theta_1,\ldots,\theta_n)\in J^n$, the **product sampling law** is the finite product $\bigotimes_{i=1}^n P_{i,\theta_i,\phi}$, where $P_{i,\theta_i,\phi}$ has density $f_i$ relative to $\nu_i$. The coordinate responses are independent in the sense of [[def-independent-random-elements]]. Their product base measure is $\nu=\bigotimes_{i=1}^n\nu_i$ on $\bigotimes_{i=1}^n\mathcal A_i$. The next lemma verifies that the joint density is $\prod_i f_i$.

The design or conditioning convention, observation units, and response/index roles are part of the surrounding scientific model contract. A sampling-law specification is not evidence that the scientific model is empirically adequate.

Every scientific application also records a [[def-scientific-statistical-model-contract]]: it names the observation space and record, scientific and analysis units, index meanings, response and predictor maps, target, observation mechanism, support, law, conditioning, and adequacy assumptions. The contract does not itself imply independence or common support; those are explicit hypotheses of this response-family definition. Here $i$ is only a component index until the application assigns it a scientific unit or time meaning.
