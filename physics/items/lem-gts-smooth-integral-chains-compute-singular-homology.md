---
id: lem-gts-smooth-integral-chains-compute-singular-homology
kind: lemma
title: Smooth integral chains compute singular homology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
proof_strategy: direct
axiom_strength: ZF + AC_omega
deps:
  - def-gts-smooth-integral-singular-chain-complex
  - thm-smooth-singular-chains-compute-singular-homology
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  thm-smooth-singular-chains-compute-singular-homology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.5, PDF pp. 67–68, uses the smooth singular chain complex.
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 2.3, PDF pp. 8–10, smooth singular differential cochains.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. For every finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary, inclusion of the smooth integral singular chain complex into the ordinary integral singular chain complex induces an isomorphism $H_k^\infty(M;\mathbb Z)\cong H_k(M;\mathbb Z)$ in every degree. The isomorphism is natural for smooth maps.

## Statement references

[[def-gts-smooth-integral-singular-chain-complex]]

[[thm-smooth-singular-chains-compute-singular-homology]]

## Facts & Assumptions

**Given:** The manifold $M$, the inclusion of the smooth chain subcomplex, and $\mathrm{AC}_\omega$.

[F1] [[def-gts-smooth-integral-singular-chain-complex]]: the integral smooth chain groups are free on smooth simplices and form a subcomplex.

[F2] [[thm-smooth-singular-chains-compute-singular-homology]]: under $\mathrm{AC}_\omega$, finite continuous chains can be replaced by smooth chains through face-compatible smoothing and prism homotopies; its stated coefficient group is $\mathbb R$.

[F3] [[def-countable-choice]]: $\mathrm{AC}_\omega$ supplies the countable choices used by the smoothing construction.

## Proof

**Given:** $M$, the integral chain complexes in the statement, and $\mathrm{AC}_\omega$.

1.1 The proof of [F2] performs replacements on finitely many simplices and their faces, and its homotopy identity is a signed finite sum of faces and prisms. Every coefficient in that construction is $0$, $1$, or $-1$; no division or real scalar operation is used. The same replacement and prism formulas therefore define integral chains, commute with the integral boundary, and satisfy the identical chain-homotopy identity generator by generator. [F1, F2, F3, given]

2.1 Let $z$ be an ordinary integral cycle. Apply the finite smoothing construction of [F2] to its support and all faces. It yields a smooth integral cycle $Qz$ and a finite integral chain $Pz$ with $Qz-z=\partial(Pz)$. Thus every ordinary integral homology class has a smooth integral representative. [F1, F2, step 1.1]

2.2 Now let a smooth integral cycle $z$ bound an ordinary integral chain $b$. Apply the construction to the finite supports of $z$ and $b$, using the fixed-face clause on every already-smooth simplex of $z$. Then $Qz=z$ and $\partial(Qb)=Q(\partial b)=Qz=z$. Hence $z$ already bounds a smooth integral chain. [F1, F2, step 1.1]

3.1 The inclusion is a chain map by the subcomplex statement [F1], so it induces a homomorphism on homology. Step 2.1 proves surjectivity and step 2.2 proves injectivity. Postcomposition by a smooth map commutes with inclusion on each simplex, so the induced isomorphism is natural. The empty manifold and negative degrees have zero chain groups on both sides. [F1, step 2.1, step 2.2] ∎
