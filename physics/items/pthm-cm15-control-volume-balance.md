---
id: pthm-cm15-control-volume-balance
kind: physics-theorem
title: "The finite-regularity open-flow model: moving-control-region mass and momentum balances, their material and fixed special cases, and the inlet/outlet decomposition reproducing the open-body and rocket laws"
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
       thm-cm-transport-theorem,
       def-cm-traction-and-stress,
       def-bounded-c-one-domain-boundary-charts-and-outward-normal,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       thm-divergence-theorem-for-bounded-c-one-euclidean-domains,
       def-countable-choice,
       def-cm03-centre-of-mass-and-momenta,
       post-cm01-worldlines,
       post-cm01-frames,
       def-cm-material-region-and-density,
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
  thm-cm-transport-theorem: mathematical-premise
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm-material-region-and-density: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The moving-control-region bookkeeping of the adopted finite-regularity open-flow model in one fixed inertial chart: the scalar mass density $\\rho$ has units kg m$^{-3}$, the spatial velocity $u$ and control velocity $w$ have units m s$^{-1}$, the Cauchy stress matrix $\\sigma$ has units Pa, and the specific body-force vector $b$ (force per unit mass) has units N kg$^{-1}$; $D_tu=\\partial_tu+(D_xu)u$ is the material acceleration, distinct from $b$. Under the adopted material mass and momentum balances for every material subregion, a non-material control region has the stated mass and momentum rates, and under an inlet/outlet split the fluxes give the mass rates and flux-averaged inertial velocities in the lumped open-body law. The balances are adopted hypotheses, not derivations from particle mechanics; no constitutive law, boundary condition, measured value or observation is asserted."
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
**Adopt the finite-regularity open-flow model** with the following model data in one
fixed inertial frame (the adapted affine chart of [[post-cm01-frames]]) and
with SI conventions ([[def-cm01-units]]): a nonempty open interval $I$; a
material region $B\subseteq\mathbb R^3$ (bounded open with $C^1$ boundary);
a motion $\chi$ of $B$ on $I$ of class $C^2$ whose time slices are
diffeomorphisms with positive Jacobian onto their images. Let $U\subseteq
\mathbb R\times\mathbb R^3$ be an open common field domain containing the
swept region over a compact subinterval $J_0$ with
$\overline{J_0}\subseteq I$. On $U$ take a scalar mass-density field
$\rho:U\to(0,\infty)$ of class $C^1$ with
$[\rho]=\mu\ell^{-3}$ ([[def-cm-material-region-and-density]], where
mass on a spatial region $C$ is $\int_C\rho\,dx$); its spatial velocity
field $u:U\to\mathbb R^3$ of class $C^1$ with $[u]=\ell\tau^{-1}$ and
$u(t,\chi(t,X))=\partial_t\chi(t,X)$
([[def-cm-continuum-motion]]); a Cauchy stress matrix field
$\sigma:U\to M_3(\mathbb R)$ of class $C^1$ with
$[\sigma]=\mu\ell^{-1}\tau^{-2}$, representing the traction by
$\mathbf t(\nu)=\sigma\nu$ on a surface with unit normal $\nu$
([[def-cm-traction-and-stress]]); and a continuous specific body-force vector
$b:U\to\mathbb R^3$, meaning force per unit mass and distinct from the
material acceleration, with $[b]=\ell\tau^{-2}$.
For the material derivative used below, make the time-dependent convention
explicit:
$$D_tu(t,x):=\partial_tu(t,x)+(D_xu(t,x))u(t,x),\qquad (D_tu)_i=\partial_tu_i+\sum_{j=1}^3u_j\,\partial_{x_j}u_i,$$
where $\partial_t$ differentiates at fixed $x$ and $D_xu$ is the spatial
Jacobian at fixed $t$ ([[def-cm-euclidean-spatial-calculus]],
[[def-cm-continuum-motion]]). Define the row divergence by
$g_i:=\sum_{j=1}^3\partial_{x_j}\sigma_{ij}$, so $g$ is a vector force
density with units $\mu\ell^{-2}\tau^{-2}$. Adopt as the model's
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
   $t\in J_0$, spatial velocity $w$ with $[w]=\ell\tau^{-1}$, and outward
   unit normal $\nu$.
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
   positive; define $r_{\mathrm{in}}w_{\mathrm{in}}=0$ when
   $r_{\mathrm{in}}=0$, and likewise for the outlet term), and write
   $$m:=\int_{C_t}\rho\,\mathrm dx>0,\qquad P:=\int_{C_t}\rho u\,\mathrm dx,\qquad F_{\mathrm{ext}}:=\int_{C_t}\rho b\,\mathrm dx+\int_{\partial C_t}\sigma\nu\,\mathrm dS .$$
   The units are $[m]=\mu$, $[P]=\mu\ell\tau^{-1}$,
   $[F_{\mathrm{ext}}]=\mu\ell\tau^{-2}$,
   $[r_{\mathrm{in}}]=[r_{\mathrm{out}}]=\mu\tau^{-1}$ and
   $[w_{\mathrm{in}}]=[w_{\mathrm{out}}]=\ell\tau^{-1}$. The control-volume
   theorem supplies the derivatives of $m$ and $P$; since $\rho>0$ and each
   $C_t$ is a nonempty open region, $m>0$, so $v:=P/m$ is differentiable on
   $J_0$. This verifies the differentiability hypotheses of
   [[thm-cm-variable-mass-momentum-balance]].
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
   regularity beyond that stated, and no empirical claim; the fields,
   the control motion and the region are model data.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the finite-regularity open-flow model data $\chi,\rho,u,\sigma,b$ with the adopted material balances on $J_0$; the control motion $\psi$ with its regions $C_t$; for clause 3 the boundary decomposition and the flux-averaged velocities.

