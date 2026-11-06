---
id: def-cft-conformal-boundary-and-defect-data
kind: definition
title: Conformal boundaries, boundary-changing fields, and defects
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-vertex-algebra-module
  - def-cft-pointed-analytic-worldsheet
  - def-cft-bordered-worldsheet-with-collars
  - lem-cft-reflected-boundary-charts-form-double-atlas
  - def-cft-r5-full-local-cft-data
  - def-conformal-vertex-algebra
dependency_roles:
  def-vertex-algebra-module: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-bordered-worldsheet-with-collars: mathematical-premise
  lem-cft-reflected-boundary-charts-form-double-atlas: mathematical-premise
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
justified_by: []
domain: mathematics
library: mathematics
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§1.1, equation (9), PDF p. 4: finite stress transformation; §2, PDF pp. 8–9: conformal gluing and ordered boundary-changing operators."
    - title: "Jens Fjelstad, Jürgen Fuchs, and Carl Stigner, RCFT with Defects: Factorization and Fundamental World Sheets, arXiv:1202.3929v2"
      url: https://arxiv.org/pdf/1202.3929v2
      locator: "§2.1, PDF p. 3: topological defects transmit all declared chiral symmetries and are deformable away from insertions."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§4.7, printed pp. 108–109: boundary stress-tensor gluing and the doubling convention."
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

