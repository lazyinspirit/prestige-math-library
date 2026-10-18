---
id: cor-regular-values-form-a-dense-g-delta-set
kind: corollary
title: "Regular values form a dense $G_\\delta$ set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, cor-regular-values-have-null-complement-and-are-dense,
       prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (cor-regular-values-form-a-dense-g-delta-set). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For a smooth map
$F:M\to N$, the set of regular values is a dense
$G_\delta$ subset of $N$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth map $F:M\to N$.

[L1] Under $\mathrm{AC}_\omega$, the critical value set is $\sigma$-compact ([[prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact]]).

[L2] Regular values are dense, and the critical value set is null ([[cor-regular-values-have-null-complement-and-are-dense]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], write the critical value set as $\bigcup_{j\ge 1}K_j$ with each $K_j$ compact. [L1, given]

2.1 If $\dim N>0$, then [L2] makes each $K_j$ a compact null set, hence it has empty interior. Therefore $N\setminus K_j$ is open and dense. The regular-value set is $$ N\setminus\bigcup_{j\ge 1}K_j=\bigcap_{j\ge 1}(N\setminus K_j), $$ so it is a dense $G_\delta$. If $\dim N=0$, then [L2] already says every value is regular, so the regular-value set is all of $N$, again a dense $G_\delta$. [L2, step 1.1, cases, algebra]

3.1 Therefore regular values form a dense $G_\delta$ set. [step 2.1] ∎
