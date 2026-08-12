---
id: cor-fields-of-fractions-are-unique-over-the-domain
kind: corollary
title: 'Fields of fractions are uniquely isomorphic over their embedded domain'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-universal-property-of-the-field-of-fractions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Statement

Let $D$ be an integral domain. Suppose $K$ and $L$ are fields containing embedded copies of $D$, and every element of either field is a quotient of two elements from that copy with nonzero denominator. Then there is a unique field isomorphism $K\to L$ fixing $D$ pointwise.

## Facts & Assumptions

**Given:** Fields $K,L$ with the stated embeddings and quotient-generation property.

[F1] An injective map from a domain into a field extends uniquely to an injective homomorphism from its field of fractions, with $a/b$ sent to the corresponding quotient ([[thm-universal-property-of-the-field-of-fractions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the embeddings of $D$ produce injective homomorphisms $\phi:\operatorname{Frac}(D)\to K$ and $\psi:\operatorname{Frac}(D)\to L$. Their images contain every quotient of embedded elements of $D$, so the quotient-generation hypothesis makes both maps surjective. [F1]

2.1 The composite $\psi\phi^{-1}:K\to L$ is therefore a field isomorphism fixing $D$. If $\theta:K\to L$ also fixes $D$, then for every $a/b\in K$ one has $\theta(a/b)=a/b$, so $\theta=\psi\phi^{-1}$. [step 1.1, algebra] ∎
