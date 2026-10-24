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

Every block contains exactly one ordinary irreducible character and exactly one
irreducible Brauer character.

## Facts & Assumptions

**Given:** The cyclic group $C_p$ at the prime $p$.

[L1] Blocks partition the ordinary and Brauer irreducible characters ([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

[L2] After ordering by blocks, the decomposition matrix is block diagonal ([[prop-decomposition-matrix-is-block-diagonal-after-block-ordering]]).

## Refutation

**Proof technique:** direct.

1.1 The group algebra $kC_p$ has only one irreducible Brauer character, namely the trivial one: in characteristic $p$, a generator acts on every simple module as $1$, since $(g-1)^p=0$. Over a splitting field of characteristic $0$, $C_p$ has $p$ distinct ordinary irreducible characters, all linear. Each has a stable rank-one lattice, whose reduction is a one-dimensional $kC_p$-module and hence the trivial Brauer character. Thus every ordinary character has decomposition number $1$ in the unique Brauer column. [given, algebra]

2.1 By [L1] and [L2], a nonzero decomposition number joins an ordinary character to a Brauer character in the same block. Step 1.1 therefore places all $p$ ordinary irreducibles in the single block containing the trivial Brauer character. For any prime $p\ge2$, that block contains more than one ordinary irreducible. [L1, L2, step 1.1]

3.1 Therefore the statement is false. [step 2.1] ∎
