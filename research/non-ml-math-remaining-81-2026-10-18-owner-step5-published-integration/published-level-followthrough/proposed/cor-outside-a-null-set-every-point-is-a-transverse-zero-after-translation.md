---
id: cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation
kind: corollary
title: "Outside a null set of translations a fixed value is regular"
status: published
dependency_level: 7
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, cor-generic-translations-of-a-map-to-euclidean-space-are-transverse,
       prop-transversality-to-a-point-is-the-regular-value-condition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step3-first-published-source-integration/published-recording/receipts/cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation.json
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $f:M\to\mathbb R^n$ be smooth and let $q\in\mathbb R^n$. Then outside a
null subset of $a\in\mathbb R^n$, the map $p\mapsto f(p)+a$ has $q$ as a regular
value.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth map $f:M\to\mathbb R^n$ and a point $q\in\mathbb R^n$.

[L1] Under $\mathrm{AC}_\omega$, for the point submanifold $\{q\}$, generic translations are transverse to it outside a null set ([[cor-generic-translations-of-a-map-to-euclidean-space-are-transverse]]).

[L2] Transversality to a point is the regular-value condition ([[prop-transversality-to-a-point-is-the-regular-value-condition]]).

## Proof
**Proof technique:** direct.

1.1 Apply [L1] with $Z=\{q\}$. Then outside a null subset of $a\in\mathbb R^n$, the translated map $f_a(p)=f(p)+a$ is transverse to $\{q\}$. [L1, given]

2.1 By [L2], $f_a\pitchfork\{q\}$ is equivalent to $q$ being a regular value of $f_a$. [L2, step 1.1]

3.1 Therefore outside a null set of translation parameters, the fixed point $q$ is a regular value of $f_a$. [step 2.1] ∎
