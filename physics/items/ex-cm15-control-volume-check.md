---
id: ex-cm15-control-volume-check
kind: example
title: "A declared smooth open flow: the uniform expansion $\\rho=\\rho_0e^{-3\\alpha t}$, $u=\\alpha x$ satisfies the control-volume identities on fixed and material regions, and an ideal elbow illustrates the inlet/outlet decomposition"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [pthm-cm15-control-volume-balance,
       post-cm15-impulse,
       thm-cm-control-volume-balance,
       thm-cm-variable-mass-momentum-balance,
       def-cm-continuum-motion,
       def-cm-euclidean-spatial-calculus,
       def-cm01-units,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-euclidean-inner-product,
       def-countable-choice]
dependency_roles:
  pthm-cm15-control-volume-balance: physical-result
  post-cm15-impulse: physical-assumption
  thm-cm-control-volume-balance: mathematical-premise
  thm-cm-variable-mass-momentum-balance: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Two declared checks of the smooth open-flow bookkeeping: (i) the exact uniform-expansion model $\\rho(t)=\\rho_0e^{-3\\alpha t}$, $u(t,x)=\\alpha x$, $p=p_0-\\rho\\alpha^2\\lvert x\\rvert^2/2$, with the control maps specified and the units of $\\alpha,\\rho_0,p_0$ declared; (ii) a conditional steady-elbow calculation with declared inlet/outlet data, where the balance gives mass flow $0.4\\,\\mathrm{kg\\,s^{-1}}$ and requires a net external resultant on the fluid of magnitude about $3.578\\,\\mathrm N$. No pressure-free momentum-flux force decomposition is inferred, since no boundary-stress data are given. Both are computations on declared model data; the example reports no measurement and does not solve a boundary-value problem."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), §3.7 and §4.4: the material transport and balance equations specialised here to a declared velocity and density field"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), §§1.1-1.3: the fixed-volume and Lagrangian descriptions of the same balance, used for the fixed-ball and material-ball checks"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.7 'Steady-Flow Devices': the mass-flow relation $\\dot m=\\rho vA$ and the steady-flow momentum relation used in the elbow illustration"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.07%3A_Steady-Flow_Devices"
---

## Example

**(i) Declared uniform expansion.** Fix constants $\rho_0>0$,
$\alpha\ne0$ and $p_0$, with $[\rho_0]=\mathsf M\ell^{-3}$,
$[\alpha]=\tau^{-1}$ and $[p_0]=\mathsf M\ell^{-1}\tau^{-2}$. On an open
interval $I\ni0$ set
$$\rho(t)=\rho_0e^{-3\alpha t},\qquad u(t,x)=\alpha x,\qquad \sigma(t,x)=-p(t,x)\,\mathrm{Id},\qquad p(t,x)=p_0-\frac{\rho(t)\alpha^2}{2}\lvert x\rvert^2,\qquad b\equiv0,$$
and fix radii $R_0>0$ and $R>0$ with units $\ell$. Let the material region
be a ball $B_{R_B}$ with radius $R_B>\max(R,R_0)$.
Define the material motion $\chi(t,X)=e^{\alpha t}X$ on a neighbourhood of
$\overline{B_{R_B}}$. Its restriction to $B_{R_0}$ has current radius
$R(t)=R_0e^{\alpha t}$. Define the fixed-ball control motion by
$\psi_R(t,X)=X$ on $B_R\subset B_{R_B}$, and the material-ball control motion
by $\psi_{\mathrm{mat}}(t,X)=e^{\alpha t}X$ on
$B_{R_0}\subset B_{R_B}$. Take the fields on a common open neighbourhood of
the closed sweep of $\chi$ and the closed sweeps of these controls. The fields
satisfy the adopted balances of
[[pthm-cm15-control-volume-balance]] (the density is spatially uniform, the
velocity is $\alpha x$, and the pressure is quadratic).

