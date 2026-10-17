---
id: ex-neutral-delay-derivative-amplification
kind: example
title: "Neutral derivative feedback amplifies outside the stable branch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-scalar-neutral-delay-equation-and-segment-shift
  - thm-neutral-delay-method-of-steps-well-posedness
  - lem-neutral-delay-shift-neumann-inverse
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Example

For any $a\in\mathbb R$, let $q(s)=1+(a-1)(s+\tau)/\tau$ and
$\phi(s)=(s+\tau)+(a-1)(s+\tau)^2/(2\tau)$ on $[-\tau,0]$. Consider
$$y'(t)-a y'(t-\tau)=0,\qquad y|_{[-\tau,0]}=\phi.$$
This is the scalar neutral problem of
[[def-scalar-neutral-delay-equation-and-segment-shift]]. Its history is
compatible at zero. On each later delay segment its derivative is multiplied
by $a$:
$$y'(k\tau+s)=a^{k+1}q(s-\tau),\qquad 0\le s\le\tau.$$
Thus for $|a|>1$, derivative norms grow geometrically from segment to segment.
At the boundary $a=1$, the finite-horizon shift inverse exists but its norm
grows with the number $K$ of segments. The uniform resolvent bound in
[[lem-neutral-delay-shift-neumann-inverse]] is therefore restricted to
$|a|<1$.

## Facts & Assumptions

**Given:** A positive delay $\tau$, the compatible history above, real $a$,
and a finite horizon $T=K\tau$ with integer $K\ge1$.

[F1] The scalar neutral equation is
$y'(t)-a y'(t-\tau)=f(t,y(t),y(t-\tau))$, and compatibility is
$\phi'(0)=a\phi'(-\tau)+f(0,\phi(0),\phi(-\tau))$
([[def-scalar-neutral-delay-equation-and-segment-shift]]).

[F2] Compatible $C^1$ history and continuous state-Lipschitz $f$ give a unique
solution by method of steps ([[thm-neutral-delay-method-of-steps-well-posedness]]).

[F3] When $|a|<1$, the segment shift inverse has norm at most
$(1-|a|)^{-1}$ ([[lem-neutral-delay-shift-neumann-inverse]]).

## Proof

1.1 Differentiating the displayed polynomial gives $\phi'=q$,
$q(-\tau)=1$, and $q(0)=a$. With $f=0$, the compatibility equation [F1]
reads $a=a\cdot1+0$, so it holds. The zero right-hand side is continuous and
Lipschitz in the two state variables. Therefore [F2] supplies the unique
solution on every finite horizon $K\tau$. [F1, F2, given, algebra]

1.2 On the first segment, the equation gives
$y'(s)=a\phi'(s-\tau)=a q(s-\tau)$. If on segment $k-1$ the derivative is
$a^kq(s-\tau)$, then on segment $k$ the same equation gives
$y'(k\tau+s)=a y'((k-1)\tau+s)=a^{k+1}q(s-\tau)$. Compatibility makes the
left and right endpoint values agree at every breakpoint, so induction proves
the formula for $0\le k<K$. Since $q(-\tau)=1$, each segment derivative has
supremum at least $|a|^{k+1}$; for $|a|>1$ this is geometric amplification.
[F1, step 1.1, induction, algebra]

2.1 For $a=1$, on the $K$-segment space from [F1], let $r_k(s)=1$ and
$u_k(s)=k+1$ for $0\le k<K$. The defined shift has $(S_Ku)_0=0$ and
$(S_Ku)_k=u_{k-1}$ for $k\ge1$, so $(I-S_K)u=r$. Also $S_K^K=0$, hence
$(I-S_K)^{-1}=I+S_K+\cdots+S_K^{K-1}$ by multiplying the finite sum. Since
$\|r\|_{\mathcal X_K}=1$ and $\|u\|_{\mathcal X_K}=K$, the inverse norm is at
least $K$. Thus no horizon-independent bound follows at $a=1$, consistent
with the strict hypothesis $|a|<1$ in [F3]. [F1, F3, given, algebra] ∎
