---
id: lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation
kind: lemma
title: "Whole-star smooth embeddings are stable under strong piecewise $C^1$ approximation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, thm-extreme-value-metric, cor-vector-valued-ftc-and-lipschitz-bound, thm-heine-borel-rn, lem-closed-subset-of-a-compact-space-is-compact, thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§8, printed pp. 79-89 (PDF pp. 84-94): Definitions 8.1-8.5 whole-star immersion and strong delta-approximation (printed p. 83), Lemmas 8.6-8.7 and Theorem 8.8 with its full proof: finite-star separation angles, the two-segment projection argument and the compactness globalization"
    - title: "H. Putz, Triangulation of fibre bundles, Canadian Journal of Mathematics 19 (1967), pp. 499-513"
      url: "https://doi.org/10.4153/CJM-1967-042-3"
      locator: "§1.3, printed p. 499: the stability theorem restated from Munkres 8.8 with the delta(x)-approximation convention"
---

## Statement

Let $K$ be finite and $f:K\to\mathbb R^q$ a whole-star smooth immersion in the
sense of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].
There is $\delta>0$ such that every strong piecewise $C^1$
$\delta$-approximation $g:K'\to\mathbb R^q$, on any finite subdivision $K'$,
is a whole-star immersion. If $f$ is also an embedding, $\delta$ may be chosen
so that $g$ is an embedding. The subdivision need not have a mesh or shape
bound.

## Facts & Assumptions

**Given:** A finite geometric simplicial complex $K$ with Euclidean realization in some $\mathbb R^N$, a whole-star smooth immersion $f:K\to\mathbb R^q$, a finite subdivision $K'$ of $K$ and a strong piecewise $C^1$ $\delta$-approximation $g:K'\to\mathbb R^q$ ([[def-relative-smooth-triangulation-and-projection-preserving-fitting]]).

[F1] Whole-star condition and approximation contract: $f$ is piecewise smooth with $df_b$ injective on the tangent star at every $b$, the restriction of $f$ to each closed simplex is smooth, and $g$ is piecewise smooth on $K'$ with $\sup_b|g(b)-f(b)|<\delta$ and $|dg_b(v)-df_b(v)|<\delta|v|$ for every $b$ and every nonzero tangent-star vector $v$ ([[def-relative-smooth-triangulation-and-projection-preserving-fitting]]). In particular $g$ is continuous, and the differentials on the tangent cones agree on common faces and vary continuously with the base point.

