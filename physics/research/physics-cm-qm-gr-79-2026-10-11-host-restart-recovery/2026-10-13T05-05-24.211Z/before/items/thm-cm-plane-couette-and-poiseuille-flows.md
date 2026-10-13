---
id: thm-cm-plane-couette-and-poiseuille-flows
kind: theorem
title: "Exact plane Poiseuille and Couette flows of the incompressible Newtonian model, with flux and ansatz uniqueness"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-fluid-constitutive-models, thm-cm-local-momentum-balance, def-cm-euclidean-spatial-calculus, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, thm-continuous-implies-integrable, thm-linearity-of-the-integral, def-derivative, def-interval, def-matrix-product-and-identity-matrix, def-matrix-space, def-trace-of-a-square-matrix]
dependency_roles:
  def-cm-fluid-constitutive-models: mathematical-premise
  thm-cm-local-momentum-balance: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-matrix-space: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.5 (viscous channel flows: Couette flow and the Poiseuille problem, Eqs. (8.56)–(8.62))"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 12.2, with Problem 12.9 (incompressible viscous fluids; Poiseuille flow of a Newtonian fluid)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"

  precheck: pass
---

## Statement

The flux integrals below are ordinary Riemann integrals of continuous profiles on $[0,h]$.

Let $I\subseteq\mathbb R$ be a nonempty open time interval, let $\rho>0$, $\eta>0$ and $h>0$ be constants, and let $O:=\mathbb R\times(0,h)\times\mathbb R$ with spatial coordinates $(x,y,z)$. Let $v\in C([0,h])\cap C^2((0,h))$, with endpoint values given by its continuous extension, and $p_{\rm sp}\in C^1(O)$. Define stationary spacetime fields $u:I\times O\to\mathbb R^3$ and $p:I\times O\to\mathbb R$ by $u(t,x,y,z):=(v(y),0,0)$ and $p(t,x,y,z):=p_{\rm sp}(x,y,z)$. Here $D_xu$ denotes the spatial total derivative at fixed $t$, $(u\cdot\nabla)u:=D_xu\,u$, and $\Delta u:=(\sum_{j=1}^3\partial_j^2u_i)_{i=1}^3$ acts componentwise ([[def-cm-euclidean-spatial-calculus]]). The incompressible Newtonian equations of [[def-cm-fluid-constitutive-models]] with no body force and steady data read

$$\operatorname{div}u=0,\qquad \rho\,(u\cdot\nabla)u=-\nabla p+\eta\,\Delta u , \tag{NS}$$

where the second equation is the adopted stationary momentum equation with $\sigma=-pI_3+\eta(D_xu+(D_xu)^{\mathsf T})$.

For this item, “irrotational” means that the spatial velocity gradient $D_xu$ is symmetric.

**(a) Plane Poiseuille flow.** Let $G\in\mathbb R$, $p_0\in\mathbb R$ and

$$v(y):=\frac{G\,y(h-y)}{2\eta},\qquad p_{\rm sp}(x,y,z):=p_0-Gx.$$

Then $u$ is $C^\infty$ on $I\times O$, satisfies (NS) there, and $v(0)=v(h)=0$. Its flux per unit width is

$$\int_0^hv(y)\,dy=\frac{Gh^3}{12\eta}.$$

Moreover, within the ansatz $u=(v(y),0,0)$, $p=p_0-Gx$ with the same constant $G$ and the no-slip conditions $v(0)=v(h)=0$, this is the only solution: any two such profiles differ by a linear function vanishing at both endpoints, hence coincide.

**(b) Plane Couette flow.** Let $V\in\mathbb R$, let $v(y):=Vy/h$, and let $p_{\rm sp}$ be constant. Then the stationary $u,p$ defined above satisfy (NS) on $I\times O$ and $v(0)=0$, $v(h)=V$. If $V\ne0$, the velocity gradient $D_xu$ is not symmetric, so the flow is not irrotational by the definition above.

## Facts & Assumptions

**Given:** The explicitly adopted steady system (NS), constants $\rho,\eta,h>0$, $G,p_0,V\in\mathbb R$, and the profiles above.

