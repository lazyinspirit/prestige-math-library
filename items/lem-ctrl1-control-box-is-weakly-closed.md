---
id: lem-ctrl1-control-box-is-weakly-closed
kind: lemma
title: "Under Countable Choice, pointwise compact convex control constraints are weakly closed in L2"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-countable-choice, def-ctrl1-linear-lqr-control-problem, def-weak-convergence-of-nets-and-sequences, thm-cauchy-schwarz-and-the-euclidean-norm, cor-cauchy-schwarz-inequality-for-l-two, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-extreme-value-metric, thm-rational-points-and-boxes-in-rn, lem-product-topology-on-rn, thm-lebesgue-measure-is-a-complete-measure, thm-finite-and-countable-subadditivity-of-measures]
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
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.3.1"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 17–19: compact convex pointwise control sets and convex reachable sets for linear ODEs."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–250 and 277–280, §§2 and 7: measurable controls in a closed convex set and their control-only variational inequality."
---

## Statement

Assume the Axiom of Countable Choice.

Let $U_c\subset\mathbb R^m$ be nonempty, compact and convex, and let $\mathcal U_c$ be the pointwise admissible set in [[def-ctrl1-linear-lqr-control-problem]]. If $u_k\in\mathcal U_c$ and $u_k\rightharpoonup u$ weakly in real $L^2(0,T;\mathbb R^m)$, then $u\in\mathcal U_c$. Thus $\mathcal U_c$ is weakly sequentially closed.

## Facts & Assumptions

**Given:** Countable Choice, a finite horizon $T>0$, a nonempty compact convex set $U_c\subset\mathbb R^m$, its pointwise admissible set $\mathcal U_c$, and a weakly convergent sequence in real $L^2(0,T;\mathbb R^m)$.

[A1] Countable Choice ensures the Lebesgue outer measure construction is a measure on its sigma-algebra ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] $\mathcal U_c=\{u\in L^2:u(t)\in U_c\text{ for almost every }t\}$ ([[def-ctrl1-linear-lqr-control-problem]]). The pairing $\int q^Tw$ is well-defined for vector-valued $L^2$ classes and bounded by $\|q\|_2\|w\|_2$: apply Euclidean Cauchy--Schwarz pointwise and scalar $L^2$ Cauchy--Schwarz to the norm functions ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F2] Weak convergence means convergence under every bounded linear functional; by [F1], $w\mapsto\int_E q^Tw$ is bounded on $L^2$ whenever $E\subset[0,T]$ is measurable ([[def-weak-convergence-of-nets-and-sequences]]).

[F3] A continuous real function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F4] The Lebesgue integral is linear on $L^1$, and the nonnegative integral is monotone ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F5] Rational open boxes form a countable basis of the product topology, and on $\mathbb R^m$ that topology is the Euclidean metric topology ([[thm-rational-points-and-boxes-in-rn]], [[lem-product-topology-on-rn]]).

[F6] Under Countable Choice, Lebesgue measurable sets form a sigma-algebra and a countable union of measurable null sets is null, by countable subadditivity ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-finite-and-countable-subadditivity-of-measures]]).

**Given:** The set and sequence in the Statement.

## Proof

**Given:** The set and sequence in the Statement.

1.1 For $q\in\mathbb R^m$ set $h(q)=\sup_{c\in U_c}q^Tc$, which is finite because $U_c$ is compact and hence bounded. If $z\notin U_c$, [F3] gives a nearest point $y\in U_c$ to $z$. For each $c\in U_c$ and $0<\theta\le1$, convexity gives $y+\theta(c-y)\in U_c$; minimality of $y$ implies $\|z-y-\theta(c-y)\|_2^2\ge\|z-y\|_2^2$, and division by $\theta$ followed by $\theta\downarrow0$ gives $(z-y)^T(c-y)\le0$. Thus $q_0=z-y$ satisfies $q_0^Tz-h(q_0)\ge\|z-y\|_2^2>0$. If $M_c=\sup_{c\in U_c}\|c\|_2$, then $|h(q)-h(q_0)|\le M_c\|q-q_0\|_2$ and $|(q-q_0)^Tz|\le\|q-q_0\|_2\|z\|_2$. By [F5], rational vectors are dense in Euclidean $\mathbb R^m$, so one can choose rational $q$ close enough to $q_0$ that $q^Tz>h(q)$. Therefore a point $z$ belongs to $U_c$ exactly when $q^Tz\le h(q)$ for every rational vector $q$. [F1, F3, F5, choose, algebra]

1.2 Fix a rational $q$. Every $u_k$ is in $\mathcal U_c$, so $h(q)-q^Tu_k(t)\ge0$ almost everywhere. For any measurable $E\subseteq[0,T]$, the test function $q\mathbf1_E$ lies in $L^2$ because $T<\infty$; weak convergence, [F2], and [F4] give $\int_Eq^Tu\,dt=\lim_k\int_Eq^Tu_k\,dt\le h(q)|E|$. If $q^Tu>h(q)$ on a set of positive measure, then for some integer $r\ge1$ the measurable set $E_r=\{t:q^Tu(t)\ge h(q)+1/r\}$ has positive measure, contradicting the integral inequality with $E=E_r$. Hence $q^Tu(t)\le h(q)$ almost everywhere. [A1, F1, F2, F4, given, algebra]

2.1 The rational vectors form a countable set by [F5], so the exceptional null sets from step 1.2 have a null union by [A1, F6]. Outside that union all rational support inequalities hold simultaneously; step 1.1 then gives $u(t)\in U_c$ almost everywhere. This is exactly $u\in\mathcal U_c$. [A1, F1, F5, F6, step 1.1, step 1.2, algebra] ∎
