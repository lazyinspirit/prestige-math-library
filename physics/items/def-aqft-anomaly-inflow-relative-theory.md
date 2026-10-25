---
id: def-aqft-anomaly-inflow-relative-theory
kind: definition
title: Relative boundary theory and invertible anomaly inflow
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-parallel-transport-along-a-piecewise-smooth-curve
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-parallel-transport-is-a-linear-isomorphism
  - prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric
  - def-lax-strong-and-strict-monoidal-functor
  - def-braided-monoidal-functor
  - def-aqft-global-anomaly-holonomy
  - def-aqft-thooft-anomaly
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-real-pin-spin-topological-double-covers
dependency_roles:
  def-parallel-transport-along-a-piecewise-smooth-curve: mathematical-premise
  thm-existence-and-uniqueness-of-parallel-sections: mathematical-premise
  thm-parallel-transport-is-a-linear-isomorphism: mathematical-premise
  prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric: mathematical-premise
  def-lax-strong-and-strict-monoidal-functor: mathematical-premise
  def-braided-monoidal-functor: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Assume the Countable Choice convention of the global-holonomy definition. For $n\ge1$ use $\mathrm{Cl}_{0,n}$ with $vw+wv=-2\langle v,w\rangle$, and define $\operatorname{Spin}(n)$ as the subgroup of even products of unit vectors. Its standard cover $\rho_n(s)(v)=svs^{-1}$ is onto $SO(n)$ with kernel $\{1,-1\}$; in particular $\operatorname{Spin}(1)=\{1,-1\}$. Principal bundles and connections have the smooth right-action and horizontal-complement meaning stated in the global-holonomy definition. Fix an integer $d\ge1$. Let $Y$ be a compact oriented smooth Riemannian $(d+1)$-manifold with boundary $M=\partial Y$, oriented so that the outward unit normal followed by a positively oriented frame of $M$ gives the orientation of $Y$. Let $F^+_{\mathrm{SO}}(Y)$ be the principal bundle of positively oriented orthonormal frames and choose a principal right $\operatorname{Spin}(d+1)$-bundle $Q_Y$ with a smooth equivariant double-cover map $\lambda_Y:Q_Y\to F^+_{\mathrm{SO}}(Y)$ over $\operatorname{Spin}(d+1)\to\mathrm{SO}(d+1)$. This is the spin structure on $Y$; its connection is the lift of the Levi-Civita connection. On $M$, let $F^+_{\mathrm{SO}}(TM)$ denote the positively oriented orthonormal frame bundle for the induced boundary metric. The frames $(\nu_{\mathrm{out}},e_1,\ldots,e_d)$ in $F^+_{\mathrm{SO}}(TY)|_M$ form a reduction identified with $F^+_{\mathrm{SO}}(TM)$, where $\nu_{\mathrm{out}}$ is the outward unit normal. The preimage of this reduction under $\lambda_Y$, with structure group $\jmath(\operatorname{Spin}(d))=\rho_{d+1}^{-1}(\operatorname{diag}(1,SO(d)))$, is a principal $\operatorname{Spin}(d)$-bundle $Q_M\to F^+_{\mathrm{SO}}(TM)$ double-covering that frame bundle; this is the induced boundary spin structure. The embedding $\jmath$ is induced by $\mathbb R^d\to\mathbb R^{d+1}$, $(x_1,\ldots,x_d)\mapsto(0,x_1,\ldots,x_d)$, on Clifford algebras and their even unit-vector products; it intertwines $\rho_d$ with the block embedding $h\mapsto\operatorname{diag}(1,h)$. The preimage equality is verified below. Thus the subgroup fixes the first vector through its orthogonal action, rather than by the spinor representation. A background $b$ consists of these metrics and spin structures, together with any specified principal-bundle connections and associated fields on $Y$; restriction gives the boundary background $b|_M$.

A $d$-dimensional boundary theory is **relative to an invertible bulk theory** when its partition value is a vector $Z_\partial(M,b|_M)$ in a specified one-dimensional Hermitian line $\mathcal L_\partial(M,b|_M)$, and the bulk assigns a one-dimensional Hermitian line $\mathcal L_{\mathrm{bulk}}(M,b|_M)$ together with a specified unitary isomorphism $\mathcal L_{\mathrm{bulk}}(M,b|_M)\cong\mathcal L_\partial(M,b|_M)^*$ and a vector $Z_{\mathrm{bulk}}(Y,b)$ in that bulk line. The canonical evaluation

