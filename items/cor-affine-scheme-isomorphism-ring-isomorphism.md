---
id: cor-affine-scheme-isomorphism-ring-isomorphism
kind: corollary
title: "Affine-scheme isomorphisms are exactly coordinate-ring isomorphisms in reverse direction"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-scheme-ring-anti-equivalence]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.6.5"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Statement

An affine-scheme morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ is
an isomorphism if and only if its associated homomorphism $A\to B$ is an
isomorphism.

## Facts & Assumptions

**Given:** A morphism $u:\operatorname{Spec}B\to\operatorname{Spec}A$.

[F1] Affine spectra and commutative rings are contravariantly equivalent
([[thm-affine-scheme-ring-anti-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 If $u$ is an isomorphism, [F1] carries its inverse to an inverse of the associated ring map $A\to B$. [F1]

1.2 If $A\to B$ is an isomorphism, its inverse ring map induces the inverse of $u$. [F1]

2.1 These two implications prove the claim. [step 1.1, step 1.2] ∎
 
