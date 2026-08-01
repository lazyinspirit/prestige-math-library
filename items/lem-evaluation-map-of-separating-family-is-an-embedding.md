---
id: lem-evaluation-map-of-separating-family-is-an-embedding
kind: lemma
title: "The evaluation map of a point–closed-set separating family is a topological embedding"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-evaluation-map-into-unit-cube, def-unit-interval-function-family-separates-points-from-closed-sets, thm-product-universal-property, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

If a family $\mathcal F$ separates points from closed sets ([[def-unit-interval-function-family-separates-points-from-closed-sets]]), then its evaluation map $e_{\mathcal F}$ ([[def-evaluation-map-into-unit-cube]]) is a homeomorphism of $X$ onto the subspace $e_{\mathcal F}[X]$. In particular it is a topological embedding.

## Facts & Assumptions

**Given:** A space $X$, a point–closed-set separating family $\mathcal F$, and its evaluation map $e=e_{\mathcal F}$.

[L1] A map into a product is continuous exactly when all of its coordinate maps are continuous ([[thm-product-universal-property]]).

[L2] A homeomorphism is a bijection whose map and inverse are continuous ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Each coordinate $\pi_f\circ e$ equals $f$ and is continuous, so $e$ is continuous by [L1]. [L1]

1.2 If $x\ne y$, point separation supplies $f\in\mathcal F$ with $f(x)\ne f(y)$, and then $e(x)(f)\ne e(y)(f)$. Thus $e$ is injective. [given]

1.3 Let $U$ be open in $X$ and $x\in U$. The complement $C=X\setminus U$ is closed, so choose $f\in\mathcal F$ with $f(x)=1$ and $f[C]=\{0\}$. Then $e(x)$ belongs to $e[X]\cap\pi_f^{-1}((1/2,1])$, and this subspace-open set is contained in $e[U]$. [given, construct]

2.1 Step 1.3 shows that $e[U]$ is open in $e[X]$ for every open $U$, so $e^{-1}:e[X]\to X$ is continuous. Together with step 1.1 and injectivity from step 1.2, [L2] proves the assertion. [step 1.1, step 1.2, step 1.3, L2] ∎
