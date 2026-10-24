---
id: thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

## Proof

**Proof technique:** direct.

1.1 If $p>q$, the restrictions $n_p\mid q$ and $n_p\equiv1\pmod p$ force $n_p=1$. [L1, L2, given, algebra]

2.1 If $q>p$, then $n_q\in\{1,p^2\}$; the second value forces $q\mid(p-1)(p+1)$, hence the sole exceptional pair $(p,q)=(2,3)$. [step 1.1, given, algebra]

3.1 For order $12$, if the four Sylow $3$-subgroups are nonnormal, their eight nonidentity elements leave exactly four elements, so every Sylow $2$-subgroup is that same four-element complement and is normal. [step 2.1, given, algebra]

4.1 The two orderings exhaust the hypothesis, since $p$ and $q$ are distinct: step 1.1 settles $p>q$ with a normal Sylow $p$-subgroup, and step 2.1 settles $q>p$ with a normal Sylow $q$-subgroup except at $(p,q)=(2,3)$, which step 3.1 settles with a normal Sylow $2$-subgroup. Every case therefore produces a normal Sylow subgroup, and [L2] turns each uniqueness count $n=1$ into normality. This proves the stated claim. [step 1.1, step 2.1, step 3.1, L2, given, algebra] ∎
