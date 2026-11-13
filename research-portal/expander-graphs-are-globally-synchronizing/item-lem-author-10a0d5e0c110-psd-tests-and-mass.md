---
title: "Critical PSD phases: quadratic tests and small-alpha mass bound"
status: published
research_item: lem-author-10a0d5e0c110-psd-tests-and-mass
dependency_level: 5
---

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)
- [math:def-definite-and-indefinite-hessian-quadratic-forms](https://alphabetamath.cc/item/def-definite-and-indefinite-hessian-quadratic-forms)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)


## Statement

Let $G$ have $n>0$ vertices, symmetric binary adjacency $A$, with possible loops and degree $D_{yy}=\sum_xA_{xy}$. Let $d>0$, $0\le a<1/32$ and $\|A-(d/n)J\|\le ad$. Let $\theta$ be a critical point of $E=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ with positive-semidefinite angular Hessian. Rotate phases and choose representatives in $(-\pi,\pi]$ so that $\rho=n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative. Put $H(t)=\sin^2t$ for $|t|\le\pi/2$, and $H(t)=1$ otherwise. Then $r_y=\sum_xA_{xy}\cos(\theta_x-\theta_y)\ge0$, $\sum_xA_{xy}e^{i\theta_x}=r_ye^{i\theta_y}$, $\rho^2\ge1/2-2a>7/16$, and $\sum_xH(\theta_x)\le(16/7)a^2n<5a^2n/2$ if $a>0$.

## Facts & Assumptions

[F1] The graph, energy, phase coordinates and elementary trigonometric conventions are supplied by [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), [def-expander-sync-energy](item-def-expander-sync-energy), [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus), [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities). All additional notation used below is defined in the Statement or Proof; no local-minimum hypothesis is assumed.

[F2] Apply [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point) to the energy in an open angular chart from [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus): a critical point has all first angular partial derivatives zero, and its angular Hessian $B$ is the matrix of second angular partial derivatives. Positive semidefinite means $h^TBh\ge0$ for every real vector $h$, as in [math:def-definite-and-indefinite-hessian-quadratic-forms](https://alphabetamath.cc/item/def-definite-and-indefinite-hessian-quadratic-forms). The energy is twice continuously differentiable by the finite-sum and trigonometric derivative formulas in [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus). Angular-chart transitions are translations, so these derivative conditions do not depend on the chosen lift.

[F3] On $\mathbb C^V$ use the standard norm $\|v\|^2=\sum_x|v_x|^2$ and its induced operator norm from [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space). Cauchy–Schwarz gives $|u^*v|\le\|u\|\|v\|$ in this space ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)). In particular, for a matrix $M$, scaling a nonzero vector to unit norm gives $\|Mv\|\le\|M\|\|v\|$, and hence $|v^*Mv|\le\|M\|\|v\|^2$; both inequalities also hold for $v=0$.

[F4] The quarter-turn value $\cos(\pi/2)=0$ holds for the real trigonometric functions by [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusions for critical points with positive-semidefinite Hessian.

1.1 Differentiating the displayed finite sum in an angular chart gives $\partial_yE=\sum_xA_{xy}\sin(\theta_y-\theta_x)$ and, for real $h$, $h^TBh=\frac12\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)(h_x-h_y)^2$. The latter formula gives a real symmetric matrix $B$. For $z=u+iv$ with real $u,v$, symmetry cancels the cross terms, so $z^*Bz=u^TBu+v^TBv\ge0$ and $z^*Bz=\frac12\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)|z_x-z_y|^2$. This justifies complex-vector testing from the assumed real positive semidefiniteness. Criticality makes the imaginary part of $e^{-i\theta_y}(Ae^{i\theta})_y$ zero. Testing $B$ at a real coordinate vector gives $\sum_{x\ne y}A_{xy}\cos(\theta_x-\theta_y)\ge0$; adding the nonnegative loop entry proves $r_y\ge0$. The same complex number has real part $r_y$, proving the stated phasor identity. [F1, F2, algebra]

2.1 Write $f_x=e^{i\theta_x}$, $g_x=e^{2i\theta_x}$, $\rho_2=n^{-1}\sum_xg_x$, and $M=A-(d/n)J$. The unit-modulus phasors give $\|f\|^2=\|g\|^2=\|\mathbf1\|^2=n$, and $v^*Jv=|\sum_xv_x|^2$. By [F3] and $\|M\|\le ad$, $|f^*Af-dn\rho^2|\le adn$, $g^*Ag\ge dn|\rho_2|^2-adn$ and $\mathbf1^TA\mathbf1\ge dn-adn$. Symmetry of $A$ gives $f^*Af=\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)$ and the analogous identity for $g$. Testing the Hessian with $z=f$ using step 1.1 and $|f_x-f_y|^2=2(1-\cos(\theta_x-\theta_y))$ gives $\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)\ge\sum_{x,y}A_{xy}\cos^2(\theta_x-\theta_y)$. The phasor addition formula yields $\cos^2u=(1+\cos2u)/2$, so the right side equals $(\mathbf1^TA\mathbf1+g^*Ag)/2$. Thus $dn\rho^2+adn\ge dn(1+|\rho_2|^2)/2-adn$. Divide by $dn>0$ and discard $|\rho_2|^2/2\ge0$ to obtain $\rho^2\ge1/2-2a>7/16$. [F1, F3, step 1.1, algebra]

3.1 Set $W=Mf$. The phasor identity from step 1.1 gives $e^{-i\theta_y}W_y=r_y-d\rho e^{-i\theta_y}$. Its imaginary part is $d\rho\sin\theta_y$. If $|\theta_y|\ge\pi/2$, then $|\theta_y|\in[\pi/2,\pi]$ by the chosen representatives. The phasor identities give $\cos(-u)=\cos u$ for real $u$, so the decrease of cosine on $[0,\pi]$ and [F4] imply $\cos\theta_y=\cos|\theta_y|\le\cos(\pi/2)=0$. Thus its real part is at least $-d\rho\cos\theta_y\ge0$, since $r_y\ge0$. Squaring the real and imaginary parts in this region gives $|W_y|^2\ge(d\rho)^2(\cos^2\theta_y+\sin^2\theta_y)=(d\rho)^2$. For $|\theta_y|\le\pi/2$, the imaginary part alone gives $|W_y|^2\ge(d\rho)^2\sin^2\theta_y$. Consequently $|W_y|^2\ge(d\rho)^2H(\theta_y)$ in both regions. By [F3], $\|W\|^2\le\|M\|^2\|f\|^2\le a^2d^2n$. Summing the coordinate bounds and using $\rho^2>7/16$ from step 2.1 gives $\sum_xH(\theta_x)\le a^2n/\rho^2\le(16/7)a^2n$. For $a>0$, $16/7<5/2$ gives the final strict bound. No step uses the point being a local minimum. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎
