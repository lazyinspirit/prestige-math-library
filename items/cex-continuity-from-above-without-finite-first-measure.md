---
id: cex-continuity-from-above-without-finite-first-measure
kind: counterexample
title: "Counting-measure tails decrease to the empty set while every term has infinite measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-counting-measure, prop-counting-measure-is-a-measure, thm-continuity-from-above-for-measures, def-nat-order, lem-nat-add-cancellative, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.8(d)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement refuted

The finiteness hypothesis in continuity from above cannot be deleted: a decreasing sequence may have empty intersection while all its measures remain $+\infty$.

## Facts & Assumptions

**Given:** Counting measure $\#$ on $\mathbb N$ and $E_k=\{n\in\mathbb N:k\le n\}$.

[L1] Counting measure gives every infinite set value $+\infty$ ([[def-counting-measure]]) and is a measure ([[prop-counting-measure-is-a-measure]]).

[L2] Continuity from above assumes that some member of the decreasing sequence has finite measure ([[thm-continuity-from-above-for-measures]]).

[L3] The natural order is defined through addition ([[def-nat-order]]), natural addition is cancellative ([[lem-nat-add-cancellative]]), and each $n+1$ is strictly greater than $n$ ([[lem-nat-discrete]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence decreases because $k+1\le n$ implies $k\le n$, and $E_0=\mathbb N$. [given, L3]

1.2 Every $E_k$ is infinite, since $n\mapsto k+n$ injects $\mathbb N$ into $E_k$, so $\#(E_k)=+\infty$. [given, L1, L3]

1.3 The intersection is empty: a natural $n$ does not belong to $E_{n+1}$. [given, L3]

2.1 Hence $\#(\bigcap_kE_k)=0$ but $\inf_k\#(E_k)=+\infty$. The hypothesis of [L2] fails at every index, exactly as required. [step 1.2, step 1.3, L1, L2] ∎
