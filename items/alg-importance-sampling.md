---
id: alg-importance-sampling
kind: algorithm
title: Ordinary importance sampling
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Quan Zhou, STAT 689 Unit 1: Introduction, Rejection and Importance Sampling, §1.3"
      url: "https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf"
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §4.3"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
    - title: "Tuan Anh Le, Importance Sampling, §§Importance Sampling and Monte Carlo Estimator"
      url: "https://www.tuananhle.co.uk/notes/is.html"
    - title: "Data Science and Statistical Modelling, Chapter 5 §§5.3.1–5.3.3"
      url: "https://www.louisaslett.com/Courses/DSSM/notes/simulation.html"
---

## Definition

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space. An **unnormalized target density** is a measurable function $\tilde p:\mathsf X\to[0,\infty)$ with
$$Z_p:=\int_{\mathsf X}\tilde p\,d\mu\in(0,\infty).$$
The target probability measure is $\pi(dx)=\tilde p(x)\mu(dx)/Z_p$. A **proposal density** is a measurable $q:\mathsf X\to[0,\infty)$ with $\int q\,d\mu=1$; write $Q(dx)=q(x)\mu(dx)$. The input integrand $f:\mathsf X\to\mathbb R$ is measurable, and the input sample $X_1,\ldots,X_n$ is IID with law $Q$, in the sense of [[def-identically-distributed-and-iid-random-variables]]. The normalizing constant $Z_p$ is known for this algorithm.

**Admissible conditions for an unbiased estimate:** $n\ge1$, $q>0$ $\mu$-almost everywhere on $\{x:f(x)\tilde p(x)\ne0\}$, and the random variable
$$Y:=\begin{cases}f(X_1)\tilde p(X_1)/(Z_pq(X_1)),&q(X_1)>0,\\0,&q(X_1)=0\end{cases}$$
is integrable under $Q$. The support condition makes the value on $q=0$ immaterial to the target integral.

**Well-defined weights:** The reciprocal map $r(s)=1/s$ for $s>0$ and $r(s)=0$ for $s\le0$ is Borel. Its composition with $q$, multiplied by the measurable inputs, makes the piecewise weight and weighted integrand measurable ([[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

**Procedure and output:** For each supplied draw $X_i$, set $Y_i=f(X_i)\tilde p(X_i)/(Z_pq(X_i))$ when $q(X_i)>0$ and set $Y_i=0$ otherwise. Return
$$\hat\mu_{\mathrm{IS}}:=\frac1n\sum_{i=1}^nY_i.$$
Separate variance and central limit claims require the corresponding weighted second-moment hypothesis.
