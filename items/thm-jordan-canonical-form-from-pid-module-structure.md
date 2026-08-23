---
id: thm-jordan-canonical-form-from-pid-module-structure
kind: theorem
title: "Jordan canonical form from the elementary divisors of $V_T$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primary-decomposition-and-elementary-divisor-form-over-a-pid, def-invariant-factors-and-elementary-divisors-of-an-endomorphism, lem-linear-primary-companion-block-is-similar-to-a-jordan-block, def-jordan-canonical-form, thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid, cor-product-of-invariant-factors-is-the-characteristic-polynomial]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Corollary 38"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 7.4"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional $F$-vector space whose characteristic polynomial splits over $F$. If the elementary divisors of $V_T$ are $(x-\lambda)^e$, then $T$ has a Jordan canonical form with one block $J_e(\lambda)$ for each elementary divisor. The multiset of blocks is unique, and conversely each Jordan block yields its corresponding cyclic primary module. The zero space has empty lists.

## Facts & Assumptions

**Given:** Endomorphism elementary divisors from [[def-invariant-factors-and-elementary-divisors-of-an-endomorphism]], Jordan canonical form as in [[def-jordan-canonical-form]], and uniqueness of PID elementary divisors ([[thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid]]).

[L1] A finitely generated torsion PID module is the direct sum of its prime-power cyclic elementary-divisor summands ([[thm-primary-decomposition-and-elementary-divisor-form-over-a-pid]]).

[L2] $C((x-\lambda)^e)$ is similar to $J_e(\lambda)$ ([[lem-linear-primary-companion-block-is-similar-to-a-jordan-block]]).

[L3] The product of the invariant factors of $T$ is its characteristic polynomial ([[cor-product-of-invariant-factors-is-the-characteristic-polynomial]]).

## Proof

**Proof technique:** constructive.

1.1 By [L3], every invariant factor divides the split polynomial $\chi_T$, so every irreducible factor occurring in an elementary divisor is linear. By [L1], $V_T$ is the direct sum of cyclic modules $F[x]/((x-\lambda)^e)$, one for each elementary divisor. [L1, L3, given]

2.1 On each cyclic summand, multiplication by $x$ has companion matrix $C((x-\lambda)^e)$, which [L2] turns by a basis change into $J_e(\lambda)$. Concatenating these bases constructs a Jordan basis for $T$. [step 1.1, L2, construct]

3.1 Every Jordan block gives the reverse cyclic module $F[x]/((x-\lambda)^e)$, and uniqueness of elementary divisors gives uniqueness of the block multiset up to order. Empty elementary-divisor data gives the empty Jordan form on the zero space. [step 2.1, given, discharge-construct] ∎

## Remarks

This proof obtains the blocks from the $F[x]$-module structure. The published criterion [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]] obtains existence through generalized eigenspaces and Jordan strings.
