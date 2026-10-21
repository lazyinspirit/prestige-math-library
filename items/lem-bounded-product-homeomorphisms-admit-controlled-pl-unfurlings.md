---
id: lem-bounded-product-homeomorphisms-admit-controlled-pl-unfurlings
kind: lemma
title: "Bounded product homeomorphisms admit controlled PL unfurlings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "No choice premise. All finite cell centers are barycenters, the unbounded construction is indexed by the positive integers with an explicit rule, and the Alexander isotopy is displayed. Any choice premise of a later application remains that application's premise."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds"
      url: "https://academic.oup.com/qjmath/article-abstract/27/1/63/1577698"
      locator: "Printed pp.67–68, constructions of Sigma3 and Sigma4. The actual locally finite PL compactification, quantitative boundary continuity and Alexander family are supplied here."
---

## Statement

For $0\le k\le2$ and $n=3-k$, put $X=B^k\times\mathbb R^n$, $B^j=[-1,1]^j$, $C=B^k\times2B^n$ and $E=\{0\}\times\partial(2B^n)$. There is a locally finite PL homeomorphism $\gamma:X\to C\setminus E$ that is the identity on $B^k\times B^n$ and has the following uniform end behavior: if $|y|_\infty\to\infty$, then
$$
\left|\gamma(x,y)-\left(0,2y/|y|_\infty\right)\right|\longrightarrow0
$$
uniformly in $x\in B^k$ and in the direction of $y$.

Let $f:X\to X$ be a homeomorphism equal to the identity on $\partial B^k\times\mathbb R^n$, with bounded displacement in the second coordinate: $|\operatorname{pr}_nf(x,y)-y|\le A$ for one finite constant $A$. Then $\gamma f\gamma^{-1}$ extends by the identity on $E$ to a homeomorphism $\Theta:C\to C$ fixed on the entire boundary. Extended by the identity outside $C$, it admits a jointly continuous ambient isotopy from the identity on $X$, fixed on $\partial X$ and outside $\operatorname{Int}C$. The inverse family is jointly continuous as well.

This is the controlled unfurling construction. It does not by itself assert that $f$ is PL for any additional structure, or that its conjugate straightens a prescribed fixed handle core.

## Facts & Assumptions

**Given:** The standard product coordinates and, for the second assertion, the stated boundary-fixed homeomorphism and bound.

[F1] Finite convex polyhedral cells with compatible face maps admit compatible finite triangulations. A facewise PL homeomorphism of the boundaries of two convex cells extends by coning from interior points. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Proof

1.1 First construct a finite PL homeomorphism $a$ from the cone $K=\{(z,t):0\le t\le1,\ |z|_\infty\le1-t\}$ to $B^k\times[0,1]$, fixed on its bottom $B^k\times\{0\}$ and sending its tip to $(0,1)$. For $k=0$ use the identity interval map. For $k>0$, subdivide each cone side at height $1/2$. Send its lower half to the corresponding vertical side of the product, and its upper half to the corresponding radial sector of the top face. On the bottom use the identity; the common middle section goes to $\partial B^k\times\{1\}$, and the tip goes to $(0,1)$. These side frusta and top sectors have identical finite face incidence. Map corresponding face vertices and extend successively over faces by coning their boundary maps, using barycenters as interior vertices. The maps agree on shared faces, are mutually inverse cellwise, and give a boundary homeomorphism. Cone this whole boundary map from interior points of the two convex balls using [F1]. This supplies $a$ with actual finite PL parameters. [given, F1, construct]

2.1 In the outer region of $X$ write $r=|y|_\infty\ge1$ and $u=y/r\in\partial B^n$. The projective map $q(x,r)=(x/r,1-1/r)$ identifies $B^k\times[1,\infty)$ with $K$ minus its tip. The composite $a q$ is a homeomorphism to $B^k\times[0,1]$ minus $(0,1)$, fixed on the bottom. We now realize the induced radial product map as a locally finite PL map rather than incorrectly calling this projective formula affine. For each integer slab $j\le r\le j+1$, refine its convex base cells by the inverse images of the finitely many affine cells of $a$. Projective inverse images of their affine face equations are affine equations after multiplication by the positive $r$; the resulting cells are convex polytopes, and $a q$ maps each homeomorphically onto a convex polytope with the same face incidence. Use all intersections on shared slab faces. [F1, step 1.1, construct]

