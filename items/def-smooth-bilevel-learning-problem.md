---
id: def-smooth-bilevel-learning-problem
kind: definition
title: "Smooth bilevel stationary problems and their hypergradients"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-finite-straight-line-computational-program
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stephen Gould et al., On Differentiating Parameterized Argmin and Argmax Problems with Application to Bi-level Optimization, §3"
      url: "https://arxiv.org/pdf/1607.05447"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §6.3.1"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
    - title: "J. Lebl, Basic Analysis II, §8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
---

## Definition

Let $p,d\ge1$, let $\Theta\subseteq\mathbb R^p$ and $W\subseteq\mathbb R^d$ be open, and let $f:\Theta\times W\to\mathbb R$ be $C^2$ and $g:W\times\Theta\to\mathbb R$ be $C^1$. Here $C^1$ means continuously differentiable on the open domain, and $C^2$ means that the derivative map is itself continuously differentiable. Gradients are column vectors, vector norms are Euclidean, and the norm of a matrix or linear map is the induced Euclidean operator norm.

For $(\theta,w)\in\Theta\times W$, define the inner stationarity residual $F(\theta,w):=\nabla_w f(\theta,w)\in\mathbb R^d$, its state Jacobian $H(\theta,w):=D_wF(\theta,w)\in\mathbb R^{d\times d}$, and its parameter Jacobian $B(\theta,w):=D_\theta F(\theta,w)\in\mathbb R^{d\times p}$. Thus $H$ is the inner Hessian and $B$ is the mixed derivative of the inner gradient. A point $(\theta_0,w_0)$ is stationary when $F(\theta_0,w_0)=0$. If a $C^1$ map $w^*:P\to Q$, for open neighborhoods $P\subseteq\Theta$ of $\theta_0$ and $Q\subseteq W$ of $w_0$, satisfies $w^*(\theta_0)=w_0$ and $F(\theta,w^*(\theta))=0$ for all $\theta\in P$, it is a local stationary branch. The associated outer objective is $J(\theta):=g(w^*(\theta),\theta)$, and its column gradient $\nabla_\theta J$ is called the hypergradient of that branch. The definition of a local stationary branch imposes no global-minimality requirement.

For $\mu>0$, the phrase globally $\mu$-strongly convex in $w$ means that $f(\theta,\cdot)$ is defined on all of $\mathbb R^d$ and, for every $u,v\in\mathbb R^d$, satisfies

$$f(\theta,v)\ge f(\theta,u)+\nabla_w f(\theta,u)^T(v-u)+\frac{\mu}{2}\|v-u\|_2^2.$$

## Definition references

[[def-c-one-map-and-local-inverse|Continuously differentiable maps on open Euclidean domains]]

[[def-finite-straight-line-computational-program|The C2 derivative-map convention for finite computational graphs]]
