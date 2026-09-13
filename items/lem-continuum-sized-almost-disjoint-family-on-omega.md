---
id: lem-continuum-sized-almost-disjoint-family-on-omega
kind: lemma
title: A continuum-sized almost-disjoint family on omega
status: draft
origin: pipeline
deps: [def-cardinal-arithmetic, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, proof of Theorem 7.7", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC there is an almost-disjoint family of infinite subsets of $\omega$ of cardinality $2^{\aleph_0}$.

## Facts & Assumptions

**Given:** AC for the ambient cardinal comparison.

[F1] [[def-cardinal-arithmetic]] identifies $|2^\omega|=2^{\aleph_0}$.

## Proof

1.1 Fix an explicit bijection $e:2^{<\omega}\to\omega$. For each branch $x\in2^\omega$, put $A_x=\{e(x\restriction n):n\in\omega\}$. This set is infinite because distinct lengths give distinct nodes. [F1]

2.1 If $x\ne y$, let $m$ be their first differing coordinate. Then $x\restriction n\ne y\restriction n$ for every $n>m$, so $A_x\cap A_y$ is contained in the finite set of codes of their common initial segments. Also $A_x=A_y$ would force equality of every initial segment, so $x\mapsto A_x$ is injective. The family therefore has size $|2^\omega|=2^{\aleph_0}$. The construction makes no arbitrary choice after $e$ is fixed. [F1, step 1.1] ∎