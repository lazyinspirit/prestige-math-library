---
id: thm-product-kernel-pre-gelation-second-moment-blowup
kind: theorem
title: The discrete product-kernel solution has finite-time second-moment blow-up
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - lem-rooted-tree-generating-function-series
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; each coefficient equation is verified by finite convolution.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3.3
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

Define concentrations $c_k(t)\ge0$ by the discrete product-kernel equations
$$\dot c_k=\frac12\sum_{i+j=k}ijc_ic_j-kc_k\sum_{j\ge1}jc_j,\qquad k\ge1,$$
with monomer initial data $c_1(0)=1$ and $c_k(0)=0$ for $k\ge2$. For $r=1,2$, define $M_r(t)=\sum_{k\ge1}k^rc_k(t)$. The pre-gelation solution is
$$c_k(t)=\frac{k^{k-2}}{k!}t^{k-1}e^{-kt},\qquad 0\le t<1,$$
where the value at $t=0$ is understood by continuity. Its first and second moments satisfy $M_1(t)=1$ and $M_2(t)=1/(1-t)$. Thus the second moment becomes unbounded at the finite time $t=1$ although the pre-gelation first moment is constant.

## Facts & Assumptions

**Given:** The discrete product-kernel equations and the rooted-tree generating series.

[F1] [[lem-rooted-tree-generating-function-series]]: $T(z)=\sum_{k\ge1}k^{k-1}z^k/k!$, $U(z)=\sum_{k\ge1}k^{k-2}z^k/k!$, $T=ze^T$, $zT'=T/(1-T)$, and $zU'=T$ for $|z|<e^{-1}$.

[F2] [[lem-rooted-tree-generating-function-series]]: for $0\le z<e^{-1}$, $T(z)$ is the unique $u\in[0,1)$ satisfying $ue^{-u}=z$.

## Proof

1.1 Put $q(t)=te^{-t}$ and $a_k=k^{k-2}/k!$. For $0<t<1$, define $c_k(t)=a_kq(t)^k/t$. Since $q(t)<e^{-1}$, [F1] gives the convergent generating function $C(z,t)=\sum_{k\ge1}c_k(t)z^k=U(zq(t))/t$. Its mass generating function is $z\partial_zC=T(zq)/t$. Because $q=te^{-t}$ and $t\in[0,1)$, [F2] gives $T(q)=t$, so $M_1=z\partial_zC(1,t)=1$. [F1, F2, algebra]

2.1 For every fixed $k$ and $0<t<1$, differentiation of $a_kq^k/t$ gives $\dot c_k=c_k((k-1)/t-k)$. The gain coefficient in the $k$th product-kernel equation is $$\frac12\sum_{i+j=k}ijc_ic_j=\frac{q^k}{t^2}[z^k]\frac{T(z)^2}{2}=\frac{k-1}{t}c_k,$$ because $U=T-T^2/2$ implies $[z^k]T^2/2=(k-1)a_k$. The loss is $kc_kM_1=kc_k$ by step 1.1. Their difference is exactly $\dot c_k$, verifying every coefficient equation for $0<t<1$. At $t=0$, only $c_1$ is nonzero: the right-hand side is $-1$ for $k=1$, $1/2$ for $k=2$, and $0$ for $k\ge3$. The displayed formula has the same right derivatives, since $a_2=1/2$ and $t^{k-1}$ has zero derivative at $0$ for $k\ge3$. Thus the equations and initial data hold at the initial time as well. [F1, step 1.1, algebra]

3.1 Applying $z\partial_z$ once more to $C=U(zq)/t$ and using [F1] gives $$M_2(t)=(z\partial_z)^2C(1,t)=\frac{qT'(q)}t=\frac{T(q)}{t(1-T(q))}=\frac1{1-t}.$$ Therefore $M_2(t)\to\infty$ as $t\uparrow1$, while step 1.1 gives $M_1(t)=1$ throughout the pre-gelation interval. [F1, step 1.1, algebra] ∎

