---
id: thm-fundamental-theorem-for-nonautonomous-smooth-odes
kind: theorem
title: "The fundamental theorem for nonautonomous smooth ODEs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-autonomous-smooth-odes,
       thm-smooth-dependence-of-ode-solutions-on-parameters]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.3"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R\times\mathbb R^n$ be open and let
$F:D\to\mathbb R^n$ be smooth. For every base point $(t_0,x_0)\in D$ there are
$h>0$ and an open neighbourhood $W$ of $(t_0,x_0)$ such that each initial pair
$(s,y)\in W$ has a unique solution on $[s-h,s+h]$, and the resulting local
solution map is smooth in the initial time and initial state.

## Facts & Assumptions

**Given:** A smooth nonautonomous field $F(t,x)$ and a base point $(t_0,x_0)\in D$.

[L1] Autonomous smooth ODEs have unique local smooth flows ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[L2] Smooth parameter-dependent ODEs have solutions depending smoothly on the parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

## Proof

**Proof technique:** direct.

1.1 Introduce an extra variable $s$ and consider the autonomous system below on $\mathbb R\times\mathbb R^n$. [L1]

$$s'(t)=1,\qquad x'(t)=F(s(t),x(t)).$$

Its right-hand side is smooth. By [L1], this augmented autonomous system has a unique local smooth flow.

2.1 The first equation forces $s(t)=s_0+t$ when $s(0)=s_0$, so the second equation becomes exactly the original nonautonomous system with initial time $s_0$. Reading the initial value $(s_0,x_0)$ as a parameter, [L2] makes the resulting solution map smooth in $(s_0,x_0)$. This is precisely the claimed local theorem for nonautonomous smooth ODEs. [L2, step 1.1] ∎
