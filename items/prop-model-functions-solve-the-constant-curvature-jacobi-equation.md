---
id: prop-model-functions-solve-the-constant-curvature-jacobi-equation
kind: proposition
title: Model functions solve the constant curvature jacobi equation
status: published
origin: pipeline
deps:
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-hyperbolic-identities-and-derivatives
  - def-hyperbolic-functions
  - thm-chain-rule
  - cor-zero-derivative-implies-constant
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§24.1, pp.173–176: the model functions and their differential identities"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§2, pp.6–11: the scalar model solutions of the Jacobi equation"
---

## Statement

For every real $k\in\mathbb R$ the comparison functions
$\operatorname{sn}_k,\operatorname{cs}_k$ of
[[def-comparison-sine-cosine-and-cotangent-functions]] satisfy, on all of
$\mathbb R$,
$$\operatorname{sn}_k''+k\,\operatorname{sn}_k=0,\qquad \operatorname{cs}_k''+k\,\operatorname{cs}_k=0,$$
with initial data
$$\operatorname{sn}_k(0)=0,\qquad \operatorname{sn}_k'(0)=\operatorname{cs}_k(0)=1,\qquad \operatorname{cs}_k'(0)=0,$$
and the Wronskian identity
$$\operatorname{cs}_k(t)^2+k\,\operatorname{sn}_k(t)^2=1\qquad\text{for every }t\in\mathbb R.$$
In particular, for $k>0$ the pair $(\operatorname{sn}_k,\operatorname{cs}_k)$ is
the solution of the scalar Jacobi equation with the spherical initial data, for
$k=0$ of the Euclidean initial-value problem, and for $k<0$ of the hyperbolic
initial-value problem. The identity shows that $\operatorname{sn}_k$ and
$\operatorname{cs}_k$ never vanish simultaneously; for $k\le0$,
$\operatorname{cs}_k$ is everywhere positive. The assertions are purely about
the explicitly displayed model
functions and use no geometric or choice hypothesis.

## Facts & Assumptions

**Given:** A real number $k\in\mathbb R$ and the piecewise formulas for $\operatorname{sn}_k,\operatorname{cs}_k=\operatorname{sn}_k'$ ([[def-comparison-sine-cosine-and-cotangent-functions]]).

[F1] The comparison functions are $\operatorname{sn}_k(t)=\sin(\sqrt k\,t)/\sqrt k$ and $\operatorname{cs}_k(t)=\cos(\sqrt k\,t)$ for $k>0$; $\operatorname{sn}_k(t)=t$ and $\operatorname{cs}_k(t)=1$ for $k=0$; and $\operatorname{sn}_k(t)=\sinh(\sqrt{-k}\,t)/\sqrt{-k}$, $\operatorname{cs}_k(t)=\cosh(\sqrt{-k}\,t)$ for $k<0$ ([[def-comparison-sine-cosine-and-cotangent-functions]]); $\operatorname{cs}_k=\operatorname{sn}_k'$ is part of that definition.

[F2] Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$, and the chain rule gives $(\sin(ct))'=c\cos(ct)$, $(\cos(ct))'=-c\sin(ct)$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]); moreover $\sin^2+\cos^2=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F3] The hyperbolic functions satisfy $\sinh'=\cosh$, $\cosh'=\sinh$ and $\cosh^2-\sinh^2=1$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]); with the chain rule, $(\sinh(ct))'=c\cosh(ct)$ and $(\cosh(ct))'=c\sinh(ct)$ ([[thm-chain-rule]]).

[F4] A differentiable function with identically vanishing derivative on $\mathbb R$ is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

1.1 The positive-curvature case. [F1, F2]
Let $k>0$ and $c:=\sqrt k$. By [F1], $\operatorname{sn}_k(t)=\sin(ct)/c$ and $\operatorname{cs}_k(t)=\cos(ct)$. Differentiating with [F2], $\operatorname{sn}_k'(t)=\cos(ct)=\operatorname{cs}_k(t)$, $\operatorname{sn}_k''(t)=-c\sin(ct)=-c^2\operatorname{sn}_k(t)=-k\operatorname{sn}_k(t)$, and $\operatorname{cs}_k'(t)=-c\sin(ct)$, $\operatorname{cs}_k''(t)=-c^2\cos(ct)=-k\operatorname{cs}_k(t)$. At $t=0$: $\operatorname{sn}_k(0)=\sin0/c=0$, $\operatorname{sn}_k'(0)=\cos0=1=\operatorname{cs}_k(0)$ and $\operatorname{cs}_k'(0)=-c\sin0=0$. [F1, F2]

1.2 The flat case. [F1]
Let $k=0$. By [F1], $\operatorname{sn}_0(t)=t$ and $\operatorname{cs}_0(t)=1$. Hence $\operatorname{sn}_0''=0=-0\cdot\operatorname{sn}_0$, $\operatorname{cs}_0''=0=-0\cdot\operatorname{cs}_0$, and the initial data are $\operatorname{sn}_0(0)=0$, $\operatorname{sn}_0'(0)=1=\operatorname{cs}_0(0)$, $\operatorname{cs}_0'(0)=0$. [F1]

1.3 The negative-curvature case. [F1, F3]
Let $k<0$ and $c:=\sqrt{-k}>0$. By [F1], $\operatorname{sn}_k(t)=\sinh(ct)/c$ and $\operatorname{cs}_k(t)=\cosh(ct)$. Differentiating with [F3], $\operatorname{sn}_k'=\cosh(ct)=\operatorname{cs}_k$, $\operatorname{sn}_k''=c\sinh(ct)=-k\operatorname{sn}_k$, and $\operatorname{cs}_k''=c^2\cosh(ct)=-k\operatorname{cs}_k$. At $t=0$: $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=\cosh0=1$, $\operatorname{cs}_k(0)=1$ and $\operatorname{cs}_k'(0)=\sinh0=0$. [F1, F3]

2.1 Assembly and the Wronskian identity. [F1, F4, step 1.1, step 1.2, step 1.3]
Steps 1.1, 1.2 and 1.3 cover the three cases $k>0$, $k=0$ and $k<0$, which exhaust $\mathbb R$: in every case $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ and $\operatorname{cs}_k''+k\operatorname{cs}_k=0$ on all of $\mathbb R$, with $\operatorname{sn}_k(0)=0$, $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$ and $\operatorname{cs}_k=\operatorname{sn}_k'$, so $\operatorname{sn}_k'(0)=1$. For the remaining identity define $w(t):=\operatorname{cs}_k(t)^2+k\operatorname{sn}_k(t)^2$. By the product rule and the two differential equations just established, $$w'=2\operatorname{cs}_k\operatorname{cs}_k'+2k\operatorname{sn}_k\operatorname{sn}_k' =2\operatorname{cs}_k(-k\operatorname{sn}_k)+2k\operatorname{sn}_k\operatorname{cs}_k=0$$ on all of $\mathbb R$. Hence [F4] makes $w$ constant, and $w(0)=\operatorname{cs}_k(0)^2+k\operatorname{sn}_k(0)^2=1$. Therefore $\operatorname{cs}_k^2+k\operatorname{sn}_k^2=1$ everywhere, so $\operatorname{sn}_k$ and $\operatorname{cs}_k$ never vanish simultaneously; the explicit case analysis shows that the same formulas continue to hold at every real $t$, including $t=0$ and the reflected negative times. No choice or completeness hypothesis is used. [F1, F4, step 1.1, step 1.2, step 1.3] ∎
