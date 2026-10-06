---
id: thm-hopf-lax-dynamic-programming-semigroup
kind: theorem
title: The Hopf--Lax operators form a semigroup (dynamic programming)
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- cor-hopf-lax-preserves-a-modulus-of-continuity
- def-convex-and-strictly-convex-functions-on-euclidean-sets
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Theorem 2.21 (dynamic programming principle) and its proof, printed pp. 65--67
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear with Legendre
transform $L$, and let $u_0:\mathbb R^n\to\mathbb R$ be bounded and uniformly
continuous. Then for all $t,s\ge0$ the Hopf--Lax operators of
[[def-hopf-lax-operator]] satisfy
$$Q_{t+s}u_0=Q_t(Q_su_0)=Q_s(Q_tu_0)\qquad\text{pointwise on }\mathbb R^n,$$
where the inner operators are applied to the bounded uniformly continuous
function $Q_su_0$ (or $Q_tu_0$) produced by
[[cor-hopf-lax-preserves-a-modulus-of-continuity]]. Equivalently, for all
$t,s>0$ and $x\in\mathbb R^n$ the short-time variational principle holds:
$$Q_{t+s}u_0(x)=\inf_{z\in\mathbb R^n}\Bigl\{Q_su_0(z)+tL\Bigl(\frac{x-z}{t}\Bigr)\Bigr\}.$$
The family $(Q_t)_{t\ge0}$ is therefore a semigroup with $Q_0=\mathrm{id}$ on
the bounded uniformly continuous data. No choice principle is used.

## Facts & Assumptions

**Given:** A convex superlinear $H$ with Legendre transform $L$, a bounded uniformly continuous $u_0$, the operators $Q_t$ of [[def-hopf-lax-operator]], and $t,s>0$.

[F1] $Q_tu_0(x)=\inf_{y\in\mathbb R^n}\{u_0(y)+tL((x-y)/t)\}$ for $t>0$, $Q_0u_0=u_0$, and under the present hypotheses all these infima are real and attained ([[def-hopf-lax-operator]], [[lem-hopf-lax-infima-localise]]).

[F2] $L$ is convex: $L((1-\lambda)w_1+\lambda w_2)\le(1-\lambda)L(w_1)+\lambda L(w_2)$ for all $w_1,w_2$ and $\lambda\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[F3] $Q_su_0$ is bounded and has the modulus of continuity of $u_0$; in particular it is bounded and uniformly continuous, so the inner operator $Q_t$ is defined on it ([[cor-hopf-lax-preserves-a-modulus-of-continuity]]).

## Proof

**Proof technique:** the two-point convexity inequality with weights adapted to $t$ and $s$.

1.1 The inequality $Q_{t+s}u_0\le Q_t(Q_su_0)$. Fix $y,z\in\mathbb R^n$ and write $(x-y)/(t+s)=\frac{t}{t+s}\frac{x-z}{t}+\frac{s}{t+s}\frac{z-y}{s}$, a convex combination with weights $t/(t+s)$ and $s/(t+s)$; by [F2], $L((x-y)/(t+s))\le\frac{t}{t+s}L((x-z)/t)+\frac{s}{t+s}L((z-y)/s)$. Multiplying by $t+s$ and adding $u_0(y)$ gives $u_0(y)+(t+s)L((x-y)/(t+s))\le\bigl[u_0(y)+sL((z-y)/s)\bigr]+tL((x-z)/t)$. Taking the infimum over $y$ on the left and over $y$ and then $z$ on the right (the double infimum is an infimum over pairs, legitimate for real infima by [F1]) yields $Q_{t+s}u_0(x)\le\inf_z\{Q_su_0(z)+tL((x-z)/t)\}=Q_t(Q_su_0)(x)$. [F1, F2, F3, algebra]

1.2 The reverse inequality. Fix $y\in\mathbb R^n$ and choose the segment point $z:=y+\frac{s}{t+s}(x-y)$, for which $\frac{z-y}{s}=\frac{x-z}{t}=\frac{x-y}{t+s}$. Then $u_0(y)+sL((z-y)/s)+tL((x-z)/t)=u_0(y)+(t+s)L((x-y)/(t+s))$; taking the infimum over $y$ gives $Q_t(Q_su_0)(x)\le Q_{t+s}u_0(x)$. [F1, F2, F3, algebra]

2.1 Conclusion. Steps 1.1 and 1.2 give $Q_{t+s}u_0=Q_t(Q_su_0)$ for all $t,s>0$. The operator $Q_s$ maps the bounded uniformly continuous datum to a bounded uniformly continuous function by [F3], so the composition is well defined; swapping the roles of $t$ and $s$ in the same computation gives $Q_{t+s}u_0=Q_s(Q_tu_0)$, and the case $t=0$ or $s=0$ is the definition $Q_0=\mathrm{id}$ of [F1]. Hence $(Q_t)_{t\ge0}$ is a semigroup of operators on the bounded uniformly continuous data, and the displayed short-time variational principle is the identity $Q_t(Q_su_0)=Q_{t+s}u_0$ written out. [step 1.1, step 1.2, F1, F3] ∎

## Remarks

- **Choice.** The two inequalities are computed by taking infima over explicit sets of reals; the segment point $z$ is given by a formula, so nothing is selected and no choice principle is used.
- **Why the datum class is preserved.** The semigroup statement needs the inner operator to be applied to a bounded uniformly continuous function, which is exactly the content of [[cor-hopf-lax-preserves-a-modulus-of-continuity]] together with the boundedness following from $u_0$ bounded and $L\ge-H(0)$.
