---
id: thm-second-strang-lemma-for-nonconforming-galerkin
kind: theorem
title: Second Strang estimate with a bounded extension to the comparison space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-variational-crime-error-framework, thm-lax-milgram, def-countable-choice]
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

Assume Countable Choice. Let $V$ be a real or complex Hilbert space, $a:V\times V\to\mathbb K$ a bounded coercive sesquilinear form (bilinear over $\mathbb R$), and $F$ a bounded functional with the test-linearity required by $a$. Let $V_h$ be a finite-dimensional Hilbert space with norm $\|\cdot\|_h$, not necessarily a subspace of $V$. Suppose the algebraic sum $X_h=V+V_h$ is equipped with a norm extending these norms, and $\widetilde a_h:X_h\times V_h\to\mathbb K$ is a bounded sesquilinear extension of a discrete form $a_h$ with bound $M_h$. Over $\mathbb C$, both forms are linear in the first argument and conjugate-linear in the second; over $\mathbb R$, they are bilinear. Assume $a_h$ is coercive on $V_h$ with constant $\alpha_h>0$, and let $F_h$ be bounded on $V_h$ with the matching test-linearity. The exact and discrete equations have unique solutions $u$ and $u_h$, and

$$\|u-u_h\|_h\le(1+M_h/\alpha_h)\inf_{v_h\in V_h}\|u-v_h\|_h+\delta_h^{\mathrm{nc}}(u)/\alpha_h,$$

where $\delta_h^{\mathrm{nc}}(u)=\sup_{w_h\in V_h\setminus\{0\}}|F_h(w_h)-\widetilde a_h(u,w_h)|/\|w_h\|_h$ when $V_h\ne\{0\}$, and $\delta_h^{\mathrm{nc}}(u):=0$ when $V_h=\{0\}$. The estimate requires the bounded extension and does not assert that every nonconforming, penalty, or discontinuous Galerkin form has one.

For a family of these problems, suppose $M_h\le\overline M<\infty$ and $\alpha_h\ge\underline\alpha>0$ uniformly. Writing $E_h=\inf_{v_h\in V_h}\|u-v_h\|_h$, the uniform bound is
$$\|u-u_h\|_h\le(1+\overline M/\underline\alpha)E_h+\delta_h^{\mathrm{nc}}(u)/\underline\alpha.$$
Thus uniform control of $E_h$ and $\delta_h^{\mathrm{nc}}(u)$ gives a uniform error budget; if both tend to zero, the errors tend to zero, and if both are $O(h^p)$ for a fixed $p>0$, the error is $O(h^p)$. No rate is inferred without those approximation, residual, and stability bounds.

## Facts & Assumptions

**Given:** Countable Choice; the exact Hilbert problem on $V$; the nonconforming space $V_h$ and common comparison norm on $X_h$; a bounded extension $\widetilde a_h$; discrete coercivity $\alpha_h>0$; and a bounded discrete load.

[F1] [[thm-lax-milgram]] under [[def-countable-choice]]: the exact bounded coercive Hilbert problem has a unique solution.

[F2] By hypothesis, $\widetilde a_h$ is sesquilinear with the stated slot conventions (bilinear over $\mathbb R$). By definition, $\widetilde a_h$ agrees with $a_h$ on $V_h\times V_h$ and $|\widetilde a_h(z,w_h)|\le M_h\|z\|_h\|w_h\|_h$ on $X_h\times V_h$ ([[def-variational-crime-error-framework]]).

[A1] $\operatorname{Re}a_h(v_h,v_h)\ge\alpha_h\|v_h\|_h^2$ for every $v_h\in V_h$.

[A2] $\delta_h^{\mathrm{nc}}(u)$ is the consistency residual at the exact solution, as defined in [[def-variational-crime-error-framework]].

## Proof

1.1 Apply [F1] on $V$ to obtain the unique exact solution $u$. [F1, given]

1.2 The finite-dimensional Hilbert problem on $V_h$ has bounded coercive form $a_h$ and bounded load $F_h$, so the same Lax–Milgram theorem [F1] gives a unique $u_h\in V_h$. [F1, A1, given]

2.1 Fix $v_h\in V_h$ and set $e_h:=u_h-v_h$. Then $e_h\in V_h$, and [A1] gives $\alpha_h\|e_h\|_h^2\le\operatorname{Re}a_h(e_h,e_h)=\operatorname{Re}(F_h(e_h)-\widetilde a_h(v_h,e_h))$. [A1, step 1.2, choose]

3.1 By the discrete equation and extension identity, $a_h(e_h,e_h)=\widetilde a_h(u-v_h,e_h)+F_h(e_h)-\widetilde a_h(u,e_h)$. The extension bound [F2] and residual definition [A2] therefore give $\alpha_h\|e_h\|_h^2\le(M_h\|u-v_h\|_h+\delta_h^{\mathrm{nc}}(u))\|e_h\|_h$. [F2, A1, A2, step 2.1, algebra]

4.1 If $e_h=0$ there is nothing to divide by; otherwise divide step 3.1 by $\alpha_h\|e_h\|_h$. The triangle inequality gives $\|u-u_h\|_h\le(1+M_h/\alpha_h)\|u-v_h\|_h+\delta_h^{\mathrm{nc}}(u)/\alpha_h$. Taking the infimum over $v_h$ proves the per-mesh bound. For the stated family, replace $M_h/\alpha_h$ by $\overline M/\underline\alpha$ and $1/\alpha_h$ by $1/\underline\alpha$. The resulting constants are independent of $h$, yielding the stated uniform, convergence and rate consequences when the two explicit error terms have the corresponding control. [step 3.1, given, algebra] ∎
