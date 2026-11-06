---
id: thm-gts-derived-artin-stacks-closed-under-homotopy-fiber-products
kind: theorem
title: Derived Artin stacks are closed under homotopy fiber products
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
- def-gts-derived-artin-stack-and-cotangent-complex
- def-derived-scheme-and-cotangent-complex
dependency_roles:
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-derived-scheme-and-cotangent-complex: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bertrand Toën and Gabriele Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications'
    url: https://arxiv.org/pdf/math/0404373
    locator: HAG-context Definition 1.3.2.13; Definition 1.3.3.1, Proposition 1.3.3.3(3)–(4) and Corollary 1.3.3.5 with proofs (PDF pp. 83–86); Lemmas 2.2.2.13 and 2.2.3.1 with proofs (pp. 157–159). The geometricity induction is on pp. 84–86; pp. 157–159 verify the connective HAG context.
  - title: Prestige Math Library, Derived schemes and cotangent complex
    url: repository:items/def-derived-scheme-and-cotangent-complex.md
    locator: Definition of derived schemes and their cotangent complexes; the homotopy-pullback formula is supplied separately by HAG II Remark 1.1.0.9
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $F\to H\leftarrow G$ be a diagram of derived Artin stacks over a
characteristic-zero field $k$. Assume the three stacks are $n$-geometric for
one finite integer $n\ge -1$, with the derived-smooth atlas convention of
[[def-gts-derived-artin-stack-and-cotangent-complex]]. Then the homotopy fiber
product $P=F\times_H^h G$ is derived Artin (indeed $n$-geometric).

## Statement references

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[def-derived-scheme-and-cotangent-complex]]

## Facts & Assumptions

**Given:** The diagram of $n$-geometric derived stacks and the specified derived-affine site.

[F1] [[def-gts-derived-artin-stack-and-cotangent-complex]] fixes the connective derived-affine site, derived-étale topology, affine smooth class $\mathcal P$, and the recursive $n$-representable, $n$-$\mathcal P$, and $n$-geometric definitions. It does not assert the stability facts used below.

[F2] In [F1]'s derived-affine site, a homotopy pullback of affines is the opposite of a homotopy pushout of simplicial commutative $k$-algebras. HAG II, §2.2.1 specializes its HA context to simplicial $k$-modules and simplicial commutative $k$-algebras; Remark 1.1.0.9 states that homotopy coproducts of commutative monoids in that context are given by derived tensor products. Therefore this affine homotopy pullback is represented by the corresponding derived tensor product. [[def-derived-scheme-and-cotangent-complex]] supplies the derived-scheme and cotangent context used here; it does not state this homotopy-pullback formula.

[F3] Toën--Vezzosi, *Homotopical Algebraic Geometry II*, §2.2.2 defines the connective simplicial-algebra derived-étale topology and its affine smooth class; Lemma 2.2.2.13 verifies the topology hypotheses of Definition 1.3.2.13, and Lemma 2.2.3.1 verifies the smooth-class hypotheses there. Those class conditions are: covering maps lie in $\mathcal P$; $\mathcal P$ is closed under equivalences, composition, and homotopy pullbacks; membership in $\mathcal P$ descends along derived-étale covers of the source; and the canonical maps from either summand to a homotopy coproduct over a common target lie in $\mathcal P$. Under this context, Proposition 1.3.3.3(3)--(4) proves stability of $n$-representable and $n$-$\mathcal P$ morphisms under homotopy pullback and composition, and Corollary 1.3.3.5 states that the $n$-geometric stacks are closed under homotopy pullbacks. These are published inputs with the stated HAG-context hypotheses, not consequences of [F1] alone.

[A1] The three stacks admit a common finite geometricity bound $n$.

## Proof

1.1 The selected derived-affine site and $\mathcal P$ form the connective HAG context specified in [F3]: Lemma 2.2.2.13 verifies the derived-étale topology conditions, and Lemma 2.2.3.1 verifies the smooth-class conditions. The recursive notions of representability, atlas, and $n$-geometricity in [F1] are the HAG definitions 1.3.3.1. [F1, F3, given]

2.1 Apply HAG II Corollary 1.3.3.5 in this context. It states that, for each fixed $n\ge -1$, the full subcategory of $n$-geometric derived stacks is stable under homotopy pullbacks. Since $F$, $H$, and $G$ are all $n$-geometric in the same context, their homotopy pullback $F\times_H^hG$ is $n$-geometric and hence derived Artin. Proposition 1.3.3.3 supplies the representability and $n$-$\mathcal P$ stability used by that corollary; it is not inferred from the recursive definition alone. [F1, F2, F3, A1, given] ∎
## Remarks

The common geometricity bound is explicit so the direct application does not silently use a separate theorem that raises geometricity ranks. The statement is a closure result for homotopy fiber products; it supplies no cotangent perfectness beyond the hypotheses in the derived-Artin definition.
