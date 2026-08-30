---
id: def-ambiguity-and-inherent-ambiguity
kind: definition
title: "Ambiguous grammars, unambiguous grammars, and inherently ambiguous languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - thm-derivation-parse-tree-correspondence
  - def-language-generated-by-a-cfg
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Definition

Let $G$ be a context-free grammar.

The grammar $G$ is **ambiguous** when there exists a word $w\in L(G)$ having
two distinct leftmost derivations in $G$. By
[[thm-derivation-parse-tree-correspondence]], this is equivalent to requiring
two distinct finite parse trees for $G$ with yield $w$.

The grammar $G$ is **unambiguous** when it is not ambiguous.

A context-free language $L$ is **inherently ambiguous** when every
context-free grammar $G$ with $L(G)=L$ is ambiguous.

## Remarks

- Ambiguity is a property of a grammar, while inherent ambiguity is a property
  of a language.

- A language may admit both ambiguous and unambiguous grammars; in that case the
  ambiguous grammar is not evidence that the language is inherently ambiguous.
