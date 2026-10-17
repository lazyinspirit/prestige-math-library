---
id: lem-complex-scaled-householder-step-termination-and-status
kind: lemma
title: "The scaled complex Householder wrapper terminates with a defined unitary representative"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-complex-scaled-householder-reflector-step
  - alg-scaled-complex-householder-and-givens-updates
  - lem-scaled-complex-householder-and-givens-local-backward-error
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references: []
---

## Statement

For every admitted finite input of [[alg-complex-scaled-householder-reflector-step]], the wrapper terminates with its stated success, identity, breakdown or range-failure return. The zero-column branch copies the separate block and uses the identity with zero target and separate-block discrepancies, without evaluating $P(0)$. In a successful nonzero-column branch its stored vector $v$ is nonzero and $P(v)=I-2vv^*/(v^*v)$ is unitary. When the hypotheses of [[lem-scaled-complex-householder-and-givens-local-backward-error]] hold, the wrapper inherits that lemma's Householder target-overwrite and separate-block error bounds for the actual respective applications. This makes no claim of unconditional range success or exact unitarity of a rounded dense accumulator.

## Facts & Assumptions

**Given:** Finite input dimensions, canonical arithmetic realization and the separately stated local-error hypotheses when that conclusion is invoked.

[F1] [[alg-complex-scaled-householder-reflector-step]] specifies the wrapper's statuses, zero branch and external-vector separate-block convention.

[F2] [[alg-scaled-complex-householder-and-givens-updates]] specifies the finite scaled Householder norm, phase, coefficient and update schedule.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] returns a finite result or failure for each elementary operation, with exact zero operations.

[F4] [[lem-scaled-complex-householder-and-givens-local-backward-error]] gives the Householder target coefficient $\eta_H(r)$ and separate-block coefficient $(1+u)c_U+3u$ for its actual successful arithmetic realization and small-roundoff hypotheses.

## Proof

1.1 The zero-column test in [F1] has finite length and its zero branch immediately returns copied data. On a nonzero input, every component norm/phase computation, sequential dot, real-coefficient multiplication and ordered complex update in [F2] has finite input dimensions. Each complex product expands into finitely many real operations. By [F3], the sequence either returns its first failure or completes. The wrapper relabels an invalid/nonpositive stored-vector norm as breakdown and otherwise preserves the specified range-failure or success, so it also terminates. [given, F1, F2, F3, algebra]

2.1 Success on a nonzero input requires a positive computed stored-vector squared norm. If $v=0$, all its component squares and their sequential sum are exact zero by [F3], a contradiction. Thus $d=v^*v>0$. The rank-one matrix $K=vv^*/d$ satisfies $K^*=K$ and $K^2=K$, whence $(I-2K)^*(I-2K)=I$. On a zero input [F1] instead uses the identity and copies the block, so both discrepancies are zero and no denominator is evaluated. [F1, F2, F3, step 1.1, algebra]

2.2 Under the separately required hypotheses, [F4] applies because [F1] delegates the same arithmetic schedule [F2]. A matrix target retains the actual overwrite covered by $\eta_H(r)$. An external polynomial vector has no matrix target; [F1] prescribes the separate-block application, so the separate-block coefficient applies instead. This transfers exactly the stated conditional bounds, without treating a rounded accumulator as its exact representative. [given, F1, F2, F4, step 2.1, algebra] ∎

## Remarks

This extracts the existing wrapper's termination and nonzero/unitary arguments; the substantial arithmetic estimates are reused from the existing proved supplier. No new external source reading is claimed.
