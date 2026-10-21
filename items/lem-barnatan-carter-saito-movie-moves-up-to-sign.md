---
id: lem-barnatan-carter-saito-movie-moves-up-to-sign
kind: lemma
title: "The even Khovanov map is unchanged up to sign by each movie move"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-barnatan-tangle-cobordism-category
  - def-countable-choice
  - def-generic-movie-of-an-oriented-knot-cobordism
  - def-khovanov-cobordism-map-up-to-sign
  - lem-khovanov-frobenius-tqft-respects-barnatan-relations
  - def-barnatan-open-tangle-cobordism-complexes
  - def-carter-saito-euclidean-local-movie-moves
  - lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms
  - lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity
  - lem-barnatan-formal-kink-retractions
  - lem-barnatan-formal-inverse-boundary-crossings
  - lem-barnatan-formal-third-reidemeister-equivalence
  - lem-barnatan-morse-movie-matrices
  - lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega through the link-level Khovanov groups. The local algebraic checks of the movie moves use no additional choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §8.3 and Theorem 5"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1475–1480; classification into three move types and the local up-to-homotopy checks"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, Lemmas 5.1–5.2"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed pp.1236–1244; distant critical points and the fifteen Carter–Saito move calculations"
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, §§6.3 and 7.1"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "§6.3, printed pp.39–40, gives the movie-level maps; §7.1 gives the c=0 integral specialization"
---

## Statement

Assume countable choice. For each Carter–Saito movie move, the two movie segments have the same incoming and outgoing oriented link diagrams and represent isotopic portions of an oriented surface cobordism relative to their boundary collars. The induced maps on the integral even Khovanov homology groups of those diagrams differ by multiplication by a single overall sign. The same conclusion holds when two disjoint critical points of the height function are interchanged.

## Statement references

[[def-khovanov-cobordism-map-up-to-sign|The map associated to a fixed generic movie]]

[[lem-khovanov-frobenius-tqft-respects-barnatan-relations|The Frobenius TQFT and the S, T, and four-tube relations]]

[[lem-barnatan-formal-kink-retractions|Explicit formal kink retractions]]

[[lem-barnatan-formal-inverse-boundary-crossings|Both inverse-crossing retractions]]

[[lem-barnatan-formal-third-reidemeister-equivalence|Both third-move constructions]]

[[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms|Scalar endomorphisms of pairings]]

[[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity|Planar homotopies and crossing simplicity]]

[[lem-barnatan-morse-movie-matrices|The five explicit Morse movie checks]]

[[lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor|The integral Frobenius functor]]

