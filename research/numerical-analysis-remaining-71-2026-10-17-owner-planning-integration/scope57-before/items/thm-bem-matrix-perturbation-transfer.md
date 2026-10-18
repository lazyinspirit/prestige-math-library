---
id: thm-bem-matrix-perturbation-transfer
kind: theorem
title: A certified matrix defect transfers to a Galerkin error bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [alg-bem-certified-inexact-matrix-assembly, def-bem-surface-mesh-and-piecewise-constant-density-space, thm-bem-single-layer-transmission-mapping-and-coercivity, thm-second-strang-lemma-for-nonconforming-galerkin, thm-lax-milgram, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used through Lax–Milgram and the second Strang lemma; the Axiom of Choice and Countable Choice are inherited by the BEM specialization through the single-layer coercivity theorem and the certified assembly's weak-pairing identity.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8, and Chapter 3 §§3.1–3.3, printed pp. 40–46: the energy Galerkin system and stability from coercivity."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: coercive energy estimates and perturbation stability."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H$ be a real Hilbert space and $X_h\subset H$ a finite-dimensional subspace. Let $a:H\times H\to\mathbb R$ be bounded with continuity constant $C$ and coercive with constant $c>0$, and let $F\in H'$. Write $F_h=F|_{X_h}$ and
$$\|F_h\|_{X_h'}=\sup_{\substack{w_h\in X_h\\\|w_h\|_H\le1}}|F_h(w_h)|.$$
Let $u\in H$ solve $a(u,w)=F(w)$ for all $w\in H$, and let $u_h\in X_h$ be its exact Galerkin solution. Suppose a bilinear form $\widetilde a_h:X_h\times X_h\to\mathbb R$ and load $\widetilde F_h\in X_h'$ satisfy
$$|\widetilde a_h(v_h,w_h)-a(v_h,w_h)|\le\delta\|v_h\|_H\|w_h\|_H,\qquad |\widetilde F_h(w_h)-F_h(w_h)|\le\eta\|w_h\|_H$$
for all $v_h,w_h\in X_h$, with $0\le\delta<c$. The perturbed equation $\widetilde a_h(\widetilde u_h,w_h)=\widetilde F_h(w_h)$ has a unique solution and
$$\|u-\widetilde u_h\|_H\le(1+C/c)\inf_{v_h\in X_h}\|u-v_h\|_H+\frac1c\left(\eta+\frac{\delta(\|F_h\|_{X_h'}+\eta)}{c-\delta}\right).$$
For P0 single-layer BEM, take $H=H^{-1/2}(\Gamma)$ with its Sobolev norm and $a(v,w)=\langle w,Vv\rangle_\Gamma$. The single-layer theorem supplies $c,C$, and a successful matrix-assembly certificate supplies $\delta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the real Hilbert exact variational problem, its finite-dimensional conforming subspace, and the stated form/load defect bounds.

[A1] The Axiom of Choice and Countable Choice are inherited by the BEM specialization through the single-layer coercivity theorem and the certified assembly's weak-pairing identity; Countable Choice is also assumed by Lax–Milgram and the second Strang theorem ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The second Strang theorem gives existence, uniqueness, and quasi-optimality for the exact coercive problem and its conforming finite-dimensional restriction; the exact restricted form/load have zero consistency defect ([[thm-second-strang-lemma-for-nonconforming-galerkin]]).

[F2] A bounded coercive real bilinear form on a real Hilbert space has a unique variational solution under Countable Choice ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] In the P0 BEM specialization, the exact form is bounded and coercive with constants $C,c>0$ ([[thm-bem-single-layer-transmission-mapping-and-coercivity]]), and $X_h$ is a finite-dimensional conforming subspace ([[def-bem-surface-mesh-and-piecewise-constant-density-space]]).

[F4] A successful matrix assembly certificate bounds the operator norm of the matrix defect in the P0 energy-space norm ([[alg-bem-certified-inexact-matrix-assembly]]).

## Proof

1.1 Apply [F1] with exact form $a$, exact load $F$, and conforming subspace $X_h$. It gives the unique exact solution $u$, the unique exact Galerkin solution $u_h$, and $\|u-u_h\|_H\le(1+C/c)\inf_{v_h\in X_h}\|u-v_h\|_H$, since the consistency defect is zero. [A1, F1, given, construct]

1.2 The perturbation bound and coercivity of $a$ imply $\widetilde a_h(v_h,v_h)\ge(c-\delta)\|v_h\|_H^2$ for all $v_h$. Also $|\widetilde a_h(v_h,w_h)|\le(C+\delta)\|v_h\|_H\|w_h\|_H$, and $\|\widetilde F_h\|\le\|F_h\|+\eta$. Lax–Milgram [F2] therefore gives a unique perturbed solution $\widetilde u_h$. [A1, F2, given, algebra]

2.1 Test the perturbed equation with $\widetilde u_h$. Then $(c-\delta)\|\widetilde u_h\|_H^2\le(\|F_h\|_{X_h'}+\eta)\|\widetilde u_h\|_H$, so $\|\widetilde u_h\|_H\le(\|F_h\|_{X_h'}+\eta)/(c-\delta)$; this also holds if $\widetilde u_h=0$. [step 1.2, given, algebra]

3.1 Put $e_h=u_h-\widetilde u_h$. Subtracting the perturbed equation from the exact discrete equation gives $a(e_h,w_h)=F_h(w_h)-\widetilde F_h(w_h)+(\widetilde a_h-a)(\widetilde u_h,w_h)$. Take $w_h=e_h$. If $e_h\ne0$, coercivity and the two defects give $\|e_h\|_H\le c^{-1}(\eta+\delta\|\widetilde u_h\|_H)$; if $e_h=0$ the same inequality holds. Substitute step 2.1 to obtain $\|e_h\|_H\le c^{-1}(\eta+\delta(\|F_h\|_{X_h'}+\eta)/(c-\delta))$. [F1, step 1.2, step 2.1, given, algebra]

4.1 By the triangle inequality, $\|u-\widetilde u_h\|_H\le\|u-u_h\|_H+\|e_h\|_H$. Apply step 1.1 and step 3.1 to get the displayed bound. In the BEM specialization, [F3] verifies the exact-form hypotheses and [F4] verifies that the assembly defect is the $\delta$ required here. [F1, F3, F4, step 1.1, step 3.1, given, algebra] ∎

