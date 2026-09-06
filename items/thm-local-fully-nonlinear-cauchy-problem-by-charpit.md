---
id: thm-local-fully-nonlinear-cauchy-problem-by-charpit
kind: theorem
title: "Local fully nonlinear Charpit graph construction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral, def-lagrange-charpit-characteristic-system, lem-charpit-flow-preserves-the-pde-constraint, lem-charpit-contact-compatibility-is-preserved, thm-continuous-dependence-of-odes-on-initial-data-and-parameters, thm-c1-dependence-of-solutions-on-initial-data, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

Let $O\subseteq\mathbb R^n\times\mathbb R\times\mathbb R^n$ be open and
$F\in C^2(O)$.  Let $V\subseteq\mathbb R^{n-1}$ be open, let $y_0\in V$,
and let $\gamma:V\to\mathbb R^n$, $\phi:V\to\mathbb R$, and
$p_0:V\to\mathbb R^n$ be $C^1$ maps such that
$(\gamma(y),\phi(y),p_0(y))\in O$,
$F(\gamma(y),\phi(y),p_0(y))=0$, and
$D\phi(y)=p_0(y)D\gamma(y)$ for every $y\in V$.  Suppose also that
$$\operatorname{rank}[F_p(\gamma(y_0),\phi(y_0),p_0(y_0)),D\gamma(y_0)]=n.$$
Then the Charpit strip through $(\gamma,\phi,p_0)$ projects locally to a
classical graph $u$ satisfying $F(x,u,Du)=0$.  It is unique while that
projection is locally invertible among graphs obtained by inverse-projecting
this fixed Charpit strip.

## Facts & Assumptions

**Given:** The stated $C^2$ equation, compatible $C^1$ strip data, and full-rank condition at $y_0$.

## Proof

**Proof technique:** direct.

1.1 The Charpit vector field is $C^1$ because $F\in C^2$, hence locally Lipschitz.  Continuous dependence gives a unique common local strip through the $C^1$ initial data $(\gamma,\phi,p_0)$. [given, construct]

2.1 The $C^1$-dependence theorem makes this strip $C^1$ in $(s,y)$.  Its projected derivative at $s=0$ has columns $[F_p,D\gamma]$, hence is invertible by the rank hypothesis. [step 1.1, given, algebra]

3.1 The inverse function theorem supplies a local inverse of $(s,y)\mapsto X(s,y)$; define $u(X(s,y)):=Z(s,y)$. [step 2.1, construct]

4.1 Constraint preservation gives $F(X,Z,P)=0$, while contact preservation gives $D_yZ=P\cdot D_yX$; the $s$ identity is $Z_s=P\cdot X_s$.  Since $D_{(s,y)}X$ is invertible, these identities imply $Du(X)=P$. [step 3.1, given, algebra]

5.1 Substitution in the preserved constraint gives $F(x,u(x),Du(x))=0$.  The fixed strip and its local inverse determine this inverse-projected graph uniquely while the projection remains locally invertible. [step 4.1, given] ∎
