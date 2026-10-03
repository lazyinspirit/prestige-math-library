---
page: oriented-links-braid-closures-and-markov-equivalence
title: "Oriented Links, Braid Closures, and Markov Equivalence"
status: draft
requires: [geometric-braids-and-artin-generators,
            artin-presentation-completeness-and-braid-combing,
            manifolds-with-boundary-collars-and-orientations,
            classification-of-compact-connected-surfaces,
            the-artin-action-on-a-free-group]
items: [def-oriented-link-in-s-three-and-ambient-isotopy,
        lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy,
        lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid,
        def-closure-of-a-geometric-braid,
        lem-closure-depends-only-on-the-braid-isotopy-class,
        lem-free-homotopy-classes-of-loops-are-conjugacy-classes,
        lem-two-disjoint-circles-in-s-two-cobound-an-annulus,
        def-regular-oriented-link-diagram,
        def-planar-isotopy-of-link-diagrams,
        def-oriented-reidemeister-moves,
        lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy,
        lem-every-oriented-link-admits-a-regular-projection,
        lem-a-smooth-isotopy-of-links-can-be-put-in-general-position,
        lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times,
        thm-oriented-reidemeister-equivalence-theorem,
        def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram,
        def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
        def-reducing-arc-and-yamada-vogel-reducing-move,
        lem-a-positive-height-diagram-has-a-defect-region,
        lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity,
        lem-a-height-zero-diagram-represents-a-closed-braid,
        thm-alexanders-closed-braid-theorem,
        def-braid-index-of-an-oriented-link,
        def-markov-conjugation-and-stabilization-moves,
        lem-markov-moves-preserve-oriented-closure-isotopy,
        lem-braid-isotopic-closed-braids-are-conjugate,
        lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies,
        lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions,
        lem-braid-like-moves-can-be-moved-to-height-zero,
        lem-ordinary-exchange-moves-are-markov-sequences,
        lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case,
        lem-block-interchanges-transport-arbitrary-braid-boxes,
        lem-compensated-band-kinks-decompose-into-ordinary-markov-moves,
        lem-band-exchanges-decompose-into-ordinary-markov-moves,
        lem-the-first-four-band-comparison-is-a-compensated-band-stabilization,
        lem-the-second-four-band-comparison-is-a-compensated-band-destabilization,
        lem-the-four-band-d-pair-case-is-a-markov-sequence,
        lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves,
        thm-markovs-closed-braid-equivalence-theorem]
examples: []
---

This page builds the bridge between links in the three-sphere and braids. It
fixes the smooth category for oriented links and their ambient isotopies, then
develops regular projections, planar isotopy of diagrams and the oriented
Reidemeister moves, and proves Reidemeister's theorem in the oriented category:
two regular diagrams represent equivalent oriented links exactly when finitely
many planar isotopies and oriented R1, R2, R3 moves connect them. The
general-position perturbation of a link isotopy is the mechanism that produces
the finite sequence of moves, and each local move has a ball-supported ambient realization between lifts
agreeing outside the move ball. Arbitrary lifts of one diagram are compared
by interpolation of their height coordinates.

The second half turns a braid into a link. The closure of a geometric braid is
constructed in the standard solid torus about the braid axis, its components are
the cycles of the endpoint permutation, and the closure is shown to depend only
on the braid isotopy class; a free-homotopy argument identifies braid isotopies
of closed braids with conjugacy in the braid group. The Yamada-Vogel algorithm
then computes the height of a diagram through the coherence of its Seifert
circles: a positive-height diagram has a defect region, a reducing move lowers
the height by one, and a height-zero diagram can be put in closed-braid form on the sphere, which yields
Alexander's theorem. Markov's theorem is the corresponding statement for
closures: two closure links are equivalent exactly when the braids are related
by conjugations and stabilizations, and the page develops the Traczyk
factorization of an arbitrary Reidemeister sequence through braid isotopies and
the four-band exchange computation that makes the peak induction terminate.
The axiom of choice is carried where the annulus lemma, the transversality
arguments and the ambient isotopy extension theorem require it, and the
raw closure quotient, fixed framing and definition of the Markov moves are
choice-free. Passing from a general continuous braid to its smooth closure
class uses countable choice through smoothing and ambient isotopy extension.
