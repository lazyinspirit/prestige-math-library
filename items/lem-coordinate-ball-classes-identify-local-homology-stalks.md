---
id: "lem-coordinate-ball-classes-identify-local-homology-stalks"
kind: "lemma"
title: "Coordinate-ball classes identify local homology stalks"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-excision-for-singular-homology","thm-long-exact-sequence-of-a-pair-in-singular-homology","def-relative-homology-connecting-homomorphism-on-cycles","cor-the-long-exact-homology-sequence-is-natural","cor-homotopic-maps-induce-the-same-map-on-singular-homology","prop-relative-homology-is-functorial-for-maps-of-pairs","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, local orientation comparisons, pp.233–234
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a boundaryless $n$-manifold, and let a chart contain concentric coordinate balls $K=\overline B(0,r)\subset B(0,s)$, where $0<r<s$. We identify these sets with their preimages in $M$. For every $x\in\operatorname{int}K$ and commutative unital ring $R$, the map of pairs induces an isomorphism
$$H_n(M,M\setminus K;R)\longrightarrow H_n(M,M\setminus\{x\};R).$$
If a closed coordinate ball $J$ in any chart lies inside $\operatorname{int}K$, restriction from $K$ to $J$ is also an isomorphism and commutes with point restrictions over $\operatorname{int}J$. In dimension zero use singleton chart balls. No AC is needed.

## Facts & Assumptions

[F1] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] computes the local group at an interior point as $R$ in degree $n$, and gives the point-complex and radial-contraction calculations.

[F2] [[thm-excision-for-singular-homology]] identifies local pairs after removing a closed subset lying in the open complement of the support.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives pair connecting maps. [[def-relative-homology-connecting-homomorphism-on-cycles]] identifies their representatives as boundaries of relative cycles, and [[cor-the-long-exact-homology-sequence-is-natural]] makes the connecting squares commute for maps of pairs.

[F4] [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] applies to the explicit radial and translation homotopies below.

[F5] [[prop-relative-homology-is-functorial-for-maps-of-pairs]] supplies identity and composition laws for restriction maps.

[F6] [[thm-heine-borel-rn]] makes closed coordinate balls compact; [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes their images closed in $M$.

## Proof

**Given:** The stated chart, radii, point and coefficient ring. First let $n\ge1$ and set $B=B(0,s)$.

1.1 The ball $K$ is compact by [F6]; compactness of its chart preimage follows by pulling any open cover back to the Euclidean ball and taking a finite subcover there. It is closed in Hausdorff $M$. Thus $Z=M\setminus B$ is closed and contained in the open set $M\setminus K$. Excision gives $H_n(M,M\setminus K;R)\cong H_n(B,B\setminus K;R)$. It gives the analogous isomorphism for $\{x\}$, and these identifications commute with the restriction maps since all are induced by inclusions. [F2, F5, F6, given]

1.2 Put $\rho=(r+s)/2$. The annulus $B\setminus K$ retracts onto $S_\rho=\{u:\lVert u\rVert=\rho\}$ by $u\mapsto(1-t+t\rho/\lVert u\rVert)u$: throughout the homotopy its norm is strictly between $r$ and $s$. The inclusion $S_\rho\to\mathbb R^n\setminus\{x\}$ is a homotopy equivalence on homology. Indeed translate the target by $-x$; the resulting map $u\mapsto u-x$ is homotopic to $u\mapsto u$ by $u\mapsto u-tx$, which never vanishes because $\lVert tx\rVert<r<\rho$. The centered sphere is a radial deformation retract of $\mathbb R^n\setminus\{0\}$. Hence inclusion $B\setminus K\to\mathbb R^n\setminus\{x\}$ induces isomorphisms on reduced homology in all degrees, including the augmentation kernel in degree zero. [F4, given]

2.1 Choose $0<\epsilon<s-\lVert x\rVert$. Both $B\setminus\{x\}$ and $\mathbb R^n\setminus\{x\}$ radially retract about $x$ to the sphere of radius $\epsilon$: $$h_x(y,t)=x+\left(1-t+\frac{t\epsilon}{\lVert y-x\rVert}\right)(y-x).$$ For the first space the homotopy lies in $B$, since it is the segment between $y$ and a point of that small sphere, both in the convex ball $B$. It avoids $x$ by positivity of the radial coefficient. These retractions commute with inclusion, so that inclusion induces isomorphisms. Factoring the isomorphism of step 1.2 through $B\setminus\{x\}$ proves that $B\setminus K\to B\setminus\{x\}$ induces reduced homology isomorphisms. [F4, step 1.2]

3.1 The ball $B$ is contractible. As calculated in [F1], the exact sequence [F3] identifies $H_n(B,A;R)$ with $\widetilde H_{n-1}(A;R)$ for either nonempty subspace $A=B\setminus K$ or $B\setminus\{x\}$. At $n=1$ this is the kernel of $H_0(A;R)\to H_0(B;R)$; no unreduced degree-zero replacement is made. Naturality of the connecting map and step 2.1 therefore prove the desired restriction isomorphism, after step 1.1. Its target is $R$ by [F1]. [F1, F3, step 1.1, step 2.1]

4.1 If $J\subset\operatorname{int}K$, choose any $y\in\operatorname{int}J$. Restriction from $K$ to $y$ factors as restriction from $K$ to $J$ followed by restriction from $J$ to $y$, by [F5]. Both the composite and the latter map are isomorphisms by step 3.1 applied to the respective charts; hence the first map is an isomorphism. The same factorization holds for every $y$ in the interior of $J$, proving compatibility without any common-coordinate assumption on the two balls. For $n=0$ all these balls are singletons; excision reduces their groups and maps to the point group $R$ and its identity, as in [F1]. [F1, F2, F5, step 3.1]

5.1 The statement requires an actual chart ball, so supplies no ball in an empty manifold. Zero coefficients give isomorphisms of zero modules. The radii have strict inequalities; neither radius zero nor a point on $\partial K$ is claimed. All homotopies include $t=0,1$ and operate on unnormalized singular chains through [F4]. Only finitely many individual radii, points and charts are used; all comparison maps are canonical inclusions, and no AC is invoked. [F4, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
