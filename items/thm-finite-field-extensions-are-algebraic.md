---
id: thm-finite-field-extensions-are-algebraic
kind: theorem
title: "Every finite field extension is algebraic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extension-degree-and-finite-extension, def-algebraic-and-transcendental-elements, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Every finite field extension $K/F$ is algebraic: each $a\in K$ is a root of a nonzero polynomial in $F[t]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$ of degree $n$ and an element $a\in K$.

[L1] Degree $n$ means that $K$ has an $F$-basis of size $n$ ([[def-extension-degree-and-finite-extension]]).

[L2] Any $n+1$ vectors in a space spanned by $n$ vectors are linearly dependent ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[L3] An element is algebraic over $F$ when a nonzero polynomial in $F[t]$ vanishes at it ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 The $n+1$ vectors $1,a,\ldots,a^n$ lie in the $n$-dimensional $F$-space $K$, so [L2] gives coefficients $c_0,\ldots,c_n\in F$, not all zero, with $\sum_{i=0}^nc_ia^i=0$. [given, L1, L2]

2.1 The polynomial $p(t)=\sum_{i=0}^nc_it^i$ is nonzero and satisfies $p(a)=0$, so $a$ is algebraic by [L3]. [step 1.1, L3]

3.1 Since $a$ was arbitrary, the extension is algebraic. The case $n=0$ cannot occur for a field extension because $1_K\ne0$. [step 2.1, L1] ∎
