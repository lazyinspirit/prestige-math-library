---
id: cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length
kind: corollary
title: "With respect to a free basis, the word length of an element is the length of its reduced word"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree, def-alphabet-words-and-reduction, thm-reduced-words-form-the-free-group, thm-normal-form-for-the-word-quotient-model, def-free-basis]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

With respect to a free basis, the word length of an element is the length of its reduced word.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L1] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L2] The Cayley graph of a free group with respect to a free basis is a tree ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[L3] An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or $x^{-1}x$. A word is **reduced** if no elementary cancellation applies. ([[def-alphabet-words-and-reduction]]).

[L4] The reduced words on $X\sqcup X^{-1}$ form a group when the product of reduced words is their concatenation followed by free reduction. ([[thm-reduced-words-form-the-free-group]]).

[L5] Every class in $W(X)/{\sim}$ contains exactly one reduced word. ([[thm-normal-form-for-the-word-quotient-model]]).

[L6] The subset $B$ is a **free basis** of $F$ if $(F,i)$ is a free group on the set $B$ in the sense of. ([[def-free-basis]]).


## Proof

**Proof technique:** direct.

1.1 A reduced word of length $n$ is an expression of length $n$, so the word length is at most the reduced length. [F1, L1, L3, L6]

2.1 An expression shorter than the reduced word would free-reduce to a second reduced word for the same element, contradicting uniqueness of normal form. [F1, L2, L3, L4, L5, step 1.1] ∎
