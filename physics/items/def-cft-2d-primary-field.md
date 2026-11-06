---
id: def-cft-2d-primary-field
kind: definition
title: Primary field in a holomorphic coordinate
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-tempered-distribution
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-tempered-distribution: mathematical-premise
axiom_use: "The compact-worldsheet genus convention carries the transitive AC premise through its supplied topological classification input; the local primary-field coordinate law makes no additional choice."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§1.2 and §2.1, especially Eq. (2.1), printed pp. 6–8 and 12–14 (PDF pp. 5–7 and 8–10): local coordinate transformations, primary weights, and the distinction from quasi-primary fields."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://davidtong.org/pdfs/teaching/string-theory/string4.pdf
      locator: "§4.2.3, Eq. (4.18), printed p. 76 (chapter PDF p. 16): displayed forward-derivative primary-operator law, distinguished here from passive tensor coefficients."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X$ be a pointed compact analytic worldsheet: a compact connected Riemann surface $C$, distinct marked points $p_i$, and, at each point used for a local field coordinate, a biholomorphic chart $z_i:U_i\to D_{r_i}\subset\mathbb C$ with $z_i(p_i)=0$. Here a Riemann surface is a nonempty connected Hausdorff second-countable topological space with a holomorphic atlas of compatible charts into open subsets of $\mathbb C$. A map is holomorphic when its expressions in holomorphic charts are holomorphic functions; a biholomorphic map is a bijective holomorphic map with holomorphic inverse. These are the supplied worldsheet and complex-manifold conventions. Write a coordinate as $z=x+iy$ with dimensionless real $x,y$, let $\bar z$ denote its complex conjugate, and set $d^2z:=dx\,dy$.

For an open coordinate image $U\subset\mathbb R^2$, let $\mathcal D(U)=C_c^\infty(U;\mathbb C)$. On functions supported in a compact set $K\Subset U$, use the seminorms $p_{K,m}(\phi)=\max_{|\alpha|\le m}\sup_K|\partial^\alpha\phi|$; give $\mathcal D(U)$ the locally convex inductive-limit topology over such compact sets. Fix a complex vector space $\mathscr D$, called the smearing domain, and its algebraic dual $\mathscr D^*=\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathbb C)$. A weak operator-valued distribution with domain $\mathscr D$ on $U$ is a complex-linear map

$$
\mathcal O_z:\mathcal D(U)\longrightarrow\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathscr D^*)
$$

such that, for every $u,v\in\mathscr D$, the bilinear weak coefficient $\phi\mapsto(\mathcal O_z(\phi)u)(v)$ is continuous on $\mathcal D(U)$. Thus every weak matrix coefficient is a distribution. The domain and its linear action under smearing are model data; point evaluation is not part of this definition. In the global-plane special case $U=\mathbb R^2$, the tempered version requires each weak matrix coefficient to extend to a continuous functional on Schwartz space with its seminorm topology and continuous-dual convention from the cited tempered-distribution definition. A local field need not have such a global extension.

Let $U_z,U_w\subset\mathbb C$ be open coordinate images and let $w=f(z)$ be a passive holomorphic coordinate change $f:U_z\to U_w$, so the underlying point is fixed while its coordinate label changes from $z$ to $w$. Require $f$ to be biholomorphic; the supplied holomorphic chain rule applied to $f^{-1}\circ f=\operatorname{id}$ gives $(f^{-1})'(f(z))f'(z)=1$, hence $f'(z)\ne0$. A field of weights $(h,\bar h)$, where $h,\bar h\in\mathbb C$ are independent dimensionless labels, is **primary in the local conformal sense** when its coordinate coefficients obey

$$
\mathcal O_w(w,\bar w)=(f'(z))^{-h}(\overline{f'(z)})^{-\bar h}\,\mathcal O_z(z,\bar z),\qquad w=f(z).
$$

For smooth coefficients this is a pointwise formula. A branch of $(f')^{-h}$ means a chosen holomorphic logarithm $\ell_f$ of $f'$ on the overlap, or on each member of a specified overlap refinement, and the multiplier $m_{f,h}:=\exp(-h\ell_f)$; the antiholomorphic factor is defined by a chosen logarithm of $\overline{f'}$. For weak distributions the transformation means the following test-function identity: set $m_f=m_{f,h}\bar m_{f,\bar h}$, and for every $\psi\in\mathcal D(U_w)$ and $u,v\in\mathscr D$, require

$$
(\mathcal O_w(\psi)u)(v)=(\mathcal O_z(|f'|^2m_f(\psi\circ f))u)(v).
$$

Here the expression on the right means that $\mathcal O_z$ is applied to the test function $z\mapsto |f'(z)|^2m_f(z)\psi(f(z))$; the factor $|f'|^2$ is the real Jacobian in $d^2w=|f'|^2d^2z$. For integer $h,\bar h$, the powers are single-valued and no branch is needed. If either weight is nonintegral, the branch or line-bundle data are part of the field: on a triple overlap with $w=f(z)$ and $v=g(w)$, the chosen multipliers must obey $m_{g,h}(f(z))m_{f,h}(z)=m_{g\circ f,h}(z)$ and $\bar m_{g,\bar h}(\overline{f(z)})\bar m_{f,\bar h}(\bar z)=\bar m_{g\circ f,\bar h}(\bar z)$. Without such data the formula is only local and defines no globally single-valued field.

For integer weights, define $K_X$ by gluing local frames $dz$ with $dw=f'(z)dz$, and define $\overline K_X$ using $d\bar w=\overline{f'(z)}d\bar z$. If $v=g(w)$ is a second coordinate change, the chain rule gives $dv=g'(f(z))f'(z)dz$ and $d^2v=|g'(f(z))|^2|f'(z)|^2d^2z$; hence the line transitions and real test-density Jacobians obey their cocycle identities. With negative tensor powers interpreted as powers of the dual line bundle, the distributional section $\mathcal O_z\otimes(dz)^{\otimes h}\otimes(d\bar z)^{\otimes\bar h}$ is coordinate-independent precisely under the displayed coefficient law. This explains the canonical and conjugate-canonical bundle interpretation without asserting that a nonintegral power exists absent its specified transition data.

## Definition references

[[def-cft-pointed-analytic-worldsheet]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-tempered-distribution]]

## Remarks

“Primary” here means covariance under every local biholomorphic coordinate change in the declared atlas. A quasi-primary field means one for which the corresponding covariance is required only under Möbius transformations $z\mapsto(az+b)/(cz+d)$ of the Riemann sphere, with $a,b,c,d\in\mathbb C$ and $ad-bc\ne0$; these are the global conformal coordinate changes. Ginsparg writes an active field-transformation convention in Eq. (2.1); reversing the coordinate relabeling gives the passive coefficient convention used here. Tong's displayed Eq. (4.18) instead uses positive powers of the forward derivatives; it does not directly state this inverse-derivative passive coefficient law. Here the inverse factors are fixed by the explicit convention that the underlying point and tensor are unchanged while the coordinate frame changes. Both sources use real weights in their displayed discussions; the complex-weight case above is only defined when the stated branch and cocycle data are supplied.

This item defines a mathematical transformation interface. It does not assert that a field exists in every CFT, that its smearing is represented by bounded operators, or that any path integral defines a measure.
