---
id: lem-finite-simplicial-open-stars-have-explicit-conical-product-charts
kind: lemma
title: Finite simplicial open stars have explicit conical product charts
status: draft
origin: session
deps: [def-geometric-realization-of-an-abstract-simplicial-complex, lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology, prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, simplicial and stratified neighborhoods
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Let $K$ be a finite simplicial complex and let $\sigma$ be a nonempty simplex. Let $\operatorname{lk}_K\sigma$ be the subcomplex of simplices $\tau$ disjoint from $\sigma$ such that $\sigma\cup\tau\in K$. Define the open star to consist of points whose coordinates at every vertex of $\sigma$ are positive. Then
$$\operatorname{st}_K(\sigma)\cong\operatorname{relint}|\sigma|\times c_{<1}(|\operatorname{lk}_K\sigma|),$$
where $c_{<1}(L)=(L\times[0,1))/(L\times\{0\})$, with the quotient topology, and the cone on the empty space means a single apex. The homeomorphism takes each simplex interior containing $\sigma$ to the product with the corresponding link-simplex interior and positive radial coordinate; the simplex $\sigma$ itself maps to the apex. The link is compact and has finitely many simplices. If $D\subseteq K$ is a subcomplex and $\sigma\notin D$, this star lies in $|K|\setminus|D|$.

## Facts & Assumptions

**Given:** A finite $K$, nonempty $\sigma\in K$, and optionally a subcomplex $D$ not containing $\sigma$.

[F1] Realization consists of finite-support barycentric coordinates summing to one ([[def-geometric-realization-of-an-abstract-simplicial-complex]]).

[F2] For finite complexes weak and Euclidean topologies coincide, and finite realizations are compact Hausdorff ([[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]], [[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]).

## Proof

1.1 Represent the cone in the Euclidean coordinate space on the link vertices as $E=\{rq:0<r<1,\ q\in|\operatorname{lk}_K\sigma|\}\cup\{0\}$. The quotient map sends $(q,r)$ to $rq$. It is a continuous bijection after collapsing the zero end. Away from zero its inverse is $r=\sum_vz_v$, $q=z/r$. At zero, any quotient-open neighborhood contains $|\operatorname{lk}_K\sigma|\times[0,\epsilon)$ for some $\epsilon>0$: for each link point choose a product neighborhood about $(q,0)$, take a finite cover of the compact link, and take the smallest positive radius. Thus the bijection and its inverse are continuous at zero too. For an empty link use $E=\{0\}$. [F1, F2, construct]

2.1 For a point $x$ of the star put $a=\sum_{v\in\sigma}x_v>0$, set $p_v=x_v/a$ on $\sigma$, and set $z_v=x_v$ off $\sigma$. Then $p\in\operatorname{relint}|\sigma|$, $r:=\sum_vz_v=1-a<1$, and if $r>0$ the outside support is a simplex of the link: its union with $\sigma$ is the support simplex of $x$. Conversely, for $p\in\operatorname{relint}|\sigma|$ and $z\in E$ with $r=\sum_vz_v$, define the coordinates of $x$ on $\sigma$ by $(1-r)p$ and off $\sigma$ by $z$. They are nonnegative, sum to one, and have a support simplex of $K$. These constructions are mutually inverse continuous maps in the Euclidean realizations, since the only division is by $a>0$. Step 1.1 identifies their domain with the stated cone product. [F1, F2, step 1.1, algebra]

3.1 The star is open because it imposes finitely many strict positive-coordinate conditions. Its simplex-interior decomposition is exactly the one just described by support, so the map preserves this simplicial decomposition. The link is a subcomplex of the finite $K$, hence finite and compact by [F2]. If a point of the star lay in $|D|$, its support would be a simplex of $D$ containing $\sigma$; closure under faces would force $\sigma\in D$, a contradiction. [F1, F2, step 2.1] ∎

## Scope note

This is a statement about real simplicial strata of an already supplied triangulation. It does not construct a triangulation of an algebraic variety or prove a product chart along a complex algebraic Whitney stratum. The real dimension of $\sigma$ cannot replace complex dimension in middle perversity.
