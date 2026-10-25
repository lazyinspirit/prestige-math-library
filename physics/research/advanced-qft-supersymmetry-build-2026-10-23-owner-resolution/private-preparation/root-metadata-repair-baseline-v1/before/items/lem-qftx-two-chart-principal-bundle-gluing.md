---
id: lem-qftx-two-chart-principal-bundle-gluing
kind: lemma
title: Smooth principal bundle from two-chart gluing data
status: draft
origin: session
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 0
deps:
  - def-smooth-principal-g-bundle
  - def-lie-group
dependency_roles:
  def-smooth-principal-g-bundle: mathematical-premise
  def-lie-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
      locator: "Lecture 1, §1.1.2, equations (1.9)–(1.11), printed pp. 9–10: the two-gauge-patch charge-one SU(2) instanton construction."
verification:
  precheck: pass
---

## Statement

Let $X$ be a Hausdorff, second-countable smooth manifold covered by open sets $U$ and $V$. Let $G$ be a finite-dimensional, Hausdorff, second-countable real Lie group, and let $\tau:U\cap V\to G$ be smooth. On the disjoint union $Q=(U\times G)_U\sqcup(V\times G)_V$, impose the equivalence relation generated, for $x\in U\cap V$ and $h\in G$, by

$$ (x,h)_V\sim (x,\tau(x)h)_U. $$

Let $P:=Q/{\sim}$ with the quotient topology, write $[x,h]_U$ and $[x,h]_V$ for its classes, and define $\pi:P\to X$ by $\pi([x,h]_U)=\pi([x,h]_V)=x$. Define the right action by $[x,h]_i\cdot k=[x,hk]_i$ for $k\in G$ and $i\in\{U,V\}$. Then $P$ is a smooth right principal $G$-bundle over $X$. Its local sections $s_U(x)=[x,e]_U$ and $s_V(x)=[x,e]_V$ satisfy $s_V(x)=s_U(x)\tau(x)$ on $U\cap V$.

## Statement references

[Tong, Lecture 1 §1.1.2, equations (1.9)–(1.11)](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

## Facts & Assumptions

**Given:** The Hausdorff, second-countable smooth manifold $X$, its open cover $U,V$, the finite-dimensional Hausdorff, second-countable real Lie group $G$, and the smooth transition map $\tau$.

[A1] The spaces $U$ and $V$ are open subsets of $X$, cover $X$, and inherit its Hausdorff, second-countable smooth-manifold structure; $\tau$ is smooth on their overlap.

[F1] A smooth right principal $G$-bundle has an underlying topological right principal bundle and a smooth projection and right action, with equivariant diffeomorphisms from the inverse images of base charts to product charts. [[def-smooth-principal-g-bundle]]

[F2] Multiplication and inversion in a finite-dimensional real Lie group are smooth. [[def-lie-group]]

## Proof

1.1 The generated equivalence classes contain one representative from each chart copy exactly when the base point is in $U\cap V$: the transition $(x,h)_V\mapsto(x,\tau(x)h)_U$ is bijective there, with inverse $(x,k)_U\mapsto(x,\tau(x)^{-1}k)_V$ by [F2]. Thus the canonical maps $j_U:U\times G\to P$ and $j_V:V\times G\to P$ are injective. For every open $W\subseteq U\times G$, the preimage of $j_U(W)$ in $Q$ is the open subset $W_U$ together with the inverse transition image of $W|_{(U\cap V)\times G}$ in the $V$ copy; hence $j_U(W)$ is open in the quotient. The same argument applies to $j_V$, so these maps are open embeddings and their images give product charts covering $P$. On their overlap $j_U^{-1}j_V(x,h)=(x,\tau(x)h)$, a diffeomorphism with inverse $(x,k)\mapsto(x,\tau(x)^{-1}k)$ by [F2]. Therefore these product charts define a smooth atlas on $P$. [given, A1, F2, algebra]

2.1 The induced projection is continuous because the two product projections agree on the equivalence relation. If two points of $P$ project to distinct points of $X$, disjoint base neighborhoods separate them since $X$ is Hausdorff. If they project to the same $x$, choose $U$ or $V$ containing $x$; both points lie in that product chart, where distinct group coordinates have disjoint neighborhoods because the chart is Hausdorff. Hence $P$ is Hausdorff. Each product chart is second-countable, and the union of countable bases from the two charts is a countable base for $P$. The coordinate changes are smooth by step 1.1, so the resulting smooth manifold structure has the required separation and countability properties. [given, A1, step 1.1]

3.1 The formula $[x,h]_i\cdot k=[x,hk]_i$ is well-defined because $(x,\tau(x)h)_U\cdot k=(x,\tau(x)hk)_U\sim(x,hk)_V$; associativity and the identity law follow from the group law. In each chart it is the smooth product action by [F2], and it is free and transitive on each fibre because right multiplication on the $G$ coordinate has those properties. By steps 1.1 and 2.1, the charts are smooth product charts and $P$ is Hausdorff and second-countable. The map $\pi$ is smooth and locally the product projection, so [F1] applies and $P\to X$ is a smooth right principal $G$-bundle. The sections $s_U,s_V$ are smooth in these charts, and $[x,e]_V=[x,\tau(x)]_U$ gives $s_V=s_U\tau$. [given, A1, F1, F2, step 1.1, step 2.1, algebra] ∎
