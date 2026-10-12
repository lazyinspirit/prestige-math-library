---
id: thm-gr-density-divergence-and-finite-chain-flux
kind: theorem
title: "Divergence, Stokes flux balance and the non-null face formula for a Lorentzian current"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, lem-gr-metric-divergence-and-density-formula, def-gr-smooth-lorentzian-objects, def-oriented-smooth-manifold-and-oriented-chart, def-interior-product-of-a-form-by-a-vector-field, def-interior-product-on-alternating-covectors, def-exterior-derivative-by-the-invariant-vector-field-formula, prop-local-coordinate-expression-for-a-differential-form, def-wedge-product-of-differential-forms, def-pullback-of-a-differential-form, def-integral-of-a-form-over-a-smooth-singular-simplex, thm-stokes-theorem-for-smooth-singular-chains, def-lorentz-orthogonality-and-orthogonal-complement, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-metric-volume-form-patching-and-face-normal: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-interior-product-on-alternating-covectors: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  prop-local-coordinate-expression-for-a-differential-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 8.7 'Submanifolds and Stokes' theorem': Stokes' theorem on an oriented manifold, printed pp. 109-110 (PDF pp. 110-111), with the divergence-theorem application in section 9.2, printed p. 115 (PDF p. 116)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5 with figures 40-41: charge conservation in curved spacetime, the flux through B and Q(Sigma_2)=Q(Sigma_1) when no current flows out of the region, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: conservation of the energy-momentum tensor and the flux interpretation, printed pp. 117-118 (PDF pp. 124-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with an
orientation, metric-selected connection $\nabla$, metric volume form
$\mathrm{vol}_g$ and current flux $\Phi_J$ as in
[[def-gr-metric-volume-form-and-current-flux]], and let $J$ be a smooth vector
field on $M$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]). Write
$\nabla_aJ^a$ for the divergence of $J$.

**(a) Exterior derivative of the current form.** As smooth $4$-forms on $M$,

$$d\bigl(\iota_J\mathrm{vol}_g\bigr)=\bigl(\nabla_aJ^a\bigr)\mathrm{vol}_g .$$

**(b) Flux balance (Stokes).** For every finite smooth singular $4$-chain $C$
of $M$ — a finite formal real sum of smooth singular $4$-simplices, the
library convention `def-smooth-singular-chain-and-cochain-complexes` restated
in [[def-gr-metric-volume-form-and-current-flux]] clause (b) — and the flux
$\Phi_J$ of the induced boundary $3$-chain
([[def-integral-of-a-form-over-a-smooth-singular-simplex]],
[[thm-stokes-theorem-for-smooth-singular-chains]]),

$$\Phi_J(\partial C)=\int_C\bigl(\nabla_aJ^a\bigr)\mathrm{vol}_g .$$

Consequently, if $\partial C=\Sigma_2-\Sigma_1+B$ for smooth singular $3$-chains
$\Sigma_1,\Sigma_2,B$, then

$$\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)+\int_C\bigl(\nabla_aJ^a\bigr)\mathrm{vol}_g .$$

In particular, if $\nabla_aJ^a=0$ on $C$ then
$\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)$, and if moreover
$\Phi_J(B)=0$ then $\Phi_J(\Sigma_2)=\Phi_J(\Sigma_1)$: equal charges need a
vanishing side flux, not merely a divergence-free current.

**(c) Non-null face formula.** Let $\sigma$ be a smooth singular $3$-simplex —
a map $\sigma:\Delta^3\to M$ admitting a smooth extension to a neighbourhood
of the standard $3$-simplex inside its affine plane, the convention restated
in [[def-gr-metric-volume-form-and-current-flux]] clause (b) — that is
non-null at a parameter point $t$
([[def-gr-metric-volume-form-and-current-flux]] clause (c)), with
$v_i:=\sigma_*\partial_i|_t$ spanning the hyperplane $H$ and with the unit
normal $\nu^{*}$ adapted to the ordered basis $(v_1,v_2,v_3)$ as in
[[lem-gr-metric-volume-form-patching-and-face-normal]] clause (c); write
$\varepsilon:=g_{\sigma(t)}(\nu^{*},\nu^{*})\in\{-1,1\}$. Then

