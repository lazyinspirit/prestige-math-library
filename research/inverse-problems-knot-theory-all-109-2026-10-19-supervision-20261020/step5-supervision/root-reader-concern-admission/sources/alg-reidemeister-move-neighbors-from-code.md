---
id: alg-reidemeister-move-neighbors-from-code
kind: algorithm
title: "Enumerate Reidemeister move neighbors from a knot code"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - alg-enumerate-diagrams-up-to-crossing-bound
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: the crossing bound, code space, label permutations, finite move sites, and orientation/sign variants are all finite."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §1.2, pp. 5–7"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2, finite Reidemeister move types and variants."
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, finite dart permutations and face cycles."
verification:
  precheck: pass
---

## Definition

**Input:** A valid normalized oriented planar-diagram code $C$ for a connected one-component knot diagram, with $c$ crossings. A positive-crossing-count code records its finite crossing labels, four darts at each crossing, edge pairings, clockwise rotations, strand orientations, over/under pairs, crossing signs, and one outer face. A crossingless code records one oriented circle and its outer face.

**Output:** A finite ordered list of pairs $(E,\mu)$, where $E$ is a valid normalized one-component knot code and $\mu$ records either the finite crossing/edge relabeling identifying the unchanged planar-isotopy class or a local disk boundary, move type, and orientation/sign variant witnessing one oriented R1, R2, or R3 move from $C$ to $E$. Different labelings of the same candidate may appear more than once.

**Finite comparison rules:** Two normalized codes represent the same code class when some bijection of their finite crossing labels and edge labels carries all dart incidences, crossing rotations, orientations, signs, component cycles, and outer-face data of one code to the other. To test whether two codes differ by one move, enumerate all finite choices of local edge intervals and crossing subrecords of sizes allowed by R1, R2, or R3; test that the codes agree outside the chosen disk boundary and that the two local records are one of the standard orientation/sign variants of that move. The local-site test uses the exact variants in the oriented Reidemeister-move definition.

**Instructions:**

1. Validate $C$ with the planar-code validation procedure. If it is invalid, return its first invalid-code result.
2. Set $N:=c+2$ and run the bounded normalized-diagram enumerator with bound $N$. It returns a finite list of reconstructed one-component knot-diagram candidates.
3. For each candidate, form the finite set of normalized code representatives obtained by assigning crossing labels and edge labels in every permitted order and applying the code's normalization rule.
4. For each representative $E$, apply the finite comparison rules. Append $E$ with a relabeling certificate if it is the same code class as $C$, or with the successful local-site certificate if a comparison certifies one R1, R2, or R3 move between them. Preserve the enumerator order and retain duplicates.
5. Return the accumulated list.

The bound $c+2$ includes every one-move result because R1 changes crossing count by one, R2 by two, and R3 by zero. This procedure lists candidates one move away; it does not decide whether two arbitrary codes are related by any number of moves.

## Definition references

[[def-planar-diagram-gauss-and-dowker-codes]]

[[alg-planar-code-validation-and-diagram-reconstruction]]

[[alg-enumerate-diagrams-up-to-crossing-bound]]

[[def-oriented-reidemeister-moves]]

[Calegari, *Introduction to Knot Theory* (2025), §1.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Erickson, *Planar Graphs*, Rotation Systems](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html)
