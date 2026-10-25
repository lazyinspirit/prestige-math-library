---
id: thm-qa-12-known-amplitude-success-bound
kind: theorem
title: "Known-amplitude success bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-known-amplitude-amplification
  - thm-qa-12-amplification-rotation-correctness
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-of-square-roots
  - cor-sine-and-cosine-are-one-lipschitz
justified_by: []
proof_strategy: direct
axiom_use: "None; nearest-integer rounding is applied to a finite real interval."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $0<a<1$, let $\theta\in(0,\pi/2)$ satisfy $\sin^2\theta=a$, and let $k$ be the maximizer selected by [[alg-qa-12-known-amplitude-amplification]]. Its success probability is at least $\max\{a,1-a\}$. The $a=0$ branch returns fail, and the $a=1$ branch succeeds with probability $1$.

## Facts & Assumptions

**Given:** The known-amplitude procedure and its finite range $0\le k\le\lceil1/\sqrt a\rceil$.

[F1] [[alg-qa-12-known-amplitude-amplification]]: $k$ maximizes $\sin^2((2k+1)\theta)$ over the stated finite range; $k=0$ is included.

[F2] [[thm-qa-12-amplification-rotation-correctness]]: $k$ standard iterations have good probability $\sin^2((2k+1)\theta)$.

[F3] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: the angle-addition and $\sin^2+\cos^2=1$ identities hold.

[F4] [[cor-sine-and-cosine-are-one-lipschitz]]: $|\sin x-\sin y|\le |x-y|$, in particular $\sin\theta\le\theta$ for $\theta\ge0$.

[F5] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[0,\pi/2]$.

[F6] [[thm-cofunction-supplementary-and-reflection-identities]], [[thm-double-angle-and-power-reduction-identities]], [[thm-quarter-turn-values-and-shift-formulas]], and [[thm-of-square-roots]]: $\sin(\pi/4)=\cos(\pi/4)>0$, $\sin(\pi/2)=1$, and positive square roots are unique.

[F7] [[def-pi-via-first-positive-cosine-zero]] and [[thm-cosine-has-a-smallest-positive-zero]]: $\pi=2\gamma$ with $0<\gamma<2$, hence $0<\pi<4$.

## Proof

1.1 If $1/2\le a<1$, the candidate $k=0$ belongs to the finite search range and has success probability $\sin^2\theta=a=\max\{a,1-a\}$ by [F2]. The maximizing $k$ therefore has at least this probability. [given, F1, F2, algebra]

1.2 Suppose $0<a<1/2$. Let $s=\sin(\pi/4)=\cos(\pi/4)>0$, where positivity follows from strict increase in [F5]. By [F6], $1=\sin(\pi/2)=2s^2$, so $s=1/\sqrt2$. Since $\sin\theta=\sqrt a<1/\sqrt2=s$, [F5] gives $0<\theta<\pi/4$. Put $r=\pi/(4\theta)-1/2>0$, and choose a nearest nonnegative integer $k_0$ to $r$, breaking ties toward the smaller integer. Then $|k_0-r|\le1/2$, so $|(2k_0+1)\theta-\pi/2|\le\theta$. The addition and Pythagorean identities [F3] give $\sin^2((2k_0+1)\theta)\ge\cos^2\theta=1-a$. [given, F3, F5, F6, choose, algebra]

2.1 Since $\sin\theta=\sqrt a$, [F4] gives $\theta\ge\sqrt a$. Hence $k_0\le r+1/2=\pi/(4\theta)\le\pi/(4\sqrt a)<1/\sqrt a$ by [F7], so $k_0\le\lceil1/\sqrt a\rceil$. Thus $k_0$ lies in the algorithm's finite range, and [F1]–[F2] show that its selected maximizer has probability at least $1-a=\max\{a,1-a\}$. The explicit zero and unit-weight branches give the stated endpoint behavior. [given, F1, F2, F4, F7, step 1.2, algebra] ∎
