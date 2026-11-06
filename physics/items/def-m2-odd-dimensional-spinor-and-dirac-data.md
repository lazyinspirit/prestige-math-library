---
id: def-m2-odd-dimensional-spinor-and-dirac-data
kind: definition
title: M2 Odd-Dimensional Spinor And Dirac Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
proof_strategy: associated-bundle construction and local frame-invariance check
axiom_strength: ZF for the supplied bundles, representation, and connection
deps:
  - def-spin-lift-of-oriented-orthonormal-frame-bundle
  - thm-complex-spin-modules-and-compact-reducibility
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-clifford-algebra-of-a-quadratic-space
dependency_roles:
  def-spin-lift-of-oriented-orthonormal-frame-bundle: mathematical-premise
  thm-complex-spin-modules-and-compact-reducibility: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-clifford-algebra-of-a-quadratic-space: mathematical-premise
physical_scope: Pure mathematical definition for closed Riemannian three-manifolds; no physical state space is inferred.
proof_status: associated bundle and formal operator are locally verified; self-adjoint domains remain supplied data
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry"
      url: https://arxiv.org/pdf/1911.09766
      locator: "§§1.5.1–1.5.3, PDF pp. 26–31, for complex Clifford and odd Spin modules; §§2.3.3–2.3.5, PDF pp. 68–72, for associated spinor bundles, lifted connection, and the local Dirac formula; §3.3, PDF pp. 86–87, for formal self-adjointness. The local verification is given here."
---

## Statement

Let $M$ be a closed oriented Riemannian three-manifold with a specified Spin lift of its oriented orthonormal frame bundle and a metric-compatible principal Spin connection. Choose one of the two irreducible complex modules of the negative-square complex Clifford algebra in dimension three. Its restriction to Spin is the unique irreducible two-dimensional complex Spin module. The associated bundle and its formal geometric Dirac differential expression are defined below; no self-adjoint operator domain or family regularity is implied by this definition.

## Facts & Assumptions

**Given:** The oriented orthonormal frame bundle, the Spin lift and right-action convention, a compatible principal Spin connection, and the negative-square Clifford convention $c(\xi)c(\eta)+c(\eta)c(\xi)=-2g^{-1}(\xi,\eta)I$.

[F1] [[def-spin-lift-of-oriented-orthonormal-frame-bundle]]: a Spin lift is a principal $\operatorname{Spin}_{\rm full}(3)$-bundle $P$ with an equivariant map to the oriented orthonormal frame bundle.

[F2] [[thm-complex-spin-modules-and-compact-reducibility]]: in odd dimension $3$, either irreducible complex Clifford module has dimension $2$, and both restrict to the same irreducible two-dimensional representation of Spin.

[F3] [[def-principal-g-bundle-and-associated-fiber-bundle]]: the associated bundle is the quotient of $P\times\mathbb C^2$ by the specified Spin right action and representation.

[A1] Use the Hermitian inner product linear in its first argument. The Clifford action is skew-Hermitian, $c(\xi)^*=-c(\xi)$, and compatible with the chosen Spin connection; the bundle is Hermitian and the connection is unitary. The operator below is only the formal differential expression on smooth sections.

[A2] If $c_+$ is the positive-square Clifford action in [F2], the negative-square action is $c_-(\xi):=i c_+(\xi)$. Multiplication by $i$ preserves Spin equivariance because it is scalar, and $c_-(\xi)c_-(\eta)+c_-(\eta)c_-(\xi)=-2g^{-1}(\xi,\eta)I$.

## Definition

