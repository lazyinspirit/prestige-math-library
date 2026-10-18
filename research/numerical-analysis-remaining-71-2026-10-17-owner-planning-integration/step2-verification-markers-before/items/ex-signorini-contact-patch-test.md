---
id: ex-signorini-contact-patch-test
kind: example
title: "An affine shear field passes the frictionless contact patch test"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-signorini-elasticity-contact-model, def-signorini-contact-variational-inequality, def-signorini-nodal-p1-contact-scheme, lem-signorini-nodal-contact-set-conforming, lem-signorini-elasticity-form-bounded, lem-signorini-partial-dirichlet-korn-coercivity, thm-signorini-continuous-contact-vi-wellposed, thm-stampacchia-variational-inequality, def-countable-choice, def-axiom-of-choice, def-broken-and-conforming-polynomial-spaces, cor-finite-dimensional-normed-spaces-are-banach]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.1–53.2, printed pp. 391–394: linear strain energy and partial Dirichlet displacement spaces."
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete 80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 20–25: elasticity energy and mixed boundary coercivity."
---

## Statement

On the unit square with $\Gamma_D=\{0\}\times[1/4,3/4]$, $\Gamma_C=\{1\}\times[1/4,3/4]$, and $n=(1,0)$, use any matching boundary-conforming affine triangular mesh that resolves both segments as unions of boundary edges, and take obstacle $\psi=0$. Let $u(x,y)=(0,x)$ and define the load $F(v)=a(u,v)$ on $V$. Then $u$ is the unique continuous solution and, on every such mesh, the same field is the unique nodal P1 solution. Its contact gap is identically zero.

## Facts & Assumptions

**Given:** The elasticity and Signorini conventions of [[def-signorini-elasticity-contact-model]] and [[def-signorini-contact-variational-inequality]], with the square and boundary segments above.

[A1] Countable Choice is used by the imported continuous and discrete Stampacchia theorems. ([[def-countable-choice]])

[A2] The Axiom of Choice is inherited by the trace and partial-boundary Korn interfaces in the continuous well-posedness theorem. ([[def-axiom-of-choice]], [[thm-signorini-continuous-contact-vi-wellposed]])

[F1] $V$ consists of $H^1$ vector fields with zero Dirichlet trace, and $a$ is the isotropic symmetric-strain elasticity form. ([[def-signorini-elasticity-contact-model]])

[F2] The feasible set is $K=\{v\in V:T_Cv\cdot n\ge\psi\}$ and the nodal scheme defines finite-dimensional $V_h$ and a nonempty closed convex set $K_h\subseteq K$. ([[def-signorini-contact-variational-inequality]], [[def-signorini-nodal-p1-contact-scheme]], [[def-broken-and-conforming-polynomial-spaces]], [[cor-finite-dimensional-normed-spaces-are-banach]], [[lem-signorini-nodal-contact-set-conforming]])

[F3] The elasticity form is bounded by $M$ and coercive by $\alpha>0$ on $V$. ([[lem-signorini-elasticity-form-bounded]], [[lem-signorini-partial-dirichlet-korn-coercivity]])

[F4] The continuous VI has a unique solution. ([[thm-signorini-continuous-contact-vi-wellposed]])

[F5] On a Hilbert space, a nonempty closed convex set and bounded coercive form yield a unique VI solution under Countable Choice. ([[thm-stampacchia-variational-inequality]])

## Proof

1.1 The affine field $u$ lies in $H^1(\Omega;\mathbb R^2)$ and vanishes on the left side, so $u\in V$. On the right side $u\cdot n=0=\psi$, hence $u\in K$ and has zero gap. Every affine function restricts to a continuous piecewise-affine function on the given matching mesh, so $u\in V_h$; its contact nodal inequalities hold with equality, so $u\in K_h$. [F1, F2, given, algebra]

2.1 The gradient is $\nabla u=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, so $\operatorname{div}u=0$ and $\varepsilon(u)=\begin{pmatrix}0&1/2\\1/2&0\end{pmatrix}$. By [F3], $F(v)=a(u,v)$ is bounded. For every $v\in K$, $a(u,v-u)-F(v-u)=0$, so $u$ solves the continuous VI; uniqueness follows from [F4]. For every $v_h\in K_h\subseteq K$, the same identity holds, so $u$ solves the discrete VI. The inherited $H^1$ inner product makes finite-dimensional $V_h$ a Hilbert space by [F2]; the restricted form is bounded and coercive by [F3], and [F5] gives uniqueness. [A1, A2, F2, F3, F4, F5, step 1.1, algebra] ∎