[F1] Adopted equation input: (NS) is the differential system being solved here, not a conclusion drawn from an unspecified integral balance. To obtain (NS) from [[thm-cm-local-momentum-balance]], one must additionally impose its continuity hypothesis (K), integral momentum hypothesis (L), admissible domains and regularity. For the present exact-solution computation (NS) itself is adopted. Constitutive substitution: for the branch (a) of [[def-cm-fluid-constitutive-models]], $\sigma=-pI_3+\eta(D_xu+(D_xu)^{\mathsf T})$ and $\operatorname{div}u=0$; the adopted momentum equation is $\rho D_tu=\operatorname{div}\sigma$ in the absence of body force, and for stationary data $D_tu=D_xu\,u$. For $u=(v(y),0,0)$, $\operatorname{div}u=\partial_xv=0$, and $\operatorname{div}\bigl(D_xu+(D_xu)^{\mathsf T}\bigr)=\Delta u$ because $\operatorname{div}u=0$; hence $\operatorname{div}\sigma=-\nabla p+\eta\Delta u$ ([[def-cm-euclidean-spatial-calculus]], [[def-trace-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]]).

[F2] For $u=(v(y),0,0)$ with $v$ independent of $x$, $(u\cdot\nabla)u=D_xu\,u=0$; the only nonzero entry of $D_xu$ is $\partial_yu_1=v'(y)$, and $\Delta u=(v''(y),0,0)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F3] If $w\in C([0,h])\cap C^2((0,h))$ and $w''=0$ on $(0,h)$, then $w$ is affine on $(0,h)$: the fundamental theorem applied on each compact subinterval shows $w'$ is constant there, and overlapping subintervals give one constant throughout $(0,h)$. Continuity extends that affine formula to $[0,h]$, so $w(0)=w(h)=0$ implies $w=0$ ([[thm-ftc-first-part]], [[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]], [[thm-continuous-implies-integrable]], [[def-derivative]]).

## Proof

**Proof technique:** direct; solve the reduced ordinary differential equation and evaluate the flux.

1.1 With $u=(v(y),0,0)$, [F2] gives $(u\cdot\nabla)u=0$ and $\Delta u=(v'',0,0)$; also $-\nabla p=(G,0,0)$ for $p=p_0-Gx$. Hence (NS) reduces to $0=G+\eta v''(y)$ and $\partial_yp=0$, i.e. $$v''(y)=-\frac{G}{\eta},\qquad p=p_0-Gx .$$ For part (b) with $p$ constant the first equation becomes $v''=0$. [given, F1, F2, algebra]

2.1 (Poiseuille.) Apply [F3] to $w(y):=v(y)+\frac{G}{2\eta}y^2$, which satisfies $w''=0$ on $(0,h)$ and is continuous on $[0,h]$. Thus $w(y)=Ay+B$; the conditions $v(0)=v(h)=0$ give $B=0$ and $A=\frac{Gh}{2\eta}$, so $v(y)=\frac{Gy(h-y)}{2\eta}$, the stated profile; it is $C^\infty$ and satisfies both equations of step 1.1. Computing the flux, $$\int_0^hv=\frac{G}{2\eta}\Bigl(h\int_0^hy\,dy-\int_0^hy^2\,dy\Bigr)=\frac{G}{2\eta}\Bigl(\frac{h^3}{2}-\frac{h^3}{3}\Bigr)=\frac{Gh^3}{12\eta}.$$ If two profiles $v_1,v_2$ both solve $v''=-G/\eta$ with vanishing endpoints, their difference $w$ has $w''=0$ and $w(0)=w(h)=0$; by [F3], $w=0$. [step 1.1, F3, algebra]

3.1 (Couette.) For $v(y)=Vy/h$ we have $v''=0$, so step 1.1 is satisfied with constant $p$; the boundary values are $v(0)=0$ and $v(h)=V$. Finally $D_xu$ has the single nonzero entry $\partial_yu_1=V/h$ in row $1$, column $2$, while $\partial_xu_2=0$, so $D_xu\ne(D_xu)^{\mathsf T}$ when $V\ne0$: the antisymmetric part is nonzero and the flow is not irrotational by the definition above. [step 1.1, F2, algebra] ∎

## Remarks

- The no-slip boundary conditions are **adopted model conditions**, not consequences of the equations; the uniqueness statement is only within the stated steady parallel ansatz with the same driving constant $G$. General nonlinear initial-value problems, finite-Reynolds stability, entrance effects and three-dimensional perturbations are not treated.

- The Couette computation exhibits explicitly that a laminar shear flow has nonzero antisymmetric velocity gradient; this is why the irrotational Bernoulli branch of the barotropic item does not apply to it. The two flows here are exact solutions of the adopted constant-coefficient model and carry no empirical claim about any real fluid.
