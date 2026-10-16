---
id: lem-qa-15-grid-return-derivative
kind: lemma
title: "Bounded integer-grid values control excursions by the derivative"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - lem-derivative-of-a-power
  - cor-mean-value-theorem
  - thm-extreme-value-r
  - thm-algebra-of-continuous-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $N\ge1$ be an integer and let $q$ be a real polynomial. On $[0,N]$, set
$$h:=\max q-\min q,\qquad D:=\max |q'|.$$
If $0\le q(k)\le1$ for every integer $k=0,\ldots,N$, then
$$D\ge \max\{0,h-1\}.$$

## Facts & Assumptions

**Given:** An integer $N\ge1$, a real polynomial $q$, and the grid bounds $0\le q(k)\le1$ for $k=0,\ldots,N$.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]] and [[lem-derivative-of-a-power]]: a real polynomial is a finite coefficient list evaluated by powers, and its real function is differentiable everywhere with derivative a polynomial function.

[F2] [[thm-algebra-of-continuous-functions]]: every polynomial function is continuous, and so is the absolute value of a continuous function.

[F3] [[thm-extreme-value-r]]: a continuous real function on the nonempty compact interval $[0,N]$ attains its maximum and minimum.

[F4] [[cor-mean-value-theorem]]: if a function is continuous on a closed interval and differentiable in its interior, its endpoint difference equals its derivative at an interior point times the interval length.

## Proof


1.1 By [F1]–[F3], both $q$ and $|q'|$ are continuous on the compact interval $[0,N]$. Thus there exist $u,v\in[0,N]$ with $q(u)=\max q=:M$, $q(v)=\min q=:m$, and $D=\max|q'|$. In particular $h=M-m\ge0$ and $D\ge0$. [given, F1, F2, F3]

1.2 For any $x\in[0,N]$, some grid integer $k\in\{0,\ldots,N\}$ satisfies $|x-k|\le1/2$ (choose a nearest integer, with an endpoint grid point at either boundary). Applying [F4] on the interval between $x$ and $k$ when they differ gives $|q(x)-q(k)|\le D|x-k|\le D/2$; equality of the points gives the same inequality directly. [given, F4, choose]

2.1 If $h\le1$, then $\max\{0,h-1\}=0\le D$. It remains to consider $h>1$. [step 1.1, algebra]

3.1 Apply step 1.2 at a maximizer $u$ and a minimizer $v$. The grid bounds give $M\le1+D/2$ and $m\ge-D/2$, so $h=M-m\le1+D$. Rearranging yields $D\ge h-1$. [step 1.1, step 1.2, algebra] ∎
