---
id: lem-simplex-preserving-pl-homeomorphisms-admit-normal-ambient-isotopies
kind: lemma
title: "Simplex-preserving PL homeomorphisms admit normal ambient isotopies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William Jaco and Jeffrey L. Tollefson, Algorithms for the complete decomposition of a closed 3-manifold, Illinois Journal of Mathematics39 (1995),358–406"
      url: "https://www.researchgate.net/profile/William-Jaco/publication/242529283_Algorithms_for_the_complete_decomposition_of_a_closed_3-manifold/links/5437e7a80cf2590375c56442/Algorithms-for-the-complete-decomposition-of-a-closed-3-manifold.pdf"
      locator: "§2 normal isotopy conventions. The finite ambient deformation used here is proved explicitly below; no exchange-cap isotopy is inferred."
---

## Statement

Let $T$ be a finite simplicial complex and $h:|T|\to|T|$ a PL homeomorphism preserving every simplex setwise. There is a continuous ambient isotopy $H:|T|\times[0,1]\to|T|$ from the identity to $h$ such that every time slice is a PL homeomorphism preserving every simplex setwise.

Consequently two embedded normal surfaces with the same normal vector in a finite simplicial three-manifold triangulation are normally ambient isotopic in this sense. Throughout the isotopy every tetrahedral piece remains a proper PL disk of its original normal type. The assertion does not prescribe the isotopy on an additional common surface patch or on the boundary of an exchange surface.

## Statement references

[[lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products]] — the actual ambient simplex-preserving PL homeomorphism between equal-vector normal surfaces.

## Facts & Assumptions

**Given:** The finite simplicial complex and the simplex-preserving PL homeomorphism. An ambient isotopy here means a continuous family of ambient homeomorphisms starting at the identity; the individual time slices will additionally be PL. No assertion that the joint map on the time product is PL is needed.

[F1] Equal-vector embedded normal surfaces have an actual ambient PL homeomorphism preserving every original simplex setwise. ([[lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products]])

[F2] A simplex is a convex ball in its affine span. Choosing its barycenter expresses it as the cone on its boundary. Coning a PL boundary homeomorphism gives a PL homeomorphism of that simplex: cone a common finite subdivision for the map and its inverse. Finite PL maps compose to PL maps after a common finite subdivision.

## Proof

1.1 We first give the relative deformation needed in every dimension. Translate a convex simplex $B$ so that its barycenter is the origin, and suppose a PL homeomorphism $r:B\to B$ fixes its boundary pointwise. For $0<t\le1$ put $A_t(x)=t r(x/t)$ on $tB$, and $A_t(x)=x$ on $B\setminus\operatorname{int}(tB)$; put $A_0(x)=x$. On $\partial(tB)$ the formulas agree because $r$ fixes $\partial B$. They therefore paste continuously. The same formula with $r^{-1}$ is an inverse, since both maps preserve $tB$ and fix its complement. Thus $A_t$ is a homeomorphism fixing $\partial B$, with $A_1=r$. Every positive-time slice is PL: scale a finite subdivision for $r$ in $tB$, and triangulate the finite polyhedral collar between $tB$ and $B$, where the map is the identity. At zero it is the identity. Joint continuity at positive times follows from the two agreeing formulas on the closed regions defined by the continuous gauge of the convex simplex. At zero the estimate $\lVert A_t(x)-x\rVert\le t\operatorname{diam}(B)$, where the left side vanishes outside $tB$, proves uniform continuity in time. The inverse family satisfies the same estimate. This proves the boundary-fixed deformation explicitly. [given, F2, construct]

1.2 Next a continuous isotopy $b_t$ of a simplex boundary, starting at the identity and PL at every time, extends over the simplex by coning from its barycenter: $C_t(\lambda u)=\lambda b_t(u)$ for $u\in\partial B$ and $0<\lambda\le1$, with the barycenter fixed. Each slice and its inverse are the coned boundary maps, hence PL by [F2]. Joint continuity away from the barycenter follows from the unique continuous radial coordinates of a convex simplex. At the barycenter it follows uniformly in time from $\lVert C_t(\lambda u)\rVert\le\lambda\max_{v\in B}\lVert v\rVert$. Thus boundary isotopies extend as actual ambient isotopies; no fixed subdivision uniform in time is asserted or required. Applied independently to all simplices of one dimension, these extensions agree on their already prescribed boundaries and hence paste. They preserve every boundary face whenever the boundary isotopy does. [F2, construct]

2.1 We build the required isotopy by finite induction on the skeleton. Every vertex is already fixed by $h$. Suppose a simplex-preserving ambient PL map $g$ has been obtained from the identity by the desired type of isotopy and agrees with $h$ on the $(k-1)$-skeleton. Initially take $g$ to be the identity and $k=1$. The residual map $r=g^{-1}h$ fixes that skeleton pointwise and preserves each simplex. On each $k$-simplex its boundary is fixed, so the deformation in step 1.1 gives an isotopy from the identity to its residual restriction. These isotopies are the identity on common faces, and paste on the $k$-skeleton. Extend successively over the $(k+1)$-simplices and then all higher simplices by step 1.2. This gives an ambient simplex-preserving isotopy $K_t$ with PL slices, starting at the identity, whose endpoint agrees with $r$ on the $k$-skeleton. Concatenate the previous isotopy to $g$ with $gK_t$. The new endpoint agrees with $h$ on that skeleton. Its slices remain PL and simplex preserving; finite pasting gives joint continuity, including the concatenation time. There are finitely many dimensions. At the last one the endpoint agrees with $h$ everywhere, proving the first assertion. [given, F2, step 1.1, step 1.2, construct]

3.1 Finally take the simplex-preserving map between the equal-vector surfaces from [F1] and apply step 2.1. A time slice restricts to a homeomorphism of each original tetrahedron, each face and each edge. It takes each original proper PL disk to a proper PL disk, its boundary face arcs to proper PL arcs with endpoints on the same two distinct original edges, and its edge-intersection points to points of those same edges. Thus a triangle or quadrilateral retains its original incidence type, and embeddedness and disjointness are retained by the ambient homeomorphism. This is the claimed normal ambient isotopy. The construction has imposed only simplex restrictions; it makes no additional assertion of fixing a common patch or preserving an exchange surface, which would be a different relative problem. [F1, step 2.1, construct] ∎
