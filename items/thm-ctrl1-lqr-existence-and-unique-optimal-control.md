---
id: thm-ctrl1-lqr-existence-and-unique-optimal-control
kind: theorem
title: "A bounded-control linear-quadratic ODE has a unique minimizer"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, lem-ctrl1-control-box-is-weakly-closed, lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-hilbert-spaces-are-reflexive, lem-dependent-choice-implies-countable-choice, thm-direct-method-in-a-reflexive-banach-space, def-ultrafilter-extension-principle, def-dependent-choice, def-countable-choice, def-hahn-banach-extension-principle-relative]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.4–2.5.1"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–23: L2 control space, bounded measurable linear dynamics, quadratic objective, and direct-method existence/uniqueness argument. The weak-lower-semicontinuity step is supplied locally here."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–251, §2: finite-horizon control model and optimality hypotheses; the complete direct-method proof follows the local weak-compactness suppliers."
---

## Statement

Assume the ultrafilter lemma, Dependent Choice, and Hahn–Banach. For the LQR data of [[def-ctrl1-linear-lqr-control-problem]], if the feasible-control set $\mathcal F$ is nonempty, convex, and weakly sequentially closed, then $J$ attains its minimum on $\mathcal F$ at a unique control $u^*$. The direct-method branch uses exactly these three principles; Dependent Choice also supplies Countable Choice for the $L^2$ Hilbert-space/reflexivity suppliers. No use of the full Axiom of Choice is asserted.

## Facts & Assumptions

**Given:** The LQR data, a nonempty convex weakly sequentially closed $\mathcal F\subseteq\mathcal U_c$, the ultrafilter lemma, Dependent Choice, and Hahn–Banach.

[A1] The ultrafilter lemma, Dependent Choice and Hahn–Banach are the exact axiom assumptions of the direct-method supplier; the uses below are weak-subsequence extraction and the stated reflexivity route ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F1] Under Countable Choice, real $L^2(0,T;\mathbb R^m)$ with its integral pairing is a Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F2] A real Hilbert space is reflexive under Countable Choice ([[cor-hilbert-spaces-are-reflexive]]).

[F3] Dependent Choice implies Countable Choice ([[lem-dependent-choice-implies-countable-choice]]).

[F4] Under the ultrafilter lemma, Dependent Choice and Hahn–Banach, a proper coercive weakly sequentially lower-semicontinuous functional on a nonempty weakly sequentially closed subset of a real reflexive Banach space attains its infimum ([[thm-direct-method-in-a-reflexive-banach-space]]).

[F5] Under Countable Choice (supplied by Dependent Choice through [F3]), the pointwise control set is weakly sequentially closed; additional path/terminal constraints are included only through the assumed weakly sequentially closed set $\mathcal F$ ([[lem-ctrl1-control-box-is-weakly-closed]], [[def-ctrl1-linear-lqr-control-problem]]).

[F6] The quadratic objective $J$ is weakly lower semicontinuous ([[lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous]]).

[F7] The state map is unique, affine, and bounded from $L^2$ to continuous states ([[lem-ctrl1-measurable-linear-ode-state-map]]).

## Proof

1.1 By [A1] and [F3], Countable Choice is available. Hence [F1] makes $L^2(0,T;\mathbb R^m)$ a real Hilbert space and [F2] makes it reflexive. [A1, F1, F2, F3]

1.2 The set $\mathcal F$ is nonempty by hypothesis and weakly sequentially closed by [F5]. For $u\in\mathcal F$, every state and terminal quadratic term in $J$ is nonnegative, while $R(t)\succeq rI$ gives $J(u)\ge\tfrac r2\|u\|_2^2$. The cost is finite on $\mathcal F$ by [F7], so $J$ is proper and coercive there. [F5, F7, given, algebra]

2.1 By [F6], $J$ is weakly sequentially lower semicontinuous on $\mathcal F$. The axioms in [A1] and the reflexivity and admissibility checks in steps 1.1–1.2 verify every hypothesis of [F4]; therefore there exists $u^*\in\mathcal F$ with $J(u^*)=\inf_{u\in\mathcal F}J(u)$. [A1, F1, F2, F4, F6, step 1.1, step 1.2]

3.1 The state map is affine by [F7]. For $0<\theta<1$, each positive-semidefinite quadratic state or terminal form satisfies $q(\theta a+(1-\theta)b)=\theta q(a)+(1-\theta)q(b)-\theta(1-\theta)q(a-b)\le\theta q(a)+(1-\theta)q(b)$. The control form satisfies $\frac12\langle R(\theta u+(1-\theta)v),\theta u+(1-\theta)v\rangle=\frac\theta2\langle Ru,u\rangle+\frac{1-\theta}2\langle Rv,v\rangle-\frac{\theta(1-\theta)}2\langle R(u-v),u-v\rangle$. If $u\ne v$, then $\langle R(u-v),u-v\rangle\ge r\|u-v\|_2^2>0$, so $J$ is strictly convex on the convex set $\mathcal F$. Two distinct minimizers would have a feasible strict convex combination with smaller cost, contradicting the minimum value established in step 2.1. Thus $u^*$ is unique. [F1, F5, F7, step 1.2, step 2.1, algebra] ∎

## Remarks

The source notes' direct-method outline is not used as a substitute for lower semicontinuity: [[lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous]] proves that requirement for this objective. The proof does not claim an axiom-minimal version without the three principles in [A1].
