---
id: cor-cfls-are-not-closed-under-complement
kind: corollary
title: "Context-free languages are not closed under complement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cfls-are-not-closed-under-intersection, thm-cfl-closure-under-union-concatenation-star-and-homomorphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 11"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html"
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Statement

Context-free languages are not closed under complement.

## Facts & Assumptions

**Given:** The class of context-free languages.

[L1] By [[thm-cfls-are-not-closed-under-intersection]], context-free languages are not closed under intersection.

[L2] By [[thm-cfl-closure-under-union-concatenation-star-and-homomorphism]], context-free languages are closed under union.

[A1] De Morgan's law gives $A\cap B=(A^c\cup B^c)^c$ for languages over one alphabet.

## Proof

**Proof technique:** direct.

1.1 Assume for contradiction that context-free languages were closed under complement. Then the complements $A^c$ and $B^c$ of context-free languages would again be context-free. [given]

2.1 By [L2], the union $A^c\cup B^c$ would then be context-free, and by the contradiction hypothesis its complement would be context-free as well. By [A1], that complement is exactly $A\cap B$. So the contradiction hypothesis would force closure under intersection. [L2, A1, step 1.1]

3.1 This contradicts [L1]. Therefore context-free languages are not closed under complement. [L1, step 2.1] ∎
