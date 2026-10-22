---
id: lem-signature-additivity-under-gluing
kind: lemma
title: "Signature additivity under gluing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-l2-cellular-duality-and-weak-exactness
  - lem-von-neumann-inertia-and-coisotropic-reduction
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: 'Wolfgang Lück and Thomas Schick, "Various L²-signatures and a topological L²-signature theorem"'
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, closed-manifold L²-signature conventions"
    - title: 'Tim D. Cochran, Kent E. Orr, and Peter Teichner, "Knot concordance, Whitney towers and L²-signatures"'
      url: "https://arxiv.org/pdf/math/9908117"
      locator: "§2.2, ordinary and L²-signature conventions"
---
## Statement

Let W₀ and W₁ be compact oriented smooth 4-manifolds with a common identified boundary M, and let Γ be a discrete group. Suppose coefficient homomorphisms ψ_i:π₁(W_i)→Γ agree on π₁(M), and let X=W₀∪_M(−W₁) be the resulting closed oriented 4-manifold with its glued coefficient map. Then
sign(X)=sign(W₀)−sign(W₁)
and
sign_Γ^(2)(X)=sign_Γ^(2)(W₀,ψ₀)−sign_Γ^(2)(W₁,ψ₁).

## Statement references

[[def-integral-half-solutions-strebel-and-l2-signatures|Ordinary and von Neumann signatures]]

[[def-signature-of-a-closed-oriented-four-k-manifold|Signature of the closed glued manifold]]

[Lück–Schick, §1](https://arxiv.org/pdf/math/0209161)

[COT, §2.2](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** The manifolds, common entire boundary, matching coefficient maps and gluing in the Statement. The full AC convention is the standing convention of the signature definition.

[F1] Signatures are positive-minus-negative spectral traces of the coefficient intersection forms; orientation reversal negates these forms. [[def-integral-half-solutions-strebel-and-l2-signatures]] [[def-signature-of-a-closed-oriented-four-k-manifold]]

[F2] Finite cellular reduced homology satisfies weak pair and Mayer–Vietoris exactness, bounded Poincaré–Lefschetz duality, and the cap boundary and intersection identities. The closed middle intersection operator is invertible. [[lem-l2-cellular-duality-and-weak-exactness]]

[F3] Dense injective pullback preserves inertia, kernels contribute zero, and restriction to a closed coisotropic submodule of a nondegenerate finite Hilbert-module form preserves signature. [[lem-von-neumann-inertia-and-coisotropic-reduction]]

## Proof

**Given:** The data in the Statement. All homology below is completed reduced coefficient homology in finite Hilbert modules, the Hilbert completions of the algebraic projective reduced parts in [F2]; the natural algebraic-to-Hilbert maps are used only as dense maps. Write $H=H_2^{(2)}(X)$.

1.1 Van Kampen gives the glued homomorphism to $\Gamma$ from the matching restrictions. Let $j:H_2^{(2)}(W_0)\oplus H_2^{(2)}(W_1)\to H$ be the sum of the inclusion maps, and let $V=\overline{\operatorname{im}j}$. The closed intersection operator $J$ on $H$ is invertible by [F2]. Under Poincaré duality, the annihilator $V^{\perp_J}$ identifies with the kernel of restriction $H^2_{(2)}(X)\to H^2_{(2)}(W_0)\oplus H^2_{(2)}(W_1)$: evaluation on each piece is exactly the pairing with its inclusion in $X$. [given, F2, construct, algebra]

2.1 Weak cohomology Mayer–Vietoris exactness identifies that kernel with the closure of the image of the connecting map $H^1_{(2)}(M)\to H^2_{(2)}(X)$. Cap boundary naturality in [F2] identifies this connecting map, up to its harmless orientation sign, with $H_2^{(2)}(M)\to H_2^{(2)}(X)$ after cap duality on $M$ and $X$. Cap duality is a bounded isomorphism, so it preserves these closures. Hence $V^{\perp_J}$ is the closure of this last image. The inclusion $M\to X$ factors through either piece, so this image lies in $V$. Thus $V$ is coisotropic. [F2, step 1.1, algebra]

2.2 The pullback form $j^*Jj$ is the orthogonal sum of the intersection forms on $W_0$ and $-W_1$. Indeed the same-piece term is the absolute-to-relative intersection pairing by cap naturality; cross terms vanish because representative cellular chains can be pushed into the respective collar interiors, which are disjoint. This can be checked on the finite dual cellular chains before completion: each intersection contribution comes from a cell and its dual in the same piece, with its given group-ring coefficient, and there are no cross-piece intersections. The identity extends by boundedness to the reduced homology in [F2]. Reversing orientation on $W_1$ negates its form. [F1, F2, step 1.1, algebra]

3.1 Discard $\ker j$; it is a null summand of the pullback form. The restriction of $j$ to its Hilbert orthogonal complement is injective with dense image in $V$. By [F3] its pullback has the signature of the restricted form on $V$. By the coisotropic conclusion of step 2.1, this is the signature of $J$ on $H$. Step 2.2 and additivity of spectral trace on an orthogonal sum give the asserted $L^2$ signature equality. [F3, step 2.1, step 2.2, algebra]

4.1 Apply the same argument to the trivial coefficient group. Reduced homology is ordinary finite-dimensional complex homology; its form is the complexification of the real intersection form. Complexification preserves both real inertia dimensions, as in [F3]. The resulting equality is the asserted ordinary signature equality. [F1, F3, step 3.1, algebra] ∎
