---
id: pthm-cm17-incompressible-periodic-local-evolution
kind: physics-theorem
title: "Local existence, uniqueness and pressure reconstruction for the incompressible fluid model on the periodic cell"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm17-fluid-constitutive, pthm-cm17-momentum-equation, pthm-cm17-continuity-equation, def-cm-fluid-constitutive-models, def-periodic-vector-sobolev-space-and-leray-projection, thm-local-smooth-periodic-euler-viscous-solution, thm-fluid-uniqueness-and-continuous-dependence, lem-fourier-lattice-sobolev-embedding, def-countable-choice, def-cm-euclidean-spatial-calculus, def-cm17-density-and-mass, def-cm17-traction-and-stress, def-cm17-continuum-body-and-units]
dependency_roles:
  post-cm17-fluid-constitutive: physical-assumption
  pthm-cm17-momentum-equation: physical-result
  pthm-cm17-continuity-equation: physical-result
  def-cm-fluid-constitutive-models: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  thm-local-smooth-periodic-euler-viscous-solution: mathematical-premise
  thm-fluid-uniqueness-and-continuous-dependence: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm17-traction-and-stress: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted incompressible Newtonian (or inviscid Euler) fluid branch and its periodic-cell idealization, and on the Axiom of Countable Choice used by the Fourier machinery: for smooth divergence-free periodic initial velocity data of finite H^s norm (integer s at least 4) there is a local time T depending only on that norm, and a smooth periodic velocity and a unique smooth mean-zero pressure satisfying the model's field equations exactly; the velocity is unique on the interval among smooth divergence-free solutions, depends continuously on initial data in H^{s-1}, and no all-time bound or global regularity conclusion is claimed. The theorem concerns the Eulerian field equations and does not construct the material label map; no measured viscosity or pressure is asserted."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 12.2-12.3 (the incompressible viscous fluid equations and the inviscid limit)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 8.4-8.5 (ideal and viscous incompressible fluid dynamics, with the Navier-Stokes equation and its exact channel solutions)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Adopt the incompressible Newtonian fluid branch
and the periodic-cell idealization of [[post-cm17-fluid-constitutive]]
(clauses (a) and (c)) with constant density $\rho>0$, dynamic viscosity
$\eta>0$ and the stress field $\sigma=-pI_3+\eta(Du+Du^{\mathsf T})$
([[def-cm-fluid-constitutive-models]]), and let $\nu:=\eta/\rho$. Let $s\ge4$
be an integer and let $u_0$ be a smooth $\mathbb T^3$-periodic divergence-free
velocity field with $Y_0:=\|u_0\|_{H^s}<+\infty$ in the conventions of
[[def-periodic-vector-sobolev-space-and-leray-projection]], and let
$T>0$ be the time of [[thm-local-smooth-periodic-euler-viscous-solution]],
$T=(2C_sY_0)^{-1}$ if $Y_0>0$ and $T=1$ if $Y_0=0$. Then:

**(i) Reduction.** With the body force absent ($b\equiv0$), the field
equations of the branch — the continuity equation (C) of
[[pthm-cm17-continuity-equation]] with $\rho$ constant,
$\operatorname{div}u=0$, and the momentum equation (M) of
[[pthm-cm17-momentum-equation]] with this stress field — are equivalent, for
smooth periodic fields with mean-zero pressure, to the projected equation

$$\partial_tu+P\bigl((u\cdot\nabla)u\bigr)=\nu\,\Delta u , \tag{PE}$$

together with $\operatorname{div}u=0$ and the determination of the pressure
from $u$; explicitly, a smooth periodic field $u$ with $\operatorname{div}u=0$
solves the model's equations with some smooth mean-zero pressure if and only
if it solves (PE).

**(ii) Existence and pressure.** Let $u$ be the smooth field of
[[thm-local-smooth-periodic-euler-viscous-solution]] with data $u_0,\nu,s$, so
that $u\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$, $u(0,\cdot)=u_0$,
$\operatorname{div}u=0$, (PE) holds, and $\|u(t)\|_{H^m}\le
\|u_0\|_{H^m}e^{4C_mY_0T}$ for every $m\ge s$. Then there is a unique smooth
$\mathbb T^3$-periodic pressure field $p$ of zero spatial mean on
$[0,T]\times\mathbb T^3$ such that the primitive-variable equations

$$\partial_tu+(u\cdot\nabla)u=-\nabla\bigl(p/\rho\bigr)+\nu\Delta u,\qquad \operatorname{div}u=0 \tag{NS}$$

hold. Equivalently, the pair $(u,P_{\mathrm m})$ with model pressure
$P_{\mathrm m}:=\rho p$ satisfies the momentum equation (M) with $b\equiv0$
and stress $\sigma=-P_{\mathrm m}I_3+\eta(Du+Du^{\mathsf T})$.

