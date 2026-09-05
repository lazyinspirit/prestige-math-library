---
id: ex-homology-as-a-homological-delta-functor
kind: example
title: "Homology as a homological delta functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homological-delta-functor, def-homological-delta-functor-carried-by-homology-of-complexes, prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Fix an abelian category $\mathcal A$. For chain complexes in $\mathcal A$ that
vanish in negative degrees, the family
$$H_n:\operatorname{Ch}_{\geq0}(\mathcal A)\to\mathcal A,\qquad n\geq 0,$$
together with the usual connecting morphisms of homology, is a homological
delta functor.
## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and its abelian category of
nonnegatively graded chain complexes.

[L1] This page's concrete homology family is the candidate homological delta
functor
([[def-homological-delta-functor-carried-by-homology-of-complexes]]).

[L2] Homology of complexes satisfies the exactness and naturality axioms
([[prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws]]).

[L3] A homological delta functor is exactly such a family of additive functors
with natural connecting maps
([[def-homological-delta-functor]]).

## Verification

**Proof technique:** direct.

1.1 Restrict the integer-indexed homology family of [L1] to complexes that vanish in negative degrees. This full subcategory is closed under kernels and cokernels degreewise, hence is abelian, and its short exact sequences have $H_{-1}=0$. [L1, given]

2.1 The exactness and naturality axioms required in [L3] are supplied by [L2]; step 1.1 makes the integer-indexed long sequence terminate as $H_0(C)\to0$. Therefore the restricted family is a homological delta functor indexed by $n\geq0$. [L2, L3, step 1.1] ∎
