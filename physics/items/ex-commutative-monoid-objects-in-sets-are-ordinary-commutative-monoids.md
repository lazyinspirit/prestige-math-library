---
id: ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids
kind: example
title: "Commutative monoid objects in sets are ordinary commutative monoids"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense, cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

A commutative monoid object in $(\mathbf{Set},\times)$ is exactly an ordinary
commutative monoid.

## Facts & Assumptions

**Given:** Sets with cartesian product.

[L1] Monoid objects in a cartesian monoidal category are ordinary monoids on the underlying sets ([[thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense]]).

[L2] In a symmetric monoidal category, monoid objects inherit a symmetric tensor product, so commutativity is expressed by invariance under the symmetry ([[cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], a monoid object in $(\mathbf{Set},\times)$ is a set $M$ with a multiplication map $m:M\times M\to M$ and a unit element satisfying the usual associative and unital equations. [L1, given]

2.1 The symmetry on $\mathbf{Set}$ is the swap map $(a,b)\mapsto(b,a)$, so the categorical commutativity condition says $m(a,b)=m(b,a)$ for all $a,b\in M$. By [L2], that is exactly the ordinary commutativity law. [L2, step 1.1, algebra] ∎
