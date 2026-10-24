---
id: thm-private-coin-ip-equals-public-coin-ip
kind: theorem
title: "Private-coin IP equals public-coin IP"
status: published
origin: session
deps: [def-private-coin-public-coin-and-arthur-merlin-protocol, lem-hashing-commits-public-randomness]
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
    - title: "Arora and Barak, Theorem 8.8"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Every polynomial-round private-coin interactive proof has a polynomial-round public-coin interactive proof for the same language. Thus private-coin IP equals public-coin IP.

## Proof

**Given:** a private-coin polynomial-round verifier with polynomial communication and constant gap.

1.1 The Goldwasser--Sipser conversion replaces the hidden continuation at each verifier move by a public set-lower-bound subprotocol: Arthur announces a pairwise-independent hash and Merlin supplies a compatible accepting continuation in the announced hash fibre. The fibre estimate of [[lem-hashing-commits-public-randomness]] is the variance calculation used by that subprotocol. [given]

2.1 Arora--Barak's stated public-coin conversion establishes $\mathrm{IP}[k]\subseteq\mathrm{AM}[k+2]$ for every polynomial-time computable round bound $k$. Its construction has polynomial-length hashes, challenges, and witnesses, hence preserves polynomial verification and produces a public-coin protocol for the same language. [step 1.1, given]

3.1 A public-coin verifier is already a private-coin verifier which reveals its coins. Therefore both inclusions hold. [step 2.1, given] ∎
