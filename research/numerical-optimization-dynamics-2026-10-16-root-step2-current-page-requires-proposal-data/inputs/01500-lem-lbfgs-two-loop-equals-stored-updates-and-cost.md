---
id: lem-lbfgs-two-loop-equals-stored-updates-and-cost
kind: lemma
title: "The L-Bfgs two-loop recursion equals the stored inverse updates and costs linear memory work"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-bfgs-curvature-pair-and-update-formulas
  - alg-lbfgs-two-loop-with-curvature-filter
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 §7.2, equation (7.19), Algorithm 7.4 and its cost paragraph, printed pp. 178–179 / PDF pp. 196–197."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§7, L-BFGS two-loop recursion and costs, printed pp. 25–26 / PDF pp. 26–27."
---

## Statement

Let $0\le r\le m$ stored pairs $(s_i,y_i)$, $i=1,\ldots,r$, be ordered oldest to newest, with $s_i^Ty_i>0$, and let $\rho_i=(s_i^Ty_i)^{-1}$. Start from $H_0=\gamma I$ with $\gamma>0$ and apply the inverse updates of [[def-bfgs-curvature-pair-and-update-formulas]] in that order, obtaining $H_r$. For every $g\in\mathbb R^n$, the two-loop recursion in [[alg-lbfgs-two-loop-with-curvature-filter]] returns $H_rg$ before changing its sign to form the search direction. The recursion uses $O(rn+n)$ scalar operations and stores $O(rn+n)$ real entries; when $m\ge1$ and $r\le m$, these are $O(mn)$.

## Facts & Assumptions

**Given:** The memory length, valid stored pairs, scale $\gamma$, and vector $g$ in the Statement.

[F1] [[alg-lbfgs-two-loop-with-curvature-filter]]: the reverse loop updates $q\leftarrow q-\alpha_i y_i$ with $\alpha_i=\rho_i s_i^Tq$, then the forward loop updates $r\leftarrow r+s_i(\alpha_i-\beta_i)$ with $\beta_i=\rho_i y_i^Tr$.

[F2] [[def-bfgs-curvature-pair-and-update-formulas]]: an inverse update is $H_i=V_i^TH_{i-1}V_i+\rho_i s_is_i^T$, where $V_i=I-\rho_i y_is_i^T$.

## Proof


**Given:** The memory length, valid stored pairs, scale $\gamma$, and vector $g$ in the Statement.

[F1] [[alg-lbfgs-two-loop-with-curvature-filter]]: the reverse loop updates $q\leftarrow q-\alpha_i y_i$ with $\alpha_i=\rho_i s_i^Tq$, then the forward loop updates $r\leftarrow r+s_i(\alpha_i-\beta_i)$ with $\beta_i=\rho_i y_i^Tr$.

[F2] [[def-bfgs-curvature-pair-and-update-formulas]]: an inverse update is $H_i=V_i^TH_{i-1}V_i+\rho_i s_is_i^T$, where $V_i=I-\rho_i y_is_i^T$.



1.1 Set $q_r:=g$. In the reverse loop, when pair $i$ is processed, the current vector is $q_i$ and $\alpha_i=\rho_i s_i^Tq_i$. Its update is therefore $q_{i-1}=q_i-\rho_i y_i(s_i^Tq_i)=V_iq_i$. [given, F1, F2, algebra]

2.1 Set $r_0:=H_0q_0$. In the forward loop, if $r_{i-1}$ is the current vector, then $$ r_i=r_{i-1}+s_i(\alpha_i-\rho_i y_i^Tr_{i-1}) =V_i^Tr_{i-1}+\rho_i s_i(s_i^Tq_i), $$ because $V_i^T=I-\rho_i s_i y_i^T$ and $\alpha_i=\rho_i s_i^Tq_i$. [step 1.1, F1, F2, algebra]

3.1 By induction on $i$, $r_i=H_iq_i$. It holds at $i=0$ by definition. If it holds at $i-1$, then $q_{i-1}=V_iq_i$ from step 1.1, so $$ H_iq_i=V_i^TH_{i-1}V_iq_i+\rho_i s_i(s_i^Tq_i) =V_i^Tr_{i-1}+\rho_i s_i(s_i^Tq_i)=r_i $$ by [F2] and step 2.1. At $i=r$, $q_r=g$, hence the output is $r_r=H_rg$. [F2, step 1.1, step 2.1, induction]

4.1 Each stored pair is read once in each loop. Each read uses a fixed number of length-$n$ dot products, scalar-vector products, and vector additions, so the operation count is at most a constant times $rn+n$. The stored pairs use $2rn$ coordinates; loop scalars use $O(r)$ entries and the working vectors use $O(n)$ entries. Therefore the counts are $O(rn+n)$, and are $O(mn)$ when $m\ge1$ and $r\le m$. [given, F1, algebra] ∎

