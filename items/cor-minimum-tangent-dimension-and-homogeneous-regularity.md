---
id: cor-minimum-tangent-dimension-and-homogeneous-regularity
kind: corollary
title: "Minimal tangent dimension and homogeneous regularity"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-closed-points-dense-in-affine-spectra
  - cor-localisations-of-regular-local-rings-are-regular
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension-classical-variety
  - def-morphism-locally-ringed-spaces
  - def-regular-local-ring-geometric-point
  - def-singular-and-regular-loci-variety
  - def-zariski-tangent-space-point
  - lem-irreducible-components-of-a-topological-space
  - lem-classical-points-inside-affine-scheme
  - lem-local-dimension-reduced-variety-components
  - lem-tangent-space-functoriality-classical
  - thm-embedding-dimension-at-least-local-dimension
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4h, Corollaries 4.38-4.40 (printed p. 95)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §5.2, Corollary 5.2.4 (homogeneous regularity)"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field and let $X$ be an irreducible classical variety
over $k$ ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]),
with dimension $\dim X$ ([[def-dimension-classical-variety]]). Then
$$\dim X=\min_{x\in X}\dim_kT_xX,$$
the minimum taken over the closed points of $X$
([[def-zariski-tangent-space-point]]), and $X$ is regular
([[def-singular-and-regular-loci-variety]]) if and only if the function
$x\mapsto\dim_kT_xX$ is constant on the closed points of $X$.

More generally, a nonempty reduced classical finite-type space over $k$ whose
automorphism group acts transitively on its point set is regular.

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$; a classical variety $X$ over
$k$; and the intrinsic tangent spaces $T_xX$ at its closed points.

[F1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a classical algebraic prevariety over $k$ is a quasi-compact locally ringed space with a structure sheaf of $k$-algebras covered by open subspaces isomorphic over $k$ to affine polynomial models, and its points are the closed points of these models, with residue field canonically $k$.

[F3] [[def-dimension-classical-variety]]: for a classical variety $X$, $\dim X$ is the chain dimension and $\dim_xX=\max_{x\in X_i}\dim X_i$ over the irreducible components containing the closed point $x$.

[F4] [[lem-local-dimension-reduced-variety-components]]: for a reduced classical finite-type space $X$ over an algebraically closed field and a closed point $x$, $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$ over the irreducible components containing $x$.

[F5] [[def-singular-and-regular-loci-variety]]: the regular locus is $X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$, and for a reduced classical finite-type space over an algebraically closed field, a closed point $x$ lies in $X_{\mathrm{reg}}$ exactly when $\dim_{\kappa(x)}T_xX=\dim_xX$.

[F6] [[def-regular-local-ring-geometric-point]]: a point $x$ of a locally Noetherian scheme is regular when its local ring is a regular local ring, and then $x$ is regular if and only if $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F7] [[thm-embedding-dimension-at-least-local-dimension]]: for every point $x$ of a locally Noetherian scheme, $\dim_{\kappa(x)}T_xX\ge\dim\mathcal O_{X,x}$; for a reduced classical finite-type variety over an algebraically closed field and a closed point $x$, $\dim T_xX\ge\dim_xX$.

[F8] [[thm-nonempty-regular-locus-reduced-variety-perfect-field]]: for a perfect field $k$ and a reduced $k$-scheme $X$ of finite type, the regular locus is open, its trace on every irreducible component is a dense open subset of that component, and $X_{\mathrm{reg}}\ne\varnothing$ whenever $X\ne\varnothing$.

[F9] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: every algebraically closed field is perfect.

[F10] [[lem-irreducible-components-of-a-topological-space]]: every irreducible subset is contained in an irreducible component, and a nonempty irreducible space is its own unique irreducible component.

[F11] [[lem-tangent-space-functoriality-classical]]: for a $k$-morphism $f$ of $k$-schemes, the differential $d_xf:T_xX\to T_{f(x)}Y$ is defined at $k$-rational points, is compatible with composition, and $d_x(\operatorname{id}_X)=\operatorname{id}_{T_xX}$.

[F12] [[def-morphism-locally-ringed-spaces]]: a morphism of locally ringed spaces induces at every point $x$ a local ring homomorphism $f^\sharp_x:\mathcal O_{Y,f(x)}\to\mathcal O_{X,x}$ on stalks.

[F13] [[def-zariski-tangent-space-point]]: the intrinsic tangent space $T_xX$ is the $\kappa(x)$-dual of $\mathfrak m_x/\mathfrak m_x^2$, and differentials of $k$-morphisms act on it by the dual of the induced cotangent map.

