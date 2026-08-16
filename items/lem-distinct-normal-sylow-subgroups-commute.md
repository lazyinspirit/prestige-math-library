---
id: lem-distinct-normal-sylow-subgroups-commute
kind: lemma
title: "Distinct normal Sylow subgroups centralize one another"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, def-subgroup-commutator-and-lower-central-series, def-normal-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] For subgroups $A,B\le G$, their subgroup commutator is $$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$ where $[a,b]=aba^{-1}b^{-1}$ (def-commutator-and-commutator-subgroup, def-generated-subgroup). The lower central series is $$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$ Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$. ([[def-subgroup-commutator-and-lower-central-series]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For normal Sylow $p$- and $q$-subgroups with $p\ne q$, every commutator lies in their intersection. [L1, L2, L3, L4, given, algebra]

2.1 Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim. [step 1.1, given, algebra] ∎
