---
title: A bilinear centered-adjacency estimate without regularity
status: draft
research_item: prop-expander-prereq-centered-bilinear-estimate
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)


## Statement

Let $V$ be a finite set of $n>0$ vertices, and let $A=(A_{xy})_{x,y\in V}$ be a complex self-adjoint matrix, meaning $A_{xy}=\overline{A_{yx}}$. Let $J$ be the matrix whose entries are all $1$, let $d^*>0$ and $\alpha\geq 0$, and put $B=A-(d^*/n)J$. Use the vertex norm $\|f\|_2=(\sum_{x\in V}|f(x)|^2)^{1/2}$ and the induced operator norm $\|B\|$. If $\|B\|\leq\alpha d^*$, then for all $f,g\in\mathbb C^V$,

$$|f^*Bg|\leq\alpha d^*\|f\|_2\|g\|_2.$$

For subsets $X,Y\subseteq V$, define the ordered matrix-entry sum $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$. Then

$$|e(X,Y)-(d^*/n)|X||Y||\leq\alpha d^*\sqrt{|X||Y|}.$$

For the graph interpretation, let $A$ be the symmetric binary adjacency matrix of a finite undirected graph on $V$ with possible self-loops: $A_{xy}=1$ exactly when $x$ and $y$ are joined by an edge, including $x=y$ for a loop, and $A_{xy}=0$ otherwise. Then $e(X,Y)$ counts ordered adjacency entries, including each diagonal entry once. The estimate permits $X$ and $Y$ to overlap and permits loop entries. It does not assert a multiplicative lower bound for every pair of small disjoint sets.

## Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

## Facts & Assumptions

**Given:** The set $V$, matrices $A,J,B$, parameters $d^*,\alpha$, and vectors and subsets are as in the statement, and $\|B\|\leq\alpha d^*$.

[F1] The vertex pairing is $\langle u,v\rangle=\sum_{x\in V}\overline{u(x)}v(x)$, and matrix action is $(Bv)(x)=\sum_{y\in V}B_{xy}v(y)$; its norm is $\|v\|_2$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] For a linear map on this finite-dimensional inner-product space, the operator norm is the maximum of $\|Bv\|_2$ over unit vectors ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

[F3] Cauchy–Schwarz gives $|\langle u,v\rangle|\leq\|u\|_2\|v\|_2$; the vertex-space convention transfers the cited linear-first version by conjugation ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F4] A finite symmetric nonnegative matrix defines a network whose positive off-diagonal entries specify support edges and whose diagonal entries are loop weights ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)). In the binary graph case specified in the statement, an entry equal to $1$ records the corresponding edge or loop.

## Proof

**Given:** The hypotheses and notation of the statement.

**Goal:** Prove the bilinear estimate and its ordered-entry specialization.

**Proof technique:** direct.

1.1 If $g=0$, then $Bg=0$ and $\|Bg\|_2\leq\|B\|\|g\|_2$. Otherwise $g/\|g\|_2$ is a unit vector, so the definition of operator norm and homogeneity give $\|Bg\|_2=\|g\|_2\|B(g/\|g\|_2)\|_2\leq\|B\|\|g\|_2$. [F1, F2]

1.2 Let $1_X$ and $1_Y$ be the indicator functions, equal to $1$ on their respective sets and $0$ elsewhere. Directly summing the entries gives $1_X^*A1_Y=e(X,Y)$ and $1_X^*J1_Y=|X||Y|$; also $\|1_X\|_2=\sqrt{|X|}$ and $\|1_Y\|_2=\sqrt{|Y|}$. These identities include diagonal entries and do not require disjointness. In the binary graph case, each summand $A_{xy}$ is the indicator of the corresponding adjacency entry, and a loop contributes once when its vertex lies in $X\cap Y$. [given, F1, F4, algebra]

2.1 The matrix pairing identity gives $f^*Bg=\langle f,Bg\rangle$. Applying Cauchy–Schwarz and step 1.1, then the assumed norm bound, yields $|f^*Bg|\leq\|f\|_2\|Bg\|_2\leq\alpha d^*\|f\|_2\|g\|_2$. [given, F1, F3, step 1.1]

3.1 Substitute the indicators into step 2.1 and use $B=A-(d^*/n)J$ and step 1.2 to obtain the stated ordered-entry bound. No regularity hypothesis was used, and the additive estimate alone makes no asserted multiplicative lower bound for small disjoint sets. [given, step 2.1, step 1.2, algebra] ∎
