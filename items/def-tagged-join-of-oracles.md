---
id: def-tagged-join-of-oracles
kind: definition
title: "Tagged join of oracles"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oracle-turing-machine]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.6"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

For $A,B\subseteq\mathbb N$, their **tagged join** is
$$A\oplus B:=\{2n:n\in A\}\cup\{2n+1:n\in B\}.$$
The parity tag permits uniform recovery of either component.
