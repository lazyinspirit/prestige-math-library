---
id: ex-subobjects-in-set-are-subsets
kind: example
title: "Subobjects in Set are subsets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subobject-and-quotient-object, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, example 4.7.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a set $X$, its subobjects in $\mathbf{Set}$ correspond bijectively to its
subsets. The subset $S\subseteq X$ corresponds to the class of the inclusion
$S\hookrightarrow X$; this includes $S=\varnothing$.

## Facts & Assumptions

**Given:** A set $X$.

[L1] A subobject of $X$ is a mutual-factorisation equivalence class of monomorphisms into $X$ ([[def-subobject-and-quotient-object]]).

[L2] Mutually factoring monomorphisms have unique inverse factor maps ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

## Verification

**Proof technique:** direct.

1.1 A monomorphism $m:A\to X$ in $\mathbf{Set}$ is injective: if $m(a)=m(a')$, the two maps $g,h:\{*\}\to A$ with $g(*)=a$ and $h(*)=a'$ satisfy $m\circ g=m\circ h$, so $g=h$ and $a=a'$. Conversely an injection is monic by the same cancellation. For such an $m$, the corestriction $\bar m:A\to m[A]$ is a bijection and satisfies $m=\iota_{m[A]}\circ\bar m$, while $\iota_{m[A]}=m\circ\bar m^{-1}$. Thus $m$ mutually factors with the inclusion of its image and represents that subset by [L1] and [L2]. [L1, L2]

2.1 If the inclusions of subsets $S,T\subseteq X$ mutually factor, their image sets in $X$ coincide, hence $S=T$. Conversely equal subsets give the same inclusion. Therefore taking the image and taking the inclusion are inverse assignments between subobjects and subsets. [step 1.1, L1]

3.1 The argument also applies to the unique injection $\varnothing\hookrightarrow X$, so the empty subset supplies the least subobject rather than an exceptional case. [step 2.1] ∎
