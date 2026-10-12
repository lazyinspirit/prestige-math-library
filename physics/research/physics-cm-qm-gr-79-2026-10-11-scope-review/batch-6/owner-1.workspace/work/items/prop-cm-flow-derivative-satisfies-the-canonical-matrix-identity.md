---
id: prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity
kind: proposition
title: "The derivative of the Hamiltonian flow satisfies $Y^{\\mathsf T}JY=J$ and $\\det Y=1$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-local-flow-of-an-autonomous-system, thm-cm-smooth-dependence-and-the-variational-equation, def-hessian-and-euclidean-critical-point, cor-hessian-is-symmetric, def-jacobian-matrix-and-gradient, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-invertible-euclidean-linear-map, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-metric-continuity, cor-determinant-is-a-polynomial-in-the-matrix-entries, lem-algebra-of-continuous-real-maps-on-a-space, thm-metric-continuity-characterisations, thm-determinant-multiplicative, thm-determinant-of-transpose, def-determinant-of-a-square-matrix, thm-intermediate-value, def-interval]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-metric-continuity: mathematical-premise
  cor-determinant-is-a-polynomial-in-the-matrix-entries: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.1-4.2 (the linearised flow of Hamilton's equations and Liouville's theorem), printed pages 80-92"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2 (the canonical equations and the divergence-free Hamiltonian flow)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U$ be a phase domain with standard two-form $\omega_U$ and matrix $J$, let
$H\in C^2(U)$, and let $\Phi$ be the local flow of the Hamiltonian field
$X_H=J\nabla H$ ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]],
[[def-cm-local-flow-of-an-autonomous-system]]). Let $z_0\in U$, let $I\subseteq\mathbb R$ be the open
interval of times $t$ with $(t,z_0)$ in the flow domain, and for $t\in I$ put

$$Y(t):=D_z\Phi_t(z_0)\in M_{2n}(\mathbb R).$$

Then $t\mapsto Y(t)$ is of class $C^1$ on $I$ and, for every $t\in I$:

1. (variational equation) $Y'(t)=J\,\mathrm{Hess}\,H(\Phi_t(z_0))\,Y(t)$ and $Y(0)=I_{2n}$;
2. (canonical matrix identity) $Y(t)^{\mathsf T}J\,Y(t)=J$;
3. (unit determinant) $\det Y(t)=1$.

## Facts & Assumptions

**Given:** The phase domain $U$, the $C^2$ Hamiltonian $H$, the local flow $\Phi$, the point $z_0\in U$ and the derivative $Y(t)=D_z\Phi_t(z_0)$.

[F1] The variational equation ([[thm-cm-smooth-dependence-and-the-variational-equation]]): with $F:=X_H$, the map $(t,a)\mapsto\Phi_t(a)$ is $C^1$ on its domain, $Y$ solves $Y'(t)=DF(\Phi_t(z_0))Y(t)$, $Y(0)=I_{2n}$, and $Y$ is continuous; in particular the derivative of the field is $DF=J\,\mathrm{Hess}\,H$, because $X_H=J\nabla H$ and $J$ is constant ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-hessian-and-euclidean-critical-point]]).

[F2] The Hessian $\mathrm{Hess}\,H(z)$ is the matrix $(\partial_i\partial_jH(z))$, and for $H\in C^2$ it is symmetric: $\mathrm{Hess}\,H(z)^{\mathsf T}=\mathrm{Hess}\,H(z)$ ([[def-hessian-and-euclidean-critical-point]], [[cor-hessian-is-symmetric]]).

[F3] Block identities $J^{\mathsf T}=-J$, $J^2=-I_{2n}$, $J^{-1}=J^{\mathsf T}$ and $\omega_z(v,w)=v^{\mathsf T}Jw$ ([[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]]).

