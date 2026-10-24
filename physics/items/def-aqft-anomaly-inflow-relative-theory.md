---
id: def-aqft-anomaly-inflow-relative-theory
kind: definition
title: Relative boundary theory and invertible anomaly inflow
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-aqft-global-anomaly-holonomy
  - def-aqft-thooft-anomaly
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-real-pin-spin-topological-double-covers
dependency_roles:
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  thm-real-pin-spin-topological-double-covers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: >-
  This defines the line-valued boundary and invertible-bulk interface for a
  specified spin theory and compatible background fields. It does not assert
  that a proposed bulk exists or that a continuum quantum field theory has
  been constructed.
sources:
  references:
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166; anomaly lines and relative/invertible field theory structure."
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§5, PDF pp. 31–35; parallel transport and holonomy of the inverse determinant line."
verification:
  precheck: pass
---

## Definition

Assume the Countable Choice convention of the global-holonomy definition. For $n\ge1$ use $\mathrm{Cl}_{0,n}$ with $vw+wv=-2\langle v,w\rangle$, and define $\operatorname{Spin}(n)$ as the subgroup of even products of unit vectors. Its standard cover $\rho_n(s)(v)=svs^{-1}$ is onto $SO(n)$ with kernel $\{1,-1\}$; in particular $\operatorname{Spin}(1)=\{1,-1\}$. Principal bundles and connections have the smooth right-action and horizontal-complement meaning stated in the global-holonomy definition. Fix an integer $d\ge1$. Let $Y$ be a compact oriented smooth Riemannian $(d+1)$-manifold with boundary $M=\partial Y$, oriented so that the outward unit normal followed by a positively oriented frame of $M$ gives the orientation of $Y$. Let $F^+_{\mathrm{SO}}(Y)$ be the principal bundle of positively oriented orthonormal frames and choose a principal right $\operatorname{Spin}(d+1)$-bundle $Q_Y$ with a smooth equivariant double-cover map $\lambda_Y:Q_Y\to F^+_{\mathrm{SO}}(Y)$ over $\operatorname{Spin}(d+1)\to\mathrm{SO}(d+1)$. This is the spin structure on $Y$; its connection is the lift of the Levi-Civita connection. On $M$, let $F^+_{\mathrm{SO}}(TM)$ denote the positively oriented orthonormal frame bundle for the induced boundary metric. The frames $(\nu_{\mathrm{out}},e_1,\ldots,e_d)$ in $F^+_{\mathrm{SO}}(TY)|_M$ form a reduction identified with $F^+_{\mathrm{SO}}(TM)$, where $\nu_{\mathrm{out}}$ is the outward unit normal. The preimage of this reduction under $\lambda_Y$, with structure group $\jmath(\operatorname{Spin}(d))=\rho_{d+1}^{-1}(\operatorname{diag}(1,SO(d)))$, is a principal $\operatorname{Spin}(d)$-bundle $Q_M\to F^+_{\mathrm{SO}}(TM)$ double-covering that frame bundle; this is the induced boundary spin structure. The embedding $\jmath$ is induced by $\mathbb R^d\to\mathbb R^{d+1}$, $(x_1,\ldots,x_d)\mapsto(0,x_1,\ldots,x_d)$, on Clifford algebras and their even unit-vector products; it intertwines $\rho_d$ with the block embedding $h\mapsto\operatorname{diag}(1,h)$. The preimage equality is verified below. Thus the subgroup fixes the first vector through its orthogonal action, rather than by the spinor representation. A background $b$ consists of these metrics and spin structures, together with any specified principal-bundle connections and associated fields on $Y$; restriction gives the boundary background $b|_M$.

