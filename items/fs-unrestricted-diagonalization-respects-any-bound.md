---
id: fs-unrestricted-diagonalization-respects-any-bound
kind: false-statement
title: "False: unrestricted diagonalization respects any resource bound"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, thm-deterministic-time-hierarchy]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
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

## Refutation

**Proof technique:** direct.

1.1 Fix a machine $M$ that halts after one transition without reading its input, and consider the valid pairs $\langle M,x\rangle$ as $|x|$ grows. The simulated computation respects the bound $f=1$, but the specified universal simulator must first decode the complete self-delimiting pair and reject malformed encodings. This takes time at least linear in the unbounded pair length. [given, construct]

2.1 Hence this unrestricted diagonalizer is not an $O(1)$-time computation, despite every selected run of $M$ taking one step. A candidate's resource bound alone therefore does not bound decoding and universal-simulation overhead; a separate clock and a proved gap are needed. [step 1.1, algebra] ∎
