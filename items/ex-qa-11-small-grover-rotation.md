---
id: ex-qa-11-small-grover-rotation
kind: example
title: Exact Grover rotation for four addresses and one marked item
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
proof_strategy: direct
deps:
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
  role: example
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
 
## Example
 
Take $N=4$ and $t=1$. Compute the exact angle and integer-iterate success probabilities, including the first exact peak and subsequent oscillation.
 
## Facts & Assumptions
 
**Given:** $N=4=2^2$, $t=1$, and the standard Grover iterate.
 
[F1] [[thm-qa-11-exact-integer-iteration-formula]]: $p_k=\sin^2((2k+1)\theta)$ for integer $k\ge0$, with $\sin\theta=\sqrt{t/N}$.
 
[F2] [[def-principal-inverse-sine-and-cosine]]: the principal inverse sine is the inverse of sine on $[-\pi/2,\pi/2]$.
 
[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is positive and strictly increasing on $(0,\pi/2)$.
 
[F4] [[def-pi-via-first-positive-cosine-zero]] and [[thm-cosine-has-a-smallest-positive-zero]]: $\pi>0$.
 
[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.
 
[F6] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine obey their addition formulas.
 
[F7] [[thm-double-angle-and-power-reduction-identities]]: $\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x$.
 
[F8] [[thm-sine-and-cosine-derivatives]]: $\sin0=0$.

## Verification


1.1 Put $x=\pi/6$, $s=\sin x$, and $c=\cos x$. Since $0<\pi/6<\pi/2$, [F3] and [F8] give $s>0$. By [F7], $\cos(2x)=c^2-s^2=1-2s^2$, so $c^2=1-s^2$; also $\sin(2x)=2sc$. Using [F6] and [F5], $$1=\sin(\pi/2)=\sin(3x)=\sin(2x+x)=\sin(2x)\cos x+\cos(2x)\sin x=2sc^2+(c^2-s^2)s=3s-4s^3.$$ Thus $(2s-1)^2(s+1)=0$. Since $s>0$, $s+1>0$, so $s=1/2$; then [F2] gives $\arcsin(1/2)=\pi/6$. [given, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 Here $\sqrt{t/N}=1/2$, so $\theta=\pi/6$. Formula [F1] gives $p_0=\sin^2(\pi/6)=1/4$ and $p_1=\sin^2(\pi/2)=1$. Also, [F5] and [F7] give $\sin(5\pi/6)=\sin(\pi/3+\pi/2)=\cos(\pi/3)=1-2\sin^2(\pi/6)=1/2$, so $p_2=1/4$. Thus the first integer peak is exact. [step 1.1, F1, F5, F7, algebra]

3.1 For every integer $k\ge0$, $(2(k+3)+1)\pi/6=(2k+1)\pi/6+\pi$. The shift by $\pi$ changes the sine sign and therefore preserves its square, so $p_{k+3}=p_k$. The integer success pattern repeats $1/4,1,1/4$. [step 1.1, step 2.1, F1, F5, algebra] ∎

