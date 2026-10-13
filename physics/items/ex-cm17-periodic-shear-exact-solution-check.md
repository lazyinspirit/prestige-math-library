---
id: ex-cm17-periodic-shear-exact-solution-check
kind: example
title: "Periodic shear fields: an exact steady Euler solution, failure for the
  viscous branch, and the classification of steady periodic shears"
status: draft
origin: session
domain: physics
dependency_level: 16
deps:
  - pthm-cm17-incompressible-periodic-local-evolution
  - post-cm17-fluid-constitutive
  - def-periodic-vector-sobolev-space-and-leray-projection
  - def-cm-fluid-constitutive-models
  - def-cm-euclidean-spatial-calculus
  - thm-sine-and-cosine-derivatives
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-clairaut-schwarz-mixed-partials
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-cm17-continuum-body-and-units
  - def-countable-choice
dependency_roles:
  pthm-cm17-incompressible-periodic-local-evolution: physical-result
  post-cm17-fluid-constitutive: physical-assumption
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Worked checks on the periodic cell of the adopted fluid branch:
  the sinusoidal shear is verified to be an exact steady solution of the
  inviscid (Euler) branch with zero pressure and to fail the local existence
  theorem's projected equation for the viscous branch; among classical steady
  periodic shears with a C^3 velocity profile and C^2 pressure, the viscous
  branch with no body force admits only constant profiles. The example uses the
  periodic-cell idealization and reports no measurement."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Section 12.3
        (incompressible inviscid fluid and simple exact solutions)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September
        1, 2026 complete volume), Sections 8.4-8.5 (ideal fluid solutions and
        viscous shear flows)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited periodic Sobolev and local-evolution suppliers.

Use the dimensionless variables of [[post-cm17-fluid-constitutive]] clause (c): $t,x,u$ in this example denote the scaled time, unit-torus position and velocity, $\nu=\eta/(\rho U_*L_*)$, and $p=P_{\mathrm m}/(\rho U_*^2)$. The physical fields are restored by $u_{\mathrm{phys}}=U_*u(t/T_*,x/L_*)$, $P_{\mathrm m}=\rho U_*^2p(t/T_*,x/L_*)$. Work on the periodic cell $\mathbb T^3=(\mathbb R/\mathbb Z)^3$ of
[[post-cm17-fluid-constitutive]] clause (c), with constant density $\rho>0$,
no body force and the stress of the branch. The variables and field values here
are dimensionless. Let $A>0$ be a dimensionless velocity amplitude and
$\varphi\in\mathbb R$ a dimensionless phase,
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
   $\Delta u=-(2\pi)^2u\ne0$ and $P\Delta u=\Delta u$ because $u$ is
   divergence-free, so the projected equation would require
   $-\nu\cdot(2\pi)^2u=0$, which fails for $A>0$;
4. among classical periodic shears $u=(v(x_2),0,0)$ with
   $v\in C^3(\mathbb T)$ and periodic pressure $p\in C^2(\mathbb T^3)$,
   every steady solution of the viscous branch with no body force and constant
   density is **constant**: the dimensionless equations force
   $\nabla p=\nu(v''(x_2),0,0)$, and periodicity of $p$ in $x_1$ together with
   periodicity of $v$ in $x_2$ forces $v''\equiv0$ and then
   $v\equiv\mathrm{const}$.

## Facts & Assumptions

**Given:** Countable choice; the branch data $\rho>0$, $\nu=\eta/(\rho U_*L_*)$; the periodic cell; the field $u$; and the classical shear class stated in clause 4.

[F1] Branch and projected equation ([[post-cm17-fluid-constitutive]], [[def-cm-fluid-constitutive-models]], [[pthm-cm17-incompressible-periodic-local-evolution]]): for the incompressible branch the field equations are $\operatorname{div}u=0$ and, in the projected form on the periodic cell, $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$; for $\nu=0$ this is the Euler branch and for the primitive form the pressure gradient enters with the opposite sign.

