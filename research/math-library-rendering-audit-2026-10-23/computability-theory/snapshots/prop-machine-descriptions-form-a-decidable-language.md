---
id: prop-machine-descriptions-form-a-decidable-language
kind: proposition
title: "Well-formed deterministic one-tape Turing machine descriptions form a decidable language"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, lem-machine-encoding-is-injective-and-decodable, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Under the chosen encoding of [[def-effective-encoding-of-turing-machines]], the
set of binary words that decode to well-formed deterministic one-tape Turing
machines is a decidable language.

## Facts & Assumptions

**Given:** The chosen machine encoding.

[L1] By [[lem-machine-encoding-is-injective-and-decodable]], the chosen code has a total decoder that either reconstructs the unique coded machine or reports malformed input.

[L2] By [[def-decidable-and-recognizable-language]], a language is decidable exactly when some Turing machine halts on every input and accepts exactly its members.

## Proof

**Proof technique:** direct.

1.1 On input a binary word $w$, run the total decoder from [L1]. If it reports malformed input, reject; if it returns a coded machine, accept. Because the decoder is total, this procedure halts on every input. [L1, given]

2.1 The procedure accepts exactly those binary words that decode to well-formed deterministic one-tape Turing machine descriptions. Therefore [L2] shows that the description language is decidable. [L2, step 1.1] ∎