$$\mathrm{ev}:\mathcal L_\partial(M,b|_M)\otimes\mathcal L_{\mathrm{bulk}}(M,b|_M)\longrightarrow\mathbb C$$

then defines the combined scalar amplitude. The term **invertible bulk theory** requires the following supplied functorial data, not only a collection of lines and vectors.

The selected model specifies an admissible geometric bordism category $\mathsf B_{d+1}$. Its objects $X=(M,b_M)$ are closed compact oriented smooth spin $d$-manifolds with admitted metrics, principal-bundle connections and associated background fields, including the empty object $\varnothing$. A nonidentity bordism $W:X_0\to X_1$ is represented by a compact oriented smooth spin $(d+1)$-manifold with boundary identified with $\overline M_0\sqcup M_1$, where the bar reverses orientation with the induced spin convention, and with compatible background fields restricting to $b_0,b_1$ under these identifications. Representatives carry specified smooth product collars of their boundary components; all metric and field data are of product form on these collars. Bordisms are identified by orientation-, spin- and background-preserving diffeomorphisms respecting the boundary identifications and collar germs. Admissibility is closed under disjoint union and gluing of matching outgoing and incoming backgrounds. Composition $W_2\circ W_1$ glues these matching collars and fields; the model specifies the collar/germ convention so that iterated gluing is associative on morphisms. Identity arrows are formal zero-thickness product cylinders, with $W\circ1_{X_0}=W=1_{X_1}\circ W$; positive-thickness metric cylinders remain actual bordisms and are not identified with these identities merely because they are cylinders. Background-preserving spin and gauge isomorphisms are also admitted arrows, compose by their actual isomorphism law, and act on boundary identifications when composed with bordisms. Disjoint union supplies the symmetric monoidal product, with unit $\varnothing$ and the usual component-permutation isomorphisms. These admissibility, collar and isomorphism conventions are required model data satisfying the stated category and tensor laws, not an existence assertion for arbitrary proposed fields. The particular filling $Y$ used above must be an admitted morphism $\varnothing\to(M,b|_M)$ with its specified collar-compatible background. Neither equivalence of bordisms nor admissibility forgets their metric or connection data.

Let $\mathsf{Line}_{\mathbb C}^{\mathrm{Herm}}$ have one-dimensional complex Hermitian spaces as objects and complex-linear isomorphisms as morphisms, with ordinary composition, Hermitian tensor product, unit $\mathbb C$, and the tensor flip as symmetry. An invertible bulk assignment is a strong symmetric monoidal functor $Z_{\mathrm{bulk}}:\mathsf B_{d+1}\to\mathsf{Line}_{\mathbb C}^{\mathrm{Herm}}$. Explicitly, it assigns the line $\mathcal L_{\mathrm{bulk}}(X)$ to $X$, an isomorphism

$$Z_{\mathrm{bulk}}(W):\mathcal L_{\mathrm{bulk}}(X_0)\longrightarrow\mathcal L_{\mathrm{bulk}}(X_1)$$