**(ii) Declared ideal elbow.** Declare a steady incompressible ideal flow in a
device that turns the stream by $90^\circ$: density $\rho=1000\ \mathrm{kg\,m^{-3}}$,
inlet area $A_{\mathrm{in}}=10^{-4}\ \mathrm{m^2}$, inlet speed
$v_{\mathrm{in}}=4\ \mathrm{m\,s^{-1}}$ along $\hat x$, outlet area
$A_{\mathrm{out}}=5\times10^{-5}\ \mathrm{m^2}$, outlet velocity along
$\hat y$, and zero body force. Adopt the local mass and momentum equations
of the smooth open-flow model on a neighbourhood of the closed fixed elbow
control region within the common field domain. No boundary-stress
distribution or pressure decomposition is specified; the calculation below
determines only the net external resultant required by the steady balance.

## Facts & Assumptions

**Given:** The declared fields of the Example, the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), assumed as in the statements of [[pthm-cm15-control-volume-balance]] and [[thm-cm-control-volume-balance]], whose transport and divergence deductions use it, and the control-volume theorem [[pthm-cm15-control-volume-balance]] with its clauses 1-3.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]), inherited from [[pthm-cm15-control-volume-balance]]; the elementary verifications of steps 1.1-4.1 use no further choice.

[L1] Balance and control-volume identities ([[pthm-cm15-control-volume-balance]] clauses 1-3, [[thm-cm-control-volume-balance]], [[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]], [[thm-cm-variable-mass-momentum-balance]]): for a model satisfying the adopted local mass and momentum balances, (CV1) and (CV2) hold for every control motion with bounded $C^1$ control regions whose closed sweep lies inside the common field domain where those local equations hold; if the boundary splits into inlet and outlet with the stated signs, then $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $P'=F_{\mathrm{ext}}+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$.

[L2] Elementary calculus and algebra ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[def-cm01-units]]): $\frac{\mathrm d}{\mathrm dt}e^{-3\alpha t}=-3\alpha e^{-3\alpha t}$; for the field $u=\alpha x$, $\operatorname{div}u=3\alpha$, $u\cdot\nabla u=\alpha^2x$ and $\nabla\lvert x\rvert^2=2x$; the surface integral of the unit normal over a sphere vanishes, and odd integrands over a centred ball integrate to zero.

## Verification

**Proof technique:** direct.

1.1 Local balances for (i): $\partial_t\rho+\operatorname{div}(\rho u)=-3\alpha\rho+\rho\,\operatorname{div}u=-3\alpha\rho+3\alpha\rho=0$, and $\rho\,D_tu=\rho(0+\alpha^2x)=\rho\alpha^2x$ while $\rho b+\operatorname{div}\sigma=-\nabla p=\rho\alpha^2x$; hence the declared fields satisfy the adopted balances (K) and (KM) of [[pthm-cm15-control-volume-balance]], the fixed and material balls stay in the stipulated neighbourhoods of their closed sweeps, so the control-volume theorem applies to them. For (ii), the fixed elbow control region stays in its declared common field domain and the local mass and momentum equations there are adopted in the Example; thus it also meets the domain and local-equation assumptions of [L1]. [given, A1, L1, L2, algebra]

1.2 Inlet/outlet data for (ii): mass conservation of the declared steady fields gives $\dot m=\rho A_{\mathrm{in}}v_{\mathrm{in}}=1000\cdot10^{-4}\cdot4=\frac{2}{5}\ \mathrm{kg\,s^{-1}}=\rho A_{\mathrm{out}}v_{\mathrm{out}}$, so $v_{\mathrm{out}}=\frac{2}{5}/(1000\cdot5\times10^{-5})=8\ \mathrm{m\,s^{-1}}$; thus $r_{\mathrm{in}}=r_{\mathrm{out}}=\frac{2}{5}\ \mathrm{kg\,s^{-1}}$ and the flux-averaged velocities are $w_{\mathrm{in}}=4\hat x$, $w_{\mathrm{out}}=8\hat y$ in $\mathrm{m\,s^{-1}}$. [given, L1, L2, algebra]

