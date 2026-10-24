---
id: ex-tent-map-finite-time-sensitivity-growth
kind: example
title: A strict tent-map itinerary has exponential finite-time sensitivity growth
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-discrete-adjoint-gradient-recursion]
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
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Example

Let $T(x)=2x$ for $x<1/2$ and $T(x)=2-2x$ for $x>1/2$. Fix a finite integer $N\ge1$, take $x_0(\theta)=\theta$ near $\theta_*=1/3$, and set the terminal objective to $J(\theta)=x_N(\theta)$.

## Facts & Assumptions

**Given:** The two affine branches, a finite horizon $N$, and the finite state-step adjoint rule.

[F1] On a neighborhood with a fixed smooth branch at every step, the reverse recursion gives the exact derivative of the finite graph ([[thm-discrete-adjoint-gradient-recursion]]).

## Verification

1.1 At $\theta_*=1/3$, the orbit is $x_0=1/3$ and $x_n=2/3$ for every $n\ge1$. If $|\theta-1/3|<1/(6\cdot2^N)$, then the first state remains below $1/2$ and each later state remains within $1/6$ of $2/3$ through time $N$; hence this whole open neighborhood has the same strict branch itinerary. [given, construct, algebra]

2.1 On that neighborhood the first derivative is $T'(x_0)=2$, and each of the next $N-1$ derivatives is $-2$. The chain rule gives $J'(1/3)=2(-2)^{N-1}$, whose magnitude is $2^N$. By [F1], reverse accumulation returns this same finite-horizon derivative. No infinite-time exponent or orbit-shadowing claim is involved. [F1, step 1.1, algebra] ∎ 