to $W:X_0\to X_1$, and specified unitary tensor and unit identifications $J_{X,X'}:\mathcal L_{\mathrm{bulk}}(X)\otimes\mathcal L_{\mathrm{bulk}}(X')\to\mathcal L_{\mathrm{bulk}}(X\sqcup X')$ and $J_0:\mathbb C\to\mathcal L_{\mathrm{bulk}}(\varnothing)$. Require

$$Z_{\mathrm{bulk}}(1_X)=1_{\mathcal L_{\mathrm{bulk}}(X)},\qquad Z_{\mathrm{bulk}}(W_2\circ W_1)=Z_{\mathrm{bulk}}(W_2)\circ Z_{\mathrm{bulk}}(W_1),$$

and $Z_{\mathrm{bulk}}(W\sqcup W')\circ J_{X_0,X'_0}=J_{X_1,X'_1}\circ(Z_{\mathrm{bulk}}(W)\otimes Z_{\mathrm{bulk}}(W'))$. The $J$ maps satisfy the associativity and left/right unit coherence equations for a strong monoidal functor, and the symmetry equation $Z_{\mathrm{bulk}}(\mathrm{swap}_{X,X'})\circ J_{X,X'}=J_{X',X}\circ\mathrm{flip}$. For orientation reversal supply unitary identifications $\mathcal L_{\mathrm{bulk}}(\overline X)\cong\mathcal L_{\mathrm{bulk}}(X)^*$, compatible with tensor products and evaluation. If $W^\vee:\overline X_1\to\overline X_0$ denotes an admitted bordism with incoming/outgoing roles reversed, require that its map is the algebraic dual $Z_{\mathrm{bulk}}(W)^*$ under those identifications; this is part of the supplied duality data. For a filling $Y:\varnothing\to X$ the vector already used above is precisely $Z_{\mathrm{bulk}}(Y)(J_0(1))$, and for a closed bulk bordism $W:\varnothing\to\varnothing$ its scalar response is the scalar of $J_0^{-1}Z_{\mathrm{bulk}}(W)J_0$. Every assigned bordism map is invertible, but need not be unitary; the metric-dependent response is not thereby assumed topological. The boundary/bulk duality pairing used for the relative amplitude must respect these declared gluing and tensor identifications.

For every finite-dimensional smooth parameter manifold $T$ and smooth family of compatible boundary backgrounds over $T$, assume the boundary and bulk lines form Hermitian line bundles $\mathcal L_\partial$ and $\mathcal L_{\mathrm{bulk}}$ over $T$ with specified unitary connections $\nabla^\partial$ and $\nabla^{\mathrm{bulk}}$. Here a unitary connection is a complex-linear covariant derivative satisfying $d\langle s,t\rangle=\langle\nabla s,t\rangle+\langle s,\nabla t\rangle$ for smooth local sections. Parallel transport along the smooth background path $\gamma:[0,1]\to T$ evaluates at $1$ the unique section along the path satisfying $\nabla_{\dot\gamma}s=0$ with its prescribed initial value at $0$. This transport definition uses the supplied line bundles and connections in any boundary dimension $d\ge1$; it does not assume a chiral Dirac construction of either line. The unitary line-duality isomorphism above is part of the background data and is equivariant under endpoint gauge maps, but it is not assumed to preserve these connections. A loop $\gamma$ consists of a smooth path of such backgrounds and an endpoint gauge identification $u$; let $\mathrm{PT}^{\partial}_\gamma$ and $\mathrm{PT}^{\mathrm{bulk}}_\gamma$ denote parallel transport for these connections, and let $u_*^\partial$ and $u_*^{\mathrm{bulk}}$ be the induced endpoint maps on the two lines, required to be complex-linear unitary isomorphisms for their specified Hermitian metrics. Denote the scalars of $(u_*^\partial)^{-1}\circ\mathrm{PT}^{\partial}_\gamma$ and $(u_*^{\mathrm{bulk}})^{-1}\circ\mathrm{PT}^{\mathrm{bulk}}_\gamma$ by $\operatorname{Hol}_\gamma(\mathcal L_\partial)$ and $\operatorname{Hol}_\gamma(\mathcal L_{\mathrm{bulk}})$, respectively; they lie in $U(1)$ because both parallel transports and endpoint gauge maps are unitary. Its mapping torus $Y_\gamma$ has underlying manifold $M\times S^1$, with the principal-bundle and associated fields glued at the circle seam using $u$ and any specified spin clutch, and product orientation $\operatorname{or}(M)\wedge dt$. Whenever the closed bulk response on this mapping torus is used to compute the bulk-line holonomy, the convention is

$$Z_{\mathrm{bulk}}(Y_\gamma,b_\gamma)=\operatorname{Hol}_{\gamma}(\mathcal L_{\mathrm{bulk}}),$$

not its inverse. This equality is part of the adopted bulk/line data. The boundary/bulk pair cancels that anomaly along $\gamma$ exactly when

$$\operatorname{Hol}_{\gamma}(\mathcal L_\partial)\operatorname{Hol}_{\gamma}(\mathcal L_{\mathrm{bulk}})=1.$$

The diagram records this condition: the vertical maps are the line evaluation at the two endpoints, and the top map is parallel transport on both lines.

```tikzcd
\begin{tikzcd}[column sep=12em, row sep=4em]
\mathcal L_{\partial,0}\otimes\mathcal L_{\mathrm{bulk},0}
  \arrow[r,"{\mathrm{PT}^{\partial}_{\gamma}\otimes\mathrm{PT}^{\mathrm{bulk}}_{\gamma}}"]
  \arrow[d,"{\mathrm{ev}_0}"'] &
\mathcal L_{\partial,1}\otimes\mathcal L_{\mathrm{bulk},1}
  \arrow[d,"{\mathrm{ev}_1}"] \\
\mathbb C \arrow[r,"{\mathrm{id}_{\mathbb C}}"'] & \mathbb C
\end{tikzcd}
```

## Definition references

[[def-parallel-transport-along-a-piecewise-smooth-curve|Parallel transport for a supplied connection, independent of the spacetime dimension]]

[[thm-existence-and-uniqueness-of-parallel-sections|Existence and uniqueness on the compact background path]]

[[thm-parallel-transport-is-a-linear-isomorphism|Invertibility and real linearity of the underlying transport]]

[[prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric|Metric-compatible transport preserves the underlying real Hermitian metric]]

[[def-lax-strong-and-strict-monoidal-functor|Exact associativity and unit coherence equations for the bulk tensor identifications]]

[[def-braided-monoidal-functor|Symmetry-preservation equation, with both braidings the symmetric tensor swaps]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin structures and negative-square Clifford convention]]

[[thm-real-pin-spin-topological-double-covers|Surjectivity and two-element kernel of the spin cover]]

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

## Facts & Assumptions

**Given:** The spin bordism, compatible backgrounds, boundary anomaly line, and candidate invertible bulk line in the Definition.

[F1] [[def-aqft-global-anomaly-holonomy]] treats even $d\ge2$, a compact closed smooth oriented Riemannian spin $d$-manifold, and a smooth unitary gauge twist, under Countable Choice. Its chiral Dirac inverse determinant line has the stated kernel/cokernel convention, Fredholm and Sobolev realizations, and supplied admissible spectral-cut, zeta/heat, Quillen-metric, Bismut–Freed-connection and gauge-naturality data (and actual Pfaffian data when that alternative is used). Under those hypotheses it defines the endpoint-identified unitary line holonomy. It is an even-dimensional chiral realization only, not a supplier of a chiral determinant line or its analytic data for arbitrary $d$. The general boundary and bulk lines here are independently supplied, and their holonomy uses the dimension-independent transport argument below.

[F2] [[def-aqft-thooft-anomaly]] defines only a four-dimensional local perturbative anomaly class for a nondynamical background subalgebra modulo admissible local counterterms; it explicitly excludes determinant-line holonomy and makes no global-anomaly claim. It therefore does not establish that a given loop phase cancels or that a bulk exists.

[F3] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]] fixes the negative-square Clifford and equivariant principal-cover convention; [[thm-real-pin-spin-topological-double-covers]] supplies the surjective double cover with kernel $\{1,-1\}$.

