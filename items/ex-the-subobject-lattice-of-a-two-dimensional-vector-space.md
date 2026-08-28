---
id: ex-the-subobject-lattice-of-a-two-dimensional-vector-space
kind: example
title: "The subobject lattice of a two-dimensional vector space over F_2 is the diamond M_3"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice, cex-a-subobject-lattice-need-not-be-distributive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Example

Let $V=\mathbf F_2^2$. Its subspaces are $0$, the three lines through the
origin, and $V$ itself. So the subobject lattice of $V$ in
$\mathbf F_2\text{-}\mathbf{Mod}$ is exactly the diamond $M_3$.

## Facts & Assumptions

**Given:** The vector space $V=\mathbf F_2^2$.

[L1] Subobjects form a lattice in every abelian category
([[thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]]).

[L2] The A-page counterexample identifies the same diamond pattern as
non-distributive
([[cex-a-subobject-lattice-need-not-be-distributive]]).

## Verification

**Proof technique:** direct.

1.1 Over $\mathbf F_2$, the nonzero vectors of $V$ are $(1,0)$, $(0,1)$, and $(1,1)$, and each spans a distinct one-dimensional subspace. Any two distinct lines meet only in $0$, and because they are not equal each pair spans all of $V$. So the subspace lattice has exactly the five elements $0$, the three lines, and $V$. [L1, algebra]
2.1 This is the same five-element diamond described in [L2]. Hence the subobject lattice of a very familiar module can already be modular without being distributive. [L2, step 1.1] ∎