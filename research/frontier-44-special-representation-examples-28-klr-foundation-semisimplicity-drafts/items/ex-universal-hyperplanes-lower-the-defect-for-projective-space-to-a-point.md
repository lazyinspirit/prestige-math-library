---
id: ex-universal-hyperplanes-lower-the-defect-for-projective-space-to-a-point
kind: example
title: "Universal hyperplanes lower the defect for projective space to a point"
status: draft
origin: session
deps: ["lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. For $f:\mathbb P^n\to\mathrm{pt}$ with $n\ge1$, the defect is $r(f)=n$. The universal hyperplane family maps to the dual space $(\mathbb P^n)^\vee$ with fibers $\mathbb P^{n-1}$ and has defect $n-1$.

## Verification

**Given:** the data and choice assumption in the Example.

1.1 The source dimension of $f$ is $n$, its only fiber has dimension $n$, and its image has dimension zero, giving $r(f)=2n-n=n$. The universal incidence is a projective-space bundle over $(\mathbb P^n)^\vee$ of fiber dimension $n-1$, so its source dimension is $2n-1$. [given, algebra]

2.1 The only fiber dimension in that family is $n-1$, hence its defect is $2(n-1)+n-(2n-1)=n-1$, strictly below $n$. This directly checks the positive-defect clause of [[lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness]], including $n=1$, where the family is the identity on the dual projective line. [step 1.1, algebra] ∎
