---
id: lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections
kind: lemma
title: "Continuous local sections for disk point evaluation"
status: published
origin: pipeline
landmark: true
deps: [def-unordered-configuration-space,
       def-ordered-configuration-space,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       def-covering-map-and-evenly-covered-neighbourhoods,
       thm-banach-fixed-point,
       thm-euclidean-space-complete,
       prop-compact-open-is-uniform-on-a-compact-metric-domain,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $D^2\subseteq\mathbb R^2$ be the closed unit disc, let $Q_n=(q_1,\dots,q_n)$
be the fixed base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], and let

$$\operatorname{ev}:\operatorname{Homeo}^+(D^2,\partial D^2)\longrightarrow C_n(\operatorname{int}D^2),\qquad \operatorname{ev}(h):=[h(q_1),\dots,h(q_n)],$$

be the evaluation map into the unordered configuration space
([[def-unordered-configuration-space]]), with the compact-open topology on the
homeomorphism group. Then:

1. $\operatorname{ev}$ is surjective for every $n\ge0$, including $n=0$;
2. every $\xi\in C_n(\operatorname{int}D^2)$ has an open neighbourhood $U$ and a
   continuous map $s:U\to\operatorname{Homeo}^+(D^2,\partial D^2)$ with
   $\operatorname{ev}\circ s=\operatorname{id}_U$.

No choice principle is used.

## Facts & Assumptions

**Given:** The closed unit disc $D^2$, the fixed pairwise distinct base points $q_1,\dots,q_n\in\operatorname{int}D^2$, and the evaluation map $\operatorname{ev}$.

[L1] If $(X,d)$ is a nonempty complete metric space and $f:X\to X$ satisfies $d(f(u),f(v))\le q\,d(u,v)$ for all $u,v$ with $0\le q<1$, then $f$ has exactly one fixed point ([[thm-banach-fixed-point]]).

[L2] For every $m\ge1$ the Euclidean space $(\mathbb R^m,d_2)$ is a complete metric space ([[thm-euclidean-space-complete]]).

