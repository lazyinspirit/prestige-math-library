---
id: thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order
kind: theorem
title: "If $k$ is algebraically closed and $\\operatorname{char} k \\nmid |G|$, the number of irreducible representations of $G$ equals the number of conjugacy classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field, lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices, cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes, thm-simple-modules-over-semisimple-rings, cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.4.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Corollary 3.6"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be an algebraically closed field with
$\operatorname{char} k \nmid |G|$. Then the number of irreducible
representations of $G$ over $k$, up to equivalence, is exactly the number of
conjugacy classes of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ and an algebraically closed field $k$ with $\operatorname{char} k \nmid |G|$.

[L1] Under these hypotheses, $$k[G]\cong\prod_{i=1}^m M_{n_i}(k)$$ for some positive integers $m,n_i$ ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]]).

[L2] For such a product ring, there is exactly one simple left module isomorphism class per factor ([[thm-simple-modules-over-semisimple-rings]]).

[L3] Under the dictionary, irreducible representations are exactly simple left $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L4] The center of $M_n(k)$ consists exactly of the scalar matrices ([[lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices]]).

[L5] The dimension of $Z(k[G])$ is the number of conjugacy classes of $G$ ([[cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], the dimension of $Z(k[G])$ is the number of conjugacy classes of $G$. [L5, given]

1.2 Write the product decomposition of [L1]. An element of a direct product is central exactly when each coordinate is central in its own factor, so [L4] gives $$Z(k[G])\cong Z\!\left(\prod_{i=1}^m M_{n_i}(k)\right)\cong \prod_{i=1}^m Z(M_{n_i}(k))\cong k^m.$$ Hence $\dim_k Z(k[G])=m$. By [L2], the product ring has exactly $m$ simple left module isomorphism classes, and [L3] translates these exactly into the irreducible representations of $G$. So the number of irreducible representations is also $m$. [L1, L2, L3, L4, given, algebra]

2.1 Steps 1.1 and 1.2 are the two computations of the same dimension, so the number of irreducible representations equals the number of conjugacy classes. [step 1.1, step 1.2] ∎
