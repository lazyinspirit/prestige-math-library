---
dependency_level: 0
id: lem-canonical-bounded-function-parameters-give-a-constant-curve-dominator
kind: lemma
title: Canonical bounded function parameters give a constant-curve dominator
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-gauss-jordan-elimination-produces-reduced-row-echelon-form
  - thm-reduced-row-echelon-form-is-unique
  - lem-constructible-dense-contains-open
  - thm-proper-ideal-contained-in-maximal-ideal
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - cor-noether-normalisation-module-finiteness
  - thm-finite-morphism-integral-closed
  - cor-dimension-preserved-by-integral-extensions
  - thm-affine-domain-dimension-transcendence-degree
  - thm-normalization-glues-integral-finite-type-curves
  - thm-regular-equals-smooth-over-perfect-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-projective-space-proper-over-base
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - cor-finite-morphism-proper
  - lem-proper-stable-composition
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - lem-curve-closed-subsets-finite
  - thm-global-functions-proper-integral-variety
  - lem-proper-cohomology-field-extension
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-irreducible-components-and-minimal-primes
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §3(2–4), printed pp. 141–142; canonical coefficient-parameter refinement"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorem 1 proof, printed p. 123; bounded-space parameter replacement"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $K/k$ be a field
extension, and let $C/K$ be a proper geometrically integral curve. Let
$T\subseteq\mathbf A^{m+1}_K$ be locally closed with an open immersion
$T\hookrightarrow C$, and write its coordinate functions as
$(a,b_1,\ldots,b_m)$. Fix a nonzero finite-dimensional $k$-subspace
$U\subseteq K$ with an ordered basis, finite-dimensional spaces
$V_i\subseteq K$, and integers $N_i\ge0$.

For any $a\in K$ admitting $a=u/c$ with $u,c\in U$, $c\ne0$, form
the nonzero $k$-subspace
$$S_a=\{(u,c)\in U\oplus U:u=ac\}.$$
In the ordered direct-sum basis take the first nonzero row of its unique
reduced row echelon basis, and call it $(u(a),c(a))$. Necessarily
$c(a)\ne0$, so this is a canonical representation of $a$.

Suppose infinitely many points of $T(K)$ satisfy
$$a=u(a)/c(a),\qquad c(a)^{N_i}b_i\in V_i\quad(1\le i\le m).$$
Then there is a smooth projective geometrically integral curve $Q_0/k$ and a
nonconstant $K$-morphism $(Q_0)_K\to C$. The hypothesis is a bound on
the canonical representatives, not on an unspecified choice for each point.

## Facts & Assumptions

**Given:** AC and the fields, proper curve, affine coordinates, ordered
coefficient spaces and infinite bounded point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A finite coefficient subspace has a unique reduced row echelon
basis. Gaussian elimination and nullspace computation use finitely many
arithmetic operations and divisions by nonzero pivots; for a matrix with
polynomial parameter entries the resulting coordinates are rational
functions on finitely many constructible pivot-pattern strata.
[[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]
[[thm-reduced-row-echelon-form-is-unique]]

[F2] A dense constructible subset of an irreducible classical variety
contains a nonempty open. Noether normalization gives a finite map of an
affine integral variety to affine space of its dimension; finite maps are
closed and injective integral extensions preserve dimension. Finite-type
domain dimension equals function-field transcendence degree.
[[lem-constructible-dense-contains-open]]
[[cor-noether-normalisation-module-finiteness]]
[[thm-finite-morphism-integral-closed]]
[[cor-dimension-preserved-by-integral-extensions]]
[[thm-affine-domain-dimension-transcendence-degree]]
A nonempty affine open over algebraically closed k has a k-point, by a
maximal ideal and its finite residue field.
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F3] Finite normalization glues integral curve charts; normal curve
local rings are DVRs or fields. Over perfect $k$, regular curves are
smooth. A projective closure is described by homogeneous equations, and
its finite normalization is projective and proper, since finite schemes
over projective schemes are projective and projective space, finite maps
and composites are proper.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[thm-projective-space-proper-over-base]] [[cor-finite-morphism-proper]]
[[lem-proper-stable-composition]]
[[lem-finite-over-projective-noetherian-affine-base-is-projective]]

[F4] Global functions on a proper integral curve over algebraically
closed $k$ are $k$, and proper coherent cohomology commutes with field
extension. Smooth schemes have regular local rings, which are domains.
The irreducible components of Noetherian affine schemes correspond to
minimal primes; Noetherian spaces have finitely many components.
[[thm-global-functions-proper-integral-variety]]
[[lem-proper-cohomology-field-extension]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-domains-and-cohen-macaulay]]
[[thm-irreducible-components-and-minimal-primes]]
[[lem-noetherian-space-has-finitely-many-irreducible-components]]

[F5] Proper closed subsets of integral curves are finite. A rational
map from a smooth curve to a proper scheme extends uniquely to a morphism.
[[lem-curve-closed-subsets-finite]]
[[lem-rational-map-smooth-curve-to-proper-scheme-extends]]

