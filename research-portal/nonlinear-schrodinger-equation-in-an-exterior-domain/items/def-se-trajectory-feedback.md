---
id: def-se-trajectory-feedback
kind: definition
domain: mathematics
title: Endpoint feedback around a trajectory
status: draft
deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-foundation-time-function-spaces
  - def-se-trajectory
  - def-se-ucpw
  - def-se-dirichlet-scale
  - def-se-trajectory-remainder
  - prop-se-real-duhamel
  - prop-se-real-hum-isomorphism
  - prop-se-cutoff-multipliers
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-ucpw: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-trajectory-remainder: mathematical-premise
  prop-se-real-duhamel: mathematical-premise
  prop-se-real-hum-isomorphism: mathematical-premise
  prop-se-cutoff-multipliers: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 20, proof of Theorem 1.5, definitions following equation (4.6)
      statement: Attribution of the formulas for N_w, h_z and T_w, retaining the
        factors i and -i inside the real-linear propagator.
      hypotheses: The article's trajectory-control setting, with the linearized
        evolution and endpoint-control selector; the generated definition
        explicitly restricts to Bochner-integrable remainders.
      reading_limits: The frozen v2 PDF page 20 image and corresponding extracted text
        were read for formula attribution only. The article is not used to
        establish prerequisite results or well-definedness.
dependency_level: 19
---

## Definition

Assume the Axiom of Choice. Let $n\ge2$, $T>0$, and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty smooth compact nontrapping obstacle. This is hypothesis (H): every generalized reflected ray in the exterior leaves every compact set in finite time, with the generalized reflected-ray convention of the exterior geometry. Choose $R>0$ with $\Theta\subset B_R(0)$ and a real-valued $\varphi\in C^\infty(\mathbb R^n;[0,1])$ such that $\varphi(x)=0$ for $|x|\le R$, $\varphi(x)>0$ for $|x|>R$, and $\varphi(x)=1$ for $|x|\ge R+1$. Put $\omega=\{x\in\Omega:|x|>R\}$. Let $\lambda\in\mathbb R\setminus\{0\}$ and let $w$ satisfy (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ distributionally. Assume (UCPw): every $C([0,T];H_0^1(\Omega))$ solution of the adjoint equation $i v_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ that vanishes on $(0,T)\times\omega$ is identically zero.

Take $s\in\{1,2\}$ and set $E=H_D^s(\Omega)=D((I-\Delta_D)^{s/2})$, with its spectral norm. Here $\Delta_D$ is the Dirichlet Laplacian. Regard $E$ as a real Banach space. Let $S(t,r)$ be the real-linear homogeneous evolution for $i z_t+\Delta_Dz+2\lambda|w|^2z+\lambda w^2\overline z=0$. Let $G_w:E\times E\to C([0,T];E)$ be the bounded real-linear selector which steers this linearized system between its two input endpoints with control $h$ appearing as $\varphi h$. Use the same $R$, $\omega$ and $\varphi$ for (UCPw), $G_w$ and the control multiplier.

For $z\in C([0,T];E)$ such that $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$ is strongly measurable and belongs to $L^1(0,T;E)$, and for prescribed endpoints $z_0,z_T\in E$, define

$$N_w(z)(t)=\int_0^t S(t,r)(iF(w,z)(r))\,dr,\qquad h_z=G_w(z_0,z_T-N_w(z)(T)),$$

and

$$\mathcal T_w(z)(t)=S(t,0)z_0+N_w(z)(t)+\int_0^t S(t,r)(-i\varphi h_z(r))\,dr.$$

The $L^1(0,T;E)$ space uses Lebesgue time measure and almost-everywhere classes of strongly measurable maps with integrable $E$ norm. The integrals are Bochner integrals in the realification of $E$, and $C([0,T];E)$ denotes norm-continuous paths. Thus the definition gives $N_w(z),\mathcal T_w(z)\in C([0,T];E)$ and $h_z\in C([0,T];E)$. It applies to any chosen control space $X_T\subset C([0,T];E)$ once its members satisfy the displayed remainder condition; invariance of $X_T$ and contraction are separate assertions.

## Definition references

[[def-se-geometry]]

[[def-se-control-cutoffs]]

[[def-se-foundation-time-function-spaces]]

[[def-se-trajectory]]

[[def-se-ucpw]]

[[def-se-dirichlet-scale]]

[[def-se-trajectory-remainder]]

[[prop-se-real-duhamel]]

[[prop-se-real-hum-isomorphism]]

[[prop-se-cutoff-multipliers]]

[[math:def-axiom-of-choice]]

## Justification

The exterior geometry, one-sided smooth-obstacle and generalized reflected-ray conventions, and nontrapping hypothesis (H) are those of [[def-se-geometry]]. The radius, observation region and smooth real cutoff are chosen as in [[def-se-control-cutoffs]], consistently for (UCPw), the selector and the multiplier. The trajectory hypothesis is that of [[def-se-trajectory]], and the displayed unique-continuation implication is the conditional hypothesis of [[def-se-ucpw]]. The spectral scale, Dirichlet operator and complete normed state space are supplied by [[def-se-dirichlet-scale]], under the Choice assumption recorded in [[math:def-axiom-of-choice]]. The expression for $F$ and the meaning of the trajectory remainder are supplied by [[def-se-trajectory-remainder]].

The strong-measurability convention, Lebesgue-time $L^1(0,T;E)$ space and Bochner integration are supplied by [[def-se-foundation-time-function-spaces]]; its countable-choice assumption is covered by the stated Axiom of Choice.

Under these hypotheses, [[prop-se-real-hum-isomorphism]] supplies the bounded real-linear selector $G_w$ and its endpoint-steering property. The evolution and the continuous path obtained by integrating an $L^1(0,T;E)$ forcing are supplied by [[prop-se-real-duhamel]]. Hence the assumed remainder condition makes $N_w(z)$ a continuous $E$-valued path, so $N_w(z)(T)$ is a valid input to $G_w$. The resulting $h_z$ is continuous in $E$. By [[prop-se-cutoff-multipliers]], multiplication by $\varphi$ is bounded on $E$; consequently $-i\varphi h_z$ is continuous and therefore integrable on the finite interval. The same evolution result makes the last integral and $\mathcal T_w(z)$ continuous. The factors $i$ and $-i$ remain inside $S(t,r)$ because this evolution is only assumed real-linear.

## Source notes

The original article supplies the notation and definitions on PDF page 20. It is cited for attribution; the stated suppliers justify the domain and well-definedness. No nonlinear existence or contraction claim is made by this definition.
