---
id: thm-radial-straight-line-map-on-punctured-rn
kind: theorem
title: "For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-radial-normalisation-is-continuous, thm-product-universal-property, thm-componentwise-limits-and-continuity, def-product-topology, def-euclidean-spheres-and-closed-balls, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-algebra-of-continuous-functions, def-subspace-topology-top]
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
  references:
    - title: "Deformation retract"
      url: "https://en.wikipedia.org/wiki/Deformation_retract"
pipeline_run: null
---

## Statement

For $n\ge1$, put $P=\mathbb R^n\setminus\{0\}$ and define

$$H:P\times[0,1]\to P,\qquad H(x,t)=\bigl((1-t)+t/\lVert x\rVert_2\bigr)x.$$

Then $H$ is continuous, $H(x,0)=x$, $H(x,1)=x/\lVert x\rVert_2$, $H(s,t)=s$ for $s\in S^{n-1}$, and $H(x,t)\ne0$.

## Facts & Assumptions

**Given:** $x\in P$ and $t\in[0,1]$.

[L1] Radial normalisation is continuous on $P$ ([[lem-radial-normalisation-is-continuous]]).

[L2] Coordinate projections and the map into a product are continuous as stated by the product universal property ([[thm-product-universal-property]], [[def-product-topology]]).

[L3] The Euclidean norm is positive away from $0$ and the unit sphere consists of its norm-one points ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-spheres-and-closed-balls]]).

[L4] Sums, products, and quotients with nowhere-zero denominator of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-componentwise-limits-and-continuity]]).

[L5] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The scalar $c(x,t):=(1-t)+t/\lVert x\rVert_2$ is positive, since $1-t\ge0$, $t\ge0$, and $\lVert x\rVert_2>0$. [L3]

1.2 The coordinate projections on $P\times[0,1]$ are continuous by [L2]. Thus $c(x,t)$ is continuous by [L1] and the algebra rules in [L4], and each coordinate $H_i(x,t)=c(x,t)x_i$ is continuous. Componentwise continuity in [L4] makes $H$ continuous as a map into $\mathbb R^n$. [L1, L2, L4]

1.3 Substituting $t=0$ and $t=1$ gives $H(x,0)=x$ and $H(x,1)=x/\lVert x\rVert_2$. If $s\in S^{n-1}$, then $\lVert s\rVert_2=1$ and $H(s,t)=s$. [L3]

2.1 Since $c(x,t)>0$ and $x\ne0$, $H(x,t)\ne0$. Hence $H$ takes values in $P$, and [L5] makes it continuous as a map $P\times[0,1]\to P$. [step 1.1, step 1.2, L5]

3.1 These identities and step 2.1 prove the statement. [step 2.1, step 1.3] ∎
