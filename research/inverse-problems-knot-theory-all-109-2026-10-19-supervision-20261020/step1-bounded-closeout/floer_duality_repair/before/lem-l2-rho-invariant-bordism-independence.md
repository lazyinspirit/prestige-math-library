---
id: lem-l2-rho-invariant-bordism-independence
kind: lemma
title: "Bordism independence of the L²-signature defect"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-signature-additivity-under-gluing
  - thm-l2-signature-theorem-for-closed-four-manifolds
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück and Thomas Schick, “Various L²-signatures and a topological L²-signature theorem”"
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, Theorem 1.3; signature defect gluing"
---

## Statement

Let M be a closed oriented 3-manifold, Γ a discrete group, and φ:π₁(M)→Γ. If (W₀,ψ₀) and (W₁,ψ₁) are compact oriented 4-manifolds with boundary M over which φ extends, then sign_Γ^(2)(W₀,ψ₀)−sign(W₀)=sign_Γ^(2)(W₁,ψ₁)−sign(W₁). Hence the signature defect depends only on (M,φ).

## Statement references

[Lück–Schick, Theorem 1.3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** Full AC as in the coefficient Definition, the common boundary representation, and the extending bounds. First assume these bounds are smooth; the final paragraph treats the literal larger category of the Statement.

[A1] The coefficient Definition retains full AC. [[def-integral-half-solutions-strebel-and-l2-signatures]], [[def-axiom-of-choice]]

[F1] The signature defect is the difference of the regular-coefficient von Neumann and ordinary signatures. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] Whole-boundary gluing preserves both ordinary and regular-coefficient signature additivity on actual compact collared manifolds. [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]]

[F3] For closed smooth four-manifolds the regular-coefficient signature equals the ordinary signature. The smooth group-signature theorem also permits based paths, nononto maps and arbitrary targets. [[thm-l2-signature-theorem-for-closed-four-manifolds]], [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

## Proof

1.1 Suppose $W_0,W_1$ are smooth. Glue $W_0$ to $-W_1$ along their boundary collars to obtain a closed smooth four-manifold $X$. The extending homomorphisms agree on the based boundary representation; van Kampen therefore gives the coefficient map on $X$. If paths were used to identify boundary basepoints, send the connecting generators to their stipulated path elements, as in [F3]. By [F2], $$\operatorname{sign}(X)=\operatorname{sign}(W_0)-\operatorname{sign}(W_1),\qquad\operatorname{sign}^{(2)}_\Gamma(X)=\operatorname{sign}^{(2)}_\Gamma(W_0,\psi_0)-\operatorname{sign}^{(2)}_\Gamma(W_1,\psi_1).$$ Apply the closed smooth equality in [F3] and rearrange these two identities. The two defects are equal, proving the entire smooth-bound conclusion for the same target of the Statement. [A1, F1, F2, F3, given, construct, algebra]

2.1 The Statement does not explicitly require smooth bounds, so its full TOP reading is retained as an additional obligation. For nonsmooth TOP bounds the gluing in step 1.1 is still legitimate and [F2] still gives both additivity identities, but the resulting closed TOP four-manifold is outside the explicit smooth hypothesis of [F3]. An actual coefficient-preserving TOP bordism realization or another full TOP closed-index proof is still missing. Thus the smooth independence is proved without a conditional analytic premise, while the full nonsmooth TOP comparison remains held; the smooth result is not promoted to it. [F2, F3, step 1.1]
