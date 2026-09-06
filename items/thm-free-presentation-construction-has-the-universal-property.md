---
id: thm-free-presentation-construction-has-the-universal-property
kind: theorem
title: "Free-presentation construction is universal"
status: draft
origin: pipeline
deps: [def-universal-central-extension-from-a-free-presentation, lem-free-presentation-construction-is-a-central-extension, def-universal-central-extension, def-perfect-group]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

For perfect G, [F,F]/[F,R]→G is universal.

## Facts & Assumptions

**Given:** Let $E\to G$ be a central extension and lift the free generators of $F$ to $E$.

## Proof

**Proof technique:** direct.

1.1 The induced map from $F$ kills $[F,R]$ on commutators because the kernel of $E\to G$ is central.  It therefore restricts to a map $[F,F]/[F,R]\to E$ over $G$. [given]

2.1 Two choices of lifts of the free generators differ by elements of the central kernel, so their maps agree on every commutator and hence on $[F,F]$. Thus the descended map is independent of the lifts and is the unique map over $G$, proving the universal property. [step 1.1, algebra] ∎
