---
id: lem-oriented-intersection-detects-nonvanishing-rational-homology
kind: lemma
title: A co-oriented closed transversal detects nonvanishing rational homology of a compact leaf
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-oriented-intersection-number
- thm-oriented-intersection-number-is-homotopy-invariant
- cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary
- lem-compact-transverse-complementary-intersections-are-finite
- def-transversely-oriented-codimension-one-foliation
- def-smooth-embedding
- def-singular-chain-complex-and-singular-homology
- def-countable-choice-principle-for-foliation-pair
- def-oriented-smooth-manifold-and-oriented-chart
- lem-relative-smoothing-of-a-continuous-simplex-along-its-faces
- lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface
- def-fundamental-class-of-a-compact-oriented-manifold
- thm-parametric-transversality
- thm-transverse-preimage-theorem
- lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2, printed pp. 140–143 (co-oriented intersections and the Novikov limit argument)
  - title: John Milnor, Morse Theory (Annals of Mathematics Studies 51; complete PDF)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf
    locator: §3, printed pp. 17–21 (intersection-theoretic obstructions and finite cell counts)
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a
transversely oriented smooth codimension-one foliation of a closed oriented
$n$-manifold $M$, $n\ge2$. Let $\gamma:S^1\to M$ be a closed immersed transversal with an orientation of its connected source, and
orient every compact hypersurface leaf $S$ by the ambient orientation together
with the positive transverse normal. Then:

1. the intersection count $I(\gamma,S)$ has one sign and is nonzero whenever
   $\gamma$ meets $S$;
2. $I(\gamma,S)$ depends only on the rational homology classes
   $[\gamma]\in H_1(M;\mathbb Q)$ and $[S]\in H_{n-1}(M;\mathbb Q)$;
3. if $\gamma$ misses compact leaves $S_1,\dots,S_k$ but meets the compact leaf
   $S$, then $[S]$ lies outside the rational span of
   $[S_1],\dots,[S_k]$ in $H_{n-1}(M;\mathbb Q)$;
4. the same conclusions hold for a finite union of compact leaves carrying
   these consistent orientations.

## Facts & Assumptions

**Given:** A transversely oriented smooth codimension-one foliation $F$ of a closed oriented $n$-manifold $M$, $n\ge2$, a closed immersed transversal $\gamma$, and compact leaves $S,S_1,\dots,S_k$ with the orientations of the statement.

[F1] For a smooth map transverse to a closed oriented submanifold of complementary dimension the oriented intersection number is the finite signed sum $I(f,Z)=\sum_{p\in f^{-1}(Z)}\varepsilon(p)$, and for complementary-dimensional submanifolds one sets $I(A,B)=I(i_A,B)$; the empty intersection contributes $0$ ([[def-oriented-intersection-number]]).

[F2] If $X$ is compact and $f:X\to M$ is transverse to a closed embedded submanifold $Z$ with complementary dimensions, then $f^{-1}(Z)$ is finite; likewise transverse compact/closed complementary submanifolds meet in finitely many points ([[lem-compact-transverse-complementary-intersections-are-finite]]).

[F4] Assume $\mathrm{AC}_\omega$. The oriented intersection number is invariant under smooth homotopies of the map through transverse maps ([[thm-oriented-intersection-number-is-homotopy-invariant]]).

[F5] A transversely oriented codimension-one foliation carries a global transverse direction: a nowhere-vanishing $1$-form or, equivalently, the normal line is trivialized, and the local transversals are consistently ordered ([[def-transversely-oriented-codimension-one-foliation]]).

[F6] Singular homology with rational coefficients is the homology of the singular chain complex tensored with $\mathbb Q$; a bilinear pairing on cycles that vanishes on boundaries descends to the rational homology groups ([[def-singular-chain-complex-and-singular-homology]]).

[F7] Continuous simplices can be smoothed relative to their faces, compatibly on common faces ([[lem-relative-smoothing-of-a-continuous-simplex-along-its-faces]]).

[F8] A compact leaf of a $C^1$ codimension-one foliation is an embedded hypersurface, and a smooth compact leaf is in particular $C^1$ ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]]).

[F9] A supplied orientation on a compact boundaryless manifold determines its fundamental class by its local orientation classes, with no arbitrary choice of generator ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F10] Under $\mathrm{AC}_\omega$, a smooth evaluation family transverse to an embedded submanifold has a null set of nontransverse parameters. A transverse preimage has the corresponding codimension ([[thm-parametric-transversality]], [[thm-transverse-preimage-theorem]]).

