---
id: cor-intermediate-field-degrees-divide
kind: corollary
title: "The degree of an intermediate field divides the degree of a finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tower-law-for-finite-field-extensions, cor-every-spanning-set-contains-a-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $F\subseteq K\subseteq L$ and $L/F$ is finite, then $K/F$ and $L/K$ are finite and

$$[K:F]\mid[L:F].$$

## Facts & Assumptions

**Given:** A tower $F\subseteq K\subseteq L$ with $L/F$ finite.

[L1] For finite subextensions the tower law is $[L:F]=[L:K][K:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

[L2] Assuming the Axiom of Choice, if $S\subseteq V$ spans $V$ then there is a basis $B$ of $V$ with $B\subseteq S$ ([[cor-every-spanning-set-contains-a-basis]]).

[L3] A linearly independent subset of a space spanned by $N$ vectors has at most $N$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the spanning set $K$ of the $F$-vector space $K$ to obtain an $F$-basis $B\subseteq K$. This set is independent in the $F$-space $L$, so [L3] makes $B$ finite; hence $K/F$ is finite. [given, L2, L3]

1.2 Any finite $F$-basis of $L$ is also a finite $K$-spanning set of $L$. Applying [L2] over $K$ gives a finite $K$-basis, so $L/K$ is finite. [given, L2]

2.1 The tower law [L1] now applies and writes $[L:F]$ as $[K:F]$ times the natural number $[L:K]$, proving the divisibility. [step 1.1, step 1.2, L1] ∎
