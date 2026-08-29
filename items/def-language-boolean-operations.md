---
id: def-language-boolean-operations
kind: definition
title: "Boolean operations on languages over a fixed alphabet"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-language-over-an-alphabet
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 1"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf"
---

## Definition

Fix an alphabet $\Sigma$, and let $L,K\subseteq\Sigma^*$ be languages over
$\Sigma$ ([[def-language-over-an-alphabet]]).

Their **union**, **intersection**, and **difference** are the languages
$$ L\cup K,\qquad L\cap K,\qquad L\setminus K. $$

Their **complement** is taken inside the same ambient $\Sigma^*$:
$$ L^{c}:=\Sigma^*\setminus L. $$

## Remarks

- Complement depends on the chosen ambient alphabet. A language may have
  different complements when it is regarded inside different $\Sigma^*$.

- These are ordinary set-theoretic operations applied to subsets of $\Sigma^*$.
