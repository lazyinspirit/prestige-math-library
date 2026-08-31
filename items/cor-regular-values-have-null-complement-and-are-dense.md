---
id: cor-regular-values-have-null-complement-and-are-dense
kind: corollary
title: "Regular values have null complement and are dense"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-sard-for-smooth-manifolds,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold,
       def-critical-locus-and-critical-value-set]
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
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
---

## Statement

For a smooth map $F:M\to N$, the complement of the regular values is a null
subset of $N$. In particular, the regular values are dense in $N$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] The complement of the regular values is the critical value set ([[def-critical-locus-and-critical-value-set]]).

[L1] The critical value set is null ([[thm-morse-sard-for-smooth-manifolds]]).

[L2] In a positive-dimensional manifold, a null set has dense complement ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Proof
**Proof technique:** direct.

1.1 By [F1] and [L1], the complement of the regular values is null in $N$. [F1, L1, given]

2.1 If $\dim N>0$, [L2] implies that the complement of that null set is dense. If $\dim N=0$, then $N$ is discrete and every value is regular because the target tangent spaces are zero, so the regular-value set is all of $N$ and is certainly dense. [L2, step 1.1, cases]

3.1 Therefore regular values have null complement and are dense. [step 1.1, step 2.1] ∎