[F2] Compactness and minima ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[lem-closed-subset-of-a-compact-space-is-compact]]): a subset of $\mathbb R^m$, $m\ge1$, is compact exactly when it is closed and bounded; closed simplices, unit spheres in linear subspaces, and products of two such closed bounded sets are closed and bounded in the relevant $\mathbb R^m$, hence compact, so every continuous real function on them attains a minimum; the realization $|K|$, its square $|K|^2$ (a closed bounded subset of $\mathbb R^{2N}$) and closed subsets of these are compact; and a continuous bijection from a compact metric space onto a metric space is a homeomorphism onto its image ([[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]).

[F3] Vector fundamental theorem of calculus ([[cor-vector-valued-ftc-and-lipschitz-bound]]): if $\varphi:[0,1]\to\mathbb R^q$ is $C^1$, then $\varphi(1)-\varphi(0)=\int_0^1\varphi'$. It applies to $s\mapsto G(c+s h)$ along a segment $[c,c+h]$ lying in a single simplex on which $G$ is $C^1$.

[F4] Angle arithmetic: for nonzero vectors $V,W,W'$ one has $\operatorname{angle}(V,W')\le\operatorname{angle}(V,W)+\operatorname{angle}(W,W')$; and if $|V|\ge\mu|v|$ while $|W-V|<\delta|v|$ with $\delta<\mu/2$, then $\operatorname{angle}(V,W)\le4\delta/\mu$. Both are elementary estimates for the Euclidean angle of nonzero vectors.

[F5] Disjoint faces have disjoint affine hulls: if $\eta,\tau$ are disjoint faces of a simplex with affinely independent vertices, then $\operatorname{aff}(\eta)\cap\operatorname{aff}(\tau)=\varnothing$; indeed an equality $\sum_i\lambda_i v_i=\sum_j\mu_j w_j$ of affine combinations with $\sum_i\lambda_i=\sum_j\mu_j=1$ is a vanishing affine relation among the affinely independent vertices, forcing all coefficients to vanish and contradicting both sums being $1$.

## Proof

**Proof technique:** direct.

1.1 Uniform rank bound. If $K$ has only vertices, immersion is automatic and a sufficiently small value error preserves the finite separation of distinct embedded vertices; the empty case is vacuous. Otherwise, for each positive-dimensional original simplex $\sigma$ let $D_\sigma$ be its direction space. Its tangent cone at $b\in\sigma$ spans $D_\sigma$ and every vector of $D_\sigma$ is a difference of two cone vectors, so whole-star injectivity makes $A_{b,\sigma}:=D(f|\sigma)(b)$ injective on $D_\sigma$. Compactness of $\sigma$ times its unit sphere gives a common least singular value $\mu>0$ over all original simplices. The strong derivative bound also holds, with $\le\delta$, on the entire direction space of each refined simplex: apply the bound at its relative interior points, where every direction is tangent, then pass to its boundary by continuity. Thus $D(g|s)(b)$ has least singular value at least $\mu-\delta$ on every refined simplex $s$, and derivative errors less than $\mu/2$ give angle errors at most $4\delta/\mu$ by [F4]. [F1, F2, F4, algebra]

1.2 Two-segment separation. Suppose two segments have common endpoint $x$ and a simplexwise affine injective map $H$ carries their outward directions to nonzero vectors making angle $\beta>0$. In their image plane project onto the oriented line perpendicular to the internal bisector, or onto the image line when $\beta=\pi$. The two projected directions have opposite signs. Any nonzero derivative making angle less than $\beta/2$ with its corresponding image direction has the same strict projection sign. Segment integration then makes the projected map strictly monotone along each segment and puts their open images on opposite sides of the image of $x$, so the map is injective on their union. This also applies to a finite piecewise smooth subdivision of the segments: integrate on each subsegment and add. [F3, F4, algebra]

1.3 Geometric separation. For two geometric simplices $\sigma_1,\sigma_2$ with common face $\tau$ proper in both, let $c$ be the barycentre of $\tau$ and $\eta$ the opposite face of $\sigma_1$. For $p=(1-t)x+ty$, $x\in\tau$, $y\in\eta$, set $X(p)=(1-t)x+tc$, taking $X(p)=c$ when $t=1$ and $X(p)=p$ on $\tau$. This is a continuous projection fixing $\tau$, and $p-X(p)=t(y-c)$. The unit directions of $\sigma_2-c$ form a compact set: in barycentric direction coordinates the cone is given by zero sum and nonnegative coordinates at vertices outside $\tau$, hence is closed. No ray $y-c$ with $y\in\eta$ has a direction in this cone, since a common ray would either put $y$ in $\tau$ or put $y$ in $\operatorname{aff}(\tau)$, contrary to [F5]. Therefore the angle between those directions has a positive minimum. For $q\in\sigma_2$ the vector $q-X(p)$ belongs to that cone, because $c-X(p)$ lies in the direction space of $\tau$, the lineality space of the cone. This proves the same lower angle bound for the two rays from $X(p)$ to $p$ and $q$, when both are nonzero. The projection formula is preserved by separate affine injections of the two simplices agreeing on $\tau$, provided their image intersection is exactly the image of $\tau$. [F2, F5, algebra]

2.1 Uniform frozen angles. For $b\in\tau$ define the frozen map on each simplex containing $b$ by $H_b(x)=A_{b,\sigma}(x-b)$. This is simplexwise affine, agrees on common faces, and is injective on their union by the whole-star hypothesis. Its image simplices therefore intersect exactly in $H_b(\tau)$. Apply step 1.3 to these image simplices. Their separation angle has a positive minimum uniformly over $b\in\tau$: use the fixed compact sets $y\in\eta$ and unit directions $z$ of $\sigma_2-c$, and minimize the continuous angle between $A_{b,\sigma_1}(y-c)$ and $A_{b,\sigma_2}z$ on their product with $\tau$. Neither vector vanishes by step 1.1, and a zero angle is excluded by the image intersection property. The finite minimum over all ordered original simplex pairs, capped at $\pi/2$, gives $\alpha>0$; take $\alpha=\pi/2$ if there are no such pairs. No single linear extension of $H_b$ to the span of two simplices is asserted. [F1, F2, step 1.1, step 1.3, algebra]

3.1 Local estimates independent of the subdivision. Choose $\delta<\mu/2$ with $4\delta/\mu<\alpha/8$. For each $b$, choose a small relative ball $U_b$ meeting only original simplices containing $b$. Continuity of their finitely many derivative fields makes the angle between $D(f|\sigma)(c)h$ and $A_{b,\sigma}h$ less than $\alpha/8$ for $c\in U_b\cap\sigma$ and every nonzero direction $h\in D_\sigma$. Step 1.1 and [F4] give angle less than $\alpha/4$ between each refined derivative of $g$ along $h$ and $A_{b,\sigma}h$. This bound holds on subdivided segments, including their one-sided derivatives. Shrink to a ball $V_b$ so that for any two original simplices containing $b$, the projection in step 1.3 sends $V_b\cap\sigma_1$ into $U_b$; there are only finitely many projections and each fixes $b$. The two segments joining points of $V_b$ through that projection lie in $U_b$, since its intersections with simplices are convex. These neighbourhoods depend on $f$ and $K$, not on $g$ or its subdivision. [F1, F4, step 1.1, step 1.3, step 2.1, choose]

4.1 Local injectivity and immersion. For distinct $p,q\in V_b$ in one original simplex, join them through their midpoint; their frozen outward rays are antiparallel. Otherwise use their minimal original carriers and the projection of step 1.3 onto their common face; both carriers contain $b$, and their frozen rays make angle at least $\alpha$ by step 2.1. If one segment is trivial, the other alone has a strictly monotone projection. In all cases steps 1.2 and 3.1 give $g(p)\ne g(q)$. To check immersion at $b$, apply the same argument to the frozen piecewise linear map $J_b(x)=dg_b(x-b)$ on the refined tangent fan. Scale any two star vectors until their endpoints lie in $V_b$ and in the closed star of $b$ in the subdivision. On every refined cone the derivative of $J_b$ is $D(g|s)(b)$, whose angle from the appropriate $A_{b,\sigma}$ is less than $\alpha/8$ by step 1.1; the projected paths stay in the original cones containing $b$ and may be split across the finitely many refined cones. Step 1.2 separates their endpoints exactly as above. Hence $dg_b$ is injective on the entire tangent star, for every $b$, proving immersion. [step 1.1, step 1.3, step 2.1, step 1.2, step 3.1]

5.1 Global embedding. If $f$ is an embedding, take a finite subcover $V_{b_1},\ldots,V_{b_m}$ of $|K|$ and put $C=|K|^2\setminus\bigcup_i(V_{b_i}\times V_{b_i})$. This compact set misses the diagonal, so $|f(p)-f(q)|$ has a positive minimum $\eta$ on it; if it is empty omit this bound. Require also $\delta<\eta/3$. On $C$, $|g(p)-g(q)|>\eta-2\delta>0$, and outside $C$ distinct points are separated by step 4.1. Thus $g$ is continuous and injective on a compact space, hence a homeomorphism onto its image by [F2]; together with immersion this is an embedding. The same $\delta$ works for every finite subdivision, with no shape or mesh restriction. [F1, F2, step 3.1, step 4.1] ∎

