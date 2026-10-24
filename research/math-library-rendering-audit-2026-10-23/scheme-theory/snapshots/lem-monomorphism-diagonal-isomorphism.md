---
id: lem-monomorphism-diagonal-isomorphism
kind: lemma
title: Monomorphisms and diagonals
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-diagonal-morphism-scheme, def-separated-morphism-schemes, def-fibre-product-schemes-universal-property, thm-fibre-products-of-schemes-exist, lem-immersions-and-localizations-monomorphisms]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.23.1-3 (tags 01L1-01L4), printed p.47"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.2.3, printed p.306"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $j:X\to Y$ be a morphism of schemes. Then $j$ is a monomorphism if and only
if its diagonal $\Delta_{X/Y}:X\to X\times_YX$ is an isomorphism. A monomorphism
$j$ is separated as a morphism, that is, $\Delta_{X/Y}$ is a closed immersion.

## Facts & Assumptions

**Given:** A morphism of schemes $j:X\to Y$, its diagonal $\Delta_{X/Y}$ and the projections $\operatorname{pr}_1,\operatorname{pr}_2:X\times_YX\to X$.

[F1] The **diagonal morphism** $\Delta_{X/Y}$ is the unique morphism of $Y$-schemes $X\to X\times_YX$ with $\operatorname{pr}_1\Delta_{X/Y}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/Y}$. ([[def-diagonal-morphism-scheme]])

[F2] A **fibre product** $X\times_YX$ has the universal property that morphisms $T\to X\times_YX$ correspond bijectively to pairs $a,b:T\to X$ with $ja=jb$; existence is supplied by [[thm-fibre-products-of-schemes-exist]]. ([[def-fibre-product-schemes-universal-property]])

[F3] In this library **monomorphism** means that for every scheme $T$ the induced map on sets of morphisms from $T$ is injective; equivalently, $ja=jb$ implies $a=b$ for all $a,b:T\to X$. ([[lem-immersions-and-localizations-monomorphisms]])

[F4] A morphism $j:X\to Y$ is **separated** when $\Delta_{X/Y}$ is a closed immersion. ([[def-separated-morphism-schemes]])

## Proof

1.1 By [F2] a morphism $h:T\to X\times_YX$ corresponds to the pair $(\operatorname{pr}_1h,\operatorname{pr}_2h)$ of morphisms $T\to X$ with $j\operatorname{pr}_1h=j\operatorname{pr}_2h$, and $h$ is determined by that pair; the diagonal $\Delta_{X/Y}$ corresponds to the pair $(\operatorname{id}_X,\operatorname{id}_X)$. [F1, F2, given]

1.2 By [F3] the morphism $j$ is a monomorphism exactly when for every scheme $T$ and all $a,b:T\to X$ with $ja=jb$ one has $a=b$. [F3, given]

2.1 Assume that $j$ is a monomorphism and let $h:T\to X\times_YX$. The pair $(a,b)=(\operatorname{pr}_1h,\operatorname{pr}_2h)$ satisfies $ja=jb$, so $a=b$ by [F3]; hence $\operatorname{pr}_1h=\operatorname{pr}_2h$ for every $h$, and taking $T=X\times_YX$ and $h=\operatorname{id}$ gives $\operatorname{pr}_1=\operatorname{pr}_2$. Consequently $\operatorname{pr}_1\Delta_{X/Y}=\operatorname{id}_X$ and also $\operatorname{pr}_2\Delta_{X/Y}=\operatorname{id}_X$, so $\Delta_{X/Y}\operatorname{pr}_1$ and $\operatorname{id}_{X\times_YX}$ are two morphisms with the same two projections, equal by the uniqueness in [F2]; hence $\Delta_{X/Y}$ is an isomorphism with inverse $\operatorname{pr}_1$. [F1, F2, F3, step 1.1, step 1.2]

2.2 Assume that $\Delta_{X/Y}$ is an isomorphism and let $a,b:T\to X$ satisfy $ja=jb$. By [F2] there is $h:T\to X\times_YX$ with $\operatorname{pr}_1h=a$ and $\operatorname{pr}_2h=b$. Then $h=\Delta_{X/Y}\circ(\operatorname{pr}_1\circ h)$, because $\operatorname{pr}_1\Delta_{X/Y}=\operatorname{id}_X$ by [F1] and the assumed invertibility of $\Delta_{X/Y}$ imply $\operatorname{pr}_1=\Delta_{X/Y}^{-1}$, so $b=\operatorname{pr}_2h=\operatorname{pr}_2\Delta_{X/Y}\operatorname{pr}_1h=a$. Hence $j$ is a monomorphism. [F1, F2, step 1.1]

3.1 If $j$ is a monomorphism, step 2.1 exhibits $\Delta_{X/Y}$ as an isomorphism, and an isomorphism is a closed immersion: its underlying map is a homeomorphism onto its full image and the structure map is an isomorphism of sheaves, hence surjective. By [F4] the monomorphism $j$ is therefore separated. [F4, step 2.1]

4.1 Steps 2.1 and 2.2 prove the equivalence and step 3.1 the final assertion; note that separatedness here is that of the morphism $j$ with diagonal over $Y$, and nothing is asserted about separatedness of $X$ over other bases. [step 2.1, step 2.2, step 3.1] ∎
