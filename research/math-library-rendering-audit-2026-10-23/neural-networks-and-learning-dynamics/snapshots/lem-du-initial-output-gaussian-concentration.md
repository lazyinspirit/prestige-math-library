---
id: lem-du-initial-output-gaussian-concentration
kind: lemma
title: "Gaussian output initialization concentrates conditionally on the hidden features"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - thm-standard-gaussian-lipschitz-concentration
  - cor-cauchy-schwarz-for-random-variables
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-multivariate-normal-law
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC, DC and countable choice are inherited from the Gaussian concentration supplier; the conditional linear-map calculation is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendix B"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Assume AC, DC and countable choice. Fix hidden-layer feature vectors $\phi_1,\ldots,\phi_n\in\mathbb R^m$, form the matrix $\Phi\in\mathbb R^{n\times m}$ with rows $\phi_i^T$, and let the independent output-weight vector $a\sim N_m(0,I_m)$. Put $u=\Phi a$ and $G=\Phi\Phi^T$. Then for every $0<\delta<1$,

$$P\left\{\|u\|_2\le\sqrt{\operatorname{tr}(G)}+\|\Phi\|_{\rm op}\sqrt{2\log(1/\delta)}\right\}\ge1-\delta,$$

where $\|\Phi\|_{\rm op}=\sup_{\|v\|_2=1}\|\Phi v\|_2$. The probability is conditional on the fixed hidden-layer features and is over $a$ only.

## Statement references

[Du et al., random Gaussian output initialization and Appendix B](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** AC, DC, countable choice, fixed feature vectors, and an independent standard Gaussian output vector.

[A1] AC, DC and countable choice are assumed by the Gaussian concentration supplier. [[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F1] For a standard Gaussian vector $Z$ and an $L$-Lipschitz real function $g$, $P\{g(Z)\ge Eg(Z)+r\}\le e^{-r^2/(2L^2)}$ for $L>0,r>0$; for $L=0$ the upper-tail event is empty. [[thm-standard-gaussian-lipschitz-concentration]]

[F2] A standard multivariate normal vector has covariance identity, and a fixed linear functional has variance given by its covariance quadratic form. [[def-multivariate-normal-law]]

[F3] Cauchy–Schwarz bounds $\mathbb E|XY|$ by the product of the $L^2$ norms. [[cor-cauchy-schwarz-for-random-variables]]

[F4] The Euclidean norm satisfies the triangle inequality and hence the reverse triangle inequality. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

**Proof technique:** apply one-sided Gaussian concentration to the norm of a fixed linear image and bound its mean by its second moment.

1.1 [F4] gives $|\|\Phi a\|_2-\|\Phi b\|_2|\le\|\Phi(a-b)\|_2\le\|\Phi\|_{\rm op}\|a-b\|_2$, so $a\mapsto\|\Phi a\|_2$ is $\|\Phi\|_{\rm op}$-Lipschitz. Since $E[aa^T]=I_m$ by [F2], $E\|\Phi a\|_2^2=\operatorname{tr}(\Phi\Phi^T)=\operatorname{tr}(G)$; [F3] with $X=\|\Phi a\|_2$ and $Y=1$ yields $E\|\Phi a\|_2\le\sqrt{\operatorname{tr}(G)}$. [F2, F3, F4, given, algebra]

2.1 If $\|\Phi\|_{\rm op}=0$, then $u=0$ and the asserted event has probability one. Otherwise apply [F1] to $g(a)=\|\Phi a\|_2$ with $r=\|\Phi\|_{\rm op}\sqrt{2\log(1/\delta)}>0$. The upper-tail probability is at most $\exp(-\log(1/\delta))=\delta$, and the mean bound in step 1.1 gives the displayed threshold. [A1, F1, F2, step 1.1, algebra] ∎
