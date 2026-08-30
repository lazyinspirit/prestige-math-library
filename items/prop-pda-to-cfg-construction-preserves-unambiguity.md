---
id: prop-pda-to-cfg-construction-preserves-unambiguity
kind: proposition
title: "If a PDA has at most one accepting computation on each word, the standard PDA-to-CFG construction is unambiguous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ambiguity-and-inherent-ambiguity, thm-pda-to-cfg-construction]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $M$ be a PDA such that every word has at most one accepting computation in
$M$. Then the fragment-variable grammar $G_M$ from the standard PDA-to-CFG
construction is unambiguous.

## Facts & Assumptions

**Given:** A PDA $M$ with at most one accepting computation on each word.

[L1] By [[def-ambiguity-and-inherent-ambiguity]], a grammar is unambiguous when each generated word has exactly one leftmost derivation.

[L2] By [[thm-pda-to-cfg-construction]], the standard grammar $G_M$ is built from fragment variables and generates exactly the language of $M$.

## Proof

**Proof technique:** direct.

1.1 In the grammar $G_M$, every production choice records one concrete local decision in an accepting computation of $M$: either one normalized PDA move, or one split state used to divide a two-symbol fragment into two smaller fragments. Thus a leftmost derivation of a word in $G_M$ determines an accepting computation of $M$ on that word. [L2, given]

2.1 Conversely, the accepting computation of a word determines all of those local choices uniquely, because the first moment when each top stack symbol disappears fixes the fragment split and therefore fixes the next production in the fragment-variable grammar. So one accepting computation determines exactly one leftmost derivation in $G_M$. [L2, step 1.1]

3.1 If some generated word had two different leftmost derivations in $G_M$, steps 1.1 and 2.1 would yield two different accepting computations of $M$ on that word, contradicting the hypothesis. Therefore [L1] shows that $G_M$ is unambiguous. [L1, step 1.1, step 2.1] ∎
