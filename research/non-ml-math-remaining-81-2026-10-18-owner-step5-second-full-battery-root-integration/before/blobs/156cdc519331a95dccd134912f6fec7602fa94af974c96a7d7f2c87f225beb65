---
id: thm-anyonic-channel-projectors-are-reparenthesization-independent
kind: theorem
title: "Canonical F-move paths give the same channel operator"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [ def-anyonic-local-channel-projector, thm-mac-lane-coherence-in-the-canonical-map-form ]
justified_by: []
proof_strategy: direct
axiom_use: None; only finite compositions of associators are compared.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§2.1, Definition 2.1.1: the associator pentagon axiom."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 15–16: associator matrices and the coordinate pentagon."
verification:
  precheck: pass
---

## Statement

For fixed ordered tensor inputs and fixed source and target parenthesizations, any two sequences of canonical associator F-moves between them induce the same coordinate map. Consequently, conjugating a fixed pair-channel projection by either sequence gives the same operator on the fusion-path space.

## Facts & Assumptions

**Given:** A monoidal category, a fixed ordered list of simple input charges, two parenthesizations, and the fusion-tree bases.

[F1] The proof in [[def-anyonic-local-channel-projector]] supplies split-tree bases in any complex fusion category and invertible coordinate matrices of $h\mapsto A\circ h$. More generally, in any monoidal category where the Hom spaces and fixed bases in the Given data are available, this same postcomposition rule defines the coordinate map without a semisimplicity or unitarity hypothesis; all intermediate basis indices are retained.

[F2] [[thm-mac-lane-coherence-in-the-canonical-map-form]]: any two canonical morphisms between fixed parenthesized words on the same ordered inputs are equal.

[F3] [[def-anyonic-local-channel-projector]]: a local channel projector is conjugation of the channel projection by the chosen F-move composite.

## Proof

**Given:** The typed parenthesizations, associators, and channel projection in the Statement.

1.1 For a canonical associator map $A:T\to T'$, [F1] defines the split Hom map $A_*:h\mapsto A\circ h$. If $B:T'\to T''$, then $B_*(A_*(h))=(B\circ A)\circ h$. Thus each finite F-move sequence is the matrix of postcomposition by its canonical composite, including tensor products with identities and inverse associators. This argument applies in any monoidal category with the fixed coordinate spaces and bases posited in the Given data. [F1, construct]

2.1 The two sequences in the Statement have the same source and target parenthesized words, so their canonical morphisms are equal by [F2]. Coordinates of equal morphisms in the fixed fusion-tree bases are equal; hence the two matrix composites agree. [F1, F2, step 1.1, algebra]

3.1 Conjugating the same channel projection by equal coordinate maps gives equal operators, since matrix multiplication preserves equality and the maps are invertible. This is exactly the definition in [F3]. [F3, step 2.1, algebra] ∎
