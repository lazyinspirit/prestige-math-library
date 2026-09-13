---
id: cor-connected-lie-subgroups-with-the-same-lie-algebra-are-equal-as-immersed-subgroups
kind: corollary
title: Connected Lie subgroups with the same Lie algebra are equal as immersed subgroups
status: published
origin: pipeline
deps: [thm-lie-subgroup-lie-subalgebra-correspondence]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Uniqueness clause of Theorem 19.26, printed pages 506–507
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Two connected immersed Lie subgroups of a Lie
group $G$ with the same tangent Lie subalgebra have the same image and the
same intrinsic immersed-subgroup structure: there is a unique Lie-group
isomorphism between them commuting with their inclusions into $G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and connected immersed Lie subgroups
$i_1:H_1\to G$ and $i_2:H_2\to G$ with the same tangent image
$\mathfrak h\subseteq\operatorname{Lie}(G)$.

[F1] A Lie subalgebra integrates to a connected immersed subgroup uniquely up
to the unique isomorphism over $G$.
[[thm-lie-subgroup-lie-subalgebra-correspondence]].

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the common subalgebra $\mathfrak h$. Its uniqueness clause supplies a Lie-group isomorphism $\phi:H_1\to H_2$ satisfying $i_2\circ\phi=i_1$. [F1, given]

2.1 The equality $i_2\circ\phi=i_1$ gives $i_1(H_1)=i_2(H_2)$ as subsets of $G$. Because $\phi$ and $\phi^{-1}$ are smooth, they identify the intrinsic manifold structures, not merely the underlying image. The zero-dimensional and full-dimensional cases are included, and the stated countable-choice assumption is exactly the one inherited from [F1]. [F1, step 1.1, algebra] ∎
