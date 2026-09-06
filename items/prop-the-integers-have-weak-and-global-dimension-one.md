---
id: prop-the-integers-have-weak-and-global-dimension-one
title: "The integers have weak and global dimension one"
kind: proposition
status: draft
origin: pipeline
deps: ["thm-the-integers-have-global-dimension-one", "thm-higher-tor-over-the-integers-vanishes", "thm-over-a-pid-flat-is-equivalent-to-torsion-free"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Both weak global dimension and global dimension of $\mathbb Z$ are $1$.

## Proof

**Given:** the length-one projective resolutions over $\mathbb Z$ and the module $\mathbb Z/n$ for $n>1$.

1.1 Every abelian group has projective, hence flat, dimension at most one; therefore both dimensions are at most one. [given]

2.1 The group $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/n,\mathbb Z/n)\cong\mathbb Z/n$ is nonzero. [step 1.1, algebra]

3.1 The nonzero degree-one Tor forces weak global dimension at least one, while the known nonzero $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)$ forces global dimension at least one. [step 2.1, algebra] ∎
