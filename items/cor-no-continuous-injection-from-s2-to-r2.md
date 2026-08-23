---
id: cor-no-continuous-injection-from-s2-to-r2
kind: corollary
title: 'There is no continuous injection from $S^2$ into $\mathbb R^2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-borsuk-ulam-in-dimension-two, def-euclidean-spheres-and-closed-balls, def-injection-surjection-bijection]
justified_by: []
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
  references:
    - title: "Allen Hatcher, Algebraic Topology, consequence after Theorem 1.10"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

There is no continuous injective map $S^2\to\mathbb R^2$.

## Facts & Assumptions

**Given:** A continuous map $f:S^2\to\mathbb R^2$.

[L1] For every continuous map $f:S^2\to\mathbb R^2$, there is an $x\in S^2$ with $f(x)=f(-x)$ ([[thm-borsuk-ulam-in-dimension-two]]).

[F1] The unit sphere $S^2$ consists of the vectors $x\in\mathbb R^3$ with $\lVert x\rVert_2=1$ ([[def-euclidean-spheres-and-closed-balls]]).

[F2] A map is injective when equality of two images forces equality of their inputs ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $x\in S^2$ with $f(x)=f(-x)$. [given, L1, choose]

2.1 If $x=-x$, then $2x=0$ and hence $x=0$, contrary to $\lVert x\rVert_2=1$. Thus $x$ and $-x$ are distinct points with the same image, so $f$ is not injective. [step 1.1, F1, F2, algebra] ∎
