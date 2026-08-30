---
id: def-parse-tree-and-yield
kind: definition
title: "Parse trees and their yields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-context-free-grammar
  - def-finitely-branching-tree-on-finite-sequences
  - def-computation-alphabet-and-word-convention
verification:
  audited: 2026-08-30
  precheck: n/a
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

## Definition

Let $G=(V,\Sigma,P,S)$ be a context-free grammar. A **parse tree** for $G$ is a
finite, finitely branching rooted tree of finite sequences in the sense of
[[def-finitely-branching-tree-on-finite-sequences]], together with a label on
each node, satisfying the following conditions.

- The root is labelled by the start variable $S$.
- Every internal node is labelled by a variable $A\in V$.
- If an internal node labelled $A$ has ordered children labelled
  $x_1,\ldots,x_k$, then $A\to x_1\cdots x_k$ is a production of $G$.
- A leaf is either labelled by a terminal in $\Sigma$, or is a variable leaf
  corresponding to a production $A\to\varepsilon$ and contributes no terminal
  symbol to the yield.

Reading the terminal leaves from left to right gives a word in $\Sigma^*$,
called the **yield** of the parse tree.

## Remarks

- The finite-sequence address set is what makes "left to right" precise: among
  siblings, the natural-number labels of successor nodes provide the order.

- The tree itself is finite. This rules out infinite variable chains that do
  not correspond to a finite derivation.

- An $\varepsilon$-production contributes no terminal letter to the yield.
