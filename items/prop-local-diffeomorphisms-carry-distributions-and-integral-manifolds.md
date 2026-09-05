---
id: prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds
kind: proposition
title: "Local diffeomorphisms carry distributions and integral manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-integral-manifold-of-a-distribution,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       thm-the-global-differential-of-a-smooth-map-is-smooth,
       prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M \to N$ be a local diffeomorphism, let $\mathcal D$ be a smooth
distribution on $M$, and let $U \subseteq M$ be open such that
$F|_U:U \to V:=F(U)$ is a diffeomorphism. Then:

1. the family
   $$ (F_*\mathcal D)_{F(p)} := dF_p(\mathcal D_p) \qquad (p \in U) $$
   is a smooth distribution on $V$, and
2. if $i:P \to U$ is an integral manifold of $\mathcal D|_U$, then
   $F \circ i:P \to V$ is an integral manifold of $F_*\mathcal D$.

## Facts & Assumptions

**Given:** A local diffeomorphism $F:M \to N$, a smooth distribution $\mathcal D$ on $M$, and an open set $U$ on which $F$ is a diffeomorphism onto $V$.

[A1] Let $i:P \to U$ be an integral manifold of $\mathcal D|_U$.

## Proof

**Proof technique:** direct.

1.1 Because $F|_U$ is a diffeomorphism, its differential identifies [given] $TU \to TV$ fibrewise by linear isomorphisms. Transporting the rank-$k$ subbundle $\mathcal D|_U$ through those isomorphisms yields a rank-$k$ smooth subbundle of $TV$, namely $F_*\mathcal D$. [given]

1.2 The composite $F \circ i$ is an injective immersion, because both factors [given] are immersions and $F|_U$ is injective. For each $q \in P$, $$d(F \circ i)_q(T_qP) = dF_{i(q)}(di_q(T_qP)) = dF_{i(q)}(\mathcal D_{i(q)}) = (F_*\mathcal D)_{F(i(q))}.$$ Hence $F \circ i$ is an integral manifold of the transported distribution. [given, algebra]

2.1 Therefore local diffeomorphisms preserve the regular-distribution and [given] integral-manifold structure on any neighborhood where they are genuine diffeomorphisms. [given] ∎
