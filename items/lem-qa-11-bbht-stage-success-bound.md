---
id: lem-qa-11-bbht-stage-success-bound
kind: lemma
title: Constant BBHT stage success beyond the threshold scale
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
proof_strategy: direct
deps:
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-principal-inverse-sine-and-cosine
  - lem-of-square-monotone
  - thm-double-angle-and-power-reduction-identities
  - thm-of-square-roots
  - thm-qa-11-exact-integer-iteration-formula
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

Let $0<a=t/N<3/4$, $\theta=\arcsin\sqrt a$, and let $J$ be uniform on $\{1,\ldots,M\}$. If the positive integer $M$ satisfies $M\ge4/\sqrt a$, then
$$\mathbb E[\sin^2((2J+1)\theta)]\ge\frac38.$$

## Facts & Assumptions

**Given:** $0<a<3/4$, $\sin\theta=\sqrt a$, $\theta\in(0,\pi/2)$, and an integer $M\ge4/\sqrt a$.

[F1] [[thm-qa-11-exact-integer-iteration-formula]]: after $j$ integer iterates, the marked probability is $\sin^2((2j+1)\theta)$.

[F3] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine obey their addition formulas.

[F4] [[thm-double-angle-and-power-reduction-identities]]: $\sin(2\theta)=2\sin\theta\cos\theta$ and $\sin^2x=(1-\cos2x)/2$.

[F5] [[def-principal-inverse-sine-and-cosine]] and [[thm-sine-cosine-signs-monotonicity-and-ranges]]: the principal angle is in $[-\pi/2,\pi/2]$, sine is strictly increasing there, and cosine is positive on $(0,\pi/2)$.

[F6] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$.

[F7] [[thm-of-square-roots]]: nonnegative reals have unique nonnegative square roots.

[F8] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$.

[F9] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$.

[F10] [[lem-of-square-monotone]]: square roots preserve order on nonnegative reals.

## Proof

1.1 Since $0<a<3/4$, [F7] and [F10] give $0<\sqrt a<1$. From [F4], $\sin\theta=\sqrt a$ and $\theta\in[-\pi/2,\pi/2]$. By [F8], $\sin0=0$, so strict increase [F5] gives $\theta>0$. Since $\sin(\pi/2)=1$ by [F9], strict increase and $\sin\theta<1$ give $\theta<\pi/2$; then $\cos\theta>0$ by [F5]. The Pythagorean identity [F6] gives $\cos\theta=\sqrt{1-a}$. [given, F4, F5, F6, F7, F8, F9, F10, algebra]

1.2 By [F1] and [F4], the average equals $\frac12-\frac{1}{2M}\sum_{j=1}^{M}\cos((4j+2)\theta)$. [given, F1, F4, algebra]

2.1 By [F3], for every $j$, $2\sin(2\theta)\cos((4j+2)\theta)=\sin((4j+4)\theta)-\sin(4j\theta)$. Summing from $j=1$ to $M$ and using $\sin u-\sin v=2\sin((u-v)/2)\cos((u+v)/2)$ gives $\sum_{j=1}^{M}\cos((4j+2)\theta)=\sin(2M\theta)\cos((2M+4)\theta)/\sin(2\theta)$. Thus the average in step 1.2 is $\frac12-\frac{\sin(2M\theta)\cos((2M+4)\theta)}{2M\sin(2\theta)}$. [step 1.2, F3, algebra]

3.1 Since $a<3/4$, $1-a>1/4$, so [F10] gives $\sqrt{1-a}>1/2$. Steps 1.1 and [F4]–[F7] then give $\sin(2\theta)=2\sqrt a\sqrt{1-a}>\sqrt a$. Therefore $M\sin(2\theta)>4$ and the absolute value of the correction in step 2.1 is less than $1/8$. The average is greater than $3/8$, hence at least $3/8$. [given, step 1.1, step 2.1, F4, F5, F6, F7, F10, algebra] ∎
