---
id: thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma
kind: theorem
title: "Noether isomorphism theorems recovered from the nine lemma"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nine-lemma-in-an-abelian-category,
       def-the-quotient-of-an-object-by-a-subobject,
       thm-first-isomorphism-theorem-in-an-abelian-category,
       thm-third-isomorphism-theorem-in-an-abelian-category,
       thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Lemma 2.66"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-24
---

## Statement

The first and third isomorphism theorems in an abelian category can be
recovered by placing the standard quotient diagrams into a $3 \times 3$
short-exact-column diagram and applying the nine lemma.

## Facts & Assumptions

**Given:** The standard quotient diagrams attached to a subobject and to a
chain of subobjects.

[L1] The nine lemma reconstructs a missing short exact row from the surrounding
short exact rows and columns ([[thm-nine-lemma-in-an-abelian-category]]).

[L2] The quotient objects and the first and third isomorphism theorems are
already established in the abelian-category development
([[def-the-quotient-of-an-object-by-a-subobject]],
[[thm-first-isomorphism-theorem-in-an-abelian-category]],
[[thm-third-isomorphism-theorem-in-an-abelian-category]],
[[thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 For the first isomorphism theorem, insert the kernel, image, and cokernel factorization of a morphism into the standard $3 \times 3$ quotient diagram. The surrounding rows and columns are short exact by [L2], so [L1] forces the missing quotient row. That row is precisely the statement that the coimage and image quotients coincide. [L1, L2, given, construct]

1.2 For the third isomorphism theorem, do the same with a chain of subobjects $K \le H \le A$. The canonical quotient maps provide the surrounding short exact rows and columns, and [L1] forces the remaining quotient row. By [L2], that row is exactly the third isomorphism theorem. [L1, L2, given, construct]

2.1 Therefore the standard Noether isomorphism theorems are recoverable from the nine lemma. [step 1.1, step 1.2] ∎
