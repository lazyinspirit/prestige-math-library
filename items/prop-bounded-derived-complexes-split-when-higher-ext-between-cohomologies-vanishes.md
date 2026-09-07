---
id: "prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes"
kind: "proposition"
title: "Splitting a bounded complex by vanishing higher Ext"
deps: ["thm-ext-is-hom-in-the-derived-category", "thm-canonical-truncations-fit-a-distinguished-triangle", "prop-yoneda-product-is-composition-in-the-derived-category", "thm-long-exact-hom-sequences-of-a-distinguished-triangle", "prop-zero-and-split-triangles-are-distinguished", "prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/06XP"
      title: "Lemmas 13.27.8–13.27.10"
    - url: "https://stacks.math.columbia.edu/tag/05QT"
      title: "Lemma 13.4.11"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume the standing supplied projective or injective resolution hypotheses and let $X$ have cohomology in a finite interval. If $\operatorname{Ext}^p(H^iX,H^jX)=0$ for every $p\geq2$ and $i>j$, then $X\cong\bigoplus_iH^i(X)[-i]$, a finite sum. The isomorphism is not asserted canonical. If $\operatorname{Ext}^2(M,N)=0$ for every pair, all cohomologically bounded complexes split this way; for this corollary impose also DC and set-sized extension classes as in the Yoneda comparison.

## Facts & Assumptions

**Given:** Assume the standing supplied projective or injective resolution hypotheses and let $X$ have cohomology in a finite interval. If $\operatorname{Ext}^p(H^iX,H^jX)=0$ for every $p\geq2$ and $i>j$, then $X\cong\bigoplus_iH^i(X)[-i]$, a finite sum. The isomorphism is not asserted canonical. If $\operatorname{Ext}^2(M,N)=0$ for every pair, all cohomologically bounded complexes split this way; for this corollary impose also DC and set-sized extension classes as in the Yoneda comparison.

[F1] Under supplied one-sided resolutions, classical Ext is the corresponding shifted derived Hom ([[thm-ext-is-hom-in-the-derived-category]]).

[F2] Canonical truncations give distinguished triangles and isolate single cohomology layers ([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

[F3] Under its DC, size, and one-sided resolution hypotheses, Yoneda extensions represent all positive derived Ext classes and splicing is shifted composition ([[prop-yoneda-product-is-composition-in-the-derived-category]]).

[F4] Representable Hom applied to a distinguished triangle is exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

[F5] The canonical biproduct triangle is distinguished ([[prop-zero-and-split-triangles-are-distinguished]]).

[F6] Two isomorphism components of a triangle morphism force the third to be an isomorphism ([[prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third]]).

## Proof

1.1 First let $A\xrightarrow uB\xrightarrow vC\xrightarrow wA[1]$ be distinguished with $w=0$. Hom exactness supplies $s:C\to B$ with $vs=1_C$. The split triangle maps to this triangle by $(1_A,(u,s),1_C)$: the middle square uses $vu=0,vs=1$, and the last square uses $w=0$. Two isomorphism components force $(u,s)$ to be an isomorphism. Conversely such a split-triangle isomorphism forces $w=0$. This includes zero vertices. [F4, F5, F6, algebra]

1.2 Choose $a\leq b$ bounding the cohomology. For empty cohomological support the object is zero, and for a single degree the canonical truncation maps identify $X$ with $H^a(X)[-a]$. If $a<b$, use the triangle $\tau^{\leq b-1}X\to X\to H^b(X)[-b]\to(\tau^{\leq b-1}X)[1]$. Induction on $b-a$ identifies its head with $\bigoplus_{a\leq i<b}H^i(X)[-i]$. [F2, algebra]

2.1 The connecting map lies in the finite direct sum of groups $\operatorname{Hom}_D(H^bX[-b],H^iX[-i+1])=\operatorname{Ext}^{b-i+1}(H^bX,H^iX)$. Since $i<b$, every exponent is at least two, so each group vanishes by hypothesis. The splitting criterion in step 1.1 completes the induction. Its section $s$ was chosen and need not be unique. [F1, step 1.1, step 1.2, algebra]

3.1 Under the additional Yoneda hypotheses, any positive-degree Ext class is a Yoneda extension class. For $p>2$, break its exact extension at the image after the last two arrows toward its quotient endpoint. It becomes a splice of a two-extension and a $(p-2)$-extension. If all two-extension groups vanish, composition compatibility makes the splice zero. Thus all Ext groups of degree at least two vanish for all pairs, and step 2.1 applies. [F3, step 2.1, algebra] ∎
