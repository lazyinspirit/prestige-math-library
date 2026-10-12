---
id: ex-cm17-periodic-shear-exact-solution-check
kind: example
title: "Periodic shear fields: an exact steady Euler solution, failure for the viscous branch, and the classification of steady periodic shears"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm17-incompressible-periodic-local-evolution, post-cm17-fluid-constitutive, def-periodic-vector-sobolev-space-and-leray-projection, def-cm-fluid-constitutive-models, def-cm-euclidean-spatial-calculus, thm-sine-and-cosine-derivatives, thm-ftc-first-part, thm-clairaut-schwarz-mixed-partials, def-ck-euclidean-maps-and-diffeomorphisms, def-cm17-continuum-body-and-units]
dependency_roles:
  pthm-cm17-incompressible-periodic-local-evolution: physical-result
  post-cm17-fluid-constitutive: physical-assumption
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Worked checks on the periodic cell of the adopted fluid branch: the sinusoidal shear is verified to be an exact steady solution of the inviscid (Euler) branch with zero pressure and to fail the local existence theorem's projected equation for the viscous branch, and the steady periodic shear fields of the viscous branch with no body force are classified: only constants survive. The example uses the periodic-cell idealization and reports no measurement."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 12.3 (incompressible inviscid fluid and simple exact solutions)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 8.4-8.5 (ideal fluid solutions and viscous shear flows)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Work on the periodic cell $\mathbb T^3=(\mathbb R/\mathbb Z)^3$ of
[[post-cm17-fluid-constitutive]] clause (c), with constant density $\rho>0$,
no body force and the stress of the branch. Let $A>0$, $\varphi\in\mathbb R$
and

$$u(t,x):=\bigl(A\sin(2\pi x_2+\varphi),0,0\bigr).$$

Then:

1. $\operatorname{div}u=0$ and $(u\cdot\nabla)u=0$, so with $p\equiv0$ the
   field is an exact steady solution of the **Euler** branch ($\nu=0$) of the
   model on the periodic cell: $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$
   holds as $0=0$, and the primitive equation
   $\partial_tu+(u\cdot\nabla)u=-\nabla p+\nu\Delta u$ holds with $p\equiv0$;
2. the field satisfies the hypotheses of
   [[pthm-cm17-incompressible-periodic-local-evolution]]: it is smooth,
   divergence-free, periodic and has finite $H^s$ norm ($s\ge4$), and the
   displayed global solution is consistent with the local
   existence-uniqueness statement;
3. for the **viscous** branch ($\nu>0$) the field is **not** a solution:
   $\Delta u=(2\pi)^2u\ne0$ and $P\Delta u=\Delta u$ because $u$ is
   divergence-free, so the projected equation would require
   $\nu\cdot(2\pi)^2u=0$, which fails for $A>0$;
4. more generally, every steady periodic shear $u=(v(x_2),0,0)$ of the
   viscous branch with no body force and constant density is **constant**:
   the model's equations force $\nabla p=\eta(v''(x_2),0,0)$, and periodicity
   of $p$ in $x_1$ together with periodicity of $v$ in $x_2$ forces
   $v''\equiv0$ and then $v\equiv\mathrm{const}$.

## Facts & Assumptions

**Given:** the branch data $\rho>0$, $\nu=\eta/\rho$; the periodic cell; the field $u$; the shear ansatz of clause 4.

[F1] Branch and projected equation ([[post-cm17-fluid-constitutive]], [[def-cm-fluid-constitutive-models]], [[pthm-cm17-incompressible-periodic-local-evolution]]): for the incompressible branch the field equations are $\operatorname{div}u=0$ and, in the projected form on the periodic cell, $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$; for $\nu=0$ this is the Euler branch and for the primitive form the pressure gradient enters with the opposite sign.

