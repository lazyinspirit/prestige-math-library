---
id: def-cft-mtc-symmetric-special-frobenius-defect-data
kind: definition
title: "MTC-valued Frobenius algebra and defect data for oriented rational CFT"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-modular-ribbon-category-and-hopf-link-data
  - def-rt-state-spaces
dependency_roles:
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  def-rt-state-spaces: mathematical-premise
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jens Fjelstad, Jürgen Fuchs, and Carl Stigner, RCFT with Defects: Factorization and Fundamental World Sheets, arXiv:1202.3929v2"
      url: "https://arxiv.org/pdf/1202.3929v2"
      locator: "Sections 2.3 and 3.1, especially Definition 3.1 and equations (3.1)–(3.4), which specify the face, edge, insertion and junction data."
    - title: "Jens Fjelstad, Jürgen Fuchs, Ingo Runkel, and Christoph Schweigert, TFT Construction of RCFT Correlators V: Proof of Modular Invariance and Factorisation, arXiv:hep-th/0503194v2"
      url: "https://arxiv.org/pdf/hep-th/0503194v2"
      locator: "Appendix A.3, especially the definition of simple symmetric special Frobenius algebras and its nonzero special scalars; Appendices B.1–B.3, for the double, connecting manifold and labeled ribbon-graph construction."
    - title: "Bojko Bakalov and Alexander Kirillov, Lectures on Tensor Categories and Modular Functors, University Lecture Series 21, preliminary full lecture notes"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
      locator: "Chapter 2, §2.4; Chapter 3, §3.1."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a complex modular ribbon fusion category $\mathcal C$ with the pivotal trace and dual conventions stated below. Thus $\mathcal C$ is a finite semisimple $\mathbb C$-linear rigid tensor category with simple tensor unit $\mathbf1$, finitely many simple-object labels $I$, a braiding $c$, a ribbon twist $\theta$, and the spherical pivotal map $j_U=u_U\theta_U:U\to U^{\vee\vee}$. Write
$$ \operatorname{tr}_j(f)=\operatorname{Tr}_L(j_U f),\qquad d_U=\operatorname{tr}_j(\operatorname{id}_U),\qquad d_i=d_{U_i}, $$
for $f\in\operatorname{End}_{\mathcal C}(U)$ and a simple object $U_i$. The Hopf-link matrix $s$, computed with this trace, is invertible. No positivity or unitarity is included.

An oriented **FRS region datum** is a label $A=(A,m,\eta,\Delta,\epsilon)$, where $A\in\mathcal C$ and
$$ m:A\otimes A\to A,\quad \eta:\mathbf1\to A,\quad \Delta:A\to A\otimes A,\quad \epsilon:A\to\mathbf1 $$
are morphisms. Let $\alpha_{A,A,A}:(A\otimes A)\otimes A\to A\otimes(A\otimes A)$, $\lambda_A:\mathbf1\otimes A\to A$, and $\rho_A:A\otimes\mathbf1\to A$ be the associator and unitors of $\mathcal C$. The data are a **Frobenius algebra** when
$$ m\circ(m\otimes\operatorname{id}_A) =m\circ(\operatorname{id}_A\otimes m)\circ\alpha_{A,A,A}, \quad m\circ(\eta\otimes\operatorname{id}_A)=\lambda_A, \quad m\circ(\operatorname{id}_A\otimes\eta)=\rho_A, $$
$$ \alpha_{A,A,A}\circ(\Delta\otimes\operatorname{id}_A)\circ\Delta =(\operatorname{id}_A\otimes\Delta)\circ\Delta, \quad \lambda_A\circ(\epsilon\otimes\operatorname{id}_A)\circ\Delta=\operatorname{id}_A, \quad \rho_A\circ(\operatorname{id}_A\otimes\epsilon)\circ\Delta=\operatorname{id}_A, $$
and
$$ \Delta\circ m =(m\otimes\operatorname{id}_A)\circ\alpha_{A,A,A}^{-1}\circ(\operatorname{id}_A\otimes\Delta) =(\operatorname{id}_A\otimes m)\circ\alpha_{A,A,A}\circ(\Delta\otimes\operatorname{id}_A). $$
It is **special** in the source normalization when $m\circ\Delta=\operatorname{id}_A$ and $\epsilon\circ\eta=d_A\operatorname{id}_{\mathbf1}$ with $d_A=\operatorname{tr}_j(\operatorname{id}_A)\ne0$. It is **symmetric** when the two duality transposes of the Frobenius pairing $\epsilon\circ m:A\otimes A\to\mathbf1$ agree:
$$ \Phi_\ell=((\epsilon\circ m)\otimes\operatorname{id}_{A^\vee}) \circ(\operatorname{id}_A\otimes b_A) = \Phi_r=(\operatorname{id}_{A^\vee}\otimes(\epsilon\circ m)) \circ(\widetilde b_A\otimes\operatorname{id}_A):A\to A^\vee. $$
Here $b_A:\mathbf1\to A\otimes A^\vee$ and $\widetilde b_A:\mathbf1\to A^\vee\otimes A$ are the coevaluations for the fixed right and left dualities; all composites use the canonical associators and unitors. It is **simple** when it is simple as an $A$-bimodule, equivalently $\operatorname{End}_{A|A}(A)=\mathbb C\operatorname{id}_A$, where both actions on $A$ are $m$.

