---
id: fs-all-finite-simple-groups-are-alternating-or-cyclic
kind: false-statement
title: "All finite simple groups are alternating or cyclic"
status: published
origin: pipeline
deps: [lem-psl-two-seven-is-simple-of-order-168, cor-alternating-group-is-normal-and-has-half-the-elements]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/fs-all-finite-simple-groups-are-alternating-or-cyclic.json
---

## Statement

Every finite simple group is cyclic or alternating.

## Facts & Assumptions

**Given:** The explicitly constructed finite group $G=\operatorname{PSL}(2,7)$ of [[lem-psl-two-seven-is-simple-of-order-168]].

[L1] $G$ is simple, nonabelian, and has order $168$, by the elementary local proof in [[lem-psl-two-seven-is-simple-of-order-168]].

[L2] For $n\ge2$, $|A_n|=n!/2$, and $A_0,A_1$ are trivial ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

## Refutation

**Proof technique:** direct.

1.1 By L1, $G$ is finite simple and is not cyclic, since every cyclic group is abelian: powers of one generator commute. By L2 the orders of $A_n$ for $0\le n\le5$ are $1,1,1,3,12,60$. For $n\ge6$ they are at least $6!/2=360$, since each further factorial factor is positive and at least one. None equals $168$, so $G$ is not isomorphic to any alternating group. [L1, L2, algebra]

2.1 Thus $G$ is a finite simple group that is neither cyclic nor alternating, refuting the statement with a fully local construction and simplicity proof. [step 1.1, contradiction] ∎
