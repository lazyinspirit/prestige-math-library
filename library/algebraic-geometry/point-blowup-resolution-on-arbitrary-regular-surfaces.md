---
page: point-blowup-resolution-on-arbitrary-regular-surfaces
title: "Point Blowup Resolution on Arbitrary Regular Surfaces"
status: draft
requires: [blowups-exceptional-divisors-and-strict-transforms,
           normalization-finiteness-for-affine-domains,
           flat-smooth-and-etale-morphisms,
           nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties]
items: [def-intersection-multiplicity-of-closed-subschemes,
        lem-increasing-sequence-of-coherent-subsheaves-stabilizes,
        def-strict-normal-crossings-divisor,
        lem-blowup-of-closed-point-of-regular-surface-is-regular,
        lem-intersection-multiplicity-drop-under-point-blowup,
        lem-point-blowup-of-integral-curve-is-finite,
        lem-normalization-factors-through-blowup-of-curve-point,
        lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center,
        thm-regularization-of-finite-normalization-curve-by-point-blowups,
        lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups,
        thm-separation-of-regular-curve-components-by-point-blowups,
        thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface]
examples: []
---

This page proves embedded resolution of a reduced curve on an arbitrary Noetherian
regular surface by finitely many point blowups, assuming that each irreducible component
has finite normalization, without a plane-curve or smoothness-over-a-field
hypothesis. It uses the blowup machinery of
[[blowups-exceptional-divisors-and-strict-transforms]], the finiteness theory of
[[normalization-finiteness-for-affine-domains]], the vocabulary of
[[flat-smooth-and-etale-morphisms]] only to keep regularity distinct from
smoothness, and the local factoriality of
[[nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties]] for the
unique-factorization property of regular local rings.

The local input is the behaviour of a single point blowup of a regular surface:
the blowup stays regular of pure dimension two
([[lem-blowup-of-closed-point-of-regular-surface-is-regular]]), and the fibre
over a closed point $p$ is $\mathbb P^1_{\kappa(p)}$ in the two-dimensional
case, while no smoothness over a ground field is asserted. The local contact of
two curve branches is measured by the intersection multiplicity
$m_p(Y\cap Z)=\operatorname{length}_{\mathcal O_{X,p}}(\mathcal O_{Y\cap Z,p})$
([[def-intersection-multiplicity-of-closed-subschemes]]); blowing up a point at
which one branch is regular decreases every contact multiplicity over that
point and makes the new exceptional contacts equal to one
([[lem-intersection-multiplicity-drop-under-point-blowup]]).

On the one-dimensional side, the blowup of an integral Noetherian curve at a
closed point is finite, with fibre the projectivized associated graded scheme,
and it is an isomorphism exactly at regular points
([[lem-point-blowup-of-integral-curve-is-finite]]). Consequently a finite
normalization factors through every point blowup, and blowing up a non-regular
point strictly increases the coherent subalgebra $\beta_*\mathcal O_{Y_1}$
inside the fixed finite normalization
([[lem-normalization-factors-through-blowup-of-curve-point]],
[[lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center]]).
Noetherian stabilization of increasing sequences of coherent subsheaves
([[lem-increasing-sequence-of-coherent-subsheaves-stabilizes]]) then forces the
regularization process to terminate after finitely many steps, both intrinsically
([[thm-regularization-of-finite-normalization-curve-by-point-blowups]]) and for
a curve inside an arbitrary Noetherian ambient scheme
([[lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups]]), where
the strict transform of the curve is computed as the intrinsic blowup.

The global theorem combines these tools. Finitely many curve components are
first regularized and then separated so that their strict transforms are
pairwise disjoint regular curves
([[thm-separation-of-regular-curve-components-by-point-blowups]]). On a regular
surface a reduced curve is already an effective Cartier divisor, and its total
transform under point blowups remains one; after separating the original components,
repeatedly lowering the maximum contact multiplicity among all components of the
total-transform support to one, and resolving the finitely many points at which
three or more components meet, the support
is a strict normal crossings divisor
([[def-strict-normal-crossings-divisor]]), which is the embedded resolution
theorem of the page
([[thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface]]). The
conclusion is SNC support with regular irreducible components; the support
itself can fail to be regular at a crossing. No relative-SNC or smoothness
assertion over a non-perfect field, or higher-dimensional resolution claim,
is included.
