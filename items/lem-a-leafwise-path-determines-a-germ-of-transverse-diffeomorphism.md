---
id: lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
kind: lemma
title: "A leafwise path determines a germ of a transverse diffeomorphism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-local-transversal-to-a-regular-foliation
  - def-leafwise-path-and-leafwise-homotopy
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - def-regular-foliation-atlas
  - def-leaf-of-a-regular-foliation
  - def-flat-chart-for-a-distribution
  - def-plaque-of-a-flat-chart
  - lem-overlapping-plaques-through-a-point-have-compatible-germs
  - thm-regular-foliations-and-integrable-distributions-correspond
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-lebesgue-number-lemma
  - def-compact-space
  - def-countable-choice
  - thm-open-connected-subsets-of-rn-are-polygonally-connected
  - thm-heine-borel-rn
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - cor-interval-uncountable
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of a smooth manifold $M$, let $a$ be a leafwise path from
$x$ to $y$ ([[def-leafwise-path-and-leafwise-homotopy]]), let $T$ be a local
transversal to $F$ at $x$ and $T'$ a local transversal to $F$ at $y$
([[def-local-transversal-to-a-regular-foliation]]). Suppose
$0=t_0<\dots<t_N=1$ and foliation charts $U_1,\dots,U_N$ satisfy
$a([t_{i-1},t_i])\subseteq U_i$, and choose local transversals $T_i$ at
$a(t_i)$ for $i=1,\dots,N-1$ with $T_0=T$ and $T_N=T'$. Then the chart-wise
transports along plaques compose to a germ of a local diffeomorphism
$h_a:(T,x)\to(T',y)$, the **holonomy germ of $a$** along the displayed data
([[def-germ-of-a-local-diffeomorphism-at-a-point]]). Every leafwise path admits
such a finite chart chain, so every leafwise path together with its endpoint
transversals determines at least one such germ.

## Facts & Assumptions

**Given:** A regular foliation $F$ of $M$ with tangent distribution $D=TF$, a leafwise path $a:[0,1]\to M$ from $x$ to $y$, local transversals $T$ at $x$ and $T'$ at $y$, a subdivision $0=t_0<\dots<t_N=1$, foliation charts $U_1,\dots,U_N$ with $a([t_{i-1},t_i])\subseteq U_i$, and local transversals $T_i$ at $a(t_i)$ with $T_0=T$, $T_N=T'$.

[F1] A regular foliation has an atlas of foliation charts $\varphi=(x,y):U\to\mathbb R^k\times\mathbb R^q$ whose overlaps preserve the transverse coordinates; the connected components of the level sets $y=c$ in $U$ are the plaques of the chart, and they are integral manifolds of $D$ ([[def-regular-foliation-atlas]], [[def-plaque-of-a-flat-chart]], [[def-flat-chart-for-a-distribution]], [[def-leaf-of-a-regular-foliation]]).

[F2] The tangent distribution $D=TF$ is an integrable smooth distribution whose maximal connected integral manifolds are the leaves; in particular plaques are local integral manifolds of $D$ ([[thm-regular-foliations-and-integrable-distributions-correspond]]).

[F3] A local transversal $T$ to $F$ at $p$ is an embedded submanifold of dimension $q$ with $T_pM=D_p\oplus T_pT$ ([[def-local-transversal-to-a-regular-foliation]]).

[F4] If $dG_p$ is an isomorphism of tangent spaces, then $G$ restricts to a diffeomorphism from an open neighbourhood of $p$ onto an open neighbourhood of $G(p)$ ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F5] A connected open Euclidean slice is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[F6] $[0,1]$ is a compact metric space in its usual topology by [[thm-heine-borel-rn]]; every open cover of a compact metric space has a Lebesgue number ([[def-compact-space]], [[thm-lebesgue-number-lemma]]).

[F7] A germ of local diffeomorphisms from $(M,x)$ to $(N,y)$ is represented by a local diffeomorphism between open neighbourhoods, two representatives being equivalent when they agree near $x$ ([[def-germ-of-a-local-diffeomorphism-at-a-point]]).

