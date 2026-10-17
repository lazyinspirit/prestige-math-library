---
id: ex-rigid-bond-rattle-free-rotor
kind: example
title: RATTLE gives an exact step and a cubic phase defect for a free rigid bond
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
  - thm-local-holonomic-constrained-hamiltonian-flow
  - thm-rattle-exact-constraint-preservation-and-reversibility
  - thm-rattle-second-order-global-accuracy-on-compact-tubes
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–246"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Example

Let $M=mI_2$, $m,\ell,\omega>0$, $V=0$, and $c(q)=(\|q\|_2^2-\ell^2)/2$. Start from $q_0=(\ell,0)$ and $p_0=(0,m\omega\ell)$, and take $0<h\omega\le\frac12$. The selected exact RATTLE step has
$$q_1=\ell\bigl(\sqrt{1-h^2\omega^2},h\omega\bigr),\qquad p_1=m\omega\ell\bigl(-h\omega,\sqrt{1-h^2\omega^2}\bigr).$$
Its position constraint and momentum tangency are exact. The exact constrained flow rotates by angle $h\omega$, whereas RATTLE rotates by $\arcsin(h\omega)$, so the one-step phase defect is $O(h^3)$ as $h\omega\to0$.

## Facts & Assumptions

**Given:** $M=mI_2$, the circle constraint, the free-particle potential, initial data, and step range in the Example.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: consistency is $c(q)=0$ and $q^TM^{-1}p=0$.

[F2] [[def-regular-classical-rattle-step-map]]: the exact position and momentum updates use the two force-level multipliers and impose $c(q_1)=0$ and $q_1^TM^{-1}p_1=0$.

[F3] [[thm-local-holonomic-constrained-hamiltonian-flow]]: consistent data evolve by $\dot q=M^{-1}p$ and $\dot p=-\nabla V-J^T\lambda$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^3$ scalar function on a convex interval has its degree-two Taylor polynomial with a cubic Lagrange remainder.

## Verification

1.1 The initial data are consistent because $\|q_0\|_2=\ell$ and $q_0^Tp_0=0$. The position multiplier equation gives $q_1=q_0+\frac hm(p_0-h\lambda q_0)$; choosing $\lambda=m(1-\sqrt{1-h^2\omega^2})/h^2=m\omega^2/(1+\sqrt{1-h^2\omega^2})$ yields the stated $q_1$, whose squared norm is $\ell^2$. This multiplier tends to $m\omega^2/2$, the position branch center. [given, F1, F2, algebra]

2.1 With $\mu=\lambda$, the final RATTLE equation gives the stated $p_1$; $\mu$ has the same limit $m\omega^2/2$, so the unique local branch selects this root. Direct multiplication gives $q_1^Tp_1=0$ and $\|p_1\|_2=m\omega\ell$, so both exact constraints hold. [F1, F2, step 1.1, algebra]

3.1 The continuous multiplier is $\lambda_c=m\omega^2$, hence the exact flow is $q(t)=\ell(\cos\omega t,\sin\omega t)$ and $p(t)=m\omega\ell(-\sin\omega t,\cos\omega t)$. This solves [F3] and agrees with the initial data. The RATTLE position angle is $\theta_h=\arcsin(h\omega)$. Taylor's theorem [F4] on $0\le h\omega\le1/2$ gives $\arcsin(h\omega)-h\omega=O((h\omega)^3)$. Since $\omega$ is fixed, the angle defect is $O(h^3)$ as stated. [F3, F4, step 1.1, step 2.1, algebra] ∎
