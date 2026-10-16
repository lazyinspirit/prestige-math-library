---
id: ex-qc-surface-memory-bound-hypotheses
kind: example
title: "Surface-Code Memory Bound Under IID Z Noise"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps:
  - thm-qc-planar-surface-code-iid-z-memory-bound
dependency_level: 20
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Statement

Assume the distance-five relative square planar patch, which has $n=2(5)^2=50$ data qubits, iid $Z$-error rate $\epsilon=1/144$, one perfect syndrome round, and minimum-weight recovery. The finite series in the planar memory theorem gives the conditional upper bound $P_{\mathrm{logical}}\le6\sum_{\ell=5}^{50}(1/2)^\ell=\frac38(1-2^{-46})<\frac38$.
This calculation concerns an ideal-syndrome memory round only.

## Example

Take the stated finite parameters. Since $36\epsilon=1/4$, each summand $(36\epsilon)^{\ell/2}$ equals $2^{-\ell}$. The theorem's prefactor is $d+1=6$.

## Facts & Assumptions


**Given:** $d=5$, $n=50$, $\epsilon=1/144$, iid $Z$-noise, perfect syndrome extraction, and minimum-weight recovery.

[F1] [[thm-qc-planar-surface-code-iid-z-memory-bound]]: Under those hypotheses, $P_{\mathrm{logical}}\le(d+1)\sum_{\ell=d}^{n}(36\epsilon)^{\ell/2}$.

## Verification

1.1 Compute $36\epsilon=36/144=1/4$, so $(36\epsilon)^{\ell/2}=((1/4)^{1/2})^\ell=2^{-\ell}$. [given, algebra]

2.1 The finite geometric sum is $\sum_{\ell=5}^{50}2^{-\ell}=2^{-5}(1-2^{-46})/(1-1/2)=\frac1{16}(1-2^{-46})$. Multiplying by $d+1=6$ gives $\frac38(1-2^{-46})<\frac38$. [given, step 1.1, algebra]

3.1 Applying [F1] yields the stated conditional failure-probability bound. The hypotheses include perfect syndrome extraction; this example makes no faulty-gate threshold claim. [F1, step 2.1] ∎

