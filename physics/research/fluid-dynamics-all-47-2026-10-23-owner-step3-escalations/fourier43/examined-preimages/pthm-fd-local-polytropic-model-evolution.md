---
id: pthm-fd-local-polytropic-model-evolution
kind: physics-theorem
title: Local positive-density polytropic model evolution
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-countable-choice
  - post-fd-continuum-balances
  - def-fd-barotropic-euler-model
  - thm-fd-smooth-polytropic-euler-ivp
  - thm-fd-polytropic-energy
dependency_roles:
  def-countable-choice: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  def-fd-barotropic-euler-model: formulation-prerequisite
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  thm-fd-polytropic-energy: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: >-
  Unforced, smooth, positive-density barotropic Euler model on a
  periodic cell, with one fixed polytropic parameter and exponent; dimensions
  one and two are transversely invariant sectors of the three-dimensional model.
  It adopts specific internal energy $e_{\mathrm{phys}}(\rho)=\kappa_{\mathrm{phys}}\rho^{\gamma-1}/(\gamma-1)$
  for the model energy and asserts local smooth evolution and its mean-energy
  conservation. It does not cover vacuum, shocks, thermal coupling, spatially varying $\kappa_{\mathrm{phys}}$ or $\gamma$, or a molecular
  derivation of either constitutive law.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4
      url: https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf
      locator: Theorem 7.8, PDF pp. 84–86; local symmetrizable compressible Euler
        context, not the exact periodic barotropic proof.
    - title: Thomas C. Sideris, Formation of Singularities in Three-Dimensional
        Compressible Fluids
      url: https://web.math.ucsb.edu/~sideris/pdffiles/EulerCMP.pdf
      locator: §1, PDF pp. 2–3; positive-density local C1 symmetric-hyperbolic
        existence is cited, not proved, and used only as context.
    - title: "David Tong, Fluid Mechanics, Chapter 4: Waves"
      url: https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf
      locator: §4.6, printed pp.170–171 (PDF file pp.60–61), equations(4.97)–(4.101),
        especially energy conservation(4.100) and ideal-gas
        internal-energy/enthalpy context(4.101).
empirical_premises: []
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\in\{1,2,3\}$, $L>0$, reference density $\rho_*>0$ in kilograms per cubic metre, reference speed $U_*>0$ in metres per second, physical polytropic coefficient $\kappa_{\mathrm{phys}}>0$ in pascals times $(\mathrm{m}^3/\mathrm{kg})^\gamma$, and dimensionless exponent $\gamma>1$. Let $I\subset\mathbb R$ be an open time interval containing $0$ and $\mathbb T_L^d=(\mathbb R/(2\pi L\mathbb Z))^d$, with position $X$ in metres and time $t$ in seconds; this is the physical cell for $d=3$ and the reduced coordinate torus for $d=1,2$, whose physical cell is $\mathbb T_L^3$. The smooth model fields are $\rho_{\mathrm{phys}}\in C^\infty(I\times\mathbb T_L^d;(0,\infty))$ and $u_{\mathrm{phys}}\in C^\infty(I\times\mathbb T_L^d;\mathbb R^d)$. Torus fields are understood as smooth periodic lifts to Euclidean coordinates when applying the local continuum equations. The physical density $\rho_{\mathrm{phys}}$ is measured in kilograms per cubic metre, velocity $u_{\mathrm{phys}}$ in metres per second, and pressure $p_{\mathrm{phys}}$ in pascals. Adopt the unforced, positive-density barotropic Euler model
$$\partial_t\rho_{\mathrm{phys}}+\nabla_X\cdot(\rho_{\mathrm{phys}}u_{\mathrm{phys}})=0,\qquad \partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla_X)u_{\mathrm{phys}}+\rho_{\mathrm{phys}}^{-1}\nabla_X\!\left(\kappa_{\mathrm{phys}}\rho_{\mathrm{phys}}^\gamma\right)=0,$$
where the same fixed $\kappa_{\mathrm{phys}}$ and $\gamma$ apply throughout the flow. Also adopt the specific internal-energy closure $e_{\mathrm{phys}}(\rho)=\kappa_{\mathrm{phys}}\rho^{\gamma-1}/(\gamma-1)$ in joules per kilogram, so the model internal-energy density is $\rho e_{\mathrm{phys}}=\kappa_{\mathrm{phys}}\rho^\gamma/(\gamma-1)$ in pascals and $\rho^2 e_{\mathrm{phys}}\prime(\rho)=\kappa_{\mathrm{phys}}\rho^\gamma=p_{\mathrm{phys}}(\rho)$ for $\rho>0$. This is an additional constitutive assumption for the model energy; neither it nor the pressure law is derived from molecular mechanics or from an empirical measurement here.

