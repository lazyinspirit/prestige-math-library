---
id: pthm-r2-iib-d3-tadpole-from-f5-bianchi
kind: physics-theorem
title: "Compact Type IIB D3 tadpole from the sourced five-form Bianchi identity"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-r2-iib-flux-background-conventions
  - lem-r2-exact-top-current-has-zero-total-charge
  - post-r2-iib-sourced-fiveform-bianchi
  - def-dp-brane-source-maxwell-page-charge
  - pthm-type-ii-dp-brane-rr-current-and-charge
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  lem-r2-exact-top-current-has-zero-total-charge: mathematical-premise
  post-r2-iib-sourced-fiveform-bianchi: physical-assumption
  def-dp-brane-source-maxwell-page-charge: formulation-prerequisite
  pthm-type-ii-dp-brane-rr-current-and-charge: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional compact-current integration of the adopted GKP Type IIB D3-sourced five-form Bianchi identity. It is a Maxwell-flux tadpole identity on the selected cover/quotient, not a local solution, supersymmetry, stability, or quantization theorem."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1 Eqs. (2.23)–(2.25), PDF pp. 7–9; self-dual five-form source normalization footnote to Eq. (2.23); §4.1 O3 model, PDF p. 20."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2.2 Eq. (2.5), PDF pp. 5–6; §4.2 Eqs. (4.18), (4.21)–(4.22), PDF pp. 25–29."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.1 Eq. (4.23), PDF pp. 25–26; §4.4 Eqs. (4.76)–(4.78), PDF pp. 34–35."
    - title: "Shamit Kachru, Michael B. Schulz, Prasanta K. Tripathy, and Sandip P. Trivedi, New Supersymmetric String Compactifications, arXiv:hep-th/0211182v1"
      url: "https://arxiv.org/pdf/hep-th/0211182v1"
      locator: "§2.1 Eqs. (2.1)–(2.3) and footnote 2, PDF pp. 3–4; the T6/Z2 cover tadpole and even cover-period condition when exotic O3 planes are excluded."
    - title: "Michael B. Schulz, Calabi-Yau Duals of Torus Orientifolds, arXiv:hep-th/0412270v4"
      url: "https://arxiv.org/pdf/hep-th/0412270v4"
      locator: "§2.1 Eqs. (2.2)–(2.6), PDF pp. 3–5; cover tadpole, D3 images, and O3 cover-density charge QO3=-1/2."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X$ be the compact oriented boundaryless six-manifold used consistently for flux and localized-source integrals. Assume the sourced five-form Bianchi identity in the GKP Einstein-frame Type IIB convention is an equality of degree-six currents. Let $T_{\mathrm{flux}}$ be the specified degree-six current representing $H_3\wedge F_3$, and define $\int_XH_3\wedge F_3:=\langle T_{\mathrm{flux}},1\rangle$; when the field strengths are smooth on $X$, this is their ordinary top-form integral. Also assume $\langle\rho_3^{\mathrm{loc}},1\rangle=Q_3^{\mathrm{loc}}$. Then
$$\frac{1}{2\kappa_0^2\mu_3}\int_XH_3\wedge F_3+Q_3^{\mathrm{loc}}=0.$$
Using $2\kappa_0^2=(2\pi)^7\alpha'^4$ and $\mu_3=(2\pi)^{-3}\alpha'^{-2}$, define the dimensionless Maxwell flux charge
$$Q_{\mathrm{flux}}=\frac{1}{(2\pi)^4\alpha'^2}\int_XH_3\wedge F_3;$$
then $Q_{\mathrm{flux}}+Q_3^{\mathrm{loc}}=0$. This is not a Page-charge equation. The relation does not require flux quantization; it is an integer $N_{\mathrm{flux}}$ only in a separate model that also assumes the free-period quantization postulate and an integral-cohomology pairing that identifies the normalized de Rham pairing with an integer cup-product evaluation on the oriented fundamental class. The local O3-minus source has charge $-1/4$ per plane in the quotient charge convention. In the cited $T^6/\mathbb Z_2$ calculation on the $T^6$ cover, the cover source density assigns coefficient $-1/2$ to each of the 64 O3 fixed-point currents; $M$ independent mobile D3-branes contribute $2M$ on the cover, including their images. For this cited cover specialization, also assume that there is no localized flux on the O3 planes, as explicitly required in Schulz §2.1 after Eq. (2.3) and before Eq. (2.4). This is a separate source-sector premise, not a consequence of the absence of induced D3 charge. With this premise and no additional induced D3 charge, write $N_{\mathrm{flux}}=Q_{\mathrm{flux}}$ for the cover integer; the cover tadpole is $N_{\mathrm{flux}}+2M=32$, equivalently $\frac12N_{\mathrm{flux}}+M=16$. When exotic O3 planes are excluded, the cited $T^6/\mathbb Z_2$ model also requires even normalized $F_3$ and $H_3$ periods on the cover. These are source- and lattice-normalization inputs for that specialization, not consequences of the generic current integration above. Every induced D3 charge from a wrapped D7 curvature or worldvolume field is included only when its source action and normalization are part of the selected model. The conclusion is conditional on the adopted sourced Bianchi identity and does not establish existence, stability, or supersymmetry of a solution.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[def-r2-iib-flux-background-conventions]]

[[lem-r2-exact-top-current-has-zero-total-charge]]

[[post-r2-iib-sourced-fiveform-bianchi]]

[[def-dp-brane-source-maxwell-page-charge]]

[[pthm-type-ii-dp-brane-rr-current-and-charge]]

