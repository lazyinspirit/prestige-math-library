---
id: def-computable-program-transformer
kind: definition
title: "Computable program transformers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-numbering-of-partial-computable-functions]
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
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The Recursion Theorem"
      url: "https://lmoss.github.io/onesharp/recThm/recursion_theorem.html"
---

## Definition

Fix a numbering $(\varphi_e)_{e\in\mathbb N}$ of the partial computable
functions.

A **computable program transformer** is a total computable function
$$ F:\mathbb N\to\mathbb N. $$

It acts on indices rather than directly on extensional partial functions: the
transformed program with input index $e$ is the index $F(e)$.

## Remarks

- A transformer may change syntax without changing the computed partial
  function.

- The recursion theorem concerns fixed points of such transformers at the level
  of computed behavior.
