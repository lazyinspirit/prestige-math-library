---
id: thm-thom-isomorphism-for-a-trivial-oriented-bundle
kind: theorem
title: Thom isomorphism for a trivial oriented bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-thom-space-of-zero-and-trivial-bundles, def-thom-class-by-fiberwise-normalization, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, def-relative-singular-cochain-complex, thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, thm-five-lemma-for-modules, def-relative-cup-product, prop-relative-cup-products-are-natural-and-compatible-with-connectors, prop-cup-product-is-natural-unital-and-associative]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "trivial bundle and suspension Thom isomorphism, printed pp.194–196"
---

## Statement

For the trivially $R$-oriented bundle $\xi=B\times\mathbb R^n$, let $v_n$
be its ordered fiber generator and put $u=\operatorname{pr}_2^*v_n$.  Then
$u$ is normalized and
$$H^k(B;R)\xrightarrow{\ \cong\ }H^{k+n}(B\times D^n,B\times S^{n-1};R);\quad a\longmapsto\pi^*a\smile u$$
is an isomorphism for every $k$ and every commutative ring $R$.

## Facts & Assumptions

**Given:** The product bundle, standard ordered orientation, and a commutative ring $R$.

[F1] [[prop-thom-space-of-zero-and-trivial-bundles]] identifies the product disk/sphere pair and its iterated suspension quotient.

[F2] [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] supplies the ordered generator $v_n$ over arbitrary $R$.

[F3] [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]] and [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] give choice-free homotopy invariance, finite additivity, and the pair sequence. [[def-relative-singular-cochain-complex]], [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]], and [[thm-five-lemma-for-modules]] supply the relative-pair comparison used in the iteration below.

[F4] [[def-relative-cup-product]] constructs relative products, [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] gives naturality and the signed connector rule, and [[prop-cup-product-is-natural-unital-and-associative]] gives cochain associativity.

[F5] [[def-thom-class-by-fiberwise-normalization]] gives the fiber restriction criterion.

## Proof

**Proof technique:** iterate the one-coordinate relative suspension.

1.1 Projection to the second factor is a map of pairs, so $u=\operatorname{pr}_2^*v_n$ is defined.  Its restriction to every fiber is literally $v_n$; hence it is normalized by [F5]. [F2, F5]

1.2 For one interval, the pair sequence for $(B\times I,B\times\partial I)$ has restriction $H^q(B;R)\to H^q(B;R)\oplus H^q(B;R)$ equal to the diagonal, by the two endpoint deformation retractions and finite additivity in [F3].  Exactness identifies the next relative group with the cokernel of that diagonal, and $(x,y)\mapsto y-x$ identifies the cokernel with $H^q(B;R)$; the following diagonal is injective.  Thus the connecting map is an isomorphism $H^q(B;R)\cong H^{q+1}(B\times I,B\times\partial I;R)$. [F3]

2.1 Normalize the interval generator as the connector of the boundary class $(0,1)$.  Applying [F4]'s second connector formula to $\pi^*a$ and $(0,1)$ says that the isomorphism of step 1.2 sends $a$ to $(-1)^{|a|}\pi^*a\smile v_1$.  Multiplication by this degree-dependent sign is itself an automorphism, so cup product with $v_1$ is an isomorphism in every degree. [F2, F4, step 1.2]

3.1 We first record the relative form needed for iteration.  If $(X,A)$ is a pair with an explicit collar of $A$, the one-interval connector gives $$H^q(X,A;R)\xrightarrow{\cong}H^{q+1}\bigl(X\times I,\,A\times I\cup X\times\partial I;R\bigr). \tag{1}$$ To verify this rather than assume it, use the collar to subdivide chains until every simplex in the union lies in one of its two members.  The small-chain equivalence in [F3] then identifies the target relative cochain complex with the kernel in the termwise split restriction sequence for the pairs $(X\times I,X\times\partial I)$ and $(A\times I,A\times\partial I)$.  The resulting cohomology sequence forms a natural exact ladder over the pair sequence of $(X,A)$.  The absolute vertical maps for $X$ and $A$ are the one-interval isomorphisms of step 2.1, so [F3]'s five lemma makes (1) an isomorphism.  Connector naturality in [F4] identifies (1), up to the same invertible degree sign, with relative cup by the interval generator. [F3, F4, step 2.1]

4.1 Write the $n$-cube as an ordered product of intervals. Each pair $(B\times I^j,B\times\partial I^j)$ has an explicit radial collar in the cube coordinate, so apply (1) successively for $j=0,\ldots,n-1$. The generator $v_n$ in [F2] is the iterated ordered connector generator. At the cochain level, the iterated relative products are represented by repeated Alexander--Whitney cup products; associativity in [F4] identifies either parenthesization with the single product $\pi^*a\smile(v_1\smile\cdots\smile v_1)$. Connector naturality identifies the parenthesized fiber product with $v_n$, up to the product of the displayed invertible signs. Thus the composite is $a\mapsto\pi^*a\smile v_n$ up to a unit sign and is an isomorphism. Radial identification of cube and disk pairs, and [F1], give the stated target. [F1, F2, F4, step 3.1]

5.1 For $n=0$, $v_0=1_R$ and the map is the identity of $H^k(B;R)$.  Empty $B$, the zero ring, $n=1$, negative/zero $k$, both interval endpoints, a constant class, and degenerate singular simplices all remain inside the exact pair calculation.  Every sign is a unit and hence affects neither bijectivity nor normalization.  The construction uses finitely many fixed connectors and no arbitrary family, so it is choice-free. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
