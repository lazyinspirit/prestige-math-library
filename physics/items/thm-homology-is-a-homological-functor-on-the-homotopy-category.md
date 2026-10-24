---
id: thm-homology-is-a-homological-functor-on-the-homotopy-category
kind: theorem
title: "Homology is a homological functor on the homotopy category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-homotopy-category-of-an-abelian-category-is-triangulated, def-homological-functor-on-a-triangulated-category, thm-homology-factors-uniquely-through-the-homotopy-category, thm-the-cone-long-exact-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Lemma 10.1.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

Let $\mathcal A$ be an abelian category.  For every $n\in\mathbb Z$, the
functor $H_n:K(\mathcal A)\to\mathcal A$ is homological.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and a standard cone triangle in $K(\mathcal A)$.

## Proof

1.1 The cone long exact sequence identifies $H_n(C)\to H_n(D)\to H_n(\operatorname{Cone}(f))$ as an exact sequence, and homology factors through $K(\mathcal A)$. [given]

2.1 By definition, a distinguished triangle is isomorphic to a standard cone triangle.  Functoriality of $H_n$ transports the exact three-term sequence in step 1.1 across such an isomorphism, which is exactly the homological-functor condition. [step 1.1, given] ∎
