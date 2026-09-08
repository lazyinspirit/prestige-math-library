---
id: rem-kurepa-suslin-line-tree-interface
kind: remark
title: "Kurepa’s line/tree correspondence: downstream proof contract"
status: draft
origin: pipeline
deps: [def-suslin-line-order-interface, def-aronszajn-suslin-and-special-tree]
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorems 9.13, 9.17 and 9.18, printed pp68–75; recorded equivalence with later proof ownership"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proved_here: false
verification:
  precheck: n/a
external_dependency:
  source_url: "https://euclid.colorado.edu/~monkd/jech.pdf"
  exact_statement: "In ZFC a Suslin line exists if and only if a Suslin tree exists."
  local_proof_attempt: "The definitions and independent tree constructions do not supply normalization, lexicographic branch order, completion preservation or the nowhere-separable reduction. Those steps are explicitly assigned to SET-17; no local proof is claimed."
  necessity: "Orientation to the later suslin-trees-lines-algebras-and-independence page; this recorded result has no local consumer."
---

## Statement

In ZFC, a Suslin line exists if and only if a Suslin tree exists. The line convention is [[def-suslin-line-order-interface]] and the tree convention is [[def-aronszajn-suslin-and-special-tree]]. This result is recorded here without proof and has no role as a local prerequisite.

The proof belongs to the planned page `suslin-trees-lines-algebras-and-independence`. The tree-to-line direction requires a normal-tree reduction, a lexicographic order on maximal branches, and completion while preserving ccc and nonseparability. The reverse direction requires the nowhere-separable reduction before selecting nested intervals to form a countable-level tree. These are mathematical obligations, not consequences of the two definitions. In particular distinct nodes with identical predecessor sets at a limit level cannot be treated as already separated by a first successor disagreement. The later proof must account for that normalization and for preservation under completion.

The source gives the two directions as Monk Theorems 9.13 and 9.18, with the line reduction in Theorem 9.17. The present page supplies the terminology and the independent tree constructions, but does not certify those later arguments.
