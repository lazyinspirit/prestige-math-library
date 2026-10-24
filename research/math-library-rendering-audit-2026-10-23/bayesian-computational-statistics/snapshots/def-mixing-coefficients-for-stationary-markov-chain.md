---
id: def-mixing-coefficients-for-stationary-markov-chain
kind: definition
title: Strong, uniform, and maximal-correlation mixing coefficients
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §§2–4"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: n/a
axiom_use: "No choice principle is used; the coefficients are defined by event probabilities and correlations."
---

## Definition

Let $Y=(Y_k)_{k\ge0}$ be a process on a probability space whose finite-dimensional laws are invariant under common nonnegative time shifts; call this strict stationarity. For $j\ge0$, set $\mathcal F_j^-:=\sigma(Y_0,\ldots,Y_j)$ and $\mathcal F_j^+:=\sigma(Y_j,Y_{j+1},\ldots)$. For $n\ge1$, define the **strong-mixing coefficient** by
$$\alpha_Y(n):=\sup_{j\ge0}\ \sup_{\substack{A\in\mathcal F_j^-\\B\in\mathcal F_{j+n}^+}}|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|.$$

Define the **uniform-mixing coefficient** by
$$\phi_Y(n):=\sup_{j\ge0}\ \sup_{\substack{A\in\mathcal F_j^-\\\mathbb P(A)>0}}\ \sup_{B\in\mathcal F_{j+n}^+}|\mathbb P(B\mid A)-\mathbb P(B)|.$$

For square-integrable real random variables $U,V$ with positive variances, write
$$\operatorname{Corr}(U,V):=\frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}}.$$
For each $n\ge1$, let $\mathcal C_n$ consist of the triples $(j,U,V)$ such that $j\ge0$, $U,V$ are real and square-integrable, $U$ and $V$ are measurable with respect to $\mathcal F_j^-$ and $\mathcal F_{j+n}^+$ respectively, and both have positive variance. Define the **maximal-correlation coefficient** by
$$\rho_Y(n):=\sup\Bigl(\{0\}\cup\{|\operatorname{Corr}(U,V)|:(j,U,V)\in\mathcal C_n\}\Bigr),$$
where square-integrability is in the sense of [[def-l-p-space-as-a-quotient-by-null-functions]]. Thus $\rho_Y(n)=0$ when there is no admissible pair, as for a constant process. The process is called strongly mixing, uniformly mixing, or rho-mixing, respectively, when the corresponding coefficient tends to zero. These coefficients are distinct conditions; no implication between them is included in this definition.
