---
id: def-cft-2d-stress-tensor-data
kind: definition
title: Holomorphic stress-tensor data in a plane CFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-2d-primary-field
  - def-tempered-distribution
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-primary-field: mathematical-premise
  def-tempered-distribution: mathematical-premise
axiom_use: "No new choice principle is used. The primary-field supplier carries its recorded full-AC compact-genus convention transitively; the local plane field, OPE, and residue clauses here use only its local coordinate interface and do not use genus classification."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§§2.2–2.4 and §3.1, printed pp. 15–29 (PDF pp. 9–16): radial ordering, conserved stress tensor, primary OPE, Ward contour, and TT normalization."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§§4.1.1–4.2.3 and §4.4, printed pp. 64–75 and 82–84 (PDF pp. 72–83 and 90–92): stress tensor, Ward identities, primary OPE, and central term."
---

## Definition

Let $U\subseteq\mathbb C$ be a nonempty open patch in one fixed Euclidean coordinate chart, with dimensionless coordinate $z=x+iy$, area form $d^2z=dx\,dy$, and metric $dx^2+dy^2$. Write $\partial_z=\tfrac12(\partial_x-i\partial_y)$ and $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$. Use the test-function space $\mathcal D(U)=C_c^\infty(U;\mathbb C)$ with its locally convex inductive-limit topology from the compact-support seminorms $p_{K,m}(\phi)=\max_{|\alpha|\le m}\sup_K|\partial^\alpha\phi|$ for compact $K\Subset U$, as specified by the primary-field convention. Fix a complex vector space $\mathscr D$ (the common field domain) and its algebraic dual $\mathscr D^*=\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathbb C)$. Put $\mathcal W(U,\mathscr D)$ for the complex-linear maps $A:\mathcal D(U)\to\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathscr D^*)$ for which every scalar coefficient $A_{u,v}(\phi):=(A(\phi)u)(v)$, $u,v\in\mathscr D$, is continuous. Such a map is a weak operator-valued distribution; point evaluation need not define an operator. For $A\in\mathcal W(U,\mathscr D)$ define distributional derivatives coefficientwise by $(\partial_jA)_{u,v}(\phi):=-A_{u,v}(\partial_j\phi)$. If a global-plane weak coefficient extends continuously from compactly supported tests to Schwartz space, it is called tempered in the supplied sense; temperateness is not required of a local field.

A stress-tensor datum on this chart consists of components $T_{ab}\in\mathcal W(U,\mathscr D)$, $a,b\in\{x,y\}$, symmetric in the sense $T_{ab}=T_{ba}$. The labels $a,b$ refer to the fixed Cartesian coordinate basis; no coordinate-transition law or global tensor-section assertion is included. For a specified closed discrete contact set $P\subset U$, let $C_b,C\in\mathcal W(U,\mathscr D)$ be weak contact terms supported on $P$, meaning that each coefficient $(C_b)_{u,v}$ and $C_{u,v}$ vanishes on every test function supported in $U\setminus P$. Conservation and trace data mean the coefficientwise distributional identities $\partial^aT_{ab}=C_b$ and $\delta^{ab}T_{ab}=C$, where $\partial^a=\delta^{ac}\partial_c$ and $\delta^{ab}$ is the Euclidean inverse metric. Thus the components are conserved and traceless away from $P$. In complex coordinates put $T_{zz}=\tfrac14(T_{xx}-T_{yy}-2iT_{xy})$, $T_{\bar z\bar z}=\tfrac14(T_{xx}-T_{yy}+2iT_{xy})$, and $T_{z\bar z}=\tfrac14(T_{xx}+T_{yy})$. Write $T(z):=T_{zz}$ and, when a barred sector is included, $\bar T(\bar z):=T_{\bar z\bar z}$. Require $\partial_{\bar z}T=0$ on $U\setminus P$ coefficientwise; for an included barred sector also require $\partial_z\bar T=0$ there. These are explicit regularity clauses; holomorphy is not inferred from conservation and trace without further hypotheses.

The mode structure is additional data, not a residue operation on a weak distribution. Specify an injective complex-linear map $j:\mathscr D\to\mathscr D^*$, and endomorphisms $t_m\in\operatorname{End}_{\mathbb C}(\mathscr D)$ for every $m\in\mathbb Z$. The formal representative is the coefficient array $\mathsf T(z)=\sum_{m\in\mathbb Z}t_mz^{-m-2}$; no sum in $\operatorname{End}(\mathscr D)$ is intended. Its compatibility with the weak field is part of the data: for each $u,v\in\mathscr D$, the scalar series $\sum_m(j(t_mu))(v)z^{-m-2}$ converges locally uniformly on a specified annulus $A=\{r<|z|<R\}$, $0\le r<R\le\infty$, to a holomorphic function admitting a specified holomorphic continuation $t_{u,v}$ to $U\setminus P$. The annulus and $U\setminus P$ lie in a specified connected continuation domain. For every $\phi\in\mathcal D(U\setminus P)$ require

$$(T(\phi)u)(v)=\int_{U\setminus P}\phi(z)t_{u,v}(z)\,d^2z.$$

