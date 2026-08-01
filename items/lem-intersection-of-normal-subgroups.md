---
id: lem-intersection-of-normal-subgroups
kind: lemma
title: "The intersection of a nonempty family of normal subgroups is normal"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-intersection-of-subgroups, thm-normal-subgroup-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Statement

Let $G$ be a group and let $\mathcal N$ be a nonempty family of normal
subgroups of $G$. Then

$$K:=\bigcap_{N\in\mathcal N}N$$

is a normal subgroup of $G$.

## Facts & Assumptions

**Given:** A group $G$ and a nonempty family $\mathcal N$ of normal subgroups of $G$.

[L1] The intersection of a nonempty family of subgroups of a group is a subgroup ([[lem-intersection-of-subgroups]]).

[L2] A subgroup $K\le G$ is normal if $gKg^{-1}\subseteq K$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the set $K=\bigcap_{N\in\mathcal N}N$ is a subgroup of $G$. [L1]

1.2 Fix $g\in G$ and $x\in K$. For every $N\in\mathcal N$, one has $x\in N$ and $N\mathrel{\trianglelefteq}G$, so $gxg^{-1}\in N$ by [L2]. Hence $gxg^{-1}\in K$. [given, L2]

2.1 Thus $gKg^{-1}\subseteq K$ for every $g\in G$, and [L2] gives $K\mathrel{\trianglelefteq}G$. [step 1.1, step 1.2, L2] ∎
