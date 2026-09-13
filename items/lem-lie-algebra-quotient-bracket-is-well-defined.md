---
id: lem-lie-algebra-quotient-bracket-is-well-defined
kind: lemma
title: The quotient Lie-algebra bracket is well-defined
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-subalgebra-ideal-and-center, def-quotient-module, thm-quotient-module-laws]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.3, before Lemma 5.17"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Let $\mathfrak i\trianglelefteq\mathfrak g$. The rule

$$[x+\mathfrak i,y+\mathfrak i]=[x,y]+\mathfrak i$$

is independent of representatives, is bilinear and alternating, and satisfies
the Jacobi identity on the quotient vector space $\mathfrak g/\mathfrak i$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ over $k$ and an ideal
$\mathfrak i\trianglelefteq\mathfrak g$.

[L1] An ideal is a linear subspace closed under brackets with arbitrary elements
of $\mathfrak g$ ([[def-lie-subalgebra-ideal-and-center]]).

[L2] The additive cosets form the quotient module and its vector-space operations
are independent of representatives ([[def-quotient-module]],
[[thm-quotient-module-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $x'=x+a$ and $y'=y+b$ with $a,b\in\mathfrak i$, bilinearity gives $[x',y']-[x,y]=[a,y]+[x,b]+[a,b]$. Every term belongs to $\mathfrak i$ by [L1], so $[x',y']+\mathfrak i=[x,y]+\mathfrak i$. [given, L1, algebra]

2.1 Bilinearity of the quotient bracket follows by choosing representatives, using bilinearity in $\mathfrak g$, and using [L2] for coset addition and scalar multiplication; step 1.1 makes the result independent of those choices. [step 1.1, L2, algebra]

2.2 For every $x$, one has $[x+\mathfrak i,x+\mathfrak i]=[x,x]+\mathfrak i=\mathfrak i$, so the descended bracket is alternating. [given, step 1.1]

2.3 For three cosets, their cyclic Jacobi sum is the coset of $[x,{[y,z]}]+[y,{[z,x]}]+[z,{[x,y]}]$, which is zero in $\mathfrak g$ and hence is the zero coset. Thus Jacobi descends. [given, step 1.1, algebra]

3.1 Therefore the displayed rule has all Lie identities. For $\mathfrak i=0$ it is the original bracket, and for $\mathfrak i=\mathfrak g$ it is the unique bracket on the zero space; no choice of representatives is made in either case or in the argument above. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
