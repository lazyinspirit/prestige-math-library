---
id: thm-derivation-parse-tree-correspondence
kind: theorem
title: "Derivations and parse trees correspond"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-leftmost-and-rightmost-derivation, def-parse-tree-and-yield]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Statement

Let $G=(V,\Sigma,P,S)$ be a context-free grammar and let $w\in\Sigma^*$.

1. The word $w$ is derived from $S$ in $G$ if and only if there exists a parse
   tree for $G$ with yield $w$.
2. Every parse tree for $G$ determines a unique leftmost derivation of its
   yield and a unique rightmost derivation of its yield.

## Facts & Assumptions

**Given:** A context-free grammar $G=(V,\Sigma,P,S)$ and a word $w\in\Sigma^*$.

[L1] Leftmost and rightmost derivations are the derivations that rewrite the leftmost or rightmost remaining variable at each step, by [[def-leftmost-and-rightmost-derivation]].

[L2] A parse tree is finite; each internal node labelled $A$ records exactly one production $A\to x_1\cdots x_k$ whose ordered children carry the labels $x_1,\ldots,x_k$; variable leaves may represent $\varepsilon$-productions; and the yield is the left-to-right list of terminal leaves, by [[def-parse-tree-and-yield]].

## Proof

**Proof technique:** direct.

1.1 Suppose first that $S\Rightarrow_G^* w$. Start with one root labelled $S$ and process the derivation step by step. When a step rewrites a current leaf labelled $A$ by a nonempty right-hand side $x_1\cdots x_k$, make that leaf an internal node with ordered children labelled $x_1,\ldots,x_k$. When a step uses $A\to\varepsilon$, leave that leaf in place as the variable leaf corresponding to the $\varepsilon$-production. Because the derivation is finite, this constructs a finite parse tree whose nodes record exactly the productions used in the derivation. [given, L2, induction]

1.2 Conversely, suppose a parse tree for $G$ has yield $w$. Start from the sentential form $S$ and repeatedly rewrite the leftmost variable leaf represented in the fixed tree: if that leaf is an internal node of the tree with ordered children $x_1,\ldots,x_k$, apply the production $A\to x_1\cdots x_k$; if it is a variable leaf corresponding to $A\to\varepsilon$, apply that $\varepsilon$-production. By [L2], every step is licensed by $G$, and by construction every step is leftmost in the sense of [L1]. Because the tree is finite, this process terminates after one step for each variable-labelled node, and the final terminal frontier is exactly the yield $w$. [given, L1, L2, construct]

2.1 At the end of the construction in step 1.1, the leaves read left to right are exactly the symbols of the terminal word $w$, because each derivation step replaces one leaf occurrence of $A$ by the same ordered right-hand side that the tree stores. So a derivation of $w$ yields a parse tree whose yield is $w$. [step 1.1, L2]

2.2 The choice in step 1.2 is forced: at each stage there is a unique leftmost variable leaf of the fixed parse tree, so the leftmost derivation read from the tree is unique. The same argument, reading rightmost variable leaves instead, gives a unique rightmost derivation. [step 1.2, L1]

3.1 Steps 1.1 and 2.1 prove the forward implication of clause 1, and step 1.2 proves the reverse implication. Step 2.2 proves clause 2. [step 1.1, step 2.1, step 1.2, step 2.2] ∎
