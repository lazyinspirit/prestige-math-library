---
id: thm-carter-saito-movie-move-equivalence
kind: theorem
title: "Movie-move equivalence for surface cobordisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-generic-movie-of-an-oriented-knot-cobordism
  - def-countable-choice
  - def-carter-saito-euclidean-local-movie-moves
  - lem-euclidean-surface-isotopies-have-carter-saito-movie-decompositions
  - lem-spherical-cobordism-isotopies-reduce-to-sweep-around-events
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Scott Morrison, Kevin Walker and Paul Wedrich, Invariants of 4-manifolds from Khovanov–Rozansky link homology"
      url: "https://arxiv.org/pdf/1907.12194"
      locator: "p.2, movie (1.1) and the necessary distinction between Euclidean and spherical ambient isotopies; §4."
    - title: "Hoel Queffelec and Kevin Walker, Movie moves for framed foams from multijet transversality"
      url: "https://arxiv.org/pdf/2205.14947"
      locator: "Unframed smooth-sheet calculations in §§4.4–4.5 derive classical MM1–MM15; no framing or seam cases are used for the ordinary surface specialization."
    - title: "J. Scott Carter and Masahico Saito, Reidemeister moves for surface isotopies and their interpretations as moves to movies"
      url: "https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167"
      locator: "Journal of Knot Theory and Its Ramifications 2 (1993), pp.251–284; classification by the fifteen movie moves"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, §4.2"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed p.1235; statement of the Carter–Saito movie-equivalence theorem used in the proof"
    - title: "Hilary Hunt, Movie presentations of isotopies, §5.2"
      url: "https://tqft.net/web/research/students/HilaryHunt/thesis.pdf"
      locator: "Thesis pp.42–44; statement and illustrated movie moves, with proof referred to Carter–Saito"
---

## Statement

Assume countable choice. Let $\Sigma_0,\Sigma_1\subset S^3\times[0,1]$ be compact smooth properly embedded oriented surfaces from fixed oriented knots $K_0$ to $K_1$, with the same boundary parametrizations and product collars. Suppose their generic movies represent ambient isotopic cobordisms by an isotopy fixed on those collars. Then one movie can be changed to the other by a finite sequence of the fifteen Carter–Saito movie moves, sweep-around moves, and interchanges of two disjoint elementary movie events (including disjoint critical points of the surface-height function). A sweep-around moves a closing arc of a one-interval tangle over the tangle to its other side and back underneath, or reverses that movie; geometrically it is a local sheet passage through the missing vertical arc in a spatial chart $S^3\setminus\{\infty\}$. Every intermediate movie represents a generic surface cobordism with the same fixed boundary data.

## Statement references

[[def-generic-movie-of-an-oriented-knot-cobordism|Generic movies and boundary collars]]

[[lem-spherical-cobordism-isotopies-reduce-to-sweep-around-events|The additional spherical sweep-around events]]

[[def-carter-saito-euclidean-local-movie-moves|The fifteen local Euclidean models and distant interchanges]]

[[lem-euclidean-surface-isotopies-have-carter-saito-movie-decompositions|The complete unframed Euclidean movie decomposition]]

[Carter and Saito, *Reidemeister moves for surface isotopies and their interpretations as moves to movies*, pp.251–284](https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §4.2](https://arxiv.org/pdf/math/0206303)

[Hunt, *Movie presentations of isotopies*, §5.2](https://tqft.net/web/research/students/HilaryHunt/thesis.pdf)

## Facts & Assumptions

**Given:** Countable choice, the two fixed-boundary generic movies and the stated ambient isotopy of their oriented traced cobordisms in $S^3\times I$.

[A1] [[def-countable-choice]] is used through the two geometric suppliers.

[F1] [[def-generic-movie-of-an-oriented-knot-cobordism]] supplies traced movies, their actual orientations, parametrized boundary and product collars.

[F2] [[lem-spherical-cobordism-isotopies-reduce-to-sweep-around-events]] proves that an actual spherical comparison of two Euclidean traced cobordisms factors into finitely many Euclidean ambient isotopies and local sheet passages through the missing vertical arc, the sweep-around events.

[F3] [[lem-euclidean-surface-isotopies-have-carter-saito-movie-decompositions]] proves the finite Euclidean decomposition into the fifteen types and distant interchanges, with its independent-jet, local normal-form and finiteness arguments. The local types and all orientation/height variants are [[def-carter-saito-euclidean-local-movie-moves]].

## Proof

1.1 Use the actual smooth traced realizations of the two planar movies, with their prescribed endpoint realizations and collars. These lie in the standard spatial chart $S^3\setminus\{\infty\}$; by [F1] and the hypothesis, their oriented traces have the specified spherical isotopy relative to those collars. Apply [F2]. The comparison is a finite sequence of Euclidean isotopies and isolated sweep-around events, with the same parametrized boundary. At the intermediate cuts choose generic movies fixed on the retained collars; the same finite-jet construction in [F3] applies with these cuts protected. [given, A1, F1, F2, F3, construct]

2.1 On each Euclidean isotopy interval, [F3] replaces its comparison by finitely many of the fifteen local moves, distant interchanges and planar isotopies. All hidden-coordinate height orders and orientations are preserved. At each missing-arc passage retain the sweep-around supplied by [F2]; it is not silently replaced by a Euclidean move. The two boundary movies of each interval match those at the adjacent pieces, because the construction fixes the chosen cuts and collars. [A1, F2, F3, step 1.1, construct]

3.1 Concatenate these finite lists. There are finitely many intervals and passages, so the total list is finite. Every retained frame is a regular frame of a generic traced surface, and every elementary replacement has its stated oriented local trace with the same outside and boundary data. Consequently all intermediate movies have the prescribed parametrized knots and collars. The total sequence starts and ends at the given movies and proves the claimed spherical comparison. [F1, F2, F3, step 1.1, step 2.1] ∎

## Source and scope note

The fifteen Euclidean types are derived locally from the unframed smooth-sheet calculations in Queffelec–Walker, not from a citation standing in for a proof. Their full framed-foam theorem and its seam moves are not premises here. The spherical step uses the separately proved missing-arc incidence reduction, in accordance with the explicit distinction on p.2 of Morrison–Walker–Wedrich. The original Carter–Saito publisher text was not retrieved; no reading of that unavailable article is claimed. A homology theory must still prove its own sweep-around map identity; this geometric theorem does not establish one.
