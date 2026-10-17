---
id: thm-rattle-second-order-global-accuracy-on-compact-tubes
kind: theorem
title: Exact RATTLE has second order global accuracy on compact tubes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - thm-local-holonomic-constrained-hamiltonian-flow
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
  - thm-rattle-exact-constraint-preservation-and-reversibility
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-mean-value-inequality-for-total-derivatives
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
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–247"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4.3 and 4.5"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Let the constrained vector field and exact RATTLE map be those of [[def-regular-holonomic-phase-space-and-dynamics]] and [[def-regular-classical-rattle-step-map]]. Suppose the exact solution on $[0,T]$ stays in a compact subset of a convex coordinate chart whose closure lies inside a regular chart, with $A(q)^{-1}$ uniformly bounded. Let $h=T/N>0$, let $z_0^h\in\mathcal M$ satisfy $\|z_0^h-z(0)\|\le C_0h^2$ in these coordinates, and let $z_{n+1}^h=\Psi_h(z_n^h)$ use the selected exact branches. For all sufficiently large $N$, the numerical path remains in the regular chart and
$$\max_{0\le n\le N}\|z_n^h-z(t_n)\|\le C_T h^2,$$
where $C_T$ is independent of $N$.

## Facts & Assumptions

**Given:** A smooth constrained vector field, its exact local flow, an exact RATTLE branch, the compact-tube hypothesis, and the initial error bound in the Statement.

[F1] [[thm-local-holonomic-constrained-hamiltonian-flow]]: the vector field is $X(q,p)=(M^{-1}p,-\nabla V(q)-J(q)^T\Lambda(q,p))$ and has a unique local flow.

[F2] [[lem-rattle-scaled-position-and-momentum-branches]]: the selected multipliers are smooth in $(h,q,p)$ and at $h=0$ both equal $\Lambda(q,p)/2$.

[F3] [[thm-rattle-exact-constraint-preservation-and-reversibility]]: $\Psi_{-h}=\Psi_h^{-1}$ on the local branches.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^3$ map has a quadratic Taylor polynomial with a cubic remainder on a compact convex chart.

[F5] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex coordinate neighborhood implies the corresponding Lipschitz bound.

## Proof

1.1 By [F1] and [F2], differentiating the RATTLE equations at $h=0$ gives $D_h\Psi_0(z)=X(z)$: the position derivative is $M^{-1}p$, and the momentum derivative is $-\nabla V-J^T(\Lambda/2+\Lambda/2)$. The selected map is $C^3$ in $(h,z)$ by [F2]. [F1, F2, algebra]

1.2 In chart coordinates write $\Psi_h(z)=z+hX(z)+h^2a(z)+O(h^3)$ uniformly on a slightly larger compact neighborhood. Substitution into the inverse equation gives $\Psi_h^{-1}(z)=z-hX(z)+h^2(DX(z)X(z)-a(z))+O(h^3)$. By [F3], this equals $\Psi_{-h}(z)=z-hX(z)+h^2a(z)+O(h^3)$. Comparing quadratic coefficients yields $a(z)=\frac12DX(z)X(z)$. [F2, F3, algebra]

1.3 Since $\Psi_0$ is the identity and $\Psi_h$ is $C^3$, its state derivative is $D_z\Psi_h=I+O(h)$ uniformly on the larger compact chart. Thus $\|D_z\Psi_h\|\le1+Lh$ for some $L\ge0$ and small $h>0$. Applying [F5] in the convex chart gives $\|\Psi_h(x)-\Psi_h(y)\|\le(1+Lh)\|x-y\|$ there. [F2, F5]

2.1 The exact flow satisfies $\dot z=X(z)$ and hence $\ddot z=DX(z)X(z)$. Its third time derivative is bounded on the compact tube. Taylor's theorem [F4] therefore gives $z(t+h)=z(t)+hX(z(t))+\frac12h^2DX(z(t))X(z(t))+O(h^3)$. Comparing with step 1.2 proves the local defect $\|\Psi_h(z(t))-z(t+h)\|\le C h^3$ uniformly in $t$. [F1, F2, F4, step 1.2]

3.1 Until a numerical state leaves the larger chart, steps 2.1 and 1.3 give $e_{n+1}\le(1+Lh)e_n+C h^3$, where $e_n=\|z_n^h-z(t_n)\|$. Induction yields $e_n\le(1+Lh)^ne_0+C h^3\sum_{j=0}^{n-1}(1+Lh)^j\le e^{LT}(C_0+CT)h^2$. For sufficiently small $h$, this bound is less than the positive distance from the exact compact path to the boundary of the larger chart, so a first-exit index cannot exist. The estimate therefore holds for every $n\le N$. [given, step 2.1, step 1.3, algebra] ∎
