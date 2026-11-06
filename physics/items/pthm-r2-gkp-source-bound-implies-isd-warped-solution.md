---
id: pthm-r2-gkp-source-bound-implies-isd-warped-solution
kind: physics-theorem
title: GKP source bound yields ISD flux and the warp/five-form relation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
deps:
  - def-r2-iib-flux-background-conventions
  - post-r2-iib-sourced-fiveform-bianchi
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-fiveform-self-duality-constraint
  - pthm-type-ii-dp-brane-rr-current-and-charge
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - lem-r2-exact-top-current-has-zero-total-charge
dependency_roles:
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  post-r2-iib-sourced-fiveform-bianchi: physical-assumption
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  pthm-type-ii-dp-brane-rr-current-and-charge: physical-result
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-exact-top-current-has-zero-total-charge: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional GKP two-derivative Type IIB Einstein-frame solution with compact boundaryless internal space, self-dual five-form, finite source currents, and the explicit GKP localized-source inequality. It does not prove the inequality for every source or extend to higher-derivative, loop, boundary, or noncompact settings. The sourced F5/R4 interface is used only in the exact algebraically crosswalked conventions recorded by the current GKP Bianchi supplier."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.2, equations (2.26)–(2.32), PDF pp. 9–10; source inequality, sourced five-form equation, and positive-square identity. §2.2.3, PDF p. 11; ISD flux can include a (0,3) component, so the general solution need not be supersymmetric."
    - title: Shamit Kachru, Michael Schulz, and Sandip Trivedi, Moduli Stabilization from Fluxes in a Simple IIB Orientifold, arXiv:hep-th/0201028v2
      url: https://arxiv.org/pdf/hep-th/0201028v2
      locator: §2.1, equations (2.4), (2.8)–(2.9), footnote 3, printed pp. 3–4 (PDF pp. 4–5); explicit GKP transverse-star/wedge sign and positive ISD charge.
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.3, equations (4.31)–(4.34), PDF pp. 28–29; independent source-bound and ISD derivation with its stated 4D scope."
---

## Statement