[A1] The geometric bordism category, strong symmetric monoidal bulk assignment, duality and gluing equations in the Definition, and the unitary endpoint gauge maps and endpoint-gauge-equivariant bulk/boundary line-duality are supplied relative-theory data. The bulk map on an endpoint gauge arrow is the same endpoint identification used in its line-family holonomy. The stated smooth line-family, metric and connection conditions remain additional requirements on these data; functoriality alone does not construct them. This definition alone does not construct a bulk for any proposed model.

[F4] The tensor comparisons obey the exact associativity and unit equations of [[def-lax-strong-and-strict-monoidal-functor]] and the symmetry-preservation equation of [[def-braided-monoidal-functor]], specialized to symmetric monoidal categories. These are required coherence conditions, not a claim that arbitrary assigned lines and maps extend to a functor.

[F5] [[def-parallel-transport-along-a-piecewise-smooth-curve]] defines transport for a supplied connection and compact-interval curve using the unique parallel section of [[thm-existence-and-uniqueness-of-parallel-sections]]. The transport is a real-linear isomorphism by [[thm-parallel-transport-is-a-linear-isomorphism]]; it is an isometry for a supplied metric-compatible real bundle connection by [[prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric]]. These statements apply to the underlying real rank-two bundle of a complex Hermitian line, with metric $h_{\mathbb R}(s,t)=\operatorname{Re}\langle s,t\rangle$ and the given connection. No chiral operator or boundary-dimension assumption occurs in these transport statements.

[L1] Freed, Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166, gives the Pfaffian-line and invertible/relative-theory interface; the later thesis discussion in §11.4 is not used as a proved theorem.

## Proof

