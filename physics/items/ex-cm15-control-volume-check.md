---
id: ex-cm15-control-volume-check
kind: example
title: "A declared smooth open flow: the uniform scaling $\\rho=\\rho_0e^{-3\\alpha t}$, $u=\\alpha x$ satisfies the control-volume identities on fixed and material regions, and elbow port data illustrate the inlet/outlet decomposition"
status: published
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
physical_scope: "Two declared checks of the finite-regularity open-flow bookkeeping: (i) the exact uniform-scaling model $\\rho(t)=\\rho_0e^{-3\\alpha t}$, $u(t,x)=\\alpha x$, $p=p_0-\\rho\\alpha^2\\lvert x\\rvert^2/2$, with the control maps specified and the units of $\\alpha,\\rho_0,p_0$ declared; (ii) a conditional steady-elbow calculation with declared inlet/outlet data, where the balance gives mass flow $0.4\\,\\mathrm{kg\\,s^{-1}}$ and requires a net external resultant on the fluid of magnitude about $3.578\\,\\mathrm N$. No pressure-free momentum-flux force decomposition is inferred, since no boundary-stress data are given. Both are computations on declared model data; the example reports no measurement and does not solve a boundary-value problem."
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

**(i) Declared uniform scaling.** Fix constants $\rho_0>0$,
$\alpha\ne0$ and $p_0$, with $[\rho_0]=\mu\ell^{-3}$,
$[\alpha]=\tau^{-1}$ and $[p_0]=\mu\ell^{-1}\tau^{-2}$. On an open
interval $I\ni0$ use uniform scaling, meaning expansion for $\alpha>0$
and contraction for $\alpha<0$, and set
$$\rho(t)=\rho_0e^{-3\alpha t},\qquad u(t,x)=\alpha x,\qquad \sigma(t,x)=-p(t,x)\,\mathrm{Id},\qquad p(t,x)=p_0-\frac{\rho(t)\alpha^2}{2}\lvert x\rvert^2,\qquad b\equiv0,$$
and fix radii $R_0>0$ and $R>0$ with units $\ell$. Let the material region
be a ball $B_{R_B}$ with radius $R_B>\max(R,R_0)$.
Define the material motion $\chi(t,X)=e^{\alpha t}X$ on a neighbourhood of
$\overline{B_{R_B}}$. More precisely, choose an open ball $O=B_{R_O}$ with
$R_O>R_B$ and define $\chi:I\times O\to\mathbb R^3$ by this formula.
Its restriction to $B_{R_0}$ has current radius
$R(t)=R_0e^{\alpha t}$. Define the fixed-ball control motion by
$\psi_R(t,X)=X$ for $X\in O$, with control region $B_R$, and the
material-ball control motion by $\psi_{\mathrm{mat}}(t,X)=e^{\alpha t}X$
for $X\in O$, with control region $B_{R_0}$. Each map is a $C^2$ motion on
the open reference domain $O$ and has positive spatial Jacobian. Take the
fields on a common open neighbourhood of
the closed sweep of $\chi$ and the closed sweeps of these controls. The fields
satisfy the adopted balances of
[[pthm-cm15-control-volume-balance]] (the density is spatially uniform, the
velocity is $\alpha x$, and the pressure is quadratic).

