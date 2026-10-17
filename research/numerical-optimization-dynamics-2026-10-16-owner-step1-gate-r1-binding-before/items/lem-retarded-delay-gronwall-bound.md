---
id: lem-retarded-delay-gronwall-bound
kind: lemma
title: "A Gronwall bound for retarded-delay inequalities"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-gronwall-integral-inequality
  - thm-heine-cantor-r
  - thm-extreme-value-metric
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

Let $\tau,T>0$, $L,H\ge0$, let $q:[0,T]\to[0,\infty)$ be continuous, and let $u:[-\tau,T]\to[0,\infty)$ be continuous with $u(s)\le H$ for $s\in[-\tau,0]$. Suppose that
$$u(t)\le H+\int_0^t\bigl(q(s)+L(u(s)+u(s-\tau))\bigr)\,ds\qquad(0\le t\le T).$$
Then, writing $U(t)=\max\{H,\sup_{0\le r\le t}u(r)\}$, one has
$$U(t)\le\left(H+\int_0^t q(s)\,ds\right)e^{2Lt}\qquad(0\le t\le T).$$

## Facts & Assumptions

**Given:** The nonnegative continuous functions, constants, history bound, and integral inequality in the Statement.

[F1] A continuous real function on a compact subset of $\mathbb R$ is uniformly continuous ([[thm-heine-cantor-r]]).

[F2] If continuous nonnegative $v,a,b$ satisfy $v(t)\le a(t)+\int_0^t b(s)v(s)\,ds$ and $a$ is nondecreasing, then $v(t)\le a(t)e^{\int_0^t b(s)\,ds}$ ([[thm-gronwall-integral-inequality]]).

[F3] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

## Proof

1.1 The running maximum $U$ is finite because [F3] bounds $u$ on the compact interval $[0,T]$. It is continuous because [F1] gives a modulus of continuity: when $t$ increases by at most $\delta$, any newly included value of $u$ can exceed the old maximum by at most that modulus at $\delta$. Also $u(s)\le U(s)$ and $u(s-\tau)\le U(s)$ for $s\ge0$: the latter is bounded by $H$ when $s-\tau\le0$, and otherwise its argument lies in $[0,s]$. [given, F1, F3]

2.1 Put $A(t)=H+\int_0^t q(s)\,ds$, which is continuous and nondecreasing. For each $r\in[0,t]$, the assumed inequality and step 1.1 give $u(r)\le A(r)+2L\int_0^rU(s)\,ds\le A(t)+2L\int_0^tU(s)\,ds$. Since the same upper bound is at least $H$, taking the maximum over $r\in[0,t]$ yields $U(t)\le A(t)+2L\int_0^tU(s)\,ds$. [given, step 1.1, algebra]

3.1 Apply [F2] to step 2.1 with $v=U$, $a=A$, and the constant coefficient $b=2L$. It gives $U(t)\le A(t)e^{2Lt}$, the required bound. [F2, step 2.1] ∎