For $d=3$, these are the direct three-dimensional equations. For $d=1,2$, define $J_d:\mathbb T_L^3\to\mathbb T_L^d$ by $J_d(X_1,X_2,X_3)=(X_1,\ldots,X_d)$, with coordinates modulo $2\pi L$, and lift reduced fields by
$$\widetilde\rho_{\mathrm{phys}}(t,X)=\rho_{\mathrm{phys}}(t,J_dX),\qquad \widetilde u_{\mathrm{phys}}(t,X)=\bigl((u_{\mathrm{phys}})_1(t,J_dX),\ldots,(u_{\mathrm{phys}})_d(t,J_dX),0,\ldots,0\bigr).$$
The three-dimensional pressure and Cauchy stress are $\widetilde p_{\mathrm{phys}}=\kappa_{\mathrm{phys}}\widetilde\rho_{\mathrm{phys}}^\gamma$ and $\widetilde\sigma=-\widetilde p_{\mathrm{phys}}I_3$. Direct differentiation gives
$$\partial_t\widetilde\rho_{\mathrm{phys}}+\nabla_3\cdot(\widetilde\rho_{\mathrm{phys}}\widetilde u_{\mathrm{phys}})=\bigl(\partial_t\rho_{\mathrm{phys}}+\nabla_d\cdot(\rho_{\mathrm{phys}}u_{\mathrm{phys}})\bigr)\circ J_d,$$
$$\partial_t\widetilde u_{\mathrm{phys}}+(\widetilde u_{\mathrm{phys}}\cdot\nabla_3)\widetilde u_{\mathrm{phys}}+\widetilde\rho_{\mathrm{phys}}^{-1}\nabla_3(\kappa_{\mathrm{phys}}\widetilde\rho_{\mathrm{phys}}^\gamma)=\bigl(\partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla_d)u_{\mathrm{phys}}+\rho_{\mathrm{phys}}^{-1}\nabla_d(\kappa_{\mathrm{phys}}\rho_{\mathrm{phys}}^\gamma),0,\ldots,0\bigr)\circ J_d.$$
Thus the lower-dimensional equations are exactly the mass and momentum reduction of the adopted three-dimensional barotropic Euler model for fields independent of the omitted coordinates and with zero omitted velocity components. Conversely, every smooth three-dimensional solution in this invariant class reduces to the stated equations. For a scalar field $f$ on $\mathbb T_L^d$ and its lift $\widetilde f=f\circ J_d$, the physical-cell means satisfy
$$\frac{1}{(2\pi L)^3}\int_{\mathbb T_L^3}\widetilde f(X)\,dX=\frac{1}{(2\pi L)^d}\int_{\mathbb T_L^d}f(X_1,\ldots,X_d)\,dX_1\cdots dX_d;$$
this follows by integrating the constant-in-transverse-coordinate lift over the remaining $3-d$ periodic coordinates.

