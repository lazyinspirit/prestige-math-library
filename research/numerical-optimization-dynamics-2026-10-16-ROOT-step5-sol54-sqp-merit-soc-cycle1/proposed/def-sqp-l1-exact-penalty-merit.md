---
id: def-sqp-l1-exact-penalty-merit
kind: definition
title: "L1 exact-penalty merit and predicted decrease for SQP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sqp-linearized-quadratic-subproblem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.5, L1 merit and directional decrease, printed pp. 542–545 / PDF pp. 560–563."
---

## Definition

Use the nonlinear program and SQP subproblem conventions of
[[def-sqp-linearized-quadratic-subproblem]]. For $\rho>0$, define the
nondifferentiable L1 merit function
$$\psi_\rho(x)=f(x)+\rho\left(\|h(x)\|_1+\|[g(x)]_+\|_1\right).$$
For a subproblem step $p$ at $x$, its linearized predicted decrease is
$$D_\rho(x,p)=-\left[\nabla f(x)^Tp+\rho\left(\|h(x)+Dh(x)p\|_1-\|h(x)\|_1+ \|[g(x)+Dg(x)p]_+\|_1-\|[g(x)]_+\|_1\right)\right].$$
A trial fraction $t\in(0,1]$ satisfies the Armijo test with coefficient
$\sigma\in(0,1)$ when
$$\psi_\rho(x+tp)\le\psi_\rho(x)-\sigma tD_\rho(x,p).$$
The definition alone does not assert $D_\rho(x,p)>0$, existence of an
accepted fraction, or convergence of a sequence of accepted SQP steps.

## Facts & Assumptions

**Given:** The $C^2$ program and a subproblem displacement $p$, with penalty
parameter $\rho>0$.

[F1] [[def-sqp-linearized-quadratic-subproblem]] defines the affine
linearized equality and inequality residuals and uses $g\le0$.

[A1] The penalty is $\rho>0$, the point $x$ belongs to $U$, and the trial
point belongs to $U$ whenever its nonlinear merit is evaluated.

## Proof

1.1 The norm and positive-part terms in $\psi_\rho$ are finite for every $x\in U$, since the constraint maps are real-valued and the dimensions are finite. The displayed $D_\rho(x,p)$ is therefore the negative of the change in the linear objective-plus-penalty model from displacement $0$ to $p$. [given, A1, F1, algebra]

2.1 The Armijo right-hand side is the scalar $\psi_\rho(x)-\sigma tD_\rho(x,p)$, using the predicted decrease for the full displacement $p$. The test compares the actual nonlinear merit at $x+tp$ with this scalar; it does not identify that scalar with the affine-penalty model evaluated at $tp$. This definition supplies a test only and, as stated, implies no positivity or acceptance claim. [given, A1, step 1.1, algebra] ∎
