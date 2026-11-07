---
dependency_level: 11
id: lem-canonical-local-reciprocity-from-cyclic-character-pairings
kind: lemma
title: Canonical arithmetic local reciprocity from cyclic character pairings
deps:
- def-axiom-of-choice
- def-dependent-choice
- cor-local-brauer-invariant-under-choice
- lem-relative-invariant-for-class-formations
- lem-cyclic-group-cohomology-norm-and-inflation
- cor-class-formation-tate-nakayama-under-specified-choice
- thm-local-class-formation-for-finite-residue-local-field
- lem-finite-separable-local-field-norm-image-is-open
- thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
- thm-field-norm-and-trace-by-embeddings
- def-field-norm-and-trace
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
- thm-fundamental-theorem-of-finite-galois-theory
- thm-galois-closures-exist-and-are-minimal
- lem-local-unramified-degree-two-cohomology-and-inflation
- thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module
- thm-projective-comparison-map-exists
- thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
- thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent
- thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterIII §§1–3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Printed101–110, actual carry normalization and character alternative.
      Source III3.2 omits its transition proof; III3.3 has a warning footnote; III3.6
      cites another proof. None is imported. This body constructs pairings directly
      via cyclic norm-H2 and uses the accepted untensored Tate theorem only for norm
      indices.
verification: {}
---



## Statement

Assume AC and DC with the supplied cohomology/Tate resolution convention.
Let $K$ be complete discretely valued with finite residue field, fix $K_s$,
and use its normalized cohomological invariant
$\operatorname{inv}_K:H^2_{\mathrm{cts}}(G_K,K_s^\times)\to\mathbb Q/\mathbb Z$.
For a continuous finite-order character $\chi:G_K\to\mathbb Q/\mathbb Z$,
let $\delta\chi$ be the Bockstein for
$0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$.
There is a unique continuous homomorphism
$$\rho_K:\widehat{K^\times}_{\mathrm{open}}
\longrightarrow\operatorname{Gal}(K^{\mathrm{ab}}/K)$$
satisfying, for all $a\in K^\times$ and all such $\chi$,
$$\chi(\rho_K(a))=\operatorname{inv}_K(a\smile\delta\chi).$$
Here the completion uses open finite-index subgroups and
$(a\smile\delta\chi)(g,h)=a^{\delta\chi(g,h)}$.
For every finite abelian $L/K$, its quotient map is onto with kernel
$N_{L/K}L^\times$ on $K^\times$. On every finite unramified extension
it sends $a$ to arithmetic Frobenius to the power $v_K(a)$.
For arbitrary finite Galois $L/K$ its quotient to
$\operatorname{Gal}(L/K)^{\mathrm{ab}}$ has norm kernel and quotient order
$|\operatorname{Gal}(L/K)^{\mathrm{ab}}|$.
Norm subgroups of finite abelian extensions determine those extensions
uniquely and reverse inclusions. If an open finite-index subgroup contains
the norm group of a finite separable extension, it is itself the norm group
of a finite abelian extension. This constructs a distinguished map; it does
not assert that arithmetic unramified normalization alone characterizes it.

## Facts & Assumptions

**Given:** AC/DC, the local field and separable closure, supplied resolutions
and the normalized cohomological local invariant.

[F1] Local class formation has zero $H^1$, the normalized $H^2$ invariant,
and its restriction scaling under explicit AC/DC.
[[thm-local-class-formation-for-finite-residue-local-field]]

[F2] For a finite quotient, inflation identifies its $H^2$ with the
restriction kernel and invariant subgroup $\frac1n\mathbb Z/\mathbb Z$.
[[lem-relative-invariant-for-class-formations]]

