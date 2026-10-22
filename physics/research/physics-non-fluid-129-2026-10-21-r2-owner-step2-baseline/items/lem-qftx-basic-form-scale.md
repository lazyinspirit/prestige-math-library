---
id: lem-qftx-basic-form-scale
kind: lemma
title: "The basic form is the Killing form divided by twice the dual Coxeter number"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-killing-form-of-a-semisimple-lie-algebra
  - def-quadratic-casimir-element
  - prop-casimir-eigenvalue-on-a-highest-weight-module
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-finite-semisimple-cartan-root-and-string-structure
dependency_roles:
  def-killing-form-of-a-semisimple-lie-algebra: mathematical-premise
  def-quadratic-casimir-element: mathematical-premise
  prop-casimir-eigenvalue-on-a-highest-weight-module: mathematical-premise
  def-weyl-vector-rho-for-a-chosen-positive-system: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the root system and all sums are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pavel I. Etingof, Igor B. Frenkel, and Alexander A. Kirillov Jr., Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations"
      url: "https://djvu.online/file/elCdJNnaapAuA"
      locator: "Lecture 2, §2.5, printed pp. 19–20: long-root normalization, the dual Coxeter number, and the adjoint Casimir eigenvalue."
verification:
  precheck: pending
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with Killing form $B_{\mathrm{Kill}}$. Choose a Cartan subalgebra, a positive root system, its highest root $\theta$, and the Weyl vector $\rho$. Let $B_0:=B_{\mathrm{Kill}}/c$ be the scalar normalization for which the induced form on the root space satisfies $(\theta,\theta)_0=2$; equivalently, define $c:=2/(\theta,\theta)_{\mathrm{Kill}}$, where the root pairing is induced by $B_{\mathrm{Kill}}$. Put $\theta^\vee:=2\theta/(\theta,\theta)_0=\theta$ and $h^\vee:=1+(\rho,\theta^\vee)_0$. Then

$$B_{\mathrm{Kill}}=2h^\vee B_0.$$

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra, its Killing form, a chosen Cartan and positive root system, highest root $\theta$, Weyl vector $\rho$, and the normalized form $B_0$ specified in the Statement.

[F1] [[def-killing-form-of-a-semisimple-lie-algebra]]: $B_{\mathrm{Kill}}(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$.

[F2] [[lem-finite-semisimple-cartan-root-and-string-structure]]: root spaces are one-dimensional, the Killing form is nondegenerate on the Cartan, the adjoint representation has highest weight $\theta$, and the root system has the stated finite Euclidean structure.

[F3] [[def-quadratic-casimir-element]]: for Killing-dual bases, $C_{\mathrm{Kill}}=\sum_a x_ax^a$ in $U(\mathfrak g)$.

[F4] [[def-weyl-vector-rho-for-a-chosen-positive-system]]: $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$.

[F5] [[prop-casimir-eigenvalue-on-a-highest-weight-module]]: on a cyclic highest-weight module of weight $\lambda$, the Killing-form Casimir acts by $(\lambda,\lambda+2\rho)_{\mathrm{Kill}}$.

## Proof

**Proof technique:** compute the adjoint Casimir eigenvalue twice, first by the trace definition of the Killing form and then by the highest-weight formula.

1.1 The adjoint module is irreducible because any invariant subspace of $\mathfrak g$ is an ideal and $\mathfrak g$ is simple. A highest-root vector generates this nonzero module, so [F5] with $\lambda=\theta$ says the Casimir [F3] acts on $\mathfrak g$ by a scalar $\lambda_{\mathrm{ad}}=(\theta,\theta+2\rho)_{\mathrm{Kill}}$. On the other hand, for any Killing-dual bases $(x_a),(x^a)$, its adjoint action is $\sum_a\operatorname{ad}_{x_a}\operatorname{ad}_{x^a}$; its trace is $\sum_a B_{\mathrm{Kill}}(x_a,x^a)=\dim\mathfrak g$ by [F1]. Since the action is scalar on the nonzero space $\mathfrak g$, this trace gives $\lambda_{\mathrm{ad}}=1$. [F1, F2, F3, F5, given, algebra]

2.1 The induced root pairing scales inversely to the form on $\mathfrak g$: since $B_0=B_{\mathrm{Kill}}/c$, one has $(\alpha,\beta)_0=c(\alpha,\beta)_{\mathrm{Kill}}$. The normalization gives $(\theta,\theta)_0=2$, hence $\theta^\vee=\theta$, and the definition of $h^\vee$ gives $(\rho,\theta)_0=h^\vee-1$. Therefore $\lambda_{\mathrm{ad}}=(\theta,\theta+2\rho)_{\mathrm{Kill}}=c^{-1}(2+2(h^\vee-1))=2h^\vee/c$. [F2, F4, step 1.1, algebra]

3.1 Equating the two expressions for $\lambda_{\mathrm{ad}}$ from steps 1.1 and 2.1 gives $1=2h^\vee/c$, hence $c=2h^\vee$. Substitution into $B_0=B_{\mathrm{Kill}}/c$ proves the asserted form identity. [step 1.1, step 2.1, algebra] ∎
