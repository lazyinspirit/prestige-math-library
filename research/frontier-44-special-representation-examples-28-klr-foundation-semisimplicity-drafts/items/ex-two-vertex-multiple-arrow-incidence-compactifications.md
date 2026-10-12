---
id: ex-two-vertex-multiple-arrow-incidence-compactifications
kind: example
title: "Multiple-arrow incidence compactifications in dimension one at each vertex"
status: draft
origin: session
deps: ["lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Take two vertices $i,j$, $h\ge0$ arrows $i\to j$, no other arrows, and $\beta_i=\beta_j=1$. Then $E_V=\mathbb C^h$. For the increasing word $(i,j)$ the stable incidence is the point $x=0$; for the word $(j,i)$ it is all of $\mathbb C^h$.

## Verification

**Given:** the data and choice assumption in the Example.

1.1 In either word the graded flag base is a point. For $(i,j)$ the source basis vector occurs before the target, so every arrow coordinate is forbidden by stability; hence the vectorbundle rank is zero. For $(j,i)$ every arrow coordinate is allowed, so the vectorbundle rank is $h$. These are the explicit rank counts of [[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]]. [given, algebra]

2.1 The line-projective compactifications are respectively the point $[0:1]\subset\mathbb P^h$ and the identity $\mathbb P^h\to\mathbb P^h$. Their inverse images of $t\ne0$ are exactly the two stated affine incidence maps. The case $h=0$ gives two point maps, and arbitrary $h$ verifies the full multiplicity scope. [step 1.1, algebra] ∎
