---
id: lem-canonical-twisted-fundamental-classes-over-compact-subsets
kind: lemma
title: Canonical twisted fundamental classes over compact subsets
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-the-manifold-orientation-system-is-a-local-system, def-orientation-local-system-on-a-manifold-with-boundary, def-singular-and-cellular-chain-complexes-with-local-coefficients, def-homology-and-cohomology-with-local-coefficients, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-pair-long-exact-sequences-with-local-coefficients, lem-relative-homology-mayer-vietoris-for-closed-supports, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-heine-borel-rn, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-path-connected-implies-connected, def-connected-component-and-quasicomponent, thm-topological-collaring-for-manifold-boundaries, thm-five-lemma-for-a-morphism-of-long-exact-sequences]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 3.27 and Theorem 3.43, pp.236–238, 253–254
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, pp.100–103
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $M$ be a boundaryless $n$-manifold, $R$ a commutative unital ring, and $K\subseteq M$ compact. There is a unique class
$$[M]^\mathrm{tw}_K\in H_n(M,M\setminus K;\mathcal O_M^R)$$
whose image at every $x\in K$ is the canonical local element: if $o_x$ is
either generator of the integral local group $\mathcal O_x$, it is represented
by a local relative cycle for $o_x$ carrying coefficient $o_x\otimes1_R$.
Equivalently its two typed factors are
$o_x\otimes(o_x\otimes1_R)$, the first in local integral homology and the
second in the stalk $\mathcal O_x^R$. Changing $o_x$ to $-o_x$ changes both
factors and leaves the class fixed. These classes commute with restriction
when the compact support shrinks.

If $M$ is compact with boundary $A$, the boundary orientation system from [[def-orientation-local-system-on-a-manifold-with-boundary]] has a unique relative class
$$[M,A]^\mathrm{tw}\in H_n(M,A;\mathcal O_M^R)$$
with these prescribed local images at all interior points. Its pair boundary is the canonical twisted class of $A$ for the outward-normal-first identification $\mathcal O_M^R|_A\cong\mathcal O_A^R$.

## Facts & Assumptions

**Given:** The manifold, ring, and compact support or boundary pair in the relevant clause.

[F1] [[prop-the-manifold-orientation-system-is-a-local-system]] makes $\mathcal O_M^R$ a rank-one local system. On a coordinate ball, choosing a generator trivializes both the ordinary local top-homology factor and the coefficient stalk.

[F2] [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] and
[[def-homology-and-cohomology-with-local-coefficients]] define support-relative
groups from finite local chains. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]
supplies the local small-chain comparison and excision, while
[[lem-relative-homology-mayer-vietoris-for-closed-supports]] supplies the exact
quotient-complex pattern adapted explicitly in step 1.2.

[F3] [[thm-pair-long-exact-sequences-with-local-coefficients]] supplies natural
pair sequences, and
[[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]]
supplies homotopy invariance with the displayed coefficient identifications.

[F4] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]
computes the ordinary point-local groups. [[thm-heine-borel-rn]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]], and
[[thm-path-connected-implies-connected]] supply the compactness, closedness,
and connected-ball facts used below.

[F5] [[def-connected-component-and-quasicomponent]] identifies a component as
the largest connected subset through a point.

[F6] [[def-orientation-local-system-on-a-manifold-with-boundary]] extends the
interior system across a collar and fixes the outward-normal-first boundary
identification.

[F7] [[thm-topological-collaring-for-manifold-boundaries]] gives collar cores
and homotopy equivalences; [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]
compares their pair groups.

## Proof

**Proof technique:** direct.

1.1 The local element $u_x$ is canonically typed and varies as a section. [F1]
On a coordinate ball $B$ containing $x$, choose a local integral orientation
generator $o$. Trivialize $\mathcal O_M^R|_B$ by $o\otimes1_R$. A relative
cycle for $o_x$ carrying coefficient $o_x\otimes1_R$ then represents the
element written $o_x\otimes(o_x\otimes1_R)$ and corresponds to $1_R$.
Replacing $o$ by $-o$ reverses the relative cycle and negates its coefficient,
so the class is unchanged. Transport changes both factors by the same sign.
Thus the classes $u_x$ are independent of the trivialization and form the
constant coefficient-one section in every orientation chart.

