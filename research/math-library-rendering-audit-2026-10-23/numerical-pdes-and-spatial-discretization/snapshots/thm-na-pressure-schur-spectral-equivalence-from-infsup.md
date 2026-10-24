---
id: thm-na-pressure-schur-spectral-equivalence-from-infsup
kind: theorem
title: "Pressure Schur equivalence from inf-sup, continuity, and stiffness scaling"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - def-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of
        saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§§3.1–3.2 and §10.1.3, printed pp. 14–17 and 70–71: Schur positivity,
        inf-sup dependence, and steady Stokes pressure-mass equivalence."
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§8, printed pp. 6030–6032: the role of the discrete inf-sup condition
        in pressure-correction analysis."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $V,Q$ be finite-dimensional real inner-product spaces with norms
$\|\cdot\|_V,\|\cdot\|_Q$. Let $a(v,w)=v^TAw$ be symmetric positive
definite, and let $b(v,q)=q^TBv$ be a bilinear constraint form, represented
by the matrices in
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]]. Suppose
that, for constants $\alpha,\Lambda,C_b,\beta>0$,
$$ \alpha\|v\|_V^2\le a(v,v)\le\Lambda\|v\|_V^2, \quad |b(v,q)|\le C_b\|v\|_V\|q\|_Q, \quad \sup_{v\ne0}\frac{|b(v,q)|}{\|v\|_V}\ge\beta\|q\|_Q. $$
If $M_Q$ is the pressure mass matrix for $\|\cdot\|_Q$, then the positive
Schur matrix $S=BA^{-1}B^T$ satisfies, for every $q\in Q$,
$$ \frac{\beta^2}{\Lambda}q^TM_Qq \le q^TSq \le\frac{C_b^2}{\alpha}q^TM_Qq. $$
Thus pressure-mass Schur equivalence is conditional on the actual inf-sup,
continuity, and velocity stiffness scalings shown here.

## Facts & Assumptions

**Given:** Finite-dimensional real spaces $V,Q$, an SPD velocity matrix $A$,
a constraint matrix $B$, a pressure mass matrix $M_Q$, and the positive
constants in the statement.

[F1] The saddle matrix, its velocity and constraint blocks, and the pressure
Schur matrix $S=BA^{-1}B^T$ use the conventions of
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]].

[F2] The positive-definite bilinear form $a$ is an inner product with norm
$\|v\|_A=\sqrt{a(v,v)}$ ([[def-inner-product-space]]).

[F3] Cauchy–Schwarz holds in the inner product $a$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof
1.1 Fix $q\in Q$ and put $w=A^{-1}B^Tq$. By [F1] and symmetry of $A$, $$ b(v,q)=q^TBv=v^TB^Tq=v^TAw=a(v,w) $$ for every $v\in V$. By [F3], $|a(v,w)|\le\|v\|_A\|w\|_A$. If $w\ne0$, equality is attained at $v=w$; if $w=0$, both sides are zero. Hence $$ \sup_{v\ne0}\frac{|b(v,q)|}{\sqrt{a(v,v)}} =\sqrt{a(w,w)}=\sqrt{q^TBA^{-1}B^Tq}. $$ [F1, F2, F3, algebra]

2.1 The upper energy inequality in the statement implies $\sqrt{a(v,v)}\le\sqrt\Lambda\|v\|_V$, so the supremum in step 1.1 is at least $\beta\|q\|_Q/\sqrt\Lambda$. The lower energy inequality implies $\sqrt{a(v,v)}\ge\sqrt\alpha\|v\|_V$; continuity of $b$ therefore makes that supremum at most $C_b\|q\|_Q/\sqrt\alpha$. Squaring these inequalities and using step 1.1 proves both displayed Schur bounds. [given, step 1.1, algebra]

3.1 For nonzero $q$, the lower bound in step 2.1 is positive because $\beta>0$ and $M_Q$ is positive definite. Thus $S$ is positive definite, and the two quadratic-form inequalities are the stated pressure-mass spectral equivalence. [F1, given, step 2.1, algebra] ∎