Thus the modes realize the same weak field away from the declared contacts; the weak extension across $P$ remains separately specified. This requires convergence only of the stated scalar one-field coefficients, not of an operator series or a general OPE tail. A barred sector supplies its own endomorphisms and the same compatibility in the independent variable $\xi=\bar z$. In a purely formal use of the displayed OPE conventions, one may retain only the formal representatives; such a use does not assert that weak stress data have been constructed.

Products of formal representatives mean coefficientwise composition on $\mathscr D$: the coefficient of $z^{-m-2}w^{-n-2}$ in $\mathsf T(z)\mathsf T(w)$ is $t_mt_n$. Any further expansion or iterated residue used below must be supplied by the radial-product prescription as a well-defined linear operation on these arrays with values in $\operatorname{End}(\mathscr D)$. It must agree, after applying $j$ and evaluating on $v$, with the corresponding specified weak meromorphic product wherever an analytic representative is used. The same requirement applies to products with primary representatives when they are used; weak smearings into $\mathscr D^*$ are never composed. In the OPE and charge formulas below, $T(z)$ denotes $\mathsf T(z)$ or its specified weak analytic representative, and the scalar central term means a multiple of $I_{\mathscr D}$. Radial ordering means that a factor at larger $|z|$ is placed to the left. The notation $A(z)B(w)\sim\sum_{k=1}^N C_k(w)(z-w)^{-k}$ denotes only the principal part of the weak radially ordered product: it is either a formal Laurent expansion in the chosen radial region or the principal part of a meromorphic weak coefficient on a stated analytic domain. It asserts neither convergence of an infinite regular OPE tail nor equality at the coincident diagonal as distributions. The normalized residue $\operatorname{Res}_z F(z)$ is the coefficient of $z^{-1}$ in a formal Laurent series; when an analytic contour exists it equals $(2\pi i)^{-1}\oint F(z)\,dz$ on a positively oriented contour.

The holomorphic sector fixes a dimensionless central scalar $c\in\mathbb C$ and the principal part

$$
T(z)T(w)\sim\frac{c/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial_wT(w)}{z-w}.
$$

A left-right datum separately fixes a dimensionless scalar $\bar c\in\mathbb C$ and the principal part

$$
\bar T(\bar z)\bar T(\bar w)\sim\frac{\bar c/2}{(\bar z-\bar w)^4}+\frac{2\bar T(\bar w)}{(\bar z-\bar w)^2}+\frac{\partial_{\bar w}\bar T(\bar w)}{\bar z-\bar w}.
$$

No equality between $c$ and $\bar c$, and no mixed $T\bar T$ principal part, is implicit. The chiral-only specialization omits the barred sector (equivalently, it sets $\bar T=0$ and $\bar c=0$). For each declared primary field $\mathcal O_i$ of weights $(h_i,\bar h_i)$ in the passive-coordinate convention supplied by the primary-field definition, the holomorphic singular datum is

$$T(z)\mathcal O_i(w_i,\bar w_i)\sim\frac{h_i\mathcal O_i(w_i,\bar w_i)}{(z-w_i)^2}+\frac{\partial_{w_i}\mathcal O_i(w_i,\bar w_i)}{z-w_i}.$$

When a barred sector and its primary-field data are included, its singular datum is

$$\bar T(\bar z)\mathcal O_i(w_i,\bar w_i)\sim\frac{\bar h_i\mathcal O_i(w_i,\bar w_i)}{(\bar z-\bar w_i)^2}+\frac{\partial_{\bar w_i}\mathcal O_i(w_i,\bar w_i)}{\bar z-\bar w_i}.$$

The holomorphic mode charges are the endomorphisms $L_m=t_m=\operatorname{Res}_z z^{m+1}T(z)$ for $m\in\mathbb Z$; for a barred sector define $\bar L_m=\operatorname{Res}_{\bar z}\bar z^{m+1}\bar T(\bar z)$. A formal or analytic contour-product prescription is part of the data for each included sector. In particular, the holomorphic prescription states on the common domain that

$$
[L_m,L_n]=\operatorname{Res}_w w^{n+1}\operatorname{Res}_{z=w}z^{m+1}T(z)T(w),
$$

with the nested residue taken in the specified radial region and all contact and boundary terms recorded. The barred sector has the analogous prescription when its modes are used. A stress-tensor datum is a mathematical interface, not an existence theorem: the word “CFT” alone supplies neither these fields nor their OPEs, domains, contour rules, positivity, nor convergence.

## Definition references

[[def-cft-2d-primary-field]]

[[def-tempered-distribution]]

## Remarks

The local weak-distribution clause uses compactly supported tests. The tempered-distribution supplier is used only for the optional global-plane extension. All data above are confined to one chart; the components are not asserted to glue as an ordinary covariant tensor across conformal charts. For comparison, at the level of the usual formal or meromorphic stress-field representatives, the passive CFT law for a biholomorphic change $w=f(z)$ is $T_w(w)=(f'(z))^{-2}(T_z(z)-\frac{c}{12}\{f,z\}I_{\mathscr D})$, where $I_{\mathscr D}$ is the identity on $\mathscr D$ and $\{f,z\}=f'''(z)/f'(z)-\frac32(f''(z)/f'(z))^2$; this chart-local definition neither imposes nor uses that transition law. A model may include both chiral sectors, whose central scalars remain independent, without asserting unitarity or physical realization.
