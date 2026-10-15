---
id: alg-self-normalized-importance-sampling
kind: algorithm
title: Self-normalized importance sampling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
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
    - title: "Quan Zhou, STAT 689 Unit 1: Introduction, Rejection and Importance Sampling, §1.3, Theorem 1.3"
      url: "https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf"
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §§4.3.1, 4.3.3"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
    - title: "Tuan Anh Le, Importance Sampling, §Self-Normalized Importance Sampling"
      url: "https://www.tuananhle.co.uk/notes/is.html"
    - title: "Monte Carlo Methods course notes, Chapter 6 §6.2"
      url: "https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf"
---

## Definition

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space. The unnormalized target density is a measurable $\tilde p\ge0$ with $0<Z_p=\int\tilde p\,d\mu<\infty$ and target $\pi(dx)=\tilde p(x)\mu(dx)/Z_p$. Let $q\ge0$ be a measurable proposal probability density against $\mu$, let $Q(dx)=q(x)\mu(dx)$, and let $f$ be a measurable real-valued integrand. The input $X_1,\ldots,X_n$ is an IID sample from $Q$ in the sense of [[def-identically-distributed-and-iid-random-variables]], with $n\ge1$. For target interpretation require $q>0$ $\pi$-almost everywhere. Write
$$W_i:=\begin{cases}\tilde p(X_i)/q(X_i),&q(X_i)>0,\\0,&q(X_i)=0.\end{cases}$$
This is a nonnegative unnormalized importance weight; the value on $q=0$ is immaterial under $Q$ and under the stated target support condition.

The reciprocal map that is $1/s$ for $s>0$ and $0$ for $s\le0$ is Borel. Its composition with $q$, multiplied by $\tilde p$, makes $W_i$ measurable by [[thm-composition-with-borel-functions-preserves-measurability]] and [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

**Procedure and output:** Compute $S_n=\sum_{i=1}^nW_i$. If $S_n=0$, return the status **no estimate: zero observed target weight**. If $S_n>0$, return
$$\hat\theta_{\mathrm{SN}}:=\frac{\sum_{i=1}^nW_if(X_i)}{S_n}.$$
For consistency require $\mathbb E_QW_1=Z_p\in(0,\infty)$ and $\mathbb E_Q[W_1|f(X_1)|]<\infty$. A ratio CLT and its Monte Carlo standard error require finite second moments of $W_1$ and $W_1f(X_1)$.