[F4] Determinant calculus: the determinant is a polynomial in the matrix entries ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]]), and a finite sum of finite products of continuous real functions is continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]], with the metric and topological notions of continuity identified by [[thm-metric-continuity-characterisations]]); the entry functions $t\mapsto Y_{ij}(t)$ are continuous as components of the continuous map $Y$ ([[def-metric-continuity]]), so $t\mapsto\det Y(t)$ is continuous on $I$. The Leibniz formula gives $\det I_{2n}=1$ ([[def-determinant-of-a-square-matrix]]); moreover $\det(AB)=\det(A)\det(B)$ and $\det(A^{\mathsf T})=\det(A)$ for square matrices ([[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]]), and $\det J\ne0$ because $J$ is invertible with $J^{-1}=J^{\mathsf T}=-J$ and over the field $\mathbb R$ a square matrix is invertible exactly when its determinant is nonzero ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-invertible-euclidean-linear-map]]).

[F5] Sign rigidity on an interval ([[thm-intermediate-value]], [[def-interval]]): a continuous $g:I\to\mathbb R$ on an interval with $g(t)^2=1$ for all $t\in I$ and $g(0)=1$ equals $1$; indeed, if $g(t)=-1$ for some $t>0$, the intermediate value theorem on $[0,t]$ gives $c$ with $g(c)=0$, contradicting $g(c)^2=1$, and the case $t<0$ is identical on $[t,0]$.

## Proof

**Proof technique:** direct; the variational equation gives the derivative, the antisymmetry of $J$ cancels the quadratic form, and continuity upgrades the squared determinant.

1.1 Clause 1: by [F1] the map $Y$ is $C^1$ on $I$ and solves $Y'=DF(\Phi_t(z_0))Y$ with $Y(0)=I_{2n}$; since $X_H=J\nabla H$ and $J$ is constant, the chain rule gives $DF(z)=J\,\mathrm{Hess}\,H(z)$, so $Y'(t)=J\,\mathrm{Hess}\,H(\Phi_t(z_0))Y(t)$. [F1, algebra]

2.1 Clause 2: put $A(t):=J\,\mathrm{Hess}\,H(\Phi_t(z_0))$. By [F2] and [F3], $A^{\mathsf T}=(\mathrm{Hess}\,H)^{\mathsf T}J^{\mathsf T}=(\mathrm{Hess}\,H)(-J)=-\mathrm{Hess}\,H\,J$ and $JA=J^2\mathrm{Hess}\,H=-\mathrm{Hess}\,H$, so $A^{\mathsf T}J+JA=-\mathrm{Hess}\,H\,JJ-\mathrm{Hess}\,H=(\mathrm{Hess}\,H)(-J^2)-\mathrm{Hess}\,H=0$; hence $\frac{d}{dt}(Y^{\mathsf T}JY)=Y'^{\mathsf T}JY+Y^{\mathsf T}JY'=Y^{\mathsf T}(A^{\mathsf T}J+JA)Y=0$, and $Y(t)^{\mathsf T}JY(t)=Y(0)^{\mathsf T}JY(0)=J$ for all $t\in I$. [F1, F2, F3, step 1.1, algebra]

3.1 Clause 3: taking determinants in clause 2 and using [F4] gives $\det(Y^{\mathsf T}JY)=\det(Y^{\mathsf T})\det(J)\det(Y)=(\det Y)^2\det J$, so $(\det Y(t))^2\det J=\det J$; since $\det J\ne0$, $(\det Y(t))^2=1$ for all $t\in I$; by [F4] the function $t\mapsto\det Y(t)$ is continuous with $\det Y(0)=\det I_{2n}=1$, so the sign rigidity [F5] gives $\det Y\equiv1$. [step 2.1, F4, F5, algebra] ∎

## Remarks

- Clauses 2 and 3 are the differentiated form of the published statement that Hamiltonian flows preserve the symplectic form ([[thm-hamiltonian-flows-preserve-the-symplectic-form]]) and the Liouville volume ([[thm-liouville-volume-preservation]]); the present item records the matrix identity that a chart computation, rather than the Cartan formula, produces, and it is this identity that the canonical-map test of [[prop-cm-canonical-map-tests-and-hamiltonian-transport]] compares with.
- The statement is local in $t$ and on the actual flow domain; no completeness of $X_H$ is assumed, exactly as in [[def-cm-local-flow-of-an-autonomous-system]].
