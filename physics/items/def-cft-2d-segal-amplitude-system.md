---
id: def-cft-2d-segal-amplitude-system
kind: definition
title: Segal surface amplitudes and sewing data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-cft-pointed-analytic-worldsheet
  - def-cft-bordered-worldsheet-with-collars
  - def-cft-plumbing-and-sewing-parameter
  - def-hilbert-space
  - def-strong-and-weak-operator-topologies
dependency_roles:
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-bordered-worldsheet-with-collars: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Pavel Mnev, Lecture Notes on Conformal Field Theory, Fall 2022
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_2022_notes.pdf
      locator: Sections 1.1.1–1.1.3 and 1.4–1.4.2, PDF pp. 5–17; category, boundary orientation, sewing, normalization, trace-class caveat, and projective anomaly.
    - title: Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, and Vincent Vargas, Segal’s Axioms and Bootstrap for Liouville Theory, arXiv:2112.14859v2
      url: https://arxiv.org/pdf/2112.14859v2
      locator: Introduction and §1, including the Hilbert–Schmidt amplitude interface and the statement of Theorem 1.2; Liouville-specific model only.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/def-cft-2d-segal-amplitude-system.md
---

## Definition

A **Segal-style two-dimensional amplitude datum** is a specified assignment with the following data and axioms. All Hilbert inner products are linear in the first argument. A bordered surface has a smooth inward collar embedding $c:\partial\Sigma\times[0,\epsilon)\to\Sigma$ with $c(p,0)=p$, and compatible complex half-disk charts as follows: each chart maps a boundary neighborhood to a relatively open subset of $\{z\in\mathbb C:\operatorname{Im}z\ge0\}$, sends the boundary to the real axis, and preserves the chosen interior orientation; chart transitions are holomorphic on upper-half-plane overlaps and extend holomorphically across each boundary interval while preserving the upper side. The collar embedding is smooth and is not required to be real-analytic. Punctures, when used, carry the specified local coordinate germs; plumbing two punctures identifies annular coordinates by $zw=q$, with $q=0$ the nodal central fiber, and is not boundary-collar composition. The item defines an axiom system and asserts no model realizes it.

1. **Objects and boundary convention.** An object is a finite disjoint union of oriented circles with chosen smooth parametrizations by $S^1$, meaning orientation-preserving smooth diffeomorphisms. A morphism $\Sigma:C_{\mathrm{in}}\to C_{\mathrm{out}}$ is a compact oriented bordered Riemann surface with parametrized boundary and collars, with the induced boundary orientation convention $\partial\Sigma=-C_{\mathrm{in}}\sqcup C_{\mathrm{out}}$. The nonempty-boundary surfaces use the bordered analytic worldsheet definition with marked collars, taking empty lists of marks and arcs when none are specified. A morphism with empty boundary is instead separately specified as a compact closed oriented Riemann surface (or a finite disjoint union of such surfaces) with the Riemann-surface holomorphic atlas convention; it has no marks, arcs or collars to specify. The empty surface is also allowed as the monoidal identity morphism on the empty object. These closed and empty morphisms are not instances of the nonempty-boundary supplier definition. Each boundary parametrization is a smooth diffeomorphism from the standard circle to that boundary component; the incoming standard circle is given the reversed orientation and the outgoing one the standard orientation. Each parametrized circle is assigned a complex Hilbert space $H_C$; orientation reversal is assigned the conjugate Hilbert space $\overline{H_C}$, which has the same additive group, scalar multiplication $z\cdot_{\overline H}v=\overline z\cdot_Hv$, and inner product $\langle\overline u,\overline v\rangle_{\overline H}=\overline{\langle u,v\rangle_H}$. For a finite list of Hilbert spaces $H_1,\ldots,H_n$, their Hilbert tensor product is the completion of the algebraic tensor product for the inner product determined on elementary tensors by $\langle u_1\otimes\cdots\otimes u_n,v_1\otimes\cdots\otimes v_n\rangle=\prod_{j=1}^n\langle u_j,v_j\rangle$ and extended sesquilinearly by the universal property of the algebraic tensor product. For each finite tensor sum its factors lie in finite-dimensional subspaces; finite Gram--Schmidt gives orthonormal bases there, and their tensor products show that this form is positive definite. The empty tensor product is $\mathbb C$.