[L3] On $C(X,Y)$ with $X$ a nonempty compact metric space and $Y$ a metric space the compact-open topology equals the topology of uniform convergence ([[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[L4] For a nonempty connected Hausdorff topological $d$-manifold $M$ with $d\ge2$ the quotient map $p:F_n(M)\to C_n(M)$ is a covering map whose fibres have $n!$ elements, and both $F_n(M)$ and $C_n(M)$ are path-connected ([[thm-ordered-configurations-cover-unordered-configurations-regularly]]).

[L5] A covering map has an evenly covered neighbourhood of every point of its base, and each sheet of such a neighbourhood maps homeomorphically onto it ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[L6] $F_n(X)$ is the subspace of $X^n$ of tuples with pairwise distinct coordinates, and $C_n(X)=F_n(X)/S_n$ with $[x]:=S_n\cdot x$ (an orbit of ordered tuples) ([[def-ordered-configuration-space]], [[def-unordered-configuration-space]]).

[L7] Elements of $C_n(X)$ correspond bijectively to the $n$-element subsets of $X$, the inverse passing from a subset to the orbit of one of its enumerations ([[def-unordered-configuration-space]]).

## Proof

**Proof technique:** direct.

If $n=0$, the base $C_0(\operatorname{int}D^2)$ is a point and the constant section at the identity proves both claims. Assume $n\ge1$ for the remaining steps.

1.1 *Small displacements give boundary-fixed homeomorphisms.* Fix an ordered configuration $y=(y_1,\dots,y_n)\in F_n(\operatorname{int}D^2)$. Put $d:=1-\max_i\lVert y_i\rVert_2>0$, let $\eta:=\min_{i<j}\lVert y_i-y_j\rVert_2$ if $n\ge2$ and $\eta:=1$ if $n=1$, and set $\rho:=\min(\eta,d)/3>0$. Choose Lipschitz functions $\chi_i:\mathbb R^2\to[0,1]$ with $\chi_i=1$ on a neighbourhood of $y_i$, $\operatorname{supp}\chi_i$ contained in the open ball of radius $\rho$ about $y_i$, and a common Lipschitz constant $C/\rho$; the supports are pairwise disjoint and lie in $\operatorname{int}D^2$, the latter because $\rho\le d/3$ leaves a positive margin to the boundary. For $z=(z_1,\dots,z_n)$ with $v_i:=z_i-y_i$ satisfying $\sum_i\lVert v_i\rVert_2<\rho/(2C)$, put $h_{y,z}(w):=w+\sum_i\chi_i(w)v_i$. Then the displacement $\varphi:=h_{y,z}-\operatorname{id}$ is Lipschitz with constant at most $\sum_i C\lVert v_i\rVert_2/\rho<1/2<1$, so for every $w'\in\mathbb R^2$ the map $w\mapsto w'-\varphi(w)$ is a contraction of the complete space $\mathbb R^2$ and [L1] and [L2] give it a unique fixed point; the resulting inverse is Lipschitz, since $\lVert h_{y,z}(u)-h_{y,z}(v)\rVert_2\ge(1-\operatorname{Lip}(\varphi))\lVert u-v\rVert_2$, and is a two-sided inverse of $h_{y,z}$, and it shows simultaneously that $h_{y,z}$ is bijective with continuous inverse, hence a homeomorphism. Since $h_{y,z}$ is the identity outside $\operatorname{int}D^2$, bijectivity prevents an interior point from mapping outside the disc; thus it restricts to a homeomorphism of $D^2$ and fixes $\partial D^2$ pointwise, and $h_{y,z}(y_i)=y_i+v_i=z_i$ because $\chi_i=1$ near $y_i$ and $\chi_j(y_i)=0$ for $j\ne i$. Moreover, if $z^{(k)}\to z$ with all members admissible, then $\sup_w\lVert h_{y,z^{(k)}}(w)-h_{y,z}(w)\rVert_2\le\sum_i\lVert v_i^{(k)}-v_i\rVert_2\to0$, so $z\mapsto h_{y,z}$ is continuous for the topology of uniform convergence, which on $D^2$ is the compact-open topology by [L3]. [L1, L2, L3]

1.2 *Local order of an unordered configuration.* By [L4] the quotient $p:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$ is a covering map with path-connected total space and base. Given $\xi\in C_n(\operatorname{int}D^2)$ and a chosen preimage $x\in F_n(\operatorname{int}D^2)$ with $[x]=\xi$, [L5] supplies an evenly covered open $U\ni\xi$ and the sheet through $x$ gives a continuous local section $\sigma:U\to F_n(\operatorname{int}D^2)$ with $\sigma(\xi)=x$ and $p\circ\sigma=\operatorname{id}_U$; the passage from an unordered configuration to one of its enumerations is a single selection from a nonempty set and costs no choice. [L4, L5, L6]

2.1 *Evaluation is surjective.* Let $\xi\in C_n(\operatorname{int}D^2)$ and by [L7] choose $x=(x_1,\dots,x_n)\in F_n(\operatorname{int}D^2)$ with $[x]=\xi$. By the path-connectedness in [L4] and the compactness of $[0,1]$ choose a path $\beta:[0,1]\to F_n(\operatorname{int}D^2)$ with $\beta(0)=Q_n$ and $\beta(1)=x$ together with a finite partition $0=t_0<t_1<\dots<t_m=1$ such that for every $k$ the configurations $y:=\beta(t_{k-1})$, $z:=\beta(t_k)$ satisfy the admissibility bound of step 1.1; this partition exists because the configurations along a path stay at a positive distance from one another and from the boundary and both quantities are uniformly continuous on the compact interval. Put $g:=h_{\beta(t_{m-1}),\beta(t_m)}\circ\cdots\circ h_{\beta(t_0),\beta(t_1)}$; by step 1.1 each factor is a homeomorphism of $D^2$ fixing $\partial D^2$, so $g$ is one too, and $g(q_i)=x_i$ for every $i$. Hence $\operatorname{ev}(g)=[x]=\xi$, which proves surjectivity. [L4, L6, L7, step 1.1]

3.1 *Continuous local sections.* Fix $\xi^0\in C_n(\operatorname{int}D^2)$ and, using step 2.1, choose $g^0\in\operatorname{Homeo}^+(D^2,\partial D^2)$ with $\operatorname{ev}(g^0)=\xi^0$; write $x^0:=(g^0(q_1),\dots,g^0(q_n))\in F_n(\operatorname{int}D^2)$, so $[x^0]=\xi^0$. Let $U$ and $\sigma$ be the evenly covered neighbourhood and local section of step 1.2 through $x^0$, so that $\sigma(\xi^0)=x^0$, and set $$s(\xi):=h_{x^0,\sigma(\xi)}\circ g^0\qquad(\xi\in U).$$ Shrink $U$ to the open neighbourhood on which the displacement bound of step 1.1 holds; this is possible because $\sigma$ is continuous and $\sigma(\xi^0)=x^0$. Then $s$ is well defined on all of this smaller $U$; it is continuous as a composite of the continuous maps $\sigma$, $z\mapsto h_{x^0,z}$ and right composition with the fixed homeomorphism $g^0$. Finally $\operatorname{ev}(s(\xi))=[\sigma(\xi)]=\xi$ by step 1.1 and $p\circ\sigma=\operatorname{id}_U$, so $s$ is the required continuous local section.  [L3, L5, L6, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The local point-motion formula is the only metric input: a sufficiently small displacement supported in disjoint discs is a bounded perturbation of the identity of Lipschitz constant below one, and Banach's theorem turns it into a homeomorphism of the disc fixing the boundary.
- The supports lie strictly inside $\operatorname{int}D^2$, so no step moves the boundary circle; this is what makes every constructed map an element of $\operatorname{Homeo}^+(D^2,\partial D^2)$.
- The $n=0$ case is the constant section handled before step 1.1. For $n=1$, pairwise separation is vacuous and the auxiliary value $\eta=1$ keeps $\rho$ positive.
