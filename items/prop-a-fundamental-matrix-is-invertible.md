---
id: prop-a-fundamental-matrix-is-invertible
kind: proposition
title: "A fundamental matrix is invertible"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-variational-equation-along-an-ode-solution,
       lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
       thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

## Proof

**Proof technique:** direct.

1.1 Fix a compact subinterval $[u,v]\subseteq I$ containing $t_0$. By [F1] and [L1] the matrix ODE below has a unique solution. [F1, L1, choose]

$$B'(t)=-B(t)C(t),\qquad B(t_0)=I_n,$$

has a unique solution $B:[u,v]\to M_n(\mathbb R)$.

2.1 Entrywise product differentiation from [L2] gives the identity below. [given, L2, step 1.1]

$$\frac{d}{dt}\bigl(B(t)A(t)\bigr) =B'(t)A(t)+B(t)A'(t) =-B(t)C(t)A(t)+B(t)C(t)A(t)=0.$$

Thus $B(t)A(t)$ is constant on $[u,v]$. At $t=t_0$ this constant is $I_nI_n=I_n$, so $B(t)A(t)=I_n$ for all $t\in[u,v]$.

3.1 The same calculation applied to $A(t)B(t)$ gives $\frac{d}{dt}(A(t)B(t))=0$ and $A(t_0)B(t_0)=I_n$, hence $A(t)B(t)=I_n$ on $[u,v]$. Therefore $B(t)=A(t)^{-1}$ and $A(t)$ is invertible on $[u,v]$. Since $t\in I$ was arbitrary and lies in some compact subinterval containing $t_0$, every $A(t)$ is invertible on $I$. [given, L2, step 1.1, step 2.1] ∎
