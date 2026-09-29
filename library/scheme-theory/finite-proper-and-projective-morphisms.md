---
page: finite-proper-and-projective-morphisms
title: Finite Proper and Projective Morphisms
status: published
items:
  - def-affine-local-quasi-coherent-algebra
  - def-fpqc-morphism-schemes
  - lem-fpqc-cover-submersive
  - lem-fpqc-descent-properness-components
  - def-projective-morphism-pre-proj
  - def-quasi-finite-morphism-schemes
  - lem-quasi-finite-morphism-fibre-characterization
  - def-universally-closed-morphism
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - lem-finite-stable-base-change-composition
  - def-proper-morphism
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - lem-proper-local-on-base
  - def-complete-variety
  - def-quasi-projective-morphism
  - lem-affine-morphism-structure-sheaf-pushforward-localizes
  - lem-relative-spec-glues-affine-algebras
  - thm-affine-morphism-relative-spec-characterization
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-integral-finite-type-scheme-function-field
  - lem-quasi-compact-scheme-image-specialization-closed
  - lem-universally-closed-valuative-existence-quasicompact
  - def-algebraically-independent-finite-tuples-over-a-field
  - lem-relative-algebraic-constants-fg-field-finite
  - lem-line-bundles-on-projective-three-space-restrict-by-degree
  - thm-proper-morphism-closed-image
  - thm-valuative-criterion-properness
  - lem-proper-fibres-proper
  - rem-proper-not-topologically-compact-over-arbitrary-field
  - thm-finite-morphism-integral-closed
  - def-birational-morphism-schemes
  - lem-birational-morphism-principal-open-isomorphism
  - lem-curve-closed-subsets-finite
  - cor-proper-birational-normal-curve-isomorphism-off-finite-set
  - lem-projective-space-finite-type-over-base
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-pushout-schemes
  - lem-closed-gluing-of-two-projective-three-spaces-is-proper
  - thm-properness-descent-fpqc
  - cor-finite-morphism-proper
  - lem-closed-immersion-proper
  - lem-proper-source-to-separated-target-proper
  - thm-projective-morphism-proper
  - lem-uniqueness-of-twists-on-the-projective-line
  - rem-projective-versus-proper
  - thm-global-functions-proper-integral-variety
  - cor-no-nonconstant-map-proper-variety-to-affine-line
---

This page develops the affine-local algebra and valuative tools used to prove
that finite morphisms are proper and projective morphisms are proper. The
definitions allow empty schemes and arbitrary base schemes; no Noetherian
hypothesis is implicit. Its relative-Spec construction is proved here before
general quasi-coherent sheaf theory; the choice-free affine-morphism
characterization identifies an affine morphism with the relative spectrum of
its direct-image structure sheaf. Projective means a closed immersion into
one finite-dimensional $\mathbb P^n_S$ over the base, with $n=0$ allowed; this
is the H-projective convention fixed before Proj is introduced.

Under AC, fpqc base change detects quasi-compactness, finite type,
separatedness, and universal closedness, the four components used in the
properness descent result.

For a scheme-theoretic $k$-variety, the page uses **complete** for properness
of the structure morphism to $\operatorname{Spec}k$; it makes no topological
compactness claim about the set of $k$-points.

Properness is stable under arbitrary base change and composition under AC in
this development: the finite-type and universally closed parts are choice-free,
while the separatedness arguments use the local closed-immersion
base-change theorem, whose stated hypothesis is AC.
