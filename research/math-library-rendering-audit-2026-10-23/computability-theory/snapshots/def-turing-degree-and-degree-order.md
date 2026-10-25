---
id: def-turing-degree-and-degree-order
kind: definition
title: "Turing degrees and their order"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-turing-reducibility-and-equivalence, lem-turing-reducibility-is-a-preorder]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

The **Turing degree** of $A\subseteq\mathbb N$ is its equivalence class
$$[A]_T:=\{B\subseteq\mathbb N:B\equiv_TA\}.$$ 
For degrees, define $[A]_T\le[B]_T$ to mean $A\le_TB$; the next lemma checks
that this does not depend on the displayed representatives.
