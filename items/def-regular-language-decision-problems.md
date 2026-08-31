---
id: def-regular-language-decision-problems
kind: definition
title: "Membership, emptiness, finiteness, equivalence, and containment for regular languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-over-an-alphabet, def-language-boolean-operations, def-dfa-acceptance-and-recognized-language, def-regular-language-by-dfa-recognition]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 15: Encodings; examples of decidable languages"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.15.pdf"
    - title: "H. Conrad Cunningham, Notes on Models of Computation, Chapter 4: Properties of Regular Languages"
      url: "https://john.cs.olemiss.edu/~hcc/docs/LinzNotes/chap04/ch04.html"
---

## Definition

The standard **DFA decision problems** for regular languages are the following.

- **Membership:** given a DFA $D$ over $\Sigma$ and a word $w\in\Sigma^*$,
  decide whether $w\in L(D)$.
- **Emptiness:** given a DFA $D$, decide whether $L(D)=\varnothing$.
- **Finiteness:** given a DFA $D$, decide whether $L(D)$ is finite.
- **Equivalence:** given DFA's $D_1,D_2$ over the same alphabet, decide whether
  $L(D_1)=L(D_2)$.
- **Containment:** given DFA's $D_1,D_2$ over the same alphabet, decide whether
  $L(D_1)\subseteq L(D_2)$.

By [[def-regular-language-by-dfa-recognition]], these are decision problems for
regular languages because a DFA is a witness for regularity.
