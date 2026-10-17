---
id: lem-conforming-energy-projection-is-best-approximation
kind: lemma
title: The conforming energy projection is the best approximation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - cor-symmetric-galerkin-best-approximation-in-energy-norm
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-eigenspace-best-approximation-gap
  - lem-galerkin-orthogonality-for-conforming-galerkin-approximations
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.2, the Hermitian energy projection and its exact best-approximation property."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.4–8.5, printed pp. 131–134: Galerkin orthogonality, conforming Ritz spaces and energy projection."
verification: {}
---

## Statement

Assume Countable Choice. Let $V$ be a Hilbert space, let $a$ be a bounded,
Hermitian coercive form on $V$, and let $V_h\subseteq V$ be finite-dimensional.
Write $\|v\|_a:=\sqrt{a(v,v)}$ for the induced energy norm.
For each $v\in V$, let $P_hv\in V_h$ be the unique solution of
$$a(P_hv,w_h)=a(v,w_h)\qquad(w_h\in V_h).$$
Then $P_h:V\to V_h$ is linear, $a(v-P_hv,w_h)=0$ for all $w_h\in V_h$, and
$$\|v-P_hv\|_a=\inf_{w_h\in V_h}\|v-w_h\|_a.$$
If $E\subseteq V$ is a nonzero finite-dimensional subspace and
$\delta_a(E,V_h)<1$, then $P_h|_E$ is injective.

## Facts & Assumptions

**Given:** Countable Choice, the bounded Hermitian coercive form, the
finite-dimensional conforming subspace $V_h$, and a finite-dimensional
$E\subseteq V$.

[F1] Céa's theorem gives unique continuous and discrete solutions for a
bounded coercive form and bounded data
([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F2] The continuous and discrete variational equations imply
$a(u-u_h,w_h)=0$ for every $w_h\in V_h$
([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

[F3] For a Hermitian form, the Galerkin solution is exactly the best
approximation in the energy norm
([[cor-symmetric-galerkin-best-approximation-in-energy-norm]]).

[F4] The directed eigenspace best-approximation gap is
$\delta_a(E,V_h)=\sup_{v\in E,\,\|v\|_a=1}\inf_{w_h\in V_h}\|v-w_h\|_a$
([[def-eigenspace-best-approximation-gap]]).

## Proof
**Proof technique:** direct.

**Given:** $v\in V$, the form $a$, the subspace $V_h$, and the subspace $E$.

1.1 For fixed $v$, the functional $w\mapsto a(v,w)$ is bounded and conjugate-linear. Apply [F1] to the continuous datum $F(w)=a(v,w)$; its continuous solution is $v$, and the resulting discrete solution is the unique $P_hv\in V_h$ in the statement. If $v_1,v_2\in V$ and $c_1,c_2\in\mathbb K$, then $c_1P_hv_1+c_2P_hv_2$ satisfies the defining equation for $P_h(c_1v_1+c_2v_2)$, so uniqueness proves linearity. [F1, given, construct]

2.1 The continuous equation for $v$ and the defining discrete equation for $P_hv$ agree on each $w_h\in V_h$. By [F2], $a(v-P_hv,w_h)=0$. [F2, step 1.1, given]

3.1 Fix any $w_h\in V_h$. Since $v-w_h=(v-P_hv)+(P_hv-w_h)$ and $P_hv-w_h\in V_h$, step 2.1 and Hermitian symmetry eliminate both cross terms in the squared energy norm. Therefore $\|v-w_h\|_a^2=\|v-P_hv\|_a^2+\|P_hv-w_h\|_a^2 \ge\|v-P_hv\|_a^2.$ The choice $w_h=P_hv$ attains equality, proving the best-approximation identity (the exact supplier interface [F3]). [F2, F3, step 1.1, step 2.1, given, algebra]

4.1 If $v\in E$ is nonzero, put $\widehat v=v/\|v\|_a$. By linearity in step 1.1 and the definition [F4], $\|v-P_hv\|_a=\|v\|_a\|\widehat v-P_h\widehat v\|_a\le \delta_a(E,V_h)\|v\|_a$; the same inequality is immediate for $v=0$. If $P_hv=0$, step 3.1 makes the left side $\|v\|_a$. Since $\delta_a(E,V_h)<1$, this forces $v=0$. Thus $P_h|_E$ is injective. [F3, F4, step 3.1, algebra] ∎
