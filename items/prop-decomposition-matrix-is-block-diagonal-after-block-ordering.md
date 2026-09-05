---
id: prop-decomposition-matrix-is-block-diagonal-after-block-ordering
kind: proposition
title: "After block ordering, the decomposition matrix is block diagonal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-decomposition-numbers-and-decomposition-matrix, thm-blocks-partition-ordinary-and-brauer-irreducible-characters]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

If the ordinary irreducible characters and irreducible Brauer characters are
ordered block by block, then the decomposition matrix becomes block diagonal.

## Facts & Assumptions

**Given:** The decomposition matrix $D=(d_{\chi\varphi})$.

[F1] The entry $d_{\chi\varphi}$ records the multiplicity of the simple
$kG$-module $S_\varphi$ in the reduction of a stable lattice affording $\chi$
([[def-decomposition-numbers-and-decomposition-matrix]]).

[L1] Ordinary irreducibles and Brauer irreducibles each belong to unique blocks
([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

## Proof

**Proof technique:** direct.

1.1 If $d_{\chi\varphi}\ne0$, then by [F1] the simple module $S_\varphi$ occurs in the reduction of a stable lattice affording $\chi$. A composition factor of a module lies in the same block as the module itself, so $\chi$ and $\varphi$ must belong to the same block. [F1, L1, given, algebra]

2.1 Therefore entries connecting two different blocks are zero. After reordering rows and columns by blocks, all nonzero entries lie inside the matching block sectors, so the matrix is block diagonal. [step 1.1, algebra] ∎
