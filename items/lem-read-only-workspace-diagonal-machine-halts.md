---
id: lem-read-only-workspace-diagonal-machine-halts
kind: lemma
title: "The read-only-workspace diagonal machine halts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, lem-read-only-workspace-universal-simulation]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $s$ be work-space constructible with
$\log(n+2)=O(s(n))$. The local read-only-workspace diagonal simulator can
stop every deterministic computation after its finite configuration bound
while using $O(s(n))$ work space.

## Facts & Assumptions

**Given:** the stated constructible bound. For varying machine descriptions, use the uniform encoded-storage cap of [[lem-read-only-workspace-universal-simulation]]; for a fixed machine, its visited-cell cap gives the same asymptotic bound with a machine-dependent constant.

## Proof

**Proof technique:** direct.

1.1 Compute $s(n)$ in $O(s(n))$ work space, simulating the constructibility machine on a virtual unary input of length $n$ if necessary. For varying descriptions, reject when the universal simulator's entire encoded configuration and scratch storage would exceed $s(n)$ cells. A configuration below this cap is described by $O(s(n))$ bits, together with $O(\log(n+2))$ bits for input and program addresses. Thus the number of possible configurations is at most $2^{O(s(n)+\log(n+2))}=2^{O(s(n))}$. The cap may reject a computation before this bound is reached. [given, construct]

2.1 Use the uniform encoded-storage simulator and a binary counter of $O(s(n))$ bits to count through this configuration bound, stopping at expiry or an earlier storage overflow. A deterministic computation that remains within the cap and has not halted by then must repeat a configuration. The forced answer therefore makes the simulation total while the simulator, counter, and address bookkeeping together use $O(s(n))$ work space. For a fixed machine the visited-cell version of the supplier gives the analogous bound. [step 1.1, algebra] ∎
