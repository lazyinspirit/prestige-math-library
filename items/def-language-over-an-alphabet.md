---
id: def-language-over-an-alphabet
kind: definition
title: "Languages over an alphabet"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-subset-and-proper-subset
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
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 1"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf"
---

## Definition

Let $\Sigma$ be an alphabet. A **language over $\Sigma$** is a subset
$L\subseteq\Sigma^*$, where $\Sigma^*$ is the set of finite words of
[[def-computation-alphabet-and-word-convention]] and $\subseteq$ is the subset
relation of [[def-subset-and-proper-subset]].

Thus a language is a set of words over a fixed alphabet, not a set of alphabet
symbols.

## Remarks

- The ambient alphabet matters. The same set of written strings can be viewed as
  a language over different alphabets only when it is contained in each
  corresponding $\Sigma^*$.

- The two extreme languages over $\Sigma$ are $\varnothing$ and $\Sigma^*$.
