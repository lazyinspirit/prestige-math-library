---
id: pthm-r2-massive-iia-d6-o6-flux-tadpole
kind: physics-theorem
title: Massive IIA D6/O6 tadpole on a compact Calabi–Yau threefold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 7
proof_strategy: direct
axiom_strength: ZF + full AC inherited from the transverse-current pairing supplier.
deps:
- def-r2-compact-de-rham-current-of-a-source-cycle
- lem-r2-source-current-pairs-with-transverse-dual-cycle
- post-r2-massive-iia-f0-h3-flux-quantization
- post-type-iia-d6-o6-localized-f2-current-and-cover-charge
- def-r2-current-compatible-intersection-number
- lem-r2-poincare-dual-test-form-for-three-cycle
- lem-r2-space-filling-source-current-reduction
- def-gts-compact-calabiyau-manifold-conventions
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-source-current-pairs-with-transverse-dual-cycle: mathematical-premise
  post-r2-massive-iia-f0-h3-flux-quantization: physical-assumption
  post-type-iia-d6-o6-localized-f2-current-and-cover-charge: physical-assumption
  def-r2-current-compatible-intersection-number: mathematical-premise
  lem-r2-poincare-dual-test-form-for-three-cycle: mathematical-premise
  lem-r2-space-filling-source-current-reduction: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: Conditional integrated charge identity for a compact localized massive
  IIA F2 Bianchi current in the Graña normalization. It is not an existence, supersymmetry,
  moduli-stabilization, or localized-solution theorem.
empirical_premises: []
sources:
  references:
  - title: 'Mariana Graña, Flux compactifications in string theory: a comprehensive
      review'
    url: https://arxiv.org/pdf/hep-th/0509003v3
    locator: §4.2, equations (4.18)–(4.21), especially the localized RR Bianchi identity
      and the D6/O6 integrated tadpole.
  - title: Joseph Polchinski, Shyamoli Chaudhuri, and Clifford V. Johnson, Notes on
      D-Branes
    url: https://arxiv.org/pdf/hep-th/9602052v2
    locator: Lecture III, §3.3, equation (3.25), O-minus charge ratio and fixed-plane
      count.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $E$ be an oriented smooth four-dimensional external spacetime patch, choose $\chi\in\Omega_c^4(E)$ with $\int_E\chi=1$, and let $X$ be a smooth compact oriented Calabi–Yau threefold without boundary in the broad convention of [[def-gts-compact-calabiyau-manifold-conventions]]: a connected compact Kähler complex threefold with a specified holomorphic isomorphism $K_X\cong\mathcal O_X$. Use the chosen orientation on $X$, with product spacetime $M:=E\times X$ oriented external factor first. Let finitely many D6/O6 sources wrap product worldvolumes $E\times\widetilde W_a$, where each $\widetilde W_a\subseteq X$ is a compact oriented embedded three-manifold without boundary and the product orientations are used. Put $S:=\bigcup_a\widetilde W_a$. Let $\Sigma_3\subseteq X$ be a compact oriented embedded three-manifold without boundary transverse to every $\widetilde W_a$.
For each source, take $q_a=+1$ for a D6 and $q_a=-2$ for an O6-minus plane in the cited source convention.

Write $\pi_X:M\to X$ for projection and use $\pi_{X*}$ for integration over the oriented four-dimensional $E$ fibre, with the convention of [[lem-r2-space-filling-source-current-reduction]].

