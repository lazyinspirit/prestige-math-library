---
id: post-cmp-type-iib-o3o7-closed-sector-kinetic-action
kind: postulate
title: Source-reported Type IIB O3/O7 closed-sector kinetic action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
category: string-theory
deps:
- def-cmp-cy3-kahler-moduli-and-divisor-volumes
- def-cmp-n2-special-kahler-period-data
- def-cmp-type-iib-o3-o7-orientifold-data
- def-cmp-type-iib-o3o7-chiral-coordinates
- def-supergravity-conventions-and-normalizations
- post-four-dimensional-n1-matter-coupled-supergravity
- post-type-iib-fiveform-self-duality-constraint
- post-type-iib-two-derivative-supergravity-pseudoaction
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-cmp-type-iib-o3o7-chiral-coordinates: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: formulation-prerequisite
  post-type-iib-fiveform-self-duality-constraint: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
physical_scope: Adopted source-reported massless closed-string kinetic truncation for Type IIB O3/O7 compactification, at
  tree level, two derivatives, large radius, and zero background three-form flux, with open-string fluctuations frozen and
  the warp factor neglected. Only the explicitly listed conventional modes are retained; extra modes allowed by the broad Calabi–Yau geometry are omitted by a separate truncation assumption. It does not assert tadpole cancellation, a globally consistent sourced background, or a stabilized
  vacuum.
sources:
  references:
  - title: Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3
    url: https://arxiv.org/pdf/hep-th/0403067v3
    locator: §3.2, equations (3.21)–(3.33), PDF pp. 13–16; source-reported four-dimensional action, chiral-coordinate metric,
      and vector terms.
  - title: Mariana Graña and Hagen Triendl, String Theory Compactifications, SpringerBriefs
      in Physics (2017)
    url: https://djvu.online/file/qufswWArYbwIP
    locator: §6.1, printed pp. 63–64; independent O3 tree-level Kähler-potential and four-cycle-modulus comparison.
---

## Postulate

Use natural units $\hbar=c=1$, $\alpha'=1$, and the source's $M_P=1$ convention. Let $M_4$ be a smooth oriented four-manifold equipped with a smooth Lorentzian Einstein-frame metric $g_4$ of signature $(-,+,+,+)$, as in the supergravity-conventions item. Denote its oriented metric volume form by $\mathrm{vol}_{g_4}$ and define $*_4$ by $\eta\wedge *_4\theta=\langle\eta,\theta\rangle_{g_4}\,\mathrm{vol}_{g_4}$ for real forms of the same degree, where $\langle\eta,\theta\rangle_{g_4}=(1/p!)\eta_{\mu_1\ldots\mu_p}\theta^{\mu_1\ldots\mu_p}$; extend $*_4$ complex-linearly to complex-valued forms. Let the complex-structure scalars $z^k:M_4\to U_{\rm cs}\subset\mathbb C^m$ be smooth, and let $v^\alpha,\rho_\alpha,\phi,l,b^a,c^a\in C^\infty(M_4,\mathbb R)$ be smooth real scalar fields. On each gauge-potential patch take $V^\kappa\in\Omega^1(M_4;\mathbb R)$ smooth and define $F^\kappa=dV^\kappa$. Restrict their values to a local source-coordinate patch where the matrices and denominators below are defined. Adopt the following source-reported real scalar and closed-vector kinetic terms for the unwarped, zero-three-form-flux O3/O7 truncation. Here $b^a,c^a$ retain the odd harmonic $(1,1)$ two-form modes, $\rho_\alpha$ the chosen even harmonic $(2,2)$ four-form modes, and $V^\kappa$ the electric vectors from the even harmonic three-form sector after the five-form constraint. Any additional harmonic modes admitted by the broad Calabi–Yau convention, including odd $(2,0)+(0,2)$ two-form modes, are omitted as a separate truncation assumption. The orientifold projector alone does not imply their absence or the consistency of this further truncation. Let
$$\mathcal K=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma=6\mathcal V,\quad \mathcal K_\alpha=\kappa_{\alpha\beta\gamma}v^\beta v^\gamma,\quad \mathcal K_{\alpha\beta}=\kappa_{\alpha\beta\gamma}v^\gamma,\quad \mathcal K_{ab}=\kappa_{\alpha ab}v^\alpha,$$
and assume the matrices needed below are nonsingular on the chosen coordinate patch. Define
$$G_{\alpha\beta}=-\frac32\left(\frac{\mathcal K_{\alpha\beta}}{\mathcal K}-\frac32\frac{\mathcal K_\alpha\mathcal K_\beta}{\mathcal K^2}\right),\qquad G^{\alpha\beta}=(G_{\alpha\beta})^{-1},\qquad G_{ab}=-\frac32\frac{\mathcal K_{ab}}{\mathcal K},$$
$$G_{k\bar l}=\partial_k\partial_{\bar l}\left[-\log\left(i\int_X\Omega\wedge\bar\Omega\right)\right],\qquad \Xi_\alpha=d\rho_\alpha-\frac12\kappa_{\alpha ab}(c^a db^b-b^a dc^b),\qquad F^\kappa=dV^\kappa.$$
Choose a flat parity-adapted real symplectic cohomology frame $(\alpha_I,\beta^I)$ with $\int_X\alpha_I\wedge\beta^J=\delta_I^J$ and zero $\alpha$–$\alpha$ and $\beta$–$\beta$ pairings; $I=(\kappa,\hat k)$ separates even and odd basis elements under $\sigma^*$. Use the period-supplier convention $X^I=\int_X\Omega\wedge\beta^I$, $F_I=\int_X\Omega\wedge\alpha_I$, and $\Omega=X^I\alpha_I-F_I\beta^I$ in cohomology. On a local ambient period patch $U_{\rm amb}$ admitting a holomorphic degree-two prepotential $\mathcal F$ with $F_I=\partial_I\mathcal F$, choose $X^{\hat0}\ne0$. Supply a holomorphic inclusion $\iota:U_{\rm cs}\hookrightarrow U_{\rm amb}$ of the orientifold locus, with $X^\kappa\circ\iota=F_\kappa\circ\iota=0$ and surviving odd period ratios as its local coordinates $z^k$. Thus the transverse even ratios $z^\kappa:=X^\kappa/X^{\hat0}$ and their conjugates vanish there; no transverse complex-structure field is retained. The form $\Omega$ and its norm in $G_{k\bar l}$ above are restricted to this same family on $U_{\rm cs}$. Let $\mathcal F_{IJ}=\partial F_I/\partial X^J$ be the local period matrix of the chosen homogeneous prepotential and define the source's $N=2$ gauge matrix by
$$\mathcal M_{IJ}=\overline{\mathcal F}_{IJ}+2i\frac{(\operatorname{Im}\mathcal F)_{IM}X^M(\operatorname{Im}\mathcal F)_{JN}X^N}{X^P(\operatorname{Im}\mathcal F)_{PQ}X^Q},$$
on a patch where its denominator is nonzero. In the action below, $\mathcal M_{\kappa\lambda}$ denotes only the pulled-back even block $\iota^*(\mathcal M_{\kappa\lambda})$, evaluated on the scalar field $z:M_4\to U_{\rm cs}$; both the transverse even coordinates and their conjugates are set to zero before this evaluation. It is not the unrestricted ambient matrix. In the source differential-form convention, the adopted kinetic action is
$$\begin{aligned}S^{(4)}_{\mathrm{kin}}=\int_{M_4}\bigg[&-G_{k\bar l}dz^k\wedge *_4d\bar z^{\bar l}-G_{\alpha\beta}dv^\alpha\wedge *_4dv^\beta-\frac14d\log\mathcal K\wedge *_4d\log\mathcal K-\frac14d\phi\wedge *_4d\phi-\frac14e^{2\phi}dl\wedge *_4dl\\&-e^{-\phi}G_{ab}db^a\wedge *_4db^b-e^\phi G_{ab}(dc^a-l db^a)\wedge *_4(dc^b-l db^b)-\frac{9G^{\alpha\beta}}{4\mathcal K^2}\Xi_\alpha\wedge *_4\Xi_\beta\\&+\frac14\operatorname{Im}\mathcal M_{\kappa\lambda}F^\kappa\wedge *_4F^\lambda+\frac14\operatorname{Re}\mathcal M_{\kappa\lambda}F^\kappa\wedge F^\lambda\bigg].\end{aligned}$$
The action is an adopted effective-theory input reported after harmonic reduction, five-form self-duality, and a four-dimensional Weyl rescaling. This item does not prove that this reduction follows from the ten-dimensional pseudoaction.

