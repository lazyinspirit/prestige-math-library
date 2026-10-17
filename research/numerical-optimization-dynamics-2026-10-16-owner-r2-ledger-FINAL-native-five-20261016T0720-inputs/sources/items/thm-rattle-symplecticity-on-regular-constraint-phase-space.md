---
id: thm-rattle-symplecticity-on-regular-constraint-phase-space
kind: theorem
title: Exact RATTLE is symplectic on the constrained phase space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-rattle-exact-constraint-preservation-and-reversibility
  - def-regular-holonomic-phase-space-and-dynamics
  - lem-regular-holonomic-phase-space-is-symplectic-cotangent
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
  - def-symplectic-form-and-symplectic-manifold
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–246"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4.4 and 5.1.2–5.1.3"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

For every sufficiently small signed step in a compact regular chart, the exact map $\Psi_h$ of [[def-regular-classical-rattle-step-map]] preserves $\omega_{\mathcal M}$:
$$\Psi_h^*\omega_{\mathcal M}=\omega_{\mathcal M}.$$
Here symplecticity of a map means that it is a local diffeomorphism whose pullback preserves the two-form; the form itself is symplectic in the sense of [[def-symplectic-form-and-symplectic-manifold]].

## Facts & Assumptions

**Given:** A regular compact chart, the exact selected RATTLE map, and the symplectic cotangent coordinates in the Statement.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $\omega_{\mathcal M}$ is the restriction of the ambient canonical form $\omega_0=\sum dq_i\wedge dp_i$.

[F2] [[lem-regular-holonomic-phase-space-is-symplectic-cotangent]]: in local configuration coordinates $x$, a consistent ambient momentum represents a cotangent covector $\pi=D\phi(x)^Tp$ and $\omega_{\mathcal M}=\sum dx_i\wedge d\pi_i$.

[F3] [[def-regular-classical-rattle-step-map]]: RATTLE uses the two half-force updates, the constrained drift $q_1-q=hM^{-1}p_{1/2}$, and normal constraint impulses at $q$ and $q_1$.

[F4] [[lem-rattle-scaled-position-and-momentum-branches]]: these formulas define a smooth local map on the selected branch.

[F5] [[def-symplectic-form-and-symplectic-manifold]]: a symplectic form is a smooth closed two-form that is pointwise nondegenerate.

[F6] [[thm-rattle-exact-constraint-preservation-and-reversibility]]: the signed-step map has inverse $\Psi_{-h}$ on the selected regular branches.

## Proof

1.1 If $h=0$, then $\Psi_0$ is the identity and preserves $\omega_{\mathcal M}$. Assume $h\ne0$. On a local configuration chart define $L_h(q,q_1)=\frac{1}{2h}(q_1-q)^TM(q_1-q)-\frac h2(V(q)+V(q_1))$. Differentiating gives $-D_1L_h=p_{1/2}+\frac h2\nabla V(q)$ and $D_2L_h=p_{1/2}-\frac h2\nabla V(q_1)$. By [F3], the first expression differs from $p$ by the normal vector $-hJ(q)^T\lambda$, and the second differs from $p_1$ by $hJ(q_1)^T\mu$. Each normal vector vanishes on tangent variations of $Q$, so the restricted cotangent covectors satisfy $p|_{T_qQ}=-D_1L_h|_{T_qQ}$ and $p_1|_{T_{q_1}Q}=D_2L_h|_{T_{q_1}Q}$. [F3, given, algebra]

2.1 Let $\theta$ be the canonical one-form on $T^*Q$, $\theta_{(q,\pi)}(\delta q,\delta\pi)=\pi(\delta q)$. The identities in step 1.1 give $\Psi_h^*\theta-\theta=d(L_h(q,q_1(q,p)))$ on the input chart, because both sides applied to an input variation equal $D_1L_h\,\delta q+D_2L_h\,\delta q_1$. [F2, step 1.1, algebra]

3.1 Taking the exterior derivative of step 2.1 yields $\Psi_h^*d\theta=d\theta$. By [F1], $\omega_{\mathcal M}$ is the restriction of the ambient canonical form; [F2] identifies it as $-d\theta$ in cotangent coordinates. Hence this is $\Psi_h^*\omega_{\mathcal M}=\omega_{\mathcal M}$. The branch map is smooth by [F4] and locally invertible by [F6]. By [F2] and [F5], the preserved form is the symplectic form on $\mathcal M$; this proves the stated symplecticity. [F1, F2, F4, F5, F6, step 2.1] ∎
