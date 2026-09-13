---
id: lem-mod-two-cohomology-rings-of-complex-projective-spaces
kind: lemma
title: Mod-two cohomology rings of complex projective spaces
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary, thm-cellular-homology-computes-singular-homology, def-oriented-cellular-chain-group, prop-cellular-maps-induce-cellular-chain-maps, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-of-the-singular-cohomology-pair-sequence, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-excision-for-singular-cohomology, lem-local-coordinate-cup-products-generate-top-relative-cohomology, prop-relative-cup-products-are-natural-and-compatible-with-connectors, def-singular-cochain-complex-with-coefficients, def-singular-cup-product-on-cochains, prop-singular-cohomology-is-contravariantly-functorial, prop-cup-product-is-natural-unital-and-associative, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Theorem 3.19 and its complete proof, printed pages 220--221
verification:
  audited: 2026-09-14
  precheck: pass
---

## Statement

Assume AC. For every integer $n\geq0$,
$$H^*(\mathbb {CP}^n;\mathbb F_2)\cong\mathbb F_2[c_n]/(c_n^{n+1}),\qquad |c_n|=2,$$
where $c_n$ is reduction modulo two of the normalized integral generator. Also
$$H^*(\mathbb {CP}^{\infty};\mathbb F_2)\cong\mathbb F_2[c],\qquad |c|=2.$$
All odd cohomology groups vanish. Standard skeletal restrictions preserve the
named generators and are isomorphisms in every degree at most twice the
complex dimension of the finite target.

## Facts & Assumptions

**Given:** The standard finite skeleta
$\mathbb {CP}^0\subset\mathbb {CP}^1\subset\cdots\subset\mathbb {CP}^{\infty}$
and coefficients $\mathbb F_2$.

[F1] [[cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary]]
computes a cellular complex with no adjacent cells, while
[[thm-cellular-homology-computes-singular-homology]],
[[def-oriented-cellular-chain-group]], and
[[prop-cellular-maps-induce-cellular-chain-maps]] compare its oriented cell
generators and skeletal maps with singular homology.

[F2] Under AC,
[[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]
gives natural evaluation exact sequences for integral and mod-two
cohomology, natural also in coefficient homomorphisms.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] and
[[thm-naturality-of-the-singular-cohomology-pair-sequence]] give exact pair
sequences and their natural squares.

[F4] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] applies
to the coordinate retractions below, and
[[thm-excision-for-singular-cohomology]] removes closed coordinate
hyperplanes lying inside the open relative subspaces.

[F5] Under AC,
[[lem-local-coordinate-cup-products-generate-top-relative-cohomology]] says
that the two coefficient-one local generators on
$\mathbb C^i\times\mathbb C^j\cong\mathbb R^{2i}\times\mathbb R^{2j}$
have nonzero top mod-two relative cup product when $i,j\geq1$.

[F6] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]
transports open relative products. Pullback is a unital ring homomorphism by
[[prop-cup-product-is-natural-unital-and-associative]].

[F7] [[def-singular-cochain-complex-with-coefficients]],
[[def-singular-cup-product-on-cochains]], and
[[prop-singular-cohomology-is-contravariantly-functorial]] make coefficient
reduction valuewise on cochains and make it commute with coboundary,
pullback, and the front/back cup formula.

[A1] [[def-axiom-of-choice]] is assumed exactly through [F2] and [F5].

## Proof

**Proof technique:** build the standard even-cell filtration explicitly,
compute its additive groups, prove finite products by local relative
coordinates, and detect infinite powers on finite skeleta.

