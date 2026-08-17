---
id: ex-product-of-two-fields-is-semisimple
kind: example
title: "A product of two fields is semisimple with two simple-module types"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-simple-modules-over-semisimple-rings]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "MIT 18.706, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem"
      url: "https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf"
pipeline_run: null
---

## Example

For fields $F$ and $K$, the ring $F\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$; these give all isomorphism classes. ([[thm-simple-modules-over-semisimple-rings]]).

## Verification

**Proof technique:** direct.

1.1 The central idempotents $e_F=(1,0)$ and $e_K=(0,1)$ satisfy $e_F+e_K=1$ and $e_Fe_K=0$. Thus the regular module splits as the direct sum of the simple left ideals $F\times0$ and $0\times K$, proving semisimplicity. [L1, L2, given, algebra]

2.1 For every left module $M$, one has $M=e_FM\oplus e_KM$. If $M$ is simple, exactly one summand is nonzero; it is then a simple vector space over the corresponding field and hence isomorphic to $F$ on the first factor or $K$ on the second. [step 1.1, given, algebra]

3.1 Even when $F\cong K$ as fields, the two modules are not isomorphic as $F\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim. [step 2.1, given, algebra] ∎
