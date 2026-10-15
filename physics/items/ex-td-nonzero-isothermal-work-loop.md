---
id: ex-td-nonzero-isothermal-work-loop
kind: example
title: Nonzero pressure work around a closed model cycle
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Constructed smooth concave positive-temperature chart for a closed fixed-composition system in a fixed Galilean chart, coupled to an ideal planar constant-area piston in frictionless mechanical equilibrium; the work and heat values are model calculations, not reported observations.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-process-and-protocol
  - def-td-temperature-pressure-chemical-potential
  - post-td-first-law-energy
  - post-td-mechanical-conjugate-identification
  - def-piecewise-c1-path-operations-and-oriented-reparametrizations
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - thm-gradient-theorem-for-line-integrals
  - thm-newton-leibniz-with-interior-derivative
  - thm-continuous-implies-integrable
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  post-td-first-law-energy: physical-assumption
  post-td-mechanical-conjugate-identification: physical-assumption
  def-piecewise-c1-path-operations-and-oriented-reparametrizations: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  thm-gradient-theorem-for-line-integrals: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
    - title: Jeremy Tatum, Heat and Thermodynamics, §12.5, Summary, Maxwell Relations, and Gibbs-Helmholtz Relations
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.05:_Summary_the_Maxwell_Relations_and_the_Gibbs-Helmholtz_Relations
dependency_level: 7
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Fix a material constitution and amount $n$ and stipulate, on $U>0$ and $0<V<1/b$, the entropy chart

$$S(U,V)=C\ln(U/U_*)+aV-\frac{ab}{2}V^2+S_0,$$

where $C>0$ is in $\mathrm{J\,K^{-1}}$, $U_*>0$ is in joules, $a>0$ is in $\mathrm{J\,K^{-1}\,m^{-3}}$, $b>0$ is in $\mathrm{m^{-3}}$, and $S_0$ is in $\mathrm{J\,K^{-1}}$. Let $s$ be a closed system of this constitution and amount. Stipulate that the process model admits a record $P\in\mathcal P_{\mathrm{cl}}(s)$ as in [[def-td-process-and-protocol]], using one fixed Galilean inertial chart and satisfying $\Delta K_{\mathrm{cm}}=\Delta U_{\mathrm{ext}}=0$. Its equilibrium state path is piecewise-C1, starting at $(T_1,V_1)$ and following, in order, a constant-temperature leg $T=T_1$ from $V_1$ to $V_2$, a constant-volume leg $V=V_2$ to $T_2$, a constant-temperature leg $T=T_2$ from $V_2$ to $V_1$, and a constant-volume leg $V=V_1$ back to $T_1$, where $T_1>T_2>0$ and $0<V_1<V_2<1/b$. The moving boundary is a planar piston of constant area. Throughout the volume-changing legs it remains in frictionless mechanical equilibrium with a load tracking the equilibrium pressure, as required by [[post-td-mechanical-conjugate-identification]]; controlled heat exchange is permitted, and no other work coordinate acts. In this model, the finite work transfer $W_{\mathrm{on}}[P]$ is defined as the line integral of the incremental piston work along this piecewise-C1 path. This is a stipulated idealized model record, not a reported observation. Its pressure-work integral is not an endpoint increment.

The displayed entropy is $S^{\rm SI}$ in physical SI coordinates. For this constructed local model, choose the positive-amount open neighborhood stated here (or any positive neighborhood of the fixed amount, extending this entropy independently of amount) and let $O_c$ be the numerical preimage of that product patch under $\Phi_c(\hat U,\hat V,\hat n)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$. Declare $O_c$ as the model's local state-domain patch and set $S_c=S^{\rm SI}\circ\Phi_c$. The derivatives below are those of $S^{\rm SI}=S_c\circ\Phi_c^{-1}$ on $\Phi_c(O_c)$, exactly as in [[def-td-temperature-pressure-chemical-potential]]. This supplies the numerical-to-SI chart identification for the formal witness, with no assertion of a measured material or a global constitutive extension.

