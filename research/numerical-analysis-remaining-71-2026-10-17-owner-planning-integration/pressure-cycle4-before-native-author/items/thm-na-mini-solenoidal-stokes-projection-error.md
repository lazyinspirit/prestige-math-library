---
id: thm-na-mini-solenoidal-stokes-projection-error
kind: theorem
title: "Approximation by the MINI solenoidal energy projection"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-discrete-weak-and-exact-divergence-free-spaces, thm-na-mini-element-h1-pressure-error, thm-na-mini-element-fortin-stability, thm-na-mixed-galerkin-quasioptimality, lem-na-homogeneous-dirichlet-korn-identity, thm-riesz-representation-for-hilbert-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, Stokes variational form; Chapter 54, MINI stability"
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, MINI element approximation"
---

## Statement

Assume Countable Choice and the MINI mesh hypotheses. For $z\in V_\sigma$, define $S_hz\in Z_h$ by
$$a_\nu(S_hz,w_h)=a_\nu(z,w_h)\qquad(w_h\in Z_h).$$
This defines a unique linear projection and
$$\|z-S_hz\|_V\le\sqrt2\inf_{w_h\in Z_h}\|z-w_h\|_V.$$
If additionally $z\in H^2(D)^d$ and $q\in H^1(D)\cap L^2_0(D)$, then
$$\|z-S_hz\|_V\le C_0(1+\nu^{-1})h\bigl(\|z\|_{H^2(D)}+\|q\|_{H^1(D)}\bigr),$$
where $C_0$ is independent of $h$ and $\nu$ and depends on $D$, shape regularity and the uniform MINI inf-sup constant.

## Facts & Assumptions

**Given:** A bounded connected Lipschitz polyhedral domain, its shape-regular MINI mesh, $z\in V_\sigma$, and viscosity $\nu>0$.

[F1] $Z_h$ is a finite-dimensional subspace of $V$ and $a_\nu$ is symmetric; Korn and $|\varepsilon(w)|\le|\nabla w|$ give $\nu\|w\|_V^2\le a_\nu(w,w)\le2\nu\|w\|_V^2$. ([[def-na-discrete-weak-and-exact-divergence-free-spaces]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F2] Every bounded linear functional on a real Hilbert space has a unique Riesz representative. ([[thm-riesz-representation-for-hilbert-space]])

[F3] The MINI inf-sup and mixed Galerkin theorem give a discrete Stokes solution; the static MINI error theorem bounds its velocity by $C h(\|z\|_{H^2}+\|q\|_{H^1})$, and its velocity lies in $Z_h$. ([[thm-na-mini-element-fortin-stability]], [[thm-na-mixed-galerkin-quasioptimality]], [[thm-na-mini-element-h1-pressure-error]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[A1] Countable Choice is assumed as in the Stokes approximation and Hilbert representation inputs. ([[def-countable-choice]], [[thm-na-mini-element-h1-pressure-error]])

## Proof
1.1 Equip $Z_h$ with the inner product $a_\nu$. It is positive definite by [F1]. The functional $w_h\mapsto a_\nu(z,w_h)$ is bounded on this finite-dimensional Hilbert space, so [F2] gives a unique $S_hz\in Z_h$ satisfying the displayed equation. Linearity follows from uniqueness and linearity of the right-hand side. For any $w_h\in Z_h$, orthogonality gives $a_\nu(z-w_h,z-w_h)=a_\nu(z-S_hz,z-S_hz)+a_\nu(S_hz-w_h,S_hz-w_h).$ Using $\nu\|r\|_V^2\le a_\nu(r,r)\le2\nu\|r\|_V^2$ yields the stated best-approximation bound. [A1, F1, F2, given, algebra]

2.1 For the smooth Stokes pair $(z,q)$, [F3] supplies a discrete velocity $z_h\in Z_h$ with the mixed error formula. Put $\delta_u=Ch\|z\|_{H^2}$ and $\delta_q=Ch\|q\|_{H^1}$. The uniform MINI inf-sup bound makes $\beta_h^{-1}\le C$ independent of $\nu$, and the mixed constants are $M_a=2\nu$, $M_b=\sqrt d$, and $\alpha_*=\nu$. Hence its formula gives $R_h\le C\delta_u$ and $U_h=\delta_u+\nu^{-1}\{2\nu(\delta_u+R_h)+\sqrt d\,\delta_q\}+R_h\le C(\delta_u+\nu^{-1}\delta_q).$ Step 1.1 with $w_h=z_h$ now yields $\|z-S_hz\|_V\le\sqrt2U_h\le C_0(1+\nu^{-1})h(\|z\|_{H^2}+\|q\|_{H^1})$. This proves the displayed smooth estimate with $C_0$ independent of $\nu$. [F3, step 1.1, algebra] ∎
