---
id: lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions
kind: lemma
title: "Irreducible finite PL manifolds admit finite boundary disk decompositions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-classification-of-compact-connected-surfaces
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Corollary9.4.11, printed p.299; the finite disk-decomposition, boundary-ball and genus-termination arguments used in that proof are supplied below."
axiom_use: "Full AC is inherited from the stated surface-classification and cutting suppliers. A single finite terminating disk sequence requires no new infinite choice."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with nonempty boundary and a supplied finite simplicial manifold triangulation. Assume every locally flat PL sphere in its interior bounds a PL ball in its interior. Then there is a finite sequence of cuts along two-sided properly embedded locally flat PL disks whose boundary is essential on the boundary of the component being cut. Every cut piece remains irreducible and injects on fundamental groups into $M$. The terminal pieces are either parametrized PL balls or compact irreducible PL manifolds with nonempty boundary, every boundary component of positive genus, and every proper PL disk cobounding a PL ball with a disk in the boundary. All their boundary components inject on fundamental groups into their respective pieces.

If $X$ ranges over the original boundary components and $g(X)$ denotes their orientable genus, the number of cuts is at most $\sum_X\max(0,2g(X)-1)$. In particular, either some closed orientable two-sided locally flat PL surface of positive genus in the interior of $M$ injects on fundamental groups into $M$, or a finite disk sequence cuts $M$ entirely into PL balls. In the latter case reversing the cuts expresses $M$ as a finite union of parametrized balls with finitely many PL one-handles attached to paired boundary disks. This last description specifies the meaning of handlebody here; no smooth or arbitrary topological triangulation conversion is asserted.

## Statement references

