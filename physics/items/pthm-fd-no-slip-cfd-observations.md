---
id: pthm-fd-no-slip-cfd-observations
kind: physics-theorem
title: "No-slip continuum CFD observable error"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 5
deps:
  - def-countable-choice
  - def-fd-forced-incompressible-newtonian-model
  - def-fd-incompressible-newtonian-model
  - def-fd-mini-fluid-interface
  - post-fd-boundary-data
  - prop-fd-mini-accumulated-pressure-observation
  - prop-fd-mini-observation-error
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-forced-incompressible-newtonian-model: formulation-prerequisite
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  def-fd-mini-fluid-interface: mathematical-premise
  post-fd-boundary-data: physical-assumption
  prop-fd-mini-accumulated-pressure-observation: mathematical-premise
  prop-fd-mini-observation-error: mathematical-premise
physical_scope: >-
  Conditional endpoint velocity-sensor and integrated-pressure error bounds for
  a constant-density, forced, incompressible Newtonian model with selected
  stationary no-slip walls, after explicit SI nondimensionalization and with
  an adopted distributional weak extension of the physical balance at the
  stated Sobolev regularity. The extension matches the continuous MINI
  equation. The claim is limited to the smooth strong-solution MINI branch
  and has no empirical validation, weak-limit pressure-rate, or
  Reynolds-uniform assertion.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf"
      locator: "§§3.1.1 and 3.2.1, printed pp. 60–65; incompressible Newtonian stress and no-slip as a separately adopted boundary condition."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://www3.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§5.4.1, printed pp. 173–174; Newtonian shear stress and the no-slip Couette setup."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54: Stokes equations: Stable pairs (I)"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf"
      locator: "§54.2, printed pp. 410–413; P1-bubble/P1 MINI stability and stationary Stokes approximation context only."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "§§8.4.2 and 8.6.1, printed pp. 470–471 and 487–488; MINI stability and stationary Stokes approximation context only."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $D^*\subset\mathbb R^3$ be a nonempty bounded connected polyhedral open set in dimensionless coordinates whose boundary has a finite rigidly moved Lipschitz graph-chart atlas, and let $T^*>0$ be dimensionless final time. Choose $\ell_0>0$ metres and $U_0>0$ metres per second, so the physical domain is $\Omega_{\mathrm{phys}}=\ell_0D^*$ and physical time is $t_{\mathrm{phys}}=(\ell_0/U_0)t^*$. Let constant density $\rho_0>0$ have units $\mathrm{kg\,m^{-3}}$ and constant dynamic shear viscosity $\mu_0>0$ have units $\mathrm{Pa\,s}$. Put $I_{\mathrm{phys}}=(0,(\ell_0/U_0)T^*)$. Throughout this item use the explicitly reindexed physical fields $u_{\mathrm{phys}}(x,t):=u(t,x)$, $p_{\mathrm{phys}}(x,t):=p(t,x)$, and $b_{\mathrm{phys}}(x,t):=b(t,x)$, where the right-hand fields have the time-first domain $I_{\mathrm{phys}}\times\Omega_{\mathrm{phys}}$ of the physical model definitions; the same notation convention applies to their explicitly adopted distributional weak extension below. Thus $u_{\mathrm{phys}}:\Omega_{\mathrm{phys}}\times I_{\mathrm{phys}}\to\mathbb R^3$ and $p_{\mathrm{phys}}:\Omega_{\mathrm{phys}}\times I_{\mathrm{phys}}\to\mathbb R$. Let $b_{\mathrm{phys}}:\Omega_{\mathrm{phys}}\times I_{\mathrm{phys}}\to\mathbb R^3$ be continuous, measured in $\mathrm{m\,s^{-2}}$. Set
