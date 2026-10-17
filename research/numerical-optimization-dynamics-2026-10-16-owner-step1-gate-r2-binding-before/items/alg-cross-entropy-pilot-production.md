---
id: alg-cross-entropy-pilot-production
kind: algorithm
title: Independent-pilot cross-entropy proposal fitting and production
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - alg-importance-sampling
  - def-identically-distributed-and-iid-random-variables
axiom_use: "The candidate family and lexicographic ordering are finite inputs, so the procedure uses only finite maximization and finite sampling; no choice axiom is added."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 2, Cross-Entropy Method"
      url: "https://laub.au/rare-events/slides/L2.slides.html"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, `5"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Definition

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space, let $A\in\mathcal X$, and let $\{q_\theta:\theta\in\Theta\}$ be pointwise finite probability densities with respect to $\mu$, where $\Theta\subset\mathbb R^d$ is a finite nonempty set equipped with lexicographic order. Supply an initial parameter $\theta_0\in\Theta$, a pilot size $m\ge1$, and a production size $n\ge1$.

1. Draw an IID pilot $Y_1,\ldots,Y_m\sim q_{\theta_0}$.
2. If no $Y_j$ lies in $A$, return `pilot-no-hit`.
3. For every $\theta\in\Theta$, compute
$
s_\theta(y)=\begin{cases}\log q_\theta(y),&y\in A,\\0,&y\notin A,\end{cases}
\qquad S(\theta)=\sum_{j=1}^m s_\theta(Y_j),
$
with $\log 0=-\infty$. Pointwise finiteness rules out $+\infty$, and the piecewise score avoids the undefined product $0\cdot(-\infty)$. If all scores equal $-\infty$, return `no-finite-maximizer`. Otherwise choose the lexicographically least maximizer $\widehat\theta$ among the finite scores and freeze it.
4. Draw an IID production sample $X_1,\ldots,X_n\sim q_{\widehat\theta}$, independent of the pilot conditional on $\widehat\theta$. On admissible inputs, return the ordinary importance-sampling estimate
$
\widehat p_{\rm CE}=\frac1n\sum_{i=1}^n\mathbf1_A(X_i)\frac{f(X_i)}{q_{\widehat\theta}(X_i)}
$
when $P$ has density $f$. If a supplied admissibility check identifies failure of support or integrability, return `inadmissible-production-proposal`; a pilot optimization result by itself certifies neither condition.

The finite candidate set makes the score comparisons and tie rule deterministic. If the production support or moment conditions do not hold, no unbiasedness or finite-variance claim is made.