3.1 Fix a compatible finite triangulation of $\partial B^n$ into its coordinate faces. Lift each base cell $P$ from step 2.1 and each angular face $A$ to the source cell $\{(x,ru):(x,r)\in P,\ u\in A\}$. This is a convex polytope: on a fixed coordinate face $r=\pm y_i>0$, the equations and inequalities defining $P$ are affine in $(x,y_i)$, and those of $u\in A$ become affine in $y$ after multiplication by $r$. On the target lift the matching base cell $(z,t)\in a q(P)$ and the SAME angular face to $\{(z,(1+t)u):u\in A\}$. These are again convex polytopes with the same face incidence; positivity of $r$ and $1+t$ prevents any collapsed fiber. For every pair of corresponding faces choose interior points with matching angular parameter, for instance the barycenter of that angular face and the image under $a q$ of a barycenter in its base face. Cone the face subdivisions successively. By [F1] this gives compatible PL cell homeomorphisms. Shared faces use the same previously chosen points, including faces shared by consecutive integer slabs. The resulting map $\gamma$ is locally finite PL on the outer region, maps it homeomorphically onto $\{(z,y'):1\le|y'|_\infty\le2\}\setminus E$, and is the identity on its bottom. Paste it to the identity on $B^k\times B^n$. Each point off $E$ has a neighborhood meeting only finitely many image slabs, because $a q$ and its inverse are continuous there. Thus both map and inverse are PL in locally finite triangulations. [F1, step 2.1, construct]

4.1 Verify the stated uniform end control. As $j\to\infty$, $q(x,r)$ tends uniformly to the cone tip on every slab $j\le r\le j+1$. Therefore every corresponding target base vertex has $z'\to0$, $t'\to1$ uniformly. In one of the coned matching simplices, write a source point as a convex combination of its vertices with weights $\lambda_i$. Those vertices have second coordinates $r_i u_i$ with $j\le r_i\le j+1$; the paired target vertices have second coordinates $(1+t'_i)u_i$ and first coordinates $z'_i$. All $u_i$ lie in one coordinate face, so $r=\sum_i\lambda_i r_i$ and $u=\sum_i\lambda_i(r_i/r)u_i$. Hence $|u-\sum_i\lambda_i u_i|\le c/j$, with a fixed dimension-dependent constant $c$. The image second coordinate is $\sum_i\lambda_i(1+t'_i)u_i$, which differs from $2u$ by at most $2c/j+c\max_i|1-t'_i|$; its first coordinate tends uniformly to zero. This proves the limit, also for the extra face-center vertices used in coning, since their paired angular parameters were chosen equal in step 3.1. Conversely a sequence of image points tending to $E$ must have $r\to\infty$: a bounded-$r$ domain slab union is compact, and its image is compact and disjoint from $E$. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Put $\Theta=\gamma f\gamma^{-1}$ on $C\setminus E$ and $\Theta=\operatorname{id}$ on $E$. If $\gamma(x_i,y_i)\to(0,2u)\in E$, step 4.1 gives $r_i\to\infty$ and $y_i/r_i\to u$. Write $f(x_i,y_i)=(x'_i,y'_i)$. Bounded displacement implies $|y'_i|_\infty\to\infty$ and $y'_i/|y'_i|_\infty-y_i/r_i\to0$, by the triangle inequality and $||y'_i|_\infty-r_i|\le A$. Thus step 4.1 applied again gives $\gamma f(x_i,y_i)\to(0,2u)$. This proves continuity at every point of $E$, by the sequential criterion in these metric spaces. On the other boundary points of $C$, the preimages under $\gamma$ lie in $\partial B^k\times\mathbb R^n$: a homeomorphism of these explicit PL manifolds preserves their local boundary half-space charts, also directly by the face construction. There $f$ is the identity. For $k=0$ all of $\partial C$ is $E$. Thus $\Theta$ fixes the entire boundary. It is bijective, since its restriction off $E$ is a conjugate homeomorphism and $E$ is fixed; compactness and Hausdorffness make it a homeomorphism. Its inverse has the same continuity proof, since $f^{-1}$ has the same displacement bound $A$. [given, step 3.1, step 4.1, construct, algebra]

6.1 Extend $\Theta$ by the identity outside $C$. The following actual Alexander family is fixed on $\partial X$ and outside $\operatorname{Int}C$: for $t>0$, set $H_t(z)=t\Theta(z/t)$ on $tC$, and $H_t(z)=z$ outside $tC$; put $H_0=\operatorname{id}$. The formulas agree on $\partial(tC)$ because $\Theta$ fixes $\partial C$, so finite pasting gives continuity for $t>0$. The movement is at most $t\operatorname{diam}C$; this proves joint continuity at $t=0$, including for points that enter or leave $tC$. Every $H_t$ is a homeomorphism, with inverse given by the same formula using $\Theta^{-1}$, and that inverse family has the same bound and continuity. For $t<1$, $tC$ is disjoint from $\partial B^k\times\mathbb R^n$; at $t=1$ its boundary is fixed. This proves the full stated ambient-isotopy assertion. No differentiability, additional PL compatibility or fixed-core straightening follows merely from this topological family. [step 5.1, construct] ∎
