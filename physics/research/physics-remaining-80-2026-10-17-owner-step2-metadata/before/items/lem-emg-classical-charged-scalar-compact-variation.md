---
id: lem-emg-classical-charged-scalar-compact-variation
kind: lemma
title: "Compact charged-scalar action variations at classical finite regularity"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-multidimensional-integral-properties
  - def-emg-classical-charged-scalar-finite-regularity-system
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
dependency_roles:
  thm-multidimensional-integral-properties: mathematical-premise
  def-emg-classical-charged-scalar-finite-regularity-system: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, sections 4.1 and 4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Context for the action formulas. The derivative-order, compact integration, stationarity equivalence and classical exchange identities are proved directly here."
verification:
  precheck: pending
---

## Statement

Use the classical finite-regularity configuration, relative actions and compact
smooth directions of
[[def-emg-classical-charged-scalar-finite-regularity-system]]. In particular
the underlying manifold is smooth, $g\in C^3$, $A,\varphi\in C^2$,
$F=dA$, $P=\mathcal D\varphi$, and the constants and potential have exactly
that Definition's hypotheses. Then all compact first variations exist, and

$$\delta S=\frac{c^3}{16\pi G_N}\mathcal I_M\!\left(\left[G_{ab}+\Lambda g_{ab}-\kappa_E(T^{\mathrm{EM}}_{ab}+T^\varphi_{ab})\right]q^{ab}\mathrm{vol}_g\right)+\frac{1}{\mu_0c}\mathcal I_M\!\left((\nabla_aF^{ab}+\mu_0j^b)\alpha_b\mathrm{vol}_g\right)+\frac{K_\varphi}{c}\operatorname{Re}\mathcal I_M\!\left(\overline\eta E_\varphi\mathrm{vol}_g\right).$$

The scalar and free Maxwell summands separately have first variations

$$\delta S_\varphi=-\frac{1}{2c}\mathcal I_M(T^\varphi_{ab}q^{ab}\mathrm{vol}_g)+\frac1c\mathcal I_M(j^a\alpha_a\mathrm{vol}_g)+\frac{K_\varphi}{c}\operatorname{Re}\mathcal I_M(\overline\eta E_\varphi\mathrm{vol}_g),$$

$$\delta S_{\mathrm{EM}}=-\frac{1}{2c}\mathcal I_M(T^{\mathrm{EM}}_{ab}q^{ab}\mathrm{vol}_g)+\frac{1}{\mu_0c}\mathcal I_M((\nabla_aF^{ab})\alpha_b\mathrm{vol}_g).$$

Thus compact stationarity is equivalent to all the pointwise classical
charged-scalar equations in that Definition. The homogeneous equation
$dF=0$ holds identically in the global-potential domain.

Without assuming the Einstein, Maxwell or scalar field equations, one also
has the classical identities

$$\nabla_a j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi E_\varphi),\qquad \nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}(\overline{E_\varphi}P_b)+F_{ba}j^a,$$

$$\nabla_a(T^{\mathrm{EM}})^a{}_b=\mu_0^{-1}F_{ba}\nabla_cF^{ca}.$$

Consequently the scalar equation implies current conservation, and the scalar
and sourced Maxwell equations together imply
$\nabla_a(T^{\mathrm{EM}}+T^\varphi)^a{}_b=0$ before any Einstein equation
is used. These conclusions are valid for the stated classical fields with
continuous coefficients; they claim no lower roughness threshold, smoothing,
physical adoption or coupled-solution existence.

## Facts & Assumptions

**Given:** The fields, compact smooth directions and relative action of the
Definition in [F1].

[F1] [[def-emg-classical-charged-scalar-finite-regularity-system]] fixes
$g\in C^3$, $A,\varphi\in C^2$, all tensors, the continuous compact
top-form integral, the positive constants, arbitrary real $\lambda$, the
open potential domain, and actual compact variations staying in that domain.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]
supplies finitely many smooth chart cutoffs summing to one near a given
compact set. Its smooth Stokes conclusion is not being applied to a merely
$C^1$ field; the necessary classical integration by parts is proved below.

[F3] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] makes every
continuous coefficient and every continuous partial derivative integrable on
a bounding rectangle.

[F4] [[thm-riemann-fubini-on-product-rectangles]] identifies an ordinary
iterated integral with the multiple integral when every section in that
order is integrable; the continuous coefficients here satisfy that condition.

[F5] [[thm-ftc-second-part]] gives $\int_a^b H'=H(b)-H(a)$ on a
nondegenerate closed interval when $H$ is differentiable there and $H'$ is
integrable, including its endpoint derivatives.

[F6] [[thm-multidimensional-integral-properties]] gives finite linearity, monotonicity and $|\int f|\le\int|f|$ for Riemann-integrable functions on a nondegenerate rectangle. The Darboux sums of a constant equal that constant times the rectangle volume.

## Proof

**Proof technique:** justify classical compact integration, compute the three
variations in coordinates, separate their continuous coefficients, and
differentiate the explicit current and stresses.

