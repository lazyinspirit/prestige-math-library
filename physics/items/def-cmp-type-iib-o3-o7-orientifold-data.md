---
id: def-cmp-type-iib-o3-o7-orientifold-data
kind: definition
title: "Type IIB Calabi–Yau orientifold data with O3/O7 fixed loci"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - lem-cmp-o3o7-geometric-parity-consequences
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  lem-cmp-o3o7-geometric-parity-consequences: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Geometric Type IIB orientifold data on a smooth compact Calabi–Yau threefold, with an O3/O7 parity projection. It does not assert source-charge cancellation, flux consistency, a stabilized vacuum, or a solution of the back-reacted ten-dimensional equations."
empirical_premises: []
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3 opening and §3.1, PDF pp. 7–11; world-sheet projection, parity table, Hodge eigenspaces, and O3/O7 fixed loci."
    - title: "Mariana Graña and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.1, printed pp. 62–64; Calabi–Yau orientifold action and the O3/O7 parity projection."
---

## Definition

Let $X$ be the smooth connected compact complex threefold and $I$ its complex structure. Let $J$ and $\Omega$ be its chosen Kähler form and nowhere-zero holomorphic three-form in the broad Calabi–Yau convention; $g(u,v)=J(u,Iv)$ is the associated Kähler metric. Give $X$ its complex orientation. Use natural units $\hbar=c=1$ and dimensionless internal coordinates with $\alpha'=1$, so $J$ and $g$ are dimensionless; when units are restored, $J_{\rm phys}=\alpha'J$. A Type IIB O3/O7 orientifold datum in the smooth massless bosonic sector consists of these data and the following projection. Choose a holomorphic isometry $\sigma:X\to X$ with $\sigma^2=\operatorname{id}$, $\sigma^*J=J$, and $\sigma^*\Omega=-\Omega$. Put $M=\mathbb R^4\times X$, $s=\operatorname{id}_{\mathbb R^4}\times\sigma$, and let
$$\mathcal V=\Gamma^\infty(M,\operatorname{Sym}^2T^*M)\oplus C^\infty(M;\mathbb R)\oplus\mathcal A^2(M;\mathbb R)\oplus C^\infty(M;\mathbb R)\oplus\mathcal A^2(M;\mathbb R)\oplus\mathcal A^4(M;\mathbb R).$$
Here $\mathcal A^r(M;\mathbb R)$ is the vector space of smooth real differential $r$-forms; order the components as $(\widehat g,\phi,B_2,C_0,C_2,C_4)$, with $\widehat g$ restricted to Lorentzian metrics when interpreted as a spacetime metric. The potentials are local smooth representatives; global flux and gauge patching require separate data. Define real-linear involutions $\Omega_p,P_L:\mathcal V\to\mathcal V$ by
$$\Omega_p(\widehat g,\phi,B_2,C_0,C_2,C_4)=(\widehat g,\phi,-B_2,-C_0,C_2,-C_4),\qquad P_L(\widehat g,\phi,B_2,C_0,C_2,C_4)=(\widehat g,\phi,B_2,-C_0,-C_2,-C_4).$$
The notation $P_L=(-1)^{F_L}$ denotes this specified bosonic sign action. These maps are the adopted massless-field actions of world-sheet orientation reversal and left-moving spacetime fermion parity, respectively; a full conformal-field-theory state space and its operators are additional data, not constructed here. Pullback $s^*:\mathcal V\to\mathcal V$ acts componentwise, and
$$\mathcal O=P_L\Omega_p s^*:\mathcal V\to\mathcal V,\qquad \Pi=\tfrac12(1+\mathcal O):\mathcal V\to\ker(\mathcal O-1)$$
is the projection onto the invariant bosonic fields. All three factors commute and square to one, so $\mathcal O^2=1$ and $\Pi^2=\Pi$. On purely internal forms $s^*$ reduces to $\sigma^*$. Use the Hodge-space definitions of the earlier lemma `lem-cmp-o3o7-geometric-parity-consequences`: if $\mathcal A^{p,q}(X)$ denotes smooth complex-valued forms of bidegree $(p,q)$, $\mathcal A^{p,-1}(X)=0$, and $\bar\partial$ is the Dolbeault differential, then $H^{p,q}(X)=\ker(\bar\partial:\mathcal A^{p,q}\to\mathcal A^{p,q+1})/\operatorname{im}(\bar\partial:\mathcal A^{p,q-1}\to\mathcal A^{p,q})$; also $\mathcal H_g^{p,q}(X)=\{\eta\in\mathcal A^{p,q}(X):\Delta_g\eta=0\}$, where $\Delta_g=dd_g^*+d_g^*d$ and $d_g^*$ is the $L^2_g$ formal adjoint of $d$. The internal cohomology $H^{p,q}(X)$ and the spaces of harmonic forms split into the $+1$ and $-1$ eigenspaces of $\sigma^*$; write their dimensions as $h^{p,q}_+$ and $h^{p,q}_-$. For a basis of $H^{1,1}(X)$ adapted to this splitting, indices $\alpha,\beta,\gamma$ denote even classes and $a,b,c$ denote odd classes. The intersection numbers with an odd number of odd indices vanish. Every connected component of $\operatorname{Fix}(\sigma)$ has complex dimension $0$ or $2$; combined with the spacetime-filling Type IIB orientifold convention, these are O3- and O7-plane loci, respectively. This field projection is the bosonic action of the string orientifold prescription, distinct from the geometric quotient $X/\sigma$: localized source charges, D-branes, background flux, and tadpole constraints are separate physical data.
For the massless Type IIB fields, the same O3/O7 projection keeps the metric, dilaton, RR scalar $C_0$, and RR four-form $C_4$ even under $\sigma^*$, while it keeps the NS–NS two-form $B_2$ and RR two-form $C_2$ in the odd eigenspace. Consequently the surviving purely internal harmonic two-form parts of $B_2$ and $C_2$ take values in $\mathcal H^2_{g,-}(X;\mathbb R):=\{\eta\in\mathcal A^2(X;\mathbb R):\Delta_g\eta=0,\ \sigma^*\eta=-\eta\}$, while the purely internal harmonic four-form part of $C_4$ takes values in $\mathcal H^4_{g,+}(X;\mathbb R):=\{\eta\in\mathcal A^4(X;\mathbb R):\Delta_g\eta=0,\ \sigma^*\eta=\eta\}$. The odd real harmonic $(1,1)$ sector gives the conventional coefficients $b^a,c^a$, but the broad Calabi–Yau hypotheses do not exclude additional odd real harmonic forms of type $(2,0)+(0,2)$. Keeping only the $(1,1)$ two-form sector is a further truncation unless these additional modes vanish; it does not follow from $\Pi$. These are the field parities of the adopted orientifold projection, not consequences of the geometric involution alone.

