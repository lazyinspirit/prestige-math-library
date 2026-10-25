---
id: ex-rank-zero-and-empty-base-vector-bundle-classification
kind: example
title: Rank-zero and empty-base vector-bundle classification
status: published
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-stiefel-space-grassmannian-and-tautological-bundle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Section 1.1 conventions"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Vector-bundle definition and trivial bundle, printed pp.6–8"
---

## Example

For every space $X$, the rank-zero vector bundle is, up to its unique bundle
isomorphism, $X\xrightarrow{\mathrm{id}}X$. Thus
$\operatorname{Vect}^{\mathbb F}_0(X)$ and
$[X,\operatorname{Gr}_0(\mathbb F^\infty)]$ are singletons. If $X=\varnothing$
and $n$ is arbitrary, the unique empty total-space bundle and the unique map
from the empty space likewise give singleton classification sets.

## Facts & Assumptions

**Given:** a space $X$, a field $\mathbb F\in\{\mathbb R,\mathbb C\}$, and a nonnegative integer $n$.

[F1] A rank-$n$ vector bundle is locally a projection $U\times\mathbb F^n\to U$ ([[def-real-and-complex-topological-vector-bundle]]).

[F2] $\operatorname{Gr}_0(\mathbb F^N)$ and $\operatorname{Gr}_0(\mathbb F^\infty)$ are one-point spaces carrying the zero tautological bundle ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

## Verification

**Proof technique:** direct.

1.1 Let $p:E\to X$ have rank zero. Every fiber is the one-element vector space $\mathbb F^0=\{0\}$ by [F1], so $p$ is bijective. Each bundle chart is a homeomorphism $p^{-1}(U)\cong U\times\{0\}\cong U$ over $U$, and these local inverses glue to the inverse of $p$. Thus $p$ is a bundle isomorphism to $\mathrm{id}_X:X\to X$, and any bundle map over $X$ between two such bundles is forced fiberwise. There is exactly one rank-zero isomorphism class. [F1, construct]

2.1 By [F2], there is exactly one map $X\to\operatorname{Gr}_0(\mathbb F^\infty)$ and exactly one homotopy class of such maps. Pulling back the zero tautological bundle gives the bundle in step 1.1, so the two singleton sets correspond. [F2, step 1.1]

3.1 Now let $X=\varnothing$ and allow any $n$. A map $E\to\varnothing$ exists only when $E=\varnothing$, and local triviality is vacuous, so this is the unique rank-$n$ bundle. There is also exactly one function from $\varnothing$ to $\operatorname{Gr}_n(\mathbb F^\infty)$ and exactly one homotopy between any two such functions. Hence both classification sets are again singletons. No choice principle is used. [F1, F2, construct] ∎
