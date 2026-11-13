---
id: lem-author-fcf1e9b45588-mirror-reflection-bijection
kind: lemma
title: The hyperplanes are in bijection with Coxeter reflections
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-fcf1e9b45588-invariant-metric-essentiality
  - lem-author-fcf1e9b45588-chamber-wall-rank
  - math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - math:def-injection-surjection-bijection
  - math:def-finite-cardinality
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - math:lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:lem-product-topology-on-rn
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
dependency_roles:
  lem-author-fcf1e9b45588-invariant-metric-essentiality: mathematical-premise
  lem-author-fcf1e9b45588-chamber-wall-rank: mathematical-premise
  math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:def-arbitrary-rank-coxeter-system-and-bruhat-order: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
  math:lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  math:lem-product-topology-on-rn: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
formulation_deps:
  - lem-author-fcf1e9b45588-invariant-metric-essentiality
  - lem-author-fcf1e9b45588-chamber-wall-rank
  - math:def-injection-surjection-bijection
  - math:def-finite-cardinality
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
argument_deps:
  - lem-author-fcf1e9b45588-invariant-metric-essentiality
  - lem-author-fcf1e9b45588-chamber-wall-rank
  - math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - math:def-injection-surjection-bijection
  - math:def-finite-cardinality
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - math:lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:lem-product-topology-on-rn
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
---

## Statement

Let $W\leq\mathrm{GL}(E)$ be an essential finite real reflection group and $(W,S)$ the chamber-wall Coxeter system of [[lem-author-fcf1e9b45588-chamber-wall-rank]]. Put $T=\{wsw^{-1}:w\in W,\ s\in S\}$. Then $T$ is exactly the set of linear reflections in $W$, and $t\mapsto\operatorname{Fix}(t)$ bijects $T$ with $\mathcal A(W)$. In particular $|\mathcal A(W)|=|T|$.

## Facts & Assumptions
[F1] $W$ acts transitively on chambers, and $S$ consists precisely of the reflections in the walls of a fixed chamber ([[lem-author-fcf1e9b45588-chamber-wall-rank]]).

[F2] Distinct orthogonal reflections have distinct hyperplanes, and conjugation by $w$ takes the fixed hyperplane of $r$ to $w\operatorname{Fix}(r)$ ([[lem-author-fcf1e9b45588-invariant-metric-essentiality]] and the fixed-space equation).

