---
id: def-r2-iib-flux-background-conventions
kind: definition
title: "Type IIB Calabi–Yau orientifold flux background conventions"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - def-cmp-type-iib-o3-o7-orientifold-data
  - lem-cmp-o3o7-geometric-parity-consequences
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-supergravity-conventions-and-normalizations
  - post-type-iib-fiveform-self-duality-constraint
  - post-type-iib-two-derivative-supergravity-pseudoaction
dependency_roles:
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  lem-cmp-o3o7-geometric-parity-consequences: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Convention host for the classical two-derivative GKP Type IIB O3/O7 Calabi–Yau orientifold sector. The chosen cover or quotient, source support, flux lattice, and self-dual five-form normalization are application data; this definition asserts no global solution."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1, Eq. (2.2), Eqs. (2.6)–(2.9), (2.23)–(2.25), PDF pp. 4–9; §4.1 O3 models, PDF p. 20."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2.2 Eqs. (2.4)–(2.6), PDF pp. 5–6; §4.2 Eqs. (4.18)–(4.22), PDF pp. 25–29."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.1, Eqs. (4.7)–(4.23), PDF pp. 24–26; §4.4, Eqs. (4.76)–(4.81) and Exercise 4.14, PDF pp. 34–35."
    - title: Shamit Kachru, Michael Schulz, and Sandip Trivedi, Moduli Stabilization from Fluxes in a Simple IIB Orientifold, arXiv:hep-th/0201028v2
      url: https://arxiv.org/pdf/hep-th/0201028v2
      locator: §2.1, equations (2.4), (2.8)–(2.9), footnote 3, printed pp. 3–4 (PDF pp. 4–5); explicit negative-wedge transverse-star convention attributed there to GKP.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use natural units $\hbar=c=1$ and $\alpha'>0$ with dimension length squared. Let $M^{3,1}=\mathbb R^4$ with global coordinates $x^\mu$, $\mu=0,\ldots,3$, and metric $\eta_{\mu\nu}=\operatorname{diag}(-,+,+,+)$; set $M^{10}=M^{3,1}\times X$. Let $X$ be a compact, oriented, smooth six-manifold without boundary, explicitly identified in each use as the orientifold covering space or as a smooth quotient. If the chosen quotient has singular fixed loci, perform current and period integrals on the smooth cover, or supply an orbifold-current framework before integrating on the quotient. Let $S\subseteq X$ be the union of localized source supports. Classical fields and metrics are assumed smooth on $M^{3,1}\times(X\setminus S)$; no smoothness through $S$ is assumed. Localized equations across $S$ are stated in a current or weak formulation with each term's extension specified. The broad Calabi–Yau convention is the one in the earlier mathematical definition: connected, compact, Kähler, and with holomorphically trivial canonical bundle; exact $SU(3)$ holonomy is not included unless separately assumed. Orient $M^{10}$ by $-\mathrm{vol}_{4}\wedge\mathrm{vol}_{X}$, with $\mathrm{vol}_{4}=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. This choice is part of the GKP-to-R4 dictionary: the Lorentzian Hodge operator and every ten-dimensional form integral use this same orientation. The internal integration orientation is unchanged.

