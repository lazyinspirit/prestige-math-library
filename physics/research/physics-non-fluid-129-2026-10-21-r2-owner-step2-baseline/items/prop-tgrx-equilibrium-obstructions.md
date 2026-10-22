---
id: prop-tgrx-equilibrium-obstructions
kind: proposition
title: Rotation and charged equilibrium obstruction
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgrx-thermal-vorticity
  - def-tgrx-period-of-one-form
  - lem-tgrx-exact-one-form-zero-period
  - def-tgr-charged-liouville-data
  - lem-tgrx-compensator-implies-exact
  - lem-tgr-thermal-killing-kinematic-equivalence
  - thm-tgr-electrochemical-stationarity
  - def-closed-and-exact-differential-forms
  - def-countable-choice
dependency_roles:
  def-tgrx-thermal-vorticity: mathematical-premise
  def-tgrx-period-of-one-form: mathematical-premise
  lem-tgrx-exact-one-form-zero-period: mathematical-premise
  def-tgr-charged-liouville-data: mathematical-premise
  lem-tgrx-compensator-implies-exact: mathematical-premise
  lem-tgr-thermal-killing-kinematic-equivalence: mathematical-premise
  thm-tgr-electrochemical-stationarity: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "F. Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §§3–6, eqs. (6), (11)–(16)"
      url: https://arxiv.org/pdf/1606.06605
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.B, eqs. (262)–(268)"
      url: https://arxiv.org/pdf/2106.09235
    - title: "Kai Shi, Yu Tian, Xiaoning Wu, Hongbao Zhang, and Chuanjia Zhu, Thermodynamic equilibrium condition and the first law of thermodynamics for charged perfect fluids in electromagnetic and gravitational fields, §§2–3"
      url: https://arxiv.org/pdf/2108.08729
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–IV and VIII"
      url: https://arxiv.org/pdf/1807.02915
    - title: "David Tong, General Relativity, complete Cambridge Part III lecture notes, §§2.4.3–2.4.5 and §4.3.1"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf
verification:
  precheck: pass
---

## Statement
Let $O$ be a nonempty connected open subset of a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of signature $(-,+,+,+)$, with Levi-Civita connection $\nabla$ and time-orientation field $N$. Let $\beta$ be any smooth vector field on $O$ satisfying $g(\beta,\beta)<0$ and $g(\beta,N)<0$ everywhere; it is not assumed Killing, and Killing means $\mathcal L_\beta g=0$. In length coordinates $x^0=ct$, take $\beta$ to have components in $\mathrm{J}^{-1}$, fix $k_B>0$ in $\mathrm{J\,K}^{-1}$, and let $\mu:O\to\mathbb R$ be smooth in joules. Define
$$T:=\frac{1}{k_B\sqrt{-g(\beta,\beta)}},\qquad u:=k_BT\beta,\qquad \varpi_{ab}:=-\frac12(\nabla_a\beta_b-\nabla_b\beta_a),$$
and
$$h_{ab}:=g_{ab}+u_au_b,\quad D:=u^a\nabla_a,\quad a_b:=u^a\nabla_au_b,\quad \theta:=\nabla_au^a,\quad \sigma_{ab}:=h_a{}^ch_b{}^d\nabla_{(c}u_{d)}-\frac13\theta h_{ab},\quad \alpha:=-\frac{\mu}{k_BT}.$$
Then $\beta$ is Killing if and only if $DT=0$, $\theta=0$, $\sigma_{ab}=0$, and $h_a{}^b\nabla_b\log T=-a_a$.

In the Killing case, let $A$ be a smooth global one-form in the SI convention, set $F:=dA$, and define $\omega:=\iota_\beta F$ by $(\iota_\beta F)_a=\beta^bF_{ba}$. Assume $d\omega=0$. Here exact means $\omega=d\psi$ for a globally defined smooth scalar $\psi$; for a piecewise-$C^1$ closed curve $\gamma:[0,1]\to O$, its period is $\operatorname{Per}_\gamma(\omega):=\sum_j\int_{t_j}^{t_{j+1}}\omega_{\gamma(t)}(\dot\gamma(t))\,dt$. Let $m>0$ be a particle mass, take a nonzero constant SI charge $q_{\rm SI}$ in coulombs, and take $c>0$ in metres per second. For the charged Liouville ansatz $f=\exp(\zeta+g(\beta,P))$ on the future massive shell from [[def-tgr-charged-liouville-data]], charged stationarity $\mathcal L_{F,q_{\rm SI}}f=0$ is equivalent to $\beta$ being Killing and $d\alpha=q_{\rm eff}\omega$, where $q_{\rm eff}:=cq_{\rm SI}$ in $\mathrm{C\,m\,s}^{-1}$ and $\alpha:=-\zeta$. Thus, in this Killing case, the equation for an unknown global smooth dimensionless scalar $\alpha$ has a solution exactly when $\omega$ is exact; any nonzero period obstructs such a solution. The scalar $\alpha$ corresponds to chemical potential $\mu=-k_BT\alpha$ in joules.

