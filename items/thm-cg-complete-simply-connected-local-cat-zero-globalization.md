---
id: thm-cg-complete-simply-connected-local-cat-zero-globalization
kind: theorem
title: "Complete, simply connected, locally CAT(0) length spaces are CAT(0)"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: [lem-cg-local-geodesic-continuation-and-path-space-covering, lem-cg-local-geodesic-endpoint-stability, lem-cg-alexandrov-comparison-triangle-gluing, lem-cg-comparison-convexity-and-model-spaces, def-cg-comparison-angle-and-alexandrov-angle, def-cg-cat-zero-cat-one-and-local-geodesic, def-simply-connected, def-based-loops-and-fundamental-group, def-nullhomotopic-map-and-contractible-space, def-covering-map-and-evenly-covered-neighbourhoods, cor-connected-cover-of-a-simply-connected-space-is-trivial, thm-universal-cover-uniqueness-and-dominating-property, def-universal-covering-space, def-map-and-isomorphism-of-covering-spaces, def-lift-of-a-map-path-and-homotopy, def-homotopy-relative-and-path-homotopy, def-path-connected, def-metric-space, def-metric-ball, def-metric-continuity, def-metric-compactness, def-complete-metric-space, def-cauchy-in-metric, def-geodesic-and-geodesic-metric-space, def-pointwise-uniform-and-uniformly-cauchy-convergence, lem-metric-reverse-triangle, def-isometry-and-metric-embedding, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.4.1 and II.4.7–II.4.12, printed pp. 193–201 (the metric Cartan–Hadamard theorem, the space of local geodesics, Alexandrov's patchwork and the global comparison)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 502–504 (contractibility of complete CAT(0)-spaces, Gromov's Cartan–Hadamard theorem)"
---

## Statement

Let $X$ be a connected complete metric space that is locally CAT(0) and a length space, and suppose $X$ is simply connected ([[def-simply-connected]], [[def-cg-cat-zero-cat-one-and-local-geodesic]]). Then:

**(i)** For every $x_0\in X$ the endpoint evaluation $\exp:G_{x_0}\to X$ of [[lem-cg-local-geodesic-continuation-and-path-space-covering]] is a covering map and a homeomorphism, and every two points of $X$ are joined by exactly one local geodesic, which is a minimizing geodesic ([[def-geodesic-and-geodesic-metric-space]]).

**(ii)** Every geodesic triangle in $X$ satisfies the CAT(0) inequality; hence $X$ is CAT(0).

**(iii)** For every $x_0\in X$ the geodesic contraction $H:X\times[0,1]\to X$, where $H_t(x)$ is the point at distance $t\,d(x_0,x)$ from $x_0$ on the unique geodesic from $x_0$ to $x$, is continuous and satisfies $d(H_t(x),H_t(y))\le t\,d(x,y)$ for all $x,y\in X$ and $t\in[0,1]$; in particular $X$ is contractible.

## Facts & Assumptions

**Given:** A connected complete locally CAT(0) length space $X$ that is simply connected, a point $x_0\in X$, the space $G_{x_0}$ of constant-speed local geodesics from $x_0$, and the endpoint evaluation $\exp:G_{x_0}\to X$.

[F1] $\exp:G_{x_0}\to X$ is a covering map with simply connected total space; the covering is local-isometric for the induced length metric ([[lem-cg-local-geodesic-continuation-and-path-space-covering]]).

[F2] Every connected covering of a locally path-connected simply connected space is one-sheeted and isomorphic to the identity covering; a universal cover admits a unique based map over the base to every connected covering ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]], [[thm-universal-cover-uniqueness-and-dominating-property]], [[def-universal-covering-space]], [[def-map-and-isomorphism-of-covering-spaces]]).

