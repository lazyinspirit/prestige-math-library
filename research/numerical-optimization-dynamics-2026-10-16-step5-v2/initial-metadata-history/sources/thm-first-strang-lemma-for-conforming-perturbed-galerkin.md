---
id: thm-first-strang-lemma-for-conforming-perturbed-galerkin
kind: theorem
title: First Strang estimate for conforming perturbed Galerkin problems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-variational-crime-error-framework, def-bounded-coercive-and-symmetric-sesquilinear-forms, thm-lax-milgram, cor-finite-dimensional-subspaces-are-closed, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Statement

Assume Countable Choice. Let $V$ be a real or complex Hilbert space, $a:V\times V\to\mathbb K$ a bounded coercive form with boundedness constant $M$ and coercivity constant $\alpha>0$, and $F:V\to\mathbb K$ a bounded functional linear in the real case and conjugate-linear in the complex test argument. Let $V_h\subseteq V$ be finite-dimensional, and let $a_h:V_h\times V_h\to\mathbb K$ and $F_h:V_h\to\mathbb K$ be bounded, with $F_h$ having the same test-linearity as $F$, and $a_h$ coercive with constant $\alpha_h>0$ in the inherited norm. Both $a$ and $a_h$ are sesquilinear (bilinear over $\mathbb R$), linear in their first argument and conjugate-linear in their second over $\mathbb C$. There are unique exact and discrete solutions $u$ and $u_h$, and

$$\|u-u_h\|_V\le\inf_{v_h\in V_h}\left((1+M/\alpha_h)\|u-v_h\|_V+\frac{\delta_{a,h}(v_h)+\delta_{F,h}}{\alpha_h}\right),$$

where the defects are those of [[def-variational-crime-error-framework]]. For a family of meshes this is a uniform estimate whenever $\inf_h\alpha_h>0$ and the displayed approximation and defect terms are uniformly controlled. The term $\delta_{F,h}$ retains source approximation and data oscillation.

## Facts & Assumptions

**Given:** Countable Choice; $V,a,F,V_h,a_h,F_h$ with the Hilbert, boundedness, coercivity, and finite-dimensional hypotheses of the Statement.

[F1] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: $|a(v,w)|\le M\|v\|_V\|w\|_V$ and $\operatorname{Re}a(v,v)\ge\alpha\|v\|_V^2$; the real bilinear case does not require symmetry.

[F2] [[thm-lax-milgram]] under [[def-countable-choice]]: a bounded coercive form on a Hilbert space with a bounded functional has a unique solution to its variational equation.

[F3] [[cor-finite-dimensional-subspaces-are-closed]]: a finite-dimensional subspace of a normed space is closed; therefore $V_h$ with the inherited inner product is a Hilbert space.

[F4] [[def-variational-crime-error-framework]]: $\delta_{a,h}(v_h)$ and $\delta_{F,h}$ are the indicated suprema of the form and load defects against nonzero tests in $V_h$.

[A1] $a_h$ is sesquilinear (bilinear over $\mathbb R$), with the stated first- and second-argument conventions; it is bounded and $\operatorname{Re}a_h(v_h,v_h)\ge\alpha_h\|v_h\|_V^2$ on $V_h$; $F_h$ is bounded.

## Proof

1.1 The hypotheses on $V,a,F$ are exactly those of [F2], so [F2] gives a unique $u\in V$ satisfying $a(u,v)=F(v)$ for every $v\in V$. [F1, F2, given]

1.2 By [F3], $V_h$ is closed in $V$, hence complete in its inherited Hilbert norm. The restriction of $a_h$ is bounded and coercive by [A1], and $F_h$ is bounded; applying [F2] on $V_h$ gives a unique $u_h\in V_h$ with $a_h(u_h,w_h)=F_h(w_h)$ for every $w_h\in V_h$. [F2, F3, A1, given]

2.1 Fix any $v_h\in V_h$ and put $e_h:=u_h-v_h$. Discrete coercivity and the discrete equation give $\alpha_h\|e_h\|_V^2\le\operatorname{Re}a_h(e_h,e_h)=\operatorname{Re}(F_h(e_h)-a_h(v_h,e_h))$. [A1, step 1.2, choose]

3.1 Since $e_h\in V_h\subseteq V$, the exact equation gives $F(e_h)=a(u,e_h)$, and $F_h(e_h)-a_h(v_h,e_h)=[F_h(e_h)-F(e_h)]+a(u-v_h,e_h)+[a(v_h,e_h)-a_h(v_h,e_h)]$. The boundedness of $a$ [F1] and the defect definitions [F4] therefore imply $\alpha_h\|e_h\|_V^2\le\left(\delta_{F,h}+M\|u-v_h\|_V+\delta_{a,h}(v_h)\right)\|e_h\|_V$. [F1, F4, given, step 2.1, algebra]

4.1 If $e_h=0$ the comparison is immediate; otherwise divide step 3.1 by $\alpha_h\|e_h\|_V$ and use $\|u-u_h\|_V\le\|u-v_h\|_V+\|e_h\|_V$. This proves the displayed bound for each $v_h$, and taking the infimum proves the theorem. [step 3.1, algebra] ∎
