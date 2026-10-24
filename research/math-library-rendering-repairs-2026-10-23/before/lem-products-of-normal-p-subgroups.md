---
id: lem-products-of-normal-p-subgroups
kind: lemma
title: "A finite product of normal $p$-subgroups is a normal $p$-subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, lem-product-with-normal-subgroup, thm-lagrange]
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
    - title: "Keith Conrad, The Sylow Theorems, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Statement

A finite product of normal $p$-subgroups of a group is a normal $p$-subgroup. The empty product is the trivial subgroup. See [[def-finite-p-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $p$ be a prime natural number (def-prime). A finite $p$-group is a finite group $P$ (def-group, def-finite-cardinality) whose order has the form $$|P|=p^n$$ for some $n\in\mathbb N$, with natural exponentiation as in def-nat-power. The case $n=0$ permits the trivial group. A finite $p$-group is nontrivial exactly when $n\ge 1$. ([[def-finite-p-group]]).

[L2] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L3] If $H$ is a subgroup of a finite group $G$, then $|G|=[G:H]|H|$; in particular $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Induct on the number of factors; the empty product is the trivial normal $p$-subgroup. [L1, L2, given, algebra]

2.1 Let $A$ and $B$ be normal $p$-subgroups. By [L2], $AB$ is a subgroup, and $gABg^{-1}=AB$ for every ambient-group element $g$, so $AB$ is normal. The multiplication map $A\times B\to AB$ is surjective. For a fixed factorization $ab$, all its preimages are exactly $(ax,x^{-1}b)$ with $x\in A\cap B$. Thus every fibre has $|A\cap B|$ elements and $|AB|=|A||B|/|A\cap B|$. By [L3], $|A\cap B|$ is a power of $p$, so $|AB|$ is a power of $p$. [step 1.1, L2, L3, given, algebra]

3.1 Applying step 2.1 repeatedly proves the result for every finite product, including one factor and repeated factors. [step 1.1, step 2.1, given, algebra] ∎
