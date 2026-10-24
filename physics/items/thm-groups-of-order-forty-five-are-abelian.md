---
id: thm-groups-of-order-forty-five-are-abelian
kind: theorem
title: "Every group of order $45$ is abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-distinct-normal-sylow-subgroups-commute, cor-groups-of-order-p-squared-are-abelian, thm-internal-direct-product-recognition]
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

Every group of order $45$ is abelian. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L4] If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian. ([[cor-groups-of-order-p-squared-are-abelian]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

## Proof

**Proof technique:** direct.

1.1 Sylow III forces both the order-nine and order-five Sylow subgroups to be unique. [L1, L2, L3, L4, L5, given, algebra]

2.1 They commute, their product is the whole group, and both factors are abelian, so the internal direct product is abelian. This proves the stated claim. [step 1.1, given, algebra] ∎