[Giddings–Kachru–Polchinski, §2.1 and §4.1](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §§2.2 and 4.2](https://arxiv.org/pdf/hep-th/0509003v3)

[Van Riet–Zoccarato, §§4.1 and 4.4](https://arxiv.org/pdf/2305.01722)

[Kachru, Schulz, Tripathy, and Trivedi, §2.1](https://arxiv.org/pdf/hep-th/0211182v1)

[Schulz, §2.1](https://arxiv.org/pdf/hep-th/0412270v4)

## Facts & Assumptions

**Given:** A compact oriented boundaryless $X$, its declared cover or quotient convention, the degree-six sourced Bianchi identity, and the same normalization for flux periods and source currents.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]]: a degree-$k$ current acts continuously on smooth $(6-k)$-forms; a smooth form $\alpha$ induces $T_\alpha(\eta)=\int_X\alpha\wedge\eta$; for a point $p$, $\langle\delta_p,f\rangle=f(p)$.

[F2] [[def-r2-iib-flux-background-conventions]]: $X$ is compact, oriented, smooth and boundaryless; $\alpha'$ has dimension length squared; $F_3$ is the raw RR field and the source and period integrals use the same cover/quotient convention.

[F3] [[lem-r2-exact-top-current-has-zero-total-charge]]: for a degree-five current $T$ on this closed six-manifold, $\langle dT,1\rangle=0$.

[A1] [[post-r2-iib-sourced-fiveform-bianchi]]: $d_X\widetilde F_5^{\mathrm{int}}=T_{\mathrm{flux}}+2\kappa_0^2\mu_3\rho_3^{\mathrm{loc}}$ as degree-six currents, where $T_{\mathrm{flux}}$ is the specified current representing $H_3\wedge F_3$ and $\int_XH_3\wedge F_3=\langle T_{\mathrm{flux}},1\rangle$; also $\langle\rho_3^{\mathrm{loc}},1\rangle=Q_3^{\mathrm{loc}}$.

[F4] [[def-dp-brane-source-maxwell-page-charge]]: the localized D3 source current is $J_6=\mu_3\delta_6(W)$; Maxwell charge is gauge-invariant RR flux, while Page charge is a separate potential-corrected local quantity.

[F5] [[pthm-type-ii-dp-brane-rr-current-and-charge]]: WZ variation fixes the unit D3 source current, while the self-dual bulk Bianchi coefficient remains a separately adopted physical input.

[A2] For the cited $T^6/\mathbb Z_2$ cover specialization, assume no localized flux on the O3 planes: Schulz §2.1 states this explicitly after Eq. (2.3), before the even cover-period condition (2.4). This condition is retained independently of the assumption of no extra induced D3 charge. In the GKP quotient charge convention an O3-minus plane contributes $-1/4$. For the cited $T^6/\mathbb Z_2$ cover source density, the corresponding coefficient is $-1/2$ at each fixed-point current, as in Schulz §2.1 Eq. (2.6); this source normalization is physical input, not a deduction from the current-pairing theorem. With no exotic O3 planes, Kachru et al. §2.1 footnote 2 require the normalized cover periods to be even.

## Proof

1.1 The right side of [A1] is a degree-six current on $X$. Since its left side is the differential of a degree-five current, [F3] gives $\langle d_X\widetilde F_5^{\mathrm{int}},1\rangle=0$. By [A1], pairing the Bianchi identity with $1$ gives $\langle T_{\mathrm{flux}},1\rangle+2\kappa_0^2\mu_3Q_3^{\mathrm{loc}}=0$. By the stated pairing convention this is $$\int_XH_3\wedge F_3+2\kappa_0^2\mu_3Q_3^{\mathrm{loc}}=0.$$ In the smooth sector [F1] identifies $T_{\mathrm{flux}}$ with the current of the ordinary wedge form. The source coefficient remains the explicit physical input [A1]; [F4]–[F5] confirm its D3 source meaning without deriving its self-dual normalization from WZ variation. [F1, F3, A1, F4, F5, given, algebra]

2.1 The stated constants satisfy $2\kappa_0^2\mu_3=((2\pi)^7\alpha'^4)((2\pi)^{-3}\alpha'^{-2})=(2\pi)^4\alpha'^2>0$. Dividing the equality from step 1.1 by this positive constant yields $$\frac{1}{(2\pi)^4\alpha'^2}\int_XH_3\wedge F_3+Q_3^{\mathrm{loc}}=0,$$ which is exactly $Q_{\mathrm{flux}}+Q_3^{\mathrm{loc}}=0$ by the stated definition. [F2, step 1.1, algebra]

3.1 For the specialized cover setup, use the additional no-localized-O3-flux premise [A2], the adopted cover coefficients $-1/2$ at 64 fixed points, $M$ mobile D3-branes and their $M$ images, and the stipulated absence of extra induced D3 charge. The localized cover total is $Q_3^{\mathrm{loc}}=2M-64/2=2M-32$. Substitution into the generic identity in 2.1 gives $N_{\mathrm{flux}}+2M=32$ and, after division by two, $\frac12N_{\mathrm{flux}}+M=16$. The no-localized-flux and even-period restrictions are source-specific physical/lattice inputs; neither follows from integrating the current equation, nor is localized discrete flux inferred to vanish from a smooth de Rham representative alone. No step of the generic current identity uses this additional specialization premise. [A2, given, step 2.1, algebra] ∎

## Remarks

No flux-integrality input is used in the proof. The conditional integer pairing clause in the Statement is separate from this real-current Stokes deduction. The O3 charge input is used only to interpret the source sum in the stated cover convention. The transitive orientifold-definition carrier and the current R4 self-dual source chain remain unresolved; this item's readiness stays escalated until those current prerequisites are resolved.