## Postulate references

[[def-cmp-cy3-kahler-moduli-and-divisor-volumes]]

[[def-cmp-n2-special-kahler-period-data]]

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-cmp-type-iib-o3o7-chiral-coordinates]]

[[def-supergravity-conventions-and-normalizations]]

[[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Grimm and Louis, §3.2](https://arxiv.org/pdf/hep-th/0403067v3)

[Graña and Triendl, §6.1](https://djvu.online/file/qufswWArYbwIP)

## Remarks

The tensors $G_{\alpha\beta}$ and $G_{ab}$ are the source's real Kähler-modulus and odd two-form metrics; $G^{\alpha\beta}$ is the inverse of $G_{\alpha\beta}$. $\mathcal K=6\mathcal V$ is the cubic intersection polynomial, not the four-dimensional Kähler potential. Restoring units gives $J_{\rm phys}=\alpha'J$ and $\operatorname{Vol}_{\rm phys}(X)=(\alpha')^3\mathcal V$; the source's dimensionless Kähler potential is multiplied by $M_P^2$ in the dimensionful four-dimensional convention.

The displayed vector coefficients are transcribed from Grimm–Louis equation (3.21). The comparison with the standard $N=1$ vector terms is equation (3.23), whose gauge terms are inside an overall minus; the source's equations (3.31) and (3.33) give the same negative sign as this coefficient match. Equation (3.29) is the no-scale identity, not the comparison action.

The internal integral uses the complex orientation fixed by the orientifold datum. Thus $i\int_X\Omega\wedge\bar\Omega>0$: in an oriented holomorphic chart, $\Omega=f\,dz_1\wedge dz_2\wedge dz_3$ gives $i\Omega\wedge\bar\Omega=8|f|^2\,dx_1\wedge dy_1\wedge dx_2\wedge dy_2\wedge dx_3\wedge dy_3$. The minus sign before this integral printed in Grimm–Louis (2.12), (3.15) and (3.27) is incompatible with that orientation and the positive period expression in (2.12). Here the complex-structure potential uses the positive norm, in agreement with the local period supplier; the other adopted kinetic coefficients are retained.
