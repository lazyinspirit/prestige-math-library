---
id: prop-se-invisible-bootstrap
kind: proposition
domain: mathematics
title: Time cutoff bootstrap for invisible adjoint solutions
status: draft
proof_strategy: direct
deps:
  - lem-se-4-1
  - prop-se-perturbed-evolution
  - prop-se-potential-multipliers
  - def-se-control-cutoffs
  - def-se-foundation-time-function-spaces
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - prop-se-scale-flow
  - lem-se-real-evolution-duhamel-bound
  - math:def-axiom-of-choice
dependency_roles:
  lem-se-4-1: mathematical-premise
  prop-se-perturbed-evolution: mathematical-premise
  prop-se-potential-multipliers: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-se-real-evolution-duhamel-bound: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 14
---

## Statement

Assume the Axiom of Choice and hypotheses (H) and (W) of [[prop-se-perturbed-evolution]]. Thus $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth nontrapping obstacle, $T>0$, and the reference trajectory $w$ and real $\lambda\ne0$ determine $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$. Let $H_D^s$ be the Dirichlet spectral scale, with negative indices interpreted by pivot antiduality, and let $W(t)=e^{it\Delta_D}$. Take the real cutoffs $\varphi,\psi$ from [[def-se-control-cutoffs]].

Let $\theta\in[-2,0]$ and let $v\in C([0,T];H_D^\theta)$ be the mild solution of $i v_t+\Delta_Dv+V_1v-V_2\overline v=0$ with $\varphi v=0$ throughout $[0,T]$, as an equality in $H_D^\theta$. Then $v=\psi v$ throughout $[0,T]$. For every nonzero real $\vartheta\in C_c^\infty(0,T)$, put $u=\vartheta v$ and $\Phi=\vartheta(-V_1v+V_2\overline v)+i\vartheta'v$. The identities $u=\psi u$ and $\Phi=\psi\Phi$ hold, and
$$u(t)=-i\int_0^t W(t-r)\psi\Phi(r)\,dr.$$
Moreover $u\in L^2(0,T;H_D^{\theta+1})$ and $v\in C([0,T];H_D^{\theta+1})$. In particular, the gain can be applied successively at $\theta=-2$ and $\theta=-1$ to an invisible solution initially in $C([0,T];H_D^{-2})$.

## Statement references

[[prop-se-perturbed-evolution]]

[[def-se-dirichlet-scale]]

[[def-se-control-cutoffs]]