[F3] Endpoint stability provides, along a local geodesic, a uniform radius on which perturbations have unique local geodesics with convex separation, continuous dependence, and the length bound $L(c')\le L(c)+d(c(0),c'(0))+d(c(1),c'(1))$ ([[lem-cg-local-geodesic-endpoint-stability]]).

[F4] Patchwork: in a space of curvature $\le\kappa$ the vertex angles of a geodesic triangle swept by a continuous family of geodesics are no greater than the angles of any comparison triangle; and the vertex-opposite-side criterion of the CAT(0) inequality, together with the convexity of the distance function between geodesics with a common initial point and proportional parametrizations, holds in a CAT(0) space ([[lem-cg-alexandrov-comparison-triangle-gluing]] clauses (i)–(iii), [[lem-cg-comparison-convexity-and-model-spaces]] clauses (iv)(b)–(iv)(c), [[def-cg-comparison-angle-and-alexandrov-angle]]).

[F5] Definitions of simply connected, path connected, contractible and the fundamental group; geodesics and length; completeness and the metric axioms ([[def-simply-connected]], [[def-path-connected]], [[def-nullhomotopic-map-and-contractible-space]], [[def-based-loops-and-fundamental-group]], [[def-geodesic-and-geodesic-metric-space]], [[def-complete-metric-space]], [[def-metric-space]]).

## Proof

1.1 The covering is trivial. By [F1] $\exp$ is a covering with simply connected total space; $X$ is connected, complete and locally CAT(0), hence locally path-connected and path-connected, so [F2] applies and every connected covering of $X$ is one-sheeted; in particular $\exp$ is a homeomorphism. [F1, F2, F5]

2.1 Uniqueness of local geodesics between two points. Since $\exp$ is a bijection, for every $q\in X$ there is exactly one constant-speed local geodesic from $x_0$ to $q$; applying the same argument with $x_0$ replaced by an arbitrary point $p$ (the hypotheses are invariant under the change of base point) gives exactly one constant-speed local geodesic from $p$ to $q$ for every pair $p,q\in X$. [step 1.1, F1, F5]

3.1 Minimization by finite subdivision. Let $\gamma:[0,1]\to X$ be any rectifiable path from $p$ to $q$, and denote the unique local geodesic from $p$ to $\gamma(s)$ by $c_s$, parametrized on $[0,1]$. For each $s$, [F3] gives a neighbourhood of $\gamma(s)$ and endpoint-stability solutions based on $c_s$; uniqueness in step 2.1 identifies these with $c_t$ for all sufficiently nearby $t$. On such a parameter neighbourhood the fixed-initial-point length estimate proved in [F3] gives $|L(c_t)-L(c_u)|\le d(\gamma(t),\gamma(u))$ for any two parameters there: both solutions lie in the same tube, so the estimate applies in both directions. Finitely many such parameter neighbourhoods cover $[0,1]$; subdivide $0=t_0<\cdots<t_N=1$ so that each consecutive pair belongs to one neighbourhood (a positive subdivision size exists by compactness). Summing gives $L(c_1)-L(c_0)\le\sum_i d(\gamma(t_{i-1}),\gamma(t_i))\le L(\gamma)$. Here $c_0$ is constant. Thus $L(c_1)\le L(\gamma)$ for every rectifiable path. Since $X$ is a length space, taking the infimum gives $L(c_1)\le d(p,q)$, and the reverse inequality is the chord bound. This proves minimization without a mesh-error assertion. [step 2.1, F3, F5, algebra]

4.1 Continuous dependence. By [F3] the unique local geodesics vary continuously with their endpoints, so the minimizing geodesic from $p$ to $q$ depends continuously on $(p,q)$. [step 2.1, step 3.1, F3]

5.1 Verification of the patchwork hypotheses. Consider a triangle with vertices $p,q_0,q_1$ and let $\gamma$ parametrize $[q_0,q_1]$. The unique geodesics $c_s$ from $p$ to $\gamma(s)$ form a continuous sweep by step 4.1; evaluation $(s,t)\mapsto c_s(t)$ is continuous, since uniform convergence controls evaluation and each fixed geodesic is continuous. Every image point $z$ has a closed induced-metric CAT(0) ball by local CAT(0). A smaller concentric ball is convex by the midpoint inequality [F4], hence again CAT(0); its interior is a neighbourhood of $z$. The compact sweep image is covered by finitely many such interiors, and their preimages admit a positive subdivision size on the compact parameter square, so each rectangle in a sufficiently fine grid is contained in one of these CAT(0) balls. These are exactly the local-chart hypotheses of patchwork [F4]. The side and perimeter restrictions are automatic for $\kappa=0$, since $D_0=\infty$. If the triangle has distinct vertices and no vertex lies on the opposite side, patchwork therefore proves domination of all its vertex angles. If a vertex lies on the opposite side, uniqueness identifies all three sides with subsegments of a single geodesic; comparison is then equality in a degenerate Euclidean segment. Repeated vertices are handled the same way. [step 2.1, step 3.1, step 4.1, F4, F5, construct]

6.1 Vertex-to-side comparison. Let $r$ be an interior point of $[q_0,q_1]$ in a nondegenerate triangle and join $p$ to $r$ by the unique geodesic. By step 5.1 the comparison angles of $(p,q_0,r)$ and $(p,r,q_1)$ dominate their actual angles. At $r$ these two actual angles have sum at least $\pi$: take points $x,y$ on the opposite base germs at equal small distance $h$ from $r$ and $z$ on the germ toward $p$ at small distance $k$. In a CAT(0) chart the midpoint inequality gives $d(z,x)^2+d(z,y)^2\ge2k^2+2h^2$. The Euclidean cosine rule therefore gives $\cos\tilde\angle_r(x,z)+\cos\tilde\angle_r(z,y)\le0$, hence the sum of these two comparison angles is at least $\pi$. In every sufficiently small neighbourhood the supremum defining each upper angle is at least its corresponding angle here; taking the infimum over neighbourhood sizes preserves the sum bound. Glue their Euclidean comparison triangles along the comparison side $[p,r]$, placing the base vertices on opposite sides. Alexandrov's straightening inequality [F4](i)(2) gives $d(p,r)\le d_2(\bar p,\bar r)$ in the comparison triangle of $(p,q_0,q_1)$, with $\bar r$ at the same distance from $\bar q_0$ along its base. If one subtriangle degenerates, the same inequality follows by continuity of the Euclidean straightening inequality in its side lengths, or directly by its collinear equality case. At the endpoints $r=q_i$ comparison is equality. Thus every vertex-to-opposite-side comparison holds; the vertex-to-side criterion of [F4] now gives the full CAT(0) inequality. [step 5.1, F4, algebra]

7.1 Conclusion of (iii). Let $H_t(x)$ be the point at distance $t\,d(x_0,x)$ from $x_0$ on the unique geodesic from $x_0$ to $x$, which exists and is unique by steps 2.1–3.1; then $H$ is continuous by step 4.1, $H_0$ is constant and $H_1$ is the identity. For $x,y\in X$ the geodesics from $x_0$ to $x$ and from $x_0$ to $y$ have the common initial point $x_0$ and proportional parametrizations, so the convexity clause [F4] gives $d(H_t(x),H_t(y))\le(1-t)d(x_0,x_0)+t\,d(x,y)=t\,d(x,y)$. For every continuous map $f:X\to Y$, the map $(x,s)\mapsto f(H_{1-s}(x))$ is a homotopy from $f$ to the constant $f(x_0)$, so $X$ is contractible in the convention of [F5]. [step 4.1, F4, F5] ∎

