---
id: pthm-cm17-incompressible-periodic-local-evolution
kind: physics-theorem
title: "Local existence, uniqueness and pressure reconstruction for the incompressible fluid model on the periodic cell"
status: published
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

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Adopt the constant-density incompressible Newtonian or inviscid branch and periodic-cell convention of [[post-cm17-fluid-constitutive]] clauses (a), (a0), (c), with $\rho>0$, $\eta\ge0$, and no body force. Fix the model scales $L_*,U_*>0$, $T_*=L_*/U_*$ and put $\nu_*:=\eta/(\rho U_*L_*)$. Let $s\ge4$ be an integer and $U_0$ a smooth divergence-free field on the dimensionless unit torus, with $Y_0:=\|U_0\|_{H^s}<\infty$. Set
$$T:=\begin{cases}(2C_sY_0)^{-1},&Y_0>0,\\1,&Y_0=0,\end{cases}$$
where $C_s$ is the constant used by [[thm-local-smooth-periodic-euler-viscous-solution]]. Then:

**(i) Reduction and physical-time conversion.** Under $\tau=t/T_*$, $y=x/L_*$ and the scaling of the postulate, the physical continuity and momentum equations with $\sigma=-P_{\mathrm m}I_3+\eta(D_xu_{\mathrm{phys}}+D_xu_{\mathrm{phys}}^{\mathsf T})$ are equivalent to
$$\partial_\tau U+(U\cdot\nabla_y)U=-\nabla_y\Pi+\nu_*\Delta_yU,\qquad \operatorname{div}_yU=0.$$
For smooth fields with zero-mean pressure, these are equivalent to
$$\partial_\tau U+P((U\cdot\nabla_y)U)=\nu_*\Delta_yU \tag{PE}$$
and the pressure reconstruction below. A solution on $[0,T]$ is a physical solution on $[0,T_*T]$.

**(ii) Existence and pressure.** There is $U\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ with $U(0)=U_0$, $\operatorname{div}_yU=0$ and (PE), and $\sup_{[0,T]}\|U\|_{H^m}\le\|U_0\|_{H^m}e^{4C_mY_0T}$ for every $m\ge s$. There is a unique smooth dimensionless zero-mean pressure $\Pi$ giving the primitive equations in (i). The physical fields are
$$u_{\mathrm{phys}}(t,x)=U_*U(t/T_*,x/L_*),\qquad P_{\mathrm m}(t,x)=\rho U_*^2\Pi(t/T_*,x/L_*).$$
They satisfy the adopted field equations for both $\eta>0$ and the separately adopted $\eta=0$ Euler branch.

**(iii) Uniqueness and dependence on data.** Fix $B>0$. For all smooth divergence-free data $U_0,V_0$ with both $H^s$ norms at most $B$, the corresponding solutions exist on the common dimensionless interval $[0,T_B]$, $T_B=(2C_sB)^{-1}$, with $U(0)=U_0$ and $V(0)=V_0$. If $U_0=V_0$ then $U=V$. On this bounded data set the solution map is continuous from the $L^2$ topology into $C([0,T_B],H^{s-1})$, as in [[thm-fluid-uniqueness-and-continuous-dependence]]. The common physical interval is $[0,T_*T_B]$ for the same fixed scales and material parameters.

**(iv) Scope.** The Sobolev norm and $T,T_B$ are dimensionless; physical time also depends on the chosen scales. The theorem concerns smooth Eulerian fields on the adopted periodic cell. It constructs no material label map, no nonperiodic or rough-data solution and no global-in-time bound; no measured parameter is used.

## Facts & Assumptions

**Given:** Countable choice, the incompressible branch, fixed scales and material parameters, the dimensionless datum $U_0$, and the stated lifespan.

[F1] The incompressible branch adopts constant $\rho$, $\operatorname{div}u_{\mathrm{phys}}=0$ and the stated stress, for $\eta>0$ or separately $\eta=0$; the model equations are $\rho D_tu_{\mathrm{phys}}=\operatorname{div}\sigma$ and continuity ([[post-cm17-fluid-constitutive]], [[pthm-cm17-momentum-equation]], [[pthm-cm17-continuity-equation]], [[def-cm-euclidean-spatial-calculus]]).

