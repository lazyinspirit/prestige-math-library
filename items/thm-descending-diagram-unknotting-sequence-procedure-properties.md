---
id: thm-descending-diagram-unknotting-sequence-procedure-properties
kind: theorem
title: The descending-diagram procedure terminates on admissible finite codes
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - alg-descending-diagram-unknotting-sequence
  - def-knot-planar-code
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, printed pp. 23–25, finite diagram traversal"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
      locator: "§§1.2–3.2, finite diagram encodings and scans"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For every admissible finite planar code of a regular oriented knot diagram and every basepoint in the interior of an edge, move the basepoint slightly forward along that same edge to a point away from bends if necessary, and then call the descending-diagram procedure. It terminates, visits each crossing record once, and returns a finite updated code and a crossing-change list with at most one entry per crossing. The updated code is admissible and its first-encounter branch at each crossing is the overpassing branch. The output code and crossing-change list are independent of this basepoint adjustment within the edge. No claim about efficient minimization of $u(K)$ is made.

## Statement references

[[alg-descending-diagram-unknotting-sequence|The algorithm and its admissible input format]]

[[def-knot-planar-code|Finite edge, vertex, orientation, and crossing records]]

## Facts & Assumptions

**Given:** An admissible finite planar code $D$ with $c$ crossing records and a basepoint in an edge interior.

[F1] The code contains finite vertex, edge, and half-edge sets, a coherent cyclic traversal of one oriented circle, and one over/under label at each crossing. [[def-knot-planar-code]]

[F2] The algorithm performs one oriented traversal, records a crossing only at its first encounter, and changes that crossing exactly when the first branch is under. [[alg-descending-diagram-unknotting-sequence]]

## Proof

**Given:** The admissible code and basepoint in the statement.


1.1 The polygonal drawing has finitely many bends. If the basepoint is a bend in the geometric interior of its edge, choose a short forward segment within that edge containing no crossing or other bend and move the basepoint into its interior. The adjusted point satisfies the algorithm's input condition. Moving the point within the same oriented edge crosses no crossing vertex, so it changes neither the cyclic order of crossing encounters nor the first branch reached at any crossing. Thus the adjustment leaves the crossing-change list and updated code independent of its choice. The code has finitely many edges and crossing records by [F1]. Following its coherent half-edge pairings from the basepoint returns to the starting edge after finitely many incidences, so the traversal terminates. It visits each crossing record once at first encounter, giving exactly $c$ processing operations. [F1, F2, given, construct, algebra]

2.1 Each operation either leaves the over/under label unchanged or exchanges the two labels once. It does not change vertices, edges, cyclic orders, branch pairings, orientations, or the rational drawing certificate; hence all validity conditions in [F1] remain satisfied. The resulting list has at most $c$ entries, and every recorded first underpass has become an overpass while first overpasses remain over. [F1, F2, step 1.1, algebra] ∎

## Sources

[[def-knot-planar-code]]

[[alg-descending-diagram-unknotting-sequence]]
