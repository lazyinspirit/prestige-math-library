---
id: lem-se-4-2
kind: lemma
domain: mathematics
title: "Lemma 4.2: smoothing of the regularized adjoint"
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - def-se-regularized-adjoint
  - prop-se-scale-flow
  - prop-se-2-2-homogeneous
  - lem-se-positive-spectral-scale-contract
  - lem-se-spectral-cutoff-duality
  - lem-author-8960795edce1-compatible-banach-pairs
  - physics:lem-pe12-bochner-lp-mollification
  - physics:thm-pe12-bochner-lp-completeness
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-bochner-integrability-criterion
  - math:lem-bochner-integral-norm-inequality
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-regularized-adjoint: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-2-2-homogeneous: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  lem-author-8960795edce1-compatible-banach-pairs: mathematical-premise
  physics:lem-pe12-bochner-lp-mollification: mathematical-premise
  physics:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:lem-bochner-integral-norm-inequality: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 18, Lemma 4.2 and equations (4.2)–(4.3)
dependency_level: 15
---

## Statement

Assume the Axiom of Choice and hypotheses (H) and (W): $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, and the reference trajectory $w$ has the regularity and solves the equation specified in [[def-se-trajectory]]. Let $\Delta_D$ be the Dirichlet Laplacian, $H_D^s(\Omega)$ the spectral scale of $I-\Delta_D$, $R=(I-\Delta_D)^{-1}$, and $U(t)$ the real-linear adjoint evolution specified in [[def-se-regularized-adjoint]].

For every real $\eta\in C_c^\infty(\mathbb R^n)$ and $\theta\in[0,1]$, there is $C>0$, depending on the fixed geometry, trajectory, $T$, cutoff and order but not on the datum, such that every $v_0\in H_D^{\theta-2}(\Omega)$ gives $y(t)=RU(t)v_0$ and $y_0=Rv_0$ satisfying

$$\int_0^T\|\eta y(t)\|_{H_D^{\theta+1/2}(\Omega)}^2\,dt\le C\|y_0\|_{H_D^\theta(\Omega)}^2.$$

The left side is the squared Bochner $L^2$ norm; in particular the asserted higher-regularity representative exists almost everywhere in time.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-trajectory]]

[[def-se-dirichlet-scale]]

