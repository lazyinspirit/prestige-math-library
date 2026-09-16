---
id: thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge
kind: theorem
title: Nondegeneracy is equivalent to a nonvanishing top wedge
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold", "def-wedge-product-of-differential-forms", "thm-alternating-forms-have-a-symplectic-normal-form"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.1, Proposition 3.2, pp. 31--32
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $M$ have dimension $2n$ and let $\omega$ be a smooth two-form. Then
$\omega$ is pointwise nondegenerate if and only if the top-degree form
$\omega^n$ is nowhere zero.

## Facts & Assumptions

**Given:** A smooth $2n$-manifold $M$ and $\omega\in\Omega^2(M)$.

[F1] Wedge products of differential forms are defined pointwise. [[def-wedge-product-of-differential-forms]].

[F2] Every alternating form has the symplectic-pair/radical normal form. [[thm-alternating-forms-have-a-symplectic-normal-form]].

[F3] Pointwise nondegeneracy is the linear clause in the definition of a symplectic form. [[def-symplectic-form-and-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 Fix $p\in M$. If $\omega_p$ is nondegenerate, [F2] supplies a basis $e_1,\ldots,e_n,f_1,\ldots,f_n$ with $\omega_p=\sum_i e^i\wedge f^i$. Hence $\omega_p^n=n!e^1\wedge f^1\wedge\cdots\wedge e^n\wedge f^n\ne0$. [F1, F2]

1.2 Conversely, if $0\ne v$ lies in the radical of $\omega_p$, then the graded contraction rule gives $\iota_v(\omega_p^n)=n(\iota_v\omega_p)\wedge\omega_p^{n-1}=0$. A nonzero top covector has nonzero contraction by every nonzero vector: extend $v$ to a basis and evaluate on the remaining basis vectors. Therefore $\omega_p^n=0$. [F1, algebra]

2.1 Steps 1.1--1.2 prove the equivalence at every $p$, which is exactly [F3]. For $n=0$, $\omega^0=1$ and the zero tangent space is nondegenerate, so the same conclusion holds. Closedness is irrelevant to this pointwise equivalence. [F3, step 1.1, step 1.2] ∎