$$u^*(y,t^*):=U_0^{-1}u_{\mathrm{phys}}(\ell_0y,\ell_0t^*/U_0),\quad p^*(y,t^*):=(\rho_0U_0^2)^{-1}p_{\mathrm{phys}}(\ell_0y,\ell_0t^*/U_0),\quad f^*(y,t^*):=\ell_0U_0^{-2}b_{\mathrm{phys}}(\ell_0y,\ell_0t^*/U_0),\quad \nu^*:=\frac{\mu_0}{\rho_0U_0\ell_0}>0.$$
Thus $u^*,p^*,f^*,\nu^*$, the mesh size $h$, and all time steps $\tau_n$ in the mathematical estimates are dimensionless; the dimensional kinematic viscosity is $\nu_{\mathrm{phys}}=\mu_0/\rho_0$ in $\mathrm{m^2\,s^{-1}}$, and the Reynolds number at these scales is $\operatorname{Re}=\rho_0U_0\ell_0/\mu_0=1/\nu^*$. Adopt the forced constant-density incompressible Newtonian branch and the stationary no-slip boundary choice from the preceding model definitions: $\rho=\rho_0$, $\operatorname{div}u_{\mathrm{phys}}=0$, $\sigma_{\mathrm{phys}}=-p_{\mathrm{phys}}I_3+2\mu_0D_{\mathrm{phys}}$, and $\rho_0(\partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla)u_{\mathrm{phys}})=\rho_0b_{\mathrm{phys}}+\operatorname{div}\sigma_{\mathrm{phys}}$, where $D_{\mathrm{phys}}=(\nabla_xu_{\mathrm{phys}}+\nabla_xu_{\mathrm{phys}}^{\mathsf T})/2$ and stress divergence is rowwise. The pressure is a constraint multiplier enforcing incompressibility, not an equation-of-state pressure. The selected no-slip condition is zero velocity trace on the stationary wall. The dimensionless pressure uses the spatial mean-zero gauge.

Use the complete smooth MINI observation interface defined earlier on the incompressible-numerical page. In particular, $V=H^1_0(D^*)^3$ has norm $\|v\|_V=\|\nabla v\|_{L^2(D^*)}$, $Q=L^2_0(D^*)$ has its $L^2$ norm, and $V_\sigma=\{v\in V:\operatorname{div}v=0\}$. The velocity space is continuous piecewise affine enriched by one interior simplex bubble per component, the pressure space is continuous piecewise affine with zero mean, and the discrete velocity belongs to the weak divergence kernel $Z_h$. Let $0=t_0<\cdots<t_N=T^*$ be the finite dimensionless time partition, $\tau_n=t_n-t_{n-1}>0$, $\tau_{\max}=\max_n\tau_n$, and $h=\max_{K\in\mathcal T_h}\operatorname{diam}(K)$ on a conforming shape-regular affine simplicial mesh $\mathcal T_h$. Forcing is averaged over each interval, the initial discrete velocity is $u_h^0=P_{Z_h}u^*(0)$, and each step uses the stated mixed backward-Euler recurrence with the real skew convective form; choose any actual discrete root. Assume $f^*\in L^2(0,T^*;L^2(D^*)^3)$, the exact solution satisfies $u^*\in W^{1,\infty}(0,T^*;H^2(D^*)^3\cap V_\sigma)$ and $p^*\in W^{1,\infty}(0,T^*;H^1(D^*)\cap Q)$, and the exact and discrete fields satisfy the full interface equations. Let $C_P(D^*)$ satisfy $\|v\|_{L^2(D^*)}\le C_P(D^*)\|v\|_V$ for $v\in V$. Impose the time-step restriction $\tau_{\max}\Lambda\le\frac12$; no other mesh/time coupling is imposed.

At this Sobolev regularity, explicitly adopt the following distributional extension of the physical momentum balance: for almost every $t^*\in(0,T^*)$, every $v\in V$, and every $q\in Q$. Here $\varepsilon(w)=(\nabla w+\nabla w^{\mathsf T})/2$.

$$\bigl(\partial_{t^*}u^*,v\bigr)_{L^2(D^*)}+2\nu^*\int_{D^*}\varepsilon(u^*):\varepsilon(v)\,dy+\int_{D^*}(u^*\cdot\nabla)u^*\cdot v\,dy-\int_{D^*}p^*\operatorname{div}v\,dy=\bigl(f^*,v\bigr)_{L^2(D^*)},\qquad-\int_{D^*}q\operatorname{div}u^*\,dy=0.$$