[[def-carter-saito-euclidean-local-movie-moves|The fifteen local geometric models]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §8.3 and Theorem 5](https://arxiv.org/pdf/math/0410495v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, Lemmas 5.1–5.2](https://arxiv.org/pdf/math/0206303)

[Khovanov, *A categorification of the Jones polynomial*, §§6.3 and 7.1](https://arxiv.org/pdf/math/9908171v2)

## Facts & Assumptions

**Given:** Countable choice and either one of the fifteen Euclidean local movie relations in a fixed planar outside, or an interchange of two disjoint surface-height critical events. Work first in the additive formal surface category and apply the closed-surface functor only after inserting the outside.

[A1] [[def-countable-choice]] is inherited by the geometric disk-system and link-homology suppliers. The finite cubes and matrix compositions require no further choice.

[F1] [[def-khovanov-cobordism-map-up-to-sign]] fixes the actual Bar-Natan local systems, their inverses, crossing permutations and normalization; it does not permit arbitrary automorphisms as replacement maps.

[F2] [[lem-barnatan-formal-kink-retractions]], [[lem-barnatan-formal-inverse-boundary-crossings]] and [[lem-barnatan-formal-third-reidemeister-equivalence]] provide actual internal degree zero equivalences for the three Reidemeister moves, with their displayed inverses and homotopies.

[F3] [[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]] says that the degree-zero endomorphisms of a crossingless pairing form $\mathbb Z$ generated by its identity. Its degree-zero homotopy automorphisms are therefore exactly $\pm1$.

[F4] [[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]] gives invariance of this simplicity under degree-zero equivalence and under adjoining a boundary crossing when both crossing inverse equivalences exist. The latter premises are supplied by the two physical orders in [F2]. It also gives signed planar insertion of homotopies.

[F5] [[lem-barnatan-morse-movie-matrices]] proves the five Morse relations MM11–MM15 for exactly the selected systems, including both directions and the cube signs.

[F6] [[lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor]] constructs the actual integral functor on closed surfaces, not only a conditional factorization. [[lem-khovanov-frobenius-tqft-respects-barnatan-relations]] makes it descend through S, T and four-tube. Finite matrices and chain homotopies therefore pass to the stated integral cube complexes.

[F7] [[def-carter-saito-euclidean-local-movie-moves]] specifies the fifteen coordinate models. [[def-barnatan-open-tangle-cobordism-complexes]] specifies their formal cubes and signed planar totalization.

## Proof

1.1 **Inverse clips.** For MM1–MM5, a Reidemeister move is followed by its selected inverse, possibly with a planar change of frame between them. The equations in [F2] make the composite homotopic to the identity. All reflections and compatible strand orientations use the corresponding specified local coordinate identification in [F1]; the cochain and internal shifts agree at both ends. Thus the five inverse clips satisfy their formal movie relation before any closed evaluation. [given, A1, F1, F2, F7, construct]

1.2 **Simple base frames for the five circular clips.** Each of MM6–MM10 consists solely of Reidemeister moves, so it gives a degree-zero homotopy automorphism of its starting tangle complex by [F2]. The following explicit starting frames of the models in [F7] are simple. For MM7 choose the frame before the small cusp loop: it is a single bent arc, hence a pairing. For MM8 choose the frame before the cusp crosses the third strand: its two arcs have one transverse crossing and no small loop; peeling this sole boundary crossing leaves a pairing. For MM9 choose the frame before the cubic double-curve turn: it likewise has two arcs with one crossing, which peels off at the boundary. The MM6 starting frame is two parallel arcs crossed by a third transverse arc. Its two crossings peel in order from an end of the transverse arc, leaving three disjoint arcs. More explicitly, the outermost crossing has two adjacent free legs in the disk boundary; cut a small collar rectangle containing that crossing and those legs, leaving one boundary-crossing addition to the smaller tangle. After removing it the other crossing has the same property. For MM10 the initial frame is the four small affine strand segments resolving the projected quadruple point, with six pairwise crossings. Choose a linear height not perpendicular to any segment and place upper and lower cuts beyond all six crossings. Each segment is a graph over that height. Order the six crossing heights after a small planar perturbation; the highest crossing is between adjacent outgoing strands, so its two free legs give a boundary-crossing collar rectangle. Remove it and repeat down the ordered list. This peels all six crossings and leaves a pairing, for every retained over/under order. These cuts merely parametrize the local disk and straighten its outside arcs; no crossing change is used. Thus the boundary-crossing equivalences in [F4] and [F2], beginning with [F3], prove simplicity of all five base frames. Starting the same circular clip at a different frame conjugates its endomorphism by a product of equivalences, so [F4] also gives simplicity there. [F2, F3, F4, F7, construct]

1.3 **The five Morse clips.** For MM11 use the explicit disk cancellation. For MM12 and MM13 use the two columns $D_a-T,D_b-T$ and the integral identity $D_a+D_b=2T$; the upward clips have their separately checked cap/saddle maps. For MM14 use its two circle-birth columns, with the reverse-order RII cube sign retained in both. For MM15 use the residual saddle column $(\alpha,\beta)^T$, or its actual target-retract row in the upward version, with the middle cube permutation and last-vertex sign. These are exactly the five proved calculations of [F5]. Hence the two formal maps agree up to a single sign for every nonreversible clip as well. [F1, F2, F5, construct]

2.1 **Circular clips.** The degree-zero homotopy automorphism of each MM6–MM10 base frame is therefore homotopic to $\varepsilon1$, where $\varepsilon=1$ or $-1$. This is one scalar in the formal endomorphism group of the whole local complex, not a separate sign on its states. Changing a base frame conjugates that equation by equivalences and preserves the same assertion. A relation presented as two alternative paths is equivalent to its circular clip: compose one path with the selected inverse of the other; its homotopy inverse exists by [F2]. Multiplying the circular equation by the other path therefore makes the two path maps equal up to this one sign. This proves all five circular relations without assuming that arbitrary maps between two homology groups agree up to sign. [F1, F2, F3, F4, step 1.2, algebra]

3.1 **Outside complexes and distant events.** Insert each formal equation or homotopy into the fixed planar outside by [F4]. For two distant elementary events, decompose their disjoint support disks and the outside as one planar operation. Their maps have cochain degree zero; a Morse map can have nonzero quantum degree, but the totalization signs use cochain degree alone. Acting in the first disk and then the second therefore gives the same matrix as acting in the opposite order. The crossing-order changes in [F1] are exactly the signed tensor interchanges of [F7], so the assertion also holds when a Reidemeister event changes the number or order of crossings. In particular it holds for the two distant surface-height critical events in the statement. Now all objects are closed resolutions. Apply [F6] entry by entry; its additivity, gluing and relation factorization preserve each formal chain-map equality and homotopy. The images are precisely the integral maps fixed in [F1], including empty resolutions and the identity on unaffected circles. [F1, F4, F6, F7, step 1.1, step 2.1, step 1.3, construct, algebra]

4.1 Pass to homology in step 3.1. A chain homotopy becomes equality, and the one scalar $\varepsilon$ becomes multiplication by that same overall sign on the full integral homology group. The construction covered MM1–MM5, MM6–MM10 and MM11–MM15, all their stated variants, and the distant interchanges. Thus every relation asserted in the statement preserves the selected map up to one sign. No assertion about spherical sweep-around follows from these Euclidean local computations. [A1, F1, F6, step 1.1, step 2.1, step 1.3, step 3.1] ∎
