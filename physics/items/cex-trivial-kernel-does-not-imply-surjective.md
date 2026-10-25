---
id: cex-trivial-kernel-does-not-imply-surjective
kind: counterexample
title: 'The doubling endomorphism of $(\mathbb Z,+)$ has trivial kernel but is not surjective'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-group-homomorphism-injective-iff-trivial-kernel, def-group-homomorphism, def-injection-surjection-bijection, thm-int-comm-ring]
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

## Statement refuted

An additive group homomorphism with trivial kernel must be surjective.

## Facts & Assumptions

**Given:** The map $d:(\mathbb Z,+)\to(\mathbb Z,+)$ defined by $d(m)=2m$.

[L1] A group homomorphism is injective exactly when its kernel is trivial ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L2] A group homomorphism preserves the group operation ([[def-group-homomorphism]]).

[L3] Surjectivity means that every codomain element is an image value ([[def-injection-surjection-bijection]]).

[L4] $\mathbb Z$ is an additive group with cancellation ([[thm-int-comm-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 The equality $d(a+b)=2a+2b=d(a)+d(b)$ makes $d$ a group homomorphism. [L1, L2, L3, L4, given, algebra]

2.1 If $d(m)=0$, then $2m=0$ and integer cancellation gives $m=0$, so $\ker d=\{0\}$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 But $1$ is not even and hence is not in the image of $d$, refuting the stated implication. [step 2.1] ∎
