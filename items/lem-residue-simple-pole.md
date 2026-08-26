---
id: lem-residue-simple-pole
kind: lemma
title: "At a simple pole the residue is the limit of (z-a)f(z)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-pole, def-residue-isolated-singularity, thm-pole-characterizations, cor-complex-differentiability-implies-continuity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Statement

If $a$ is a simple pole of $f$, then

$$\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z).$$

## Facts & Assumptions

**Given:** A simple pole of $f$ at $a$.

[L1] A simple pole is a pole of order $1$ ([[def-simple-pole]]).

[L2] If $a$ is a pole of order $1$, then $(z-a)f(z)$ extends holomorphically across $a$ with a nonzero value there ([[thm-pole-characterizations]]).

[L3] The residue is the coefficient of $(z-a)^{-1}$ in the Laurent expansion ([[def-residue-isolated-singularity]]).

[L4] Holomorphic functions are continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $g(z):=(z-a)f(z)$ extends holomorphically across $a$; write the extension again as $g$, so $g(a)$ is defined and $g(z)\to g(a)$ by [L4]. [L1, L2, L4]

1.2 The Laurent expansion of $f$ is $f(z)=c_{-1}(z-a)^{-1}+\sum_{n\ge0}c_n(z-a)^n$, because a simple pole has no terms $(z-a)^{-m}$ with $m\ge2$. Multiplying by $(z-a)$ gives $g(z)=c_{-1}+\sum_{n\ge0}c_n(z-a)^{n+1}$, so $g(a)=c_{-1}=\operatorname{Res}(f,a)$ by [L3]. [L2, L3, algebra]

2.1 Combining steps 1.1 and 1.2 gives $\lim_{z\to a}(z-a)f(z)=g(a)=\operatorname{Res}(f,a)$. [step 1.1, step 1.2] ∎
