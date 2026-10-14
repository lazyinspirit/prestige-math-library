---
id: def-contamination-robust-risk
kind: definition
title: "Contamination-robust expected risk and tail risk"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-loss-function-and-risk
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-measurable-space
  - def-huber-contamination-model
  - def-adversarial-sample-replacement
  - def-gross-error-path
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §§1 and 5"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Definition

Let the experiment in [[def-statistical-experiment]] have nonempty parameter set $\Theta$. Choose a sigma-algebra $\mathcal T$ on $\Theta$ and take $(\Theta,\mathcal T)$ as its measurable action space ([[def-measurable-space]]). Specialize the target-first loss of [[def-loss-function-and-risk]] to $L:\Theta\times\Theta\to[0,+\infty]$ by taking its action space to be $(\Theta,\mathcal T)$. Fix an integer sample size $N\ge1$ and a measurable rule $\hat\theta:\mathcal X^N\to\Theta$. Equip $\mathcal X^N$ with the finite product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]); the iid sample law is the finite product measure supplied by [[def-product-measure-on-sigma-finite-spaces]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]. Write $X(x)=x$ for the canonical sample vector on this product space. The Huber sampling law is from [[def-huber-contamination-model]], and nonnegative expectations use [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. For $0\le\epsilon\le1$ and $0\le\eta\le1$, its **Huber robust expected risk** at fraction $\epsilon$ is
$$
\sup_{\theta\in\Theta}\sup_Q\mathbb E_{P_{\epsilon,\theta,Q}^{\otimes N}}L(\theta,\hat\theta(X)).
$$
For the replacement risks, additionally assume $\Delta_{\mathcal X}=\{(x,x):x\in\mathcal X\}\in\mathcal A\otimes\mathcal A$, as required by [[def-adversarial-sample-replacement]]. Its **replacement robust expected risk** at fraction $\eta$ is the supremum of $\mathbb E L(\theta,\hat\theta(Y))$ over $\theta$ and all couplings in [[def-adversarial-sample-replacement]]. For $t\in[0,+\infty]$, the Huber tail risk at threshold $t$ is $\sup_{\theta,Q}P_{\epsilon,\theta,Q}^{\otimes N}\{x:L(\theta,\hat\theta(x))\ge t\}$; the replacement tail risk is the supremum of $\Pr\{L(\theta,\hat\theta(Y))\ge t\}$ over $\theta$ and the same replacement couplings. Expected risk and tail risk are different criteria. The gross-error path in [[def-gross-error-path]] is a path of laws; it is not a sample-replacement mechanism.

