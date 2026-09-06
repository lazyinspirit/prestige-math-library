---
id: ex-projective-dimension-of-a-cyclic-abelian-group
kind: example
title: "Projective dimension of a cyclic abelian group"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [lem-ext-one-of-z-mod-n-by-z-is-z-mod-n, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Use 0 -> Z --n--> Z -> Z/n -> 0 and the nonzero Ext^1 calculation to prove that Z/n has projective dimension one over Z.

## Facts & Assumptions

**Given:** $M=\mathbb Z/n\mathbb Z$ for an integer $n\ge2$.

## Verification

**Proof technique:** direct.

1.1 The exact sequence $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to M\to0$ is a projective resolution of length one, so $\operatorname{pd}_{\mathbb Z}M\le1$. [given, construct]

2.1 Applying $\operatorname{Hom}_{\mathbb Z}(-,\mathbb Z)$ gives $\operatorname{Ext}^1_{\mathbb Z}(M,\mathbb Z)\cong\mathbb Z/n\mathbb Z\ne0$. The higher-Ext criterion therefore rules out projective dimension zero, so $\operatorname{pd}_{\mathbb Z}M=1$. [step 1.1, algebra] ∎