1.1 The standard filtration gives one oriented cell in each even dimension and no odd cells. [given, construct]
Write $P^r=\mathbb {CP}^r$ as nonzero vectors in $\mathbb C^{r+1}$ modulo
nonzero complex scaling. Attach a real $2r$-disk to $P^{r-1}$ by
$$w\longmapsto[w_0:\cdots:w_{r-1}:\sqrt{1-\lVert w\rVert^2}].$$
The boundary lands in $P^{r-1}$, while each line outside $P^{r-1}$ has a
unique unit representative whose last coordinate is positive real, so the
open disk maps homeomorphically to the complement. The attachment quotient
is compact. Projective space is Hausdorff because a unit vector $z$ maps to
the rank-one matrix $zz^*$, whose fibres are precisely scalar-phase orbits;
the induced continuous bijection from the compact phase quotient to its
matrix image is a homeomorphism. Hence the attachment map from its compact
quotient to $P^r$ is a homeomorphism. Starting from $P^0=*$ gives compatible
cells in dimensions $0,2,\ldots,2r$. Orient the $2r$-cell by the ordered real
and imaginary coordinates of $\mathbb C^r$.

2.1 Integral homology is one copy of $\mathbb Z$ in each occupied even degree, naturally under skeletal inclusions. [F1, step 1.1]
There are no cells in adjacent dimensions, so [F1] makes every cellular
differential zero and compares the resulting groups with singular homology.
The positive $2k$-cell in the standard $P^k$ gives the generator of
$H_{2k}(P^n;\mathbb Z)$ for $k\leq n$. A standard inclusion is the identity
on each cell it contains, so [F1] makes its homology map the identity on these
generators. The union $P^\infty$ has the same calculation in every fixed
degree: one copy of $\mathbb Z$ in nonnegative even degrees and zero in odd
degrees.

3.1 Integral and mod-two cohomology are additively determined, with natural skeletal restrictions. [F2, A1, step 2.1]
In [F2], all Ext terms vanish because the preceding integral homology group
in each even degree is zero and the preceding group in each odd degree is
free. Evaluation therefore gives $H^{2k}(P^n;\mathbb Z)=\mathbb Z$ and
$H^{2k}(P^n;\mathbb F_2)=\mathbb F_2$ for $0\leq k\leq n$, with all odd
groups zero; the same holds in every degree for $P^\infty$. Naturality and
step 2.1 make restriction to $P^n$ an isomorphism through degree $2n$. Let
$u_n\in H^2(P^n;\mathbb Z)$ be the class evaluating as $+1$ on the positive
$P^1$ cell when $n\geq1$, and put $u_0=0$. Restrictions preserve these
normalized classes.

4.1 Reduction modulo two of the normalized integral class is the unique finite degree-two generator. [F2, F7, step 3.1]
For $n\geq1$, choose an integral cocycle representing $u_n$ and reduce its
values modulo two. By [F7], this commutes with coboundary and is independent
of the cocycle representative; it defines $c_n$. Coefficient naturality of
evaluation in [F2] makes $c_n$ evaluate as $1$ on the mod-two reduction of the
positive $P^1$ cell, so it is nonzero and hence is the unique class in degree
two. The front/back formula in [F7] shows that reduction commutes with cup
products. Put $c_0=0$. Restriction preserves every $c_n$ because it preserves
$u_n$ and commutes with coefficient reduction.

5.1 Complementary coordinate projective subspaces admit the required explicit retractions. [F4, step 4.1]
Fix $i,j\geq1$ with $i+j=n$. Let $E=P^i$ use coordinates
$z_0,\ldots,z_i$, let $F=P^j$ use $z_i,\ldots,z_n$, and let
$p=E\cap F=[e_i]$. Put $V=P^n\setminus F$ and $W=P^n\setminus E$.
Scaling $z_i,\ldots,z_n$ to zero retracts $V$ and $E\setminus\{p\}$ onto
the same coordinate $P^{i-1}$; the first $i$ coordinates cannot all vanish
on either domain. Symmetrically, $W$ and $F\setminus\{p\}$ retract onto
$P^{j-1}$. Scaling only $z_i$ to zero retracts
$P^n\setminus\{p\}$ onto a coordinate $P^{n-1}$. Each formula commutes with
complex scaling, never produces the zero vector on its stated domain, fixes
the target, and is continuous in affine coordinates, so [F4] applies.

