---
id: lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement
kind: lemma
title: The smooth structure on G/H is independent of the local complement
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero, thm-smooth-inverse-function-theorem-on-manifolds]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Construction Theorem 21.17, quotient-chart compatibility argument, printed pages 551–552
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $H\le G$ be closed. Any two linear
complements of $\mathfrak h$ in $\mathfrak g$ used in the local-product
construction of $G/H$ yield smoothly compatible quotient charts, and hence the
same smooth structure.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed subgroup $H\le G$, and complements
$\mathfrak g=\mathfrak m_1\oplus\mathfrak h=\mathfrak m_2\oplus\mathfrak h$.

[A1] The quotient theorem gives the unique smooth structure for which the
coset map is a surjective submersion and the left action is smooth.
[[def-countable-choice]], [[thm-quotient-manifold-by-a-closed-lie-subgroup]].

[F1] The exponential is smooth with identity differential at zero, and a
smooth map with invertible differential is locally a diffeomorphism.
[[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]].
[[thm-smooth-inverse-function-theorem-on-manifolds]].

## Proof

**Proof technique:** compute chart changes through local product inverses.

1.1 Define $\Psi_i:\mathfrak m_i\times H\to G$ by $\Psi_i(X,h)=\exp(X)h$. By [F1], its differential at $(0,e)$ is $(X,Y)\mapsto X+Y$, which is an isomorphism because $\mathfrak g=\mathfrak m_i\oplus\mathfrak h$. The inverse function theorem in [F1] therefore supplies product neighborhoods $W_i\times V_i$ on which $\Psi_i$ is a diffeomorphism; after the standard continuity shrinking, $S_i=\exp(W_i)$ meets each represented coset once. The corresponding quotient coordinate map sends $\exp(X)H$ to $X$. [A1, F1, algebra]

2.1 Consider a point in the overlap of the two quotient chart domains. After translating both constructions to that point and shrinking, every representative from $S_1$ lies in the product neighborhood for $\Psi_2$. If $X\in W_1$, write $$\Psi_2^{-1}(\exp X)=(Y(X),h(X)).$$ Both components are smooth, and $\exp(X)H=\exp(Y(X))H$; therefore the transition from the $\mathfrak m_1$-coordinate to the $\mathfrak m_2$-coordinate is precisely $X\mapsto Y(X)$, the first component of $\Psi_2^{-1}\circ\exp|_{W_1}$. It is smooth. [F1, step 1.1]

3.1 Interchanging $1$ and $2$ produces the smooth inverse transition. Translations are diffeomorphisms, so the same calculation handles all translated charts. Thus the two atlases are smoothly compatible and generate the same maximal atlas. Zero-dimensional complements, $H=G$, and $H=\{e\}$ cause no exception. Choice is inherited only through [A1]. [A1, step 2.1] ∎