1.1 Fix the compact support $K$ of the directions. Use [F2]'s finite smooth localization near $K$, independently of the variation parameter. In each chart the localized density difference and its parameter derivative are continuous on a fixed compact parameter-rectangle product: every density is a smooth algebraic expression in the nondegenerate metric, its derivatives through order two, and the matter fields through order one. The families in [F1] have the required joint derivatives. The one-variable fundamental theorem gives the difference quotient as the average of those parameter derivatives along the parameter segment. Uniform continuity on this compact product makes that quotient converge uniformly to the derivative at zero. Monotonicity and the absolute-value estimate [F6], compared with the constant $\sup_Q|f|$, give $|\int_Q f|\le\operatorname{vol}(Q)\sup_Q|f|$; this passes the limit through each finite Riemann integral. Thus the relative actions can be differentiated by differentiating their densities, even when the background global actions diverge. [given, F1, F2, F3, F5, F6, algebra]

1.2 Let $W$ be any compactly supported $C^1$ vector field. Write $w=\sqrt{|\det g|}$. The Christoffel formula and determinant derivative give $\Gamma^a{}_{ab}=\partial_b\log w$, hence $\nabla_aW^a\mathrm{vol}_g=\partial_a(wW^a)d^4x$ in a positive chart. For each finite cutoff $\chi_i$ in [F2], $w\chi_iW^a$ extends by zero to a $C^1$ compactly supported coefficient on a bounding rectangle. Its partial derivatives and all sections are continuous, so [F3]–[F5] integrate its coordinate divergence to zero: the opposite-face values vanish. Summing over $i$ gives the same result for $W$, because $\sum_i\chi_i=1$ and $\sum_i d\chi_i=0$ near its support. Therefore $\mathcal I_M((\nabla_aW^a)\mathrm{vol}_g)=0$ for this $C^1$ field. No smoothness approximation or unproved rough Stokes assertion is used. [given, F1, F2, F3, F4, F5, algebra]

2.1 Put $h_{ab}=\delta g_{ab}=-g_{ac}g_{bd}q^{cd}$. Differentiation of $g^{ac}g_{cb}=\delta^a_b$ and of the determinant gives $\delta w=-\tfrac12wg_{ab}q^{ab}$. Differentiating the coordinate formula for the Christoffel symbols and collecting the terms containing $h$ gives $$\delta\Gamma^a{}_{bc}=\frac12g^{ad}(\nabla_bh_{cd}+\nabla_ch_{bd}-\nabla_dh_{bc}).$$ To differentiate Ricci, use $R_{ab}=\partial_c\Gamma^c{}_{ab}-\partial_b\Gamma^c{}_{ac} +\Gamma^c{}_{cd}\Gamma^d{}_{ab}-\Gamma^c{}_{bd}\Gamma^d{}_{ac}$. The differentiated quadratic terms are exactly the connection terms that complete the two derivatives to $\delta R_{ab}=\nabla_c\delta\Gamma^c{}_{ab}-\nabla_b\delta\Gamma^c{}_{ac}$. Metric compatibility in this coordinate connection then gives $$\delta((R-2\Lambda)w)=w(G_{ab}+\Lambda g_{ab})q^{ab}+\partial_a(wV^a),\qquad V^a=g^{bc}\delta\Gamma^a{}_{bc}-g^{ab}\delta\Gamma^c{}_{bc}.$$ All expressions exist classically: $g,h$ are $C^3$, $\delta\Gamma$ is $C^2$, and $V$ is a compactly supported $C^2$ vector field. Steps 1.1–1.2 therefore yield the Einstein–Hilbert first variation $c^3(16\pi G_N)^{-1}\mathcal I_M((G+\Lambda g)_{ab}q^{ab}\mathrm{vol}_g)$. [given, F1, step 1.1, step 1.2, algebra]

3.1 At fixed metric, $\delta F_{ab}=\partial_a\alpha_b-\partial_b\alpha_a =2\nabla_{[a}\alpha_{b]}$; torsion-freeness follows directly from symmetry of the Christoffel formula. Thus $\delta(F_{ab}F^{ab})=4F^{ab}\nabla_a\alpha_b$. The $C^1$ compact vector $W^a=F^{ab}\alpha_b$ satisfies $\nabla_aW^a=(\nabla_aF^{ab})\alpha_b+F^{ab}\nabla_a\alpha_b$. Steps 1.1–1.2 give $\delta_A S_{\mathrm{EM}}=(\mu_0c)^{-1}\mathcal I_M((\nabla_aF^{ab})\alpha_b\mathrm{vol}_g)$. At fixed lower $F$, direct inverse-metric differentiation gives $\delta(F_{cd}F^{cd})=2F_{ac}F_b{}^c q^{ab}$. Combining it with $\delta w$ from step 2.1 gives $\delta_g S_{\mathrm{EM}}=-(2c)^{-1}\mathcal I_M(T^{\mathrm{EM}}_{ab}q^{ab}\mathrm{vol}_g)$. This uses only $F\in C^1$ and the declared metric class. [given, F1, step 1.1, step 1.2, step 2.1, algebra]

