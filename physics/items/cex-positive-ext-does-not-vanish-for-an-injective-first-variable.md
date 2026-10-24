---
id: cex-positive-ext-does-not-vanish-for-an-injective-first-variable
kind: counterexample
title: "Positive Ext need not vanish for an injective first variable"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [fs-positive-ext-vanishes-whenever-either-variable-is-injective, def-balanced-ext-bifunctor]
generation:
  role: counterexample
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
## Statement refuted

Use Q/Z as an injective abelian group in the first variable and calculate a nonzero Ext^1 against a suitable second variable, separating the correct variance from the false symmetry.

## Facts & Assumptions

**Given:** The abelian category of abelian groups and the short exact sequence $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$.

## Counterexample

**Proof technique:** direct.

1.1 The group $\mathbb Q/\mathbb Z$ is divisible, hence injective, so it is an injective object in the first variable. The displayed sequence is an extension of $\mathbb Q/\mathbb Z$ by $\mathbb Z$. [given, algebra]

2.1 This extension does not split: a retraction $r:\mathbb Q\to\mathbb Z$ would satisfy $r|_{\mathbb Z}=1$, whereas every homomorphism $\mathbb Q\to\mathbb Z$ is zero (if $r(1)=a$, then $a=r(1/m)m$ is divisible by every $m$). Hence it represents a nonzero element of $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Q/\mathbb Z,\mathbb Z)$, refuting the asserted first-variable vanishing. [step 1.1, algebra] ∎
