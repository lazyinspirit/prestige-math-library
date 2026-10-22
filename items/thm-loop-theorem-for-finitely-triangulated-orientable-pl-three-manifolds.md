---
id: thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
kind: theorem
title: "The loop theorem for finitely triangulated orientable PL three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ thm-finite-simplicial-approximation-for-maps-of-pairs, thm-covering-space-lifting-criterion, thm-homotopy-lifting-for-covering-maps, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk, lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, Theorem 3.1 and its full twofold-cover tower proof, printed pp.45–48"
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Chapter 5, Theorem 5.3 and its complete finite vertex-push/chart-induction proof, printed pp.60–63; the proof below uses paired charts for a free involution"
dependency_level: 3
---

## Statement

Let $M$ be a compact connected orientable piecewise linear three-manifold with a given finite compatible manifold triangulation and with boundary a subcomplex. Let $F\subset\partial M$ be a connected compact piecewise linear subsurface and $N\trianglelefteq\pi_1(F)$ a normal subgroup. Suppose there is a continuous map $f:(D^2,\partial D^2)\to(M,F)$ whose boundary lies in the relative interior of $F$ and has class outside $N$. Then there is a properly embedded piecewise linear disk in $M$, with boundary in the relative interior of $F$, whose boundary class is outside $N$.

In particular, if a connected boundary component has noninjective induced fundamental-group map into $M$, it contains an essential simple closed curve bounding a properly embedded piecewise linear disk in $M$. Boundary classes outside $N$ are understood up to conjugation by a basepath in $F$.

## Statement references

[[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]

## Facts & Assumptions

**Given:** $M,F,N,f$ as in the Statement.

[F1] Continuous maps of finite polyhedral pairs admit simplicial approximations homotopic as maps of pairs; PL maps admit compatible finite subdivisions ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

[F2] A finite subpolyhedron in a finitely triangulated PL three-manifold has a compact PL manifold neighborhood strongly retracting onto it, with controlled trace in a marked boundary subsurface ([[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]]).

[F3] Compact locally collared PL subpolyhedra have PL collars; in particular this applies to the boundary of a compact PL manifold and to boundary curves of a compact PL surface ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F4] A disk map lifts to any covering after fixing its initial lift ([[thm-covering-space-lifting-criterion]]). Pulling back finitely many triangulation simplices gives a finite compatible PL structure on a twofold cover. Its deck involution sends each point to the other point in the same fiber; its continuity follows by interchanging the two sheets on every evenly covered neighborhood. It has no fixed point.

[F5] If a compact connected orientable finite PL three-manifold has no connected twofold cover, its boundary components are PL spheres. This has a local proof using explicit twofold covers from finite edge cocycles, dual-cell boundary matrices, finite pivots, and finite polygonal surface reduction, with no choice assumption ([[lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold]]).

[F6] On a PL two-sphere, a simple polygonal circle bounds polygonal disks on its two sides. Finite polygonal disk parametrizations and their boundary extensions are supplied by [[lem-finite-polygonal-disk-and-collar-surgery]] after using a standard two-disk sphere model. A connected compact subsurface is planar; its finitely many boundary components bound the complementary disk regions, as follows by applying the same polygonal separation successively.

