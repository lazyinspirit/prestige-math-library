---
id: def-generalized-linear-model
kind: definition
title: Generalized linear model with explicit conditioning
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-glm-observation-family
  - lem-glm-product-density
  - lem-glm-mean-and-variance-identities
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
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 23–33, 40–52"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 1–5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Definition

Fix $n\ge1$, $p\ge1$, a finite design matrix $X\in\mathbb R^{n\times p}$ with rows $x_i^\mathsf T$, a dispersion value $\phi$, and an open parameter domain $\Theta\subseteq\mathbb R^p$. A **generalized linear model (GLM)** on this design consists of the response family in [[def-glm-observation-family]], a differentiable one-to-one link $g:\mathcal M\to g(\mathcal M)$ on a specified mean domain $\mathcal M$, and a specified map $\tau:\mathcal M\to J$ satisfying $b'(\tau(\mu))=\mu$. For $\beta\in\Theta$, put

$$\eta_i=x_i^\mathsf T\beta,\qquad \mu_i=g^{-1}(\eta_i),\qquad \theta_i=\tau(\mu_i),$$

and require $\eta_i\in g(\mathcal M)$ and $\theta_i\in J$ for every $i$. The **canonical link** is the choice $g=\tau$, equivalently $\theta_i=\eta_i$. When $\theta_i=\eta_i$ and the component scales are common, write $a_i(\phi)=a(\phi)>0$; this common-scale restriction is part of every formula that uses $a(\phi)$.

The joint sampling density is the product density from [[lem-glm-product-density]]. For an observed $y=(y_1,\ldots,y_n)$ with $f_i(y_i;\theta_i,\phi)>0$ for every $i$, define its log likelihood by

$$\ell(\beta;y,\phi)=\sum_{i=1}^n\left\{\frac{y_i\theta_i-b(\theta_i)}{a_i(\phi)}+c_i(y_i,\phi)\right\}.$$

For a differentiable log likelihood, the **score** is $U(\beta;y,\phi):=\nabla_\beta\ell(\beta;y,\phi)$. When its entries have finite second moments, the **expected score outer-product information** is $I(\beta,\phi):=\mathbb E_{\beta,\phi}[U U^\mathsf T]$. This page treats $X$ as fixed or conditions on its realized value; it supplies no random-design asymptotic conclusion.