## Definition references

[[def-cmp-calabi-yau-threefold-compactification-data]]

[[lem-cmp-o3o7-geometric-parity-consequences]]

[Grimm and Louis, §3.1](https://arxiv.org/pdf/hep-th/0403067v3)

[Graña and Triendl, §6.1](https://djvu.online/file/qufswWArYbwIP)

## Facts & Assumptions

**Given:** The smooth connected compact complex threefold, its Kähler form and holomorphic three-form, the complex orientation, and a holomorphic isometric involution satisfying the conditions in the Definition.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] supplies the broad Calabi–Yau threefold data, including the chosen Kähler class, nowhere-zero holomorphic three-form, and orientation; it does not imply strict $SU(3)$ holonomy.

[F2] [[lem-cmp-o3o7-geometric-parity-consequences]] proves the stated eigenspace splitting for the Dolbeault quotient and the kernel of the de Rham Hodge Laplacian, odd-intersection vanishing, orientation preservation, and fixed-locus dimensions $0$ or $2$ under the exact definitions in the Definition.

[A1] Adopt the massless bosonic sign actions and projection reported in Grimm–Louis §3.1: $g,\phi,C_0,C_4$ are even and $B_2,C_2$ are odd under $\sigma^*$. The resulting harmonic-mode selection is a physical projection rule, not a consequence of the geometric lemma alone.

## Proof

**Proof technique:** apply the geometric involution lemma and project the harmonic field expansions onto its eigenspaces.

**Given:** The O3/O7 datum and adopted Type IIB field-parity rule in the Definition and [A1].

1.1 The two diagonal sign maps commute with each other and with componentwise pullback; each squares to the identity. Thus $\mathcal O^2=1$ and $\Pi^2=\Pi$, with image $\ker(\mathcal O-1)$ since $\mathcal O\Pi=\Pi$ and $\Pi v=v$ whenever $\mathcal O v=v$. Apply [F2] to the holomorphic isometric involution: it preserves the complex orientation, splits cohomology and harmonic forms by parity, kills cubic intersections with an odd number of odd classes, and has fixed components of complex dimension $0$ or $2$. A spacetime-filling fixed component of complex dimension $d$ contributes $2d$ internal spatial dimensions, so the corresponding plane has $p+1=4+2d$ and hence $p=3$ for $d=0$ or $p=7$ for $d=2$. [F1, F2, A1, given, algebra]

2.1 On an internal two-form the two sign maps have product $-1$, so $\Pi\eta=(\eta-\sigma^*\eta)/2$; on an internal four-form their product is $+1$, so $\Pi\xi=(\xi+\sigma^*\xi)/2$. Pullback commutes with $\Delta_g$ by [F2], and hence these projectors preserve harmonic forms. Their images are exactly $\mathcal H^2_{g,-}(X;\mathbb R)$ and $\mathcal H^4_{g,+}(X;\mathbb R)$: the displayed formulas have the required parity, and every form of that parity is fixed by the corresponding projector. Holomorphicity preserves bidegree, so the same argument applies to the harmonic $(1,1)$ subspace, but does not exclude other bidegrees. Indeed, on $X=(\mathbb C/(\mathbb Z+i\mathbb Z))^3$ with its flat product metric, $J=\sum_j dx_j\wedge dy_j$, $\Omega=dz_1\wedge dz_2\wedge dz_3$, and $\sigma([z_1,z_2,z_3])=[-z_1,z_2,z_3]$, the real form $\operatorname{Re}(dz_1\wedge dz_2)$ is nonzero, constant and thus harmonic, and is negated by $\sigma^*$. This datum satisfies all the geometric hypotheses and exhibits an additional surviving $(2,0)+(0,2)$ mode. The $(1,1)$ restriction therefore requires the separate truncation stated in the Definition. [F2, A1, given, step 1.1, construct, algebra] ∎

## Remarks

$\Omega_p$ above is the explicitly specified massless bosonic representation of world-sheet parity, distinct from the holomorphic volume form $\Omega$. The fixed-locus classification is geometric; the definition leaves all source charges, D-brane content, fluxes, and cancellation conditions to separately declared data.