$$\sigma^{*}\bigl(\iota_J\mathrm{vol}_g\bigr)(\partial_1,\partial_2,\partial_3)\big|_{t} =\varepsilon\,g_{\sigma(t)}\bigl(J,\nu^{*}\bigr)\sqrt{\bigl|\det\bigl(g_{\sigma(t)}(v_i,v_j)\bigr)\bigr|} .$$

Equivalently, the tangent vector $J$ is decomposed as
$J=\varepsilon g(J,\nu^{*})\nu^{*}+w'$ with $w'\in H$, and only the normal
component contributes to the flux through the face.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with an orientation and metric-selected connection $\nabla$, the metric volume form $\mathrm{vol}_g$ and flux $\Phi_J$ of [[def-gr-metric-volume-form-and-current-flux]], a smooth vector field $J$, and a smooth singular $3$-simplex $\sigma$ with parameter point $t$.

[L1] $(M,g,N)$ has a metric-selected connection $\nabla$ with chart components $\Gamma^{a}{}_{bc}$ and divergence formula $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ in every chart, where $w=\sqrt{|\det g_{ab}|}$ ([[lem-gr-metric-divergence-and-density-formula]]).

[L2] In an oriented chart, $\mathrm{vol}_g=w\,dx^0\wedge\cdots\wedge dx^3$, and $\iota_J\mathrm{vol}_g=\sum_a(-1)^awJ^a\,dx^0\wedge\cdots\widehat{dx^a}\cdots\wedge dx^3$, because $(\iota_J\omega)(X_1,\dots)= \omega(J,X_1,\dots)$ ([[def-gr-metric-volume-form-and-current-flux]] clause (a), [[def-interior-product-of-a-form-by-a-vector-field]], [[def-interior-product-on-alternating-covectors]], [[prop-local-coordinate-expression-for-a-differential-form]]).

