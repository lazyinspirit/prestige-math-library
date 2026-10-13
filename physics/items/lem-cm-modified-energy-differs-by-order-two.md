---
id: lem-cm-modified-energy-differs-by-order-two
kind: lemma
title: The optimal modified Hamiltonian differs from the original by order two
status: published
origin: pipeline
domain: mathematics
dependency_level: 15
deps:
- lem-cm-optimal-truncation-gives-exponential-local-defect
- lem-cm-truncated-log-coefficient-bounds
- lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives
- lem-cm-symmetric-log-parity-removes-odd-coefficients
dependency_roles:
  lem-cm-optimal-truncation-gives-exponential-local-defect: mathematical-premise
  lem-cm-truncated-log-coefficient-bounds: mathematical-premise
  lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives: mathematical-premise
  lem-cm-symmetric-log-parity-removes-odd-coefficients: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

Use the splitting data, constants and $N(h),H_h$ of [[lem-cm-optimal-truncation-gives-exponential-local-defect]]. There are constants $C_E,C_G<\infty$, independent of $0<h\le a/3$, such that on $D(\rho/8)$

$$|H_h-\tilde H|\le C_Eh^2,\qquad \|\nabla H_h\|\le C_G.$$

In particular $H_h$ is real analytic on the real part. Its additive normalization is $H_h(0)=H(0)$, so the comparison includes constants.

## Facts & Assumptions

**Given:** The stated data and normalized finite sum.

[F1] [[lem-cm-truncated-log-coefficient-bounds]] gives $\max_i|(X_j)_i|\le(8M/3)(C_0Mj/\rho)^{j-1}$ for $j\ge2$ on the common inner domain; [[lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives]] gives $\|\nabla H_j\|\le\sqrt{2d}\beta_j$ and $|H_j(Z)|\le\sqrt{2d}\beta_j\|Z\|$.

[F2] [[lem-cm-symmetric-log-parity-removes-odd-coefficients]] gives $X_2=H_2=0$, and realness and holomorphy of all primitives are proved in the primitive lemma.

## Proof

1.1 Summable correction. Put $b=C_0M/\rho$ and $u_j=(bhj)^{j-1}$ for $j\ge3$. Direct division gives $u_{j+1}/u_j=bh(j+1)(1+1/j)^{j-1}\le ebh(j+1)$. For $j<N$, $h(j+1)\le hN\le a$, so this ratio is at most $eC_0/C_2<1/2$. Therefore $\sum_{j=3}^{N}u_j\le2u_3=18b^2h^2$, with the empty sum understood as zero. [given, F1, algebra]

2.1 Hamiltonian comparison. The bounded set $D(\rho/8)$ has $R=\sup_{Z\in D(\rho/8)}\|Z\|<\infty$, since $U$ is bounded. By [F1], [F2] and step 1.1, $|H_h-\tilde H|\le R\sqrt{2d}(8M/3)18b^2h^2$, and the same bound without $R$ controls $\|\nabla(H_h-\tilde H)\|$. As $\|X_{\tilde H}\|\le2M$ and $J$ is an isometry, $\|\nabla\tilde H\|\le2M$. The gradient is therefore bounded independently of $h$ after fixing $h\le a/3$. Reality, analyticity and normalization follow term by term in the finite sum. [step 1.1, F1, F2, algebra] ∎
