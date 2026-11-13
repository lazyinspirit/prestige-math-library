---
id: lem-author-4a6b79e2d031-uniform-centered-adjacency
title: Uniform small centered adjacency above logarithmic mean degree
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-4a6b79e2d031-bounded-symmetric-expectation
  - prop-expander-prereq-independent-copy-norm-symmetrization
  - def-expander-sync-erdos-renyi
  - math:thm-markov-inequality
  - math:def-adjacency-matrix-of-a-finite-simple-graph
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-product-of-finite-probability-spaces
  - math:thm-product-probability-has-independent-coordinate-events
  - math:def-finite-probability-space-and-event
  - math:def-finite-real-random-variable-and-distribution
  - math:def-expectation-on-a-finite-probability-space
dependency_roles:
  lem-author-4a6b79e2d031-bounded-symmetric-expectation: mathematical-premise
  prop-expander-prereq-independent-copy-norm-symmetrization: mathematical-premise
  def-expander-sync-erdos-renyi: mathematical-premise
  math:thm-markov-inequality: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-product-of-finite-probability-spaces: mathematical-premise
  math:thm-product-probability-has-independent-coordinate-events: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-finite-real-random-variable-and-distribution: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

For $n\ge3$, $0\le p\le1$ and $d=np\ge\log n$, let $A$ be the adjacency matrix of the loop-free $G(n,p)$ and $J$ the all-ones matrix. Set $K=1+e^{2/3}(2\sqrt2+42)$. Then
$$\mathbb E\|A-pJ\|\le K\sqrt d,\qquad\mathbb P(\|A-pJ\|\ge d^{3/4})\le Kd^{-1/4}.$$
The bounds hold for every admissible $p$ with the same constant $K$.

## Facts & Assumptions

[F1] The graph law is [[def-expander-sync-erdos-renyi]]. For an independent copy $A'$, actual-mean symmetrization gives $\mathbb E\|A-pJ\|\le\mathbb E\|A-A'\|+p$ in the Euclidean operator norm ([[prop-expander-prereq-independent-copy-norm-symmetrization]]).

[F2] The bounded symmetric expectation lemma is [[lem-author-4a6b79e2d031-bounded-symmetric-expectation]]. For a nonnegative finite-space variable $Y$ and $t>0$, $\mathbb P(Y\ge t)\le\mathbb EY/t$ ([[math:thm-markov-inequality]]).

[F3] In vertex order $1,\ldots,n$, the adjacency entries are the unordered-edge indicators off the diagonal and zero on the diagonal; the matrix is symmetric ([[math:def-adjacency-matrix-of-a-finite-simple-graph]]). We use the operator norm on $\mathbb R^n$ with $\|v\|_2=(\sum_i v_i^2)^{1/2}$, namely $\|B\|=\max_{\|v\|_2=1}\|Bv\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]). In particular $\|I\|=1$, since $Iv=v$.

[F4] The product of two finite graph probability spaces has outcome weights $w(g)w(g')$ ([[math:def-product-of-finite-probability-spaces]]). These weights normalize, and events depending on distinct graph coordinates have probabilities equal to the product of their marginal probabilities ([[math:thm-product-probability-has-independent-coordinate-events]]).

[F5] A finite probability space $(\Omega,w)$ has nonnegative outcome weights summing to one, and every subset $E\subseteq\Omega$ is an event with $\mathbb P(E)=\sum_{\omega\in E}w(\omega)$ ([[math:def-finite-probability-space-and-event]]). A real random variable is any function $Y:\Omega\to\mathbb R$, with distribution given by the probabilities of its value fibres ([[math:def-finite-real-random-variable-and-distribution]]). Its scalar expectation is $\mathbb EY=\sum_{\omega\in\Omega}Y(\omega)w(\omega)$ ([[math:def-expectation-on-a-finite-probability-space]]). This applies to the matrix entries, their squares and the matrix norms used below.

## Proof

**Given:** The graph and $d\ge\log n$ in the Statement.

**Goal:** Prove the uniform bounds.

1.1 On the product in [F4], let $A$ and $A'$ be the adjacency matrices of the first and second graph coordinates and set $X=A-A'$. The coordinate-event theorem gives independent copies with the original graph law. For any set $S$ of unordered edges and any $a_e,b_e\in\{0,1\}$, put $q_p(0)=1-p$ and $q_p(1)=p$. Independence between the graph coordinates and the edge-assignment formula within each graph give $\mathbb P(A_e=a_e,A'_e=b_e\text{ for all }e\in S)=\prod_{e\in S}q_p(a_e)q_p(b_e)$. Here $A_e$ denotes either off-diagonal entry indexed by $e$. [F1, F3, F4, F5, given]

2.1 For $x_e\in\{-1,0,1\}$, sum the joint formula of step 1.1 over the assignments with $a_e-b_e=x_e$. Distributivity of the finite sums gives $\mathbb P(X_e=x_e\text{ for all }e\in S)=\prod_{e\in S}\left(\sum_{a,b\in\{0,1\}:a-b=x_e}q_p(a)q_p(b)\right)$. Each factor is the corresponding marginal probability, equal to $p(1-p),1-2p(1-p),p(1-p)$ at $-1,0,1$, respectively. Thus the unordered-edge differences are mutually independent, also at $p=1$. [F5, step 1.1, algebra]

3.1 By [F3], $X$ is real symmetric with zero diagonal. By step 2.1 its lower-triangular entries are finite-valued, independent, symmetric in distribution about zero and bounded by one; adjoining the constant diagonal entries preserves independence. Each off-diagonal entry has mean zero and second moment, hence variance, $2p(1-p)$. Therefore the parameter of the bounded symmetric expectation lemma is $s=\sqrt{2(n-1)p(1-p)}\le\sqrt{2d}$. [F2, F3, F5, step 2.1, given]

4.1 The bounded symmetric expectation estimate and [F1] give $\mathbb E\|A-pJ\|\le p+e^{2/3}(2\sqrt{2d}+42\sqrt{\log n})\le K\sqrt d$, because $p\le1\le\sqrt d$ for $n\ge3$. This also handles $p=1$, when $X=0$ and $A-pJ=-I$. [F1, F2, F3, F5, step 3.1]

5.1 Apply Markov to $Y=\|A-pJ\|$ at $t=d^{3/4}>0$ to obtain the probability bound. Every preceding inequality is finite-$n$ and holds for all the allowed $p$, so no fixed-density asymptotic is being used uniformly without justification. [F2, F3, F5, step 4.1] ∎
