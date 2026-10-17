---
id: ex-tgr-perfect-neutral-modes
kind: example
title: "Perfect sound and neutral perturbation modes"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 10
proof_strategy: direct
deps:
  - pthm-tgr-perfect-causal-linear-response
  - def-countable-choice
dependency_roles:
  pthm-tgr-perfect-causal-linear-response: physical-result
  def-countable-choice: mathematical-premise
physical_scope: "Explicit plane-wave and spatially constant solutions of the specified adiabatic perfect-material linear system; no claim that every mode decays, no nonlinear solution, and no empirical data."
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Under $\mathrm{AC}_\omega$, use the perfect linear branch of [[pthm-tgr-perfect-causal-linear-response]] with $h_0>0$, $0<a_s\le1$, and reference speed $c>0$. For any nonzero wave vector $\mathbf k\in\mathbb R^3$ in $\mathrm{m}^{-1}$ and real amplitude $A$ in Pa, define the dimensionless phase $\phi(t,\mathbf x)=\mathbf k\cdot\mathbf x-\omega t$, where $\omega=c\sqrt{a_s}\,|\mathbf k|$ has units $\mathrm{s}^{-1}$, and set

$$r(t,\mathbf x)=A\cos\phi(t,\mathbf x),\qquad w(t,\mathbf x)=\frac{A\omega}{c h_0|\mathbf k|^2}\,\mathbf k\cos\phi(t,\mathbf x).$$

This is an exact sound mode of the adopted linear system. At zero wave vector, the separate constant fields $r=r_0$ and $w=w_0$ are also exact solutions for arbitrary constants $r_0\in\mathbb R$ in Pa and $w_0\in\mathbb R^3$ dimensionless. Every nonzero such choice is a neutral mode, so linear energy contraction does not mean that every perturbation decays. These are calculated model solutions, not observations.

## Facts & Assumptions

**Given:** The perfect-material linear equations and parameter conventions in [[pthm-tgr-perfect-causal-linear-response]].

[A1] Assume $\mathrm{AC}_\omega$ as defined by [[def-countable-choice]], because the cited theorem's global existence, contraction, and finite-propagation conclusions use that hypothesis.

[F1] [[pthm-tgr-perfect-causal-linear-response]]: under its stated hypotheses, including $\mathrm{AC}_\omega$, the adopted equations are $r_t+c h_0\operatorname{div}w=0$ and $w_t+(c a_s/h_0)\nabla r=0$, with $h_0>0$, $0<a_s\le1$, and $c>0$. This example uses its exact perfect-system equations and parameter conventions.

## Verification

1.1 For $\mathbf k\ne0$, $r_t=A\omega\sin\phi$ and $\operatorname{div}w=-A\omega(c h_0)^{-1}\sin\phi$, so $r_t+c h_0\operatorname{div}w=0$. Also $w_t=A\omega^2(c h_0|\mathbf k|^2)^{-1}\mathbf k\sin\phi$ and $\nabla r=-A\mathbf k\sin\phi$. Substitution into the second equation gives a coefficient proportional to $\omega^2-c^2a_s|\mathbf k|^2$, which is zero by the definition of $\omega$. Thus both first-order equations hold pointwise. [F1, given, algebra]

2.1 At $\mathbf k=0$, define $r=r_0$ and $w=w_0$ directly rather than using the nonzero-wave formula, whose denominator would vanish. Both spatial and time derivatives are zero, so each side of both equations is zero. Nonzero choices give persistent modes; under [A1] the theorem's contractive energy context therefore does not imply that every perturbation decays. [A1, F1, given, algebra] ∎