[L3] The exterior derivative of a $k$-form is the alternating sum of coordinate derivatives; for a top form $f\,dx^0\wedge\cdots\wedge dx^3$ it is $\partial_af\,dx^a\wedge dx^0\wedge\cdots\wedge dx^3 = \bigl(\sum_a\partial_af\bigr)dx^0\wedge\cdots\wedge dx^3$ ([[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[def-wedge-product-of-differential-forms]]).

[L4] Stokes' theorem for smooth singular chains: for a finite smooth singular $k$-chain $c$ — a finite formal real sum of smooth singular $k$-simplices with the signed face differential, the convention of the library definition `def-smooth-singular-chain-and-cochain-complexes` — and a smooth $(k-1)$-form $\omega$, $\int_c d\omega=\int_{\partial c}\omega$; integration over chains is additive in the chain ([[thm-stokes-theorem-for-smooth-singular-chains]], [[def-integral-of-a-form-over-a-smooth-singular-simplex]], [[def-gr-metric-volume-form-and-current-flux]] clause (b)).

[L5] For a smooth singular simplex $\sigma$ — a smooth map $\Delta^k\to M$ admitting a smooth extension to a neighbourhood of $\Delta^k$ in its affine plane, the convention restated in [[def-gr-metric-volume-form-and-current-flux]] clause (b) and the library definition `def-smooth-singular-simplex` — and a form $\omega$, the pullback $\sigma^{*}\omega$ is smooth and $(\sigma^{*}\omega)(\partial_1,\dots,\partial_k)|_t=\omega_{\sigma(t)}(\sigma_*\partial_1|_t,\dots,\sigma_*\partial_k|_t)$ ([[def-pullback-of-a-differential-form]]).

[L6] For a three-dimensional nondegenerate subspace $H\subseteq T_pM$ with ordered basis $v_1,v_2,v_3$: the adapted unit normal $\nu^{*}$ satisfies $H=(\nu^{*})^{\perp}$, $g(\nu^{*},\nu^{*})=\varepsilon\in\{-1,1\}$ and $\mathrm{vol}_{g,p}(\nu^{*},v_1,v_2,v_3)=\sqrt{|\det(g(v_i,v_j))|}$ ([[lem-gr-metric-volume-form-patching-and-face-normal]] clause (c), [[def-lorentz-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct; compute the derivative of the current form in an oriented chart, apply Stokes' theorem to chains, and evaluate the pullback on a non-null face by decomposing the current into normal and tangential parts.

1.1 (Chart computation.) In an oriented chart use [L2] and [L3]: $d(\iota_J\mathrm{vol}_g)=\sum_a\partial_a(wJ^a)\,dx^0\wedge\cdots\wedge dx^3=\bigl(\sum_a\partial_a(wJ^a)\bigr)\mathrm{vol}_g/w$, and [L1] rewrites $\sum_a\partial_a(wJ^a)=w\,\nabla_aJ^a$. Hence $d(\iota_J\mathrm{vol}_g)=(\nabla_aJ^a)\mathrm{vol}_g$ in the chart. Since both sides are globally defined smooth $4$-forms and every point lies in an oriented chart, the identity holds on all of $M$; this proves (a). [L1, L2, L3, algebra]

1.2 (Face decomposition.) At the parameter point $t$ put $p:=\sigma(t)$ and let $\nu^{*}$ be the adapted unit normal of [L6], so that $H=(\nu^{*})^{\perp}$ and $\varepsilon=g_p(\nu^{*},\nu^{*})$. Define $\alpha:=\varepsilon\,g_p(J,\nu^{*})$ and $w':=J-\alpha\nu^{*}$. Then $g_p(w',\nu^{*})=g_p(J,\nu^{*})-\alpha\varepsilon=0$, so $w'\in(\nu^{*})^{\perp}=H$. [L6, algebra]

2.1 (Stokes flux balance.) Let $C$ be a smooth singular $4$-chain and apply [L4] with $k=4$ and $\omega=\iota_J\mathrm{vol}_g$: $\int_{\partial C}\iota_J\mathrm{vol}_g=\int_C d(\iota_J\mathrm{vol}_g)=\int_C(\nabla_aJ^a)\mathrm{vol}_g$ by step 1.1. By the definition of $\Phi_J$ as the integral over a chain this is $\Phi_J(\partial C)=\int_C(\nabla_aJ^a)\mathrm{vol}_g$. [step 1.1, L4, given]

3.1 (Charge balance.) If $\partial C=\Sigma_2-\Sigma_1+B$, additivity of the chain integral gives $\Phi_J(\partial C)=\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)+\Phi_J(B)$, so step 2.1 yields the displayed balance. If the integrand $\nabla_aJ^a$ vanishes on $C$, the integral is zero and $\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)$; if in addition $\Phi_J(B)=0$, then $\Phi_J(\Sigma_2)=\Phi_J(\Sigma_1)$. [step 2.1, L4, algebra]

4.1 (Flux through the face.) By [L5] and the definition of the interior product, $\sigma^{*}(\iota_J\mathrm{vol}_g)(\partial_1,\partial_2,\partial_3)|_t=\mathrm{vol}_{g,p}(J,v_1,v_2,v_3)$. Splitting $J=\alpha\nu^{*}+w'$ and using multilinearity, $\mathrm{vol}_{g,p}(J,v_1,v_2,v_3)=\alpha\,\mathrm{vol}_{g,p}(\nu^{*},v_1,v_2,v_3)+\mathrm{vol}_{g,p}(w',v_1,v_2,v_3)$. The second term vanishes because $w'\in H$ is a linear combination of $v_1,v_2,v_3$ and the $4$-form is alternating ([[def-interior-product-on-alternating-covectors]]). By [L6] the first term is $\alpha\sqrt{|\det(g_p(v_i,v_j))|}=\varepsilon g_p(J,\nu^{*})\sqrt{|\det(g_p(v_i,v_j))|}$, which is the displayed formula of (c) and completes the proof. [step 1.2, L5, L6, algebra] ∎

## Remarks

- **The side flux is a genuine hypothesis.** The balance in (b) is an identity, not an inequality: a divergence-free current can have nonzero flux through a bounded region's side wall, and the charges of the two slices differ by exactly that side flux. The compact-support case (B absent or of zero flux) is the setting used for conserved charges.

- **Regularity.** All chains are finite smooth singular chains; no arbitrary rough or infinite region is integrated, no boundary at infinity is treated and no convergence of an exhaustion is asserted. Finiteness of the chain makes every sum involved finite.