## Axiom use

AC is inherited through curve normalization, cohomology and constructible
geometry. Each coefficient span and elimination matrix is finite; the
canonical representative eliminates any need for a family of arbitrary
representative choices.

## Proof

**Proof technique:** direct; construct an injective coefficient
parameter set and select a curve in it, then complete the parameter curve.

1.1 Let $H\subseteq K$ be the finite-dimensional $k$-span of products of two elements of a basis of $U$. For a parameter pair $(u,c)\in U\oplus U$ with $c\ne0$, the linear map $A(u,c):U\oplus U\to H$ given by $(u',c')\mapsto u'c-uc'$ has matrix entries linear over $k$ in the parameter coordinates. Its kernel is exactly $S_{u/c}$. Every nonzero vector of this kernel has $c'\ne0$, since $c'=0$ would force $u'c=0$ in the field $K$ and hence $u'=0$. By [F1], the first nonzero RREF row $\kappa(u,c)$ of the kernel is rational in the parameter coordinates on finitely many constructible pivot strata. It depends only on the ratio $u/c$. Thus the locus $\mathcal A=\{(u,c):c\ne0,\ \kappa(u,c)=(u,c)\}$ is constructible over $k$, and its $k$-points give exactly one representative for every ratio admitting a representation in $U$. [F1, given, construct, algebra]

2.1 Parameterize tuples $(u,c,v_1,\ldots,v_m)$ in $\mathcal A\times\prod_i V_i$ and substitute $a=u/c$, $b_i=v_i/c^{N_i}$ into the finitely many polynomial equations and open conditions defining the locally closed scheme $T$. Clear powers of $c$. Every resulting expression is a polynomial in finitely many $k$-parameter variables with coefficients in $K$. Choose a basis of the finite-dimensional $k$-span of those coefficients. Its vanishing in $K$ is equivalent, at a $k$-parameter point, to vanishing of each coefficient polynomial over $k$; its nonvanishing is the finite union of the corresponding coefficient nonvanishing conditions. This constructs a constructible $k$-set $P$ whose $k$-points are precisely the bounded points in the Statement. The correspondence is injective: $a$ determines the canonical pair by step 1.1, and each $b_i$ then determines $v_i=c^{N_i}b_i$. The substitutions also define a rational family with values in $T$ after coefficient extension to $K$. [F1, given, construct, algebra, step 1.1]

3.1 The set $P(k)$ is infinite by hypothesis. Some irreducible component of its affine closure is positive-dimensional and contains a nonempty open subset lying in $P$, by constructibility and [F2]. Work on an affine integral such component $Z$ and open $O\subseteq Z$ with $O\subseteq P$. Noether-normalize $Z$ by a finite map to $\mathbf A^d_k$, $d\ge1$, using [F2]. The image of $Z\setminus O$ is a proper closed subset: it is closed by finiteness and has dimension smaller than $d$ by [F2]. A line through a point outside this image is not contained in it. An integral component of the finite inverse image dominating this line is a curve and meets $O$, since its closed image is the whole line. Restrict to that nonempty open part. Normalizing its projective closure by [F3] gives a smooth projective integral curve $Q_0/k$ and a nonempty open $Q\subseteq Q_0$ with a nonconstant map $Q\to O\subseteq P$. Its image on $k$-points is infinite: an affine curve over algebraically closed $k$ has infinitely many closed points by its finite Noether normalization, and a nonconstant curve map has finite point fibres by [F5]. [F2, F3, F5, given, construct, step 2.1]

4.1 The curve $Q_0$ is geometrically integral, and remains so after extension to $K$. To check the field-extension issue explicitly, [F4] gives $H^0(Q_0,\mathcal O)=k$; after any field extension $F/k$, cohomology base change gives $H^0((Q_0)_F,\mathcal O)=F$. This makes the fibre nonempty and connected, since two nonempty open-and-closed parts would give two independent global constants. It is smooth, hence regular by [F4]. Its finitely many irreducible components are disjoint, since intersecting components would give more than one minimal prime in a regular local domain. Connectedness leaves one, and local domains make it reduced. Thus it is integral over every such $F$, as claimed. [F3, F4, algebra, step 3.1]

5.1 The substitutions of step 2.1 now give a rational map $Q_K\dashrightarrow T\hookrightarrow C$. It is defined on a nonempty open: at each of the infinitely many $k$-parameter points the denominators are nonzero in $K$ and the prescribed open conditions hold, so those rational functions cannot be identically zero. At these points it has infinitely many distinct values in $C(K)$, by injectivity in step 2.1 and the infinite parameter image in step 3.1. Hence it is nonconstant. In fact a constant map's image point receiving a $K$-point would itself be $K$-rational and would give only that one value. By [F5] this rational map extends from the smooth curve $(Q_0)_K$ to the proper target $C$. The extension is still nonconstant, giving the required constant-curve dominator. [F4, F5, given, algebra, step 2.1, step 3.1, step 4.1] ∎
