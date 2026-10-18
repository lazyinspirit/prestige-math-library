---
id: lem-modc-separable-algebra-object-duals
kind: lemma
title: Object duals in the separable-algebra model of Mod(C)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
  - thm-separable-bimodule-relative-tensor-is-associative
  - def-opposite-algebra-in-braided-fusion-category
  - def-braided-monoidal-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §2.1.1 and Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

For a separable algebra object $A$ in a braided fusion category $\mathcal C$, the object represented by $A$ in the separable-algebra/bimodule 2-category has a dual represented by the opposite algebra $A^{\mathrm{op}}$ of [[def-opposite-algebra-in-braided-fusion-category]], with evaluation and coevaluation bimodules and cusp 2-isomorphisms satisfying both duality triangles.

## Proof obligation

No proof is supplied here. The missing local construction starts with the opposite-algebra convention fixed by [[def-opposite-algebra-in-braided-fusion-category]], the two evaluation/coevaluation bimodules, their module maps after relative tensoring, and the explicit cusp composites. The construction must verify the two triangle identities on all bimodule generators; source diagrams alone are not proof.
