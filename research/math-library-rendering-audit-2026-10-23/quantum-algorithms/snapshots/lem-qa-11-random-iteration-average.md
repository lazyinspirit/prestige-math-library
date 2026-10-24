---
id: lem-qa-11-random-iteration-average
kind: lemma
title: Average Grover success for a uniform integer iteration count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
proof_strategy: direct
deps:
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-principal-inverse-sine-and-cosine
  - def-qa-11-marked-search-problem
  - lem-ceiling-and-least-positive-integer-threshold
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

For $0<t\le N/2$, put $a=t/N$, $\theta=\arcsin\sqrt a$, and $K=\lceil1/\sqrt a\rceil$. If $J$ is uniform on $\{0,\ldots,K-1\}$, then
$$\mathbb E[\sin^2((2J+1)\theta)]=\frac12-\frac{\sin(4K\theta)}{4K\sin(2\theta)}\ge\frac14.$$

## Facts & Assumptions

**Given:** $0<a\le1/2$, $\theta=\arcsin\sqrt a$, and $K=\lceil1/\sqrt a\rceil$.

[F1] [[thm-qa-11-exact-integer-iteration-formula]]: after $j$ iterates the marked probability is $\sin^2((2j+1)\theta)$.

[F2] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine obey their addition formulas.

[F3] [[thm-double-angle-and-power-reduction-identities]]: $\sin(2\theta)=2\sin\theta\cos\theta$ and $\sin^2x=(1-\cos2x)/2$.

[F4] [[def-principal-inverse-sine-and-cosine]]: $\theta\in[-\pi/2,\pi/2]$ and $\sin\theta=\sqrt a$.

[F5] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$.

[F6] [[lem-ceiling-and-least-positive-integer-threshold]]: $K\ge1/\sqrt a$.

[F7] [[thm-of-square-roots]]: nonnegative reals have unique nonnegative square roots.

[F8] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$.

[F9] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$.

[F10] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[-\pi/2,\pi/2]$ and cosine is positive on $(0,\pi/2)$.

[F11] [[lem-of-square-monotone]]: square roots preserve order on nonnegative reals.

## Proof

1.1 Since $0<a\le1/2$, [F7] gives a nonnegative root and [F11] gives $0<\sqrt a<1$. By [F4], $\sin\theta=\sqrt a$. Since $\sin0=0$ by [F8] and sine is strictly increasing by [F10], $\theta>0$. Also $\sin(\pi/2)=1$ by [F9], so strict increase and $\sin\theta<1$ give $\theta<\pi/2$; hence $\cos\theta>0$ by [F10]. The Pythagorean identity [F5] gives $\cos\theta=\sqrt{1-a}$. [given, F4, F5, F7, F8, F9, F10, F11, algebra]

1.2 Using [F1] and the identity $\sin^2x=(1-\cos2x)/2$ from [F3], the average is $\frac12-\frac{1}{2K}\sum_{j=0}^{K-1}\cos((4j+2)\theta)$. [given, F1, F3, algebra]

2.1 For each $j$, [F2] gives $2\sin(2\theta)\cos((4j+2)\theta)=\sin((4j+4)\theta)-\sin(4j\theta)$. Summing from $j=0$ to $K-1$ telescopes to $\sum_{j=0}^{K-1}\cos((4j+2)\theta)=\sin(4K\theta)/(2\sin(2\theta))$. Substitution in step 1.2 proves the displayed identity. [step 1.2, F2, algebra]

3.1 Since $1-a\ge1/2$, [F11] gives $\sqrt{1-a}\ge1/\sqrt2$. By [F3] and step 1.1, $\sin(2\theta)=2\sqrt a\sqrt{1-a}\ge\sqrt{2a}$. Hence $K\sin(2\theta)\ge\sqrt2$ by [F6]. The absolute value of the correction term in step 2.1 is at most $1/(4\sqrt2)<1/4$, so the average is at least $1/4$. [step 1.1, step 2.1, F3, F6, F7, F11, algebra] ∎
