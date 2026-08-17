---
id: cor-groups-of-order-p-squared-q-are-not-simple
kind: corollary
title: "No group of order $p^2q$ for distinct primes is simple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup, def-simple-group]
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

No group of order $p^2q$ for distinct primes is simple. See [[thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup. ([[thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup]]).

[L2] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

## Proof

**Proof technique:** direct.

1.1 The normal Sylow subgroup supplied by the theorem has prime-power order strictly between one and $p^2q$, so it is a nontrivial proper normal subgroup. [L1, L2, given, algebra]

2.1 Both cases of step 1.1 are genuinely nontrivial and proper: a normal Sylow $p$-subgroup has order $p^2$ with $1<p^2<p^2q$ because $q>1$, and a normal Sylow $q$-subgroup has order $q$ with $1<q<p^2q$ because $p^2>1$. Either one is therefore a normal subgroup other than $\{1\}$ and $G$, which is what [L2] requires for $G$ to fail simplicity. This proves the stated claim. [step 1.1, L2, given, algebra] ∎