A **left $A$-module** is $M\in\mathcal C$ with an action $\rho_M:A\otimes M\to M$ satisfying $\rho_M\circ(m\otimes\operatorname{id}_M)=\rho_M\circ(\operatorname{id}_A\otimes\rho_M)\circ\alpha_{A,A,M}$ and $\rho_M\circ(\eta\otimes\operatorname{id}_M)=\lambda_M$. A morphism $f:M\to N$ is a left-module morphism when $f\circ\rho_M=\rho_N\circ(\operatorname{id}_A\otimes f)$; these morphisms form $\operatorname{Hom}_A(M,N)$. The categorical dual $M^\vee$ of a left module is a right $A$-module with transposed action $\rho_{M^\vee}^r:M^\vee\otimes A\to M^\vee$ characterized by
$$ \operatorname{ev}_M\circ(\operatorname{id}_{M^\vee}\otimes\rho_M) =\operatorname{ev}_M\circ(\rho_{M^\vee}^r\otimes\operatorname{id}_M) $$
as maps $M^\vee\otimes A\otimes M\to\mathbf1$, where $\operatorname{ev}_M:M^\vee\otimes M\to\mathbf1$ is the chosen evaluation. Duality and the evaluation/coevaluation snakes give this transposed action.

An **$A$-$B$-bimodule** $X$ has a left action $\rho_X^\ell:A\otimes X\to X$ and a right action $\rho_X^r:X\otimes B\to X$, each associative and unital, with
$$ \rho_X^\ell\circ(\operatorname{id}_A\otimes\rho_X^r) =\rho_X^r\circ(\rho_X^\ell\otimes\operatorname{id}_B) $$
after the canonical reassociation of $A\otimes X\otimes B$. A morphism $f:X\to Y$ is an $A$-$B$-bimodule morphism when $f\circ\rho_X^\ell=\rho_Y^\ell\circ(\operatorname{id}_A\otimes f)$ and $f\circ\rho_X^r=\rho_Y^r\circ(f\otimes\operatorname{id}_B)$; these morphisms form $\operatorname{Hom}_{A|B}(X,Y)$. A conformal boundary condition in this model is a left module. A topological defect separating regions labelled by $A$ and $B$ is represented by an $A$-$B$-bimodule; a junction field is a morphism in the corresponding typed module or bimodule Hom space. The word “topological” here means that the associated ribbon line may be isotoped without crossing insertions or other ribbons, as allowed by the RT functor. This is the abstract oriented rational FRS construction, not a classification of analytic or non-topological CFT defects.

An **oriented FRS worldsheet** is a compact oriented topological surface with boundary and a finite embedded oriented graph that cuts the surface into faces. Each face has a simple symmetric special Frobenius algebra label, each internal edge has the bimodule type prescribed by its adjacent oriented faces, each boundary edge has the adjacent left-module label, and each vertex (coupon) has a morphism in the Hom space determined by its incident labels and orientations. No conformal boundary chart or analytic structure is part of this mathematical input. Its **double** $\widehat{\Sigma}$ is obtained by gluing the surface to an oppositely oriented copy along corresponding boundary components. The **connecting manifold** $M_\Sigma$ is the standard oriented three-dimensional cobordism from the empty surface to $\widehat{\Sigma}$ in the FRS construction, with the embedded colored ribbon graph obtained from the worldsheet labels and coupons; its boundary is $\widehat{\Sigma}$. Given a weighted RT functor $Z_{\mathcal C}$ with the state spaces specified below, it assigns $M_\Sigma$ a state in $V_{\mathcal C}(\widehat{\Sigma})$.

