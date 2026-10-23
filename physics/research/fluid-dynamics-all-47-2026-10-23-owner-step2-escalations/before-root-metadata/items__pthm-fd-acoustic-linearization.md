---
id: pthm-fd-acoustic-linearization
kind: physics-theorem
title: "Positive-response linear sound in adopted barotropic fluid"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-barotropic-euler-model
  - post-fd-local-equilibrium
  - lem-fd-response-acoustic-algebra
dependency_roles:
  def-fd-barotropic-euler-model: formulation-prerequisite
  post-fd-local-equilibrium: physical-assumption
  lem-fd-response-acoustic-algebra: mathematical-premise
justified_by: []
aliases: []
physical_scope: >-
  First variation about a uniform rest state of the adopted smooth,
  positive-density barotropic model when its pressure law is the fixed-entropy
  restriction of the adopted local state relation. The prediction is linear;
  no finite-amplitude error, lifespan, material measurement or empirical
  sound-speed claim is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§§4.4.2–4.4.4, printed pp. 146–151"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.5.1–6.5.2, printed pp. 242–244"
verification:
  precheck: pending
---

## Statement

Let $I\subset\mathbb R$ be a nonempty open time interval and $\Omega\subset I\times\mathbb R^3$ a nonempty open domain for the model fields. Let $e\in C^2(\mathcal U)$ be the local specific-energy relation on an open $\mathcal U\subset(0,\infty)\times\mathbb R$, with state coordinates $(v,s)$, $T=e_s$, and $p=-e_v$; each state partial derivative holds the other coordinate fixed. Fix $(v_b,s_b)\in\mathcal U$ with $T_b>0$ and $e_{ss}(v_b,s_b)>0$, set $\rho_b=1/v_b$, and take a barotropic pressure law $P\in C^1((0,\infty))$ that agrees with $p(1/\rho,s_b)$ on an open density interval $J_\rho\subset(0,\infty)$ containing $\rho_b$, with $(1/\rho,s_b)\in\mathcal U$ for every $\rho\in J_\rho$. This is the fixed-entropy restriction of the adopted local state relation. The smooth barotropic Euler model is linearized about the uniform rest state $(\rho,u)=(\rho_b,0)$. For $C^2$ perturbation fields $\delta\rho:I\times\mathbb R^3\to\mathbb R$ and $w:I\times\mathbb R^3\to\mathbb R^3$, the first variation at $\varepsilon=0$ after $\rho=\rho_b+\varepsilon\delta\rho$, $u=\varepsilon w$ is
$$ \partial_t\delta\rho+\rho_b\operatorname{div}w=0,\qquad \rho_b\partial_tw+P'(\rho_b)\nabla\delta\rho=0,\qquad \partial_{tt}\delta\rho=c_s^2\Delta\delta\rho, \quad c_s^2=P'(\rho_b)=v_b^2e_{vv}(v_b,s_b). $$
The sign of $c_s^2$ is not assumed in the base model. If $c_s^2>0$, define $c_s=\sqrt{c_s^2}$. For every nonzero $k\in\mathbb R^3$, with $\omega=c_s|k|$, the fields
$$ \delta\rho=A\cos(k\cdot x-\omega t),\qquad w=\frac{\omega A}{\rho_b|k|^2}k\cos(k\cdot x-\omega t) $$
solve the first-variation system for every real amplitude $A$. They are exact solutions of the linearized equations, not finite-amplitude approximations with an automatic error or lifespan bound. No empirical value of $c_s$ is asserted.

## Statement references

[David Tong, *Fluid Mechanics*, Part III lecture notes, §§4.4.2–4.4.4, printed pp. 146–151](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.5.1–6.5.2, printed pp. 242–244](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** A smooth positive-density barotropic model, a local $C^2$ state relation, a fixed-entropy pressure law, and the uniform rest state specified in the Statement.

[L1] [[def-fd-barotropic-euler-model]]: $\rho>0$, the model equations are $\partial_t\rho+\operatorname{div}(\rho u)=0$ and $\rho D_tu+\nabla P(\rho)=0$, and $P\in C^1((0,\infty))$. Its current batch-11 Definition gives this exact local model and adds no sign condition on $P'$.

[A1] [[post-fd-local-equilibrium]]: $v=1/\rho$, $e\in C^2(\mathcal U)$, $T=e_s>0$, and $p=-e_v$ are adopted local state values. Its current batch-11 Postulate states this local equilibrium assumption explicitly.

[L2] [[lem-fd-response-acoustic-algebra]]: for $P(\rho)=p(1/\rho,s_b)$, the exact fixed-entropy derivative is $P'(\rho_b)=v_b^2e_{vv}(v_b,s_b)$, and the first variation of the same barotropic equations is the displayed linear system. The current Statement, hypotheses and complete proof were inspected; step1Decision currently reports ready. This is authoring readiness, not independent review approval.

[A2] The perturbation fields are differentiated at $\varepsilon=0$; this first variation is not asserted to approximate a nonlinear solution for any specified finite $\varepsilon$.

## Proof

1.1 Since $P(\rho)=p(1/\rho,s_b)$ on $J_\rho$ and $p=-e_v$, the chain rule at fixed $s_b$ gives $P'(\rho_b)=p_v(v_b,s_b)(-1/\rho_b^2)=(-e_{vv})(-v_b^2)=v_b^2e_{vv}$. This is $c_s^2$ by definition. [A1, L2, given, algebra]

2.1 Substitute $\rho_\varepsilon=\rho_b+\varepsilon\delta\rho$ and $u_\varepsilon=\varepsilon w$ into the model equations from [L1], with $\varepsilon$ sufficiently close to zero locally at each point that $\rho_\varepsilon\in J_\rho$. The order-$\varepsilon$ continuity term is $\partial_t\delta\rho+\rho_b\operatorname{div}w$. The convective term in momentum is order $\varepsilon^2$, while differentiability of $P$ gives $\nabla P(\rho_\varepsilon)=\varepsilon P'(\rho_b)\nabla\delta\rho+o(\varepsilon)$. Dividing by $\varepsilon$ and taking the derivative at zero yields the stated first-variation system. [A2, L1, step 1.1, algebra]

3.1 Differentiate the first equation of the first-variation system in time. Take the divergence of the second equation; because $\rho_b$ and $P'(\rho_b)=c_s^2$ are constant, substitution gives $\partial_{tt}\delta\rho=c_s^2\Delta\delta\rho$. [L2, step 2.1, algebra]

4.1 Suppose $c_s^2>0$, take $k\ne0$, and put $\omega=c_s|k|$. For the stated fields, $\partial_t\delta\rho=\omega A\sin(k\cdot x-\omega t)$, $\nabla\delta\rho=-Ak\sin(k\cdot x-\omega t)$, $\operatorname{div}w=-\omega A\sin(k\cdot x-\omega t)/\rho_b$, and $\partial_tw=\omega^2Ak\sin(k\cdot x-\omega t)/(\rho_b|k|^2)$. The continuity equation follows from the first and third expressions; the momentum equation follows from $\omega^2=c_s^2|k|^2$. [L2, step 2.1, given, algebra] ∎

