---
id: def-numbering-of-partial-computable-functions
kind: definition
title: "Numberings of partial computable functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-partial-recursive-iff-turing-computable]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
    - title: "Richard Zach, Incompleteness and Computability"
      url: "https://ic.openlogicproject.org/ic-screen.pdf"
---

## Definition

A **numbering of the partial computable functions** is a sequence
$$ (\varphi_e)_{e\in\mathbb N} $$
of partial computable functions $\varphi_e:\mathbb N\rightharpoonup\mathbb N$
such that every partial computable unary function occurs as $\varphi_e$ for at
least one $e\in\mathbb N$.

The number $e$ is then called an **index** or **program number** for the
partial function $\varphi_e$.

## Remarks

- A numbering need not be injective: different indices may compute the same
  partial function.

- Later items treat a function of several arguments by applying a unary indexed
  function to a chosen code of the input tuple.
