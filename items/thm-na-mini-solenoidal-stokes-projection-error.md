---
id: thm-na-mini-solenoidal-stokes-projection-error
kind: theorem
title: "Approximation by the MINI solenoidal energy projection"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  [
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    def-na-discrete-weak-and-exact-divergence-free-spaces,
    thm-na-mini-element-h1-pressure-error,
    thm-na-mini-element-fortin-stability,
    thm-na-mixed-galerkin-quasioptimality,
    lem-na-scott-zhang-boundary-preserving-p1-interpolant,
    lem-na-homogeneous-dirichlet-korn-identity,
    thm-riesz-representation-for-hilbert-space,
    def-countable-choice
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
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, Stokes variational form; Chapter 54, MINI stability"
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, MINI element approximation"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the MINI mesh hypotheses. For $z\in V_\sigma$, define $S_hz\in Z_h$ by
$$a_\nu(S_hz,w_h)=a_\nu(z,w_h)\qquad(w_h\in Z_h).$$
This defines a unique linear map, the restriction to $V_\sigma$ of the $a_\nu$-orthogonal projection $V\to Z_h$, and
$$\|z-S_hz\|_V\le\sqrt2\inf_{w_h\in Z_h}\|z-w_h\|_V.$$
If additionally $z\in H^2(D)^d$ and $q\in H^1(D)\cap L^2_0(D)$, then
$$\|z-S_hz\|_V\le C_0(1+\nu^{-1})h\bigl(\|z\|_{H^2(D)}+\|q\|_{H^1(D)}\bigr),$$
where $C_0$ is independent of $h$ and $\nu$ and depends on $D$, shape regularity and the uniform MINI inf-sup constant.

## Facts & Assumptions

**Given:** A bounded connected Lipschitz polyhedral domain, its shape-regular MINI mesh, $z\in V_\sigma$, and viscosity $\nu>0$.

[F1] $Z_h$ is a finite-dimensional subspace of $V$ and $a_\nu$ is symmetric; Korn and $|\varepsilon(w)|\le|\nabla w|$ give $\nu\|w\|_V^2\le a_\nu(w,w)\le2\nu\|w\|_V^2$. ([[def-na-discrete-weak-and-exact-divergence-free-spaces]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F2] Every bounded linear functional on a real Hilbert space has a unique Riesz representative. ([[thm-riesz-representation-for-hilbert-space]])

[F3] For a continuous Stokes pair in $H^2(D)^d\times(H^1(D)\cap L^2_0(D))$, the MINI inf-sup and mixed Galerkin results apply, with discrete velocity in $Z_h$; the Scott--Zhang interpolant has the stated $H^1$ and pressure approximation bounds. ([[thm-na-mini-element-fortin-stability]], [[thm-na-mixed-galerkin-quasioptimality]], [[thm-na-mini-element-h1-pressure-error]], [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[A1] Countable Choice is assumed as in the Stokes approximation and Hilbert representation inputs. ([[def-countable-choice]], [[thm-na-mini-element-h1-pressure-error]])

## Proof
1.1 For any $z\in V$, equip $Z_h$ with the inner product $a_\nu$. It is positive definite by [F1]. The functional $w_h\mapsto a_\nu(z,w_h)$ is bounded on this finite-dimensional Hilbert space, so [F2] gives a unique $S_hz\in Z_h$ satisfying the displayed equation. Linearity follows from uniqueness and linearity of the right-hand side. For $z\in Z_h$ the equation gives $S_hz=z$, so this extension to $V$ is a projection. For any $w_h\in Z_h$, orthogonality gives $a_\nu(z-w_h,z-w_h)=a_\nu(z-S_hz,z-S_hz)+a_\nu(S_hz-w_h,S_hz-w_h).$ Using $\nu\|r\|_V^2\le a_\nu(r,r)\le2\nu\|r\|_V^2$ yields the stated best-approximation bound. [A1, F1, F2, given, algebra]

2.1 Let $F(v)=a_\nu(z,v)+b(v,q)$ for $v\in V$. It is bounded on $V$, and $b(z,r)=0$ for every $r\in Q$ because $z\in V_\sigma$; hence $(z,q)$ solves the continuous Stokes problem with data $(F,0)$. Let $w_h=I_hz$ and $r_h=I_hq-|D|^{-1}\int_DI_hq$. By [F3], $w_h\in V_h$, $r_h\in Q_h$, and $\delta_u:=\|z-w_h\|_V\le Ch\|z\|_{H^2}$, $\delta_q:=\|q-r_h\|_Q\le Ch\|q\|_{H^1}$. The MINI mixed problem has a solution $(z_h,q_h)$ with $z_h\in Z_h$. Its inf-sup constant satisfies $\beta_h^{-1}\le C$ independently of $h$ and $\nu$, while $M_a=2\nu$, $M_b=\sqrt d$, and $\alpha_*=\nu$. The mixed error formula therefore gives $R_h\le C\delta_u$ and $U_h=\delta_u+\nu^{-1}\{2\nu(\delta_u+R_h)+\sqrt d\,\delta_q\}+R_h\le C(\delta_u+\nu^{-1}\delta_q)$. Step 1.1 with $w_h=z_h$ now yields $\|z-S_hz\|_V\le\sqrt2U_h\le C_0(1+\nu^{-1})h(\|z\|_{H^2}+\|q\|_{H^1})$, with $C_0$ independent of $h$ and $\nu$. [F3, step 1.1, algebra] ∎
