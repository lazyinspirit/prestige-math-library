---
id: cex-tgr-entropy-type-identification
kind: counterexample
title: Identical geometry and energy data with different finite quantum entropy
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references: []
verification:
  precheck: pass
---

## Statement refuted

On the complex Hilbert space $\mathcal H=\mathbb C^2$, a density matrix means a positive semidefinite $2\times2$ matrix $\rho$ with $\operatorname{Tr}\rho=1$. Let the Hamiltonian be the zero self-adjoint matrix $H=0$, define its energy by $E_H(\rho)=\operatorname{Tr}(\rho H)$, fix one geometric datum $a>0$, and fix a positive scalar $k_B>0$. Define the finite spectral entropy by
$$S(\rho)=-k_B\sum_{\lambda\in\operatorname{spec}(\rho)}\lambda\log\lambda,$$
where eigenvalues are counted with multiplicity, $\log$ is the natural logarithm, and $0\log0:=0$. The statement that the fixed data $(a,E_H(\rho))=(a,0)$ determine one value of $S(\rho)$ for every density matrix $\rho$ on $\mathcal H$ is false.

The scalar $a$ is held fixed as a mathematical label; $H$ is only the displayed finite matrix. No physical units, dynamics, horizon state, or coupling to geometry is part of this construction.

## Facts & Assumptions

**Given:** The definitions in the Statement, with fixed $a>0$ and $k_B>0$.

[A1] The space is $\mathcal H=\mathbb C^2$, $H=0$, $a>0$ is fixed, and $k_B>0$ is fixed.

[A2] For a density matrix $\rho$, $E_H(\rho)=\operatorname{Tr}(\rho H)$ and $S(\rho)=-k_B\sum_{\lambda\in\operatorname{spec}(\rho)}\lambda\log\lambda$, with eigenvalues counted with multiplicity and $0\log0=0$.

## Counterexample

**Given:** Use the two explicit diagonal matrices below with the same $a$, $H$, and $k_B$.

1.1 Let $\rho_1=\operatorname{diag}(1,0)$ and $\rho_2=\operatorname{diag}(1/2,1/2)$. Both are positive semidefinite and have trace one, so they are density matrices; since $H=0$, both have energy $E_H(\rho_i)=\operatorname{Tr}(\rho_iH)=0$, and both share the same fixed datum $a$. [given, A1, construct, algebra]

2.1 The eigenvalues of $\rho_1$ are $1,0$, so [A2] gives $S(\rho_1)=-k_B(1\log1+0\log0)=0$. The eigenvalues of $\rho_2$ are $1/2,1/2$, so $S(\rho_2)=-k_B\log(1/2)=k_B\log2>0$. Thus the same geometry-energy data occur with different finite entropies. [given, A2, step 1.1, algebra] ∎

## Remarks

This finite-dimensional matrix counterexample does not assert a coupled gravitational solution, backreaction, a horizon state, or a continuum entropy construction. It only shows that the displayed geometric label and energy value do not select a unique finite spectral entropy.
