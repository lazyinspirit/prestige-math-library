---
id: lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data
kind: lemma
title: "Finite super hierarchies carry annular, torus and square cut data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies
  - lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position
  - lem-normal-handle-cuts-strictly-decrease-finite-complexity
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - lem-finite-polygonal-disk-and-collar-surgery
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michael Kapovich, Hyperbolic Manifolds and Discrete Groups"
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: "Actual§1.5/PDF31 parallel-boundary placement and minimization read; actualTheorems15.2–15.3/PDF367–368 retain annuli/tori and remove contractible components. Fullrelevant passages read. The explicit square geometry is derived below."
---

## Statement

Assume the hypotheses of [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]], and let $P\subset\partial M$ be a supplied finite disjoint union of parametrized PL annuli and whole torus boundary components, with each component injecting on fundamental groups into $M$. Then its finite disk-allowed super hierarchy can be chosen with the following additional actual boundary data at every cut.

Before cutting along $F$, every circle of $\partial F$ isotopic in the current boundary to a component of $\partial P$ lies inside $P$, and the number of components of $\partial F\cap P$ is minimal subject to this condition. All intersections with $\partial P$ are transverse. Cutting $P$ along $\partial F$ gives exactly annuli, tori and labeled rectangles (squares). Retain the annuli and tori as the next boundary marking $P'$; discard the simply connected rectangles from that annulus/torus marking, while retaining every rectangle, its four labeled sides and its collar in the gluing record. Every retained component of $P'$ injects on fundamental groups into its new manifold component. The two cutting-face copies, old marking labels and all square-side maps survive as actual finite PL data.

A normalizing isotopy of $F$ relative to the fixed marking may carry the entire handle system with it; its numerical complexity stays unchanged. The following cut still strictly decreases the same coherently inherited complexity. Thus these boundary choices preserve the proved finite termination; they do not substitute fresh triangulations.

These conclusions prove actual boundary normalization, the finite square updates and injection of the retained annuli/tori. They do not assert that the two further pared axioms—capture of noncyclic abelian subgroups and homotoping every injective annulus map of pairs into $P'$—are automatic after cutting. Those require an additional relative annulus/peripheral theorem and are not used as assumptions or conclusions here.

## Facts & Assumptions

**Given:** The finite PL hierarchy input and the actual injective annular/torus boundary marking in the Statement.

[F1] The finite super hierarchy is constructed by one current normal cut at a time, strictly decreasing the sum of the nonnegative coherent handle triples. [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]] [[lem-normal-handle-cuts-strictly-decrease-finite-complexity]]

[F2] Essential boundary multicurves admit actual peripheral placement followed by constrained minimal annular position; all annular arcs then span, and all annular closed components are essential cores. The boundary isotopy extends over a collar. [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]]

