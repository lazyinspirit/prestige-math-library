---
id: ex-the-zero-differential-complex-has-homology-equal-to-each-term
kind: example
title: "A zero-differential complex has homology equal to each term"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homology-object-of-a-chain-complex,
       def-zero-and-stalk-complex,
       prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Example

Let $C_\bullet$ be a chain complex whose every differential is zero. Then
$H_n(C)\cong C_n$ for every $n$.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$ with $d_n=0$ for all $n$.

[L1] The zero complex and zero differentials are legitimate chain-complex data ([[def-zero-and-stalk-complex]]).

[L2] Homology is the quotient $Z_n(C)/B_n(C)$ ([[def-homology-object-of-a-chain-complex]]).

[L3] The identity of an object is a kernel of the zero map out of it, and also is a cokernel of the zero map into it ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

## Verification

**Proof technique:** direct.

1.1 Since $d_n=0$, [L3] identifies the cycle inclusion with $1_{C_n}:C_n\to C_n$, so $Z_n(C)\cong C_n$. Likewise the image of $d_{n+1}=0$ is the zero object, so the boundary object is $B_n(C)\cong 0$. [L1, L3, given, algebra]

2.1 Substituting those identities into [L2] gives $$H_n(C)=C_n/0\cong C_n.$$ [L2, step 1.1] ∎
