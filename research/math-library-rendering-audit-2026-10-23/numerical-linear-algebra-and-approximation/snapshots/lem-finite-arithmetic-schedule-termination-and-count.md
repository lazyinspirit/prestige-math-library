---
id: lem-finite-arithmetic-schedule-termination-and-count
kind: lemma
title: "Finite arithmetic schedules terminate, with early failure counted separately"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Driscoll and Braun, Fundamentals of Numerical Computation, floating-point numbers"
      url: https://fncbook.com/floating-point/
---

## Statement

Fix an initialized finite state and an ordered list of $M\ge0$ instructions, followed by a specified completion return. Each instruction reads only initialized data and deterministically either produces the next finite state or returns a specified early status in finite time. There are no backward jumps. Then execution terminates at the first early return, if any, or at the completion return, after at most $M$ attempted instructions. A finite nesting of counted loops with bounds fixed by the finite input has the same property whenever unrolling the loops gives such a list.

In particular, consider $d\ge0$ levels containing $2^{d-\ell}$ addition instructions at level $\ell=1,\ldots,d$, with each addition returning a rounded value or immediate failure. A successful execution attempts exactly $2^d-1$ additions; every execution attempts at most $2^d-1$. For $d=0$ there are no additions. These conclusions assert finite execution, not arithmetic success or accuracy.

## Facts & Assumptions

**Given:** the finite ordered instruction list, its initialized state and completion return, and the per-instruction finite-return hypothesis in the Statement.

## Proof

1.1 After the first $j$ instructions have completed without an early return, the state needed by instruction $j+1$ is initialized by hypothesis. That instruction either returns an early status or finishes in finite time. Induction for $j=0,\ldots,M-1$ therefore reaches an early return or completes all $M$ instructions and the specified completion return. An early return stops before any later instruction, so it is the first one and at most $M$ instructions are attempted. This includes $M=0$, when only the completion return is executed. [given, algebra]

2.1 Unroll counted loops in their prescribed order. A loop with zero iterations gives an empty list; a loop with a fixed finite number of iterations concatenates that many finite lists. Induction on the finite nesting depth gives a finite list with the same execution order, so step 1.1 applies. In the addition schedule the number of slots is $S_d=\sum_{\ell=1}^d2^{d-\ell}$. Here $S_0=0$ and $S_{d+1}=2S_d+1$, whence induction gives $S_d=2^d-1$. Success visits every slot, while failure visits only an initial segment, proving both counts. [given, step 1.1, algebra] ∎

## Remarks

The source supplies background on rounded arithmetic and range limitations. The local argument proves the finite-schedule and counting assertions; it does not assume that a primitive operation can run indefinitely while searching for a certificate or a rounded answer.
