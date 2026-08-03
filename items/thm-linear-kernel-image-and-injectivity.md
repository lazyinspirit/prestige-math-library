---
id: thm-linear-kernel-image-and-injectivity
kind: theorem
title: "The kernel and image are linear subspaces, and a linear map is injective if and only if its kernel is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-a-linear-map, def-linear-map, lem-linear-subspace-criterion, lem-linear-map-elementary-properties, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

For a linear map $T:V\to W$, the sets $\ker T$ and $\operatorname{im}T$ are
linear subspaces. Moreover, $T$ is injective if and only if $\ker T=\{0_V\}$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ of vector spaces over a field $F$.

[L1] The kernel and image have the displayed set descriptions
([[def-kernel-and-image-of-a-linear-map]]).

[L2] A nonempty subset is a linear subspace exactly when it is closed under
$\lambda u+v$ ([[lem-linear-subspace-criterion]]).

[L3] A linear map carries $au+v$ to $aT(u)+T(v)$, preserves zero, and
preserves subtraction ([[def-linear-map]], [[lem-linear-map-elementary-properties]]).

[L4] A function is injective when equal outputs have equal inputs
([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The kernel contains $0_V$ by [L3]. If $u,v\in\ker T$ and $a\in F$, then $T(au+v)=aT(u)+T(v)=0_W$, so $au+v\in\ker T$. [L1, L2, L3, given]

1.2 The image contains $0_W=T(0_V)$. If $T(u),T(v)\in\operatorname{im}T$ and $a\in F$, then $aT(u)+T(v)=T(au+v)$ lies in the image. [L1, L2, L3, given]

1.3 If $T$ is injective and $v\in\ker T$, then $T(v)=0_W=T(0_V)$, so $v=0_V$ and the kernel is trivial. [L1, L3, L4, given]

1.4 Conversely, suppose $\ker T=\{0_V\}$ and $T(u)=T(v)$. Then $T(u-v)=0_W$ by [L3], so $u-v=0_V$ and $u=v$. [L1, L3, L4, given]

2.1 The subspace criterion proves that both $\ker T$ and $\operatorname{im}T$ are linear subspaces. [step 1.1, step 1.2, L2]

3.1 Thus $T$ is injective exactly when its kernel is trivial. [step 1.3, step 1.4] ∎
