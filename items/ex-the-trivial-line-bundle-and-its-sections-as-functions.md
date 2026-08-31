---
id: ex-the-trivial-line-bundle-and-its-sections-as-functions
kind: example
title: "The trivial line bundle and its sections as functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-smooth-section-local-section-and-support, prop-smooth-sections-form-a-module-over-smooth-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Example

For a smooth manifold $M$, the trivial line bundle $M\times\mathbb R\to M$ has
smooth sections exactly of the form

$$p\mapsto (p,f(p))$$

for smooth functions $f:M\to\mathbb R$.

## Facts & Assumptions

**Given:** The trivial line bundle $\operatorname{pr}_1:M\times\mathbb R\to M$.

[L1] A smooth section is a smooth map whose composition with the bundle
projection is the identity ([[def-smooth-section-local-section-and-support]]).

## Verification

**Proof technique:** direct.

1.1 If $s:M\to M\times\mathbb R$ is a section, then $\operatorname{pr}_1(s(p))=p$, so $s(p)=(p,f(p))$ for a unique scalar function $f:M\to\mathbb R$. [L1, given]
2.1 The map $s$ is smooth exactly when its second component $f$ is smooth. Conversely every smooth $f$ gives a smooth section $p\mapsto(p,f(p))$. Thus sections of the trivial line bundle are the same as smooth functions on $M$. [L1, step 1.1, algebra] ∎