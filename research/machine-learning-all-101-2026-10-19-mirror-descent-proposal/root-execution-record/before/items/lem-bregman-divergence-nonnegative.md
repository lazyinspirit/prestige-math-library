---
id: lem-bregman-divergence-nonnegative
kind: lemma
title: Positive Hessians make Bregman divergence nonnegative
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-mirror-map-and-bregman-divergence
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.1 Bregman divergence and §5.3.2 OMD proof, PDF pp. 93–103; the local curvature consequences are proved here."
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Mirror descent regret proof, PDF pp. 27–30; the local curvature consequences are proved here."
verification:
  precheck: n/a
---

## Statement

Let $(K,U,R)$ be a mirror regularizer, and suppose $R$ is $m$-strongly convex on $K$ for some $m>0$. For $x,y\in U$,

$$B_R(x\|y)\ge0,$$

with strict inequality when $x\ne y$. For $x\in K$ and $y\in K\cap U$,

$$B_R(x\|y)\ge\frac m2\|x-y\|_2^2.$$

## Statement references

[[def-mirror-map-and-bregman-divergence]]: defines the Bregman formula, the positive-definite Hessian on $U$, and strong convexity on $K$.

[[thm-multivariable-taylor-formula-with-lagrange-remainder]]: gives a second-order Taylor formula with a Hessian evaluated at an intermediate point of the segment.

## Facts & Assumptions

**Given:** A mirror regularizer $(K,U,R)$, a strong-convexity constant $m>0$ on $K$, and the points in the Statement.

[F1] [[def-mirror-map-and-bregman-divergence]]: $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$; $R$ is $C^2$ with positive-definite Hessian on open convex $U$, and its strong-convexity inequality holds on $K$.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a $C^2$ scalar function on open convex $U$ and $a,a+h\in U$, some $\theta\in(0,1)$ gives $R(a+h)=R(a)+\langle\nabla R(a),h\rangle+\frac12h^\top H_R(a+\theta h)h$.

## Proof

1.1 For distinct $x,y\in U$, apply [F2] at $a=y$ and $h=x-y$. By [F1], the remainder identity gives $B_R(x\|y)=\frac12(x-y)^\top H_R(y+\theta(x-y))(x-y)>0$, because the Hessian is positive definite and $x-y\ne0$. If $x=y$, the defining formula gives $B_R(x\|y)=0$. Thus the first claim holds. [given, F1, F2, cases, algebra]

1.2 Fix $x\in K$ and $y\in K\cap U$, and put $d=x-y$. For $0<\lambda<1$, strong convexity in [F1] gives $R(y+\lambda d)\le(1-\lambda)R(y)+\lambda R(x)-\frac m2\lambda(1-\lambda)\|d\|_2^2$. Rearranging yields $R(x)-R(y)-[R(y+\lambda d)-R(y)]/\lambda\ge\frac m2(1-\lambda)\|d\|_2^2$. [given, F1, algebra]

2.1 As $\lambda\downarrow0$, $y+\lambda d$ lies in the open set $U$ for all sufficiently small $\lambda$, and differentiability gives $[R(y+\lambda d)-R(y)]/\lambda\to\langle\nabla R(y),d\rangle$. Taking the derivative limit in step 1.2 gives $B_R(x\|y)\ge\frac m2\|d\|_2^2$. [step 1.2, F1, algebra] ∎