3.2 For $\eta=\delta\varphi$, direct differentiation gives $\delta_\varphi L_\varphi=2\operatorname{Re}(\overline{\mathcal D_a\eta}P^a+V'\overline\eta\varphi)$. The product rule is $\nabla_a(\overline\eta P^a)=\overline{\mathcal D_a\eta}P^a+\overline\eta\mathcal D_aP^a$: the opposite gauge signs cancel. Its real and imaginary parts are $C^1$ compact vector fields. Integrating their divergence by step 1.2 yields $\delta_\varphi S_\varphi=(K_\varphi/c)\operatorname{Re}\mathcal I_M(\overline\eta E_\varphi\mathrm{vol}_g)$. At fixed $g,\varphi$, $\delta_A P_a=-i\lambda\varphi\alpha_a$, so $\delta_A L_\varphi=-2\lambda\operatorname{Im}(\overline\varphi P^a)\alpha_a$, giving the claimed $j$. At fixed lower $A$ and fixed $\varphi$, $\delta_gL_\varphi=\operatorname{Re}(\overline{P_a}P_b)q^{ab}$; the volume term then gives the displayed $T^\varphi$. These calculations require no derivative beyond $\varphi\in C^2$ and $A\in C^2$. [given, F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 Add steps 2.1, 3.1 and 3.2. The equality $(2c)^{-1}=[c^3/(16\pi G_N)]\kappa_E$ gives exactly the total first variation in the Statement, with its three independent directions. Its coefficients are continuous; the metric coefficient is symmetric. To see that testing detects a nonzero continuous component, take a positive chart where that component has one strict sign. A nonnegative smooth bump supported inside that chart, positive on a smaller closed rectangle, has a strictly positive signed pairing with the component times $w>0$. Such a bump can be taken as $e^{-1/(r^2-|x|^2)}$ inside a coordinate ball and zero outside. The resulting integral is nonzero: on the smaller rectangle the continuous sign-adjusted coefficient has a positive lower bound $a>0$, so its integral is at least $a$ times that rectangle volume by [F6]. Cutting a containing rectangle along the smaller rectangle faces and using coordinate-slice additivity in [F6] shows the full integral is at least that positive value, since the integrand is nonnegative on the remainder. A one-form test isolates any connection component; diagonal and symmetrized off-diagonal metric tests isolate every symmetric component. Scalar tests $\eta=f$ and $\eta=if$ isolate the real and imaginary parts of $E_\varphi$. Therefore stationarity for all these tests forces all three coefficients to vanish pointwise. Conversely their pointwise vanishing makes every first variation zero. The identity $dF=0$ in [F1] supplies the remaining homogeneous equation. [given, F1, F3, F6, step 2.1, step 3.1, step 3.2, construct, algebra]

4.2 The charged product rule gives $\nabla_a j^a=K_\varphi\lambda\operatorname{Im}(\overline{P_a}P^a+\overline\varphi\mathcal D_aP^a)$. The first contraction is real and $V'$ is real, giving the stated current identity. Differentiating $T^\varphi$ and using $\partial_b L_\varphi=2\operatorname{Re}(\overline{P^a}\mathcal D_bP_a)+2V'\operatorname{Re}(\overline\varphi P_b)$ gives $$\nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}\left(\overline{E_\varphi}P_b+\overline{P^a}(\mathcal D_aP_b-\mathcal D_bP_a)\right).$$ The symmetric Christoffel terms cancel in the difference. Expanding $P=\partial\varphi-i\lambda A\varphi$ and commuting the continuous second scalar partial derivatives gives $\mathcal D_aP_b-\mathcal D_bP_a=-i\lambda F_{ab}\varphi$. Its contribution to the real part is $-K_\varphi\lambda F_{ab}\operatorname{Im}(\overline\varphi P^a)=F_{ba}j^a$. This proves the two scalar off-shell identities using only first derivatives of $P$ and $C^2$ scalar partials. [given, F1, step 3.2, algebra]

5.1 Since $F=dA$ with $A\in C^2$, its homogeneous identity is $\nabla_aF_{bc}+\nabla_bF_{ca}+\nabla_cF_{ab}=0$. Contraction with $F^{ac}$ gives $2F^{ac}\nabla_aF_{bc}=\tfrac12\partial_b(F_{cd}F^{cd})$. The product rule in the explicit Maxwell tensor therefore yields $$\nabla_a(T^{\mathrm{EM}})^a{}_b=\mu_0^{-1}\left[(\nabla_aF^{ac})F_{bc}+F^{ac}\nabla_aF_{bc}-\frac14\partial_b(F_{cd}F^{cd})\right]=\mu_0^{-1}F_{ba}\nabla_cF^{ca}.$$ These are continuous identities for $F\in C^1$. If the sourced Maxwell equation holds, the last expression is $-F_{ba}j^a$, which cancels the scalar force term in step 4.2 when $E_\varphi=0$. This proves total-stress conservation and current conservation before any Einstein equation. No smooth-only stress or Noether theorem is invoked at the classical regularity. [given, F1, step 4.2, algebra] ∎
