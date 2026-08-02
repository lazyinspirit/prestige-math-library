---
id: lem-residual-augmentation
kind: lemma
title: "Augmenting by the residual bottleneck preserves feasibility and increases the flow value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-network-flow-cut-and-residual-network, def-directed-walk-trail-path-cycle-and-strong-connectivity]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on flows and cuts"
      url: "https://math.mit.edu/~goemans/18453S17/flowscuts.pdf"
pipeline_run: null
---

## Statement

If $P$ is an $s$-$t$ residual path for a feasible integral flow $f$, and
$\delta$ is the least residual capacity of a copy on $P$, then adding $\delta$
on each original arc used as $(a,+)$ and subtracting $\delta$ on each original
arc used as $(a,-)$ gives a feasible integral flow $f'$ with $|f'|=|f|+\delta$.

## Facts & Assumptions

**Given:** A feasible integral flow $f$, a labelled residual $s$-$t$ path $P$, and its bottleneck $\delta$.

[F1] A forward copy $(a,+)$ has residual capacity $c(a)-f(a)$, a reverse copy $(a,-)$ has residual capacity $f(a)$, and the source has no entering original arc ([[def-integral-network-flow-cut-and-residual-network]]).

## Proof

**Proof technique:** constructive.

1.1 For every forward copy on $P$, $\delta\le c(a)-f(a)$, and for every reverse copy, $\delta\le f(a)$; the stated additions and subtractions therefore keep every new arc value in $[0,c(a)]\cap\mathbb N$. [F1, construct]

1.2 At each internal vertex of the residual path exactly one $\delta$-change enters and one leaves, so the altered flow still satisfies conservation there. [F1]

1.3 The first residual copy leaving $s$ is forward, since no original arc enters $s$; it raises the outgoing source flow by $\delta$, while all other source incidences are unchanged. [F1]

2.1 Steps 1.1--1.3 prove that $f'$ is feasible and that $|f'|=|f|+\delta$. [step 1.1, step 1.2, step 1.3, discharge-construct] ∎

## Remarks

- The sign is attached to an arc label, not merely to its endpoints. This is what keeps a reverse copy separate from an antiparallel original arc.
