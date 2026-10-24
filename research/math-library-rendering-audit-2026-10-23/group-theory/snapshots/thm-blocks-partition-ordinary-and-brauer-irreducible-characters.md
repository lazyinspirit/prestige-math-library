---
id: thm-blocks-partition-ordinary-and-brauer-irreducible-characters
kind: theorem
title: "Blocks partition the ordinary and Brauer irreducible characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-blocks-by-primitive-central-idempotents, lem-block-idempotents-lift-uniquely-from-kh-to-oh, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[F1] A block is the direct-product summand cut out by a primitive central idempotent ([[def-p-blocks-by-primitive-central-idempotents]]).

[F2] The primitive central idempotents of $kG$ correspond bijectively, under reduction, to those of $\mathcal O G$ ([[lem-block-idempotents-lift-uniquely-from-kh-to-oh]]).

[L1] Irreducible Brauer characters are attached to simple modules ([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 Because the primitive central idempotents are central, pairwise orthogonal, and sum to $1$, every module $M$ decomposes as the direct sum of the eigenspaces $eM$. [F1, given, algebra]

2.1 If $M$ is simple, only one summand in step 1.1 can be nonzero; otherwise $M$ would split as a nontrivial direct sum of submodules. So each simple $kG$-module, hence each irreducible Brauer character by [L1], lies in exactly one block. [L1, step 1.1, algebra]

3.1 By [F2], each modular block idempotent has a unique lift in $\mathcal O G$. These lifted idempotents remain central, orthogonal, and sum to $1$, and they act on $KG$-modules through $\mathcal O G\subseteq KG$. Thus step 1.1 applies to a simple $KG$-module using the lifted block idempotents: exactly one summand is nonzero. Its ordinary irreducible character consequently belongs to that unique block. [F1, F2, step 1.1, algebra] ∎
