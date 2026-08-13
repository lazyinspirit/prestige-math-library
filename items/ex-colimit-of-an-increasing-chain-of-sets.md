---
id: ex-colimit-of-an-increasing-chain-of-sets
kind: example
title: "The colimit of an increasing chain of sets is its union"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, thm-set-has-all-small-colimits]
justified_by: []
aliases: []
landmark: false
proof_strategy: well-defined-map
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, Example 5.2.8"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: frontier-12
---

## Example

For inclusions $X_0\subseteq X_1\subseteq\cdots$, the colimit in
$\mathbf{Set}$ is $X=\bigcup_{n\ge0}X_n$ with the inclusion maps.

## Facts & Assumptions

**Given:** The increasing chain of sets.

[F1] A colimit cocone admits a unique map to every other cocone
([[def-limit-and-colimit-of-a-diagram]]).

[L1] A Set-colimit is a quotient of the tagged union by the identifications
induced by diagram arrows ([[thm-set-has-all-small-colimits]]).

## Verification

**Proof technique:** define the induced map by a containing stage.

1.1 The inclusions $i_n:X_n\to X$ form a cocone. Let $f_n:X_n\to Y$ be any cocone, so $f_m|_{X_n}=f_n$ whenever $n\le m$. [given]

1.2 For $x\in X$, choose any $n$ with $x\in X_n$ and set $f(x)=f_n(x)$. If $x\in X_n\cap X_m$, then at the later stage $r=\max\{n,m\}$ the cocone equations give $f_n(x)=f_r(x)=f_m(x)$. Thus $f$ is well-defined. [given]

2.1 The equations $fi_n=f_n$ hold by definition and determine $f$ on every element of the union, so the factor is unique. By [F1], $X$ is the colimit. [F1, step 1.2]

3.1 In [L1], tagged copies of one element appearing at different stages are identified at a common later stage. Hence its quotient is canonically the same ordinary union, without any assumption that the stages are disjoint. [L1, step 1.2] ∎
