---
id: ex-qr-finite-time-volume-growth
kind: example
title: A finite QR record recovers the tangent-volume change
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [thm-finite-time-tangent-volume-growth-from-qr]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Predrag Cvitanović et al., ChaosBook, Chapter 6: Lyapunov exponents, §6.2"
      url: "https://chaosbook.org/version15/chapters/Lyapunov.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed., §7D, result 7.58"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

Take $Q_0=I_2$, $A_1=\operatorname{diag}(2,1)$, and $A_2=\operatorname{diag}(1/3,4)$. Both positive-diagonal QR factorizations keep $Q_k=I_2$ and have $R_k=A_k$.

## Facts & Assumptions

**Given:** The two invertible diagonal tangent matrices and the finite-time QR identity.

[F1] The positive-diagonal QR factors give the exact finite-time log-volume change as the sum of their log diagonals ([[thm-finite-time-tangent-volume-growth-from-qr]]).

## Verification

1.1 The product is $P_2=A_2A_1=\operatorname{diag}(2/3,4)$, so $\log|\det P_2|=\log(8/3)$. The positive-diagonal QR factors have diagonal entries $(2,1)$ and $(1/3,4)$. [given, algebra]

2.1 Their accumulated log sum is $\log2+\log1+\log(1/3)+\log4=\log(8/3)$, which matches [F1]. The calculation is finite-time and asserts no limit. [F1, step 1.1, algebra] ∎ 