---
id: lem-cm07-immersion-euler-lagrange-transport
kind: lemma
title: "Transport of the Euler-Lagrange expression under a C^3 map: E of the substituted Lagrangian is the Jacobian-transpose multiple of E of the ambient Lagrangian"
status: published
origin: session
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, thm-continuous-partial-derivatives-imply-total-differentiability, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-derivative, def-interval, thm-algebra-of-derivatives]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.8 and 6.3: generalized coordinates in variational calculus and the reduction of the Lagrangian description to a parametrized configuration"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1 and Section 5.1: generalized coordinates eliminating constraint forces and the kinetic energy as a quadratic form in the coordinate velocities"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---
## Statement

Let $n,m\ge1$, let $\Omega\subseteq\mathbb R^{n}$ and
$Q\subseteq\mathbb R^{m}$ be open and nonempty, and let
$X:\Omega\to Q$ be of class $C^{3}$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). Let $J\subseteq\mathbb R$ be an
open interval and let $L:J\times Q\times\mathbb R^{m}\to\mathbb R$
be of class $C^{2}$, with gradients $L_{x}$ and $L_{w}$ in the second and third
slots ([[def-jacobian-matrix-and-gradient]],
[[def-directional-and-partial-derivatives]]). Define

$$\widetilde L:J\times\Omega\times\mathbb R^{n}\longrightarrow\mathbb R,\qquad \widetilde L(t,q,v):=L\bigl(t,X(q),DX(q)v\bigr).$$

Then $\widetilde L$ is of class $C^{2}$, and for every interval $J'\subseteq J$
with nonempty interior and every $C^{2}$ curve $q:J'\to\Omega$
([[def-interval]], [[def-vector-valued-derivative-and-integral]]) with
$x:=X\circ q$ one has, writing $\widetilde L_{q}$ and $\widetilde L_{v}$ for the
gradients of $\widetilde L$ in the second and third slots,

$$\widetilde L_{q}\bigl(t,q(t),q'(t)\bigr)-\frac{d}{dt}\Bigl(\widetilde L_{v}\bigl(t,q(t),q'(t)\bigr)\Bigr)=DX\bigl(q(t)\bigr)^{\mathsf T}\Bigl(L_{x}\bigl(t,x(t),x'(t)\bigr)-\frac{d}{dt}\bigl(L_{w}(t,x(t),x'(t))\bigr)\Bigr)$$

for every $t\in J'$. In words: the Euler-Lagrange expression of the
substituted Lagrangian is the transpose-Jacobian multiple of the
Euler-Lagrange expression of the ambient Lagrangian. No rank or invertibility
condition on $DX$ is assumed; the identity holds for every $C^{3}$ map $X$,
square or not.

## Facts & Assumptions

**Given:** The open sets $\Omega,Q$, the $C^{3}$ map $X:\Omega\to Q$, the $C^{2}$ function $L$, the interval $J'$ and the $C^{2}$ curve $q:J'\to\Omega$ with $x=X\circ q$; write $w(t):=DX(q(t))q'(t)$ and $T^{a}_{ij}(q):=\partial_{i}\partial_{j}X_{a}(q)$, so that $X_{qq}[v]$ denotes the $m\times n$ matrix with entries $\sum_{j}T^{a}_{ij}(q)v_{j}$, and $X_{qq}[v,v]$ the vector $\bigl(\sum_{i,j}T^{a}_{ij}v_{i}v_{j}\bigr)_{a}$.

[F1] Differentiability of composites ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]): $DX$ is $C^{2}$ and $(q,v)\mapsto DX(q)v$ is $C^{2}$; the map $\Phi(t,q,v):=(t,X(q),DX(q)v)$ is $C^{2}$, and $\widetilde L=L\circ\Phi$ is $C^{2}$.