Let $\Sigma$ be a bordered analytic worldsheet and let $D\Sigma$ be its verified analytic double. For each connected component $S$ of $D\Sigma$, fix an instance of the full local two-dimensional CFT data package (the worldsheet in that definition is exactly $S$); require these instances to share the state space $\mathcal H$, common invariant domain $\mathcal D$, field-label space $\mathcal F$, state-field map $\sigma$, and Virasoro actions. In every holomorphic chart used below, use the weak field distributions from the package on the component containing that chart, restricted to the plus-copy interior; smooth defect coordinates only parametrize pullbacks of these distributions as specified below. A signed boundary chart supplies an open complex neighborhood across the seam, and its upper half is the plus-copy chart on which the specified horizontal slices are taken. The chart-vacuum data and finite coordinate transports are those of the corresponding component package. Let $V$ be a conformal vertex algebra with conformal vector $\omega$ and central charge $c$, and identify both chiral copies with this same conformal VOA. Here a pair of chiral field embeddings means the following explicit additional data. Give commuting left and right $V$-module actions on $\mathcal D$ in the lower-truncation, vacuum and module-Jacobi sense of Module for an ordinary vertex algebra, denoted $Y_L^{\mathcal D}(a,z)=\sum_n a^L_{(n)}z^{-n-1}$ and $Y_R^{\mathcal D}(a,\bar z)=\sum_n a^R_{(n)}\bar z^{-n-1}$. Give injective linear maps $\iota_L,\iota_R:V\to\mathcal F$, and put $\nu_L=\sigma\iota_L$, $\nu_R=\sigma\iota_R$. Require $\nu_L(\mathbf1)=\nu_R(\mathbf1)=\Omega$ and, for $a,b\in V$, $n\in\mathbb Z$,
$$\nu_L(a_{(n)}b)=a^L_{(n)}\nu_L(b),\qquad\nu_R(a_{(n)}b)=a^R_{(n)}\nu_R(b).$$
Require the formal chiral fields to represent the actual R5 field distributions: $Y(\iota_L(a);z,\bar z)=Y_L^{\mathcal D}(a,z)$ and $Y(\iota_R(a);z,\bar z)=Y_R^{\mathcal D}(a,\bar z)$ in every declared matrix coefficient and local expansion, with the declared convergence/distribution interpretation. Their conformal-vector modes are the already specified $L_n,\bar L_n$. This gives an exact meaning to operation preservation on the embedded chiral subspaces; it neither invents a product on the whole field-label space $\mathcal F$ nor asserts that every R5 package admits these embeddings. Their weak mode expansions in every indicated local coordinate are required to be
$$T_L(z,\bar z):=Y(\iota_L(\omega);z,\bar z)=\sum_{n\in\mathbb Z}L_nz^{-n-2},\qquad T_R(z,\bar z):=Y(\iota_R(\omega);z,\bar z)=\sum_{n\in\mathbb Z}\bar L_n\bar z^{-n-2},$$
as matrix-coefficient distributions on $\mathcal D$; the coefficients are the left and right Virasoro actions of the full data package. Thus the stress fields are specified fields, not merely the Virasoro actions. All fields and coordinates here use the dimensionless coordinate convention of the R5 package. The displayed maps and mode names refer to a chosen centered presentation. In another chart use the full package's finite label, state, test-density and chart-vacuum transport; mode coefficients refer to that chart, including the coordinate and label changes. Require the chiral embeddings and stress representatives to respect that transport. For $w=g(z)$ require
$$W_{ji}T_{L,i}(z)W_{ji}^{-1}=g'(z)^2T_{L,j}(g(z))+\frac{c}{12}S(g)(z)I,\qquad S(g)=\frac{g^{(3)}}{g'}-\frac32\left(\frac{g''}{g'}\right)^2,$$
with the conjugate-coordinate formula and the same $c$ on the right. The chosen weak boundary traces below must also respect these finite changes: on the real seam they transform with the nonzero common factor $g'^2$ and equal additive Schwarzian terms. Such trace compatibility is supplied data, not an inference that an arbitrary distribution has a boundary restriction. Subtracting the two transformation laws shows that equality of the two stress traces is preserved.

Let $P$ be the finite boundary-mark set of the bordered worldsheet. Assign a boundary-condition label $a(C)$ to each connected component $C$ of $\partial\Sigma\setminus P$; an unmarked boundary circle is allowed as a whole component. The trace conditions below are local: take any open arc in $C$ lying in a straightened analytic boundary chart, and denote its real coordinate interval by $J$. Write $\mathcal D'(J)=L_{\rm cont}(C_c^\infty(J),\mathbb C)$, with the standard test-function topology, for the scalar distributions. Horizontal slices are separately specified data, not restrictions of an arbitrary two-dimensional distribution. For each $u\in\mathcal D$ and $\lambda\in\mathcal H'$, supply families $t_L^{u,\lambda}(y),t_R^{u,\lambda}(y)\in\mathcal D'(J)$, $0<y<\epsilon$, that reconstruct the given two-dimensional coefficient distribution on the boundary chart: for every $h\in C_c^\infty(J\times(0,\epsilon))$,
$$\langle\lambda,T_Lu\rangle(h)=\int_0^\epsilon t_L^{u,\lambda}(y)(h(\cdot,y))\,dy,\qquad\langle\lambda,T_Ru\rangle(h)=\int_0^\epsilon t_R^{u,\lambda}(y)(h(\cdot,y))\,dy.$$
Require these to be smooth distribution families: evaluation on each fixed test function is smooth in $y$, and on each compact subinterval of positive heights and each fixed compact test-function support, all fixed-order height derivatives are bounded by a common finite test-function seminorm. This regularity makes the displayed reconstruction an actual distribution. A **weak boundary trace** of a stress field means that these chosen families have limits as $y\downarrow0$: there are distributions $t_{L,\partial}^{u,\lambda},t_{R,\partial}^{u,\lambda}\in\mathcal D'(J)$ such that for every $f\in C_c^\infty(J)$,
$$\lim_{y\downarrow0}t_L^{u,\lambda}(y)(f)=t_{L,\partial}^{u,\lambda}(f),\qquad \lim_{y\downarrow0}t_R^{u,\lambda}(y)(f)=t_{R,\partial}^{u,\lambda}(f).$$
These limits are part of the data and are taken in the distribution sense, not as pointwise values. A **Virasoro-preserving conformal boundary** on $C$ with label $a(C)$ is boundary data for which both weak traces exist and $t_{L,\partial}^{u,\lambda}=t_{R,\partial}^{u,\lambda}$ in $\mathcal D'(J)$ for every $u,\lambda$ and every such coordinate interval $J$ in every straightened analytic boundary chart. This gluing law is an operator-data condition; it is not implied by the smooth surface or collar.

At a marked point $p\in P$, let $J_-$ and $J_+$ be the adjacent intervals immediately before and after $p$ in the positive boundary orientation. If their labels are $a$ and $b$, respectively, the data include a vector space $\mathcal B_{ab}(p)$ and a linear assignment of each $v\in\mathcal B_{ab}(p)$ to a weak operator-valued distribution $\Psi_{ab}(v;\cdot)$ on boundary coordinates near $p$ (each matrix coefficient on the declared common domain is a distribution). This is a **boundary-changing field from $a$ to $b$**; its ordered label is $(a,b)$, and reversing the boundary orientation reverses that order. The boundary marks are points $[p]$ on the fixed seam of the analytic involution on $D\Sigma$. Apply Pointed analytic worldsheet and family componentwise to the connected components of $D\Sigma$; when local-coordinate data are required at those points, choose pairwise disjoint disk coordinates centered at $[p]$ exactly as in that definition. Only that definition's pointed-surface and local-coordinate clauses are used here; no genus or moduli-space claim is made.

A **defect curve** is a finite union $\Gamma$ of $C^\infty$ embedded circles and compact embedded intervals in $\operatorname{int}\Sigma$; each interval has endpoints in a declared finite set of defect-junction points, and distinct components meet only at declared junctions. Each regular component is equipped with an orientation and a coorientation. At every regular point the defect data supply an adapted smooth parametrization $\kappa:J\times(-\epsilon,\epsilon)\to U\subset\operatorname{int}\Sigma$: a $C^\infty$ diffeomorphism onto an open neighborhood, where $J\subset\mathbb R$ is an open interval, $\kappa(J\times\{0\})=K$ is a regular arc, increasing $s\in J$ gives its orientation, and the signs of $t$ give its declared sides. These coordinates $(s,t)$ need not be holomorphic. Separately choose a holomorphic worldsheet chart $w$ on $U$, put $F=w\circ\kappa$ and $a(s,t)=\partial_sF(s,t)\ne0$, and retain the stress fields in the holomorphic coordinate $w$. A smooth nonanalytic defect arc is allowed; no holomorphic straightening of it is asserted.

Label each component of $\Sigma\setminus\Gamma$ by its local CFT data, with the same chiral central charge $c$ fixed above, and give it holomorphic-coordinate stress fields $T_w^\pm,\bar T_w^\pm$ on the two sides. For each regular arc $K$, the defect data specify a complete Hausdorff locally convex complex comparison space $E_K$, actual $E_K$-valued lifts of these stress distributions, and declared continuous linear evaluation maps reproducing each side's scalar matrix coefficients. Require the two identity fields to lift to the same constant element $e_K\in E_K$, and require the lifts to respect the stated finite stress transport, with identity term $e_K$. A lift and its evaluations are supplied data, not an inferred topology on operator values. A distribution with values in $E_K$, denoted $\mathcal D'(K;E_K)$, means a continuous linear map from $C_c^\infty(K)$ with its standard test-function topology to $E_K$, using the chosen parameter and its test-density convention.

In the following formulas $T_w^\pm,\bar T_w^\pm$ denote their specified $E_K$-valued lifts. Define the smooth pullback of any such coordinate distribution $q$ on either side of $w(U)$ by
$$(F^*q)(h)=q\!\left(\left(\frac{h}{|\det_{\mathbb R}DF|}\right)\circ F^{-1}\right),\qquad h\in C_c^\infty(J\times(0,\epsilon))\ \text{or}\ C_c^\infty(J\times(-\epsilon,0)).$$
Here $DF$ is the real derivative and the test functions are extended by zero outside their compact supports. This formula defines a continuous distribution because $F$ is a smooth diffeomorphism; it is the coefficient pullback with smearing by test densities, not a change to a holomorphic field presentation. Multiplication by a smooth function $b$ means $(bq)(h)=q(bh)$. Write
$$\tau^\pm=a^2F^*T_w^\pm,\qquad \bar\tau^\pm=\bar a^{\,2}F^*\bar T_w^\pm.$$
These are the stress components weighted by the complex tangent; $\bar T$ names the right stress field and does not mean complex conjugation of its values.

For each of these four distributions supply smooth $E_K$-valued slice families on $t=\pm y$, $0<y<\epsilon$, reconstructing it by integration against $h(s,\pm y)\,dy$, with the same local seminorm bounds as in the boundary-slice definition after every continuous linear evaluation. Give limit distributions in $\mathcal D'(K;E_K)$ and require convergence on every fixed test function after every continuous linear functional on $E_K$ as $y\downarrow0$. The evaluation maps must recover the declared scalar slices and their limits. Denote these limits by $\operatorname{Tr}_K\tau^\pm,\operatorname{Tr}_K\bar\tau^\pm$. Their existence is supplied; it is not a restriction theorem for arbitrary distributions. Require compatibility on overlapping adapted parametrizations: if the curve parameters obey $s=r(s')$, their stress traces are related by the coefficient pullback $r^*v(f)=v((f/|r'|)\circ r^{-1})$ and factor $r'(s')^2$, with the declared comparison-space identifications, independently of the chosen transverse extension. For a change of holomorphic chart use the finite stress transport above before the tangent weighting, and require the supplied slices and limits to respect it.

In this convention a **conformal defect** satisfies, in every such presentation, the tangential transmission law
$$\operatorname{Tr}_K(\tau^+-\bar\tau^+)=\operatorname{Tr}_K(\tau^--\bar\tau^-)\quad\text{in }\mathcal D'(K;E_K).$$
The shared $c$ and $e_K$ make the additive Schwarzian terms identical on the two sides. Thus, after their cancellation, the jumps of the holomorphic and antiholomorphic stress components transform with weights two; the factors $a^2$ and $\bar a^2$ give their tangential components. Reparametrization multiplies the difference of the two sides by the same nonzero factor $r'^2$, preserving its vanishing. When $F(s,t)=s+it$, these factors are one and the law is precisely $\operatorname{Tr}_K(T^+-\bar T^+)=\operatorname{Tr}_K(T^--\bar T^-)$. The defect data also include a vector space of allowed defect fields on each regular component.

A **topological defect** additionally specifies, for each current in its declared preserved chiral symmetry, a linear identification of the two trace spaces and requires the identified current traces to agree, including the stress currents. Its correlator data must separately satisfy invariance under every smooth isotopy $t\mapsto\Gamma_t$ ($0\leq t\leq1$) with junctions fixed and with each $\Gamma_t$ disjoint from insertions and other defects. This deformation invariance is an axiom of the topological-defect data here; stress transmission alone does not prove it. A **defect/junction field** is an insertion at a point incident to a finite ordered list of boundary conditions and oriented defect segments; the data include that ordered list, its vector space of allowed fields, and a weak field assignment for those labels. No fusion rule, classification, or existence of any such CFT data is asserted here.

## Definition references

[[def-vertex-algebra-module]]

[[def-cft-pointed-analytic-worldsheet]]

[[def-cft-bordered-worldsheet-with-collars]]

[[lem-cft-reflected-boundary-charts-form-double-atlas]]

[[def-cft-r5-full-local-cft-data]]

[[def-conformal-vertex-algebra]]

## Remarks

Cardy's boundary review (§1.1, equation (9), and §2) supplies the finite stress transformation and straight-boundary gluing conventions. The smooth pullback, tangent weights and compatible trace families above explicitly extend that convention to smooth defect curves; their existence is additional data, not a theorem supplied by that review. Tong's lecture notes are an additional source reference; no successful retrieval of those notes is claimed in this repair. Fjelstad–Fuchs–Stigner use “topological defect” for transmission of all chiral symmetries and derive the deformation property in their rational TFT setting. Here the deformation property is stated as a separate axiom, so it is not inferred for general CFT data from current transmission alone.

The published root definition [[def-conformal-vertex-algebra]] is pinned in the current physics mathematical-import snapshot, and its hash matches the read-only original. The pointed-worldsheet carrier exists, but its current Step-1 readiness hash is stale.
