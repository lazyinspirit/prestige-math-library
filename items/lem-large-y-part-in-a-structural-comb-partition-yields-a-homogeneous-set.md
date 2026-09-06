---
id: lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set
kind: lemma
title: "A large Y-part in a structural comb partition yields the clique-or-stable-set outcome"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-structural-comb-partition-hypothesis, def-erdos-hajnal-property-and-constant, def-clique-stable-set-and-numbers, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, proof of Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Assume $(\mathcal F_1,\mathcal F_2;\mathcal H)$ satisfies the structural
comb-partition hypothesis. Let $c\in(0,1]$ be an Erdős–Hajnal constant for
both $\mathcal F_1$-free and $\mathcal F_2$-free graphs. If an $(\ell,w)$-comb
with $\ell,w\ge4$ has a structural partition and $|Y_i|\ge w/2$ for some
$i$, then $G$ has a clique or stable set of size at least $w^{c/2}$.

## Facts & Assumptions

**Given:** The structural partition, $c\in(0,1]$, $w\ge4$, and an index $i$ with $|Y_i|\ge w/2$.

[F1] The structural hypothesis makes $Y_i$ $\mathcal F_1$-free ([[def-structural-comb-partition-hypothesis]]).

[F2] An Erdős–Hajnal constant $c$ gives a clique or stable set of size at least $|V(Q)|^c$ in every nonempty $\mathcal F_1$-free graph $Q$ ([[def-erdos-hajnal-property-and-constant]]).

[F3] For positive bases, real powers obey the product and iterated-power laws ([[thm-real-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 Since $|Y_i|\ge w/2>0$, [F1] and [F2] give a clique or stable set in $G[Y_i]$, hence in $G$, with at least $(w/2)^c$ vertices. [F1, F2]

1.2 As $w\ge4$, we have $w/2\ge\sqrt w>0$; raising this inequality to the positive exponent $c$ and using [F3] gives $(w/2)^c\ge(\sqrt w)^c=w^{c/2}$. [F3, algebra]

2.1 The set from step 1.1 therefore has at least $w^{c/2}$ vertices, which is the claimed clique-or-stable-set outcome. [step 1.1, step 1.2] ∎
