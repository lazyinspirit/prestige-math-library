---
id: lem-rankine-hugoniot-jump-is-a-weak-solution
kind: lemma
title: "A moving jump is a weak solution exactly under Rankine–Hugoniot"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 7 §7.1, printed pp. 70–73: weak jumps and the Rankine–Hugoniot condition"
---

## Statement

For constant states $u_L,u_R$ and a constant speed $s$, the function equal to
$u_L$ on $x<st$ and $u_R$ on $x>st$ solves $u_t+\partial_xf(u)=0$ in
distributions on $t>0$ if and only if
$f(u_R)-f(u_L)=s(u_R-u_L)$.

## Facts & Assumptions

**Given:** A continuous flux $f$ and two constant states separated by $x=st$.

[F1] [[def-rankine-hugoniot-and-lax-shocks]]: a Rankine–Hugoniot jump is exactly the algebraic equality $[f]=s[u]$.

[F2] [[def-hyperbolic-system-and-characteristic-families]]: a distributional weak solution satisfies the vector test-function identity for the PDE.

## Proof

1.1 Write $u=u_L+[u]H(x-st)$ and $f(u)=f(u_L)+[f]H(x-st)$, where $H$ is the unit step and $[u]=u_R-u_L$, $[f]=f(u_R)-f(u_L)$. Testing against a smooth compactly supported function and integrating by parts on the two sides of the line $x=st$ gives $\partial_tu=-s[u]\delta_{x=st}$ and $\partial_xf=[f]\delta_{x=st}$. [given, F2, algebra]

2.1 Their sum is $([f]-s[u])\delta_{x=st}$; it vanishes as a distribution exactly when its constant coefficient is zero, which is [F1]. Thus both implications of the weak-solution/RH equivalence hold. [step 1.1, F1, F2, algebra] ∎