For a right $B$-module $X$ and a left $B$-module $M$, $X\otimes_B M$ denotes the coequalizer in $\mathcal C$
$$ X\otimes B\otimes M \underset{\operatorname{id}_X\otimes\rho_M}{\overset{\rho_X^r\otimes\operatorname{id}_M}{\rightrightarrows}} X\otimes M\longrightarrow X\otimes_B M. $$
It exists because $\mathcal C$ is finite semisimple. When $X$ is an $A$-$B$-bimodule, the left $A$-action descends to $X\otimes_B M$.

For $U,V\in\mathcal C$, $U\otimes^+X\otimes^-V$ is the induced $A$-$B$-bimodule with underlying object $U\otimes X\otimes V$. Its left and right actions are respectively
$$ \rho_\ell^{U,X,V}=(\operatorname{id}_U\otimes\rho_X^\ell\otimes\operatorname{id}_V)\circ(c_{A,U}\otimes\operatorname{id}_X\otimes\operatorname{id}_V), \quad \rho_r^{U,X,V}=(\operatorname{id}_U\otimes\rho_X^r\otimes\operatorname{id}_V)\circ(\operatorname{id}_U\otimes\operatorname{id}_X\otimes c_{B,V}^{-1}), $$
with source and target reassociated by the canonical associators. This fixes the plus/minus braiding convention.

The **bulk defect-field spaces** for an $A$-$A$-bimodule $X$ and simple labels $p,q\in I$ are
$$ \mathcal D_{p,q}(X)=\operatorname{Hom}_{A|A}(U_p\otimes^+A\otimes^-U_q,X), \quad \mathcal D^\vee_{\bar p,\bar q}(X)=\operatorname{Hom}_{A|A}(U_{\bar p}\otimes^+X\otimes^-U_{\bar q},A), $$
where $U_{\bar p}\cong U_p^\vee$ and $U_{\bar q}\cong U_q^\vee$, with fixed dual-label isomorphisms. Denote by $S^2_{X;pq}(\alpha,\beta)$ the presented oriented sphere with these two field coupons joined by the $X$-ribbon. Its marked double has two sphere components, so its RT correlator is a vector in the line
$$ \mathscr L_{pq}=V_{\mathcal C}(S^2_{p,\bar p})\otimes V_{\mathcal C}(-S^2_{q,\bar q}). $$
The signed markings, parametrizations and ordered effective labels of these components are retained as input. Each factor is a genus-zero two-point block: after its specified dual-label identification it is $\operatorname{Hom}_{\mathcal C}(\mathbf1,W\otimes W^\vee)$ for a simple $W$, a one-dimensional space by rigidity and $\operatorname{End}_{\mathcal C}(W)=\mathbb C$. Fix nonzero cup vectors $v_p^+$ and $v_q^-$ in the two factors, independently of $\alpha,\beta$, and set $B_{pq}=v_p^+\otimes v_q^-$. These vectors, their composition-dual cap functionals, and their signed parametrizations are part of the pairing datum and are the same ones used in sewing. In particular, each cap takes its cup to $1$; it is not silently identified with an unnormalized categorical evaluation. Define the coefficient isomorphism
$$ \ell_{pq}:\mathscr L_{pq}\longrightarrow\mathbb C,\qquad \ell_{pq}(tB_{pq})=t\quad(t\in\mathbb C). $$
The **bulk defect two-point pairing** is
$$ c^{\mathrm{def}}_{X,p,q}(\alpha,\beta)=\ell_{pq}\!\left(C_Z(S^2_{X;pq}(\alpha,\beta))\right),\qquad C_Z(S^2_{X;pq}(\alpha,\beta))=c^{\mathrm{def}}_{X,p,q}(\alpha,\beta)B_{pq}. $$
It is complex bilinear because the supplied RT functor is linear in each coupon label. Its matrix in field bases has these scalar coefficients as entries. The correlator vector itself is not an entry of a scalar matrix. Rescaling a retained block rescales its coefficient inversely; thus its normalization must also be retained in the gluing data.