2. **Amplitudes and operator class.** For each such surface, specify a one-dimensional complex vector space $\mathcal L_\Sigma$ with a positive Hermitian norm and an amplitude
$$A_\Sigma\in\mathrm{HS}(H_{\mathrm{in}},H_{\mathrm{out}})\otimes\mathcal L_\Sigma,\qquad H_{\mathrm{in}}=\bigotimes_{C\subset C_{\mathrm{in}}}H_C,\quad H_{\mathrm{out}}=\bigotimes_{C\subset C_{\mathrm{out}}}H_C,$$
where a bounded linear operator $A:H_{\mathrm{in}}\to H_{\mathrm{out}}$ is **Hilbert–Schmidt** in this datum when
$$\|A\|_{\mathrm{HS}}^2:=\sup\left\{\sum_{e\in F}\|Ae\|^2:F\subseteq H_{\mathrm{in}}\text{ is a finite orthonormal set}\right\}<\infty,$$
where orthonormal means $\langle e,e\rangle=1$ and $\langle e,e'\rangle=0$ for distinct members, and the empty set contributes $0$. This finite-family definition makes no basis-existence assumption. It defines a norm on the indicated operator class: homogeneity is immediate, the triangle inequality follows by applying the Hilbert-space triangle inequality in the finite direct sum for each orthonormal set and taking the supremum, and one-vector sets show that norm zero forces $A=0$. The chosen Hilbert–Schmidt class is the operator-class condition in this version of the datum. The sewing data require each composed map used as an amplitude to lie in the declared target class; no amplitude existence or composition closure is inferred from the geometric surface alone.

For every nonzero $e\in\mathcal L_\Sigma$ there is a unique operator representative $A_\Sigma^e$ with $A_\Sigma=A_\Sigma^e\otimes e$. Replacing $e$ by $e\prime=g e$, $g\in\mathbb C^*$, replaces the representative by $A_\Sigma^{e\prime}=g^{-1}A_\Sigma^e$. Thus no global nonzero frame of the anomaly line is assumed.

3. **Anomaly line and family regularity.** A family is parameterized by a topological space $X$ and consists of a locally trivial bundle $\pi:E\to X$ with compact bordered surface fibers and locally constant labels for boundary components. In each local product chart $U\times\Sigma_0$, the family specifies fiberwise complex structures, inward collar embeddings, boundary decompositions, and boundary parametrizations. A fiberwise complex structure here is a smooth bundle map $j_x:T\Sigma_0\to T\Sigma_0$ with $j_x^2=-\mathrm{id}$, inducing the chosen orientation, and giving the holomorphic half-disk charts described above. A collar is the smooth embedding $c_x:\partial\Sigma_0\times[0,\epsilon)\to\Sigma_0$ restricting to the identity on the boundary, and each boundary parametrization is a smooth diffeomorphism from the appropriately oriented $S^1$. These structures vary continuously in the $C^\infty$ topology: in fixed local charts, every derivative in the surface or circle variables varies continuously with $x\in U$, uniformly on compact subsets. Changes of product charts are fiberwise smooth and vary continuously in the same topology. Each fiber satisfies the single-surface chart, collar, and orientation conditions above. The space $X$ need not be a manifold, and no differentiability in $x$ is implied. For each boundary-component label $b$, the family includes a locally trivial Hilbert bundle $\mathcal H_b\to X$ with fiber $H_{C_b}$ and unitary transition maps; its fibers are fixed in each local product chart. Thus $H_{\mathrm{in}}$ and $H_{\mathrm{out}}$ are Hilbert tensor bundles.

