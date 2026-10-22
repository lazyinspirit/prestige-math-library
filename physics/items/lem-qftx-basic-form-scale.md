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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with Killing form $B_{\mathrm{Kill}}$. Choose a Cartan subalgebra $\mathfrak h$ and a positive root system $\Phi^+$ with highest root $\theta$, and put $\rho:=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$. For each $\lambda\in\mathfrak h^*$ let $H_{\lambda,\mathrm{Kill}}\in\mathfrak h$ be the unique vector satisfying $B_{\mathrm{Kill}}(H_{\lambda,\mathrm{Kill}},H)=\lambda(H)$ for every $H\in\mathfrak h$, and define the induced form on $\mathfrak h^*$ by $(\lambda,\mu)_{\mathrm{Kill}}:=B_{\mathrm{Kill}}(H_{\lambda,\mathrm{Kill}},H_{\mu,\mathrm{Kill}})$. This extends the supplied convention $B_{\mathrm{Kill}}(H_{\alpha,\mathrm{Kill}},H)=\alpha(H)$ for roots $\alpha$. Set $c:=2/(\theta,\theta)_{\mathrm{Kill}}$ and $B_0:=B_{\mathrm{Kill}}/c$. For each $\lambda\in\mathfrak h^*$, let $H_{\lambda,0}\in\mathfrak h$ satisfy $B_0(H_{\lambda,0},H)=\lambda(H)$ for every $H\in\mathfrak h$, and put $(\lambda,\mu)_0:=B_0(H_{\lambda,0},H_{\mu,0})$. Then $(\theta,\theta)_0=2$. Define the coroot $\theta^\vee:=2H_{\theta,0}/(\theta,\theta)_0=H_{\theta,0}$ and the dual Coxeter number $h^\vee:=1+\rho(\theta^\vee)$. Then

$$B_{\mathrm{Kill}}=2h^\vee B_0.$$

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra, its Killing form, a chosen Cartan and positive root system, highest root $\theta$, Weyl vector $\rho$, and the normalized form $B_0$ specified in the Statement.

[F1] [[def-killing-form-of-a-semisimple-lie-algebra]]: $B_{\mathrm{Kill}}(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$.

[F2] [[lem-finite-semisimple-cartan-root-and-string-structure]]: root spaces are one-dimensional, the Killing form is nondegenerate on the Cartan, and for each root $\alpha$ the vector $H_{\alpha,\mathrm{Kill}}$ is characterized by $B_{\mathrm{Kill}}(H_{\alpha,\mathrm{Kill}},H)=\alpha(H)$. The adjoint representation has highest weight $\theta$, and the root system has the stated finite Euclidean structure.

[F3] [[def-quadratic-casimir-element]]: for Killing-dual bases, $C_{\mathrm{Kill}}=\sum_a x_ax^a$ in $U(\mathfrak g)$.

[F4] [[def-weyl-vector-rho-for-a-chosen-positive-system]]: $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$.

[F5] [[prop-casimir-eigenvalue-on-a-highest-weight-module]]: on a cyclic highest-weight module of weight $\lambda$, the Killing-form Casimir acts by $(\lambda,\lambda+2\rho)_{\mathrm{Kill}}$.

## Proof

**Proof technique:** compute the adjoint Casimir eigenvalue twice, first by the trace definition of the Killing form and then by the highest-weight formula.

1.1 The adjoint module is irreducible because any invariant subspace of $\mathfrak g$ is an ideal and $\mathfrak g$ is simple. A highest-root vector generates this nonzero module, so [F5] with $\lambda=\theta$ says the Casimir [F3] acts on $\mathfrak g$ by a scalar $\lambda_{\mathrm{ad}}=(\theta,\theta+2\rho)_{\mathrm{Kill}}$. On the other hand, for any Killing-dual bases $(x_a),(x^a)$, its adjoint action is $\sum_a\operatorname{ad}_{x_a}\operatorname{ad}_{x^a}$; its trace is $\sum_a B_{\mathrm{Kill}}(x_a,x^a)=\dim\mathfrak g$ by [F1]. Since the action is scalar on the nonzero space $\mathfrak g$, this trace gives $\lambda_{\mathrm{ad}}=1$. [F1, F2, F3, F5, given, algebra]

2.1 Since $B_0=B_{\mathrm{Kill}}/c$, the defining equations give $H_{\lambda,0}=cH_{\lambda,\mathrm{Kill}}$ for every $\lambda\in\mathfrak h^*$, and hence $(\lambda,\mu)_0=c(\lambda,\mu)_{\mathrm{Kill}}$. The choice of $c$ gives $(\theta,\theta)_0=2$. By definition, $\theta^\vee=H_{\theta,0}$, and $(\rho,\theta)_0=B_0(H_{\rho,0},H_{\theta,0})=\rho(H_{\theta,0})=\rho(\theta^\vee)=h^\vee-1$. Therefore $\lambda_{\mathrm{ad}}=(\theta,\theta+2\rho)_{\mathrm{Kill}}=c^{-1}(2+2(h^\vee-1))=2h^\vee/c$. [F2, F4, step 1.1, algebra]

3.1 Equating the two expressions for $\lambda_{\mathrm{ad}}$ from steps 1.1 and 2.1 gives $1=2h^\vee/c$, hence $c=2h^\vee$. Substitution into $B_0=B_{\mathrm{Kill}}/c$ proves the asserted form identity. [step 1.1, step 2.1, algebra] ∎
