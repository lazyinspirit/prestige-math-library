---
id: lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous
kind: lemma
title: "Inner products separate vectors, and the induced norm is homogeneous: $\\lVert\\lambda v\\rVert=|\\lambda|\\lVert v\\rVert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-space, def-inner-product-norm, lem-complex-conjugation-and-modulus-laws, thm-nth-roots-exist]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

In a real or complex inner product space:

1. if $\langle u,v\rangle=0$ for every $v$, then $u=0$;
2. $\lVert\lambda v\rVert=|\lambda|\lVert v\rVert$ for every scalar $\lambda$ and vector $v$.

## Facts & Assumptions

**Given:** Vectors $u,v$ in an inner product space and a scalar $\lambda$.

[L1] Positive definiteness says $\langle w,w\rangle=0$ exactly when $w=0$, and the inner product is linear first and conjugate-linear second ([[def-inner-product-space]]).

[L2] The induced norm is the unique nonnegative square root of $\langle w,w\rangle$ ([[def-inner-product-norm]], [[thm-nth-roots-exist]]).

[L3] For a complex scalar, $\lambda\overline\lambda=|\lambda|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $\langle u,v\rangle=0$ for every $v$, take $v=u$; [L1] gives $u=0$. [L1]

2.1 Sesquilinearity and [L3] give $\langle\lambda v,\lambda v\rangle=\lambda\overline\lambda\langle v,v\rangle=|\lambda|^2\lVert v\rVert^2$. Both $\lVert\lambda v\rVert$ and $|\lambda|\lVert v\rVert$ are nonnegative, so uniqueness in [L2] gives their equality. [L1, L2, L3] ∎