Use the GKP Einstein-frame conventions of the source-free model. Let $X$ be a nonempty compact oriented smooth six-manifold without boundary with a smooth Riemannian metric $\widetilde g$, and let $\Sigma\subset X$ be a closed source set such that $X_{\rm reg}=X\setminus\Sigma$ is dense and nonempty. The external metric is four-dimensional Minkowski. On $X_{\rm reg}$, $A,\alpha_4,C_0,\phi$ are smooth real dimensionless functions; $\tau=C_0+i e^{-\phi}$ has $\operatorname{Im}\tau>0$; and $F_3,H_3$ are real smooth internal three-form field strengths with component units length$^{-1}$. Set $G_3=F_3-\tau H_3$. Let $\widetilde *$ be the ordinary Hodge star of $\widetilde g$ and the internal integration orientation, defined by $u\wedge\widetilde *v=\langle u,v\rangle_{\widetilde g}\,d\operatorname{vol}_{\widetilde g}$ with the component pairing $u_{m_1\ldots m_k}v^{m_1\ldots m_k}/k!$. On complex three-forms define the GKP transverse dual by $\star_6=-\widetilde *$, extended complex-linearly. Here ISD means $\star_6G_3=iG_3$, equivalently $\widetilde *G_3=-iG_3$. This distinguishes the physical component convention from the mathematical wedge star. Use length-valued coordinates, dimensionless metric components, $\alpha'$ of dimension length$^2$, $\kappa_0^2$ of dimension length$^8$, and the Einstein-frame coupling $\kappa_E=\kappa_0$. In the five-form ansatz, write the source definition’s scalar profile $\alpha$ as $\alpha_4$, and let $\widetilde F_5^{\rm int}$ denote the internal five-form component. Use $ds_E^2=e^{2A}\eta_{\mu\nu}dx^\mu dx^\nu+e^{-2A}\widetilde g_{mn}dy^m dy^n$ and $\widetilde F_5=(1+\star_{10})[d\alpha_4\wedge dx^0\wedge dx^1\wedge dx^2\wedge dx^3]$. The ten-dimensional orientation is $-\mathrm{vol}_4\wedge d\operatorname{vol}_{\widetilde g}$, and $\star_{10}$ is the ordinary wedge-defined Lorentzian star in that orientation; impose $\star_{10}\widetilde F_5=\widetilde F_5$. Then $\widetilde F_5^{\rm int}=e^{-8A}\widetilde *d\alpha_4$. Take the source's component normalization for $\widetilde F_5$, with component units length$^{-1}$. Let $\rho_3^{\rm loc}$ be a finite degree-six source current with component units length$^{-6}$ and normalization $\langle\rho_3^{\rm loc},1\rangle=Q_3^{\rm loc}$; let the D3 tension and charge obey $T_3=\mu_3=(2\pi)^{-3}\alpha'^{-2}$, of units length$^{-4}$; and let $\mathcal S=(T_m{}^m-T_\mu{}^\mu)^{\rm loc}$ denote the corresponding finite signed stress-trace measure, with traces taken in the full ten-dimensional metric and then densitized by the physical internal volume $d\operatorname{vol}_{g_{6,E}}=e^{-6A}d\operatorname{vol}_{\widetilde g}$. More precisely, if $s_{\rm loc}$ denotes the scalar stress trace in a regularized source model, its measure is $s_{\rm loc}e^{-6A}d\operatorname{vol}_{\widetilde g}$; the weak source model supplies this measure at the core. This definition does not multiply an unspecified singular scalar by $e^{-6A}$. Likewise, $\rho_3^{\rm loc}$ is the charge top-form current, while the physical-volume scalar density in a regularization is $r_{\rm loc}$ with $\rho_3^{\rm loc}=r_{\rm loc}e^{-6A}d\operatorname{vol}_{\widetilde g}$. Thus a positive unit D3 has $\mathcal S=4T_3\rho_3^{\rm loc}$. Scalar stress traces have units length$^{-10}$, scalar charge density length$^{-6}$; the corresponding measures carry the internal six-volume. Assume the source inequality
$$\frac14\mathcal S\ \ge\ T_3\rho_3^{\rm loc}$$
as an inequality of finite Radon measures, and denote its nonnegative remainder by $\mathcal R$. Write $w=e^{2A}$ on $X_{\rm reg}$; assume it extends continuously to $X$ and is bounded below by some $c>0$ on $\operatorname{supp}\mathcal R$. Put $b=w^4=e^{8A}$; every weighted source term below, in particular $b\mathcal S$, $b\rho_3^{\rm loc}$ and $b\mathcal R$, is assumed to be a well-defined finite Radon measure. Put $\Phi_-=e^{4A}-\alpha_4$; assume $\Phi_-\in L^1(X)$ and its distributional Laplacian volume current is exact, $(\widetilde\nabla^2\Phi_-)d\operatorname{vol}_{\widetilde g}=dT_{\Phi_-}$ for a degree-five current $T_{\Phi_-}$ whose restriction to $X_{\rm reg}$ is the classical divergence current. Adopt the GKP source-coupled five-form Bianchi identity
$$d_X\widetilde F_5^{\rm int}=H_3\wedge F_3+2\kappa_0^2\mu_3\rho_3^{\rm loc},\qquad 2\kappa_0^2=(2\pi)^7\alpha'^4,\quad \mu_3=(2\pi)^{-3}\alpha'^{-2},$$
with $\mu_3=(2\pi)^{-3}\alpha'^{-2}$ of dimension length$^{-4}$ and $\widetilde F_5$ in the source's component normalization. Assume the GKP source-coupled external Einstein equation. In unwarped contractions and as an equality of degree-six currents it is
$$\bigl(\widetilde\nabla^2e^{4A}\bigr)d\operatorname{vol}_{\widetilde g}=\left[\frac{b}{12\operatorname{Im}\tau}G_{mnp}\overline G^{\,mnp}+e^{-4A}\left(|d\alpha_4|_{\widetilde g}^2+|d e^{4A}|_{\widetilde g}^2\right)\right]d\operatorname{vol}_{\widetilde g}+\frac{\kappa_0^2}{2}b\mathcal S.$$
Here all flux and gradient indices are raised by $\widetilde g$. This is GKP equation (2.15): its untilded full-metric three-form contraction contributes $e^{6A}$ and its scalar-gradient contraction contributes $e^{2A}$; its source scalar is converted to the explicitly densitized measure above. The Bianchi identity and self-dual ansatz give
$$\bigl(\widetilde\nabla^2\alpha_4\bigr)d\operatorname{vol}_{\widetilde g}=\left[\frac{i b}{12\operatorname{Im}\tau}G_{mnp}(\star_6\overline G_3)^{mnp}+2e^{-4A}\widetilde\nabla\alpha_4\cdot\widetilde\nabla e^{4A}\right]d\operatorname{vol}_{\widetilde g}+2\kappa_0^2 bT_3\rho_3^{\rm loc}.$$
This is the same full-metric-to-unwarped and scalar-to-current conversion of GKP equation (2.29). Assume every regular flux product and divergence identity used in this Bianchi reduction has the specified weak extension on $X$, the displayed equations and their subtraction are valid as finite degree-six currents, and no unmodeled source-core or boundary term occurs. In particular, the regular product-rule reduction of $d(e^{-8A}\widetilde *d\alpha_4)$ is assumed to extend weakly without an additional core current; no product of unspecified singular distributions is taken. In particular, the positive flux and gradient square terms in their difference define finite nonnegative measures.

