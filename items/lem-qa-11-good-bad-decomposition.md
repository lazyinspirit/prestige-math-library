---
id: lem-qa-11-good-bad-decomposition
kind: lemma
title: Orthogonal marked and unmarked components of the uniform state
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
proof_strategy: direct
deps:
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-inner-product-space
  - def-principal-inverse-sine-and-cosine
  - def-qa-11-marked-search-problem
  - def-qc-dirac-notation-conversion
  - def-qc-pure-state-and-ray
  - lem-of-square-monotone
  - thm-of-square-roots
  - thm-qc-computational-basis-orthonormal
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

Let $M\subseteq D_n$ have size $t$ with $0<t<N$. Define
$$|G\rangle=t^{-1/2}\sum_{x\in M}|x\rangle,\qquad |B\rangle=(N-t)^{-1/2}\sum_{x\notin M}|x\rangle.$$
Then $|G\rangle$ and $|B\rangle$ are orthonormal. For $\theta=\arcsin\sqrt{t/N}\in(0,\pi/2)$, the uniform state is
$$|s\rangle=\sin\theta\,|G\rangle+\cos\theta\,|B\rangle,$$
with $\sin^2\theta=t/N$.

## Facts & Assumptions

**Given:** $n\ge0$, $N=2^n$, a marked set $M\subseteq D_n$, and $0<t=|M|<N$. Here the uniform state denotes the equal-positive-amplitude vector $|s\rangle=N^{-1/2}\sum_{x\in D_n}|x\rangle$.

[F1] [[def-qa-11-marked-search-problem]]: $D_n$ is a finite address set with marked subset $M$ and marked count $t$.

[F2] [[thm-qc-computational-basis-orthonormal]]: distinct address basis vectors are orthogonal and every address basis vector has norm $1$.

[F3] [[def-inner-product-space]]: the inner product is linear in the first argument, conjugate-linear in the second, and positive definite.

[F4] [[def-qc-dirac-notation-conversion]]: kets denote vectors and the Dirac pairing is the reversed-argument root inner product.

[F5] [[def-principal-inverse-sine-and-cosine]]: $\arcsin$ takes values in $[-\pi/2,\pi/2]$ and $\sin(\arcsin y)=y$ for $y\in[-1,1]$.

[F6] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: cosine is strictly decreasing on $[0,\pi]$ and sine is strictly increasing on $[-\pi/2,\pi/2]$.

[F7] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2 u+\cos^2u=1$ for every real $u$.

[F8] [[thm-of-square-roots]]: each nonnegative real $a$ has a unique nonnegative square root $\sqrt a$.

[F9] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$.

[F10] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.

[F11] [[lem-of-square-monotone]]: on nonnegative reals, strict and non-strict order are equivalent to the corresponding order of squares; applied to nonnegative roots, this compares their order.

## Proof

1.1 Orthonormality of the address basis [F2] gives $\langle G,G\rangle=t^{-1}\sum_{x,y\in M}\langle x,y\rangle=1$ and $\langle B,B\rangle=(N-t)^{-1}\sum_{x,y\notin M}\langle x,y\rangle=1$. The sets $M$ and $D_n\setminus M$ are disjoint, so every cross term in $\langle G,B\rangle$ is zero. Thus the two vectors are orthonormal. [given, F1, F2, F3, F4, algebra]

2.1 Put $a=t/N\in(0,1)$ and $\theta=\arcsin\sqrt a$. By [F5], $\sin\theta=\sqrt a$; since $\sqrt a>0$ and $\sin0=0$ by [F9], strict increase [F6] implies $\theta>0$. Also $\sqrt a<1$ by [F11] because $a<1$, while $1=\sin(\pi/2)$ by [F10]; strict increase gives $\theta<\pi/2$. Since cosine is strictly decreasing on $[0,\pi]$ by [F6], we have $\cos\theta>\cos(\pi/2)=0$ by [F10]. The Pythagorean identity [F7] and square-root uniqueness [F8] give $\cos\theta=\sqrt{1-a}$. Splitting the uniform sum into $M$ and its complement now gives $|s\rangle=\sqrt{t/N}|G\rangle+\sqrt{(N-t)/N}|B\rangle =\sin\theta|G\rangle+\cos\theta|B\rangle$ and $\sin^2\theta=t/N$. [given, F1, F5, F6, F7, F8, F9, F10, F11, step 1.1, algebra] ∎
