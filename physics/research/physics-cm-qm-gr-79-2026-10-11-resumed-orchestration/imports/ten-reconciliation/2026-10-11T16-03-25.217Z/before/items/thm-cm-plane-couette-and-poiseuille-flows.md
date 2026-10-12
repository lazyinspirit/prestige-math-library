---
id: thm-cm-plane-couette-and-poiseuille-flows
kind: theorem
title: "Exact plane Poiseuille and Couette flows of the incompressible Newtonian model, with flux and ansatz uniqueness"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-fluid-constitutive-models, thm-cm-local-momentum-balance, def-cm-euclidean-spatial-calculus, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, def-integral-over-a-measurable-set, thm-linearity-of-the-integral, def-derivative, def-interval, def-matrix-product-and-identity-matrix, def-matrix-space, def-trace-of-a-square-matrix]
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
  def-integral-over-a-measurable-set: mathematical-premise
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

Let $\rho>0$, $\eta>0$ and $h>0$ be constants and let $O:=\mathbb R\times(0,h)\times\mathbb R$ with coordinates $(x,y,z)$. For a $C^2$ velocity field $u:O\to\mathbb R^3$ of the form $u=(v(y),0,0)$ and a $C^1$ pressure $p:O\to\mathbb R$, the incompressible Newtonian equations of [[def-cm-fluid-constitutive-models]] with no body force and steady data read

$$\operatorname{div}u=0,\qquad \rho\,(u\cdot\nabla)u=-\nabla p+\eta\,\Delta u , \tag{NS}$$

where $\Delta$ acts componentwise and the second equation is the local momentum balance of [[thm-cm-local-momentum-balance]] with $\sigma=-pI_3+\eta(Du+Du^{\mathsf T})$.

**(a) Plane Poiseuille flow.** Let $G\in\mathbb R$, $p_0\in\mathbb R$ and

$$v(y):=\frac{G\,y(h-y)}{2\eta},\qquad p(x):=p_0-Gx,\qquad u:=(v,0,0).$$

Then $u$ is $C^\infty$, satisfies (NS) on $O$, and $v(0)=v(h)=0$. Its flux per unit width is

$$\int_0^hv(y)\,dy=\frac{Gh^3}{12\eta}.$$

Moreover, within the ansatz $u=(v(y),0,0)$, $p=p_0-Gx$ with the same constant $G$ and the no-slip conditions $v(0)=v(h)=0$, this is the only solution: any two such profiles differ by a linear function vanishing at both endpoints, hence coincide.

**(b) Plane Couette flow.** Let $V\in\mathbb R$, let $v(y):=Vy/h$, let $p$ be constant, and let $u:=(v,0,0)$. Then $u$ satisfies (NS) on $O$ and $v(0)=0$, $v(h)=V$. If $V\ne0$, the velocity gradient $Du$ is not symmetric, so the flow is not irrotational in the sense used in this collection.

## Facts & Assumptions

**Given:** Constants $\rho,\eta,h>0$, $G,p_0,V\in\mathbb R$, and the profiles above.

[F1] Constitutive and balance input: for the branch (a) of [[def-cm-fluid-constitutive-models]], $\sigma=-pI_3+\eta(Du+Du^{\mathsf T})$ and $\operatorname{div}u=0$; the momentum equation $\rho D_tu=\operatorname{div}\sigma$ is the local form of [[thm-cm-local-momentum-balance]] in the absence of body force, and for steady data $D_tu=(u\cdot\nabla)u$. For $u=(v(y),0,0)$, $\operatorname{div}u=\partial_xv=0$, and $\operatorname{div}\bigl(Du+Du^{\mathsf T}\bigr)=\Delta u$ because $\operatorname{div}u=0$; hence $\operatorname{div}\sigma=-\nabla p+\eta\Delta u$ ([[def-cm-euclidean-spatial-calculus]], [[def-trace-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]]).

[F2] For $u=(v(y),0,0)$ with $v$ independent of $x$, $(u\cdot\nabla)u=v(y)\,\partial_xu=0$; the only nonzero entries of $Du$ are $\partial_yu_1=v'(y)$, and $\Delta u=(v''(y),0,0)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F3] Fundamental theorem of calculus and linearity of the integral: a $C^2$ function $w$ on $[0,h]$ with $w''=0$ is linear; if moreover $w(0)=w(h)=0$ then $w=0$ ([[thm-ftc-first-part]], [[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]], [[def-integral-over-a-measurable-set]], [[def-derivative]]).

## Proof

**Proof technique:** direct; solve the reduced ordinary differential equation and evaluate the flux.

1.1 With $u=(v(y),0,0)$, [F2] gives $(u\cdot\nabla)u=0$ and $\Delta u=(v'',0,0)$; also $-\nabla p=(G,0,0)$ for $p=p_0-Gx$. Hence (NS) reduces to $0=G+\eta v''(y)$ and $\partial_yp=0$, i.e. $$v''(y)=-\frac{G}{\eta},\qquad p=p_0-Gx .$$ For part (b) with $p$ constant the first equation becomes $v''=0$. [given, F1, F2, algebra]

2.1 (Poiseuille.) Integrate $v''=-G/\eta$ twice by [F3]: $v(y)=-\frac{G}{2\eta}y^2+Ay+B$ for constants $A,B$. The conditions $v(0)=v(h)=0$ give $B=0$ and $A=\frac{Gh}{2\eta}$, so $v(y)=\frac{Gy(h-y)}{2\eta}$, the stated profile; it is $C^\infty$ and satisfies both equations of step 1.1. Computing the flux, $$\int_0^hv=\frac{G}{2\eta}\Bigl(h\int_0^hy\,dy-\int_0^hy^2\,dy\Bigr)=\frac{G}{2\eta}\Bigl(\frac{h^3}{2}-\frac{h^3}{3}\Bigr)=\frac{Gh^3}{12\eta}.$$ If two profiles $v_1,v_2$ both solve $v''=-G/\eta$ with vanishing endpoints, their difference $w$ has $w''=0$ and $w(0)=w(h)=0$; by [F3], $w=0$. [step 1.1, F3, algebra]

3.1 (Couette.) For $v(y)=Vy/h$ we have $v''=0$, so step 1.1 is satisfied with constant $p$; the boundary values are $v(0)=0$ and $v(h)=V$. Finally $Du$ has the single nonzero entry $\partial_yu_1=V/h$ in row $1$, column $2$, while $\partial_xu_2=0$, so $Du\ne Du^{\mathsf T}$ when $V\ne0$: the antisymmetric part is nonzero and the flow is not irrotational. [step 1.1, F2, algebra] ∎

## Remarks

- The no-slip boundary conditions are **adopted model conditions**, not consequences of the equations; the uniqueness statement is only within the stated steady parallel ansatz with the same driving constant $G$. General nonlinear initial-value problems, finite-Reynolds stability, entrance effects and three-dimensional perturbations are not treated.

- The Couette computation exhibits explicitly that a laminar shear flow has nonzero antisymmetric velocity gradient; this is why the irrotational Bernoulli branch of the barotropic item does not apply to it. The two flows here are exact solutions of the adopted constant-coefficient model and carry no empirical claim about any real fluid.
