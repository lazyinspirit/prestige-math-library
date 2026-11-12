---
id: lem-author-7ef3227685d9-supported-k0-heart
kind: lemma
title: Inherited bounded t structure on supported perfect complexes
status: published
domain: mathematics
deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-regular-local-ring-geometric-point
  - math:def-closed-immersion-schemes
  - math:def-coherent-module-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-grothendieck-universe-closure-convention
  - math:def-canonical-t-structure-on-a-derived-category
  - math:def-truncation-functors-and-cohomology-of-a-t-structure
  - math:def-abelian-category
  - math:def-exact-sequence-sheaves
  - math:def-kernel-cokernel-image-sheaves
  - math:thm-exactness-of-sheaves-stalkwise
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology
dependency_roles:
  thm-author-7ef3227685d9-supported-k0-regular-cohomology-input: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-canonical-t-structure-on-a-derived-category: mathematical-premise
  math:def-truncation-functors-and-cohomology-of-a-t-structure: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-exact-sequence-sheaves: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied enhanced constructions. For a Noetherian finite-dimensional scheme $U$ that is regular at every point and any closed subscheme $i:T\hookrightarrow U$, put $\mathcal C_T=\mathrm{Perf}_{|T|}(U)$ in the supplied enhancement and let $\mathcal A_T$ be coherent $\mathcal O_U$-modules with support contained in the underlying closed set $|T|$. Ambient cohomological truncations restrict to a bounded t-structure on $\mathcal C_T$, with heart $\mathcal A_T$ embedded as sheaves in degree zero. In particular $\mathcal A_T$ is abelian, and its short exact sequences give actual cofiber sequences in $\mathcal C_T$.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed universes discharge the enhanced regular-perfect and derived-category premises in [F1] and [F6] and the specified perfect/nonconnective interfaces in [F2]. The universes satisfy [[math:def-grothendieck-universe-closure-convention]], contain $\omega$ and the scheme data, and are enlarged for categories as required by [F6]. Their existence is a standing size assumption, not a consequence of Choice. These assumptions are retained in steps 1.1–2.1; the finite cohomology and stalk-support calculations introduce no additional choice.

**Given:** The Axiom of Choice and $U,T,i,\mathcal C_T,\mathcal A_T$ as stated, with the fixed suitable universes.

**Goal:** Work directly with the supported perfect category and its cohomology, without an enhancement comparison to complexes in a coherent abelian category.

[F1] [[thm-author-7ef3227685d9-supported-k0-regular-cohomology-input]] supplies local regular perfection, bounded coherent cohomology and the actual ambient derived t-structure with ordinary module sheaves as heart. On this locally Noetherian scheme it also supplies the abelian full category of coherent sheaves with kernels, images and cokernels computed as module sheaves.

[F2] [[def-scheme-perfect-complexes]] gives the stalkwise support criterion and the full stable idempotent-complete supported subcategory, with ambient finite colimits. [[def-nonconnective-k-spectrum-interface]] fixes the essentially small common-family realization used here and the chosen K functor; no K-theory comparison is used in this lemma.

[F3] The geometric hypotheses and the coherent modules use [[math:def-locally-noetherian-and-noetherian-scheme]], [[math:def-regular-local-ring-geometric-point]], [[math:def-closed-immersion-schemes]] and [[math:def-coherent-module-scheme]]. Regularity means regularity of every local ring, without a base-field smoothness hypothesis. Finite dimension is the chain dimension of [[math:def-dimension-noetherian-topological-space]], with its empty-space convention.

[F4] [[math:def-canonical-t-structure-on-a-derived-category]] specifies the cohomological t-structure axioms and heart. [[math:def-truncation-functors-and-cohomology-of-a-t-structure]] defines boundedness: each object lies in $\mathcal C_T^{\le n}\cap\mathcal C_T^{\ge -n}$ for some integer $n$. [[math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]] supplies the retained/zero cohomology identities for the ordinary derived truncations; [F1] supplies their enhanced lifts and actual truncation cofiber sequences.

[F5] [[math:def-abelian-category]] specifies the abelian-category condition. Kernels, images and cokernels are the module-sheaf operations of [[math:def-kernel-cokernel-image-sheaves]], and short exact sequences have the meaning of [[math:def-exact-sequence-sheaves]]. [[math:thm-exactness-of-sheaves-stalkwise]] identifies exactness with stalkwise exactness; apply it to the underlying abelian sheaves of the module sheaves. Thus these operations preserve vanishing of all stalks outside $|T|$.

[F6] [[thm-author-4f716d60801a-derived-enhancement-input]] specifies the actual infinity-localization of module cochain complexes, the formula $H^n=\ker d^n/\operatorname{im}d^{n-1}$, and its cochain cone cofibers: $\operatorname{Cone}(f)^n=E^n\oplus C^{n+1}$ with differential $(e,c)\mapsto(d_Ee+fc,-d_Cc)$. Quasi-isomorphisms become equivalences in this localization.

## Proof
1.1 By [F1], kernels, images and cokernels of maps of coherent sheaves are coherent. By [F5], their stalks vanish off $|T|$ when the source and target do. Zero sheaves and finite direct sums also have this support, so the full subcategory $\mathcal A_T$ is additive and inherits kernels and cokernels from the abelian coherent category. Its coimage-to-image comparison is the same isomorphism as there, proving that it is abelian. Every $M\in\mathcal A_T$ placed in degree zero has bounded coherent cohomology, hence is perfect by [F1] and lies in $\mathcal C_T$ by [F2]. For a short exact sequence $0\to M'\xrightarrow{f}M\xrightarrow{q}M''\to0$ in this abelian category, its ambient module-sheaf sequence is exact because kernels and cokernels are inherited. The cone of $f[0]$ in [F6] is the two-term cochain complex $M'\xrightarrow{f}M$ in degrees $-1,0$. The map to $M''[0]$ given by $q$ in degree zero has $H^{-1}=\ker f=0$, $H^0=\operatorname{coker}f=M''$, and zero cohomology in all other degrees, so it is a quasi-isomorphism. This cone represents the actual ambient cofiber by [F6], and its equivalent object $M''[0]$ is in $\mathcal C_T$; ambient cofibers are inherited by [F2]. Thus the short exact sequence gives an actual cofiber sequence in $\mathcal C_T$. [A1, F1, F2, F3, F5, F6]

2.1 For $E\in\mathcal C_T$, [F1] gives bounded coherent cohomology. By [F4], each ambient truncation retains the original cohomology sheaves in its retained degrees and has zero cohomology in the deleted degrees. It therefore remains bounded coherent, perfect by [F1], and supported on $|T|$ by [F2]. Intersect the two ambient t-structure subcategories with $\mathcal C_T$: shift closure and orthogonality restrict because this is a full stable subcategory, and the ambient truncation cofiber sequences lie in it by the preceding calculation. These are precisely the t-structure axioms in [F4]. If $H^i(E)=0$ outside $[a,b]$, the canonical vanishing conditions give $E\in\mathcal C_T^{\le b}\cap\mathcal C_T^{\ge a}$; taking $n\ge\max\{b,-a,0\}$ proves boundedness in the sense of [F4]. By the ambient heart identification in [F1], an object of the restricted heart is equivalent to an ordinary module sheaf in degree zero. Its coherent supported cohomology makes that sheaf an object of $\mathcal A_T$, and conversely every $M[0]$ with $M\in\mathcal A_T$ belongs to this heart by step 1.1. This proves the stated heart and, with step 1.1, the cofiber assertion. No global locally free presentation was used. [A1, F1, F2, F4, step 1.1] ∎
