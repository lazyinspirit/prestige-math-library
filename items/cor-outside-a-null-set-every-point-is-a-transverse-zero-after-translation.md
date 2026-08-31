---
id: cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation
kind: corollary
title: "Outside a null set every translation makes a chosen value a transverse zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-generic-translations-of-a-map-to-euclidean-space-are-transverse,
       prop-transversality-to-a-point-is-the-regular-value-condition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $f:M\to\mathbb R^n$ be smooth and let $q\in\mathbb R^n$. Then outside a
null subset of $a\in\mathbb R^n$, the map $p\mapsto f(p)+a$ has $q$ as a regular
value.

## Facts & Assumptions

**Given:** A smooth map $f:M\to\mathbb R^n$ and a point $q\in\mathbb R^n$.

[L1] For the point submanifold $\{q\}$, generic translations are transverse to it outside a null set ([[cor-generic-translations-of-a-map-to-euclidean-space-are-transverse]]).

[L2] Transversality to a point is the regular-value condition ([[prop-transversality-to-a-point-is-the-regular-value-condition]]).

## Proof
**Proof technique:** direct.

1.1 Apply [L1] with $Z=\{q\}$. Then outside a null subset of $a\in\mathbb R^n$, the translated map $f_a(p)=f(p)+a$ is transverse to $\{q\}$. [L1, given]

2.1 By [L2], $f_a\pitchfork\{q\}$ is equivalent to $q$ being a regular value of $f_a$. [L2, step 1.1]

3.1 Therefore outside a null set of translations, the chosen value becomes a transverse zero. [step 2.1] ∎