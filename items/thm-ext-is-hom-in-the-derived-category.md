---
id: "thm-ext-is-hom-in-the-derived-category"
kind: "theorem"
title: "Ext is hom in the derived category"
deps: ["prop-morphisms-from-a-homotopically-projective-complex-need-no-roof", "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof", "thm-a-bounded-above-complex-of-projectives-is-homotopically-projective", "thm-a-bounded-below-complex-of-injectives-is-homotopically-injective", "thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex", "def-ext-via-a-projective-resolution-of-the-first-variable", "def-ext-via-an-injective-resolution-of-the-second-variable"]
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.4.7 and 10.7.5, pp. 388, 400"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Dependent Choice. Let $M,N$ be objects of an abelian category and $n\geq0$. With enough projectives and supplied projective resolutions, or with enough injectives and supplied injective resolutions, there is a natural isomorphism $\operatorname{Ext}^n(M,N)\cong\operatorname{Hom}_{D(\mathcal A)}(M[0],N[n])$. The Ext group is the classical construction relative to the supplied data. Either resolution hypothesis suffices; when both apply the two comparisons agree through the mixed Hom complex.

## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, objects $M,N$ of an abelian category, an integer $n\geq0$, and one of the two stated supplied one-sided resolution systems.

[F1] Hom out of a K-projective is computed in the homotopy category ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[F2] Hom into a K-injective is computed in the homotopy category ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

[F3] Bounded-above complexes of projectives are K-projective under DC ([[thm-a-bounded-above-complex-of-projectives-is-homotopically-projective]]).

[F4] Bounded-below complexes of injectives are K-injective under DC ([[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]).

[F5] Hom in the homotopy category is degree-zero homology of the Hom complex ([[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]]).

[F6] Classical projective Ext is cohomology of the resolution Hom complex with differential given by precomposition ([[def-ext-via-a-projective-resolution-of-the-first-variable]]).

[F7] Classical injective Ext is cohomology of the resolution Hom complex with differential given by postcomposition ([[def-ext-via-an-injective-resolution-of-the-second-variable]]).

## Proof

1.1 In the projective case take $P\to M[0]$ with $P^i=0$ for $i>0$. By [F3], $P$ is K-projective. Replacing the source and removing roofs gives $\operatorname{Hom}_D(M,N[n])=\operatorname{Hom}_K(P,N[n])$. Reindexing the degree-zero Hom theorem gives the latter as $H^n\underline{\operatorname{Hom}}(P,N)$. This applies also to $M=0$ or $N=0$. [F1, F3, F5]

1.2 In the injective case take $N[0]\to I$ with $I^i=0$ below zero. By [F4], $I$ and each shift $I[n]$ are K-injective. Replacing the target and removing roofs gives $\operatorname{Hom}_D(M,N[n])=\operatorname{Hom}_K(M,I[n])=H^n\underline{\operatorname{Hom}}(M,I)$. Here the differential is exactly the classical injective Ext differential, so no correction is needed. [F2, F4, F5, F7]

2.1 The classical projective Ext differential is precomposition with the resolution differential, whereas the cochain Hom differential on degree $q$ maps into $N[0]$ is $(-1)^{q+1}$ times precomposition. Multiplication in degree $q$ by $(-1)^{q(q+1)/2}$ is a complex isomorphism from the classical complex to this Hom complex. It identifies their cohomology in all $n\geq0$, with sign $+1$ in degree zero. [F6, step 1.1, algebra]

3.1 For a morphism of objects, the corresponding comparison between their supplied resolutions is the unique homotopy class representing that morphism after localization: existence and uniqueness follow from [F1] on the projective side and [F2] on the injective side. Consequently the Hom identifications are natural in both objects. When both resolutions exist, put $T=\underline{\operatorname{Hom}}(P,I)$. The maps $\underline{\operatorname{Hom}}(P,N)\to T\leftarrow\underline{\operatorname{Hom}}(M,I)$ induce cohomology isomorphisms: by [F5], each degree-$n$ map is the map on homotopy Hom, which [F1] or [F2] identifies with composition by the corresponding invertible resolution map in $D$. Composing this span with the classical-projective sign isomorphism of step 2.1 defines the mixed-complex identification of the two classical Ext constructions. Their maps to derived Hom agree under this identification, since the two localized composites agree. In degree zero every sign is $+1$ and ordinary morphisms, including identities, are preserved. [F1, F2, F5, step 2.1, step 1.2, algebra] ∎