Use the natural-unit convention $\hbar=c=1$ and $\ell_s:=\sqrt{\alpha'}$. For a smooth manifold $N$ of dimension $n$, a degree-$k$ de Rham current is a continuous real-linear functional on compactly supported smooth $(n-k)$-forms, with differential $\langle dT,\zeta\rangle=(-1)^{k+1}\langle T,d\zeta\rangle$; a smooth form $\alpha_k$ determines $T_{\alpha_k}(\zeta)=\int_N\alpha_k\wedge\zeta$. Let $T_2$ be an internal degree-two de Rham current on $X$, represented by a smooth two-form on $X\setminus S$, with no smoothness imposed on $S$. Its external-independent extension $F_2$ to $M$ is the degree-two current defined by $\langle F_2,\zeta_8\rangle:=\langle T_2,\pi_{X*}\zeta_8\rangle$ for $\zeta_8\in\Omega_c^8(M)$, where $\pi_{X*}$ is integration over the oriented four-dimensional fibre $E$. Let $F_0\in\mathbb R$ be constant and let $H_3\in\Omega^3(X)$ be a smooth closed internal form, pulled back to $M$; the condition $d_XH_3=0$ means there is no NS5 magnetic current in this model. Thus $F_0$ and the smooth coordinate components of $F_2,H_3$ have units of inverse length, and an $H_3$ period has units of length squared.

Assume the localized Bianchi identity holds distributionally in the Graña source convention,
$$dF_2-F_0H_3=2\kappa_0^2\mu_6J_3=2\pi\ell_sJ_3,\qquad 2\kappa_0^2=(2\pi)^7\alpha'^4,\qquad \mu_6=(2\pi)^{-6}\alpha'^{-7/2}.$$
Here $H_3$ in the equation denotes its smooth pullback current $T_{\pi_X^*H_3}$. The source current is the test-first current from [[post-type-iia-d6-o6-localized-f2-current-and-cover-charge]]: for every compactly supported test seven-form $\zeta_7$, $\int_M\zeta_7\wedge\delta_3(E\times\widetilde W_a)=\int_{E\times\widetilde W_a}\zeta_7$, and $J_3=\sum_aq_a\delta_3(E\times\widetilde W_a)$. Precisely, in the mathematical de Rham-current functional convention $T_{\alpha}(\zeta)=\int_M\alpha\wedge\zeta$, the source equation means
$$-\langle dF_2-F_0T_{H_3},\zeta_7\rangle=2\pi\ell_s\sum_aq_a\int_{E\times\widetilde W_a}\zeta_7.$$
The minus sign is $(-1)^{3\cdot7}$ from converting the source's test-first wedge to the functional-current pairing; its reduction is proved by [[lem-r2-space-filling-source-current-reduction]]. The current coefficient $2\pi\ell_s$ has units of length and the localized source has coordinate density of units length$^{-3}$, so both sides have coordinate units of length$^{-2}$.

For each pair define the source-first signed intersection
$$\widetilde W_a\mathbin{\cdot_{\rm src}}\Sigma_3:=\sum_{x\in\widetilde W_a\cap\Sigma_3}\sigma_x(\widetilde W_a,\Sigma_3),$$
where $\sigma_x=+1$ when a positive source tangent basis followed by a positive test-cycle tangent basis orients $T_xX$. Define
$$N_{D6}(\Sigma_3)-2N_{O6^-}(\Sigma_3):=\sum_aq_a\bigl(\widetilde W_a\mathbin{\cdot_{\rm src}}\Sigma_3\bigr).$$

Under the directly adopted degree-three current equation of [[post-type-iia-d6-o6-localized-f2-current-and-cover-charge]], reduction on the external patch and pairing with the compact dual cycle gives
$$N_{D6}(\Sigma_3)-2N_{O6^-}(\Sigma_3)+\frac{F_0}{2\pi\ell_s}\int_{\Sigma_3}H_3=0.$$
The sign conversion from the source's test-first wedge current to the mathematical de Rham current convention is proved in [[lem-r2-space-filling-source-current-reduction]]; it is essential because the current-compatible regularized intersection of two three-cycles is $-1$ times the source-first sign.

For the separate $T^3/\mathbb Z_2$ orientifold covering convention cited by Polchinski, Chaudhuri, and Johnson, there are eight O6-minus fixed planes and their total charge is $-16$ D6 units. This count applies only to that stated cover. Under the separate free-period postulate [[post-r2-massive-iia-f0-h3-flux-quantization]], the flux term is an integer product; the current identity itself is a real charge equation without that postulate.
## Statement references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[lem-r2-poincare-dual-test-form-for-three-cycle]]

[[lem-r2-space-filling-source-current-reduction]]

[[lem-r2-source-current-pairs-with-transverse-dual-cycle]]

## Facts & Assumptions

**Given:** Full AC; the compact oriented geometry, external patch, and normalized test form in the statement; the degree-current convention of [[def-r2-compact-de-rham-current-of-a-source-cycle]]; and the following exact physical inputs.

[A1] The Statement explicitly supplies constant $F_0$ and smooth closed $H_3$. Only the degree-three localized current equation in [A2] is used, adopted directly from Graña §4.2, Eq. (4.18); no assertion about $F_0+F_2+F_4$ under the full twisted differential is required.

[A2] Current carrier [[post-type-iia-d6-o6-localized-f2-current-and-cover-charge]] has no Step 1 readiness record. Its inspected statement has the localized coefficient $2\pi\sqrt{\alpha'}$, charges $q_{D6}=+1$ and $q_{O6^-}=-2$, and the $-16$ count only in the cited cover. It defines the ten-dimensional source form by test-first pairing $\int\omega_7\wedge\delta_3(W)=\int_W\omega_7$; [[lem-r2-space-filling-source-current-reduction]] proves how that interface reduces to the internal current convention used here. The direct localized-current carrier readiness remains missing.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines the internal degree-$k$ current differential by $\langle dT,\eta\rangle=(-1)^{k+1}\langle T,d\eta\rangle$ and the source integration current by $\langle\delta_C,\eta\rangle=\int_C\eta$. The Statement extends this convention to compactly supported tests on the external product; $F_2$ is a current, not a smooth form across $S$.

[F2] [[lem-r2-poincare-dual-test-form-for-three-cycle]] supplies a closed test form $\eta_{\Sigma_3}$ with $\langle T_{H_3},\eta_{\Sigma_3}\rangle=\int_{\Sigma_3}H_3$ and $\langle\delta_{\widetilde W_a},\eta_{\Sigma_3}\rangle=-\widetilde W_a\cdot_{\rm src}\Sigma_3$.

[F3] [[post-r2-massive-iia-f0-h3-flux-quantization]] adopts $m:=(2\pi\ell_s)F_0\in\mathbb Z$ and integer normalized periods $(2\pi\ell_s)^{-2}\int_{\Sigma_3}H_3$ for free classes in its smooth integral singular homology convention. The fundamental cycle of the embedded $\Sigma_3$ is such a smooth singular class; if it is torsion, closedness and Stokes imply its real period is zero, hence also integral. This input is used only for the integer corollary.

[F4] [[def-r2-current-compatible-intersection-number]] and [[lem-r2-source-current-pairs-with-transverse-dual-cycle]] define and calculate the current-compatible sign $(-1)^9\sigma=-\sigma$ for complementary three-cycles; this is distinct from the usual source-first orientation sign.

[F5] [[lem-r2-space-filling-source-current-reduction]] proves that the R4 test-first source convention reduces to $-\delta_{\widetilde W_a}$ in the mathematical current convention. Therefore [F2] gives the physical source pairing $-\langle\delta_{\widetilde W_a},\eta_{\Sigma_3}\rangle=+\widetilde W_a\cdot_{\rm src}\Sigma_3$.

[A3] The eight-plane count and total $-16$ are the source-specific covering-space report of Graña and Polchinski–Chaudhuri–Johnson, not a universal quotient rule.

[F6] [[def-gts-compact-calabiyau-manifold-conventions]] fixes the broad Calabi–Yau convention in the Statement. The charge calculation below uses its underlying compact smooth real six-manifold and the chosen orientation; it requires neither a Ricci-flat metric nor exact $SU(3)$ holonomy.

## Proof

**Given:** The data and conventions above, with the broad Calabi–Yau terminology of [F6]. Write $c:=2\pi\ell_s$ and use the closed test form $\eta_{\Sigma_3}$ of [F2].

1.1 By [F5], the test-first source equation [A2] becomes the internal mathematical current identity $dT_2-F_0T_{H_3}=-c\sum_aq_a\delta_{\widetilde W_a}$ on product tests, where $c=2\pi\ell_s$. Pair it with the closed form $\eta_{\Sigma_3}$. The exact term vanishes because [F1] gives
$$\langle dT_2,\eta_{\Sigma_3}\rangle=(-1)^3\langle T_2,d\eta_{\Sigma_3}\rangle=0.$$
The flux term is $\langle T_{H_3},\eta_{\Sigma_3}\rangle=\int_{\Sigma_3}H_3$ by [F2], while the source term is
$$-c\sum_aq_a\langle\delta_{\widetilde W_a},\eta_{\Sigma_3}\rangle =c\sum_aq_a(\widetilde W_a\cdot_{\rm src}\Sigma_3) =c(N_{D6}-2N_{O6^-})$$
by [F2], [F4], and [F5]: [F4] fixes the mathematical current-compatible sign $-\sigma$, and the extra minus in [F5] converts it to the physical source-first sign $+\sigma$. Thus $-F_0\int_{\Sigma_3}H_3=c(N_{D6}-2N_{O6^-})$, which after division by $c>0$ is the displayed integrated identity. [A1, A2, F1, F2, F4, F5, given, algebra]

2.1 Put $m=(2\pi\ell_s)F_0\in\mathbb Z$ and $h=(2\pi\ell_s)^{-2}\int_{\Sigma_3}H_3\in\mathbb Z$ by [F3], with $h=0$ in the torsion case. Then
$$\frac{F_0}{2\pi\ell_s}\int_{\Sigma_3}H_3=mh\in\mathbb Z.$$
No integrality is used in step 1.1, so the real charge identity remains conditional only on the Bianchi and current inputs if quantization is not imposed. [F3, step 1.1, algebra]

3.1 In the stated cover of [A2], the number of fixed planes is $2^{9-6}=8$ and each O6-minus charge is $-2^{6-5}=-2$ by the PCJ source convention. Therefore the total is $8(-2)=-16$. This multiplication does not convert to a quotient charge for any other orientifold. [A2, A3, algebra] ∎
