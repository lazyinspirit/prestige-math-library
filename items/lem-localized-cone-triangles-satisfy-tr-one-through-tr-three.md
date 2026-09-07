---
id: "lem-localized-cone-triangles-satisfy-tr-one-through-tr-three"
kind: "lemma"
title: "Localized cone triangles satisfy tr one through tr three"
deps: ["def-derived-category-of-an-abelian-category", "lem-addition-of-roofs-makes-an-additive-localization", "lem-finite-roof-squares-and-composable-pairs-can-be-cleared", "thm-the-homotopy-category-of-an-abelian-category-is-triangulated", "thm-homology-is-a-homological-functor-on-the-homotopy-category", "thm-five-lemma-in-an-abelian-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05R1"
      title: "13.5.5–13.5.6, including all TR1–TR4 proof paragraphs"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In $D(\mathcal A)$ let distinguished triangles mean triangles isomorphic to images of cone triangles in $K(\mathcal A)$. The cochain shift descends and these triangles satisfy TR1, signed TR2, and TR3.

## Facts & Assumptions

**Given:** In $D(\mathcal A)$ let distinguished triangles mean triangles isomorphic to images of cone triangles in $K(\mathcal A)$. The cochain shift descends and these triangles satisfy TR1, signed TR2, and TR3.

[F1] The derived category is localization at quasi-isomorphisms ([[def-derived-category-of-an-abelian-category]]).

[F2] The roof localization is additive and preserves zero and biproducts ([[lem-addition-of-roofs-makes-an-additive-localization]]).

[F3] A commuting localized square on two ordinary arrows clears to two ordinary commuting squares with denominator comparisons ([[lem-finite-roof-squares-and-composable-pairs-can-be-cleared]]).

[F4] The homotopy category of an abelian category is triangulated ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]).

[F5] Homology on the homotopy category is homological ([[thm-homology-is-a-homological-functor-on-the-homotopy-category]]).

[F6] In a map of exact five-term sequences, isomorphisms in positions one, two, four and five imply an isomorphism in position three ([[thm-five-lemma-in-an-abelian-category]]).

## Proof

1.1 The additive localization exists. Since a quasi-isomorphism remains one after either shift, shifting both arrows of a roof defines mutually inverse additive shifts. The zero complex and identity triangles descend as well. [F1, F2]

1.2 For any arrow write $\alpha=Q(s)^{-1}Q(f)$ with $s:Y\to Y'$ a quasi-isomorphism. A cone triangle on $f:X\to Y'$ descends and transport along $Q(s)$ completes $\alpha:X\to Y$. Closure under isomorphism is built into the definition. Rotation gives $(Y,Z,X[1],v,w,-u[1])$ because this is the rotation in $K$; shifting a roof preserves the minus sign. This proves TR1 and both directions of TR2. [F1, F4]

1.3 For TR3 first replace the two triangles by images of triangles on ordinary maps $f,f'$. Apply the square-clearing lemma to the prescribed first two components. It supplies a third ordinary arrow $f''$ and two commuting squares with maps $(k,l)$ and denominator maps $(s,t)$ into $f''$. Complete each square to a morphism of cone triangles in $K$ by its TR3, giving third maps $m:C_f\to C_{f''}$ and $r:C_{f'}\to C_{f''}$. [F3, F4]

2.1 For every $n$, take the five consecutive terms $H^n(X')$, $H^n(Y')$, $H^n(C_{f'})$, $H^{n+1}(X')$, $H^{n+1}(Y')$ and their counterparts for $f''$. Exactness holds in $K$; four vertical maps are isomorphisms because $s,t$ are quasi-isomorphisms. The five lemma makes $H^n(r)$ an isomorphism. Hence $r$ is a quasi-isomorphism before any triangulation of $D$ is used. [F5, F6, step 1.3]

3.1 Put the third localized component equal to $Q(r)^{-1}Q(m)$. The two morphisms of triangles in $K$, with the now invertible comparison $Q(r)$, give all three commuting triangle squares and the shifted first component. Transporting back proves TR3 for the original data. [step 1.3, step 2.1, algebra] ∎
