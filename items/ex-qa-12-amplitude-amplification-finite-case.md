---
id: ex-qa-12-amplitude-amplification-finite-case
kind: example
title: "A prepared state with success amplitude one half"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - thm-qa-12-amplification-rotation-correctness
  - thm-quarter-turn-values-and-shift-formulas
  - cor-pi-is-the-first-positive-sine-zero
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
proof_strategy: direct
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

## Example

Take an orthonormal pair $(|B\rangle,|G\rangle)$ and the unit prepared state
$
|\psi\rangle=\frac{\sqrt3}{2}|B\rangle+\frac12|G\rangle
$
with $\Pi_{\mathrm{good}}=|G\rangle\langle G|$. Its success amplitude is $1/2$, so $a=1/4$ and $\theta=\pi/6$. Compute the good probabilities after $k=0,1,2$ standard iterations.

## Facts & Assumptions

**Given:** The state, projection, and iteration counts in the Example.

[F1] [[thm-qa-12-amplification-rotation-correctness]]: after $k$ iterations, $p_k=\sin^2((2k+1)\theta)$.

[F2] [[thm-cofunction-supplementary-and-reflection-identities]] gives $\sin(\pi/6)=\cos(\pi/3)$ and $\cos(2\pi/3)=-\cos(\pi/3)$; [[thm-double-angle-and-power-reduction-identities]] gives $\cos(2x)=2\cos^2x-1$; [[cor-pi-is-the-first-positive-sine-zero]] gives $\sin x>0$ for $0<x<\pi$.

[F3] [[thm-quarter-turn-values-and-shift-formulas]] gives $\sin(\pi/2)=1$, and [[thm-cofunction-supplementary-and-reflection-identities]] gives $\sin(5\pi/6)=\sin(\pi/6)$.

## Verification

1.1 Put $c=\cos(\pi/3)=\sin(\pi/6)$ by [F2]. Since $0<\pi/6<\pi$, [F2] gives $c>0$. Also [F2] gives $\cos(2\pi/3)=-c$, while [F2] gives $\cos(2\pi/3)=2c^2-1$. Hence $2c^2+c-1=(2c-1)(c+1)=0$; positivity excludes $c=-1$, so $\sin(\pi/6)=c=1/2$. The vector is normalized because $3/4+1/4=1$, and $\|\Pi_{\mathrm{good}}\psi\|^2=1/4=\sin^2(\pi/6)$. [given, F2, algebra]

2.1 By [F1], [F3], and step 1.1, $p_0=\sin^2(\pi/6)=1/4$, $p_1=\sin^2(\pi/2)=1$, and $p_2=\sin^2(5\pi/6)=1/4$. Each value lies in $[0,1]$; the second iteration overshoots the exact peak attained after one iteration. [given, F1, F3, step 1.1, algebra] ∎
