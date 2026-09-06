---
id: def-relative-computability-and-enumerability
kind: definition
title: "Relative computability and relative enumerability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-turing-reduction, def-universal-and-acceptable-numbering]
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
---

## Definition

For an oracle $X\subseteq\mathbb N$, an oracle computation is an ordinary
machine computation with a query instruction which receives the truthful bit
for a queried number. A set $A$ is **$X$-computable** when an $X$-oracle
machine decides it, and **$X$-c.e.** when one recognizes it. Write
$A\le_T X$ for $X$-computability, consistently with [[def-turing-reduction]].

An oracle program still makes finitely many transitions on any halting run;
it does not read an infinite oracle at once.
