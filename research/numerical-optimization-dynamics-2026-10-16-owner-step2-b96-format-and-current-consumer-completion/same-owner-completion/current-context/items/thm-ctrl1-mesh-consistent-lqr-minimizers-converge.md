---
id: thm-ctrl1-mesh-consistent-lqr-minimizers-converge
kind: theorem
title: "Mesh-consistent LQR minimizers converge to the unique continuous minimizer"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence, lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous, thm-ctrl1-lqr-existence-and-unique-optimal-control, def-ctrl1-control-mesh-and-piecewise-constant-parameterization, lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence, def-weak-convergence-of-nets-and-sequences, lem-ctrl1-control-box-is-weakly-closed, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-hilbert-spaces-are-reflexive, def-ultrafilter-extension-principle, def-dependent-choice, def-countable-choice, def-hahn-banach-extension-principle-relative]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: direct control discretization, multiple shooting, collocation, and finite-dimensional optimal-control NLPs."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.4–2.5.1"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 20–23: LQR existence and convergence framework; weak lower semicontinuity is proved locally here."
---

## Statement

Assume the axiom branch of [[thm-ctrl1-lqr-existence-and-unique-optimal-control]], and let $u^*$ be the unique minimizer of the LQR objective $J$ on a nonempty convex weakly sequentially closed feasible set $\mathcal F\subseteq\mathcal U_c$. For each mesh index $N$, let $\mathcal F_N\subseteq\mathcal F$ be nonempty, and let $J_N$ be the discrete transcription objective. Assume there are $\varepsilon_N\to0$ such that $|J_N(v)-J(v)|\le\varepsilon_N$ for every $v\in\mathcal F_N$. Assume also a recovery sequence $v_N\in\mathcal F_N$ with $\|v_N-u^*\|_{L^2}\to0$. If $u_N$ is a global minimizer of $J_N$ on $\mathcal F_N$, then $u_N\rightharpoonup u^*$ in $L^2$ and $x_{u_N}\to x_{u^*}$ uniformly.

For the control-only case $\mathcal F=\mathcal U_c$ and piecewise-constant mesh controls, the cell-average lemma supplies the strong recovery sequence. If active path or terminal constraints are present, preservation or recovery of those constraints is an additional hypothesis; node sampling alone does not establish continuous-path feasibility. This theorem is conditional on a uniform objective consistency bound; an embedded adaptive RK difference alone does not provide that bound.

## Facts & Assumptions

**Given:** The LQR data, its unique minimizer, feasible discrete sets, uniform consistency, recovery controls, and global discrete minimizers.

[F1] The continuous LQR minimizer exists uniquely under the stated closedness and choice-axiom hypotheses ([[thm-ctrl1-lqr-existence-and-unique-optimal-control]]).

[F2] The control set $\mathcal U_c$ is bounded in $L^2$ because $U_c$ is compact, and is weakly sequentially closed ([[def-ctrl1-linear-lqr-control-problem]], [[lem-ctrl1-control-box-is-weakly-closed]]).

[F3] A bounded sequence in a real reflexive Banach space has a weakly convergent subsequence under the ultrafilter lemma, Dependent Choice, and Hahn–Banach ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]).

[F4] The LQR objective is weakly sequentially lower semicontinuous on $\mathcal U_c$ ([[lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous]]).

[F5] Weakly convergent controls in $\mathcal U_c$ have uniformly convergent states ([[lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence]]).

[F6] The state map is affine and bounded from $L^2$ to the supremum norm, so the LQR objective is continuous under strong $L^2$ convergence ([[lem-ctrl1-measurable-linear-ode-state-map]], [[def-ctrl1-linear-lqr-control-problem]]).

[A1] The ultrafilter lemma, Dependent Choice, and Hahn–Banach are assumed for [F3] and real Hilbert-space reflexivity ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[cor-hilbert-spaces-are-reflexive]]).

## Proof

1.1 Since $u_N\in\mathcal F_N\subseteq\mathcal U_c$ and $U_c$ is compact, $\sup_N\|u_N\|_2\le\sqrt T\sup_{c\in U_c}\|c\|_2<\infty$. Real $L^2$ is reflexive by [A1], so [F3] gives a weakly convergent subsequence from every subsequence of $(u_N)$. [F2, F3, A1, given, algebra]

2.1 Let a subsequence $u_{N_k}$ converge weakly to $\bar u$. Because each $u_{N_k}\in\mathcal F$ and $\mathcal F$ is weakly sequentially closed, $\bar u\in\mathcal F$. By [F4] and consistency, $J(\bar u)\le\liminf_kJ(u_{N_k})\le\limsup_k(J_{N_k}(u_{N_k})+\varepsilon_{N_k})$. Global discrete minimality gives $J_{N_k}(u_{N_k})\le J_{N_k}(v_{N_k})\le J(v_{N_k})+\varepsilon_{N_k}$. To see $J(v_{N_k})\to J(u^*)$, [F6] gives $\|x_{v_{N_k}}-x_{u^*}\|_\infty\le C\|v_{N_k}-u^*\|_2\to0$; the control quadratic difference is bounded by $\frac M2(\|v_{N_k}\|_2+\|u^*\|_2)\|v_{N_k}-u^*\|_2$, and state and terminal quadratic differences tend to zero by the corresponding bounded-quadratic estimate and uniform state convergence. Hence $J(v_{N_k})\to J(u^*)$, so $J(\bar u)\le J(u^*)$. [F1, F4, F6, given, step 1.1, algebra]

3.1 Since $\bar u\in\mathcal F$ and $u^*$ is the unique minimizer there, step 2.1 forces $\bar u=u^*$. Every subsequence therefore has a weakly convergent subsubsequence whose limit is $u^*$. If the full sequence failed to converge weakly to $u^*$, some bounded linear functional and some positive tolerance would witness failure along a subsequence; a weakly convergent subsubsequence from step 1.1 would contradict that witness. Thus $u_N\rightharpoonup u^*$. [F1, step 1.1, step 2.1, algebra]

4.1 Apply [F5] to the weakly convergent admissible controls from step 3.1 to obtain $x_{u_N}\to x_{u^*}$ uniformly on $[0,T]$. [F5, step 3.1] ∎
