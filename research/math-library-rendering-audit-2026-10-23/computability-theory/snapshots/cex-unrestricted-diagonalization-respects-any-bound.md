---
id: cex-unrestricted-diagonalization-respects-any-bound
kind: counterexample
title: "Overhead breaks an unrestricted diagonalization claim"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-unrestricted-diagonalization-respects-any-bound, def-efficient-universal-simulation-with-clock, def-effective-encoding-of-turing-machines]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement refuted

Simulating an $n$-step coded machine always costs at most $n$ steps.

## Facts & Assumptions

**Given:** the fixed self-delimiting machine coding and the fixed simulator, which decodes its complete input pair before beginning the simulated run.

[L1] The total decoder first parses the unary arity and all indicated self-delimiting blocks. [[def-effective-encoding-of-turing-machines]]

## Counterexample

**Proof technique:** direct.

1.1 Choose a valid coded machine $M$ that makes one transition and then halts, and give the fixed simulator $U_1$ the pair $\langle M,\epsilon\rangle$. The concrete code $\ulcorner M\urcorner$ has a unary arity header followed by all self-delimiting description fields, so its complete decoding requires reading more than one input cell. [given, L1, construct]

2.1 By definition, $U_1$ completes that decoding before it simulates the one transition of $M$. Merely reaching and reading the later code cells takes more than one transition on the simulator's input tape. Thus this valid one-step computation costs more than one simulator step, contradicting the claimed universal bound at $n=1$. [L1, step 1.1] ∎
