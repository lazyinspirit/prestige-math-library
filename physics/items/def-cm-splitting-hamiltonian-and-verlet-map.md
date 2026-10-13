---
id: def-cm-splitting-hamiltonian-and-verlet-map
kind: definition
title: The splitting Hamiltonian $H=A+B$, the drift and kick maps, and the velocity-Verlet map
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
forward_refs: [ex-cm-verlet-map-of-the-harmonic-oscillator]
deps:
- def-cm-phase-domain-and-standard-symplectic-two-form
- def-ck-euclidean-maps-and-diffeomorphisms
- def-directional-and-partial-derivatives
- def-jacobian-matrix-and-gradient
- def-hessian-and-euclidean-critical-point
- def-matrix-product-and-identity-matrix
- def-transpose-of-a-matrix
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Sections 1 and 5: the Stormer-Verlet scheme and its interpretation as the Strang splitting of the kinetic and potential flows, printed pages 1-3 and 12-13'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
  - title: 'A. Quillen, PHY411 Lecture notes Part 7 ''Integrators'' (University of Rochester), Sections 2.3 and 2.5: drift and kick evolution operators and the Stormer-Verlet method, printed pages 18-20 and 23-24'
    url: https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf
verification:
  precheck: pass
---

## Definition

Let $d\ge1$ and let $U\subseteq\mathbb R^{2d}$ be a nonempty open phase domain with coordinates $z=(q,p)$, $q=(q^1,\dots,q^d)$ and $p=(p_1,\dots,p_d)$, standard two-form $\omega_U=\sum_i dq^i\wedge dp_i$ and standard symplectic matrix $J$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]).

Fix $M\in M_d(\mathbb R)$ and $M^{-1}\in M_d(\mathbb R)$ with $MM^{-1}=M^{-1}M=I_d$. Assume $M$ is **symmetric and positive definite**, meaning $M^{\mathsf T}=M$ ([[def-transpose-of-a-matrix]]) and $v^{\mathsf T}Mv>0$ for every nonzero $v\in\mathbb R^d$; here $v^{\mathsf T}Mv$ is the matrix product of [[def-matrix-product-and-identity-matrix]]. Transposing the two inverse identities and using uniqueness of a two-sided inverse gives $(M^{-1})^{\mathsf T}=(M^{\mathsf T})^{-1}=M^{-1}$. Fix an open $\Pi\subseteq\mathbb R^d$ with $U\subseteq\Pi\times\mathbb R^d$ and a function $U_{\mathrm{pot}}:\Pi\to\mathbb R$ of class $C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), whose gradient $\nabla U_{\mathrm{pot}}$ and Hessian matrix $H_{U_{\mathrm{pot}}}$ are those of [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]]; write $\nabla U_{\mathrm{pot}}(q)$ as a column vector and abbreviate $U_{\mathrm{pot}}(q)$ by $V(q)$ on $U$.

For any $C^1$ scalar function $G:U\to\mathbb R$, use the coordinate convention $X_G:=J\nabla G=(\partial_{p_i}G,-\partial_{q^i}G)_{i=1}^d$ for its **Hamiltonian field**. With $\omega_U=\sum_i dq^i\wedge dp_i$, contraction is $\iota_{X_G}\omega_U:=\sum_i((X_G)_{q^i}\,dp_i-(X_G)_{p_i}\,dq^i)=\sum_i(\partial_{p_i}G\,dp_i+\partial_{q^i}G\,dq^i)=dG$.

On $U$ define the **kinetic part** and **potential part**

$$A(q,p):=\tfrac12\,p^{\mathsf T}M^{-1}p,\qquad B(q,p):=V(q),\qquad H:=A+B,$$

and the ambient-valued drift and kick formulas

$$\widehat D_h(q,p):=(q+h\,M^{-1}p,\;p),\qquad \widehat K_h(q,p):=(q,\;p-h\,\nabla V(q)) \qquad ((q,p)\in U).$$

Use these as partial self-maps of $U$ by setting
$$\mathcal D_h:=\{(q,p)\in U:\widehat D_h(q,p)\in U\},\qquad D_h:=\widehat D_h|_{\mathcal D_h}:\mathcal D_h\to U,$$
$$\mathcal K_h:=\{(q,p)\in U:\widehat K_h(q,p)\in U\},\qquad K_h:=\widehat K_h|_{\mathcal K_h}:\mathcal K_h\to U.$$
The **velocity-Verlet map** of the splitting $H=A+B$ at step $h\in\mathbb R$ is the partial composite

$$V_h:=K_{h/2}\circ D_h\circ K_{h/2}:\mathcal V_h\to U,$$
where $\mathcal V_h:=\{z\in\mathcal K_{h/2}:K_{h/2}(z)\in\mathcal D_h\text{ and }D_h(K_{h/2}(z))\in\mathcal K_{h/2}\}$. Thus every intermediate input and the final output belongs to $U$.

## Remarks

- The definition is purely mathematical and choice-free; the names *drift*, *kick* and *velocity-Verlet* are conventional, and no physical units are assigned. The coordinate Hamiltonian fields of $A$ and $B$ are $X_A(q,p)=(M^{-1}p,0)$ and $X_B(q,p)=(0,-\nabla V(q))$ by the convention above. The proposition [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]] identifies $D_t$ and $K_t$ with the respective time-$t$ local flow values whenever their whole intermediate straight drift or kick segment stays in $U$. Endpoint containment alone, used by the algebraic definitions above, does not imply this on an arbitrary open $U$. When each of the three flow segments is admissible, $V_h$ is the symmetric Strang-type splitting of those local flows; its algebraic canonical-form preservation identity holds on the full declared composition domain. The exact flow of $H$ is denoted $\Phi_t$ in the items of this page.
- For $H(q,p)=\tfrac12p^{\mathsf T}M^{-1}p+V(q)$ and the second-order differential equation $M\ddot q=-\nabla V(q)$, the map $V_h$ is the classical velocity-Verlet (leapfrog) update in one-step form: half a kick, a full drift, half a kick. For $d=1$, $M=(1)$ and $V(q)=q^2/2$, these formulas reduce to the explicit two-by-two map of [[ex-cm-verlet-map-of-the-harmonic-oscillator]] on the companion page.
