---
id: cor-compact-domain-maps-are-uniformly-continuous
kind: corollary
title: "Every continuous map from a compact Hausdorff space to a uniform space is uniformly continuous"
status: published
origin: session
deps: [thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, thm-compact-hausdorff-open-cover-uniformity, def-uniformly-continuous-map, thm-uniformly-continuous-maps-are-continuous, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every continuous map from a compact Hausdorff space to a uniform space is uniformly continuous.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$ with $X$ compact Hausdorff and $Y$ uniform.

[L1] A compact Hausdorff space has one compatible uniformity ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]]).

[L2] Uniform continuity is the entourage condition and implies continuity ([[def-uniformly-continuous-map]], [[thm-uniformly-continuous-maps-are-continuous]]).

[L3] Every open cover of a compact Hausdorff space is uniform, so some source entourage-ball cover refines it ([[thm-compact-hausdorff-open-cover-uniformity]]); every target entourage has a symmetric square root ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be a target entourage and choose a symmetric $W$ with $W^{-1}\circ W=W^{\circ2}\subseteq V$. For each $x\in X$, the set $W[f(x)]$ is a neighbourhood of $f(x)$, so continuity gives an open neighbourhood $O_x$ of $x$ with $f[O_x]\subseteq W[f(x)]$. [L2, L3]

2.1 The open cover $(O_x)_{x\in X}$ is uniform by [L3]. Hence there is a source entourage $E$ whose ball cover refines it: for each $a\in X$, some $O_x$ contains $E[a]$. [step 1.1, L1, L3]

3.1 If $(a,b)\in E$, then $a,b\in E[a]\subseteq O_x$ for some $x$. Thus $f(a),f(b)\in W[f(x)]$, so $(f(a),f(b))\in W^{-1}\circ W\subseteq V$. This is uniform continuity. [step 1.1, step 2.1, L2] ∎