[L1] Localization of the material balances ([[thm-cm-local-mass-balance]] clause (i), [[thm-cm-local-momentum-balance]], [[def-cm-euclidean-spatial-calculus]], [[def-cm-traction-and-stress]]): if the material mass balance holds for the inverse images of all sufficiently small current balls at each $t\in J_0$, as included in the adopted stated admissible subregion class, then $\partial_t\rho+\operatorname{div}(\rho u)=0$ on $J_0\times\chi_t(B)$; and if moreover the material momentum balance holds for each admissible pair of a time and a material subregion whose current image is a bounded $C^1$ domain, then $\rho D_tu=\rho b+g$ there, where $g$ is the row divergence of $\sigma$. Both require the stated regularity and the countable-choice assumption.

[L2] Transport and control-volume identities ([[thm-cm-transport-theorem]], [[thm-cm-control-volume-balance]], [[def-cm-continuum-motion]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]): transport gives $\frac{d}{dt}\int_{C_t}f=\int_{C_t}(\partial_tf+\operatorname{div}(fw))$ for $C^1$ fields near a closed control sweep. Combining this with the local mass and momentum equations and row-wise divergence gives (CV1), (CV2); the calculation at a fixed time uses the local equations only on that current region.

[L3] Lumped open-body algebra and regularity ([[thm-cm-control-volume-balance]], [[thm-cm-variable-mass-momentum-balance]], [[def-cm03-centre-of-mass-and-momenta]], [[def-euclidean-inner-product]], [[def-integral-over-a-measurable-set]]): the control-volume rate identities make $m$ and $P$ differentiable; since the density is positive on the nonempty control region, $m>0$ and $v=P/m$ is differentiable. From $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $P'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$, the variable-mass product rule then gives $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$.

[L4] Intervals, field types and units ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[post-cm01-worldlines]], [[def-cm01-units]], [[def-cm-material-region-and-density]], [[def-cm-traction-and-stress]]): $J_0$ is a compact subinterval of $I$ with nonempty interior; $\rho$ is scalar mass density, $u,w$ are spatial velocity vectors, $\sigma$ is the stress matrix, and $b$ is force per unit mass, with SI dimensions $[\rho]=\mu\ell^{-3}$, $[u]=[w]=\ell\tau^{-1}$, $[\sigma]=\mu\ell^{-1}\tau^{-2}$ and $[b]=\ell\tau^{-2}$. Consequently the row divergence $g$ has dimension $\mu\ell^{-2}\tau^{-2}$; $m,P,F_{\mathrm{ext}},r_{\mathrm{in/out}},w_{\mathrm{in/out}}$ carry the units listed in clause 3.

## Proof

**Proof technique:** direct.

1.1 Fix $t\in J_0$, which is interior to $I$ even if it is an endpoint of $J_0$. Each sufficiently small current ball $A$ with closure in $\chi_t(B)$ has an admissible inverse-image material subregion under the $C^2$ diffeomorphism $\chi_t$. Transport [L2] applies on a small open time neighbourhood of $t$. The adopted mass balance at $t$ gives $\int_A(\partial_t\rho+\operatorname{div}(\rho u))=0$. A continuous integrand with zero integral on all such balls vanishes pointwise: a nonzero value would retain its strict sign on a sufficiently small ball, contradicting the zero integral. Thus the local mass equation holds. Componentwise transport and row-wise divergence applied to the momentum balance give $\int_A(\rho D_tu-\rho b-g)_i=0$, since the mass-equation terms cancel by the product rule. The same sign argument proves the local momentum equation. This is the instantaneous localization argument of [L1], including the compact $J_0$'s endpoints. [given, L1, L2, L4, algebra]

