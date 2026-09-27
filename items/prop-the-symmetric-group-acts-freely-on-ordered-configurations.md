---
id: prop-the-symmetric-group-acts-freely-on-ordered-configurations
kind: proposition
title: "The symmetric group acts continuously and freely on $F_n(X)$ by permuting labels"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space, def-finite-symmetric-group-and-permutation-notation,
       lem-symmetric-group-is-a-group, def-group-action, def-free-group-action,
       thm-product-universal-property, lem-continuity-is-local-and-pastes,
       def-standard-topologies, def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1 and 1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\in\mathbb N$ and let $X$ be a topological space
([[def-ordered-configuration-space]]). Give $S_n$ the discrete topology
([[def-standard-topologies]]) and $F_n(X)$ the subspace topology of its
definition. Then

$$S_n\times F_n(X)\longrightarrow F_n(X),\qquad(\sigma,x)\longmapsto\sigma\cdot x,\qquad(\sigma\cdot x)_i:=x_{\sigma^{-1}(i-1)+1}\quad(1\leq i\leq n),$$

is a continuous left action of $S_n$ on $F_n(X)$, and it is free
([[def-free-group-action]]): $\sigma\cdot x=x$ forces $\sigma=\operatorname{id}$.
The cases $n=0$ and $n=1$ are included, $S_0$ and $S_1$ being the trivial group,
and so is the case $F_n(X)=\varnothing$, where the action is continuous and free
vacuously.

## Facts & Assumptions

**Given:** A natural number $n$, a topological space $X$, the ordered configuration space $F_n(X)$ with its label convention, and the symmetric group $S_n$ acting on the label set $\{1,\dots,n\}$ through $\kappa(i)=i-1$.

[F1] Points of $F_n(X)$ are the tuples $(x_1,\dots,x_n)\in X^n$ with $x_i\neq x_j$ for $i\neq j$, carrying the subspace topology, and the label $i$ names the coordinate of index $i-1$ under the identification $\kappa(i)=i-1$ of $\{1,\dots,n\}$ with $n=\{0,\dots,n-1\}$ ([[def-ordered-configuration-space]]).

[L2] $S_n=\operatorname{Sym}(n)$ is a group under composition, with $(\sigma\tau)(i)=\sigma(\tau(i))$ for $i\in n$, so that $(\sigma\tau)^{-1}=\tau^{-1}\sigma^{-1}$ ([[lem-symmetric-group-is-a-group]], [[def-finite-symmetric-group-and-permutation-notation]]).

[L3] A left action of a group $G$ on a set $X$ is a map $(g,x)\mapsto g\cdot x$ with $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$, and it is free when $g\cdot x=x$ implies $g=e$ ([[def-group-action]], [[def-free-group-action]]).

[L4] A map into a product is continuous if and only if each of its components is; the projections are continuous ([[thm-product-universal-property]]).

[L5] A function on a space is continuous if its restriction to each member of an open cover is continuous, and composites and restrictions of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]]).

[L6] A set with the discrete topology has every subset open, and a finite group such as $S_n$ carries the discrete topology here ([[def-standard-topologies]]).

## Proof

**Proof technique:** direct.

1.1 The formula is well defined: for $i\in\{1,\dots,n\}$ the index $\sigma^{-1}(i-1)$ lies in $n$, so $\sigma^{-1}(i-1)+1$ is a label of $\{1,\dots,n\}$, and the resulting tuple in $X^n$ has the coordinates of $x$ reindexed along the bijection $\sigma^{-1}\circ\kappa$: writing $y(k):=x_{k+1}$ for $k\in n$, its $i$-th coordinate is $y(\sigma^{-1}(\kappa(i)))$. A reindexing of pairwise distinct coordinates is again pairwise distinct, so $\sigma\cdot x\in F_n(X)$. [F1, L2, algebra]

1.2 The assignment is a left action. The identity of $S_n$ gives $(\operatorname{id}\cdot x)_i=x_{i-1+1}=x_i$, so $\operatorname{id}\cdot x=x$; and for $\sigma,\tau\in S_n$ and every label $i$,
$$((\sigma\tau)\cdot x)_i=x_{(\sigma\tau)^{-1}(i-1)+1}=x_{\tau^{-1}(\sigma^{-1}(i-1))+1}=(\tau\cdot x)_{\sigma^{-1}(i-1)+1}=(\sigma\cdot(\tau\cdot x))_i,$$
using $(\sigma\tau)^{-1}=\tau^{-1}\sigma^{-1}$ and the composition convention $(\sigma\tau)(k)=\sigma(\tau(k))$. Since coordinates determine a tuple, $(\sigma\tau)\cdot x=\sigma\cdot(\tau\cdot x)$. [F1, L2, L3, algebra]

1.3 Each slice map $x\mapsto\sigma\cdot x$ is continuous: its $i$-th component is the map $x\mapsto x_{\sigma^{-1}(i-1)+1}$, the composite of the coordinate projection $\pi_{\sigma^{-1}(i-1)}\colon X^n\to X$ with the inclusion $F_n(X)\hookrightarrow X^n$, and both are continuous; the characteristic property of the product therefore gives continuity of the slice map into $X^n$, and its values lie in $F_n(X)$, so it is continuous into $F_n(X)$. [F1, L4, L5]

1.4 The action is free. Suppose $\sigma\cdot x=x$ for some $\sigma\in S_n$ and $x\in F_n(X)$, and put $y(k):=x_{k+1}$ for $k\in n$. Comparing coordinates gives $y(\sigma^{-1}(k))=y(k)$ for every $k\in n$, and replacing $k$ by $\sigma(k)$ gives $y(k)=y(\sigma(k))$ for every $k$. The coordinates of $x$ are pairwise distinct, so $y$ is injective, hence $\sigma(k)=k$ for every $k\in n$ and $\sigma=\operatorname{id}$. Thus no nonidentity element fixes a point of $F_n(X)$. [F1, L2, L3, algebra]

2.1 The action map $S_n\times F_n(X)\to F_n(X)$ is continuous. Since $S_n$ is discrete, each $\{\sigma\}\times F_n(X)$ is open in the product and these sets cover it; the restriction of the action map to $\{\sigma\}\times F_n(X)$ is, after the evident identification with $F_n(X)$, the continuous slice map of step 1.3. Continuity is local on an open cover, so the action map is continuous. [step 1.3, L5, L6]

3.1 Steps 1.2 and 2.1 give a continuous left action and step 1.4 gives freeness in the sense of the definition, which is the assertion. [step 1.2, step 2.1, step 1.4, L3] ∎
