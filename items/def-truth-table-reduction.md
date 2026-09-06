---
id: def-truth-table-reduction
kind: definition
title: "Truth-table reduction"
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
    - title: "Ludovic Patey, Computability Theory, Definition 5.9"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

For $Y,X\subseteq\mathbb N$, write $Y\le_{tt}X$ when there is an oracle
functional $\Gamma$ such that $\Gamma^X(n)=\chi_Y(n)$ for every $n$, and
for every oracle $Z$ and every $n$, $\Gamma^Z(n)$ halts with a bit.  The
second, everywhere-total condition distinguishes truth-table from Turing
reducibility.
