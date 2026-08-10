---
id: lem-composition-and-identity-linear-maps
kind: lemma
title: 'Identity maps and composites of linear maps are linear'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Chapter 3'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

The identity map of a vector space is linear. If $T:U\to V$ and $S:V\to W$
are linear maps over the same field, then $S\circ T:U\to W$ is linear.

## Facts & Assumptions

**Given:** Vector spaces $U,V,W$ over a field $F$, scalars $a,b\in F$, vectors $u,v\in U$, and linear maps $T:U\to V$ and $S:V\to W$.

[L1] A map $R$ is linear when $R(au+bv)=aR(u)+bR(v)$ for all scalars and vectors ([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 The identity satisfies $\operatorname{id}_V(av+bw)=av+bw=a\operatorname{id}_V(v)+b\operatorname{id}_V(w)$, so it is linear. [given, L1]

2.1 Linearity of $T$ and then of $S$ gives $S(T(au+bv))=S(aT(u)+bT(v))=aS(T(u))+bS(T(v))$. [step 1.1, L1]

3.1 The equality in step 2.1 is the defining linearity equation for $S\circ T$, so the composite is linear. [step 2.1, L1] ∎
