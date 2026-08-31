---
id: ex-the-word-category-on-words-of-length-three
kind: example
title: "The word category on words of length three"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-the-category-of-binary-words, thm-the-category-of-binary-words-is-monoidal]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Example

Among the unit-free binary words of length three, there are exactly two objects:
$$((-\square-)\square-),\qquad (-\square(-\square-)).$$

## Facts & Assumptions

**Given:** The binary-word category $W$.

[L1] Binary words are built recursively from $e_0$, $(-)$, and $\square$, with length determined additively ([[def-the-category-of-binary-words]]).

[L2] The category $W$ is monoidal and therefore has the unique structural arrows between equal-length bracketings ([[thm-the-category-of-binary-words-is-monoidal]]).

## Verification

**Proof technique:** direct.

1.1 A unit-free length-three word must be obtained by combining exactly three copies of $(-)$ with two binary operations. Up to the placement of brackets, the only possibilities are $((-\square-)\square-)$ and $(-\square(-\square-))$. Words of length three containing one or more copies of $e_0$ also exist, but are outside this unit-free subcollection. [given, L1]

1.2 These two words have the same length, so there is exactly one morphism between them in each direction. In the monoidal structure of [L2], those are the associator and its inverse at the generator. [L1, L2]

2.1 Thus the unit-free part of the length-three slice of $W$ is the basic coherence picture: two bracketings and one canonical comparison each way. [step 1.1, step 1.2] ∎
