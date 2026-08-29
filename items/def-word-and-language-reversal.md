---
id: def-word-and-language-reversal
kind: definition
title: "Word reversal and language reversal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-language-over-an-alphabet
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Definition

Let $w:n\to\Sigma$ be a word over an alphabet $\Sigma$. Its **reversal** is the
word $w^R:n\to\Sigma$ defined by
$$ w^R(i):=w(n-1-i)\qquad(i<n). $$
Equivalently, if $w=a_0a_1\cdots a_{n-1}$, then
$w^R=a_{n-1}a_{n-2}\cdots a_0$. In particular, $\varepsilon^R=\varepsilon$.

If $L\subseteq\Sigma^*$ is a language, its **reversal** is
$$ L^R:=\{w^R:w\in L\}. $$

## Remarks

- Reversal changes the order of letters but not the alphabet or the word
  length.

- The definition is pointwise on words first and only then lifted to languages.