The spaces $\mathcal L_{\Sigma_x}$ are the fibers of a specified topological complex line bundle $\mathcal L$ (a locally trivial vector bundle with one-dimensional complex fibers) with a continuous Hermitian metric, meaning a positive-definite Hermitian form on each fiber that varies continuously in local frames. The sewing and disjoint-union line isomorphisms are continuous bundle maps and obey the associativity and symmetry coherence equations for repeated sewings and disjoint unions. Write $\mathbb T=\{z\in\mathbb C:|z|=1\}$ and let $\mathrm U(H,H')$ be the surjective complex-linear isometries $H\to H'$; their adjoints are their inverses. Write $\mathrm{PU}(H)=\mathrm U(H,H)/\mathbb T$, with the quotient of the strong operator topology. An isomorphism $f:\Sigma\to\Sigma'$ here is an orientation-preserving biholomorphism, smooth up to the boundary, carrying the specified decorations to those of $\Sigma'$ and preserving the incoming/outgoing decomposition. It induces boundary reparametrizations $u_b:C_b\to C'_b$. Their projective unitary maps are specified with the following lift and anomaly-line data.

For each boundary reparametrization $u:C\to C'$ occurring here, specify a **phase torsor** $P_u$ (a nonempty set with a free transitive $\mathbb T$ action) and an equivariant map $V:P_u\to\mathrm U(H_C,H_{C'})$, so $V(zt)=zV(t)$. Elements $t\in P_u$ are called lifts; no lift is chosen globally. Specify associative composition of lifts $P_v\times P_u\to P_{vu}$, denoted $(s,t)\mapsto st$, with $(zs)(wt)=zw(st)$ and $V(st)=V(s)V(t)$, and unit lifts $1_C\in P_{\mathrm{id}_C}$ with $V(1_C)=I_{H_C}$ and the unit equations. This describes projective composition without choosing phases. It also permits the zero Hilbert space: lift labels remain a torsor even if their operator values coincide. In families these torsors are locally trivial principal $\mathbb T$ bundles (locally products with $\mathbb T$, with transition maps given by multiplication by continuous phases), and the lifted operators are strongly continuous. Thus the induced projective maps are continuous in the projective strong operator topology.

