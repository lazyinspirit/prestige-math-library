---
id: lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy
kind: lemma
title: "Every ultrafilter on a totally bounded uniform space is Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-totally-bounded-uniform-space, def-cauchy-filter-in-a-uniform-space, def-ultrafilter, lem-ultrafilter-prime, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

Every ultrafilter on a totally bounded uniform space is Cauchy.

## Facts & Assumptions

**Given:** A totally bounded uniform space $X$ and an ultrafilter $\mathcal V$ on it.

[L1] Total boundedness gives a finite cover by entourage balls ([[def-totally-bounded-uniform-space]]).

[L2] An ultrafilter containing a finite union contains one member of the union ([[lem-ultrafilter-prime]]).

[L3] Cauchyness asks for an $E$-small filter member for each entourage ([[def-cauchy-filter-in-a-uniform-space]]).

[L4] Every entourage contains a symmetric entourage whose square lies in it ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose a symmetric $D$ with $D^{-1}\circ D=D^{\circ2}\subseteq E$. [L4, choose]

1.2 Total boundedness gives finite $F$ with $X=\bigcup_{x\in F}D[x]$; since $X\in\mathcal V$, [L2] gives $D[x]\in\mathcal V$ for some $x\in F$. [L1, L2]

2.1 Any two points of $D[x]$ are $E$-related, so $D[x]\times D[x]\subseteq E$. [step 1.1, step 1.2]

3.1 This supplies an $E$-small member for every $E$, so $\mathcal V$ is Cauchy by [L3]. [step 2.1, L3] ∎
