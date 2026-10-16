---
id: cex-qa-11-rounding-can-overshoot
kind: counterexample
title: A real-valued optimum is not a fractional Grover iteration
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
proof_strategy: direct
deps:
  - alg-qa-11-known-count-grover-search
  - def-pi-via-first-positive-cosine-zero
  - def-principal-inverse-sine-and-cosine
  - thm-cosine-has-a-smallest-positive-zero
  - thm-double-angle-and-power-reduction-identities
  - thm-of-square-roots
  - thm-qa-11-exact-integer-iteration-formula
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---
 
## Statement refuted
 
The real-valued optimizer $k_*=\pi/(4\theta)-1/2$ is always a legal number of standard Grover-iterate queries.
 
## Witness
Take $N=2$ and $t=1$. Then $\theta=\arcsin(1/\sqrt2)=\pi/4$, so $k_*=1/2$, which is not an integer. Standard Grover circuits apply an integer number of iterates. The exact continuous formula at $k_*$ gives $1$, while the legal integer choices $k=0$ and $k=1$ each give success probability $1/2$.
 
## Facts & Assumptions
 
**Given:** $N=2=2^1$, one marked item, and the standard Grover iterate.
 
[F1] [[thm-qa-11-exact-integer-iteration-formula]]: for integer $k\ge0$, $p_k=\sin^2((2k+1)\theta)$.
 
[F2] [[def-principal-inverse-sine-and-cosine]]: $\arcsin$ is the inverse of sine on $[-\pi/2,\pi/2]$.
 
[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine and cosine have their usual signs on $(0,\pi/2)$.
 
[F4] [[def-pi-via-first-positive-cosine-zero]] and [[thm-cosine-has-a-smallest-positive-zero]]: $\pi>0$.
 
[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.
 
[F6] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine obey their addition formulas.
 
[F7] [[thm-double-angle-and-power-reduction-identities]]: $\sin(2x)=2\sin x\cos x$ and $\cos(2x)=\cos^2x-\sin^2x$.
 
[F9] [[thm-of-square-roots]]: nonnegative square roots are unique.
 
## Refutation

1.1 Put $x=\pi/4$, $s=\sin x$, and $c=\cos x$. Since $0<\pi/4<\pi/2$ by [F4], [F3] gives $s,c>0$. By [F7] and [F5], $0=\cos(\pi/2)=\cos(2x)=c^2-s^2$, so $(c-s)(c+s)=0$. Since $c+s>0$, we have $c=s$. Then [F7] and [F5] give $1=\sin(\pi/2)=\sin(2x)=2sc=2s^2$, so [F9] gives $s=1/\sqrt2$. Thus $\arcsin(1/\sqrt2)=\pi/4$ by [F2], and $k_*=\pi/(4(\pi/4))-1/2=1/2$. [given, F2, F3, F4, F5, F7, F9, algebra]

2.1 The legal standard query counts are integers, so $k_*=1/2$ is not executable. Applying the integer formula [F1] gives $p_0=\sin^2(\pi/4)=1/2$ and $p_1=\sin^2(3\pi/4)=1/2$, whereas substituting the noninteger $k_*$ into the trigonometric expression would give $\sin^2(\pi/2)=1$. The continuous expression therefore does not describe an allowed standard Grover circuit at this input. [given, F1, F5, F6, step 1.1, algebra] ∎
