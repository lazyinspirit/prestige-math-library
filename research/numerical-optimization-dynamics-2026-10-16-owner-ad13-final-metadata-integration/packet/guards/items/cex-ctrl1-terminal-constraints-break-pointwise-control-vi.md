---
id: cex-ctrl1-terminal-constraints-break-pointwise-control-vi
kind: counterexample
title: "An active terminal constraint invalidates the pointwise control-only variational inequality"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-control-box-is-weakly-closed, def-ctrl1-lqr-adjoint-equation, lem-ctrl1-lqr-adjoint-identity-and-gradient, def-countable-choice, def-dependent-choice, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pending
sources:
  references:
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–251 and 277–280, §§2 and 7: pointwise Hamiltonian minimization is derived for control-only constraints; the example verifies why a terminal constraint changes that conclusion."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5.2"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 23–24: adjoint sign convention and control-only pointwise condition."
---

## Statement refuted

Assume the Axioms of Countable Choice and Dependent Choice, which are the hypotheses used by the reduced-gradient supplier.

The pointwise control-only condition from [[thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch]] holds for an LQR minimizer even when the feasible set includes arbitrary terminal constraints.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice. Take $T=1$, scalar state and control, $x(0)=0$, dynamics $\dot x=u$, control set $U_c=[0,2]$, and terminal constraint $x(1)=0$. Let $Q=R=1$, $x_d(t)=1$, $P=0$, and $x_T=0$, so $\mathcal F=\{u\in L^2(0,1):0\le u(t)\le2\text{ a.e.},\int_0^1u(t)dt=0\}$. Use the adjoint and derivative conventions of [[def-ctrl1-lqr-adjoint-equation]] and [[lem-ctrl1-lqr-adjoint-identity-and-gradient]].

[A1] Countable Choice and Dependent Choice are assumed for the reduced-gradient supplier ([[def-countable-choice]], [[def-dependent-choice]]).

[F1] A nonnegative function with integral zero vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F2] The adjoint satisfies $-\dot p=x-x_d$ and $p(1)=P(x(1)-x_T)$; the reduced gradient is $p+u$ ([[def-ctrl1-lqr-adjoint-equation]], [[lem-ctrl1-lqr-adjoint-identity-and-gradient]]).

## Counterexample

The feasible set in the Given data is determined exactly by the zero terminal-state constraint.

1.1 For every feasible $u$, [F1] applied to $u\ge0$ and $\int_0^1u=0$ gives $u=0$ almost everywhere. Thus $\mathcal F=\{0\}$ and $u^*=0$ is its unique feasible control and hence a minimizer. [F1, given]

2.1 The state is $x(t)=0$. The adjoint equation becomes $-\dot p=-1$ with $p(1)=0$, whose unique solution is $p(t)=t-1$. The reduced gradient at $u^*$ is therefore $g(t)=p(t)=t-1$. [F2, step 1.1, algebra]

3.1 For the pointwise control-only condition, choose the admissible point $c=1$. Then $g(t)(c-u^*(t))=t-1<0$ for every $t\in[0,1)$, a set of positive measure. Hence the asserted pointwise condition fails, although the global variational inequality over the singleton $\mathcal F$ holds with equality. [step 1.1, step 2.1, algebra] ∎
