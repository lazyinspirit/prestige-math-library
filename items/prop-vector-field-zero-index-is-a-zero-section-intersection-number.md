---
id: prop-vector-field-zero-index-is-a-zero-section-intersection-number
kind: proposition
title: "The index of a zero is its zero-section intersection number"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-oriented-intersection-number, def-local-oriented-intersection-sign, def-product-orientation, def-tangent-bundle-as-a-disjoint-union, prop-the-zero-section-is-a-smooth-embedding, def-transverse-embedded-submanifolds, thm-oriented-intersection-number-is-homotopy-invariant, lem-normal-push-off-zeros-are-self-intersection-points, lem-compact-transverse-complementary-intersections-are-finite, def-induced-tangent-bundle-chart, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 137-140 (the graph of a field and the zero section, exercises 6-9 and their hints)"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§9 and §11, printed pp. 95-104 and 115-125 (the zero-section intersection interpretation of the Euler class)"
dependency_level: 4
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $M$ be a closed oriented smooth $n$-manifold,
$n\ge1$, and give $TM$ the orientation which along the zero section is the direct sum of the
horizontal (tangent) orientation of the base and the vertical (fibre)
orientation, first factor first ([[def-product-orientation]],
[[def-tangent-bundle-as-a-disjoint-union]]), orient both submanifolds by their projections to $M$, and let $X_0\subset TM$ be the zero
section ([[prop-the-zero-section-is-a-smooth-embedding]]) and let $\Gamma_X$ be
the graph of a smooth vector field $X$ transverse to $X_0$, so that the zeros
of $X$ are nondegenerate. Then, with the oriented intersection number of
[[def-oriented-intersection-number]],
$$I(X_0,\Gamma_X)=\sum_{p:X(p)=0}\operatorname{ind}_pX,$$
and at each zero the local oriented intersection sign of
[[def-local-oriented-intersection-sign]] satisfies
$\varepsilon_{(X_0,\Gamma_X)}(p)=\operatorname{ind}_pX$.

## Facts & Assumptions

**Given:** A closed oriented smooth $n$-manifold $M$, the tangent bundle with its horizontal-then-vertical orientation along the zero section, and a smooth field $X$ whose graph is transverse to the zero section.

[F1] $X_0$ and $\Gamma_X$ are closed embedded $n$-submanifolds of the boundaryless $2n$-manifold $TM$ with complementary dimensions, and for a transverse pair with one factor compact the intersection is finite ([[prop-the-zero-section-is-a-smooth-embedding]], [[def-transverse-embedded-submanifolds]], [[lem-compact-transverse-complementary-intersections-are-finite]]).

[F2] For a compact oriented $x$-manifold without boundary $A$, an oriented $n$-manifold $M$ and a closed oriented embedded $z$-submanifold $Z$ with $x+z=n$ and transverse inclusion, the oriented intersection number is the finite sum $I(A,Z)=\sum_{p\in A\cap Z}\varepsilon(p)$ of the local signs of [[def-local-oriented-intersection-sign]], with the product orientation on the ordered sum of tangent spaces, first factor first ([[def-oriented-intersection-number]]).

[F3] Local model of the intersection: over a chart $U$ of $M$ in which $TM$ is trivialized as $U\times\mathbb R^n$, the zero section is $U\times\{0\}$ and the graph is $\{(u,X_\varphi(u))\}$; at a point $p\in X^{-1}(0)$ the tangent spaces are $T_pM\oplus\{0\}$ and $\{(v,DX_pv)\}$, and the determinant comparing the ordered product $T_pX_0\oplus T_{(p,0)}\Gamma_X$ with the ambient horizontal-then-vertical orientation is $\det(DX_p)$: the relevant matrix is block-triangular with identity and $DX_p$ blocks, exactly as in the push-off computation of [[lem-normal-push-off-zeros-are-self-intersection-points]] ([[def-induced-tangent-bundle-chart]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F4] The zeros of $X$ are exactly the intersection points of $\Gamma_X$ with $X_0$, and $\Gamma_X$ is transverse to $X_0$ exactly when $DX_p$ is invertible at every zero, equivalently when every zero is nondegenerate; a nondegenerate zero has index $\operatorname{sign}\det(DX_p)=\pm1$ ([[def-nondegenerate-zero-of-a-vector-field]], [[thm-index-of-a-nondegenerate-vector-field-zero]]).

## Proof

1.1 Write $\Gamma_X=\{(x,X(x)):x\in M\}\subseteq TM$. Since $\Gamma_X\cap X_0=\{(p,0):X(p)=0\}$, the intersection points are the zeros of $X$; at such a point the transversality of $\Gamma_X$ to $X_0$ is equivalent to the surjectivity of $DX_p$ (the tangent spaces are the horizontal space and the graph of $DX_p$), so transversality means invertibility of $DX_p$ at every zero, i.e. nondegeneracy; by [F1] the intersection is finite, and by [F4] each intersection point carries index $\operatorname{sign}\det(DX_p)$. [F1, F3, F4, algebra]

2.1 At a zero $p$, the local sign $\varepsilon_{(X_0,\Gamma_X)}(p)$ is computed in the chart of [F3] as the determinant sign of the block-triangular matrix with diagonal blocks $I_n$ and $DX_p$, hence equals $\operatorname{sign}\det(DX_p)=\operatorname{ind}_pX$; this proves the pointwise identity and, summing over the finitely many intersection points with [F2], also $I(X_0,\Gamma_X)=\sum_{p}\operatorname{ind}_pX$. The countable choice hypothesis is inherited from the transverse-representative selection in the definition of the oriented intersection number for non-transverse maps ([[def-oriented-intersection-number]], [[thm-oriented-intersection-number-is-homotopy-invariant]]), although for the transverse pair considered here the sum is choice-free. [F2, F3, F4, step 1.1, algebra] ∎