[F2] Periodic calculus ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[def-cm-euclidean-spatial-calculus]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-sine-and-cosine-derivatives]]): on the torus, fields are identified with their periodic representatives; for $u=(A\sin(2\pi x_2+\varphi),0,0)$ one has $\partial_2u_1=2\pi A\cos(2\pi x_2+\varphi)$ and $\partial_2^2u_1=-(2\pi)^2A\sin(2\pi x_2+\varphi)$, so $\operatorname{div}u=0$, $\Delta u=-(2\pi)^2u$ and $P\Delta u=\Delta u$ because $u$ is divergence-free; smoothness and finiteness of all $H^s$ norms follow from the smooth periodic formula.

[F3] Fundamental theorem and periodicity ([[thm-ftc-first-part]]): for a periodic $C^1$ function $q$ of $x_1$ with period $1$, the integral representation $q(x_1)-q(0)=\int_0^{x_1}q'(s)\,ds$ combined with $q(1)=q(0)$ gives $\int_0^1q'(s)\,ds=0$.

## Verification

**Proof technique:** direct; compute divergence and convection for the shear, substitute into both branches of the projected equation, and integrate the pressure equation to classify steady shears.

1.1 Kinematics of the shear: $u$ has only its first component, which depends only on $x_2$, so $\operatorname{div}u=\partial_1u_1=0$ and $(u\cdot\nabla)u=u_1\partial_1u=0$ because $\partial_1u=0$; the field is $C^\infty$ and periodic with all $H^s$ norms finite. [given, F2]

1.2 Classification of steady shears: let $u=(v(x_2),0,0)$ be steady and periodic with constant density, no body force, $v$ of class $C^3$ and pressure $p$ of class $C^2$ on the torus. Then $\operatorname{div}u=0$, $(u\cdot\nabla)u=0$ and $\Delta u=(v'',0,0)$, so the momentum equation $0=-\nabla p+\eta\Delta u$ reads componentwise $\partial_1p=\eta v''(x_2)$ and $\partial_2p=\partial_3p=0$. Differentiating the first identity in $x_2$ and commuting the mixed partials by [[thm-clairaut-schwarz-mixed-partials]] gives $\eta v'''(x_2)=\partial_2\partial_1p=\partial_1\partial_2p=0$, so $v''$ is a constant $c$ and $p(x_1,x_2)=p(0,x_2)+\eta c\,x_1$. [given, F1, F2, algebra]

2.1 Euler branch: with $\nu=0$, $(u\cdot\nabla)u=0$ and $\partial_tu=0$, so the projected equation reads $0+P0=0$ and is satisfied; the primitive equation with $p\equiv0$ (zero mean, as required by the periodic convention) reads $0=0$. Hence the field is an exact steady Euler solution, and it meets the hypotheses of the local theorem; the theorem's uniqueness statement is consistent with this exact global solution. [given, step 1.1, F1, F2]

2.2 Viscous branch: by [F2], $\Delta u=-(2\pi)^2u$ and $P\Delta u=\Delta u$, so the projected equation would read $0+0=\nu\Delta u=-\nu(2\pi)^2u$; since $A>0$ the field $u$ is not identically zero and the identity fails for every $\nu>0$. [given, step 1.1, F1, F2, algebra]

3.1 Periodicity: since $p$ is $1$-periodic in $x_1$, [F3] applied to $x_1\mapsto p(x_1,x_2)$ gives $0=p(1,x_2)-p(0,x_2)=\eta v''(x_2)$; hence $v''\equiv0$, so $v'$ is constant and $v(x_2)=\alpha x_2+\beta$ with constants $\alpha,\beta$, and periodicity in $x_2$ forces $\alpha=0$. Thus the only steady periodic shear fields of the viscous branch with no body force are the constants. [step 1.2, F3, algebra] ∎

## Remarks

- The example separates the two branches sharply on the same data: the shear
  is an exact Euler solution and not even a solution of the viscous projected
  equation, because constant positive viscosity diffuses the shear on the
  periodic cell. The classified steady viscous shears are exactly the
  constants, i.e. the trivial shears.

- The pressure in clause 4 is forced to be linear in $x_1$ before
  periodicity kills the slope; this is the periodic-cell analogue of the
  constant pressure gradient of the channel example, and it shows that on a
  periodic cell a steady viscous shear cannot be driven. No measurement and
  no stability claim is made.