2.1 Fix $t\in J_0$. The control-sweep hypothesis and continuity of the control motion put its closed regions in the field domain on a small open time neighbourhood of $t$. The local equations on $C_t$ follow from step 1.1 in the material-interior case, and are adopted in the alternative case. Transport gives $m'=\int_{C_t}(\partial_t\rho+\operatorname{div}(\rho w))=\int_{C_t}\operatorname{div}(\rho(w-u))$; divergence gives (CV1). Componentwise transport, the product rule and the local equations give $P_i'=\int_{C_t}(\rho b_i+g_i+\operatorname{div}(\rho u_i(w-u)))$; divergence of the stress row and of the last vector field gives (CV2). These calculations of [L2] use the local equations only at $t$, and therefore include the endpoints without assuming balances outside $J_0$. [given, step 1.1, L2, algebra]

3.1 Clause 2: if $\psi=\chi$ then $w=u$ on $\partial C_t$, so $(u-w)\cdot\nu=0$ and both flux integrals in (CV1) and (CV2) vanish; the identities become the material balances of the model. If $\psi$ is constant then $w=0$ and $u-w=u$, giving the displayed fixed-region equations with $m_C$, $P_C$; when in addition the fields are steady and $C$ is fixed, the left sides are the rates of the steady-flow treatment and the equations reduce to the balance between the external force and the momentum flux difference. [step 2.1, L2, algebra]

3.2 Clause 3, mass balance: decomposing $\partial C_t$ into the inlet, outlet and zero-flux pieces, the boundary term of (CV1) becomes $-\int_{\partial C_t}\rho(u-w)\cdot\nu =-\int_{\Sigma_{\mathrm{in}}}\rho(u-w)\cdot\nu-\int_{\Sigma_{\mathrm{out}}}\rho(u-w)\cdot\nu =r_{\mathrm{in}}-r_{\mathrm{out}}$ by the definitions, so (CV1) reads $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$; the rates are nonnegative because the integrands are nonnegative on the two pieces. [step 2.1, given, algebra]

3.3 Clause 3, momentum balance: similarly the flux term of (CV2) decomposes as $-\int_{\partial C_t}\rho u_i(u-w)\cdot\nu =r_{\mathrm{in}}(w_{\mathrm{in}})_i-r_{\mathrm{out}}(w_{\mathrm{out}})_i$ by the definitions of the flux averages, and the remaining terms are $F_{\mathrm{ext}}$ componentwise, giving $P'=F_{\mathrm{ext}}+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$. [step 2.1, given, algebra]

4.1 Clause 3, derived law: the two identities of steps 3.2 and 3.3 have exactly the form to which [L3] applies with $F=F_{\mathrm{ext}}$; hence $mv'=F_{\mathrm{ext}}+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$ for the lumped body, and the two special cases are its substitutions ($r_{\mathrm{in}}=0$, $r_{\mathrm{out}}=-m'$ for the thrust form; $w=u$ for the material case). [step 3.2, step 3.3, L3, algebra]

5.1 Clause 4 is the scope: steps 1.1-3.3 use only the adopted balances, the cited mathematical theorems and the stated regularity, and introduce no constitutive relation, boundary condition or measured input. This completes the proof. [given, L1, L2, L3] ∎

## Remarks

- **Inertial conventions.** The velocities $u$, $w$, $w_{\mathrm{in}}$, $w_{\mathrm{out}}$ and the momentum density $\rho u$ are all measured in one inertial frame; the flux uses the *relative* normal velocity $(u-w)\cdot\nu$, and choosing a different auxiliary velocity on the interior of $C_t$ does not change the identities because its contribution is converted to a boundary term by the divergence theorem ([[thm-cm-control-volume-balance]]). The lumped velocity of clause 3 is $v=P/m$, the momentum-weighted mean velocity of the contents, not the velocity of any particular material point.

- **Relation to the lumped postulate.** Clause 3 exhibits the two identities of [[post-cm15-impulse]] clause (iii) as a specialization of the spatial balances, with $r_{\mathrm{in}},r_{\mathrm{out}}$ the mass fluxes through the inlet and outlet and $w_{\mathrm{in}},w_{\mathrm{out}}$ the flux-averaged inertial velocities. Conversely the material accounting of the postulate does not by itself produce the distributed identities (CV1), (CV2), which use the spatial fields.

- **No empirical content.** The finite-regularity open-flow model is a restricted model class; no physical body is asserted to be one, and the balances are adopted assumptions that a comparison with observation would test jointly with the apparatus and constitutive assumptions.
