---
id: thm-gts-quiver-stability-scattering-diagram
kind: theorem
title: Quiver stability scattering diagram
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-motivic-hall-scattering-data
  - def-gts-quiver-jacobian-king-theta-stability-data
  - lem-gts-hall-hn-and-regular-potential-integration
dependency_roles:
  def-gts-motivic-hall-scattering-data: mathematical-premise
  def-gts-quiver-jacobian-king-theta-stability-data: mathematical-premise
  lem-gts-hall-hn-and-regular-potential-integration: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Tom Bridgeland, Scattering diagrams, Hall algebras and stability conditions
      url: https://arxiv.org/pdf/1603.00416v4
      locator: Theorem 1.1; complete Sections 2–6.5 and 11.1–11.2; local HN, framed no-poles and mixed-Hessian integration proof supplied in the attached Hall lemma
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $Q$ be a finite 2-acyclic quiver, let $W$ be a finite potential, and let $\mathcal A=\operatorname{mod}_{\mathrm{fd}}J(Q,W)$ with the source motivic Hall scattering data fixed in the earlier definitions on this page. The source constructs a consistent scattering diagram $D$ in $M_{\mathbb R}$ with values in the completed Hall Lie group of $\mathcal A$. Its support is exactly the set of weights $\theta$ for which a nonzero $\theta$-semistable object exists. At a general point of a wall with normal dimension vector $d$, its wall-crossing element is the source semistable Hall element; after the source potential-case Euler-characteristic integration, it is $\exp\big(\sum_{\theta(d)=0}J(d,\theta)x^d\big)$, with $J(d,\theta)$ the source Joyce invariant. This is a theorem about the abelian Jacobian-representation category and its motivic Hall completion; it does not infer a Bridgeland slicing on a triangulated category or a general Calabi–Yau threefold DT integration theorem.

## Statement references

[[def-gts-quiver-jacobian-king-theta-stability-data]]

[[def-gts-motivic-hall-scattering-data]]

## Facts & Assumptions

**Given:** the exact quiver/potential and source Hall/coefficient/King conventions of the Statement, with inherited AC/DC.

[F1] [[def-gts-quiver-jacobian-king-theta-stability-data]] and [[def-gts-motivic-hall-scattering-data]] fix the actual data and dimension completion.

[F2] [[lem-gts-hall-hn-and-regular-potential-integration]] proves the HN factorization, finite-truncation triangular reconstruction and exact support, the regular logarithm and the potential-case Euler-Poisson homomorphism, with subobject-first order and the stated skew form.

## Proof

1.1 Work first modulo total dimension greater than k. The HN identity of [F2] gives $1_{A}=g_+(θ)1_{ss}(θ)g_−(θ)$, the unique positive/zero/negative factorization in the nilpotent Hall group. Assign its middle factor to the walls of the finite rational hyperplane subdivision. The source path convention has exponent the negative crossing sign and multiplies the last crossing first; its path product is g_+(end)^(−1)g_+(start). It therefore depends only on endpoints and is the identity on closed generic paths. [F1, F2, given, construct, algebra]

2.1 The diagrams for increasing k agree after truncation because their Hall factors are the truncations of the same HN factors. They define the required consistent diagram in the inverse-limit Hall group. Its support is exactly the asserted semistability set, including joints: a stable Jordan–Hölder factor supplies a full wall cone through every semistable weight, while the finite subobject inequalities preserve semistability on that cone's faces. Nonempty Hall labels remain nonzero by pullback to a geometric semistable object, which sends their class to 1. [F2, step 1.1, algebra]

3.1 Put ε(d,θ)=((t²−1)log1_ss(θ))_d. The actual framed-object/BCH argument of [F2] proves these classes regular, so the completed Poisson homomorphism is applicable to every wall logarithm. It sends (t²−1)^(−1)ε(d,θ) to $J(d,θ)x^{d}$, where J is its Euler specialization. It preserves all truncated BCH products; hence it preserves consistency and gives exactly $exp(Σ_{θ(d)=0}J(d,θ)x^{d})$ for the integrated wall element. This is the source unweighted potential Euler normalization. No triangulated slicing or unrelated weighted DT integration is inferred. [F1, F2, step 2.1, construct, algebra] ∎
