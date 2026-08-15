---
id: thm-quotient-vector-space-universal-property
kind: theorem
title: "Universal property of the quotient vector space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-quotient-vector-space-operations-and-projection, def-kernel-and-image-of-a-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornell Math 4330, Quotient Spaces, Theorem 2"
      url: "https://pi.math.cornell.edu/~kassabov/math4330.fall19/cornell-only/QuoSpaces.pdf"
pipeline_run: null
---

## Statement

Let $f:V\to U$ be linear and let $W\le V$ satisfy $W\subseteq\ker f$. There is a unique linear map $\bar f:V/W\to U$ such that
$$\bar f\circ\pi=f.$$
It is given by $\bar f(v+W)=f(v)$.

## Facts & Assumptions

**Given:** A linear map $f:V\to U$ and a subspace $W\subseteq\ker f$.

[L1] The canonical projection $\pi:V\to V/W$ is a surjective linear map, and two vectors have the same coset exactly when their difference lies in $W$ ([[prop-quotient-vector-space-operations-and-projection]]).

[L2] For a linear map $f$, its kernel is $\ker f=\{v:f(v)=0\}$ ([[def-kernel-and-image-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Define $\bar f(v+W):=f(v)$; if $v+W=v'+W$, then $v-v'\in W\subseteq\ker f$, so $f(v)=f(v')$, and the quotient operation formulas give $\bar f(a(v+W)+b(u+W))=af(v)+bf(u)$. [L1, L2]

2.1 The definition gives $\bar f(\pi(v))=f(v)$, hence $\bar f\pi=f$; if $g:V/W\to U$ also satisfies $g\pi=f$, then every coset is $\pi(v)$ and $g(v+W)=f(v)=\bar f(v+W)$, so $g=\bar f$, including the cases $W=V$ and $V=0$. [step 1.1, L1] ∎
