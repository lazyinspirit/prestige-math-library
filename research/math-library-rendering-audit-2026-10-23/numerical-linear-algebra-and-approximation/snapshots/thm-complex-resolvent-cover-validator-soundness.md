---
id: thm-complex-resolvent-cover-validator-soundness
kind: theorem
title: The finite disk cover validator returns a uniform resolvent bound on success
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-complex-resolvent-cover-validator, thm-complex-resolvent-cover-certificate-soundness, thm-outward-rounded-operations-are-isotone-and-dag-sound]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

If the validator's input has $n\ge1$ and [[alg-complex-resolvent-cover-validator]] returns `certified-resolvent-cover` with bound $m$, then every $A$ in the input family and every $z$ on the supplied contour segments satisfy that $zI-A$ is invertible and $\|(zI-A)^{-1}\|_{\infty,\mathbb C}\le m$. The result does not count eigenvalues inside the contour.

## Facts & Assumptions

**Given:** The finite contour, disk assignments, matrix family and a successful validator return.

[F1] Outward interval operations enclose all exact matrix and scalar quantities used by the validator ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] Certified disk bounds $e_j,\delta_A,s_j$ with $e_j+s_j(r_j+\delta_A)<1$ imply a uniform resolvent bound on the covered contour ([[thm-complex-resolvent-cover-certificate-soundness]]).

[F3] The algorithm checks endpoint coverage and reports its maximum disk bound only after all strict inequalities succeed ([[alg-complex-resolvent-cover-validator]]).

## Proof

1.1 By [F1], each reported $e_j,\delta_A,s_j$ bounds the exact norm or family supremum it is intended to bound. The algorithm checks the disk endpoint conditions. Each whole assigned segment lies in its disk by convexity, so the disks cover every point of the contour. Its computed $q_j<1$ and $m\ge\max_j s_j/(1-q_j)$ therefore satisfy all hypotheses and the bound comparison in [F2]. [given, F1, F2, F3, algebra]

2.1 Apply [F2] to obtain invertibility and the diskwise resolvent bound at every contour point and for every family member. Since each disk bound is at most $m$, the returned uniform inequality follows. The theorem invoked in [F2] makes no eigenvalue-count assertion, so none is concluded here. [F2, step 1.1] ∎

