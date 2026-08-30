---
id: cor-regular-languages-are-closed-under-boolean-operations
kind: corollary
title: "Regular languages are closed under the Boolean operations over a fixed alphabet"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-language-by-dfa-recognition, thm-product-dfa-for-union-and-intersection, thm-complementing-accept-states-complements-the-language]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 4"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf"
---

## Statement

Fix an alphabet $\Sigma$. If $L,K\subseteq\Sigma^*$ are regular, then every
Boolean combination of $L$ and $K$ inside the same ambient $\Sigma^*$ is also
regular.

## Facts & Assumptions

**Given:** Regular languages $L,K\subseteq\Sigma^*$.

[L1] Regular languages are exactly the languages recognized by DFA's, by
[[def-regular-language-by-dfa-recognition]].

[L2] The product construction gives DFA's for union and intersection, by
[[thm-product-dfa-for-union-and-intersection]].

[L3] Complementing the accepting states complements the recognized language, by
[[thm-complementing-accept-states-complements-the-language]].

## Proof

**Proof technique:** direct.

1.1 By [L1], choose DFA's recognizing $L$ and $K$. Then [L2] gives DFA's recognizing $L\cup K$ and $L\cap K$, and [L3] gives a DFA recognizing $\Sigma^*\setminus L$. [given, L1, L2, L3]

2.1 The remaining Boolean operations are obtained from union, intersection, and complement by ordinary set identities inside the fixed ambient set $\Sigma^*$. For instance, $L\setminus K=L\cap(\Sigma^*\setminus K)$ and the symmetric difference is $(L\setminus K)\cup(K\setminus L)$. [algebra, step 1.1]

3.1 Therefore every Boolean combination of $L$ and $K$ over the fixed alphabet $\Sigma$ is regular. [step 1.1, step 2.1] ∎
