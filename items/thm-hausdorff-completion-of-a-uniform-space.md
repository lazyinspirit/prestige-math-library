---
id: thm-hausdorff-completion-of-a-uniform-space
kind: theorem
title: "Every uniform space has a complete Hausdorff reflection with dense canonical image, and the canonical map is a uniform embedding exactly when the original uniformity is separated"
status: published
origin: session
deps: [def-completion-of-a-uniform-space, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-space-is-complete, lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space, def-uniform-embedding-and-uniform-isomorphism, thm-separated-uniformity-iff-induced-topology-is-hausdorff, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "I. James, Completeness and Completion", url: "https://www.cambridge.org/core/books/abs/introduction-to-uniform-spaces/completeness-and-completion/8978C977C907740F625119680B7DC42E"}]
pipeline_run: null
---

## Statement

Every uniform space $X$ has a Hausdorff completion $\eta:X\to\widehat X$. The map has dense image, and it is a uniform embedding if and only if the original uniformity is separated.

## Facts & Assumptions

**Given:** A uniform space $X$.

[L1] Minimal Cauchy filters carry a separated uniformity ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]) and form a complete space ([[lem-minimal-cauchy-filter-space-is-complete]]).

[L2] Point filters define a uniformly continuous dense map $\eta:X\to\widehat X$ ([[lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space]]).

[L3] A Hausdorff completion and a uniform embedding have the stated definitions ([[def-completion-of-a-uniform-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

[L4] Separatedness is equivalent to Hausdorffness of the induced topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L5] Symmetric entourages form a base and may be chosen inside any prescribed entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Take $\widehat X$ to be the uniform space of minimal Cauchy filters and take $\eta$ from [L2]. [L1, L2, construct]

2.1 It is complete and separated by [L1], and $\eta$ is uniformly continuous with dense image by [L2]. It remains to verify that the pullback uniformity is not strictly coarser than the original one. Given an entourage $E$ of $X$, choose a symmetric $D\subseteq E$. If $(\eta(x),\eta(y))\in\widehat D$, witnesses $A\in\eta(x)$ and $B\in\eta(y)$ satisfy $A\times B\subseteq D$. Every member of the minimal point filter $\eta(x)$ contains $x$, and every member of $\eta(y)$ contains $y$; therefore $(x,y)\in D\subseteq E$. Thus $(\eta\times\eta)^{-1}[\widehat D]\subseteq E$. Together with uniform continuity, this is exactly the pullback condition in [L3], so $\eta$ is a Hausdorff completion. [step 1.1, L1, L2, L3, L5]

3.1 If $\eta(x)=\eta(y)$, step 2.1 puts $(x,y)$ in every entourage of $X$. Conversely, if $(x,y)$ belongs to every entourage of $X$, uniform continuity puts $(\eta(x),\eta(y))$ in every entourage of $\widehat X$; separatedness of $\widehat X$ gives $\eta(x)=\eta(y)$. [step 2.1, L1, L2]

4.1 Step 3.1 says that $\eta$ is injective exactly when $\mathcal U$ is separated. When injective, the two directions of the pullback condition in step 2.1 say precisely that the corestriction $X\to\eta[X]$ and its inverse are uniformly continuous, so $\eta$ is a uniform embedding. Conversely every uniform embedding is injective. [step 2.1, step 3.1, L3, L4]

5.1 This proves the completion assertion and the exact embedding criterion. [step 2.1, step 4.1, discharge-construct] ∎
