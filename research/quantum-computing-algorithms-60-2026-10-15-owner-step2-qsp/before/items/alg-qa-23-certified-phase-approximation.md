---
id: alg-qa-23-certified-phase-approximation
kind: algorithm
title: Buffered certified rational phase approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-23-qsp-signal-sequence
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - thm-sine-and-cosine-subtraction-formulas
  - def-sine-and-cosine-by-power-series
  - lem-sine-and-cosine-series-converge-everywhere
  - thm-principal-inverse-tangent-calculus
  - def-principal-inverse-tangent
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-quarter-turn-values-and-shift-formulas
  - lem-integral-elementary-bounds
  - thm-eulers-formula
  - thm-complex-exponential-addition-and-real-extension
  - lem-complex-conjugation-and-modulus-laws
justified_by: [thm-qa-23-certified-phase-approximation-correctness]
axiom_use: "None; the instructions use finite rational loops and charged exact algebraic comparisons."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gilyén et al., Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Corollary 10, PDF p.14; the buffered arithmetic proof is supplied locally."
---

## Definition

`PHASEAPPROX(ω,η)` takes an exact algebraic unit scalar $ω=u+iv$ and positive
rational tolerance $η$. Rational arithmetic and exact algebraic field
operations/order/equality tests are charged operations; implementation bit costs
are separate. Put $h=\min(η,1)$. Reject a failed unit promise as INVALID.

1. Compute a rational interval $I_π$ of width at most $h/8$ for
   $π=16\arctan(1/5)-4\arctan(1/239)$. For each arctangent use consecutive
   partial sums of $\sum_{j\ge0}(-1)^j r^{2j+1}/(2j+1)$ as the enclosure.
   Increment $N\ge1$ until $20\cdot5^{-(2N+1)}\le h/8$ and use sums through
   indices $N-1,N$. Combine the two intervals outward.
2. Check coordinates for exact zero. If $v=0,u>0$, set $J=[0,0]$; if
   $v=0,u<0$, set $J=I_π$; if $u=0,v>0$, set $J=I_π/2$; if $u=0,v<0$,
   set $J=-I_π/2$. In these axis branches proceed to instruction 5.
   The zero vector returns INVALID.
3. Set $a=|u|,b=|v|$ and $[L,U]=[0,2]$. While $w=U-L>h/8$, set
   $m=(L+U)/2$ and $ε=w/96$. Compute rational Taylor sums $c,s$ for cosine
   and sine at $m$ with error at most $ε$. Retain at least indices $0,1,2$;
   increment until twice the next absolute term is at most $ε$. The
   successive-term ratios after this index are at most $1/2$.
   Form the exact algebraic number $q=bc-as$. If $q>2ε$, set $L=m$.
   Otherwise if $q<-2ε$, set $U=m$. Otherwise set
   $[L,U]=[L,U]\cap[m-12ε,m+12ε]$. Equality takes this last branch.
4. If $u>0,v>0$, set $J=[L,U]$; if $u<0,v>0$, set
   $J=I_π-[L,U]$; if $u<0,v<0$, set $J=-I_π+[L,U]$; if $u>0,v<0$,
   set $J=-[L,U]$.
5. Set $t_0$ to the rational midpoint of $J$. Find $k\ge0$ by repeated
   halving until $2^{-k}\le h/16$. Round $t_0$ to a multiple of $2^{-k}$
   within $2^{-k}$, obtaining $t$; this can be done by binary search among
   the dyadic grid points in $[-4,4]$, charging every comparison and written
   bit. Return $t$, $J$, and the rounding bound as the phase certificate.

Use the returned rational phase in $Z(t)$ from
[[def-qa-23-qsp-signal-sequence]]. All branches and operation counts are explicit;
no algebraic-isolator refinement or transcendental equality oracle is invoked.
This definition makes no Turing-time or finite-basis compilation claim.
