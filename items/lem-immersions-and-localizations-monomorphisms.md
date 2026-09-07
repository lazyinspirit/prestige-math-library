---
id: "lem-immersions-and-localizations-monomorphisms"
kind: "lemma"
title: "Immersions and affine localizations are monomorphisms"
status: "draft"
origin: "pipeline"
deps: ["lem-open-immersion-monomorphism", "thm-morphisms-into-affine-scheme-global-sections", "thm-affine-closed-immersions-quotient-rings", "lem-morphism-schemes-local-on-source-target"]
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
    - title: "Vakil 10.2.G"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Open immersions, closed immersions, and localization morphisms $\operatorname{Spec}(M^{-1}A)\to\operatorname{Spec}A$ are monomorphisms of schemes. Any composite of these, in particular a locally closed immersion, is a monomorphism. Here monomorphism means that for every scheme $T$ the induced map on sets of morphisms from $T$ is injective.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] An open immersion is a monomorphism of schemes, and a composite of open immersions is an open immersion. ([[lem-open-immersion-monomorphism]])

[F2] For a scheme $X$ and a ring $A$, taking global sections induces a natural bijection $$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X)).$$ ([[thm-morphisms-into-affine-scheme-global-sections]])

[F3] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F4] Compatible morphisms of schemes on an open cover of a scheme $X$ glue uniquely to a morphism from $X$; two morphisms out of $X$ are equal if their restrictions to an open cover are equal. Both assertions may be checked after affine-open refinement of source and target. ([[lem-morphism-schemes-local-on-source-target]])

## Proof

1.1 Open immersions are monomorphisms by F1. For an affine localization, F2 identifies maps from arbitrary $T$ into its source with ring maps $M^{-1}A\to\Gamma(T,\mathcal O_T)$. Such a map, when it exists, is uniquely determined by its restriction to $A$, because every fraction must map to the image of its numerator times the inverse image of its denominator. This includes localization at zero. [given, F1, F2]

1.2 For an affine closed immersion, F3 gives $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$. By F2 a map out of $A/I$ is uniquely determined by its composite with the surjection $A\to A/I$. For a general closed immersion and two lifts of the same $T\to X$, cover $T$ by inverse images of affine opens of $X$. The affine uniqueness just proved makes the lifts equal on that cover, hence globally by F4. This includes $I=0,(1)$ and arbitrary nilpotent ideals. [F2, F3, F4]

2.1 If $j$ and $i$ are monomorphisms and $ji\alpha=ji\beta$, cancel $j$ and then $i$ to obtain $\alpha=\beta$. This proves the composite assertion; a locally closed immersion has the indicated open/closed factorization. Empty test schemes and identity maps meet the same uniqueness condition. [step 1.1, step 1.2, algebra] ∎
