---
id: ex-dirichlet-laplacian-has-uniform-infinity-inverse-bound
kind: example
title: A Dirichlet Laplacian inverse is uniformly bounded in the maximum norm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pass
---

## Example

For $h=1/N$, $N\ge2$, let $A_N$ act on vectors $(v_1,\ldots,v_{N-1})$ with $v_0=v_N=0$ by
$$
(A_Nv)_i=\frac{2v_i-v_{i-1}-v_{i+1}}{h^2},\qquad 1\le i<N.
$$
With the vector maximum norm $\|v\|_\infty=\max_{1\le i<N}|v_i|$, the inverse satisfies $\|A_N^{-1}\|_{\infty\to\infty}\le1/8$ for every $N\ge2$.

## Facts & Assumptions

**Given:** $N\ge2$, $h=1/N$, $v_0=v_N=0$, and the displayed matrix action of $A_N$.

[A1] The grid vector norm is $\|v\|_\infty=\max_{1\le i<N}|v_i|$, and the matrix uses zero endpoint values.

## Verification

1.1 Set $x_i=ih$ and $\phi_i=x_i(1-x_i)/2$ for $0\le i\le N$. Then $\phi_0=\phi_N=0$, $-\delta_h^2\phi_i=1$, so $A_N\phi=\mathbf 1$, and $0\le\phi_i\le1/8$ because $x(1-x)\le1/4$ on $[0,1]$. [given, A1, algebra]

1.2 If $w_0=w_N=0$ and $A_Nw\ge0$ at every interior index, a negative interior minimum $w_k<0$ would give $(A_Nw)_k=(2w_k-w_{k-1}-w_{k+1})/h^2\le0$. Equality is then forced, so both neighboring values equal $w_k$; repeating this along the finite grid reaches a zero endpoint, a contradiction. Therefore $w_i\ge0$ everywhere. [given, A1, algebra]

2.1 The kernel of $A_N$ is zero: if $A_Nv=0$ and $v$ has a positive interior maximum, the equation forces both neighboring values to equal that maximum, which propagates to a zero endpoint; applying the same argument to $-v$ rules out a negative minimum. Thus $v=0$, and the square finite matrix is invertible. [given, A1, step 1.2, algebra]

3.1 Let $g$ be any right-hand side, let $v=A_N^{-1}g$, and put $M=\|g\|_\infty$. If $M=0$, then $v=0$. If $M>0$, $A_N(M\phi+v)=M\mathbf1+g\ge0$ and $A_N(M\phi-v)=M\mathbf1-g\ge0$; step 1.2 makes both grid functions nonnegative. Hence $|v_i|\le M\phi_i\le M/8$ for each $i$, proving $\|A_N^{-1}g\|_\infty\le\|g\|_\infty/8$. [step 1.1, step 1.2, step 2.1, A1, algebra] ∎
