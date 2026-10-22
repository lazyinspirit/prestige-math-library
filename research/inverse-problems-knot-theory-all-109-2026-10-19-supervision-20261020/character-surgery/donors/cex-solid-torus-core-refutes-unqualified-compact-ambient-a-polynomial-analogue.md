---
id: cex-solid-torus-core-refutes-unqualified-compact-ambient-a-polynomial-analogue
kind: counterexample
title: The solid-torus core refutes the unqualified compact-ambient analogue
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-orientable-seifert-pieces-with-boundary-are-irreducible
  - cor-fundamental-group-of-two-dimensional-torus
  - lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable
  - thm-seifert-van-kampen
proof_strategy: direct
axiom_use: Full AC is inherited from the accepted Seifert irreducibility supplier; the product, matrix and primitive quotient calculations are explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Baldwin and Sivek, Torus knots, the A-polynomial, and SL(2,C), Question 1.8
      url: https://arxiv.org/pdf/2405.19197v2
---

## Statement refuted

Assume full AC. The proposed extension of the disk-base Seifert characterizations to knots in all compact connected oriented smooth $3$-manifolds, allowing nonempty ambient boundary, is false. In fact let $Y=S^1\times D^2$ and $K=S^1\times\{0\}$. Its exterior is irreducible. Under the convention that the enhanced polynomial is the reduced equation of the one-dimensional irreducible peripheral-image components and is $1$ for the empty curve, that polynomial is thin. Filling the knot boundary at every primitive slope has fundamental group $\mathbb Z$, so every $SL_2(\mathbb C)$ representation of each filling has abelian image. Nevertheless the exterior admits no Seifert fibration over a disk with at most two exceptional circle fibers. This refutes the unqualified compact-with-boundary formulation, not a closed-ambient version or the established sphere-knot theorems.

## Statement references

[Baldwin and Sivek, Question 1.8](https://arxiv.org/pdf/2405.19197v2)

## Facts & Assumptions

**Given:** Full AC, the explicitly parametrized pair $(Y,K)$ of the Statement, and a product tubular neighborhood $S^1\times D^2_\epsilon$ with $0<\epsilon<1$.

[F1] A compact connected orientable smooth Seifert manifold with nonempty boundary is irreducible under full AC. The standard meaning of circle Seifert fibrations and their base is used. [[lem-orientable-seifert-pieces-with-boundary-are-irreducible]] [[def-incompressibility-seifert-fibration-and-jsj-system]] [[def-axiom-of-choice]]

[F2] The fundamental group of $T^2$ is $\mathbb Z^2$. Two commuting complex two-by-two matrices have a common invariant line. [[cor-fundamental-group-of-two-dimensional-torus]] [[lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable]]

[F3] A collared gluing computes the group as a pushout by applying the open-cover theorem after thickening both pieces across the collar; no injectivity of an overlap map is required. [[thm-seifert-van-kampen]]

## Counterexample

1.1 The exterior is exactly $E=S^1\times\{z\in D^2:\epsilon\le |z|\le1\}$, hence $T^2\times I$ by polar coordinates. Projection onto the annulus factor is a circle Seifert fibration without exceptional fibers; $E$ is compact, connected, orientable and smooth with nonempty boundary, so [F1] proves irreducibility. Its boundary consists of the two distinct tori at radial parameters $\epsilon$ and $1$. [F1, given, construct]

2.1 Contracting the interval factor gives a deformation retraction onto either boundary torus; explicitly $(x,t)\mapsto(x,(1-s)t)$ retracts onto the chosen endpoint as $s$ runs from zero to one after normalizing $I=[0,1]$. These maps fix that endpoint. Therefore $\pi_1(E)=\langle u,v\mid [u,v]=1\rangle\cong\mathbb Z^2$ by [F2], with $u$ the normal-disk angular meridian and $v$ the longitudinal $S^1$ coordinate on the inner knot boundary. Any representation sends $u,v$ to commuting matrices. By [F2] they preserve one line, and all their products do too. Thus no irreducible two-dimensional $SL_2(\mathbb C)$ representation exists. Its irreducible peripheral locus and curve are empty; by the explicitly stated empty-curve convention the enhanced polynomial is $1$, whose one-point Newton polygon is contained in an affine line. [F2, step 1.1, construct, algebra]

3.1 For any primitive $(p,q)$ choose $r,s\in\mathbb Z$ with $ps-qr=1$. The matrix with columns $(p,q)$ and $(r,s)$ induces a torus diffeomorphism; composing with a coordinate reflection if needed gives the orientation-reversing gluing which takes the attached meridian to $u^pv^q$. In the collar pushout [F3], the attached meridian maps to identity in the attached solid torus and its second basis circle maps to its core generator $c$. The group therefore has the presentation obtained by adding $u^pv^q=1$ and $c=u^rv^s$ to the presentation in step2.1. Eliminating $c$ gives $\mathbb Z^2/\langle(p,q)\rangle$. The map $(m,n)\mapsto-qm+pn$ is onto by coprimality and has kernel exactly $\mathbb Z(p,q)$, so this quotient is $\mathbb Z$. This calculation uses the actual attached solid torus and does not invoke an $S^3$-only filling definition for $Y$. [F2, F3, step 2.1, construct, algebra]

4.1 Every homomorphism from the cyclic group of step3.1 has cyclic, hence abelian, image. Thus every primitive filling slope is $SL_2(\mathbb C)$-abelian. The slopes $(p,q)=(n,1)$ for distinct integers $n$ are distinct unoriented slopes: equality up to sign forces the sign positive by their second coordinates and then forces the integers equal. Hence infinitely many such slopes occur while the ambient outer boundary remains unfilled. [step 3.1, construct, algebra]

5.1 A circle Seifert fibration over a disk, with any finite number of interior exceptional fibers, has one boundary torus. Indeed near the base boundary there are no exceptional points; its preimage is a circle bundle over the connected boundary circle, hence one connected torus in an orientable total space. The boundary of a circle-fibered three-manifold is precisely this preimage, since circle fibers have no endpoints and every interior base point has an interior solid-torus fiber neighborhood, including exceptional points. Step1.1 gives two boundary tori for $E$, so no such disk-base fibration exists, in particular none with at most two exceptional circle fibers. Combined with steps2.1 and4.1 this supplies both asserted failures of the unqualified equivalences. [F1, step 1.1, step 2.1, step 4.1, construct] ∎
