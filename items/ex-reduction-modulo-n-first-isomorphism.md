---
id: ex-reduction-modulo-n-first-isomorphism
kind: example
title: 'For $n\ge2$, reduction $\mathbb Z\to\mathbb Z/n$ has kernel $n\mathbb Z$ and realises $\mathbb Z/n$ by the first isomorphism theorem'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-first-isomorphism-theorem-groups, prop-integers-modulo-n-as-a-quotient-group, def-group-homomorphism, def-kernel-and-image-of-group-homomorphism, thm-int-comm-ring]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Example

For $n\ge2$, reduction $\mathbb Z\to\mathbb Z/n$ has kernel $n\mathbb Z$ and realises $\mathbb Z/n$ by the first isomorphism theorem.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and $\rho_n:\mathbb Z\to\mathbb Z/n$, $\rho_n(a)=[a]_n$.

[L1] The first isomorphism theorem identifies a group modulo a homomorphism kernel with its image ([[thm-first-isomorphism-theorem-groups]]).

[L2] $(\mathbb Z,+)/n\mathbb Z$ is the congruence-class group $(\mathbb Z/n,+)$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L3] A group homomorphism preserves the operation ([[def-group-homomorphism]]).

[L4] The kernel is the inverse image of the identity ([[def-kernel-and-image-of-group-homomorphism]]).

[L5] The integers form a commutative ring, hence an additive group ([[thm-int-comm-ring]]).

## Verification

**Proof technique:** direct.

1.1 Since $[a+b]_n=[a]_n+[b]_n$, $\rho_n$ is a homomorphism of additive groups. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its kernel is $\{a:[a]_n=[0]_n\}=n\mathbb Z$, and every residue class is $\rho_n(a)$. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 Therefore the kernel and image calculation yields $\mathbb Z/n\mathbb Z\cong\mathbb Z/n$. [step 2.1] ∎
