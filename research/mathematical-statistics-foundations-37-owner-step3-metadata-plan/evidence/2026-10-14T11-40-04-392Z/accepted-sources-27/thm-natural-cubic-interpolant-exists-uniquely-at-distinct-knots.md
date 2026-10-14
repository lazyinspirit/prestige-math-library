---
id: thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
kind: theorem
title: Natural cubic interpolation at distinct knots
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-natural-cubic-spline]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "P. J. Green and B. W. Silverman, Nonparametric Regression and Generalized Linear Models: A Roughness Penalty Approach, §2.2.1, Theorem 2.2, printed p. 15"
      url: https://ndl.ethernet.edu.et/handle/123456789/32883
---

## Statement

Let $r\ge2$, $a\le x_1<\cdots<x_r\le b$, and $y_1,\ldots,y_r\in\mathbb R$. There is exactly one natural cubic spline $s$ on $[a,b]$ with $s(x_i)=y_i$ for each $i$. On each interval $[x_i,x_{i+1}]$ it is the cubic with endpoint values $y_i,y_{i+1}$ and endpoint second derivatives $M_i,M_{i+1}$, where $M_1=M_r=0$ and the interior values solve the positive-definite tridiagonal system
$$h_{i-1}M_{i-1}+2(h_{i-1}+h_i)M_i+h_iM_{i+1}=6\left(\frac{y_{i+1}-y_i}{h_i}-\frac{y_i-y_{i-1}}{h_{i-1}}\right),\quad 2\le i\le r-1,$$
with $h_i=x_{i+1}-x_i>0$. The interpolant is linear outside $[x_1,x_r]$.

## Facts & Assumptions

**Given:** $r\ge2$, strictly increasing knots $x_1<\cdots<x_r$ in $[a,b]$, and arbitrary values $y_i\in\mathbb R$.

[F1] A natural cubic spline is $C^2$, piecewise cubic between its distinct knots, has second derivative zero at the extreme knots, and is linear on data-free end intervals ([[def-natural-cubic-spline]]).

[A1] $r\ge2$, $x_1<\cdots<x_r$ in $[a,b]$, and $y_1,\ldots,y_r$ are arbitrary real values.

## Proof

**Proof technique:** direct.

1.1 Put $h_i=x_{i+1}-x_i$ and $d_i=(y_{i+1}-y_i)/h_i$. For $r=2$ there are no interior second derivatives to solve. For $r\ge3$, let $A$ be the $(r-2)\times(r-2)$ symmetric tridiagonal matrix with diagonal entry $2(h_{i-1}+h_i)$ in row $i$ and adjacent off-diagonal entries $h_i$. For a nonzero vector $v=(v_2,\ldots,v_{r-1})$, using $2v_iv_{i+1}\ge-v_i^2-v_{i+1}^2$ gives $v^TAv\ge\sum_{i=2}^{r-1}(h_{i-1}+h_i)v_i^2>0.$ Thus $A$ is positive definite and invertible, so the displayed system has exactly one solution $M_2,\ldots,M_{r-1}$. [A1, algebra]

2.1 On $[x_i,x_{i+1}]$, define $s_i(x)=\frac{M_i(x_{i+1}-x)^3+M_{i+1}(x-x_i)^3}{6h_i}+\left(y_i-\frac{M_i h_i^2}{6}\right)\frac{x_{i+1}-x}{h_i}+\left(y_{i+1}-\frac{M_{i+1}h_i^2}{6}\right)\frac{x-x_i}{h_i}.$ Direct substitution gives $s_i(x_i)=y_i$, $s_i(x_{i+1})=y_{i+1}$, and $s_i''(x_i)=M_i$, $s_i''(x_{i+1})=M_{i+1}$. Its left and right endpoint slopes are respectively $s_i'(x_i)=d_i-M_i h_i/3-M_{i+1}h_i/6$ and $s_i'(x_{i+1})=d_i+M_i h_i/6+M_{i+1}h_i/3$. Equating the right slope from $s_{i-1}$ and the left slope from $s_i$ gives the tridiagonal equation at $x_i$. Hence the pieces join $C^1$; their second derivatives are linear with the same nodal values, so they join $C^2$. At the extreme knots $M_1=M_r=0$, so adjoining the tangent line gives the required linear tails and preserves $C^2$. For $r=2$, the formula is the straight line between the two values and the same endpoint argument applies. [A1, F1, step 1.1, algebra, construct]

3.1 Any natural cubic interpolant has nodal second derivatives with $M_1=M_r=0$. Equality of its adjacent endpoint slopes forces the displayed tridiagonal equations, so by step 1.1 its nodal second derivatives equal the constructed ones. On each interval, the difference from $s_i$ is a cubic with zero second derivative at both endpoints; its second derivative is affine and therefore zero throughout, so the difference is affine and vanishes at both endpoint values. It is identically zero. Thus the interpolant is unique. [A1, F1, step 1.1, step 2.1, algebra] ∎
