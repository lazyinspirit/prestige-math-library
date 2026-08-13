---
id: ex-composition-and-derived-series-of-s-three
kind: example
title: "A composition series and the derived series of $S_3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-composition-series-composition-factors-and-length, def-derived-series-solvable-group-and-derived-length, def-nilpotent-group-and-nilpotency-class, thm-upper-and-lower-central-characterizations-of-nilpotence, cor-derived-subgroups-of-symmetric-and-alternating-groups]
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

## Example

The chain $S_3\triangleright A_3\triangleright1$ is a composition series with factors $C_2$ and $C_3$. It is also the derived series: $S_3'=A_3$ and $A_3'=1$. Thus $S_3$ is solvable of derived length two, but it is not nilpotent.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ and its alternating subgroup $A_3$.

[F1] A composition series is a strict subnormal chain with simple factors ([[def-composition-series-composition-factors-and-length]]).

[F2] Derived length is the least $n$ with $G^{(n)}=1$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F3] A group is nilpotent when $Z_c(G)=G$ for some $c$, equivalently when it has a central series from $1$ to $G$ ([[def-nilpotent-group-and-nilpotency-class]], [[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L1] $S_3'=A_3$ ([[cor-derived-subgroups-of-symmetric-and-alternating-groups]]).

## Verification

**Proof technique:** direct.

1.1 The normal subgroup $A_3$ has order three and quotient $S_3/A_3$ has order two; both factors are cyclic of prime order and simple, so $S_3\triangleright A_3\triangleright1$ is a composition series by [F1]. [given, F1, algebra]

1.2 By [L1], $S_3'=A_3$; the cyclic group $A_3$ is abelian, so $A_3'=1$. Thus the same chain is the derived series and [F2] gives derived length two. [L1, F2, algebra]

1.3 The center of $S_3$ is trivial: a central element must commute with $(12)$ and $(123)$, but direct multiplication shows that none of the five nonidentity permutations commutes with both. [algebra]

2.1 If a nontrivial group has a central series, take its first nontrivial term $H_j$. Then $H_{j-1}=1$ and centrality gives $H_j\le Z(G)$, so the center is nontrivial. By [F3], a nontrivial nilpotent group has such a series; step 1.3 therefore shows that $S_3$ is not nilpotent. [step 1.3, F3] ∎