**(ii) Declared elbow control-volume data.** Take a material region $B$ with
motion $\chi$ and associated spatial velocity field $u$ as in
[[def-cm-continuum-motion]], and a material subregion $B'\subseteq B$ with
$C^1$ boundary. On an open reference neighbourhood
$O\supset\overline{B'}$, define the fixed control motion
$\psi:I\times O\to\mathbb R^3$ by $\psi(t,X)=X$; its control region is
$C_t=C:=B'$ and its boundary velocity is $w=0$. Adopt the material balances
of [[pthm-cm15-control-volume-balance]] for this model and the local mass and
momentum equations on an open field neighbourhood of the closed control
region, as allowed by that theorem's local-equation alternative.

Assume $\rho=1000\ \mathrm{kg\,m^{-3}}$ is constant and the fields are
time-independent on that neighbourhood. The bounded $C^1$ boundary of $C$
is partitioned into finitely many $C^1$ boundary pieces, up to
surface-measure-zero edges; designate an inlet patch $\Sigma_{\mathrm{in}}$,
an outlet patch $\Sigma_{\mathrm{out}}$, and let the remaining pieces form
an impermeable remainder $\Sigma_0$. The outward unit normals on the ports are $-\hat x$ and $+\hat y$.
On the ports take $u=q_{\mathrm{in}}\hat x$ and
$u=q_{\mathrm{out}}\hat y$, respectively, where each $q$ is a
nonnegative, nonzero $C^1$ profile supported compactly inside its port,
with units $\ell\tau^{-1}$; take $u\cdot\nu=0$ on the remainder.
These traces vanish near the port edges and are compatible with a
$C^1$ field and continuous boundary normal. For either port define
$$Q:=\int_{\Sigma}q\,\mathrm dS>0,\qquad v_{\mathrm{eff}}:=\frac{\int_{\Sigma}q^2\,\mathrm dS}{Q},\qquad A_{\mathrm{eff}}:=\frac{Q^2}{\int_{\Sigma}q^2\,\mathrm dS},$$
so $Q=A_{\mathrm{eff}}v_{\mathrm{eff}}$, the mass rate is $\rho Q$,
and the flux-averaged velocity is $v_{\mathrm{eff}}$ in the port direction.
Declare $A_{\mathrm{eff,in}}=10^{-4}\ \mathrm{m^2}$,
$A_{\mathrm{eff,out}}=5\times10^{-5}\ \mathrm{m^2}$ and
$v_{\mathrm{eff,in}}=4\ \mathrm{m\,s^{-1}}$; the outlet effective
speed is unknown. The effective areas are defined by these integrals,
not the geometric patch areas. Assume the time-independent velocity
field is $C^1$ on the common neighbourhood. Set the body-force field to $b=0$ and assume
the stress field is $C^1$ on the same neighbourhood. These are conditional
model premises for a balance calculation; no existence claim for a
boundary-value solution or decomposition of the boundary stress is made.
The calculation determines only the net external resultant required by the
steady balance.

## Facts & Assumptions

**Given:** The declared fields and control motions of the Example, the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), assumed as in the statements of [[pthm-cm15-control-volume-balance]] and [[thm-cm-control-volume-balance]], whose transport and divergence deductions use it, and the control-volume theorem [[pthm-cm15-control-volume-balance]] with its clauses 1-3.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]), inherited from [[pthm-cm15-control-volume-balance]]; the elementary verifications of steps 1.1-4.1 use no further choice.

[L1] Balance and control-volume identities ([[pthm-cm15-control-volume-balance]] clauses 1-3, [[thm-cm-control-volume-balance]], [[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]], [[thm-cm-variable-mass-momentum-balance]]): for a model satisfying the adopted local mass and momentum balances, (CV1) and (CV2) hold for every control motion with bounded $C^1$ control regions whose closed sweep lies inside the common field domain where those local equations hold; if the boundary splits into inlet and outlet with the stated signs, then $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $P'=F_{\mathrm{ext}}+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$.

[L2] Elementary calculus and algebra ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[def-cm01-units]]): $\frac{\mathrm d}{\mathrm dt}e^{-3\alpha t}=-3\alpha e^{-3\alpha t}$; for the field $u=\alpha x$, $\operatorname{div}u=3\alpha$, $u\cdot\nabla u=\alpha^2x$ and $\nabla\lvert x\rvert^2=2x$; the surface integral of the unit normal over a sphere vanishes, and odd integrands over a centred ball integrate to zero.

## Verification

**Proof technique:** direct.

1.1 Local balances for (i): $\partial_t\rho+\operatorname{div}(\rho u)=-3\alpha\rho+\rho\,\operatorname{div}u=-3\alpha\rho+3\alpha\rho=0$, and $\rho\,D_tu=\rho(0+\alpha^2x)=\rho\alpha^2x$ while $\rho b+\operatorname{div}\sigma=-\nabla p=\rho\alpha^2x$; hence the declared fields satisfy the local balances (K) and (KM) of [[pthm-cm15-control-volume-balance]]. For each admissible material subregion, applying [[thm-cm-control-volume-balance]] with control motion $\psi=\chi$ makes $w=u$ and gives the adopted material balances; thus the premises of [[pthm-cm15-control-volume-balance]] hold. The fixed and material balls stay in the stipulated neighbourhoods of their closed sweeps, so its control-volume identities apply to them. For (ii), the fixed elbow control region stays in its declared common field domain, its boundary has nonpositive flux on the inlet patch, nonnegative flux on the outlet patch and zero flux on the remainder. The local equations are adopted there, so (CV1) and (CV2) of [L1] apply. Splitting their integrals over these patches remains valid when a profile vanishes: those subsets contribute zero. [given, A1, L1, L2, algebra]

1.2 Inlet/outlet data for (ii): the fixed-region mass identity (CV1), steady density and velocity, and $u\cdot\nu=0$ on $\Sigma_0$ give equal inlet and outlet rates, $\rho A_{\mathrm{eff,in}}v_{\mathrm{eff,in}}=\rho A_{\mathrm{eff,out}}v_{\mathrm{eff,out}}$. Hence $\dot m=1000\cdot10^{-4}\cdot4=\frac{2}{5}\ \mathrm{kg\,s^{-1}}=\rho A_{\mathrm{eff,out}}v_{\mathrm{eff,out}}$, so $v_{\mathrm{eff,out}}=\frac{2}{5}/(1000\cdot5\times10^{-5})=8\ \mathrm{m\,s^{-1}}$; thus $r_{\mathrm{in}}=r_{\mathrm{out}}=\frac{2}{5}\ \mathrm{kg\,s^{-1}}$ and the flux-averaged velocities are $w_{\mathrm{in}}=4\hat x$, $w_{\mathrm{out}}=8\hat y$ in $\mathrm{m\,s^{-1}}$. [given, L1, L2, algebra]

