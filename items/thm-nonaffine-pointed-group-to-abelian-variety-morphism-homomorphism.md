---
id: thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
kind: theorem
title: "Pointed morphisms from smooth geometrically integral groups to abelian varieties are homomorphisms"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, prop-abelian-variety-commutativity-from-rigidity, lem-nonaffine-normal-completion-smooth-locus-antiaffine, lem-nonaffine-antiaffine-factor-rigidity, thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends, thm-existence-of-algebraic-closures]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), 8.19, p.152"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Proposition 4.1.4(1)"
      url: https://arxiv.org/pdf/1509.03059
    - title: "Conrad, A modern proof of Chevalleys theorem, Lemma 2.2"
      url: https://virtualmath1.stanford.edu/~conrad/papers/chev.pdf
---

## Statement

Assume the Axiom of Choice. Let $G$ be a smooth geometrically integral group variety over a field $k$, and $A$ an abelian variety. Every $k$-morphism $f:G\to A$ with $f(e_G)=e_A$ is a group homomorphism.

## Facts & Assumptions

[F3] Algebraic closures exist under AC. ([[thm-existence-of-algebraic-closures]])

[F1] Abelian varieties are commutative, and rational maps from smooth integral varieties to them extend uniquely. ([[prop-abelian-variety-commutativity-from-rigidity]], [[thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends]])

[F2] Over an algebraically closed field, a smooth integral group has a smooth integral open completion factor $U$ containing it with $\Gamma(U,\mathcal O)=k$. An integral factor with those global sections satisfies pointed-fibre rigidity. ([[lem-nonaffine-normal-completion-smooth-locus-antiaffine]], [[lem-nonaffine-antiaffine-factor-rigidity]])

## Proof

**Given:** AC, $G,A,f$ as in the statement.

1.1 First let $k$ be algebraically closed. The defect $c(x,y)=f(xy)-f(x)-f(y)$ is a morphism $G\times G\to A$, using [F1], and is zero on $G\times\{e_G\}$ and $\{e_G\}\times G$. Obtain $U$ from [F2]. Since $G\times G$ is dense open in the smooth integral $U\times G$, regard $c$ as a rational map on that product; [F1] extends it uniquely to $\bar c:U\times G\to A$. Its restriction to $U\times\{e_G\}$ is zero by generic agreement and separatedness. Apply the rigidity part of [F2] with rational base point $e_G\in G\subset U$: $\bar c(u,y)=\bar c(e_G,y)=0$ everywhere. Consequently $f(xy)=f(x)+f(y)$ as a scheme morphism identity. [F1, F2, given, construct]

2.1 For arbitrary $k$, extend scalars to an algebraic closure. Geometric integrality and smoothness of $G$ remain, so step 1.1 gives the required identity after extension. That identity holds already over $k$: the equalizer is closed, and its defining ideal sections vanish after faithful flat scalar extension, so are zero. Together with the assumed identity preservation, multiplication preservation also implies inverse preservation by the group inverse equations. Therefore $f$ is a homomorphism. AC is inherited from [F1]–[F2] and the algebraic closure. [F1, F2, F3, step 1.1, algebra] ∎
