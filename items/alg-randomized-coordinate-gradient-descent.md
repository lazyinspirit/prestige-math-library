---
id: alg-randomized-coordinate-gradient-descent
kind: algorithm
title: "Randomized coordinate gradient descent"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.3"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Definition

Whenever a subscript $i$ indexes a block, $x_i$ is shorthand for $x_{B_i}$.

Let $d,n\ge1$, let $B_1,\ldots,B_n$ be a partition of $\{1,\ldots,d\}$ into nonempty blocks, and let $U_i:\mathbb R^{|B_i|}\to\mathbb R^d$ insert a block vector in coordinates $B_i$ and put zero in the other coordinates. Coordinate label $j\in\{1,\ldots,d\}$ here denotes standard coordinate $j-1\in\{0,\ldots,d-1\}$. Let $f:\mathbb R^d\to\mathbb R$ be convex and continuously differentiable in the sense of [[def-c-one-map-and-local-inverse]]. Its gradient $\nabla f$ is the one defined by [[def-jacobian-matrix-and-gradient]]; total differentiability supplies its partial derivatives by [[thm-total-derivative-computes-directional-and-partial-derivatives]]. Define $\nabla_i f(x)$ to be the entries of $\nabla f(x)$ with labels in $B_i$, in increasing order. For each $i$, an **$L_i$ block-gradient Lipschitz bound** is a number $L_i>0$ such that
$$\|\nabla_i f(x+U_i h)-\nabla_i f(x)\|_2\le L_i\|h\|_2\qquad(x\in\mathbb R^d,\ h\in\mathbb R^{|B_i|}),$$
Choose majorizers $M_i\ge L_i$, probabilities $p_i>0$ with $\sum_i p_i=1$, an initial point $x^0$, and a finite update budget $K\in\mathbb N$.

At each update $k<K$, draw $I_k\in\{1,\ldots,n\}$ with probabilities $(p_i)$, independently of earlier draws, and set
$$x_{B_{I_k}}^{k+1}=x_{B_{I_k}}^k-\frac{1}{M_{I_k}}\nabla_{I_k} f(x^k),\qquad x_{B_j}^{k+1}=x_{B_j}^k\quad(j\ne I_k).$$
Uniform sampling means $p_i=1/n$. The exact coordinate update is the minimizer of its quadratic model. If the caller supplies a stopping predicate, it is checked after each accepted update; on the first true result the procedure returns the current iterate with status `tolerance-met`. Otherwise it returns $x^K$ with status `budget-limit`. The latter status does not certify a specified finite objective gap. Every finite horizon uses only a finite product distribution on index histories.
