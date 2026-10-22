---
id: thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
kind: theorem
title: "The loop theorem for finitely triangulated orientable PL three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-axiom-of-choice, thm-finite-simplicial-approximation-for-maps-of-pairs, thm-covering-space-lifting-criterion, thm-classification-of-connected-covering-spaces, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-poincare-lefschetz-duality, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-classification-of-compact-connected-surfaces, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, Theorem 3.1 and its full twofold-cover tower proof, printed pp.45–48"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact connected orientable piecewise linear three-manifold with a given finite compatible manifold triangulation and with boundary a subcomplex. Let $F\subset\partial M$ be a connected compact piecewise linear subsurface and $N\trianglelefteq\pi_1(F)$ a normal subgroup. Suppose there is a continuous map $f:(D^2,\partial D^2)\to(M,F)$ whose boundary lies in the relative interior of $F$ and has class outside $N$. Then there is a properly embedded piecewise linear disk in $M$, with boundary in the relative interior of $F$, whose boundary class is outside $N$.

In particular, if a connected boundary component has noninjective induced fundamental-group map into $M$, it contains an essential simple closed curve bounding a properly embedded piecewise linear disk in $M$. Boundary classes outside $N$ are understood up to conjugation by a basepath in $F$.

## Statement references

[[def-axiom-of-choice]]

[[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]

## Facts & Assumptions

**Given:** $M,F,N,f$ and the stated choice assumption.

[F1] Continuous maps of finite polyhedral pairs admit simplicial approximations homotopic as maps of pairs; PL maps admit compatible finite subdivisions ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

[F2] A finite subpolyhedron in a finitely triangulated PL three-manifold has a compact PL manifold neighborhood strongly retracting onto it, with controlled trace in a marked boundary subsurface ([[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]]).

[F3] Compact locally collared PL subpolyhedra have PL collars; in particular this applies to the boundary of a compact PL manifold and to boundary curves of a compact PL surface ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F4] Connected coverings are classified by fundamental-group subgroups, and a disk map lifts to any covering after fixing its initial lift ([[thm-classification-of-connected-covering-spaces]], [[thm-covering-space-lifting-criterion]]). Pulling back finitely many triangulation simplices gives finite compatible PL structures on finite-sheeted covers. The nonidentity deck transformation of a connected twofold cover interchanges the two points of each fiber and has no fixed point.