A $d$-dimensional boundary theory is **relative to an invertible bulk theory** when its partition value is a vector $Z_\partial(M,b|_M)$ in a specified one-dimensional Hermitian line $\mathcal L_\partial(M,b|_M)$, and the bulk assigns a one-dimensional Hermitian line $\mathcal L_{\mathrm{bulk}}(M,b|_M)$ together with a specified unitary isomorphism $\mathcal L_{\mathrm{bulk}}(M,b|_M)\cong\mathcal L_\partial(M,b|_M)^*$ and a vector $Z_{\mathrm{bulk}}(Y,b)$ in that bulk line. The canonical evaluation

$$\mathrm{ev}:\mathcal L_\partial(M,b|_M)\otimes\mathcal L_{\mathrm{bulk}}(M,b|_M)\longrightarrow\mathbb C$$

then defines the combined scalar amplitude. Invertibility means that the bulk assigns a one-dimensional line to each closed $d$-dimensional background and an isomorphism to each bordism map; orientation reversal replaces the assigned line by its dual. For every finite-dimensional smooth parameter manifold $T$ and smooth family of compatible boundary backgrounds over $T$, assume the boundary and bulk lines form Hermitian line bundles $\mathcal L_\partial$ and $\mathcal L_{\mathrm{bulk}}$ over $T$ with specified unitary connections $\nabla^\partial$ and $\nabla^{\mathrm{bulk}}$. The unitary line-duality isomorphism above is part of the background data and is equivariant under endpoint gauge maps, but it is not assumed to preserve these connections. A loop $\gamma$ consists of a smooth path of such backgrounds and an endpoint gauge identification $u$; let $\mathrm{PT}^{\partial}_\gamma$ and $\mathrm{PT}^{\mathrm{bulk}}_\gamma$ denote parallel transport for these connections, and let $u_*^\partial$ and $u_*^{\mathrm{bulk}}$ be the induced endpoint maps on the two lines. Denote the scalars of $(u_*^\partial)^{-1}\circ\mathrm{PT}^{\partial}_\gamma$ and $(u_*^{\mathrm{bulk}})^{-1}\circ\mathrm{PT}^{\mathrm{bulk}}_\gamma$ by $\operatorname{Hol}_\gamma(\mathcal L_\partial)$ and $\operatorname{Hol}_\gamma(\mathcal L_{\mathrm{bulk}})$, respectively; they lie in $U(1)$ because the line metrics and connections are Hermitian and unitary. Its mapping torus $Y_\gamma$ has underlying manifold $M\times S^1$, with the principal-bundle and associated fields glued at the circle seam using $u$ and any specified spin clutch, and product orientation $\operatorname{or}(M)\wedge dt$. Whenever the closed bulk response on this mapping torus is used to compute the bulk-line holonomy, the convention is

$$Z_{\mathrm{bulk}}(Y_\gamma,b_\gamma)=\operatorname{Hol}_{\gamma}(\mathcal L_{\mathrm{bulk}}),$$

not its inverse. This equality is part of the adopted bulk/line data. The boundary/bulk pair cancels that anomaly along $\gamma$ exactly when

$$\operatorname{Hol}_{\gamma}(\mathcal L_\partial)\operatorname{Hol}_{\gamma}(\mathcal L_{\mathrm{bulk}})=1.$$

The diagram records this condition: the vertical maps are the line evaluation at the two endpoints, and the top map is parallel transport on both lines.

~~~tikzcd
\mathcal L_{\partial,0}\otimes\mathcal L_{\mathrm{bulk},0}
  \arrow[r,"\mathrm{PT}^{\partial}_{\gamma}\otimes\mathrm{PT}^{\mathrm{bulk}}_{\gamma}"]
  \arrow[d,"\mathrm{ev}_0"'] &
\mathcal L_{\partial,1}\otimes\mathcal L_{\mathrm{bulk},1}
  \arrow[d,"\mathrm{ev}_1"] \\
\mathbb C \arrow[r,"\mathrm{id}_{\mathbb C}"'] & \mathbb C
~~~

## Definition references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin structures and negative-square Clifford convention]]

[[thm-real-pin-spin-topological-double-covers|Surjectivity and two-element kernel of the spin cover]]

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

## Facts & Assumptions

**Given:** The spin bordism, compatible backgrounds, boundary anomaly line, and candidate invertible bulk line in the Definition.

[F1] [[def-aqft-global-anomaly-holonomy]] defines the boundary holonomy as the scalar of parallel transport on its one-dimensional Hermitian line.

[F2] [[def-aqft-thooft-anomaly]] defines only a four-dimensional local perturbative anomaly class for a nondynamical background subalgebra modulo admissible local counterterms; it explicitly excludes determinant-line holonomy and makes no global-anomaly claim. It therefore does not establish that a given loop phase cancels or that a bulk exists.

[F3] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]] fixes the negative-square Clifford and equivariant principal-cover convention; [[thm-real-pin-spin-topological-double-covers]] supplies the surjective double cover with kernel $\{1,-1\}$.