The physical weak stress pairing uses $\varphi(x):=v(x/\ell_0)\in H^1_0(\Omega_{\mathrm{phys}};\mathbb R^3)$ and is $2\mu_0\int_{\Omega_{\mathrm{phys}}}D_{\mathrm{phys}}:\varepsilon_x(\varphi)\,dx$, where $\varepsilon_x(\varphi)=(\nabla_x\varphi+\nabla_x\varphi^{\mathsf T})/2$; the declared scaling gives the displayed $2\nu^*$ strain term. The MINI interface's real skew convective form is $c(a;v,w)=\tfrac12\int_{D^*}\bigl((a\cdot\nabla)v\cdot w-(a\cdot\nabla)w\cdot v\bigr)\,dy$; for the divergence-free, zero-trace $u^*$ above, integration by parts gives $c(u^*;u^*,v)=\int_{D^*}(u^*\cdot\nabla)u^*\cdot v$. Thus the displayed weak equation is exactly the continuous exact-field equation in the MINI interface. This weak formulation is explicitly adopted at the stated Sobolev regularity; those hypotheses do not imply the physical model definition's classical $C^2/C^1$ regularity. It asserts no extension to weak limits or lower-regularity solutions.

Set
$$M=1+\|u^*\|_{W^{1,\infty}H^2}+\|p^*\|_{W^{1,\infty}H^1},\quad H=hM+\tau_{\max}M^2,\quad M_u=\|u^*\|_{L^\infty(0,T^*;V)},\quad \Lambda=1+C_D(\nu^*)^{-3}M_u^4,$$
$$M_\infty=\bigl(\|u^*(0)\|_2^2+C_P(D^*)^2(\nu^*)^{-1}\|f^*\|_{L^2L^2}^2\bigr)^{1/2},\qquad M_E=(\nu^*)^{-1/2}\|u^*(0)\|_2+C_P(D^*)(\nu^*)^{-1}\|f^*\|_{L^2L^2},$$
$$C_*=C_{D,\mathrm{shape}}(1+\nu^*)^2(1+(\nu^*)^{-4})(1+T^*)^2(1+M_\infty+M_E+M)^4\exp(2T^*\Lambda).$$
Here $C_D$ depends only on the domain, dimension, and trilinear-form constant, and $C_{D,\mathrm{shape}}$ is independent of $h$, the time steps, and $\nu^*$. For the pressure estimate let $\beta>0$ be the uniform MINI inf-sup lower bound, $M_b=\sqrt3$, let $C_I$ satisfy $\inf_{q_h\in Q_h}\|q-q_h\|_2\le C_Ih\|q\|_{H^1(D^*)}$ for $q\in H^1(D^*)\cap Q$, and choose $C_c$ with $|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V$. Define
$$K=(1+M_b/\beta)C_IT^*+\beta^{-1}\bigl(2C_P(D^*)+[2\nu^*\sqrt{T^*}+C_c(M_E+\sqrt{T^*}M_u)](\nu^*)^{-1/2}\bigr)C_*+\beta^{-1}(2\nu^*T^*+2C_cT^*).$$
For bounded endpoint velocity sensors $\ell_n:V\to\mathbb R$ that are real-linear and continuous, define $\|\ell_n\|_{V^*}=\sup_{\|v\|_V\le1}|\ell_n(v)|$, $\mathcal O(\ell;u^*)=\sum_{n=1}^N\tau_n\ell_n(u^*(t_n))$, $\mathcal O_h(\ell;u_h^*)=\sum_{n=1}^N\tau_n\ell_n(u_h^{*,n})$, and $\|\ell\|_{\ell^2_\tau(V^*)}=(\sum_{n=1}^N\tau_n\|\ell_n\|_{V^*}^2)^{1/2}$. The dimensionless interface observations obey
$$|\mathcal O_h(\ell;u_h)-\mathcal O(\ell;u^*)|\le(\nu^*)^{-1/2}C_*H\left(\sum_{n=1}^N\tau_n\|\ell_n\|_{V^*}^2\right)^{1/2}.$$
For every $\xi\in Q$, every $\eta\in C_c^\infty(0,T^*)$, and every node $0\le m\le N$, with $P^*(t)=\int_0^tp^*(s)\,ds$, $P_h^{*,m}=\sum_{n=1}^m\tau_np_h^{*,n}$, and $\bar p_h^*(t)=p_h^{*,n}$ on $(t_{n-1},t_n]$, the dimensionless pressure observations obey
$$|(P^*(t_m)-P_h^{*,m},\xi)_{L^2}|\le KH\|\xi\|_Q,\qquad \left|\left(\int_0^{T^*}(p^*-\bar p_h^*)\eta\,dt^*,\xi\right)_{L^2}\right|\le(K+1)H\|\eta'\|_{L^1(0,T^*)}\|\xi\|_Q.$$
The physical endpoint velocity reading obtained by multiplying each normalized scalar sensor by $U_0$ has error bound $U_0(\nu^*)^{-1/2}C_*H\|\ell\|_{\ell^2_\tau(V^*)}$. Define the physical primitive $P_{\mathrm{phys}}(x,t)=\int_0^t p_{\mathrm{phys}}(x,s)\,ds$, the physical discrete primitive $P_{\mathrm{phys},h}^m(x)=\sum_{n=1}^m(\ell_0/U_0)\tau_n\rho_0U_0^2p_h^{*,n}(x/\ell_0)$, and the physical right-constant pressure reconstruction $\bar p_{\mathrm{phys},h}(x,t)=\rho_0U_0^2\bar p_h^*(x/\ell_0,U_0t/\ell_0)$. For the physical node $t_{\mathrm{phys},m}=(\ell_0/U_0)t_m$, where $t_m$ is the dimensionless partition node, the spatially weighted physical primitive error $\int_{\Omega_{\mathrm{phys}}}\xi(x/\ell_0)(P_{\mathrm{phys}}(x,t_{\mathrm{phys},m})-P_{\mathrm{phys},h}^m(x))\,dx$ is bounded by $\rho_0U_0\ell_0^4KH\|\xi\|_Q$. The physical volume-time pressure error
$$\left|\int_0^{(\ell_0/U_0)T^*}\int_{\Omega_{\mathrm{phys}}}\xi(x/\ell_0)(p_{\mathrm{phys}}(x,t)-\bar p_{\mathrm{phys},h}(x,t))\eta(U_0t/\ell_0)\,dx\,dt\right|$$
is at most $\rho_0U_0\ell_0^4(K+1)H\|\eta'\|_{L^1(0,T^*)}\|\xi\|_Q$ in $\mathrm{Pa\,m^3\,s}$. The scale factor follows from $p_{\mathrm{phys}}=\rho_0U_0^2p^*$, $dx=\ell_0^3dy$, and $dt=(\ell_0/U_0)dt^*$. These are conditional model predictions on the strong-solution branch. They make no Reynolds-uniform claim and no instantaneous pressure-error claim, and do not establish solver convergence or empirical validation.

