---
title: Small-data contraction around a nonzero trajectory
status: published
research_item: prop-se-trajectory-contraction
dependency_level: 20
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 20, proof of Theorem 1.5
---

PDF p. 20: ` endpoint identities and final contraction estimates `

## Prerequisites

- [def-se-trajectory-feedback](item-def-se-trajectory-feedback)
- [def-se-energy-space](item-def-se-energy-space)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [prop-se-perturbed-strichartz](item-prop-se-perturbed-strichartz)
- [prop-se-trajectory-nonlinear-estimates](item-prop-se-trajectory-nonlinear-estimates)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-endpoint-feedback-contraction](item-lem-se-endpoint-feedback-contraction)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)


## Statement

Assume the Axiom of Choice and the hypotheses of [def-se-trajectory-feedback](item-def-se-trajectory-feedback), with $n\in\{2,3\}$: the smooth compact obstacle has connected nontrapping exterior $\Omega$, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, the reference solution $w$ satisfies (W), and the conditional unique-continuation hypothesis (UCPw) holds. In particular, (W) means $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $iw_t+\Delta w+\lambda|w|^2w=0$ distributionally. The hypothesis (UCPw) says that an energy-continuous solution of $iv_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ vanishing on $(0,T)\times\omega$ vanishes everywhere; $\omega$ is the exterior observation region in the feedback definition.

For $s\in\{1,2\}$ put $E=H_D^s=D((I-\Delta_D)^{s/2})$, with its spectral norm. For $s=1$, let $X_T=C([0,T];H^1_0)\cap L^4_tL^\infty_x$ with the sum norm and compatible jointly measurable representative specified by [def-se-energy-space](item-def-se-energy-space); $H^1_0$ is the $H^1$ closure of compactly supported smooth functions. For $s=2$, let $X_T=C([0,T];H_D^2)$ with the supremum spectral norm. Let $S$, the bounded real-linear endpoint selector $G_w$, the cutoff $\varphi$, and the maps $N_w$, $h_z$, $\mathcal T_w$ be those of [def-se-trajectory-feedback](item-def-se-trajectory-feedback), with $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$.

For all $z,\widetilde z\in X_T$, the map $\mathcal T_w$ is defined in $X_T$ and satisfies $\mathcal T_w(z)(0)=z_0$, $\mathcal T_w(z)(T)=z_T$, and $h_z-h_{\widetilde z}=-G_w(0,N_w(z)(T)-N_w(\widetilde z)(T))$. There are positive constants $C_1,C_2$, depending on the fixed hypotheses but not on $z,z_0,z_T$, such that, writing $\delta'=\|z_0\|_E+\|z_T\|_E$ and all unlabelled norms as $X_T$ norms, $$\|\mathcal T_w(z)\|\le C_1\delta'+C_2(\|z\|^2+\|z\|^3),$$ $$\|\mathcal T_w(z)-\mathcal T_w(\widetilde z)\|\le C_2(\|z\|+\|\widetilde z\|+\|z\|^2+\|\widetilde z\|^2)\|z-\widetilde z\|.$$

For sufficiently small $\delta>0$, if $\delta'\le2\delta$, the closed ball of radius $4C_1\delta$ in $X_T$ is invariant under $\mathcal T_w$ and the restriction is a strict contraction. It has a unique fixed point in that ball, with endpoints $z_0,z_T$ and selected control $h_z\in C([0,T];E)$. The fixed point satisfies the feedback integral equation for the controlled perturbation. No uniqueness outside the ball is asserted.

## Facts & Assumptions

[F1] [def-se-trajectory-feedback](item-def-se-trajectory-feedback) gives the stated hypotheses, real-linear evolution and selector, the endpoint property of the controlled linear solution, and the definitions $N_w(z)(t)=\int_0^t S(t,r)(iF(w,z)(r))\,dr$, $h_z=G_w(z_0,z_T-N_w(z)(T))$ and $\mathcal T_w(z)(t)=S(t,0)z_0+N_w(z)(t)+\int_0^t S(t,r)(-i\varphi h_z(r))\,dr$.

[F2] [prop-se-trajectory-nonlinear-estimates](item-prop-se-trajectory-nonlinear-estimates) gives $F(w,z)\in L^1(0,T;E)$ and its quadratic-cubic growth and difference estimates in the stated $X_T$ norm. [prop-se-perturbed-strichartz](item-prop-se-perturbed-strichartz) gives the homogeneous and retarded $L^1(0,T;E)\to X_T$ bounds for $S$ under the same dimension, geometry and trajectory hypotheses. The factors $i$ and $-i$ remain inside $S$, which is only real-linear.

