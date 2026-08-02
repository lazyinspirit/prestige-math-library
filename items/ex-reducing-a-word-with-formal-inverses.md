---
id: ex-reducing-a-word-with-formal-inverses
kind: example
title: "Reducing the word $xx^{-1}yy^{-1}x$ leaves the reduced word $x$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alphabet-words-and-reduction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Brittenham, Group Presentations, Class Notes"
      url: "https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf"
pipeline_run: null
---

## Example

For distinct letters $x,y$ in an alphabet $X$, the word

$$xx^{-1}yy^{-1}x$$

is freely equivalent to the reduced word $x$.

## Facts & Assumptions

**Given:** Distinct letters $x,y$ in an alphabet $X$.

[L1] An elementary cancellation deletes adjacent pairs $zz^{-1}$ and $z^{-1}z$, and a word is reduced exactly when no such pair occurs
([[def-alphabet-words-and-reduction]]).

[L2] Freely equivalent words are connected by finitely many elementary cancellations and reverse insertions
([[def-alphabet-words-and-reduction]]).

## Verification

**Proof technique:** direct.

1.1 Delete the initial adjacent pair $xx^{-1}$ to obtain $yy^{-1}x$. [L1, given]

2.1 Delete the initial adjacent pair $yy^{-1}$ in the resulting word to obtain $x$. [step 1.1, L1]

3.1 The one-letter word $x$ has no adjacent pair and is reduced, while steps 1.1 and 2.1 are a finite cancellation sequence; hence the two words are freely equivalent. [step 1.1, step 2.1, L1, L2] ∎