[F5] Under AC, degree-one cohomology identifies with homomorphisms from the abelianization of the fundamental group to its coefficient group, by the first Hurewicz theorem and the cohomological universal coefficient theorem; $H_0$ is free, so the degree-one Ext term vanishes ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F6] Under AC, Poincaré–Lefschetz duality gives $H_2(V,\partial V;\mathbb F_2)\cong H^1(V;\mathbb F_2)$ for a compact orientable three-manifold $V$, and homology has the pair exact sequence ([[thm-poincare-lefschetz-duality]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F7] Under AC, closed orientable surfaces are classified by genus ([[thm-classification-of-compact-connected-surfaces]]). For a finite PL surface, the one-polygon construction and reduction moves can be carried out with PL maps: cut the triangles and polygonal arcs, retain affine side parameters, and extend each boundary identification over its polygonal disks. Thus a genus-zero finite PL surface is a PL sphere. The actual finite constructions are supplied by [[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]], and [[lem-finite-polygonal-disk-and-collar-surgery]].

[F8] A proper PL disk immersion with only regular double arcs and circles and no values of multiplicity greater than two has an essential embedded disk with respect to any prescribed normal boundary subgroup ([[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]).

[A1] AC is [[def-axiom-of-choice]]. It is assumed here for the existing duality, UCT and general surface-classification suppliers [F5]–[F7]; this is not a claim that the classical finite PL loop theorem intrinsically requires arbitrary choice. Covering-tower choices and polygonal surgeries are finite.

## Proof

**Given:** The data and assumptions above.

1.1 By [F1], replace $f$ by a PL map with boundary homotopic to the original one in $F$. Choose the approximation sufficiently fine on its compact boundary image to keep that image in $\operatorname{Int}F$. Make the map proper without changing its boundary: in a boundary collar $c(u,s)$, a push with parameter $a\ge0$ replaces the height $s$ by $\max(s,a)$ for $s$ below the collar top and is the identity elsewhere, with $a$ smaller than that top. This is a continuous PL function jointly in $(s,a)$. Choose a nonnegative PL function $a$ on the source disk, zero precisely on its boundary and everywhere sufficiently small, and apply that push to the value of the map at each point. Its straight parameter interpolation gives a homotopy relative to the source boundary. After compatible subdivisions the resulting proper PL map $f_0:D\to M$ is simplicial for one fixed finite triangulation of $D$. Its boundary class is still outside $N$. Put $D_0=f_0(D)$ and use [F2] to choose a connected compact manifold neighborhood $V_0$ retracting onto $D_0$ whose trace in $\partial M$ lies in $\operatorname{Int}F$. Let $F_0$ be the component of that trace containing $f_0(\partial D)$. [given, F1, F2, F3, construct]

2.1 If $V_0$ has a connected twofold cover $p_1:M_1\to V_0$, lift $f_0$ to $f_1:D\to M_1$ by [F4], put $D_1=f_1(D)$, and choose by [F2] a connected compact manifold neighborhood $V_1$ retracting onto $D_1$. Its trace is chosen inside the relative interior of $p_1^{-1}(F_0)$; let $F_1$ be the component containing $f_1(\partial D)$. Repeat whenever $V_i$ has a connected twofold cover. Write $q_i:V_i\to M$ for the composite of the covers and neighborhood inclusions. Then $q_if_i=f_0$, $q_i(F_i)\subset F$, and $N_i=(q_i|_{F_i})_*^{-1}(N)$ is normal. The boundary class of $f_i$ is outside $N_i$ at every stage. Orientability and the finite compatible PL structures pass to the covers and the neighborhoods. [F2, F4, step 1.1, construct]

3.1 This tower is finite. Give $D_i$ the simplicial structure obtained by lifting the original image simplices of $D_0$, irrespective of any additional subdivisions used for $V_i$. Its number of simplices is at most the number of simplices in the fixed source disk: each image simplex is the image of at least one source simplex, and each such source simplex has just one lift in the image of $f_i$. Let $\tau_i$ be the deck involution of $p_i$. The inverse image of $D_{i-1}$ is $D_i\cup\tau_i(D_i)$: every point of $D_{i-1}$ is hit by $f_{i-1}$ and its two lifts are interchanged by $\tau_i$. This inverse image is connected, because lifting the deformation retraction of $V_{i-1}$ onto $D_{i-1}$ retracts the connected $M_i$ onto it. The two finite closed sets $D_i$ and $\tau_i(D_i)$ must therefore meet. Since their union is a lifted simplicial complex, their intersection contains a common simplex. Thus $\tau_i$ identifies two distinct simplices of $D_i$ under projection; they are distinct because a deck transformation fixing a simplex would fix its barycenter. Projection takes $D_i$ onto $D_{i-1}$, so $D_i$ has strictly more simplices than $D_{i-1}$. This strict increase is bounded by the fixed finite source count. We reach a last $V_n$ with no connected twofold cover. [F4, step 2.1, construct]

4.1 There is no nonzero homomorphism $\pi_1(V_n)\to\mathbb F_2$: its kernel would have index two and [F4] would give a connected twofold cover. Therefore [F5] gives $H^1(V_n;\mathbb F_2)=0$. Also $H_1(V_n;\mathbb F_2)=0$. One can see the latter directly from a finite cellular chain complex for $V_n$: over the field $\mathbb F_2$ the cochain matrices are the transposes of the chain matrices, so the dimensions of first homology and first cohomology are equal by finite rank-nullity. By [F6], $H_2(V_n,\partial V_n;\mathbb F_2)=0$. The pair sequence now implies $H_1(\partial V_n;\mathbb F_2)=0$. Each connected component of this boundary is a closed orientable surface, so [F7] makes it a PL two-sphere: a positive-genus polygonal model has $2g$ independent mod-two side cycles, while its two-cell boundary has each paired side twice and is zero modulo two. [F5, F6, F7, A1, step 3.1, algebra]

5.1 The marked $F_n$ is a compact connected subsurface of one of these spheres. It is planar. Its fundamental group is normally generated by its boundary circles: join its finitely many complementary disk regions by disjoint polygonal arcs in the sphere; cutting along the corresponding arcs in $F_n$ gives a polygonal disk, and identifying its paired cut shores expresses each loop as a product of conjugates of boundary loops. The same conclusion follows by collapsing those cut arcs to a finite tree; the unfilled boundary circles supply the remaining generators. If $F_n$ is the whole sphere, its fundamental group is trivial, contradicting the boundary class of $f_n$ being outside $N_n$. Hence some boundary component of $F_n$ has class outside $N_n$. Move it slightly into $\operatorname{Int}F_n$ using [F3], without changing its free homotopy class, and call the resulting embedded polygonal circle $C$. By the PL sphere model of [F7] and the polygonal disk construction there, $C$ bounds a PL disk in $\partial V_n$. Push this disk into $V_n$ relative to $C$ by its boundary collar: in that collar use the graph of a small PL function on the disk, positive on its interior and zero on its boundary. The graph is embedded and proper and is PL after subdivision. We obtain a proper PL embedded disk $g_n:D\to V_n$ with boundary in $\operatorname{Int}F_n$ outside $N_n$. [F3, F7, step 4.1, construct]

6.1 Suppose a proper PL embedded disk $g_i:D\to V_i$ has been obtained with its boundary class outside $N_i$. Viewed in $M_i$, put it in general position with respect to its deck translate $\tau_i g_i(D)$. This requires only finite PL perturbations. Subdivide its compact image into local linear manifold charts, and perturb finitely many vertices in small stars, moving boundary vertices within the marked boundary surface. A transverse choice avoids finitely many affine dependence conditions. Such choices exist because each excluded condition is a proper affine subspace or a nonzero determinant zero set in the finite coordinate parameters; a small open parameter box is not their union. The perturbations can be chosen to preserve the embedding: in a fixed finite linear subdivision all nonincident compact simplices have positive separation, and the finitely many incident simplex fans remain injective under sufficiently small movements of their vertices. The local disk fans are flattened by taking links, which are polygonal circles or proper arcs in a PL two-sphere or disk; their finite polygonal disk parametrizations in [F7] supply the flattening. The deck involution is fixed-point-free, so paired chart neighborhoods can be chosen disjoint and impose no forced coincidence condition. The resulting projection $p_i g_i$ has only transverse double arcs and circles, and cannot have a value of multiplicity greater than two since $g_i$ is still embedded and $p_i$ has two sheets. The boundary perturbation is a homotopy inside the marked surface and preserves its class modulo $N_i$. [F3, F4, F7, step 5.1, construct]

7.1 Apply [F8] in the orientable $V_{i-1}$ to $p_i g_i$ and the normal subgroup $N_{i-1}$. Its boundary lies in $\operatorname{Int}F_{i-1}$ by the marked-neighborhood construction. Its boundary class is outside $N_{i-1}$ because its further image in $F$ is outside $N$. Thus [F8] gives a properly embedded PL disk $g_{i-1}$ with boundary class outside $N_{i-1}$. Every boundary surgery can be kept inside the open marked surface, so its boundary still lies in $\operatorname{Int}F_{i-1}$. Repeat steps 6.1–7.1 down the finite tower. No embeddedness of an intermediate disk lift is assumed after the double-curve surgeries; at the end of each descent step [F8] gives a new embedded disk, which is the input to the next descent. [F8, step 6.1, construct]

8.1 We finish with a proper PL embedded disk $g_0$ in $V_0$. Its interior is disjoint from $\partial V_0$, hence from $\partial M$, while its boundary lies in $F_0\subset\operatorname{Int}F$; it is therefore a proper embedded disk in $M$. Its boundary class maps outside $N$ by definition of $N_0$. For the final particular case, take $F$ to be the indicated boundary component and $N$ the trivial subgroup. A nontrivial element of the kernel has a nullhomotopy disk, and the preceding argument gives an embedded disk whose boundary is still nontrivial in that component. This proves the theorem. The AC assumption is exactly the inherited assumption recorded in [A1]; the tower and all perturbation and surgery choices are finite. [given, A1, step 7.1] ∎

## Remarks

This theorem starts with an actual finite PL manifold triangulation. It supplies the orientable loop-theorem input for the PL product-recognition part of Hamilton's triangulation proof. It supplies no triangulation or smoothing of an arbitrary topological three-manifold.