1.1 The tangent-subspace inclusion induces an injective Clifford-algebra map: the ordered products of distinct tangent basis vectors remain distinct members of the ambient Clifford basis. Every even product of tangent unit vectors commutes with the first vector $e_0$, because each factor anticommutes with $e_0$. Its orthogonal action fixes $e_0$ and restricts to $\rho_d$ on $e_0^\perp$. Conversely, if $a\in\operatorname{Spin}(d+1)$ has $\rho_{d+1}(a)=\operatorname{diag}(1,h)$, surjectivity in [F3] gives $s\in\operatorname{Spin}(d)$ with $\rho_d(s)=h$. Then $a\jmath(s)^{-1}\in\{1,-1\}\subset\jmath(\operatorname{Spin}(d))$, proving the stated preimage equality. In a boundary orthonormal-frame chart, lift an adapted frame locally through the double cover $\lambda_Y$; all its preimages are its translates by this subgroup. These local charts make the preimage a smooth principal $\operatorname{Spin}(d)$-bundle over $M$, with the equivariant double covering to the boundary frame bundle. This includes $d=1$ and also an empty boundary, where the bundles are empty. [given, F3, algebra, construct]

1.2 By [A1], $\mathcal L_{\mathrm{bulk}}(M,b|_M)$ is the dual of $\mathcal L_\partial(M,b|_M)$. Evaluation of a one-dimensional vector space against its dual is a well-defined nondegenerate pairing to $\mathbb C$, so the tensor of the two boundary values gives the stated scalar. [given, A1, algebra]

1.3 For an admitted filling, the bulk map has domain $\mathcal L_{\mathrm{bulk}}(\varnothing)$ and codomain $\mathcal L_{\mathrm{bulk}}(X)$, so applying it to $J_0(1)$ gives a vector in the required line. For a closed bulk bordism, conjugating its map by $J_0$ gives an endomorphism of $\mathbb C$, hence the stated scalar. The explicit composition equation makes successive gluing evaluate by composition of these typed maps; the tensor and unit equations and [F4] make this compatible with disjoint union and the empty ends. No geometric category or bulk functor is constructed by this type check. [A1, F4, algebra]

1.4 For either supplied Hermitian line family, the unitary connection preserves $h_{\mathbb R}$, so [F5] gives an invertible real-linear isometric transport along $\gamma$. If $s$ is its parallel section with initial value $v$, complex linearity of the connection makes $is$ parallel with initial value $iv$. Uniqueness in [F5] gives $\mathrm{PT}_\gamma(iv)=i\mathrm{PT}_\gamma(v)$; combined with real linearity, transport is complex linear and preserves the Hermitian norm, hence unitary. The endpoint gauge map is unitary by [A1], so $u_*^{-1}\circ\mathrm{PT}_\gamma$ is a unitary complex-linear automorphism of its initial one-dimensional line. For any nonzero vector $v$, write its image as $zv$; norm preservation gives $|z|=1$, and replacing $v$ by any nonzero scalar multiple leaves $z$ unchanged. This proves that the holonomy scalar used in the Definition is well-defined in $U(1)$ for every $d\ge1$, independently of the special chiral construction in [F1]. [given, A1, F5, algebra]

2.1 The endpoint gauge maps preserve the specified evaluations by the equivariance included in the line-duality data. Write them as $u_*^\partial$ and $u_*^{\mathrm{bulk}}$. Then the scalar comparing $\mathrm{ev}_1\circ(\mathrm{PT}^{\partial}_\gamma\otimes\mathrm{PT}^{\mathrm{bulk}}_\gamma)$ with $\mathrm{ev}_0$ equals the scalar of $\mathrm{ev}_0\circ(((u_*^\partial)^{-1}\circ\mathrm{PT}^{\partial}_\gamma)\otimes((u_*^{\mathrm{bulk}})^{-1}\circ\mathrm{PT}^{\mathrm{bulk}}_\gamma))$. The latter is multiplication by $\operatorname{Hol}_\gamma(\mathcal L_\partial)\operatorname{Hol}_\gamma(\mathcal L_{\mathrm{bulk}})$ because both lines are one-dimensional. Hence the displayed diagram commutes exactly when this product is $1$. This is a definition of the scoped inflow interface, not an existence theorem for a bulk. [F2] explicitly excludes determinant-line holonomy, so it does not derive this geometric cancellation criterion or identify a particular global phase. [given, F2, A1, L1, step 1.2, step 1.4, algebra] ∎
