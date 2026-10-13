---
id: lem-cm-stroboscopic-iterate-identity
kind: lemma
title: "Iterates of the stroboscopic map, and equilibria as fixed points"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-stroboscopic-map, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]
dependency_roles:
  def-cm-stroboscopic-map: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Section 6.4 and Section 4.6, printed pages 198 and 133-141"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Statement

Retain all notation and hypotheses of [[def-cm-stroboscopic-map]]: $U\subseteq\mathbb R^n$ is open, $P>0$, and $F:\mathbb R\times U\to\mathbb R^n$ is continuous, locally Lipschitz in the state variable, and $P$-periodic.

1. If $z\in D_P$ and $\theta_P(z)\in D_P$, then $[0,2P]\subseteq J_z$ and

$$\theta_P(\theta_P(z))=x_z(2P).$$

2. If $z_*\in U$ satisfies $F(t,z_*)=0$ for every $t\in\mathbb R$, then $z_*\in D_P$ and $\theta_P(z_*)=z_*$.

## Facts & Assumptions

**Given:** The hypotheses of [[def-cm-stroboscopic-map]]: an open $U\subseteq\mathbb R^n$, a number $P>0$, and a continuous map $F:\mathbb R\times U\to\mathbb R^n$, locally Lipschitz in the state variable and $P$-periodic; for clause 1 a point $z\in D_P$ with $\theta_P(z)\in D_P$; for clause 2 a point $z_*\in U$ with $F(t,z_*)=0$ for every $t$.

[F1] Each initial value problem $x'=F(t,x)$, $x(t_0)=x_0$ satisfies the Picard-Lindelof hypotheses, so it has a unique maximal solution whose domain is an open interval containing $t_0$, and every other solution through the same data is a restriction of it ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]).

[F2] The stroboscopic map satisfies $\theta_P(w)=x_w(P)$ for $w\in D_P$, and $D_P=\{w\in U:[0,P]\subseteq J_w\}$ ([[def-cm-stroboscopic-map]]).

[F3] If two locally unique solutions of the same continuous equation are defined on adjacent intervals, agree at the common endpoint, and solve the equation there, their piecewise union is a solution on the union interval ([[lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]]).

[F4] The right-hand side is $P$-periodic, so $F(t+P,x)=F(t,x)$ for all $(t,x)$ ([[def-cm-stroboscopic-map]]).

## Proof

**Proof technique:** direct.

1.1 Put $w:=\theta_P(z)=x_z(P)$, a point of $D_P$ by hypothesis, and let $x_w:J_w\to U$ be the maximal solution of $x'=F(t,x)$, $x(0)=w$; by [F2] the interval $J_w$ contains $[0,P]$. Define $y:[0,2P]\to U$ by $y(t):=x_z(t)$ for $t\in[0,P]$ and $y(t):=x_w(t-P)$ for $t\in[P,2P]$. [F2, given, construct]

2.1 The curve $y$ is well defined and continuous: at the common point $P$ both formulas give $y(P)=x_z(P)=w=x_w(0)$. On $[0,P]$ it solves the system by definition of $x_z$. On $[P,2P]$, writing $s=t-P$, one has $y'(t)=x_w'(s)=F(s,x_w(s))=F(s+P,x_w(s))=F(t,y(t))$ by $P$-periodicity [F4]. At $t=P$ the one-sided derivatives are $y'(P^-)=F(P,w)$ and $y'(P^+)=F(0,w)$, equal by [F4]; hence $y'(P)=F(P,y(P))$. The domain-relative endpoint derivatives of the ODE solution definition and the gluing fact [F3] therefore make $y$ a solution on $[0,2P]$. [step 1.1, F3, F4, algebra]

3.1 The curve $y$ satisfies $y(0)=x_z(0)=z$, so $y$ is a solution of the initial value problem with data $(0,z)$ on $[0,2P]$. By the uniqueness clause of [F1] every solution through $(0,z)$ is a restriction of the maximal solution $x_z$, so $[0,2P]\subseteq J_z$ and $y=x_z|_{[0,2P]}$. In particular $x_z(2P)=y(2P)=x_w(P)=\theta_P(w)=\theta_P(\theta_P(z))$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 For clause 2, the constant curve $c(t):=z_*$ is a solution of the system on $\mathbb R$ because $c'(t)=0=F(t,c(t))$; it satisfies $c(0)=z_*$, so by the uniqueness clause of [F1] it is a restriction of $x_{z_*}$. Hence $[0,P]\subseteq J_{z_*}$, that is $z_*\in D_P$, and $\theta_P(z_*)=x_{z_*}(P)=c(P)=z_*$. [F1, F2, given] ∎

## Remarks

- Clause 1 is the precise sense in which iterating a stroboscopic map follows the continuous solution across successive periods: each iterate requires the previous value to lie in $D_P$ again, and then the iterate equals the value of the same maximal solution at the corresponding multiple of $P$. The identity extends by induction to $k$-fold iterates as long as every intermediate value lies in $D_P$.

- No claim is made that $D_P$ is nonempty, open, or forward invariant, or that $\theta_P$ has periodic points. Clause 2 shows only that every equilibrium of the $P$-periodic vector field gives a fixed point of $\theta_P$ with domain membership.
