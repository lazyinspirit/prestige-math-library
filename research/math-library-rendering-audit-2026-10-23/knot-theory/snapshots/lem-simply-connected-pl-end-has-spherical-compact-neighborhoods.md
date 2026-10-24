---
id: lem-simply-connected-pl-end-has-spherical-compact-neighborhoods
kind: lemma
title: "A simply connected PL end has compact cores with one spherical frontier"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, thm-finite-simplicial-approximation-for-maps-of-pairs ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds, Quarterly Journal of Mathematics Oxford (2) 27 (1976), 63–70"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Lemma 2, printed pp.64–65, the compact-neighborhood conclusion attributed there to Wall; the compression proof is supplied locally here"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, Corollary 3.3, printed p.48, the innermost-preimage-circle reduction to a boundary loop theorem"
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $X$ be a connected noncompact orientable piecewise linear three-manifold with compact boundary and a given locally finite compatible manifold triangulation. Assume the following precise one-end and simple-connectivity conditions:

1. If $C$ is a compact connected codimension-zero PL submanifold containing $\partial X$, exactly one component of $X\setminus\operatorname{Int}_X C$ has noncompact closure.
2. For every compact subset $A\subset X$, there is a compact subset $C\supset A$ such that every loop in $X\setminus C$ is nullhomotopic in $X\setminus A$.

Then every compact subset $A\subset X$ lies in the relative interior of a compact connected codimension-zero PL submanifold $K\subset X$ whose boundary is the disjoint union of $\partial X$ and one PL two-sphere in $\operatorname{Int}X$. The construction is finite and introduces no choice hypothesis. No assertion that $K$ itself is a ball is made.

## Statement references

[[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

## Facts & Assumptions

**Given:** $X,A$ and the stated triangulation and end conditions.

[F1] Finite subcomplexes have compact PL manifold neighborhoods, with explicit barycentric level-set construction and strong retraction ([[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]]).

[F2] Compact locally collared PL subpolyhedra have PL collars ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F3] A nullhomotopic nontrivial boundary loop in a finitely triangulated compact orientable PL three-manifold gives a properly embedded PL disk with essential boundary ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]).

[F4] Finite polygonal disks admit prescribed PL boundary extensions and strip surgery; a finite triangulated orientable closed surface has a one-polygon schema reducible by the explicit finite cancellation and commutator-extraction moves ([[lem-finite-polygonal-disk-and-collar-surgery]], [[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]]). Thus its genus and the effect of disk compression can be computed from the resulting finite disk-and-band model, without a general surface triangulation theorem.

[F5] Continuous maps of finite polyhedral pairs have finite simplicial approximations ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

## Proof

**Given:** The data above.

1.1 We shall use compact PL neighborhoods in open parts of $X$. The construction in [F1] applies to a compact set inside such a part even though $X$ is not compact. Indeed, local finiteness and compactness give a finite union of closed simplex stars containing that set in its relative interior. Subdivide this finite union sufficiently finely that a further closed star neighborhood stays in the specified open part; compactness gives the required positive separation in any of the finitely many local realization metrics. For a resulting finite subcomplex $P$, make it full by one barycentric subdivision and use $r$, the sum of barycentric coordinates at its vertices, to form $\{r\ge1/2\}$. The support of $r$ lies in the finite union of stars incident to those vertices, so this neighborhood is compact. The translation charts and retraction formulas in [F1] verify its manifold structure and marked boundary traces without using any simplex outside that finite union. If connectedness is needed, connect the finitely many components of the chosen finite subcomplex by finitely many PL paths first. [given, F1, F5, construct]

2.1 Enlarge the given $A$ to a compact connected PL core $A_0$ containing both $A$ and $\partial X$ in its relative interior, using step 1.1. Apply end condition 2 to $A_0$, obtaining a compact $C\supset A_0$ outside which every loop contracts in $X\setminus A_0$. Choose a compact connected PL core $N_0$ containing $C$ in its relative interior and containing $\partial X$. Its frontier $S_0=\partial N_0\setminus\partial X$ is a finite disjoint union of closed orientable PL surfaces in $\operatorname{Int}X$, disjoint from $C$. Every loop of $S_0$ therefore contracts in $X\setminus A_0$. [given, step 1.1, construct]