[A1] The unitary, endpoint-gauge-equivariant bulk/boundary line-duality and its compatibility with bordism gluing are part of the adopted relative-theory data; this definition alone does not construct those data for any proposed model.

[L1] Freed, Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166, gives the Pfaffian-line and invertible/relative-theory interface; the later thesis discussion in §11.4 is not used as a proved theorem.

## Proof

1.1 The tangent-subspace inclusion induces an injective Clifford-algebra map: the ordered products of distinct tangent basis vectors remain distinct members of the ambient Clifford basis. Every even product of tangent unit vectors commutes with the first vector $e_0$, because each factor anticommutes with $e_0$. Its orthogonal action fixes $e_0$ and restricts to $\rho_d$ on $e_0^\perp$. Conversely, if $a\in\operatorname{Spin}(d+1)$ has $\rho_{d+1}(a)=\operatorname{diag}(1,h)$, surjectivity in [F3] gives $s\in\operatorname{Spin}(d)$ with $\rho_d(s)=h$. Then $a\jmath(s)^{-1}\in\{1,-1\}\subset\jmath(\operatorname{Spin}(d))$, proving the stated preimage equality. In a boundary orthonormal-frame chart, lift an adapted frame locally through the double cover $\lambda_Y$; all its preimages are its translates by this subgroup. These local charts make the preimage a smooth principal $\operatorname{Spin}(d)$-bundle over $M$, with the equivariant double covering to the boundary frame bundle. This includes $d=1$ and also an empty boundary, where the bundles are empty. [given, F3, algebra, construct]

1.2 By [A1], $\mathcal L_{\mathrm{bulk}}(M,b|_M)$ is the dual of $\mathcal L_\partial(M,b|_M)$. Evaluation of a one-dimensional vector space against its dual is a well-defined nondegenerate pairing to $\mathbb C$, so the tensor of the two boundary values gives the stated scalar. [given, A1, algebra]

2.1 The endpoint gauge maps preserve the specified evaluations by the equivariance included in the line-duality data. Write them as $u_*^\partial$ and $u_*^{\mathrm{bulk}}$. Then the scalar comparing $\mathrm{ev}_1\circ(\mathrm{PT}^{\partial}_\gamma\otimes\mathrm{PT}^{\mathrm{bulk}}_\gamma)$ with $\mathrm{ev}_0$ equals the scalar of $\mathrm{ev}_0\circ(((u_*^\partial)^{-1}\circ\mathrm{PT}^{\partial}_\gamma)\otimes((u_*^{\mathrm{bulk}})^{-1}\circ\mathrm{PT}^{\mathrm{bulk}}_\gamma))$. The latter is multiplication by $\operatorname{Hol}_\gamma(\mathcal L_\partial)\operatorname{Hol}_\gamma(\mathcal L_{\mathrm{bulk}})$ because both lines are one-dimensional. Hence the displayed diagram commutes exactly when this product is $1$. This is a definition of the scoped inflow interface, not an existence theorem for a bulk. [F2] explicitly excludes determinant-line holonomy, so it does not derive this geometric cancellation criterion or identify a particular global phase. [given, F1, F2, A1, L1, step 1.2, algebra] ∎