[F8] Under the assumed Countable Choice, a leaf of $F$ is a maximal connected integral manifold of $D$, with its intrinsic second-countable smooth manifold structure. Every connected integral manifold contained in it factors smoothly through it ([[thm-regular-foliations-and-integrable-distributions-correspond]], [[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[F9] Every nondegenerate real interval is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 **A finite chart chain exists.** The sets $a^{-1}(U)$, over foliation charts, cover $[0,1]$. By [F6] they have a Lebesgue number $\delta>0$. Choose $N$ with $1/N<\delta$ and put $t_i=i/N$. Each parameter interval $[t_{i-1},t_i]$ has diameter $1/N$, so it is contained in some $a^{-1}(U_i)$; equivalently its image is contained in $U_i$. At an intermediate point a small slice $\{x=x(a(t_i))\}$ in a product foliation box is an embedded $q$-dimensional transversal, since its tangent space is complementary to $D$. Thus the required intermediate transversals exist. The subsequent argument applies also to any displayed admissible chain. [F1, F3, F6, given, construct]


1.2 **Transport inside one chart.** Let $p,p'$ lie in one plaque of a foliation chart $U$ with coordinates $(x,y)$, and let $S,S'$ be local transversals at those points. The restriction of $y$ to either transversal has invertible differential: its kernel is the intersection of the transversal tangent space with $D=\ker dy$, which is zero, and its source and target have dimension $q$. By [F4], shrink to neighborhoods $A\subseteq S$ and $B\subseteq S'$ on which these restrictions are diffeomorphisms with the same open image about $y(p)=y(p')$. Then $h=(y|_B)^{-1}\circ(y|_A)$ is a diffeomorphism matching transverse coordinates. It matches points in the same plaque of $U$ after shrinking $A,B$: by [F5], connect $x(p)$ to $x(p')$ by a polygonal path in the open slice at $y(p)$. Its compact image has a finite cover by product boxes contained in the chart image; sufficiently small changes of the transverse value keep this path in those boxes. Short segments in the endpoint boxes connect it to $x(u)$ and $x(h(u))$ for $u$ near $p$. Thus $u$ and $h(u)$ lie in one connected level-set component. If the leaf dimension is zero, the plaque is a singleton and the same conclusion holds in a small transverse box. [F1, F2, F3, F4, F5, construct]


2.1 **The chain composes.** To establish the single-plaque assertion, give $L$ the intrinsic structure of [F8]. Each plaque of $U_i$ contained in $L$ is open in $L$: its inclusion factors smoothly through $L$, with invertible differential since both tangent images equal $D$, so [F4] applies. Distinct plaques are disjoint, and an enumerated basis of $L$ assigns to each plaque the least index of a nonempty basic set contained in it. Thus $L$ meets at most countably many plaques of $U_i$ and has at most countably many transverse values there. Each transverse coordinate of the connected continuous image $a([t_{i-1},t_i])$ is constant: two distinct values would force a nondegenerate interval of values by connectedness, contradicting [F9]. The image is therefore a connected subset of one level set and lies in one connected component, hence in one plaque. Step 1.2 gives a transport germ $h_i:(T_{i-1},a(t_{i-1}))\to(T_i,a(t_i))$. Shrink representatives successively so every composite is defined near its source point; then $h_N\circ\cdots\circ h_1$ is a local diffeomorphism near $x$ with value $y$. Its germ is the holonomy germ along the displayed data. [F4, F7, F8, F9, step 1.2, given, construct]


3.1 **Conclusion.** By steps 1.1 and 2.1 every leafwise path with its endpoint transversals and a chosen finite chart chain produces a germ $h_a:(T,x)\to(T',y)$ of a local diffeomorphism, namely the composition of the chart-wise plaque transports. Since a finite chart chain always exists by step 1.1, every leafwise path determines at least one such germ. [F7, step 1.1, step 2.1] ∎