[F3] A finite cyclic group's $H^2$ is the fixed-module norm quotient.
The sign of the carry representative in this quotient is checked by the
explicit low-degree bar comparison in step2.1 below, rather than attributed
to an unstated comparison in the supplier.
[[lem-cyclic-group-cohomology-norm-and-inflation]]
[[thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module]]
[[thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]]
[[thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes]]
[[thm-projective-comparison-map-exists]]
[[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]

[F4] The untensored Tate–Nakayama corollary gives an abstract isomorphism
$\operatorname{Gal}(L/K)^{\mathrm{ab}}\cong
K^\times/N_{L/K}L^\times$. Only its quotient order is used below,
not an unproved compatibility between this double boundary and cup products.
[[cor-class-formation-tate-nakayama-under-specified-choice]]

[F5] For finite separable local extensions norm images are open.
[[lem-finite-separable-local-field-norm-image-is-open]]

[F6] Finite abelian groups are finite products of cyclic groups.
[[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[F7] In separable extensions norms are products over embeddings; for Galois
extensions these are the group conjugates. Norm is also the determinant.
[[thm-field-norm-and-trace-by-embeddings]] [[def-field-norm-and-trace]]

[F8] Continuous normalized cochains have the explicit differential; quotient
inflation is composition and coefficient inclusion is the corresponding
map on values.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F9] Finite Galois restriction is onto, finite Galois correspondence holds,
and finite separable extensions have finite Galois closures.
[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[thm-galois-closures-exist-and-are-minimal]]

[F10] On an unramified tower the invariant is valuation followed by inverse
Bockstein and evaluation at arithmetic Frobenius; the standard classical
comparison has $b([A(c)])=[c]$, so this is the cohomological normalization
without a sign change.
[[lem-local-unramified-degree-two-cohomology-and-inflation]]
[[cor-local-brauer-invariant-under-choice]]

[A1] AC and DC are the stated hypotheses of the local invariant and finite
Tate supplier route; no choice-free conclusion is claimed.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** construct finite reciprocity using only cyclic
character pairings, compare kernels by their independently proved indices,
and pass through the actual open finite quotients.

**Given:** The data above.

1.1 Write $B^*=\operatorname{Hom}(B,\mathbb Q/\mathbb Z)$ for a finite
abelian group $B$. Choosing one cyclic decomposition [F6] shows
$|B^*|=|B|$: the characters of a cyclic factor $C_n$ are its $n$
choices of the value at a generator in $\frac1n\mathbb Z/\mathbb Z$.
Characters separate points by the same decomposition. Thus evaluation
$B\to B^{**}$ is injective and, by equal finite cardinalities, bijective.
Also every nontrivial quotient $B/D$ has a nonzero character: take a cyclic
coordinate of a decomposition of that quotient. Consequently a subgroup
of $B$ annihilated by no nonzero character must be $B$. These elementary
finite duality facts involve neither Pontryagin duality nor an infinite
character-extension assertion. [F6, given, construct, algebra]

1.2 Fix finite abelian $L/K$ with group $B$. For $a\in K^\times$ define
$$\ell_a(\chi)=\operatorname{inv}_K(a\smile\delta\chi),\qquad\chi\in B^*,$$
where characters are inflated to $G_K$. The Bockstein is computed by a
rational lift $f$ with $\delta f(g,h)=f(g)+f(h)-f(gh)\in\mathbb Z$.
Changing that lift changes the cocycle by a coboundary, whose power of
$a$ is again a coboundary, so the value is well-defined. Addition of
characters and multiplication of $a$ give addition of these invariant
values by the explicit coefficient rule. Thus $\ell_a\in B^{**}$ and
step 1.1 gives a unique $\rho_{L/K}(a)\in B$ with these character values.
It is a group homomorphism in $a$. [F1, F8, step 1.1, construct, algebra]

2.1 If $\chi\in B^*$ has order $n$, let $E=L^{\ker\chi}$. Then
$E/K$ is cyclic of degree $n$; choose its generator $\sigma$ so
$\chi(\sigma)=1/n$. The rational lift $\chi(\sigma^i)=i/n$ for
$0\le i<n$ has Bockstein equal to $1$ precisely on carries. Its
coefficient image under $1\mapsto a$ represents exactly $a$ in
$H^2(\operatorname{Gal}(E/K),E^\times)=K^\times/N_{E/K}E^\times$,
with the following explicit comparison fixing the sign. For $n>1$, let
$P_\bullet$ be the periodic free resolution whose first differentials
are $d_1=\sigma-1$, $d_2=N=\sum_{i=0}^{n-1}\sigma^i$.
The homogeneous–inhomogeneous coordinate change and the normalized-bar
homotopy equivalence in [F3] give the normalized inhomogeneous free bar
resolution: explicitly a homogeneous tuple is written using its successive
quotients, and tuples with an identity quotient are the degenerate chains
removed by that equivalence. In this exact normalized model, send its degree-zero
generator to the bar degree-zero generator, and put
$$e_1\longmapsto[\sigma],\qquad
e_2\longmapsto\sum_{i=0}^{n-1}[\sigma^i\mid\sigma].$$
Terms with an identity entry are zero. The bar differential satisfies
$d[\sigma]=\sigma-1$ and
$$d[\sigma^i\mid\sigma]
=\sigma^i[\sigma]-[\sigma^{i+1}]+[\sigma^i].$$
Summing makes the last two terms telescope to zero because
$\sigma^n=1$; hence the degree-two boundary is exactly $N[\sigma]$.
This is a chain map through degree two. It extends through degree three:
the image of $d_3e_3=(\sigma-1)e_2$ is a bar cycle by this equality
and $N(\sigma-1)=0$, so bar exactness supplies a preimage; further
extensions are supplied or recursively compared under the declared
DC-resolution convention. Such extensions induce the same ordinary
$H^2$ map because comparison maps of projective resolutions over the
identity are homotopic. Evaluating the multiplicative carry cocycle
$c(\sigma^i,\sigma^j)=a^{\lfloor(i+j)/n\rfloor}$ on the displayed
image of $e_2$ gives
$$\prod_{i=0}^{n-1}c(\sigma^i,\sigma)=a,$$
since only $i=n-1$ is a carry. Pullback to the periodic Hom complex
therefore has degree-two value $a$, which is precisely its norm-quotient
coordinate by [F3]. For $n=1$, the character is zero, the carry and
cohomology class are trivial, and $K^\times/N_{K/K}K^\times$ is the
trivial group; that boundary requires no comparison generator.
By [F2], the invariant maps that group isomorphically onto
$\frac1n\mathbb Z/\mathbb Z$. Therefore
$a\mapsto\ell_a(\chi)$ is onto that group, and its kernel is exactly
the cyclic norm group. In particular it is not the zero character if
$\chi\ne0$. The annihilator of the image of $\rho_{L/K}$ in $B$ is
therefore zero, so step 1.1 proves $\rho_{L/K}$ onto. This uses only
cyclic cohomology, not a mixed Tate cup-product formula. [F2, F3, F9, step 1.1, step 1.2, algebra]

2.2 For a tower of finite separable fields $L/E/K$, the embedding formula
[F7] gives $N_{L/K}=N_{E/K}\circ N_{L/E}$: group the embeddings of
$L$ by their restriction to $E$, whose fibres are the embeddings over
that restriction. Thus $N_{L/K}L^\times$ lies in every cyclic quotient
norm group from step 2.1, hence in $\ker\rho_{L/K}$. By surjectivity
that kernel has index $|B|$ in $K^\times$. Independently [F4] gives
$[K^\times:N_{L/K}L^\times]=|B|$. Here the actual finite
quotient of the local class formation has fixed module $L^\times$ and
its further fixed module is $K^\times$ by finite Galois correspondence.
Its degree-zero Tate group is precisely this norm quotient. Its
degree-$-2$ group is $H_1(B,\mathbb Z)=B^{\mathrm{ab}}$: the bar
$1$-chains have generators $[g]$, and the $2$-boundaries impose exactly
$[gh]=[g]+[h]$, the universal abelianization relations. Thus no unstated
Tor or general tensor case is used for this index. Inclusion and equality of finite
indices prove equality of the two subgroups. By [F5] this is an open
kernel, so $\rho_{L/K}$ is continuous to the finite discrete group $B$.
Finite index alone would not justify this continuity. [F4, F5, F7, step 2.1, algebra]

3.1 Let $L\supset E\supset K$ be finite abelian over $K$. For a character
$\chi$ of $\operatorname{Gal}(E/K)$, its inflation from either quotient
to $G_K$ is the same character and its rational lift gives the same
continuous cocycle. Thus step 1.2 gives
$$\chi(\rho_{L/K}(a)|_E)=\chi(\rho_{E/K}(a))$$
for all $a$. Character separation gives actual quotient compatibility.
The compatible finite coordinates define
$\rho_K:K^\times\to\operatorname{Gal}(K^{\mathrm{ab}}/K)$, the latter
being the inverse limit of these finite Galois groups. This map is
continuous because every finite coordinate has open kernel by step 2.2.
This proof does not inflate a negative Tate group or rely on the unproved
quotient compatibility of an abstract double boundary.
[F8, F9, step 1.1, step 1.2, step 2.2, algebra, construct]

3.2 To extend to the specified completion, for each finite abelian $L/K$
use the coordinate $K^\times/N_{L/K}L^\times$ of
$\widehat{K^\times}_{\mathrm{open}}$, which exists because its kernel
is open and finite index. Compose it with the finite isomorphism of
step 2.2. The resulting coordinates are compatible by step 3.1 and hence
define a continuous homomorphism from that inverse limit into
$\operatorname{Gal}(K^{\mathrm{ab}}/K)$. The canonical image of
$K^\times$ in this completion is dense: any finite list of coordinate
conditions is controlled by their open finite-index intersection, and the
specified coordinate at that intersection has a representative in
$K^\times$. Therefore two continuous extensions to the Hausdorff target
agree if they agree on $K^\times$. All finite characters factor through
one finite abelian quotient, and separate its points by step 1.1, so the
stated character property also proves uniqueness. No identification with
the completion using all abstract finite-index subgroups is made.
[F5, step 1.1, step 2.2, step 3.1, construct, algebra]

4.1 For an unramified cyclic extension of degree $n$, [F10] computes
$\operatorname{inv}_K(a\smile\delta\chi)=v_K(a)\chi(\operatorname{Frob}_K)$:
valuation sends the coefficient cocycle to $v_K(a)\delta\chi$, and inverse
Bockstein followed by arithmetic Frobenius evaluation gives the displayed
number. Since characters separate that cyclic group, its reciprocity map
is $a\mapsto\operatorname{Frob}_K^{v_K(a)}$. Every uniformizer has
valuation one and therefore maps to arithmetic Frobenius in every finite
unramified extension, as asserted. [F10, step 1.1, step 1.2, algebra]

5.1 Let now $L/K$ be arbitrary finite Galois with group $B$, and let
$E=L^{[B,B]}$ be its largest abelian subextension. Transitivity gives
$N_{L/K}L^\times\subseteq N_{E/K}E^\times$. The first group has
index $|B^{\mathrm{ab}}|$ by [F4], and the second the same index by
step 2.2. Hence they are equal. The finite quotient of the constructed
map to $B^{\mathrm{ab}}=\operatorname{Gal}(E/K)$ therefore has exactly
the required norm kernel and index. This is a group-index argument and
makes no claim that a norm group classifies a nonabelian extension.
[F4, F7, F9, step 2.2, algebra]

5.2 For finite abelian $L/K$, a subgroup $N$ containing its norm group
corresponds under the onto map $\rho_{L/K}$ to a subgroup $D\le B$.
Let $E=L^D$. The actual quotient compatibility step 3.1 shows
$N=\ker\rho_{E/K}=N_{E/K}E^\times$. If the starting norm group is
that of a finite separable extension, take a finite Galois closure and
use norm transitivity to reduce to step 5.1 and this abelian case. For
uniqueness, place two abelian extensions in their compositum; their norm
kernels are inverse images of their fixing subgroups under the same
surjective finite map. Equal norm groups give equal fixing subgroups,
hence equal fields. Inclusion of norm groups gives inclusion of those
subgroups and reversed inclusion of their fields. This proves the full
stated norm-correspondence assertions, but not the separate assertion that
every open finite-index subgroup contains some finite-extension norm.
The trivial extensions, zero character and $n=1$ carry all give identity
maps or zero groups throughout, so those boundaries are included.
[F7, F9, step 2.2, step 3.1, step 5.1, algebra, construct] ∎
