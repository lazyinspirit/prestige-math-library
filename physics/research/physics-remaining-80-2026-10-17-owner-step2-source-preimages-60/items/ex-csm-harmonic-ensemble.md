---
id: ex-csm-harmonic-ensemble
kind: example
title: "Unpinned translation zero-mode divergence"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-harmonic-ensemble
dependency_roles:
  pthm-csm-harmonic-ensemble: physical-result
physical_scope: "Finite periodic harmonic chain with no pinning; the continuous translation zero mode makes the canonical partition function diverge."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §2.2.1, quadratic degrees of freedom"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Example

Take $N\ge3$ equal-mass coordinates $q_i\in\mathbb R$ in metres and momenta $p_i\in\mathbb R$ in kg m s$^{-1}$ on a periodic chain, with $q_{N+1}=q_1$, mass $m>0$ kg, spring stiffness $\kappa>0$ in J m$^{-2}$, and
$$H(q,p)=\sum_{i=1}^N\frac{p_i^2}{2m}+\frac{\kappa}{2}\sum_{i=1}^N(q_{i+1}-q_i)^2.$$
Use the same inverse temperature $\beta>0$ in J$^{-1}$ and action reference $h_0>0$ in J s as in [[pthm-csm-harmonic-ensemble]], with reference $dq\,dp/h_0^N$. The unpinned position integral is infinite, so this model has no normalized canonical probability on the full position space.

## Facts & Assumptions

**Given:** The periodic-chain Hamiltonian, $m>0$ kg, $\kappa>0$ J m$^{-2}$, $\beta>0$ J$^{-1}$, $h_0>0$ J s, and the canonical reference above.

[F1] [[pthm-csm-harmonic-ensemble]]: a full-space quadratic canonical partition is finite under the theorem's positive-definite stiffness hypothesis; a translation zero mode violates that hypothesis.

[A1] The example adopts the displayed unpinned periodic-chain Hamiltonian and full $\mathbb R^N$ displacement domain.

## Verification
1.1 Let $e_0=N^{-1/2}(1,\ldots,1)$ and choose an orthonormal basis of its Euclidean orthogonal complement. The orthogonal coordinate change $q=u e_0+v$ has absolute Jacobian $1$. Each difference $q_{i+1}-q_i$ is independent of $u$, so the potential depends only on $v$ and the momentum term only on $p$. [given, A1, algebra]



2.1 By the canonical reference convention [F1], choose any compact box $C$ of positive $(N-1+N)$-dimensional volume in the $(v,p)$ coordinates. The continuous Hamiltonian is bounded above there by some $H_C<\infty$, so on $u\in[-R,R]$ and $(v,p)\in C$ the canonical integrand is at least $e^{-\beta H_C}$. This slab contributes at least $2R e^{-\beta H_C}\operatorname{vol}(C)/h_0^N$ to the partition integral, which is unbounded as $R\to\infty$. Thus $Z=\infty$ and no normalization exists. [F1, A1, step 1.1, algebra] ∎

## Remarks

This calculation identifies a translation zero mode, not a failure of the positive-definite theorem for pinned systems.

