---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-quotient-vector-space-universal-property.json
  precheck: pass
id: thm-quotient-vector-space-universal-property
kind: theorem
title: "Universal property of the quotient vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-quotient-vector-space-operations-and-projection, def-quotient-vector-space-and-canonical-projection, def-kernel-and-image-of-a-linear-map]
aliases: []
landmark: false
proof_strategy: direct
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

[L1] $v+W=v'+W$ exactly when $v-v'\in W$, the operations on $V/W$ make it a vector space over $F$, and the canonical projection $\pi:V\to V/W$ is a surjective linear map with $\ker\pi=W$ ([[prop-quotient-vector-space-operations-and-projection]]).

[L2] For a linear map $f$, its kernel is $\ker f=\{v:f(v)=0\}$ ([[def-kernel-and-image-of-a-linear-map]]).

[L3] The quotient operations are $(v+W)+(u+W):=(v+u)+W$ and $a(v+W):=(av)+W$, and the canonical projection is $\pi(v):=v+W$ ([[def-quotient-vector-space-and-canonical-projection]]).

## Proof

**Proof technique:** direct.

1.1 Define $\bar f(v+W):=f(v)$; if $v+W=v'+W$, then $v-v'\in W\subseteq\ker f$ by [L1], so $f(v)-f(v')=f(v-v')=0$ by [L2] and the linearity of $f$, giving $f(v)=f(v')$, and $\bar f$ is well defined; the operation formulas of [L3] then give $\bar f(a(v+W)+b(u+W))=\bar f((av+bu)+W)=f(av+bu)=af(v)+bf(u)$, so $\bar f$ is linear. [L1, L2, L3]

2.1 The definition gives $\bar f(\pi(v))=f(v)$, hence $\bar f\pi=f$; if $g:V/W\to U$ also satisfies $g\pi=f$, then every coset is $\pi(v)$ and $g(v+W)=f(v)=\bar f(v+W)$, so $g=\bar f$, including the cases $W=V$ and $V=0$. [step 1.1, L1] ∎

## Remarks

Under the hypothesis $W\subseteq\ker f$, the factorization is represented by the commutative triangle below. Here $\pi(v)=v+W$ and $\bar f(v+W)=f(v)$; the dashed arrow is the unique linear map furnished by the theorem. Both paths from $V$ to $U$ send $v$ to $f(v)$, as proved in step 2.1. The proof above is independent of the diagram.

```tikzcd
V \arrow[r, "f"] \arrow[d, "\pi"'] & U \\
V/W \arrow[ur, dashed, "\bar f"'] &
```
