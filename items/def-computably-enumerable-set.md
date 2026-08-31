---
id: def-computably-enumerable-set
kind: definition
title: "Computably enumerable sets and languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computable-and-partial-computable-function, def-language-over-an-alphabet]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Definition

Fix an effectively encoded set $X$.

A subset $A\subseteq X$ is **computably enumerable** when either $A=\varnothing$
or there exists a total computable function
$$ e:\mathbb N\to X $$
whose range is exactly $A$.

If $L\subseteq\Sigma^*$ is a language over an alphabet $\Sigma$, then $L$ is
**computably enumerable** when it is c.e. as a subset of $\Sigma^*$ under the
chosen effective word encoding.

## Remarks

- The classical synonym is "recursively enumerable".

- Repetition in the output list is allowed; the range condition only asks that
  every element of $A$ appears at least once and that nothing outside $A$
  appears.
