---
id: lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade
kind: lemma
title: "A wide integral geometric layer forces the complete-or-anticomplete property-(*) blockade"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-structural-comb-partition-hypothesis, def-integral-geometric-layers-of-a-decreasing-block-partition, lem-integral-geometric-layers-have-rounded-cutoff-bounds, lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades, def-erdos-hajnal-property-and-constant, thm-real-power-laws, def-real-power, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
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
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Claim 5.1.2"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Assume the structural comb-partition hypothesis and let $c\in(0,1]$ be a
common Erdős–Hajnal constant for $\mathcal F_1$-free and
$\mathcal F_2$-free graphs. In one decreasing structural partition, let
$C_r$ be an integral geometric layer with $r<q$. If every block of $C_r$ has
size at least $w/\ell^{5r/2}$, then $G$ has a complete or anticomplete
$(k,w/k^{10/c})$-blockade for some $k\ge\ell^{cr/4}$.

## Facts & Assumptions

**Given:** $r<q$, a wide layer $C_r$, and a common constant $c\in(0,1]$.

[F1] The first $m_r$ structural blocks form an induced subgraph of the $\mathcal F_2$-free pattern graph ([[def-structural-comb-partition-hypothesis]]).

[F2] The cutoff bound is $m_r\ge\ell^{r/4}$ ([[lem-integral-geometric-layers-have-rounded-cutoff-bounds]]).

[F3] An Erdős–Hajnal constant $c$ supplies a pattern clique or stable set of size at least $m_r^c$ in a nonempty $\mathcal F_2$-free graph ([[def-erdos-hajnal-property-and-constant]]).

[F4] A clique or stable set in a pure-blockade pattern lifts to a complete or anticomplete blockade with the same selected width ([[lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades]]).

[F5] Positive real powers obey the iterated-power law ([[thm-real-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 The induced pattern on the first $m_r$ blocks is $\mathcal F_2$-free: an induced forbidden copy there would also be one in the full pattern. By [F1] and [F3], it has a clique or stable set $S$ of cardinality $k\ge m_r^c$. [F1, F3]

2.1 From [F2] and step 1.1, $k\ge(\ell^{r/4})^c=\ell^{cr/4}$ by [F5]. [F2, F5, step 1.1]

2.2 The blocks indexed by $S$ lie among the first $m_r$ blocks and therefore in layers through $C_r$; decreasing block sizes and the width assumption on $C_r$ give them size at least $w/\ell^{5r/2}$. By [F4] they form a complete or anticomplete blockade of length $k$ and at least that width. [F4, step 1.1]

3.1 Step 2.1 and [F5] give $k^{10/c}\ge\ell^{5r/2}$, so $w/\ell^{5r/2}\ge w/k^{10/c}$. Together with step 2.2 this proves the claim. [step 2.1, step 2.2, F5, algebra] ∎
