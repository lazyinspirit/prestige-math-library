---
id: lem-jordan-invariant-domains-exclude-accidental-parabolics
kind: lemma
title: Jordan invariant domains exclude accidental parabolics
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-riemann-maps-of-jordan-domains-extend-homeomorphically
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the actual Jordan-domain uniformization and discrete-group suppliers. The additional equivariance and fixed-point arguments are explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Printed103–105 and163–165, especially accidental parabolics and Corollary8.18. Only the necessary Jordan-domain implication is proved here; the converse and the general geometrically finite stabilizer theorem are not imported as completed proofs.
---

## Statement

Assume AC. Let $H\le\mathrm{PSL}_2(\mathbb C)$ be discrete and torsion-free and preserve a Jordan domain $D$ in the sphere. For a conformal equivalence $\phi:\mathbb D\to D$, conjugation by $\phi$ realizes $H$ faithfully as a discrete group $H_0$ of disk automorphisms, and the conjugacy extends equivariantly to the Jordan boundary. A nonidentity $h\in H$ is parabolic if and only if $\phi^{-1}h\phi$ is parabolic as a disk automorphism. Otherwise both transformations are loxodromic or hyperbolic, respectively, with corresponding attracting and repelling boundary fixed points.

Consequently, if a simply connected invariant component of a discontinuity domain has a uniformizing disk action containing a hyperbolic element whose image in $H$ is parabolic, its boundary is not a Jordan curve. In particular it is not a quasidisk. This necessary condition does not assert that absence of accidental parabolics alone implies a quasidisk, geometric finiteness of $H$, or either cofinite surface quotient.

## Facts & Assumptions

**Given:** The group and invariant Jordan domain, with the actual sphere topology and a conformal uniformizer.

[F1] Each Jordan complementary domain admits a conformal disk uniformizer, and every such uniformizer extends to a homeomorphism of the closed disks, in [[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]. Its proof treats an arbitrary sphere Jordan curve by a Möbius normalization.

[F2] Every disk automorphism is $e^{i\theta}(a-z)/(1-\overline a z)$ by [[thm-disc-automorphisms-are-rotated-blaschke-factors]]. In particular it is a Möbius transformation preserving the disk and its boundary.

[F3] A discrete torsion-free Möbius group has no nonidentity elliptic elements. Its nonidentity elements have the parabolic and loxodromic normal forms and iteration limits proved in [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], Proof3.1–4.1.

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Let $f_h=\phi^{-1}h\phi$. These are biholomorphic disk automorphisms, hence have the form in [F2]. The assignment $h\mapsto f_h$ is a homomorphism. It is injective because a Möbius transformation equal to the identity on the nonempty open set $D$ fixes three distinct points and is the identity. Its image is discrete: if distinct $f_{h_n}$ tend to the identity as Möbius transformations, their values at three fixed interior disk points tend to those points. Thus $h_n$ tend at the three corresponding distinct points of $D$ to the identity values. The formula for the unique Möbius map taking one triple of distinct points to another shows $h_n\to1$ in $\mathrm{PSL}_2(\mathbb C)$, contrary to discreteness. The conjugated group is also torsion-free by injectivity. [F2, F3, given, construct, algebra]

2.1 By [F1], $\phi$ extends to a homeomorphism $\overline\phi:\overline{\mathbb D}\to\overline D$. The equality $h\phi=\phi f_h$ on the open disk extends by continuity to its closure. A nonidentity $h$ has no fixed point in $D$, since its disk conjugate would then fix an interior point. Indeed, moving such an interior fixed point to zero by a disk Möbius map makes the conjugate a rotation by [F2]; a nontrivial rational rotation has finite order, and an irrational one has powers tending to the identity, both excluded in the discrete torsion-free group of step1.1. Thus the two orbit sequences used below never start at a fixed point. [F1, F2, F3, step 1.1, given, construct]

3.1 A nonidentity disk-preserving Möbius map without an interior fixed point is either parabolic, with a single fixed point on the circle and both positive and negative iterates of any interior point tending to it, or hyperbolic, with two distinct circle fixed points and positive and negative iterates tending to the attracting and repelling one. To see the classification directly, conjugate the disk to the upper half-plane. Its maps have real fractional-linear coefficients up to a common scalar. A nonreal fixed point would bring its conjugate as a second fixed point and hence an interior fixed point. A repeated real fixed point can be moved to infinity, giving a nontrivial real translation. Two distinct real fixed points can be moved to zero and infinity, giving $z\mapsto az$ with $a>0$, $a\ne1$. The iteration assertions follow by addition or multiplication in these two forms. [F2, F3, step 2.1, construct, algebra]

4.1 Fix an interior $u$. The equivariance in step2.1 identifies the limits of $h^n\phi(u)$ and $h^{-n}\phi(u)$ with the images under $\overline\phi$ of the two disk iteration limits. By [F3], a sphere parabolic has the same limit in both directions, whereas a sphere loxodromic has two distinct limits. Since $\overline\phi$ is injective, these limits coincide exactly when the two disk limits coincide. Step3.1 therefore gives precisely parabolic-to-parabolic and hyperbolic-to-loxodromic correspondence, including the attracting/repelling labels. If a simply connected invariant component had a Jordan boundary, [F1] would apply and force this correspondence; a stated accidental parabolic contradicts it. A quasidisk has a Jordan boundary, so is excluded as well. No converse or finite-area assertion was used. [A1, F1, F3, step 2.1, step 3.1, given, construct, contradiction] ∎
