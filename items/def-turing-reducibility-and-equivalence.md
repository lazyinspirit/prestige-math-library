---
id: def-turing-reducibility-and-equivalence
kind: definition
title: "Turing reducibility and equivalence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oracle-turing-machine]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Sebastiaan Terwijn, Computability Theory, Definition 5.1.3"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Definition

For sets $A,B\subseteq\mathbb N$, write $A\le_TB$ when one oracle machine
$M$ decides $A$ with oracle $B$: for every $n$, $M^B(n)\downarrow$ and its
output is $1$ iff $n\in A$.  Write $A\equiv_TB$ when both $A\le_TB$ and
$B\le_TA$; this is **Turing equivalence**.
