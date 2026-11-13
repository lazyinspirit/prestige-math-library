---
id: def-se-regularized-adjoint
kind: definition
domain: mathematics
title: Resolvent-regularized adjoint and its forcing
status: published
deps:
  - def-se-geometry
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - math:thm-bochner-integrability-criterion
  - math:thm-heine-cantor-metric
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - prop-se-potential-multipliers
  - lem-se-positive-spectral-scale-contract
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:thm-heine-cantor-metric: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  prop-se-perturbed-evolution: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-potential-multipliers: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - prop-se-potential-multipliers
  - lem-se-positive-spectral-scale-contract
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - math:thm-bochner-integrability-criterion
  - math:thm-heine-cantor-metric
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - prop-se-potential-multipliers
  - lem-se-positive-spectral-scale-contract
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 17–18, notation after Lemma 4.1 and equations (4.2)–(4.3)
dependency_level: 14
---

## Definition

Assume the Axiom of Choice and hypotheses (H) and (W). Thus $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ is the reference solution of $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in distributions. Let $\Delta_D$ be the Dirichlet Laplacian, $A=I-\Delta_D$, and let $H_D^s(\Omega)$ be the spectral scale with norm $\|A^{s/2}\cdot\|_{L^2}$ on its defining core. Put $R=A^{-1}$ and $W(t)=e^{it\Delta_D}$.

Set $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$. Let $U(t)$ be the real-linear solution map at time $t$ for $i\partial_t v+\Delta_Dv+V_1v-V_2\overline v=0$, with initial time zero. At negative orders the products and conjugation are their bounded scale extensions and the equation is understood through its mild formulation.

For $\sigma\in\{-1,-2\}$ put $\tau=\sigma+2$. Given $v_0\in H_D^\sigma(\Omega)$, define the **regularized adjoint** $y$ and its initial value by $v(t)=U(t)v_0$, $y(t)=Rv(t)$ and $y_0=Rv_0$. Define its **forcing** by $f(t)=R(V_1(t)v(t)-V_2(t)\overline{v(t)})$. Then $y_0\in H_D^\tau$ and $\|y_0\|_{H_D^\tau}=\|v_0\|_{H_D^\sigma}$.

More generally, for $\theta\in[0,1]$ and $v_0\in H_D^{\theta-2}(\Omega)$, the same construction at order $\theta-2$ gives $y,f\in C([0,T];H_D^\theta(\Omega))$ and

$$y(t)=W(t)y_0+i\int_0^t W(t-r)f(r)\,dr.$$

The integral is a Bochner integral in $H_D^\theta$. There is a constant $C$ depending on the fixed data and $\theta$, but not on $v_0$ or $r\in[0,T]$, such that

$$\|f(r)\|_{H_D^\theta}\le C\|v(r)\|_{H_D^{\theta-2}}\le C\|v_0\|_{H_D^{\theta-2}}=C\|y_0\|_{H_D^\theta},\qquad \|y(r)\|_{H_D^\theta}\le C\|y_0\|_{H_D^\theta}.$$

The last equality uses the exact spectral norms. If the datum is also specified at an endpoint order $\sigma$, the constructions agree in the common lower-order space.

## Definition references

[[def-se-geometry]]

[[def-se-foundation-time-function-spaces]]

[[math:def-bochner-integrable-function]]

[[def-se-trajectory]]

[[def-se-dirichlet-scale]]

[[def-se-linearized-pair]]

[[prop-se-perturbed-evolution]]

[[prop-se-scale-flow]]

[[prop-se-potential-multipliers]]

[[lem-se-positive-spectral-scale-contract]]

[[math:def-axiom-of-choice]]

## Justification

Hypothesis (H), including the dimension and generalized-ray nontrapping convention, is fixed by [[def-se-geometry]]. The reference trajectory and distributional meaning of (W) are fixed by [[def-se-trajectory]]. The norm-continuous path and Lebesgue time-measure conventions are those of [[def-se-foundation-time-function-spaces]], and Bochner integration means the norm limit of integrals of simple approximants in [[math:def-bochner-integrable-function]]. The scale, its norms and $R$ are fixed by [[def-se-dirichlet-scale]], and the potential formulas and adjoint-system signs are those of [[def-se-linearized-pair]]. The assumption recorded in [[math:def-axiom-of-choice]] carries the choice hypotheses of the stated suppliers.

By [[prop-se-perturbed-evolution]], for each $s\in[-2,2]$ the adjoint system has a unique mild solution $v\in C([0,T];H_D^s)$ and $\sup_t\|v(t)\|_{H_D^s}\le C_s\|v_0\|_{H_D^s}$. By [[prop-se-potential-multipliers]], $V_1$, $V_2$ and conjugation act boundedly on that scale, and the potential multipliers are norm-continuous in time. Consequently $V_1v-V_2\overline v$ is a continuous $H_D^s$-valued path. At negative orders these are the pivot-dual multiplier actions, so no pointwise product of an arbitrary negative-order element is implied.

Take $s=\theta-2$. The isometry $R:H_D^s\to H_D^{s+2}$ and the commutation $RW(t)=W(t)R$ follow from [[prop-se-scale-flow]]. Put $g(r)=V_1(r)v(r)-V_2(r)\overline{v(r)}$, so $f=Rg$ is continuous in $H_D^\theta$. For fixed $t\in(0,T]$, unitarity and strong continuity of $W$, together with continuity of $g$ and $f$, make $r\mapsto W(t-r)g(r)$ and $r\mapsto W(t-r)f(r)$ continuous on $[0,t]$ in $H_D^s$ and $H_D^\theta$, respectively.

For either path $h$, [[math:thm-heine-cantor-metric]] gives uniform continuity on this compact interval. On the partition into $2^m$ equal subintervals take the left endpoint values, and take $h(t)$ at the final endpoint, obtaining measurable finite-range simple paths $h_m$ with $\sup_{r\in[0,t]}\|h_m(r)-h(r)\|\to0$. This proves strong measurability in the convention of [[def-se-foundation-time-function-spaces]]. That supplier also gives boundedness of a continuous path on the interval, so $\int_0^t\|h(r)\|\,dr\le t\sup_{r\in[0,t]}\|h(r)\|<\infty$. The criterion [[math:thm-bochner-integrability-criterion]] therefore makes both integrands Bochner integrable in their respective Banach scale spaces. At $t=0$ the integral over the zero-measure interval is zero.

The bounded complex-linear isometry $R$ can now be moved through the mild-equation integral by [[math:thm-bounded-linear-maps-commute-with-bochner-integration]]; its commutation with $W$ gives the displayed Duhamel identity. The isometry and multiplier bounds give $\|f(r)\|_{H_D^\theta}\le C\|v(r)\|_{H_D^{\theta-2}}$; the uniform propagator bound and the same isometry give the remaining inequalities and the equality of initial norms. Taking $s=\sigma$ also gives the endpoint identity with $\tau=\sigma+2$.

The compatible scale embeddings supplied by [[lem-se-positive-spectral-scale-contract]] place a common datum and its higher-order mild solution in the lower-order scale. The consistent free flow and multiplier extensions give the same lower-order mild equation there; uniqueness in [[prop-se-perturbed-evolution]] identifies the two solutions. Thus the endpoint and intermediate-order constructions agree whenever both are applicable.

## Source notes

The original article supplies the notation and assertions on PDF pages 17–18. It is cited for attribution; the justification uses the mathematical suppliers listed above.
