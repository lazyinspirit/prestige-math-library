---
id: fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character
kind: false-statement
title: "FALSE: every block has one ordinary and one Brauer irreducible character"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-blocks-partition-ordinary-and-brauer-irreducible-characters, prop-decomposition-matrix-is-block-diagonal-after-block-ordering]
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

## Statement

Every block contains exactly one ordinary irreducible character and exactly one
irreducible Brauer character.

## Facts & Assumptions

**Given:** The cyclic group $C_p$ at the prime $p$.

[L1] Blocks partition the ordinary and Brauer irreducible characters
([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

[L2] After ordering by blocks, the decomposition matrix is block diagonal
([[prop-decomposition-matrix-is-block-diagonal-after-block-ordering]]).

## Refutation

**Proof technique:** direct.

1.1 The group algebra $kC_p$ has only one irreducible Brauer character, namely the trivial one, because $C_p$ is a $p$-group. But over characteristic $0$, the cyclic group $C_p$ has $p$ distinct ordinary irreducible characters. [given, algebra]

2.1 By [L1], all of those characters are distributed among the blocks of $C_p$, and [L2] shows that the decomposition data are organized blockwise. Since there is only one Brauer irreducible, some block contains more than one ordinary irreducible character. [L1, L2, step 1.1]

3.1 Therefore the statement is false. [step 2.1] ∎
