---
id: ex-emx-free-runaway
kind: example
title: "Zero force leaves an exponentially growing acceleration branch"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-real-exponential-function-and-e
  - pthm-emx-runaway-preacceleration
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-derivative-of-exponential
dependency_roles:
  def-real-exponential-function-and-e: mathematical-premise
  pthm-emx-runaway-preacceleration: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A constructed mathematical example in the adopted Abraham–Lorentz ODE: zero prescribed force admits an exponentially growing acceleration branch, and position plus velocity at one time do not select it. This is a model property, not an observed particle trajectory or an empirical claim."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Fritz Rohrlich, The Dynamics of a Charged Particle, arXiv:0804.4614 (complete 11-page full-text paper)"
      url: "https://arxiv.org/pdf/0804.4614"
      locator: "Section 1, PDF pp. 2–3: the runaway solution of the nonrelativistic Abraham–Lorentz equation."
    - title: "Jack Vanderlinde, Classical Electromagnetic Theory, Fundamental Theories of Physics, Springer (2004), complete 426-page book PDF"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf"
      locator: "Chapter 12, §12.4, printed pp. 338–339 (PDF pp. 345–346), equation (12–38) and the homogeneous solutions."
---

## Example

In the adopted equation, set $f=0$ and fix any $t_0\in\mathbb R$. For every constant acceleration vector $C\in\mathbb R^3$ with units $\mathrm{m\,s^{-2}}$, the acceleration $a_C(t)=C\exp((t-t_0)/\tau)$ is a solution. For any fixed position $x_0$ and velocity $v_0$ at $t_0$, a trajectory with that acceleration is

$$x_C(t)=x_0+v_0(t-t_0)+C\tau^2\left(\exp((t-t_0)/\tau)-1-\frac{t-t_0}{\tau}\right).$$

Thus the same position and velocity at $t_0$ admit different acceleration branches; $C\ne0$ grows exponentially as $t\to\infty$. This does not establish that any physical charge follows such a trajectory.

## Example references

[[pthm-emx-runaway-preacceleration]]

## Facts & Assumptions

**Given:** The adopted equation with $f=0$, $m,\tau>0$, and prescribed data $x(t_0)=x_0$, $\dot x(t_0)=v_0$.

[A1] For zero force, every acceleration solution is $a_*(t)+C\exp((t-t_0)/\tau)$, and the bounded-future branch is $a_*=0$. ([[pthm-emx-runaway-preacceleration]])

[F2] The real exponential is defined by its convergent power series and has derivative $\exp'=\exp$; the usual product and chain rules hold. ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]])

## Verification

1.1 Since $\frac{d}{dt}\exp((t-t_0)/\tau)=\tau^{-1}\exp((t-t_0)/\tau)$, the acceleration $a_C$ satisfies $a_C-\tau\dot a_C=0$, hence $m(a_C-\tau\dot a_C)=f$. [A1, F2, algebra]

2.1 Differentiating $x_C$ twice gives $\ddot x_C=a_C$; at $t=t_0$ the exponential factor is $1$, so $x_C(t_0)=x_0$ and $\dot x_C(t_0)=v_0$. Choosing $C=0$ and any $C\ne0$ therefore gives different solutions with the same position and velocity data, and the nonzero branch is unbounded in the future by exponential growth. [A1, F2, step 1.1, algebra] ∎
