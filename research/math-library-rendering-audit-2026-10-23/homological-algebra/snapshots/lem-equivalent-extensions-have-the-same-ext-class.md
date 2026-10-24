---
id: lem-equivalent-extensions-have-the-same-ext-class
kind: lemma
title: "Equivalent extensions have the same Ext class"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-class-of-an-extension-in-derived-ext-one, def-equivalence-of-extensions, thm-long-exact-ext-sequence-in-the-second-variable]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Equivalent extensions of $M$ by $N$ determine the same class in $\operatorname{Ext}^1(M,N)$.

## Facts & Assumptions

**Given:** An endpoint-identity morphism between two short exact sequences $0\to N\to E\to M\to0$.

## Proof

**Proof technique:** direct.

1.1 Naturality of the long exact Ext sequence gives a commutative square between the two connecting maps $\operatorname{Hom}(M,M)\to\operatorname{Ext}^1(M,N)$. [given, construct]

2.1 The endpoint maps are identities, so the square sends $1_M$ to the same element on both sides.  These two images are the two extension classes. [step 1.1, algebra] ∎
