---
id: fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology
kind: false-statement
title: "Uniform $C^1$ openness of transversality fails on arbitrary noncompact sources"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-transversality-is-stable-on-a-compact-source]
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

**False claim:** if $M$ is noncompact and $F:M\to N$ is transverse to an
embedded submanifold $Z\subseteq N$, then every map uniformly $C^1$-close to
$F$ is still transverse to $Z$.

## Facts & Assumptions

**Given:** The map $F:\mathbb R\to\mathbb R$, $F(x)=e^{-x}$, the point submanifold $Z=\{0\}$, a smooth bump $\beta$ with support in $[-1,1]$, $\beta(0)=1$, and $\beta'(0)=0$.

[L1] Compact-source $C^1$ openness is the honest theorem ([[prop-transversality-is-stable-on-a-compact-source]]).

## Refutation
**Proof technique:** direct.

1.1 The map $F$ never meets $0$, so it is vacuously transverse to $Z$. For each integer $n\ge 1$, define $$ G_n(x):=e^{-x}-e^{-n}\beta(x-n)+e^{-n}(x-n)\beta(x-n). $$ Then $G_n(n)=0$ and $G_n'(n)= -e^{-n}-e^{-n}\beta'(0)+e^{-n}\beta(0)=0$. [given, algebra]
2.1 The differences $G_n-F$ and $G_n'-F'$ are supported in $[n-1,n+1]$, and their sup norms are bounded by constants times $e^{-n}$. Hence $G_n\to F$ in the uniform $C^1$ topology. [given, step 1.1, algebra]
3.1 But step 1.1 gives a critical zero of $G_n$ at $x=n$, so $G_n$ is not transverse to $\{0\}$ by the regular-value criterion. Therefore no uniform $C^1$ neighbourhood of $F$ consists entirely of transverse maps. This agrees with [L1], which required compact source. [L1, step 1.1, step 2.1] ∎