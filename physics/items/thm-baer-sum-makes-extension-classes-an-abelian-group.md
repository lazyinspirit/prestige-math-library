---
id: thm-baer-sum-makes-extension-classes-an-abelian-group
kind: theorem
title: "Baer sum makes extension classes an abelian group"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-split-extension-class, def-baer-sum-of-extension-classes, lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]
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

For fixed $M,N$ in an abelian category, assume that the equivalence classes of
extensions of $M$ by $N$ form a set. With Baer sum, that set is an abelian
group. Its zero is the split extension and the inverse of a class is its
pushout along $-1_N$.

## Facts & Assumptions

**Given:** The set of extension classes of $M$ by $N$.

## Proof

**Proof technique:** direct.

1.1 [[lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives]] makes the operation well-defined. The associativity and symmetry maps of finite biproducts transport the two iterated diagonal-pullback/codiagonal-pushout constructions into equivalent extensions; the required additive identities are those in [[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]. [given, construct]

2.1 The split extension is neutral because its diagonal pullback and codiagonal pushout recover the original extension. Pushing out an extension along $-1_N$ gives the inverse: the codiagonal of $1_N$ and $-1_N$ is zero, hence the resulting Baer sum is split. [step 1.1, algebra] ∎
