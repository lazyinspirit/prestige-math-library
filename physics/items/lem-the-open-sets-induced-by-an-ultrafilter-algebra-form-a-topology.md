---
id: lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology
kind: lemma
title: "The open-set family induced by an ultrafilter algebra is a topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-topology-induced-by-an-ultrafilter-algebra, def-topological-space, def-ultrafilter]
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
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

For every ultrafilter algebra $\xi:\beta X\to X$, the family $\tau_\xi$ of induced-open subsets is a topology on $X$.

## Facts & Assumptions

**Given:** An ultrafilter algebra $\xi:\beta X\to X$ and its induced-open family $\tau_\xi$.

[L1] A subset $O\subseteq X$ is induced-open when $\xi(\mathcal U)\in O$ implies $O\in\mathcal U$ for every ultrafilter $\mathcal U$ on $X$ ([[def-topology-induced-by-an-ultrafilter-algebra]]).

[L2] A topology contains the empty set and whole space, is closed under arbitrary unions, and is closed under finite intersections ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 The empty set is induced-open because its antecedent never holds, and $X$ is induced-open because every ultrafilter contains $X$. [L1, algebra]

1.2 Let $(O_i)_{i\in I}$ be induced-open and suppose $\xi(\mathcal U)\in\bigcup_iO_i$. Some $O_i$ contains $\xi(\mathcal U)$, hence $O_i\in\mathcal U$ by [L1], and upward closure gives $\bigcup_iO_i\in\mathcal U$. Thus arbitrary unions are induced-open. [L1, algebra]

2.1 If $O$ and $V$ are induced-open and $\xi(\mathcal U)\in O\cap V$, then $O,V\in\mathcal U$ by [L1], so $O\cap V\in\mathcal U$. This also covers the empty and singleton finite intersections using step 1.1. [L1, algebra]

3.1 Steps 1.1, 1.2, and 2.1 verify the axioms in [L2], so $\tau_\xi$ is a topology. No extension of a filter and no choice principle was used. [step 1.1, step 1.2, step 2.1, L2] ∎