2.1 Fixed-ball check: for $C=B_R$ one has $m_C=\frac{4\pi}{3}\rho(t)R^3$ and hence $m_C'=\frac{4\pi}{3}(-3\alpha\rho)R^3=-4\pi\alpha\rho R^3$; on the other hand $(u-0)\cdot\nu=\alpha R$ on $\partial B_R$, so $-\int_{\partial C}\rho(u-0)\cdot\nu\,\mathrm dS=-\rho\alpha R\cdot4\pi R^2=-4\pi\alpha\rho R^3$, which is (CV1). For (CV2): $P_C=\int_{B_R}\rho\alpha x\,\mathrm dx=0$ (odd integrand) and $\int_{\partial C}\rho u(u\cdot\nu)\mathrm dS=\rho\alpha^2R\int_{\partial C}x\,\mathrm dS=0$ and $\int_{\partial C}\sigma\nu\,\mathrm dS=-p(R)\int_{\partial C}\nu\,\mathrm dS=0$, with $\int_{B_R}\rho b=0$; both sides of (CV2) vanish. At $\rho_0=1000\ \mathrm{kg\,m^{-3}}$, $R=\frac{1}{10}\ \mathrm m$, $\alpha=\frac{1}{10}\ \mathrm{s^{-1}}$, $t=0$: $m_C=\frac{4\pi}{3}\ \mathrm{kg}$ and $m_C'=-\frac{2\pi}{5}\ \mathrm{kg\,s^{-1}}$, agreeing with the flux value. [step 1.1, L1, L2, algebra]

2.2 Net external resultant on the fluid: for steady fields on a fixed control region with zero body force, the fixed-control momentum identity (CV2) of [[pthm-cm15-control-volume-balance]], split over the three patches, gives $0=F_{\mathrm{ext}}+\dot m\,w_{\mathrm{in}}-\dot m\,w_{\mathrm{out}}$. Hence the net external resultant required by the adopted balance is $F_{\mathrm{ext}}=\dot m(w_{\mathrm{out}}-w_{\mathrm{in}})=\frac{2}{5}(8\hat y-4\hat x)\ \mathrm N=\bigl(-\frac{8}{5}\hat x+\frac{16}{5}\hat y\bigr)\ \mathrm N$, with magnitude $\frac{8\sqrt5}{5}\ \mathrm N\approx3.578\ \mathrm N$. This is the resultant of all external tractions on the fluid under the stated model equations; no pressure or wall-traction decomposition, and no device-force value, is determined by the supplied data. [step 1.2, L1, L2, algebra]

3.1 Material-ball check: use the material control motion $\psi_{\mathrm{mat}}(t,X)=e^{\alpha t}X$ on $B_{R_0}$, so $C_t=B_{R(t)}$ with $R(t)=R_0e^{\alpha t}$. For $x=\psi_{\mathrm{mat}}(t,X)$ on the boundary, $w=\partial_t\psi_{\mathrm{mat}}(t,X)=\alpha x=u(t,x)$, so $(u-w)\cdot\nu=0$; then (CV1) gives $m_C'=0$, and indeed $m_C=\frac{4\pi}{3}\rho(t)R(t)^3=\frac{4\pi}{3}\rho_0R_0^3$ is constant. In (CV2), $P_C'=\int_{C_t}\rho b+\int_{\partial C_t}\sigma\nu$ with both sides zero as in step 2.1 (now at the moving radius), consistent with $P_C=0$. This is the material special case of [[pthm-cm15-control-volume-balance]] clause 2. [step 1.1, L1, L2, algebra]

4.1 Reading: the uniform-scaling fields are an exact solution of the adopted balances, so steps 2.1 and 3.1 check the control-volume identities for the explicitly specified fixed and material control motions. In the elbow calculation, the vector and its magnitude are the conditional net external resultant required by the steady momentum balance; the example supplies no boundary stresses with which to decompose that resultant into pressure and wall contributions. It is not a solution of the full boundary-value problem. All data are model data; no measurement, apparatus or uncertainty is involved. [given, L1, L2] ∎

## Remarks

- **What the exact solution does and does not solve.** The uniform scaling satisfies the local balances and therefore the control-volume identities; it does not satisfy any particular boundary condition on a wall, because the velocity field is defined on all of space. The material ball is a material region of the declared motion, consistent with [[def-cm-continuum-motion]].

- **Boundary forces in the elbow.** The number $3.578\ \mathrm N$ is the magnitude of the net external resultant on the fluid required by the adopted steady balance. Equal inlet and outlet pressures and inviscid-wall language would not by themselves determine the wall pressure traction; no pressure-free flux force or device force is isolated here. The example illustrates the inlet/outlet decomposition and is not a design formula.
