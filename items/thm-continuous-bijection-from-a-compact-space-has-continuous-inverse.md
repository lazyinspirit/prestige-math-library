---
id: thm-continuous-bijection-from-a-compact-space-has-continuous-inverse
kind: theorem
title: "A continuous bijection from a compact metric space onto a metric space carries open sets to open sets, so its inverse is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-image-of-a-compact-space-is-compact, lem-closed-subset-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-compactness-is-intrinsic, def-metric-continuity, thm-metric-continuity-characterisations, def-injection-surjection-bijection, def-metric-topology, def-metric-compactness, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "continuous bijection from a compact space"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a compact metric space ([[def-metric-compactness]]), let
$(Y,d_Y)$ be a metric space ([[def-metric-space]]) and let $f : X \to Y$ be a
continuous bijection ([[def-metric-continuity]],
[[def-injection-surjection-bijection]]). Then:

1. $f[U]$ is open in $Y$ for every $U$ open in $X$
   ([[def-metric-topology]]);
2. the inverse function $f^{-1} : Y \to X$ is continuous.

The words used are deliberately those of open sets and of the inverse map: a
single name for a continuous bijection with continuous inverse is not available
at this point in the reading order. No choice principle is used.

## Facts & Assumptions

**Given:** A compact metric space $(X,d_X)$, a metric space $(Y,d_Y)$ and a continuous bijection $f : X \to Y$.

[L1] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]], [[lem-compactness-is-intrinsic]]).

[L2] The image of a compact subset under a continuous map is a compact subset of the codomain ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L3] A compact subset of a metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]).

[L4] A set is closed exactly when its complement is open ([[def-metric-topology]]).

[L5] A map is continuous exactly when the preimage of every open set is open ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]]).

[L6] For a bijection $f : X \to Y$ and $U \subseteq X$: $f[X \setminus U] = Y \setminus f[U]$, and for the inverse function $g = f^{-1}$ one has $g^{-1}[U] = f[U]$ ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Let $U \subseteq X$ be open; then $X \setminus U$ is closed in $X$. [L4]

2.1 Being a closed subset of the compact space $X$, the set $X \setminus U$ is a compact subset of $X$. [L1, step 1.1]

3.1 Hence $f[X \setminus U]$ is a compact subset of $Y$, and therefore closed in $Y$. [L2, L3, step 2.1]

4.1 Since $f$ is a bijection, $f[X\setminus U] = Y \setminus f[U]$, so $f[U] = Y \setminus f[X \setminus U]$ is open in $Y$: claim 1. [L4, L6, step 3.1]

5.1 Write $g := f^{-1} : Y \to X$, a function because $f$ is a bijection; for every open $U \subseteq X$ the preimage $g^{-1}[U]$ equals $f[U]$, which is open by claim 1, so $g$ is continuous: claim 2. [L5, L6, step 4.1] ∎

## Remarks

**Compactness of the domain is essential.** Without it a continuous bijection can have a discontinuous inverse, and no part of the argument survives, compactness being consumed at steps 2.1 and 3.1 alike. What the theorem says is that on a compact domain no such failure occurs, and the reason is entirely the open map property established at step 4.1.

**Hausdorffness of the codomain is used silently and is automatic here.** What step 3.1 needs is that a compact subset of $Y$ be closed, which is [[thm-compact-subset-is-closed-and-bounded]] and rests on the separation of distinct points by disjoint balls. Every metric space has that property, so no hypothesis on $(Y,d_Y)$ beyond being a metric space is required.
