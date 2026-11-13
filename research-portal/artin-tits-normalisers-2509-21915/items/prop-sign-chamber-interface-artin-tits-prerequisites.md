---
id: prop-sign-chamber-interface-artin-tits-prerequisites
kind: proposition
title: Sign cells and local finite-arrangement reductions
status: published
domain: mathematics
origin: pipeline
deps:
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - math:def-algebraic-dual-and-linear-functional
  - math:def-convex-subset-of-euclidean-space
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:lem-euclidean-linear-maps-have-matrices-and-are-bounded
dependency_roles:
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
  math:def-algebraic-dual-and-linear-functional: mathematical-premise
  math:def-convex-subset-of-euclidean-space: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  math:lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $E$ be a finite-dimensional real vector space with its Euclidean topology, and let $T\subseteq E$ be open and convex. Let $\mathcal A$ be a set of distinct linear hyperplanes, each meeting $T$, locally finite in $T$: each point of $T$ has a neighbourhood meeting only finitely many members. For each $H\in\mathcal A$, choose a nonzero linear functional $a_H:E\to\mathbb R$ with kernel $H$. A chamber is a connected component of $T\setminus\bigcup_{H\in\mathcal A}H$.

For any assignment $\epsilon_H\in\{1,-1\}$, the corresponding strict sign cell is $C_\epsilon=\{x\in T:\epsilon_Ha_H(x)>0\text{ for every }H\in\mathcal A\}$. Every nonempty sign cell is a convex chamber, and every chamber is a sign cell.

For a chamber $C=C_\epsilon$ and a point $p\in\overline C\cap T$, there is an open convex neighbourhood $U$ of $p$ contained in $T$ that meets $C$ and only finitely many hyperplanes. For every such $U$, writing $\mathcal A_U=\{H\in\mathcal A:H\cap U\ne\varnothing\}$, one has $\overline C\cap U=\{x\in U:\epsilon_Ha_H(x)\geq0\text{ for all }H\in\mathcal A_U\}$. Here $\overline C$ denotes closure in $E$. In particular, if a wall is an intersection $\overline C\cap H_0$ of affine dimension $\dim E-1$ for $H_0\in\mathcal A$, its intersection with $U$ is described by these finitely many weak inequalities together with $a_{H_0}=0$; it is empty if $H_0$ does not meet $U$. No neighbourhood assertion at a boundary point outside $T$ is made.

## Statement references

[[def-arrangement-topology-interface-artin-tits-prerequisites]]

[[math:def-algebraic-dual-and-linear-functional]]

[[math:def-convex-subset-of-euclidean-space]]

[[math:def-connected-space]]

[[math:def-connected-component-and-quasicomponent]]

## Facts & Assumptions

[F1] The arrangement terminology, chamber as a connected component, closure in $E$, and wall as the specified hyperplane intersection are defined in [[def-arrangement-topology-interface-artin-tits-prerequisites]].

[F2] A defining functional is linear, so $a_H((1-t)x+ty)=(1-t)a_H(x)+ta_H(y)$; see [[math:def-algebraic-dual-and-linear-functional]]. A set is convex when it contains every segment between its points, as in [[math:def-convex-subset-of-euclidean-space]].

[F3] Connectedness means absence of a separation into two nonempty disjoint relatively open sets; singletons are connected, as in [[math:def-connected-space]]. The connected component of a point is the largest connected subset containing that point, as established in [[math:def-connected-component-and-quasicomponent]].

[F4] Every convex subset of $\mathbb R^n$ for $n\geq1$, with its usual topology, is connected, by claim 1 of [[math:ex-convex-subsets-of-rn-are-path-connected]].

[F5] For a linear map $L:\mathbb R^m\to\mathbb R^k$, there is a constant $K\geq0$ such that $\|Lh\|_2\leq K\|h\|_2$ for every $h$, by [[math:lem-euclidean-linear-maps-have-matrices-and-are-bounded]].

## Proof
**Given:** The space, open convex domain, locally finite hyperplanes, defining functionals and signs in the statement.

**Goal:** Identify the chambers with the nonempty sign cells and establish the stated finite local description.


1.1 Write $n=\dim E$ and let $\phi:E\to\mathbb R^n$ be the chosen linear coordinates transporting the Euclidean topology, as in [F1]. If $n\geq1$, apply [F5] to the linear map $a_H\circ\phi^{-1}:\mathbb R^n\to\mathbb R$ to obtain $|a_H(x)-a_H(y)|\leq K_H\|\phi(x)-\phi(y)\|_2$. For each $\eta>0$, taking $\delta=\eta/(K_H+1)$ shows that coordinate distance less than $\delta$ implies $|a_H(x)-a_H(y)|<\eta$; thus each defining functional is continuous. Also, a separation of a convex subset of $E$ would transport under $\phi$ to a separation of its convex coordinate image, contrary to [F4]; hence every convex subset of $E$ is connected. If $n=0$, every subset of $E=\{0\}$ is empty or a singleton and is connected by [F3]; there are no nonzero linear functionals and no linear hyperplanes, so the functional assertions are vacuous. These arguments establish the needed continuity and connectedness in all dimensions. [F1, F2, F3, F4, F5, given]

2.1 For two points in a sign cell, the linearity in [F2] makes every prescribed signed value strictly positive along their connecting segment; convexity of $T$ keeps that segment in $T$. Thus the cell is convex and is connected by step 1.1. Conversely, on any connected subset of the arrangement complement, each $a_H$ has a constant strict sign: by step 1.1 its positive and negative inverse images are disjoint relatively open sets whose union is the subset, and if both were nonempty they would give a separation forbidden by [F3]. Each nonempty sign cell is therefore a connected subset containing every connected subset of the complement that meets it. For a point in the cell, its component contains the cell and is contained in it by [F3] and this constant-sign property. Thus the cell is a chamber, and every chamber is obtained in this way. [F1, F2, F3, step 1.1, given]

3.1 Let $p\in\overline C\cap T$. Local finiteness and openness of $T$ allow an open coordinate ball $U$ around $p$ contained in $T$ and meeting only finitely many hyperplanes. It is convex, and it meets $C$ because $p\in\overline C$. Now let $U$ be any open convex neighbourhood with these properties and choose $q\in C\cap U$. If $H$ misses $U$, the continuous function $a_H$ has constant nonzero sign on the connected set $U$, so its sign there is $\epsilon_H$. If $x\in\overline C\cap U$, continuity gives $\epsilon_Ha_H(x)\geq0$ for each $H\in\mathcal A_U$. Conversely, suppose $x\in U$ satisfies those finitely many weak inequalities. The preceding observation gives strict signed positivity at $x$ for every other hyperplane. For $0<t\leq1$, the point $x_t=(1-t)x+tq$ lies in $U\subseteq T$, and linearity gives $\epsilon_Ha_H(x_t)>0$ for every $H\in\mathcal A$, including those whose signed value at $x$ is zero. Hence $x_t\in C$ by step 2.1, and $x_t\to x$, proving the closure formula. Intersecting that formula with $H_0=\ker a_{H_0}$ gives the wall description; if $H_0$ misses $U$ the intersection is empty. This proves the claims within $T$. [F1, F2, step 1.1, step 2.1, given] ∎