Set $x=X/L\in\mathbb T^d=(\mathbb R/(2\pi\mathbb Z))^d$, $\tau=tU_*/L$, $R=\rho_{\mathrm{phys}}/\rho_*$, $V=u_{\mathrm{phys}}/U_*$, $P=p_{\mathrm{phys}}/(\rho_*U_*^2)$, and $\bar\kappa=\kappa_{\mathrm{phys}}\rho_*^{\gamma-1}/U_*^2>0$. Put $a=(\gamma-1)/2$ and $r(R)=\sqrt{\bar\kappa\gamma}\,R^a/a$. For smooth periodic $f$, use normalized measure $d\mu_x=(2\pi)^{-d}dx$, Fourier coefficients $\widehat f(k)=\int f(x)e^{-ik\cdot x}\,d\mu_x$, and $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^d}(1+|k|^2)^m|\widehat f(k)|^2$. Let $\rho_0:\mathbb T_L^d\to(0,\infty)$ and $u_0:\mathbb T_L^d\to\mathbb R^d$ be smooth real periodic initial data, and define $R_0(x)=\rho_0(Lx)/\rho_*$ and $V_0(x)=u_0(Lx)/U_*$. Then for every integer $s\ge4$ there is $T>0$, depending only on $d,s,\bar\kappa,\gamma,\|(r(R_0),V_0)\|_{H^s}$, and $\min r(R_0)$, such that the normalized system
$$\partial_\tau R+\nabla_x\cdot(RV)=0,\qquad \partial_\tau V+(V\cdot\nabla_x)V+R^{-1}\nabla_x(\bar\kappa R^\gamma)=0,\qquad R(0,\cdot)=R_0,\quad V(0,\cdot)=V_0$$
has a unique smooth real solution on $[0,T]\times\mathbb T^d$ with $R(\tau,x)>0$ and every integer Sobolev order $m\ge s$ bounded on that same interval. The dimensionless mean total-energy density
$$\overline E(\tau)=\int_{\mathbb T^d}\left(\tfrac12 R|V|^2+\frac{\bar\kappa}{\gamma-1}R^\gamma\right)d\mu_x$$
is constant. Equivalently, $\frac{1}{(2\pi L)^3}\int_{\mathbb T_L^3}\left(\tfrac12\widetilde\rho_{\mathrm{phys}}|\widetilde u_{\mathrm{phys}}|^2+\kappa_{\mathrm{phys}}\widetilde\rho_{\mathrm{phys}}^\gamma/(\gamma-1)\right)\,dX$ is constant and has units of pascals; for $d=3$ the tildes are omitted, and for $d=1,2$ this mean equals the reduced $d$-dimensional cell mean by the formula above. The polytropic pressure law is an adopted constitutive closure, not a molecular derivation. No temperature-coupled equation, vacuum or shock continuation, spatially varying constitutive parameters, or empirical validity claim is included.

## Statement references

[François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf).

