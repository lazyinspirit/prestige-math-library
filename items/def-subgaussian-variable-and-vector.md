---
id: def-subgaussian-variable-and-vector
kind: definition
title: "Sub-Gaussian variables and vectors, and sub-exponential variables"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-borel-sigma-algebra
  - def-real-exponential-function-and-e
  - def-random-element-and-real-random-variable
  - thm-exponential-is-strictly-increasing
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, §1.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, §4.1.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Definition

Use the real random variable convention of [[def-random-element-and-real-random-variable]] and the expectation convention of [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. A real random variable $X$ is **centered** when it is integrable and $\mathbb E X=0$. A vector random element $Z=(Z_1,\ldots,Z_d)$ in $\mathbb R^d$, for an integer $d\ge1$, is centered when each coordinate is integrable and $\mathbb E Z_j=0$. For $u,z\in\mathbb R^d$, write $\langle u,z\rangle=\sum_{j=1}^d u_jz_j$ and $\|u\|_2=(\sum_{j=1}^d u_j^2)^{1/2}$, using the Euclidean convention in [[def-euclidean-spheres-and-closed-balls]].

For $\sigma^2\ge0$, a centered real random variable $X$ is **sub-Gaussian with proxy $\sigma^2$** if
$$\mathbb E e^{\lambda X}\le e^{\lambda^2\sigma^2/2}\qquad\text{for every }\lambda\in\mathbb R.$$
A centered vector random element $Z\in\mathbb R^d$ is **sub-Gaussian with proxy $\sigma^2$** if
$$\mathbb E e^{\lambda\langle u,Z\rangle}\le e^{\sigma^2\lambda^2\|u\|_2^2/2}\qquad\text{for every }u\in\mathbb R^d\text{ and }\lambda\in\mathbb R.$$

For $\nu^2\ge0$ and $b>0$, a centered real random variable $X$ is **sub-exponential with parameters $(\nu^2,b)$** if
$$\mathbb E e^{\lambda X}\le e^{\lambda^2\nu^2/2}\qquad\text{whenever }|\lambda|\le1/b.$$

The parameters $\sigma^2$ and $\nu^2$ are moment-generating-function upper-bound proxies; they are not asserted to equal the variance. The vector condition controls every one-dimensional projection and does not assert independence of coordinates.
