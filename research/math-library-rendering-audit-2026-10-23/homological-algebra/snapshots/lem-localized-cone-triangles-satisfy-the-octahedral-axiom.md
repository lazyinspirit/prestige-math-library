---
id: "lem-localized-cone-triangles-satisfy-the-octahedral-axiom"
kind: "lemma"
title: "Localized cone triangles satisfy the octahedral axiom"
deps: ["lem-localized-cone-triangles-satisfy-tr-one-through-tr-three", "lem-finite-roof-squares-and-composable-pairs-can-be-cleared", "prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf", "thm-the-homotopy-category-of-an-abelian-category-is-triangulated"]
verification:
  audited: 2026-09-07
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The distinguished localized cone triangles in $D(\mathcal A)$ satisfy TR4, the octahedral axiom, with the cochain shift and connecting signs inherited from $K(\mathcal A)$.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$, its homotopy category with the stated cochain cone convention, and the localization at quasi-isomorphisms under the standing size hypothesis.

[F1] Composable localized arrows and their composite can be cleared simultaneously ([[lem-finite-roof-squares-and-composable-pairs-can-be-cleared]]).

[F2] The homotopy category is triangulated, so the full octahedral axiom holds there ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]).

[F3] The localized triangles satisfy TR1, signed TR2 and TR3 ([[lem-localized-cone-triangles-satisfy-tr-one-through-tr-three]]).

## Proof

1.1 Clear a composable pair $\alpha:QX\to QY$, $\beta:QY\to QZ$ simultaneously to ordinary $f:X\to Y'$, $g:Y'\to Z'$, using denominator isomorphisms of the objects. This includes zero maps or identity maps. Their composite becomes $gf$. [F1]

1.2 Apply TR4 in $K(\mathcal A)$ to $f,g$, using cone triangles with structure maps $i_f,p_f$ and similarly for $g,gf$. It gives $a:C_f\to C_{gf}$ and $b:C_{gf}\to C_g$ such that $a i_f=i_{gf}g$ on $Y'$, $p_{gf}a=p_f$, $b i_{gf}=i_g$, and $p_gb=f[1]p_{gf}$. In particular $C_f\xrightarrow a C_{gf}\xrightarrow b C_g\xrightarrow {i_f[1]p_g}C_f[1]$ is distinguished. These equations, rather than the cone objects alone, are the octahedral data. [F2]

2.1 Apply the additive functor $Q$ to the entire octahedron: every face equation survives, including $Q(i_f[1]p_g)=Q(i_f)[1]Q(p_g)$, and its fourth triangle is distinguished by definition. Transport along the object isomorphisms from the clearing step. [F3, step 1.1, step 1.2, algebra]

3.1 If the three triangles specified in TR4 are other completions, TR3 compares each with the constructed completion with identity first two components. Such a comparison has invertible third component: applying either representable Hom and the exact sequences established from TR1–TR3 proves this by the five-term argument, then the Hom criterion for invertibility. Transport the octahedral maps along these triangle isomorphisms. This gives TR4 for the originally prescribed completions with all signs unchanged. [F3, step 2.1, algebra] ∎