The precise O3/O7 sector datum is a worldsheet-parity quotient by $O=(-1)^{F_L}\Omega_p\sigma^*$ on a smooth connected compact Calabi–Yau threefold $X$. Here $I$ is its complex structure, $g(u,v)=J(u,Iv)$ its Kähler metric, $\Omega_p$ the worldsheet-parity operator that reverses worldsheet orientation and exchanges left- and right-moving sectors, $F_L$ the left-moving spacetime fermion number, and $\sigma^*$ pullback by a holomorphic isometric involution $\sigma:X\to X$ satisfying $\sigma^2=\operatorname{id}$, $\sigma^*J=J$, and $\sigma^*\Omega=-\Omega$. The broad Calabi–Yau and chosen $(J,\Omega)$ data are those of Type IIB Calabi–Yau orientifold data with O3/O7 fixed loci and Compact Calabi–Yau manifold conventions. The orientifold-data definition uses $\alpha'=1$ and dimensionless $J$; when restoring units as here, take $J_{\mathrm{phys}}=\alpha'J$, which leaves the pullback parity unchanged. For smooth complex-valued forms, $d$ is the exterior derivative defined by
$$d\omega(Y_0,\ldots,Y_r)=\sum_{j=0}^{r}(-1)^jY_j\bigl(\omega(Y_0,\ldots,\widehat Y_j,\ldots,Y_r)\bigr)+\sum_{0\le i<j\le r}(-1)^{i+j}\omega([Y_i,Y_j],Y_0,\ldots,\widehat Y_i,\ldots,\widehat Y_j,\ldots,Y_r)$$
for every smooth $r$-form $\omega$ and smooth vector fields $Y_0,\ldots,Y_r$. For $0\le p,q\le3$, let $\mathcal A^{p,q}(X)=\Gamma^\infty(X,\Lambda^pT^{*1,0}X\otimes\Lambda^qT^{*0,1}X)$ be the space of smooth complex-valued forms of bidegree $(p,q)$, and let $\bar\partial:\mathcal A^{p,q}\to\mathcal A^{p,q+1}$ be the $(0,1)$ part of $d$. Define
$$H^{p,q}(X)=\frac{\ker(\bar\partial:\mathcal A^{p,q}\to\mathcal A^{p,q+1})}{\operatorname{im}(\bar\partial:\mathcal A^{p,q-1}\to\mathcal A^{p,q})},\qquad \mathcal A^{p,-1}=0.$$
On real $r$-forms, the pointwise inner product induced by $g$ is specified on decomposable covectors by $\langle\theta_1\wedge\cdots\wedge\theta_r,\eta_1\wedge\cdots\wedge\eta_r\rangle_g=\det(g^{-1}(\theta_i,\eta_j))$ and extended bilinearly. Write $\mathrm{vol}_g=J\wedge J\wedge J/3!$ for the oriented Riemannian volume form. Let $*_g$ be the real Hodge star determined by $u\wedge *_g v=\langle u,v\rangle_g\,\mathrm{vol}_g$, then extend it complex-linearly. The $L^2$ Hermitian product on equal-degree complex forms is $(\alpha,\beta)_{L^2}=\int_X\alpha\wedge *_g\overline\beta$. For adjacent degrees, define the formal adjoint $d_g^*$ by $(d\alpha,\beta)_{L^2}=(\alpha,d_g^*\beta)_{L^2}$ for all smooth $\alpha,\beta$; $X$ is compact and boundaryless. Set $\Delta_g=dd_g^*+d_g^*d$ and $\mathcal H_g^{p,q}(X)=\{\eta\in\mathcal A^{p,q}(X):\Delta_g\eta=0\}$. The exact geometric parity result Geometric parity consequences of an O3/O7 involution establishes their $\sigma^*$-eigenspace decompositions and that every fixed component has complex dimension zero or two, giving space-filling O3- and/or O7-plane loci. This string quotient is not merely the smooth geometric quotient $X/\sigma$: its fixed-locus source charge, tadpole conditions, required branes, and any background flux are separate physical data.

Use ten-dimensional coordinates $x^M$, $M=0,\ldots,9$, four-dimensional coordinates $x^\mu$, $\mu=0,\ldots,3$, and internal coordinates $y^m$, $m=1,\ldots,6$. The ten-dimensional Lorentzian metric has signature $(-,+,\ldots,+)$. Write the string-frame metric as $g^{(s)}_{MN}$ and the Einstein metric as $g^{(E)}_{MN}=e^{-\phi/2}g^{(s)}_{MN}$ on the same spacetime. The dilaton $\phi$ and axion $C_0$ are smooth dimensionless real scalars on the source-free region and define $\tau=C_0+i e^{-\phi}$; the local, dimensionless string coupling is $g_{\mathrm{str}}=e^{\phi}=1/\operatorname{Im}\tau$ and is constant only in the constant-dilaton specialization.

