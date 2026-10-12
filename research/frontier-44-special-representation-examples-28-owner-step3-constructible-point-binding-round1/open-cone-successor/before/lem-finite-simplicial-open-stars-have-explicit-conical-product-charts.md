---
id: lem-finite-simplicial-open-stars-have-explicit-conical-product-charts
kind: lemma
title: "Finite simplicial open stars have explicit conical product charts"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-continuous-map-top,
       def-geometric-realization-of-an-abstract-simplicial-complex,
       def-quotient-topology,
       def-simplicial-subcomplex-star-closure-and-link,
       def-subspace-topology-top,
       lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology,
       prop-a-finite-simplicial-complex-has-compact-hausdorff-realization,
       thm-compactness-under-continuous-maps,
       thm-finite-products-of-compact-spaces]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Sections 2.1-2.3 (simplicial sheaves and star neighbourhoods)"
---

## Statement

Let $K$ be a finite simplicial complex and let $\sigma$ be a nonempty simplex.
Let $\operatorname{lk}_K\sigma$ be the subcomplex of simplices $\tau$ disjoint
from $\sigma$ with $\sigma\cup\tau\in K$, and let $\operatorname{st}_K(\sigma)$
be the open star of $\sigma$
([[def-simplicial-subcomplex-star-closure-and-link]]). Then
$$\operatorname{st}_K(\sigma)\cong\operatorname{relint}|\sigma|\times c_{<1}(|\operatorname{lk}_K\sigma|),$$
where $c_{<1}(L)=(L\times[0,1))/(L\times\{0\})$ with the quotient topology, and
the cone on the empty space means a single apex. The homeomorphism takes each
simplex interior containing $\sigma$ to the product with the corresponding
link-simplex interior and positive radial coordinate; the simplex $\sigma$
itself maps to the apex. The link is compact and has finitely many simplices.
If $D\subseteq K$ is a subcomplex and $\sigma\notin D$, this star lies in
$|K|\setminus|D|$.

## Facts & Assumptions

**Given:** A finite simplicial complex $K$, a nonempty simplex $\sigma\in K$, and optionally a subcomplex $D\subseteq K$ with $\sigma\notin D$.

[F1] A point of $|K|$ is a finitely supported barycentric coordinate family summing to one; its support is a simplex, and $|\rho|$ is the closed convex hull of the vertices of $\rho$, so a point lies in the relative interior of $|\rho|$ exactly when its support equals $\rho$. The open star is the union of the relative interiors of the simplices containing $\sigma$, and the link consists of the simplices disjoint from $\sigma$ whose union with $\sigma$ is a simplex ([[def-geometric-realization-of-an-abstract-simplicial-complex]], [[def-simplicial-subcomplex-star-closure-and-link]]).

[F2] For finite complexes the weak topology agrees with the Euclidean topology and the realization is compact Hausdorff; finite products of compact spaces are compact; a continuous bijection from a compact space to a Hausdorff space is a homeomorphism; the quotient topology is the final topology of the projection so a map out of a quotient is continuous exactly when its composite with the projection is ([[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]], [[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-quotient-topology]], [[def-continuous-map-top]], [[def-subspace-topology-top]]).

[A1] None: the charts and their inverses are explicit coordinate formulas.

## Proof

**Proof technique:** direct.

1.1 Put $L=|\operatorname{lk}_K\sigma|$ and let $E=\{rq:0\le r<1,\ q\in L\}$ inside the Euclidean coordinate space on the vertices of the link, with the subspace topology; when the link is empty, $L$ is empty and $E=\{0\}$ is a single apex. The map $L\times[0,1)\to E$, $(q,r)\mapsto rq$, is continuous and identifies exactly $L\times\{0\}$ with the apex: if $rq=r'q'$ with $r,r'>0$, then comparing coordinate sums gives $r=r'$ and then $q=q'$. Hence it descends to a continuous bijection $\varphi:c_{<1}(L)\to E$. The source is a quotient of the compact space $L\times[0,1]$ and the target is Hausdorff, so $\varphi$ is a homeomorphism by [F2]; away from the apex its inverse is $r=\sum_vz_v$, $q=z/r$, the only division being by a positive number. [F1, F2, construct]

2.1 For a point $x$ of the open star put $a=\sum_{v\in\sigma}x_v>0$, set $p_v=x_v/a$ for $v\in\sigma$ and $z_v=x_v$ for $v\notin\sigma$. Then $p\in\operatorname{relint}|\sigma|$, $r:=\sum_vz_v=1-a<1$, and the support of $x$ is $\sigma\cup\operatorname{supp}(z)$, so $\operatorname{supp}(z)$, if nonempty, is a simplex of the link. Conversely, given $p\in\operatorname{relint}|\sigma|$ and $z\in E$ with $r=\sum_vz_v$, define a coordinate family by $x_v=(1-r)p_v$ on $\sigma$ and $x_v=z_v$ off $\sigma$; it is nonnegative with sum one, and its support is $\sigma\cup\operatorname{supp}(z)$, a simplex of $K$ because $\operatorname{supp}(z)$ is a simplex of the link. The two constructions are mutually inverse: from $x$ one recovers $a=1-r$ and $z$, hence $x$; from $(p,z)$ one recovers $p$ from the normalized $\sigma$-coordinates and $z$ from the outside coordinates. Both are continuous, the only division being by $a>0$ on the open star for the forward map, while the inverse is a polynomial expression in $(p,z)$ and the continuous function $r=\sum_vz_v$. By step 1.1 the second factor is the cone $c_{<1}(L)$, and since $\operatorname{supp}(z)$ records exactly which link simplex the radial coordinate lies over, each simplex interior containing $\sigma$ is carried to the product of the corresponding link-simplex interior with $(0,1)$, while points with $z=0$ map to $\operatorname{relint}|\sigma|\times\{$apex$\}$ and the simplex $\sigma$ itself to the apex. Thus the star is homeomorphic to the stated product. [F1, F2, step 1.1, algebra]

3.1 The open star is open in $|K|$ because it is the finite intersection, over the vertices of $\sigma$, of the sets on which one barycentric coordinate is positive, each open in the weak topology by definition. The link is a subcomplex of the finite complex $K$, hence it has finitely many simplices and compact realization by [F2]. Finally, if a point $x$ of the star lay in $|D|$, its support would be a simplex $\rho$ of $D$ with $\sigma\subseteq\operatorname{supp}(x)=\rho$; the subcomplex $D$ is closed under taking faces, so $\sigma\in D$, contradicting $\sigma\notin D$. Hence the star is disjoint from $|D|$. [F1, F2, step 2.1] ∎

## Remarks

- This is a statement about real simplicial strata of an already supplied triangulation. It does not construct a triangulation of an algebraic variety and does not prove a product chart along a complex algebraic stratum; in particular the real dimension of $\sigma$ cannot replace complex dimension in middle perversity.
