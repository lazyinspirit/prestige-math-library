---
id: rem-jacobian-presentation-independence
kind: remark
title: "Conventions and hypotheses carried by this pair"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-axiom-of-choice
  - def-jacobian-matrix-affine-algebraic-set
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-classical
  - def-tangent-cone-point
  - def-zariski-tangent-space-point
  - lem-tangent-cone-linear-span-tangent-space
  - lem-tangent-vectors-as-dual-number-points
  - thm-generic-smoothness-characteristic-zero
  - thm-regular-not-smooth-imperfect-field
  - thm-zariski-tangent-space-jacobian-kernel
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry, Ch. 4 §§d–i (Jacobians, tangent cones, regularity)"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §5.4"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
---

**Choice conventions.** Every item of this pair that needs the Axiom of Choice
declares it ([[def-axiom-of-choice]]) and passes the assumption on through the
cited suppliers; an item that does not name AC uses none of the
choice-dependent results. No incompatible-axiom branch is opened anywhere on
the pair.

**Jacobians have equation rows, and the presentation does not matter.** The
Jacobian of [[def-jacobian-matrix-affine-algebraic-set]] is read with one row
per defining equation and one column per coordinate, for the actual defining
ideal of the scheme, not for the ideal of its reduction. The kernel statement
[[thm-zariski-tangent-space-jacobian-kernel]] is proved for *every* finite
generating list of that ideal, so no result of this pair depends on the chosen
presentation; a proper subset is also covered if it still generates the same ideal; if it does not, the theorem does not identify its kernel with the tangent space of the original scheme, and the scheme-theoretic tangent space is not computed from a
reduced ideal.

**Dual numbers are used only at rational points.** The identification of the
intrinsic tangent space with the fibre of the dual-number points
[[lem-tangent-vectors-as-dual-number-points]] is asserted at $k$-rational
points and at those points only. The intrinsic definition
[[def-zariski-tangent-space-point]] is the one used at a general scheme point,
where no such identification is claimed; every statement of the pair names the
kind of point it uses.

**Tangent cones retain all initial forms.** The tangent cone
[[def-tangent-cone-point]] is the spectrum of the full associated graded ring,
without quotienting by nilpotents, and therefore remembers every initial form
of the local equation. [[lem-tangent-cone-linear-span-tangent-space]] shows
that no proper linear closed subscheme contains this cone
scheme-theoretically. The qualification is not cosmetic: the reduced cone can
span strictly less than the tangent space. At the origin of the doubled line
$\operatorname{Spec}k[x,y]/(y^2)$ the reduced cone is the line $y=0$, of
dimension one, while the tangent space is two-dimensional. The examples page
of this pair records the corresponding cone computations for plane curves, and
no computation there replaces a scheme-theoretic cone by its reduced support.

**Regularity is absolute; smoothness is relative.** Regularity is a property
of the local ring of a scheme at a point
([[def-regular-local-ring-geometric-point]]), while smoothness is a property of
a morphism, here of the structure morphism to $\operatorname{Spec}k$
([[def-smooth-morphism-classical]]).
[[thm-regular-not-smooth-imperfect-field]] shows that the two notions diverge
over imperfect fields: the spectrum of $L=k[t]/(t^p-a)$, $a\notin k^p$, is
regular at its only point but not smooth over $k$, and no equivalence between
regularity and smoothness may be quoted without the perfectness hypothesis
that the pair's perfect-field items carry.

**Target-open generic smoothness needs a smooth source.** The theorem
[[thm-generic-smoothness-characteristic-zero]] assumes the source smooth over
$k$; that hypothesis is not decoration. The examples page of this pair records
a dominant morphism of irreducible classical varieties over a smooth target
whose source has a singular point in every fibre, so that no nonempty target
open has smooth restriction. In positive characteristic the Frobenius
phenomenon defeats the arbitrary base-point-free form of Bertini; the
counterexample recorded on the examples page is stated for general linear
systems and deliberately makes no claim about the embedded hyperplane-section
case, so no item of this pair quotes it as such a claim.

## Source notes

The Jacobian row and column convention, the tangent-cone construction from the
associated graded ring, and the treatment of regularity as an absolute local
condition follow Milne, *Algebraic Geometry*, Ch. 4 §§d–i. The positive-
characteristic divergence between regularity and smoothness, and the Frobenius
failure of Bertini for general linear systems, follow the source accounts read
for the individual items; the exact locators are recorded on those items. This
remark asserts no theorem of its own: it fixes which conventions and
hypotheses the page's items actually use, and it points to the items that carry
each claim.
