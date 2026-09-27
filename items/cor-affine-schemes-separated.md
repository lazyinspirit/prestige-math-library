---
id: cor-affine-schemes-separated
kind: corollary
title: Affine schemes and affine morphisms are separated
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-affine-morphism-separated, def-affine-morphism-schemes, def-separated-scheme-over-base, lem-fibre-product-open-restriction, thm-affine-fibre-product-tensor-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.15, printed p.42"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Every morphism of affine schemes $\operatorname{Spec}B\to\operatorname{Spec}A$
is separated. Every affine scheme is separated over $\operatorname{Spec}\mathbb Z$,
that is, absolutely separated. More generally every affine morphism to an
arbitrary scheme is separated. Affineness is not inferred back from
separatedness.

## Facts & Assumptions

**Given:** A ring map $A\to B$, the induced morphism $u:\operatorname{Spec}B\to\operatorname{Spec}A$, and an affine open subscheme $U=\operatorname{Spec}R\subseteq\operatorname{Spec}A$.

[F1] Every affine morphism of schemes is separated. ([[lem-affine-morphism-separated]])

[F2] A morphism $f:X\to S$ is **affine** when $f^{-1}(W)$ is affine for every affine open subscheme $W\subseteq S$; the empty scheme is affine, being $\operatorname{Spec}0$. ([[def-affine-morphism-schemes]])

[F3] An $S$-scheme $X$ is **separated over $S$** when its structure morphism $X\to S$ is separated, and **absolutely separated** when it is separated over $\operatorname{Spec}\mathbb Z$. ([[def-separated-scheme-over-base]])

[F4] For $f:X\to S$ and an open $W\subseteq S$, the open subscheme $f^{-1}(W)$ represents the fibre product $X\times_S W$. ([[lem-fibre-product-open-restriction]])

[F5] For ring maps $A\to B$, $A\to C$, allowing the zero ring, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$. ([[thm-affine-fibre-product-tensor-ring]])

## Proof

1.1 Let $U=\operatorname{Spec}R$ be an affine open subscheme of $\operatorname{Spec}A$. By [F4] the inverse image $u^{-1}(U)$ represents $\operatorname{Spec}B\times_{\operatorname{Spec}A}U$, and by [F5] this fibre product is $\operatorname{Spec}(B\otimes_A R)$, an affine scheme; the zero-ring cases $B=0$ and $R=0$ are included. Hence $u$ is affine by [F2]. [F2, F4, F5, given]

1.2 For any scheme $S$ and any affine morphism $g:X\to S$, the morphism $g$ is separated by [F1], whatever $S$ and $X$ are; in particular no separatedness of $X$ over another base is deduced. [F1, given]

2.1 Applying step 1.1 to the unique ring map $\mathbb Z\to B$ shows that the structure morphism $\operatorname{Spec}B\to\operatorname{Spec}\mathbb Z$ is affine, hence separated by [F1]; by [F3] the scheme $\operatorname{Spec}B$ is absolutely separated. The zero ring $B=0$ is allowed: $\operatorname{Spec}0=\varnothing$ is affine by [F2] and its structure morphism is again affine. [F1, F2, F3, step 1.1]

2.2 Taking $X=\operatorname{Spec}B$ and $S=\operatorname{Spec}A$ in step 1.2 gives the separatedness of $u$; taking an arbitrary scheme as $S$ and an arbitrary affine morphism as $g$ gives the third assertion. [step 1.2]

3.1 Steps 2.1 and 2.2 prove that every morphism of affine schemes, every structure morphism $\operatorname{Spec}B\to\operatorname{Spec}\mathbb Z$, and every affine morphism to an arbitrary scheme is separated. Separatedness is a property of the structure morphism and of a chosen base, so nothing here identifies separatedness with affineness. [step 2.1, step 2.2] ∎
