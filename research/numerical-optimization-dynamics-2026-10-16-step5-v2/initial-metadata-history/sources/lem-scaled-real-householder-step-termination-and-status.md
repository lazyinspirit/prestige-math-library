---
id: lem-scaled-real-householder-step-termination-and-status
kind: lemma
title: "The scaled real-column Householder procedure terminates with defined statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-scaled-householder-reflector-formation-and-application
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Householder triangularization"
      url: https://fncbook.com/house/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

On every admitted finite input of [[alg-scaled-householder-reflector-formation-and-application]], the formation and application procedure terminates with its specified identity, reflector or first-failure return. Each specified separate-block application also terminates with its output or first failure. The zero-column branch returns the identity action and the copied block without evaluating a reflector denominator. In a successful nonzero-column branch the stored vector is nonzero, so its associated exact real reflector is orthogonal and also acts unitarily on complex blocks. This statement asserts neither unconditional arithmetic success nor a backward-error bound for a successful call.

## Facts & Assumptions

**Given:** The finite input dimensions and admitted arithmetic model of the procedure.

[F1] [[alg-scaled-householder-reflector-formation-and-application]] specifies the finite indexed scalar schedule, componentwise zero test, first-failure returns and positive-normal test on the computed squared norm of the stored vector.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] makes each elementary operation return a finite value or its failure; exact-zero operations, copies and sign changes are exact.

## Proof

1.1 The zero test scans a finite column. If it succeeds, [F1] returns its initialized identity record, zero target and copied finite block without forming any squared-vector norm or quotient. Otherwise the scaling maximum, the two norm sums, coefficient formation, column dots and ordered update products each use finitely many indices. By [F2], each attempted arithmetic operation returns its next value or a first failure. The extra finite positivity and normality tests either return failure or allow the next finite stage. Thus formation and application terminate with a declared record. [given, F1, F2, algebra]

1.2 A specified separate block has finitely many columns and rows. Its sequential dots, coefficient-vector products and ordered update products have finite bounds; [F2] again makes each attempt return or fail. Hence this additional application terminates, including zero columns of the separate block. [given, F1, F2, algebra]

2.1 In a successful nonzero-column branch, the stored squared-norm sum is positive by [F1]. If the stored vector were zero, every square and every sum in that computation would be exact zero by [F2], contradicting that positive test. Therefore $v\ne0$ and $d=v^Tv>0$. For $K=vv^T/d$, direct multiplication gives $K^T=K$, $K^2=K$ and $(I-2K)^T(I-2K)=I$. Its real entries give the same adjoint identity over $\mathbb C$. Together with steps 1.1–1.2 this proves every stated status and representative property. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Remarks

The reference entries are inherited from the analyzed procedure as method context. This result extracts and composes its explicit finite schedule and representative algebra; no verbatim external theorem or additional external reading is claimed.

This is a local extraction of finite-loop and representative arguments from the existing procedure carrier. Its error estimates remain in `lem-scaled-householder-step-meets-local-backward-error-premise` under that lemma's distinct hypotheses; no external full-text reading is claimed.
