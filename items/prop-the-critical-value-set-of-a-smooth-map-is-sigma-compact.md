---
id: prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact
kind: proposition
title: "The critical value set of a smooth map is sigma-compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-critical-locus-and-critical-value-set,
       lem-every-manifold-has-a-compact-exhaustion,
       thm-continuous-image-of-a-compact-space-is-compact,
       cor-the-immersion-and-submersion-loci-are-open]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For a smooth map
$F:M\to N$, the critical value set $\operatorname{CV}(F)$ is a
$\sigma$-compact subset of $N$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth map $F:M\to N$.

[F1] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] The submersion locus is open, so the critical locus is closed; under $\mathrm{AC}_\omega$ every manifold has a compact exhaustion; and continuous images of compact sets are compact ([[cor-the-immersion-and-submersion-loci-are-open]], [[lem-every-manifold-has-a-compact-exhaustion]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the critical locus $\operatorname{Crit}(F)$ is closed in $M$. Under the given $\mathrm{AC}_\omega$, let $K_1\subseteq K_2\subseteq\cdots$ be a compact exhaustion of $M$ from [L1]. This is the only use of countable choice. [L1, given, choose]

2.1 Then $\operatorname{Crit}(F)\cap K_j$ is compact for every $j$, so [L1] makes $F(\operatorname{Crit}(F)\cap K_j)$ compact in $N$. [L1, step 1.1]

3.1 By [F1], $$ \operatorname{CV}(F)=\bigcup_{j\ge 1}F(\operatorname{Crit}(F)\cap K_j), $$ so $\operatorname{CV}(F)$ is a countable union of compact sets. [F1, step 2.1, algebra] ∎
