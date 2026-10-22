---
id: lem-cdr-smooth-s4-complement-is-standard-ball
kind: lemma
title: "The CDR smooth four-ball complement under the smooth four-sphere hypothesis"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-smooth-4-ball-embedded-in-s4-has-standard-complement
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§3, smooth complement step in the weak-injectivity proof"
---

## Statement

Let B be a smooth 4-ball embedded in the standard smooth 4-sphere S⁴. The closure of S⁴\B is diffeomorphic to the standard 4-ball. This is the special smooth Schoenflies complement assertion used after a capped contractible 4-manifold has been identified with standard S⁴; it does not assert the smooth 4-dimensional Poincaré conjecture.

## Statement references

[CDR, proof of Proposition 3.2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A smooth embedded standard four-ball $B$ in the standard smooth sphere $S^4$.

[F1] The complement of a smoothly embedded standard four-ball in the standard smooth four-sphere is standard, by shrinking the whole parametrized ball and extending its isotopy. [[thm-smooth-4-ball-embedded-in-s4-has-standard-complement]]

## Proof

1.1 Choose a diffeomorphism $b:B^4\to B$, where the existence of this parametrization is part of saying that $B$ is a smooth four-ball. Compose it with the given embedding into $S^4$ to obtain a smooth embedding $f:B^4\hookrightarrow S^4$. This supplies an embedded standard side, rather than merely a boundary three-sphere or a contractible complementary manifold. [given, construct]

2.1 Apply [F1] to $f$. It gives a diffeomorphism from $\overline{S^4\setminus f(B^4)}=\overline{S^4\setminus B}$ to the standard $B^4$, as claimed. No smooth Poincaré assertion is needed for this complement step; any earlier identification of a capped ambient manifold with standard $S^4$ is a separate hypothesis of the application. [F1, step 1.1] ∎
