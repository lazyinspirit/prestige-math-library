---
id: lem-author-635c380339fd-loop-coupling
kind: lemma
title: Loop coupling preserves the dynamics and centered Laplacian
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-vertex-hilbert-space
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-first-order-ode-initial-value-problem-and-solution
  - math:def-sine-and-cosine-by-power-series
  - math:def-finite-probability-space-and-event
  - math:def-finite-real-random-variable-and-distribution
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  math:def-sine-and-cosine-by-power-series: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-finite-real-random-variable-and-distribution: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $W$ be the adjacency matrix of a simple graph on $n\ge1$ vertices and $0\le p\le1$. Let $B$ be any diagonal matrix with diagonal in $\{0,1\}$ and put $A=W+B$, $J=\mathbf1\mathbf1^T$, $d=np$, where $\mathbf1$ is the all-ones vector and $I$ below is the identity matrix. For real phase variables $\theta=(\theta_1,\ldots,\theta_n)\in\mathbb R^n$, the equations $\dot\theta_i=\sum_j A_{ij}\sin(\theta_j-\theta_i)$ agree pointwise with those for $W$. More precisely, for any initial data $(t_0,\theta_0)\in\mathbb R\times\mathbb R^n$ and any interval $\mathcal I$ containing $t_0$, a function $\theta:\mathcal I\to\mathbb R^n$ is a solution with those initial data for $A$ if and only if it is one for $W$. Trajectories here mean these solutions on intervals. Writing $L(M)=\operatorname{diag}(M\mathbf1)-M$, we have $L(A)=L(W)$ and $\|A-pJ\|\le\|W-p(J-I)\|+1$. All matrix norms are Euclidean induced operator norms on the finite vertex space.

## Statement references

[[def-expander-prereq-loop-compatible-networks]]

[[def-expander-prereq-vertex-hilbert-space]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[[math:def-first-order-ode-initial-value-problem-and-solution]]

[[math:def-sine-and-cosine-by-power-series]]

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement, including the realization-by-realization Bernoulli specialization.

[F1] The finite symmetric network convention counts each diagonal entry once in the row sum and defines its Laplacian as the diagonal matrix of row sums minus the adjacency matrix ([[def-expander-prereq-loop-compatible-networks]]).

[F2] The finite vertex space has $\|f\|_2^2=\sum_i|f_i|^2$ and a norm satisfying the vector triangle inequality ([[def-expander-prereq-vertex-hilbert-space]]). The induced operator norm of a matrix $T$ is $\max_{\|f\|_2=1}\|Tf\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F3] A first-order system on an open subset of $\mathbb R\times\mathbb R^n$ and its solutions on intervals with prescribed initial data are understood as in [[math:def-first-order-ode-initial-value-problem-and-solution]]. Here the domain is all of $\mathbb R\times\mathbb R^n$.

[F4] Real sine is defined for every real argument by its convergent power series; at zero every term is zero, so $\sin0=0$ ([[math:def-sine-and-cosine-by-power-series]]).

[F5] For the probabilistic specialization, let $(\Omega,w)$ be a finite probability space and let $b_i:\Omega\to\{0,1\}$ be mutually independent Bernoulli$(p)$ random variables. Outcomes and probabilities, random variables, Bernoulli laws and mutual independence are defined in [[math:def-finite-probability-space-and-event]], [[math:def-finite-real-random-variable-and-distribution]], [[math:def-bernoulli-and-binomial-random-variables]] and [[math:def-independence-of-finite-random-variables]], respectively.

## Proof

1.1 For any $\theta\in\mathbb R^n$ and each $i$, the difference between the two vector-field coordinates is $B_{ii}\sin(\theta_i-\theta_i)=B_{ii}\sin0=0$. Also $\operatorname{diag}(B\mathbf1)=B$, so $L(A)=\operatorname{diag}(W\mathbf1)+B-W-B=L(W)$. [given, F1, F4, algebra]

1.2 For a real diagonal matrix $C=\operatorname{diag}(c_1,\ldots,c_n)$, put $m=\max_i|c_i|$. Every unit vector $f$ satisfies $\|Cf\|_2^2=\sum_i|c_i|^2|f_i|^2\le m^2$. A coordinate unit vector at an index attaining $m$ gives equality, so $\|C\|=m$. In particular $\|B-pI\|=\max_i|B_{ii}-p|\le1$, since $B_{ii}\in\{0,1\}$ and $0\le p\le1$. [given, F2, algebra]

2.1 Both systems have the same domain and the same right-hand side at every $(t,\theta)$. For any common interval $\mathcal I$ and initial data $(t_0,\theta_0)$, the differentiability requirement, initial-value requirement and differential equation for a solution are therefore identical. Their solution sets on that interval coincide; this conclusion does not require a uniqueness theorem. [F3, step 1.1]

2.2 For any two matrices $S,T$ and any unit vector $f$, the vector triangle inequality gives $\|(S+T)f\|_2\le\|Sf\|_2+\|Tf\|_2\le\|S\|+\|T\|$. Taking the maximum over unit vectors proves the operator triangle inequality. Apply it to $A-pJ=W-p(J-I)+(B-pI)$ and use step 1.2 to obtain $\|A-pJ\|\le\|W-p(J-I)\|+1$. [F2, step 1.2, algebra]

3.1 For every outcome $\omega\in\Omega$, the matrix $B(\omega)=\operatorname{diag}(b_1(\omega),\ldots,b_n(\omega))$ satisfies the deterministic hypotheses. Steps 1.1 and 2.1 therefore show, realization by realization, that adding the independent Bernoulli loops changes neither the Laplacian nor the trajectories with matching initial data on common intervals; step 2.2 also supplies the norm bound for each realization. The deterministic conclusions hold for every binary diagonal choice, regardless of its probability law or dependence. This proves all assertions. [F5, step 1.1, step 2.1, step 2.2] ∎
