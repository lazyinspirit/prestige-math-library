---
id: alg-breadth-first-reidemeister-search
kind: algorithm
title: "Breadth-first Reidemeister search"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - alg-reidemeister-move-neighbors-from-code
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: each frontier is finite, label canonicalization is a finite search through bijections, and each neighbor list is finite."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §§1.2–1.3"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2–1.3, printed pp. 5–8, Reidemeister equivalence and knot invariants."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §2.3, pp. 10–13"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§2.3, Reidemeister moves, finite move sequences, and the need to search beyond a fixed crossing bound."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Definition

**Input:** Two valid normalized oriented planar-diagram codes $C_0,C_1$ for connected one-component knot diagrams.

**Output:** The algorithm returns Found(path) only if it has a finite sequence of code classes from $C_0$ to $C_1$, with a finite local-move certificate for each adjacent pair. It has no negative-output branch. It may run forever if the target code class is never reached.

**Instructions:**

1. Validate both input codes using the planar-code validation procedure. If either is invalid, return that first invalid-code result. For each valid code, form its canonical representative by checking all bijections of its finite crossing labels and edge labels, recomputing the prescribed edge normalization, and selecting the lexicographically least resulting code.
2. Set the initial frontier to the singleton containing the canonical representative of $C_0$. Initialize a discovered-code set with that representative and an empty predecessor record.
3. At the beginning of each breadth layer, test every code in the current frontier against the canonical representative of $C_1$. If one matches, follow its stored predecessor records back to $C_0$, reverse the resulting finite list, and return the path with its move certificates.
4. Otherwise, for each code $C$ in the current frontier, call the Reidemeister-neighbor algorithm. For each returned pair $(E,\mu)$, canonicalize $E$ by the finite relabeling procedure in step 1. If its canonical representative has not been discovered, add it to the next frontier and store $(C,\mu)$ as its predecessor record.
5. Replace the current frontier by the next frontier and repeat from step 3. If a layer is empty, continue with empty layers; do not return “inequivalent.”

Code equality in this procedure means equality of canonical representatives under the finite crossing/edge relabelings of the normalized code convention. Every loop in one layer is finite; the number of layers has no fixed bound.

## Definition references

[[def-planar-diagram-gauss-and-dowker-codes]]

[[alg-planar-code-validation-and-diagram-reconstruction]]

[[alg-reidemeister-move-neighbors-from-code]]

[Calegari, *Introduction to Knot Theory* (2025), §§1.2–1.3](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §2.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)
