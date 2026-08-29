---
id: def-language-concatenation-powers-and-kleene-star
kind: definition
title: "Language concatenation, powers, and Kleene star"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-language-over-an-alphabet
  - def-computation-alphabet-and-word-convention
  - def-indexed-union-and-intersection
justified_by: []
verification:
  precheck: n/a
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

Their **concatenation** is
$$ LK:=\{uv:u\in L\text{ and }v\in K\}, $$
where $uv$ is word concatenation as in
[[def-computation-alphabet-and-word-convention]].

Define the **powers** of $L$ by
$$ L^0:=\{\varepsilon\} $$
and, for each $n\ge 1$, let $L^n$ be the set of words of the form
$u_1u_2\cdots u_n$ with each $u_i\in L$.

The **Kleene star** of $L$ is
$$ L^*:=\bigcup_{n\in\mathbb N}L^n. $$

## Remarks

- The word $\varepsilon$ belongs to $L^*$ for every language $L$, even when
  $L=\varnothing$, because it already lies in $L^0$.

- The positive closure $L^+:=\bigcup_{n\ge 1}L^n$ satisfies
  $L^*=L^+\cup\{\varepsilon\}$.