[F3] Cutting along an injective two-sided proper surface in an irreducible PL piece preserves irreducibility and injects the new piece groups into the old one. [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[F4] The actual finite polygonal disks, strips, annuli and their boundary maps have compatible PL parameters and collars. [[lem-finite-polygonal-disk-and-collar-surgery]] [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

## Proof

1.1 Take the next surface and current coherent handle system supplied by [F1]. All boundary circles of the surface are essential. Apply [F2] to this multicurve and the current marking $P$. This supplies an actual boundary isotopy with the required parallel placement and constrained minimum. Extend it through the boundary collar and apply its time-one map $h$ to $F$ and to the entire current handle decomposition. Keep $P$ as the fixed prescribed subset of the current boundary. We have merely selected the new actual surface $h(F)$ and a new parameterization $h(H)$ of the same handle system; the previously recorded boundary-face subsets and their maps can remain fixed and be subdivided by the new curve intersections. The normal-position conditions are invariant under this simultaneous transport of surface and handles. All attachment counts, hence $X,Y,Z$, are unchanged. Incompressibility and the super annulus condition transport under the ambient isotopy. [F1, F2, F4, given, construct]

2.1 On an annulus component $A$ of $P$, [F2] gives either $k$ disjoint core circles, $r$ disjoint spanning arcs, or no intersection. Cutting along $k$ cores gives $k+1$ annuli, in their linear order across a parametrized annulus. If $r>0$, first cut one spanning arc. Its two copies and the two old boundary intervals give a parametrized rectangle by [F4]. Every further disjoint spanning arc crosses that rectangle from one old boundary side to the other and divides a rectangle into two rectangles. Thus the total is exactly $r$ rectangles. Their four sides alternate two old $\partial A$ intervals and two labeled copies of a cutting arc. With no intersection retain $A$ itself. A closed core and a spanning arc cannot coexist disjointly, so this exhausts all annular cases, without omitting a return-arc disk. [F2, F4, step 1.1, given, construct]

3.1 On a torus component $T$ of $P$ all its intersections are disjoint essential closed curves. Cutting along one gives an annulus: the curve cannot separate the oriented torus while remaining essential, since separation and Euler characteristic zero would give a disk side; equivalently use its finite polygon parameter. The other curves are disjoint essential cores in this annulus. Thus $k>0$ curves cut $T$ into exactly $k$ annuli in cyclic order, and $k=0$ leaves the torus. The finite annulus and disk parameters of [F4] retain both copies and the original orientation and cyclic order. [F2, F4, step 2.1, given, construct]

4.1 Split the three-manifold along $F$ using its supplied two-sided product collar. Its boundary contains the two distinct labeled copies $F_+,F_-$. At a point of $\partial F\cap P$ the local model is a polygonal half-space cut by a half-plane; the two sides of the old $P$ sheet become the two corresponding boundary sheets on the cut manifold. The remaining corners have product strip collars and can be rounded by subdividing their angular sectors; this changes no labels or attachment maps. Hence the cut pieces of $P$ are exactly the annuli, tori and rectangles counted in steps2.1–3.1, embedded in the actual new boundaries. For a rectangle retain which of its two new sides belongs to $F_+$ or $F_-$, the old-boundary labels of its other two sides, and their product collar maps. Its trivial group is the reason it is removed from the annulus/torus marking, not a reason to erase its gluing data. [F3, F4, step 2.1, step 3.1, given, construct]

5.1 Every annulus retained from an old annulus has the same essential core generator as that old annulus. An annulus obtained from a torus carries the nontrivial cyclic subgroup represented by its essential cutting slope. The retained torus is the unchanged old torus. All these groups inject into the old $M$ by the given injection of the old marking. Each retained component lies on a new manifold boundary, and its inclusion composed with the new piece inclusion into the old piece is precisely that old map, up to the fixed collar parameter. If it had a kernel in the new piece, that kernel would remain in the old piece; therefore its group injects into the new piece. [F3, step 2.1, step 3.1, step 4.1, given, construct]

6.1 The new marking is again a finite disjoint union of injective annuli and whole unchanged tori, so steps1.1–5.1 apply at the next cut. At each stage only the current surface and handle system are carried by the boundary isotopy; prior gluing faces are fixed labeled subsets, subdivided at the new boundaries as needed. Subdivide each paired mate face by the image subdivision under its recorded PL gluing map as well, so both sides retain a common finite refinement. Reversing a cut identifies its two surface copies and the corresponding square sides by their retained original-coordinate maps. Induction on the finite hierarchy therefore preserves every older map and recovers the original marked boundary when all cuts are reversed. The isotopy has not changed the handle counts, and [F1] gives a strict decrease after each actual cut, so the same well-founded induction still ends in balls. On a terminal ball no annulus or torus with nontrivial group can inject; hence its retained marking is empty, although its rectangular and gluing labels remain recorded. [F1, F3, F4, step 1.1, step 4.1, step 5.1, given, induction]

7.1 This constructs all stated geometry and finite records from the original marking, without assuming a pre-existing hierarchy or a compatible peripheral graph. The only algebraic boundary assertion proved was the injection in step5.1. Neither a noncyclic abelian subgroup of a new piece nor a general injective annulus map was analyzed by these disk-and-annulus cuts. Consequently no conclusion about those two further pared axioms is used in the construction or concealed in the word marking. Their verification is a separate logical interface. [step 1.1, step 4.1, step 5.1, step 6.1, given, construct] ∎

## Scope

The output is the full finite super hierarchy with actual normalized annular/torus/square boundary data and injective retained marking. Promoting every cut pair to a pared manifold requires its remaining two pared axioms, supplied by a genuine relative annulus/peripheral argument. Analytic gluing, full relative marking and the original hyperbolization theorem remain separate.
