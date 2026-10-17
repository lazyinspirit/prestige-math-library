---
id: thm-revised-simplex-phase-one-extraction-and-farkas
kind: theorem
title: "Phase I feasible-basis extraction and infeasibility certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
  - alg-revised-simplex-phase-one
  - thm-revised-simplex-bland-rule-finite-termination
  - thm-farkas-alternative-for-finite-linear-systems
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 6
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.5"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.5"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

For any exact system $Ax=b$, $x\ge0$, the Phase I procedure of [[alg-revised-simplex-phase-one]] terminates. Its minimum artificial-variable sum is zero if and only if the original system is feasible. If the minimum is positive, its returned vector yields a Farkas infeasibility certificate, as defined in [[def-revised-simplex-standard-form-linear-program]], with $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$. If the minimum is zero, the extraction procedure returns an equivalent full-row-rank reduced system with a basic feasible solution using only original columns; zero-valued artificial basic variables are either pivoted out or their redundant equations are removed.

## Facts & Assumptions

**Given:** Finite exact matrices and vectors $A,b$, with nonnegative original variables.

[F1] [[alg-revised-simplex-phase-one]]: Phase I row-signs the equations, uses $[DA\ I]$ with initial $x=0,u=Db$, minimizes $\mathbf1^{\mathsf T}u$, and extracts zero artificial basics by pivots or zero-row deletion.

[F2] [[thm-revised-simplex-bland-rule-finite-termination]]: Under its exact-arithmetic, finite-standard-form, full-row-rank hypotheses, the primal run terminates at an optimal basis or returns a strictly negative-cost feasible ray.

[F3] [[def-revised-simplex-basis-dictionary]]: The basis multiplier is $y(B)=A_B^{-\mathsf T}c_B$.

[F4] [[def-revised-simplex-standard-form-linear-program]]: A vector $q\in\mathbb R^m$ satisfying $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$ is called a **Farkas infeasibility certificate** for this sign convention.

[F5] [[thm-farkas-alternative-for-finite-linear-systems]]: Exactly one of $x\ge0,Ax=b$ and existence of $q$ with $A^{\mathsf T}q\ge0,b^{\mathsf T}q<0$ holds for every finite real $A,b$.

## Proof


1.1 Let $D_{ii}=-1$ when $b_i<0$ and $D_{ii}=1$ otherwise. Since $D$ is invertible and $D^{-1}=D$, $Ax=b$ is equivalent to $DAx=Db$, and $Db\ge0$. The augmented matrix $[DA\ I]$ has full row rank because it contains the identity columns; $x=0,u=Db$ is feasible for the Phase I problem and has objective $\mathbf1^{\mathsf T}Db\ge0$. [given, F1, algebra]

1.2 By [F2] the Phase I primal algorithm terminates at an optimum or an unbounded ray. Its objective is $\sum_i u_i\ge0$ at every feasible point, so a negative-cost ray is impossible; it terminates at a minimum with nonnegative reduced costs. [F1, F2, algebra]

2.1 Suppose the minimum $w^*>0$. Any feasible original $x$ would give a Phase I feasible point $(x,u=0)$ of objective zero, contradicting minimality. Let $y$ be the terminal basis multiplier for the Phase I objective $(0,\mathbf1)$. Nonnegative reduced costs on the original columns, using [F3], give $(DA)^{\mathsf T}y\le0$, and the basic-vector identity gives $(Db)^{\mathsf T}y=w^*>0$. [F1, F2, F3, step 1.2, algebra]

2.2 Suppose instead that $w^*=0$. Since every artificial variable is nonnegative and their sum is zero, each artificial variable has value zero, and the original coordinates satisfy $DAx=Db$. If an artificial variable is basic at tableau row $k$ and some original nonbasic column has a nonzero coefficient in row $k$ of $B^{-1}DA$, pivot that column in. The pivot is nonzero, and the entering variable and leaving artificial variable both have value zero, so the represented feasible point is unchanged and one artificial basic variable is removed. [F1, step 1.2, algebra]

3.1 Set $q=-D^{\mathsf T}y$. Then $A^{\mathsf T}q=-(DA)^{\mathsf T}y\ge0$ and $b^{\mathsf T}q=-(Db)^{\mathsf T}y<0$, so [F4] identifies it as a Farkas certificate. The finite-system alternative [F5] says exactly one of feasibility and such a certificate holds; because this $q$ satisfies the certificate branch, the original system is infeasible. [F4, step 2.1, algebra]

3.2 If no original nonbasic column has a nonzero coefficient in row $k$, every original basic column has a unit column there at a different row, so the entire row $k$ of $B^{-1}DA$ is zero. Every nonbasic artificial variable is zero, every other basic artificial column has zero in row $k$, and the basic artificial value at row $k$ is zero; hence row $k$ of $B^{-1}Db$ is also zero. The transformed equation is $0=0$ and may be deleted without changing the feasible set; deleting that row and its artificial basis column leaves an invertible identity submatrix for the remaining basis. [F1, step 2.2, algebra]

4.1 Each pivot or row deletion removes one artificial basic variable, so after at most $m$ such operations no artificial variable remains basic. The remaining basis consists of original columns and is invertible for the retained row-reduced system; its basic vector is feasible because the represented point never changed. The retained equations are equivalent to the original system by the invertible row operations and deletion only of $0=0$ rows. This proves the zero-optimum extraction claim, including redundant-row removal. [F1, step 2.2, step 3.2, construct] ∎