2.1 Fixed-ball check: for $C=B_R$ one has $m_C=\frac{4\pi}{3}\rho(t)R^3$ and hence $m_C'=\frac{4\pi}{3}(-3\alpha\rho)R^3=-4\pi\alpha\rho R^3$; on the other hand $(u-0)\cdot\nu=\alpha R$ on $\partial B_R$, so $-\int_{\partial C}\rho(u-0)\cdot\nu\,\mathrm dS=-\rho\alpha R\cdot4\pi R^2=-4\pi\alpha\rho R^3$, which is (CV1). For (CV2): $P_C=\int_{B_R}\rho\alpha x\,\mathrm dx=0$ (odd integrand) and $\int_{\partial C}\rho u(u\cdot\nu)\mathrm dS=\rho\alpha^2R\int_{\partial C}x\,\mathrm dS=0$ and $\int_{\partial C}\sigma\nu\,\mathrm dS=-p(R)\int_{\partial C}\nu\,\mathrm dS=0$, with $\int_{B_R}\rho b=0$; both sides of (CV2) vanish. At $\rho_0=1000\ \mathrm{kg\,m^{-3}}$, $R=\frac{1}{10}\ \mathrm m$, $\alpha=\frac{1}{10}\ \mathrm{s^{-1}}$, $t=0$: $m_C=\frac{4\pi}{3}\ \mathrm{kg}$ and $m_C'=-\frac{2\pi}{5}\ \mathrm{kg\,s^{-1}}$, agreeing with the flux value. [step 1.1, L1, L2, algebra]

2.2 Net external resultant on the fluid: for steady fields on a fixed control region with zero body force, clause 3 of [[pthm-cm15-control-volume-balance]] gives $0=F_{\mathrm{ext}}+\dot m\,w_{\mathrm{in}}-\dot m\,w_{\mathrm{out}}$. Hence the net external resultant required by the adopted balance is $F_{\mathrm{ext}}=\dot m(w_{\mathrm{out}}-w_{\mathrm{in}})=\frac{2}{5}(8\hat y-4\hat x)\ \mathrm N=\bigl(-\frac{8}{5}\hat x+\frac{16}{5}\hat y\bigr)\ \mathrm N$, with magnitude $\frac{8\sqrt5}{5}\ \mathrm N\approx3.578\ \mathrm N$. This is the resultant of all external tractions on the fluid under the stated model equations; no pressure or wall-traction decomposition, and no device-force value, is determined by the supplied data. [step 1.2, L1, L2, algebra]

3.1 Material-ball check: use the material control motion $\psi_{\mathrm{mat}}(t,X)=e^{\alpha t}X$ on $B_{R_0}$, so $C_t=B_{R(t)}$ with $R(t)=R_0e^{\alpha t}$. For $x=\psi_{\mathrm{mat}}(t,X)$ on the boundary, $w=\partial_t\psi_{\mathrm{mat}}(t,X)=\alpha x=u(t,x)$, so $(u-w)\cdot\nu=0$; then (CV1) gives $m_C'=0$, and indeed $m_C=\frac{4\pi}{3}\rho(t)R(t)^3=\frac{4\pi}{3}\rho_0R_0^3$ is constant. In (CV2), $P_C'=\int_{C_t}\rho b+\int_{\partial C_t}\sigma\nu$ with both sides zero as in step 2.1 (now at the moving radius), consistent with $P_C=0$. This is the material special case of [[pthm-cm15-control-volume-balance]] clause 2. [step 1.1, L1, L2, algebra]

4.1 Reading: the uniform-expansion fields are an exact solution of the adopted balances, so steps 2.1 and 3.1 check the control-volume identities for the explicitly specified fixed and material control motions. In the elbow calculation, the vector and its magnitude are the conditional net external resultant required by the steady momentum balance; the example supplies no boundary stresses with which to decompose that resultant into pressure and wall contributions. It is not a solution of the full boundary-value problem. All data are model data; no measurement, apparatus or uncertainty is involved. [given, L1, L2] ∎

## Remarks

- **What the exact solution does and does not solve.** The uniform expansion satisfies the local balances and therefore the control-volume identities; it does not satisfy any particular boundary condition on a wall, because the velocity field is defined on all of space. The material ball is a material region of the declared motion, consistent with [[def-cm-continuum-motion]].

- **Boundary forces in the elbow.** The number $3.578\ \mathrm N$ is the magnitude of the net external resultant on the fluid required by the adopted steady balance. Equal inlet and outlet pressures and inviscid-wall language would not by themselves determine the wall pressure traction; no pressure-free flux force or device force is isolated here. The example illustrates the inlet/outlet decomposition and is not a design formula.
