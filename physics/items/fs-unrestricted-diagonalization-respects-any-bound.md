---
id: fs-unrestricted-diagonalization-respects-any-bound
kind: false-statement
title: "False: unrestricted diagonalization respects any resource bound"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, def-effective-encoding-of-turing-machines]
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
    - title: "Arora and Barak, Computational Complexity, §3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

An unrestricted universal diagonalization automatically stays within whatever
resource bound is claimed for its simulated machines.

## Facts & Assumptions

**Given:** the claimed constant bound $f(n)=1$.

[F1] The fixed clocked simulator first decodes the complete self-delimiting pair and rejects malformed encodings before running the simulated machine ([[def-efficient-universal-simulation-with-clock]], [[def-effective-encoding-of-turing-machines]]).

## Refutation

**Proof technique:** direct.

1.1 Fix a machine $M$ that halts after one transition without reading its input, and consider the valid pairs $\langle M,x\rangle$ as $|x|$ grows. The simulated computation respects the bound $f=1$, but [F1] requires the specified simulator to read the complete pair before simulation. Reading that unbounded input takes at least linear time in its length. [given, F1, construct]

2.1 Hence this unrestricted diagonalizer is not an $O(1)$-time computation, despite every selected run of $M$ taking one step. A candidate's resource bound alone therefore does not bound decoding and universal-simulation overhead; a separate clock and a proved gap are needed. [step 1.1, algebra] ∎
