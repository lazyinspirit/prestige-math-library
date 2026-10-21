---
id: def-width-normalized-fully-connected-network
kind: definition
title: Jacot–Gabriel–Hongler width-normalized fully connected networks
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§2, printed pp. 2–3; layer parametrization, 1/sqrt(fan-in) weights, bias scale, and Gaussian initialization"
---

## Definition

Assume AC. Fix integers $L,n_0,\ldots,n_L\ge1$, a bias scale $\beta>0$, and an activation $\sigma:\mathbb R\to\mathbb R$. For each layer $\ell=0,\ldots,L-1$, let $W^{(\ell)}\in\mathbb R^{n_{\ell+1}\times n_\ell}$ and $b^{(\ell)}\in\mathbb R^{n_{\ell+1}}$. At initialization all entries of all matrices and bias vectors are mutually independent and each has the standard normal law $N(0,1)$. These finite collections of entries have the corresponding finite-dimensional multivariate normal product law.

For an input $x\in\mathbb R^{n_0}$, put $z^{(0)}(x)=x$ and, for $\ell=0,\ldots,L-1$, define the preactivation
$$u^{(\ell+1)}(x)=\frac{1}{\sqrt{n_\ell}}W^{(\ell)}z^{(\ell)}(x)+\beta b^{(\ell)}.$$
For $\ell+1<L$, set $z^{(\ell+1)}(x)=\sigma(u^{(\ell+1)}(x))$ coordinatewise; the output layer is linear and $f_\theta(x):=u^{(L)}(x)\in\mathbb R^{n_L}$. The parameter vector $\theta$ consists of every entry of the matrices and biases. The width $n_L$ is the fixed output dimension; the hidden widths are $n_1,\ldots,n_{L-1}$. A sequential hidden-width limit takes $n_1\to\infty$ first, then $n_2\to\infty$, and so on through $n_{L-1}\to\infty$.

## Definition references

[Jacot, Gabriel, and Hongler, §2, source layer parametrization and initialization](https://arxiv.org/pdf/1806.07572)

[[def-axiom-of-choice|Every family of nonempty sets has a choice function]]

[[def-standard-normal-and-normal-laws]]: The standard normal law has density $(2\pi)^{-1/2}e^{-x^2/2}$

[[def-multivariate-normal-law|Finite-dimensional multivariate normal laws allow singular covariance]]
