---
id: cor-generators-embed-in-the-word-quotient
kind: corollary
title: 'The generator map $X\to W(X)/{\sim}$ is injective'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-normal-form-for-the-word-quotient-model, thm-word-quotient-model-is-free]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

The generator map
$i_{\mathrm{word}}:X\to F_{\mathrm{word}}(X)$ of
[[thm-word-quotient-model-is-free]], given by
$i_{\mathrm{word}}(x)=[x]$, is injective.

## Facts & Assumptions

**Given:** Elements $x,y\in X$ with $[x]=[y]$ in $F_{\mathrm{word}}(X)$.

[L1] Every class in $W(X)/{\sim}$ contains exactly one reduced word ([[thm-normal-form-for-the-word-quotient-model]]).

## Proof

**Proof technique:** direct.

1.1 The one-letter words $x$ and $y$ are reduced and lie in the same class, so uniqueness in [L1] gives $x=y$. [L1, given]

2.1 Thus $i_{\mathrm{word}}(x)=i_{\mathrm{word}}(y)$ implies $x=y$, which is injectivity; when $X$ is empty the assertion is vacuous. [step 1.1] ∎

