---
id: lem-lower-lifted-facets-cover-the-convex-hull
kind: lemma
title: "Generic lower lifted facets project to a triangulation of the convex hull"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 3
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-lexicographic-lift-tie-break
  - thm-lexicographic-lift-tie-break-consistent
  - lem-lifted-power-sphere-determinant-identity
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and
        Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, The Delaunay and Regular
        Triangulations"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
verification:
  precheck: pass
---

## Statement

Let $d\in\{2,3\}$ and let $P$ be a finite indexed weighted site set of affine dimension $d$ in $\mathbb R^d$. Lift each site to height $h_i=\|p_i\|^2-w_i+\varepsilon^{2^{r_i}}$ in the fixed ordered formal field of [[def-lexicographic-lift-tie-break]]. A **lower simplex** is the projection of $d+1$ affinely independent lifted sites whose graph hyperplane has every lifted site on or above it. Then the lower simplices cover $\operatorname{conv}(P)$ and intersect in common faces. Each lower simplex has a weakly empty power sphere for the original unperturbed weighted sites.

## Facts & Assumptions

**Given:** A finite indexed site universe, a finite nonempty site subset $P$ of projected affine dimension $d$, and the common formal height perturbation fixed before all predicates.

[F1] [[def-indexed-geometric-site-set]]: $P$ is finite, its sites have distinct stable integer identifiers, and coordinates and weights are dyadic, with absent weights equal to zero.

[F2] [[def-lexicographic-lift-tie-break]]: every site height is perturbed by the same fixed-universe monomial, and the order of a nonzero polynomial is the sign of its least-exponent nonzero coefficient.

[F3] [[thm-lexicographic-lift-tie-break-consistent]]: a determinant on $d+1$ affinely independent projected sites and one distinct query site has a nonzero formal polynomial, and nonzero constant terms keep their signs.

[F4] [[lem-lifted-power-sphere-determinant-identity]]: the unperturbed lifted determinant equals minus the base orientation determinant times the query's power-distance difference from the base power sphere.

[A1] The projected sites affinely span $\mathbb R^d$.

## Proof

1.1 Fix $x\in\operatorname{conv}(P)$. A feasible representation is a vector $(\lambda_i)_{i\in P}$ with $\lambda_i\ge0$, $\sum_i\lambda_i=1$, and $\sum_i\lambda_i p_i=x$. Its formal height is $H(\lambda)=\sum_i\lambda_i h_i$. If its support has more than $d+1$ sites, the vectors $(p_i,1)\in\mathbb R^{d+1}$ are linearly dependent, so there is a nonzero vector $(\alpha_i)$ on that support with $\sum_i\alpha_i=0$ and $\sum_i\alpha_i p_i=0$. Such a vector has both positive and negative entries. Choose one of the two directions $\lambda+t\alpha$ that does not increase $H$ and increase $|t|$ until a coefficient first becomes zero. This preserves feasibility and reduces support. Repeating finitely gives a feasible representation of support at most $d+1$ with no greater height. [given, F1, algebra, algebra]

2.1 There are finitely many supports of size at most $d+1$. For any affinely independent support, its coefficients representing $x$ are unique; any dependent support reduces by step 1.1. Therefore the minimum formal height among feasible representations is attained among a finite nonempty set of basic supports. [step 1.1, algebra, choose]

3.1 Exclude temporarily the finite union of convex hulls of subsets of at most $d$ sites. For an $x$ outside this union, choose a minimizing support of smallest cardinality; it has exactly $d+1$ sites, is affinely independent, and has strictly positive coefficients $\lambda_i$. Indeed, a dependent support reduces by step 1.1 without increasing its minimal height, contradicting minimal cardinality. For any other site $q$, write its unique affine coordinates $q=\sum_i\alpha_i p_i$, $\sum_i\alpha_i=1$. For sufficiently small positive $t$, replacing $\lambda_i$ by $\lambda_i-t\alpha_i$ and adding coefficient $t$ at $q$ remains feasible. Minimality gives $h_q-\sum_i\alpha_i h_i\ge0$. Hence the hyperplane through the lifted support sites lies below every lifted site and its projected simplex contains $x$. [step 1.1, step 2.1, A1, algebra, contradiction]

4.1 The set excluded in step 3.1 lies in a finite union of proper affine subspaces. A line segment in any open ball of $\operatorname{int}\operatorname{conv}(P)$ can be chosen in a direction not parallel to any of these subspaces; each subspace then removes at most one point of the segment. Thus the complement is dense in the interior. The interior is dense in the whole convex hull: join any hull point to a fixed interior point, and every point of the joining segment other than the hull endpoint is interior by convexity. There are finitely many $d$-tuples of sites, hence finitely many lower simplices; their projected simplices are closed. Step 3.1 puts a dense subset of $\operatorname{conv}(P)$ in their union, so that finite union covers the entire convex hull. [A1, step 3.1, algebra, construct, algebra]

5.1 If a lower hyperplane contained at least $d+2$ lifted sites, its projected face would contain a nondegenerate $d$-tuple and an additional site, contradicting the nonzero determinant from [F3]. Thus every full-dimensional lower cell is a simplex. If two projected lower simplices have support planes $L_1,L_2$, all their vertices lie on or above both supporting planes. For a point $x$ in the intersection of their projections, the two lifted convex combinations at $x$ therefore force $L_1(x)\ge L_2(x)$ and $L_2(x)\ge L_1(x)$; hence $L_1(x)=L_2(x)$. On each simplex the corresponding plane difference has one sign at every vertex, so its zero set is a face. If $L_1=L_2$, the nonzero determinant [F3] forces the same $d+1$ vertices. Thus intersections are common faces. [F2, F3, step 4.1, algebra]

6.1 The supporting inequality for a formal lift has nonnegative constant-term difference at each site; otherwise its negative constant coefficient would force a negative formal sign by [F3]. The constant terms therefore give the unperturbed weak support inequalities, and [F4] identifies them with empty power spheres. [F2, F3, F4, step 5.1, algebra] ∎
