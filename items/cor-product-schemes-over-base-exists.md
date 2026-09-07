---
id: "cor-product-schemes-over-base-exists"
kind: "corollary"
title: "Products and initial and terminal S-schemes"
status: "draft"
origin: "pipeline"
deps: ["thm-fibre-products-of-schemes-exist", "def-scheme-over-base"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.1 and 10.1.A (empty gluing specialization)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

For every scheme $S$, the category of $S$-schemes has binary products $X\times_S Y$, terminal object $S\xrightarrow{\mathrm{id}}S$, and initial object $\varnothing\to S$. A product with the empty scheme is empty. Disjoint unions, including the empty disjoint union, are coproducts of $S$-schemes.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover $$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$ ([[thm-fibre-products-of-schemes-exist]])

[F2] An **$S$-scheme** is a scheme $X$ equipped with a morphism $X\to S$. An **$S$-morphism** $X\to Y$ is a scheme morphism commuting with the maps to $S$. For $n\geq0$, choose an affine open cover $S=\bigcup_i\operatorname{Spec}A_i$. Over each chart take $\operatorname{Spec}A_i[t_1,\ldots,t_n]$. On overlaps, localization in the coefficients gives canonical isomorphisms that fix the variables; these satisfy the cocycle condition and glue by `thm-gluing-affine-schemes`. The result, independent of the cover up to the unique $S$-isomorphism respecting the coefficient maps and the ordered coordinate functions $t_1,\ldots,t_n$, is the relative affine space $\mathbf A^n_S$. Its structure morphism is affine, although its total scheme need not be affine when $S$ is not. For $n=0$ it is $S$; for $S=\varnothing$ the construction gives the empty scheme. The uniqueness assertion concerns these coordinate-compatible identifications, not arbitrary $S$-isomorphisms. ([[def-scheme-over-base]])

## Proof

1.1 By F2, a map over $S$ is exactly a map commuting with structure maps. Therefore the fibre product supplied by F1 is a categorical product of $S$-schemes. A map from $X$ to the terminal candidate $S$ over $S$ is forced to equal its structure morphism. [given, F1, F2]

2.1 The empty scheme has exactly one morphism to every scheme, since both its underlying map and all its sheaf data are unique. Conversely a map into the empty scheme exists only for an empty source. Thus the empty scheme satisfies the initial property, and compatible pairs into $X$ and $\varnothing$ are represented by $\varnothing$. This includes $S=\varnothing$. [step 1.1, given]

3.1 The topological disjoint union of schemes, with the structure sheaf specified separately on each component, is a scheme because every component is open and has its original affine charts. Maps out of it are exactly independent component maps, including their sheaf maps, so it is the coproduct over $S$. For zero components it is empty and for one component it is that component. [F2, algebra] ∎
