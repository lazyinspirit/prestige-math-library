---
id: cor-contractible-iff-identity-nullhomotopic
kind: corollary
title: "A nonempty space is contractible if and only if its identity map is nullhomotopic"
status: published
origin: session
deps: [def-nullhomotopic-map-and-contractible-space, thm-composition-respects-homotopy]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For a nonempty topological space $X$, the following are equivalent:

1. $X$ is contractible.
2. The identity map $\operatorname{id}_X$ is nullhomotopic.

## Facts & Assumptions

**Given:** A nonempty topological space $X$.

[A1] $X$ is contractible when every continuous map from $X$ to every topological space is nullhomotopic; a map is nullhomotopic when it is homotopic to a constant map ([[def-nullhomotopic-map-and-contractible-space]]).

[L1] Postcomposition by a continuous map preserves homotopies ([[thm-composition-respects-homotopy]], claim 2).

## Proof

**Proof technique:** direct.

1.1 If $X$ is contractible, apply [A1] to the continuous map $\operatorname{id}_X:X\to X$ to conclude that $\operatorname{id}_X$ is nullhomotopic. [A1]

1.2 Conversely suppose $\operatorname{id}_X\simeq c_{x_0}$ for some $x_0\in X$, and let $f:X\to Y$ be any continuous map. Postcomposition by $f$ gives $f=f\circ\operatorname{id}_X\simeq f\circ c_{x_0}=c_{f(x_0)}$ by [L1]. Thus $f$ is nullhomotopic. [assume-hyp, L1, A1]

2.1 Since $Y$ and $f$ in step 1.2 were arbitrary, every continuous map out of $X$ is nullhomotopic, so $X$ is contractible by [A1]. Together with step 1.1 this proves the equivalence. [step 1.1, step 1.2, A1] ∎
