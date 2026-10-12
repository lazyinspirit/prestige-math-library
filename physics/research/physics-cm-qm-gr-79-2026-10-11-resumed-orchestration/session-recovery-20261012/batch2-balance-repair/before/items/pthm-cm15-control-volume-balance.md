---
id: pthm-cm15-control-volume-balance
kind: physics-theorem
title: "The smooth open-flow model: moving-control-region mass and momentum balances, their material and fixed special cases, and the inlet/outlet decomposition reproducing the open-body and rocket laws"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [post-cm15-impulse,
       thm-cm-variable-mass-momentum-balance,
       def-cm-continuum-motion,
       def-cm-euclidean-spatial-calculus,
       thm-cm-local-mass-balance,
       thm-cm-local-momentum-balance,
       thm-cm-control-volume-balance,
       def-cm-traction-and-stress,
       def-bounded-c-one-domain-boundary-charts-and-outward-normal,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       thm-divergence-theorem-for-bounded-c-one-euclidean-domains,
       def-countable-choice,
       def-cm03-centre-of-mass-and-momenta,
       post-cm01-worldlines,
       def-cm01-units,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-euclidean-inner-product,
       def-integral-over-a-measurable-set]
dependency_roles:
  post-cm15-impulse: physical-assumption
  thm-cm-variable-mass-momentum-balance: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-local-mass-balance: mathematical-premise
  thm-cm-local-momentum-balance: mathematical-premise
  thm-cm-control-volume-balance: mathematical-premise
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The moving-control-region bookkeeping of the adopted smooth open-flow model: under the adopted material mass and momentum balances for every material subregion, a non-material control region has the stated mass and momentum rates with boundary speed $w$, the material and fixed special cases follow, and under an inlet/outlet split of the boundary the flux terms become the entering and leaving mass rates with flux-averaged inertial velocities, so that the lumped open body obeys the material accounting and rocket law adopted in the impulse postulate. The balances are adopted hypotheses of this item, not derivations from particle mechanics; the result asserts no constitutive law, no boundary condition, no measured value and no observational claim."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), §3.7 'Transport Equations' Eqs. (3.84)-(3.89) and §4.4 'The Balance of Momentum Principles' Eqs. (4.18)-(4.21): the material transport formulae, the flux form of the transport identity and the material momentum balance"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), §§1.1-1.3: the fixed-volume integral balance, the advective derivative and the Lagrangian/Eulerian description of the same balance"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.7 'Steady-Flow Devices': the steady-flow momentum relation $\\mathbf F=\\dot m_{\\mathrm{out}}\\mathbf v_{\\mathrm{out}}-\\dot m_{\\mathrm{in}}\\mathbf v_{\\mathrm{in}}$ for a fixed device, the fixed-region special case used here"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.07%3A_Steady-Flow_Devices"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), 'Non-Isolated Systems', Eqs. (38)-(44): the fixed-particle external-force and torque accounting that motivates, but does not supply, the open-mass flux bookkeeping"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), as used by the transport and divergence theorems.
**Adopt the smooth open-flow model** with the following model data
([[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]],
[[post-cm01-worldlines]], [[def-cm01-units]]): a nonempty open interval $I$;
a material region $B\subseteq\mathbb R^3$ (bounded open with $C^1$ boundary);
a motion $\chi$ of $B$ on $I$ of class $C^2$ whose time slices are
diffeomorphisms with positive Jacobian onto their images; a density field
$\rho>0$ of class $C^1$ and a spatial velocity field $u$ (the velocity of
$\chi$); a stress field $\sigma$ of class $C^1$
([[def-cm-traction-and-stress]]); and a continuous body-force density $b$;
all fields defined on a neighbourhood of the swept region over a compact
subinterval $J_0$ with $\overline{J_0}\subseteq I$. Adopt as the model's
**material balances**: for every material subregion $B'\subseteq B$ (a
nonempty bounded open subset with $\overline{B'}\subseteq B$ whose images
$\chi_t(B')$ are bounded $C^1$ domains,
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]) and every
$t\in J_0$,

$$\frac{\mathrm d}{\mathrm dt}\int_{\chi_t(B')}\rho\,\mathrm dx=0,\qquad \frac{\mathrm d}{\mathrm dt}\int_{\chi_t(B')}\rho u\,\mathrm dx=\int_{\chi_t(B')}\rho b\,\mathrm dx+\int_{\partial\chi_t(B')}\sigma\nu\,\mathrm dS,$$