**(iii) Uniqueness and dependence on data.** If $v_0$ is a second smooth
periodic divergence-free field with $\|v_0\|_{H^s}\le B$ and $v$ the
corresponding smooth solution on the common interval with $v(0)=u(0)$, then
$u=v$; and the solution map is continuous from $\{\|u_0\|_{H^s}\le B\}$ with
the $L^2$-topology into $C([0,T],H^{s-1})$.

**(iv) Scope.** $T$ depends only on $Y_0$ and $s$. The result is local in
time, is stated for smooth data, and the periodic boundary is the idealization
of clause (c) of [[post-cm17-fluid-constitutive]]; no all-time bound and no
global regularity conclusion is claimed. The statement concerns the Eulerian
field equations: the material label map of the periodic model is not
constructed here.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the fluid branch data $(\rho,\eta)$ and the periodic cell; the smooth divergence-free datum $u_0$ with $Y_0<\infty$; the time $T$.

[F1] Branch and model equations ([[post-cm17-fluid-constitutive]], [[def-cm-fluid-constitutive-models]], [[pthm-cm17-momentum-equation]], [[pthm-cm17-continuity-equation]]): for the incompressible Newtonian branch with constant density and no body force, the model's momentum equation is $\rho D_tu=\operatorname{div}\sigma$ with $\sigma=-pI_3+\eta(Du+Du^{\mathsf T})$, and the continuity equation reduces to $\operatorname{div}u=0$.

[F2] Leray projection ([[def-periodic-vector-sobolev-space-and-leray-projection]]): $P$ is the orthogonal projection onto divergence-free fields, $Pu=u$ for divergence-free $u$, $P\nabla f=0$ for scalar fields $f$ with $\nabla f\in H^s$, $P$ commutes with $\partial_j$ and $\Delta$, and every $u\in H^s$ has the unique orthogonal decomposition $u=Pu+\nabla f$ with $f\in H^{s+1}$ of zero mean and the coefficient formula $\widehat f(k)=k\cdot\widehat u(k)/(2\pi i|k|_2^2)$ for $k\ne0$.

[F3] Local existence ([[thm-local-smooth-periodic-euler-viscous-solution]]): with $s\ge4$, $\nu\ge0$, smooth divergence-free $u_0$ and $T$ as in the statement, there is a smooth field as in clause (ii), with the projected equation (PE), the divergence-free property, preserved mean, and the stated uniform $H^m$ bounds.

[F4] Uniqueness and continuous dependence ([[thm-fluid-uniqueness-and-continuous-dependence]]): on the common interval and for data bounded by $B$ in $H^s$, smooth divergence-free solutions of (PE) with equal initial data coincide, and the solution map is continuous from the $L^2$-topology into $C([0,T],H^{s-1})$, with the stability bound $\|u(t)-v(t)\|_{L^2}\le e^{\Theta t}\|u_0-v_0\|_{L^2}$.

[F5] Sobolev embedding ([[lem-fourier-lattice-sobolev-embedding]]): for $\sigma>j+3/2$ an integer, $H^\sigma\subset C^j$ with the stated bounds, so a mean-zero field in $H^\sigma$ for every $\sigma$ has a $C^\infty$ representative.

## Proof

**Proof technique:** direct; reduce the model's equations to the projected equation with the Leray projection, invoke the periodic local existence and uniqueness theorems, and reconstruct the pressure from the Hodge decomposition of the transport term.

1.1 Suppose first that smooth periodic fields $u$ and $p$ with $\operatorname{div}u=0$ and mean-zero $p$ satisfy the model's equations of [F1]. Then $\operatorname{div}\sigma=-\nabla p+\eta(\Delta u+\nabla\operatorname{div}u)=-\nabla p+\eta\Delta u$, and the momentum equation together with the continuity equation ($\operatorname{div}u=0$) reads $\rho(\partial_tu+(u\cdot\nabla)u)=-\nabla p+\eta\Delta u$, i.e. $\partial_tu+(u\cdot\nabla)u=-\nabla(p/\rho)+\nu\Delta u$ with $\nu=\eta/\rho$. Applying $P$ to both sides and using [F2] ($Pu=u$, $P\nabla(p/\rho)=0$, $P\Delta u=\Delta Pu=\Delta u$) gives (PE). [given, F1, F2, algebra]