## Facts & Assumptions

**Given:** The stipulated entropy chart, constants and SI units in the Example, and the model assumption that its process family admits the closed core record $P\in\mathcal P_{\mathrm{cl}}(s)$ described there, in one fixed Galilean chart and with $\Delta K_{\mathrm{cm}}=\Delta U_{\mathrm{ext}}=0$. Its state path is piecewise-C1; the moving boundary is a planar constant-area piston in frictionless mechanical equilibrium with a load tracking the model pressure. Controlled heat exchange is permitted and no other work coordinate acts. No empirical realization is claimed.

[F1] [[def-td-equilibrium-state-domain]] and [[def-td-si-quantities]]: The chart uses positive physical energy and volume in joules and cubic metres; entropy is in $\mathrm{J\,K^{-1}}$.

[F2] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\ln$ is defined on positive arguments and has derivative $1/x$.

[F3] [[def-td-temperature-pressure-chemical-potential]]: $T=1/S_U$ and $p=T S_V$ on a positive-temperature chart.

[F4] [[post-td-mechanical-conjugate-identification]]: On the admitted quasistatic frictionless piston path, the incremental work on the system is $\delta W_{\mathrm{on}}=-p\,dV$; this constructed protocol defines its finite $W_{\mathrm{on}}[P]$ as the path integral of those increments along the four legs.

[F5] [[post-td-first-law-energy]] and [[def-td-process-and-protocol]]: For the admitted closed cycle, $\Delta U=Q+W_{\mathrm{on}}$ with heat positive into and work positive on the system.

[L1] [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]] and [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]: For a piecewise-C1 path $\gamma$ in the $(T,V)$ chart, $\int_\gamma (0,p)\cdot d(T,V)$ is the Riemann line integral $\int p\,dV$.

[L2] [[thm-newton-leibniz-with-interior-derivative]] and [[thm-continuous-implies-integrable]]: Continuous integrands on each compact segment are Riemann integrable and their polynomial antiderivatives give the segment integrals.

[L3] [[thm-gradient-theorem-for-line-integrals]]: The integral of a gradient along a closed piecewise-C1 path is zero.

[L4] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: The derivative of a product of differentiable scalar maps is the sum of the two product terms.

## Verification

1.1 By [F2] and [L4], the entropy derivatives are $S_U=C/U$ and $S_V=a(1-bV)$. Thus [F3] gives $T=U/C>0$ and $p=aT(1-bV)>0$ on the stated domain. The Hessian is diagonal with entries $-C/U^2$ and $-ab$, so the chart is C2 and concave. [given, F1, F2, F3, L4, algebra]

2.1 On each isotherm the vector field in [L1] is continuous, so [L2] gives $\int_{V_1}^{V_2}p(T_1,V)\,dV=aT_1[(V_2-V_1)-\tfrac b2(V_2^2-V_1^2)]$; the reverse isotherm contributes the negative of the same bracket multiplied by $aT_2$, and the isochoric legs contribute zero. [given, L1, L2, step 1.1, algebra]

3.1 Summing the four legs yields $\oint p\,dV=a(T_1-T_2)(V_2-V_1)[1-\tfrac b2(V_1+V_2)]>0$, since $T_1>T_2$ and $V_1,V_2<1/b$. Thus $W_{\mathrm{on}}=-\oint p\,dV<0$ by [F4]. [given, F4, step 2.1, algebra]

4.1 The cycle returns to the same $U$, so [F5] gives $Q=-W_{\mathrm{on}}=\oint p\,dV>0$. If there were a $C^1$ scalar potential $\phi$ on an open neighborhood of the loop with $d\phi=p\,dV$ (equivalently, $\nabla_{(T,V)}\phi=(0,p)$), [L3] would force its closed integral to be zero, contradicting step 3.1. Thus no such endpoint potential represents pressure work on a neighborhood containing this loop; the work depends on the path. [F5, L3, step 3.1, algebra] ∎