[F7] A proper PL disk immersion with only regular double arcs and circles and no values of multiplicity greater than two has an essential embedded disk with respect to any prescribed normal boundary subgroup ([[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]).

[F8] A deformation of a map lifts through a covering once an initial lift is supplied; in particular, the strong deformation retraction of a manifold neighborhood onto its disk subpolyhedron lifts starting at the identity ([[thm-homotopy-lifting-for-covering-maps]]).

## Proof

**Given:** The data above.

1.1 By [F1], replace $f$ by a PL map with boundary homotopic to the original one in $F$. Choose the approximation sufficiently fine on its compact boundary image to keep that image in $\operatorname{Int}F$. Make the map proper without changing its boundary: in a boundary collar $c(u,s)$, a push with parameter $a\ge0$ replaces the height $s$ by $\max(s,a)$ for $s$ below the collar top and is the identity elsewhere, with $a$ smaller than that top. This is a continuous PL function jointly in $(s,a)$. Choose a nonnegative PL function $a$ on the source disk, zero precisely on its boundary and everywhere sufficiently small, and apply that push to the value of the map at each point. Its straight parameter interpolation gives a homotopy relative to the source boundary. After compatible subdivisions the resulting proper PL map $f_0:D\to M$ is simplicial for one fixed finite triangulation of $D$. Its boundary class is still outside $N$. Put $D_0=f_0(D)$ and use [F2] to choose a connected compact manifold neighborhood $V_0$ retracting onto $D_0$ whose trace in $\partial M$ lies in $\operatorname{Int}F$. Let $F_0$ be the component of that trace containing $f_0(\partial D)$. [given, F1, F2, F3, construct]

2.1 If $V_0$ has a connected twofold cover $p_1:M_1\to V_0$, lift $f_0$ to $f_1:D\to M_1$ by [F4], put $D_1=f_1(D)$, and choose by [F2] a connected compact manifold neighborhood $V_1$ retracting onto $D_1$. Its trace is chosen inside the relative interior of $p_1^{-1}(F_0)$; let $F_1$ be the component containing $f_1(\partial D)$. Repeat whenever $V_i$ has a connected twofold cover. Write $q_i:V_i\to M$ for the composite of the covers and neighborhood inclusions. Then $q_if_i=f_0$, $q_i(F_i)\subset F$, and $N_i=(q_i|_{F_i})_*^{-1}(N)$ is normal. The boundary class of $f_i$ is outside $N_i$ at every stage. Orientability and the finite compatible PL structures pass to the covers and the neighborhoods. [F2, F4, step 1.1, construct]

3.1 This tower is finite. Give $D_i$ the simplicial structure obtained by lifting the original image simplices of $D_0$, irrespective of any additional subdivisions used for $V_i$. Its number of simplices is at most the number of simplices in the fixed source disk: each image simplex is the image of at least one source simplex, and each such source simplex has just one lift in the image of $f_i$. Let $\tau_i$ be the deck involution of $p_i$. The inverse image of $D_{i-1}$ is $D_i\cup\tau_i(D_i)$: every point of $D_{i-1}$ is hit by $f_{i-1}$ and its two lifts are interchanged by $\tau_i$. This inverse image is connected: lift the strong deformation retraction $r:V_{i-1}\times I\to V_{i-1}$ onto $D_{i-1}$ through $p_i$, starting at $\operatorname{id}_{M_i}$, using [F8]. The terminal map has image in $p_i^{-1}(D_{i-1})$ and fixes that preimage, since $r$ fixes $D_{i-1}$ pointwise and lifts of constant paths are constant. It is a retraction from connected $M_i$, so its image is connected. The two finite closed sets $D_i$ and $\tau_i(D_i)$ must therefore meet. Since their union is a lifted simplicial complex, their intersection contains a common simplex. Thus $\tau_i$ identifies two distinct simplices of $D_i$ under projection; they are distinct because a deck transformation fixing a simplex would fix its barycenter. Projection takes $D_i$ onto $D_{i-1}$, so $D_i$ has strictly more simplices than $D_{i-1}$. This strict increase is bounded by the fixed finite source count. We reach a last $V_n$ with no connected twofold cover. [F4, F8, step 2.1, construct]

4.1 Apply [F5] to the last $V_n$ of step 3.1. It has the required finite compatible PL manifold triangulation and orientation by step 2.1 and has no connected twofold cover. Therefore each component of $\partial V_n$ is a PL two-sphere. In particular the endpoint argument uses no general Poincaré duality theorem, singular UCT splitting or unrestricted surface-classification hypothesis; their required finite calculations have been proved in [F5]. [F5, step 2.1, step 3.1]

5.1 The marked $F_n$ is a compact connected subsurface of one of these spheres. It is planar. Its fundamental group is normally generated by its boundary circles: join its finitely many complementary disk regions by disjoint polygonal arcs in the sphere; cutting along the corresponding arcs in $F_n$ gives a polygonal disk, and identifying its paired cut shores expresses each loop as a product of conjugates of boundary loops. The same conclusion follows by collapsing those cut arcs to a finite tree; the unfilled boundary circles supply the remaining generators. If $F_n$ is the whole sphere, its fundamental group is trivial, contradicting the boundary class of $f_n$ being outside $N_n$. Hence some boundary component of $F_n$ has class outside $N_n$. Move it slightly into $\operatorname{Int}F_n$ using [F3], without changing its free homotopy class, and call the resulting embedded polygonal circle $C$. By the PL sphere model of [F6] and the polygonal disk construction there, $C$ bounds a PL disk in $\partial V_n$. Push this disk into $V_n$ relative to $C$ by its boundary collar: in that collar use the graph of a small PL function on the disk, positive on its interior and zero on its boundary. The graph is embedded and proper and is PL after subdivision. We obtain a proper PL embedded disk $g_n:D\to V_n$ with boundary in $\operatorname{Int}F_n$ outside $N_n$. [F3, F6, step 4.1, construct]

6.1 Suppose a proper PL embedded disk $g_i:D\to V_i$ has been obtained with its boundary class outside $N_i$. Regard it in $M_i$ and perturb it into general position with its deck translate, using the following finite vertex-push construction. Cover its compact image and its translate by finitely many linear coordinate balls $U$ with $U\cap\tau_iU=\varnothing$, together with boundary half-balls. In each ball triangulate the compact disk pieces and the ambient ball, shift one disk vertex a sufficiently small distance, and extend the move by coning to the fixed boundary of its ambient vertex star. The cone construction gives an ambient PL homeomorphism; the disk therefore remains embedded. In $U$, a move of $g_i$ supported in $U$ leaves $\tau_i g_i$ fixed, since that translate changes only in $\tau_iU$. Choose the finitely many shifts in general affine position relative to the fixed translated simplices. Each excluded affine dependence is a proper determinant zero set, so the allowed small open parameter box contains a choice outside their finite union. Applying $\tau_i$ shows that the paired intersection in $\tau_iU$ is also in general position. Process the finite chart pairs in order, retaining the previously treated compact pieces; later moves can be taken sufficiently small to preserve the finitely many nonzero determinants and positive separations already obtained. First do the boundary in its two-dimensional charts, and extend its moves over a small collar by [F3]; then do the interiors relative to that collar. The resulting intersections avoid sheet vertices and pairs of sheet edges. An intersection across one sheet edge and a face of the other has two incident intersection segments, and a face-face intersection is a transverse segment. Thus the double-value set is a disjoint finite union of regular polygonal circles and proper arcs, with the transverse half-plane model at their endpoints. There are no triple values because $g_i$ is embedded and $p_i$ has two sheets. The boundary motions are homotopies in the open marked surface and preserve the class modulo $N_i$. This construction uses only PL coordinate charts and cone moves, without assuming a smoothing of $M_i$. [F3, F4, step 5.1, construct]

7.1 Apply [F7] in the orientable $V_{i-1}$ to $p_i g_i$ and the normal subgroup $N_{i-1}$. Its boundary lies in $\operatorname{Int}F_{i-1}$ by the marked-neighborhood construction. Its boundary class is outside $N_{i-1}$ because its further image in $F$ is outside $N$. Thus [F7] gives a properly embedded PL disk $g_{i-1}$ with boundary class outside $N_{i-1}$. Every boundary surgery can be kept inside the open marked surface, so its boundary still lies in $\operatorname{Int}F_{i-1}$. Repeat steps 6.1–7.1 down the finite tower. No embeddedness of an intermediate disk lift is assumed after the double-curve surgeries; at the end of each descent step [F7] gives a new embedded disk, which is the input to the next descent. [F7, step 6.1, construct]

8.1 We finish with a proper PL embedded disk $g_0$ in $V_0$. Its interior is disjoint from $\partial V_0$, hence from $\partial M$, while its boundary lies in $F_0\subset\operatorname{Int}F$; it is therefore a proper embedded disk in $M$. Its boundary class maps outside $N$ by definition of $N_0$. For the final particular case, take $F$ to be the indicated boundary component and $N$ the trivial subgroup. A nontrivial element of the kernel has a nullhomotopy disk, and the preceding argument gives an embedded disk whose boundary is still nontrivial in that component. This proves the theorem. Every tower has the finite bound proved in step 3.1, and all perturbation, surgery and matrix choices are finite. No countable or arbitrary-index choice hypothesis is introduced. [given, step 7.1] ∎

## Remarks

This theorem starts with an actual finite PL manifold triangulation. It supplies the orientable loop-theorem input for the PL product-recognition part of Hamilton's triangulation proof. It supplies no triangulation or smoothing of an arbitrary topological three-manifold.
