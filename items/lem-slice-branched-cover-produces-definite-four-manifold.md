---
id: lem-slice-branched-cover-produces-definite-four-manifold
kind: lemma
title: A slice-branched-cover gluing produces a closed definite four-manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-smooth-and-topological-slice-genus
  - lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball
  - def-intersection-lattice-of-a-four-manifold-with-boundary
  - lem-boundary-intersection-pairing-well-defined-and-nondegenerate
  - thm-seifert-van-kampen
  - thm-mayer-vietoris-sequence-in-singular-homology
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - thm-collar-neighborhood-theorem
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: R. H. Fox and J. W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots
      url: https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf
      locator: Introduction, smooth slice-disk convention, pp. 258–259; the local gluing construction is proved from the repository rational-ball-cover lemma, van Kampen, and Mayer–Vietoris
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Theorem 1 and §I.2, closed smooth simply connected positive-definite target and intersection-form convention
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot such that its double branched cover $M=\Sigma_2(K)$ is a rational homology sphere. Let $D\subset B^4$ be a smooth proper embedded disk with boundary $K$, and let $B_D$ be the connected double cover of $B^4$ branched over $D$. Let $W$ be a compact connected smooth simply connected oriented four-manifold with boundary identified orientation-compatibly with $M$, and assume its boundary intersection form is positive definite. Assume also that the image of $\pi_1(M)\to\pi_1(B_D)$ normally generates $\pi_1(B_D)$, meaning its normal closure is the whole group. Then the oriented gluing $X=W\cup_M(-B_D)$ is a closed smooth simply connected positive-definite four-manifold, and inclusion induces an isometric full-rank embedding $Q_W\hookrightarrow Q_X$ of integral intersection lattices with $b_2(X)=b_2(W)$.

## Statement references

[[def-cyclic-branched-cover-of-a-knot|The oriented double branched cover of a knot]]

[[lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball|A smooth slice disk has a rational-homology-ball double branched cover]]

## Facts & Assumptions

**Given:** Full AC; the knot, slice disk, rational-homology-sphere boundary, positive-definite simply connected filling, boundary identification, and normal-generation hypothesis in the statement.

[F1] For a smooth proper disk, the double cover branched over the disk is a compact connected oriented smooth four-manifold with rational homology of a point, and its boundary is the double branched cover of the boundary knot. The result does not assert a fundamental-group conclusion. [[lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball]]

[F2] The double branched cover is defined by the connected cover of the knot exterior classified by the positive-meridian map to $\mathbb Z/2$, filled along the closed lift of the squared meridian. [[def-cyclic-branched-cover-of-a-knot]]

[F3] Smooth four-ball genus is the minimum genus of a smooth proper oriented surface in $B^4$; a smooth slice disk is the genus-zero case. [[def-smooth-and-topological-slice-genus]]

[F4] The boundary form is the signed intersection pairing on the torsion-free quotient, and is rationally nondegenerate when the boundary is a rational homology sphere. [[def-intersection-lattice-of-a-four-manifold-with-boundary]] [[lem-boundary-intersection-pairing-well-defined-and-nondegenerate]]

[F5] Seifert–van Kampen computes the fundamental group of a union along a path-connected collar as the pushout of the two inclusion homomorphisms. [[thm-seifert-van-kampen]]

[F6] Mayer–Vietoris gives the singular-homology exact sequence for the collar-thickened decomposition along $M$. [[thm-mayer-vietoris-sequence-in-singular-homology]]

[F7] Smooth collars on the two boundaries allow the orientation-compatible gluing and its collar-thickened open cover. [[thm-collar-neighborhood-theorem]]

[F8] For any abelian group $A$, $A\otimes_{\mathbb Z}\mathbb Q$ is its positive-integer localization, and $a\otimes1=0$ exactly when some positive integer kills $a$. The natural coefficient map identifies $H_j(Y;\mathbb Z)\otimes\mathbb Q$ with $H_j(Y;\mathbb Q)$. [[lem-rationalization-is-exact-and-commutes-with-singular-homology]]

[A1] For this particular branched cover $B_D$, the boundary inclusion normally generates $\pi_1(B_D)$. This is an explicit additional hypothesis; it is not a consequence of the rational-homology-ball supplier [F1].

[A2] Full AC is assumed by the branched-cover and homology suppliers in [F1]–[F3].

## Proof

**Given:** The data and assumptions above.

1.1 By [F3], $D$ is a smooth proper slice disk; [F1] and [F2] then give a compact rational homology four-ball $B_D$ with boundary $M=\Sigma_2(K)$. The boundary identification in the statement permits the smooth oriented gluing $X=W\cup_M(-B_D)$; collars [F7] give a smooth closed oriented four-manifold. [given, F1, F2, F3, F7, A2, construct]

1.2 Applying [F5] to the collar-thickened union gives $\pi_1(X)=\pi_1(W)*_{\pi_1(M)}\pi_1(B_D)$. Since $\pi_1(W)=1$, this pushout is the quotient of $\pi_1(B_D)$ by the normal closure of the image of $\pi_1(M)$. That normal closure is all of $\pi_1(B_D)$ by [A1], so $\pi_1(X)=1$. [given, F5, A1, algebra]

1.3 In the rational Mayer–Vietoris sequence of [F6], $H_2(M;\mathbb Q)=H_1(M;\mathbb Q)=0$ and $H_i(B_D;\mathbb Q)=0$ for $i>0$ by [F1]. Thus inclusion induces an isomorphism $H_2(W;\mathbb Q)\cong H_2(X;\mathbb Q)$, so $b_2(X)=b_2(W)$. By [F8], $H_2(W;\mathbb Z)\otimes\mathbb Q\cong H_2(W;\mathbb Q)$, and the kernel of the integral-to-rational map is exactly the torsion subgroup. If an integral class maps to torsion in $H_2(X;\mathbb Z)$, its rational image vanishes; the isomorphism forces its rational class in $W$ to vanish, so it was torsion. Therefore the induced map on torsion-free quotients is injective and has full rank. [given, F1, F6, F8, A2, algebra]

2.1 Represent classes of $W$ by two-cycles in its interior and make two representatives transverse. Their signed intersection points are unchanged in the glued manifold, so the map of step 1.3 preserves the intersection form. Its rational extension is an isomorphism and transports the positive-definite form of $W$ to $X$; hence $Q_X$ is positive definite. [F4, step 1.3, algebra] ∎

## Unresolved proof obligations

The displayed gluing lemma is proved only with [A1]. A proof that every smooth slice-disk branched cover in this setting has boundary-normal-generated fundamental group has not been found in the inspected local suppliers. The rational homology conclusion [F1] does not supply [A1]. Consequently this lemma does not yet cover every smooth slice disk and cannot by itself certify unrestricted nonsliceness.