[F3] No finite family of proper linear subspaces covers a finite-dimensional vector space over an infinite field ([[math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[F4] A function is injective when equal outputs force equal inputs, surjective when every target has a preimage, and bijective when both conditions hold ([[math:def-injection-surjection-bijection]]).

[F5] If $A$ is finite and $f:A\to B$ is a bijection, then $B$ is finite and $|B|=|A|$ ([[math:def-finite-cardinality]], Definition, consequence (c)).

[F6] A Coxeter system $(W,S)$ is given by a generating set $S$ and the presentation $W=\langle S\mid s^2=1,\ (st)^{m(s,t)}=1\text{ for }s\ne t,\ m(s,t)<\infty\rangle$, where $m$ is symmetric, $m(s,s)=1$ and $m(s,t)\in\{2,3,\ldots\}\cup\{\infty\}$ for $s\ne t$ ([[math:def-arbitrary-rank-coxeter-system-and-bruhat-order]]).

[F7] Use the Euclidean topology, convexity, connected-component chambers, closure, affine hull and affine dimension of [[def-arrangement-topology-interface-artin-tits-prerequisites]]. The wall-hyperplane convention is that of [F1].

[F8] Every real linear map $L:\mathbb R^m\to\mathbb R^k$ has a constant $K_0\geq0$ such that $\|Lh\|_2\leq K_0\|h\|_2$ for every $h$. [[math:lem-euclidean-linear-maps-have-matrices-and-are-bounded]]

[F9] For $n\geq1$, every convex subset of $\mathbb R^n$ with the product topology is connected, every Euclidean ball is convex, and the product topology equals the Euclidean $d_2$ topology. [[math:ex-convex-subsets-of-rn-are-path-connected]], claims 1–2; [[math:lem-product-topology-on-rn]], claim 3.

[F10] Connectedness excludes a partition into two disjoint nonempty relatively open subsets. The connected component of a point is the largest connected subset containing that point. [[math:def-connected-space]] [[math:def-connected-component-and-quasicomponent]]

## Proof
**Given:** The arrangement and uniqueness of orthogonal reflections of [[lem-author-fcf1e9b45588-invariant-metric-essentiality]] and the chamber action of [[lem-author-fcf1e9b45588-chamber-wall-rank]]. **Goal:** Identify all reflecting hyperplanes with the abstract Coxeter reflections $T$.


**Proof technique:** direct.

1.1 Each conjugate $wsw^{-1}$ is an involution with fixed hyperplane $w\operatorname{Fix}(s)$, hence is a reflection. Conversely, let $r\in W$ be a reflection with hyperplane $H$. The family $\{H\cap K:K\in\mathcal A(W),\ K\ne H\}$ is finite because $W$ is finite. Each member is a proper subspace of $H$, since distinct hyperplanes have equal dimension and cannot contain one another. Apply [F3] in the finite-dimensional real vector space $H$ to choose $x\in H$ outside every other arrangement hyperplane. The existence of the hyperplane $H$ implies $n:=\dim E\geq1$. [given, F1, F2, F3, F7, choose, algebra]

2.1 Use the coordinate isomorphism $c:E\to\mathbb R^n$ and metric of [F7]. For each of the finitely many $K\in\mathcal A(W)$ choose $u_K\notin K$. Codimension one gives a unique decomposition $z=k+t u_K$ with $k\in K$; define $\beta_K(z)=t$. This is a nonzero real linear functional with kernel $K$. Applying [F8] to $\beta_K\circ c^{-1}$ gives a constant $C_K>0$ such that $|\beta_K(z)-\beta_K(z_0)|\leq C_Kd_E(z,z_0)$. Thus at a point where $\beta_K$ is nonzero, a ball of radius $|\beta_K(z)|/(2C_K)$ preserves its strict sign. The positive and negative sign sets are open, so $K$ and each closed sign half-space are closed. The same inequality, with radius $\varepsilon/C_K$, proves continuity of $\beta_K$. Only finitely many choices were made. [F7, F8, step 1.1, choose, construct, algebra]

3.1 A convex subset $Z\subseteq E$ has convex image $c(Z)$, connected in the Euclidean topology by [F9], since $n\geq1$. The coordinate metric in [F7] transports relative open sets in both directions; a separation of $Z$ would therefore give a separation of $c(Z)$, contrary to [F10]. Thus convex subsets of $E$ are connected, and its metric balls are convex by [F9]. Choose $\rho>0$ smaller than every $|\beta_K(x)|/(2C_K)$ for $K\ne H$, taking $\rho=1$ if that family is empty. The ball $B=B_E(x,\rho)$ then misses every $K\ne H$ by step 2.1. Its two strict $\beta_H$ half-balls are nonempty: $x\pm t u_H$ lie in them for sufficiently small $t>0$. Each half-ball is convex, hence connected. Fix one, $B_+$, and $y\in B_+$. The component $D$ of the arrangement complement containing $y$ contains $B_+$ by [F10]. For $z\in B\cap H$ and $0<t\leq1$, the point $(1-t)z+ty$ belongs to $B_+$ by convexity and the strict sign of $\beta_H(y)$; its distance to $z$ is $t d_E(y,z)$. Hence every neighbourhood of $z$ meets $B_+$, giving $B\cap H\subseteq\overline D$. [F7, F9, F10, step 1.1, step 2.1, choose, algebra]

4.1 Orient each $\beta_K$ from step 2.1 by a sign to obtain $\alpha_K(y)>0$. Its sign is positive throughout $D$: otherwise the two relatively open strict sign sets would separate $D$, since $D$ misses $K$, contradicting [F10]. Thus $D\subseteq P:=\{z\in E:\alpha_K(z)>0\text{ for every }K\in\mathcal A(W)\}$. Conversely, $P$ is convex, hence connected by step 3.1, lies in the arrangement complement and contains $y$. The component property in [F10] gives $P\subseteq D$, so $D=P$. It is open as a finite intersection of strict sign sets. Put $Q=\{z\in E:\alpha_K(z)\geq0\text{ for every }K\in\mathcal A(W)\}$. The closed sign half-spaces from step 2.1 show that $Q$ is closed and contains $\overline D$. For $z\in Q$ and $0<t\leq1$, every $\alpha_K((1-t)z+ty)$ is positive, so $(1-t)z+ty\in D$. Its distance to $z$ is $t d_E(y,z)$, proving $z\in\overline D$. Therefore $\overline D=Q$, a closed convex cone, full-dimensional because it contains the nonempty open set $D$. [step 2.1, step 3.1, F7, F10, algebra]

5.1 Put $F=Q\cap H$. A face of a convex set $Q$ means a convex subset $F$ such that, whenever $u,v\in Q$, $0<t<1$ and $(1-t)u+tv\in F$, both $u$ and $v$ belong to $F$. Here $F$ is convex, and $\alpha_H\geq0$ on $Q$. If $(1-t)u+tv\in F$, then $0=(1-t)\alpha_H(u)+t\alpha_H(v)$ forces both nonnegative terms to vanish; hence $u,v\in H$ and therefore $u,v\in F$. This proves that $F$ is a face. Moreover, $F\subseteq H$ and step 3.1 gives $B\cap H\subseteq F$. This relative open ball has affine hull $H$ (its point differences span $H$), so $\dim\operatorname{aff}(F)=\dim H=\dim E-1$. Thus $F$ is a codimension-one face of the full-dimensional $\overline D$, and $H$ is a wall hyperplane in the convention of [F1]. [step 3.1, step 4.1, F1, F7, algebra]

6.1 Choose $w$ with $D=wC$ by [F1]. Applying [F8] in coordinates to $w$ and $w^{-1}$ makes both continuous. Thus $w^{-1}\overline D=\overline C$. Invertible linear maps preserve convex combinations and affine dimension, so the face in step 5.1 pulls back to a codimension-one face of $\overline C$. Hence $w^{-1}H$ is a wall hyperplane of $C$, and its reflection is some $s\in S$. By uniqueness in [F2], $r=wsw^{-1}$. This proves equality of the two reflection sets. Surjectivity onto $\mathcal A(W)$ holds by its definition and injectivity by [F2], so this map is a bijection by [F4]. Since $T\subseteq W$ is finite, [F5] gives $|\mathcal A(W)|=|T|$. [step 5.1, F1, F2, F4, F5, F7, F8, algebra] ∎
