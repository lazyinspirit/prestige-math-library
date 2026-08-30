---
id: def-nfa-acceptance-and-recognized-language
kind: definition
title: "Acceptance of a word by an NFA and the recognized language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-nfa-transition, def-language-over-an-alphabet]
verification:
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Definition

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an NFA with epsilon-moves.

A word $w\in\Sigma^*$ is **accepted by $N$** when
$$ \widehat\delta(q_0,w)\cap F\neq\varnothing. $$

The **language recognized by $N$** is
$$ L(N):=\{w\in\Sigma^*:\widehat\delta(q_0,w)\cap F\neq\varnothing\}. $$
This is a language over $\Sigma$ in the sense of
[[def-language-over-an-alphabet]].

## Remarks

- NFA acceptance is existential: one accepting computation path is enough.

- Rejection means that no computation path ends in an accepting state after the
  whole input has been read.
