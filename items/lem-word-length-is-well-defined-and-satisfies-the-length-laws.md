---
id: lem-word-length-is-well-defined-and-satisfies-the-length-laws
kind: lemma
title: "Word length is defined on every element and satisfies the subadditivity, inversion and vanishing laws"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, def-generated-subgroup, thm-well-ordering-principle, lem-group-inverse-laws]
aliases: []
landmark: true
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

Word length is defined on every element and satisfies the subadditivity, inversion and vanishing laws.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L1] $$\langle S \rangle \;:=\; \bigcap \{\, H \;:\; H \le G \text{ and } S \subseteq H \,\}.$$ ([[def-generated-subgroup]]).

[L2] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$. ([[thm-well-ordering-principle]]).

[L3] $(gh)^{-1} = h^{-1} g^{-1}$; 4. ([[lem-group-inverse-laws]]).


## Proof

**Proof technique:** direct.

1.1 If $S$ generates, the set of lengths of expressions of $g$ is a nonempty subset of the natural numbers, so it has a least element. [F1, L1, L2]

2.1 Concatenating expressions gives subadditivity, and reversing an expression while inverting each letter gives equality of the lengths of $g$ and $g^{-1}$. [F1, L3, step 1.1]

3.1 The empty expression has length zero and represents only the identity, so word length vanishes exactly there. [F1, step 1.1] ∎
