---
id: cex-a-rank-jumping-kernel-is-not-a-vector-subbundle
kind: counterexample
title: "A rank-jumping kernel is not a vector subbundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles, fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement refuted

The kernel of a smooth bundle map is always a smooth vector subbundle.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] The kernel conclusion holds only under a constant-rank hypothesis
([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

## Counterexample

**Proof technique:** direct.

1.1 On the trivial line bundle $\mathbb R\times\mathbb R\to\mathbb R$, define the smooth bundle map $\Phi(x,v)=(x,xv)$. For $x\neq0$, the fibre map is injective, so $\ker\Phi_x=\{0\}$. At $x=0$, the fibre map is zero, so $\ker\Phi_0=\mathbb R$. [L1, given, construct]

2.1 The fibre dimensions of $\ker\Phi$ jump from $0$ to $1$, so the kernel is not locally trivial and therefore not a smooth vector subbundle. This is exactly why [L1] requires constant rank. [L1, step 1.1, algebra] ∎
