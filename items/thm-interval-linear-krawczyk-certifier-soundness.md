---
id: thm-interval-linear-krawczyk-certifier-soundness
kind: theorem
title: The interval Krawczyk certifier has the stated per-system guarantee
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-interval-linear-krawczyk-certifier, thm-krawczyk-set-inclusion-existence-and-uniqueness, thm-outward-rounded-operations-are-isotone-and-dag-sound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

If [[alg-interval-linear-krawczyk-certifier]] returns `existence-certified`, every admitted system $Ax=b$ has at least one solution in $X$. If it also returns `unique-certified`, each fixed admitted pair has exactly one solution in $X$. `Inconclusive` asserts neither existence nor singularity.

## Facts & Assumptions

**Given:** The admitted matrix and right-hand-side families, box $X$, $x_0\in X$, a supplied inverse witness $S$ for $R$, and an existence-certified run.

[F1] Outward interval operations enclose their exact expression ranges ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] Krawczyk set inclusion gives existence, and a defect norm below one gives uniqueness ([[thm-krawczyk-set-inclusion-existence-and-uniqueness]]).

[F3] On an existence-certified return the admitted inputs satisfy $RS=SR=I$, and the algorithm checks that its outward Krawczyk enclosure lies in $X$; on a unique-certified return it also supplies an outward defect bound $q<1$ ([[alg-interval-linear-krawczyk-certifier]]).

## Proof

1.1 Since $RS=SR=I$, the supplied $R$ is invertible. By [F1], the computed enclosing box contains every exact value of $x_0-R(Ax_0-b)+(I-RA)(x-x_0)$ for each admitted pair and each $x\in X$. Its successful inclusion in $X$ therefore implies the set $K^*(X)$ from [F2] is contained in $X$. [given, F1, F2, F3, algebra]

2.1 Apply [F2] to each fixed pair to obtain a solution in $X$. If the run also reports `unique-certified`, [F3] supplies an outward row-sum bound with $\|I-RA\|_{\infty,\mathbb C}\le q<1$ for every admitted $A$, so the uniqueness clause of [F2] applies separately to every pair. If that strict bound is not returned, no uniqueness claim follows. [given, F2, F3, step 1.1] ∎

