---
id: prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
kind: proposition
title: 'The drift, kick and velocity-Verlet maps are canonical: $(DC)^{\mathsf T}J\,DC=J$ and $C^*\omega=\omega$'
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
- def-cm-splitting-hamiltonian-and-verlet-map
- def-cm-phase-domain-and-standard-symplectic-two-form
- prop-cm-canonical-map-tests-and-hamiltonian-transport
- def-cm-local-flow-of-an-autonomous-system
- thm-picard-lindelof-local-existence-and-uniqueness
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-jacobian-matrix-and-gradient
- def-hessian-and-euclidean-critical-point
- cor-hessian-is-symmetric
- def-matrix-product-and-identity-matrix
- def-transpose-of-a-matrix
- def-ck-euclidean-maps-and-diffeomorphisms
- def-directional-and-partial-derivatives
dependency_roles:
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Theorem 2 and its proof: the Stormer-Verlet scheme is symplectic of order 2, being a composition of symplectic Euler maps, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
  - title: 'A. Quillen, PHY411 Lecture notes Part 7 ''Integrators'' (University of Rochester), Sections 2.3-2.5: kinetic (drift) and potential (kick) evolution operators and the area-preserving Verlet map, printed pages 18-24'
    url: https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $U$, $M$, $V$, $A$, $B$, $H=A+B$, $D_h$, $K_h$ and $V_h$ be as in [[def-cm-splitting-hamiltonian-and-verlet-map]], with $\omega_U$ the standard two-form and $J=\begin{pmatrix}0_d&I_d\\-I_d&0_d\end{pmatrix}$ the standard symplectic matrix ([[def-cm-phase-domain-and-standard-symplectic-two-form]]). Then, on the sets where the maps are defined:

1. $D_h$ is $C^\infty$ with constant derivative
 $$DD_h(q,p)=\begin{pmatrix}I_d&hM^{-1}\\0_d&I_d\end{pmatrix},$$
 and $D_h$ is the time-$h$ map of the local flow ([[def-cm-local-flow-of-an-autonomous-system]]) of the Hamiltonian field $X_A(q,p)=(M^{-1}p,0)$ of the kinetic part; moreover
 $$DD_h(q,p)^{\mathsf T}J\,DD_h(q,p)=J.$$
2. $K_h$ is $C^2$ with derivative
 $$DK_h(q,p)=\begin{pmatrix}I_d&0_d\\-h\,H_V(q)&I_d\end{pmatrix},$$
 where $H_V$ is the Hessian matrix of $V$, and $K_h$ is the time-$h$ map of the local flow of the Hamiltonian field $X_B(q,p)=(0,-\nabla V(q))$ of the potential part; moreover
 $$DK_h(q,p)^{\mathsf T}J\,DK_h(q,p)=J.$$
3. Wherever $V_h$ is defined and $C^1$, its derivative satisfies
 $$DV_h(q,p)^{\mathsf T}J\,DV_h(q,p)=J,$$
 so that $V_h^*\omega_U=\omega_U$: the velocity-Verlet map preserves the standard two-form and is a local symplectomorphism.

## Facts & Assumptions

**Given:** The data of [[def-cm-splitting-hamiltonian-and-verlet-map]]: the phase domain $U$, the symmetric positive definite $M$, the $C^3$ potential $V$, and the maps $D_h,K_h,V_h$; $M$ is invertible because $Mv=0$ implies $v^{\mathsf T}Mv=0$ and hence $v=0$, and $(M^{-1})^{\mathsf T}=M^{-1}$.

[F1] Derivative calculus: the Jacobian matrix of a $C^1$ map records its partial derivatives, composition obeys $D(g\circ f)(x)=Dg(f(x))\,Df(x)$, and a map is $C^1$ when its partial derivatives are continuous ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] Symmetry of the blocks: $(M^{-1})^{\mathsf T}=M^{-1}$ as recalled in the data, and $H_V(q)^{\mathsf T}=H_V(q)$ for the $C^2$ scalar field $V$ ([[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]]).

[F3] The matrix test: for $C^1$ maps between phase domains with the same $J$, preservation of the standard two-form, $C^*\omega=\omega$, is equivalent to $DC^{\mathsf T}J\,DC=J$ ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]).

[F4] Local flows: for a locally Lipschitz field $F$, the time-$t$ map of its local flow is characterised among solutions by $\Phi_0=\mathrm{id}$ and $\partial_t\Phi_t=F\circ\Phi_t$, with uniqueness of solutions through a given initial point ([[def-cm-local-flow-of-an-autonomous-system]], [[thm-picard-lindelof-local-existence-and-uniqueness]]).

