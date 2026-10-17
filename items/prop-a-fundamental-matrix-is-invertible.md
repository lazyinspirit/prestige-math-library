---
id: prop-a-fundamental-matrix-is-invertible
kind: proposition
title: "A fundamental matrix is invertible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-variational-equation-along-an-ode-solution,
       lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
       thm-algebra-of-derivatives,
       thm-invertible-matrix-theorem,
       cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-published-matrix-ODE-current/fundamental-application/repair.json
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Lemma 10.6"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $A:I\to M_n(\mathbb R)$ solve the variational equation

$$A'(t)=C(t)A(t),\qquad A(t_0)=I_n,$$

on an interval $I$, where $C:I\to M_n(\mathbb R)$ is continuous. Then every
matrix $A(t)$ is invertible. Equivalently, a fundamental matrix of the
variational equation is invertible at every time on its interval of definition.

## Facts & Assumptions

**Given:** A continuous matrix field $C:I\to M_n(\mathbb R)$ and a solution $A:I\to M_n(\mathbb R)$ of $A'=CA$, $A(t_0)=I_n$.

[F1] The variational equation is exactly a linear matrix ODE with initial matrix $I_n$ ([[def-variational-equation-along-an-ode-solution]]).

[L1] Linear matrix ODEs on a compact interval have unique solutions ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L2] One-variable derivatives obey the product rule entrywise ([[thm-algebra-of-derivatives]]).

[L3] A finite square matrix is invertible if and only if its nullspace is zero; this includes the empty matrix ([[thm-invertible-matrix-theorem]]).

[L4] A real function continuous on an interval and differentiable with zero derivative at every interior point is constant on the whole interval, including its endpoints ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, every $A(t)$ is the unique empty matrix $I_0$, already invertible; for the remainder assume $n\ge1$. Fix a compact nondegenerate subinterval $[u,v]\subseteq I$ containing $t_0$. Applying [L1] to the transposed equation $(B^T)'=-C^TB^T$, $B(t_0)^T=I_n$, gives a unique solution $B$ on $[u,v]$ of $$B'(t)=-B(t)C(t),\qquad B(t_0)=I_n.$$ [F1, L1, given, construct]

2.1 Entrywise product differentiation from [L2] gives $$\frac{d}{dt}\bigl(B(t)A(t)\bigr)=B'(t)A(t)+B(t)A'(t)=-B(t)C(t)A(t)+B(t)C(t)A(t)=0.$$ Each entry of $B(t)A(t)$ is continuous on $[u,v]$ and has derivative zero in its interior, so [L4] makes every entry constant on $[u,v]$. At $t=t_0$ this constant is $I_nI_n=I_n$, so $B(t)A(t)=I_n$ for all $t\in[u,v]$. [given, L2, L4, step 1.1]

3.1 Fix $t\in[u,v]$. Step 2.1 gives $B(t)A(t)=I_n$, so $A(t)x=0$ implies $x=B(t)A(t)x=0$. By [L3], the square matrix $A(t)$ has a two-sided inverse $D$. Then $B(t)=B(t)(A(t)D)=(B(t)A(t))D=D$, and therefore $A(t)B(t)=I_n$ and $B(t)=A(t)^{-1}$. Thus $A(t)$ is invertible on $[u,v]$. For any $t\in I$ different from $t_0$, choose the compact nondegenerate segment between $t$ and $t_0$ in $I$; at $t=t_0$, $A(t_0)=I_n$ is already invertible. Hence every $A(t)$ is invertible on $I$. [given, L3, step 1.1, step 2.1, algebra] ∎
