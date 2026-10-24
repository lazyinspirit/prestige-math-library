---
id: cex-orbit-count-is-not-set-size-divided-by-group-order
kind: counterexample
title: 'A nonfree action can have $|X/G|\ne|X|/|G|$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-frobenius-orbit-counting, ex-trivial-action-of-z-two-is-not-faithful]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.3"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html"
pipeline_run: null
---

## Statement refuted

**False claim.** For every action of a finite group $G$ on a finite set $X$,
the number of orbits is $|X|/|G|$.

## Facts & Assumptions

**Given:** The trivial action of $G=\mathbb Z/2$ on the singleton $X=\{*\}$.

[L1] Orbit counting uses the fixed-point sum $|G|\,|X/G|=\sum_{g\in G}|X^g|$ ([[thm-cauchy-frobenius-orbit-counting]]).

[L2] The trivial $\mathbb Z/2$-action on a singleton is transitive and nonfaithful ([[ex-trivial-action-of-z-two-is-not-faithful]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2], the singleton is one orbit, so $|X/G|=1$. [L2]

2.1 Here $|X|=1$ and $|G|=2$, so there is no natural number $q$ with $|X|=|G|q$; in particular the orbit count is not obtained by dividing $|X|$ by $|G|$. [step 1.1, L2, algebra]

3.1 Both elements of $G$ fix the unique point, so [L1] correctly gives $2\cdot1=1+1$. This verifies the orbit-counting identity while refuting the naive division rule. [step 1.1, step 2.1, L1, L2, algebra] ∎
