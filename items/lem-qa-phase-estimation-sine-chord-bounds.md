---
id: lem-qa-phase-estimation-sine-chord-bounds
kind: lemma
title: Sine chord and linear bounds
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-and-cosine-derivatives
  - cor-mean-value-theorem
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-algebra-of-derivatives
  - def-derivative
justified_by: []
axiom_use: "None; the proof uses calculus on compact real intervals and no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Statement

For $0\le u\le1/2$ and $v\ge0$,
$$\sin(\pi u)\ge2u,\qquad \sin(v)\le v.$$

## Facts & Assumptions

**Given:** $u\in[0,1/2]$, $v\ge0$, and $\pi$ as defined by [[def-pi-via-first-positive-cosine-zero]].

[F1] $\pi>0$, $\sin0=0$, and $\sin(\pi/2)=1$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F2] $\sin'=\cos$, and $\cos$ is nonincreasing on $[0,\pi/2]$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F3] Sums and scalar multiples of differentiable real functions have the corresponding sum and scalar-multiple derivatives ([[thm-algebra-of-derivatives]]).

[F4] The identity function has derivative $1$, as its difference quotient is $1$ ([[def-derivative]]).

[F5] The mean value theorem applies to a function continuous on a closed interval and differentiable on its interior ([[cor-mean-value-theorem]]).

[F6] Sine is $1$-Lipschitz on $\mathbb R$: $|\sin a-\sin b|\le|a-b|$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

## Proof

1.1 Define $g(t)=\sin t-2t/\pi$ on $[0,\pi/2]$. By [F1], [F3], and [F4], $g(0)=g(\pi/2)=0$ and $g'(t)=\cos t-2/\pi$ on the interior. [given, F1, F3, F4, construct]

2.1 By [F2], $g'$ is nonincreasing: if $s<t$, then $\cos s\ge\cos t$, so $g'(s)\ge g'(t)$. [F2, step 1.1]

3.1 Fix $t\in(0,\pi/2)$. Apply [F5] on $[0,t]$ and $[t,\pi/2]$ to obtain $a\in(0,t)$ and $b\in(t,\pi/2)$ with $g(t)=t g'(a)$ and $-g(t)=(\pi/2-t)g'(b)$. Since $a<b$, step 2.1 gives $g'(a)\ge g'(b)$. Dividing by the positive numbers $t$ and $\pi/2-t$, then multiplying by their product, gives $g(t)\pi/2\ge0$; as $\pi>0$, $g(t)\ge0$. [F1, F5, step 2.1, choose, algebra]

4.1 If $0<u<1/2$, take $t=\pi u\in(0,\pi/2)$ in step 3.1 to get $\sin(\pi u)\ge2u$. At $u=0$ and $u=1/2$, the same inequality is equality by [F1]. [F1, step 3.1, algebra]

5.1 For $v\ge0$, [F6] and $\sin0=0$ give $\sin v=\sin v-\sin0\le|\sin v-\sin0|\le v$. Thus both stated inequalities hold. [F1, F6, step 4.1, algebra] ∎