If for a constant $T_*>0$ kelvins the normalized field $\xi:=k_BT_*\beta$ has a global potential compensator $\mathcal L_\xi A=d\Lambda_\xi$, then $\omega$ is exact and all its periods vanish. In Minkowski space with $c=1$, length coordinates $(x^0,r,\phi,z)$, metric $-(dx^0)^2+dr^2+r^2d\phi^2+dz^2$, time orientation selected by $\partial_{x^0}$, and $\partial_\phi=-y\partial_x+x\partial_y$, take $\beta=b(\partial_{x^0}+\Omega\partial_\phi)$ for $b>0$. The field is future timelike exactly where $1-\Omega^2r^2>0$. For $\Omega\ne0$ this is $r<1/|\Omega|$, and $T=1/(k_Bb\sqrt{1-\Omega^2r^2})$ there; when $\Omega=0$, every $r$ is allowed and $T=1/(k_Bb)$. Here $b$ has units $\mathrm{J}^{-1}$ and $\Omega$ has units $\mathrm{m}^{-1}$ in the adopted length coordinates.
## Statement references

[[def-tgrx-thermal-vorticity]]

[[def-tgrx-period-of-one-form]]

[[lem-tgrx-exact-one-form-zero-period]]

[[def-tgr-charged-liouville-data]]

[[lem-tgrx-compensator-implies-exact]]

[[lem-tgr-thermal-killing-kinematic-equivalence]]

[[thm-tgr-electrochemical-stationarity]]