[F14] [[def-classical-affine-coordinate-ring]]: the coordinate ring $k[X]=k[x_1,\ldots,x_n]/I(X)$ of an affine algebraic set over an algebraically closed field is reduced, and the finite coordinate classes generate it as a $k$-algebra.

[F15] [[cor-closed-points-dense-in-affine-spectra]]: for every finite-type $k$-algebra $A$, each nonempty open subset of a closed subset of $\operatorname{Spec}A$ contains a closed point of $\operatorname{Spec}A$. On a reduced affine model over algebraically closed $k$, these points are exactly the classical $k$-points by [[lem-classical-points-inside-affine-scheme]]. A $k$-point is closed in the whole finite-type model: its intersection with any affine chart containing it is a maximal ideal there, while its intersection with a chart not containing it is empty.

[F16] [[cor-localisations-of-regular-local-rings-are-regular]]: assuming AC, every prime localization of a regular local ring is regular. If $\mathfrak p\subseteq\mathfrak m$ in a finite-type affine coordinate ring $A$ and $A_{\mathfrak m}$ is regular, then $A_{\mathfrak p}=(A_{\mathfrak m})_{\mathfrak pA_{\mathfrak m}}$ is regular.

## Proof

**Proof technique:** direct.

1.1 Since $X$ is an irreducible classical variety over the algebraically closed field $k$, it is nonempty, because irreducible means nonempty [F3]. Its affine models have reduced coordinate rings [F14], so $X$ is a reduced classical finite-type space over $k$ and the classical suppliers [F4], [F5], [F7] apply to it, while [F8] applies to the reduced finite-type spectra of its affine coordinate rings; in particular $X$ is its own unique irreducible component [F10], and the field $k$ is perfect [F9]. Fix a closed point $x$ of $X$. Because the only irreducible component of $X$ is $X$ itself [F10], [F3] and [F4] give $\dim_xX=\dim X$, and then [F7] gives $\dim_kT_xX\ge\dim_xX=\dim X$. Apply [F8] to the spectrum of any nonempty affine model chart. Its regular locus is open and nonempty, so [F15] supplies a closed, hence classical, point there whose local ring is regular by [F5]. At such a point [F6] gives $\dim_kT_xX=\dim\mathcal O_{X,x}$, while [F4] with [F3] gives $\dim\mathcal O_{X,x}=\dim_xX=\dim X$; hence $\dim_kT_xX=\dim X$ for every closed point $x\in X_{\mathrm{reg}}$. [F2, F3, F4, F5, F6, F7, F8, F9, F10, F13, F14, given, algebra]

1.2 Let $\sigma$ be an automorphism of the classical variety $X$, that is, an isomorphism of locally ringed spaces over $k$ with inverse $\sigma^{-1}$. At every closed point $x$ the induced stalk map of [F12], $\sigma^\sharp_x:\mathcal O_{X,\sigma(x)}\to\mathcal O_{X,x}$, is a local ring homomorphism, and the stalk maps of $\sigma$ and $\sigma^{-1}$ are mutually inverse isomorphisms of local rings, so $\mathcal O_{X,\sigma(x)}$ is a regular local ring if and only if $\mathcal O_{X,x}$ is; hence $\sigma(X_{\mathrm{reg}})=X_{\mathrm{reg}}$. Likewise, since $\sigma^{-1}\circ\sigma=\operatorname{id}_X$ and $\sigma\circ\sigma^{-1}=\operatorname{id}_X$, the functoriality of the differential [F11] applied to these two composites gives $d_{\sigma(x)}(\sigma^{-1})\circ d_x\sigma=d_x(\operatorname{id}_X)=\operatorname{id}_{T_xX}$ and $d_x\sigma\circ d_{\sigma(x)}(\sigma^{-1})=\operatorname{id}_{T_{\sigma(x)}X}$, so $d_x\sigma$ is an isomorphism and $\dim_kT_{\sigma(x)}X=\dim_kT_xX$ for every closed point $x$. [F2, F5, F6, F11, F12, F13, given, algebra]

2.1 By the affine application of [F8] and [F15] in step 1.1 there is a classical closed point $x_0\in X_{\mathrm{reg}}$; by step 1.1 its tangent dimension equals $\dim X$, and by step 1.1 again every closed point has tangent dimension at least $\dim X$. Hence the minimum of $\dim_kT_xX$ over the closed points of $X$ is attained and $\dim X=\min_{x\in X}\dim_kT_xX$. Comparing step 1.1 with the criterion of [F5] and the definition of $\dim_xX$ in [F3] shows in addition that a closed point $x$ attains the minimum exactly when $\dim_kT_xX=\dim_xX$, that is, exactly when $x\in X_{\mathrm{reg}}$. [F2, F3, F5, F6, F8, step 1.1, algebra]

