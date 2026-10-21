---
id: lem-balanced-periodic-domain-morse-chern-evaluation
kind: lemma
title: "Morse Spin-c Chern evaluation on balanced periodic domains"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain
  - lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons
  - cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice only through the supplied smooth Morse Spin-c construction. The region, cap and integer clutching calculations are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and three-manifold invariants: properties and applications"
      url: "https://arxiv.org/pdf/math/0105202"
      locator: "Proposition7.5 and Lemma7.6, printed44–47; the finite surface preparation and balanced multi-mark calculation are supplied here."
---

## Statement

Assume countable choice. Supply a balanced genus-$h$ Heegaard pair with $m=h+k-1$ attaching circles in each system, $k$ marked points $\mathbf w$, one in every cut component, and the parametrized compression disks and Morse data used in the Morse Spin-c construction. Let $\mathbf x$ be a generator. For an integral periodic region domain $P$, cap its full attaching-circle boundary with these disks to obtain $H(P)\in H_2(Y;\mathbb Z)$. Write $e(P)$ for its Euler measure and $n_{\mathbf x}(P)$ for the sum of its four-quadrant average multiplicities at the generator points. Then the actual determinant line of the Morse label satisfies
$$\langle c_1(\mathfrak s_{\mathbf w}(\mathbf x)),H(P)\rangle=e(P)+2n_{\mathbf x}(P)-2\sum_{l=1}^k n_{w_l}(P).$$
Here a region with $c$ transverse right-angle corners has Euler measure $\chi-c/4$, with the equivalent signed corner convention for repeated boundary vertices. No Whitney representative, Maslov-index identity, analytic regularity or counting theorem is asserted.

## Facts & Assumptions

**Given:** The finite balanced Morse data, generator, periodic integral region chain, and the stated orientations.

[F1] The supplied cut disks and parametrized cut balls give a finite surface polygon and hence a finite region subdivision compatible with the attaching curves. [[lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons]]

[F2] The Morse Spin-c label is constructed by replacing the gradient in small tubes around the generator's index-one/index-two trajectories and the marks' index-zero/index-three trajectories. Its determinant on the three-manifold is the oriented perpendicular plane of the resulting nonvanishing field. The finite construction uses countable choice, not the full-AC classification on arbitrary spaces. [[lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain]] [[def-countable-choice]]

[F3] A unit vector field on the boundary of a three-ball extends without zeros when its degree is zero. [[cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree]]

## Proof

1.1 **Prepare an actual finite surface, without a triangulation assertion.** First add $N\Sigma$ so that all region coefficients are sufficiently positive. This does not change the capped class. To make the required preparation explicit, fix the finitely many integer attaching-circle coefficients of $\partial P$. Along each curve reserve that many boundary sheets, with the side and orientation prescribed by its coefficient. At a crossing of two curves, the four multiplicities have the form $d,d+a,d+b,d+a+b$. Resolve them into $|a|$ straight half-disk sheets on the prescribed side of the first curve, $|b|$ straight half-disk sheets on the prescribed side of the second, and full-disk sheets. Adding $N$ makes the latter number nonnegative at every crossing. Label the finitely many reserved boundary sheets along each whole circle, and glue equal labels along its intervening edges; the boundary then consists of individual full circles, each mapped with degree one in its boundary orientation. If a preliminary corner matching pairs two reserved sheets incorrectly, cut short slits from their corner sectors into the adjacent region and cross-glue the two pairs of banks. This swaps their continuations and introduces one ordinary positive branch point, with local map $z\mapsto z^2$, without changing any region degree. Finite transpositions realize the required corner permutation. Thus the straight full-circle boundary condition is an actual constructed matching, not an assumption about a maximal gluing. Glue the remaining region copies along their oppositely oriented edge copies. Around a remaining vertex the sheet permutation is a finite disjoint union of cycles; fill a cycle of length $r$ by the local oriented map $z\mapsto z^r$. This yields a compact oriented surface $F$ and a map to $\Sigma$ with the prescribed region degrees and with its boundary a union of full attaching circles. Boundary sheets are unbranched near the boundary. The construction uses only finitely many labelled copies, pairings and disks. It permits branching and self-intersections of the map, and requires neither an embedded representative nor a branched cover of a Whitney source disk. [F1, given, construct, algebra]

1.2 **The local gradient modification contributes exactly two.** In a trajectory ball trivialize the ambient oriented tangent bundle. The normalized unmodified gradient is constant on the transverse middle disk $D$. Divide the ball boundary into the two critical-point hemispheres. On the hemisphere containing the index-one critical point its degree is $-1$. A replacement with no zero has total boundary degree zero by [F3], so its restriction to $D$, constant on $\partial D$, has degree $+1$. Its oriented perpendicular plane is the pullback of $TS^2$, with Euler number $2$. Thus the replacement changes the relative plane Euler number on a positive middle disk by $+2$. Repeating the same degree calculation for the mark trajectory uses the index-zero local degree $+1$ and gives $-2$. Reverse-oriented transverse intersections change these signs. These are statements about the actual perpendicular plane, so they evaluate the determinant first Chern class, rather than a hypothetical Maslov functional. [F2, F3, construct, algebra]

2.1 **Cap away from the critical points and count the boundary terms.** Delete a sufficiently narrow collar of each boundary circle of $F$. Cap its parallel translate by a parallel translate of the supplied compression disk. In Morse coordinates an index-one disk is a middle disk in $D^1\times D^2$; pushing its boundary in the inward normal direction and rounding the product corner makes its cap transverse to the gradient, avoiding the critical point. The same construction on the opposite handlebody uses the reversed gradient coordinate. It gives a closed mapped oriented surface $\widehat F$ representing $H(P+N\Sigma)=H(P)$. On a transverse cap the gradient's perpendicular plane is its tangent plane; relative to its boundary tangent framing the cap contributes $1$. On the original region pieces its Euler obstruction is Euler measure: compute on each polygonal region with a tangent section, assigning a quarter-turn at each right-angle corner, and glue the section framings along paired edges. Opposite edge contributions cancel, and a four-sector interior vertex contributes one full turn. Consequently the total unmodified-plane obstruction is $e(P+N\Sigma)+b$, where $b$ is the number of attached cap disks. This calculation remains valid at the branch fillings of step1.1 because it concerns the pullback plane: a degree-$r$ boundary framing has $r$ times the original winding. [F1, step 1.1, construct, algebra]

3.1 **Insert the generator and mark modifications.** Each full boundary circle contains exactly one point belonging to $\mathbf x$, counted with its sheet multiplicity, since a generator has one point on each attaching circle. Therefore $b$ is the number of boundary preimages of generator points before deleting the collars. The collar deletion leaves exactly $n_{\mathbf x}(P+N\Sigma)-b/2$ interior generator preimages: locally a straight boundary sheet occupies two of the four sectors, hence has average multiplicity $1/2$, while a full sheet has multiplicity $1$. All $w_l$ preimages remain interior. Apply step1.2 at these transverse intersections, using disjoint small trajectory tubes. Adding the contributions to step2.1 gives $e(P+N\Sigma)+b+2(n_{\mathbf x}(P+N\Sigma)-b/2)-2\sum_l n_{w_l}(P+N\Sigma)$. Finally $e(\Sigma)=2-2h$, $n_{\mathbf x}(\Sigma)=m$ and $\sum_l n_{w_l}(\Sigma)=k$, so the coefficient of $N$ is $2-2h+2m-2k=0$. Subtracting this zero contribution proves the formula for the original signed domain $P$. No index comparison or existence of a holomorphic representative was used. [F2, step 1.1, step 1.2, step 2.1, algebra] ∎
