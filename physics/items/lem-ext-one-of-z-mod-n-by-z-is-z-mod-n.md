---
id: lem-ext-one-of-z-mod-n-by-z-is-z-mod-n
kind: lemma
title: "Ext one of Z modulo n by Z is Z modulo n"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable, thm-free-modules-are-projective-with-choice-boundary]
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
## Statement

Assume the Axiom of Dependent Choice and fix the supplied resolution data used
for balanced Ext in $\mathbf{Ab}$.
For $n>1$, $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)\cong\mathbb Z/n$; in particular it is nonzero.

## Facts & Assumptions

**Given:** The projective resolution $0\to\mathbb Z\xrightarrow n\mathbb Z\to\mathbb Z/n\to0$.

## Proof

**Proof technique:** direct.

1.1 Applying $\operatorname{Hom}_{\mathbb Z}(-,\mathbb Z)$ gives $0\to\mathbb Z\xrightarrow n\mathbb Z\to0$, in cohomological degrees $0,1$. [given, construct]

2.1 Its first cohomology is $\operatorname{coker}(n:\mathbb Z\to\mathbb Z)=\mathbb Z/n$. [[cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]] identifies this cohomology with $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)$. Since $n>1$, the quotient is nonzero. [step 1.1, algebra] ∎
