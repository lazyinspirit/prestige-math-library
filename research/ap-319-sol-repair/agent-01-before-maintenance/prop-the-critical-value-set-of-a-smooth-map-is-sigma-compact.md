---
id: prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact
kind: proposition
title: "The critical value set of a smooth map is sigma-compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-critical-locus-and-critical-value-set,
       lem-every-manifold-has-a-compact-exhaustion,
       thm-continuous-image-of-a-compact-space-is-compact,
       cor-the-immersion-and-submersion-loci-are-open]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

For a smooth map $F:M\to N$, the critical value set $\operatorname{CV}(F)$ is a
$\sigma$-compact subset of $N$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] The submersion locus is open, so the critical locus is closed; every manifold has a compact exhaustion; and continuous images of compact sets are compact ([[cor-the-immersion-and-submersion-loci-are-open]], [[lem-every-manifold-has-a-compact-exhaustion]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the critical locus $\operatorname{Crit}(F)$ is closed in $M$. Let $K_1\subseteq K_2\subseteq\cdots$ be a compact exhaustion of $M$ from [L1]. [L1, given, choose]

2.1 Then $\operatorname{Crit}(F)\cap K_j$ is compact for every $j$, so [L1] makes $F(\operatorname{Crit}(F)\cap K_j)$ compact in $N$. [L1, step 1.1]

3.1 By [F1], $$ \operatorname{CV}(F)=\bigcup_{j\ge 1}F(\operatorname{Crit}(F)\cap K_j), $$ so $\operatorname{CV}(F)$ is a countable union of compact sets. [F1, step 2.1, algebra] ∎