3.1 Suppose a compact PL core $N$ containing $A_0$ has frontier $S$ disjoint from $A_0$, every loop of $S$ contracts in $X\setminus A_0$, and a component of $S$ has positive genus. We produce a compression disk outside $A_0$. Choose a nontrivial polygonal loop on that component using its finite disk-and-band model in [F4], and choose a nullhomotopy in $X\setminus A_0$. Its compact image and $S$ lie in a compact PL manifold neighborhood $Y\subset X\setminus A_0$ by step 1.1. Approximate the map piecewise linearly by [F5] and put it transverse to $S$: subdivide its finite triangles in the product charts of the two-sided $S$ and choose vertex heights avoiding zero; the zero-height segments form a finite collection of simple polygonal circles in the source interior, in addition to its boundary. If such an interior preimage circle gives a trivial loop in $S$, replace its entire inside map by a nullhomotopy in $S$ pushed to the side occupied by its outside collar. The target side collar exists by [F2] after cutting $Y$ along $S$. Moving the source circle slightly to that side removes it and all circles inside it, introducing none. Repeat finitely. An innermost remaining circle, allowing the source boundary itself, now bounds a disk map whose interior misses $S$ and whose boundary is nontrivial on $S$. It lies in one of the compact pieces obtained by cutting $Y$ along $S$. Apply [F3] to that piece and its marked copy of $S$. The resulting properly embedded PL disk $D$ has interior disjoint from $S$, boundary essential on $S$, and is disjoint from $A_0$. [F2, F3, F4, F5, step 1.1, step 2.1, construct]

4.1 Compress $S$ along $D$ and update $N$. The disk has a product neighborhood relative to its boundary: in a finite PL disk the local links are polygonal circles or arcs in the ambient link sphere or disk, and [F4]'s disk parametrizations flatten them. After cutting along the disk, [F2] supplies its two side collars, giving $D\times[-\epsilon,\epsilon]$ when they are glued back. Choose it disjoint from $A_0$. If $D$ lies outside $N$, attach this two-handle to $N$; if it lies inside, remove its open product neighborhood. Keep the component containing the connected $A_0$ and discard any others. In either case the new core still contains $A_0$ and has the compressed surface as its frontier, possibly with some components discarded. Every loop on the new frontier is still nullhomotopic in $X\setminus A_0$: perturb it off the centers of the finitely many new cap disks, then push each portion in a punctured cap to its boundary circle. It becomes a loop on the old frontier, and these pushes take place outside $A_0$. [F2, F4, step 3.1, construct]

5.1 The operation terminates after finitely many applications. Give a closed orientable surface of genus $g>0$ the complexity $2g-1$, and give a sphere complexity zero; sum over frontier components. These are finite integers by [F4]. A nonseparating compression decreases genus by one; a separating essential compression splits a genus $g$ component into genera $g_1,g_2\ge1$ with $g_1+g_2=g$. These assertions follow directly by cutting the disk-and-band polygon along the essential curve and capping its two new boundary circles; an essential separating curve has positive genus on both sides, since a genus-zero side with one boundary is a disk. Thus the complexity decreases by at least one, also in the case $g=1$ yielding a sphere. Discarding components cannot increase it. Repeating steps 3.1–4.1 produces a compact connected PL core $N$ containing $A_0$ and with frontier a finite union of PL two-spheres. [F4, step 4.1, construct]

6.1 There are finitely many complementary components: each has at least one of those finitely many frontier spheres in its boundary, and each sphere is incident to just one outside component. End condition 1 says precisely one component has noncompact closure. Adjoin the closures of all other components to $N$. Their union is compact, since there are finitely many and each closure is compact. The adjunction is along complete boundary components and preserves the PL manifold structure and connectedness. The resulting compact core still contains $A_0$, its frontier is still a finite union of spheres, and its exterior is connected with noncompact closure. There is at least one frontier sphere: otherwise this nonempty compact codimension-zero core would be both open and closed in the connected noncompact $X$. [given, step 5.1, construct]

7.1 If more than one frontier sphere remains, join two of them by a proper embedded polygonal arc in the connected exterior, with interior in the exterior interior. Such an arc exists: take a finite polygonal path, erase its closed subpaths, and perturb its finitely many remaining segments in three-dimensional charts to avoid self-intersections. It has a product neighborhood $D^2\times[0,1]$, with its end disks in those two spheres. Construct it from disjoint small coordinate balls at its successive vertices and thin boxes along its edges; the polygonal disk extension in [F4] matches their transverse disk coordinates successively along the interval, so no transition obstruction occurs. Attach this one-handle to the core. Its two end disks are removed from the frontier spheres and joined by a cylinder; the result is a single PL sphere, since each punctured sphere is a polygonal disk and their connecting cylinder gives the standard two-disk sphere model. The exterior stays connected: any finite path between two points may be perturbed off the arc, and its portions in the small tube may then be pushed to the tube frontier; this uses only avoidance of finitely many line segments in three-dimensional boxes. Repeat finitely until there is one frontier sphere. The final core is the required $K$, since all alterations were outside $A_0$ and hence preserve the original $A$ in its relative interior. The entire construction uses finitely many nullhomotopy, disk, path and coordinate choices, with the finite bound in step 5.1; no countable or arbitrary-index choice hypothesis is introduced. [given, F4, step 6.1, construct] ∎

## Remarks

The two explicit end conditions isolate the hypotheses used in the argument; in particular one end alone does not imply the nullhomotopy condition. The lemma works within a supplied PL structure and neither triangulates a topological manifold nor invokes the held topological prime-decomposition theorem.