6.1 The complementary classes lift uniquely to relative generators and the top local-to-global map is an isomorphism. [F3, F4, step 3.1, step 5.1]
Step 5.1 and step 3.1 give
$H^{2i-1}(V;\mathbb F_2)=H^{2i}(V;\mathbb F_2)=0$. Exactness in [F3]
therefore makes $H^{2i}(P^n,V)\to H^{2i}(P^n)$ an isomorphism. The analogous
map for $(E,E\setminus\{p\})$ is an isomorphism, and the natural pair square
together with the absolute restriction isomorphism of step 3.1 identifies
these two relative groups. The same holds for $F,W$ in degree $2j$.
Finally the punctured-space retraction gives vanishing in degrees $2n-1$ and
$2n$, so $H^{2n}(P^n,P^n\setminus\{p\})\to H^{2n}(P^n)$ is an isomorphism.

7.1 The product of the unique classes in complementary positive even degrees is the nonzero top class. [F3, F4, F5, F6, A1, step 6.1]
In the affine chart $z_i\ne0$, ordered ratios identify a neighborhood of
$p$ with $\mathbb C^i\times\mathbb C^j$. They identify $E,F$ with the two
coordinate planes, $V$ with
$(\mathbb C^i\setminus0)\times\mathbb C^j$, and $W$ with
$\mathbb C^i\times(\mathbb C^j\setminus0)$. Excision in [F4], followed by
contraction of the unused coordinate, identifies the nonzero relative
classes from step 6.1 with the coefficient-one local generators. Their
relative product is nonzero by [F5]. The open complements satisfy
$V\cup W=P^n\setminus\{p\}$, so [F6] transports the product to the top
relative group and then through step 6.1 to a nonzero absolute product.
Since that top group is one-dimensional by step 3.1, this is its unique
nonzero class.

8.1 Every finite projective space has the asserted truncated polynomial ring. [F6, step 3.1, step 4.1, step 7.1]
For $n=0$, only the unit remains and $c_0=0$. For $n=1$, $c_1$ is nonzero
and $c_1^2=0$ above dimension two. Inductively suppose the claim holds for
$P^{n-1}$. Step 4.1 and [F6] make $c_n^k$ restrict to the nonzero
$c_{n-1}^k$ for $k<n$. Step 7.1 with $i=n-1,j=1$ then makes
$c_n^n=c_n^{n-1}c_n$ the nonzero top class. All higher powers vanish above
dimension $2n$. With the additive calculation of step 3.1, polynomial
evaluation is onto and its kernel is exactly $(c_n^{n+1})$.

9.1 Finite-skeleton detection gives the infinite polynomial ring. [F2, F6, A1, step 2.1, step 3.1, step 8.1]
Let $c$ be the unique nonzero element of $H^2(P^\infty;\mathbb F_2)$.
Restriction to every $P^n$ with $n\geq1$ is an isomorphism in degree two, so
it sends $c$ to $c_n$. By [F6], $c^k$ restricts to $c_n^k$, which is nonzero
when $n\geq k$ by step 8.1. Hence $c^k$ is the unique nonzero class in degree
$2k$ from step 3.1. Polynomial evaluation is onto degreewise and injective
because a polynomial has finitely many homogeneous terms of distinct degrees.

10.1 Every boundary, degeneracy, and choice case is explicit. [F1, F2, F3, F4, F5, F6, F7, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1]
The cases $n=0,1$, the unit power $k=0$, the top power $k=n$, and the first
vanishing power $k=n+1$ were separated. There is no top degree for
$P^\infty$, but every fixed power is detected on a finite skeleton. The
spaces are nonempty; zero classes and all odd groups are zero. The local
product uses $i,j\geq1$, so no zero-dimensional factor is smuggled into [F5].
The homotopies in step 5.1 specify both endpoints and their nonzero domains.
The singular cochain definitions in [F7] retain degenerate simplices.
Coefficient reduction is a specified map and introduces no choice. AC is
used exactly through UCT [F2] and the local product [F5]; the finite coordinate
constructions add none. No biconditional or converse is asserted. ∎