[[def-se-regularized-adjoint]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The geometry, nontrapping convention, trajectory, spectral scale and Bochner norms are those of [[def-se-geometry]], [[def-se-nontrapping]], [[def-se-trajectory]], [[def-se-dirichlet-scale]] and [[def-se-foundation-time-function-spaces]]. Choice is assumed as in [[math:def-axiom-of-choice]].

[F2] Put $H=H_D^\theta$, $Y=H_D^{\theta+1/2}$ and $W(t)=e^{it\Delta_D}$. The flow is a strongly continuous unitary group on $H$ [[prop-se-scale-flow]], and $Y$ embeds continuously and injectively into $H$ [[lem-se-positive-spectral-scale-contract]]. Multiplication by $\eta$ is bounded on $H$ [[lem-se-spectral-cutoff-duality]].

[F3] The homogeneous estimate [[prop-se-2-2-homogeneous]] gives $\|\eta W(\cdot)h\|_{L^2(0,T;Y)}\le C_s\|h\|_H$ for every $h\in H$. The same bound applies on every interval $(0,T-r)$ by restriction.

[F4] The regularized-adjoint construction [[def-se-regularized-adjoint]] supplies $f\in C([0,T];H)$ and $y(t)=W(t)y_0+i\int_0^tW(t-r)f(r)\,dr$, with $\sup_r\|f(r)\|_H\le C_f\|y_0\|_H$. The integral is in $H$.

[F5] Finite-exponent Bochner spaces are complete, and time translation is continuous in their norms, by [[physics:thm-pe12-bochner-lp-completeness]] and [[physics:lem-pe12-bochner-lp-mollification]], applied to realifications as in [[math:lem-complex-norm-realification-is-a-real-norm]]. The compatible-pair construction and its coordinate-integral identification are supplied by [[lem-author-8960795edce1-compatible-banach-pairs]]. Bochner integrability, the norm inequality, and commutation with bounded linear maps are [[math:thm-bochner-integrability-criterion]], [[math:lem-bochner-integral-norm-inequality]] and [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].

## Proof

[F1] The geometry, nontrapping convention, trajectory, spectral scale and Bochner norms are those of [[def-se-geometry]], [[def-se-nontrapping]], [[def-se-trajectory]], [[def-se-dirichlet-scale]] and [[def-se-foundation-time-function-spaces]]. Choice is assumed as in [[math:def-axiom-of-choice]].

[F2] Put $H=H_D^\theta$, $Y=H_D^{\theta+1/2}$ and $W(t)=e^{it\Delta_D}$. The flow is a strongly continuous unitary group on $H$ [[prop-se-scale-flow]], and $Y$ embeds continuously and injectively into $H$ [[lem-se-positive-spectral-scale-contract]]. Multiplication by $\eta$ is bounded on $H$ [[lem-se-spectral-cutoff-duality]].

[F3] The homogeneous estimate [[prop-se-2-2-homogeneous]] gives $\|\eta W(\cdot)h\|_{L^2(0,T;Y)}\le C_s\|h\|_H$ for every $h\in H$. The same bound applies on every interval $(0,T-r)$ by restriction.

[F4] The regularized-adjoint construction [[def-se-regularized-adjoint]] supplies $f\in C([0,T];H)$ and $y(t)=W(t)y_0+i\int_0^tW(t-r)f(r)\,dr$, with $\sup_r\|f(r)\|_H\le C_f\|y_0\|_H$. The integral is in $H$.

[F5] Finite-exponent Bochner spaces are complete, and time translation is continuous in their norms, by [[physics:thm-pe12-bochner-lp-completeness]] and [[physics:lem-pe12-bochner-lp-mollification]], applied to realifications as in [[math:lem-complex-norm-realification-is-a-real-norm]]. The compatible-pair construction and its coordinate-integral identification are supplied by [[lem-author-8960795edce1-compatible-banach-pairs]]. Bochner integrability, the norm inequality, and commutation with bounded linear maps are [[math:thm-bochner-integrability-criterion]], [[math:lem-bochner-integral-norm-inequality]] and [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].



**Given:** The geometry, trajectory, cutoff, order and initial datum in the statement.

**Goal:** Prove the displayed localized smoothing estimate for the regularized adjoint.

1.1 For $r\in[0,T]$ and $h\in H$, define the time row $Q_rh(t)=\mathbf1_{\{r<t<T\}}\eta W(t-r)h$. Its $L^1(0,T;H)$ norm is at most $T\|\eta\|_{H\to H}\|h\|_H$, by unitarity and the multiplier bound. Its $L^2(0,T;Y)$ norm is at most $C_s\|h\|_H$: after changing variables it is the homogeneous norm on $(0,T-r)$. Both values represent the same $H$-valued time class under $Y\hookrightarrow H$. [F2, F3, given]

2.1 For fixed $h$, the row is continuous in $r$ in $L^1(0,T;H)$ by strong continuity of $W$, the bounded multiplier, and the vanishing measure of the moving interval. It is continuous in $L^2(0,T;Y)$ because it is the restriction of a translate of the zero extension of $\eta W(\cdot)h$ on $(0,T)$; use the finite-exponent translation theorem on a larger finite interval. The two time spaces embed continuously into $L^1(0,T;H)$, so their compatible-pair space is Banach. Consequently $r\mapsto Q_rf(r)$ is strongly measurable in that pair: approximate the continuous $f$ uniformly by finite-valued functions and use row continuity. Its pair norm is bounded by a constant times $\|f(r)\|_H$, hence it is Bochner integrable. [F2, F4, F5, step 1.1]

3.1 Integrating the rows in the compatible-pair space and using the Bochner norm inequality in its $L^2(0,T;Y)$ coordinate gives a class $q$ with $\|q\|_{L^2Y}\le C_s\int_0^T\|f(r)\|_H\,dr$. To identify it, first take a continuous piecewise-linear approximation to $f$ and Riemann sums in the parameter: boundedness of $\eta$, the group law and the $H$-valued Bochner integral identify the $L^1(0,T;H)$ coordinate with $t\mapsto\eta\int_0^tW(t-r)f(r)\,dr$. The identification extends to the given continuous $f$ by uniform approximation, the row bound and the Bochner norm inequality. Compatibility therefore identifies $q$ with this localized Duhamel term as an $H$-valued time class. [F2, F4, F5, step 1.1, step 2.1]

4.1 Apply homogeneous smoothing to $y_0$ and combine it with step 3.1 and the Duhamel identity. The triangle inequality gives $\|\eta y\|_{L^2Y}\le C_s\|y_0\|_H+C_s\int_0^T\|f(r)\|_H\,dr\le C_s(1+TC_f)\|y_0\|_H$. Squaring proves the displayed estimate. The compatible embedding also establishes the claimed almost-everywhere higher-regularity representative. [F3, F4, step 3.1] ∎

## Source notes

The original article is cited for attribution of Lemma 4.2 and its regularized Duhamel formulation. The proof above uses the stated mathematical suppliers and spells out the localized retarded integration argument.