Let $F_3$ be the raw real RR three-form field strength and $H_3$ the real NS three-form field strength, smooth on $X\setminus S$. On a local potential patch use $F_3=dC_2$ and $H_3=dB_2$. Define the real tilded form $\widetilde F_3=F_3-C_0H_3$ and the complex flux $G_3=F_3-\tau H_3$; they are different forms. For a four-dimensional Poincaré-invariant warped ansatz, take $A:X\setminus S\to\mathbb R$ smooth and $\widetilde g$ a smooth Riemannian metric on $X\setminus S$, and use
$$ds_E^2=e^{2A(y)}\eta_{\mu\nu}dx^\mu dx^\nu+e^{-2A(y)}\widetilde g_{mn}(y)dy^m dy^n,$$
where $A$ is a dimensionless real warp function and $\widetilde g$ is the chosen internal Riemannian metric with dimensionless components in these length-valued coordinates. On each local potential patch, write $F_5:=dC_4$ and define
$$\widetilde F_5:=F_5-\frac12 C_2\wedge H_3+\frac12 B_2\wedge F_3.$$
This is the GKP convention of §2.1, Eq. (2.2). It equals $\widetilde G_5$ of Type IIB Two Derivative Supergravity Pseudoaction because that supplier sets $G_5=dC_4$, $G_3=F_3$, and degree-two forms commute with degree-three forms under the wedge product. The five-form ansatz is
$$\widetilde F_5=(1+\star_{10,E})\!\left[d\alpha(y)\wedge dx^0\wedge dx^1\wedge dx^2\wedge dx^3\right],$$
where $\alpha:X\setminus S\to\mathbb R$ is a smooth dimensionless scalar profile and $\star_{10,E}$ is defined by $u\wedge\star_{10,E}v=\langle u,v\rangle_{g^{(E)}}\mathrm{vol}_{10,E}$ for forms of the same degree, using the stated orientation. For $g'=e^{2\omega}g$ on an $n$-manifold, the Hodge star on $p$-forms scales as $*_{g'}=e^{(n-2p)\omega}*_g$. Here $g^{(E)}=e^{2\omega}g^{(s)}$ with $\omega=-\phi/4$, and $n=10,p=5$, so $\star_{10,E}=\star_{10,s}$ on five-forms. The Einstein-frame self-duality in this ansatz is therefore the same constraint as the separate string-frame postulate Type IIB Five Form Self Duality Constraint, imposed after varying the undoubled pseudoaction. Let $\widetilde *$ be the ordinary wedge-defined Hodge star of the oriented unwarped internal metric $\widetilde g$. Distinguish from it the transverse component convention used in GKP's flux constraint: on three-forms define $\mathsf S_6=-\widetilde *$. This explicit dictionary realizes the simultaneous signs of GKP equations (2.23), (2.29), and (2.31); Kachru–Schulz–Trivedi, §2.1 equation (2.9), footnote 3, explicitly records the GKP real-coordinate convention $H_3\wedge\star_6H_3=-H_{mnp}H^{mnp}\mathrm{Vol}/3!$, confirming this negative-wedge transverse convention. The ten-dimensional orientation/current realization above is the explicit translation into the separate arbitrary-oriented R4 wedge formulation. The name ISD in this GKP constraint convention means $\mathsf S_6G_3=iG_3$, equivalently $\widetilde *G_3=-iG_3$. It must not be confused with $\widetilde *G_3=iG_3$ in the fixed internal orientation. The mathematical star $*_g$ used above in the geometric and $L^2$ definitions retains its original wedge definition. For the present ten-dimensional orientation the ansatz gives
$$\widetilde F_5^{\rm int}=e^{-8A}\widetilde *d\alpha.$$
Indeed the five-form $\mathrm{vol}_4\wedge d\alpha$ has negative squared Lorentzian norm; its dual is $-e^{-8A}\widetilde *d\alpha$ for the product orientation and therefore the displayed positive form for the selected opposite orientation. A space-filling D3 worldvolume is oriented by $\mathrm{vol}_4$; its ten-dimensional WZ current is represented internally by minus the positive point current on $X$. This is the current sign needed when comparing the R4 and GKP sourced equations. No pointwise smoothness through $S$ is assumed.

Fix $2\kappa_0^2=(2\pi)^7\alpha'^4$ and $\mu_3=(2\pi)^{-3}\alpha'^{-2}$, so $2\kappa_0^2\mu_3=(2\pi)^4\alpha'^2$ has dimension $\mathrm{length}^4$. The dimensionless signed source current pairs with $1$ to give the dimensionless localized charge; that pairing does not change the coefficient's dimension. With length-valued coordinates and the Type IIB field-strength components $[F_3]=[H_3]=\mathrm{length}^{-1}$ of Supergravity Conventions And Normalizations, the integrated term $\int_X H_3\wedge F_3$ has dimension $\mathrm{length}^4$; division by $(2\pi)^4\alpha'^2$ gives the dimensionless Maxwell flux charge. Here $[\kappa_0^2]=\mathrm{length}^8$ and $[\mu_3]=\mathrm{length}^{-4}$. In the Einstein-frame RR convention $\kappa_E=\kappa_0$; at constant dilaton the string-frame gravitational coupling is $2\kappa_{10,s}^2=g_{\mathrm{str}}^2\,2\kappa_0^2$. Every period, Hodge star, localized source current, D3 charge sum, and cover/quotient multiplicity in an application must use one declared $X$ and this same normalization. Localized equations are current-valued and are not applied as smooth equations through their source support.

## Definition references

[[lem-cmp-o3o7-geometric-parity-consequences]]

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Giddings–Kachru–Polchinski, §2.1 and §4.1](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §2.2 and §4.2](https://arxiv.org/pdf/hep-th/0509003v3)

[Van Riet–Zoccarato, §§4.1 and 4.4](https://arxiv.org/pdf/2305.01722)

[Kachru, Schulz, and Trivedi, §2.1, equation (2.9), footnote 3](https://arxiv.org/pdf/hep-th/0201028v2)

## Remarks

The exact orientifold hypotheses are: $X$ is a smooth connected compact Calabi–Yau threefold with chosen Kähler form $J$ and holomorphic volume form $\Omega$; $\sigma$ is an order-two holomorphic isometry with $\sigma^*J=J$ and $\sigma^*\Omega=-\Omega$; and all localized fixed-locus sources, D-branes, fluxes, and tadpole constraints are declared separately. The local orientifold-data carrier and its full geometric-parity proof were inspected and match this interface. Its generic Calabi–Yau dependency is current-ready, but the orientifold carrier is absent from the active run manifest and has no current Step 1 record; its linked parity lemma also has no active-run readiness record. This definition preserves that interface conditionally and does not copy or replace either supplier.

The current pseudoaction and five-form self-duality carriers are present, but their current Step 1 decisions are escalated. The stated frames, flux names, and units are exact convention inputs; the definition is not a claim that those upstream items have completed authoring readiness or that a solution exists.

