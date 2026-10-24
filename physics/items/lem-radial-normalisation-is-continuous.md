---
id: lem-radial-normalisation-is-continuous
kind: lemma
title: "Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-euclidean-spheres-and-closed-balls, def-subspace-topology-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
    - title: "Deformation retract"
      url: "https://en.wikipedia.org/wiki/Deformation_retract"
pipeline_run: null
---

## Statement

For $n\ge1$, the map $\rho:\mathbb R^n\setminus\{0\}\to S^{n-1}$ defined by $\rho(x)=x/\lVert x\rVert_2$ is continuous.

## Facts & Assumptions

**Given:** $n\ge1$, the Euclidean norm, and a nonzero point $a\in\mathbb R^n$.

[L1] The Euclidean norm is continuous and satisfies $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L2] Componentwise continuity gives continuity into $\mathbb R^n$ ([[thm-componentwise-limits-and-continuity]], [[def-vector-valued-functions-limits-and-continuity]]); and a map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous, so a continuous map whose image lies in the subspace is continuous into it ([[def-subspace-topology-top]]).

[L3] The unit sphere is the set of vectors with Euclidean norm $1$ ([[def-euclidean-spheres-and-closed-balls]]).

## Proof

**Proof technique:** direct.

1.1 Put $d:=\lVert a\rVert_2>0$. If $\lVert x-a\rVert_2<d/2$, then [L1] gives $\lVert x\rVert_2>d/2$. [L1]

1.2 For such $x$, $\lVert\rho(x)-\rho(a)\rVert_2\le\lVert x-a\rVert_2/\lVert x\rVert_2+\lVert a\rVert_2|1/\lVert x\rVert_2-1/\lVert a\rVert_2|\le4\lVert x-a\rVert_2/d$. [L1]

2.1 Step 1.2 gives the epsilon-delta condition at $a$, so $\rho$ is continuous on the punctured space. Also $\lVert\rho(x)\rVert_2=1$, so its image lies in $S^{n-1}$ and [L2] gives continuity with that codomain. [L2, L3, step 1.2] ∎