For a complex three-form $U$ define the chosen local component norm $\|U\|_c^2=\frac14U_{mnp}\overline U^{\,mnp}$; this is a specified local normalization, not an attribution of a norm definition to GKP, with indices raised by $\widetilde g$. The external Einstein equation and the displayed $\alpha_4$ equation imply
$$\bigl(\widetilde\nabla^2(e^{4A}-\alpha_4)\bigr)d\operatorname{vol}_{\widetilde g}=\left[\frac{b}{6\operatorname{Im}\tau}\|iG_3-\star_6G_3\|_c^2+e^{-4A}|d(e^{4A}-\alpha_4)|_{\widetilde g}^2\right]d\operatorname{vol}_{\widetilde g}+2\kappa_0^2b\mathcal R.$$
Normalize the additive constant in $\alpha_4$ separately on each connected component of $X_{\rm reg}$ by choosing a reference point there and setting $\Phi_-=0$ at that point. Under these assumptions,
$$\star_6G_3=iG_3,\qquad \alpha_4=e^{4A}, \qquad \frac14\mathcal S=T_3\rho_3^{\rm loc}.$$
This is a conditional ISD result; it asserts no general supersymmetry conclusion.

## Statement references

[Giddings, Kachru, and Polchinski, §§2.2–2.2.3](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §4.3](https://arxiv.org/pdf/hep-th/0509003v3)

[Kachru, Schulz, and Trivedi, §2.1, equation (2.9), footnote 3](https://arxiv.org/pdf/hep-th/0201028v2)

## Facts & Assumptions

**Given:** The current-valued field equations and Bianchi law, the finite source measures, the positive weight and regularity hypotheses, and the compact oriented $X$ in the Statement.

[A1] [[def-r2-iib-flux-background-conventions]]: in its explicit GKP-to-R4 dictionary, ten-dimensional orientation is minus the external/internal product, the Lorentzian star remains wedge-defined, and the physical transverse three-form dual is minus the mathematical internal wedge star; these are the conventions restated above. The negative-wedge three-form sign is explicitly documented in Kachru–Schulz–Trivedi equation (2.9), footnote 3, in the conventions of GKP. Its other convention data are: the current definition fixes $G_3=F_3-\tau H_3$, Einstein/string frames, orientation, internal metric, warped ansatz, and self-dual five-form profile. Its broader scope is an O3/O7 Calabi–Yau orientifold; this theorem uses only the explicitly restated GKP conventions and makes no orientifold-specific conclusion. Its current Step 1 record remains escalated on upstream inputs.

[A2] [[post-r2-iib-sourced-fiveform-bianchi]]: the actual postulate is $d_X\widetilde F_5^{\rm int}=H_3\wedge F_3+2\kappa_0^2\mu_3\rho_3^{\rm loc}$ as an internal current equation, with the stated charge normalization and source scope. The exact interface matches the equation used here; its current Step 1 record remains escalated on the source/self-duality chain.

[A3] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the current R4 carrier is the source-free leading two-derivative Type IIB pseudoaction in string frame; it is varied before imposing the separate five-form constraint. Its current Step 1 record remains escalated.

[A4] [[post-type-iib-fiveform-self-duality-constraint]]: the five-form self-duality condition is imposed separately after varying the undoubled pseudoaction. Its current Step 1 record remains escalated.

[A5] [[pthm-type-ii-dp-brane-rr-current-and-charge]]: its actual theorem proves the Wess–Zumino current for an oriented zero-flux D3 and states the separately adopted R4 sourced Bianchi. In the R4 pseudoaction's notation the raw RR form is $G_3^{\rm R4}=dC_2$ and $\widetilde G_3^{\rm R4}=G_3^{\rm R4}-C_0H_3$; the GKP raw form is $F_3^{\rm GKP}=dC_2$, while the GKP complex flux is $G_3^{\rm GKP}=F_3^{\rm GKP}-\tau H_3$. Thus the raw-field crosswalk is $G_3^{\rm R4}=F_3^{\rm GKP}$ and $H_3\wedge\widetilde G_3^{\rm R4}=H_3\wedge F_3^{\rm GKP}$ because $H_3\wedge H_3=0$. This conditional interface does not derive the source coefficient from Wess–Zumino variation. The R4 sourced law has $-2\kappa_0^2\mu_3\delta_6(W)$ in its wedge-Hodge/current convention. A space-filling worldvolume oriented by $\mathrm{vol}_4$ has $\delta_6(W)=-\rho_3^{\rm loc}$ internally for the selected opposite-product ambient orientation, giving the internal plus-source sign. The full positive WZ coefficient is unchanged; the half-electric self-dual bulk prescription remains adopted physical input. The supplier [[post-r2-iib-sourced-fiveform-bianchi]] distinguishes these names and orientations explicitly; the equation used in this theorem is written with raw $F_3^{\rm GKP}$ as in [A2], while $G_3$ in the flux-norm and ISD formulas denotes the complex GKP flux.

[A6] Giddings–Kachru–Polchinski, §§2.1–2.2 equations (2.15), (2.23), (2.26), (2.29): the source-coupled external Einstein trace and source inequality are adopted physical inputs. The five-form-potential reduction is reconstructed below with the exact star, density and warp-factor dictionary. Its current-valued extension, weighted-source integrability and absence of an additional core term remain explicit model hypotheses.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]]: a degree-six current on compact oriented $X$ acts on smooth functions, and its total charge is its pairing with $1$.

