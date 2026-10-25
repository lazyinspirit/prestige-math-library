---
id: thm-na-discrete-helmholtz-projection-and-pressure-schur
kind: theorem
title: "Discrete Helmholtz projection and pressure Schur identities"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    "def-na-mini-element-p1-bubble-p1-spaces",
    "def-na-discrete-weak-and-exact-divergence-free-spaces",
    "thm-na-mini-element-fortin-stability",
    "lem-na-zero-mean-of-zero-boundary-divergence",
    "def-countable-choice",
    "lem-l-two-with-the-integral-pairing-is-a-hilbert-space",
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "lem-na-homogeneous-dirichlet-korn-identity"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation
        and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2,
        8.5.5, 8.6.1, 8.7.1 and 8.10."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $V_h,Q_h$ be the stable mini-element spaces on a bounded connected Lipschitz polyhedral domain with a conforming mesh, with viscosity $\nu>0$, and let $Z_h=\{v_h:b(v_h,q_h)=0\ \forall q_h\in Q_h\}$. Choose bases of $V_h,Q_h$, let $M$ be the velocity mass matrix, $A$ the Stokes stiffness matrix, and $B$ the constraint matrix with entries $B_{\ell j}=b(\phi_j,\chi_\ell)$. The mass-orthogonal projector onto $Z_h$ is
$$P_M=I-M^{-1}B^T(BM^{-1}B^T)^{-1}B.$$
On the mean-zero pressure coordinates, both the mass pressure Schur matrix $BM^{-1}B^T$ and stiffness pressure Schur matrix $BA^{-1}B^T$ are positive definite. Before imposing the pressure gauge on the full continuous P1 space, the constant pressure is exactly the one-dimensional nullspace of $B^T$.

## Facts & Assumptions

**Given:** Countable Choice; the bounded connected Lipschitz polyhedral mesh, the Stokes bilinear forms and pressure gauge, and the uniform discrete inf-sup bound.

[A1] Countable Choice is inherited through the mini-element and Fortin inputs. ([[def-countable-choice]])

[F1] The discrete weak kernel is the nullspace of the mini constraint pairing; the mini Fortin theorem gives $\beta_h>0$. ([[def-na-discrete-weak-and-exact-divergence-free-spaces]], [[thm-na-mini-element-fortin-stability]])

[F2] The zero-boundary divergence has zero integral, so constants pair to zero against all velocity fields; the pressure space is gauged by zero mean. ([[lem-na-zero-mean-of-zero-boundary-divergence]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F3] The homogeneous Korn identity makes the Stokes stiffness form positive definite on $V_h$ for $\nu>0$. ([[lem-na-homogeneous-dirichlet-korn-identity]])

## Proof

1.1 The mass matrix $M$ is symmetric positive definite because for a nonzero coefficient vector $x$, $x^TMx=\|v_h(x)\|_{L^2}^2>0$. The inf-sup condition in [F1] says that $B^Ty=0$ for a mean-zero pressure coefficient vector $y$ implies $y=0$; hence $B$ has full row rank on the gauged pressure coordinates. [A1, F1, given]

2.1 Therefore $S_M:=BM^{-1}B^T$ is symmetric positive definite: for $y\ne0$, $y^TS_My=(B^Ty)^TM^{-1}(B^Ty)>0$. The formula for $P_M$ is defined. Direct multiplication gives $BP_M=B-BM^{-1}B^TS_M^{-1}B=0$, and if $Bx=0$ then $P_Mx=x$. Thus its range is exactly $\ker B$. [algebra, step 1.1]

3.1 For every $x$, $x-P_Mx=M^{-1}B^TS_M^{-1}Bx$. If $z\in\ker B$, then $z^TM(x-P_Mx)=(Bz)^TS_M^{-1}Bx=0$. Hence $x-P_Mx$ is mass-orthogonal to the kernel and $P_M$ is the mass-orthogonal projector. [algebra, step 2.1]

3.2 By [F3], $A$ is symmetric positive definite. Full row rank of $B$ from step 2.1 then makes $S_A:=BA^{-1}B^T$ positive definite by the same quadratic-form argument as in step 2.1. Eliminating velocity from $Au+B^Tp=f$, $Bu=g$ gives $S_Ap=BA^{-1}f-g$, which is the pressure Schur identity. [A1, F3, algebra, step 2.1]

4.1 If pressure coordinates are instead taken in the full continuous P1 space, [F2] puts constants in $\ker B^T$. Conversely, if $B^Ty=0$, the corresponding $q_h\in S^1_h$ pairs to zero with every velocity. Its mean-zero part $q_h-|D|^{-1}\int_Dq_h$ also pairs to zero by [F2]; the stable inf-sup in [F1] forces that part to vanish. Thus the nullspace consists exactly of constants, and restricting to $Q_h=L^2_0\cap S^1_h$ removes that gauge mode. [A1, F1, F2, algebra, step 1.1] ∎
