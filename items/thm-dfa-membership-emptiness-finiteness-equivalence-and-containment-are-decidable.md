---
id: thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable
kind: theorem
title: "DFA membership, emptiness, finiteness, equivalence, and containment are decidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-language-decision-problems, def-dfa-acceptance-and-recognized-language, thm-product-dfa-for-union-and-intersection, thm-complementing-accept-states-complements-the-language]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 15: Encodings; examples of decidable languages"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.15.pdf"
    - title: "H. Conrad Cunningham, Notes on Models of Computation, Chapter 4: Properties of Regular Languages"
      url: "https://john.cs.olemiss.edu/~hcc/docs/LinzNotes/chap04/ch04.html"
---

## Statement

The five decision problems named in
[[def-regular-language-decision-problems]] are decidable for DFA input.

## Facts & Assumptions

**Given:** The DFA decision problems of
[[def-regular-language-decision-problems]].

[L1] By [[def-dfa-acceptance-and-recognized-language]], a DFA accepts a word exactly when the run on that word ends in an accepting state.

[L2] By [[thm-product-dfa-for-union-and-intersection]], product constructions give DFA's for Boolean combinations built from union and intersection.

[L3] By [[thm-complementing-accept-states-complements-the-language]], complementing the accepting set of a DFA complements its language.

[A1] For languages over one alphabet, $A\setminus B=A\cap(\Sigma^*\setminus B)$ and $A\triangle B=(A\setminus B)\cup(B\setminus A)$.

## Proof

**Proof technique:** direct.

1.1 Membership is decidable by simulating the DFA on the finitely many letters of the input word and checking, via [L1], whether the final state is accepting. [L1, given]

1.2 Emptiness is decidable by a graph search from the start state through the finite transition graph: by [L1], the language is empty exactly when no accepting state is reachable. [L1, given]

2.1 Finiteness is decidable by restricting to states that are reachable from the start state and can themselves reach an accepting state. If that finite subgraph contains a directed cycle, then one may loop around the cycle arbitrarily many times before taking a path to acceptance, producing infinitely many accepted words. If it contains no directed cycle, then every accepting run has bounded length, so only finitely many words are accepted. [L1, step 1.2]

2.2 Given DFA's $D_1,D_2$, use [L3] to complement either machine and then [L2] to build DFA's for the two differences $L(D_1)\setminus L(D_2)$ and $L(D_2)\setminus L(D_1)$ and for their union. By [A1], that union is the symmetric difference, so $D_1$ and $D_2$ are equivalent exactly when the resulting DFA has empty language. Step 1.2 therefore decides equivalence. [L2, L3, A1, step 1.2, construct]

3.1 The same constructions give a DFA for $L(D_1)\setminus L(D_2)$. By [A1], the containment $L(D_1)\subseteq L(D_2)$ holds exactly when this difference language is empty, so step 1.2 also decides containment. [A1, step 1.2, step 2.2]

4.1 Steps 1.1, 1.2, 2.1, 2.2, and 3.1 decide membership, emptiness, finiteness, equivalence, and containment respectively. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎
