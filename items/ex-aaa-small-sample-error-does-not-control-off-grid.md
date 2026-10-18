---
id: ex-aaa-small-sample-error-does-not-control-off-grid
kind: example
title: Zero AAA sample residual can coexist with arbitrary off-grid error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - alg-aaa-finite-sample-rational-approximation
dependency_level: 4
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm
        for rational approximation, Sections 3–4
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let the sample set be $Z=(0,1)$ and, for any $M>0$, let
$f_M(t)=Mt(1-t)$ on $[0,1]$. Exact AAA with support budget $B=1$, sweep
budget $S=0$, and tolerance zero starts at the constant mean of the two
samples and returns immediately with zero sampled residual, but its uniform
error is $M/4$.
For a continuous $q$ on $[0,1]$, write
$\|q\|_{\infty,[0,1]}:=\sup_{t\in[0,1]}|q(t)|$.

## Facts & Assumptions

**Given:** $M>0$, the two sample points $0,1$, data $f_M(t)=Mt(1-t)$, support budget $B=1$, sweep budget $S=0$, tolerance $0$, and the exact AAA procedure.

[F1] [[alg-aaa-finite-sample-rational-approximation]]: the initial candidate is the sample mean, and the procedure stops when the maximum sample residual is at most the supplied tolerance.

## Verification

1.1 The sample values are $f_M(0)=f_M(1)=0$, so their mean is zero and the initial candidate $r_0$ is the zero function. Its residual at both sample points is zero, hence the tolerance-zero stopping rule in [F1] returns $r_0$ before selecting any support node. [given, F1, algebra]

2.1 At the unsampled point $t=1/2$, $f_M(1/2)=M/4$ and $r_0(1/2)=0$. Since $t(1-t)=1/4-(t-1/2)^2\le1/4$ on $[0,1]$, the uniform error is exactly $M/4$, while the sampled residual is zero. Since $M$ is arbitrary, no finite uniform off-grid error bound follows from this sample residual alone. [given, step 1.1, algebra] ∎

