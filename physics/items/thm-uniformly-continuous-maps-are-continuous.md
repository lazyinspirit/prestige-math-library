---
id: thm-uniformly-continuous-maps-are-continuous
kind: theorem
title: "Every uniformly continuous map is continuous for the induced topologies"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-continuous-map-top]
aliases: []
landmark: false
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every uniformly continuous map between uniform spaces is continuous for their induced topologies.

## Facts & Assumptions

**Given:** A uniformly continuous map $f:X\to Y$ and a point $x\in X$.

[A1] Uniform continuity sends one source entourage into each prescribed target entourage ([[def-uniformly-continuous-map]]).

[L1] Entourage balls are neighbourhood bases for the induced topologies ([[thm-uniformity-induces-a-topology]]).

[L2] A map is continuous at $x$ when every neighbourhood of $f(x)$ has a neighbourhood of $x$ mapped into it ([[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $N$ be a neighbourhood of $f(x)$ and choose a target entourage $V$ with $V[f(x)]\subseteq N$. [L1, choose]

2.1 Uniform continuity supplies a source entourage $U$ whose pairs map into $V$, so $f[U[x]]\subseteq V[f(x)]\subseteq N$. [A1, step 1.1]

3.1 Since $U[x]$ is a neighbourhood of $x$, [L2] gives continuity at $x$; as $x$ was arbitrary, $f$ is continuous. [step 2.1, L1, L2] ∎
