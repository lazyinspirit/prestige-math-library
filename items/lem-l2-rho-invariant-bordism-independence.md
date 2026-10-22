---
id: lem-l2-rho-invariant-bordism-independence
kind: lemma
title: "Bordism independence of the L²-signature defect"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-signature-additivity-under-gluing
  - thm-l2-signature-theorem-for-closed-four-manifolds
  - def-axiom-of-choice
  - thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded
  - thm-topological-finite-projective-l2-duality-and-boundary-gluing
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
    - title: "Wolfgang Lück and Thomas Schick, “Various L²-signatures and a topological L²-signature theorem”"
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, Theorem 1.3; signature defect gluing"
---

## Statement

Assume full AC. Let M be a closed oriented 3-manifold, Γ a discrete group, and φ:π₁(M)→Γ. If (W₀,ψ₀) and (W₁,ψ₁) are compact oriented 4-manifolds with boundary M over which φ extends, then sign_Γ^(2)(W₀,ψ₀)−sign(W₀)=sign_Γ^(2)(W₁,ψ₁)−sign(W₁). Hence the signature defect depends only on (M,φ).

## Statement references

[Lück–Schick, Theorem 1.3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** Full AC as in the coefficient Definition, the common boundary representation, and the extending compact oriented collared TOP bounds. Smooth bounds are a special case.

[A1] The coefficient Definition retains full AC. [[def-integral-half-solutions-strebel-and-l2-signatures]], [[def-axiom-of-choice]]

[F1] The signature defect is the difference of the regular-coefficient von Neumann and ordinary signatures. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] Whole-boundary gluing preserves both ordinary and regular-coefficient signature additivity on actual compact collared manifolds. [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]]

[F3] For closed smooth four-manifolds the regular-coefficient signature equals the ordinary signature. The smooth group-signature theorem also permits based paths, nononto maps and arbitrary targets. [[thm-l2-signature-theorem-for-closed-four-manifolds]], [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

[F4] **External TOP input, under the run-specific boundary in CLAUDE.md §12:** for a normal covering of a closed connected oriented topological manifold of dimension $4k$, its homological $L^2$ signature equals its ordinary signature. This includes dimension four; no smoothing of that manifold is required. Apply the normal-cover theorem to the coefficient image and use regular-module subgroup induction for a nononto target. This is imported, not reconstructed here. The actual v3 introduction and §1 opening were read to match its dimension-four TOP and normal-cover hypotheses; no complete reconstruction of its analytic proof is claimed. [Lück–Schick, *Various $L^2$-signatures and a topological $L^2$-signature theorem*, Theorem0.2 and §3, arXiv v3](https://arxiv.org/pdf/math/0209161v3).

## Proof

1.1 Suppose $W_0,W_1$ are smooth. Glue $W_0$ to $-W_1$ along their boundary collars to obtain a closed smooth four-manifold $X$. The extending homomorphisms agree on the based boundary representation; van Kampen therefore gives the coefficient map on $X$. If paths were used to identify boundary basepoints, send the connecting generators to their stipulated path elements, as in [F3]. By [F2], $$\operatorname{sign}(X)=\operatorname{sign}(W_0)-\operatorname{sign}(W_1),\qquad\operatorname{sign}^{(2)}_\Gamma(X)=\operatorname{sign}^{(2)}_\Gamma(W_0,\psi_0)-\operatorname{sign}^{(2)}_\Gamma(W_1,\psi_1).$$ Apply the closed smooth equality in [F3] and rearrange these two identities. The two defects are equal, proving the entire smooth-bound conclusion for the same target of the Statement. [A1, F1, F2, F3, given, construct, algebra]

2.1 For the full TOP Statement glue the actual collared bounds to obtain the closed oriented TOP four-manifold $X=W_0\cup_M(-W_1)$, with the extending coefficient map supplied by van Kampen exactly as in step1.1. The local theorem [F2] supplies both signature-additivity identities on this actual nonsmooth manifold. The external TOP equality [F4] gives $\operatorname{sign}^{(2)}_\Gamma(X)=\operatorname{sign}(X)$. Subtract the ordinary identity from the group-signature identity to obtain equality of the two defects. Thus all supplied bounds in the Statement give the same value. Only the closed TOP equality is external; gluing and the resulting algebra are local, and no smooth-only equality is applied to a nonsmooth bound. [A1, F1, F2, F4, step 1.1, construct, algebra] ∎
