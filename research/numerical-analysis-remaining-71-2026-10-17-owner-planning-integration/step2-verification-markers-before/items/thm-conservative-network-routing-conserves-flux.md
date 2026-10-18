---
id: thm-conservative-network-routing-conserves-flux
kind: theorem
title: "A conservative routing matrix preserves total flux"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-conservative-network-advection-routing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; the proof is a finite sum identity."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
---

## Statement

Let $P$ be a conservative nonnegative routing matrix from
[[def-conservative-network-advection-routing]], and let
$q^{\rm in}\in\mathbb R^{n_{\rm in}}$ be entrywise nonnegative. Then
$q^{\rm out}=Pq^{\rm in}$ is entrywise nonnegative and
$$\sum_{j=1}^{n_{\rm out}}q^{\rm out}_j =\sum_{i=1}^{n_{\rm in}}q^{\rm in}_i.$$

## Facts & Assumptions

**Given:** A finite incoming flux vector $q^{\rm in}\ge0$, a nonnegative
routing matrix $P$, and the unit incoming column-sum condition.

[F1] $P_{ji}\ge0$ and $\sum_{j=1}^{n_{\rm out}}P_{ji}=1$ for each incoming
index $i$ ([[def-conservative-network-advection-routing]]).

## Proof

**Proof technique:** direct finite-sum calculation.

**Given:** The nonnegative incoming flux vector and the routing matrix of the
Statement.

1.1 For every outgoing index $j$, $q^{\rm out}_j=\sum_iP_{ji}q^{\rm in}_i$ is a sum of nonnegative terms by [F1] and the assumption $q^{\rm in}\ge0$. Hence $q^{\rm out}\ge0$. [F1, given, algebra]

2.1 All sums are finite, so they may be interchanged: $$\sum_jq^{\rm out}_j =\sum_j\sum_iP_{ji}q^{\rm in}_i =\sum_i\left(\sum_jP_{ji}\right)q^{\rm in}_i =\sum_iq^{\rm in}_i,$$ where the final equality uses the unit column sums of [F1]. [F1, step 1.1, algebra] ∎

