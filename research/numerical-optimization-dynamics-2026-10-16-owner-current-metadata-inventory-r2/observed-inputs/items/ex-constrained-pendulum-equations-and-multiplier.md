---
id: ex-constrained-pendulum-equations-and-multiplier
kind: example
title: The constrained pendulum multiplier follows from tangency
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - thm-local-holonomic-constrained-hamiltonian-flow
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.1, p. 237"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §5.1"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Example

For a planar pendulum of mass $m>0$ and rod length $\ell>0$, let $M=mI_2$, $V(q)=mgq_2$, and $c(q)=(\|q\|_2^2-\ell^2)/2$. If $c(q)=0$ and $q^Tp=0$, the multiplier in the constrained equations is
$$\lambda(q,p)=\frac{\|p\|_2^2/m-mgq_2}{\ell^2}.$$
At the bottom rest state $q=(0,-\ell)$, $p=0$, this gives $\lambda=mg/\ell$ and zero acceleration.

## Facts & Assumptions

**Given:** $M=mI_2$, the constraint and potential in the Example, and consistent data $c(q)=0$, $q^Tp=0$.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $A(q)=J(q)M^{-1}J(q)^T$ and $\lambda=A^{-1}(D^2c[v,v]-JM^{-1}\nabla V)$, where $v=M^{-1}p$.

[F2] [[thm-local-holonomic-constrained-hamiltonian-flow]]: these equations define the unique local constrained flow for consistent data in the regular chart.

## Verification

1.1 Here $J(q)=q^T$, $A(q)=q^Tq/m=\ell^2/m$, $D^2c[v,v]=\|p\|_2^2/m^2$, and $JM^{-1}\nabla V=gq_2$. Substitution into [F1] gives $\lambda=(\|p\|_2^2/m-mgq_2)/\ell^2$. [given, F1, algebra]

2.1 At $q=(0,-\ell)$ and $p=0$, the multiplier is $mg/\ell$. The acceleration is $\dot p=-mg(0,1)-\lambda(0,-\ell)=(0,0)$; moreover $c(q)=0$ and $q^Tp=0$, so this is a consistent equilibrium of the local flow [F2]. [F1, F2, step 1.1, algebra] ∎