1.2 Local chains give the closed-support Mayer--Vietoris sequence needed below. [F2, F4, given]
For compact $C,D\subseteq M$, put $U=M\setminus C$, $V=M\setminus D$, and
let $Q$ be the intrinsic local chain complex of $M$. With
$Q_U=C_*^{\mathrm{sing}}(U;\mathcal O_M^R|_U)$ and similarly for $V$, the
same quotient calculation as the exact pattern in [F2] gives
$$0\longrightarrow Q/(Q_U\cap Q_V)\longrightarrow Q/Q_U\oplus Q/Q_V\longrightarrow Q/(Q_U+Q_V)\longrightarrow0,$$
where the first map is diagonal and the second is difference. The common
simplex generators give $Q_U\cap Q_V=C_*^{\mathrm{sing}}(U\cap V)$.
The local subdivision and prism comparison in [F2] identifies the last
quotient with the relative complex for $U\cup V$; coefficient transports
along affine subpaths satisfy the same face cancellations. Since compact
subsets of the Hausdorff manifold are closed by [F4], $U,V$ are open.
The resulting long exact sequence is
$$\cdots\to H_{q+1}(M\Vert C\cap D)\to H_q(M\Vert C\cup D)\to H_q(M\Vert C)\oplus H_q(M\Vert D)\to H_q(M\Vert C\cap D)\to\cdots,$$
where $H_q(M\Vert E)=H_q(M,M\setminus E;\mathcal O_M^R)$. All maps are the
support restrictions just displayed; no splitting is chosen.

2.1 Every compact convex coordinate support has vanishing, pointwise injectivity, and its canonical class. [F1, F2, F3, F4, step 1.1]
Let $C$ be nonempty and compact convex in a coordinate chart identified with
$\mathbb R^n$, and fix $x\in C$. Choose
$L>\sup_{a\in C}\lVert a-x\rVert$. Radially move each point of
$\mathbb R^n\setminus C$ to the sphere of radius $L$ about $x$. If its
initial radius is at most $L$, the ray cannot meet $C$ farther out, since
convexity with $x\in C$ would put the initial point in $C$; if the radius is
larger, the whole motion stays outside the radius-$L$ ball. The same formula
retracts $\mathbb R^n\setminus\{x\}$ to that sphere. Excision [F2], the pair
sequences and homotopy invariance in [F3], and the point-local computation
[F4] therefore identify $H_i(M\Vert C)$ with the point-local group at $x$.
It vanishes above $n$, and restriction in degree $n$ is injective. The inverse
image of $u_x$ restricts to every $u_y$ by the constant section of step 1.1,
so it is the unique canonical class. For $n=0$, a nonempty convex coordinate
support is a point and the comparison is literal; the empty support has its
unique zero class.

3.1 The three conclusions extend to finite unions of convex compact sets in one chart. [step 1.2, step 2.1]
Induct on the number of sets. On adjoining the last convex set, its
intersection with the preceding union is a union of fewer compact convex
sets, since pairwise intersections remain convex or empty. Step 1.2 and
vanishing above $n$ make restriction from the union injective. The two
canonical classes agree on the intersection by pointwise injectivity there,
so exactness glues them. Pointwise injectivity on the two pieces proves
uniqueness, and the same exact window proves vanishing above $n$.

4.1 The finite-chain enlargement proves the three conclusions for every compact support lying in one chart. [F2, F4, step 2.1, step 3.1]
Let $K$ be such a compact support and let
$\alpha\in H_i(M\Vert K)$ for $i\geq n$. By excision and the finite-chain
definition in [F2], represent it in the coordinate space by a finite local
chain $z$ whose boundary is supported outside $K$. The union $C$ of the
images of the finitely many simplices occurring in $\partial z$ is compact:
each standard simplex is closed and bounded by [F4], its continuous image is
compact, and a finite union of compact sets is compact. It is closed in the
Hausdorff manifold and disjoint from $K$. Closed coordinate balls centered at
points of $K$ and small enough to miss $C$ have interiors covering $K$; take
a finite subcover and call its union $D$. Then $D$ is a finite union of convex
compact sets, and $z$ represents a class $\alpha_D\in H_i(M\Vert D)$
restricting to $\alpha$. If $i>n$, step 3.1 makes $\alpha_D=0$. If $i=n$ and
$\alpha$ has zero image at every point of $K$, restriction of $\alpha_D$ to
each chosen ball is zero because its center lies in $K$ and point restriction
is injective there by step 2.1. Hence $\alpha_D$ is zero at every point of
$D$, and pointwise injectivity in step 3.1 makes it zero. Finally, choose
finitely many closed coordinate balls contained in the chart whose interiors
cover $K$. Their union has its canonical class by step 3.1; restricting it
realizes all $u_x$ on $K$. This proves existence,
uniqueness, and vanishing for arbitrary compact coordinate supports.

