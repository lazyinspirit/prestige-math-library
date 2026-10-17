---
id: alg-revised-simplex-phase-one
kind: algorithm
title: "Phase I revised simplex and rank reduction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
  - alg-revised-primal-simplex-bland-rule
  - thm-revised-simplex-bland-rule-finite-termination
justified_by: []
aliases: []
verification:
  precheck: n/a
dependency_level: 5
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.5"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.5"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Definition

Input any exact equality system $Ax=b$ with $x\ge0$, including a rank-deficient raw system. Let $D$ be diagonal with $D_{ii}=-1$ when $b_i<0$ and $D_{ii}=1$ otherwise; set $\widetilde A=DA$ and $\widetilde b=Db\ge0$. Add artificial variables $u\in\mathbb R^m$ and solve the Phase I problem $\min\mathbf1^{\mathsf T}u$ subject to $\widetilde A x+u=\widetilde b$, $x,u\ge0$, starting at $x=0,u=\widetilde b$ with artificial basis $I_m$. Use the exact primal algorithm of [[alg-revised-primal-simplex-bland-rule]] and its finite-termination result [[thm-revised-simplex-bland-rule-finite-termination]].

At a terminal optimum, if $\mathbf1^{\mathsf T}u>0$, return `infeasible` and the basis multiplier $y$ for the Phase I objective. If the optimum is zero, set every artificial variable to zero and remove artificial basic variables as follows. For a zero-valued artificial basic variable, inspect its row in $B^{-1}\widetilde A$. If some original nonbasic column has a nonzero coefficient there, pivot the least-index such column into the basis; the pivot may have either sign because the leaving basic value is zero. If no such coefficient exists, and the transformed right-hand-side entry is zero, delete that redundant equation and its zero artificial basic variable. Repeat until all remaining basic columns are original; return the row-reduced equivalent system and its original feasible basis. A zero row with nonzero transformed right-hand side returns `inconsistent-row`. All tests are exact; a finite-precision near-zero objective is not treated as zero.
