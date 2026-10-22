---
id: lem-trefoil-double-branched-cover-is-lens-space-order-three
kind: lemma
title: "The trefoil double branched cover is a lens space of order three"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-double-branched-cover-of-an-oriented-link
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
  - lem-lift-of-two-strand-half-twist-is-annular-dehn-twist
  - def-lens-space-surgery-orientation-convention
proof_strategy: direct
axiom_use: "Uses AC only through the branched-cover and lens-space convention suppliers."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §3"
      url: "https://arxiv.org/pdf/math/0309170v1"
---

## Statement

Let $T$ be either oriented trefoil in $S^3$. Its double branched cover $\Sigma(T)$ is diffeomorphic, up to orientation reversal, to the lens space $L(3,1)$ in the convention in which $L(p,q)$ is the $p/q$ filling of the standard unknot exterior. In particular, $\pi_1(\Sigma(T))$ is cyclic of order three.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Double branched cover convention]]

[[def-lens-space-surgery-orientation-convention|Lens-space filling and orientation convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §3](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** The closure of the two-strand braid $\sigma_1^{\pm3}$ and the double-cover convention of [the definition].

[F1] A two-fold branched cover of the link complement is determined by its meridian character and extends with the specified local branch model ([[def-double-branched-cover-of-an-oriented-link]], [[lem-double-branched-cover-of-an-oriented-link-well-defined]]).

[F2] The lens-space convention identifies $L(3,1)$ with the unknot exterior filled along slope $3\mu+\lambda$ ([[def-lens-space-surgery-orientation-convention]]).

[F3] The double cover of a trivial two-arc tangle is a solid torus, and a half-twist lifts to a Dehn twist of its annular cross-section ([[lem-double-cover-of-two-arc-rational-tangle-is-solid-torus]]).

[F4] The lift of each braid half-twist is a Dehn twist whose sign is determined by the braid and annulus orientations ([[lem-lift-of-two-strand-half-twist-is-annular-dehn-twist]]).

## Proof

1.1 Cut the trefoil diagram along a sphere meeting it in four points. The two complementary trivial two-string tangles lift to solid tori by [F3], so their branched double covers form a genus-one Heegaard splitting of $\Sigma(T)$. The three repeated braid half-twists determine the meridian slope on the second solid torus by the Dehn twists in [F4]. [F1, F3, F4, given, construct]

1.2 To conclude it is $L(3,1)$ in the stated filling convention, the slope calculation must identify the lifted gluing meridian as $3\mu+\lambda$ up to an orientation-preserving change preserving the meridian-longitude basis. That calculation is not supplied locally here; the source's rational-tangle/lens-space assertion has not been expanded into a proof with the fixed basis and orientation conventions. This helper remains escalated until the explicit lift and slope matrix are computed. [F2, F3, F4, step 1.1]
