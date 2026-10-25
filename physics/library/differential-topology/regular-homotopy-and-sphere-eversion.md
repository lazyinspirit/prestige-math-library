---
page: regular-homotopy-and-sphere-eversion
title: Regular Homotopy and Sphere Eversion
status: published
requires:
  - formal-immersions-and-the-smale-hirsch-theorem
  - lie-groups-invariant-fields-and-the-exponential-map
  - covering-spaces-and-lifting
  - higher-homotopy-groups-and-cofiber-sequences
  - fibrations-fiber-bundles-and-homotopy-exact-sequences
  - hurewicz-whitehead-freudenthal-and-cw-approximation
  - symplectic-manifolds-moser-stability-and-darboux-weinstein-theory
  - stiefel-whitney-and-euler-classes-by-universal-constructions
  - simply-connected-plane-domains
  - the-gauss-bonnet-theorem-for-riemannian-surfaces
  - lie-subgroups-actions-and-homogeneous-spaces
items:
  - def-gauss-frame-map-of-an-immersion-into-euclidean-space
  - prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle
  - lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration
  - lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension
  - lem-the-second-homotopy-group-of-so-three-vanishes
  - def-rotation-number-of-an-immersed-oriented-circle-in-the-plane
  - lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number
  - lem-regular-homotopy-preserves-the-formal-gauss-class
  - thm-whitney-graustein-classification-of-plane-circle-immersions
  - thm-smale-classification-of-sphere-immersions-in-euclidean-space
  - lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three
  - thm-sphere-eversion
  - rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings
  - rem-regular-homotopy-allows-self-intersections-but-never-rank-drop
  - rem-sphere-immersion-groups-are-at-computations-not-dt-constructions
examples: []
---

This page applies the Smale--Hirsch theory of formal immersions. The derivative of an immersion into Euclidean space is a section of the monomorphism bundle $\operatorname{Mono}(TM,\varepsilon^n)$. Once a tangent metric is supplied, fibrewise polar normalization gives a section of the separate orthonormal Stiefel bundle $V(TM,\varepsilon^n)$. The proposition below proves the deformation retraction between these section-space models; it retains the positive-definite factor rather than identifying all injections with orthonormal frames. Formal Euclidean immersions consist of a base map together with a monomorphism section. Contracting the base-map factor and normalizing the section show that their homotopy theory is that of Stiefel-bundle sections. The differential of a regular homotopy is a path of formal data, giving the necessity half of each classification.

The page computes the two instances the design requires. For the circle in the
plane the tangent bundle is trivial, the section space has $\pi_0\cong\mathbb Z$
by degree, and the resulting invariant of an immersion is the rotation number:
this is the Whitney--Graustein classification
$\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$, with the nonzero-fold round circles
realising every nonzero integer and the Gerono lemniscate realising zero. For spheres in positive codimension the basepoint
evaluation of the section space is a Hurewicz fibration whose fibre is the
based section space; its long exact sequence, together with the connectivity of
Stiefel manifolds and the vanishing $\pi_2(\mathrm{SO}(3))=0$ proved here from
the quaternion double cover, gives Smale's classification: for $n\ge m+2$
regular homotopy classes of immersions $S^m\to\mathbb R^n$ correspond to
$\pi_m(V_m(\mathbb R^n))$, realised by the clutching difference class of the
tangent framings, and in codimension one the target-rotation loop argument upgrades the
surjection to a non-canonical bijection from
$\pi_m(\mathrm{SO}(m+1))$. The vanishing for $S^2$ in $\mathbb R^3$ makes
$\operatorname{Imm}(S^2,\mathbb R^3)$ path connected, so the standard embedding
is regularly homotopic to its inside-out reflection: this is sphere eversion.

Two closing remarks separate the phenomena. Eversion cannot be an isotopy
through embeddings, since the sign of the parametrisation relative to the
bounded complementary region changes and is computed by a continuous flux
integral; and regular homotopy permits self-intersections but never a rank
drop. The page contributes only the differential-topological reduction: the
homotopy groups of Stiefel manifolds remain algebraic-topology inputs, as the
closing remark records. Countable choice supplies the general smooth tangent structures and metrics,
and is inherited through the Smale--Hirsch and smoothing suppliers, while the non-isotopy argument additionally inherits the
axiom of choice used by Jordan--Brouwer separation.
