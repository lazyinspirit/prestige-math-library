---
id: ex-ext-from-a-two-term-projective-resolution
kind: example
title: "Ext from a two-term projective resolution"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-a-projective-resolution-of-the-first-variable, cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

Apply Hom(-,N) to a displayed two-term projective resolution and identify Ext^0 and Ext^1 as its kernel and cokernel, with higher groups zero.

## Facts & Assumptions

**Given:** An exact sequence $0\to P_1\xrightarrow{u}P_0\to M\to0$ with $P_0,P_1$ projective, and an object $N$.

## Verification

**Proof technique:** direct.

1.1 Applying $\operatorname{Hom}(-,N)$ gives the cochain complex $0\to\operatorname{Hom}(P_0,N)\xrightarrow{u^*}\operatorname{Hom}(P_1,N)\to0$, where $u^*(f)=f\circ u$. Its degree-zero kernel is $\operatorname{Hom}(M,N)$. [given, algebra]

2.1 Consequently $\operatorname{Ext}^1(M,N)=\operatorname{coker}u^*$, while $\operatorname{Ext}^q(M,N)=0$ for $q\ge2$ because the displayed complex has no terms in those degrees. The projective-resolution computation is independent of this chosen two-term resolution. [step 1.1, algebra] ∎
