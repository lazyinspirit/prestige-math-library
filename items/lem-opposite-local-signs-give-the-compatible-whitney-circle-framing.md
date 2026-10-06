---
id: lem-opposite-local-signs-give-the-compatible-whitney-circle-framing
kind: lemma
title: Opposite local signs give the compatible Whitney-circle framing
deps:
- def-countable-choice
- def-local-oriented-intersection-sign
- lem-transverse-complementary-spheres-have-product-charts
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
- thm-weak-whitney-proper-embedding-theorem
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-gram-schmidt-orthonormalisation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed pp. 139-140 (the splitting $\omega^*\tau_M=\alpha_1\oplus\alpha_2$,
      the orthogonal splitting at either double point, and the statement that $I(x)=-I(y)$ is exactly what makes
      both bundles isomorphic to $\mu\oplus\epsilon^{n-1}$)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Lemma 6.13 and its proof, printed pp. 80-83 (the frame fields $E_1,\dots,E_{r-1}$ tangent to $M$ along
      $C$ and to $M'$ along $C'$, and the use of opposite intersection numbers at $p,q$)
proof_strategy: direct
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a clean Whitney bigon for complementary embedded sheet neighbourhoods $A^a,B^b$ along its two boundary arcs, $a+b=m$, $a,b\ge2$. Orient these sheet neighbourhoods and a neighbourhood of $W$. If the two corner intersection signs are opposite, there is an admissible orthogonal splitting of the rank-$(m-2)$ disk normal bundle along its boundary into ranks $a-1$ and $b-1$. Its first summand is tangent to $A$ on the $A$ arc and normal to $B$ on the $B$ arc; its second is orthogonal to the first and tangent to $B$ on the $B$ arc. Smooth frames of these summands can be chosen compatibly at the corners, with fixed corner collars. They are adjustable data: no preferred full-frame homotopy class or extension of every prescribed frame is asserted. The rounded boundary circle has normal rank $m-1$, its inward disk-normal line being the additional line. Closed globally oriented sheets in an oriented ambient manifold are a special case. A neighbourhood of any embedded disk is orientable, even if the whole ambient manifold is not.

## Facts & Assumptions

[F1] Complementary transverse embedded sheets have simultaneous product charts at their intersection. [[lem-transverse-complementary-spheres-have-product-charts]]

[F2] The local sign compares the ordered tangent spaces of the two sheets with the ambient orientation. [[def-local-oriented-intersection-sign]]

[F3] Under Countable Choice a smooth manifold admits a proper finite-dimensional Euclidean embedding. [[thm-weak-whitney-proper-embedding-theorem]]

[F4] A linear matrix initial-value problem with continuous coefficients has a unique solution on the prescribed compact interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F5] Jointly smooth finite-dimensional ODE coefficients give smooth local solution dependence on parameters; uniqueness permits composition along a compact solution interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F6] Under Countable Choice every open cover of a smooth manifold has a subordinate smooth partition of unity. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F7] Gram–Schmidt orthonormalizes a finite independent list for a positive-definite inner product and preserves its successive spans. [[thm-gram-schmidt-orthonormalisation]]

## Proof


**Given:** The local sheet and tube orientations, a clean embedded bigon with its fixed corner collars, and opposite corner signs.

1.1 Choose a metric near the bigon that is product in the corner charts and along the sheet collars. The complementary-sheet product charts identify the inward disk tangent at each end of the $B$ arc with the $A$-arc velocity at its first end and its negative at the other end. Along the $A$ arc choose an oriented orthonormal $(a-1)$-frame $E$ tangent to $A$ and orthogonal to the disk. This bundle over an interval can be framed explicitly: embed the ambient manifold in Euclidean space, take its smooth orthogonal projection onto the relevant tangent subbundle, and transport an initial basis along the interval by $U'=[P',P]U$. For $K=[P\prime,P]$, $K^T=-K$ and $[K,P]=P\prime$, so uniqueness gives $U^TU=I$ and $UP(0)U^T=P$. This yields a smooth basis, which [F7] orthonormalizes in the chosen product metric. The same procedure gives a frame for the normal-to-$B$, disk-orthogonal bundle over its arc. [given, construct, F1, F3, F4, F6, F7]

2.1 Compare $E$ at the two corners in the oriented normal bundle of $B$. The full $a$-frame consisting of the inward disk tangent followed by $E$ has sign $\varepsilon(p)$ at the first corner and $-\varepsilon(q)$ at the other: the inward tangent is the $A$-arc velocity at the first corner and its negative at the second. The assumed opposite signs therefore place both prescribed endpoint $(a-1)$-frames in the same oriented frame component. In a trivialization of this interval bundle the comparison matrices lie in $SO(a-1)$. This group is path connected: finitely many plane rotations align its columns, with the final one-dimensional determinant forced to be one. For $a-1=1$ both comparison matrices are the identity. Interpolate by such a smooth rotation path, constant in the fixed endpoint collars. This extends $E$ over the $B$ arc as a frame normal to $B$ and to the disk, giving an admissible partial frame all around the boundary. [step 1.1, construct, algebra, F1, F2]

3.1 On the boundary take the orthogonal complement of $E$ inside the disk normal bundle. Its rank is $b-1$, and on the $B$ arc it is precisely the tangent-to-$B$, disk-orthogonal bundle. It is oriented by the tube and the chosen frame $E$. Its frames can be interpolated along the two arcs with matched corner values by the same interval transport and connected-$SO(b-1)$ argument. This produces the required admissible boundary frame. Adjustments by based loops within a summand fix the subspace and corner values but can change the total frame class; orientation and interval path connectivity do not remove this freedom. Hence there is no preferred class. [step 2.1, construct]

4.1 To justify the local orientation assertion, embed the ambient manifold in Euclidean space and along $W$ take the smooth projection $P$ onto the orthogonal complement of $TW$ in $TX|_W$. Use its pullback to the convex bigon coordinates, centered at an interior point. Radial transport $U'=[P',P]U$ from the centre gives a smooth full normal frame over the disk, by the matrix ODE and parameter-dependence suppliers. Orient the disk and this normal frame. Their wedge is a nowhere-zero section of the determinant line of $TX$ along $W$. Extend this section locally in ambient charts, using smooth extensions of the cornered embedding, and patch the extensions by [F6]; on $W$ they all restrict to the same section. The patched section stays nonzero on an open neighbourhood of the compact disk and hence orients that neighbourhood. Rounding the cornered boundary adds the inward tangent-to-disk line to this rank-$(m-2)$ normal bundle, giving boundary-circle rank $m-1$. Thus all sign comparisons needed above use local orientations alone. [step 1.1, step 3.1, construct, F3, F4, F5, F6] ∎