Use the smooth structure on the Spin lift induced by its equivariant map $\lambda:P\to P_{SO}(TM)$. Explicitly, in a continuous principal chart it is $(x,g)\mapsto(x,a(x)\rho(g))$ for continuous $a:U\to SO(3)$. Near any point lift $a$ through a local inverse of the double covering $\rho$ and absorb that lift into the principal chart. Thus $\lambda$ is a local homeomorphism. Pulling back the smooth charts of $P_{SO}(TM)$ gives a smooth atlas on $P$; chart changes are restrictions of smooth frame-bundle chart changes. The right Spin action is smooth in these charts because $\rho$ is a smooth covering homomorphism. Here a principal Spin connection means a smooth $\mathfrak{spin}(3)$-valued one-form $\omega$ on $P$ with $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$ and $\omega(X^\#)=X$, where $X^\#_p=\left.\frac{d}{dt}\right|_0p\exp(tX)$. Compatibility in this item means $d\rho\circ\omega=\lambda^*\omega_{LC}$, with $\omega_{LC}$ the Levi-Civita connection form. Since $d\rho$ is an isomorphism, this specifies $\omega$ uniquely. In a local smooth section $s:U\to P$, the associated connection is $d+d\sigma(s^*\omega)$.

Let $\sigma$ be the selected two-dimensional Spin representation and let $S:=P\times_\sigma\mathbb C^2$ be its associated Hermitian spinor bundle. Let $c:T^*M\to\operatorname{End}_{\mathbb C}(S)$ be the associated negative-square Clifford action. The compatible principal Spin connection induces a unitary connection $\nabla^S$ satisfying
$$
\nabla^S_X(c(\xi)\psi)=c(\nabla^{LC}_X\xi)\psi+c(\xi)\nabla^S_X\psi.
$$
For any local orthonormal coframe $(e^1,e^2,e^3)$ with dual frame $(e_1,e_2,e_3)$, define the formal Dirac expression
$$D_S\psi=\sum_{j=1}^3c(e^j)\nabla^S_{e_j}\psi.$$
The formal expression is independent of the chosen local orthonormal frame. Its self-adjoint closure, Sobolev domain, compact resolvent, smooth dependence in families, and eta regularization are not conclusions of this item; they must be proved by an applicable analytic supplier or carried as explicit inputs in a later data definition.

## Proof

1.1 By [F2], $\sigma$ is the restriction of a finite-dimensional Clifford-algebra representation, hence is smooth: its matrix entries are restrictions of linear functions on the finite-dimensional Clifford algebra. The action $c_-=ic_+$ in [A2] has the required negative square and remains Spin-equivariant. With the smooth atlas just constructed, local sections of $P$ give charts $[s(x)g,v]\mapsto(x,\sigma(g)v)$ whose transition matrices are smooth. Hence the associated-bundle quotient in [F3] is a smooth complex vector bundle with fibre $\mathbb C^2$; the equivariant map in [F1] identifies its local trivializations over Spin frames. The associated Clifford action and compatible connection obey the stated Clifford-connection relation by [A1]. [F1, F2, F3, A1, A2, construct]

2.1 If an oriented orthonormal frame is changed by $R\in SO(3)$ and a Spin lift $g$ of $R$, spinor coordinates change by $\sigma(g)$, the connection changes by the corresponding associated-bundle rule, and Clifford multiplication obeys $c(R\xi)=\sigma(g)c(\xi)\sigma(g)^{-1}$. Substituting these identities into $\sum_jc(e^j)\nabla^S_{e_j}$ and using $R^TR=I$ cancels the two frame matrices, so the local expressions agree on overlaps. Thus $D_S$ is globally defined on $C^\infty(M,S)$. [F1, F2, F3, A1, A2, step 1.1, algebra]

3.1 For smooth spinors $\psi,\phi$, put $V=\sum_j\langle c(e^j)\psi,\phi\rangle e_j$. In a normal orthonormal frame at any point, metric compatibility and $c(e^j)^*=-c(e^j)$ from [A1] give $\operatorname{div}V=\langle D_S\psi,\phi\rangle-\langle\psi,D_S\phi\rangle$ at that point. Both sides are frame-independent scalars, so this identity holds globally. Since $M$ is closed, the divergence theorem gives $\int_M\operatorname{div}V=0$; hence $D_S$ is formally symmetric. This does not prove essential self-adjointness or any Sobolev-domain statement. [given, A1, A2, step 2.1, algebra] ∎

## Sources

- [Wernli, *Lecture Notes on Spin Geometry*, §§1.5.1–1.5.3 and 2.3.3–2.3.5](https://arxiv.org/pdf/1911.09766): Spin representations, odd-dimensional spinor bundles, and the Dirac expression; the frame-independence calculation is supplied above.
