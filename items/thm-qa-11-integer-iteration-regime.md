---
id: thm-qa-11-integer-iteration-regime
kind: theorem
title: Integer rounding gives a high-success Grover iterate
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
proof_strategy: direct
deps:
  - cor-sine-and-cosine-are-one-lipschitz
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - def-principal-inverse-sine-and-cosine
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-integer-part
  - lem-of-square-monotone
  - thm-cosine-has-a-smallest-positive-zero
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
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

Put $a=t/N$ and $\theta=\arcsin\sqrt a$. If $0<a\le1/2$, some integer $k$ with $0\le k\le K=\lceil1/\sqrt a\rceil$ has
$$p_k=\sin^2((2k+1)\theta)\ge1-a.$$
If $1/2<a\le1$, $k=0$ lies in this range and $p_0=a>1/2$. The real-valued optimizer $k_*=\pi/(4\theta)-1/2$ is not in general an integer.

## Facts & Assumptions

**Given:** $N=2^n$, exact $t$ with $1\le t\le N$, $a=t/N$, and $\theta=\arcsin\sqrt a$.

[F1] [[thm-qa-11-exact-integer-iteration-formula]]: for $0<t<N$ and each integer $k\ge0$, $p_k=\sin^2((2k+1)\theta)$. For $t=N$, every integer iteration count has marked probability $1$.

[F2] [[def-principal-inverse-sine-and-cosine]]: $\sin(\arcsin x)=x$ and $\arcsin x\in[-\pi/2,\pi/2]$.

[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[-\pi/2,\pi/2]$, and cosine is strictly decreasing on $[0,\pi]$.

[F4] [[cor-sine-and-cosine-are-one-lipschitz]]: $|\sin u-\sin v|\le|u-v|$.

[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and the sine/cosine shift identities by $\pi/2$ hold.

[F7] [[thm-double-angle-and-power-reduction-identities]]: $\sin(2x)=2\sin x\cos x$.

[F8] [[cor-trigonometric-parity-and-pythagorean-identity]]: sine is odd and $\sin^2x+\cos^2x=1$.

[F9] [[thm-of-square-roots]]: a nonnegative real has a unique nonnegative square root.

[F10] [[lem-integer-part]]: every real $x$ has an integer $m=\lfloor x\rfloor$ with $m\le x<m+1$.

[F11] [[def-pi-via-first-positive-cosine-zero]] and [[thm-cosine-has-a-smallest-positive-zero]]: $\pi=2\gamma$ with $0<\gamma<2$, so $0<\pi<4$.

[F12] [[lem-ceiling-and-least-positive-integer-threshold]]: $K=\lceil1/\sqrt a\rceil$ is an integer at least $1/\sqrt a$.

[F13] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$.

[F14] [[lem-of-square-monotone]]: nonnegative square roots preserve order.

## Proof

1.1 Suppose $0<a\le1/2$. Put $x=\pi/4$, $s=\sin x$, and $c=\cos x$. By [F11], $0<\pi<4$, so $0<x<\pi/2$; [F3] gives $s>0$, and its cosine monotonicity together with [F5] gives $c>\cos(\pi/2)=0$. The double-angle identity [F7] and quarter-turn value [F5] give $2sc=\sin(2x)=\sin(\pi/2)=1$, while [F8] gives $s^2+c^2=1$. Thus $(s-c)^2=s^2+c^2-2sc=0$, so $s=c$; hence $2s^2=1$ and $s=1/\sqrt2$ by [F9]. Since $a\le1/2$, [F14] gives $\sqrt a\le1/\sqrt2=s$, and strict increase in [F3] implies $\theta\le\pi/4$. Also $\sin\theta=\sqrt a>0=\sin0$, and $\theta\in[-\pi/2,\pi/2]$ by [F2], so strict increase [F3] gives $\theta>0$. The Lipschitz estimate [F4] then yields $\sqrt a=|\sin\theta-\sin0|\le|\theta|=\theta$. [given, F2, F3, F4, F5, F7, F8, F9, F11, F13, F14, algebra]

2.1 Put $k_*=\pi/(4\theta)-1/2$. Since $\theta\le\pi/4$, $k_*\ge1/2$. Let $m=\lfloor k_*\rfloor$ and choose $k=m$ if $k_*-m\le1/2$, otherwise choose $k=m+1$. By [F10], $k$ is a nonnegative integer and $|k-k_*|\le1/2$. For $a=1/2$, the value of $\sin(\pi/4)$ from step 1.1 and injectivity in [F3] give $\theta=\pi/4$, hence $k_*=1/2$, exhibiting a noninteger optimizer. [step 1.1, F2, F3, F10, construct, algebra]

3.1 The choice in step 2.1 gives $k\le k_*+1/2=\pi/(4\theta)\le\pi/(4\sqrt a)<1/\sqrt a\le K$, using [F11]–[F12]. [step 1.1, step 2.1, F11, F12, algebra]

3.2 By the definition of $k_*$, $(2k_*+1)\theta=\pi/2$. Therefore $1-p_k=\cos^2((2k+1)\theta)=\sin^2(2(k-k_*)\theta)$. The angle magnitude is at most $\theta\le\pi/4$ by step 2.1. Oddness and monotonicity of sine imply $|\sin(2(k-k_*)\theta)|\le\sin\theta$; hence $1-p_k\le\sin^2\theta=a$ and $p_k\ge1-a$. [F1, step 1.1, step 2.1, F2, F3, F5, F8, F11, algebra]

4.1 If $1/2<a<1$, then $K\ge1$ and $k=0$ is in the candidate range; [F1] and [F2] give $p_0=\sin^2\theta=a>1/2$. If $a=1$, then $K=1$ by [F12] and [F9], and the endpoint clause of [F1] gives $p_0=1=a>1/2$. [given, F1, F2, F9, F12, algebra] ∎