[F2] Chain rule ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]): along the $C^{2}$ curve $q$ one has $x'=DX(q)q'=w$, so the curve $t\mapsto(t,x(t),w(t))$ is $C^{1}$ and, for the $C^{2}$ function $L$, the map $t\mapsto L_{w}(t,x(t),w(t))$ is $C^{1}$ with derivative given by the chain rule; similarly $\frac{d}{dt}DX(q(t))=X_{qq}[q'](q(t))$ in the matrix sense.

[F3] Mixed partials ([[thm-clairaut-schwarz-mixed-partials]]): since $X$ is $C^{3}$, its second partials are $C^{1}$ and $\partial_{j}\partial_{i}X_{a}=\partial_{i}\partial_{j}X_{a}$, so the matrix $X_{qq}[q']$ is computed unambiguously and $X_{qq}[q'(t)]q'(t)=X_{qq}[q'(t),q'(t)]$.

[F4] Bilinear algebra of the pairing ([[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[thm-algebra-of-derivatives]]): for matrices $A$ and vectors $u$ one has $(A^{\mathsf T}u)\cdot v=u\cdot(Av)$; sums and scalar multiples of the $C^{1}$ maps occurring below are differentiated termwise; and $\frac{d}{dt}\bigl(A(t)^{\mathsf T}u(t)\bigr)=\dot A(t)^{\mathsf T}u(t)+A(t)^{\mathsf T}\dot u(t)$.

## Proof

**Proof technique:** direct; differentiate the substituted Lagrangian in both slots by the chain rule, then cancel the parametrization-correction terms.

1.1 Regularity: the substitution $\Phi(t,q,v)=(t,X(q),DX(q)v)$ takes values in the open domain $J\times Q\times\mathbb R^{m}$ because $X(\Omega)\subseteq Q$; by [F1] the map $\widetilde L=L\circ\Phi$ is $C^{2}$ on $J\times\Omega\times\mathbb R^{n}$. [F1]

1.2 Velocity gradient: by the chain rule applied to $v\mapsto L(t,X(q),DX(q)v)$, for every $(t,q,v)$ $\widetilde L_{v}(t,q,v)=DX(q)^{\mathsf T}L_{w}\bigl(t,X(q),DX(q)v\bigr).$ [F1, F2, F4, algebra]

1.3 Configuration gradient: by the chain rule, for every $(t,q,v)$ $\widetilde L_{q}(t,q,v)=DX(q)^{\mathsf T}L_{x}\bigl(t,X(q),DX(q)v\bigr)+\bigl(X_{qq}[v]\bigr)^{\mathsf T}L_{w}\bigl(t,X(q),DX(q)v\bigr).$ [F1, F2, F4, algebra]

2.1 Derivative of the velocity gradient along the curve: from step 1.2 and the chain rule, using $\frac{d}{dt}DX(q(t))=X_{qq}[q'(t)]$ of [F2], $\frac{d}{dt}\Bigl(\widetilde L_{v}(t,q(t),q'(t))\Bigr)=X_{qq}[q'(t)]^{\mathsf T}L_{w}\bigl(t,x(t),w(t)\bigr)+DX(q(t))^{\mathsf T}\frac{d}{dt}\bigl(L_{w}(t,x(t),w(t))\bigr).$ [F2, F4, step 1.2, algebra]

3.1 Cancellation: on the curve $v=q'(t)$, so [F3] gives $X_{qq}[q'(t)]^{\mathsf T}L_{w}=\bigl(X_{qq}[v]\bigr)^{\mathsf T}L_{w}$ at $(t,q(t),q'(t))$; subtracting step 2.1 from step 1.3 leaves $DX(q(t))^{\mathsf T}\bigl(L_{x}(t,x,x')-\frac{d}{dt}L_{w}(t,x,x')\bigr)$, which is the displayed identity. [F2, F3, step 1.3, step 2.1, algebra]

4.1 Conclusion: the regularity of step 1.1 and the identity of step 3.1 are the two assertions of the statement, for the arbitrary $C^{3}$ map $X$ and curve $q$. [step 1.1, step 3.1] ∎

## Remarks

- **Use with constrained coordinates.** If a map $X$ is used to describe
  constrained configurations, this identity relates the substituted
  Euler-Lagrange expression to the ambient expression after multiplication by
  the explicit matrix $DX(q)^{\mathsf T}$. The identity is purely mathematical:
  no physical model, reaction law or constraint hypothesis enters it, and no
  rank or dimension condition is used beyond the $C^{3}$ regularity of $X$ and
  the $C^{2}$ regularity of $L$.

- **Comparison with the invertible case.** When $DX$ is invertible the vanishing
  of the two expressions is equivalent. In general, the identity always sends
  a zero ambient expression to a zero substituted expression. The converse
  requires that $DX(q)^{\mathsf T}u=0$ force $u=0$ for $u\in\mathbb R^{m}$;
  this item assumes no such property.