[F2] Periodic calculus ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[def-cm-euclidean-spatial-calculus]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-sine-and-cosine-derivatives]]): on the torus, fields are identified with their periodic representatives; for $u=(A\sin(2\pi x_2+\varphi),0,0)$ one has $\partial_2u_1=2\pi A\cos(2\pi x_2+\varphi)$ and $\partial_2^2u_1=-(2\pi)^2A\sin(2\pi x_2+\varphi)$, so $\operatorname{div}u=0$, $\Delta u=-(2\pi)^2u$ and $P\Delta u=\Delta u$ because $u$ is divergence-free; smoothness and finiteness of all $H^s$ norms follow from the smooth periodic formula.

[F3] Integral of a derivative ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]]): for a $C^1$ real function $q$ on an open interval containing $[a,b]$, $q'$ is continuous and hence Riemann integrable on $[a,b]$, and $q(b)-q(a)=\int_a^bq'(s)\,ds$; endpoint derivatives are the restrictions of the ordinary derivatives. For a $1$-periodic $C^1$ representative this gives $\int_0^1q'=0$. Applying the same identity on any compact subinterval also shows that a zero derivative forces constancy there.

## Verification

**Proof technique:** direct; compute divergence and convection for the shear, substitute into both branches of the projected equation, and integrate the pressure equation to classify steady shears.

1.1 Kinematics of the shear: $u$ has only its first component, which depends only on $x_2$, so $\operatorname{div}u=\partial_1u_1=0$ and $(u\cdot\nabla)u=u_1\partial_1u=0$ because $\partial_1u=0$; the field is $C^\infty$ and periodic with all $H^s$ norms finite. [given, F2]

1.2 Classification setup: let $u=(v(x_2),0,0)$ be a steady periodic shear of the viscous branch, so $\nu>0$, with constant density, no body force, $v\in C^3(\mathbb T)$ and $p\in C^2(\mathbb T^3)$. Then $\operatorname{div}u=0$, $(u\cdot\nabla)u=0$ and $\Delta u=(v'',0,0)$. The primitive equation $0=-\nabla p+\nu\Delta u$ reads $\partial_1p=\nu v''(x_2)$ and $\partial_2p=\partial_3p=0$. Fixing $x_2,x_3$ and applying [F3] to the periodic representative of $p$ on $[0,x_1]$ for $x_1>0$ gives $p(x_1,x_2,x_3)-p(0,x_2,x_3)=\nu v''(x_2)x_1$. In particular the formula holds at $x_1=1$. [given, F1, F2, F3, algebra]

2.1 Euler branch: with $\nu=0$, $(u\cdot\nabla)u=0$ and $\partial_tu=0$, so the projected equation reads $0+P0=0$ and is satisfied; the primitive equation with $p\equiv0$ (zero mean, as required by the periodic convention) reads $0=0$. Hence the field is an exact steady Euler solution, and it meets the hypotheses of the local theorem; the theorem's uniqueness statement is consistent with this exact global solution. [given, step 1.1, F1, F2]

2.2 Viscous branch: by [F2], $\Delta u=-(2\pi)^2u$ and $P\Delta u=\Delta u$, so the projected equation would read $0+0=\nu\Delta u=-\nu(2\pi)^2u$; since $A>0$ the field $u$ is not identically zero and the identity fails for every $\nu>0$. [given, step 1.1, F1, F2, algebra]

3.1 Periodicity: since $p$ is $1$-periodic in $x_1$, step 1.2 at $x_1=1$ gives $0=\nu v''(x_2)$ for every $x_2$, and $\nu>0$ gives $v''\equiv0$. Apply [F3] to $v'$ on any compact subinterval of its real periodic representative: all increments vanish, so $v'=\alpha$ is constant. A second application gives $v(x_2)=\alpha x_2+\beta$; $v(1)=v(0)$ forces $\alpha=0$. Conversely, constant $v$ with constant zero-mean pressure satisfies the equations by zero derivatives. Thus the steady periodic viscous shear profiles are exactly the constants. [step 1.2, F3, algebra] ∎

## Remarks

- The example separates the two branches sharply on the same data: the shear is an exact Euler solution and not even a solution of the viscous projected equation, because constant positive viscosity diffuses the shear on the periodic cell. The classified steady viscous shears are exactly the constants, i.e. the trivial shears.

- The pressure in clause 4 is forced to be linear in $x_1$ before periodicity kills the slope; this is the periodic-cell analogue of the constant pressure gradient of the channel example, and it shows that on a periodic cell a steady viscous shear cannot be driven. No measurement and no stability claim is made.
