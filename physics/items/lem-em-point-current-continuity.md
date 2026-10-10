---
id: lem-em-point-current-continuity
kind: lemma
title: "Point-support spacetime densities: distributions, continuity equation and endpoint fluxes"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-distribution, def-test-function-space-d-of-an-open-set, def-fixed-support-test-function-frechet-space, thm-local-finite-order-characterization-of-distributions, def-distributional-derivative, def-dirac-delta-and-its-derivatives, thm-newton-leibniz-with-interior-derivative, thm-linearity-of-the-integral, thm-additivity-over-subintervals, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral, thm-comparison-test-for-improper-integrals, thm-absolute-improper-convergence-implies-convergence, thm-compact-subset-is-closed-and-bounded, lem-closed-subset-of-a-compact-space-is-compact, thm-compactness-under-continuous-maps, thm-heine-borel-rn, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-monotonicity-of-the-integral]
dependency_roles:
  def-distribution: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-improper-integral-at-a-finite-endpoint: mathematical-premise
  def-mixed-improper-integral: mathematical-premise
  thm-comparison-test-for-improper-integrals: mathematical-premise
  thm-absolute-improper-convergence-implies-convergence: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  lem-closed-subset-of-a-compact-space-is-compact: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Dyatlov, Lecture notes for 18.155 (MIT), Chapter 2 and Chapter 3"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pass
---

## Statement

**Proper-graph branch.** Let $I\subseteq\mathbb R$ be an open interval, let $z:I\to\mathbb R^3$ be a $C^1$ trajectory, put $\gamma(t):=(z(t),t)$ and let $\Omega\subseteq\mathbb R^4$ be open with $\gamma[I]\subseteq\Omega$. Assume the graph map $\gamma:I\to\Omega$ is **proper**: $\gamma^{-1}[K]$ is a compact subset of $I$ for every compact $K\subseteq\Omega$. For $q\in\mathbb R$ and $\psi\in\mathcal D(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]) define

$$\langle\rho,\psi\rangle:=q\int_I\psi(z(t),t)\,dt,\qquad \langle J,\psi\rangle:=q\int_I z'(t)\,\psi(z(t),t)\,dt,$$

the second integral being componentwise, so $J=(J_1,J_2,J_3)$ is a triple of distributions, with components $\langle J_i,\psi\rangle=q\int_Iz_i'(t)\psi(z(t),t)\,dt$. Then $\rho$ and $J$ are distributions on $\Omega$ ([[def-distribution]]) and, with the distributional derivative of [[def-distributional-derivative]],

$$\partial_t\rho+\operatorname{div}J=0\qquad\text{in }\mathcal D'(\Omega).$$

Complex integrals mean $\int w:=\int\operatorname{Re}w+i\int\operatorname{Im}w$, with the same componentwise convention for improper limits. In formulas involving complex tests, $\langle u,w\rangle:=\sum_{j=1}^3u_jw_j$ for $u\in\mathbb R^3$ and $w\in\mathbb C^3$, with no conjugation. This extends the real coordinate pairing; estimates on $J$ mean estimates on each component.

In the proper branch, an integral over $I$ means the proper integral over any compact subinterval containing the pulled-back support, with the integrand zero near its ends; additivity makes this independent of the subinterval. For $I=\varnothing$ both functionals are defined to be zero. Properness is automatic if $\Omega=\mathbb R^3\times I$, and also if $I=\mathbb R$.

**Endpoint branch.** Suppose instead that $I=(a,b)$ is bounded with finite endpoints, that $z$ extends continuously to $[a,b]$, that the absolute improper integral $\int_a^b\lVert z'(t)\rVert_2\,dt$ is finite, and that both endpoint events $(z(a),a)$ and $(z(b),b)$ belong to $\Omega$. Then the same formulas, with the integrals understood as improper integrals over $(a,b)$, define distributions $\rho$ and $J$ on $\Omega$, and

$$\partial_t\rho+\operatorname{div}J=q\,\delta_{(z(a),a)}-q\,\delta_{(z(b),b)},$$

the Dirac distributions being those of [[def-dirac-delta-and-its-derivatives]].

Mere graph containment $\gamma[I]\subseteq\Omega$ does not make the pulled-back tests compactly supported, and it does not by itself give the source-free identity: in the endpoint branch the endpoint terms are exactly as displayed. Each individual endpoint contribution vanishes on a test if and only if $q=0$ or that test vanishes at the corresponding endpoint event. Their total pairing vanishes if and only if $q=0$ or $\psi(z(a),a)=\psi(z(b),b)$. No Maxwell equation, no point self-force and no physical interpretation of $\rho$ or $J$ is asserted; only the distributional identities for the prescribed support are proved.

