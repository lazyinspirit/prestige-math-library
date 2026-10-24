---
id: lem-the-bar-differential-is-group-equivariant-and-squares-to-zero
kind: lemma
title: "The bar differential is equivariant and squares to zero"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unnormalized-homogeneous-bar-resolution]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Remark 1.2.2"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

For $n\ge1$, the maps $d_n:B_n(G)\to B_{n-1}(G)$ are
$\mathbb Z[G]$-linear. For $n\ge2$, $d_{n-1}d_n=0$, and for $n=1$ one has
$\varepsilon d_1=0$.

## Proof

**Given:** The alternating face maps of the homogeneous bar construction.

1.1 Deleting a coordinate commutes with diagonal left multiplication, so each face and hence $d_n$ is $\mathbb Z[G]$-linear. [given]

2.1 For $n\ge2$, each double deletion of positions $i<j$ occurs twice, first as $d_i d_j$ and then as $d_{j-1}d_i$, with opposite signs. Pairing these terms proves $d_{n-1}d_n=0$. For $n=1$, both faces have augmentation one, so $\varepsilon(d_0-d_1)=0$. [step 1.1] ∎
