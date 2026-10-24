---
id: thm-ip-is-contained-in-pspace
kind: theorem
title: "IP is contained in PSPACE"
status: published
origin: session
deps: [def-ip, lem-protocol-value-is-computable-in-polynomial-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, §8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

$\mathrm{IP}\subseteq\mathrm{PSPACE}$.

## Facts & Assumptions

**Given:** $L\in\mathrm{IP}$ and its constant-gap protocol.

[L1] The value of the protocol's public-information game can be computed in polynomial space, by [[lem-protocol-value-is-computable-in-polynomial-space]].

[L2] Completeness gives value at least $2/3$ on members and soundness bounds the value by $1/3$ on nonmembers, by [[def-ip]].

## Proof

**Proof technique:** direct.

1.1 On input $x$, compute the public-information protocol root value in polynomial space. The prover maxima are indexed by public transcripts, while verifier randomness is averaged over the compatible private histories, so this is the value of a legal prover strategy rather than a full-information strategy. [L1, given]

2.1 Accept precisely when that value exceeds $1/2$. It is at least $2/3$ on $x\in L$ and at most $1/3$ on $x\notin L$, so this test decides $L$. [L2, step 1.1, given] ∎
