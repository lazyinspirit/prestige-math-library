---
id: lem-column-antisymmetrizer-detects-dominance
kind: lemma
title: Nonzero antisymmetrizer image detects dominance
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-column-antisymmetrizer-polytabloid-and-specht-module, lem-column-collision-causes-antisymmetrizer-cancellation, lem-basic-combinatorial-lemma-for-tableaux, def-dominance-order-on-partitions, def-young-subgroup-tabloid-and-permutation-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Theorem 4.1(a) and proof, printed p. 15"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
---

## Statement

For every $n\ge0$, partitions $\lambda,\mu\vdash n$, and $\lambda$-tableau
$t$, if $\kappa_t M^\mu\ne0$, then $\lambda$ dominates $\mu$ in the published
order $\lambda\unrhd\mu$.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda,\mu\vdash n$, a $\lambda$-tableau $t$, and the
hypothesis $\kappa_t M^\mu\ne0$.

[F1] The $\mu$-tabloids form a basis of $M^\mu$, with the linear extension of
the left action of $S_n$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] The column antisymmetrizer is the group-algebra element
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] If two entries in one row of $s$ lie in one column of $t$, then
$\kappa_t\cdot\{s\}=0$
([[lem-column-collision-causes-antisymmetrizer-cancellation]]).

[F4] If every row of $s$ meets each column of $t$ in at most one entry, then
for tableaux of shapes $\lambda$ and $\mu$ one has $\lambda\unrhd\mu$
([[lem-basic-combinatorial-lemma-for-tableaux]]).

[F5] The notation $\lambda\unrhd\mu$ means that every prefix sum of $\lambda$
is at least the corresponding prefix sum of $\mu$, with both partitions padded
by zeros ([[def-dominance-order-on-partitions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1,F2], $\kappa_t$ acts linearly on $M^\mu$. If it killed every $\mu$-tabloid, it would kill their span $M^\mu$, contrary to the hypothesis; therefore some $\mu$-tabloid $\{s\}$ satisfies $\kappa_t\cdot\{s\}\ne0$. [given, F1, F2, construct]

2.1 By the contrapositive of [F3], no row of $s$ contains two entries from one column of $t$. Thus the basic combinatorial lemma [F4] applies to these tableaux and gives $\lambda\unrhd\mu$; by [F5] this is exactly the published dominance order in the statement. [step 1.1, given, F3, F4, F5, construct] ∎
