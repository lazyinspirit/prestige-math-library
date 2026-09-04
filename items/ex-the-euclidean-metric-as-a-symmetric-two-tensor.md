---
id: ex-the-euclidean-metric-as-a-symmetric-two-tensor
kind: example
title: "The Euclidean metric as a symmetric two-tensor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-symmetric-and-alternating-covariant-tensor-subbundles,
       thm-symmetric-and-alternating-images-are-smooth-subbundles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

On $\mathbb R^n$, the Euclidean metric

$$ g=\sum_{i=1}^n dx^i\otimes dx^i $$

is a smooth section of the symmetric subbundle of $T^0_2\mathbb R^n$.

## Facts & Assumptions

**Given:** The Euclidean metric $g$ on $\mathbb R^n$.

[F1] The symmetric two-tensors form a fibrewise subbundle of the covariant tensor bundle ([[def-symmetric-and-alternating-covariant-tensor-subbundles]]).

[L1] That fibrewise symmetric part is a smooth vector subbundle ([[thm-symmetric-and-alternating-images-are-smooth-subbundles]]).

## Verification
**Proof technique:** direct.

1.1 The coefficients of $g$ in the standard coordinates are constant, so $g$ is smooth. [given]

2.1 For vectors $u,v$, one has $g(u,v)=g(v,u)$, so each fibre value $g_p$ is symmetric. Hence [F1] places $g$ in the symmetric fibrewise part, and [L1] identifies that part as a smooth subbundle. [F1, L1, step 1.1]

3.1 Therefore the Euclidean metric is a symmetric smooth two-tensor. [step 2.1] ∎