2.2 Now let $X$ be a nonempty reduced classical finite-type space over $k$ whose automorphism group $G$ acts transitively on its classical point set. Take a nonempty affine model with reduced finite-type coordinate ring $A$ [F2, F14]. By [F8] and [F9] the regular locus of $\operatorname{Spec}A$ is a nonempty open subset, so [F15] gives a classical closed point $x_0$ there with a regular local ring. By step 1.2, for every classical point $y$ an automorphism taking $x_0$ to $y$ identifies their local rings; thus every classical closed point is regular. Now take any point $z$ of the scheme model, represented by a prime $\mathfrak p$ in an affine chart $\operatorname{Spec}A$. Applying [F15] to the nonempty closed subset $V(\mathfrak p)$ gives a maximal ideal $\mathfrak m\supseteq\mathfrak p$, hence a classical closed point. Its local ring $A_{\mathfrak m}$ is regular; [F16] then makes $A_{\mathfrak p}=(A_{\mathfrak m})_{\mathfrak pA_{\mathfrak m}}$ regular. Since $z$ was arbitrary, every scheme point is regular, so the classical space and its scheme model are regular in the sense of [F5]. [F2, F5, F8, F9, F15, F16, step 1.2, given, algebra]

3.1 By definition [F5] the variety $X$ is regular when every point of it is regular, that is, when $X_{\mathrm{reg}}=X$; every point of a classical variety is a closed point [F2]. If $X$ is regular, step 1.1 applies at every closed point and gives $\dim_kT_xX=\dim X$, so the function $x\mapsto\dim_kT_xX$ is constant. Conversely, suppose $\dim_kT_xX=c$ for every closed point; then $c$ is the minimum computed in step 2.1, so $c=\dim X$, and step 1.1 with [F3] gives $\dim_kT_xX=\dim X=\dim_xX$ for every closed point $x$; by [F5] each such $x$ lies in $X_{\mathrm{reg}}$, so $X_{\mathrm{reg}}=X$ and $X$ is regular. This proves both directions of the equivalence. [F2, F3, F5, F6, step 1.1, step 2.1, algebra]

4.1 Boundary and scope dispositions. Empty: an irreducible classical variety is nonempty by convention [F3], so the minimum of step 2.1 is taken over a nonempty set, and for the general claim the empty reduced space is excluded by hypothesis, the assertion being vacuous for it. Zero and one: at a point with $\dim_xX=0$ the criterion [F5] reads "$x$ regular if and only if $\dim_kT_xX=0$", so the zero-dimensional case is covered by the criterion without modification, and in the one-dimensional case the minimum of step 2.1 has the value one, attained at the regular points. Degenerate: reducedness is genuinely needed for the transitive claim, since a nonreduced local ring is not a regular local ring while the one-point nonreduced space $\operatorname{Spec}k[\epsilon]/(\epsilon^2)$ has a transitive automorphism group on its single point; for such a space the regular locus can be empty, so the supplier [F8] cannot be applied. Endpoints: the minimum of step 2.1 is attained exactly at the regular points, and the constant value of step 3.1 is exactly $\dim X$. Choice: AC is declared in [F1] and is used only through the AC-assuming suppliers [F4], [F5], [F7], [F8], [F10], [F15] and [F16], each cited at the step that uses it, while the automorphism arguments of steps 1.2 and 2.2 make no choice. Biconditional directions: step 3.1 proves both directions of the regularity-constancy equivalence, using step 1.1 in the forward direction and the minimum of step 2.1 in the reverse direction, and the criterion [F5] is instantiated in step 3.1 in the direction "tangent dimension equal to local dimension implies regular" while its defining content, regularity of the local ring, is what defines $X_{\mathrm{reg}}$ in step 1.1. [F1, F2, F4, F5, F7, F8, F10, F15, F16, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, given, algebra]

∎

## Source qualification

J. S. Milne, *Algebraic Geometry* v6.10, §4h, Corollaries 4.38-4.40 (printed
p. 95), records for a variety over an algebraically closed field that the
dimension is the minimum of the tangent-space dimensions, that nonsingularity
is equivalent to constancy of the tangent dimension, and that homogeneous
spaces are nonsingular; Milne's book-wide conventions (classical varieties,
algebraically closed field) are narrower than the scheme-level inputs used
here, so the statement is derived from the library's
openness/density supplier for the regular locus and the embedding-dimension
bound rather than quoted from the source. Donu Arapura, *Notes on Basic
Algebraic Geometry* §5.2 Corollary 5.2.4, states the homogeneous regularity
conclusion in the same classical setting. Neither source is used as a
substitute for the proof, which is given above from the cited library items.