For left $B$-module $M_\ell$, left $A$-module $M_r$, and $A$-$B$-bimodule $X$, the **boundary defect-field spaces** are
$$ \mathcal B_i=\operatorname{Hom}_A((X\otimes_BM_\ell)\otimes U_i,M_r), \quad \mathcal B_i^\vee=\operatorname{Hom}_A(M_r\otimes U_{\bar i},X\otimes_BM_\ell). $$
Fix $N=X\otimes_BM_\ell$ and a split relative-tensor presentation by left $A$-module morphisms $\iota:N\to X\otimes M_\ell$, $r:X\otimes M_\ell\to N$ with $r\iota=\operatorname{id}_N$ and $\iota r=(\rho_X^r\otimes\rho_{M_\ell})(\operatorname{id}_X\otimes\Delta_B\eta_B\otimes\operatorname{id}_{M_\ell})$. These maps are part of the pairing datum. The disk has boundary labels $M_\ell,N,M_r,N$ in cyclic order, two field coupons from $\mathcal B_i,\mathcal B_i^\vee$, and an oriented $X$-edge joining the two remaining boundary junctions. At these junctions fix the underlying coupons
$$ \chi_-=\iota:N\to X\otimes M_\ell,\qquad \chi_+=(\operatorname{id}_{X^\vee}\otimes r)(\widetilde b_X\otimes\operatorname{id}_{M_\ell}):M_\ell\to X^\vee\otimes N. $$
Here $\widetilde b_X:\mathbf1\to X^\vee\otimes X$ is the fixed left coevaluation. The reversed end carries the dual $B$-$A$-bimodule $X^\vee$: its left $B$-action $\rho_{X^\vee}^\ell$ and right $A$-action $\rho_{X^\vee}^r$ are the duality transposes characterized by
$$ \widetilde{\operatorname{ev}}_X(\rho_X^r\otimes\operatorname{id}_{X^\vee})=\widetilde{\operatorname{ev}}_X(\operatorname{id}_X\otimes\rho_{X^\vee}^\ell),\qquad \operatorname{ev}_X(\rho_{X^\vee}^r\otimes\operatorname{id}_X)=\operatorname{ev}_X(\operatorname{id}_{X^\vee}\otimes\rho_X^\ell). $$
The first equality is on $X\otimes B\otimes X^\vee$ and the second on $X^\vee\otimes A\otimes X$. Thus $\chi_-$ is left $A$-linear and $\chi_+$ is left $B$-linear, with the action on the first factor of each target. All four vertices use the incoming boundary edge as distinguished edge. Fix a nonzero standard block $B_i^{\mathrm{bnd}}$ in the one-dimensional state space of this disk's marked double and its coefficient functional $\ell_i^{\mathrm{bnd}}(tB_i^{\mathrm{bnd}})=t$, with the same signed parametrization and chiral cup/cap choices as the sewing. The boundary defect two-point matrix has entries $\ell_i^{\mathrm{bnd}}(C_Z(D(\psi_+,\psi_-)))$, where $D(\psi_+,\psi_-)$ is the disk with the two field coupons and the fixed junction coupons just specified. The block and the split presentation are retained as input; no freely rescalable junction coupon is suppressed. For the defect-free boundary cut with left $A$-modules $M_\ell,M_r$, the paired field spaces are $\operatorname{Hom}_A(M_\ell\otimes U_i,M_r)$ and $\operatorname{Hom}_A(M_r\otimes U_{\bar i},M_\ell)$; their pairing is the scalar coefficient of the oriented disk correlator with the two boundary-changing fields, extracted by the same fixed two-point-block convention $\ell_i^{\mathrm{bnd}}$. For any such pairing, **nondegenerate** means that its induced maps from each of the two finite-dimensional spaces to the dual of the other are isomorphisms. Nondegeneracy is a separate theorem hypothesis whenever an inverse matrix is used; it is not inferred just from the names of the algebra or defect data.

The graph data in the preceding worldsheet definition have the following precise presentation. The embedded graph has no univalent vertices, contains the surface boundary, and is a finite cell decomposition; its marked field vertices are two-valent. Each other vertex has a distinguished incident half-edge, so the surface orientation fixes an ordered cyclic list of incident edges. For a junction, cut this list at the distinguished half-edge, form the incoming and outgoing objects in that order, tensoring over each intervening face algebra by the coequalizer above, and require its coupon to be a morphism in the resulting module or bimodule Hom space. At a bulk field vertex on an $A$-$A$ defect $X$, the two chiral labels and coupon lie in $\mathcal D_{p,q}(X)$ or $\mathcal D^\vee_{\bar p,\bar q}(X)$; at a boundary field vertex they lie in $\mathcal B_i$ or $\mathcal B_i^\vee$. The orientation of each edge and the source, target and any dual objects in its coupon are part of the presentation; no dual bimodule action is implicit. Thus every vertex coupon has a specified source, target, tensor order and module type.

