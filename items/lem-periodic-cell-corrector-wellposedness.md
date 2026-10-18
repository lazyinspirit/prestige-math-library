---
id: lem-periodic-cell-corrector-wellposedness
kind: lemma
title: Existence and uniqueness of periodic cell correctors
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-problem
  - def-periodic-zero-mean-cell-space
  - lem-periodic-cell-poincare
  - lem-w-one-two-is-a-hilbert-space
  - thm-lax-milgram
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.2.2, equation (1.9) and Lemma 1.2.1, PDF p. 7: periodic cell equation and solvability context; the local proof treats the weak right-hand side by Lax–Milgram."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.2, printed pp. 9–13: existence, uniqueness and bounds for periodic correctors."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

Assume $a,\lambda,\Lambda,Y,V_\#$ are as in [[def-periodic-scalar-diffusion-data]] and [[def-periodic-zero-mean-cell-space]]. For each $p\in\mathbb R^d$, the equation in [[def-periodic-cell-problem]] has a unique solution $\chi_p\in V_\#$. The map $p\mapsto\chi_p$ is linear, and
$$\|\nabla\chi_p\|_{L^2(Y)}\le(\Lambda/\lambda)|p|,\qquad \|\chi_p\|_{L^2(Y)}\le\sqrt d(\Lambda/\lambda)|p|.$$

## Facts & Assumptions

**Given:** $a$ is measurable with $\lambda\le a\le\Lambda$, the periodic cell equation, the cell Poincare inequality, Hilbert completeness and real Lax--Milgram under Countable Choice.

[F1] [[def-periodic-cell-problem]]: the unknown lies in $V_\#$ and satisfies $\int_Ya(p+\nabla\chi_p)\cdot\nabla v=0$ for all $v\in V_\#$.

[F2] [[lem-periodic-cell-poincare]]: $V_\#$ is Hilbert in the gradient norm, and $\|v\|_2\le\sqrt d\|\nabla v\|_2$.

[F3] [[lem-w-one-two-is-a-hilbert-space]]: the periodic $H^1$ closure, and its closed mean-zero subspace, are Hilbert under the $H^1$ norm.

[F4] [[thm-lax-milgram]]: a bounded coercive real bilinear form on a Hilbert space has a unique variational solution and the usual norm estimate.

[F5] [[def-periodic-scalar-diffusion-data]]: $\lambda\le a\le\Lambda$ almost everywhere.

[A1] [[def-countable-choice]]: Countable Choice is the axiom used by the cited Hilbert and Lax--Milgram suppliers; no stronger choice axiom is invoked.

## Proof




1.1 On $V_\#$ with gradient inner product, define $b(u,v)=\int_Ya\nabla u\cdot\nabla v$ and $F_p(v)=-\int_Ya p\cdot\nabla v$. By [F5] and Cauchy--Schwarz, $|b(u,v)|\le\Lambda\|\nabla u\|_2\|\nabla v\|_2$, $b(v,v)\ge\lambda\|\nabla v\|_2^2$, and $|F_p(v)|\le\Lambda|p|\|\nabla v\|_2$. Thus [F2]–[F4] apply and give a unique $\chi_p$ with $b(\chi_p,v)=F_p(v)$ for every $v$. Rearranging is exactly [F1]. [F5, F2, F4, F1, F3, A1, algebra]

2.1 Test the equation with $v=\chi_p$. Then $\lambda\|\nabla\chi_p\|_2^2\le\int_Ya|\nabla\chi_p|^2=-\int_Ya p\cdot\nabla\chi_p\le\Lambda|p|\|\nabla\chi_p\|_2$. If the gradient norm is zero the estimate is immediate; otherwise divide by it. The $L^2$ bound follows from [F2]. [F2, F5, step 1.1, algebra]

3.1 For $p,q\in\mathbb R^d$ and scalars $s,t$, the function $s\chi_p+t\chi_q$ satisfies the cell equation with datum $sp+tq$, by linearity of the integral in both $p$ and the corrector. Uniqueness in step 1.1 therefore gives $\chi_{sp+tq}=s\chi_p+t\chi_q$. [step 1.1, F1, algebra] ∎