[F3] [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) bounds multiplication by $\varphi$ on $E$. The definition [def-se-energy-space](item-def-se-energy-space) supplies the Banach property of the energy space, while [def-se-dirichlet-scale](item-def-se-dirichlet-scale) supplies the complete spectral state space. We assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), as required by these suppliers.

[F4] [lem-se-endpoint-feedback-contraction](item-lem-se-endpoint-feedback-contraction) gives the endpoint identities and the fixed-point conclusion for a bounded real-linear selector and the same homogeneous and control solution maps, provided its Banach, evaluation and nonlinear estimates hold.

[F5] A contraction of a nonempty complete metric space into itself has exactly one fixed point in that space. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

## Proof

**Given:** The hypotheses, endpoints and maps in the Statement.

**Goal:** Establish the endpoint identities, estimates and small-ball contraction, and obtain the controlled fixed point.

1.1 Regard $E$ and $X_T$ as real spaces. In the energy case $X_T$ is Banach by [F3] and continuously embeds in $C([0,T];E)$ by the norm equivalence in [F2]. In the order-two case $E$ is complete by [F3]; a uniformly Cauchy sequence of continuous $E$-valued paths has a uniform limit, and the uniform limit is continuous, so $X_T=C([0,T];E)$ is Banach. Evaluation is bounded in both cases. [F2, F3]

1.2 Define $A x=S(\cdot,0)x$ and $D_c h=\int_0^{\cdot}S(\cdot,r)(-i\varphi h(r))\,dr$. The homogeneous estimate in [F2] bounds $A:E\to X_T$. By [F3], $\|-i\varphi h\|_{L^1_tE}\le T\|\varphi\|_{E\to E}\|h\|_{C_tE}$; the retarded estimate bounds $D_c:C([0,T];E)\to X_T$. These maps and $G_w$ are real-linear. Their controlled solution $Ax+D_cG_w(x,y)$ is exactly the one whose endpoints are $x,y$ in [F1]. [F1, F2, F3]

1.3 By [F2], $N_w:X_T\to X_T$ is well defined and obeys $\|N_w(z)\|\le C(\|z\|^2+\|z\|^3)$ and $\|N_w(z)-N_w(\widetilde z)\|\le C(\|z\|+\|\widetilde z\|+\|z\|^2+\|\widetilde z\|^2)\|z-\widetilde z\|$. Here multiplication by $i$ preserves the $E$ norm before application of the retarded estimate. The polynomial gives $N_w(0)=0$, and the zero-length integral gives $N_w(z)(0)=0$. [F1, F2]

2.1 The maps in steps 1.2 and 1.3 realize the endpoint-feedback framework of [F4] with $m=3$. The selector is bounded, so combining its norm bound with steps 1.2 and 1.3 yields the two displayed estimates for suitable positive $C_1,C_2$. Real-linearity gives $h_z-h_{\widetilde z}=-G_w(0,N_w(z)(T)-N_w(\widetilde z)(T))$. The controlled linear part has endpoints $z_0$ and $z_T-N_w(z)(T)$; adding $N_w(z)$, whose initial value is zero, gives the stated endpoint identities for every $z$. [F1, F4, step 1.2, step 1.3]

3.1 Set $M=4C_1\delta$. Choose $\delta>0$ sufficiently small that $C_2(M^2+M^3)\le M/2$ and $C_2(2M+2M^2)<1$. If $\delta'\le2\delta$, step 2.1 gives $\|\mathcal T_w(z)\|\le M$ whenever $\|z\|\le M$, and gives a Lipschitz constant strictly below one for pairs in that ball. [step 2.1]

4.1 Put $B=\{z\in X_T:\|z\|\le M\}$ with metric $d(z,u)=\|z-u\|$. It is nonempty because $0\in B$. A Cauchy sequence $(z_j)$ in $B$ converges in $X_T$ by step 1.1, and its limit $z$ satisfies $\|z\|\le\|z-z_j\|+M$ for every $j$, hence $\|z\|\le M$. Thus $B$ is complete. Step 3.1 shows that $\mathcal T_w|_B:B\to B$ is a contraction with constant $q=C_2(2M+2M^2)<1$. Applying [F5] to this metric space and this restriction gives exactly one fixed point in the stated radius-$4C_1\delta$ ball. The endpoint identities of step 2.1 apply to that fixed point; its selector value belongs to $C([0,T];E)$. Substitution of the fixed point into the definition in [F1] gives the controlled perturbation integral equation, with the factors $i$ retained inside the real-linear propagator. This proves the claim. [F1, F5, step 1.1, step 2.1, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of the endpoint identities and contraction estimates on PDF page 20. The proof above uses the stated mathematical suppliers rather than that passage as a premise.
