---
id: ex-product-ring-coordinate-ideal-and-quotient
kind: example
title: '$R\times\{0\}$ is the kernel of $R\times S\to S$, so $(R\times S)/(R\times\{0\})\cong S$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-ring, def-ring-homomorphism, thm-ring-homomorphism-kernel-is-an-ideal, thm-first-isomorphism-theorem-rings, def-left-right-and-two-sided-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Example

$R\times\{0\}$ is the kernel of $R\times S\to S$, so $(R\times S)/(R\times\{0\})\cong S$.

## Facts & Assumptions

**Given:** Rings $R,S$ and the coordinate projection $p:R\times S\to S$, $p(r,s)=s$.

[L1] The product ring has coordinatewise operations ([[def-product-ring]]).

[L2] A ring homomorphism preserves operations and identity ([[def-ring-homomorphism]]).

[L3] A ring-homomorphism kernel is a two-sided ideal ([[thm-ring-homomorphism-kernel-is-an-ideal]]).

[L4] The first ring isomorphism theorem gives quotient-by-kernel isomorphisms ([[thm-first-isomorphism-theorem-rings]]).

[L5] Ideals are additive subgroups with absorption ([[def-left-right-and-two-sided-ideal]]).

## Verification

**Proof technique:** direct.

1.1 Coordinatewise operations make $p$ a surjective ring homomorphism. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its kernel is exactly $\{(r,0):r\in R\}=R\times\{0\}$, which is therefore an ideal. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 The kernel calculation yields $(R\times S)/(R\times\{0\})\cong S$. [step 2.1] ∎