## Facts & Assumptions

**Given:** An open interval $I\subseteq\mathbb R$; a $C^1$ trajectory $z:I\to\mathbb R^3$; the graph map $\gamma(t)=(z(t),t)$ mapping $I$ into an open set $\Omega\subseteq\mathbb R^4$, proper in the first branch; a real $q$; and, in the endpoint branch, $I=(a,b)$ with continuous extension of $z$ to $[a,b]$, finite $\int_a^b\lVert z'\rVert_2$, and $(z(a),a),(z(b),b)\in\Omega$.

[F1] Test functions and distributions: $\mathcal D(\Omega)=C_c^\infty(\Omega;\mathbb C)$ consists of smooth functions with support compact in $\Omega$; a distribution is a continuous complex-linear functional on it; a complex-linear functional is a distribution if and only if on each $\mathcal D_K=\{\psi\in\mathcal D(\Omega):\operatorname{supp}\psi\subseteq K\}$ it obeys a finite-order estimate $\lvert u(\psi)\rvert\le Cp_m(\psi)$, in particular a bound by $p_0(\psi)=\sup_K\lvert\psi\rvert$ ([[def-test-function-space-d-of-an-open-set]], [[def-distribution]], [[def-fixed-support-test-function-frechet-space]], [[thm-local-finite-order-characterization-of-distributions]]).

