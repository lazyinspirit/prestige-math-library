---
id: lem-cft-sphere-stress-tensor-ward-identity
kind: lemma
title: Stress-tensor Ward identity on the sphere
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-fixed-coordinate-sphere-virasoro-block-family
  - def-virasoro-algebra
dependency_roles:
  def-cft-fixed-coordinate-sphere-virasoro-block-family: mathematical-premise
  def-virasoro-algebra: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Belavin, Polyakov, and Zamolodchikov, Infinite Conformal Symmetry in Two-Dimensional Quantum Field Theory
      url: https://qft.itp.ac.ru/BPZ.pdf
      locator: §2, stress-tensor Ward identity; Appendix A, projective Ward identities.
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: §4.5 and §5.2, primary-field Ward identities and null-vector equations.
---

## Statement

For a fixed-coordinate sphere Virasoro block family of def-cft-fixed-coordinate-sphere-virasoro-block-family, the stress-tensor insertion is
$
G(w)=\sum_{j=1}^n\left(\frac{h_j}{(w-z_j)^2}+\frac{1}{w-z_j}\partial_{z_j}\right)F(\mathbf z).
$
The constant Laurent coefficient of this expression at $w=z_i$, which is the block with $L_{-2}$ inserted at slot $i$, equals
$
\sum_{j\ne i}\left(\frac{h_j}{(z_i-z_j)^2}+\frac{1}{z_i-z_j}\partial_{z_j}\right)F(\mathbf z).
$

## Statement references

[[def-cft-fixed-coordinate-sphere-virasoro-block-family]]

## Facts & Assumptions

**Given:** Distinct $z_j$, primary weights $h_j$, and a block family with stress insertion $G$ as in [[def-cft-fixed-coordinate-sphere-virasoro-block-family]].

[F1] [[def-cft-fixed-coordinate-sphere-virasoro-block-family]] supplies functionals $\Phi_{\mathbf z}$ on the algebraic tensor product, with $F(\mathbf z)$ their evaluation on the chosen primary tuple; the Laurent coefficient of $G_{\mathbf z}$ at $t_i^0$ is $\Phi_{\mathbf z}(v_1\otimes\cdots\otimes L_{-2}v_i\otimes\cdots\otimes v_n)$. It also supplies the stated primary principal parts, absence of other finite poles, and $O(w^{-4})$ behavior at infinity.

[F2] The same definition supplies the three global Ward identities for translations, dilations, and special conformal transformations.

[F3] [[def-cft-fixed-coordinate-sphere-virasoro-block-family]] adopts the local Laurent indexing $T(t)=\sum_m L_m t^{-m-2}$ for its stress-tensor matrix element. Thus its constant coefficient at $t=0$ is the block with $L_{-2}$ inserted, as specified in [F1].

## Proof

1.1 Set $R(w)=\sum_j(h_jF(w-z_j)^{-2}+(\partial_{z_j}F)(w-z_j)^{-1})$. By [F1], $G-R$ has no principal part at any finite $z_j$, hence is entire on $\mathbb C$. Expanding at infinity gives
$
R(w)=\frac{\sum_j\partial_{z_j}F}{w}
+\frac{\sum_j(z_j\partial_{z_j}F+h_jF)}{w^2}
+\frac{\sum_j(z_j^2\partial_{z_j}F+2z_jh_jF)}{w^3}
+O(w^{-4}).
$
Each of the first three coefficients vanishes by [F2], so $R(w)=O(w^{-4})$. Also $G(w)=O(w^{-4})$ by [F1]. Thus the entire function $G-R$ tends to zero at infinity and is identically zero by Liouville's theorem. [F1, F2, algebra]

2.1 Around $w=z_i$, the $j=i$ terms of $R$ have only powers $(w-z_i)^{-2}$ and $(w-z_i)^{-1}$, so contribute no constant Laurent coefficient. Every $j\ne i$ term is analytic at $z_i$, with constant coefficient $h_jF/(z_i-z_j)^2+(\partial_{z_j}F)/(z_i-z_j)$. By [F3], the constant coefficient of $G$ is the $L_{-2}$-insertion. Summing these terms proves the second formula. [F1, F3, step 1.1, algebra] ∎
