---
id: def-regular-language-by-dfa-recognition
kind: definition
title: "Regular languages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dfa-acceptance-and-recognized-language
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 2"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.02.pdf"
---

## Definition

Let $\Sigma$ be an alphabet. A language $L\subseteq\Sigma^*$ is
**regular** when there exists a DFA $D$ over $\Sigma$ such that
$$ L=L(D), $$
where $L(D)$ is the recognized language of
[[def-dfa-acceptance-and-recognized-language]].

Thus regularity is a property of a language over a fixed alphabet: the machine
is a witness, not part of the language itself.
