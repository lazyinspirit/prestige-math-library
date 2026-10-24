---
id: ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group
kind: example
title: "Ext of a cyclic abelian group by an abelian group"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [ex-ext-from-a-two-term-projective-resolution, lem-ext-one-of-z-mod-n-by-z-is-z-mod-n]
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-06
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

Use the resolution 0 -> Z --n--> Z -> Z/n -> 0 to calculate Ext^1_Z(Z/n,A)=A/nA and show the higher terms vanish.

## Facts & Assumptions

**Given:** An abelian group $A$ and an integer $n\ge2$.

## Verification

**Proof technique:** direct.

1.1 The sequence $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\mathbb Z\to0$ is a projective resolution: multiplication by $n$ is injective and its cokernel is $\mathbb Z/n\mathbb Z$. Applying $\operatorname{Hom}_{\mathbb Z}(-,A)$ gives $0\to A\xrightarrow{n}A\to0$. [given, algebra]

2.1 Therefore $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n\mathbb Z,A)=\operatorname{coker}(n:A\to A)=A/nA$, and the same two-term complex has zero cohomology in every degree $q\ge2$. [step 1.1, algebra] ∎
