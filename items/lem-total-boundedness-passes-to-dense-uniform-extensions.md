---
id: lem-total-boundedness-passes-to-dense-uniform-extensions
kind: lemma
title: "Total boundedness passes to a uniform space with a dense uniformly continuous image"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-totally-bounded-uniform-space, def-uniform-space-by-entourages, def-uniformly-continuous-map, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Wodzicki, Uniform Structure"
      url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
pipeline_run: null
---

## Statement

Let $i:X\to Y$ be uniformly continuous with dense image. If $X$ is totally bounded, then $Y$ is totally bounded.

## Facts & Assumptions

**Given:** A target entourage $E$ of $Y$, a uniformly continuous map $i:X\to Y$ with dense image, and a totally bounded source $X$.

[L1] The uniformity square-root axiom gives $D$ with $D\circ D\subseteq E$; a symmetric-entourage base then gives symmetric $V\subseteq D$, hence $V\circ V\subseteq E$ ([[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L2] Uniform continuity supplies a source entourage $U$ whose $U$-related pairs have $V$-related images ([[def-uniformly-continuous-map]]).

[L3] Total boundedness supplies a finite $F\subseteq X$ with $X=\bigcup_{a\in F}U[a]$ ([[def-totally-bounded-uniform-space]]).

[L4] Entourage balls are neighbourhoods, so density makes every nonempty target entourage ball meet $i[X]$ ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Choose $V$ and $U$ as in [L1] and [L2], and choose the finite $U$-net $F$ from [L3]. [L1, L2, L3]

1.2 For $y\in Y$, density gives $x\in X$ with $i(x)\in V[y]$; choose $a\in F$ with $x\in U[a]$. [L3, L4]

2.1 Step 1.2 gives $(i(a),i(x))\in V$ and, by symmetry, $(i(x),y)\in V$, hence $(i(a),y)\in V\circ V\subseteq E$. [step 1.1, step 1.2]

3.1 The finite set $i[F]$ has $E$-balls covering $Y$, proving total boundedness; if $Y=\varnothing$, the empty set is the required finite net. [L3, step 2.1] ∎
