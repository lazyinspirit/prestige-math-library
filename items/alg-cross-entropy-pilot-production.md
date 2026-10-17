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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 2, Cross-Entropy Method"
      url: "https://laub.au/rare-events/slides/L2.slides.html"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, `5"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Definition

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space, let $A\in\mathcal X$, and let the target probability measure $P$ have a pointwise finite measurable density $f:\mathsf X\to[0,\infty)$ with respect to $\mu$, so $P(B)=\int_B f\,d\mu$. Let $\{q_\theta:\theta\in\Theta\}$ be pointwise finite probability densities with respect to $\mu$, and write $Q_\theta(dx)=q_\theta(x)\mu(dx)$, where $\Theta\subset\mathbb R^d$ is a finite nonempty set equipped with lexicographic order. For each $\theta\in\Theta$, supply an exact admissibility checker $\mathcal C(A,f,q_\theta)$ that returns `admissible` if and only if $P|_A\ll Q_\theta$ and the contribution
$$
w_\theta(x)=\begin{cases}\mathbf1_A(x)f(x)/q_\theta(x),&q_\theta(x)>0,\\0,&q_\theta(x)=0\end{cases}
$$
is integrable under $Q_\theta$, where $P|_A(B):=P(B\cap A)$ for measurable $B$. Supply an initial parameter $\theta_0\in\Theta$, a pilot size $m\ge1$, and a production size $n\ge1$.

1. Draw an IID pilot $Y_1,\ldots,Y_m\sim q_{\theta_0}$.
2. If no $Y_j$ lies in $A$, return `pilot-no-hit`.
3. For every $\theta\in\Theta$, compute
$
s_\theta(y)=\begin{cases}\log q_\theta(y),&y\in A,\\0,&y\notin A,\end{cases}
\qquad S(\theta)=\sum_{j=1}^m s_\theta(Y_j),
$
with $\log 0=-\infty$. Pointwise finiteness rules out $+\infty$, and the piecewise score avoids the undefined product $0\cdot(-\infty)$. If all scores equal $-\infty$, return `no-finite-maximizer`. Otherwise choose the lexicographically least maximizer $\widehat\theta$ among the finite scores and freeze it.
4. Evaluate $\mathcal C(A,f,q_{\widehat\theta})$. If it returns inadmissible, return `inadmissible-production-proposal`. Otherwise draw an IID production sample $X_1,\ldots,X_n\sim q_{\widehat\theta}$, independent of the pilot conditional on $\widehat\theta$, and return the ordinary importance-sampling estimate
$
\widehat p_{\rm CE}=\frac1n\sum_{i=1}^n w_{\widehat\theta}(X_i)
$
using the piecewise-defined contribution $w_{\widehat\theta}$ above.

The finite candidate set makes the score comparisons and tie rule deterministic. The supplied exact checker is an input oracle; the procedure does not infer support or integrability from a pilot fit. If its check fails, no production estimate or unbiasedness or finite-variance claim is returned.
