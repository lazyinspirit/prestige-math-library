---
id: ex-the-five-bracketings-of-a-four-fold-product
kind: example
title: "The five bracketings of a four-fold tensor product with no inserted unit symbol"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-parenthesised-tensor-word, thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The five parenthesised tensor words on four letters with no inserted unit
symbol are

$$(((A\otimes B)\otimes C)\otimes D),$$
$$((A\otimes(B\otimes C))\otimes D),$$
$$(A\otimes((B\otimes C)\otimes D)),$$
$$(A\otimes(B\otimes(C\otimes D))),$$
$$((A\otimes B)\otimes(C\otimes D)).$$

The pentagon compares the two canonical routes from the first word to the
fourth one.

## Facts & Assumptions

**Given:** Parenthesised tensor words on four letters.

[L1] Parenthesised tensor words are the defined expressions on this page ([[def-parenthesised-tensor-word]]).

[L2] The number of such words on four letters is the Catalan number $C_3=5$ ([[thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers]]).

## Verification

**Proof technique:** direct.

1.1 Each displayed word uses the letters $A,B,C,D$ exactly once, contains no unit symbol, and differs only by the placement of parentheses, so each is a valid parenthesised tensor word of the kind counted in [L2]. [L1, L2]

2.1 The list has five elements, matching [L2]. Therefore it is complete. [step 1.1, L2]

3.1 The pentagon starts at $(((A\otimes B)\otimes C)\otimes D)$ and ends at $A\otimes(B\otimes(C\otimes D))$, passing through the other three displayed bracketings exactly as the coherence diagram predicts. [step 2.1, L1] ∎
