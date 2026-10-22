---
id: lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
kind: lemma
title: Finite-area Fuchsian quotients have compact standard-cusp truncations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set
  - thm-conical-bounded-parabolic-kleinian-groups-have-finite-convex-neighborhood-volume
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
  - cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
  - def-genus-and-euler-characteristic-compact-riemann-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Entire Appendix A.1–A.4 read; the finite-area-to-finite-type implication used in A.2.2 and Theorem11.1 is proved directly here via the separately established three-dimensional convex-neighborhood criterion
---

## Statement

Assume AC, hence Countable Choice. Let $\Gamma\le\mathrm{PSL}_2(\mathbb R)$ be discrete torsion-free and suppose the complete hyperbolic surface $X=H^2/\Gamma$ has finite area. Then $\Gamma$ is nonelementary, its limit set is the entire ideal circle, and $X$ has finitely many pairwise disjoint standard cusp tails
$$\{y>T_j\}/\langle z\mapsto z+\ell_j\rangle,\qquad \ell_j>0,$$
with compact complement. There may be no cusps, in which case $X$ is compact. Filling each cusp by the complex coordinate $q=\exp(2\pi iz/\ell_j)$ compactifies $X$ to a compact connected Riemann surface $\overline X$. If its genus is $h$ and the number of cusps is $N$, then
$$\operatorname{area}(X)=2\pi(2h-2+N).$$
No finite-generation, finite-type, first-kind, topological-core or surface-classification theorem is assumed in obtaining the compact cusp truncation. In particular every finite-area thick pointed limit of the preceding atlas theorem is a finite-type Riemann surface. This statement makes no bound comparing its genus or puncture count with those of the approximating surfaces; that comparison requires an additional embedded-core topological argument.

## Facts & Assumptions

**Given:** AC, the discrete torsion-free real group and finite area of its quotient.

[A1] AC and its Countable Choice consequence are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] A torsion-free discrete Möbius group has no nonidentity elliptics; its nonidentity elements are parabolic or loxodromic. A group fixing a pair individually is cyclic loxodromic, and a full parabolic stabilizer in a real group is a rank-one real translation group. The model quotients are complete proper covering quotients. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

[F2] The future hyperboloid has its Lorentz metric, geodesic and half-space formulas. A real group preserves a totally geodesic hyperbolic plane and its two normal sides. Its ideal circle is preserved; the closed convex hull of a subset of that circle lies in the plane. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F3] For a torsion-free nonelementary Kleinian group, finite volume of one positive-radius convex-hull neighborhood implies that every limit point is conical or bounded parabolic. Conversely that boundary criterion supplies an equivariant family of precisely invariant, uniformly separated horoballs, finitely many cusp orbits, and compact quotient of the convex hull with those horoballs removed. Neither theorem assumes finite generation or finite volume of the whole three-dimensional quotient. [[thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set]], [[thm-conical-bounded-parabolic-kleinian-groups-have-finite-convex-neighborhood-volume]]

[F4] Under Countable Choice, measurable change of variables and completed Tonelli–Fubini apply to model chart volumes and their quotient charts. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]]

