---
id: thm-quasi-coherent-ideal-closed-subscheme-correspondence
kind: theorem
title: "Quasi-coherent ideals and closed subschemes"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quasi-coherent-ideal-sheaf, def-closed-immersion-schemes, thm-affine-closed-immersions-quotient-rings]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 2.3"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
---
## Statement

For a scheme $X$, the assignments
$\mathcal I\mapsto V(\mathcal I)$ and
$i:Z\hookrightarrow X\mapsto\ker(\mathcal O_X\to i_*\mathcal O_Z)$
give mutually inverse correspondences between quasi-coherent ideal sheaves on
$X$ and closed subschemes of $X$.

## Facts & Assumptions

**Given:** A scheme $X$.

[F1] For a ring $A$, closed immersions into $\operatorname{Spec}A$ are
precisely quotient-spectrum morphisms $\operatorname{Spec}(A/I)\to
\operatorname{Spec}A$ for ideals $I\subseteq A$, up to unique isomorphism
over $\operatorname{Spec}A$ [[thm-affine-closed-immersions-quotient-rings]].

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal I\subseteq\mathcal O_X$ be quasi-coherent and let $U=\operatorname{Spec}A$ be an affine open. By its defining local form, $\mathcal I|_U$ is associated to an ideal $I_U\subseteq A$, and [F1] gives the closed immersion $\operatorname{Spec}(A/I_U)\to U$. [given, F1]

1.2 Conversely, let $i:Z\hookrightarrow X$ be a closed immersion. Restricting to $U=\operatorname{Spec}A$, [F1] identifies $Z\cap U\to U$ with $\operatorname{Spec}(A/I_U)\to\operatorname{Spec}A$, and identifies the kernel of $\mathcal O_U\to i_*\mathcal O_{Z\cap U}$ with the ideal sheaf associated to $I_U$. Thus the global kernel is quasi-coherent. [given, F1]

2.1 On an overlap of two affine opens, both local quotient immersions have kernel the restricted ideal sheaf $\mathcal I$; hence their quotient rings and their closed immersions agree after restriction. They therefore glue to a closed subscheme, denoted $V(\mathcal I)$, of $X$. [step 1.1]

3.1 On every affine open the two constructions are the inverse quotient-ring constructions of [F1]. Since both the ideal sheaves and closed immersions agree on the affine open cover, the constructions are mutually inverse on $X$. [step 1.1, step 2.1, step 1.2] ∎