## Proof

**Proof technique:** direct; compute the two block derivatives, verify the two matrix identities by block multiplication, and compose.

1.1 Clause 1, derivative and flow. The map $D_h(q,p)=(q+hM^{-1}p,p)$ is affine, hence $C^\infty$, with constant Jacobian $\begin{pmatrix}I_d&hM^{-1}\\0_d&I_d\end{pmatrix}$ read off from the partial derivatives by [F1]. The curve $t\mapsto(q+tM^{-1}p,p)$ has derivative $(M^{-1}p,0)=X_A$ at its own value, and at $t=0$ it equals $(q,p)$; by the uniqueness in [F4] it is the time-$t$ map of the flow of $X_A$. Writing $C:=DD_h(q,p)$, block multiplication using [F1] and the fact that the blocks $I_d$, $hM^{-1}$ commute with each other gives $$C^{\mathsf T}JC=\begin{pmatrix}I_d&0\\hM^{-1}&I_d\end{pmatrix}\begin{pmatrix}0&I_d\\-I_d&-hM^{-1}\end{pmatrix}=\begin{pmatrix}0&I_d\\-I_d&0\end{pmatrix}=J,$$ the middle factor being $J\,C$. [given, F1, F4, algebra]

1.2 Clause 2, derivative and flow. The first block row of $DK_h$ is $(I_d,0_d)$ because $K_h$ leaves $q$ unchanged; the second block row is $(-hH_V(q),I_d)$ because $p-h\nabla V(q)$ has $q$-gradient $-hH_V(q)$ and $p$-gradient $I_d$ by [F1]; $V\in C^3$ makes these entries continuous, so $K_h$ is $C^2$. The curve $t\mapsto(q,p-t\nabla V(q))$ has derivative $(0,-\nabla V(q))=X_B$ at its own value and equals $(q,p)$ at $t=0$, so it is the time-$t$ map of the flow of $X_B$ by [F4]. With $C:=DK_h(q,p)$ and $S:=H_V(q)$, block multiplication using $S^{\mathsf T}=S$ from [F2] gives $$C^{\mathsf T}JC=\begin{pmatrix}I_d&-hS\\0&I_d\end{pmatrix}\begin{pmatrix}-hS&I_d\\-I_d&0\end{pmatrix}=\begin{pmatrix}-hS+hS&I_d\\-I_d&0\end{pmatrix}=J,$$ the middle factor being $J\,C$. [given, F1, F2, F4, algebra]

2.1 Clause 3, composition. At a point where $V_h=K_{h/2}\circ D_h\circ K_{h/2}$ is $C^1$, the chain rule of [F1] gives $DV_h=C_1C_2C_3$ with $C_1=DK_{h/2}$ evaluated at $D_h(K_{h/2}(q,p))$, $C_2=DD_h$ evaluated at $K_{h/2}(q,p)$, and $C_3=DK_{h/2}$ evaluated at $(q,p)$. Each factor satisfies $C_i^{\mathsf T}JC_i=J$ by steps 1.1-1.2, so $$DV_h^{\mathsf T}J\,DV_h=C_3^{\mathsf T}\bigl(C_2^{\mathsf T}(C_1^{\mathsf T}JC_1)C_2\bigr)C_3=C_3^{\mathsf T}(C_2^{\mathsf T}JC_2)C_3=C_3^{\mathsf T}JC_3=J.$$ [given, step 1.1, step 1.2, F1, algebra]

3.1 Clause 3, form preservation. The identity of step 2.1 is exactly the matrix condition of [F3] for the $C^1$ map $V_h$, so $V_h^*\omega_U=\omega_U$ wherever $V_h$ is defined and $C^1$; The explicit inverse factors are $D_{-h}$ and $K_{-h}$; reversing the palindrome gives $V_{-h}$ as the inverse on the image wherever the compositions exist. Restriction to these open domains makes $V_h$ a $C^1$ local diffeomorphism preserving the form, hence a local symplectomorphism. [step 2.1, F3] ∎

## Remarks

- The three factors in step 2.1 satisfy the matrix identity at *every* point of their domains, so no connectedness or constancy argument is needed. The verification is exact algebra: the proposition asserts exact symplecticity of $V_h$ in exact arithmetic only, and says nothing about floating-point or rounded arithmetic.
- The identities also show directly that $\det DV_h=\pm1$ where defined; neither determinant sign nor phase-volume preservation is used on this page.
