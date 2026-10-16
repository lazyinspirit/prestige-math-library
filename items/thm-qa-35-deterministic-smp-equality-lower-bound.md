---
id: thm-qa-35-deterministic-smp-equality-lower-bound
kind: theorem
title: "Deterministic SMP equality costs Ω(n) bits"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: ["def-qa-35-equality-promise", "def-qa-35-finite-communication-protocol"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

Every deterministic simultaneous-message protocol for Equality on n-bit inputs has Alice’s message map injective, hence her worst-case message length is at least n bits, whether messages are fixed-length or strings of length at most the charged bound.

## Facts & Assumptions

**Given:** A deterministic simultaneous-message protocol for Equality on $n\ge1$ bits; let $b$ be the maximum number of bits in Alice's message.

[F1] [[def-qa-35-equality-promise]]: YES inputs are exactly $(x,x)$ and NO inputs are exactly $(x,y)$ with $x\ne y$.

[F2] [[def-qa-35-finite-communication-protocol]]: The referee's output is determined from the received messages and local/referee operations are separate from transmitted bits.

## Proof

**Proof technique:** direct.

1.1 Alice's message map must be injective. If $x\ne x'$ had the same Alice message, compare inputs $(x,x)$ and $(x',x)$. Bob's message is the same on both because Bob's input is $x$, and Alice's messages agree by assumption; the referee therefore receives identical transcripts although [F1] requires outputs $1$ and $0$. This contradiction proves injectivity. [given, F1, F2]

2.1 With fixed length $b$, Alice has at most $2^b$ messages, so injectivity gives $2^n\le2^b$ and $b\ge n$. If all strings of length at most $b$ are allowed, their number is $\sum_{j=0}^b2^j=2^{b+1}-1$; injectivity gives $2^n\le2^{b+1}-1$, which forces $b\ge n$. Alice alone therefore sends at least $n$ bits in the worst case. [step 1.1, algebra] ∎
