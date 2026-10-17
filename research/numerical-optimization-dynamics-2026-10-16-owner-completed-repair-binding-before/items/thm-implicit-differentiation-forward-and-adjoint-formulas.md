---
id: thm-implicit-differentiation-forward-and-adjoint-formulas
kind: theorem
title: "Implicit differentiation and adjoint formulas under a nonsingular residual Jacobian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [thm-euclidean-implicit-function-theorem, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6 and proof, §8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
    - title: "J. Lebl, Basic Analysis I, Theorem 8.3.7 and proof, §8.3.1"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
---

## Statement

Let $R:\Theta\times Z\to\mathbb R^m$ be $C^1$, where $\Theta\subseteq\mathbb R^p$ and $Z\subseteq\mathbb R^m$ are open. Suppose $R(\theta_0,z_0)=0$ and the state Jacobian $R_z(\theta_0,z_0)$ is invertible. The Euclidean implicit function theorem gives a local $C^1$ solution branch $z=\phi(\theta)$, and
$$D\phi(\theta_0)=-R_z(\theta_0,z_0)^{-1}R_\theta(\theta_0,z_0).$$
For a scalar $C^1$ objective $J(\theta,z)$, its derivative along that branch is
$$D(J(\theta,\phi(\theta)))|_{\theta_0}=J_\theta-J_zR_z^{-1}R_\theta.$$
Equivalently, if $\lambda$ solves $R_z^T\lambda=J_z^T$, this derivative is $J_\theta-\lambda^TR_\theta$. These formulas concern the exact local solution branch; differentiating a stopped iteration is a separate finite-map derivative.

## Facts & Assumptions

**Given:** The residual equation, a $C^1$ residual, a square nonsingular state Jacobian, and a scalar $C^1$ objective.

[F1] [[thm-euclidean-implicit-function-theorem]]: for a $C^1$ Euclidean residual with zero value and invertible state-block derivative, there is a unique local $C^1$ solution branch and $D\phi=-R_z^{-1}R_\theta$.

[F2] [[thm-chain-rule-for-total-derivatives]]: for $C^1$ maps $g,f$, $D(g\circ f)=Dg(f)Df$.

## Proof

**Proof technique:** differentiate the exact solution identity.

1.1 Apply [F1] to $R$ with parameter block $\theta$ and state block $z$. It provides the local $C^1$ branch $\phi$ and the displayed formula $D\phi=-R_z^{-1}R_\theta$, under exactly the nonsingularity hypothesis in the statement. [F1, given]

2.1 The map $\theta\mapsto J(\theta,\phi(\theta))$ is $C^1$. By [F2], its derivative at $\theta_0$ is $J_\theta+J_zD\phi$. Substituting step 1.1 yields $J_\theta-J_zR_z^{-1}R_\theta$. [F1, F2, step 1.1, algebra]

3.1 Since $R_z$ is invertible, $R_z^T$ is invertible. The adjoint equation has the unique solution satisfying $\lambda^T=J_zR_z^{-1}$, by transposing $R_z^T\lambda=J_z^T$. Therefore $J_zR_z^{-1}R_\theta=\lambda^TR_\theta$, giving the stated adjoint formula. [given, step 2.1, algebra] ∎