[F2] [[lem-r2-exact-top-current-has-zero-total-charge]]: for every degree-five current $T$ on compact boundaryless $X$, $\langle dT,1\rangle=0$.
## Proof

1.1 Put $u=e^{4A}$ and $t=\operatorname{Im}\tau$. Write $\widetilde *$ for the internal mathematical wedge star. The source-free Lorentzian supplier applied with the chosen ambient orientation gives $\widetilde F_5^{\rm int}=e^{-8A}\widetilde *d\alpha_4$ as in [A1]. Thus on $X_{\rm reg}$,
$$d_X\widetilde F_5^{\rm int}=e^{-8A}\left(\widetilde\nabla^2\alpha_4-8\widetilde\nabla A\cdot\widetilde\nabla\alpha_4\right)d\operatorname{vol}_{\widetilde g}.$$
Since $F_3,H_3$ are real and odd-degree, direct expansion gives $G_3\wedge\overline G_3=-2itH_3\wedge F_3$. Also $\widetilde *^2=-1$ on three-forms, so the wedge pairing gives $G_3\wedge\overline G_3=-G_{mnp}(\widetilde *\overline G_3)^{mnp}d\operatorname{vol}_{\widetilde g}/3!=G_{mnp}(\star_6\overline G_3)^{mnp}d\operatorname{vol}_{\widetilde g}/3!$. Consequently
$$H_3\wedge F_3=\frac{i}{12t}G_{mnp}(\star_6\overline G_3)^{mnp}d\operatorname{vol}_{\widetilde g}.$$
Insert these identities in [A2] and multiply by $b=e^{8A}$. Since $8\,dA\cdot d\alpha_4=2e^{-4A}du\cdot d\alpha_4$, this is exactly the displayed unwarped $\alpha_4$ equation, including $+2\kappa_0^2bT_3\rho_3^{\rm loc}$. The prescribed weak extension and no-core-term hypotheses extend this reduction to $X$; it is not inferred across a singular source from its regular-locus validity alone. The R4-to-internal current sign is [A5], and the self-dual source coefficient remains the adopted input of [A2], not a WZ-only deduction. [A1, A2, A4, A5, A6, given, algebra]

