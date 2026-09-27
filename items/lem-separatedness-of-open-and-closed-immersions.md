---
id: lem-separatedness-of-open-and-closed-immersions
kind: lemma
title: Open and closed immersions are separated
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-locally-closed-immersion, def-open-immersion-schemes, def-closed-immersion-schemes, def-separated-morphism-schemes, lem-immersions-and-localizations-monomorphisms, lem-monomorphism-diagonal-isomorphism, thm-immersion-monomorphism-locally-finite-type, lem-separated-stable-under-composition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.23.8, printed p.48"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.C, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement

Every open immersion, every closed immersion and every immersion (locally closed
immersion) of schemes is separated as a morphism.

## Facts & Assumptions

**Given:** An immersion $f:Z\to X$ with factorization $f=j\circ i$ into a closed immersion $i:Z\to U$ and an open immersion $j:U\hookrightarrow X$.

[F1] An **immersion** is a morphism factoring as a closed immersion into an open subscheme of its target. ([[def-locally-closed-immersion]])

[F2] Open immersions and closed immersions are monomorphisms; monomorphism means injectivity on morphism sets. ([[lem-immersions-and-localizations-monomorphisms]])

[F3] A monomorphism is separated as a morphism. ([[lem-monomorphism-diagonal-isomorphism]])

[F4] Every immersion is a monomorphism, locally of finite type and separated. ([[thm-immersion-monomorphism-locally-finite-type]])

[F5] If $Z\to U$ and $U\to X$ are separated morphisms, then $Z\to X$ is separated. ([[lem-separated-stable-under-composition]])

[F6] An **open immersion** identifies its source with an open subscheme of its target; a **closed immersion** has underlying map a homeomorphism onto a closed subset with surjective structure map. ([[def-open-immersion-schemes]], [[def-closed-immersion-schemes]])

[F7] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

## Proof

1.1 An open immersion is a monomorphism by [F2] and hence separated by [F3]; the same argument applies to a closed immersion. [F2, F3, F6]

2.1 For the general immersion, [F1] provides the factorization $f=j\circ i$ with $j$ an open immersion and $i$ a closed immersion; by step 1.1 both $i:Z\to U$ and $j:U\to X$ are separated, so [F5] makes their composite $f$ separated. [F1, F5, step 1.1]

3.1 Both statements also follow directly from [F4], which shows that an immersion is a monomorphism and therefore separated, in agreement with step 2.1; the diagonal of an immersed morphism is an isomorphism, hence a closed immersion by [F7]. [F4, F7, step 2.1] ∎
