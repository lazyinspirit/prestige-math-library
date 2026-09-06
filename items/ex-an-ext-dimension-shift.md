---
id: ex-an-ext-dimension-shift
kind: example
title: "An Ext dimension shift"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [thm-ext-dimension-shifting-in-the-first-variable, thm-free-modules-are-projective-with-choice-boundary]
generation:
  role: example
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

Use the displayed cyclic-group projective presentation to identify Ext^{n+1}(M,N) with Ext^n(Omega M,N), distinguishing the low-degree exact segment.

## Facts & Assumptions

**Given:** $M=\mathbb Z/n\mathbb Z$ with $n\ge2$, its presentation $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to M\to0$, and an abelian group $N$.

## Verification

**Proof technique:** direct.

1.1 The first syzygy of $M$ for this presentation is $\Omega M\cong\mathbb Z$, which is free and hence projective. The low-degree portion of the long exact sequence is $0\to\operatorname{Hom}(M,N)\to N\xrightarrow{n}N\to\operatorname{Ext}^1(M,N)\to0$. [given, algebra]

2.1 For every $q\ge1$, dimension shifting gives $\operatorname{Ext}^{q+1}(M,N)\cong\operatorname{Ext}^{q}(\mathbb Z,N)=0$. This does not replace the displayed low-degree segment: its cokernel is the generally nonzero group $N/nN=\operatorname{Ext}^1(M,N)$. [step 1.1, algebra] ∎