For each $f$ and each collection $\mathbf t=(t_b)_b$ of boundary lifts, specify a complex-linear line isomorphism $\lambda_{f;\mathbf t}:\mathcal L_\Sigma\to\mathcal L_{\Sigma'}$. Put $V_{\mathrm{in}}=\bigotimes_{b\text{ incoming}}V(t_b)$ and $V_{\mathrm{out}}=\bigotimes_{b\text{ outgoing}}V(t_b)$, including the canonical tensor permutations when labels are reordered. If $\mathbf z\mathbf t=(z_bt_b)_b$, put $z_{\mathrm{in}}=\prod_{b\text{ incoming}}z_b$ and $z_{\mathrm{out}}=\prod_{b\text{ outgoing}}z_b$, with empty products equal to $1$. Require
$$\lambda_{f;\mathbf z\mathbf t}=z_{\mathrm{out}}^{-1}z_{\mathrm{in}}\lambda_{f;\mathbf t},\qquad \lambda_{\mathrm{id}_\Sigma;\mathbf 1}=\mathrm{id}_{\mathcal L_\Sigma},\qquad \lambda_{gf;\mathbf s\mathbf t}=\lambda_{g;\mathbf s}\circ\lambda_{f;\mathbf t}.$$
Here products of collections use the specified boundary-lift composition. The line maps vary continuously on lifted families in local line frames. Define the amplitude transport by complex-linear extension of
$$T_f(B\otimes\ell)=(V_{\mathrm{out}}BV_{\mathrm{in}}^*)\otimes\lambda_{f;\mathbf t}(\ell),\qquad A_{\Sigma'}=T_f(A_\Sigma).$$
The second equality is the equivariance axiom. Changing lifts multiplies the operator by $z_{\mathrm{out}}z_{\mathrm{in}}^{-1}$ and the line map by its inverse, so $T_f$ is independent of $\mathbf t$. The identity and composition equations give $T_{\mathrm{id}}=\mathrm{id}$ and $T_{gf}=T_gT_f$.

Require these comparisons to respect disjoint union and sewing. Explicitly, let $f_i:\Sigma_i\to\Sigma_i'$ be isomorphisms and let $\nu,\nu'$ be the disjoint-union line comparisons. For the union collection of lifts require $\lambda_{f_2\sqcup f_1}\circ\nu=\nu'\circ(\lambda_{f_2}\otimes\lambda_{f_1})$. If the $f_i$ respect a full or partial boundary matching and induce $f_2\# f_1:\Sigma_2\circ\Sigma_1\to\Sigma_2'\circ\Sigma_1'$, choose the same lift on each matched outgoing/incoming circle and use the surviving lifts for the sewn surface. For the sewing comparisons $\mu,\mu'$ of §4 require $\lambda_{f_2\# f_1}\circ\mu=\mu'\circ(\lambda_{f_2}\otimes\lambda_{f_1})$. The lift subscripts are suppressed only in these two equations. A phase on a matched circle cancels between its outgoing and incoming occurrences; on the operator side the matching unitary and its inverse cancel in the contraction. These equations, together with the stated associativity, symmetry and unit equations, are required data, not consequences of a bare line bundle. In local Hilbert-bundle charts, the associated operator bundle has fiber $\mathrm{HS}(H_{\mathrm{in}},H_{\mathrm{out}})$ and transition maps $A\mapsto V_{\mathrm{out}}AV_{\mathrm{in}}^*$ for the specified unitary transition maps $V_{\mathrm{in}},V_{\mathrm{out}}$; these preserve the Hilbert--Schmidt norm. Its tensor product with $\mathcal L$ has the product norm $\|A\otimes\ell\|=\|A\|_{\mathrm{HS}}\|\ell\|_{\mathcal L}$. The single-surface amplitudes of §2 form a norm-continuous section $x\mapsto A_x\in\mathrm{HS}(H_{\mathrm{in},x},H_{\mathrm{out},x})\otimes\mathcal L_x$, meaning it is continuous in this norm in every local bundle chart. A strict theory is the special case with coherent genuine unitary boundary maps, a chosen trivial anomaly line and identity line comparisons for those chosen maps; phase-rescaled lifts still obey the displayed transformation law. No numerical central charge or Weyl-anomaly formula is fixed here.

4. **Disjoint union, sewing and normalization.** Disjoint union is sent to the tensor product of Hilbert spaces, anomaly lines and amplitudes. For the empty surface, specify a nonzero element $e_\emptyset\in\mathcal L_\emptyset$ and require $A_\emptyset=\mathrm{id}_{\mathbb C}\otimes e_\emptyset$, using $H_\emptyset=\mathbb C$. Under the canonical identifications $\emptyset\sqcup\Sigma=\Sigma=\Sigma\sqcup\emptyset$, the disjoint-union line comparisons must send $e_\emptyset\otimes\ell$ and $\ell\otimes e_\emptyset$ respectively to $\ell$ for every $\ell\in\mathcal L_\Sigma$. Impose the same unit equations on the sewing line comparisons whenever composition with the empty surface is defined. Thus $e_\emptyset$ is the unit of the anomaly-line comparisons, and the empty-surface amplitude represents the identity on the empty object's state space. When an outgoing parametrized circle of $\Sigma_1$ is matched to an incoming parametrized circle of $\Sigma_2$ with the orientation reversed, form the topological quotient identifying these boundary points. The sewing data specify a bordered Riemann-surface structure on this quotient, denoted $\Sigma_2\circ\Sigma_1$, for which the inclusions of the original interiors are holomorphic, together with collars and parametrizations of the remaining boundaries. Smooth collars alone are not asserted to construct its conformal structure. Specify a line isomorphism $\mu:\mathcal L_{\Sigma_2}\otimes\mathcal L_{\Sigma_1}\to\mathcal L_{\Sigma_2\circ\Sigma_1}$. For a full matching $H_{\mathrm{out},1}=H_{\mathrm{in},2}$ the sewing axiom is $A_{\Sigma_2\circ\Sigma_1}=(A_{\Sigma_2}^{e_2}A_{\Sigma_1}^{e_1})\otimes\mu(e_2\otimes e_1)$ for any nonzero $e_i\in\mathcal L_{\Sigma_i}$. Rescaling either frame cancels between its operator and line factors, so this is independent of both choices. For a partial matching, write the representative types, after tensor permutations, as $A_{\Sigma_1}^{e_1}:P\to K\otimes R$ and $A_{\Sigma_2}^{e_2}:R\otimes Q\to S$, where $R$ is the tensor product of the matched circle spaces. The sewn amplitude is $((\mathrm{id}_K\otimes A_{\Sigma_2}^{e_2})(A_{\Sigma_1}^{e_1}\otimes\mathrm{id}_Q))\otimes\mu(e_2\otimes e_1)$, with operator type $P\otimes Q\to K\otimes S$; the datum requires this operator to be Hilbert–Schmidt. For $\varepsilon>0$, define $\mathrm{Cyl}_\varepsilon=\{w=s+it:0\le s\le\varepsilon\}/(w\sim w+2\pi i)$, with the quotient complex structure on its interior and analytic boundary charts induced by this strip. Its orientation is $ds\wedge dt$. The incoming and outgoing parametrizations are $e^{it}\mapsto[0+it]$ and $e^{it}\mapsto[\varepsilon+it]$ respectively; their induced boundary orientations are $-dt$ and $dt$. For $0\le u<\varepsilon/3$, fix inward collars $([it],u)\mapsto[u+it]$ and $([\varepsilon+it],u)\mapsto[\varepsilon-u+it]$. There are no marks or marked arcs. The parameter $\varepsilon$ is the strip width at fixed circumference $2\pi$ (the convention for conformal length here). Identify both labelled boundary state spaces with the same $H_{S^1}$ by these parametrizations. Sewing two such cylinders uses translation of the strip coordinate and gives $\mathrm{Cyl}_{\varepsilon+\delta}$, with the prescribed exterior collars after restriction. For nonempty circle objects no zero-width cylinder morphism is added; include a continuous trivialization of these cylinder anomaly lines compatible with this sewing. In that trivialization require $\|A_{\mathrm{Cyl}_\varepsilon}\xi-\xi\|\to0$ as $\varepsilon\downarrow0$ for every $\xi\in H_{S^1}$. Each positive-width amplitude is Hilbert–Schmidt; the zero-width identity is only a strong limit and is not required to be Hilbert–Schmidt. In the diagram choose frames $e_1,e_2$ and the sewn frame $e_{21}=\mu(e_2\otimes e_1)$; it depicts the full-matching case in these frames. The equality just stated is the sewing axiom, independently of the diagram.

```tikzcd
H_{\mathrm{in}} \arrow[r,"A_{\Sigma_1}^{e_1}"] \arrow[rr,bend right=18,"A_{\Sigma_2\circ\Sigma_1}^{e_{21}}"'] & H_{\mathrm{mid}} \arrow[r,"A_{\Sigma_2}^{e_2}"] & H_{\mathrm{out}}
```

A point-plumbing sewing law, when included in a particular datum, is required only under the stated $zw=q$ geometry and must specify its own continuity/topology at $q=0$. It is not implied by boundary-collar sewing. Existence of amplitudes, convergence of a general sewing contraction, and equivalence with reflection-positive Euclidean data or conformal nets are not consequences of this definition.

## Definition references

[[def-riemann-surface-and-holomorphic-atlas]]

[[def-cft-pointed-analytic-worldsheet]]

[[def-cft-bordered-worldsheet-with-collars]]

[[def-cft-plumbing-and-sewing-parameter]]

[[def-hilbert-space]]

[[def-strong-and-weak-operator-topologies]]
