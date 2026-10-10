---
id: def-flat-covariant-derivative-on-affine-minkowski-space
kind: definition
domain: mathematics
title: "The flat covariant derivative on affine Minkowski space and fields along curves"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, lem-tangent-space-of-affine-minkowski-space-is-v, def-ck-tensor-field-on-minkowski-space, thm-sr-tensor-and-current-transformation, def-inertial-frame-and-inertial-chart, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, thm-young-mixed-partial-theorem, def-vector-valued-derivative-and-integral, def-vector-field-and-section-along-a-smooth-curve, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, def-derivative, thm-algebra-of-derivatives]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  thm-young-mixed-partial-theorem: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-field-and-section-along-a-smooth-curve: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Let $(A,V,\eta,C^+)$ be the affine Minkowski space with tangent spaces canonically identified with $V$ ([[def-sr-affine-minkowski-model]], [[lem-tangent-space-of-affine-minkowski-space-is-v]]), and let $\Omega\subseteq A$ be a nonempty open subset. All tensor fields below are $C^k$ fields in the sense of [[def-ck-tensor-field-on-minkowski-space]], with $k=\infty$ unless a clause says otherwise.

**(a) Vector fields.** For smooth vector fields $X,Y$ on $\Omega$ define the **covariant derivative of $Y$ in the direction $X$** at $p\in\Omega$ by

$$\bigl(\nabla_XY\bigr)(p):=\frac{d}{dt}\Big|_{t=0}Y\bigl(p+tX(p)\bigr),$$

the derivative of the $V$-valued composite $t\mapsto Y(p+tX(p))$, which is defined for $t$ in a neighbourhood of $0$ because $\Omega$ is open ([[def-vector-valued-derivative-and-integral]], [[def-derivative]]). In the inertial chart $x$ of any inertial frame one has $(\nabla_XY)^a=X^b\,\partial_bY^a$; the value does not depend on the inertial chart: for another inertial chart $x'=\Lambda x+b$ one has $\partial'_a=(\Lambda^{-1})^b_{\ a}\,\partial_b$ and $Y'^a=\Lambda^a_{\ b}Y^b$ ([[thm-sr-tensor-and-current-transformation]], [[def-inertial-frame-and-inertial-chart]]), and $\Lambda$ is constant, so $(\Lambda^{-1})^a_{\ c}\,X'^b\,\partial'_bY'^c=X^b\,\partial_bY^a$. The field $\nabla_XY$ is again a smooth vector field on $\Omega$.

**(b) Covector and general tensor fields.** For a smooth covector field $\alpha$ set $(\nabla_X\alpha)(Y):=X(\alpha(Y))-\alpha(\nabla_XY)$ for every smooth vector field $Y$, and for a type $(r,s)$ tensor field $T$ define $\nabla_XT$ by the derivation rule on the evaluation of $T$: for $T:(V^*)^r\times V^s\to\mathbb R$,

$$(\nabla_XT)(\alpha_1,\dots,\alpha_r;Y_1,\dots,Y_s)=X\bigl[T(\alpha_1,\dots,\alpha_r;Y_1,\dots,Y_s)\bigr]-\sum_{i=1}^rT(\alpha_1,\dots,\nabla_X\alpha_i,\dots,\alpha_r;Y_1,\dots,Y_s)-\sum_{j=1}^sT(\alpha_1,\dots,\alpha_r;Y_1,\dots,\nabla_XY_j,\dots,Y_s),$$

where the vector and covector arguments are smooth fields on $\Omega$. In inertial coordinates every component of $\nabla_XT$ is $X^b\,\partial_b$ applied to that component, with no connection coefficients.

**(c) Properties.** The operator $\nabla$ is $\mathbb R$-bilinear, is $C^\infty(\Omega)$-linear in $X$, and satisfies the Leibniz rules $\nabla_X(fY)=X(f)Y+f\nabla_XY$ and the analogous rules for tensor fields; it is metric compatible, $\nabla\eta=0$, because $\partial_a\eta_{bc}=0$ in every inertial chart; it is torsion-free, $\nabla_XY-\nabla_YX=[X,Y]$, by the coordinate formula for the Lie bracket ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]]); and it has zero curvature, $\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z=0$, by equality of mixed partial derivatives of the components ([[thm-young-mixed-partial-theorem]]).

**(d) Fields along a curve.** If $\gamma:I\to A$ is a $C^1$ curve and $W:I\to V$ is a $C^1$ field along it ([[def-vector-field-and-section-along-a-smooth-curve]]), the **covariant derivative of $W$ along $\gamma$** is the ordinary $V$-valued derivative $DW/ds:=W'$ ([[def-vector-valued-derivative-and-integral]]), because the canonical identification $T_pA=V$ is independent of $p$; consequently parallel transport along any curve is the identity and a field is parallel exactly when it is constant. This derivative is the one used for the acceleration of congruences, for Fermi–Walker transport and for the kinematic decomposition below; the model needs no Christoffel symbols and no parallel-transport ODE in this formulation.

