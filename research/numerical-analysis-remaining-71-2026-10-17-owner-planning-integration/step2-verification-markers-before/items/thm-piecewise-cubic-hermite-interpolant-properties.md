---
id: thm-piecewise-cubic-hermite-interpolant-properties
kind: theorem
title: Interpolation, C1 matching, and cubic reproduction for Hermite pieces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-piecewise-cubic-hermite-interpolant, lem-derivative-algebra-and-chain-rules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Carl R. de Boor, A Practical Guide to Splines, revised edition, Chapter IV, pp. 39–40"
      url: https://djvu.online/file/W5YE3VGOgt1Ml
---

## Statement

For the data in [[def-piecewise-cubic-hermite-interpolant]], each piece has the prescribed endpoint values and slopes: $P_i(x_i)=y_i$, $P_i(x_{i+1})=y_{i+1}$, $P_i'(x_i)=m_i$, and $P_i'(x_{i+1})=m_{i+1}$. The resulting interpolant is $C^1$ on $[x_0,x_N]$ (with the corresponding one-sided derivatives at the endpoints). On a single interval, if the four prescribed endpoint data are the values and derivatives of a polynomial $q$ of degree at most three, then $P_i=q$ on that interval.

## Facts & Assumptions

**Given:** Strictly increasing real nodes, values, and prescribed slopes as in [[def-piecewise-cubic-hermite-interpolant]].

[F1] [[def-piecewise-cubic-hermite-interpolant]]: on a cell, $P_i=y_iH_{00}(t)+y_{i+1}H_{01}(t)+h_im_iH_{10}(t)+h_im_{i+1}H_{11}(t)$ with $t=(x-x_i)/h_i$ and the four displayed cubic basis polynomials.

[F2] [[lem-derivative-algebra-and-chain-rules]]: for every integer $m\ge1$, $(x^m)'=mx^{m-1}$.

## Proof
1.1 The basis values are $H_{00}(0)=1$, $H_{01}(0)=H_{10}(0)=H_{11}(0)=0$, and $H_{01}(1)=1$, $H_{00}(1)=H_{10}(1)=H_{11}(1)=0$. Substitution into [F1] gives $P_i(x_i)=y_i$ and $P_i(x_{i+1})=y_{i+1}$. [F1, algebra]

1.2 Differentiating the displayed basis using [F2] gives $(H'_{00},H'_{01},H'_{10},H'_{11})(0)=(0,0,1,0)$ and $(H'_{00},H'_{01},H'_{10},H'_{11})(1)=(0,0,0,1)$. Since $dt/dx=1/h_i$, differentiation of [F1] therefore gives $P_i'(x_i)=m_i$ and $P_i'(x_{i+1})=m_{i+1}$. [F1, F2, algebra]

2.1 At a shared node $x_i$, the left and right pieces both have value $y_i$ by step 1.1 and both have derivative $m_i$ by step 1.2. Thus the piecewise function and its first derivative match there; the one-sided endpoint statements follow from the same step 1.2 calculation. [step 1.1, step 1.2]

3.1 Write a degree-at-most-three polynomial in the normalized coordinate as $q(t)=a_0+a_1t+a_2t^2+a_3t^3$. For $q=1$, its endpoint values are $(1,1)$ and scaled slopes are $(0,0)$; for $q=t$, they are $(0,1)$ and $(1,1)$; for $q=t^2$, they are $(0,1)$ and $(0,2)$; and for $q=t^3$, they are $(0,1)$ and $(0,3)$, by [F2] and the chain rule under $t=(x-x_i)/h_i$. Substitution in [F1] gives $H_{00}+H_{01}=1$, $H_{01}+H_{10}+H_{11}=t$, $H_{01}+2H_{11}=t^2$, and $H_{01}+3H_{11}=t^3$. The formula is linear in endpoint values and slopes, so it reproduces their linear combination $q$. [F1, F2, algebra] ∎
