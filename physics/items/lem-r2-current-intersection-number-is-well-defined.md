---
id: lem-r2-current-intersection-number-is-well-defined
kind: lemma
title: "The current-compatible intersection number is well-defined"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-current-compatible-intersection-number
  - lem-r2-transverse-complementary-cycles-have-finite-intersection
dependency_roles:
  def-r2-current-compatible-intersection-number: mathematical-premise
  lem-r2-transverse-complementary-cycles-have-finite-intersection: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology, Definition 4.3.1"
      url: "https://umutvg.github.io/difftop.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

For the compact transverse complementary submanifolds in [[def-r2-current-compatible-intersection-number]], the displayed sum is a finite integer and does not depend on the positive bases used to compute its local signs.

## Statement references

[[def-r2-current-compatible-intersection-number]]

## Facts & Assumptions

**Given:** The oriented ambient manifold and the compact embedded submanifolds from the definition.

[F1] [[def-r2-current-compatible-intersection-number]] defines each local sign by the determinant map induced by $T_xC\oplus T_xD\to T_xX$, comparing the image of the tensor orientation ray with the ambient orientation ray, and multiplies the finite sum by $(-1)^{pq}$.

[F2] [[lem-r2-transverse-complementary-cycles-have-finite-intersection]] proves that $C\cap D$ is finite under the stated compactness and transversality hypotheses.

## Proof

**Given:** The orientation rays and the hypotheses of [F1].

1.1 By [F2], only finitely many points occur in the sum in [F1]. At each such point, transversality and complementary dimensions make the addition map on tangent spaces an isomorphism. Its determinant-line map sends the tensor of the two orientation rays to exactly one of the ambient orientation ray and its opposite, so $\sigma_x(C,D)$ is uniquely determined. When positive-dimensional bases are used to represent the rays, replacing either basis by another positive basis preserves its ray and therefore preserves this sign; zero-dimensional orientation signs are already carried by their rays. [F1, F2, given]

2.1 By [F1], each local sign is $+1$ or $-1$ and the finite sum has the fixed factor $(-1)^{pq}$. That factor is independent of all basis choices, so the current-compatible intersection number is well-defined. Empty intersection gives the empty sum $0$. [F1, step 1.1, algebra] ∎

## Statement references

[[lem-r2-transverse-complementary-cycles-have-finite-intersection]]