with $\nu$ the outward unit normal and the surface integral that of
[[def-surface-integral-on-a-compact-c-one-hypersurface]]. These two balance
laws are **adopted model assumptions** of this item, in the sense of the
open-body accounting of [[post-cm15-impulse]] clause (iii); they are not
derived from the particle postulates. Then, for every second motion $\psi$ of
a material region $B'\subseteq B$ on $I$ (the **control motion**) with
control regions $C_t:=\psi_t(B')$ that are bounded $C^1$ domains for
$t\in J_0$, spatial velocity $w$, and outward unit normal $\nu$.
Require its closed sweep $\Sigma_C:=\{(t,x):t\in\overline{J_0},\ x\in\psi_t(\overline{B'})\}$ to lie in the common open field domain. Require also either that this sweep lie locally inside the current material region $\chi_t(B)$, where localization supplies the local mass and momentum equations, or that those same local equations $\partial_t\rho+\operatorname{div}(\rho u)=0$ and $\rho D_tu=\rho b+g$ be explicitly adopted on a neighbourhood of the control sweep. The control motion need not coincide with $\chi$. Then:

1. **(Control-volume identities.)** For every $t\in J_0$,
   $$\frac{\mathrm d}{\mathrm dt}\int_{C_t}\rho\,\mathrm dx =-\int_{\partial C_t}\rho\,(u-w)\cdot\nu\,\mathrm dS, \tag{CV1}$$
   and componentwise
   $$\frac{\mathrm d}{\mathrm dt}\int_{C_t}\rho u_i\,\mathrm dx =\int_{C_t}\rho b_i\,\mathrm dx+\Bigl(\int_{\partial C_t}\sigma\nu\,\mathrm dS\Bigr)_i -\int_{\partial C_t}\rho u_i\,(u-w)\cdot\nu\,\mathrm dS\qquad(i=1,2,3). \tag{CV2}$$
2. **(Material and fixed special cases.)** If $\psi=\chi$ (the control region
   is material, $w=u$ on the boundary), the flux terms vanish and (CV1),
   (CV2) reduce to the adopted material balances; if $\psi$ is the constant
   motion ($w=0$, $C_t=C$ fixed), then
   $$m_C'=-\int_{\partial C}\rho\,u\cdot\nu\,\mathrm dS,\qquad P_C'=\int_C\rho b\,\mathrm dx+\int_{\partial C}\sigma\nu\,\mathrm dS-\int_{\partial C}\rho u\,(u\cdot\nu)\,\mathrm dS$$
   with $m_C:=\int_C\rho$, $P_C:=\int_C\rho u$; the last term is the momentum
   flux through the fixed boundary, and the relation is the fixed-region
   steady-flow balance of the engineering treatment when the fields are
   steady and the region fixed.
3. **(Inlet/outlet decomposition and the open-body law.)** Suppose that for
   every $t\in J_0$ the boundary decomposes into finitely many $C^1$ pieces,
   among which $\Sigma_{\mathrm{in},t}$ (where $(u-w)\cdot\nu<0$),
   $\Sigma_{\mathrm{out},t}$ (where $(u-w)\cdot\nu>0$) and the zero-flux rest,
   and put
   $$r_{\mathrm{in}}:=-\int_{\Sigma_{\mathrm{in},t}}\rho\,(u-w)\cdot\nu\,\mathrm dS\ge0,\qquad r_{\mathrm{out}}:=\int_{\Sigma_{\mathrm{out},t}}\rho\,(u-w)\cdot\nu\,\mathrm dS\ge0,$$
   $$w_{\mathrm{in}}:=\frac{1}{r_{\mathrm{in}}}\int_{\Sigma_{\mathrm{in},t}}\rho u\,\bigl(-(u-w)\cdot\nu\bigr)\mathrm dS,\qquad w_{\mathrm{out}}:=\frac{1}{r_{\mathrm{out}}}\int_{\Sigma_{\mathrm{out},t}}\rho u\,\bigl((u-w)\cdot\nu\bigr)\mathrm dS$$
   (the flux averages are used only where the corresponding rate is
   positive), and write
   $$m:=\int_{C_t}\rho\,\mathrm dx>0,\qquad P:=\int_{C_t}\rho u\,\mathrm dx,\qquad F_{\mathrm{ext}}:=\int_{C_t}\rho b\,\mathrm dx+\int_{\partial C_t}\sigma\nu\,\mathrm dS .$$
   Then the control-volume identities read
   $$m'=r_{\mathrm{in}}-r_{\mathrm{out}},\qquad P'=F_{\mathrm{ext}}+r_{\mathrm{in}}\,w_{\mathrm{in}}-r_{\mathrm{out}}\,w_{\mathrm{out}},$$
   and the lumped body with mass $m$ and velocity $v:=P/m$ satisfies
   $$m\,v'=F_{\mathrm{ext}}+r_{\mathrm{in}}\bigl(w_{\mathrm{in}}-v\bigr)-r_{\mathrm{out}}\bigl(w_{\mathrm{out}}-v\bigr),$$
   the derived law of [[thm-cm-variable-mass-momentum-balance]]. In
   particular, a body that only loses mass ($r_{\mathrm{in}}=0$,
   $r_{\mathrm{out}}=-m'$) has thrust
   $r_{\mathrm{out}}(v-w_{\mathrm{out}})=-m'(v-w_{\mathrm{out}})$, and a body
   whose boundary moves with the material ($w=u$; no flux) has
   $m'=0$ and $P'=F_{\mathrm{ext}}$.
4. **(Status.)** The balances displayed before clause 1 are adopted component
   models of the open flow, exactly as clause (iii) of
   [[post-cm15-impulse]] adopts the lumped accounting; this item proves only
   the two stated deductions (localization followed by the control-volume
   identities, and the inlet/outlet reading). It asserts no constitutive law
   for $\rho$ or $\sigma$, no boundary condition, no incompressibility, no
   smoothness beyond the stated one, and no empirical claim; the fields,
   the control motion and the region are model data.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the smooth open-flow model data $\chi,\rho,u,\sigma,b$ with the adopted material balances on $J_0$; the control motion $\psi$ with its regions $C_t$; for clause 3 the boundary decomposition and the flux-averaged velocities.

[L1] Localization of the material balances ([[thm-cm-local-mass-balance]] clause (i), [[thm-cm-local-momentum-balance]], [[def-cm-euclidean-spatial-calculus]], [[def-cm-traction-and-stress]]): if the material mass balance holds for the inverse images of all sufficiently small current balls at each $t\in J_0$, as included in the adopted smooth admissible subregion class, then $\partial_t\rho+\operatorname{div}(\rho u)=0$ on $J_0\times\chi_t(B)$; and if moreover the material momentum balance holds for each admissible pair of a time and a material subregion whose current image is a bounded $C^1$ domain, then $\rho D_tu=\rho b+g$ there, where $g$ is the row divergence of $\sigma$. Both require the stated regularity and the countable-choice assumption.

[L2] Control-volume theorem ([[thm-cm-control-volume-balance]], [[def-cm-continuum-motion]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]): if $\rho$ and $\sigma$ are $C^1$, $b$ continuous and the local balances (K), (KM) hold on an open field domain containing the closed control sweep, then for every control motion with bounded $C^1$ control regions the identities (CV1), (CV2) of clause 1 hold.

[L3] Lumped open-body algebra ([[thm-cm-variable-mass-momentum-balance]], [[def-cm03-centre-of-mass-and-momenta]], [[def-euclidean-inner-product]], [[def-integral-over-a-measurable-set]]): from the two balance identities $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $P'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$ for differentiable $m>0$ and $v=P/m$, the product rule gives $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$.

[L4] Intervals and differentiability ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[post-cm01-worldlines]], [[def-cm01-units]]): $J_0$ is a compact subinterval of $I$ with nonempty interior, the fields are as regular as stated, and masses and momenta carry the dimensions of [[def-cm01-units]] ($[m]=\mathsf M$, $[P]=\mathsf M\ell\tau^{-1}$, $[r_{\mathrm{in}}]=\mathsf M\tau^{-1}$).

## Proof

**Proof technique:** direct.

1.1 Local forms: the adopted smooth admissible subregions include the inverse images under $\chi_t$ of all sufficiently small current balls with closure in the field domain. Thus the current-ball localization variant of [L1] applies to the adopted material mass balance and gives $\partial_t\rho+\operatorname{div}(\rho u)=0$ on the swept region over $J_0$, and with the adopted momentum balance on these smooth admissible test regions, the local momentum theorem of [L1] gives $\rho D_tu=\rho b+g$ there, with $g$ the row divergence of the $C^1$ field $\sigma$. [given, L1, L4]

2.1 Clause 1: by the control-sweep hypothesis, the fields are defined on an open neighbourhood of each closed control region. If the sweep lies locally inside the current material region, step 1.1 supplies (K) and (KM) on that neighbourhood; otherwise the same local equations there are explicit adopted hypotheses. Thus in either case all field-domain and local-equation conditions of [L2] hold for the control motion $\psi$, and [L2] gives (CV1) and (CV2) for every $t\in J_0$. [given, step 1.1, L2]

3.1 Clause 2: if $\psi=\chi$ then $w=u$ on $\partial C_t$, so $(u-w)\cdot\nu=0$ and both flux integrals in (CV1) and (CV2) vanish; the identities become the material balances of the model. If $\psi$ is constant then $w=0$ and $u-w=u$, giving the displayed fixed-region equations with $m_C$, $P_C$; when in addition the fields are steady and $C$ is fixed, the left sides are the rates of the steady-flow treatment and the equations reduce to the balance between the external force and the momentum flux difference. [step 2.1, L2, algebra]

3.2 Clause 3, mass balance: decomposing $\partial C_t$ into the inlet, outlet and zero-flux pieces, the boundary term of (CV1) becomes $-\int_{\partial C_t}\rho(u-w)\cdot\nu =-\int_{\Sigma_{\mathrm{in}}}\rho(u-w)\cdot\nu-\int_{\Sigma_{\mathrm{out}}}\rho(u-w)\cdot\nu =r_{\mathrm{in}}-r_{\mathrm{out}}$ by the definitions, so (CV1) reads $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$; the rates are nonnegative because the integrands are nonnegative on the two pieces. [step 2.1, given, algebra]

3.3 Clause 3, momentum balance: similarly the flux term of (CV2) decomposes as $-\int_{\partial C_t}\rho u_i(u-w)\cdot\nu =r_{\mathrm{in}}(w_{\mathrm{in}})_i-r_{\mathrm{out}}(w_{\mathrm{out}})_i$ by the definitions of the flux averages, and the remaining terms are $F_{\mathrm{ext}}$ componentwise, giving $P'=F_{\mathrm{ext}}+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$. [step 2.1, given, algebra]

4.1 Clause 3, derived law: the two identities of steps 3.2 and 3.3 have exactly the form to which [L3] applies with $F=F_{\mathrm{ext}}$; hence $mv'=F_{\mathrm{ext}}+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$ for the lumped body, and the two special cases are its substitutions ($r_{\mathrm{in}}=0$, $r_{\mathrm{out}}=-m'$ for the thrust form; $w=u$ for the material case). [step 3.2, step 3.3, L3, algebra]

5.1 Clause 4 is the scope: steps 1.1-3.3 use only the adopted balances, the cited mathematical theorems and the stated regularity, and introduce no constitutive relation, boundary condition or measured input. This completes the proof. [given, L1, L2, L3] ∎

## Remarks

- **Inertial conventions.** The velocities $u$, $w$, $w_{\mathrm{in}}$, $w_{\mathrm{out}}$ and the momentum density $\rho u$ are all measured in one inertial frame; the flux uses the *relative* normal velocity $(u-w)\cdot\nu$, and choosing a different auxiliary velocity on the interior of $C_t$ does not change the identities because its contribution is converted to a boundary term by the divergence theorem ([[thm-cm-control-volume-balance]]). The lumped velocity of clause 3 is $v=P/m$, the momentum-weighted mean velocity of the contents, not the velocity of any particular material point.

- **Relation to the lumped postulate.** Clause 3 exhibits the two identities of [[post-cm15-impulse]] clause (iii) as a specialization of the spatial balances, with $r_{\mathrm{in}},r_{\mathrm{out}}$ the mass fluxes through the inlet and outlet and $w_{\mathrm{in}},w_{\mathrm{out}}$ the flux-averaged inertial velocities. Conversely the material accounting of the postulate does not by itself produce the distributed identities (CV1), (CV2), which use the spatial fields.

- **No empirical content.** The smooth open-flow model is a restricted model class; no physical body is asserted to be one, and the balances are adopted assumptions that a comparison with observation would test jointly with the apparatus and constitutive assumptions.