[F2] Distributional derivative and Dirac distributions: $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$; $\delta_a(\varphi)=\varphi(a)$ and its derivatives are distributions ([[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).

[F3] Compactness: closed subsets of compact metric spaces are compact, continuous images of compact sets are compact, and compact subsets of $\mathbb R^m$ are closed and bounded; in $\mathbb R$ closed and bounded is compact ([[lem-closed-subset-of-a-compact-space-is-compact]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-is-closed-and-bounded]], [[thm-heine-borel-rn]]).

[F4] $C^1$ calculus: the chain rule $D(\psi\circ\gamma)(t)=D\psi(\gamma(t))\gamma'(t)$ and the algebra of derivatives for sums and products; with the Euclidean coordinates of $\mathbb R^4$ written $(x_1,x_2,x_3,t)$ and the Euclidean inner product $\langle\cdot,\cdot\rangle$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]]).

[F5] All real integral estimates use nonnegativity and the two-sided bound of [[thm-monotonicity-of-the-integral]]. The complex modulus of [[def-complex-conjugate-real-imaginary-part-and-modulus]] satisfies $|a+ib|\le|a|+|b|$ by [[lem-complex-conjugation-and-modulus-laws]]. Applying the real bounds to the real and imaginary parts gives $|\int w|\le2\int|w|$ on proper intervals and, by limits, on each convergent improper piece. Fundamental theorem and integral algebra: if $G$ is continuous on $[u,v]$ and differentiable on $(u,v)$ with Riemann integrable derivative, then $\int_u^vG'=G(v)-G(u)$; the integral is additive over subintervals and linear on integrable functions ([[thm-newton-leibniz-with-interior-derivative]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]]).

[F6] Improper integrals at finite endpoints: one-ended improper integrals as limits of proper truncations, with a mixed interval split finitely and each singular-end piece required to converge separately; the comparison test: if $\lvert f\rvert\le g$ eventually and $\int g$ converges, then $\int f$ converges absolutely, and absolute convergence implies convergence with $\lvert\int f\rvert\le\int\lvert f\rvert$ on a one-ended interval ([[def-improper-integral-at-a-finite-endpoint]], [[def-mixed-improper-integral]], [[thm-comparison-test-for-improper-integrals]], [[thm-absolute-improper-convergence-implies-convergence]]).

## Proof

**Proof technique:** direct; write the pairing of the divergence as minus the integral of the derivative of the pulled-back test along the trajectory, and evaluate that integral by the fundamental theorem, first with compact support and then with the truncated improper integral in the endpoint branch.

1.1 If $I=\varnothing$, the stated functionals and all their derivatives are zero, proving the proper branch. Otherwise assume $I$ nonempty. The graph map $\gamma(t)=(z(t),t)$ is $C^1$ on $I$ and injective, with values in $\Omega$; for $\psi\in\mathcal D(\Omega)$ the pullback $\varphi:=\psi\circ\gamma:I\to\mathbb C$ is $C^1$, and $\operatorname{supp}\varphi\subseteq\gamma^{-1}[\operatorname{supp}\psi]$: if $\varphi(t)\ne0$ then $\gamma(t)\in\operatorname{supp}\psi$. In the proper branch $\gamma^{-1}[\operatorname{supp}\psi]$ is compact, so $\operatorname{supp}\varphi$ is a closed subset of a compact set, hence compact in $I$; thus $\varphi\in C_c^1(I)$ and $\varphi'$ is continuous. [given, F1, F3, F4, algebra]

2.1 In the proper branch, $\rho$ is a distribution. Let $K\subseteq\Omega$ be compact and $\psi\in\mathcal D_K$, so that $\operatorname{supp}\varphi\subseteq C_K:=\gamma^{-1}[K]$, a compact subset of $I$; if $C_K=\varnothing$ then $\varphi=0$. Otherwise $u:=\min C_K$ and $v:=\max C_K$ lie in $I$ with $C_K\subseteq[u,v]\subseteq I$, and $\lvert\varphi\rvert\le p_0(\psi)$ on $[u,v]$ because $\psi$ vanishes off $K$ and $p_0(\psi)=\sup_K\lvert\psi\rvert$; hence $\lvert\langle\rho,\psi\rangle\rvert\le2\lvert q\rvert\int_u^v\lvert\varphi\rvert\,dt\le2\lvert q\rvert(v-u)p_0(\psi)$ by [F5], a finite-order estimate of order zero, so $\rho$ is a distribution by [F1]. [step 1.1, F1, F3, F5, algebra]

2.2 The automatic properness claims hold. If $\Omega=\mathbb R^3\times I$ and $K\subseteq\Omega$ is compact, then the time projection $\mathrm{pr}_t[K]$ is a compact subset of $I$ by [F3] and $\gamma^{-1}[K]$ is closed in $I$ (preimage of the closed set $K$ under the continuous map $\gamma$) with $\gamma^{-1}[K]\subseteq\mathrm{pr}_t[K]$; being closed in $I$ and contained in $\mathrm{pr}_t[K]$, it is closed in the subspace $\mathrm{pr}_t[K]$, hence compact as a closed subset of a compact metric space by [F3]. If $I=\mathbb R$, then $\gamma^{-1}[K]$ is closed and contained in the bounded set $\mathrm{pr}_t[K]$, hence compact in $\mathbb R$ by [F3]. [step 1.1, F3, algebra]

3.1 In the proper branch, $J$ is a distribution: with the notation of step 2.1, $\lvert z'\rvert$ is continuous on $[u,v]$, hence bounded there by $M_K<\infty$, and $|\langle J_i,\psi\rangle|\le2\lvert q\rvert\int_u^v\lVert z'(t)\rVert_2\lvert\varphi(t)\rvert\,dt\le2\lvert q\rvert M_K(v-u)p_0(\psi)$, again a finite-order estimate of order zero. [step 1.1, F1, F3, F5, algebra]

3.2 Endpoint branch, well-definedness: let $I=(a,b)$, with $z$ extending continuously to $[a,b]$, $\int_a^b\lVert z'\rVert_2<\infty$ and both endpoint events in $\Omega$. Then $\varphi=\psi\circ\gamma$ extends continuously to $[a,b]$ with $\lvert\varphi\rvert\le p_0(\psi)$ and $|z_i'\varphi|\le p_0(\psi)\lVert z'\rVert_2$ on $(a,b)$; by the comparison test [F6] the improper integrals $\int_a^b\varphi$ and $\int_a^b z'\varphi$ converge absolutely (the first against the constant $p_0(\psi)$, the second against $p_0(\psi)\lVert z'\rVert_2$), so $\langle\rho,\psi\rangle:=q\int_a^b\varphi$ and $\langle J,\psi\rangle:=q\int_a^bz'\varphi$ are well-defined finite values; they are linear in $\psi$ by linearity of the truncated integrals and passage to the limit [F5, F6], and for $\psi\in\mathcal D_K$ they obey $\lvert\langle\rho,\psi\rangle\rvert\le2\lvert q\rvert p_0(\psi)(b-a)$ and $|\langle J_i,\psi\rangle|\le2\lvert q\rvert p_0(\psi)\int_a^b\lVert z'\rVert_2$, so they are distributions by [F1]. [step 1.1, step 2.1, F1, F5, F6, algebra]

4.1 For $\psi\in\mathcal D(\Omega)$ in the proper branch, the pairing of the divergence is $\langle\partial_t\rho+\operatorname{div}J,\psi\rangle=-\langle\rho,\partial_t\psi\rangle-\langle J,\nabla\psi\rangle=-q\int_I\bigl(\partial_t\psi(\gamma(t))+\langle z'(t),\nabla\psi(\gamma(t))\rangle\bigr)dt$, the components of $\nabla\psi$ being the spatial partial derivatives and $\operatorname{div}J$ the sum of the coordinate distributional derivatives of the components of $J$ by [F2]. [step 2.1, step 3.1, F2, F4, algebra]

5.1 By the chain rule [F4], $\frac{d}{dt}\varphi(t)=D\psi(\gamma(t))\gamma'(t)=\partial_t\psi(\gamma(t))+\langle\nabla\psi(\gamma(t)),z'(t)\rangle$, since $\gamma'=(z',1)$; hence the integrand of step 4.1 is exactly $\varphi'$. [step 4.1, F4, algebra]

6.1 Since $\varphi\in C_c^1(I)$ by step 1.1, there are $u<v$ in $I$ with $\operatorname{supp}\varphi\subseteq[u,v]$ and $\varphi(u)=\varphi(v)=0$; by [F5] applied to the subinterval and by additivity of the integral over subintervals, $\int_I\varphi'=\int_u^v\varphi'=\varphi(v)-\varphi(u)=0$. Therefore $\langle\partial_t\rho+\operatorname{div}J,\psi\rangle=0$ for every $\psi\in\mathcal D(\Omega)$, which is the identity $\partial_t\rho+\operatorname{div}J=0$ of distributions. [step 4.1, step 5.1, F5, algebra]

7.1 Endpoint branch, identity: applying [F2] and the chain rule as in steps 4.1 and 5.1 gives $\langle\partial_t\rho+\operatorname{div}J,\psi\rangle=-q\int_a^b\varphi'(t)\,dt$, where $\varphi'$ is continuous on $(a,b)$ and $\lvert\varphi'\rvert\le C(1+\lVert z'\rVert_2)$ for a constant $C$ depending on the fixed test, so the improper integral converges absolutely by the comparison test [F6]; for $0<\varepsilon<(b-a)/2$ the proper fundamental theorem [F5] gives $\int_{a+\varepsilon}^{b-\varepsilon}\varphi'=\varphi(b-\varepsilon)-\varphi(a+\varepsilon)$, and the mixed improper integral is the limit of these truncations as $\varepsilon\downarrow0$ [F6]; continuity of $\varphi$ at the endpoints gives $\varphi(b-\varepsilon)-\varphi(a+\varepsilon)\to\varphi(b)-\varphi(a)=\psi(z(b),b)-\psi(z(a),a)$. Hence $\langle\partial_t\rho+\operatorname{div}J,\psi\rangle=q\psi(z(a),a)-q\psi(z(b),b)=\langle q\delta_{(z(a),a)}-q\delta_{(z(b),b)},\psi\rangle$ for every $\psi\in\mathcal D(\Omega)$ by [F2], which is the endpoint identity. If $q=0$, each endpoint contribution and their sum vanish for every test; if $q\ne0$, division by $q$ shows that an individual contribution vanishes exactly when its endpoint test value is zero, and the sum vanishes exactly when the two endpoint test values are equal. [step 5.1, step 6.1, step 3.2, F2, F5, F6, algebra] ∎

## Remarks

- **The endpoint terms are real.** For $q\ne0$, $I=(0,1)$, $z\equiv0$ and $\Omega=\mathbb R^4$ the trajectory is constant, $\int_0^1\lVert z'\rVert_2=0$ and the identity reads $\partial_t\rho+\operatorname{div}J=q\delta_{(0,0)}-q\delta_{(0,1)}$: the static point charge on a finite time window is not source-free as a spacetime distribution, and the two endpoint contributions have opposite signs. The claimed free identity for this configuration would be false.
- **Where properness is used.** In the proper branch properness makes every pulled-back test compactly supported, which is what allows the fundamental theorem without endpoint terms and gives the order-zero estimates. Neither graph containment alone nor compactness of the ambient test alone replaces this hypothesis, and no physical existence of the sources is asserted.
