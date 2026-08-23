---
id: ex-a-split-coequalizer-in-set
kind: example
title: "A split coequalizer on a two-element set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The finite functions must satisfy all four splitting equations and the coequalizer universal property."
  counterexample_search: "Evaluated every displayed function on both elements and checked all coequalizing maps are constant."
deps: [def-split-coequalizer, thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $X=Y=\{0,1\}$ and $Z=\{*\}$. Define $g=t=1_Y$, let $f:X\to Y$ be constant at $0$, let $h:Y\to Z$ be the unique map, and put $s(*)=0$. Then

$$X\mathrel{\substack{\xrightarrow{f}\\[-3pt]\xrightarrow[g]{}}}Y\xrightarrow{h}Z$$

with $t$ and $s$ is a split coequalizer in $\mathbf{Set}$.

## Facts & Assumptions

**Given:** The displayed finite sets and functions.

[L1] A split coequalizer satisfies $hf=hg$, $hs=1_Z$, $gt=1_Y$, and $ft=sh$ ([[def-split-coequalizer]]).

[L2] Every split coequalizer is a coequalizer and an absolute colimit ([[thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute]]).

## Verification

**Proof technique:** direct.

1.1 The maps are $f(0)=f(1)=0$, $g(0)=0$, $g(1)=1$, $t=g$, $h(0)=h(1)=*$, and $s(*)=0$. [construct]

2.1 Both $hf$ and $hg$ are the unique map to $Z$; $hs(*)=*$; $gt$ is the identity on $0$ and $1$; and both $ft$ and $sh$ are constant at $0$. Thus all four equations in [L1] hold on both elements. [step 1.1, L1, algebra]

3.1 By [L2], the displayed fork is a coequalizer. [step 2.1, L2]

4.1 Directly, if $k:Y\to W$ satisfies $kf=kg$, then $k(0)=k(y)$ for both $y=0,1$, so $k$ is constant and factors uniquely through $h:Y\to\{*\}$. This independently checks the universal property. [step 1.1, construct] ∎
