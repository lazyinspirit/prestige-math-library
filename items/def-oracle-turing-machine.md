---
id: def-oracle-turing-machine
kind: definition
title: "Oracle Turing machines"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relative-computability-and-enumerability]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
    - title: "Sebastiaan Terwijn, Computability Theory, §5.1"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Definition

An **oracle Turing machine** is a finite Turing-machine program with, in
addition to its ordinary instructions, a query instruction: on a query number
$q$, it receives the bit $1$ exactly when $q\in X$, where $X\subseteq\mathbb N$
is its oracle.  Write $M^X(x)\downarrow=b$ when its run on $x$ halts with
output $b\in\{0,1\}$.  Thus even with an infinite oracle, each halting run has
only finitely many transitions and queries.

## Remarks

This is the membership-query presentation of the oracle computations in
[[def-relative-computability-and-enumerability]].