[F5] A compact genus-$h$ Riemann surface has Euler characteristic $2-2h$. Smooth-boundary Gauss–Bonnet is $\int K+\int_{\partial}k_g=2\pi\chi$. [[def-genus-and-euler-characteristic-compact-riemann-surface]], [[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]

## Proof

1.1 We first exclude elementary groups by direct area calculations. The limit set is the set of ideal accumulation points of an orbit. Every nonidentity parabolic has its fixed point in that set by its iterates, and every loxodromic has both endpoints there. Thus an empty limit set forces the group to be trivial, and then the quotient is $H^2$, of infinite area. If the limit set is a singleton, every group element fixes it and no loxodromic occurs. Normalize the point to infinity. A real affine Möbius map with multiplier different from one is loxodromic, so all elements are real translations; a nontrivial discrete such group is $\ell\mathbb Z$. Its fundamental strip $0<x<\ell$, $0<y<\infty$ has area $\ell\int_0^\infty y^{-2}dy=\infty$. If the limit set is a pair, the group preserves the pair; an element exchanging its endpoints has order two as the form $z\mapsto a/z$ shows, so torsion-freeness excludes it. The group is cyclic loxodromic by [F1]. Normalize its generator to $z\mapsto e^\ell z$. In the coordinate $\log z=u+iv$, $0<v<\pi$, its fundamental strip has metric $(du^2+dv^2)/\sin^2v$ and area $\ell\int_0^\pi\sin^{-2}v\,dv=\infty$. These contradictions show the finite-area group is nonelementary. [A1, F1, F2, F4, given, construct, algebra]

2.1 We show its limit set $\Lambda$ is the WHOLE circle. If a circle interval $I$ is a component of the complement of the closed set $\Lambda$, its two distinct endpoints lie in $\Lambda$, since a nonelementary limit set contains at least three points. A component of the complement of a closed circle subset with at least two points is an open proper arc with two distinct endpoints in that subset. Let $P_I$ be the open half-plane bounded by the geodesic with endpoints $\partial I$ and facing $I$. Distinct complementary intervals give disjoint open half-planes: their endpoint pairs do not alternate on the circle, so their chords and facing half-planes have disjoint interiors, as is also immediate in the disc model. The group permutes these intervals, hence $P_I$ is precisely invariant under its interval stabilizer. An orientation-preserving circle map preserving one interval fixes its two endpoints individually; by [F1] that stabilizer is trivial or cyclic loxodromic. In geodesic normal coordinates on $P_I$, the hyperboloid parametrization gives metric $dr^2+\cosh^2r\,dt^2$, $r>0$, $t\in\mathbb R$. If the stabilizer is trivial this half-plane has infinite area. If it is cyclic, its generator translates $t$ by a length $L>0$, so its quotient has area $L\int_0^\infty\cosh r\,dr=\infty$. Precise invariance embeds this quotient in $X$, contrary to finite area. Therefore there is no such interval and $\Lambda=\partial H^2$. [A1, F1, F2, F4, step 1.1, construct, algebra]

3.1 In the hyperboloid choose its invariant plane $P=H^2$. For $u\in P$ and signed normal distance $r\in\mathbb R$, the map $(u,r)\mapsto(\cosh r\,u,\sinh r)$ in one extra spacelike coordinate parametrizes all of $H^3$. Its metric, computed by differentiation and $\langle u,u\rangle=-1$, $\langle u,du\rangle=0$, is $$dr^2+\cosh^2r\,g_P.$$ The real group acts only on $u$ and fixes the signed normal coordinate, so this is also a global quotient product. Its volume density is $\cosh^2r\,dr\,dA_P$. The convex hull of the full ideal circle is exactly $P$: it is contained in $P$ by [F2] and contains every geodesic joining two ideal points, which fill $P$. Consequently for every $\epsilon>0$ the convex-neighborhood quotient has volume $$\operatorname{vol}\bigl(N_\epsilon(P)/\Gamma\bigr)=\operatorname{area}(X)\int_{-\epsilon}^{\epsilon}\cosh^2r\,dr<\infty.$$ All equalities follow in charts by [F4]; no unproved comparison of dimensions is being used. [F2, F4, step 2.1, given, construct, algebra]

4.1 Apply both actual criterion implications [F3] to this nonelementary subgroup of $\mathrm{PSL}_2(\mathbb C)$ and convex hull $P$. They supply finitely many parabolic fixed-point orbits, precisely invariant uniformly separated horoballs $H_p$, and compact quotient $$(P\setminus\bigcup_p H_p)/\Gamma.$$ Every parabolic point is real, since it is the unique fixed point of a real parabolic matrix. Its stabilizer is real rank one by [F1]. Intersecting $H_p$ with $P$ therefore gives an actual horodisc whose quotient, in a real Möbius coordinate fixing its ideal point at infinity, is $\{y>T\}/\ell\mathbb Z$. Its boundary is a smooth horocycle. The horodisc quotients are disjoint and embedded by precise invariance, with compact complement as just proved. With no parabolic orbits that same compact complement is all of $X$. No argument about finite generation or a chosen ideal triangulation has intervened. [F1, F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 Increase the finitely many levels $T_j$ if desired. Removing only bounded collars from the old cusp tails adds finitely many compact cylinders to the complement, so it stays compact and its boundary consists of disjoint smooth circles. The periodic coordinate $q=\exp(2\pi iz/\ell_j)$ is a biholomorphic coordinate from each cusp tail onto $0<|q|<\exp(-2\pi T_j/\ell_j)$. Indeed real translation by $\ell_j$ is its exact period, and the logarithm supplies its local inverse; its derivative never vanishes. Add the point $q=0$ for each tail. These finitely many chart discs, together with the old charts on $X$, have holomorphic transitions on their overlaps. Their topology is Hausdorff, since the tails are disjoint and each added point has nested neighborhoods contained in its own tail together with itself. The resulting surface is compact: a compact old truncation together with finitely many closed smaller coordinate discs covers it. It is connected since $X$ is connected and dense. Thus it is a compact connected Riemann surface $\overline X$ with finitely many removed points, proving finite type directly. [A1, F1, F2, step 4.1, construct, algebra]

6.1 Finally let $h$ be the genus of $\overline X$ and let $N$ be the number of filled cusps. A truncation $K$ is obtained by deleting $N$ coordinate discs, so $\chi(K)=2-2h-N$ by [F5] and addition of those $N$ two-cells. The upper-half-plane frame $e_1=y\partial_x,e_2=y\partial_y$ satisfies $\nabla_{e_1}e_1=e_2$, directly from the metric Christoffel formula. On the boundary of $y\le T$ the outward-normal-first tangent is $-e_1$, with inward normal $-e_2$, so signed geodesic curvature is $-1$. Its length and the removed cusp area are both $\ell/T$. Gauss–Bonnet [F5] therefore gives $$-\operatorname{area}(K)-\sum_j\ell_j/T_j=2\pi(2-2h-N).$$ Adding the removed cusp areas proves $\operatorname{area}(X)=2\pi(2h-2+N)$; if $N=0$ the same formula is ordinary closed-surface Gauss–Bonnet. This proves all the claimed conclusions, without a bound on the limiting topological type being smuggled into the statement. [F2, F4, F5, step 4.1, step 5.1, construct, algebra] ∎

## Actual reading and remaining scope

Both actual three-dimensional convex-neighborhood criterion proofs, all local thin and model proofs, measurable change-of-variables and completed Tonelli–Fubini, smooth-boundary Gauss–Bonnet and the compact genus/Euler definition were read in full during this development or their preceding authoring. The source Appendix A.2.2 and its surrounding Appendix A.1–A.4 were read in full. The source's short topology sketch is not used as a complete theorem.

This supplies finite type of each bounded-area thick pointed limit through an actual compact standard-cusp truncation. Bounds on its genus or number of ends relative to the original sequence, faithful convergence of whole thick components, and geometric-subsurface cover expansion remain separate operations in the general degeneration alternative.