## Statement references

[[def-fd-forced-incompressible-newtonian-model|Forced constant-density incompressible Newtonian branch]]

[[def-fd-incompressible-newtonian-model|Unforced constant-density Newtonian model conventions]]

[[post-fd-boundary-data|Selected stationary no-slip boundary data]]

[[def-fd-mini-fluid-interface|Smooth MINI observation interface]]

[[prop-fd-mini-observation-error|Bounded velocity-observation error for the smooth MINI branch]]

[[prop-fd-mini-accumulated-pressure-observation|Accumulated pressure-observation error for the smooth MINI branch]]

[Tong, *Fluid Mechanics*, §§3.1.1 and 3.2.1](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf)

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §5.4.1](https://www3.nd.edu/~powers/ame.60635/notes.pdf)

[Guermond, MATH 661, Chapter 54, §54.2](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*, §§8.4.2 and 8.6.1](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)

## Facts & Assumptions

[A1] Countable Choice is the statement that every countable family of nonempty sets has a choice function. The smooth MINI velocity and pressure-observation suppliers use this exact choice strength; no stronger choice principle is added. [[def-countable-choice]]

[A2] The physical forced branch has constant $\rho_0>0$, constant $\mu_0>0$, $\sigma=-pI_3+2\mu_0D$, and $\rho_0(\partial_tu+(u\cdot\nabla)u)=\rho_0b+\operatorname{div}\sigma$; the forced local model supplies the body-acceleration input and the SI units. [[def-fd-forced-incompressible-newtonian-model]]

[A3] The selected stationary no-slip branch has zero wall velocity trace and is an adopted boundary datum, not a deduction from the interior balance. [[post-fd-boundary-data]]

[A4] At the Sobolev regularity in the Statement, the displayed distributional momentum balance is explicitly adopted as the physical branch's weak extension. It matches the continuous exact-field equation of the MINI interface; the Sobolev hypotheses do not entail the classical $C^2/C^1$ hypotheses in the forced-model definition. [[def-fd-forced-incompressible-newtonian-model]] [[def-fd-mini-fluid-interface]]

[F1] The smooth MINI interface defines the exact strong weak-form solution, mean-zero pressure space, shape-regular P1-bubble/P1 spaces, cell-average forcing, projected initialization, any actual backward-Euler root, and the endpoint and pressure observations. [[def-fd-mini-fluid-interface]]

[F2] Under the full strong-solution, mesh, initialization, and time-step hypotheses in the Statement, the velocity-observation proposition gives the stated endpoint-sensor bound. It retains the explicit viscosity powers and exponential in $C_*$; it is not Reynolds uniform. [[prop-fd-mini-observation-error]]

[F3] Under the same strong-branch hypotheses, the accumulated-pressure proposition gives the nodal pressure-primitive and smooth time-test bounds with the displayed $K$. It does not give an instantaneous pressure-error rate. [[prop-fd-mini-accumulated-pressure-observation]]

## Proof

**Given:** Countable Choice; the SI physical model data and scales; the exact strong solution; the actual mixed MINI solution; the mesh and partition; the time-step restriction; and the bounded sensors.

1.1 Use the adopted weak extension [A4] at the Sobolev regularity stated here. Under $x=\ell_0y$, $t_{\mathrm{phys}}=(\ell_0/U_0)t^*$, $u_{\mathrm{phys}}=U_0u^*$, $p_{\mathrm{phys}}=\rho_0U_0^2p^*$, and $b_{\mathrm{phys}}=(U_0^2/\ell_0)f^*$, the distributional time-derivative, convection, pressure-gradient, viscous, and body-force terms have common acceleration scale $U_0^2/\ell_0$ after division by $\rho_0$; the dimensionless viscous coefficient is $\nu^*=\mu_0/(\rho_0U_0\ell_0)$. The zero physical wall trace remains zero after division by $U_0$. The strain and skew-convection identities in the Statement show that the resulting equation is exactly the continuous weak equation in the MINI interface. This scaling uses the adopted distributional equation and does not infer classical $C^2/C^1$ regularity from the Sobolev hypotheses. [A2, A3, A4, given, algebra]

2.1 The scaled exact and discrete fields satisfy the smooth MINI interface assumptions stated in the theorem, including the mean-zero pressure gauge, shape-regular matching meshes, projected initial value, actual mixed solution root, and $\tau_{\max}\Lambda\le\frac12$. Hence the dimensionless observations in the two MINI propositions are exactly the observations claimed here. [F1, given, step 1.1]

3.1 Apply [F2] to the bounded endpoint velocity sensors. This gives the dimensionless velocity-observation inequality with the exact constant $C_*$ and the explicit factor $(\nu^*)^{-1/2}$. [A1, F2, F1, step 2.1]

3.2 Apply [F3] to the mean-zero pressure sensor $\xi$ and test $\eta$. This gives both the nodal primitive bound with $K$ and the time-tested bound with $(K+1)\|\eta'\|_{L^1}\|\xi\|_Q$; no instantaneous pressure rate is used. [A1, F3, F1, step 2.1]

4.1 Multiplying a normalized velocity reading by $U_0$ multiplies its error by $U_0$. For the physical volume-time pressure functional, $p_{\mathrm{phys}}$ contributes $\rho_0U_0^2$, the spatial volume contributes $\ell_0^3$, and time contributes $\ell_0/U_0$, so its total conversion factor is $\rho_0U_0\ell_0^4$. Applying these exact factors to steps 3.1–3.2 gives the physical-unit bounds in the Statement. [step 3.1, step 3.2, algebra] ∎
