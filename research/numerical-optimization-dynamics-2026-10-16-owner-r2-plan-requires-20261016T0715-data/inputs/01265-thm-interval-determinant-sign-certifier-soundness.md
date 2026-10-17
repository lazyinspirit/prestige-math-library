---
id: thm-interval-determinant-sign-certifier-soundness
kind: theorem
title: The interval determinant sign certifier is sound and failure means unknown
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-interval-determinant-sign-certifier, thm-interval-determinant-sign-certificate-soundness, thm-outward-rounded-operations-are-isotone-and-dag-sound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.10"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

If [[alg-interval-determinant-sign-certifier]] returns `nonsingular` or `all-singular` for a real interval matrix family, the corresponding nonsingularity/sign or all-singular claim holds for every family member. An `inconclusive` result makes no claim about singularity.

## Facts & Assumptions

**Given:** A nonempty real square matrix family represented by finite interval boxes and a completed algorithm return.

[F1] Outward interval DAG evaluation encloses the exact range of each determinant expression ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] An interval containing all determinants certifies nonsingularity when it excludes zero; the exact zero interval certifies singularity ([[thm-interval-determinant-sign-certificate-soundness]]).

[F3] The determinant algorithm evaluates the finite Leibniz formula and returns only the stated three statuses ([[alg-interval-determinant-sign-certifier]]).

## Proof

1.1 By [F1] and the finite Leibniz evaluation in [F3], every determinant $\det A$ of a represented family member belongs to the returned interval $D$. If the return is `nonsingular`, then $0\notin D$; if it is `all-singular`, then $D=\{0\}$. [given, F1, F3, algebra]

2.1 Apply [F2] to $D$ in each of those two cases. If the return is `inconclusive`, neither condition is satisfied and [F2] provides no singularity or sign conclusion. [F2, step 1.1, algebra] ∎