[[def-closed-and-exact-differential-forms]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A nonempty connected smooth time-oriented Lorentzian four-domain with signature $(-,+,+,+)$ and a smooth future-timelike vector field $\beta$, not assumed Killing. For the charged transport and normalized-compensator clauses, also assume the displayed smooth $A$, $F=dA$, particle mass $m>0$, nonzero SI charge $q_{\rm SI}$, and closedness of $\omega=\iota_\beta F$.

[F1] [[def-tgrx-thermal-vorticity]]: $T=(-g(\beta,\beta))^{-1/2}/k_B$, $u=k_BT\beta$, $\varpi_{ab}=-(\nabla_a\beta_b-\nabla_b\beta_a)/2$, and $\alpha=-\mu/(k_BT)$.

[F2] [[lem-tgr-thermal-killing-kinematic-equivalence]]: for $\beta=u/(k_BT)$, Killing is equivalent to $DT=0$, $\theta=0$, $\sigma=0$, and $h\nabla\log T=-a$; it assumes no hypersurface-orthogonality or zero-vorticity condition.

[F3] [[def-tgr-charged-liouville-data]]: $F=dA$ for a global smooth one-form and $(\iota_\beta F)_a=\beta^bF_{ba}$; the SI field, charge, and $c$ conventions are fixed there, with no compensator assumed by the definition.

[F4] [[thm-tgr-electrochemical-stationarity]]: for $m>0$, the charged Liouville ansatz $f=\exp(\zeta+g(\beta,P))$ is stationary exactly when $\beta$ is Killing and $d\zeta=-cq_{\rm SI}\iota_\beta F$; this equivalence does not assume a global potential compensator.

[F5] [[def-closed-and-exact-differential-forms]]: a one-form is closed when $d\omega=0$ and exact when $\omega=d\psi$ for a globally defined smooth scalar $\psi$.

[F6] [[def-tgrx-period-of-one-form]]: $\operatorname{Per}_\gamma(\omega)=\sum_j\int_{t_j}^{t_{j+1}}\omega_{\gamma(t)}(\dot\gamma(t))\,dt$ for a closed piecewise-$C^1$ curve.

[F7] [[lem-tgrx-exact-one-form-zero-period]]: an exact smooth one-form has zero period on every closed piecewise-$C^1$ curve.

[F8] [[lem-tgrx-compensator-implies-exact]]: for a global smooth potential compensator, $\iota_\xi F=-d\Psi_\xi$ for the global scalar $\Psi_\xi=\xi\mathbin{\lrcorner}A-\Lambda_\xi$; the result assumes no charged trajectory.

[F9] [[def-countable-choice]]: $\mathrm{AC}_\omega$ selects from a sequence of nonempty sets. It is inherited through the charged tangent-bundle supplier chain; no stronger choice principle is used here.

[A1] $q_{\rm SI}\ne0$, $c>0$, and $q_{\rm eff}:=cq_{\rm SI}$; with $\zeta=\mu/(k_BT)$ and $\alpha=-\zeta$, the stationarity equation $d\zeta=-cq_{\rm SI}\omega$ is algebraically equivalent to $d\alpha=q_{\rm eff}\omega$.

[A2] In the Killing subcase, $A$ is a smooth global potential with $F=dA$, and $\omega=\iota_\beta F$ is closed. No global compensator for the normalized field $\xi=k_BT_*\beta$ is assumed except in the separately stated conditional clause.

[A3] For the charged stationarity interface, $m>0$ and the distribution is the smooth charged Liouville ansatz on the future massive shell specified by [[def-tgr-charged-liouville-data]]. The equivalence in [F4] is used conditionally; stationarity is not assumed when proving the separate global solvability criterion for $d\alpha=q_{\rm eff}\omega$.

## Proof

1.1 The displayed definitions give $u=k_BT\beta$ and $k_BT=(-g(\beta,\beta))^{-1/2}$, so $u=\beta/\sqrt{-g(\beta,\beta)}$ is future unit timelike and $\beta=u/(k_BT)$. Applying the exact equivalence [F2] to this $u$ and $T$ gives the four displayed kinematic conditions if and only if $\beta$ is Killing. No hypersurface-orthogonality or zero-vorticity condition is added. [given, F2, algebra]

1.2 In the Killing subcase of the Statement, fix any constant $T_*>0$ kelvins and set $\xi:=k_BT_*\beta$. This is a smooth future-timelike Killing field with dimensionless components. Its lapse is $N_\xi=k_BT_*\sqrt{-g(\beta,\beta)}=T_*/T$, so $\xi/N_\xi=u$ and $N_\xi T=T_*$. Therefore these fields satisfy the stationary thermal-carrier hypotheses of [F4], and [A3] supplies its massive-shell ansatz. That theorem states that stationarity is equivalent to $\beta$ being Killing and $d\zeta=-cq_{\rm SI}\omega$. Since this subcase already has $\beta$ Killing, its differential condition is exactly $d\alpha=q_{\rm eff}\omega$ by [A1]. This identifies the transport equation as the charged stationarity condition, without assuming stationarity in the separate solvability argument below. The only inherited set-theoretic premise is $\mathrm{AC}_\omega$ in [F9]; no stronger choice principle is invoked. [given, A1, A3, F1, F3, F4, F9, algebra]

1.3 Since $q_{\rm eff}\ne0$, any global solution of $d\alpha=q_{\rm eff}\omega$ gives $\omega=d(\alpha/q_{\rm eff})$, which is exact by [F5]. Conversely, if $\omega=d\psi$ for a global smooth $\psi$, choosing $\alpha=q_{\rm eff}\psi$ solves the equation, and $\mu=-k_BT\alpha$ is a smooth global chemical-potential scalar with the stated units. Thus the scalar transport equation has a global solution exactly when $\omega$ is exact. This is a solvability result and does not itself assert that the supplied fields are stationary. [given, A1, A2, F5, algebra]

1.4 If $\xi=k_BT_*\beta$ has the global compensator in the Statement, [F8] gives $\iota_\xi F=-d\Psi_\xi$. Since $\beta=\xi/(k_BT_*)$, we get $\omega=-(k_BT_*)^{-1}d\Psi_\xi$, an exact one-form; [F7] then forces every period to vanish. This stronger potential-symmetry condition is separate from the obstruction hypotheses. [F7, F8, algebra]

2.1 If any closed curve has $\operatorname{Per}_\gamma(\omega)\ne0$, [F7] contradicts the exactness forced by step 1.3. Hence no global smooth charged chemical scalar can solve the transport equation. [F6, F7, step 1.3]

3.1 In the rotating Minkowski model, $\partial_{x^0}$ and the smooth rotation generator $\partial_\phi=-y\partial_x+x\partial_y$ are Killing because the metric is invariant under time translations and rotations. Their constant linear combination $\beta$ is Killing and $g(\beta,\beta)=-b^2+b^2\Omega^2r^2=-b^2(1-\Omega^2r^2)$. Also $g(\beta,\partial_{x^0})=-b<0$, so it is future-directed in the stated time orientation wherever it is timelike. Thus its future-timelike domain is exactly $1-\Omega^2r^2>0$. Substituting this norm into [F1] gives the stated temperature; when $\Omega=0$ the norm is $-b^2$ for every $r$. [given, F1, algebra] ∎

## Remarks

The field $\beta$ is the selected thermal flow in this definition. Stationary non-static geometries can admit distinct timelike Killing flows and therefore distinct temperature profiles; no universal heat-bath frame or global thermal state is asserted. The charged condition is a conditional mathematical consequence of the specified Liouville model, not evidence that a material equilibrium is realized.