[Thomas C. Sideris, “Formation of Singularities in Three-Dimensional Compressible Fluids”](https://web.math.ucsb.edu/~sideris/pdffiles/EulerCMP.pdf).

[David Tong, Fluid Mechanics, Chapter 4: Waves](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf).

## Facts & Assumptions

**Given:** Countable Choice; the SI units, positive reference scales, periodic cell, smooth data, fixed $\kappa_{\mathrm{phys}}>0$, fixed $\gamma>1$, and unforced model in the Statement.

[A1] [[post-fd-continuum-balances]]: the adopted smooth continuum supplies mass and linear-momentum balances; this item uses the unforced, periodic, positive-density branch and asserts no solution of the full thermal continuum balance system.


[F1] [[def-fd-barotropic-euler-model]]: the current definition specifies three-dimensional $C^2$ fields $\rho>0$ and $u$, a $C^1$ pressure law $P:(0,\infty)\to\mathbb R$, continuity and momentum equations, and Cauchy stress $-P(\rho)I_3$; it does not assume a sign for $P'(\rho)$. This use sets $P(\rho)=\kappa_{\mathrm{phys}}\rho^\gamma$; the Statement gives the exact lower-dimensional mass and momentum reduction. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval.

[F2] [[thm-fd-smooth-polytropic-euler-ivp]]: assuming Countable Choice, $d\in\{1,2,3\}$, $\bar\kappa>0$, $\gamma>1$, smooth periodic data with strictly positive minimum density, and integer $s\ge4$, the normalized system with fixed pressure law $P(R)=\bar\kappa R^\gamma$ has a unique smooth positive-density solution on a parameter-dependent local interval with all higher Sobolev norms bounded. Its actual complete proof and current Step-1 ready record were inspected; independent acceptance remains a later review duty.

[F3] [[thm-fd-polytropic-energy]]: the current theorem assumes Countable Choice, $d\in\{1,2,3\}$, $\bar\kappa>0$, $\gamma>1$, integer $s\ge4$, and smooth periodic initial data with positive minimum density; the local Euler theorem supplies the unique smooth positive-density solution. It proves the local law $\partial_tE+\operatorname{div}((E+p)u)=0$ and constancy of the torus mean for $E=\tfrac12\rho|u|^2+\bar\kappa\rho^\gamma/(\gamma-1)$. Its full current carrier proof was inspected; the batch-19 manifest registers this item.

[A2] [[def-countable-choice]]: “For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.”

[A3] The Statement adopts $e_{\mathrm{phys}}(\rho)=\kappa_{\mathrm{phys}}\rho^{\gamma-1}/(\gamma-1)$ as the barotropic model specific internal energy. The total-energy density in the claim is therefore the energy of this model closure, not an energy-temperature law derived from the continuum postulate or measured material data.

## Proof

**Given:** The Statement hypotheses and exact conditional interfaces [A1], [A2], and [F1]–[F3].

**Proof technique:** Scale the adopted physical balance system to the normalized torus, apply the current local positive-density mathematical theorem and the current mathematical energy supplier, then scale the conserved mean back to SI variables.

1.1 For $d=3$, the mass and momentum equations in the Statement are the adopted three-dimensional balance and barotropic-model equations [A1, F1]. For $d=1,2$, the lifts defined in the Statement have density independent of the omitted coordinates and zero velocity components there; the displayed lift identities show that the 3D mass equation is exactly the reduced mass equation and the first $d$ momentum components are exactly the reduced momentum equation, with all omitted components zero. The definitions of $R,V,P,x,\tau$ give $\partial_t\rho_{\mathrm{phys}}=(\rho_*U_*/L)\partial_\tau R$ and $\nabla_d\cdot(\rho_{\mathrm{phys}}u_{\mathrm{phys}})=(\rho_*U_*/L)\nabla_x\cdot(RV)$, so the mass equation becomes $\partial_\tau R+\nabla_x\cdot(RV)=0$. Also $\partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla_d)u_{\mathrm{phys}}=(U_*^2/L)(\partial_\tau V+(V\cdot\nabla_x)V)$ and $\rho_{\mathrm{phys}}^{-1}\nabla_dp_{\mathrm{phys}}=(U_*^2/L)R^{-1}\nabla_xP$. Since $P=\kappa_{\mathrm{phys}}\rho_*^{\gamma-1}U_*^{-2}R^\gamma=\bar\kappa R^\gamma$, the velocity equation becomes exactly the normalized equation in the Statement. [given, A1, F1, algebra]

2.1 The hypotheses of [F2] hold for the normalized data and parameters, including Countable Choice [A2], $d\le3$, integer $s\ge4$, $\bar\kappa>0$, $\gamma>1$, and $\min R_0>0$. Thus the normalized system has a unique smooth solution on the claimed interval, remains positive there, and has bounded Sobolev norms at all integer orders $m\ge s$. [given, A2, F2, step 1.1]

3.1 Applying the exact conditional energy interface [F3] to that positive smooth periodic solution gives constancy of $\overline E(\tau)$ throughout $[0,T]$. [given, F3, step 2.1]

4.1 The physical energy density equals $\rho_*U_*^2\left(\tfrac12R|V|^2+\bar\kappa R^\gamma/(\gamma-1)\right)$. The change of variables $X=Lx$ gives the normalized physical-cell average in dimension $d$; for $d=1,2$, the full-cell average of its 3D lift equals this reduced average because the lifted density and velocity are independent of the omitted coordinates. Thus the physical mean energy density is $\rho_*U_*^2\overline E(\tau)$ and is constant. [given, A3, step 1.1, step 3.1, algebra]

5.1 These deductions require the stated positive-density local branch and fixed polytropic closure; they assert no continuation through vacuum or shocks and no thermal or empirical conclusion. [given, A1, F1, step 2.1, step 4.1] ∎
