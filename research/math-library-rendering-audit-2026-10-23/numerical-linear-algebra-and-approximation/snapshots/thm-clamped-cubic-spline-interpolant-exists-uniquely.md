---
id: thm-clamped-cubic-spline-interpolant-exists-uniquely
kind: theorem
title: Clamped cubic spline interpolation exists uniquely
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-clamped-cubic-spline-interpolant ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV,
        pp. 42–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Brian LeMesurier, Introduction to Numerical Methods and Analysis with
        Python, §3.4.2
      url: https://lemesurierb.people.charleston.edu/introduction-to-numerical-methods-and-analysis-python/docs/main/piecewise-polynomial-approximation-and-splines.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a=x_0<x_1<\cdots<x_m=b$, $m\ge1$, let $y_0,\ldots,y_m\in\mathbb R$,
and let $\sigma_a,\sigma_b\in\mathbb R$. Put
$h_i=x_{i+1}-x_i>0$ and $d_i=(y_{i+1}-y_i)/h_i$. There is exactly one
clamped cubic spline interpolant in the sense of
[[def-clamped-cubic-spline-interpolant]]. Its nodal second derivatives
$M_i=s''(x_i)$ are the unique solution of
$$\begin{aligned}2h_0M_0+h_0M_1&=6(d_0-\sigma_a),\\h_{i-1}M_{i-1}+2(h_{i-1}+h_i)M_i+h_iM_{i+1}&=6(d_i-d_{i-1}),\quad 1\le i<m,\\h_{m-1}M_{m-1}+2h_{m-1}M_m&=6(\sigma_b-d_{m-1}).\end{aligned}$$
On $[x_i,x_{i+1}]$ the interpolant is
$$s_i(x)=\frac{M_i(x_{i+1}-x)^3+M_{i+1}(x-x_i)^3}{6h_i}+\left(y_i-\frac{M_ih_i^2}{6}\right)\frac{x_{i+1}-x}{h_i}+\left(y_{i+1}-\frac{M_{i+1}h_i^2}{6}\right)\frac{x-x_i}{h_i}.$$

## Facts & Assumptions

**Given:** The partition, arbitrary nodal values, and prescribed endpoint slopes in the Statement.

[F1] [[def-clamped-cubic-spline-interpolant]] requires a $C^2$ function, cubic pieces, interpolation at every node, and the two prescribed endpoint slopes.

[A1] $m\ge1$, $x_0<\cdots<x_m$, $y_i\in\mathbb R$, and $\sigma_a,\sigma_b\in\mathbb R$.

## Proof

1.1 Let $A$ be the $(m+1)\times(m+1)$ matrix of the displayed system. Its first row has diagonal $2h_0$ and off-diagonal sum $h_0$; an interior row $i$ has diagonal $2(h_{i-1}+h_i)$ and off-diagonal sum $h_{i-1}+h_i$; the last row has diagonal $2h_{m-1}$ and off-diagonal sum $h_{m-1}$. Every diagonal entry therefore strictly exceeds the sum of the other absolute entries in its row. If $Av=0$ for a nonzero $v$, choose $i$ with $|v_i|=\max_j|v_j|>0$. The $i$th row gives $|A_{ii}||v_i|\le\sum_{j\ne i}|A_{ij}||v_j|\le \left(\sum_{j\ne i}|A_{ij}|\right)|v_i|$, contradicting strict row diagonal dominance. Thus $A$ has zero kernel and, being square, is invertible. [A1, algebra, choose]

2.1 Let $M_0,\ldots,M_m$ be the unique solution. Define $s_i$ by the displayed piece formula. Substitution at $x_i$ and $x_{i+1}$ gives the values $y_i,y_{i+1}$, and differentiating twice gives endpoint second derivatives $M_i,M_{i+1}$. Differentiating once gives $s_i'(x_i)=d_i-h_i(2M_i+M_{i+1})/6$ and $s_i'(x_{i+1})=d_i+h_i(M_i+2M_{i+1})/6$. The interior system rows make the adjacent endpoint slopes agree. Since the adjacent second derivatives both equal the shared $M_i$, the pieces join with continuous first and second derivatives. The first and last rows give $s_0'(a)=\sigma_a$ and $s_{m-1}'(b)=\sigma_b$. Hence the constructed function satisfies [F1]. [A1, F1, step 1.1, construct, algebra]

3.1 For any clamped interpolant, its nodal second derivatives must satisfy the displayed system by the same endpoint-slope formulas, so invertibility from step 1.1 forces them to equal the constructed $M_i$. On each interval, the difference from $s_i$ is a cubic with zero endpoint values and zero endpoint second derivatives. Its second derivative is affine and vanishes at both endpoints, hence is identically zero; the difference is then affine and vanishes at both endpoint values, hence is zero. Every piece is therefore unique, proving uniqueness of the interpolant. [A1, F1, step 1.1, step 2.1, algebra] ∎
