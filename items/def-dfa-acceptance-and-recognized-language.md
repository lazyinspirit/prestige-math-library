---
id: def-dfa-acceptance-and-recognized-language
kind: definition
title: "Acceptance of a word by a DFA and the recognized language"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-extended-dfa-transition-function
  - thm-existence-and-uniqueness-of-extended-dfa-transition
  - def-language-over-an-alphabet
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

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA, and let $\delta^*$ be its extended
transition function. This function exists and is unique by
[[thm-existence-and-uniqueness-of-extended-dfa-transition]].

A word $w\in\Sigma^*$ is **accepted by $D$** when
$$ \delta^*(q_0,w)\in F. $$

The **language recognized by $D$** is
$$ L(D):=\{w\in\Sigma^*: \delta^*(q_0,w)\in F\}. $$
This is a language over $\Sigma$ in the sense of
[[def-language-over-an-alphabet]].

## Remarks

- Acceptance depends on the chosen start state and accepting set, not just on
  the transition graph.

- Two different DFAs may recognize the same language.
