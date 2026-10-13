---
id: lem-cm-legendre-map-local-invertibility
kind: lemma
title: "Nonsingular velocity Hessian is equivalent to invertibility of the Legendre derivative, hence gives a local C^1 inverse"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-rank-nullity, def-cm-legendre-map-in-a-time-dependent-chart, def-cm-time-dependent-lagrangian-and-action, thm-euclidean-inverse-function-theorem, thm-continuous-partial-derivatives-imply-total-differentiability, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-linear-map, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-c-one-map-and-local-inverse, cor-square-matrix-invertible-iff-determinant-is-a-unit]
dependency_roles:
  thm-rank-nullity: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-c-one-map-and-local-inverse: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2 (Legendre Transformation between Lagrangian and Hamiltonian mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.1 (inversion of the Legendre transform where the maximum exists), printed pages 82-83"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathcal L:J\times U\times\mathbb R^n\to\mathbb R$ be a fibre-full time-dependent Lagrangian
chart of class $C^2$ with Legendre map $\mathbb F_{\mathcal L}$
([[def-cm-legendre-map-in-a-time-dependent-chart]]). Then:

1. $\mathbb F_{\mathcal L}$ is $C^1$ and at every $(t,q,v)$ its total derivative acts on
   $(\tau,\delta q,\delta v)\in\mathbb R\times\mathbb R^n\times\mathbb R^n$ by

$$D\mathbb F_{\mathcal L}(t,q,v)(\tau,\delta q,\delta v) =\Bigl(\tau,\ \delta q,\ \mathcal L_{vt}(t,q,v)\tau+\mathcal L_{vq}(t,q,v)\delta q+\mathcal L_{vv}(t,q,v)\delta v\Bigr);$$

2. $D\mathbb F_{\mathcal L}(t,q,v)$ is invertible ([[def-invertible-euclidean-linear-map]]) if and
   only if $\det\mathcal L_{vv}(t,q,v)\ne0$; consequently $\mathbb F_{\mathcal L}$ is regular at
   $(t,q,v)$ in the sense of [[def-cm-legendre-map-in-a-time-dependent-chart]] exactly when its
   derivative there is invertible;
3. if $\mathcal L_{vv}(t_0,q_0,v_0)$ is nonsingular, then $\mathbb F_{\mathcal L}$ is a local
   $C^1$ diffeomorphism at $(t_0,q_0,v_0)$: there are open neighbourhoods
   $W\ni(t_0,q_0,v_0)$ and $W'\ni\mathbb F_{\mathcal L}(t_0,q_0,v_0)$ such that
   $\mathbb F_{\mathcal L}|_W:W\to W'$ is a $C^1$ diffeomorphism
   ([[def-c-one-map-and-local-inverse]]).

## Facts & Assumptions

**Given:** The open sets $J\subseteq\mathbb R$, $U\subseteq\mathbb R^n$, the $C^2$ Lagrangian $\mathcal L$, a point $(t_0,q_0,v_0)\in J\times U\times\mathbb R^n$, and the notation $\mathcal L_{vt},\mathcal L_{vq},\mathcal L_{vv}$ for the matrices of partial derivatives of $\mathcal L_v$ with respect to the three blocks ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F1] $\mathcal L_v$ is of class $C^1$ because $\mathcal L$ is of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); hence $\mathcal L_v$ is totally differentiable everywhere with derivative the linear map given by its Jacobian matrix $\bigl(\mathcal L_{vt}\ \mathcal L_{vq}\ \mathcal L_{vv}\bigr)$, and that derivative depends continuously on the point ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-total-derivative-in-euclidean-space]]).

[F2] The chain rule for total derivatives ([[thm-chain-rule-for-total-derivatives]]) computes derivatives of composites; the derivative of the identity-like map $(t,q,v)\mapsto(t,q)$ is the projection $(\tau,\delta q,\delta v)\mapsto(\tau,\delta q)$, and scalar multiplication of a differentiable map by $1$ is the map itself.

[F3] The Euclidean inverse function theorem ([[thm-euclidean-inverse-function-theorem]]): a $C^1$ map between open subsets of $\mathbb R^m$ whose derivative at a point is invertible has a local $C^1$ inverse there, in the sense of [[def-c-one-map-and-local-inverse]], with derivative $Dg(y)=Df(g(y))^{-1}$.

[F4] Linear algebra of block maps ([[def-linear-map]], [[def-invertible-euclidean-linear-map]], [[def-matrix-product-and-identity-matrix]]): a linear map $L$ presented in blocks is injective iff its kernel is trivial, and on finite-dimensional spaces injectivity is equivalent to invertibility for endomorphisms: [[thm-rank-nullity]] gives full image dimension from a zero kernel, hence a bijection whose inverse is linear and two-sided.

## Proof

**Proof technique:** direct; compute the block derivative, reduce invertibility to invertibility of the velocity Hessian by an explicit kernel computation, and apply the inverse function theorem.

1.1 By [F1] the map $\mathcal L_v$ is totally differentiable, and by [F2] the Legendre map $\mathbb F_{\mathcal L}(t,q,v)=(t,q,\mathcal L_v(t,q,v))$ is totally differentiable with the displayed action on $(\tau,\delta q,\delta v)$: the first two components reproduce $\tau$ and $\delta q$, and the third is the sum of the three block contributions. This proves clause 1. [F1, F2, algebra]

1.2 Clause 2, kernel computation: for a linear map $L$ of the displayed block form, $L(\tau,\delta q,\delta v)=(0,0,0)$ holds iff $\tau=0$, $\delta q=0$ and $\mathcal L_{vv}\delta v=0$. Hence $L$ has trivial kernel iff $\mathcal L_{vv}\delta v=0$ implies $\delta v=0$, i.e. iff $\mathcal L_{vv}$ has trivial kernel. By [F4] trivial kernel is equivalent to invertibility of $L$, and of the square matrix $\mathcal L_{vv}$; and a square matrix over $\mathbb R$ is invertible if and only if its determinant is a unit of $\mathbb R$, i.e. nonzero ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]). This proves clause 2. [F2, F4, algebra]

2.1 Clause 3: assume $\mathcal L_{vv}(t_0,q_0,v_0)$ nonsingular. By clause 2 the derivative $D\mathbb F_{\mathcal L}(t_0,q_0,v_0)$ is invertible, and by clause 1 $\mathbb F_{\mathcal L}$ is $C^1$; [F3] therefore supplies open neighbourhoods $W$ of $(t_0,q_0,v_0)$ and $W'$ of its image such that $\mathbb F_{\mathcal L}|_W:W\to W'$ is a $C^1$ diffeomorphism. [F3, step 1.1, step 1.2]

3.1 The three clauses are established. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The determinant criterion in clause 2 is the reason the single scalar condition $\det\mathcal L_{vv}\ne0$ carries all the local invertibility information: the first two blocks of the derivative are already the identity. No determinant of a larger block matrix is needed, because the kernel computation of step 1.2 is performed directly.

- Invertibility of the derivative is local. It neither asserts that $\mathbb F_{\mathcal L}$ is globally injective nor that it is surjective onto the momentum fibre; those global properties are the hyperregularity hypothesis of [[def-cm-legendre-map-in-a-time-dependent-chart]].