[[def-se-linearized-pair]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The cutoff construction gives $\chi=1-\varphi$, $\psi\chi=\chi$, and real smooth compactly supported $\chi,\psi$. The scale definition gives $A=I-\Delta_D\ge I$, consistent spectral spaces and the negative pivot-antidual convention. Smooth cutoff multiplication is bounded and compatible with products on the relevant scale by [[lem-se-4-1]]. These conventions are in [[def-se-control-cutoffs]] and [[def-se-dirichlet-scale]].

[F2] Under the stated hypotheses, $V_j(t)$ and conjugation act boundedly on each $H_D^q$ for $-2\le q\le2$; the potential multipliers vary continuously in operator norm. The adjoint mild solution is unique on each such scale, forward and backward from any initial time, and satisfies its free-flow Volterra equation. These are [[prop-se-potential-multipliers]], [[prop-se-perturbed-evolution]] and [[def-se-linearized-pair]].

[F3] The group $W$ is strongly continuous and unitary on every scale space [[prop-se-scale-flow]]. The retarded smoothing estimate [[lem-se-4-1]] applies with a real compactly supported cutoff and input $g=\psi f\in L^2(0,T;H_D^\theta)$, giving the output localized by $\psi$ in $L^2(0,T;H_D^{\theta+1})$. The time spaces and integrals are the Bochner spaces and integrals of [[def-se-foundation-time-function-spaces]]. The Axiom of Choice supplies the assumptions of these results [[math:def-axiom-of-choice]].

[F4] The Volterra formulation and Bochner integration rules for a strongly continuous group with a bounded real-linear perturbation are supplied by [[lem-se-real-evolution-duhamel-bound]].

## Proof

[F1] The cutoff construction gives $\chi=1-\varphi$, $\psi\chi=\chi$, and real smooth compactly supported $\chi,\psi$. The scale definition gives $A=I-\Delta_D\ge I$, consistent spectral spaces and the negative pivot-antidual convention. Smooth cutoff multiplication is bounded and compatible with products on the relevant scale by [[lem-se-4-1]]. These conventions are in [[def-se-control-cutoffs]] and [[def-se-dirichlet-scale]].

[F2] Under the stated hypotheses, $V_j(t)$ and conjugation act boundedly on each $H_D^q$ for $-2\le q\le2$; the potential multipliers vary continuously in operator norm. The adjoint mild solution is unique on each such scale, forward and backward from any initial time, and satisfies its free-flow Volterra equation. These are [[prop-se-potential-multipliers]], [[prop-se-perturbed-evolution]] and [[def-se-linearized-pair]].

[F3] The group $W$ is strongly continuous and unitary on every scale space [[prop-se-scale-flow]]. The retarded smoothing estimate [[lem-se-4-1]] applies with a real compactly supported cutoff and input $g=\psi f\in L^2(0,T;H_D^\theta)$, giving the output localized by $\psi$ in $L^2(0,T;H_D^{\theta+1})$. The time spaces and integrals are the Bochner spaces and integrals of [[def-se-foundation-time-function-spaces]]. The Axiom of Choice supplies the assumptions of these results [[math:def-axiom-of-choice]].

[F4] The Volterra formulation and Bochner integration rules for a strongly continuous group with a bounded real-linear perturbation are supplied by [[lem-se-real-evolution-duhamel-bound]].



**Given:** The hypotheses and the invisible mild solution $v$ in the Statement.

**Goal:** Prove the localized Duhamel identity and gain one derivative throughout the time interval.

1.1 Since $\varphi v=0$ and $\chi=1-\varphi$, we have $v=\chi v=\psi\chi v=\psi v$ in $H_D^\theta$. Scalar time multiplication gives $u=\psi u$. Multiplication operators commute with $\psi$, and conjugation commutes with the real cutoff $\psi$; these identities hold on the common scale core and extend by boundedness. Therefore both potential terms and $\vartheta'v$ are fixed by $\psi$, so $\Phi=\psi\Phi$. Operator-norm continuity of the potentials and continuity of $v$ show that $\Phi\in C([0,T];H_D^\theta)$, hence $\Phi\in L^2(0,T;H_D^\theta)$. [F1, F2, F3, given]

2.1 Write $P(r)v=i(V_1(r)v-V_2(r)\overline v)$. The mild equation is $v(t)=W(t)v(0)+\int_0^tW(t-r)P(r)v(r)\,dr$. Multiply it by $\vartheta(t)$. Since $\vartheta(0)=0$, use $\vartheta(t)=\int_0^t\vartheta'(s)\,ds$ on the free term and $\vartheta(t)-\vartheta(r)=\int_r^t\vartheta'(s)\,ds$ on the integral term. The group law and exchange of the resulting triangular Bochner integrals identify the extra terms as $\int_0^tW(t-s)\vartheta'(s)v(s)\,ds$. Consequently $u(t)=\int_0^tW(t-r)(\vartheta(r)P(r)v(r)+\vartheta'(r)v(r))\,dr=-i\int_0^tW(t-r)\Phi(r)\,dr$. The exchange is justified on the finite triangle by strong continuity, the uniform group and perturbation bounds, and Bochner integrability. Step 1.1 replaces $\Phi$ by $\psi\Phi$. [F2, F3, F4, step 1.1]

3.1 Apply the retarded smoothing estimate with cutoff $\psi$ and $g=\psi\Phi=\Phi$. It gives $\psi u\in L^2(0,T;H_D^{\theta+1})$; the constant factor $-i$ is harmless. Since $u=\psi u$ in the lower space, $u$ has this higher-regularity representative. [F3, step 1.1, step 2.1]

4.1 Because $\vartheta$ is nonzero and continuous, it is nonzero on a nonempty open interval. Choose $t_0$ there outside the null exceptional set from step 3.1. Then $v(t_0)=u(t_0)/\vartheta(t_0)\in H_D^{\theta+1}$. The spectral inequality $A\ge I$ gives the continuous inclusion $H_D^{\theta+1}\hookrightarrow H_D^\theta$ by comparison of the two spectral norms on the common core and completion. Solve the adjoint equation forward and backward from $v(t_0)$ in $H_D^{\theta+1}$. The higher-order solution also satisfies the lower-order Volterra equation, because the scale operations, group and multipliers are compatible. Lower-order uniqueness identifies it with $v$ on all of $[0,T]$. Thus $v\in C([0,T];H_D^{\theta+1})$. Applying the same result first at $-2$ and then at $-1$ proves the final assertion. [F1, F2, F3, step 3.1] ∎

## Source notes

The original article is cited for attribution of the cutoff bootstrap in the proof of Lemma 4.5 on PDF page 19. The argument above uses the stated mathematical suppliers; the article is not used as proof of its own claim. The explicit Choice assumption records the hypotheses of the suppliers and is not attributed to the article.
