---
id: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers
title: "Weak and global dimension for a field and the integers"
kind: example
status: published
origin: pipeline
deps: ["prop-the-integers-have-weak-and-global-dimension-one", "thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For a field $k$, both dimensions are $0$; for $\mathbb Z$, both weak and global dimension are $1$.

## Verification

**Given:** the module categories over $k$ and over $\mathbb Z$.

1.1 Every vector space is free and hence projective, so every $k$-module has projective and flat dimension $0$. [given]

2.1 Every abelian group has a length-one free resolution, giving both dimensions of $\mathbb Z$ at most $1$. [step 1.1, algebra]

3.1 The nonzero group $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/2,\mathbb Z/2)$ gives the lower bound $1$ for weak dimension, and nonzero $\operatorname{Ext}^1$ gives the global lower bound. [step 2.1, algebra] ∎
