---
id: cex-pair-count-normalized-sample-acvf-not-positive-semidefinite
kind: counterexample
title: "Pair-count-normalized sample ACVF need not be positive semidefinite"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-autocovariance-and-sample-autocovariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

For every finite real data vector, the pair-count-normalized sample ACVF
$\widetilde\gamma_n$ has nonnegative Toeplitz quadratic forms.

## Facts & Assumptions

**Given:** The pair-count-normalized sample ACVF definition for a finite data
vector of length $n\ge1$.

[F1] For $|h|<n$, the pair-count-normalized rescaling divides the centered
lag-product sum by $n-|h|$ and is zero outside that lag range
([[def-autocovariance-and-sample-autocovariance]]).

## Counterexample

1.1 Take $n=3$ and data $(x_1,x_2,x_3)=(1,0,0)$. Its sample mean is $1/3$, so its centered values are $(2/3,-1/3,-1/3)$. By [F1], $\widetilde\gamma_3(0)=2/9$, $\widetilde\gamma_3(1)=-1/18$, and $\widetilde\gamma_3(2)=-2/9$; negative-lag values equal the corresponding positive-lag values. [F1, given, algebra]

2.1 In the Toeplitz matrix on indices $0,1,2$, the diagonal entries are $2/9$, the first off-diagonal entries are $-1/18$, and the outer off-diagonal entries are $-2/9$ by step 1.1. For $v=(1,\frac12,1)^T$, the quadratic form is $v^TTv=(2/9)(1+1/4+1)+2(-1/18)(1/2+1/2)+2(-2/9)=-1/18<0$. A positive-semidefinite Toeplitz form must be nonnegative on every real vector, so this data vector refutes the statement. [step 1.1, algebra] ∎