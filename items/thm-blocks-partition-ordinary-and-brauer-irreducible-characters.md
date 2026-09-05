---
id: thm-blocks-partition-ordinary-and-brauer-irreducible-characters
kind: theorem
title: "Blocks partition the ordinary and Brauer irreducible characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-blocks-by-primitive-central-idempotents, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
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

Every ordinary irreducible character and every irreducible Brauer character
lies in exactly one block.

## Facts & Assumptions

**Given:** The primitive central idempotents of the modular system of $G$.

[F1] A block is the direct-product summand cut out by a primitive central
idempotent
([[def-p-blocks-by-primitive-central-idempotents]]).

[L1] Irreducible Brauer characters are attached to simple modules
([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 Because the primitive central idempotents are central, pairwise orthogonal, and sum to $1$, every module $M$ decomposes as the direct sum of the eigenspaces $eM$. [F1, given, algebra]

2.1 If $M$ is simple, only one summand in step 1.1 can be nonzero; otherwise $M$ would split as a nontrivial direct sum of submodules. So each simple $kG$-module, hence each irreducible Brauer character by [L1], lies in exactly one block. [L1, step 1.1, algebra]

3.1 The same argument over characteristic $0$ applies to simple $KG$-modules and therefore to ordinary irreducible characters. Hence both ordinary and Brauer irreducibles are partitioned by blocks. [F1, step 1.1, algebra] ∎
