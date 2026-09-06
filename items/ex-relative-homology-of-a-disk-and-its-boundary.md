---
id: ex-relative-homology-of-a-disk-and-its-boundary
kind: example
title: "Relative homology of a disk and its boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-homology-connecting-homomorphism-on-cycles, cor-homology-of-spheres]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 2.17"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

For $n\ge1$, $H_k(D^n,S^{n-1};G)$ is $G$ for $k=n$ and zero otherwise. If
$c_g$ is the oriented relative fundamental cycle with coefficient $g\in G$,
our convention has $\delta[c_g]=[\partial c_g]$, the corresponding reduced
fundamental class of $S^{n-1}$.

## Facts & Assumptions

**Given:** The pair $(D^n,S^{n-1})$ with $n\ge1$.

## Verification

**Proof technique:** direct.

1.1 The disk is contractible, and the sphere has reduced homology only in degree $n-1$. [given, construct]

2.1 For $n>1$, exactness makes $\delta:H_n(D^n,S^{n-1};G)\to H_{n-1}(S^{n-1};G)$ an isomorphism. For $n=1$, it identifies the relative group with the augmentation kernel $\widetilde H_0(S^0;G)\subset H_0(S^0;G)$ rather than with all of $H_0(S^0;G)$. Exactness forces every other relative group to vanish, and the cycle formula gives $\delta[c_g]=[\partial c_g]$ with the stated sign. [step 1.1, algebra] ∎