[F2] The Leray projection is self-adjoint, commutes with derivatives, fixes divergence-free fields and kills gradients. Every smooth vector field has the decomposition $W=PW+\nabla f$ with zero-mean $f$ and $\widehat f(k)=k\cdot\widehat W(k)/(2\pi i|k|^2)$ for $k\ne0$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F3] Smooth local existence for dimensionless $\nu_*\ge0$ has exactly the lifespan and all-order bounds stated in (ii) ([[thm-local-smooth-periodic-euler-viscous-solution]]). Bounded smooth data have the common interval and stability of clause (iii) ([[thm-fluid-uniqueness-and-continuous-dependence]]).

[F4] Fourier Sobolev embedding sends sufficiently high-order spaces into each $C^j$ space; hence all-order coefficient bounds yield smooth spatial representatives ([[lem-fourier-lattice-sobolev-embedding]]).

## Proof

**Proof technique:** direct; scale the physical equations, apply the actual smooth periodic suppliers, reconstruct pressure and restore physical units.

1.1 In physical variables $\operatorname{div}\sigma=-\nabla_xP_{\mathrm m}+\eta\Delta_xu_{\mathrm{phys}}$ since $\operatorname{div}u_{\mathrm{phys}}=0$. The change of variables in the postulate gives $D_tu_{\mathrm{phys}}=(U_*^2/L_*)(\partial_\tau U+(U\cdot\nabla_y)U)$, $\nabla_xP_{\mathrm m}=(\rho U_*^2/L_*)\nabla_y\Pi$ and $\eta\Delta_xu_{\mathrm{phys}}=(\eta U_*/L_*^2)\Delta_yU$. Divide the momentum equation by $\rho U_*^2/L_*$ to obtain the dimensionless equation of (i); continuity reduces to $\operatorname{div}_yU=0$. Applying $P$ gives (PE) by [F2]. Every scaling factor is positive, so the physical and dimensionless reductions are reversible. [given, F1, F2, algebra]

1.2 Conversely let smooth divergence-free $U$ solve (PE). Set $W=(U\cdot\nabla_y)U$ and reconstruct the zero-mean potential $f$ in [F2], with $\nabla_y f=(I-P)W$. Then (PE) reads $\partial_\tau U+W=\nu_*\Delta_yU+\nabla_y f$. Taking $\Pi=-f$ gives the primitive equation of (i) with the correct sign. Coefficientwise $\|f\|_{H^{m+1}}\le C_m\|W\|_{H^m}$, with the same estimate for every time derivative since the fixed coefficient multiplier commutes with time differentiation. Smooth $W$ on the compact strip has uniform all-order norms and so do its time derivatives; [F4] then yields every mixed derivative of $f$, continuous jointly in time and space. Thus $\Pi$ is smooth. If two zero-mean pressures have the same gradient, all nonzero Fourier coefficients of their difference vanish and its zero coefficient vanishes too, so they coincide by [F2]. [given, F2, F4, algebra]

2.1 Apply [F3] to $U_0$ and the dimensionless viscosity $\nu_*\ge0$, obtaining the smooth field and bounds of (ii). Step 1.2 gives its unique mean-zero pressure. Reversing step 1.1 yields the physical fields and stress, defined until physical time $T_*T$, with $[P_{\mathrm m}]=[\rho U_*^2]=\mu\ell^{-1}\tau^{-2}$. Thus clause (ii) holds, including the independently adopted inviscid branch. [step 1.1, step 1.2, F1, F3, algebra]

3.1 For data bounded by $B$, [F3]'s stability supplier applies on $[0,T_B]$ to the two solutions with their respective initial data. It proves equality when $U_0=V_0$ and continuity in $C([0,T_B],H^{s-1})$. Multiplication by $U_*$ and the fixed change of space and time variables give the stated physical reading on $[0,T_*T_B]$. These operations supply no further lifespan estimate, label motion or global conclusion, exactly as clause (iv) records. [step 2.1, F3, algebra] ∎

## Remarks

The positive scales and material coefficients are model data. A comparison with measurements would additionally require an apparatus model, measured inputs and uncertainties. The global status of other fluid problems is not settled by this local theorem; the dated scope discussion in [[rem-local-versus-known-open-global-fluid-scope]] distinguishes announcements from proved implications for this exact unforced periodic model.