1.2 By hypothesis, $(\widetilde\nabla^2\Phi_-)d\operatorname{vol}_{\widetilde g}=dT_{\Phi_-}$ for a degree-five current. Pairing with $1$ and applying [F2] gives $\langle(\widetilde\nabla^2\Phi_-)d\operatorname{vol}_{\widetilde g},1\rangle=0$. [F1, F2, given, algebra]

2.1 Subtract the equation just derived from the stated Einstein trace. In GKP equation (2.15), $g_E^{mn}=e^{2A}\widetilde g^{mn}$ changes the flux coefficient $e^{2A}$ to $e^{8A}$ and the gradient coefficient $e^{-6A}$ to $e^{-4A}$. Its source term $e^{2A}s_{\rm loc}d\operatorname{vol}_{\widetilde g}$ equals $e^{8A}\mathcal S$ by the specified physical-volume densitization; the same conversion is used for the charge density in the Bianchi law. The flux difference is $b[G_{mnp}\overline G^{\,mnp}-iG_{mnp}(\star_6\overline G_3)^{mnp}]/(12t)$. In an oriented $\widetilde g$-orthonormal coframe the mathematical wedge star is a signed complementary permutation, so its square on three-forms is $-1$ and its transpose is its inverse. Its negative $\star_6$ is likewise an isometry, has square $-1$ and is skew-adjoint. Expanding therefore gives
$$(iG_3-\star_6G_3)_{mnp}\overline{(iG_3-\star_6G_3)}^{\,mnp}=2\left[G_{mnp}\overline G^{\,mnp}-iG_{mnp}(\star_6\overline G_3)^{mnp}\right].$$
With the specified $1/4$ component norm the flux difference is $b\|iG_3-\star_6G_3\|_c^2/(6t)$. The gradients combine as $e^{-4A}(|d\alpha_4|^2+|du|^2-2\,d\alpha_4\cdot du)=e^{-4A}|d(u-\alpha_4)|^2$, and the source difference is $2\kappa_0^2b(\mathcal S/4-T_3\rho_3^{\rm loc})=2\kappa_0^2b\mathcal R$. The weak hypotheses give the displayed finite-current positive-square identity on all of $X$. [A2, A3, A5, A6, step 1.1, given, algebra]

3.1 Pair the identity in step 2.1 with $1$. The left side is zero by step 1.2. Each regular flux and gradient density is nonnegative, and $b\mathcal R$ is a nonnegative finite measure. Hence every term has zero integral. Since $b=e^{8A}>0$ and $\operatorname{Im}\tau>0$ on $X_{\rm reg}$, continuity of the regular fields gives $iG_3-\star_6G_3=0$ and $d\Phi_-=0$ there. Also $b\mathcal R=0$ and $b=w^4\ge c^4>0$ on $\operatorname{supp}\mathcal R$, so $\mathcal R=0$ as a measure. [A1, A2, F1, step 2.1, step 1.2, algebra]

4.1 Since $d\Phi_-=0$ on each connected component of $X_{\rm reg}$, $\Phi_-$ is constant there. The stated reference-point normalization sets each constant to zero. Since $\star_6^2=-1$ on three-forms, $iG_3=\star_6G_3$ is equivalent to $\star_6G_3=iG_3$. The proof concludes ISD flux and the stated relation between the five-form profile and warp factor on the regular locus only; it does not impose the additional complex-structure or primitivity conditions required for supersymmetry. [A1, step 3.1, algebra] ∎

## Remarks

GKP §2.2.3 separately discusses its Calabi–Yau type and primitivity conventions: in those source conventions its ISD sector can include a nonzero $(0,3)$ component and can break supersymmetry. This is retained as a source-specific observation, not identified with a type eigenspace for the local complex structure without an additional complex-basis/orientation translation. That source observation explains the absence of a general supersymmetry conclusion here; this proof uses neither a type decomposition nor a claim that a particular Hodge type has the same name after an unexamined orientation/basis translation. The full compact current claim, finite-source qualifications and explicit source-core hypotheses are essential.
