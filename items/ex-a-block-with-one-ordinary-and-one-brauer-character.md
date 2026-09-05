---
id: ex-a-block-with-one-ordinary-and-one-brauer-character
kind: example
title: "A block with one ordinary and one Brauer character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-blocks-by-primitive-central-idempotents, thm-blocks-partition-ordinary-and-brauer-irreducible-characters, ex-brauer-characters-of-a-p-group]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Example

In the characteristic-$2$ decomposition matrix of $S_3$, the block containing
the standard ordinary character has exactly one ordinary irreducible character
and one irreducible Brauer character.

## Facts & Assumptions

**Given:** The characteristic-$2$ decomposition matrix of $S_3$, already ordered by blocks, $$ \begin{pmatrix} 1&0\\ 1&0\\ 0&1 \end{pmatrix}, $$ whose last row is the ordinary standard character and whose last column is the $2$-dimensional irreducible Brauer character.

[L1] A $p$-group example shows what a one-Brauer-character block looks like ([[ex-brauer-characters-of-a-p-group]]).

## Verification

**Proof technique:** direct.

1.1 In the displayed block-ordered matrix, the last diagonal sector is the $1\times1$ block $(1)$. [given, algebra]

2.1 That sector therefore corresponds to a block containing exactly one ordinary irreducible character and exactly one irreducible Brauer character, namely the standard row and the $2$-dimensional Brauer column. This contrasts with [L1], where having one Brauer character does not force a unique ordinary one. [L1, step 1.1]

3.1 So such one-row one-column blocks do occur. [step 2.1] ∎
