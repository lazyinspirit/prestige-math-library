---
id: thm-extensions-and-direct-products-of-solvable-groups-are-solvable
kind: theorem
title: "Extensions and finite direct products of solvable groups are solvable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, lem-homomorphisms-respect-commutators-and-derived-series, thm-external-direct-product-is-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Let $N\trianglelefteq G$. If $N$ and $G/N$ are solvable, then $G$ is solvable. Every finite direct product of solvable groups is solvable; the empty product is the trivial group.

## Facts & Assumptions

**Given:** A normal subgroup $N\trianglelefteq G$ with $N$ and $G/N$ solvable, and solvable groups $H_1,\ldots,H_t$.

[F1] A group is solvable when some term of its derived series is trivial ([[def-derived-series-solvable-group-and-derived-length]]).

[L1] A quotient map satisfies $q(G^{(r)})=(G/N)^{(r)}$, and inclusions give $K^{(s)}\le H^{(s)}$ for $K\le H$ ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

[L2] The external direct product has coordinatewise multiplication and inverses ([[thm-external-direct-product-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Choose $r,s$ with $(G/N)^{(r)}=1$ and $N^{(s)}=1$. [given, F1, choose]

1.2 Coordinatewise calculation using [L2] gives $[(g,h),(g',h')]=([g,g'],[h,h'])$, so $(G_1\times G_2)'=G_1'\times G_2'$ and therefore $(G_1\times G_2)^{(k)}=G_1^{(k)}\times G_2^{(k)}$ for every $k$. [L2, algebra]

2.1 By [L1], $q(G^{(r)})=1$, so $G^{(r)}\le N$. Repeatedly applying the subgroup inclusion in [L1] gives $G^{(r+s)}=(G^{(r)})^{(s)}\le N^{(s)}=1$. [step 1.1, L1]

3.1 Hence $G$ is solvable by [F1]. [step 2.1, F1]

4.1 Choosing a common bound for the derived lengths in a nonempty finite family and using step 1.2 inductively proves its product solvable; for the empty family the product is the trivial group, which has derived length zero. [step 1.2, F1, algebra] ∎
