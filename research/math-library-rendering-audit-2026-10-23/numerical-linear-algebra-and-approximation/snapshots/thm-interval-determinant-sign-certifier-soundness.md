---
id: thm-interval-determinant-sign-certifier-soundness
kind: theorem
title: The interval determinant sign certifier is sound and failure means unknown
status: published
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

[F1] When every operation returns a finite enclosure, outward interval DAG evaluation encloses the exact determinant range; a non-finite status asserts no finite DAG enclosure ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] An interval containing all determinants certifies nonsingularity when it excludes zero; the exact zero interval certifies singularity ([[thm-interval-determinant-sign-certificate-soundness]]).

[F3] The determinant algorithm evaluates the finite Leibniz formula and returns only the stated three statuses ([[alg-interval-determinant-sign-certifier]]).

## Proof

1.1 Suppose the return is `nonsingular` or `all-singular`. By [F3], every operation in the finite Leibniz evaluation returned a finite enclosure, so [F1] gives $\det A\in D$ for every represented family member. If the return is `nonsingular`, then $0\notin D$; if it is `all-singular`, then $D=\{0\}$. [given, F1, F3, algebra]

2.1 Apply [F2] to $D$ in each of those two conclusive cases to obtain the claimed singularity or determinant-sign guarantee. By [F3], an `inconclusive` return occurs either after a non-finite operation, when [F1] asserts no finite determinant enclosure, or after a finite enclosure with $0\in D$ and $D\ne\{0\}$, when neither test in [F2] applies. In either branch the algorithm makes no singularity or sign claim. [F1, F2, F3, step 1.1] ∎

