---
id: thm-affine-morphism-higher-direct-images-qc-vanish
kind: theorem
title: "Higher direct images of quasi-coherent modules vanish along affine morphisms"
status: published
origin: pipeline
deps:
  - def-affine-morphism-schemes
  - def-quasi-coherent-module-scheme
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - lem-higher-direct-image-local-section-formula
  - def-higher-direct-image-sheaf
  - thm-sheafification-preserves-stalks
  - def-stalk-of-presheaf
  - thm-sheaf-morphism-isomorphism-stalkwise
  - def-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, inherited from sheaf cohomology and from the
derived direct-image construction. Let $f:X\to S$ be an affine morphism of
schemes ([[def-affine-morphism-schemes]]) and let $\mathcal F$ be a
quasi-coherent $\mathcal O_X$-module
([[def-quasi-coherent-module-scheme]]). Then, with $R^qf_*\mathcal F$ the
higher direct images ([[def-higher-direct-image-sheaf]]),
$$R^qf_*\mathcal F=0$$
for every $q>0$. The empty source and target, the zero module, the identity
morphism and the case where $S$ is affine are included; $q=0$ is not asserted
to vanish, since $R^0f_*\mathcal F=f_*\mathcal F$ need not be zero.

## Facts & Assumptions

**Given:** An affine morphism $f:X\to S$ of schemes and a quasi-coherent
$\mathcal O_X$-module $\mathcal F$.

[F1] $f$ is affine when $f^{-1}(U)$ is an affine scheme with the restricted
structure sheaf for every affine open subscheme $U\subseteq S$; this includes
the empty preimages. ([[def-affine-morphism-schemes]])

[F2] If $X=\operatorname{Spec}A$ is affine and $\mathcal G$ is a quasi-coherent
$\mathcal O_X$-module, then $H^q(X,\mathcal G)=0$ for every $q>0$, including the
empty affine scheme and the zero module.
([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F3] The restriction of a quasi-coherent module to an open subscheme is
quasi-coherent. ([[def-quasi-coherent-module-scheme]])

[F4] Local-section formula: for every $q\ge0$ the sheaf $R^qf_*\mathcal F$ is
the sheafification of the presheaf $V\mapsto H^q(f^{-1}V,\mathcal F)$ on the
open subsets $V\subseteq S$. ([[lem-higher-direct-image-local-section-formula]],
[[def-higher-direct-image-sheaf]])

[F5] Sheafification preserves stalks: for a presheaf $\mathcal P$ on $S$ and
$s\in S$ the map $\mathcal P_s\to(a\mathcal P)_s$ is a bijection.
([[thm-sheafification-preserves-stalks]])

[F6] The stalk of a presheaf at $s$ is the filtered colimit of its values over
the open neighbourhoods of $s$; comparing along a cofinal subsystem gives the
same colimit. Every point of a scheme has an affine open neighbourhood, and the
affine open subschemes of $S$ form a basis of its topology.
([[def-stalk-of-presheaf]], [[def-scheme]])

[F7] A morphism of sheaves on a space is an isomorphism if and only if it is an
isomorphism on every stalk; in particular a sheaf whose stalks are all zero is
the zero sheaf. ([[thm-sheaf-morphism-isomorphism-stalkwise]])

## Proof

**Proof technique:** direct: on the affine opens of the base the source is affine and the restricted sheaf is quasi-coherent, so the local-section presheaf of every positive higher direct image vanishes on a basis; its sheafification has zero stalks.

1.1 Let $V\subseteq S$ be affine. By [F1] the preimage $f^{-1}V$ is an affine scheme, and $\mathcal F|_{f^{-1}V}$ is quasi-coherent by [F3]. Applying [F2] to the affine scheme $f^{-1}V$ and this restriction gives $H^q(f^{-1}V,\mathcal F)=0$ for every $q>0$. [F1, F2, F3]

1.2 Fix $q>0$ and let $\mathcal P_q$ be the presheaf $V\mapsto H^q(f^{-1}V,\mathcal F)$ on the open subsets of $S$. By [F4] the sheaf $R^qf_*\mathcal F$ is $\mathcal P_q$'s sheafification, so by [F5] its stalk at a point $s\in S$ is the stalk of $\mathcal P_q$ at $s$. [F4, F5]

2.1 Compute that stalk as a colimit. By [F6] the stalk of $\mathcal P_q$ at $s$ is the filtered colimit of the groups $\mathcal P_q(V)=H^q(f^{-1}V,\mathcal F)$ over the open neighbourhoods $V\ni s$, and by the same fact the affine open neighbourhoods of $s$ — which form a basis — are cofinal in this system, so the colimit may be computed over them alone. Every value occurring there vanishes by step 1.1, and a filtered colimit of zero groups with zero transition maps is zero, so $(R^qf_*\mathcal F)_s=0$ for every $s\in S$. [F5, F6, step 1.1, step 1.2]

3.1 The sheaf $R^qf_*\mathcal F$ has zero stalk at every point of $S$ by step 2.1, so by [F7] it is the zero sheaf; this holds for every $q>0$, which is the assertion. Boundary cases: if $S=\varnothing$ there is nothing to check and the claim is vacuous; if $X=\varnothing$ or $\mathcal F=0$, step 1.1 applies at every affine $V$ with value $0$; if $f$ is the identity or $S$ is affine, step 1.1 is the same computation. The Axiom of Choice is inherited from [F2] and [F4], and no further selection is made beyond the choice of the pointwise affine neighbourhoods implicit in [F6]. [F2, F4, F6, F7, step 2.1] ∎
