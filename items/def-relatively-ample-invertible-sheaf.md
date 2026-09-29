---
id: def-relatively-ample-invertible-sheaf
kind: definition
title: "Relative ampleness over an arbitrary base"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-ample-invertible-sheaf
  - def-quasi-compact-and-quasi-separated-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.38.1 (Tag 01VG)"
      url: https://stacks.math.columbia.edu/tag/01VG
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Let $f:X\to S$ be a morphism of schemes and let $L$ be an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]). Suppose first that $f$ is
quasi-compact ([[def-quasi-compact-and-quasi-separated-morphism]]). Then $L$
is **$f$-ample**, or **ample relative to $S$**, when for every affine open
subscheme $U\subseteq S$ the restriction
$$L|_{f^{-1}(U)}$$
is an ample invertible sheaf on the scheme $f^{-1}(U)$ in the absolute sense
of [[def-ample-invertible-sheaf]].

The definition is well posed: $f^{-1}(U)$ is quasi-compact because $f$ is
quasi-compact and $U$ is quasi-compact (being affine), so the scheme
$f^{-1}(U)$ satisfies the quasi-compactness clause required of an ample
invertible sheaf, and ampleness of the restriction is then a condition on the
affine nonvanishing loci of its positive powers. The empty scheme is allowed
on both sides: if $f^{-1}(U)=\varnothing$ the restriction is ample
vacuously, and if $S=\varnothing$ the condition is vacuous.

## Remarks

- **Affine base.** If $S=\operatorname{Spec}R$ is affine, then
  $f^{-1}(S)=X$ and the single condition on $U=S$ says that $L$ is ample on
  $X$ in the absolute sense; so for an affine base $f$-ampleness is exactly
  ampleness of [[def-ample-invertible-sheaf]], with no extra hypothesis
  beyond quasi-compactness of $f$, which for an affine base is the
  quasi-compactness of $X$.
- **Nonaffine base.** The definition is stated for every affine open of $S$
  precisely because over a nonaffine base a globally ample
  $\mathcal O_X$-module need not have ample restriction to every open
  subscheme; relative ampleness is a hypothesis on the restrictions, not on
  $L$ itself.
- **Relation to relative very ampleness.** Under the Axiom of Choice ([[def-axiom-of-choice]]), H-very ampleness relative to $S$
  is defined at [[def-very-ample-invertible-sheaf-relative]] and implies
  $f$-ampleness by [[lem-very-ample-implies-ample]]; the converse fails in
  general, and the sufficient criterion in the proper, finite-type,
  Noetherian case is [[thm-ample-powers-very-ample-proper-base]].