1.2 Conversely, let $u$ be smooth, periodic and divergence-free with (PE) on $[0,T]$. Put $v:=(u\cdot\nabla)u$, a smooth periodic vector field, and let $f^*(t,\cdot)$ be its zero-mean potential: by the decomposition in [F2], for each $t$ there is a unique mean-zero scalar field $f^*$ with $\nabla f^*=(\mathrm{Id}-P)v$, whose coefficients are $\widehat{f^*}(t,k)=k\cdot\widehat v(t,k)/(2\pi i|k|_2^2)$ for $k\ne0$. Then (PE) reads $\partial_tu+v-\nabla f^*=\nu\Delta u$, that is $\partial_tu+(u\cdot\nabla)u=\nu\Delta u+\nabla f^*$, and multiplying by $\rho$ gives the model's momentum equation with $\sigma=-P_{\mathrm m}I_3+\eta(Du+Du^{\mathsf T})$ and $P_{\mathrm m}:=-\rho f^*$, because $\rho\nabla f^*=-\nabla P_{\mathrm m}$ and $\operatorname{div}\sigma=-\nabla P_{\mathrm m}+\eta\Delta u$. This proves the equivalence in (i) once the regularity of $f^*$ is established below. [given, F1, F2, algebra]

2.1 Existence: the hypotheses of [F3] are exactly the data of clause (ii) ($s\ge4$, $\nu=\eta/\rho\ge0$, smooth divergence-free $u_0$, $Y_0<\infty$), so [F3] provides the smooth field $u$ on $[0,T]\times\mathbb T^3$ satisfying (PE), preserving $\operatorname{div}u=0$ and the spatial mean, with the uniform bounds. Step 1.2 then supplies a mean-zero potential $f^*$ and the model pressure $P_{\mathrm m}=-\rho f^*$, so the primitive-variable equations (NS) hold with $p=f^*$. [given, step 1.2, F3]

2.2 Regularity of the pressure: for each fixed $t$ the coefficients of $f^*$ are $\widehat{f^*}(t,k)=k\cdot\widehat v(t,k)/(2\pi i|k|_2^2)$, so for every integer $m$ the estimate $w_k^{2(m+1)}|\widehat{f^*}(t,k)|^2\le C_m w_k^{2m}|\widehat v(t,k)|^2$ (with a constant uniform for $k\ne0$) shows $f^*(t,\cdot)\in H^{m+1}$ with norms controlled by those of $v(t,\cdot)=(u\cdot\nabla)u(t,\cdot)$, which is smooth and uniformly bounded in every $H^m$ on the compact strip by [F3]; applying the same argument to $\partial_t^r v$ for every $r$ (the coefficient formula commutes with $\partial_t$) shows that $f^*$ and all its time derivatives lie in every $H^m$ with uniform bounds; the embedding [F5] applied to $\partial_t^r f^*$ for every $r$ bounds every mixed derivative on the compact strip, and the mean value theorem in $t$ together with the spatial embedding gives the joint continuity of every mixed derivative, so the field $f^*$ is $C^\infty$ on the strip. Uniqueness of the mean-zero pressure with a given gradient is coefficientwise: if $\nabla q=0$ then $2\pi ik\widehat q(k)=0$ for $k\ne0$ and $\widehat q(0)=0$ by the zero-mean convention, so $q=0$. This completes clauses (i) and (ii). [given, step 1.2, F2, F3, F5, algebra]

3.1 Uniqueness and continuous dependence: by step 2.1 every smooth divergence-free solution of the model's equations with mean-zero pressure satisfies (PE); [F4] therefore applies to two such solutions with equal initial data and gives $u=v$, and gives the stated continuous dependence in $C([0,T],H^{s-1})$ for data bounded by $B$. The scope clause records that $T$ depends only on $Y_0$ and $s$ by [F3], that the periodic setting is the idealization adopted in clause (c) of [[post-cm17-fluid-constitutive]], and that no material label map, all-time bound or global regularity statement is claimed. [given, step 2.1, step 2.2, F3, F4] ∎

## Remarks

- **Physical reading and units.** The equation (NS) is the model's momentum
  equation for the branch: with $\nu=\eta/\rho$ of dimension
  $\ell^2\tau^{-1}$ and $P_{\mathrm m}=\rho f^*$ of dimension
  $\mu\ell^{-1}\tau^{-2}$ (pressure), both sides of the momentum equation have
  dimension $\mu\ell^{-2}\tau^{-2}$, i.e. force per volume
  ([[def-cm17-continuum-body-and-units]]). The $T$ of the theorem is a
  dimensionless time in the conventions of the cited spaces; restoring units
  multiplies it by the chosen time scale, a convention of the periodic-cell
  idealization.

- **What is not proved.** No global-in-time statement, no statement for rough
  data, no boundary conditions other than the periodic idealization, and no
  material label map. The known open all-time regularity question for the
  three-dimensional viscous model is outside this theorem and is described as
  open in the scope remark of the mathematics supplier.

- **Idealization and empirical status.** The periodic-cell boundary and the
  Newtonian constitutive law are adopted model structure; the value of $\eta$
  used in any numerical comparison is a measured empirical premise. Agreement
  of a computed flow with an observed one tests the model, the boundary and
  the measurement together and is evidence, not proof of the constitutive
  law.
