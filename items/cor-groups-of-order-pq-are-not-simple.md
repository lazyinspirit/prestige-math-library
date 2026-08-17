---
id: cor-groups-of-order-pq-are-not-simple
kind: corollary
title: "No group of order $pq$ for distinct primes is simple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-groups-of-order-pq-have-a-normal-q-subgroup, def-simple-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

No group of order $pq$ for distinct primes is simple. See [[lem-groups-of-order-pq-have-a-normal-q-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $p<q$ be primes. Every group $G$ of order $pq$ has a normal subgroup of order $q$. ([[lem-groups-of-order-pq-have-a-normal-q-subgroup]]).

[L2] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

## Proof

**Proof technique:** direct.

1.1 We order the primes as $p<q$. [L1, L2, given, algebra]

2.1 The published order-$pq$ lemma supplies a normal subgroup of order $q$, which is nontrivial and proper. This proves the stated claim. [step 1.1, given, algebra] ∎
