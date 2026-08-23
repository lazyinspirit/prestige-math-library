---
id: prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups
kind: proposition
title: "If $H\\le P$ are finite $p$-groups, then $\\Phi(H)\\le\\Phi(P)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-subgroup-formula-for-a-finite-p-group, lem-homomorphisms-respect-commutators-and-derived-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Lemma 3.6(i)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

If $H\le P$ are finite $p$-groups, then $\Phi(H)\le\Phi(P)$.

## Facts & Assumptions

**Given:** Finite $p$-groups $H\le P$.

[L1] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[L2] For every subgroup $H\le P$, one has $H'\le P'$ ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $H'\le P'$. Every $p$th power of an element of $H$ is also a $p$th power of an element of $P$, so $H^p\le P^p$. [given, L1, L2, algebra]

2.1 Multiplying the inclusions in step 1.1 gives $H'H^p\le P'P^p$, and [L1] identifies these products with $\Phi(H)$ and $\Phi(P)$. [step 1.1, L1, algebra] ∎