**(e) First-order $C^1$ version.** For $C^1$ vector fields $X,Y$ and $C^1$ covector or tensor fields on $\Omega$ the same directional and evaluation definitions are well-defined and have continuous coefficients: in an inertial chart $(\nabla_XY)^a=X^b\partial_bY^a$, and each tensor component is differentiated in the same way. The component recovery and the subtraction of all argument derivatives remain valid; $C^1$ scalar multiplication satisfies the same first-order Leibniz rules; metric compatibility remains $\nabla\eta=0$; and the first-order torsion identity uses the continuous coordinate bracket $[X,Y]^a=X^b\partial_bY^a-Y^b\partial_bX^a$. No $C^1$ closure of this bracket and no second covariant derivative of arbitrary $C^1$ data are asserted. For $C^2$ vector fields the second derivatives needed for the zero-curvature identity of (c) exist, and that identity follows by equality of the continuous mixed second partials. All smooth-field properties above and the $C^1$ along-curve derivative in (d) are retained.

## Remarks

- **Well-definedness of (a).** The composite $t\mapsto Y(p+tX(p))$ is the composition of the smooth curve $t\mapsto p+tX(p)$ (which stays in $\Omega$ for small $|t|$ because $\Omega$ is open and $X(p)\in V$ is a fixed vector) with the smooth map $Y:\Omega\to V$; its derivative at $0$ exists in the finite-dimensional real vector space $V$ by [[def-vector-valued-derivative-and-integral]], and the coordinate expression $(\nabla_XY)^a=X^b\partial_bY^a$ is the chain rule of [[thm-chain-rule-for-total-derivatives]]. Chart independence uses the transformation laws of [[thm-sr-tensor-and-current-transformation]] together with the constancy of the linear part $\Lambda$ of an inertial transition ([[def-inertial-frame-and-inertial-chart]]): the second derivatives of the transition vanish, so no inhomogeneous term appears. Smoothness of $\nabla_XY$ follows because $X^b\partial_bY^a$ is a smooth function of $x(p)$ in an inertial chart, and $C^k$ tensor fields are exactly those with $C^k$ inertial components ([[def-ck-tensor-field-on-minkowski-space]]).

- **Well-definedness of (b).** In an inertial chart use the constant coordinate frame and its constant dual frame; their covariant derivatives vanish, so evaluating the derivation rule on those constant bases leaves only $X$ acting on each component of $T$. For variable arguments $\alpha_1,\dots,Y_s$ the ordinary product rule expressed by [[thm-algebra-of-derivatives]] produces exactly the subtracted terms displayed in (b), and all their derivatives cancel; this proves the stated coordinate formula and shows that the evaluation rule is well-defined, once the covector case $(\nabla_X\alpha)(Y)=X(\alpha(Y))-\alpha(\nabla_XY)$ is fixed by the requirement that $\nabla_X$ commute with the pairing. No connection coefficients appear because $\eta$ is constant and the inertial transition matrices are constant.

- **Well-definedness of (c).** Torsion-freeness is the coordinate identity $X^b\partial_bY^a-Y^b\partial_bX^a=[X,Y]^a$ ([[prop-coordinate-formula-for-the-lie-bracket]]); metric compatibility is the constancy of the component matrix $\eta_{ab}$ of the metric in inertial charts; and the curvature identity follows from the equality of mixed second partial derivatives ([[thm-young-mixed-partial-theorem]]) after expanding the two iterated derivatives of the components. The Leibniz and linearity properties are immediate from the definitions.

- **Well-definedness of (d) and (e).** In (d) the canonical isomorphism $T_pA\to V$ is independent of $p$ ([[lem-tangent-space-of-affine-minkowski-space-is-v]]), so a field along a curve is simply a $V$-valued map and its covariant derivative is its ordinary derivative; parallel transport is the identity because the equation $W'=0$ has exactly the constant solutions on an interval: each real component of $W$ is constant by [[cor-zero-derivative-implies-constant]], and a constant vector-valued map has derivative zero. In (e) a $C^1$ field $Y$ has a continuous differential, and the derivative of $t\mapsto Y(p+tX(p))$ at $0$ is $dY_p[X(p)]$, which is a continuous function of $p$ when $Y$ and $X$ are $C^1$; only first derivatives occur in the Leibniz, metric-compatibility and torsion assertions, and the second covariant derivatives in the curvature identity require the stated $C^2$ hypotheses. No choice principle is used anywhere; all objects are finite-dimensional or explicitly parametrized.
