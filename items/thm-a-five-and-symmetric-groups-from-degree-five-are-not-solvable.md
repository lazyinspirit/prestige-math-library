---
id: thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable
kind: theorem
title: "$A_5$ and $S_n$ for $n\\ge5$ are not solvable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-alternating-group-is-simple-for-n-at-least-five, cor-derived-subgroups-of-symmetric-and-alternating-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

The alternating group $A_n$ is not solvable for every $n\ge5$. Consequently $S_n$ is not solvable for every $n\ge5$; in particular, $A_5$ and $S_5$ are not solvable.

## Facts & Assumptions

**Given:** An integer $n\ge5$.

[F1] A group is solvable exactly when its derived series reaches the trivial group ([[def-derived-series-solvable-group-and-derived-length]]).

[L1] Every subgroup of a solvable group is solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L2] $A_n$ is simple for every $n\ge5$ ([[thm-alternating-group-is-simple-for-n-at-least-five]]).

[L3] For $n\ge5$, $A_n'=A_n$; also $S_n'=A_n$ ([[cor-derived-subgroups-of-symmetric-and-alternating-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], every positive term of the derived series of $A_n$ equals $A_n$, which is nontrivial by [L2]; hence the series never reaches $1$, and $A_n$ is not solvable by [F1]. [given, L2, L3, F1]

2.1 Since $A_n\le S_n$, solvability of $S_n$ would imply solvability of $A_n$ by [L1], contradicting step 1.1. [step 1.1, L1]

3.1 Therefore $A_n$ and $S_n$ are nonsolvable for all $n\ge5$, including $n=5$. [step 1.1, step 2.1] ∎
