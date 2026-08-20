---
id: fs-continuity-from-above-without-finiteness
kind: false-statement
title: "FALSE: continuity from above needs no finiteness hypothesis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-counting-measure-is-a-measure, thm-continuity-from-above-for-measures, def-nat-order, lem-nat-discrete]
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

## Statement

**False claim.** For every decreasing sequence $(E_k)$ of measurable sets, one has $\mu(\bigcap_kE_k)=\inf_k\mu(E_k)$, without requiring any $E_k$ to have finite measure. The valid theorem [[thm-continuity-from-above-for-measures]] includes precisely that missing hypothesis.

## Facts & Assumptions

**Given:** Counting measure $\#$ on $\mathbb N$ and the tails $E_k:=\{n\in\mathbb N:k\le n\}$.

[L1] Counting measure is a measure and assigns $+\infty$ to every infinite set ([[prop-counting-measure-is-a-measure]]).

[L2] Continuity from above is proved when one member of the decreasing sequence has finite measure ([[thm-continuity-from-above-for-measures]]).

[L3] The natural order is defined by $m\le n$ exactly when $m+k=n$ for some natural $k$ ([[def-nat-order]]), and $k<k+1$ ([[lem-nat-discrete]]).

## Refutation

**Proof technique:** direct.

1.1 The tails decrease, $E_{k+1}\subseteq E_k$, and $E_0=\mathbb N$. [given, L3]

1.2 Every $E_k$ is infinite, because $n\mapsto k+n$ injects $\mathbb N$ into it; hence $\#(E_k)=+\infty$ for every $k$. [given, L1, L3]

1.3 The intersection is empty: if $n$ belonged to every tail, it would belong to $E_{n+1}$, which would say $n+1\le n$, contrary to discreteness of the natural order. [given, L3]

2.1 Thus $\#(\bigcap_kE_k)=\#(\varnothing)=0$ but $\inf_k\#(E_k)=+\infty$. This refutes the claim and shows why [L2] cannot be applied: no tail has finite counting measure. [step 1.2, step 1.3, L1, L2] ∎