[[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

## Facts & Assumptions

**Given:** The finite PL manifold and interior sphere-ball property in the Statement.

[F1] A closed connected oriented surface has Euler characteristic $2-2g$, with $g$ a nonnegative integer; genus zero is the sphere. The finite PL disk lemma also gives a disk region bounded by any nullhomotopic simple PL circle and proves the finite graph-spine construction for a compact surface with boundary. [[thm-classification-of-compact-connected-surfaces]] [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F2] Cutting along a properly embedded two-sided PL disk preserves irreducibility and makes every piece-group inclusion injective: the disk group is trivial, so it satisfies the stated injection hypothesis of the finite cutting lemma. [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[F3] For a two-sided finite PL surface, absence of compressing disks is equivalent to injectivity on fundamental groups, and all complementary piece groups inject. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F4] Compact locally collared PL polyhedra have PL collars. Specified boundary disk maps extend over parametrized balls, and two parametrized balls glued along boundary disks give a parametrized ball. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]

[A1] Full AC is retained for [F1] and [F2]. [[def-axiom-of-choice]]

## Proof

**Given:** The manifold in the Statement; a disk boundary is essential when it does not bound a disk on the incident boundary surface.

1.1 All cut pieces have finite PL triangulations: refine the finite charts to contain the disk and its collar and cut the finitely many incident simplices along that collar. Their boundary components are closed oriented finite PL surfaces. For such a component, the genus in [F1] can be computed from its finite Euler characteristic. When the genus is zero it has a PL sphere parameter, not merely a topological sphere parameter. Indeed remove a small polygonal disk in one triangle. The remaining compact surface has Euler characteristic one. The finite triangle-collapse construction in [F1]'s disk-lemma proof gives it a finite graph spine and exhibits it as that graph's regular neighborhood, by reversing the finitely many triangle removals. The connected graph has $1-\chi=0$ independent cycles, hence is a tree. A thickening of a finite tree is a PL disk: start with vertex disks and join them by edge rectangles in a leaf ordering; each added leaf disk and rectangle extends a disk along one boundary interval. Capping it by the removed disk gives a PL sphere, with the prescribed seam parameters extended over the two disks. This proves the PL parameter claim used below without inferring a PL conclusion from an arbitrary topological homeomorphism. [F1, F4, given, construct, algebra]

1.2 A proper PL disk $D$ in an irreducible piece, whose boundary bounds a PL disk $E$ on the boundary, cobounds a PL ball with $E$. Use the boundary collar to move the seam $\partial D=\partial E$ slightly inward and round the PL corner by subdividing its finite angular sectors. The resulting interior sphere consists of the trimmed $D$, an inward parallel copy of $E$, and their collar strip. Let $B$ be its interior ball. The short collar toward the original $E$ is outside $B$, since it is connected to $\partial C$ without crossing this sphere. Adjoin that collar ball along the inward copy of $E$. This is the union of two parametrized balls along a boundary disk, so [F4] makes it a parametrized ball. Its boundary is exactly $D\cup E$ after undoing the seam push. All seam maps used here extend over the ball windows by [F4]; thus the construction preserves the given PL category. [F1, F4, given, construct]

2.1 If an irreducible connected piece $C$ has a sphere boundary component $X$, it is a parametrized ball and has no other boundary. Push $X$ a short distance into its PL collar to get an interior PL sphere $Q$. It bounds a PL ball $B$ in the interior of $C$. The collar segment between $X$ and $Q$ is on the outside of $B$, since it meets $\partial C$ and is connected off $Q$. The remainder of $C$ after deleting that open collar is connected: expanding or shrinking the collar gives a deformation retraction from $C$ to this remainder. The ball $B$ is closed in that remainder and is also relatively open there: its interior is open, and at every point of $Q$ its local half-ball is exactly the side away from the deleted collar. Connectedness of the remainder therefore makes it exactly $B$. In particular it has no other boundary. Extend a sphere boundary parameter of $B$ over the attached collar by radial layers. This parametrizes $B$ together with the collar as a PL ball; layer prisms can be subdivided and mapped by compatible coning. Thus $C$ is a PL ball. [F4, step 1.1, given, construct]

2.2 For a finite collection of current pieces define $W=\sum_X\max(0,2g(X)-1)$, summing over their boundary components. A cut along a proper disk with essential boundary compresses precisely its incident closed boundary surface $X$ along that boundary circle: remove an annular neighborhood of the circle and insert the two disk faces. If the circle does not separate $X$, this replaces genus $g\ge1$ by genus $g-1$. Its contribution to $W$ drops by two for $g\ge2$, and by one for $g=1$. If the circle separates $X$, essentiality and [F1] imply the two capped sides have genera $g_1,g_2\ge1$, with $g_1+g_2=g$. The old contribution $2g-1$ becomes $(2g_1-1)+(2g_2-1)=2g-2$, a drop of one. All other boundary contributions are unchanged. These genus formulas also follow directly by counting the Euler characteristic after annulus removal and disk insertion. Thus each allowed disk cut lowers the nonnegative integer $W$ by at least one. [F1, step 1.1, algebra]

3.1 Cut whenever a current component has a proper PL disk with essential boundary. At each stage [F2] preserves irreducibility and injectivity of its piece groups. Each cut creates at most two components, still with nonempty boundary, and by step 2.2 there can be at most the original $W$ cuts. This existence argument can be expressed as induction on $W$: if no allowed disk exists stop, and otherwise fix one disk and apply the induction hypothesis at the strictly smaller value. It makes only finitely many selections and does not assume an infinite greedy sequence. In the terminal collection no boundary component admits a compression disk. Sphere boundary components force their whole connected piece to be a ball by step 2.1. All remaining boundary components have positive genus, and step 1.2 makes every proper disk in such a terminal piece boundary parallel in the exact disk-ball sense of the Statement. Finite composition of [F2]'s injections gives each terminal piece-group injection into $M$. [F2, step 2.1, step 1.2, step 2.2, construct]

4.1 Every boundary component $X$ of a terminal nonball piece $C$ injects into $C$. To apply [F3] to an interior two-sided surface, push $X$ into a smaller boundary collar to a parallel copy $X'$. If a compression disk of $X'$ is on the collar side, its boundary is nullhomotopic on $X'$ because projection of the collar onto $X'$ is a retraction; [F1] then contradicts essentiality. If the disk is on the other side, attach its boundary to $X$ through the product collar. Trimming corners gives a proper disk compressing the original boundary $X$, contradicting terminality. A compression disk lies on one of these two sides, since its connected interior misses $X'$. Therefore $X'$ has no compressing disk, so [F3] makes $\pi_1(X')\to\pi_1(C)$ injective. The collar homotopy identifies this with the boundary inclusion. [F1, F3, F4, step 3.1, construct, algebra]

5.1 If any terminal component is a nonball, its positive-genus boundary copy $X'$ from step 4.1 is a closed two-sided surface in its interior, injective into that piece and hence, by step 3.1, into $M$. Under the disk collar identifications it is an interior PL surface in $M$ as well. If none is a nonball, the finite disk system cuts $M$ entirely into parametrized balls. Reversing any disk cut attaches its product neighborhood $D^2\times[-1,1]$ along the two disk faces; this is exactly a PL one-handle, whether its feet lie on the same current component or on different components. Restoring the finitely many prescribed collar identifications recovers $M$ as balls with these one-handles. The genus bound and all stated alternatives now follow. [F2, F4, step 2.2, step 3.1, step 4.1, construct, algebra] ∎
