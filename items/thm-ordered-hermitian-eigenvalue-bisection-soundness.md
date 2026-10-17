---
id: thm-ordered-hermitian-eigenvalue-bisection-soundness
kind: theorem
title: The ordered Hermitian bisection certifier returns valid intervals or an inconclusive status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [alg-ordered-hermitian-eigenvalue-bisection, thm-inertia-guided-bisection-loop-soundness, lem-hermitian-eigenvalue-frobenius-bound, thm-interval-hermitian-ldl-inertia-certifier-soundness, thm-outward-rounded-operations-are-isotone-and-dag-sound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For every completed run of [[alg-ordered-hermitian-eigenvalue-bisection]] on a family of $n\ge1$ dimensional Hermitian matrices, each returned interval for index $k\in\{1,\ldots,n\}$ contains $\lambda_k(A)$ for every admitted matrix $A$. A blocked or budget-exhausted result preserves the same enclosure guarantee but may have width greater than the requested tolerance. Failure to certify a shift is not evidence of a singular family member.

## Facts & Assumptions

**Given:** A nonempty Hermitian family with sound finite interval enclosure, positive tolerance and a finite query budget.

[F1] Outward interval bounds enclose every family entry and every computed norm upper bound ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] Every eigenvalue lies in the interval given by a uniform Frobenius norm bound ([[lem-hermitian-eigenvalue-frobenius-bound]]).

[F3] A successful interval LDL inertia result is the exact uniform inertia for every shifted family member ([[thm-interval-hermitian-ldl-inertia-certifier-soundness]]).

[F4] Inertia-guided midpoint updates preserve ordered eigenvalue brackets, and an inconclusive query leaves its bracket unchanged ([[thm-inertia-guided-bisection-loop-soundness]]).

## Proof

1.1 If the interval norm calculation succeeds, [F1] makes its returned $M$ an upper bound for every $\|A\|_F$. By [F2], every eigenvalue of every member lies in $[-M,M]$, so all initial brackets are valid. [given, F1, F2, algebra]

1.2 At a successful shift, [F3] supplies one inertia for every $A-\tau I$ and its zero count is checked to be zero. Its negative count is therefore exactly the number of eigenvalues of each $A$ below $\tau$. The algorithm's update is the successful query of [F4]; on pivot failure or a zero pivot it leaves the interval unchanged, which is the inconclusive branch of [F4]. [given, F3, F4, algebra]

2.1 Apply [F4] to each index, treating later unexecuted queries after a blocked index or budget exhaustion as no-op inconclusive queries. Each bracket therefore continues to contain the corresponding ordered eigenvalue for every family member. Certified updates halve its width, while statuses only describe why the requested tolerance or query count may not have been reached. [given, F4, step 1.1, step 1.2, induction] ∎
