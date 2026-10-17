---
id: thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch
kind: theorem
title: "LQR minimizers satisfy a feasible-set variational inequality"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, lem-ctrl1-lqr-adjoint-identity-and-gradient, cor-cauchy-schwarz-inequality-for-l-two, def-dependent-choice, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-ctrl1-lqr-adjoint-equation, thm-rational-points-and-boxes-in-rn, lem-product-topology-on-rn, thm-lebesgue-measure-is-a-complete-measure, thm-finite-and-countable-subadditivity-of-measures, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5.2"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 23–24: adjoint identity and pointwise LQ control condition; this theorem distinguishes control-only from general feasible-set constraints."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–251 and 277–280, §§2 and 7: first-order variational conditions and the control-only pointwise branch."
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice.

For the LQR data of [[def-ctrl1-linear-lqr-control-problem]], let $\mathcal F$ be nonempty and convex and let $u\in\mathcal F$. Put $g(t)=B(t)^Tp(t)+R(t)u(t)$, with the adjoint from [[def-ctrl1-lqr-adjoint-equation]]. If $u$ minimizes $J$ on $\mathcal F$, then
$$\int_0^T g(t)^T(v(t)-u(t))\,dt\ge0\qquad(v\in\mathcal F).$$
Conversely, if this variational inequality holds at $u$, then $u$ is the unique minimizer on $\mathcal F$.

If $\mathcal F=\mathcal U_c$, the variational inequality is equivalent (under Dependent Choice, hence Countable Choice) to the existence of one null set $N$ such that $g(t)^T(c-u(t))\ge0$ for every $t\notin N$ and every $c\in U_c$. The pointwise condition is not asserted for additional state or terminal constraints.

## Facts & Assumptions

**Given:** The LQR data, a nonempty convex feasible set $\mathcal F$, a control $u\in\mathcal F$, its continuous adjoint, and the variational-inequality hypothesis when proving sufficiency or the reverse pointwise implication.

[F1] The objective has bounded first-order map $DJ(u)[w]=\int_0^T(B^Tp+Ru)^Tw\,dt$, with remainder $O(\|w\|_2^2)$ ([[lem-ctrl1-lqr-adjoint-identity-and-gradient]]).

[F2] The state map is affine, and for every $u,v\in L^2$ the quadratic expansion has the exact remainder $J(v)-J(u)-DJ(u)[v-u]=\frac12\int_0^T(\delta x^TQ\delta x+(v-u)^TR(v-u))dt+\frac12\delta x(T)^TP\delta x(T)$, where $\delta x=x_v-x_u$ ([[def-ctrl1-linear-lqr-control-problem]], [[lem-ctrl1-measurable-linear-ode-state-map]]).

[F3] Cauchy–Schwarz makes the integral pairing finite for $L^2$ factors ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] Rational open boxes form a countable basis of the product topology, and on $\mathbb R^m$ that topology is the Euclidean metric topology ([[thm-rational-points-and-boxes-in-rn]], [[lem-product-topology-on-rn]]).

[F5] Under Countable Choice, Lebesgue measurable sets form a sigma-algebra and countable unions of measurable null sets are null by countable subadditivity ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F6] The Lebesgue integral is linear on $L^1$, and the nonnegative integral is monotone ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[A1] Dependent Choice and Countable Choice are available for the countable dense subset of $U_c$ used in the pointwise equivalence ([[def-dependent-choice]], [[def-countable-choice]], [[lem-dependent-choice-implies-countable-choice]]).

## Proof

1.1 Suppose $u$ minimizes $J$ on $\mathcal F$ and fix $v\in\mathcal F$. Convexity gives $u_\theta=u+\theta(v-u)\in\mathcal F$ for $0\le\theta\le1$. Hence $(J(u_\theta)-J(u))/\theta\ge0$ for $0<\theta\le1$. The first-order expansion [F1] with increment $\theta(v-u)$ has quotient $DJ(u)[v-u]+O(\theta\|v-u\|_2^2)$, so its limit is $DJ(u)[v-u]$. This proves the displayed variational inequality. [F1, given, choose, algebra]

1.2 Suppose the pointwise inequalities hold outside one null set and $\mathcal F=\mathcal U_c$. For any $v\in\mathcal U_c$, substitute $c=v(t)$ outside that null set and the null set on which $v(t)\notin U_c$. The vector $g=B^Tp+Ru$ lies in $L^2$ because $B,R$ are essentially bounded, $p$ is continuous on the compact horizon, and $u\in L^2$; [F3] makes $g^T(v-u)$ integrable. Integrating proves the global variational inequality. [F3, given, algebra]

1.3 Assume the variational inequality at $u$. For any $v\in\mathcal F$, [F2] and $Q\succeq0$, $R\succeq rI$ give $J(v)-J(u)\ge DJ(u)[v-u]+\frac r2\|v-u\|_2^2$. The linear term is nonnegative by the assumed inequality; hence $J(v)\ge J(u)$, with strict inequality if $v\ne u$. Thus $u$ is the unique minimizer. [F2, given, algebra]

2.1 Assume the global variational inequality and suppose no common null set makes all pointwise inequalities true. By [F4] and [A1], choose one point from each rational open box meeting $U_c$; the resulting countable set $D\subseteq U_c$ is dense. Define $M=\bigcup_{d\in D,k\ge1}E_{d,k}$, where $E_{d,k}=\{t:g(t)^T(d-u(t))\le-1/k\}$. These sets are measurable, and $M$ is measurable by [F5]. Continuity in $c$ and density show that $M$ is exactly the set where some $c\in U_c$ violates the pointwise inequality, so the absence of a common null set means $|M|>0$. By [F5], some $E_{d,k}$ has positive measure. Put $v(t)=d$ on that set and $v(t)=u(t)$ elsewhere. This measurable control lies in $\mathcal U_c$. On $E_{d,k}$, $-g(t)^T(d-u(t))\ge1/k$; [F6] and monotonicity give $\int_0^Tg^T(v-u)dt\le-|E_{d,k}|/k<0$, contradicting the global variational inequality. Therefore one null set suffices for every $c\in U_c$. [A1, F3, F4, F5, F6, given, choose, algebra] ∎

## Remarks

For arbitrary active state or terminal constraints the valid first-order condition is the integral inequality over the feasible set. The multiplier $p$ in the unconstrained adjoint equation alone does not encode normal multipliers for those additional constraints.
