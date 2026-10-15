---
id: cex-rpm-lad-force-free-runaway
kind: counterexample
title: "Force-free runaway solution of the LAD equation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - post-rpm-lad-effective-equation
  - def-rpm-charge-spin-model
  - lem-rpm-ll-reduced-ode
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-ftc-first-part
  - thm-continuous-implies-integrable
dependency_roles:
  post-rpm-lad-effective-equation: physical-assumption
  def-rpm-charge-spin-model: formulation-prerequisite
  lem-rpm-ll-reduced-ode: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
sources:
  references:
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2 and Appendix A, including the one-dimensional relativistic rapidity equation and exponential runaway branch."
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §76, printed pp. 226–229, on the distinction between the LAD equation and the reduced LL equation."
verification: {}
physical_scope: "Counterexample within the adopted flat LAD effective ODE: a force-free, smooth future-timelike solution with exponentially growing proper acceleration. It is an equation-level pathology, not an observation or claim about an actual finite charge."
empirical_premises: []
---

## Statement

Assume the flat effective LAD postulate [[post-rpm-lad-effective-equation]] with $\tau_e>0$ and take $F\equiv0$. In Minkowski coordinates $(x^0,x^1,x^2,x^3)$, choose constants $\theta_0\in\mathbb R$, $A\in\mathbb R\setminus\{0\}$ with units $\mathrm{s}^{-1}$, and $\tau_0\in\mathbb R$. Define for all $\tau\in\mathbb R$

$$
\theta(\tau):=\theta_0+A\tau_e e^{(\tau-\tau_0)/\tau_e},\qquad
U(\tau):=c(\cosh\theta(\tau),\sinh\theta(\tau),0,0),
$$

and let $x(\tau)=x_0+\int_{\tau_0}^{\tau}U(s)\,ds$. Then $x$ is a smooth future-timelike worldline parametrized by proper time, and it solves the adopted LAD equation with zero external force. Its proper acceleration magnitude is

$$
\sqrt{\eta(a,a)}=c|A|e^{(\tau-\tau_0)/\tau_e},
$$

so it grows exponentially as $\tau\to+\infty$. By contrast, the force-free reduced LL field in [[lem-rpm-ll-reduced-ode]] is zero on the shell and has constant-velocity solutions. This is a counterexample about the adopted ODEs, not an observed phenomenon or a statement about finite-body electrodynamics.

## Facts & Assumptions

**Given:** The flat branch of [[def-rpm-charge-spin-model]], the adopted LAD equation in [[post-rpm-lad-effective-equation]], Minkowski signature $(-,+,+,+)$, $c>0$, $\tau_e>0$, and the constants above.

[A1] Adopt the flat LAD equation as a physical model assumption and set the prescribed external two-form to zero.

[F1] [[def-hyperbolic-functions]] and [[thm-hyperbolic-identities-and-derivatives]]: $\cosh^2\theta-\sinh^2\theta=1$ and the derivatives of $\cosh$ and $\sinh$ are $\sinh$ and $\cosh$.

[F2] [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-ftc-first-part]], and [[thm-continuous-implies-integrable]]: the displayed smooth functions differentiate by the chain/product rules, and the integral defining $x$ has derivative $U$.

[F3] [[post-rpm-lad-effective-equation]]: for $F=0$, LAD reads $a=\tau_e(\dot a-\eta(a,a)U/c^2)$.

[F4] [[lem-rpm-ll-reduced-ode]]: when $F=0$, $f_0=B=0$, so the reduced LL acceleration field vanishes.

## Proof

1.1 The integral defining $x$ is well-defined on every compact $\tau$ interval because $U$ is smooth by [F2]. The fundamental theorem [F2] gives $\dot x=U$. By [F1], $\eta(U,U)=c^2(-\cosh^2\theta+\sinh^2\theta)=-c^2$. Also $U^0=c\cosh\theta>0$, so $U$ is future directed in the chosen inertial chart. Thus $\tau$ is proper time and $x$ is future timelike. [given, A1, F1, F2, algebra]

1.2 Differentiating with [F1, F2] gives

$$
a=c\theta'(\sinh\theta,\cosh\theta,0,0),\qquad
\dot a=c\theta''(\sinh\theta,\cosh\theta,0,0)+c(\theta')^2(\cosh\theta,\sinh\theta,0,0),
\qquad \eta(a,a)=c^2(\theta')^2.
$$

Consequently $\dot a-\eta(a,a)U/c^2=c\theta''(\sinh\theta,\cosh\theta,0,0)$, and the force-free equation [F3] is equivalent to $\theta'=\tau_e\theta''$. The chosen $\theta$ has $\theta'=Ae^{(\tau-\tau_0)/\tau_e}$ and $\theta''=\theta'/\tau_e$, so the equation holds identically. This proves that the curve solves the adopted LAD equation for every real proper time. [given, A1, F1, F2, F3, step 1.1, algebra]

2.1 The invariant $\eta(a,a)=c^2(\theta')^2$ gives $\sqrt{\eta(a,a)}=c|A|e^{(\tau-\tau_0)/\tau_e}$, which is unbounded toward the future. For $F=0$, [F4] gives $a_{\rm LL}=0$, hence its local solutions have constant $U$. The displayed LAD solution is non-inertial since $A\ne0$, so it demonstrates that the force-free LAD equation admits runaway solutions even though the reduced LL force-free field does not. This is an ODE comparison, not an empirical conclusion. [A1, F3, F4, step 1.2, algebra] ∎
