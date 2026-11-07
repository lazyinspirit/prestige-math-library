---
id: lem-height-additivity-for-globally-generated-line-bundles
kind: lemma
title: "Heights from product sections add exactly"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - thm-absolute-height-is-invariant-under-field-extension
  - thm-line-bundle-sections-define-projective-map
  - thm-segre-line-bundle-external-tensor
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X$ be a projective $K$-scheme, and let $\mathcal L$ and $\mathcal M$ be globally generated invertible sheaves on $X$. Fix finite generating sets $s_0,\ldots,s_r$ of $\mathcal L$ and $t_0,\ldots,t_m$ of $\mathcal M$. For an algebraic point $P\in X(\overline K)$, let $h_s(P)$ and $h_t(P)$ be the absolute logarithmic heights of the projective points defined by these two systems, and let $h_{s\otimes t}(P)$ be the height from the generating system $(s_i\otimes t_j)_{i,j}$ of $\mathcal L\otimes\mathcal M$. Then
$$
h_{s\otimes t}(P)=h_s(P)+h_t(P)
$$
for every $P\in X(\overline K)$.

## Statement references

[[thm-line-bundle-sections-define-projective-map]]

[[thm-segre-line-bundle-external-tensor]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a projective $K$-scheme $X$; two globally generated invertible sheaves with the fixed generating systems in the Statement; and $P\in X(\overline K)$.

[A1] AC is the stated premise of the projective-section and height interfaces used here. ([[def-axiom-of-choice]], [[thm-line-bundle-sections-define-projective-map]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F1] A globally generated invertible sheaf is one with a surjective evaluation map from its finite generating set; such a set defines a morphism to projective space whose pullback of $\mathcal O(1)$ is that sheaf. ([[def-globally-generated-sheaf]], [[def-invertible-sheaf]], [[thm-line-bundle-sections-define-projective-map]])

[F2] The external tensor product on the two projective spaces pulls back along the Segre map as $\mathcal O(1,1)$; its coordinates are all pairwise products of the two coordinate lists. ([[thm-segre-line-bundle-external-tensor]])

[F3] For coordinates in any finite number field of definition, the logarithmic height is the normalized sum of local logarithms of their coordinate maxima. Its value is independent of enlarging that number field. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[thm-absolute-height-is-invariant-under-field-extension]])

## Proof

1.1 Choose a finite extension $E/K$ over which $P$ is rational, and trivialize each line bundle at $P$. Write $a_i=s_i(P)$ and $b_j=t_j(P)$ in the resulting one-dimensional fibers. Global generation gives some $a_i\ne0$ and some $b_j\ne0$, so a tensor section is nonzero at $P$ and the product system generates the tensor fiber. By [F1] and [F2], its projective coordinates are $(a_i b_j)_{i,j}$. [given, A1, F1, F2, choose]

1.2 At every place $w$ of $E$, $\max_{i,j}|a_i b_j|_w=(\max_i|a_i|_w)(\max_j|b_j|_w)$, because the maximum of all pairwise products of two finite lists of nonnegative real numbers is the product of their maxima. Taking logarithms, summing with the normalized local weights, and using [F3] gives $h_{s\otimes t}(P)=h_s(P)+h_t(P)$. The identity is independent of the chosen trivializations because each height is projective. [given, A1, F3, step 1.1, algebra] ∎