5.1 Finite chart gluing proves the boundaryless statement for every compact support. [F2, F4, step 1.2, step 4.1]
Choose finitely many coordinate balls whose smaller closed balls cover $K$
and whose closures lie in larger coordinate charts; compactness supplies the
finite family. Put $K_j=K\cap\overline B_j$. Each $K_j$ satisfies step 4.1.
When adjoining $K_j$ to the preceding union, the intersection is a finite
union of compact sets contained in the larger chart for $K_j$, hence is one
compact coordinate support and also satisfies step 4.1. Induction using the
support sequence of step 1.2 gives vanishing above $n$, degree-$n$
pointwise injectivity, and the unique class with local values $u_x$ on all of
$K$. If $K\subseteq L$, restriction of $[M]^\mathrm{tw}_L$ has those same
values on $K$, so uniqueness gives $[M]^\mathrm{tw}_K$.

6.1 Collar cores construct the unique relative twisted class for a compact manifold with boundary. [F2, F3, F6, F7, step 5.1]
Let $A=\partial M$ and $N=M\setminus A$. For sufficiently small $d>0$, let
$C_d$ be the collar of height below $d$ and put $K_d=M\setminus C_d\subset N$.
Excision and the coefficient identification in [F6] give
$H_n(N,N\setminus K_d;\mathcal O_N^R)\cong H_n(M,C_d;\mathcal O_M^R)$.
Since $C_d$ retracts onto $A$, natural pair sequences and the five-lemma
comparison in [F7] make
$H_n(M,A;\mathcal O_M^R)\to H_n(M,C_d;\mathcal O_M^R)$ an isomorphism.
Define $[M,A]^\mathrm{tw}$ as the inverse image of
$[N]^\mathrm{tw}_{K_d}$. Nested collar cores and support compatibility in
step 5.1 show that the inverse image is independent of $d$. Every interior
point lies in some $K_d$, so this class has all prescribed local images. If
two relative classes did, their difference maps for any core to a class with
zero point values, which is zero by step 5.1; the displayed isomorphism then
makes the difference zero.

7.1 The pair boundary has exactly the outward-normal-first boundary class. [F2, F3, F6, step 1.1, step 5.1, step 6.1]
In a collar half-ball, take a local boundary orientation cycle and cross it
with the collar interval oriented from positive height toward the boundary,
placing this outward direction first. Give the product chain the corresponding
ambient orientation-system coefficient from [F6]. Its relative boundary at
the terminal boundary face is the boundary orientation cycle; all remaining
faces lie off the core or cancel in pairs. Thus the pair connector sends the
local value of $[M,A]^\mathrm{tw}$ to $u_x$ at each boundary point. Connector
naturality and excision in [F2]--[F3] globalize the calculation. Since $A$ is
compact and boundaryless, pointwise uniqueness in step 5.1 gives
$\partial[M,A]^\mathrm{tw}=[A]^\mathrm{tw}$ with the stated sign.

8.1 Empty, zero-dimensional, disconnected, and choice cases are accounted for. [F2, F4, F5, step 1.1, step 1.2, step 4.1, step 5.1, step 6.1, step 7.1]
When $A=\varnothing$, step 6.1 is the support class with $K=M$. Empty
manifolds, empty supports, and the zero ring give zero groups and their unique
classes; compact zero-manifolds have empty boundary. Components of a manifold
are open because connected coordinate balls lie in the component of each
point by [F4]--[F5]. Their open cover of a compact support has a finite
subcover, so only finitely many components meet it; the intrinsic finite-chain
construction splits over these components. All singular generators,
including degenerate simplices, remain in [F2]. Every cover and ball selection
above is reduced by compactness to one finite list, and no global orientation,
path family, component basepoint family, or infinite family of primitives is
selected. Hence no AC is used. No biconditional is asserted. ∎
