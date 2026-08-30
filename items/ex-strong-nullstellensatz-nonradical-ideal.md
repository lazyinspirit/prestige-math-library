---
id: ex-strong-nullstellensatz-nonradical-ideal
kind: example
title: "I(V(x^2, xy)) keeps only the radical information"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical, cor-strong-nullstellensatz-two-inclusions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $k$ be algebraically closed and let $I=(x^2,xy)\subseteq k[x,y]$. Then
$I(V(I))=(x)=\sqrt I$, so the zero locus forgets the nilpotent multiplicity in
$x^2$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and the ideal $I=(x^2,xy)\subseteq k[x,y]$.

[L1] An ideal and its radical have the same zero locus ([[lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical]]).

## Verification

**Proof technique:** direct.

1.1 A point $(a,b)\in k^2$ lies in $V(I)$ exactly when $a^2=0$ and $ab=0$. Since $k$ is a field, this means $a=0$ and $b$ is arbitrary. Hence $V(I)=\{(0,b): b\in k\}$. [given]

2.1 The vanishing ideal of the $y$-axis is $(x)$. Also $\sqrt I=(x)$ because $x^2\in I$ and every element of $I$ is divisible by $x$. Therefore $I(V(I))=(x)=\sqrt I$, in agreement with [L1]. [L1, step 1.1] ∎
