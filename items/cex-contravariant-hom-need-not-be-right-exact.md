---
id: cex-contravariant-hom-need-not-be-right-exact
kind: counterexample
title: "$\\operatorname{Hom}_{\\mathbb Z}(-,\\mathbb Z)$ need not preserve surjections on the right"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-groups-and-induced-hom-maps, thm-hom-functors-are-left-exact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement refuted

The contravariant functor $\operatorname{Hom}_{\mathbb Z}(-,\mathbb Z)$ need not carry a short exact sequence to a short exact sequence: it is left exact but need not be right exact.

## Facts & Assumptions

**Given:** The short exact sequence $0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$.

[F1] Precomposition induces the contravariant maps on Hom groups ([[def-hom-groups-and-induced-hom-maps]]).

[L1] Contravariant Hom is left exact ([[thm-hom-functors-are-left-exact]]).

## Counterexample

**Proof technique:** direct.

1.1 Every homomorphism $\mathbb Z/2\mathbb Z\to\mathbb Z$ is zero, because the image of its generator would be killed by two; and evaluation at $1$ identifies $\operatorname{Hom}_{\mathbb Z}(\mathbb Z,\mathbb Z)$ with $\mathbb Z$. [algebra]

1.2 Under this identification, precomposition with multiplication by two is the map $\mathbb Z\xrightarrow{\times2}\mathbb Z$, because $(f\circ(\times2))(1)=2f(1)$. [F1, algebra]

2.1 Applying the functor therefore produces $$0\to0\to\mathbb Z\xrightarrow{\times2}\mathbb Z,$$ which is exact as [L1] predicts but whose final map is not surjective. Thus the functor is not right exact. [step 1.1, step 1.2, L1] ∎