For the connecting manifold construction, let $\operatorname{Or}(\Sigma)=\{(x,o):x\in\Sigma,\ o\text{ is a local orientation at }x\}$. The double is $\widehat\Sigma=\operatorname{Or}(\Sigma)/\sim$, with $(x,o)\sim(x,-o)$ for $x\in\partial\Sigma$; for oriented $\Sigma$ this is $\Sigma\cup_{\partial\Sigma}(-\Sigma)$. The connecting manifold is the explicit quotient
$$M_\Sigma=(\widehat\Sigma\times[-1,1])/\bigl(([x,o],t)\sim([x,-o],-t)\bigr).$$
The surface embeds by $x\mapsto[x,\pm o,0]$, the boundary is $\widehat\Sigma$, and the orientation is the FRS orientation induced from the double and interval, with the source's inward-normal boundary convention. The boundary reference subspace is $\lambda_\Sigma=\ker\bigl(H_1(\widehat\Sigma;\mathbb R)\to H_1(M_\Sigma;\mathbb R)\bigr)$. The actual finite framed $\mathcal C$-colored ribbon graph $R_\Sigma$ in this manifold is part of the presentation: its ribbons carry the specified algebra, defect and boundary-module labels, and its coupons carry the specified morphisms with their orientations and tensor order. Its region network is built from the stated Frobenius structure maps and module actions; a compatible cellulation and its resulting graph are retained as part of the presentation. The weight $n_\Sigma\in\mathbb Z$ is also part of the weighted bordism input.

For a connected double of genus $g$ with ordered marked labels $W_1,\ldots,W_n$, the state space convention is $V_\mathcal C(\widehat\Sigma)=\operatorname{Hom}_\mathcal C(\mathbf1,W_1\otimes\cdots\otimes W_n\otimes H^{\otimes g})$, where $H=\bigoplus_{i\in I}U_i\otimes U_i^\vee$; disconnected doubles use tensor products and the empty surface has state space $\mathbb C$. The additional functor input consists of a specified symmetric monoidal bordism category $\mathsf B_{\mathcal C}$ and a symmetric monoidal functor $Z_{\mathcal C}:\mathsf B_{\mathcal C}\to\operatorname{Vect}^{\mathrm{fd}}_{\mathbb C}$. Its objects include the parametrized marked doubles with their reference subspaces, its morphisms include the presented weighted decorated connecting bordisms $(M_\Sigma,R_\Sigma,n_\Sigma):\varnothing\to\widehat\Sigma$, and its composition, weight, duality and normalization conventions are supplied with it. Require its ribbon-graph evaluation to be complex linear in each coupon morphism separately. Require the functor's object assignments to be the stated $V_{\mathcal C}$, with $Z_{\mathcal C}(\varnothing)=\mathbb C$. In particular its morphism assignment supplies a linear map
$$ Z_{\mathcal C}(M_\Sigma,R_\Sigma,n_\Sigma):\mathbb C\longrightarrow V_{\mathcal C}(\widehat\Sigma). $$
The assigned correlator is $C_Z(\Sigma)=Z_{\mathcal C}(M_\Sigma,R_\Sigma,n_\Sigma)(1)$. The algebraic state-space formula alone supplies no such map. This definition is conditional on the additional category and functor input; it asserts no existence, surgery construction or choice-independence theorem for it.

## Definition references

[[def-modular-ribbon-category-and-hopf-link-data]]

[[def-rt-state-spaces]]

## Remarks

The equations below display the Frobenius identity as equality of three typed morphisms. They repeat the defining equation only to make its source and target visible; the definition and any later proof use the equations above.

```tikzcd
\begin{tikzcd}
A\otimes A
  \arrow[r, shift left=1.2ex, "F_0"]
  \arrow[r, "F_\ell"']
  \arrow[r, shift right=1.2ex, "F_r"']
&
A\otimes A
\end{tikzcd}
```

Here $F_0=\Delta\circ m$, $F_\ell=(m\otimes\operatorname{id}_A)\circ\alpha^{-1}_{A,A,A}\circ(\operatorname{id}_A\otimes\Delta)$, and $F_r=(\operatorname{id}_A\otimes m)\circ\alpha_{A,A,A}\circ(\Delta\otimes\operatorname{id}_A)$.