[F11] The total outward signed boundary count of a compact oriented one-manifold is zero ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

## Proof

**Proof technique:** direct.

1.1 (Finiteness and one sign.) A compact leaf $S$ is an embedded compact hypersurface [F8], and the immersed closed transversal $\gamma$ is compact, so transversality gives finitely many intersection points, $I(\gamma,S)=\sum_{p}\varepsilon(p)$ [F1, F2]. At every intersection point the local sign is the product of the ambient orientation, the direction of $\gamma$, the orientation of $S$ and the positive transverse normal; transverse orientability supplies a globally consistent positive normal [F5], and the leaf orientation is induced by the ambient orientation, so the signs all agree: $I(\gamma,S)=\pm\#\gamma^{-1}(S)$, which is nonzero whenever $\gamma$ meets $S$. [F1, F2, F5, F8]

1.2 (Finite-chain preparation.) Represent each oriented leaf class by a finite rational fundamental cycle from F9 and the curve class by its parametrized circle cycle. F7 smooths finitely many simplices and their homotopies in increasing face dimension, with the same modification on every occurrence of a face. To arrange transversality to an immersed curve, use the embedded diagonal in $M\times M$ and the map $(z,u)\mapsto(\sigma(z),\gamma(u))$. Finitely many coordinate translations multiplied by source bumps give a submersive evaluation in the first factor on the region being modified, hence a family transverse to the diagonal. F10 selects an arbitrarily small good parameter simultaneously for the finitely many face strata; the union of their null exceptional sets is null. Process faces first, extend their fixed maps and homotopies by F7, then perturb interiors with bumps vanishing near already transverse faces. Transversality persists on a collar of those faces by compactness. These finite homotopies preserve homology by their finite prism chains. Initially prepare each leaf fundamental cycle inside $S$ against the finitely many curve/leaf crossing points, using translations in charts of $S$ and F10; its lower faces miss those points. Then the intersection count of this prepared leaf cycle equals $I(\gamma,S)$: at each transverse curve/leaf crossing the sum of the simplex local degrees is the prescribed coefficient one of the leaf's local orientation class in F9. Signs use the ordered factors $(\gamma,S)$ throughout. [F4, F7, F9, F10, construct]

2.1 (Vanishing on rational boundaries.) If a rational combination of the leaf cycles bounds, choose a finite rational singular $n$-chain $C$ bounding their prepared representatives; modifying representatives by homotopies only adds their finite prism chains to $C$. Apply step 1.2 to $C$, fixing its prepared boundary. For each $n$-simplex the pullback of the diagonal under $(\sigma,\gamma)$ has dimension $n+1-n=1$; the codimension-one faces contribute its boundary, and lower faces miss the diagonal by dimension and transversality. Thus the pullback is a compact oriented one-manifold with boundary, and F11 gives total signed boundary count zero. Paired simplex faces cancel with their alternating chain-boundary signs, leaving only the count against $\partial C$. This proves zero count for every bounding rational combination of leaf classes. In the other variable a finite rational two-chain bounding a difference of curve cycles is treated against a fixed leaf: the pullback dimension is $2-(n-(n-1))=1$, and the same face cancellation applies. Counts therefore depend only on the two rational homology classes and are additive, as required by F6. No embedded bounding manifold is assumed. [F6, F10, F11, step 1.2]

3.1 (The span conclusion.) Suppose $[S]=\sum_i q_i[S_i]$ for some $q_i\in\mathbb Q$, and suppose $\gamma$ misses every $S_i$ but meets $S$. By step 1.1 each $I(\gamma,S_i)=0$, and bilinearity of step 2.1 gives $I(\gamma,S)=\sum_i q_i I(\gamma,S_i)=0$, contradicting $I(\gamma,S)\neq0$ from step 1.1. Hence $[S]$ is not in the rational span of $[S_1],\dots,[S_k]$. Since $I$ is additive over disjoint finite unions of consistently oriented compact leaves, the same computation applies to a finite union, which proves the last clause. [F1, step 1.1, step 2.1]

4.1 The intersection count of a co-oriented closed transversal with a compact leaf has a single sign and is nonzero on a genuine intersection, is well defined on rational homology classes, and therefore detects that the leaf class lies outside the rational span of the classes missed by the transversal, including for finite unions of consistently oriented compact leaves. [step 1.1, step 3.1] ∎
